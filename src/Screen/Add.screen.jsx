import {useState} from "react";
import {Container, Form, Table, Col} from "react-bootstrap";
import Moment from "react-moment";
import {useNavigate} from "react-router-dom";
import Boardservice from "../Service/Boardservice";

const Add = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [validated, setValidated] = useState(false);

  const cancleBtn = () => {
    const result = window.confirm("정말로 취소하시겠습니까?\n\n 취소시 작성하던 글은 저장되지 않습니다.");
    if (result) navigate("/board");
  };

  const sendData = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      const data = {
        title: title,
        text: text,
      };
      setValidated(true);
      await Boardservice.addOne(data);
      navigate("/board");
    }
  };

  return (
    <Container className="m-4">
      <button className="btn btn-outline-warning m-1" onClick={cancleBtn}>
        취소
      </button>
      <button className="btn btn-outline-info m-1" disabled={!title || !text ? true : false} onClick={sendData}>
        작성
      </button>
      <Form validated={validated}>
        <Table striped bordered className="table m-2">
          <thead>
            <tr>
              <th style={{width: 20 + "%"}} className="text-center"></th>
              <th>신규(insert)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-center">제목</th>
              <td>
                <Form.Group as={Col}>
                  <Form.Control placeholder="제목을 입력하세요" maxLength={256} onChange={(e) => setTitle(e.target.value)} required />
                  <Form.Control.Feedback type="invalid">제목을 입력해 주세요.</Form.Control.Feedback>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <th className="text-center">작성일</th>
              <td>
                <Moment date={Date.now()} format="YYYY-MM-DD" />
              </td>
            </tr>
            <tr>
              <th className="text-center">방문자수</th>
              <td>0</td>
            </tr>
            <tr>
              <th className="text-center">내용</th>
              <td>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={5} style={{resize: "none"}} onChange={(e) => setText(e.target.value)} required />
                </Form.Group>
              </td>
            </tr>
          </tbody>
        </Table>
      </Form>
    </Container>
  );
};

export default Add;

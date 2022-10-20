import {useEffect, useState} from "react";
import {Container, Form, Table, Col} from "react-bootstrap";
import Moment from "react-moment";
import {useNavigate, useParams} from "react-router-dom";
import Boardservice from "../Service/Boardservice";

const Edit = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState();
  const [visit, setVisit] = useState(0);

  useEffect(() => {
    Boardservice.viewforEdit(Number(id)).then((res) => {
      setTitle(res.title);
      setText(res.text);
      setDate(res.date);
      setVisit(res.visit);
    });
  }, []);

  const cancleBtn = () => {
    const result = window.confirm("정말로 취소하시겠습니까?\n\n 취소시 작성하던 글은 저장되지 않습니다.");
    if (result) navigate(`/view/${id}`);
  };

  return (
    <Container className="m-4">
      <button className="btn btn-outline-warning m-1" onClick={cancleBtn}>
        취소
      </button>
      <button className="btn btn-outline-info m-1">작성</button>
      <Form>
        <Table striped bordered className="table m-2">
          <thead>
            <tr>
              <th style={{width: 20 + "%"}} className="text-center">
                번호
              </th>
              <th>{id} (update)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-center">제목</th>
              <td>
                <Form.Group as={Col}>
                  <Form.Control defaultValue={title} maxLength={256} />
                </Form.Group>
              </td>
            </tr>
            <tr>
              <th className="text-center">작성일</th>
              <td>
                <Moment date={date} format="YYYY-MM-DD" />
              </td>
            </tr>
            <tr>
              <th className="text-center">방문자수</th>
              <td>{visit}</td>
            </tr>
            <tr>
              <th className="text-center">내용</th>
              <td>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={5} style={{resize: "none"}} defaultValue={text} />
                </Form.Group>
              </td>
            </tr>
          </tbody>
        </Table>
      </Form>
    </Container>
  );
};

export default Edit;

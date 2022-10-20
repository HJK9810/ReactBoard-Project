import {Container, Form, Table, Col} from "react-bootstrap";
import Moment from "react-moment";
import {useNavigate} from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  return (
    <Container className="m-4">
      <button className="btn btn-outline-warning m-1" onClick={(e) => navigate("/board")}>
        취소
      </button>
      <button className="btn btn-outline-info m-1">작성</button>
      <Form>
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
                  <Form.Control placeholder="제목을 입력하세요" maxLength={256} />
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
                  <Form.Control as="textarea" rows={5} style={{resize: "none"}} />
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

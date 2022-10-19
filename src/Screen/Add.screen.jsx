import {Container, Form, Table, Col} from "react-bootstrap";
import Moment from "react-moment";

const Add = () => {
  return (
    <Container>
      <Form>
        <Table striped bordered className="table m-4">
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

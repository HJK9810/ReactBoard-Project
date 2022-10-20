import {useEffect, useState} from "react";
import {Container, Form, Table, Col} from "react-bootstrap";
import Moment from "react-moment";
import {useNavigate, useParams} from "react-router-dom";
import Boardservice from "../Service/Boardservice";

const Edit = () => {
  const {id} = useParams;
  const {post, setPost} = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Boardservice.findOne(Number(id)).then((res) => {
      setPost(res);
      console.log(res);
    });
  }, [post]);

  return (
    <Container className="m-4">
      <button className="btn btn-outline-warning m-1" onClick={(e) => navigate(`/view/${id}`)}>
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
              <th>{id} 수정</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-center">제목</th>
              <td>
                <Form.Group as={Col}>
                  <Form.Control defaultValue={post.title} maxLength={256} />
                </Form.Group>
              </td>
            </tr>
            <tr>
              <th className="text-center">작성일</th>
              <td>
                <Moment date={post.date} format="YYYY-MM-DD" />
              </td>
            </tr>
            <tr>
              <th className="text-center">방문자수</th>
              <td>{post.viewCnt}</td>
            </tr>
            <tr>
              <th className="text-center">내용</th>
              <td>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={5} style={{resize: "none"}} defaultValue={post.text} />
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

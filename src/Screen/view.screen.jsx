import {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Boardservice from "../Service/Boardservice";
import Moment from "react-moment";

const View = () => {
  const [post, setPost] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    console.log(id);
    Boardservice.findOne(Number(id)).then((res) => {
      setPost(res);
    });
  }, [post]);

  return (
    <Container>
      <Table striped bordered className="table m-4">
        <thead>
          <tr>
            <th style={{width: 20 + "%"}} className="text-center"></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-center">제목</th>
            <td>{post.title}</td>
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
            <td>{post.text}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default View;

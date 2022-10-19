import Boardservice from "../Service/Boardservice";
import React, {useEffect, useState} from "react";
import {Container, Pagination, Table} from "react-bootstrap";
import Moment from "react-moment";

const Board = () => {
  const [post, setPost] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(0);

  useEffect(() => {
    Boardservice.findAll(page, 10).then((res) => {
      setPost(res.content);
      setPagination({number: res.number, totalPages: res.totalPages, first: res.first, last: res.last});
    });
  }, [page]);

  return (
    <Container>
      <Table striped bordered hover className="table m-4">
        <thead>
          <tr className="text-center">
            <th style={{width: 10 + "%"}}>#</th>
            <th>title</th>
            <th style={{width: 20 + "%"}}>Date</th>
          </tr>
        </thead>
        <tbody>
          {post.map((el) => {
            return (
              <tr key={el.id} className="text-center">
                <td>{el.id}</td>
                <td className="list-group-item d-flex justify-content-between align-items-center">
                  {el.title}
                  <span className="badge bg-success rounded-pill">{el.viewCnt}</span>
                </td>
                <td>
                  <Moment date={el.date} format="YYYY-MM-DD" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Board;

import Boardservice from "../Service/Boardservice";
import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import Moment from "react-moment";
import {Link, useNavigate} from "react-router-dom";
import Pagination from "./Pagination.screen";

const Board = () => {
  const [post, setPost] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    Boardservice.findAll(page, 10).then((res) => setPost(res));
    Boardservice.forPagination(page, 10).then((res) => setPagination({number: res.number, totalPages: res.totalPages, first: res.first, last: res.last}));
  }, [page]);

  return (
    <Container className="m-4">
      <button className="btn btn-outline-secondary m-1" onClick={(e) => navigate("/add")}>
        신규
      </button>
      <Table striped bordered hover className="table m-2">
        <thead>
          <tr className="text-center">
            <th style={{width: 10 + "%"}}>#</th>
            <th>title</th>
            <th style={{width: 15 + "%"}}>작성자</th>
            <th style={{width: 15 + "%"}}>Date</th>
          </tr>
        </thead>
        <tbody>
          {post.map((el) => {
            return (
              <tr key={el.id} className="text-center">
                <td>{el.id}</td>
                <td className="list-group-item d-flex justify-content-between align-items-center">
                  <Link to={`/view/${el.id}`}>{el.title}</Link>
                  <span className="badge bg-success rounded-pill">{el.viewCnt}</span>
                </td>
                <td>{el.editer}</td>
                <td>
                  <Moment date={el.date} format="YYYY-MM-DD" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Pagination pagination={pagination} setPage={(p) => setPage(p)} />
      </div>
    </Container>
  );
};

export default Board;

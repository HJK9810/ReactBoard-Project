import Axios from "../Axios";

class BoardService {
  findAll(page = 0, size = 10) {
    return Axios.get(`/api/list?page=${page}&size=${size}&sort=ID,desc`).then((res) => res.data);
  }

  findOne(id) {
    return Axios.get(`/api/one/${id}`).then((res) => res.data);
  }
}

export default new BoardService();

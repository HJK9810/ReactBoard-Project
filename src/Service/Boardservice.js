import Axios from "../Axios";

class BoardService {
  findAll(page = 0, size = 10) {
    return Axios.get(`/api/list?page=${page}&size=${size}&sort=ID,desc`).then((res) => res.data);
  }

  findOne(id) {
    return Axios.get(`/api/one/${id}`).then((res) => res.data);
  }

  async addOne(post) {
    return await Axios.post("/api/add", post);
  }

  viewforEdit(id) {
    return Axios.get(`/api/edit/${id}`).then((res) => res.data);
  }

  async update(id, post) {
    return await Axios.post(`/api/edit/${id}`, post);
  }

  async delete(id) {
    return await Axios.delete(`/api/del/${id}`);
  }
}

export default new BoardService();

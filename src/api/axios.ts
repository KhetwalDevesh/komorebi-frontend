import Axios from "axios";

const axios = Axios.create({
	baseURL: "https://komorebi-ecom-backend.onrender.com",
});

export default axios;

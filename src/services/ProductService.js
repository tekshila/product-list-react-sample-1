import axios from "axios";

const PRODUCT_SVC_URL = "http://localhost:8080/api/v1/products"

class ProductService {

    getProducts() {
        axios.get(PRODUCT_SVC_URL).then(response => {
            console.log(response.data)
        })
    }

}

export default new ProductService()
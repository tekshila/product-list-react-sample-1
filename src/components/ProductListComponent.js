import React from 'react'
import ProductService from "../services/ProductService";
import axios from "axios";


class ProductListComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        // ProductService.getProducts()
        axios.get("http://localhost:8080/api/v1/products").then(
            response => {
                this.setState({products : response.data})
            }
        )
    }

    render() {
        return (
            <div className="page-header text-center">
                <h1>Product List - Sample React Spring Boot App</h1>
            <table className="table table-bordered alert-danger" width="60">
                <thead>
                 <tr>
                     <td>Product ID</td>
                     <td>Product Name</td>
                     <td>Product Type</td>
                 </tr>
                </thead>
                {
                    this.state.products.map(
                        p =>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.name}</td>
                            </tr>

                    )
                }
            </table>
            </div>
        )
    }

}

export default ProductListComponent
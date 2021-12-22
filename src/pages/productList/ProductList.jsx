import React, {useState} from 'react'
import "./productlist.css";
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {ProductRows} from '../../dummyData';
import {Link} from 'react-router-dom'


const ProductList = () => {
    const [data, setData] = useState(ProductRows)
    
    const handleDelete=(id)=>{
        setData(data.filter((item) => item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
          field: 'product',
          headerName: 'Product',
          width: 150,
          renderCell: (params)=>{
              return (
                <div className="productListItem">
                  <img className="productListImg" src={params.row.img} alt=""/>
                  {params.row.name}
              </div>
              ) 
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
          
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 180,
            
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params)=>{
            return (
                <>
                <Link to={"/product/"+params.row.id}>
                <button className="ProductListEdit">Edit</button>
                </Link>
                <DeleteOutline 
                    className="productListDelete"
                    onClick={()=>handleDelete(params.row.id)}
                    />
                </>
            );
          }
          
        },
        
      ];
    return (
        <div className="productList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
      />
            
        </div>
    )
}

export default ProductList

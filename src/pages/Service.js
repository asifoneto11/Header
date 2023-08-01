import React from 'react'
import '../pages/service.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getLorem } from '../Store/ShoopingSlice'

const getData = () => {
    let myLocalData = localStorage.getItem('data')

    if (myLocalData) {
        return myLocalData = JSON.parse(localStorage.getItem('data'))
    } else {
        return []
    }
}

const Service = () => {

    const [myLocalData, setMyLocalData] = useState(getData())


    const [newPro, setnewPro] = useState({
        title: '',
        price: '',
        description: '',
        category: ''
    })

    // const { title,
    //     price,
    //     description,
    //     category } = newPro


    const handleSubmit = () => {

        setMyLocalData(prevData => {
            console.log(prevData.length);
            if (prevData.length < 0) {
                return [
                    newPro
                ]
            }
            else {
                return [
                    ...prevData, newPro
                ]
            }

        })

    }

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(myLocalData))
    }, [myLocalData])


    console.log(myLocalData, 'there is our data');

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLorem())
    }, [dispatch])
    const { data } = useSelector((state) => state.lorem);





    const hadleChange = (e) => {
        const { name, value } = e.target
        setnewPro({
            ...newPro,
            [name]: value,
        });
    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // const data = await axios.post('https://fakestoreapi.com/products', {
    //     //     title: newPro.title,
    //     //     price: newPro.price,
    //     //     description: newPro.description,
    //     //     image: 'https://i.pravatar.cc',
    //     //     category: newPro.category,

    //     // })
    //     // try {

    //     //     console.log("new data " + JSON.stringify(data.data));
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }

    //     const list = localStorage.getItem('data')

    //     let str = JSON.stringify(newPro);
    //     if (list) {
    //         alert('we are here')
    //         localStorage.setItem('data', [list, str])
    //         setMyLocalData([list, str])
    //         setnewPro({
    //             title: '',
    //             price: '',
    //             description: '',
    //             category: ''
    //         })
    //     }
    //     else {
    //         localStorage.setItem('data', str)
    //         setnewPro({
    //             title: '',
    //             price: '',
    //             description: '',
    //             category: ''
    //         })
    //     }





    // }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 mt-5'>
                    <div className='form'>
                        <h1 className='text-center'>Add new products</h1>
                        <label>Id</label>
                        <input type='number' placeholder='Enter your id' name='id' value={newPro.id} onChange={hadleChange} />
                        <label>Title</label>
                        <input type='text' placeholder='Enter your Title' name='title' value={newPro.title} onChange={hadleChange} />
                        <label>price</label>
                        <input type='number' placeholder='Enter your Price' name='price' value={newPro.price} onChange={hadleChange} />
                        <label>Description</label>
                        <input type='text' placeholder='Enter your discription' name='description' value={newPro.description} onChange={hadleChange} />
                        <div className='mb-3'>
                            <label>Select category <span>*</span></label>
                            <select onChange={hadleChange} name='category' className="form-select mt-2" aria-label="Default select example">
                                <option select='true'>Open this select menu</option>
                                <option value='Man'>Man</option>
                                <option value='Women'>Women</option>
                                <option value='Children'>Children</option>
                                <option value='Shoese'>Shoese</option>
                                <option value='Shirts'>Shirts</option>
                            </select>
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                <div className='col-lg-12 col-sm-12 col-md-12 mt-5 text-center'>
                    <h1>products list</h1>
                    {myLocalData.length === 0 ? <h1>No item added</h1> :
                        <table className='table border'>
                            <thead className='border'>
                                <th>title</th>
                                <th>price</th>
                                <th>description</th>
                                <th>category</th>
                            </thead>
                            <tbody>
                                {myLocalData.map((ele, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{ele.title}</td>
                                            <td>{ele.price}</td>
                                            <td>{ele.description}</td>
                                            <td>{ele.category}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default Service
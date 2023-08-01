import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getLorem } from '../Store/ShoopingSlice';
import Card from '../Card/card';
import '../Card/card.css';


const Home = () => {



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLorem())
    }, [dispatch])
    const { data } = useSelector((state) => state.lorem);



    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('data'));

    //     if (items) {
    //         setItems([items]);
    //     }
    // }, [items]);
    // console.log('items =>>>>>>>>>>', items);
    return (
        <section className='Home_page mt-5'>
            <div className='container text-center justify-content-center'>
                <div className='row'>
                    {
                        data.map((ele, ind) => {
                            return (
                                <Card
                                    key={ind}
                                    image={ele.image}
                                    category={ele.category}
                                    price={ele.price}
                                    title={ele.title}
                                    description={ele.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Home
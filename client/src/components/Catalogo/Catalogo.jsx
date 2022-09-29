import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from "../../redux/actions/ProductsActions.js"
import Pager from '../Paginado/Pager.jsx'
import Card from '../Cards/Cards.jsx'
import { Link } from "react-router-dom";
import SearchBar from '../Searchbar/Searchbar.jsx'
import CategoryFilter from '../Filter/CategoryFilter.jsx'



function Catalogo() {

    const productos = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1);
    const handlePage = (number) => {
        setCurrentPage(number);
    };
    const videosPerPage = 9,
        indexOfLastVideo = currentPage * videosPerPage,
        indexOfFirstVideo = indexOfLastVideo - videosPerPage,
        currentProducts = productos.slice(indexOfFirstVideo, indexOfLastVideo);

    return (
        <>
            <Pager
                currentPage={currentPage}
                pageHandler={handlePage}
                itemsPerPage={videosPerPage}
                totalItems={productos.length}
            />
            <SearchBar />
             <CategoryFilter
            setCurrentPage= {setCurrentPage}
            /> 
            {currentProducts &&
                currentProducts
                    .sort((a, b) => {
                        const aDate = new Date(a.createdAt);
                        const bDate = new Date(b.createdAt);
                        return aDate - bDate;
                    })
                    .map((video) => {
                        { var categoria = video.categories ? categoria = video.categories.map((e) => e.name) : null }
                        return (
                            <>

                                <Link className="c__fav-container" key={video.id} to={`/products/${video.id}`}>
                                    <Card
                                        id={video.id}
                                        name={video.name}
                                        image={video.image}
                                        price={video.price}
                                        category={video.category}
                                        stock={video.stock}
                                    />
                                </Link>
                                <div className="c__button">
                                </div>
                            </>
                        );
                    })}

        </>
    )
}

export default Catalogo

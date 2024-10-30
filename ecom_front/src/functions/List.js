//ALAN ZHANG -> ADD RATING LATER (add to ProductList.js Line 11)
import "./List.css"
function List({id, title, price, description, category, image}){
    const formatPrice=new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    
    return(
        <div className="list-container">

            <img src={image} list-imageheight={200} width={200} objectFit="contain"/>

            <p className="list-category">{category}</p>
            <h4 className="list-title">{title}</h4>
            <p className="list-description">{description}</p>
            <p>{formatPrice}</p>

            <button className="list-button">Add To Cart</button>
        </div>
    )
}

export default List;
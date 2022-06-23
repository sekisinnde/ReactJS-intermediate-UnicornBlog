import { useEffect, useState } from 'react';
const Galleries = () => {
    const [img, setImg] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => {
                console.log('conn_api')
                return res.json()
            })
            .then((res) => {
                setImg(res)
                console.log('conn_api mise à jour');
            })
    }, [])

    return (
        <div>
            {img.map((image, index) => {
                return (
                    <img key={index} src={image.url} alt={image.title} />
                )
            })
            }
        </div>
    );
}
export default Galleries;
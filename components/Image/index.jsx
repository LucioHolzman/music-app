import styles from '../../styles/Card.module.css'
import Image from 'next/image'
export default function ImageContainer({imageURL, authorName, gradient = false, selectPlayList}) {
    return(
        <div className={`${gradient === true? styles.image: ''} ${selectPlayList === true? styles.imageSelected: ''} w-full h-full`}>
            <Image
            layout='responsive'
            height={1000}
            width={1000}
            src={imageURL} 
            alt={authorName} 
            />
        </div>
    )
}
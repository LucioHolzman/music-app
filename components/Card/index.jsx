import {useState} from 'react';
import ImageContainer from '../Image';
import styles from '../../styles/Card.module.css'


export default function Card({imageURL, authorName = 'Undefined', albumName = 'Undefined', colorBg = 'blue'}) {

    const [playList, setPlayList] = useState(false)
    
    const handleClick = () => {
        setPlayList(true)
    }
    
    return(
        <>
        <div onClick={handleClick} className={`flex ${playList === true ? '': 'overflow-hidden' } min-w-max h-72 shadow-lg p-4 relative bg-gradient-to-t from-${colorBg}-700 via-${colorBg}-400 to-${colorBg}-200`}>
            <div className={`relative bottom-0 w-96 mr-24 h-full`}>
                <ImageContainer
                    selectPlayList={playList}
                    gradient={true}
                    imageURL={imageURL}
                    authorName={authorName}
                />
                <div className="container absolute bottom-4 left-4 text-white">
                    <h1 className="text-lg">{albumName}</h1>
                    <h2 className="font-light text-xs">{authorName}</h2>
                </div>    
            </div>
            <div className={`${styles.scroll} pt-2 pb-2 w-3/6 text-xs md:text-sm right-0 top-0 absolute h-full text-white font-light overflow-x-none overflow-y-scroll`}>
                <ul className="">
                    <li className="border-b p-2 border-gray-100 border-opacity-25 flex justify-between"><p>1.<b className="ml-4">In Too Deep</b></p><p className="ml-4">3:14</p></li>
                    <li className="border-b p-2 border-gray-100 border-opacity-25 flex justify-between"><p>2.<b className="ml-4">Darkness</b></p><p className="ml-4">5:37</p></li>
                    <li className="border-b p-2 border-gray-100 border-opacity-25 flex justify-between"><p>3.<b className="ml-4">Godzilla</b></p><p className="ml-4">3:30</p></li>
                    <li className="border-b p-2 border-gray-100 border-opacity-25 flex justify-between"><p>4.<b className="ml-4">Premonition</b></p><p className="ml-4">2:53</p></li>
                    <li className="max-w border-b p-2 border-gray-100 border-opacity-25 flex justify-between"><p >5.<b className="ml-4 ">You Gon` Learn(feat. Royce Da 5`9" & White Gold)</b></p><p className="ml-4">2:53</p></li>
                    <li className="max-w border-b p-2 border-gray-100 border-opacity-25 flex justify-between"><p >6.<b className="ml-4 ">Those Kinda Nights (feat. Ed Sheeran)</b></p><p className="ml-4">2:57</p></li>
                    <li className="max-w border-b p-2 border-gray-100 border-opacity-25 flex justify-between"><p >7.<b className="ml-4 ">Leaving Heaven (feat. Skylar Grey)</b></p><p className="ml-4">4:25</p></li>
                    <li className="max-w border-b p-2 border-gray-100 border-opacity-25 flex justify-between"><p >8.<b className="ml-4 ">Alfred - Interlude</b></p><p className="ml-4">0:30</p></li>
                </ul>
            </div>
        </div>
        </>
    )
} 
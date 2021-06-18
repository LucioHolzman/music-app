import ImageContainer from '../Image';


export default function DiskCard({albumName = 'Undefined',authorName = 'Undefined', imageURL = ''}) {

    return(
        <>
        <div className="container rounded">
                <div className="relative w-60 h-60 rounded">        
                    <ImageContainer
                        imageURL={imageURL}
                        authorName={authorName}
                    />
                    <div className="backdrop-filter h-2/5 p-8 backdrop-blur-sm border-0 container absolute bottom-0 text-white">
                        <h1 className="text-xl">{albumName}</h1>
                        <h2 className="font-light text-sm">{authorName}</h2>
                    </div>    
                </div>    
        </div>
        </>
    )
} 
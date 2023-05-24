import '../App.tsx'
import { IBook } from '../interfaces/IBook.ts'
import styles from "./viewer.module.css";



interface Props {
    selectedBook: IBook,
    selectedIndex: number
}

function Viewer({selectedBook, selectedIndex}: Props) {

    if (selectedIndex === -1) {
        return <p>No book is selected</p>
    }

    return (
        <div className={styles.viewerContainer}>
            <img 
                src={selectedBook.coverImg} 
                alt={`Cover of ${selectedBook.coverImg}`}
                className={styles.img} 
            />
            <ul>
                <li>Author: {selectedBook.author}</li>
                {selectedBook.coAuthor && <li>Co-author: {selectedBook.coAuthor}</li>}
                {selectedBook.sequels && 
                    <li>
                        <p>Sequels:</p>
                        <ol>
                            {selectedBook.sequels.map(sequel => {
                                return (<li>{sequel}</li>)
                            })}
                        </ol>
                    </li>}
                <li>Rating: {[...Array(selectedBook.rating)].map(() => <>⭐️</>)}</li>
            </ul>
        </div>



    )
}

export default Viewer;

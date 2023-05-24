import '../App.tsx'
import { IBook } from '../interfaces/IBook.ts'
import styles from "./listgroup.module.css";


interface Props {
    setSelectedIndex: Function;
    selectedIndex: number;
    books: IBook[]
}


function ListGroup({setSelectedIndex, selectedIndex, books}: Props) {
     if (books.length === 0) {
        return <p>There are no books to select from</p>;
    };


    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    const getSelectedIndex = (index: number) => {
        return selectedIndex === index ? styles.active: '';
    };

    return (
    <>
        <ul className="list-group">
            { books.map((book, index) => (
                <li 
                    onClick={() => handleClick(index)} 
                    className={`${getSelectedIndex(index)} ${styles.li}`} 
                    key={index}>
                        <img src={book.coverImg} alt={`Cover image of ${book.name}`} />
                        {book.name}
                </li>
            ))}
        </ul>
    </>);
}

export default ListGroup;
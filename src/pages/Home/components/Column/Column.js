import './Column.scss'

function Column({ children }) {
    return (  
        <div className='column'>
            {children}
        </div>
    );
}

export default Column;
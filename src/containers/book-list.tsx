import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';


interface BookListProps {books:Array<any>};
interface BookListState {};

class BookList extends Component<BookListProps,BookListState>{
    renderList(){
            return this.props.books.map(book => {
                return(
                    <li key={book.title} className="list-group-item">{book.title}</li>    
                );
            })
    }
    render(){
        return(
            
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
     return {
         books: state.books
     }
}


export default connect(mapStateToProps)(BookList);
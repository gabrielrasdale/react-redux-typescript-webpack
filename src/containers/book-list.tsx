import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


interface BookListProps {books:Array<any>,selectBook(book):any};
interface BookListState {};

class BookList extends Component<BookListProps,BookListState>{
    renderList(){
            return this.props.books.map(book => {
                return(
                    <li key={book.title} onClick={()=> this.props.selectBook(book)} className="list-group-item">{book.title}</li>    
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

function mapDispatchToProps(dispatch){
     return bindActionCreators({selectBook:selectBook},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(BookList);
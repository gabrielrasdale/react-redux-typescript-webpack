import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

interface ActiveBookProps {book:any};
interface ActiveBookState {};

class BookDetail extends Component<ActiveBookProps,ActiveBookState> {
    render(){
        if(!this.props.book){
            return <div>Select a book to get started...</div>
        }
        return(
            <div>
            <h3>Details For:</h3>
            <div>Title: {this.props.book.title}</div>
            <div>Pages: {this.props.book.pages}</div>
            </div>
            
        )
    }

}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail)
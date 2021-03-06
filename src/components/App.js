import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
// 774935828273-lnv8e70rn9qks6blcpscrb8jg9jkvijt.apps.googleusercontent.com
const App = () => {
    return(
        <div className="ui container">
            
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit" component={StreamEdit} />
                    <Route path="/streams/delete" component={StreamDelete} />
                    <Route path="/streams/show" component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
import React, { Component } from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from  './components/footer/Footer';

class App extends Component {
    render () {
        return (
            <div>
                <header className="app-header">
                    <Header />
                </header>

                <main className="app-wrapper">
                    <Content />
                </main>

                <footer className="app-footer">
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default App;
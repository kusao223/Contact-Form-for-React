import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/index.css';

class page2 extends React.Component {
    render() {
        return (
            <div>
                <div className='main-form'>
                    <div className='header'>
                        <img src={image1} />
                        <p id='text-page2'>お問い合わせの内容が送信されました。</p>
                    </div>
                    <div id='page2'>
                        <p className='fast-navi'>1,ご入力</p>
                        <p className='second-navi'>2,送信完了</p>
                    </div>
                </div>
                <div className='main-text'>
                        <div className='top-page'>
                            <p>お問い合わせありがとうございました。</p>
                            <a href="#">Topページに戻る</a>
                        </div>
                </div>
            </div>
        )
    }
}
export default page2

import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Image/Hexabase-Top.png';
import '../sass/index.css';

class page1 extends React.Component {
    render() {
        const text = "https://www.hexabase.com/privacy-policy/";
        return (
            <div>
                <div className='main-form'>
                    <div className='header'>
                        <img src={image1} />
                        <p>以下のフォームより、お気軽にお問い合わせください。<br />お仕事のご依頼やご相談については、後日担当者よりご返信します。</p>
                    </div>
                    <div id='page1'>
                        <p className='fast-navi'>1,ご入力</p>
                        <p className='second-navi'>2,送信完了</p>
                    </div>
                </div>
                <div className='contact-form'>
                    <form>
                        <div id='top' className='form-grupe'>
                            <div className='label'>
                                <label for="Nicname">氏名</label>
                                <p className='required'>必須</p>
                            </div>
                            <input className='text01' type='text' name='Nicname' required></input>
                        </div>
                        <div className='form-grupe'>
                            <div className='label'>
                                <label for="Furigana">ふりがな</label>
                                <p className='required'>必須</p>
                            </div>
                            <input className='text01' type='text' name='Furigana' required></input>
                        </div>
                        <div className='form-grupe'>
                            <div className='label'>
                                <label for="Company">会社名</label>
                                <p className='required'>必須</p>
                            </div>
                            <input className='text01' type='text' name='Company' required></input>
                        </div>
                        <div className='form-grupe'>
                            <div className='label'>
                                <label for="Email">E-Mail</label>
                                <p className='required'>必須</p>
                            </div>
                            <input className='text01' type='text' name='Email' required></input>
                        </div>
                        <div className='form-grupe'>
                            <div className='label'>
                                <label for="Contact-text">ご相談内容</label>
                                <p className='required'>必須</p>
                            </div>
                            <textarea className='text02' type='text' name='Contact-text' required></textarea>
                        </div>
                        <div className='form-grupe'>
                            <label><input className='chbox' type='checkbox' required></input><a id='text' href={text}>プライバシーポリシー</a>に同意する。</label>
                        </div> 
                        <div className='bottun'>
                            <Link id="button" to={'/page2'}>送信</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default page1
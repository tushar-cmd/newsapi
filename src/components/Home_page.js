import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home_page.css';
import vector from './v2.png';
import coin from './solana.png';
import qrcode from './qr.png';
import dollar from './dollar.png';
import polygon from './polygon.png';
import home from './home.png';
import orders from './orders.png';
import portfolio from './portfolio.png';
import reverse from './reverse.png';
import wallet from './wallet.png';
import new_img from './new_img.png';
import refresh from './refresh.png';

function Home_page() {
    const handlechange = () => {
        console.log("hello");
    }

    return (
        <div className='back3'>
            <div className='row top_bar'>
                <div className='col-1 polygon'>
                    <img src={polygon} onClick={() => handlechange()}></img>
                </div>
                <div className='col-10'></div>
                <div className='col-1 dollar'>
                    <img src={dollar}></img>
                </div>
            </div>
            <div className='upper_box'>
                <div className='row upper_box_text1'>Invite and Earn $10 worth Bitcoin!</div>
                <div className='row upper_box_text2'>Earn $10 worth of BTC whenever your friend makes their first trade on dripp. </div>
                <div className='row upper_box_button'>
                    <div className='col-4 upper_box_button2'>
                    Invite Friends
                    </div>
                    <div className='col-8'></div>
                </div>
            </div>
             <div className='row top_option'>
                 <div className='col-6  top_option_coin'>Top coins</div>
                 <div className='col-6 top_option_news'>Top news</div>
             </div>

             <div className='row'>
                 <div className='col-5 story_heading'>Top Stories</div>
                 <div className='col-6'></div>
                 <div className='col-1'>
                 <img src={refresh}></img>

                 </div>

             </div>
             {/* <div className='back6'> */}
             <div className='row back6'>
                 <div className='col-3 title'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 title'></div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>
                 {/* <div className='col-1'></div> */}

             </div>
             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>


             </div>
             </div>

             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>

             </div>

             <div className='row back6'>
                 <div className='col-9 head_news'>Solana have jumped by 40% over the last two days despite increased threat of hackers.</div>
                 <div className='col-3 new_imgp'>
                 <img src={new_img}></img>

                 </div>

             </div>
            <div className='row bottom_bar'>
                <div className='col-2 home_image'>
                    <img src={home}></img>

                </div>
                <div className='col-2'>
                <img src={orders}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-2 reverse_image'>
                <img src={reverse} className='swap'></img>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                <img src={portfolio}></img>
                </div>
                <div className='col-2 wallet_image'>
                <img src={wallet}></img>
                </div>

            </div>


        </div>
    )
}

export default Home_page;
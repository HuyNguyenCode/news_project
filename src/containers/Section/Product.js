import classNames from 'classnames/bind';
import styles from './Section.scss';
import { useState } from 'react';
import DetailModal from '../../components/DetailModal';

const cx = classNames.bind(styles);

function Product() {
    const [detailModal, showDetailModal] = useState(false);
    const handleModal = () => {
        showDetailModal(!detailModal);
    };
    return (
        <div className={cx('product-wrapper')}>
            {detailModal && <DetailModal isModalOpen={detailModal} toggle={handleModal} />}
            <div className={cx('product-content')}>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Product 1</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://m.economictimes.com/thumb/msid-100966456,width-1200,height-900,resizemode-4,imgsize-63314/why-become-a-product-manager.jpg"></img>
                    </a>
                </div>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Ipad</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://tttctt.1cdn.vn/2022/03/22/ipad-air-2022-3-2048x1365.jpg"></img>
                    </a>
                </div>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Iphone</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://toplist.vn/images/800px/dia-chi-mua-iphone-cumoi-uy-tin-nhat-binh-duong-1030177.jpg"></img>
                    </a>
                </div>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Macbook</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://cdn.tgdd.vn/Files/2023/02/15/1509838/1-160223-115010.jpg"></img>
                    </a>
                </div>

                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>MacStudio</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://s.yimg.com/uu/api/res/1.2/2vCNmr8RAkS32gRPR1FI7Q--~B/aD0xMjQxO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-03/a6bcd350-a567-11ec-bbe5-b4ba42f855b2.cf.jpg"></img>
                    </a>
                </div>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Apple watch</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfVnADVJ16Er7UK5Jt3PyiaB__trpV63qmw&usqp=CAU"></img>
                    </a>
                </div>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Camera</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://www.bobbooks.co.uk/media/cache/superwide_400/upload/b8/21/b821f8bbf9ea687d7c847ad358b7725afabc25dd.jpeg"></img>
                    </a>
                </div>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Airpods</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://cdn.tgdd.vn/Files/2022/02/27/1417486/tai-nghe-airpod-2-.jpg"></img>
                    </a>
                </div>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Apple Vision</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://static.fnac-static.com/multimedia/Images/FD/Comete/169894/CCP_IMG_1200x800/2257978.jpg"></img>
                    </a>
                </div>
                <div className={cx('product-card')} onClick={handleModal}>
                    <div className={cx('product-card_content')}>
                        <h1 className={cx('product-card_heading')}>Apple pencil</h1>
                        <p className={cx('product-card_text')}>
                            Several UX/UI projects we completed using HTML, CSS, and ReactJS.
                        </p>
                    </div>
                    <a className={cx('product-select')}>
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2021/03/ipadstylus-2048px-495.jpg"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Product;

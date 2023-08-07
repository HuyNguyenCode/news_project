import classNames from 'classnames/bind';
import styles from './Section.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function ChildProduct() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidestoscroll: 1,
    };
    return (
        <div className={cx('child-product-content')}>
            <div className={cx('child-product-slider')}>
                <Slider {...settings}>
                    <div className={cx('child-product-item')}>
                        <img
                            src="https://didongviet.vn/dchannel/wp-content/uploads/2022/03/ipad-air-4-gia-bao-nhieu-04.jpg"
                            className={cx('child-product-img')}
                        ></img>
                        <div className={cx('child-product-title lg-text')}>iPad Air 4 Wifi 64GB</div>
                        <div className={cx('child-product-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(470,430)</div>
                        </div>
                        <div className={cx('child-product-price')}>
                            <div className={cx('price lg-text')}>₫379,000</div>
                            <div className={cx('price-origin')}>₫2,199,000</div>
                        </div>
                    </div>
                    <div className={cx('child-product-item')}>
                        <img
                            src="https://duyhuynhmobile.com/wp-content/uploads/ipad-gen-9-2021-duyhuynhmobile.jpg"
                            className={cx('child-product-img')}
                        ></img>
                        <div className={cx('child-product-title lg-text')}>Ipad 10.2 2021</div>
                        <div className={cx('child-product-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(108,308)</div>
                        </div>
                        <div className={cx('child-product-price')}>
                            <div className={cx('price lg-text')}>₫279,000</div>
                            <div className={cx('price-origin')}>₫1,699,000</div>
                        </div>
                    </div>
                    <div className={cx('child-product-item')}>
                        <img
                            src="https://hoangphucstore.com/assets/uploads/images/0WavhJ1n7MD1_ipad-gen-7-gray-wifi.jpg"
                            className={cx('child-product-img')}
                        ></img>
                        <div className={cx('child-product-title lg-text')}>iPad Gen 7</div>
                        <div className={cx('child-product-rate')}>
                            <span className={cx('lg-text')}>4.3</span>
                            <div className={cx('comment-rate sm-text')}>(13,371)</div>
                        </div>
                        <div className={cx('child-product-price')}>
                            <div className={cx('price lg-text')}>₫379,000</div>
                            <div className={cx('price-origin')}>₫1,699,000</div>
                        </div>
                    </div>
                    <div className={cx('child-product-item')}>
                        <img
                            src="https://vcdn-sohoa.vnecdn.net/2020/05/13/ipad-pro-2020-high-7992-158935-6594-9100-1589354947.jpg"
                            className={cx('child-product-img')}
                        ></img>
                        <div className={cx('child-product-title lg-text')}>iPad Pro 2020</div>
                        <div className={cx('child-product-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(99,288)</div>
                        </div>
                        <div className={cx('child-product-price')}>
                            <div className={cx('price lg-text')}>₫399,000</div>
                            <div className={cx('price-origin')}>₫2,499,000</div>
                        </div>
                    </div>
                    <div className={cx('child-product-item')}>
                        <img
                            src="https://vtv1.mediacdn.vn/thumb_w/640/2021/4/21/ipad-pro-2021-apple-4-1618962931581477333036.jpg"
                            className={cx('child-product-img')}
                        ></img>
                        <div className={cx('child-product-title lg-text')}>iPad Pro 2021 </div>
                        <div className={cx('child-product-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(3,434)</div>
                        </div>
                        <div className={cx('child-product-price')}>
                            <div className={cx('price lg-text')}>₫329,000</div>
                            <div className={cx('price-origin')}>₫1,099,000</div>
                        </div>
                    </div>
                    <div className={cx('child-product-item')}>
                        <img
                            src="https://chiaki.vn/upload/product/2022/06/may-tinh-bang-ipad-pro-11-inch-2018-wifi-256gb-new-99-6299bacf8583f-03062022143959.jpg"
                            className={cx('child-product-img')}
                        ></img>
                        <div className={cx('child-product-title lg-text')}>Ipad Pro 2018</div>
                        <div className={cx('child-product-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(470,430)</div>
                        </div>
                        <div className={cx('child-product-price')}>
                            <div className={cx('price lg-text')}>₫379,000</div>
                            <div className={cx('price-origin')}>₫2,199,000</div>
                        </div>
                    </div>
                    <div className={cx('child-product-item')}>
                        <img
                            src="https://cdn.tgdd.vn/Files/2021/07/21/1369748/ipad-mini-5-1_1280x853-800-resize.jpg"
                            className={cx('child-product-img')}
                        ></img>
                        <div className={cx('child-product-title lg-text')}>iPad mini 5</div>
                        <div className={cx('child-product-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(108,308)</div>
                        </div>
                        <div className={cx('child-product-price')}>
                            <div className={cx('price lg-text')}>₫279,000</div>
                            <div className={cx('price-origin')}>₫1,699,000</div>
                        </div>
                    </div>
                    <div className={cx('child-product-item')}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksyvxNEtGeLvXcYhNWqgqchE_mIg_4ILXHw&usqp=CAU"
                            className={cx('child-product-img')}
                        ></img>
                        <div className={cx('child-product-title lg-text')}>iPad Mini 6</div>
                        <div className={cx('child-product-rate')}>
                            <span className={cx('lg-text')}>4.3</span>
                            <div className={cx('comment-rate sm-text')}>(13,371)</div>
                        </div>
                        <div className={cx('child-product-price')}>
                            <div className={cx('price lg-text')}>₫379,000</div>
                            <div className={cx('price-origin')}>₫1,699,000</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default ChildProduct;

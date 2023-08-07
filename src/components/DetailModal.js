import classNames from 'classnames/bind';
import styles from './DetailModal.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import ChildProduct from '../containers/Section/ChildProduct';
import { useState } from 'react';
const cx = classNames.bind(styles);
function DetailModal({ isModalOpen, toggle, reRenderState }) {
    const handlePlaceOrder = async () => {
        try {
            alert('Vui lòng kiểm tra email để xem chi tiết đơn hàng');
            reRenderState();
            toggle();
        } catch (error) {
            console.log(error);
        }
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };
    const onChange = (value) => {
        console.log('Captcha value:', value);
    };

    // const handleClick = () => {
    //     this.style.background = '#000000';
    // };
    return (
        <div className={cx('form-update')}>
            <Modal isOpen={isModalOpen}>
                {/* <ModalHeader>Detail Product</ModalHeader> */}
                <ModalBody>
                    <div className={cx('modal-wrapper')}>
                        <div className={cx('modal-container')}>
                            <div className={cx('modal-content')}>
                                <div className={cx('product-logo-checkout')}></div>
                                <div className={cx('up-content')}>
                                    <div className={cx('left-content')}>
                                        <div className={cx('product-name lg-text')}>
                                            Apple iPad Air 5 10.9 inch Wi-Fi 64GB
                                        </div>
                                        <div className={cx('product-img')}></div>
                                        <div className={cx('product-des')}>
                                            <div className={cx('product-des-title sm-text')}>Mô tả sản phẩm</div>
                                            <ul>
                                                <li> Màn hình Liquid Retina 10.9 inch. </li>
                                                <li> 1 Chip Apple M1 </li>
                                                <li>Sở hữu Touch ID, camera 5G2 và</li>
                                                <li>Wi-Fi 6 </li>
                                                <li>Cổng USB-C, Hỗ trợ Magic Keyboard + Apple Pencil (Gen 2, 3)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={cx('right-content')}>
                                        <div className={cx('product-amount sm-text')}>
                                            <div className={cx('product-amount-title')}>Số lượng: </div>
                                            <div className={cx('product-area')}>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="vehcle1"> 1</label>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedOption === '1'}
                                                        onChange={() => handleCheckboxChange('1')}
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="option2"> 2</label>
                                                    <input
                                                        checked={selectedOption === '2'}
                                                        onChange={() => handleCheckboxChange('2')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="option3"> 3</label>
                                                    <input
                                                        checked={selectedOption === '3'}
                                                        onChange={() => handleCheckboxChange('3')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="vehcle1"> 4</label>
                                                    <input
                                                        checked={selectedOption === '4'}
                                                        onChange={() => handleCheckboxChange('4')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="option2"> 5</label>
                                                    <input
                                                        checked={selectedOption === '5'}
                                                        onChange={() => handleCheckboxChange('5')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="option3"> 6</label>
                                                    <input
                                                        checked={selectedOption === '6'}
                                                        onChange={() => handleCheckboxChange('6')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="vehcle1"> 7</label>
                                                    <input
                                                        checked={selectedOption === '7'}
                                                        onChange={() => handleCheckboxChange('7')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="option2"> 8</label>
                                                    <input
                                                        checked={selectedOption === '8'}
                                                        onChange={() => handleCheckboxChange('8')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="option3"> 9</label>
                                                    <input
                                                        checked={selectedOption === '9'}
                                                        onChange={() => handleCheckboxChange('9')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className={cx('product-select-amount')}>
                                                    <label htmlFor="option3"> 10</label>
                                                    <input
                                                        checked={selectedOption === '10'}
                                                        onChange={() => handleCheckboxChange('10')}
                                                        type="checkbox"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('product-payment sm-text')}>
                                            <div className={cx('payment-title')}>Phương thức thanh toán: </div>
                                            <div className={cx('payment-area')}>
                                                <div className={cx('payment-box')}>
                                                    Master Card<i className="fa-brands fa-cc-mastercard"></i>
                                                </div>
                                                <div className={cx('payment-box')}>
                                                    Visa<i className="fa-brands fa-cc-visa"></i>
                                                </div>
                                                <div className={cx('payment-box')}>
                                                    Paypal<i className="fa-brands fa-paypal"></i>
                                                </div>
                                                <div className={cx('payment-box')}>
                                                    Bitcoin<i className="fa-brands fa-bitcoin"></i>
                                                </div>
                                                <div className={cx('payment-box')}>
                                                    Apple pay<i className="fa-brands fa-apple-pay"></i>
                                                </div>
                                                <div className={cx('payment-box')}>
                                                    Amazon pay<i className="fa-brands fa-amazon-pay"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('email-product-detail sm-text')}>
                                            Nhập email
                                            <input
                                                className={cx('email-input')}
                                                type="email"
                                                placeholder="Nhập email để nhận thông tin đơn hàng"
                                            />
                                        </div>
                                        <div className={cx('capcha')}>
                                            <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />,
                                        </div>

                                        <button className={cx('place-order-btn')} onClick={handlePlaceOrder}>
                                            Place an Order
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('down-content lg-text')}>
                                    Sản phẩm con
                                    <div className={cx('child-product')}>
                                        <ChildProduct/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DetailModal;

import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <section className={cx('footer-wrapper')}>
            <div className={cx('container')}>
                <div className={cx('footer-content')}>
                    <div className={cx('footer-title')}>Payment Method</div>
                    <div className={cx('up-content')}>
                        <div className={cx('child-content')}>
                            <a className={cx('brand-logo')}>
                                <img src="https://img.freepik.com/free-icon/paypal_318-674245.jpg"></img>
                            </a>
                            <a className={cx('brand-logo')}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"></img>
                            </a>
                            <a className={cx('brand-logo')}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"></img>
                            </a>
                            <a className={cx('brand-logo')}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"></img>
                            </a>
                            <a className={cx('brand-logo')}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png"></img>
                            </a>
                            <a className={cx('brand-logo')}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/2560px-Amazon_Pay_logo.svg.png"></img>
                            </a>
                        </div>
                    </div>

                    <div className={cx('down-content')}>
                        <div className={cx('footer-copyright')}>© Worldkeys.pro 2020 – 2023.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;

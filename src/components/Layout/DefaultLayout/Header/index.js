import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header-container')}>
            <div className={cx('header-content')}>
                <div className={cx('left-content')}>
                    <div className={cx('header-logo')}>
                        <a href="#"></a>
                    </div>
                </div>
                <div className={cx('center-content')}>
                    <div className={cx('child-content')}>
                        <a href="#">Phong cách</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Nghệ thuật</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Xe & Du thuyền</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">TV Stream</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Sống</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Dining library</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Business of luxary</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Bất động sản</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Không gian sống</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Wedding</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Golf</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">The lux list</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">House of luxe </a>
                    </div>
                </div>
                <div className={cx('right-content')}>
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    {/* <button className={cx('btnLogin')}>Log in</button>
                    <button className={cx('btnSignup')}>Sign up</button> */}
                </div>
            </div>
        </div>
    );
}

export default Header;

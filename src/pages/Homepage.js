import Category from '../containers/Section/Product';
import classNames from 'classnames/bind';
import styles from './Homepage.scss'

const cx = classNames.bind(styles);

function Homepage() {
    return (
        <div className={cx('homepage-container')}>
            <section className={cx('homepage-banner-wrapper')}>
                <div className={cx('container')}>
                    <Category />
                </div>
            </section>
        </div>
    );
}

export default Homepage;

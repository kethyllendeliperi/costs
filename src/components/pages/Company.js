import company from '../../img/company.png'

import styles from './Company.module.css'

function Company() {
    return (
        <>
            <h2 className={styles.company_container_title}>Sobre o <span>Costs</span></h2>
            <div className={styles.company_container}>
                <img src={company} alt="Company"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim justo sed elit mattis, vel ullamcorper tortor bibendum. Nulla facilisi. Vivamus aliquam metus sed nisi lobortis, vel lacinia lacus mollis. Nulla facilisi. Sed eu vestibulum ipsum. Cras sit amet lorem eget libero fringilla scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer id sapien at tortor vestibulum fermentum nec eu purus. Morbi auctor sapien id sapien tempor, ac fermentum lectus feugiat.</p>
            </div>
        </>
    )
}

export default Company
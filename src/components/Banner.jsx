import Lock from "../assets/icons/Lock";
import banner from "../assets/images/banner.png"


function Banner(){

    return(
    <div className={`${styles.Banner} ${screenWidth<675 ? "remove" : ""}`}>
        <div className={styles.center}>
            <img src={banner}/>
            <h2>Pocket Notes</h2>
            <p>Send and receive messages without keeping your phone online.
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className={styles.encrypt}>
            <span><Lock/>end-to-end encrypted</span>
        </div>
    </div>
    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}

export default Banner;

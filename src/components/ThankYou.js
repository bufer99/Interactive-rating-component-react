import logo from '../images/illustration-thank-you.svg'
import { motion } from 'framer-motion'

export const ThankYou = ({ value }) => {
    return (
        <motion.div
            animate={{
                opacity: [0, 1],
            }} 
            className="finish block">
            <img src={logo} />
            <span className="selected">You selected {value} out of 5</span>

            <div className="text">
                <span>Thank you!</span>
                <span>
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!
                </span>
            </div>
        </motion.div>
    )
}
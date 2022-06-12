import logo from '../images/icon-star.svg'
import cn from 'classnames'
import { motion } from 'framer-motion'

const scale = [1, 2, 3, 4, 5];
export const Rating = ({ submit, setSubmit }) => {

    return (

        <div className="form block">
            <div className="circle">
                <img src={logo} />
            </div>

            <div> How did we do?</div>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>

            <div className="rating">
                {scale.map(e => (
                    <motion.div
                        animate={ submit.isSubmitted && {opacity: [1, 0]}}
                        whileTap={{ scale: 1.3 }}
                        className={cn({
                            circle: true,
                            active: e === submit.value,
                        })}
                        onClick={() => {
                            setSubmit((submit) => { return { ...submit, value: e } })
                        }}
                    >
                        <div className={cn({
                            animation: e === submit.value
                        })} >{e}</div>
                    </motion.div>
                ))}
            </div>


            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    setSubmit((submit) => {
                        return { ...submit, isSubmitted: true }
                    })
                }}>Submit</motion.button>

        </div>
    )
}
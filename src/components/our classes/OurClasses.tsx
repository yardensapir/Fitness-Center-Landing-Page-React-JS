
import { SelectedPage } from '@/types/types'
import { motion } from 'framer-motion';
import { classes } from '@/data/data';
import ClassComponents from './ClassComponents';
import HText from '../shared/htext/HText';
import { ClassType } from '@/types/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const OurClasses = ({ setSelectedPage }: Props) => {

    return (
        <section id="ourclasses" className='w-full bg-primary-100 py-40'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div className='mx-auto w-5/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5'> Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.</p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item: ClassType, index) => (
                            <ClassComponents
                                key={`${item.name}-${index}`}
                                name={item.name}
                                descrition={item.description}
                                image={item.image} />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses
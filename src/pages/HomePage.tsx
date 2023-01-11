import Navbar from '@/components/shared/navbar/Navbar'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/types/types'
import Home from '@/components/home/Home';

const HomePage = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

    // CHECK IF USER AT THE TOP OF THE PAGE
    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTopOfPage(true);
            setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    };

    useEffect(() => {
        handleScroll()
    }, []);


    return (
        <div className="app bg-gray-20">
            <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Home setSelectedPage={setSelectedPage} />
        </div>
    )
}

export default HomePage




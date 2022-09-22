
import { Routes, Route } from 'react-router-dom';
import Nav from './Navbar';
import PriceCalculator from './PriceCalculator';
import Product from './Product';
import Promotion from './Promotion';


const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route exact path='/' element={<PriceCalculator />} />
                <Route path='/product' element={<Product />} />
                <Route path='/promotion' element={<Promotion />} />
            </Routes>
        </>
    )
}
export default App;
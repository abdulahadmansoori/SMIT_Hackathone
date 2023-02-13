import img1 from '../images/C1.png'
import img2 from '../images/C2.png'
import img3 from '../images/C3.png'

function Category(){
return(
    <div className='container my-4'>
        <span className='fw-bold'>Shop by Category</span>
                    <div className='row my-3'>
                        <div className='col-sm-3'></div>
                        <div className='col-sm-2'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <img src={img1} className='w-100' />
                                </div>
                                <div className='col-sm-6'>Vagitables</div>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <img src={img2} className='w-100' />
                                </div>
                                <div className='col-sm-6'>Groucry</div>
                            </div>

                        </div>
                        <div className='col-sm-2'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <img src={img3} className='w-100' />
                                </div>
                                <div className='col-sm-6'>Meat</div>
                            </div>

                        </div>
                    </div>
                </div>
);
}
export default Category
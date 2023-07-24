import React from 'react';


interface HomeProps {

}
const Home: React.FC<HomeProps> = () => {
    return (
        <div className='d-flex justify-center align-middle dark:text-white home' style={{marginTop:"70px"}}>
            <div>
                <div className='container p-2'>
                    <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white text-transform-uppercase">Lorem ipsum.</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2">
                        <div className='p-2'>
                            <h1 className='dark:text-white text-3xl'>Lorem, ipsum dolor.</h1>
                            <p className='dark:text-white text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi officiis, aliquid autem dolore illo similique fuga magni suscipit rem iusto temporibus accusamus soluta mollitia esse dicta porro id iste voluptatem. In sapiente eaque quidem officia optio temporibus, exercitationem asperiores.</p>
                            <img src="/users-plus.png" alt="" height="auto" width="auto" />
                        </div>
                        <div className='p-2'>
                            <h1 className='dark:text-white text-3xl'>Lorem, ipsum dolor.</h1>
                            <p className='dark:text-white text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi officiis, aliquid autem dolore illo similique fuga magni suscipit rem iusto temporibus accusamus soluta mollitia esse dicta porro id iste voluptatem. In sapiente eaque quidem officia optio temporibus, exercitationem asperiores.</p>
                            <img src="/server-01.png" alt="" height="auto" width="auto" />
                        </div>
                        <div className='p-2'>
                            <img className="h-auto max-w-full " src="/img1.png" alt="" height="auto" width='100%' />
                            <h1 className='text-3xl pt-4'>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore at qui asperiores unde pariatur, corrupti eos ea maxime quasi odio placeat velit aut aspernatur officia expedita consequuntur, ducimus officiis est. Aperiam ex ducimus quis beatae quo maxime consectetur labore magni?</p>
                            <img src="/target-05.png" alt="" height="auto" width="auto" />
                        </div>
                        <div className='p-2'>
                            <h1 className='dark:text-white text-3xl'>Lorem, ipsum dolor.</h1>
                            <p className='dark:text-white text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi officiis, aliquid autem dolore illo similique fuga magni suscipit rem iusto temporibus accusamus soluta mollitia esse dicta porro id iste voluptatem. In sapiente eaque quidem officia optio temporibus, exercitationem asperiores.</p>
                            <img src="/percent-03.png" alt="" height="auto" width="auto" />
                        </div>
                        <div className='p-2 align-text-bottom'>
                            <h1 className='text-3xl'>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore at qui asperiores unde pariatur, corrupti eos ea maxime quasi odio placeat velit aut aspernatur officia expedita consequuntur, ducimus officiis est. Aperiam ex ducimus quis beatae quo maxime consectetur labore magni?</p>
                            <img src="/cpu-chip-01.png" alt="" height="auto" width="auto" />
                        </div>
                        <div className='p-2'>
                        </div>
                        <div className='p-2'>
                        </div>
                        <div className='p-2'>
                            <img src="/img2.png" alt="" height="auto" width="100%" />
                        </div>
                        <div className='p-2'>
                            <h1 className='text-3xl'>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore at qui asperiores unde pariatur, corrupti eos ea maxime quasi odio placeat velit aut aspernatur officia expedita consequuntur, ducimus officiis est. Aperiam ex ducimus quis beatae quo maxime consectetur labore magni?</p>
                            <img src="/cube-01.png" alt="" height="auto" width="auto" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-2 mt-10 about main-div">
                        <div className='p-2' style={{ position: "relative",display:"flex",justifyContent:"center" }}>
                            <h1 className='text-5xl font-bold'>ABOUT <br /> US</h1>
                            <img style={{ borderRadius: "50%", position: "absolute", top: "50px", right: "150px", }} className='about-img md:h-auto md:w-50' src="/img3.png" alt="" height={200} width={200}/>
                        </div>
                        <div className='p-2' style={{ textAlign: "center", display: "flex",  justifyContent: "center" }}>
                            <p className='text-justify '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, minus? Dicta animi, officiis et tempora modi beatae, voluptatum laboriosam dignissimos, sint atque reiciendis est vero. Adipisci sint dolores porro non assumenda facilis, rerum aspernatur doloribus facere cum. Obcaecati unde non mollitia vel odit recusandae esse repellat? Minima nemo atque, commodi porro accusamus tempore placeat laboriosam doloribus quisquam minus pariatur illum quidem alias facilis itaque. Quisquam corrupti facilis cupiditate dolores cumque!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;

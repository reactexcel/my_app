import React, { useState } from 'react'

const HomeBottom = () => {
    const [openRowIndex, setOpenRowIndex] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const data = [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur."
    ];

    const handleOpen = (rowIndex: any) => {
        setOpenRowIndex((prevOpenIndex) => (prevOpenIndex === rowIndex ? null : rowIndex));
    };
    const handleSelect = (rowIndex:any) => {
        if (selectedItem === rowIndex) {
          setSelectedItem(null); 
        } else {
          setSelectedItem(rowIndex); 
        }
      };
    return (
        <div className='d-flex  justify-center align-middle dark:text-white pt-5 home' style={{ flexDirection: "column" }}>
            <div className='container home-bottom-section '>
                <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white text-transform-uppercase " style={{ textTransform: "uppercase" }}>Lorem ipsum dolor sit amet dolor.</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2 mt-5 ">
                    <div className='p-2'>
                        <h1 className='dark:text-white text-3xl'>Lorem, ipsum dolor.</h1>
                        <p className='dark:text-white text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi officiis, aliquid autem dolore illo similique fuga magni suscipit rem iusto temporibus accusamus soluta mollitia esse dicta porro id iste voluptatem. In sapiente eaque quidem officia optio temporibus, exercitationem asperiores.</p>
                        <img src="/shield-tick.png" alt="" height="auto" width="auto" />
                    </div>
                    <div className='p-2'>
                        <h1 className='dark:text-white text-3xl'>Lorem, ipsum dolor.</h1>
                        <p className='dark:text-white text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi officiis, aliquid autem dolore illo similique fuga magni suscipit rem iusto temporibus accusamus soluta mollitia esse dicta porro id iste voluptatem. In sapiente eaque quidem officia optio temporibus, exercitationem asperiores.</p>
                        <img src="/dataflow-03.png" alt="" height="auto" width="auto" />
                    </div>
                    <div className='p-2'>
                    </div>
                    <div className='p-2'>

                    </div>
                    <div className='p-2'>
                        <img src="/img4.png" alt="" height="auto" width="auto" />
                    </div>
                    <div className='p-2'>
                        <h1 className='dark:text-white text-3xl'>Lorem, ipsum dolor.</h1>
                        <p className='dark:text-white text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi officiis, aliquid autem dolore illo similique fuga magni suscipit rem iusto temporibus accusamus soluta mollitia esse dicta porro id iste voluptatem. In sapiente eaque quidem officia optio temporibus, exercitationem asperiores.</p>
                        <img src="/bar-chart-circle-01.png" alt="" height="auto" width="auto" />
                    </div>
                </div>
            </div>
            <div style={{ color: "white", paddingTop: "80px" }} className='container home-bottom-section'>
                <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white text-transform-uppercase " style={{ textTransform: "uppercase" }}>Lorem ipsum dolor sit</h1>
                <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-2 mt-5 " style={{ color: "gray" }}>
                    <table style={{ width: "100%" }}>
                        <tbody style={{ cursor: "pointer",textAlign:"justify" }}>
                            {data.map((item, index) => (
                                <React.Fragment key={index}>
                                    <tr className={selectedItem === index ? "selected-row" : ""}
                                        onClick={() => {
                                            handleOpen(index);
                                            handleSelect(index);
                                        }} style={{color:"white",}}>
                                        <td>{item}</td>
                                        <td  style={{ fontWeight: "bold" }}>
                                            {openRowIndex === index ? "+" : "-"}
                                        </td>
                                    </tr>
                                    {openRowIndex === index && (
                                        <tr style={{ textAlign: "justify" }}>
                                            <td colSpan={2}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia, ad nam quos praesentium voluptates inventore deleniti minus facilis beatae iste! Molestias perferendis nihil maiores ea corrupti atque? Voluptatibus, quia.
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default HomeBottom

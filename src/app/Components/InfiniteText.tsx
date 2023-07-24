import React from 'react';

const texts:string[] = [
    'Your text 1',
    'Your text 2',
    'Your text 3',
    'Your text 1',
    'Your text 2',
    'Your text 3',
];

const InfiniteText = () => {
    return (
        <div className="infinite-text" style={{ marginTop: '50px' }}>
            <div className="marquee-container">
                {texts.map((text, index) => (
                    <span key={index} className="marquee">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default InfiniteText;

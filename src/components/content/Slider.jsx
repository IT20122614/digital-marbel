
import * as React from 'react';

function Slider() {

    return (
        <div style={{ height: '650px', paddingLeft: '30px', backgroundColor: '#e7e5d9' }}>
            {/* <img src="https://www.digitalmarmalade.co.uk/build/svg/hero-1.32206e59.svg" alt="Hero 1" fetchpriority="high" loading="eager" decoding="async" style={{ width: '700px' }}></img> */}
            <div style={{float: 'left', marginTop: '15%', backgroundColor: '#e7e5d9'}}>
                <div style={{textAlign: 'left'}}>
                    <p class="HeroItem__content1">We build</p><br />
                    <p class="HeroItem__content2">Powerful</p><br />
                    <p class="HeroItem__content3">Applications</p><br />
                </div>
            </div>
            <img src="https://www.digitalmarmalade.co.uk/build/svg/hero-3.32612ad5.svg" alt="Hero 3" fetchpriority="low" loading="lazy" decoding="async" style={{ width: '700px',backgroundColor: '#e7e5d9' }}></img>
        </div>
    );
}

export default Slider;

import React, { useState } from 'react';
import Register from './register';

const tbb = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tbb = [
        {
            id: 1,
            tabTitle: 'For Profressionals',
            texttt: <Register/>
        },
        {
            id: 2,
            tabTitle: 'For Startups',
            texttt: <Register/>
        },
        {
            id: 3,
            tabTitle: 'For Collaborators',
            texttt: <Register/>
        },
        {
            id: 4,
            tabTitle: 'For Investors',
            texttt: <Register/>
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='cont_tabs'>
            <div className='tbb'>
                {tbb.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='texttt'>
                {tbb.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p>{tab.texttt}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default tbb;

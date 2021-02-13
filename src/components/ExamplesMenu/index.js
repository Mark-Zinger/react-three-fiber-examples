import React from 'react';
import './style.scss';
import Scrollbar from 'react-smooth-scrollbar';

import ExampleItem from '../ExampleItem'

function ExampleMenu (props) {

    return (
        <Scrollbar
            damping={0.05}
            className="ExampleMenu"
        >
            <ExampleItem/>
            <ExampleItem/>
            <ExampleItem/>
            <ExampleItem/>
            <ExampleItem/>
            <ExampleItem/>
            <ExampleItem/>
            <ExampleItem/>
            <ExampleItem/>
            <ExampleItem/>
        </Scrollbar>
    )
}

export default ExampleMenu;

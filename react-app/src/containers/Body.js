import React from "react";
import './Containers.css';
import {Tabs, Tab} from 'react-bootstrap';

const body = () => {
    return (
        <div>
            <Tabs defaultActiveKey="resources" id="doc-bot-body-tabs">
                <Tab eventKey="resources" title="At Home Resources">
                    second
                </Tab>
                <Tab eventKey="contacts" title="Emergency Contact List" >
                    third
                </Tab>
            </Tabs>
        </div>
    )
};

export default body;
import React from "react";
import './Containers.css';
import {Tabs, Tab} from 'react-bootstrap';

const body = () => {
    return (
        <div>
            <Tabs defaultActiveKey="chatbot" id="doc-bot-body-tabs">
                <Tab eventKey="chatbot" title="Watson AI Chatbot">
                    first
                </Tab>
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
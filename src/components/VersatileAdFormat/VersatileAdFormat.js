import React, { useState } from 'react';
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import BannerAd from '../versatile/BannerAd';
import Native from '../versatile/Native';
import PopUnder from '../versatile/PopUnder';
import Skim from '../versatile/Skim';
import TabContent from './TabContent';
import TabNavItem from './TabNavItem';
import './VersatileAdFormat.css';

const VersatileAdFormat = () => {
    const [activeTab, setActiveTab] = useState('tab1');


    return (
        <div className="versatile-ctn ">
            <Row>
                <div className="versatile">
                    <h2 >VERSATILE AD FORMATS</h2>
                </div>
            </Row>

            <Container>
                <div>

                    <Row xs={1} md={4} className="g-4 everyone">
                        <TabNavItem title={<Button className="versatile-btn shadow">POP-UNDER</Button>} id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />

                        <TabNavItem title={<Button className="versatile-btn  shadow">BANNER AD</Button>} id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />

                        <TabNavItem title={<Button className="versatile-btn shadow">NATIVE</Button>} id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />

                        <TabNavItem title={<Button className="versatile-btn shadow">SKIM</Button>} id="tab4" activeTab={activeTab} setActiveTab={setActiveTab} />
                    </Row>

                    <div className="outlet">
                        <TabContent id="tab1" activeTab={activeTab}>
                            <PopUnder />
                        </TabContent>
                        <TabContent id="tab2" activeTab={activeTab}>
                            <BannerAd />
                        </TabContent>
                        <TabContent id="tab3" activeTab={activeTab}>
                            <Native />
                        </TabContent>
                        <TabContent id="tab4" activeTab={activeTab}>
                            <Skim />
                        </TabContent>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default VersatileAdFormat;
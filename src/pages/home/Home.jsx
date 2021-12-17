import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import './home.css';
import {data} from '../../dummyData';

const Home = () => {
    return (
        <div className="home">
           <FeaturedInfo/>
           <Chart 
            title="User Analytics"
            data={data}
            dataKey="Active User"
            grid
           />
           <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
           </div>
        </div>
    )
}

export default Home

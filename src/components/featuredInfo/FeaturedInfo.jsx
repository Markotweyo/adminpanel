import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredInfo.css'

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <spa className="featuredTitle">Revenue</spa>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>

            <div className="featuredItem">
                <spa className="featuredTitle">Sales</spa>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$10,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>

            <div className="featuredItem">
                <spa className="featuredTitle">Cost</spa>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$12,415</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo

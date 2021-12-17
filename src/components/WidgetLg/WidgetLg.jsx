import React from 'react';
import "./widgetLg.css";

const WidgetLg = ()=> {
    const Button = ({type})=>{
        return <button className={" widgetLgButton " +  type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetlgTitle">Latest Transaction</h3>
            <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh"> Customer</th>
                    <th className="WidgetLgTh"> Date</th>
                    <th className="WidgetLgTh"> Amount</th>
                    <th className="WidgetLgTh"> Status</th>
                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLgImg" />
                        <span className="WidgetLgName">Susan Carol</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2021</td>
                    <td className="WidgetLgAmount">$112.00</td>
                    <td className="WidgetLgStatus">
                        <Button type="Approved"/>
                    </td>  
                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLgImg" />
                        <span className="WidgetLgName">Susan Carol</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2021</td>
                    <td className="WidgetLgAmount">$112.00</td>
                    <td className="WidgetLgStatus">
                        <Button type="Pending"/>
                    </td>  
                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLgImg" />
                        <span className="WidgetLgName">Susan Carol</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2021</td>
                    <td className="WidgetLgAmount">$112.00</td>
                    <td className="WidgetLgStatus">
                        <Button type="Declined"/>
                    </td>  
                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLgImg" />
                        <span className="WidgetLgName">Susan Carol</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2021</td>
                    <td className="WidgetLgAmount">$112.00</td>
                    <td className="WidgetLgStatus">
                        <Button type="Approved"/>
                    </td>  
                </tr>
            </table>

        </div>
    )
}

export default WidgetLg
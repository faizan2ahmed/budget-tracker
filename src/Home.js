import Actions from "./Actions";

const Home = () => {

    

    return (
        <div className="home">
        <div className="container">
            <div className="home-view">
                <div className="dateFilter">
                    <input type="date" id="datePicker"/>
                    <button className="filterBtn">Filter Records</button>
                    <button className="addBudgetBtn">Add Budget</button>
                </div>
                <div className="budgetData">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>lalalalallla</td>
                        <td>lalalalallla</td>
                        <td>lalalalallla</td>
                        <td><Actions/></td>
                    </tr>
                    <tr>
                        <td>lalalalallla</td>
                        <td>lalalalallla</td>
                        <td>lalalalallla</td>
                        <td><Actions/></td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Rows per page:</td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Home;
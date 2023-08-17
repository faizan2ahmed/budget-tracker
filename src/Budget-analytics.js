import React, { useEffect, useRef, useState } from 'react';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, registerables, Colors } from 'chart.js';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom/cjs/react-router-dom";

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, ...registerables, Colors);

const Budgetanalytics = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [activeTab, setActiveTab] = useState('lastMonth');


  let filteredData = [];
  if (activeTab === 'lastMonth') {
    const currentDate = new Date();
    const currentMonth= new Date();
    const lastMonth = new Date();

    currentMonth.setMonth(currentDate.getMonth())
    lastMonth.setMonth(currentMonth.getMonth() - 1);

    console.log("Last Month:",lastMonth)
    console.log("Current Date:",currentDate)

    filteredData = data.filter((item)=>{
        if(new Date(item.date) >= lastMonth && new Date(item.date) <= currentDate){
            console.log("true: this date,",new Date(item.date))
            return item;
        }else{
            console.log("false: this date,",new Date(item.date))
        }
        return false;
    });
  } else if (activeTab === 'last6Months') {
    const currentDate = new Date();
    const currentMonth= new Date();
    const lastSixMonth = new Date();

    currentMonth.setMonth(currentDate.getMonth())
    lastSixMonth.setMonth(currentMonth.getMonth() - 6);

    console.log("Last Month:",lastSixMonth)
    console.log("Current Date:",currentDate)
    
    filteredData = data.filter((item)=>{
        if(new Date(item.date) >= lastSixMonth && new Date(item.date) <= currentDate){
            console.log("true: this date,",new Date(item.date))
            return item;
        }else{
            console.log("false: this date,",new Date(item.date))
        }
        return false;
    });
  } else {
    const currentDate = new Date();
    const currentMonth= new Date();
    const lastTwelveMonth = new Date();

    currentMonth.setMonth(currentDate.getMonth())
    lastTwelveMonth.setMonth(currentMonth.getMonth() - 12);

    console.log("Last Month:",lastTwelveMonth)
    console.log("Current Date:",currentDate)
    
    filteredData = data.filter((item)=>{
        if(new Date(item.date) >= lastTwelveMonth && new Date(item.date) <= currentDate){
            console.log("true: this date,",new Date(item.date))
            return item;
        }else{
            console.log("false: this date,",new Date(item.date))
        }
        return false;
    });
  }
  
  useEffect(() => {
    const labels = filteredData.map(item => item.date);
    const prices = filteredData.map(item => item.price);
    const names = filteredData.map(item => item.name);
    const cumulativeBudget = prices.reduce((acc, price, index) => {
      if (index === 0) {
        acc.push(price);
      } else {
        acc.push(acc[index - 1] + price);
      }
      return acc;
    }, []);
  
    const ctx = chartRef.current.getContext('2d');
  
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
  
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Individual Budget Allocation ',
            data: prices,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
          {
            label: 'Cumulative Budget Allocation',
            data: cumulativeBudget,
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false,
          },
        ],
      },
      options: {
        
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Budget Trends'
          },
          legend: {
            display: true,
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const index = context.dataIndex;
                const datasetIndex = context.datasetIndex;
                const name = names[index];
                const price = prices[index];
                const cumulativePrice = cumulativeBudget[index];
    
                if (datasetIndex === 0) {
                  return `${name} - ${price}`;
                } else if (datasetIndex === 1) {
                  return `${name} - ${price} (${cumulativePrice})`;
                }
    
                return '';
              },
            },
          },
        }
        
      },
    });
  
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, activeTab,filteredData]);  
  

  return (
    <div className="contents">
      <div className="budgetanalytics">
        <div className="back-arrow">
            <Link to ='/Home'><ArrowBack fontSize="large" /> </Link>
        </div>
        <h2>Budget Analytics</h2>
        
        <div className="tabs">
          <button className={`tabs-btn ${activeTab === 'lastMonth' ? 'active' : ''}`} onClick={() => setActiveTab('lastMonth')}>Last Month</button>
          <button className={`tabs-btn ${activeTab === 'last6Months' ? 'active' : ''}`} onClick={() => setActiveTab('last6Months')}>Last 6 Months</button>
          <button className={`tabs-btn ${activeTab === 'last12Months' ? 'active' : ''}`} onClick={() => setActiveTab('last12Months')}>Last 12 Months</button>
        </div>

        <div className="chart">
            <canvas ref={chartRef}/>
        </div>

      </div>
    </div>
    
  );
};

export default Budgetanalytics;

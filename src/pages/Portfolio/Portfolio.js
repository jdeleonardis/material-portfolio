import React from "react";
import PageHeader from '../../components/PageHeader/PageHeader'
import PortfolioContainer from '../../components/PortfolioContainer/PortfolioContainer'
import portfolioData from '../../utils/projectdata.json'

export default function Portfolio() {
  return (

    <div style={{marginTop: '60px', marginLeft: '100px', marginRight: '40px'}}>

      <PageHeader pageTitle='PORTFOLIO'/>

      <div className='subHeaderTitle'>
        Professional/Freelance Projects
      </div>

      {/* make special note of the column sizes passed in. Professional projects will be two to a row, school will be 3 to a row */}
      <PortfolioContainer 
        xs={12}
        md={6}
        data={portfolioData}
        type="professional"
      />
      
      <div className='subHeaderTitle'>
        Full Stack Developer Bootcamp Projects
      </div>

      {/* make special note of the column sizes passed in. Professional projects will be two to a row, school will be 3 to a row */}
      <PortfolioContainer 
        xs={12}
        md={4}
        data={portfolioData}
        type="school"
      /> 
    
    </div>



  );
}
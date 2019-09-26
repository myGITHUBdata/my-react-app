import React from 'react';

import ContentLoader from 'react-content-loader'

const Loader = props => (
    <ContentLoader 
        height={160}
        width={400}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        {...props}
    >
         <rect x="54.11" y="20" rx="3" ry="3" width="70" height="10" /> 
        <rect x="134.11" y="20" rx="3" ry="3" width="100" height="10" /> 
        <rect x="244.11" y="20" rx="3" ry="3" width="10" height="10" /> 
        <rect x="69.11" y="40" rx="3" ry="3" width="130" height="10" /> 
        <rect x="209.11" y="40" rx="3" ry="3" width="130" height="10" /> 
        <rect x="69.11" y="60" rx="3" ry="3" width="90" height="10" /> 
        <rect x="169.11" y="60" rx="3" ry="3" width="60" height="10" /> 
        <rect x="239.11" y="60" rx="3" ry="3" width="60" height="10" /> 
        <rect x="54.11" y="80" rx="3" ry="3" width="30" height="10" /> 
        <rect x="94.11" y="79" rx="3" ry="3" width="90" height="10" /> 
        <rect x="209.11" y="96.68" rx="3" ry="3" width="92.7" height="10.3" /> 
        <rect x="196.11" y="78" rx="3" ry="3" width="60" height="10" /> 
        <rect x="67.11" y="98" rx="3" ry="3" width="130" height="10" /> 
        <rect x="69.11" y="103.2" rx="3" ry="3" width="30" height="2.5" /> 
        <rect x="55.11" y="115.2" rx="3" ry="3" width="60" height="9.1" /> 
        <rect x="124.11" y="114" rx="3" ry="3" width="90" height="10" /> 
        <rect x="223.11" y="114" rx="3" ry="3" width="10" height="10" /> 
        <rect x="68.11" y="131.68" rx="3" ry="3" width="92.7" height="10.3" /> 
        <rect x="167.11" y="131" rx="3" ry="3" width="60" height="10" /> 
        <rect x="236.11" y="130" rx="3" ry="3" width="90" height="10" />
    </ContentLoader>
)

export default Loader
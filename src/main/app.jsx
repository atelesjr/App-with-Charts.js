import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import 'file?name=[name].[ext]!../../public/css/styles.css' //bootswatch theme

import React from 'react'

import Header from '../components/header'
import Dashboard from '../components/dashboard'

export default props => (
    <div>   
        <Header name="Dom Rock"  />
        <Dashboard />
        
    </div>
)


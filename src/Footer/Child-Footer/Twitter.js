import React from 'react'
import { FaRetweet , FaStar } from "react-icons/fa";
import './Twitter.css'

const Twitter = (props) => <div className='Twitter'>
    <h2>Latest Tweets</h2>
    <div className='Twitter-One'>
        <h5><FaRetweet className ='Icon'/>Twitter API Retweeted</h5>
        <br />
        <h4><a href='https://twitter.com/TwitterDev' target="_blank" >Twitter Dev</a></h4>
        <h5>@TwitterDev</h5>
        <h3>Our latest Twitter Developer Labs release helps you quickly assess the impact of your Tweets. Today, we’re releasing </h3>
        <br />
        <h6><FaStar className ='Icon'/>a new metrics endpoint</h6>
        <h6><FaStar className ='Icon'/><a href='https://twittercommunity.com/t/new-twitter-developer-labs-release-metrics-endpoint/129122' target ='blank'><span className='Hidden-Link'> https://twittercommunity.com/t/new-twitter-developer-labs-release-metrics-endpoint/129122 </span></a></h6>
    </div>
    <div></div>
</div>

export default Twitter;
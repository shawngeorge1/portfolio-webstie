import React, {Component} from 'react';
import '../App.css'
import Tabs from './Tabs';
import { Timeline } from 'react-twitter-widgets'
import TweetEmbed from 'react-tweet-embed'
import StickyFooter from 'react-sticky-footer';



export default class Projects extends Component{
    render(){
        return(
            <div>  
                  <Tabs>
                  <div label="/r/ShowerThoughts Twitter bot">
                        <div className = "tab-text">
                        <h2>The worlds greatest thoughts happen in the shower</h2>
                        A twitter bot that tweets a post every hour from the subreddit /r/ShowerThoughts - a subreddit containing miniature
                        epiphanies that make the mundane life more interesting. The purpose of this project was to better understand the Node.js 
                        framework, in addition to creating a comical twitter feed.
                        </div>
                        <div className = "twitter-feed">
                        <TweetEmbed id='1056301632798052352' />
                        </div>
                    </div>
                    <div label="Weather App">
                        <div className = "tab-text">
                        <h2>Sunny Side Weather</h2>	
                        An android weather app that allows users to view the current seven-day forecast for their current location. 
                        This data is pulled from OpenWeatherMap, an open-source API for retrieving weather data across the world.
                        The purpose of this project was to gain experience working with an API, in addition to building an app that can be applied to my everyday life.
                        </div>
                        <div className = "twitter-feed">
                        <TweetEmbed id='1056291512710037504' />
                        </div>
                    </div>
                
                    <div label="TicTacToe">
                        <div className = "tab-text">
                        An android adaptation of the classic game of Tic Tac Toe.          
                        </div>
                        <div className = "twitter-feed">
                        <TweetEmbed id='1056270918706778112' />
                        </div>
                    </div>
                    </Tabs>  
                    <div>
                        <StickyFooter
                            bottomThreshold={50}
                            normalStyles={{
                            backgroundColor: "#919aa1",
                            padding: "1rem"
                            }}
                            stickyStyles={{
                            backgroundColor: "rgba(255,255,255,.8)",
                            padding: ".1rem"
                            }}>
                        </StickyFooter>
                    </div>
            </div>
        );
    }

} 


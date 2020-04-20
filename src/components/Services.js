import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'


export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "some info about cocktails"
      },
      {
        icon: <FaHiking />,
        title: "hiking",
        info: "some info about hiking"
      },
      {
        icon: <FaShuttleVan/>,
        title: "free shuttle bus",
        info: "some info about transportation"
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info: "some info about free beer"
      }
    ]
      };
      render() {
        return (
          <section className="services">
            <Title title="services"/>
              <div className="services-center">
                {this.state.services.map((item, index) => { 
                return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                      <p>{item.info}</p>
                </article>
                )
              })}
              </div>
          </section>
        );
      }
}

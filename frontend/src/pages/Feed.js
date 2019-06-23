import React, { Component } from "react";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Alexandre</span>
              <span className="place">Foz do Iguaçu</span>
            </div>
            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/Cat03.jpg" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>900 curtidas</strong>
            <p>
              Post maneiro
              <span>#react #top</span>
            </p>
          </footer>
        </article>

        <article>
          <header>
            <div className="user-info">
              <span>Alexandre</span>
              <span className="place">Foz do Iguaçu</span>
            </div>
            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/Cat03.jpg" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>900 curtidas</strong>
            <p>
              Post maneiro
              <span>#react #top</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;

import React from "react";
import ValThorens from "./assets/images/val-thorens.png";
import Restaurant from "./assets/images/Restaurant.png";
import OutdoorCafe from "./assets/images/outdoor-cafe.png";
import Bridge from "./assets/images/bridge.png";
import Tunnel from "./assets/images/Tunnel.png";
import Mountain from "./assets/images/mountain.png";
function Gallery() {
  return (
    <div>
      <section className="cards_container" >
        <figure>
          <img
            src={ValThorens}
            alt="val-thorens"
          />

          <figcaption >
            <span>Val Thorens</span>

            <svg
              class="card_icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </figcaption>
        </figure>
        <figure>
            <img src={Restaurant} alt="Restaurant-terrace"/>
            <figcaption>
                <span>Restaurant terrace</span>
                <svg
              class="card_icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </figcaption>
        </figure>
        <figure>
            <img src={OutdoorCafe} alt="An outdoor cafe" />
            <figcaption>
                <span>An outdoor cafe</span>
                <svg
              class="card_icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </figcaption>
        </figure>
        <figure>
            <img src={Bridge} alt="long-bride" />
            <figcaption>
                <span>A very long bridge, over the forest...</span>
                <svg
              class="card_icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </figcaption>
        </figure>
        <figure>
            <img src={Tunnel} alt="Tunnel" />
            <figcaption>
                <span>Tunnel with morning light</span>
                <svg
              class="card_icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </figcaption>
        </figure>
        <figure>
            <img src={Mountain} alt="Mountain house"/>
            <figcaption>
                <span>Mountain house</span>
                 <svg
              class="card_icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </figcaption>
        </figure>
      </section>
      <hr class="horizontal-line"/>
    </div>
  );
}
export default Gallery;
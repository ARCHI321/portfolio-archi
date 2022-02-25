import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";
// import { object } from "prop-types";

// const obj1 = {
//     a:23,
//     b:34,
// };

// console.log(Object.keys(obj1).length)

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadcaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    console.log(contactMeScreen)
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    console.log(window.innerHeight)
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };

  

  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;
    // console.log(rec,elementTop,elementBottom,window.innerHeight)

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    // console.log(partiallyVisible) 

    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;
    //   console.log(completelyVisible)  
    //   console.log(elementTop,elementBottom,window.innerHeight)  

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length<1) return;
    // console.log(event)
    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");
    //   console.log(fullyVisible,partiallyVisible)

      if (fullyVisible || partiallyVisible) {
        
        if (partiallyVisible && !screen.alreadyRendered) {
            
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}

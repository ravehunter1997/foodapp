import React,{Component} from "react";
import './QuickSearch.css'


class QuickSearch extends Component {
    render() {
        return <>
        <div id="quickSearch">
            <span id="QuickSearchHeading">
                Quick Search
            </span>
            <span id="QuickSubHeading">
                Find Restaurants By MealType
            </span>
            <div class="mainBox">
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/chatkaz.jpg" alt="rest"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="./listing.html">BreakFast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deal For Breakfast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/bombay.jpg" alt="rest"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="./listing.html">BreakFast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deal For Breakfast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/drinks.png" alt="rest"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="./listing.html">BreakFast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deal For Breakfast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/dinner.png" alt="rest"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="./listing.html">BreakFast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deal For Breakfast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/dominos.png" alt="rest"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="./listing.html">BreakFast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deal For Breakfast
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/food planet.jpg" alt="rest"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="./listing.html">BreakFast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Deal For Breakfast
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}

export default QuickSearch 
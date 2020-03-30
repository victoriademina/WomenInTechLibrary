import React, { Component, Fragment } from "react";
import Home from "../home/home";
import Header from "../header/header";
import "./app.css";
import Profiles, { data } from "../profiles/profiles";
import ContactForm from "../contact_us/contact_us";
import Footer from "../footer/footer";
import ProfilePage from "../profile_page/profile_page";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 'home' }
  }

  updateCurrentPage(newPage, _) {
    this.setState({ currentPage: newPage })
  }

  updatePageTitle(newTitle) {
    document.getElementById("page-title").textContent = newTitle;
  }

  render() {
    let innerPage;
    let callback = this.updateCurrentPage.bind(this);
    switch (this.state.currentPage) {
      case "home":
        innerPage = <Home onClickLearnMore={callback}/>;
        this.updatePageTitle("STEM Power")
        break;
      case "profiles":
        innerPage = <Profiles profileSelected={callback}/>;
        this.updatePageTitle("STEM Power | Profiles")
        break;
      // Add cases for other pages
      case "contact_us":
        innerPage = <ContactForm />;
        this.updatePageTitle("STEM Power | Contact us")
        break;
      default:
        let personData = data[this.state.currentPage]
        innerPage = <ProfilePage name={personData["name"]} image={personData["image"]} text={personData["text"]}/>
        this.updatePageTitle("STEM Power | " + personData["name"])
    }
    return (
      <main>
        <Header goToPage={callback} currentPage={this.state.currentPage} />
        {innerPage}
        <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>
      </main>
    );
  }
}

export default App;

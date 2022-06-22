import "./App.css";
import BrandLogo from "../Header/BrandLogo/brandLogo";
import ProfilePicture from "../Header/ProfilePic/profilePic";
import BurgerMenu from "../Header/Burger Menu/burgerMenu";
import Quotes from "../LowerSection/Quote/quote";
import WellBeing from "../LowerSection/WellBeingButton/wellBeingButton";
import SoundOnOff from "../LowerSection/SoundOnOff/SoundOnOff";
import WelcomeUser from "../TopSection/WelcomeUser/welcomeUser";
import Timer from "../TopSection/TimerTillBreak/TimerTillBreak";


function App() {
  return (
    <div className="App" id="outer-container">
      <header className="App-header">
        {/* <div id="page-wrap"> */}
        <BurgerMenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        {/* </div> */}
        <BrandLogo class="title" logo={BrandLogo} />
        <div className="profile">
          <ProfilePicture picture={ProfilePicture} />
        </div>
      </header>

      <main className="pageBody">


      <section className="TopSection">
        <WelcomeUser user="Farah"></WelcomeUser>
        <Timer timer="countdown"></Timer>
      </section>
        <section className="LowerSection">
          <SoundOnOff></SoundOnOff>
          <Quotes
            author="Abdullatif"
            quotes="Growth is internal, changes aren't noticed till too late."
          ></Quotes>
          <WellBeing></WellBeing>
        </section>
      </main>
    </div>
  );
}

export default App;

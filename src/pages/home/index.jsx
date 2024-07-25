import styled from "styled-components";
import home1 from "../../assets/images/home1.png";
import Typewriter from "typewriter-effect";
import Basement from "./basements";

const index = () => {
  return (
    <Wrapper>
      <div  className="position-relative bottom-100">
      <div
        className="w-100 img"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0%), rgba(0, 0, 0, 72%)), url(${home1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
        }}
      ></div>
      <div className="position-absolute text-center w-100 text-white text-desc pb-5">
        <h1 className="typewriter-border">
          <Typewriter
            options={{
              loop: true, // Enable looping
            }}
            onInit={(typewriter) => {
              const typewriterCycle = () => {
                typewriter
                  .typeString("<em>CONSTRUCTIONS AND RENOVATIONS</em>")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              };
              typewriterCycle(); // Start the initial cycle
            }}
          />
        </h1>
        <p>
          <strong>
            A team of certified professionals to help you improve your
          </strong>
        </p>
        <h2>HOME | OFFICE | STORE | RESTAURANTS</h2>
      </div>
      </div>
      <div className="personalize text-dark ">
        <div className="container text-center">
          <h1 style={{padding: "30px 30px"}}>
            <em>PERSONALIZED DESIGN</em>
          </h1>
        </div>
      </div>
      <Basement />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .text-desc {
    bottom: 50px;
    padding-bottom: 30px;
  }
  .typewriter-border {
    border-bottom: 2px solid white;
    display: inline-block;
    padding-bottom: 5px; /* Optional: Add some padding for better visual separation */
  }
  .personalize {
    background: #fd000078;
  }
`;
export default index;

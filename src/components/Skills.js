/* Logo Section  */
import meter1 from "../assets/img/Python-logo.svg.png";
import meter2 from "../assets/img/javascript-1.svg";
import meter3 from "../assets/img/c.svg";
import pandas from "../assets/img/pandas.svg";
import git from "../assets/img/git-icon.svg";
import Numpy from "../assets/img/numpy.svg";
import mysql from "../assets/img/mysql.svg";
import seaborn from "../assets/img/seaborn.svg";
import Tableau from "../assets/img/tableau.svg";
import Tensorflow from "../assets/img/tensorflow.svg";
import scikit_learn from "../assets/img/scikit-learn.svg";
import Pytorch from "../assets/img/pytorch-2.svg";
import Hadoop from "../assets/img/hadoop.svg";
import aws from "../assets/img/aws-2.svg";
import jupyter from "../assets/img/jupyter.svg";
import spark from "../assets/img/apache.svg";
import keras from "../assets/img/Keras.svg";





import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>During the past two years, I've diligently pursued self-study both through institutional resources and diverse external channels.<br></br> This effort has resulted in a robust accumulation of knowledge, hands-on experience, and valuable insights within the domain of data scientist</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={Numpy} alt="Image" />
                                <h5>Numpy</h5>
                            </div>
                            <div className="item">
                                <img src={pandas} alt="Image" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={seaborn} alt="Image" />
                                <h5>Seaborn</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={Tableau} alt="Image" />
                                <h5>Tableau</h5>
                            </div>
                            <div className="item">
                                <img src={Tensorflow} alt="Image" />
                                <h5>Tensorflow</h5>
                            </div>
                            <div className="item">
                                <img src={spark} alt="Image" />
                                <h5>Spark</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={scikit_learn} alt="Image" />
                                <h5>Scikit-Learn</h5>
                            </div>
                            <div className="item">
                                <img src={Pytorch} alt="Image" />
                                <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={jupyter} alt="Image" />
                                <h5>Jupiter</h5>
                            </div>
                            <div className="item">
                                <img src={Hadoop} alt="Image" />
                                <h5>Hadoop</h5>
                            </div>
                            <div className="item">
                                <img src={keras} alt="Image" />
                                <h5>Keras </h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import Axios from '../../Axios/Axios'
import "./styles.scss";

const Contact = () => {
  const [data, setdata] = useState([])
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [text, setText] = useState([])
  console.log(data)
  useEffect(() => {
    const getApi = async () => {
      await Axios.get("/telegram")
        .then(res => setdata(res.data))
        .catch(error => console.error(error))
    }
    getApi()
  }, [])

  const formSubmit = async (e) => {
    e.preventDefault()
    let newuser = {
      name,
      email,
      text,
    }
    await Axios.post("/telegram", newuser)
      .then(res => console.log(res))
      .catch(error => console.log(error))

    setName("")
    setEmail("")
    setText("")
  }
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form action="" onSubmit={formSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="name"
                    className="inputName"
                    type={"text"}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type={"text"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type={"text"}
                    rows="5"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button >Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;

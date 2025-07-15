import "./AboutUs.css"
import Layout from "../components/Layout";


export default function AboutUs() {
    return (
        <Layout>
            <div className="container">
                <div className="content">
                    <h1>Sobre nós</h1>
                    <h2>Subheading for description</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tellus sit amet mauris vehicula iaculis. Pellentesque eu lectus vel enim pharetra scelerisque et id sapien. Proin in aliquet orci. In a velit nec erat ornare congue sit amet id tortor.
                    </p>
                    <p>
                        Etiam velit nibh, pharetra non convallis eget, ullamcorper interdum tortor. Fusce lacinia congue accumsan. Morbi euismod luctus sapien id fringilla. Etiam lacus arcu, feugiat auctor tincidunt eu, ultrices et libero. Nulla eget neque augue. Aenean lacus sapien, fringilla sit amet tortor non, varius aliquam mi. Praesent egestas, neque a consectetur luctus, ipsum felis accumsan lorem, quis suscipit magna massa et ex. Vestibulum condimentum ipsum ac magna sagittis cursus. Aliquam pellentesque non nisl ut vulputate. In ac ipsum tristique, vehicula eros et, convallis erat. Phasellus magna risus, dignissim non elit ac, consectetur pulvinar mi. Nunc sit amet ligula ac enim vulputate maximus.
                    </p>
                </div>
                <div className="image">
                    <img src="/src/assets/AboutUs.jpg" alt="About Us" />
                </div>
            </div>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out!</p>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </Layout>
    )
}

import './Home.css'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div>
			<div className="intro">
				<h1>🍴 Grubbr</h1>
				<h4>"The Tinder For Food"</h4>
				<button> <Link to='sign-up' style={linkStyle}>Create an Account</Link></button>
				<p>Meet people in your area based on your common interests in restaurants...or not?</p>
			</div>
		</div>
	)
}

export default Home

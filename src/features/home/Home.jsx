import ContinueLearningCard from './ContinueLearningCard'
import DashboardStats from './DashboardStats'
import WelcomeHeader from './WelcomeHeader'
import './Home.css'

export default function Home() {
  return (
    <div className="home-dashboard">
      <WelcomeHeader />
      <ContinueLearningCard />
      <DashboardStats />
    </div>
  )
}

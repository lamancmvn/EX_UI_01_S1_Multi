import { BrowserRouter as Router } from "react-router-dom"
import AdminRoute from "./Admin.Route"
import TestRoute from "./Test.Route"
const Routes = () => {
  return (
    <Router>
      <AdminRoute />
      <TestRoute />
    </Router>
  )
}

export default Routes

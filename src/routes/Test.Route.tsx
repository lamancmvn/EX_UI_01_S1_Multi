import { render } from "@testing-library/react"
import { Switch, Route, Link } from "react-router-dom"
const TestRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path="/Test"
        component={() => (
          <div>
            <h2>Lam Lma</h2>
            <Link to="/Test/a">click 1</Link>
            <Route
              path="/Test/a"
              component={() => <Link to="/Test">click 2</Link>}
            />
          </div>
        )}
      />
    </Switch>
  )
}

export default TestRoute

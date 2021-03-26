import React from "react"
import { PATH } from "../constants/paths"
import { Switch, Route } from "react-router-dom"
import AdminPage from "../pages/Admin/Index"
const AdminRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.ADMIN}
        component={() => (
          <>
            <AdminPage />
          </>
        )}
      />
    </Switch>
  )
}

export default AdminRoute

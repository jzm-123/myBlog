import { RouteObject, useRoutes } from "react-router"
import Home from "../components/Home"
import About from "../components/About"
import Dashboard from "../components/Dashboard"
import CustomForm from "../components/CustomForm"
import XFlowDemo from "../components/antv/XFlowDemo"
const routeList: RouteObject[] = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  },
  {
    path: '/dashboard',
    Component: Dashboard
  },
  {
    path: '/table',
    Component: CustomForm
  },
  {
    path:'/antv',
    Component:XFlowDemo
  }
]
const renderRouter = () => {
  const element = useRoutes(routeList)
  return (element)
}
export default renderRouter
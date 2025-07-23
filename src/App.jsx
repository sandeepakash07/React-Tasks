import Accordion from "./components/Accordion"
import RandomColorGenerator from './components/RandomColorGenerator'
import StarRating from "./components/StarRating"
import ImageSlider from "./components/ImageSlider"
import LoadMore from "./components/LoadMore"
import TreeView from "./components/treeview/TreeView"
import SideMenu from "./components/treeview/data"
function App() {

  return (
    <div>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'}/> */}
      {/* <LoadMore/> */}
      <TreeView menus={SideMenu}/>

    </div>
  )
}

export default App

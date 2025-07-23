import MenuList from "./MenuList";

export default function TreeView({menus=[]}){

    return(
        <div className="flex justify-center items-center font-medium">
            <MenuList list={menus}/>
        </div>
    )
}
import MenuItem from "./MenuItem";

export default function MenuList({list=[]}){

    return(
        <div className="pl-6">
            {
                list&&list.length?
                list.map((item,index)=>(
                    <div key={index}>
                        <MenuItem item={item}/>
                    </div>
                ))
                :null
            }
        </div>
    )
}
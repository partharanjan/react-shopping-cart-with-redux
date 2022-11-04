import HeaderLayout from "./header-layout";

export default function Layout({children}){
    return(
        <div>
            <HeaderLayout/>
            <div>
                {children}
            </div>
        </div>
    )
}
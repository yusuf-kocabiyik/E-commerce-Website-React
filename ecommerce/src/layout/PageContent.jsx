import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { HomePage } from "../pages/HomePage";
import { ShopPage } from "../pages/ShopPage";

export default function PageContent(){
    return(
        <main className="flex-1">
            <Switch>
                
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/shop">
                    <ShopPage/>
                </Route>

                

            </Switch>


        </main>


    )
}
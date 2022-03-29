import Navbar from "components/Navbar"
import Home from "../Views/Home"
import Search from "../Views/Search"
import Library from "../Views/Library"
import {Switch, Route} from "react-router-dom";

export default function Content() {
    return (
        <main className="flex-auto overflow-auto">
            <Navbar />
            <div className="px-8 py-5">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/library">
                        <Library />
                    </Route>
                </Switch>
            </div>
        </main>
    )
}

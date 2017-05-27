/**
 * Created by Mehmet Gani Tombalak on 22/05/2017.
 */
import { BaseComponent } from "../../common/BaseComponent";
import {LoginTemplate} from "./login.template";

export default class Login extends BaseComponent<any, any> {
    render() {
        return new LoginTemplate().renderTemplate();
    }
}
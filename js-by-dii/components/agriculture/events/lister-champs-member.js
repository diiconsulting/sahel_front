import BaseTemplate from "../../base-template/template.js";
import Navbar from "../../navbar.js";
import Aside from "../../aside-nav.js";
import ListerChampsMember from "../lister-champs-member.js";


export const listerChampsMemberEvents = e => BaseTemplate.body(Navbar._create() , Aside._create() , ListerChampsMember._create());
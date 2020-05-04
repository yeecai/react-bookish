import React from "react";
import TypeLink from "../containers/TypeLink";
import { ShowFilters } from "../store/actions";

const Footer = () => (
  <div>
    <span>Show: </span>
    <TypeLink filter={ShowFilters.SHOW_ALL}>All</TypeLink>
    <TypeLink filter={ShowFilters.SHOW_TODO}>Active</TypeLink>
    <TypeLink filter={ShowFilters.SHOW_DONE}>Done</TypeLink>
  </div>
);

export default Footer;

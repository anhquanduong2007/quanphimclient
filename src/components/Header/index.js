import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { darkMode, search, showNavigation, hiddenNavigation } from "actions/ui";
import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
const NavMenu = styled.li`
  a {
    color: ${(props) =>
      props.ui.darkMode ? props.ui.colorTextLight : props.ui.colorTextDark};
  }
  i {
    color: ${(props) =>
      props.ui.darkMode ? props.ui.colorTextLight : props.ui.colorTextDark};
  }
`;
const Brand = styled(Link)`
  color: ${(props) =>
    props.ui.darkMode ? props.ui.colorTextLight : props.ui.colorTextDark};
  text-decoration: none
`;
const Navbar = styled(Grid)`
  background-color: ${(props) =>
    props.ui.darkMode
      ? props.togglenavbar
        ? "rgb(42, 39, 61)"
        : ""
      : props.togglenavbar
      ? "white"
      : ""};
  box-shadow: ${(props) =>
    props.togglenavbar
      ? "0 -1px 4px rgb(0 0 0 / 15%)"
      : "0 -1px 4px rgb(1 1 1 / 15%)"};
  display: flex;
  align-item: center;
  justify-content: space-between;
`;
const Header = (props) => {
  const { classes } = props;
  const ui = useSelector((state) => state.ui);
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const dispatch = useDispatch();
  const toggleNavbarHeader = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1) {
      setToggleNavbar(true);
    } else if (scrolled === 0) {
      setToggleNavbar(false);
    }
  }, [setToggleNavbar]);
  useEffect(() => {
    window.addEventListener("scroll", toggleNavbarHeader);
    return () => {
      window.addEventListener("scroll", toggleNavbarHeader);
    };
  }, [toggleNavbarHeader]);

  return (
    <>
      <Navbar
        ui={ui}
        togglenavbar={toggleNavbar ? toggleNavbar.toString() : undefined}
        container
        className={classes.navbar}
      >
        <Brand to = "/" ui={ui} className={classes.brand}>
          Quân Phim
        </Brand>
        <div className={classes.nav__menu}>
          <ul>
            <NavMenu ui={ui}>
              <NavLink to="/" exact activeClassName={classes.menu__active}>
                Home
              </NavLink>
            </NavMenu>
            <NavMenu ui={ui}>
              <NavLink to="/phimbo" activeClassName={classes.menu__active}>
                Phim Bộ
              </NavLink>
            </NavMenu>
            <NavMenu ui={ui}>
              <NavLink to="/phimle" activeClassName={classes.menu__active}>
                Phim Lẻ
              </NavLink>
            </NavMenu>
            <NavMenu ui={ui}>
              <NavLink
                to="/phimhoathinh"
                activeClassName={classes.menu__active}
              >
                Phim Hoạt Hình
              </NavLink>
            </NavMenu>
            <NavMenu ui={ui}>
              <NavLink
                to="/phimchieurap"
                activeClassName={classes.menu__active}
              >
                Phim Chiếu Rạp
              </NavLink>
            </NavMenu>
            <NavMenu
              ui={ui}
              onClick={() => {
                dispatch(darkMode());
              }}
            >
              <i className={ui.darkMode ? "bx bx-moon" : "bx bx-sun"}></i>
            </NavMenu>
            <NavMenu
              ui={ui}
              onClick={() => {
                dispatch(search());
              }}
            >
              <i className="bx bx-search"></i>
            </NavMenu>
          </ul>
        </div>
        <div className={classes.nav__menu_collapse}>
          <ul>
            <NavMenu
              ui={ui}
              onClick={() => {
                dispatch(darkMode());
              }}
            >
              <i className={ui.darkMode ? "bx bx-moon" : "bx bx-sun"}></i>
            </NavMenu>
            <NavMenu
              ui={ui}
              onClick={() => {
                dispatch(search());
              }}
            >
              <i className="bx bx-search"></i>
            </NavMenu>
            <NavMenu ui={ui}>
              {ui.navigation ? (
                <i
                  className="bx bx-x"
                  onClick={() => {
                    dispatch(hiddenNavigation());
                  }}
                ></i>
              ) : (
                <i
                  className="bx bx-list-ul"
                  onClick={() => {
                    dispatch(showNavigation());
                  }}
                ></i>
              )}
            </NavMenu>
          </ul>
        </div>
        <div
          className={classes.navgigation__collapse}
          style={{
            display: ui.navigation ? "flex" : "none",
           
          }}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={classes.menu__active}
                onClick={() => {
                  dispatch(hiddenNavigation());
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/phimbo"
                activeClassName={classes.menu__active}
                onClick={() => {
                  dispatch(hiddenNavigation());
                }}
              >
                Phim Bộ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/phimle"
                activeClassName={classes.menu__active}
                onClick={() => {
                  dispatch(hiddenNavigation());
                }}
              >
                Phim Lẻ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/phimhoathinh"
                activeClassName={classes.menu__active}
                onClick={() => {
                  dispatch(hiddenNavigation());
                }}
              >
                Phim Hoạt Hình
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/phimchieurap"
                activeClassName={classes.menu__active}
                onClick={() => {
                  dispatch(hiddenNavigation());
                }}
              >
                Phim Chiếu Rạp
              </NavLink>
            </li>
          </ul>
        </div>
      </Navbar>
    </>
  );
};
Header.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Header);

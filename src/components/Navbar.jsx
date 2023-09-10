import React, { Fragment } from "react";
import { AppBar, Box, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, Transition } from "@headlessui/react";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Box
      sx={{
        margin: "25px",
        borderRadius: "75px",
        marginLeft: "100px",
        boxShadow: 3,
      }}
    >
      <AppBar
        position="static"
        sx={{ background: "#f0f1f2", p: 2, borderRadius: "35px" }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          display="flex"
        >
          <Typography variant="h6" fontWeight="bold" color="black">
            Dashboard
          </Typography>
          <Button variant="outline-primary" className="absolute grid right-28">
            Features
          </Button>{" "}
          <Menu
            as="div"
            className="fixed inline-block text-left right-0 relative"
          >
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <AccountCircleIcon sx={{ fontSize: 32, color: "blue" }} />
                {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="locathost:3000/dashboard"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        style={{ textDecoration: "none" }}
                      >
                        View Profile
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="locathost:3000/dashboard"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        style={{ textDecoration: "none" }}
                      >
                        Change Password
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="locathost:3000/dashboard"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        style={{ textDecoration: "none" }}
                      >
                        Logout
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Navbar;

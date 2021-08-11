import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/client"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import PersonIcon from "@material-ui/icons/Person"
import AssignmentIcon from "@material-ui/icons/Assignment"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import { loadUser } from "../../redux/userActions"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function Header() {
  const [session] = useSession()

  // console.log(session)

  // const handleSignin = (e) => {
  //   e.preventDefault()
  //   signIn()
  // }

  const dispatch = useDispatch()

  const profile = useSelector((state) => state.profile)
  const { loading, error, dbUser } = profile

  // console.log(dbUser)

  useEffect(() => {
    if (!dbUser) {
      dispatch(loadUser())
    }
  }, [dbUser])

  const handleSignout = (e) => {
    e.preventDefault()
    signOut({ callbackUrl: `${window.location.origin}` })
    // router.push("/user/login")
  }

  const classes = useStyles()
  return (
    <AppBar position="static" style={{ color: "primary" }}>
      <Toolbar>
        <IconButton aria-label="menu">
          <Link href="/">{<img src="/v3.png" height="40px" alt="logo" />}</Link>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          OpenFreeUni
        </Typography>

        <>
          {dbUser ? (
            <>
              <div style={{ marginTop: "0.25rem" }}>
                <Link style={{ color: "white" }} href="/user/profile">
                  <Button color="inherit" style={{ marginRight: "0.5rem" }}>
                    Profile
                  </Button>
                </Link>
              </div>

              <div
                style={{
                  marginRight: "0.25rem",
                  marginLeft: "0.75rem",
                  marginTop: "0.75",
                }}
              >
                <Typography style={{ marginTop: "0.25rem" }}>
                  {" "}
                  Hello {dbUser.name}
                  {/* {dbUser.lastName} */}
                </Typography>
              </div>
              {/* {dbUser?.isAdmin && <AdminMenu />} */}
              <div style={{ marginTop: "0.25rem" }}>
                <Button
                  color="inherit"
                  style={{ marginRight: "0.5rem" }}
                  onClick={handleSignout}
                >
                  <ExitToAppIcon style={{ marginRight: "0.25rem" }} />
                  LogOut
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link href="/user/register">
                <Button color="inherit">
                  <AssignmentIcon style={{ marginRight: "0.25rem" }} />
                  Register
                </Button>
              </Link>
              <Link href="/user/login">
                <Button color="inherit">
                  <PersonIcon style={{ marginRight: "0.25rem" }} />
                  Login
                </Button>
              </Link>
            </>
          )}
        </>
      </Toolbar>
    </AppBar>
  )
}

export default Header

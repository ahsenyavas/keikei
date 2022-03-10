import Styles from "./index.module.scss";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Stack from "@mui/material/Stack";

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.list}>
        <ul className={Styles.list}>
          <li>Home</li>
          <Divider orientation="vertical" flexItem className={Styles.divider} />
          <li>Terms and Conditions</li>
          <Divider orientation="vertical" flexItem className={Styles.divider} />
          <li>Privacy Policy</li>
          <Divider orientation="vertical" flexItem className={Styles.divider} />
          <li>Collection Statement</li>
          <Divider orientation="vertical" flexItem className={Styles.divider} />
          <li>Help</li>
          <Divider orientation="vertical" flexItem className={Styles.divider} />
          <li>Manage Account</li>
        </ul>
      </div>
      <Stack direction="row" spacing={4} className={Styles.icons}>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </Stack>
    </div>
  );
}

const user = "dellamina";
const repo = "gitignore-cli";

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get(`https://raw.githubusercontent.com/${user}/${repo}/master/readme.md`)
    .then(
      res => {
          if (res.data) {
            document.getElementById("readme").innerHTML = new markdownit().render( res.data );
        }
      },
      err => {
        console.error(err.message, err);
      }
    );
});

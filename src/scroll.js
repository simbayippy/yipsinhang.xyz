let prevScrollpos = window.pageYOffset;
function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // Scrolling up, show header
    document.getElementById('header').style.top = '0';
  } else {
    // Scrolling down, hide header
    document.getElementById('header').style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
}

export default handleScroll
let leftNavMenu = document.getElementById('leftNavMenu');
if (leftNavMenu) {
    let leftNavToggleButton = document.getElementById('leftNavToggleButton');
    let leftNavMenu = document.getElementById('leftNavMenu');
    let leftNavMenuClose = document.getElementById('leftNavMenuClose');
    let leftNavToggleTxt = document.getElementById('leftNavToggleTxt');
    let leftNavToggleIcon = document.getElementById('leftNavToggleIcon');

    setTimeout(() => {
        leftNavToggleButton.style.display = 'block';
        leftNavToggleIcon.style.display = 'inline-block';
    }, 500);

    leftNavToggleButton.addEventListener('click', function () {
        leftNavToggleButton.style.display = 'none';
        leftNavMenu.classList.remove('leftNavMenuClose')
        leftNavMenu.classList.add('leftNavMenuOpen');
    });
    leftNavMenuClose.addEventListener('click', function () {
        leftNavToggleButton.style.display = 'inline';
        leftNavMenu.classList.add('leftNavMenuClose')
        setTimeout(() => {
            leftNavMenu.classList.remove('leftNavMenuOpen');
        }, 1000)
    })

    // setTimeout(()=> {
    //     leftNavToggleTxt.style.display = 'none';
    //     leftNavToggleIcon.style.display = 'inline-block';
    // }, 5000);

}
const menuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById('navbar-cta');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const farmTab = document.getElementById('farmTab');
const myFarmTab = document.getElementById('myFarmTab');
const farm = document.getElementById('farm');
const myFarm = document.getElementById('myFarm');

farmTab.addEventListener('click', () => {
    farmTab.classList.add('border-b-2', 'border-green-400', 'bg-gray-700/80');
    myFarmTab.classList.remove('border-b-2', 'border-green-400', 'bg-gray-700/80');
    farm.classList.remove('hidden');
    myFarm.classList.add('hidden');
});

myFarmTab.addEventListener('click', () => {
    myFarmTab.classList.add('border-b-2', 'border-green-400', 'bg-gray-700/80');
    farmTab.classList.remove('border-b-2', 'border-green-400', 'bg-gray-700/80');
    myFarm.classList.remove('hidden');
    farm.classList.add('hidden');
});

document.getElementById('stakeContainer').addEventListener('click', function (event) {
    if (event.target.closest('#stakeSection')) {
        return;
    }

    const stakeSection = document.getElementById('stakeSection');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIcon');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('unstakeContainer').addEventListener('click', function (event) {
    if (event.target.closest('#unstakeSection')) {
        return;
    }

    const stakeSection = document.getElementById('unstakeSection');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconUnstake');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('stakeContainerDua').addEventListener('click', function (event) {
    if (event.target.closest('#stakeSectionDua')) {
        return;
    }

    const stakeSection = document.getElementById('stakeSectionDua');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconDua');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('unstakeContainerDua').addEventListener('click', function (event) {
    if (event.target.closest('#unstakeSectionDua')) {
        return;
    }

    const stakeSection = document.getElementById('unstakeSectionDua');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconUnstakeDua');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('stakeContainerTiga').addEventListener('click', function (event) {
    if (event.target.closest('#stakeSectionTiga')) {
        return;
    }

    const stakeSection = document.getElementById('stakeSectionTiga');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconTiga');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('unstakeContainerTiga').addEventListener('click', function (event) {
    if (event.target.closest('#unstakeSectionTiga')) {
        return;
    }

    const stakeSection = document.getElementById('unstakeSectionTiga');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconUnstakeTiga');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});
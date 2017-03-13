let sortContainers = document.querySelectorAll('.Sort-select');
let toggleFullName = document.getElementById('toggle-full-name');
let listings = document.querySelectorAll('.Listing');
let listingTitles = document.querySelectorAll('.Listing-title');

let sortListings = function(ev) {
  let newValue = ev.target.value;
  let sortingType = ev.target.getAttribute('data-sorting');

  if (newValue === 'all') {
    document.querySelectorAll('.Listing.is-hidden').forEach(function(el) {
      el.classList.remove('is-hidden');
    })
    return;
  }

  listings.forEach(function(listing) {
    if (listing.getAttribute(`data-${sortingType}`) !== newValue) {
      listing.classList.add('is-hidden');
    } else {
      listing.classList.remove('is-hidden');
    }
  })
}

let minimalJobTitle = function(ev) {
  if (ev.target.checked) {
    listings.forEach(function(listing) {
      let listingTitle = listing.querySelector('.Listing-title');
      listingTitle.innerHTML = listing.getAttribute('data-title');
    })
  } else {
    listingTitles.forEach(function(listingTitle) {
      listingTitle.innerHTML = listingTitle.innerHTML.replace(/Junior/g, '').replace(/Graduate/g, '');
    })
  }
}

sortContainers.forEach(function(el) {
  el.addEventListener('change', (ev) => sortListings(ev), false);
})

toggleFullName.addEventListener('click', (ev) => minimalJobTitle(ev), false);

let sortContainers = document.querySelectorAll('.Sort-select');
let listings = document.querySelectorAll('.Listing');

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

sortContainers.forEach(function(el) {
  el.addEventListener('change', (ev) => sortListings(ev), false);
})

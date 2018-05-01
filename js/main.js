const studentList = document.getElementsByClassName('student-list');
const studentItems = $(studentList).children();
const paginationDiv = '<div class="pagination"><ul>';

let totalItems = studentItems.length;
let itemsPerPage = 10;
let currentPage = 1;
let searchResults = [];


//displays the correct number of students that depends on the current page
const showPage = (currentPage, itemsPerPage) => {
  let minIndex = (currentPage - 1) * itemsPerPage;
  let maxIndex = minIndex + itemsPerPage;
  $(studentItems).hide().slice(minIndex, maxIndex).show();
}


//sets up the pagination links
const appendPageLinks= (totalItems, itemsPerPage, func) => {
  let totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalItems > itemsPerPage) {
    $('.page').append(paginationDiv);
    for (var i = 1; i < totalPages + 1; i++) {
      let paginationLink = '<li><a href="#page-' + i + '"' + 'class="link">' + i + '</a></li>';
      $('.pagination ul').append(paginationLink);
    }
  }

  $(".link").on("click", function() {
    var href = $(this).attr('href');
    currentPage = href.split('-');
    currentPage = currentPage.toString();
    currentPage = currentPage.slice(currentPage.length - 1);
    currentPage = parseInt(currentPage);
    showPage(currentPage, itemsPerPage);
  });
}

//loads essential functions on page load
const onLoad = () => {
  appendPageLinks(totalItems, itemsPerPage, showPage(1, itemsPerPage));
}


onLoad();

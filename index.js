$(function() {
    function addEventHandlers() {
      $(".shopping-item-delete").on("click", function(event) {
        $(this)
          .closest("li")
          .remove();
      });
  
      $(".shopping-item-toggle").on("click", function(event) {
        $(this)
          .closest("li")
          .find(".shopping-item")
          .toggleClass("shopping-item_checked");
      });
    }
 
    $("#js-shopping-list-form").submit(event => {
      event.preventDefault();
  
      const newItem = $("#shopping-list-entry").val();
      $("shopping-list-entry").val("");
      $(".shopping-list").append(
        `<li>
              <span class="shopping-item">${newItem}</span>
              <div class="shopping-items-controls">
                  <button class="shopping-item-toggle">
                       <span class="button-label">check</span>
                  </button>
                  <button class="shopping-item-delete">
                       <span class="button-label">delete</span>
                  </button>
              </div>
          </li>`
      );
      // ensure new items get event handlers
      addEventHandlers();
    });
  
    // Add initial event handlers
    addEventHandlers();
  });
  

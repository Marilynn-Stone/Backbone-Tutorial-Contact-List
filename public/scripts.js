// PLAIN jQUERY
// jQuery DOMReady callback function to ensure that the DOM is ready and available
$(function() {
  // $("#add").click(function(e) {
  //   e.preventDefault();
    showAddForm();
  // });
});

// find the #add-edit-form element and show it using an animation
function showAddForm() {
  const addForm = new AddForm();
  addForm.render();
  
  $("#main").html(addForm.$el);
//   const form = $("#add-edit-form");
//   form.slideDown();
};

// event handler for the click event of a save button
$("#save").click(function(e) {
  const formData = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
    notes: $("#notes").val(),
  };

  $.ajax({
    url: "/contacts",
    type: "POST",
    dataType: "JSON",
    data: formData,
    success: function() {
      updateList(formData);
      clearForm();
    }
  });
});

function updateList(contact) {

};

function clearForm() {

};

//===============================================
// Migrating to Backbone

const AddForm = Backbone.View.extend({
  render: function() {
    const rawTemplate = $("#add-form-template").html();
    const compiledTemplate = _.template(rawTemplate);
    const renderedTemplate = compiledTemplate();
    this.$el.html(renderedTemplate);
    return this;
  }
});

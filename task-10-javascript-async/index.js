$(document).ready(function() {

    function showUsers() {
        fetch("https://gorest.co.in/public/v2/users")
            .then((data) => {
                return data.json();
            })
            .then((objectData) => {
                let tableData = "";
                objectData.map((values) => {
                    tableData += `<tr>
                <td>${values.name}</td>
                <td><button class="btn btn-primary view-more-btn" data-toggle="modal" data-target="#userModal" data-id="${values.id}">View More</button></td>
              </tr>`;
                });
                $("#tableBody").html(tableData);
            })
            .catch((err) => {
                console.log("error occured!");
            })
            .finally(() => console.log("done fine"));
    }
    showUsers();

    function displayDetails(id) {
        fetch("https://gorest.co.in/public/v2/users/" + id)
            .then((data) => {
                return data.json();
            })
            .then((objectData) => {
                $("#name").text(objectData.name);
                $("#email").text(objectData.email);
                $("#gender").text(objectData.gender);
            })
            .catch((err) => {
                console.log(err);
                console.log("error occured!");
            })
            .finally(() => console.log("done fine"));
    }

    $(document).on("click", ".view-more-btn", function() {
        const userId = $(this).data("id");
        displayDetails(userId);
    });

});
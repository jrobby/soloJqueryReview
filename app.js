$.ajax("data.json").then(function(response) {
    for(var it=0; it<response.length; it++) {

        var $content = '';

        var id = response[it].id;
        var gender=response[it].gender;
        var first_name=response[it].first_name;
        var last_name=response[it].last_name;
        var email=response[it].email;

        $content = 'ID: ' + id + '<br/>' + " Gender: " + gender + '<br/>' + 'First Name: ' +
            first_name + '<br/>' + 'Last Name: ' + last_name + '<br/>' +
            'Email: ' + email + '<br/>';

        $("#addHere").append($content);

    }
})

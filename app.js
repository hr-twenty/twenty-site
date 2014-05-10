
function linkedinLogin() {
  console.log("an auth event has occurred, recorded from login tag");
  
  var profile = IN.API.Profile('me')
  .fields([
    'id',
    'first-name',
    'last-name',
    'headline',
    'location:(name,country:(code))',
    'industry',
    'num-connections',
    'positions',
    'picture-url',
    'languages',
    'skills',
    'educations'
  ])
  .result(function(result) {
    var profile = {
      id: 'nil',
      firstName: 'nil',
      lastName: 'nil',
      headline: 'nil',
      pictureUrl: 'http://static2.businessinsider.com/image/509802cb69bedd6209000009/nicolas-cage-will-be-in-the-expendables-3.jpg',
      numConnections: 'nil',
      industry: 'nil'
    };

    $.ajax({
      type: 'POST',
      dataType: 'application/json',
      url: 'http://191.236.102.40:55555/user',
      data: _.merge(profile, result.values[0]),
      success: function() {
        console.log('success');
      },
      error: function() {
        console.log('error');
      }
    });
  });
}

function linkedinLogout() {
  console.log("a logout event has occurred, recorded from login tag");
}



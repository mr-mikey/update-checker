function showApiCallback(response) 
{
	if (response.data.length <0)
	{
		document.getElementById('p').innerHTML = "Error, array is empty.";
	}
	else
	{
		lastModifiedRepo = response.data[0].name;
		document.getElementsByTagName('p')[0].innerHTML = "Name of the last modified repository: <br> - " + lastModifiedRepo;
	}
}

var callbackElement = document.createElement('script');
callbackElement.src = 'https://api.github.com/users/allegro/repos?sort=pushed;callback=showApiCallback';
document.getElementsByTagName('head')[0].appendChild(callbackElement);
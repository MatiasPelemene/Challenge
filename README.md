# Challenge
CodeChallege DeviGet

Instalation:

must to have instaled java vmn , nodeJS, and selenium standalone server.

probably have to install webdriver.io package, as documentations says...

Clone the repository on this url https://github.com/MatiasPelemene/Challenge.git

Open a console with administrator permits, go to /repo start the selenium server with the command "selenium-standalone start", (no quotes!!!).

Open another terminal on repo directory run the command "npm test" this should lunch a suit with 2 test in it.


there is a configuration file with options to choose with which browser you want to launch the test,. name as : wdio.conf.js


Issues:

-It took time to install nodeJS and the selenium server.
-If you install webdriver.io folowing the documentation you'll have problems with mocha framework, test's time duration is set by default in 10 seconds, my computer is very old!!! so i had to add this in value wdio.conf.js to run the tests. I spend a time serching for the solution on websites like stackoverflow and git   

I am not familiarized with mocha framework.


chai asserts gives me little issues but fixed them fast, i need more time to spend on the library.

webdriver.io proposes a pageObject patter to implement, i would have liked to have more time to spend reading on it. I think it is necessary for a project to grow organized.


It took me about 4 hours to reading and implementing this challenge , i hope you like it :)
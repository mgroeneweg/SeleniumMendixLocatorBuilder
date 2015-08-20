# SeleniumMendixLocatorBuilder
Selenium locator builder for easy Mendix test recording

Selenium can be used to test Mendix 5 applications as described here:
https://world.mendix.com/display/howto50/Testing+Mendix+applications+using+Selenium+IDE

However, you have to manually correct the locators in the recorded steps because HTML tag IDs are generated dynamically and will be different with each run of the same page.

This is tedious work, so let the tools do the dirty work please...

That is where this Selenium plugin steps in: When added to the Selenium IDE, the test steps will have mx-name- CSS selectors rather than the Selenium default. It will also look for parent grids and list views and add selectors to get the correct row by it's index.

## Installation
Steps to install:

- Download MendixNameLocatorBuilder.js from the repository and save it on your local disk
- Open the Selenium options dialog
- At the general tab, select the downloaded file as IDE extension and click OK
- Restart Selenium
- Open the Selenium options dialog again.
- At the Locator Builders tab, drag css:MendixName to the top.
- Restart Selenium (to be safe)
- Happy recording! :-)

## Use cases covered

### Using https://ux.mendix.com/

- Buttons
- Form input elements, dates too (input date value, not by using the calendar popup)
- Tabs
- Data grid rows
- Clicking a button in a template grid and listview


### Using my own apps

- Reference selectors
- Enumeration dropdowns
- Double click a datagrid row to open details. (Selenium records two clicks, delete one and change the other into doubleclick)
- Items in nested template grids

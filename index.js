'use strict';

const self = require("sdk/self");
const actionButton = require("sdk/ui/button/action");
const doHandler = require("./lib/2dohandler");
const tabs = require('sdk/tabs');
const selection = require("sdk/selection");


var button = actionButton.ActionButton({
  id: "add-to-2do",
  label: "Add to 2Do",
  icon: "./icon-16.png",
  onClick: trigger2DoItem
});


function trigger2DoItem(){
	let currentUrl = tabs.activeTab.url;
	let currentTitle = tabs.activeTab.title;
	let currentSelection = (selection.text) ? selection.text : '';
	console.log('clicked');
	doHandler.submitToInbox(currentUrl, currentTitle, currentSelection);
}
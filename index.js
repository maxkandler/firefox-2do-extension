'use strict';

const self = require("sdk/self");
const { ActionButton } = require("sdk/ui/button/action");
const doHandler = require("./lib/2dohandler");
const tabs = require('sdk/tabs');
const selection = require("sdk/selection");

var button = ActionButton({
  id: "add-to-2do",
  label: "Add to 2Do",
  icon: {
    "18": self.data.url("./icon-18.png"), 
    "32": self.data.url("./icon-32.png"),
    "36": self.data.url("./icon-36.png"),
    "64": self.data.url("./icon-64.png") 
  },
  onClick: trigger2DoItem
});


function trigger2DoItem(){
  let currentUrl = tabs.activeTab.url;
  let currentTitle = tabs.activeTab.title;
  let currentSelection = (selection.text) ? selection.text : '';

  doHandler.submitToInbox(currentUrl, currentTitle, currentSelection);
}
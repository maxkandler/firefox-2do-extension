'use strict';

const Request = require('sdk/request').Request;
const tabs = require('sdk/tabs');

module.exports = {
  submitToInbox: (inUrl, inTitle, inSelection) => {
  	
    if (!inUrl || !inTitle) {
      console.log('Missing data.');
      return;
    }

    let comment = inUrl;
    if (inSelection) {
      comment += '\n';
      comment += '---\n';
      comment += inSelection;
    }

    comment = encodeURI(comment);
    let title = encodeURI(inTitle);

    let url = 'twodo://x-callback-url/add?task=' + title + '&note=' + comment;

    try {
      Request({
        url: url,
      }).head();
    }catch (e) {
      console.log(e);
    }

  },

};

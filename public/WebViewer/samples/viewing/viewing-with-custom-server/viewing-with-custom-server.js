// @link WebViewerInstance: https://www.pdftron.com/api/web/WebViewerInstance.html
// @link WebViewerInstance.loadDocument: https://www.pdftron.com/api/web/WebViewerInstance.html#loadDocument__anchor

WebViewer(
  {
    path: '../../../lib',
    initialDoc: 'https://first-response-mobile-guide.s3.us-east-2.amazonaws.com/protocol/acute-abdomen.pdf',
  },
  document.getElementById('viewer')
).then(instance => {
  samplesSetup(instance);

  document.getElementById('select').onchange = e => {
    if (e.target.value === 'https://first-response-mobile-guide.s3.us-east-2.amazonaws.com/protocol/acute-abdomen.pdf') {
      instance.loadDocument(e.target.value, {
        decrypt: instance.iframeWindow.CoreControls.Encryption.decrypt,
        decryptOptions: {
          p: 'foobar12',
          type: 'aes',
          error: msg => {
            alert(msg);
          },
        },
      });
    } else {
      instance.loadDocument(e.target.value);
    }
  };

  document.getElementById('file-picker').onchange = e => {
    const file = e.target.files[0];
    if (file) {
      instance.loadDocument(file);
    }
  };

  document.getElementById('url-form').onsubmit = e => {
    e.preventDefault();
    instance.loadDocument(document.getElementById('url').value);
  };
});

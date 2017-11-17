// Require Models
let Document = require('../models/document');

// Async
// let async = require('async');

// Display list of documents on index page
exports.index = function(req, res, next) {
  Document.find({}).exec(function(err, documents) {
    if(err) {
      return next(err);
    }
    // Success
    res.render('document/document_index', {
      title: 'All Documents',
      documents: documents
    });
  });
}

// Display detail page for a specific document
exports.document_detail = function(req, res, next) {
  Document.findById(req.params.id).exec(function (err, document) {
    if(err) {
      return next(err);
    }
    // Success
    res.render('document/document_detail', {
      title: document.title,
      document: document
    });
  });
};

// Display document create form on GET
exports.document_create_get = function(req, res, next) {
  res.render("document/document_form", {
    title: 'Express Documents',
  });
};

// Handle document create on POST
exports.document_create_post = function(req, res, next) {

  let document = new Document({
    title: req.body.title,
    body: req.body.body,
  });
  console.log("BOOK: " + document);

  document.save(function(err) {
    if (err) {
      return next(err);
    }
    //successful - redirect to new book record.
    res.redirect(document.url);
  });
};

// Handle document DELETE
exports.document_delete = function(req, res, nex) {
  Document.findByIdAndRemove(req.body.documentId).exec(function (err, document) {
    if(err) {
      next(err);
    }
    // Success
    res.redirect('/document');
  });
};
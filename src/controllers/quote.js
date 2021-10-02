const Quote = require('../../src/models/quote');

exports.getAllQuotes = (req, res, next) => {

     const category = req.body.category;

     const perPage = req.body.perPage || 10;
     const currentPage = req.body.currentPage || 1;

     const querySearch = category ? 
     {category: category, isConfirmed: true} : {isConfirmed: true};

     Quote.find(querySearch).countDocuments()
     .then(count => {
          totalData = count;
          return Quote.find(querySearch)
          .skip((parseInt(currentPage)-1)*parseInt(perPage))
          .limit(parseInt(perPage));
     })
     .then(result => {
          res.status(200).json({
               message : "All Quote Fetched",
               data: result,
               total_data: totalData,
               per_page: perPage,
               current_page: currentPage,
          });
     })
     .catch(err => {
          next(err);
     });
}

exports.getAllUserQuotes = (req, res, next) => {

     const userId = req.body.userId;
     const perPage = req.body.perPage || 10;
     const currentPage = req.body.currentPage || 1;

     Quote.find({user: userId}).countDocuments()
     .then(count => {
          totalData = count;
          return Quote.find(querySearch)
          .skip((parseInt(currentPage)-1)*parseInt(perPage))
          .limit(parseInt(perPage));
     })
     .then(result => {
          res.status(200).json({
               message : "All Quote Fetched",
               data: result,
               total_data: totalData,
               per_page: perPage,
               current_page: currentPage,
          });
     })
     .catch(err => {
          next(err);
     });
}

exports.addQuote = (req, res, next) => {

     const createQuote = new Quote({
          category: req.body.category,
          text: req.body.text,
          user: req.body.userId,
          isConfirmed: false,
     });

     createQuote.save()
     .then(result => {
          res.status(200).json({
               message: "New Quote Created",
               data: result,
          });
     })
     .catch(err => {
          next(err);
     });
}

exports.confirmQuote = (req, res, next) => {

     const quoteId = req.body.quoteId;

     Quote.findById(quoteId)
     .then(quote => {
          if(!quote) res.status(400).json({message: "Quote not found"});

          quote.isConfirmed = true;
          return quote.save();
     })
     .then(result => {
          res.status(200).json({
               message: "Quote Confirmed",
               data: result,
          });
     })
     .catch(err => {
          next(err);
     });
}

exports.deleteQuote = (req, res, next) => {
     
     const quoteId = req.body.quoteId;

     Quote.findByIdAndRemove(quoteId)
     .then(result => {
          res.status(200).json({
               message: "Quote Deleted",
               data: result,
          });
     })
     .catch(err => {
          next(err);
     });
}
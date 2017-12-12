function hbsHelpers(Handlebars) {
    Handlebars.registerHelper('for', function(from, to, incr, block) {
        var accum = '';
        for (var i = from; i < to; i += incr)
            accum += block.fn(i);
        return accum;
    });

    // More helpers...
    Handlebars.registerHelper('in', function(value) {
        return parseInt(value) + 1;
    });
}

module.exports = hbsHelpers;
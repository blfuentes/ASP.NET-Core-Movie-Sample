var gulp = require('gulp');
var del = require('del');

var nodeRoot = './node_modules/';
var targetPath = './wwwroot/lib/';
var scriptsPath = './Scripts/';

gulp.task('clean', function () {
    return del([targetPath + '/**/*']);
});

gulp.task('default', done => {
    gulp.src(nodeRoot + "cldrjs/dist/cldr.js").pipe(gulp.dest(targetPath + "/cldrjs/dist"));
    gulp.src(nodeRoot + "cldrjs/dist/cldr/event.js").pipe(gulp.dest(targetPath + "/cldrjs/dist/cldr"));
    gulp.src(nodeRoot + "cldrjs/dist/cldr/supplemental.js").pipe(gulp.dest(targetPath + "/cldrjs/dist/cldr"));

    gulp.src(nodeRoot + "cldr-data/supplemental/likelySubtags.json").pipe(gulp.dest(targetPath + "/cldr-data/supplemental"));
    gulp.src(nodeRoot + "cldr-data/main/es/numbers.json").pipe(gulp.dest(targetPath + "/cldr-data/main/es"));
    gulp.src(nodeRoot + "cldr-data/main/en-US-POSIX/numbers.json").pipe(gulp.dest(targetPath + "/cldr-data/main/en-US-POSIX"));
    gulp.src(nodeRoot + "cldr-data/main/de/numbers.json").pipe(gulp.dest(targetPath + "/cldr-data/main/de"));
    gulp.src(nodeRoot + "cldr-data/supplemental/numberingSystems.json").pipe(gulp.dest(targetPath + "/cldr-data/supplemental"));
    gulp.src(nodeRoot + "cldr-data/main/es/ca-gregorian.json").pipe(gulp.dest(targetPath + "/cldr-data/main/es"));
    gulp.src(nodeRoot + "cldr-data/main/en-US-POSIX/ca-gregorian.json").pipe(gulp.dest(targetPath + "/cldr-data/main/en-US-POSIX"));
    gulp.src(nodeRoot + "cldr-data/main/de/ca-gregorian.json").pipe(gulp.dest(targetPath + "/cldr-data/main/de"));
    gulp.src(nodeRoot + "cldr-data/main/es/timeZoneNames.json").pipe(gulp.dest(targetPath + "/cldr-data/main/es"));
    gulp.src(nodeRoot + "cldr-data/main/en-US-POSIX/timeZoneNames.json").pipe(gulp.dest(targetPath + "/cldr-data/main/en-US-POSIX"));
    gulp.src(nodeRoot + "cldr-data/main/de/timeZoneNames.json").pipe(gulp.dest(targetPath + "/cldr-data/main/de"));
    gulp.src(nodeRoot + "cldr-data/supplemental/timeData.json").pipe(gulp.dest(targetPath + "/cldr-data/supplemental"));
    gulp.src(nodeRoot + "cldr-data/supplemental/weekData.json").pipe(gulp.dest(targetPath + "/cldr-data/supplemental"));


    gulp.src(nodeRoot + "globalize/dist/globalize.js").pipe(gulp.dest(targetPath + "/globalize/dist"));
    gulp.src(nodeRoot + "globalize/dist/globalize/number.js").pipe(gulp.dest(targetPath + "/globalize/dist/globalize"));
    gulp.src(nodeRoot + "globalize/dist/globalize/date.js").pipe(gulp.dest(targetPath + "/globalize/dist/globalize"));

    gulp.src(scriptsPath + "jquery.validation.globalize.1.1.0/Scripts/jquery.validate.globalize.js").pipe(gulp.dest(targetPath + "/jquery-validation-globalize"));

    gulp.src(nodeRoot + "bootstrap/dist/css/bootstrap.css").pipe(gulp.dest(targetPath + "/bootstrap/dist/css"));
    gulp.src(nodeRoot + "bootstrap/dist/js/bootstrap.bundle.js").pipe(gulp.dest(targetPath + "/bootstrap/dist/js"));

    gulp.src(nodeRoot + "jquery/dist/jquery.js").pipe(gulp.dest(targetPath + "/jquery/dist"));

    gulp.src(nodeRoot + "jquery-validation/dist/jquery.validate.js").pipe(gulp.dest(targetPath + "/jquery-validation/dist"));

    gulp.src(nodeRoot + "jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js").pipe(gulp.dest(targetPath + "/jquery-validation-unobtrusive"));
    done();
});
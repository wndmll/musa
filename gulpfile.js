var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function(){
    return gulp.src(['classes/**'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js'));
});

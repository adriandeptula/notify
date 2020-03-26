// var gulp = require('gulp');
// var autoprefixer = require('gulp-autoprefixer');

// gulp.task('styles', function (){
//     gulp.src('styles/style.css')
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('build'))
// });

// gulp.task('watch', function(){
//     gulp.watch('styles/style.css', ['styles']);
// });

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
exports.default = () => (
    gulp.src('styles/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
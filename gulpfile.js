/// <binding BeforeBuild='purgecss' />
const gulp = require('gulp')
const purgecss = require('gulp-purgecss')

gulp.task('purgecss', () => {
    return gulp.src(['./wwwroot/lib/bootstrap/dist/css/bootstrap.min.css',
        './wwwroot/lib/jquery-toast-plugin/jquery.toast.min.css'])
        .pipe(purgecss({
            content: ['./Views/**/*.cshtml', './Pages/**/*.cshtml'],
            safelist: [/modal-.*/]
        }))
        .pipe(gulp.dest('./wwwroot/css'))
})

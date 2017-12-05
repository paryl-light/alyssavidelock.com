// MOBILE MENU TRIGGER
reName();
$(window).on('load', function() {
	$(window).on('resize', function( ){
		projectHeight( );
	});
	projectHeight( );
	$('.menu-bar').on('click', function( ){
		$('.navigation-container').toggleClass('show-nav');
	});
	showObjects();
	$('.tab-open').on('click', function( ){
		$('.contact-form.header-form').toggleClass('show-form');
	});
	scrollMenu();
});
function scrollMenu() {
	var navItems = $('.nav-item');
	navItems.each(function( ){
		var thisA = $(this).children('a');
		var offsetTop = $(thisA.attr('href')).offset().top;
		thisA.on('click', function( ){
			$('.hero.parallax-container').animate({ scrollTop: offsetTop});
			return false;
		});
	});
}
function reName(){
	if(window.location.hostname.match(/alyssa/)){
		var hsContent = $('.hsContent');
		hsContent.html(hsContent.html().replace(/Ryan/, "Alyssa"));
		document.title = document.title.replace(/Ryan/, "Alyssa");
		var aboutMe = $('.about-me > .col-lg-6');
		aboutMe.each(function( ){
			var aboutThis = $(this);
			aboutThis.html(aboutThis.html().replace(/Ryan/, "Alyssa"));
		});
	}
}
function projectHeight( ){
	var newHeight;
	$('.project').each(function( ){
		var project = $(this);
		var projectDesc = project.children().children('.project-description');
		project.off('mouseenter').on('mouseenter', function( ){
			var newHeight = projectDesc.children('span').outerHeight(true);
			projectDesc.height(newHeight);
			project.siblings().removeClass('active-project');
			project.addClass('active-project');
		});
		project.off('mouseleave').on('mouseleave', function( ){
			if($(window).width() > 768){
				projectDesc.height(0);
			}
			project.removeClass('active-project');
		});
	})
}
function showObjects() {
	var skill_container = $('.skills');
	$('.parallax-container').on('scroll', function( ){
		if(isScrolledIntoView(skill_container[0]) === true && skill_container.hasClass('skill-appear') === false){
			skill_container.addClass('skill-appear');
		}
		else if(isScrolledIntoView(skill_container[0]) === false && skill_container.hasClass('skill-appear') === true) {
			skill_container.removeClass('skill-appear');
		}
	});
}

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
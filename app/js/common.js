$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитрлер">'
		},
		offCanvas: {
			
		}
	});

	var api = $("#my-menu").data( "mmenu" );
		api.bind( "open:finish", function( ) {
			$('.hamburger').addClass('is-active');
			});
			api.bind( "close:finish", function( ) {
				$('.hamburger').removeClass('is-active');
				});

				$("#my-menu").click(function() {
					api.close();
			});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});


	
	
});

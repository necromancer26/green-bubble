import { Component } from '@angular/core';
import 'slick-carousel';
declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent {
  ngOnInit() {
    $('.carausel-3-columns').each(function (this: any, key: number, item: any) {
      var id = $(this).attr('id');
      var sliderID = '#' + id;
      var appendArrowsClassName = '#' + id + '-arrows';

      $(sliderID).slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        prevArrow:
          '<span class="slider-btn slider-prev"><i class="fi-rs-arrow-small-left"></i></span>',
        nextArrow:
          '<span class="slider-btn slider-next"><i class="fi-rs-arrow-small-right"></i></span>',
        appendArrows: appendArrowsClassName,
      });
    }); 
  }
}

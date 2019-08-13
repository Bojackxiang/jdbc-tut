import { animation, trigger, state, style, animate, transition } from '@angular/animations';

export const fadein = animation(
    trigger('fadeIn',
        [state('in', style({ opacity: 1 })), transition(':enter', [style({ opacity: 0 }), animate(800)])])
)

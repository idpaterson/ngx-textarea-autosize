import { AfterViewChecked, ElementRef } from '@angular/core';
export declare class AutosizeDirective implements AfterViewChecked {
    private elem;
    constructor(elem: ElementRef);
    ngAfterViewChecked(): void;
    private resize();
}

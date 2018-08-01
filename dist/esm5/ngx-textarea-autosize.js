import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(elem) {
        this.elem = elem;
    }
    AutosizeDirective.prototype.ngAfterViewChecked = function () {
        this.resize();
    };
    AutosizeDirective.prototype.resize = function () {
        var textarea = (this.elem.nativeElement);
        var borderHeight = textarea.offsetHeight - textarea.clientHeight;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + borderHeight + "px";
    };
    return AutosizeDirective;
}());
AutosizeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'textarea[autosize]',
                host: {
                    'rows': '1',
                    'style': 'overflow: hidden'
                }
            },] },
];
AutosizeDirective.ctorParameters = function () { return [
    { type: ElementRef }
]; };
AutosizeDirective.propDecorators = {
    resize: [{ type: HostListener, args: ['input',] }]
};
var TextareaAutosizeModule = /** @class */ (function () {
    function TextareaAutosizeModule() {
    }
    return TextareaAutosizeModule;
}());
TextareaAutosizeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AutosizeDirective],
                exports: [AutosizeDirective]
            },] },
];

export { TextareaAutosizeModule, AutosizeDirective as ɵa };
//# sourceMappingURL=ngx-textarea-autosize.js.map

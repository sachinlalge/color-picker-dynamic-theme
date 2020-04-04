import { Component, ViewContainerRef } from '@angular/core';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {
  color1: any;

  private themeWrapper = document.querySelector('body');

  constructor(public vcRef: ViewContainerRef, private cpService: ColorPickerService) { }

  onSubmit(form) {
    this.global(form.value);
  }

  global(stylesheet) {
    console.log(stylesheet);

    // Navigation Styles
    if (stylesheet.globalNavColor) {
      this.themeWrapper.style.setProperty('--navColor', stylesheet.globalNavColor);
    }
    if (stylesheet.globalNavBackground) {
      this.themeWrapper.style.setProperty('--navBackground', stylesheet.globalNavBackground);
    }

    // Card Styles
    if (stylesheet.globalCardColor) {
      this.themeWrapper.style.setProperty('--cardColor', stylesheet.globalCardColor);
    }
    if (stylesheet.globalNavBackground) {
      this.themeWrapper.style.setProperty('--cardBackground', stylesheet.globalCardBackground);
    }

    // Footer Styles
    if (stylesheet.globalFooterColor) {
      this.themeWrapper.style.setProperty('--footerColor', stylesheet.globalFooterColor);
    }
    if (stylesheet.globalFooterBackground) {
      this.themeWrapper.style.setProperty('--footerBackground', stylesheet.globalFooterBackground);
    }
    if (stylesheet.globalFooterAlignment) {
      this.themeWrapper.style.setProperty('--footerAlignment', stylesheet.globalFooterAlignment);
    }

    // Button Styles
    if (stylesheet.globalButtonColor) {
      this.themeWrapper.style.setProperty('--buttonColor', stylesheet.globalButtonColor);
    }
    if (stylesheet.globalButtonBackground) {
      this.themeWrapper.style.setProperty('--buttonBackground', stylesheet.globalButtonBackground);
    }
  }
  // ====================================================================

  public onEventLog(event: string, data: any): void {
    console.log(event, data);
    // console.log('data-color',data.color);

  }

  // public onChangeColor(color: string): void {
  //   console.log('Color changed:', color);
  // }

  // public onChangeColorCmyk(color: string): Cmyk {
  //   const hsva = this.cpService.stringToHsva(color);

  //   if (hsva) {
  //     const rgba = this.cpService.hsvaToRgba(hsva);
  //     return this.cpService.rgbaToCmyk(rgba);
  //   }
  //   return new Cmyk(0, 0, 0, 0);
  // }

  // public onChangeColorHex8(color: string): string {
  //   const hsva = this.cpService.stringToHsva(color, true);
  //   if (hsva) {
  //     return this.cpService.outputFormat(hsva, 'rgba', null);
  //   }

  //   return '';
  // }
}
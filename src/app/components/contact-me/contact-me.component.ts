import { Component, ElementRef, ViewChild } from '@angular/core';
import { annotate } from 'rough-notation';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  @ViewChild('name') name!: ElementRef<HTMLInputElement>;
  @ViewChild('eMail') eMail!: ElementRef<HTMLInputElement>;
  @ViewChild('message') message!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('mailSent') mailSent!: ElementRef<HTMLElement>;
  @ViewChild('submitBtn') submitBtn!: ElementRef<HTMLButtonElement>;
  isNameEmpty = false;
  isEmailEmpty = false;
  isMessageEmpty = false;
  isMailSent = false;

  ngOnInit(): void {
    this.underlineHeading();
  }

  async sendMail() {
    let formDataToSend = new FormData();
    this.submitBtn.nativeElement.disabled = true;
    formDataToSend.append('name', this.name.nativeElement.value);
    formDataToSend.append('message', this.message.nativeElement.value);

    await fetch('https://nishan-singh.com/send_mail/send_mail.php', {
      method: 'POST',
      body: formDataToSend,
    });

    this.isMailSent = true;
    this.togglePopUp();
    this.submitBtn.nativeElement.disabled = false;
  }

  togglePopUp() {
    const popUpStart = setTimeout(() => {
      this.mailSent.nativeElement.classList.add('pop-up');
    }, 25);
    const popUpEnd = setTimeout(() => {
      this.mailSent.nativeElement.classList.remove('pop-up');
      clearTimeout(popUpStart);
    }, 2400);
    setTimeout(() => {
      this.isMailSent = false;
      clearTimeout(popUpEnd);
    }, 2500);
  }

  underlineHeading() {
    let underlineHeading = annotate(
      document.querySelector('#contact-hd-underline') as HTMLElement,
      {
        type: 'underline',
        color: '#A8DF8E',
        strokeWidth: 3,
      },
    );
    underlineHeading.show();
  }
}

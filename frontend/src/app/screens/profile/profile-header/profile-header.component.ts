import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../models/user.model';
import { Session } from '../../../services/session.service';

@Component({
    selector: 'pg-profile-header',
    templateUrl: './profile-header.component.html',
    styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent {

    @Input() user: User;
    @Output() openSettings = new EventEmitter<any>();
    @Output() openEditProfile = new EventEmitter<any>();

    constructor(private session: Session) {}

    isCurrentUser() {
        if (this.user === undefined) {
            return false;
        }
        return this.session.userId() === this.user.id;
    }

    onSettingsClick() {
        this.openSettings.emit();
    }

    onEditProfileClick() {
        this.openEditProfile.emit();
    }

}

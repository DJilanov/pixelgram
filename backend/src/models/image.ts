import { ObjectID } from 'mongodb';

import { User } from './user';

export class Image {

    _id: ObjectID;
    ownerId: ObjectID;
    filename: string;
    dateCreated: string;
    description: string;
    likedUsers: ObjectID[];

}

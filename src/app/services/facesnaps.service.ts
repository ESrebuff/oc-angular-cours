import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from '../models/snap-type.type';

@Injectable({
    providedIn: 'root',
})

export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        new FaceSnap(
            'Archibald',
            'Mon meilleur ami depuis toujours !',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            1,
        ),
        new FaceSnap(
            'Archibalddd',
            'Mon meilleur ami depuis toujours !',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            30000,
        ).withHashLocation('à la montagne')
    ]

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found');
        }
        return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const foundFaceSnap: FaceSnap | undefined = this.getFaceSnapById(faceSnapId)
        foundFaceSnap.snap(snapType);
    }


}
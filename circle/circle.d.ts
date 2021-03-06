import { ElementRef } from '@angular/core';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
export declare class CircleElement {
    private mapService;
    private groupService;
    private popupService;
    private elementText;
    private LeafletElement;
    private LeafletGroup;
    lat: number;
    lon: number;
    radius: number;
    mouseover: string;
    onclick: string;
    Options: any;
    circle: any;
    constructor(mapService: MapService, groupService: GroupService, popupService: PopupService, elementText: ElementRef, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}

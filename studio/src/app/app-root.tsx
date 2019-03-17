import {Component, Prop} from '@stencil/core';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.scss'
})
export class AppRoot {

    @Prop({connect: 'ion-menu-controller'}) lazyMenuController!: HTMLIonMenuControllerElement;

    render() {
        return ([
            <ion-app>
                <ion-router useHash={false}>
                    <ion-route url="/" component="app-home"/>
                    <ion-route url="/editor" component="app-editor"/>

                    <ion-route url="/about" component="app-about"/>
                </ion-router>

                <ion-split-pane when="lg">
                    <ion-menu id="ion-menu" side="start" type="push" swipeGesture={false}>
                        <app-navigation logo={true} menuToggle={false} user={false}></app-navigation>
                        <ion-content>
                            <ion-menu-toggle autoHide={false}>
                                <ion-list>
                                    <ion-item class="user">
                                        <app-avatar slot="start" src="https://pbs.twimg.com/profile_images/941274539979366400/bTKGkd-O_400x400.jpg"></app-avatar>
                                        <ion-label>David Dal Busco</ion-label>
                                    </ion-item>

                                    <ion-item-divider>
                                        <ion-label>Presentations</ion-label>
                                        <ion-button size="small" slot="end" shape="round" margin-end href="/editor" routerDirection="forward">
                                            <ion-icon name="book" slot="start"></ion-icon>
                                            <ion-label>New</ion-label>
                                        </ion-button>
                                    </ion-item-divider>

                                    <ion-item href="/editor" routerDirection="forward">
                                        <ion-icon name="book" slot="start"></ion-icon>
                                        <ion-label>Presentation A</ion-label>
                                    </ion-item>

                                    <ion-item href="/editor" routerDirection="forward">
                                        <ion-icon name="book" slot="start"></ion-icon>
                                        <ion-label>Presentation B</ion-label>
                                    </ion-item>
                                </ion-list>

                                <app-footer></app-footer>
                            </ion-menu-toggle>
                        </ion-content>
                    </ion-menu>

                    <ion-nav main/>
                </ion-split-pane>
            </ion-app>,
            <ion-menu-controller></ion-menu-controller>
        ]);
    }
}

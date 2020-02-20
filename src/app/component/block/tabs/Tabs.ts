import AbstractBlock from '../AbstractBlock';
import gsap from 'gsap';

export default class Tabs extends AbstractBlock {
  public static readonly displayName: string = 'tabs';
  private readonly isActive: string = 'is-active';
  private readonly tabItems: HTMLButtonElement[] = this.getElements('[data-index]');
  private readonly tabContent: HTMLDivElement = this.getElement('[data-tabs-content]');
  private activeTabIndex: number = 0;

  constructor(el: HTMLElement) {
    super(el);
    this.init();
  }

  private init = (): void => {
    this.addEventListeners();

    this.tabItems[0].classList.add(this.isActive);
    this.tabContent.children[0].classList.add(this.isActive);

    const initialHeight = this.tabContent.children[0].getBoundingClientRect().height;
    this.tabContent.style.height = `${initialHeight}px`;
  };

  private setActiveTab = (event: Event): void => {
    const tabElement = event.currentTarget as HTMLElement;
    const tabIndex = tabElement.dataset.index ? parseInt(tabElement.dataset.index) : 0;

    this.tabItems[this.activeTabIndex].classList.remove(this.isActive);
    this.tabItems[tabIndex].classList.add(this.isActive);

    this.tabContent.children[this.activeTabIndex].classList.remove(this.isActive);
    this.tabContent.children[tabIndex].classList.add(this.isActive);

    gsap.to(this.tabContent, 1, {
      height: this.tabContent.children[tabIndex].getBoundingClientRect().height,
    });

    this.activeTabIndex = tabIndex;
  };

  private addEventListeners = (): void => {
    this.tabItems.forEach(tabItem => tabItem.addEventListener('click', this.setActiveTab));
  };

  private removeEventListeners = (): void => {
    this.tabItems.forEach(tabItem => tabItem.removeEventListener('click', this.setActiveTab));
  };

  public dispose() {
    this.removeEventListeners();
    super.dispose();
  }
}

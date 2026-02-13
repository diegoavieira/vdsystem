import { VdsToolbarProps } from './vds-toolbar.props';
import styles from './vds-toolbar.module.css?inline';

export default class VdsToolbar extends HTMLElement implements VdsToolbarProps {
  private _title: string = '';
  private _theme: 'light' | 'dark' = 'light';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'theme'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this[`_${name}` as keyof this] = newValue as any;
      this.render();
    }
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
    this.setAttribute('title', value);
  }

  get theme(): 'light' | 'dark' {
    return this._theme;
  }

  set theme(value: 'light' | 'dark') {
    this._theme = value;
    this.setAttribute('theme', value);
  }

  private render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="toolbar-container">
        <h1 class="toolbar-title">${this.title || 'Toolbar'}</h1>
      </div>
    `;
  }
}

// Register the custom element
if (!customElements.get('vds-toolbar')) {
  customElements.define('vds-toolbar', VdsToolbar);
}

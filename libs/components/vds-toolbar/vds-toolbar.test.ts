import { describe, it, expect, beforeEach } from 'vitest';
import VdsToolbar from './vds-toolbar';

describe('VdsToolbar', () => {
  beforeEach(() => {
    if (!customElements.get('vds-toolbar')) {
      customElements.define('vds-toolbar', VdsToolbar);
    }
  });

  it('should render with default title', () => {
    const element = document.createElement('vds-toolbar') as VdsToolbar;
    document.body.appendChild(element);

    expect(element.shadowRoot?.textContent).toContain('Toolbar');

    document.body.removeChild(element);
  });

  it('should update title when attribute changes', () => {
    const element = document.createElement('vds-toolbar') as VdsToolbar;
    element.setAttribute('title', 'Custom Title');
    document.body.appendChild(element);

    expect(element.shadowRoot?.textContent).toContain('Custom Title');

    document.body.removeChild(element);
  });
});

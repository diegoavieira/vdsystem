/// <reference types="vite/client" />

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import type { VdsToolbarProps } from '@vdsystem/components';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'vds-toolbar': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & VdsToolbarProps;
      // 'vds-nav': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & VdsNavProps;
    }
  }
}

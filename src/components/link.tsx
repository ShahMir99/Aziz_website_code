import * as Headless from '@headlessui/react';
import { forwardRef, AnchorHTMLAttributes } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, ...rest },
  ref
) {
  return (
    <Headless.DataInteractive>
      <RouterLink to={href} ref={ref} {...rest}>
        {children}
      </RouterLink>
    </Headless.DataInteractive>
  );
});

Link.displayName = 'Link';
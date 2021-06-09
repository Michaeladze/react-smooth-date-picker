import { RefObject, useEffect } from 'react';

const useClickOutside = (node: RefObject<HTMLElement>, handler: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (node && node.current && node.current.contains(event.target as HTMLElement)) {
      return;
    }

    handler();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handler]);
};

export default useClickOutside;

import { useState, useCallback } from 'react';

const useToast = () => {
  const [toast, setToast] = useState({ show: false, message: '', duration: 3000 });

  const showToast = useCallback((message, duration = 3000) => {
    setToast({ show: true, message, duration });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ show: false, message: '', duration: 3000 });
  }, []);

  return { toast, showToast, hideToast };
};

export default useToast;

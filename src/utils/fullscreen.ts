interface FullscreenElement extends HTMLElement {
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface FullscreenDocument extends Document {
  mozFullScreenElement?: Element;
  webkitFullscreenElement?: Element;
  msFullscreenElement?: Element;
  mozCancelFullScreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

export const fullscreenUtils = {
  requestFullscreen: (element: FullscreenElement) => {
    if (element.requestFullscreen) {
      return element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      return element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      return element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      return element.msRequestFullscreen();
    }
    return Promise.reject('Fullscreen not supported');
  },

  exitFullscreen: () => {
    const doc = document as FullscreenDocument;
    if (doc.exitFullscreen) {
      return doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      return doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      return doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      return doc.msExitFullscreen();
    }
    return Promise.reject('Fullscreen not supported');
  },

  isFullscreen: () => {
    const doc = document as FullscreenDocument;
    return !!(
      doc.fullscreenElement ||
      doc.mozFullScreenElement ||
      doc.webkitFullscreenElement ||
      doc.msFullscreenElement
    );
  }
};

export const preventCopyPaste = () => {
  document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+C, Ctrl+V, Ctrl+X
    if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x')) {
      e.preventDefault();
    }
  });

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
}; 
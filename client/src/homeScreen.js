export const promptInstallation = () => {
  window.addEventListener('beforeinstallprompt', e => {
    console.log('prompt', e);
  });
};
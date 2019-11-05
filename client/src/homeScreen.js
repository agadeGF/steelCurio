export const promptInstallation = () => {
  window.addEventListener('beforeinstallprompt', e => {
    console.log('prompt', e);
    e.prompt();
    e.userChoice
      .then(choice => {
        if (choice.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
      });
  });
};
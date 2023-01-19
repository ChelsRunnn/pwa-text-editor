const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODo: Add an event handler to the `beforeinstallprompt` event
// copied from mini project install.js
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODo: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});
const promptEvent = window.deferredPrompt;

if (!promptEvent) {
 return;
}
promptEvent.prompt();
window.deferredPrompt = null;
butInstall.classList.toggle('hidden', true);

// TODo: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});

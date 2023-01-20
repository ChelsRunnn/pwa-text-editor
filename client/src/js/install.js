const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // remove hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
    // display prompt
    promptEvent.prompt();
    // reset deferred prompt variable
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});


// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});

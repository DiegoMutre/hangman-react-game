// Change the state of notification state
export function showNotification(setter) {
    setter(true);

    setTimeout(() => {
        setter(false);
    }, 2000);
}

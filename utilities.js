/**
 * Gets the desired element on the client page and clicks on it
 */
async function goToActivityTab() {
    const buttons = document.getElementsByTagName('button')
    Array.prototype.slice.call( buttons, 0 ).filter(btn => btn.innerText === 'Eintragen')[0].click()

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(2000);

    Array.prototype.slice.call(document.getElementsByTagName('input'), 0)
        .filter(btn => btn.ariaLabel === 'Titel hinzufügen')[0].value = "Rahel HO";

    Array.prototype.slice.call(document.getElementsByTagName('div'), 0)
        .filter(btn => btn.ariaLabel === 'Ganztägig')[0].click();
}

goToActivityTab();

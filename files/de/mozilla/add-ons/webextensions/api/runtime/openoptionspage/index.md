---
title: runtime.openOptionsPage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wenn Ihre Erweiterung eine [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) definiert hat, öffnet diese Methode sie.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let openingPage = browser.runtime.openOptionsPage()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Optionsseite erfolgreich erstellt wurde, oder mit einer Fehlermeldung zurückgewiesen wird, wenn die Operation fehlgeschlagen ist.

## Beispiele

Öffnen Sie die Optionsseite, wenn der Benutzer auf das Symbol einer Browseraktion klickt:

```js
function onOpened() {
  console.log(`Options page opened`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let opening = browser.runtime.openOptionsPage();
opening.then(onOpened, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-openOptionsPage) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

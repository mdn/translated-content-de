---
title: tabs.captureTab()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/captureTab
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt eine Daten-URL, die das Bild eines Bereichs des angegebenen Tabs kodiert. Sie müssen die Berechtigung `<all_urls>` haben, um diese Methode zu verwenden [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let capturing = browser.tabs.captureTab(
  tabId,               // optional integer
  options              // optional extensionTypes.ImageDetails
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. ID des Tabs, der erfasst werden soll. Standardmäßig der aktive Tab im aktuellen Fenster.
- `options` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageDetails')}}.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Daten-URL erfüllt wird, die das erfasste Bild kodiert. Kann der 'src'-Eigenschaft eines HTML-Image-Elements zur Anzeige zugewiesen werden. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Erfassen Sie ein Bild des aktiven Tabs im aktuellen Fenster mit den Standardeinstellungen:

```js
function onCaptured(imageUri) {
  console.log(imageUri);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let capturing = browser.tabs.captureTab();
  capturing.then(onCaptured, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-captureVisibleTab) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

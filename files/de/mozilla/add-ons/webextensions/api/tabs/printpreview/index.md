---
title: tabs.printPreview()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/printPreview
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Öffnet die Druckvorschau für den aktiven Tab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt. Eine Erweiterung kann erkennen, wann die Druckvorschau geschlossen wurde, indem sie das [afterprint](/de/docs/Web/API/Window/afterprint_event)-Ereignis abhört:

```js
window.addEventListener("afterprint", resumeFunction, false);
```

## Syntax

```js-nolint
let openingPreview = browser.tabs.printPreview()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit keinen Argumenten erfüllt wird, wenn die Vorschauseite geöffnet wurde.

## Beispiele

In diesem Beispiel lauscht ein Hintergrundskript auf einen Klick auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) und öffnet dann die Druckvorschau für den aktuell aktiven Tab:

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.printPreview().then(() => {
    console.log("Entered print preview");
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

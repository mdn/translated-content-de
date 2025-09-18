---
title: tabs.printPreview()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/printPreview
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Öffnet die Druckvorschau für den aktiven Tab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt. Eine Erweiterung kann erkennen, wann die Druckvorschau geschlossen wurde, indem sie das [afterprint](/de/docs/Web/API/Window/afterprint_event)-Ereignis überwacht:

```js
window.addEventListener("afterprint", resumeFunction);
```

## Syntax

```js-nolint
let openingPreview = browser.tabs.printPreview()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Vorschauseite geöffnet wurde.

## Beispiele

In diesem Beispiel hört ein Hintergrundskript auf einen Klick bei einer [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) und öffnet dann die Druckvorschau für den aktuell aktiven Tab:

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

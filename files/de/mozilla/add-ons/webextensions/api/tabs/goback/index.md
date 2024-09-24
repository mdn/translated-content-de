---
title: tabs.goBack()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/goBack
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Navigieren Sie zur vorherigen Seite im Verlauf des Tabs, falls verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let withGoingBack = browser.tabs.goBack(
  tabId,                  // optional integer
  callback                  // optional function
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs zur Navigation. Standardmäßig der aktive Tab des aktuellen Fensters.
- `callback` {{optional_inline}}
  - : `function`. Diese Funktion wird aufgerufen, wenn die Seitennavigation abgeschlossen ist, ohne Parameter.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, wenn die Seitennavigation abgeschlossen ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Zurück zur vorherigen Seite im aktuellen Tab:

```js
function onGoBack() {
  console.log("Gone back");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let goingBack = browser.tabs.goBack();
goingBack.then(onGoBack, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-getZoomSettings) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

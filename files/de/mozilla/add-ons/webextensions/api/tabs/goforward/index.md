---
title: tabs.goForward()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/goForward
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Navigieren Sie zur nächsten Seite in der Verlaufsliste des Tabs, falls verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let goingForward = browser.tabs.goForward(
  tabId,                       // optional integer
  callback                       // optional function
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, in den navigiert werden soll. Standardmäßig ist dies der aktive Tab des aktuellen Fensters.
- `callback` {{optional_inline}}
  - : `function`. Wenn die Seitennavigation abgeschlossen ist, wird diese Funktion ohne Parameter aufgerufen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, wenn die Seitennavigation abgeschlossen ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Gehen Sie zur nächsten Seite im aktuellen Tab:

```js
function onGoForward() {
  console.log("Gone forward");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let goingForward = browser.tabs.goForward();
goingForward.then(onGoForward, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-getZoomSettings) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

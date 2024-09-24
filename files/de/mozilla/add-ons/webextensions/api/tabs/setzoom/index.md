---
title: tabs.setZoom()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/setZoom
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Zoomt den angegebenen Tab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let zooming = browser.tabs.setZoom(
  tabId,           // optional integer
  zoomFactor       // number
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der gezoomt werden soll. Standardmäßig ist dies der aktive Tab des aktuellen Fensters.
- `zoomFactor`
  - : `number`. Der neue Zoomfaktor. Verwenden Sie hier einen Wert von 0, um den Tab auf seinen aktuellen Standardzoomfaktor zu setzen. Andernfalls muss dies eine Zahl zwischen 0.3 und 5 sein, die einen Zoomfaktor angibt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, nachdem der Zoomfaktor geändert wurde. Wenn der Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Setzen Sie den Zoomfaktor für den aktuellen Tab auf 2:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoom(2);
setting.then(null, onError);
```

Setzen Sie den Zoomfaktor für den Tab, dessen ID 16 ist, auf 0.5:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoom(16, 0.5);
setting.then(null, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-setZoom) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

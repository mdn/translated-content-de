---
title: tabs.show()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/show
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Zeigt einen oder mehrere Tabs an, die zuvor durch einen Aufruf von {{WebExtAPIRef("tabs.hide")}} versteckt wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let showing = browser.tabs.show(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. Die IDs des Tabs oder der Tabs, die angezeigt werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Einen einzelnen Tab anzeigen:

```js
function onShown() {
  console.log(`Shown`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.show(2).then(onShown, onError);
```

Mehrere Tabs anzeigen:

```js
function onShown() {
  console.log(`Shown`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.show([15, 14, 1]).then(onShown, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

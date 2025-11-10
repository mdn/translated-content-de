---
title: browserAction.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt `true` zurück, wenn die Browser-Aktion aktiviert ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingIsEnabled = browser.browserAction.isEnabled(
  details // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das optional die `tabId` oder `windowId` zum Überprüfen enthält.
    - `tabId` {{optional_inline}}
      - : `integer`. ID eines Tabs zum Überprüfen.
    - `windowId` {{optional_inline}}
      - : `integer`. ID eines Fensters zum Überprüfen.

<!---->

- Wenn windowId und tabId beide angegeben sind, schlägt die Funktion fehl.
- Wenn windowId und tabId beide weggelassen werden, wird der globale aktivierte/deaktivierte Status zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Browser-Aktion der Erweiterung aktiviert ist, und mit `false` andernfalls.

## Beispiele

Überprüfen Sie den globalen Zustand:

```js
browser.browserAction.isEnabled({}).then((result) => {
  console.log(result);
});
```

Überprüfen Sie den Zustand des aktuell aktiven Tabs:

```js
async function enabledInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let enabled = await browser.browserAction.isEnabled({
    tabId: tabs[0].id,
  });
  console.log(enabled);
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

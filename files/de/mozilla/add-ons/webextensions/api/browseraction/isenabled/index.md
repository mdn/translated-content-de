---
title: browserAction.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

Gibt `true` zurück, wenn die Browseraktion aktiviert ist. Gibt den globalen Status zurück, wenn der Parameter `details` weggelassen oder leer ist, oder wenn alle seine Eigenschaften leer sind.

## Syntax

```js-nolint
let gettingIsEnabled = browser.browserAction.isEnabled(
  details // optional object or integer
)
```

### Parameter

- `details` {{optional_inline}}
  - : `integer` oder `object`. Als `integer` definiert es die ID eines Tabs, der überprüft werden soll. Als `object` enthält es:
    - `tabId` {{optional_inline}}
      - : `integer`. ID eines Tabs, der überprüft werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. ID eines Fensters, das überprüft werden soll.

    Wenn `windowId` und `tabId` angegeben sind, schlägt die Funktion fehl.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Browseraktion der Erweiterung aktiviert ist, und `false` andernfalls.

## Beispiele

Überprüfen des globalen Zustands:

```js
browser.browserAction.isEnabled({}).then((result) => {
  console.log(result);
});
```

Überprüfen des Zustands des aktiven Tabs:

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

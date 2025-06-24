---
title: action.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/action/isEnabled
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Gibt `true` zurück, wenn die Browser-Aktion aktiviert ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingIsEnabled = browser.action.isEnabled(
  details // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das optional die `tabId` oder `windowId` zum Überprüfen enthält.
    - `tabId` {{optional_inline}}
      - : `integer`. Die ID eines Tabs zum Überprüfen.
    - `windowId` {{optional_inline}}
      - : `integer`. Die ID eines Fensters zum Überprüfen.

<!---->

- Wenn sowohl windowId als auch tabId angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl windowId als auch tabId weggelassen werden, wird der globale aktivierte/deaktivierte Status zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Browser-Aktion der Erweiterung aktiviert ist, und mit `false`, wenn nicht.

## Beispiele

Überprüfen des globalen Zustands:

```js
browser.action.isEnabled({}).then((result) => {
  console.log(result);
});
```

Überprüfen des Zustands des derzeit aktiven Tabs:

```js
async function enabledInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let enabled = await browser.action.isEnabled({
    tabId: tabs[0].id,
  });
  console.log(enabled);
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

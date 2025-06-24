---
title: browserAction.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

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
      - : `integer`. ID eines Tabs, der überprüft werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. ID eines Fensters, das überprüft werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird der globale Aktiviert-/Deaktiviert-Status zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Browser-Aktion der Erweiterung aktiviert ist, und `false` andernfalls.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Überprüfen des globalen Status:

```js
browser.browserAction.isEnabled({}).then((result) => {
  console.log(result);
});
```

Überprüfen des Status des aktuell aktiven Tabs:

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

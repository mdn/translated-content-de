---
title: browserAction.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
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
  - : `object`. Ein Objekt, das optional die `tabId` oder `windowId` enthält, die überprüft werden soll.
    - `tabId` {{optional_inline}}
      - : `integer`. ID eines Tabs zur Überprüfung.
    - `windowId` {{optional_inline}}
      - : `integer`. ID eines Fensters zur Überprüfung.

<!---->

- Wenn sowohl windowId als auch tabId angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl windowId als auch tabId weggelassen werden, wird der globale Aktiviert/Deaktiviert-Status zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Browser-Aktion der Erweiterung aktiviert ist, und sonst `false`.

## Beispiele

Überprüfen Sie den globalen Status:

```js
browser.browserAction.isEnabled({}).then((result) => {
  console.log(result);
});
```

Überprüfen Sie den Status des aktuell aktiven Tabs:

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

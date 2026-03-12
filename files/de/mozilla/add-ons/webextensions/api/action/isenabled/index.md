---
title: action.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/action/isEnabled
l10n:
  sourceCommit: 3cc1a6783def002ef12a3d9420af77cb11cf4b3a
---

Gibt `true` zurück, wenn die Browser-Aktion aktiviert ist. Gibt den globalen Status zurück, wenn der Parameter `details` weggelassen oder leer ist oder alle seine Eigenschaften leer sind.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
let gettingIsEnabled = browser.action.isEnabled(
  details // optional object or integer
)
```

### Parameter

- `details` {{optional_inline}}
  - : `integer` oder `object`. Als `integer` definiert es die ID eines zu überprüfenden Tabs. Als `object` enthält es:
    - `tabId` {{optional_inline}}
      - : `integer`. ID eines zu überprüfenden Tabs.
    - `windowId` {{optional_inline}}
      - : `integer`. ID eines zu überprüfenden Fensters.

    Wenn `windowId` und `tabId` angegeben sind, schlägt die Funktion fehl.

> [!NOTE]
> Chrome unterstützt `details` nur als `integer`, die ID eines zu überprüfenden Tabs.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Browser-Aktion der Erweiterung aktiviert ist, und ansonsten mit `false`.

## Beispiele

Überprüfen Sie den globalen Status:

```js
browser.action.isEnabled({}).then((result) => {
  console.log(result);
});
```

Überprüfen Sie den Status des aktiven Tabs:

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

---
title: pageAction.isShown()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/isShown
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt `true` zurück, wenn die Page-Action für den angegebenen Tab angezeigt wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingIsShown = browser.pageAction.isShown(
  details // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das die zu überprüfende `tabId` enthält.
    - `tabId`
      - : `integer`. ID des zu überprüfenden Tabs.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Page-Action der Erweiterung für den angegebenen Tab angezeigt wird, und `false` andernfalls.

## Beispiele

Überprüfen Sie den Status des derzeit aktiven Tabs:

```js
async function shownInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let shown = await browser.pageAction.isShown({
    tabId: tabs[0].id,
  });
  console.log(shown);
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

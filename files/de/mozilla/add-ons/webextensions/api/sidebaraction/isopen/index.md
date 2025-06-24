---
title: sidebarAction.isOpen()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Gibt `true` zurück, wenn die Seitenleiste der Erweiterung in einem bestimmten Fenster geöffnet ist.

Diese Funktion akzeptiert einen `windowId` als Parameter:

- Wenn Sie `windowId` angeben, überprüft die Funktion das angegebene Browserfenster.
- Wenn Sie `windowId` weglassen, überprüft die Funktion das oberste Browserfenster.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingIsOpen = browser.sidebarAction.isOpen(
  details // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das optional die zu überprüfende `windowId` enthält.
    - `windowId` {{optional_inline}}
      - : `integer`. ID eines zu überprüfenden Browserfensters. Wenn weggelassen, wird standardmäßig {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}} verwendet, was sich auf das oberste Browserfenster bezieht.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Seitenleiste der Erweiterung im angegebenen Fenster geöffnet ist, oder mit `false` andernfalls.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Das oberste Fenster überprüfen:

```js
browser.sidebarAction.isOpen({}).then((result) => {
  console.log(result);
});
```

Alle geöffneten Fenster überprüfen:

```js
async function checkWindow(windowId) {
  const result = await browser.sidebarAction.isOpen({ windowId });
  console.log(`window: ${windowId} status: ${result}`);
}

browser.windows.getAll().then((all) => {
  for (const { id } of all) {
    checkWindow(id);
  }
});
```

{{WebExtExamples}}

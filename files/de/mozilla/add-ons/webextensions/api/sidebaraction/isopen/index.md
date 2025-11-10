---
title: sidebarAction.isOpen()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt `true` zurück, wenn die Sidebar der Erweiterung in einem gegebenen Fenster geöffnet ist.

Diese Funktion akzeptiert einen `windowId` als Parameter:

- Wenn Sie `windowId` angeben, überprüft die Funktion das angegebene Browser-Fenster.
- Wenn Sie `windowId` weglassen, überprüft die Funktion das oberste Browser-Fenster.

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
      - : `integer`. ID eines zu überprüfenden Browser-Fensters. Wenn nicht angegeben, wird standardmäßig {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}} verwendet, was sich auf das oberste Browser-Fenster bezieht.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Sidebar der Erweiterung im gegebenen Fenster geöffnet ist, oder mit `false` andernfalls.

## Beispiele

Überprüfen des obersten Fensters:

```js
browser.sidebarAction.isOpen({}).then((result) => {
  console.log(result);
});
```

Überprüfen aller offenen Fenster:

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

## Browser-Kompatibilität

{{Compat}}

---
title: sidebarAction.isOpen()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Gibt `true` zurück, wenn die Seitenleiste der Erweiterung in einem gegebenen Fenster geöffnet ist.

Diese Funktion akzeptiert ein `windowId` als Parameter:

- Wenn Sie `windowId` angeben, wird das angegebene Browserfenster überprüft.
- Wenn Sie `windowId` weglassen, wird das oberste Browserfenster überprüft.

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
      - : `integer`. ID eines zu überprüfenden Browserfensters. Wenn nicht angegeben, wird der Standardwert {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}} verwendet, was sich auf das oberste Browserfenster bezieht.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Seitenleiste der Erweiterung im angegebenen Fenster geöffnet ist, oder mit `false` ansonsten.

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

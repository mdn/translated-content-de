---
title: sidebarAction.isOpen()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Gibt `true` zurück, wenn die Seitenleiste der Erweiterung in einem bestimmten Fenster geöffnet ist.

Diese Funktion akzeptiert einen `windowId` als Parameter:

- Wenn Sie `windowId` angeben, prüft die Funktion das angegebene Browserfenster.
- Wenn Sie `windowId` weglassen, prüft die Funktion das oberste Browserfenster.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingIsOpen = browser.sidebarAction.isOpen(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das optional die zu prüfende `windowId` enthält.

    - `windowId` {{optional_inline}}
      - : `integer`. ID eines zu prüfenden Browserfensters. Wird standardmäßig auf {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}} gesetzt, was sich auf das oberste Browserfenster bezieht, wenn weggelassen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die Seitenleiste der Erweiterung im angegebenen Fenster geöffnet ist, oder mit `false` andernfalls.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Überprüfen des obersten Fensters:

```js
browser.sidebarAction.isOpen({}).then((result) => {
  console.log(result);
});
```

Alle offenen Fenster überprüfen:

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

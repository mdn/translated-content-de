---
title: sidebarAction.open()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Öffnet die Seitenleiste im aktiven Fenster.

Sie können diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.sidebarAction.open()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Beispiele

Öffnen Sie die Seitenleiste, wenn der Benutzer ein Kontextmenüelement auswählt:

```js
browser.menus.create({
  id: "open-sidebar",
  title: "open sidebar",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.open();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

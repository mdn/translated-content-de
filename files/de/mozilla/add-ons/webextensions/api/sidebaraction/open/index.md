---
title: sidebarAction.open()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

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

Öffnen Sie die Seitenleiste, wenn der Benutzer einen Kontextmenüeintrag auswählt:

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

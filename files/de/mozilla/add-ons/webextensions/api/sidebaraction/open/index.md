---
title: sidebarAction.open()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Öffnet die Seitenleiste im aktiven Fenster.

Diese Funktion kann nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufgerufen werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.sidebarAction.open()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Browser-Kompatibilität

{{Compat}}

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

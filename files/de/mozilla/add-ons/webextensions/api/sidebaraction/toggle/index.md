---
title: sidebarAction.toggle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/toggle
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Schaltet die Sichtbarkeit der Sidebar im aktiven Fenster um, wenn die Sidebar zur Erweiterung gehört.

Diese Funktion kann nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufgerufen werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.sidebarAction.toggle()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Schaltet die Sidebar um, wenn der Benutzer ein Element aus dem Kontextmenü auswählt:

```js
browser.menus.create({
  id: "toggle-sidebar",
  title: "Toggle sidebar",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.toggle();
});
```

{{WebExtExamples}}

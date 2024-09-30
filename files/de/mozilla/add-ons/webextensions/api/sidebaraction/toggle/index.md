---
title: sidebarAction.toggle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/toggle
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wechselt die Sichtbarkeit der Seitenleiste im aktiven Fenster, wenn die Seitenleiste zur Erweiterung gehört.

Sie können diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen.

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

Wechselt die Seitenleiste, wenn der Benutzer ein Element aus dem Kontextmenü auswählt:

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

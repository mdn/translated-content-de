---
title: sidebarAction.toggle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/toggle
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Schaltet die Sichtbarkeit der Seitenleiste im aktiven Fenster um, wenn die Seitenleiste zur Erweiterung gehört.

Diese Funktion kann nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufgerufen werden.

Es handelt sich um eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.sidebarAction.toggle()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Beispiele

Schaltet die Seitenleiste um, wenn der Benutzer ein Element aus dem Kontextmenü auswählt:

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

## Browser-Kompatibilität

{{Compat}}

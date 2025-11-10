---
title: sidebarAction.close()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/close
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Schließt die Seitenleiste im aktiven Fenster, sofern es die eigene Seitenleiste der Erweiterung ist.

Sie können diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.sidebarAction.close()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Beispiele

Schließen Sie die Seitenleiste, wenn der Benutzer ein Kontextmenüelement auswählt:

```js
browser.menus.create({
  id: "close-sidebar",
  title: "close sidebar",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.close();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

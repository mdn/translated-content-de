---
title: pageAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Öffnet das Popup der Seitenaktion.

Sie können diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen.

## Syntax

```js-nolint
browser.pageAction.openPopup()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Beispiele

Öffnen des Popups, wenn der Benutzer ein Kontextmenüelement auswählt:

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.pageAction.openPopup();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

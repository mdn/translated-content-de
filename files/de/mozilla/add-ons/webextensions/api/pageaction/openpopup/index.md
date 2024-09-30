---
title: pageAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Öffnen Sie das Popup der Seitenaktion.

Sie können diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen.

## Syntax

```js-nolint
browser.pageAction.openPopup()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der ohne Argumente aufgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Öffnen Sie das Popup, wenn der Benutzer ein Kontextmenüelement auswählt:

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

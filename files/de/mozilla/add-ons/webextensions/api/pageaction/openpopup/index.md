---
title: pageAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Öffnet das Popup der Page Action.

Sie können diese Funktion nur aus einem Handler für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen.

## Syntax

```js-nolint
browser.pageAction.openPopup()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Beispiele

Öffnen Sie das Popup, wenn der Benutzer einen Kontextmenüpunkt auswählt:

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

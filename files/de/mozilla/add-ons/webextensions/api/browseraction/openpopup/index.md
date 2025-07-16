---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Öffnen Sie das Popup für die Browser-Aktion.

In stabilen Versionen von Firefox können Sie diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
browser.browserAction.openPopup(
  options // optional object
)
```

### Parameter

- `details` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `windowId` {{optional_inline}}
      - : `integer`. Fenster, für das das Popup geöffnet werden soll. Standardmäßig das aktuelle Fenster.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der ohne Argumente aufgelöst wird.

## Beispiele

Öffnen Sie das Popup, wenn der Benutzer ein Kontextmenüelement auswählt:

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.browserAction.openPopup();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

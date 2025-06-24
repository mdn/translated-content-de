---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Öffnen Sie das Popup der Browsererweiterung.

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
      - : `integer`. Das Fenster, für das das Popup geöffnet werden soll. Standardmäßig wird das aktuelle Fenster verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

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
  browser.browserAction.openPopup();
});
```

{{WebExtExamples}}

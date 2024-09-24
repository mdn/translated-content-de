---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Öffnen Sie das Popup der Browser-Aktion.

In stabilen Versionen von Firefox können Sie diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen. Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

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

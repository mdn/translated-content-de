---
title: action.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/openPopup
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Öffnet das Popup der Browseraktion.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

In stabilen Versionen von Firefox können Sie diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
browser.action.openPopup(
  options // optional object
)
```

### Parameter

- `details` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `windowId` {{optional_inline}}
      - : `integer`. Fenster, für das das Popup geöffnet werden soll. Standardmäßig ist es das aktuelle Fenster.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Beispiele

Öffnet das Popup, wenn der Benutzer ein Kontextmenü-Element auswählt:

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.action.openPopup();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

---
title: action.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/openPopup
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

Öffnen Sie das Popup der Browseraktion.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

In stabilen Versionen von Firefox können Sie diese Funktion nur aus dem Handler für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
      - : `integer`. Fenster, für das das Popup geöffnet werden soll. Standardmäßig das aktuelle Fenster.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird.

## Beispiele

Öffnen Sie das Popup, wenn der Benutzer ein Kontextmenüelement auswählt:

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

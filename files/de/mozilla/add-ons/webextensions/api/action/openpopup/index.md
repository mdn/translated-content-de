---
title: action.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/openPopup
l10n:
  sourceCommit: 8ae151e4d6b1ee73aef9d8e10222241f053b9e38
---

Öffnen Sie das Popup der Browseraktion.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

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
      - : `integer`. Fenster, in dem das Popup geöffnet werden soll. Standardmäßig im fokussierten (aktiven) Fenster. In Chrome und ab Firefox 149, wenn die Fenster-ID für ein nicht fokussiertes Fenster ist, wird der API-Aufruf abgelehnt. Ein Fenster kann fokussiert werden, indem {{WebExtAPIRef("windows.update")}} mit `focused: true` aufgerufen wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente aufgelöst wird. Wenn das Popup nicht geöffnet wird, wird es mit einer Fehlermeldung abgelehnt.

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

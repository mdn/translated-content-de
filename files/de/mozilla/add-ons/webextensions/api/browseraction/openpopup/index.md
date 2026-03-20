---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
l10n:
  sourceCommit: 8ae151e4d6b1ee73aef9d8e10222241f053b9e38
---

Öffnet das Popup der Browser-Aktion.

## Syntax

```js-nolint
browser.browserAction.openPopup(
  options // optional object
)
```

### Parameter

- `details` {{optional_inline}}
  - : Ein Objekt mit diesen Eigenschaften:
    - `windowId` {{optional_inline}}
      - : `integer`. Fenster, in dem das Popup geöffnet werden soll. Standardmäßig wird das fokussierte (aktive) Fenster verwendet. In Chrome und ab Firefox 149 wird der API-Aufruf abgelehnt, wenn die Fenster-ID für ein nicht fokussiertes Fenster ist. Ein Fenster kann fokussiert werden, indem {{WebExtAPIRef("windows.update")}} mit `focused: true` aufgerufen wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der ohne Argumente aufgelöst wird. Wenn das Popup nicht geöffnet wird, wird es mit einer Fehlermeldung abgelehnt.

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

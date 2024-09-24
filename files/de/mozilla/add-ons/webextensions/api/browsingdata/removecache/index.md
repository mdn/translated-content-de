---
title: browsingData.removeCache()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCache
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht den Cache des Browsers.

Beachten Sie, dass, obwohl diese Funktion ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt akzeptieren kann, dieses ignoriert wird. Der gesamte Cache wird immer gelöscht, wenn diese Funktion verwendet wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeCache(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions` {{optional_inline}}
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt. Dieser Parameter hat keine Wirkung.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Den Browser-Cache löschen:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCache({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

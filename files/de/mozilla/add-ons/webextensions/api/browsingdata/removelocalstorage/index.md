---
title: browsingData.removeLocalStorage()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Löscht jeglichen von Websites erstellten [local storage](/de/docs/Web/API/Window/localStorage).

Sie können den Parameter `removalOptions` verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- nur lokale Speicherobjekte zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden
- zu steuern, ob nur lokale Speicherobjekte, die von normalen Webseiten erstellt wurden, gelöscht werden sollen oder ob auch Objekte gelöscht werden sollen, die von gehosteten Apps und Erweiterungen erstellt wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeLocalStorage(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um nur lokale Speicherobjekte von normalen Webseiten oder auch Objekte von gehosteten Apps und Erweiterungen zu löschen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argument erfüllt wird, wenn die Löschung abgeschlossen ist. Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Löschen Sie den gesamten lokalen Speicher:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeLocalStorage({}).then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

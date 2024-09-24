---
title: browsingData.removeLocalStorage()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht jeden von Websites erstellten [lokalen Speicher](/de/docs/Web/API/Window/localStorage).

Sie können den Parameter `removalOptions` verwenden, bei dem es sich um ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt handelt, um:

- nur lokale Speicherobjekte zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden
- zu steuern, ob nur lokale Speicherobjekte gelöscht werden sollen, die von normalen Webseiten erstellt wurden, oder auch Objekte, die von gehosteten Apps und Erweiterungen erstellt wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeLocalStorage(
  removalOptions            // RemovalOptions Objekt
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um nur lokale Speicherobjekte zu löschen, die von normalen Webseiten erstellt wurden, oder um auch Objekte zu löschen, die von gehosteten Apps und Erweiterungen erstellt wurden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Löschung abgeschlossen ist. Wenn ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Entfernen Sie alle lokalen Speicher:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeLocalStorage({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

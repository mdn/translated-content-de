---
title: browsingData.removeLocalStorage()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage
l10n:
  sourceCommit: b2685e330f887359ec886b08199a22a6fcbe0caf
---

Löscht jeglichen [local storage](/de/docs/Web/API/Window/localStorage) und [session storage](/de/docs/Web/API/Window/sessionStorage), die von Websites und Erweiterungen erstellt wurden.

Sie können den Parameter `removalOptions` verwenden, welcher ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- lokale und Session-Speicherwerte zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden.
- zu steuern, ob localStorage und sessionStorage-Werte, die von Webseiten oder Webseiten-Erweiterungen erstellt wurden, gelöscht werden sollen.

## Syntax

```js-nolint
let removing = browser.browsingData.removeLocalStorage(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um localStorage und sessionStorage Werte zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden, und zu steuern, ob localStorage und sessionStorage Objekte, die von Webseiten oder von Webseiten und Erweiterungen erstellt wurden, gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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

---
title: browsingData.removeCookies()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht die Cookies des Browsers.

Sie können den Parameter `removalOptions` verwenden, welcher ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- nur Cookies zu löschen, die nach einer bestimmten Zeit erstellt wurden
- zu steuern, ob nur Cookies gelöscht werden sollen, die von normalen Webseiten gesetzt wurden, oder ob auch Cookies, die von gehosteten Apps und Erweiterungen gesetzt wurden, gelöscht werden sollen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeCookies(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um nur Cookies zu löschen, die nach einer bestimmten Zeit erstellt wurden, und ob nur Cookies gelöscht werden sollen, die von normalen Webseiten gesetzt wurden, oder ob auch Cookies von gehosteten Apps und Erweiterungen gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Löschen abgeschlossen ist. Sollte ein Fehler auftreten, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Cookies der letzten Woche entfernen:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

let oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .removeCookies({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Alle Cookies entfernen:

> [!WARNING]
> Wenn Sie die API verwenden, um alle Cookies zu entfernen, werden gleichzeitig alle lokalen Speicherobjekte (einschließlich derer anderer Erweiterungen) gelöscht.
>
> Wenn Sie alle Cookies löschen möchten, ohne die lokalen Speichereinrichtungen zu stören, verwenden Sie [browser.cookies](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies), um durch alle Cookie-Stores zu gehen und deren Inhalte zu entfernen.

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCookies({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

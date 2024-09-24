---
title: browsingData.removeCookies()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht die Cookies des Browsers.

Sie können den Parameter `removalOptions` verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- nur Cookies zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden
- zu steuern, ob nur Cookies gelöscht werden sollen, die von normalen Webseiten gesetzt wurden, oder ob auch Cookies gelöscht werden sollen, die von gehosteten Apps und Erweiterungen gesetzt wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeCookies(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um nur Cookies zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden, und um zu steuern, ob nur Cookies gelöscht werden sollen, die von normalen Webseiten gesetzt wurden, oder ob auch Cookies gelöscht werden sollen, die von gehosteten Apps und Erweiterungen gesetzt wurden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Löschen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Cookies entfernen, die in der vergangenen Woche erstellt wurden:

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
> Die Verwendung der API zum Entfernen aller Cookies wird gleichzeitig alle lokalen Speicherobjekte (einschließlich der anderer Erweiterungen) löschen.
>
> Wenn Sie alle Cookies löschen möchten, ohne lokale Speichereinrichtungen zu stören, verwenden Sie [browser.cookies](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies), um den Inhalt aller Cookie-Stores zu durchlaufen und zu entfernen.

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
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

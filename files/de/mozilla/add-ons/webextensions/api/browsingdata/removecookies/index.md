---
title: browsingData.removeCookies()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Löscht die Cookies des Browsers.

Sie können den `removalOptions`-Parameter verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, um:

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
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur Cookies zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden, und ob nur Cookies gelöscht werden sollen, die von normalen Webseiten gesetzt wurden, oder ob auch Cookies gelöscht werden sollen, die von gehosteten Apps und Erweiterungen gesetzt wurden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Cookies löschen, die in der letzten Woche erstellt wurden:

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
> Wenn die API verwendet wird, um alle Cookies zu entfernen, werden gleichzeitig alle lokalen Speicherobjekte (einschließlich derer anderer Erweiterungen) gelöscht.
>
> Wenn Sie alle Cookies löschen möchten, ohne die lokalen Speicherfunktionen zu stören, verwenden Sie [browser.cookies](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies), um den Inhalt aller Cookie-Speicher zu durchsuchen und zu entfernen.

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCookies({}).then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API von Chromium.

---
title: browsingData.removeHistory()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeHistory
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Löscht den Verlauf der besuchten Webseiten (Browsing-Verlauf).

Sie können den Parameter `removalOptions`, ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, verwenden, um:

- nur die Aufzeichnungen von besuchten Webseiten nach einem bestimmten Zeitpunkt zu löschen
- zu steuern, ob nur die Aufzeichnungen von normalen Webseiten gelöscht werden sollen oder auch die von gehosteten Apps und Erweiterungen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeHistory(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur die Aufzeichnungen von besuchten Webseiten nach einem bestimmten Zeitpunkt zu löschen und ob nur die Aufzeichnungen von normalen Webseiten oder auch die von gehosteten Apps und Erweiterungen gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Löschen abgeschlossen ist. Sollte ein Fehler auftreten, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Aufzeichnungen von in der letzten Woche besuchten Seiten entfernen:

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
  .removeHistory({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Alle Aufzeichnungen von besuchten Seiten entfernen:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeHistory({}).then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

---
title: browsingData.removeHistory()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeHistory
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht das Protokoll der von der Benutzerin/dem Benutzer besuchten Webseiten (Browsing-Historie).

Sie können den Parameter `removalOptions`, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, verwenden, um:

- nur Aufzeichnungen von Webseiten zu löschen, die nach einer bestimmten Zeit besucht wurden
- zu steuern, ob nur die Aufzeichnungen normaler Webseiten gelöscht werden sollen, oder ob auch die Aufzeichnungen von gehosteten Apps und Erweiterungen gelöscht werden sollen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeHistory(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um nur Aufzeichnungen von Webseiten zu löschen, die nach einer bestimmten Zeit besucht wurden, und ob nur die Aufzeichnungen normaler Webseiten oder auch die von gehosteten Apps und Erweiterungen gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Löschen abgeschlossen ist. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen Sie Aufzeichnungen von in der letzten Woche besuchten Seiten:

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

Entfernen Sie alle Aufzeichnungen der besuchten Seiten:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeHistory({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

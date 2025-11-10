---
title: bookmarks.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Lesezeichen oder Ordner in einen anderen Elternordner oder an eine andere Position innerhalb eines Ordners verschoben wird.

> [!NOTE]
> Wenn Sie mehrere Lesezeichen verschieben, da diese API asynchron ist, können die Verschiebeaufrufe in beliebiger Reihenfolge verarbeitet werden. Folglich kann sich der Wert des Indexes jedes Lesezeichens ändern oder unbekannt sein, bis alle Verschiebeaufrufe abgeschlossen sind. Wenn der Index, der einem Lesezeichen zugeordnet ist, für Ihre Erweiterung von Bedeutung ist, sollte die Erweiterung – wenn mehrere Lesezeichen verschoben werden – warten, bis jeder `bookmarks.move`-Aufruf abgeschlossen ist, bevor sie das nächste Lesezeichen verschiebt. Das Warten stellt sicher, dass der dem Lesezeichen zugeordnete Index nicht durch einen gleichzeitig ausgeführten Verschiebeaufruf beeinflusst wird, während der ursprüngliche Aufruf noch in Bearbeitung ist.

## Syntax

```js-nolint
browser.bookmarks.onMoved.addListener(listener)
browser.bookmarks.onMoved.removeListener(listener)
browser.bookmarks.onMoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob der `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, sonst `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `id`
      - : `string`. ID des Elements, das verschoben wurde.
    - `moveInfo`
      - : `object`. Objekt, das weitere Details über die Verschiebung enthält. Siehe den Abschnitt [moveInfo](#moveinfo_2) für weitere Details.

## Zusätzliche Objekte

### moveInfo

- `parentId`
  - : `string`. Der neue Elternordner.
- `index`
  - : `integer`. Der neue Index dieses Elements bei seinem Elternteil.
- `oldParentId`
  - : `string`. Der alte Elternordner.
- `oldIndex`
  - : `integer`. Der alte Index des Elements bei seinem Elternteil.

## Beispiele

```js
function handleMoved(id, moveInfo) {
  console.log(`Item: ${id} moved`);
  console.log(`Old index: ${moveInfo.oldIndex}`);
  console.log(`New index: ${moveInfo.index}`);
  console.log(`Old folder: ${moveInfo.oldParentId}`);
  console.log(`New folder: ${moveInfo.parentId}`);
}

function handleClick() {
  browser.bookmarks.onMoved.addListener(handleMoved);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onMoved) API von Chromium. Diese Dokumentation stammt von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

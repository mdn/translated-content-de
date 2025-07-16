---
title: bookmarks.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Lesezeichen oder ein Ordner in einen anderen übergeordneten Ordner oder an eine andere Position innerhalb eines Ordners verschoben wird.

> [!NOTE]
> Wenn Sie mehrere Lesezeichen verschieben, da diese API asynchron ist, können die Aufrufe der Verschiebungen in beliebiger Reihenfolge verarbeitet werden. Folglich kann sich der Wert des Indexes jedes Lesezeichens ändern oder unbekannt sein, bis alle Verschiebeaufrufe abgeschlossen sind. Wenn der Index, der einem Lesezeichen zugeordnet ist, für Ihre Erweiterung wichtig ist, sollte die Erweiterung – beim Verschieben mehrerer Lesezeichen – auf den Abschluss jedes `bookmarks.move`-Aufrufs warten, bevor das nächste Lesezeichen verschoben wird. Das Warten stellt sicher, dass der jedem Lesezeichen zugeordnete Index nicht von einem Verschiebeaufruf beeinflusst wird, der gleichzeitig ausgeführt wird, während der ursprüngliche Aufruf in Bearbeitung ist.

## Syntax

```js-nolint
browser.bookmarks.onMoved.addListener(listener)
browser.bookmarks.onMoved.removeListener(listener)
browser.bookmarks.onMoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `id`
      - : `string`. ID des Elements, das verschoben wurde.
    - `moveInfo`
      - : `object`. Objekt, das weitere Details zur Verschiebung enthält. Siehe den [moveInfo](#moveinfo_2)-Abschnitt für weitere Details.

## Zusätzliche Objekte

### moveInfo

- `parentId`
  - : `string`. Der neue übergeordnete Ordner.
- `index`
  - : `integer`. Der neue Index dieses Elements in seinem übergeordneten Ordner.
- `oldParentId`
  - : `string`. Der alte übergeordnete Ordner.
- `oldIndex`
  - : `integer`. Der alte Index des Elements in seinem übergeordneten Ordner.

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
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onMoved) API. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

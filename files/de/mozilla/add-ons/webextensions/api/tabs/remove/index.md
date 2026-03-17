---
title: tabs.remove()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/remove
l10n:
  sourceCommit: a0cae6a26d6b7263ddea94c4e3b3484fe218b354
---

Schließt einen oder mehrere Tabs.

Wenn einer der Tabs:

- Teil einer geteilten Ansicht ist, wird die geteilte Ansicht entfernt.
- der letzte Tab in einer Gruppe ist, wird die Gruppe entfernt.

## Syntax

```js-nolint
let removing = browser.tabs.remove(
  tabIds          // integer or integer array
)
```

### Parameter

- `tabIds`
  - : `integer` oder `array` von `integer`. Die IDs des Tabs oder der Tabs, die geschlossen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn alle angegebenen Tabs entfernt wurden oder ihre `beforeunload`-Eingabeaufforderungen bearbeitet wurden. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Einen einzelnen Tab schließen:

```js
function onRemoved() {
  console.log(`Removed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let removing = browser.tabs.remove(2);
removing.then(onRemoved, onError);
```

Mehrere Tabs schließen:

```js
function onRemoved() {
  console.log(`Removed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let removing = browser.tabs.remove([15, 14, 1]);
removing.then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-remove) API von Chromium. Diese Dokumentation leitet sich ab aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

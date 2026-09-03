---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
l10n:
  sourceCommit: e37b064f509db94d52a080b8983e16713737f1b7
---

Hebt alle aktiven Alarme auf.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let clearAlarms = browser.alarms.clearAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem booleschen Wert erfüllt wird. Dieser ist `true`, wenn Alarme gelöscht wurden, andernfalls `false`.

> [!NOTE]
> Chrome gibt immer `true` zurück und Safari `undefined`. Der Rückgabetyp kann sich ändern und möglicherweise in Zukunft für alle Browser immer `undefined` zurückgeben. Es ist am besten, sich nicht auf den Rückgabetyp zu verlassen.

## Beispiele

```js
function onClearedAll(wasCleared) {
  console.log(wasCleared); // true/false
}

let clearAlarms = browser.alarms.clearAll();
clearAlarms.then(onClearedAll);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API.

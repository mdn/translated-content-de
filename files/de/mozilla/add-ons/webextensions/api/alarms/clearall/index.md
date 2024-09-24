---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Hebt alle aktiven Alarme auf.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let clearAlarms = browser.alarms.clearAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem booleschen Wert erfüllt wird. Dies wird `true` sein, wenn Alarme gelöscht wurden, andernfalls `false`. Beachten Sie, dass Chrome hier immer `true` übergibt.

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
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.

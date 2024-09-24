---
title: alarms.clear()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clear
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Hebt einen Alarm auf, basierend auf seinem Namen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let clearAlarm = browser.alarms.clear(
  name                       // string
)
```

### Parameter

- `name` {{optional_inline}}
  - : `string`. Der Name des Alarms, der aufgehoben werden soll. Wenn Sie diesen nicht angeben, wird der leere String "" verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem booleschen Wert erfüllt wird. Dieser wird `true` sein, wenn der Alarm aufgehoben wurde, andernfalls `false`.

## Beispiele

```js
function onCleared(wasCleared) {
  console.log(wasCleared); // true/false
}

let clearAlarm = browser.alarms.clear("my-periodic-alarm");
clearAlarm.then(onCleared);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.

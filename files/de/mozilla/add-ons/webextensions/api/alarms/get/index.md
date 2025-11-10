---
title: alarms.get()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft einen Alarm ab, gegeben durch seinen Namen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getAlarm = browser.alarms.get(
  name                   // optional string
)
```

### Parameter

- `name` {{optional_inline}}
  - : `string`. Der Name des Alarms, der abgerufen werden soll. Wenn Sie dies nicht angeben, wird der leere String "" verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit einem {{WebExtAPIRef('alarms.Alarm', "Alarm")}}-Objekt erfüllt wird. Dies repräsentiert den Alarm, dessen Name mit `name` übereinstimmt. Wenn keine Alarme übereinstimmen, wird dies `undefined` sein.

## Beispiele

```js
function gotAlarm(alarm) {
  if (alarm) {
    console.log(alarm.name);
  }
}

let getAlarm = browser.alarms.get("my-periodic-alarm");
getAlarm.then(gotAlarm);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API.

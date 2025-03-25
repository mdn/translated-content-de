---
title: alarms.get()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/get
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

Lädt einen Wecker anhand seines Namens.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getAlarm = browser.alarms.get(
  name                   // optional string
)
```

### Parameter

- `name` {{optional_inline}}
  - : `string`. Der Name des zu ladenden Weckers. Wenn Sie diesen nicht angeben, wird der leere String "" verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('alarms.Alarm', "Alarm")}}-Objekt erfüllt wird. Dieses repräsentiert den Wecker, dessen Name `name` entspricht. Wenn keine Wecker übereinstimmen, wird dies `undefined` sein.

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

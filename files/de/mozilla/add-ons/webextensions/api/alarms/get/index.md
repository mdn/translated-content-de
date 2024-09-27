---
title: alarms.get()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/get
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft einen Alarm anhand seines Namens ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getAlarm = browser.alarms.get(
  name                   // optional string
)
```

### Parameter

- `name` {{optional_inline}}
  - : `string`. Der Name des Alarms, den Sie abrufen möchten. Wenn Sie diesen nicht angeben, wird der leere String "" verwendet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `{{WebExtAPIRef('alarms.Alarm', "Alarm")}}`-Objekt erfüllt wird. Dies repräsentiert den Alarm, dessen Name mit `name` übereinstimmt. Wenn keine Alarme übereinstimmen, wird dies `undefined` sein.

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
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.

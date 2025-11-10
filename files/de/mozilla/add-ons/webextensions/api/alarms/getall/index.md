---
title: alarms.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft alle aktiven Alarme für die Erweiterung ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getAlarms = browser.alarms.getAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`Alarm`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm)-Objekten erfüllt wird. Jedes davon repräsentiert einen aktiven Alarm, der zur Erweiterung gehört. Wenn keine Alarme aktiv sind, ist das Array leer.

## Beispiele

```js
function gotAll(alarms) {
  for (const alarm of alarms) {
    console.log(alarm.name);
  }
}

browser.alarms.getAll().then(gotAll);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.

---
title: alarms.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft alle aktiven Alarme für die Erweiterung ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getAlarms = browser.alarms.getAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`Alarm`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm)-Objekten erfüllt wird. Jedes dieser Objekte repräsentiert einen aktiven Alarm, der zur Erweiterung gehört. Wenn keine Alarme aktiv sind, wird das Array leer sein.

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
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms)-API von Chromium.

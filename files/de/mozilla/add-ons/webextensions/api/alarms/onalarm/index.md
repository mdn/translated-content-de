---
title: alarms.onAlarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein von der Erweiterung gesetzter Alarm ausgelöst wird.

## Syntax

```js-nolint
browser.alarms.onAlarm.addListener(listener)
browser.alarms.onAlarm.removeListener(listener)
browser.alarms.onAlarm.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `alarm`
      - : {{WebExtAPIRef('alarms.Alarm')}}. Der Alarm, der ausgelöst wurde. Verwenden Sie `Alarm.name`, um festzustellen, welcher Alarm ausgelöst wurde.

## Beispiele

Behandeln eines Alarms, der ausgelöst wird:

```js
function handleAlarm(alarmInfo) {
  console.log(`on alarm: ${alarmInfo.name}`);
}

browser.alarms.onAlarm.addListener(handleAlarm);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.

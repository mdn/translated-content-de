---
title: alarms.onAlarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein vom Add-on gesetzter Alarm ausgelöst wird.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn der Listener aktiv ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `alarm`
      - : {{WebExtAPIRef('alarms.Alarm')}}. Der ausgelöste Alarm. Verwenden Sie `Alarm.name`, um festzustellen, welcher Alarm ausgelöst wurde.

## Beispiele

Einen Alarm behandeln, der ausgelöst wird:

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
> Diese API basiert auf der API [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) von Chromium.

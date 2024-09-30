---
title: alarms.onAlarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein von der Erweiterung gesetzter Alarm ausgelöst wird.

## Syntax

```js-nolint
browser.alarms.onAlarm.addListener(listener)
browser.alarms.onAlarm.removeListener(listener)
browser.alarms.onAlarm.hasListener(listener)
```

Events haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Event hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Event. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Event registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Event auftritt. Der Funktion wird folgendes Argument übergeben:

    - `alarm`
      - : {{WebExtAPIRef('alarms.Alarm')}}. Der ausgelöste Alarm. Verwenden Sie `Alarm.name`, um festzustellen, welcher Alarm ausgelöst wurde.

## Beispiele

Verarbeitung eines ausgelösten Alarms:

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

---
title: alarms.Alarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Informationen über einen einzelnen Alarm. Dieses Objekt wird von {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.getAll()')}} zurückgegeben und in den {{WebExtAPIRef('alarms.onAlarm')}} Listener übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `name`
  - : `string`. Name dieses Alarms. Dies ist der Name, der beim Aufruf von {{WebExtAPIRef('alarms.create()')}} verwendet wurde, um diesen Alarm zu erstellen.
- `scheduledTime`
  - : `double`. Zeit, zu der der Alarm das nächste Mal ausgelöst werden soll, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `periodInMinutes` {{optional_inline}}
  - : `double`. Wenn dies nicht `null` ist, handelt es sich um einen periodischen Alarm, und dies repräsentiert seine Periodendauer in Minuten.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.

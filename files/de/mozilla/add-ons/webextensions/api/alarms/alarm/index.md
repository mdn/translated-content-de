---
title: alarms.Alarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Informationen zu einem einzelnen Alarm. Dieses Objekt wird von {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.getAll()')}} zurückgegeben und in den {{WebExtAPIRef('alarms.onAlarm')}} Listener übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `name`
  - : `string`. Name dieses Alarms. Dies ist der Name, der im {{WebExtAPIRef('alarms.create()')}}-Aufruf angegeben wurde, der diesen Alarm erstellt hat.
- `scheduledTime`
  - : `double`. Zeitpunkt, zu dem der Alarm das nächste Mal ausgelöst wird, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `periodInMinutes` {{optional_inline}}
  - : `double`. Wenn dies nicht `null` ist, ist der Alarm periodisch, und dies stellt seine Periode in Minuten dar.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.

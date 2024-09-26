---
title: alarms.Alarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Informationen zu einem einzelnen Alarm. Dieses Objekt wird von {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.getAll()')}} zurückgegeben und wird an den {{WebExtAPIRef('alarms.onAlarm')}} Listener übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `name`
  - : `string`. Name dieses Alarms. Dies ist der Name, der bei dem {{WebExtAPIRef('alarms.create()')}} Aufruf, der diesen Alarm erstellt hat, übergeben wurde.
- `scheduledTime`
  - : `double`. Zeitpunkt, zu dem der Alarm das nächste Mal ausgelöst wird, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
- `periodInMinutes` {{optional_inline}}
  - : `double`. Wenn dies nicht `null` ist, dann ist der Alarm periodisch, und dies stellt seine Periode in Minuten dar.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.
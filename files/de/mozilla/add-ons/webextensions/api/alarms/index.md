---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Planen Sie, dass Code zu einem bestimmten Zeitpunkt in der Zukunft ausgeführt wird. Dies ist ähnlich wie [`setTimeout()`](/de/docs/Web/API/setTimeout) und [`setInterval()`](/de/docs/Web/API/setInterval), mit dem Unterschied, dass diese Funktionen nicht mit Hintergrundseiten funktionieren, die bei Bedarf geladen werden.

Alarme bleiben nicht über Browsersitzungen hinweg bestehen. Sie werden global über alle Kontexte einer einzelnen Erweiterung erstellt. Beispielsweise löst ein im Hintergrundskript erstellter Alarm das [`onAlarm`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm) Ereignis im Hintergrundskript, auf der Optionsseite, der Popup-Seite und Erweitertentabs aus (und umgekehrt). Die Alarms-API ist in [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis) nicht verfügbar.

Um diese API zu verwenden, müssen Sie über die "alarms" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) verfügen.

## Typen

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Informationen zu einem bestimmten Alarm.

## Methoden

- {{WebExtAPIRef("alarms.clear()")}}
  - : Löschen Sie einen bestimmten Alarm anhand seines Namens.
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : Löschen Sie alle geplanten Alarme.
- {{WebExtAPIRef("alarms.create()")}}
  - : Erstellen Sie einen neuen Alarm.
- {{WebExtAPIRef("alarms.get()")}}
  - : Ruft einen bestimmten Alarm anhand seines Namens ab.
- {{WebExtAPIRef("alarms.getAll()")}}
  - : Ruft alle geplanten Alarme ab.

## Ereignisse

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : Wird ausgelöst, wenn ein Alarm ausgelöst wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.

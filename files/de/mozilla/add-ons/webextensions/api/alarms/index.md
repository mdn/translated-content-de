---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{AddonSidebar}}

Planen Sie Code so, dass er zu einem bestimmten Zeitpunkt in der Zukunft ausgeführt wird. Dies ähnelt [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval), mit dem Unterschied, dass diese Funktionen nicht mit Hintergrundseiten funktionieren, die bei Bedarf geladen werden.

Alarme bleiben nicht über Browsersitzungen hinweg bestehen. Sie werden global über alle Kontexte einer einzelnen Erweiterung hinweg erstellt. Zum Beispiel wird ein im Hintergrundskript erstellter Alarm das [`onAlarm`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm)-Ereignis im Hintergrundskript, auf der Optionsseite, auf der Popup-Seite und in den Erweiterungstabs (und umgekehrt) auslösen. Die Alarms-API ist in [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis) nicht verfügbar.

Um diese API zu verwenden, müssen Sie die "alarms"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

## Typen

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Informationen zu einem bestimmten Alarm.

## Methoden

- {{WebExtAPIRef("alarms.clear()")}}
  - : Einen bestimmten Alarm löschen, angegeben durch seinen Namen.
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : Alle geplanten Alarme löschen.
- {{WebExtAPIRef("alarms.create()")}}
  - : Einen neuen Alarm erstellen.
- {{WebExtAPIRef("alarms.get()")}}
  - : Einen bestimmten Alarm abrufen, angegeben durch seinen Namen.
- {{WebExtAPIRef("alarms.getAll()")}}
  - : Alle geplanten Alarme abrufen.

## Ereignisse

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : Wird ausgelöst, wenn ein Alarm ausgelöst wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms)-API von Chromium.

---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Planen Sie Code so, dass er zu einem bestimmten Zeitpunkt in der Zukunft ausgeführt wird. Dies ist ähnlich wie [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval), außer dass diese Funktionen nicht mit Hintergrundseiten funktionieren, die nach Bedarf geladen werden.

Alarme bleiben nicht über Browsersitzungen hinweg erhalten. Sie werden global in allen Kontexten einer einzelnen Erweiterung erstellt. Zum Beispiel löst ein Alarm, der im Hintergrundskript erstellt wurde, das [`onAlarm`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm)-Ereignis im Hintergrundskript, auf der Optionsseite, der Popup-Seite und den Erweiterungstabs aus (und umgekehrt). Die Alarms-API ist in [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis) nicht verfügbar.

Um diese API zu nutzen, müssen Sie die Berechtigung "alarms" in [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

## Typen

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Informationen über einen bestimmten Alarm.

## Methoden

- {{WebExtAPIRef("alarms.clear()")}}
  - : Löscht einen bestimmten Alarm mit seinem Namen.
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : Löscht alle geplanten Alarme.
- {{WebExtAPIRef("alarms.create()")}}
  - : Erstellt einen neuen Alarm.
- {{WebExtAPIRef("alarms.get()")}}
  - : Ruft einen bestimmten Alarm mit seinem Namen ab.
- {{WebExtAPIRef("alarms.getAll()")}}
  - : Ruft alle geplanten Alarme ab.

## Ereignisse

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : Wird ausgelöst, wenn ein Alarm ausgelöst wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms)-API von Chromium.

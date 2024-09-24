---
title: Alarme
slug: Mozilla/Add-ons/WebExtensions/API/alarms
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Planen Sie, dass Code zu einem bestimmten Zeitpunkt in der Zukunft ausgeführt wird. Dies ähnelt [`setTimeout()`](/de/docs/Web/API/setTimeout) und [`setInterval()`](/de/docs/Web/API/setInterval), außer dass diese Funktionen nicht mit Hintergrundseiten funktionieren, die bei Bedarf geladen werden.

Alarme persistieren nicht über Browsersitzungen hinweg. Sie werden global in allen Kontexten einer einzelnen Erweiterung erstellt. Z.B. ein Alarm, der im Hintergrundskript erstellt wurde, wird das [`onAlarm`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm)-Ereignis im Hintergrundskript, der Optionsseite, der Popup-Seite und den Erweiterungstabs auslösen (und umgekehrt). Die Alarme-API ist nicht in [Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis) verfügbar.

Um diese API zu nutzen, benötigen Sie die "alarms"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Informationen über einen bestimmten Alarm.

## Methoden

- {{WebExtAPIRef("alarms.clear()")}}
  - : Einen spezifischen Alarm löschen, basierend auf seinem Namen.
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : Alle geplanten Alarme löschen.
- {{WebExtAPIRef("alarms.create()")}}
  - : Einen neuen Alarm erstellen.
- {{WebExtAPIRef("alarms.get()")}}
  - : Einen spezifischen Alarm abrufen, basierend auf seinem Namen.
- {{WebExtAPIRef("alarms.getAll()")}}
  - : Alle geplanten Alarme abrufen.

## Ereignisse

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : Wird ausgelöst, wenn ein Alarm losgeht.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms)-API.

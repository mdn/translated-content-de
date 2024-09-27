---
title: downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen die Interaktion mit dem Download-Manager des Browsers. Sie können dieses API-Modul verwenden, um Dateien herunterzuladen, Downloads abzubrechen, zu pausieren, fortzusetzen und heruntergeladene Dateien im Dateimanager anzuzeigen.

Um diese API zu verwenden, müssen Sie die "downloads" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angegeben haben.

## Typen

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : Definiert Optionen, was zu tun ist, wenn der Name einer heruntergeladenen Datei mit einer vorhandenen Datei in Konflikt steht.
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : Definiert eine Reihe möglicher Gründe, warum ein Download unterbrochen wurde.
- {{WebExtAPIRef("downloads.DangerType")}}
  - : Definiert eine Reihe allgemeiner Warnungen über mögliche Gefahren im Zusammenhang mit herunterladbaren Dateien.
- {{WebExtAPIRef("downloads.State")}}
  - : Definiert verschiedene Zustände, in denen sich ein aktueller Download befinden kann.
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : Repräsentiert eine heruntergeladene Datei.
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : Repräsentiert die Differenz zwischen zwei Zeichenfolgen.
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : Repräsentiert die Differenz zwischen zwei Doppelwerten.
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : Repräsentiert die Differenz zwischen zwei Boolean-Werten.
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : Repräsentiert die Zeit, die ein Download benötigt hat, um abgeschlossen zu werden.
- {{WebExtAPIRef("downloads.DownloadQuery")}}
  - : Definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem bestimmten Satz von Downloads zu suchen.

## Funktionen

- {{WebExtAPIRef("downloads.download()")}}
  - : Lädt eine Datei herunter, basierend auf ihrer URL und anderen optionalen Präferenzen.
- {{WebExtAPIRef("downloads.search()")}}
  - : Durchsucht die im Download-Manager des Browsers verfügbaren {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} und gibt diejenigen zurück, die den angegebenen Suchkriterien entsprechen.
- {{WebExtAPIRef("downloads.pause()")}}
  - : Pausiert einen Download.
- {{WebExtAPIRef("downloads.resume()")}}
  - : Setzt einen pausierten Download fort.
- {{WebExtAPIRef("downloads.cancel()")}}
  - : Bricht einen Download ab.
- {{WebExtAPIRef("downloads.getFileIcon()")}}
  - : Ruft ein Symbol für den angegebenen Download ab.
- {{WebExtAPIRef("downloads.open()")}}
  - : Öffnet die heruntergeladene Datei mit der zugeordneten Anwendung.
- {{WebExtAPIRef("downloads.show()")}}
  - : Öffnet die Dateimanager-Anwendung der Plattform, um die heruntergeladene Datei im enthaltenden Ordner anzuzeigen.
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : Öffnet die Dateimanager-Anwendung der Plattform, um den Standard-Download-Ordner anzuzeigen.
- {{WebExtAPIRef("downloads.erase()")}}
  - : Löscht passende {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} aus dem Download-Verlauf des Browsers, ohne die heruntergeladenen Dateien von der Festplatte zu löschen.
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : Entfernt eine heruntergeladene Datei von der Festplatte, aber nicht aus dem Download-Verlauf des Browsers.
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : Fordert den Benutzer auf, einen gefährlichen Download zu akzeptieren oder abzubrechen.
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : Aktiviert oder deaktiviert das graue Regal am unteren Rand jedes Fensters, das mit dem aktuellen Browserprofil verbunden ist. Das Regal bleibt deaktiviert, solange es von mindestens einer Erweiterung deaktiviert wurde.

## Ereignisse

- {{WebExtAPIRef("downloads.onCreated")}}
  - : Wird ausgelöst, wenn ein Download beginnt, mit dem {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} Objekt.
- {{WebExtAPIRef("downloads.onErased")}}
  - : Wird ausgelöst, wenn ein Download aus dem Verlauf gelöscht wird, mit der `downloadId`.
- {{WebExtAPIRef("downloads.onChanged")}}
  - : Wenn sich eine der Eigenschaften eines {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} außer `bytesReceived` ändert, wird dieses Ereignis mit der `downloadId` und einem Objekt ausgelöst, das die geänderten Eigenschaften enthält.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads) API von Chromium.

---
title: downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermöglicht Erweiterungen die Interaktion mit dem Download-Manager des Browsers. Sie können dieses API-Modul verwenden, um Dateien herunterzuladen, Downloads abzubrechen, zu pausieren, fortzusetzen und heruntergeladene Dateien im Dateimanager anzuzeigen.

Um diese API nutzen zu können, müssen Sie die "downloads" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angegeben haben.

## Typen

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : Definiert Optionen für den Umgang mit Namenskonflikten, wenn der Name einer heruntergeladenen Datei mit einer vorhandenen Datei kollidiert.
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : Definiert eine Reihe möglicher Gründe, warum ein Download unterbrochen wurde.
- {{WebExtAPIRef("downloads.DangerType")}}
  - : Definiert eine Reihe allgemeiner Warnungen zu möglichen Gefahren im Zusammenhang mit herunterladbaren Dateien.
- {{WebExtAPIRef("downloads.State")}}
  - : Definiert verschiedene Zustände, in denen sich ein aktueller Download befinden kann.
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : Repräsentiert eine heruntergeladene Datei.
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : Stellt die Differenz zwischen zwei Zeichenfolgen dar.
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : Stellt die Differenz zwischen zwei Gleitkommazahlen dar.
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : Stellt die Differenz zwischen zwei booleschen Werten dar.
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : Stellt die Zeit dar, die ein Download zum Abschluss benötigte.
- {{WebExtAPIRef("downloads.DownloadQuery")}}
  - : Definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem bestimmten Satz von Downloads zu suchen.

## Funktionen

- {{WebExtAPIRef("downloads.download()")}}
  - : Lädt eine Datei herunter, basierend auf ihrer URL und anderen optionalen Präferenzen.
- {{WebExtAPIRef("downloads.search()")}}
  - : Durchsucht die im Download-Manager des Browsers verfügbaren {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} und gibt diejenigen zurück, die die angegebenen Suchkriterien erfüllen.
- {{WebExtAPIRef("downloads.pause()")}}
  - : Pausiert einen Download.
- {{WebExtAPIRef("downloads.resume()")}}
  - : Nimmt einen pausierten Download wieder auf.
- {{WebExtAPIRef("downloads.cancel()")}}
  - : Bricht einen Download ab.
- {{WebExtAPIRef("downloads.getFileIcon()")}}
  - : Ruft ein Symbol für den angegebenen Download ab.
- {{WebExtAPIRef("downloads.open()")}}
  - : Öffnet die heruntergeladene Datei mit der zugeordneten Anwendung.
- {{WebExtAPIRef("downloads.show()")}}
  - : Öffnet die Dateimanageranwendung der Plattform, um die heruntergeladene Datei im enthaltenen Ordner anzuzeigen.
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : Öffnet die Dateimanageranwendung der Plattform, um den Standard-Download-Ordner anzuzeigen.
- {{WebExtAPIRef("downloads.erase()")}}
  - : Löscht passende {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} aus der Download-Historie des Browsers, ohne die heruntergeladenen Dateien von der Festplatte zu löschen.
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : Entfernt eine heruntergeladene Datei von der Festplatte, aber nicht aus der Download-Historie des Browsers.
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : Fordert den Benutzer auf, einen gefährlichen Download zu akzeptieren oder abzubrechen.
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : Aktiviert oder deaktiviert das graue Regal am unteren Rand jedes Fensters, das mit dem aktuellen Browser-Profil verbunden ist. Das Regal bleibt deaktiviert, solange mindestens eine Erweiterung es deaktiviert hat.

## Ereignisse

- {{WebExtAPIRef("downloads.onCreated")}}
  - : Wird mit dem {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} Objekt ausgelöst, wenn ein Download beginnt.
- {{WebExtAPIRef("downloads.onErased")}}
  - : Wird mit der `downloadId` ausgelöst, wenn ein Download aus der Historie gelöscht wird.
- {{WebExtAPIRef("downloads.onChanged")}}
  - : Wenn sich eine der Eigenschaften eines {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}, außer `bytesReceived`, ändert, wird dieses Ereignis mit der `downloadId` und einem Objekt, das die geänderten Eigenschaften enthält, ausgelöst.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads) API von Chromium.

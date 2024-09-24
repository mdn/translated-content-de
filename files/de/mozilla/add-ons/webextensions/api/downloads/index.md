---
title: Downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht es Erweiterungen, mit dem Download-Manager des Browsers zu interagieren. Sie können dieses API-Modul verwenden, um Dateien herunterzuladen, Downloads zu stornieren, zu pausieren, fortzusetzen und heruntergeladene Dateien im Dateimanager anzuzeigen.

Um diese API verwenden zu können, müssen Sie die "downloads" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angeben.

## Typen

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : Definiert Optionen, was zu tun ist, wenn der Name einer heruntergeladenen Datei mit einer bestehenden Datei in Konflikt steht.
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : Definiert eine Reihe möglicher Gründe, warum ein Download unterbrochen wurde.
- {{WebExtAPIRef("downloads.DangerType")}}
  - : Definiert eine Reihe häufiger Warnungen vor möglichen Gefahren im Zusammenhang mit herunterladbaren Dateien.
- {{WebExtAPIRef("downloads.State")}}
  - : Definiert verschiedene Zustände, in denen sich ein aktueller Download befinden kann.
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : Repräsentiert eine heruntergeladene Datei.
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : Repräsentiert den Unterschied zwischen zwei Zeichenfolgen.
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : Repräsentiert den Unterschied zwischen zwei Doubles.
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : Repräsentiert den Unterschied zwischen zwei Booleans.
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : Repräsentiert die Zeit, die ein Download zum Abschließen benötigt hat.
- {{WebExtAPIRef("downloads.DownloadQuery")}}
  - : Definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem bestimmten Satz von Downloads zu suchen.

## Funktionen

- {{WebExtAPIRef("downloads.download()")}}
  - : Lädt eine Datei herunter, gegeben durch ihre URL und andere optionale Präferenzen.
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
  - : Öffnet die Dateimanager-Anwendung der Plattform, um die heruntergeladene Datei in ihrem enthaltenen Ordner anzuzeigen.
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : Öffnet die Dateimanager-Anwendung der Plattform, um den Standard-Download-Ordner anzuzeigen.
- {{WebExtAPIRef("downloads.erase()")}}
  - : Löscht passende {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} aus dem Download-Verlauf des Browsers, ohne die heruntergeladenen Dateien von der Festplatte zu löschen.
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : Entfernt eine heruntergeladene Datei von der Festplatte, aber nicht aus dem Download-Verlauf des Browsers.
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : Fordert den Benutzer auf, einen gefährlichen Download zu akzeptieren oder abzulehnen.
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : Aktiviert oder deaktiviert das graue Regal am unteren Rand jedes Fensters, das mit dem aktuellen Browserprofil verknüpft ist. Das Regal wird deaktiviert, solange es von mindestens einer Erweiterung deaktiviert wurde.

## Ereignisse

- {{WebExtAPIRef("downloads.onCreated")}}
  - : Wird mit dem {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} Objekt ausgelöst, wenn ein Download beginnt.
- {{WebExtAPIRef("downloads.onErased")}}
  - : Wird mit der `downloadId` ausgelöst, wenn ein Download aus der Historie gelöscht wird.
- {{WebExtAPIRef("downloads.onChanged")}}
  - : Wenn sich eine der Eigenschaften eines {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} außer `bytesReceived` ändert, wird dieses Ereignis mit der `downloadId` und einem Objekt mit den geänderten Eigenschaften ausgelöst.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads) API von Chromium.

---
title: downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, mit dem Download-Manager des Browsers zu interagieren. Sie können dieses API-Modul verwenden, um Dateien herunterzuladen, Downloads zu stornieren, zu pausieren, fortzusetzen und heruntergeladene Dateien im Dateimanager anzuzeigen.

Um diese API zu verwenden, müssen Sie die "downloads" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angegeben haben.

## Typen

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : Definiert Optionen, was zu tun ist, wenn der Name einer heruntergeladenen Datei mit einer vorhandenen Datei in Konflikt steht.
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : Definiert eine Reihe möglicher Gründe, warum ein Download unterbrochen wurde.
- {{WebExtAPIRef("downloads.DangerType")}}
  - : Definiert eine Reihe von häufigen Warnungen vor möglichen Gefahren, die mit herunterladbaren Dateien verbunden sind.
- {{WebExtAPIRef("downloads.State")}}
  - : Definiert verschiedene Zustände, in denen sich ein aktueller Download befinden kann.
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : Repräsentiert eine heruntergeladene Datei.
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : Repräsentiert den Unterschied zwischen zwei Zeichenfolgen.
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : Repräsentiert den Unterschied zwischen zwei Fließkommazahlen.
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : Repräsentiert den Unterschied zwischen zwei booleschen Werten.
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : Repräsentiert die Zeit, die ein Download zum Abschließen benötigt hat.
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
  - : Storniert einen Download.
- {{WebExtAPIRef("downloads.getFileIcon()")}}
  - : Ruft ein Symbol für den angegebenen Download ab.
- {{WebExtAPIRef("downloads.open()")}}
  - : Öffnet die heruntergeladene Datei mit ihrer zugehörigen Anwendung.
- {{WebExtAPIRef("downloads.show()")}}
  - : Öffnet die Dateimanager-Anwendung der Plattform, um die heruntergeladene Datei im enthaltenen Ordner anzuzeigen.
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : Öffnet die Dateimanager-Anwendung der Plattform, um den Standard-Download-Ordner anzuzeigen.
- {{WebExtAPIRef("downloads.erase()")}}
  - : Löscht passende {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} aus dem Download-Verlauf des Browsers, ohne die heruntergeladenen Dateien von der Festplatte zu löschen.
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : Entfernt eine heruntergeladene Datei von der Festplatte, aber nicht aus dem Download-Verlauf des Browsers.
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : Fordert den Benutzer auf, einen gefährlichen Download zu akzeptieren oder abzubrechen.
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : Aktiviert oder deaktiviert das graue Regal am unteren Rand jedes Fensters, das mit dem aktuellen Browser-Profil verknüpft ist. Das Regal bleibt deaktiviert, solange mindestens eine Erweiterung es deaktiviert hat.

## Ereignisse

- {{WebExtAPIRef("downloads.onCreated")}}
  - : Wird mit dem {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}-Objekt ausgelöst, wenn ein Download beginnt.
- {{WebExtAPIRef("downloads.onErased")}}
  - : Wird mit der `downloadId` ausgelöst, wenn ein Download aus dem Verlauf gelöscht wird.
- {{WebExtAPIRef("downloads.onChanged")}}
  - : Wenn sich eine der Eigenschaften eines {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} außer `bytesReceived` ändert, wird dieses Ereignis mit der `downloadId` und einem Objekt ausgelöst, das die geänderten Eigenschaften enthält.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads) API von Chromium.

<!--
Copyright 2015 The Chromium Authors. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

   * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.
   * Neither the name of Google Inc. nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->

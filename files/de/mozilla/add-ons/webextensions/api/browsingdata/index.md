---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
l10n:
  sourceCommit: b2685e330f887359ec886b08199a22a6fcbe0caf
---

Ermöglicht Erweiterungen, die beim Browsen angesammelten Daten zu löschen.

In der `browsingData` API sind die Browserdaten in folgende Typen unterteilt:

- Browser-Cache
- Cookies
- Downloads
- Verlauf
- Lokaler Speicher
- Plug-in-Daten
- Gespeicherte Formulardaten
- Gespeicherte Passwörter

Sie können die Funktion {{WebExtAPIRef("browsingData.remove()")}} verwenden, um eine beliebige Kombination dieser Typen zu entfernen. Es gibt auch spezielle Funktionen, um jeden speziellen Datentyp zu entfernen, wie {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} und so weiter.

Alle `browsingData.remove[X]()` Funktionen nehmen ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt an, das Sie verwenden können, um zwei weitere Aspekte der Datenentfernung zu steuern:

- Wie weit in die Vergangenheit Daten entfernt werden sollen
- Ob Daten nur von normalen Webseiten entfernt werden sollen oder auch von Add-ons. Beachten Sie, dass diese Option in Firefox noch nicht unterstützt wird.

Abschließend bietet Ihnen diese API eine {{WebExtAPIRef("browsingData.settings()")}} Funktion, mit der Sie den aktuellen Wert der Einstellungen für die integrierte Funktion "Chronik löschen" des Browsers abrufen können.

Um diese API zu verwenden, müssen Sie die "browsingData" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Typen

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : Objekt, das verwendet wird, um den zu entfernenden Datentyp festzulegen: zum Beispiel Verlauf, Downloads, Passwörter usw.
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : Objekt, das verwendet wird, um festzulegen, wie weit in die Vergangenheit Daten entfernt werden sollen und ob Daten durch normales Web-Browsen oder durch Add-ons hinzugefügt wurden.

## Methoden

- {{WebExtAPIRef("browsingData.remove()")}}
  - : Entfernt Browserdaten für die angegebenen Datentypen.
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : Löscht den Cache des Browsers.
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : Entfernt Cookies.
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : Entfernt die Liste der heruntergeladenen Dateien.
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : Löscht gespeicherte Formulardaten.
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : Löscht den Verlauf des Browsers.
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : Löscht den von Websites erstellten [lokalen Speicher](/de/docs/Web/API/Window/localStorage) und [Sitzungsspeicher](/de/docs/Web/API/Window/sessionStorage).
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : Löscht gespeicherte Passwörter.
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : Löscht Daten, die mit Plug-ins verknüpft sind.
- {{WebExtAPIRef("browsingData.settings()")}}
  - : Ruft den aktuellen Wert der Einstellungen in der Browserfunktion "Chronik löschen" ab.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->

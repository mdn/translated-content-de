---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen, die Daten zu löschen, die beim Surfen des Nutzers angesammelt werden.

Im `browsingData` API wird das Surfverhalten in folgende Typen unterteilt:

- Browser-Cache
- Cookies
- Downloads
- Verlauf
- Lokaler Speicher
- Plugin-Daten
- Gespeicherte Formulardaten
- Gespeicherte Passwörter

Sie können die Funktion {{WebExtAPIRef("browsingData.remove()")}} verwenden, um eine beliebige Kombination dieser Typen zu entfernen. Es gibt auch spezielle Funktionen, um jede Art von Daten einzeln zu entfernen, wie z.B. {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} und so weiter.

Alle `browsingData.remove[X]()`-Funktionen nehmen ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt an, mit dem Sie zwei weitere Aspekte der Datenentfernung steuern können:

- wie weit in der Vergangenheit Daten entfernt werden sollen
- ob Daten nur von normalen Webseiten oder auch von gehosteten Web-Apps und Add-ons entfernt werden sollen. Beachten Sie, dass diese Option in Firefox noch nicht unterstützt wird.

Schließlich bietet Ihnen diese API eine {{WebExtAPIRef("browsingData.settings()")}}-Funktion, die Ihnen den aktuellen Wert der Einstellungen für die eingebaute "Chronik löschen"-Funktion des Browsers gibt.

Um dieses API zu verwenden, müssen Sie die "browsingData" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen.

## Typen

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : Objekt, das verwendet wird, um den zu entfernenden Datentyp zu spezifizieren: zum Beispiel Verlauf, Downloads, Passwörter, und so weiter.
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : Objekt, das verwendet wird, um zu spezifizieren, wie weit in der Vergangenheit Daten entfernt werden sollen und ob Daten aus dem normalen Web-Browsing, von gehosteten Apps oder von Add-ons hinzugefügt wurden.

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
  - : Löscht jeden [lokalen Speicher](/de/docs/Web/API/Window/localStorage), der von Websites erstellt wurde.
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : Löscht gespeicherte Passwörter.
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : Löscht Daten, die mit Plugins assoziiert sind.
- {{WebExtAPIRef("browsingData.settings()")}}
  - : Ruft den aktuellen Wert der Einstellungen in der "Chronik löschen"-Funktion des Browsers ab.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Dieses API basiert auf dem [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

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

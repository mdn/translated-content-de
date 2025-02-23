---
title: Befehle
slug: Mozilla/Add-ons/WebExtensions/API/commands
l10n:
  sourceCommit: 7f4c213138347a46655773421984057df58c0cc0
---

{{AddonSidebar}}

Hört darauf, dass der Benutzer Befehle ausführt, die mit dem [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) registriert sind.

Bietet auch Funktionen, um die Einstellungen der Tastenkombinationen zu aktualisieren. Weitere Informationen finden Sie unter [Aktualisieren von Tastenkombinationen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#updating_shortcuts) im [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) Leitfaden.

## Typen

- {{WebExtAPIRef("commands.Command")}}
  - : Objekt, das die Einstellungen eines Befehls enthält.

## Funktionen

- {{WebExtAPIRef("commands.getAll")}}
  - : Ruft alle registrierten Befehle für die Erweiterung ab.
- {{WebExtAPIRef("commands.openShortcutSettings")}}
  - : Öffnet die Seite zur Verwaltung von Erweiterungskurzbefehlen und hebt die Shortcut-Optionen der Erweiterung hervor, falls vorhanden.
- {{WebExtAPIRef("commands.reset")}}
  - : Setzt die Beschreibung und die Tastenkombination eines Befehls auf die im manifest-Schlüssel angegebenen Werte zurück.
- {{WebExtAPIRef("commands.update")}}
  - : Ändert die Beschreibung oder Tastenkombination für einen Befehl.

## Ereignisse

- {{WebExtAPIRef("commands.onChanged")}}
  - : Wird ausgelöst, wenn die Tastenkombination für einen Befehl geändert wird.
- {{WebExtAPIRef("commands.onCommand")}}
  - : Wird ausgelöst, wenn ein Befehl mit seiner zugehörigen Tastenkombination ausgeführt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.

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

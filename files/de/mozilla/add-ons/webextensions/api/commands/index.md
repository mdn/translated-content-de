---
title: commands
slug: Mozilla/Add-ons/WebExtensions/API/commands
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Hören Sie darauf, wenn der Benutzer Befehle ausführt, die Sie mit dem [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) registriert haben.

## Typen

- {{WebExtAPIRef("commands.Command")}}
  - : Objekt, das einen Befehl darstellt. Dies enthält die im [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) spezifizierten Informationen für den Befehl.

## Funktionen

- {{WebExtAPIRef("commands.getAll")}}
  - : Ruft alle registrierten Befehle für diese Erweiterung ab.
- {{WebExtAPIRef("commands.reset")}}
  - : Setzt die Beschreibung und das Kürzel des angegebenen Befehls auf die im Manifest-Schlüssel angegebenen Werte zurück.
- {{WebExtAPIRef("commands.update")}}
  - : Ändert die Beschreibung oder das Kürzel für den angegebenen Befehl.

## Ereignisse

- {{WebExtAPIRef("commands.onChanged")}}
  - : Wird ausgelöst, wenn das Tastaturkürzel für einen Befehl geändert wird.
- {{WebExtAPIRef("commands.onCommand")}}
  - : Wird ausgelöst, wenn ein Befehl mit seinem zugehörigen Tastaturkürzel ausgeführt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API von Chromium.

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

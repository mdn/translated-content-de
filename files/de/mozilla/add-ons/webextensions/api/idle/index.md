---
title: idle
slug: Mozilla/Add-ons/WebExtensions/API/idle
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermitteln Sie, wann das System des Benutzers im Leerlauf, gesperrt oder aktiv ist.

Um diese API zu verwenden, benötigen Sie die "idle"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("idle.IdleState")}}
  - : Zeichenkette, die den Leerlaufzustand des Geräts beschreibt.

## Funktionen

- {{WebExtAPIRef("idle.queryState()")}}
  - : Gibt `"locked"` zurück, wenn das System gesperrt ist, `"idle"`, wenn der Benutzer für eine bestimmte Anzahl von Sekunden keine Eingaben gemacht hat, oder `"active"` andernfalls.
- {{WebExtAPIRef("idle.setDetectionInterval()")}}
  - : Legt das Intervall fest, das zur Bestimmung verwendet wird, wann das System für {{WebExtAPIRef("idle.onStateChanged")}}-Ereignisse im Leerlauf ist.

## Ereignisse

- {{WebExtAPIRef("idle.onStateChanged")}}
  - : Wird ausgelöst, wenn das System den Zustand ändert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/api/idle)-API von Chromium. Diese Dokumentation ist aus [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) im Chromium-Code abgeleitet.

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

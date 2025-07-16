---
title: idle
slug: Mozilla/Add-ons/WebExtensions/API/idle
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermitteln Sie, wann das System des Benutzers inaktiv, gesperrt oder aktiv ist.

Um diese API zu nutzen, benötigen Sie die "idle"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("idle.IdleState")}}
  - : String, der den Inaktivitätsstatus des Geräts beschreibt.

## Funktionen

- {{WebExtAPIRef("idle.queryState()")}}
  - : Gibt `"locked"` zurück, wenn das System gesperrt ist, `"idle"`, wenn der Benutzer für eine bestimmte Anzahl von Sekunden keine Eingabe gemacht hat, oder `"active"` ansonsten.
- {{WebExtAPIRef("idle.setDetectionInterval()")}}
  - : Legt das Intervall fest, das verwendet wird, um festzustellen, wann sich das System im Inaktivitätszustand für {{WebExtAPIRef("idle.onStateChanged")}}-Ereignisse befindet.

## Ereignisse

- {{WebExtAPIRef("idle.onStateChanged")}}
  - : Wird ausgelöst, wenn sich der Zustand des Systems ändert.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/api/idle)-API von Chromium. Diese Dokumentation basiert auf [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) im Chromium-Code.

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

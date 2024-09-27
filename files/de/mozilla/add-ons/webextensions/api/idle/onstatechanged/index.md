---
title: idle.onStateChanged
slug: Mozilla/Add-ons/WebExtensions/API/idle/onStateChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn das System in einen aktiven, inaktiven oder gesperrten Zustand wechselt. Der Event-Listener erhält einen String, der einen von drei Werten hat:

- "locked", wenn der Bildschirm gesperrt ist oder der Bildschirmschoner aktiviert wird
- "idle", wenn das System entsperrt ist und der Benutzer für eine festgelegte Anzahl von Sekunden keine Eingabe gemacht hat. Diese Zahl ist standardmäßig 60, kann aber mit {{WebExtAPIRef("idle.setDetectionInterval()")}} eingestellt werden.
- "active", wenn der Benutzer eine Eingabe auf einem inaktiven System macht.

## Syntax

```js-nolint
browser.idle.onStateChanged.addListener(listener)
browser.idle.onStateChanged.removeListener(listener)
browser.idle.onStateChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, `false` andernfalls.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `newState`
      - : {{WebExtAPIRef('idle.IdleState')}}. Der neue Inaktivitätszustand.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function newState(state) {
  console.log(`New state: ${state}`);
}

browser.idle.onStateChanged.addListener(newState);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/api/idle#event-onStateChanged) API. Diese Dokumentation ist abgeleitet von [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) im Chromium Code.

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

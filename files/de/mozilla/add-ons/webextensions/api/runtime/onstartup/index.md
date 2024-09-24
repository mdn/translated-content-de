---
title: runtime.onStartup
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Profil, in dem diese Erweiterung installiert ist, erstmals gestartet wird. Dieses Ereignis wird nicht ausgelöst, wenn ein privates Browsing-Profil (Inkognito-Modus) gestartet wird, selbst wenn diese Erweiterung im 'getrennten' Inkognito-Modus arbeitet.

> [!NOTE]
> Beim Einsatz einer Ereignisseite oder eines Hintergrunddienst-Arbeiters muss die Erweiterung einen Listener zu `runtime.onStartup` auf der Ereignisseite hinzufügen, damit die Ereignisseite mindestens einmal pro Browsersitzung ausgeführt wird.

## Syntax

```js-nolint
browser.runtime.onStartup.addListener(listener)
browser.runtime.onStartup.removeListener(listener)
browser.runtime.onStartup.hasListener(listener)
```

### Ereignisfunktionen

Alle Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt dem aufrufenden Ereignis einen `listener` hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf das aufrufende Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für das aufrufende Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

### Parameter

Der einzige Parameter ist `listener`, der bei allen oben genannten Funktionen verwendet wird.

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt.

## Beispiele

Öffnen Sie <https://giphy.com/explore/cat>, wenn der Browser startet:

```js
function handleStartup() {
  browser.tabs.create({
    url: "https://giphy.com/explore/cat",
  });
}

browser.runtime.onStartup.addListener(handleStartup);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onStartup) API. Diese Dokumentation wurde aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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

---
title: tabs.onAttached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onAttached
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Tab an ein Fenster angehängt wird, zum Beispiel weil es zwischen Fenstern verschoben wurde.

## Syntax

```js-nolint
browser.tabs.onAttached.addListener(listener)
browser.tabs.onAttached.removeListener(listener)
browser.tabs.onAttached.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener` Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `tabId`
      - : `integer`. ID des Tabs, der an ein neues Fenster angehängt wurde.
    - `attachInfo`
      - : `object`. ID des neuen Fensters und Index des Tabs darin. Siehe den [attachInfo](#attachinfo_2) Abschnitt für weitere Details.

## Zusätzliche Objekte

### attachInfo

- `newWindowId`
  - : `integer`. ID des neuen Fensters.
- `newPosition`
  - : `integer`. Indexposition, die der Tab im neuen Fenster hat.

## Beispiele

Beispiel, um auf Anheftungsevents zu hören und die Informationen zu protokollieren:

```js
function handleAttached(tabId, attachInfo) {
  console.log(`Tab: ${tabId} attached`);
  console.log(`New window: ${attachInfo.newWindowId}`);
  console.log(`New index: ${attachInfo.newPosition}`);
}

browser.tabs.onAttached.addListener(handleAttached);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onAttached) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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

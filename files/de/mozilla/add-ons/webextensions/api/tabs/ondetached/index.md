---
title: tabs.onDetached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onDetached
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab von einem Fenster getrennt wird, beispielsweise weil es zwischen Fenstern verschoben wird.

## Syntax

```js-nolint
browser.tabs.onDetached.addListener(listener)
browser.tabs.onDetached.removeListener(listener)
browser.tabs.onDetached.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, `false` andernfalls.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `tabId`
      - : `integer`. ID des Tabs, der getrennt wurde.
    - `detachInfo`
      - : `object`. ID des vorherigen Fensters und Index des Tabs darin. Siehe den Abschnitt [detachInfo](#detachinfo_2) für weitere Details.

## Zusätzliche Objekte

### detachInfo

- `oldWindowId`
  - : `integer`. ID des vorherigen Fensters.
- `oldPosition`
  - : `integer`. Indexposition, die der Tab im alten Fenster hatte.

## Beispiele

Lauschen Sie auf Trennungsereignisse und protokollieren Sie die Informationen:

```js
function handleDetached(tabId, detachInfo) {
  console.log(`Tab: ${tabId} moved`);
  console.log(`Old window: ${detachInfo.oldWindowId}`);
  console.log(`Old index: ${detachInfo.oldPosition}`);
}

browser.tabs.onDetached.addListener(handleDetached);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onDetached) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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

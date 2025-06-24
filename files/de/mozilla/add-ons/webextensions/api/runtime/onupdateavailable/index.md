---
title: runtime.onUpdateAvailable
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUpdateAvailable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Update für die Erweiterung verfügbar ist. Dieses Ereignis ermöglicht es einer Erweiterung, ein Update zu verzögern, zum Beispiel, weil sie sich mitten in einem Vorgang befindet, der nicht unterbrochen werden sollte.

Wenn die Erweiterung nicht auf dieses Ereignis hört, wenn ein Update verfügbar wird, wird die Erweiterung sofort neu geladen und das Update angewendet. Wenn die Erweiterung zuhört, wird das Update beim nächsten Neuladen der Erweiterung angewendet. Dies geschieht, wenn:

- der Browser neu gestartet wird
- die Erweiterung deaktiviert und wieder aktiviert wird
- die Erweiterung sich selbst explizit neu lädt, indem sie {{WebExtAPIRef('runtime.reload()')}} aufruft.

## Syntax

```js-nolint
browser.runtime.onUpdateAvailable.addListener()
browser.runtime.onUpdateAvailable.removeListener(listener)
browser.runtime.onUpdateAvailable.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `details`
      - : `object`. Enthält eine einzelne Eigenschaft, einen String namens `version`, der die Versionsnummer des Updates darstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Lauschen auf `UpdateAvailable`-Ereignisse:

```js
function handleUpdateAvailable(details) {
  console.log(details.version);
  // Proceed to upgrade the add-on
  browser.runtime.reload();
}

browser.runtime.onUpdateAvailable.addListener(handleUpdateAvailable);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onUpdateAvailable) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

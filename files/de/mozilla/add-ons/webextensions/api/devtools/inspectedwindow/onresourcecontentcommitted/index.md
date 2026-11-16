---
title: devtools.inspectedWindow.onResourceContentCommitted
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/onResourceContentCommitted
l10n:
  sourceCommit: 7036af62231b680d0ef5229bb034ce84440ba690
---

{{AddonSidebar()}}

Wird ausgelöst, wenn eine überarbeitete Version der Ressource übernommen wird. Dies geschieht beispielsweise, wenn eine Person eine bearbeitete Version der Ressource in den Entwicklerwerkzeugen speichert.

## Syntax

```js-nolint
browser.devtools.inspectedWindow.onResourceContentCommitted.addListener(listener)
browser.devtools.inspectedWindow.onResourceContentCommitted.removeListener(listener)
browser.devtools.inspectedWindow.onResourceContentCommitted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Entfernt einen Listener für dieses Ereignis. Das Argument `listener` gibt den zu entfernenden Listener an.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn der Listener registriert ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `resource`
      - : {{WebExtAPIRef('devtools.inspectedWindow.Resource')}}. Die Ressource, deren überarbeitete Version übernommen wurde.
    - `content`
      - : `string` Der neue Inhalt der Ressource.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

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

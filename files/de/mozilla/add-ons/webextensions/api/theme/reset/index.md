---
title: theme.reset()
slug: Mozilla/Add-ons/WebExtensions/API/theme/reset
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzt ein beliebiges mit der Methode {{WebExtAPIRef("theme.update()")}} angewendetes Theme zurück.

Um diese Methode zu nutzen, muss eine Erweiterung die "theme"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

Beachten Sie, dass dies das Theme immer auf das ursprüngliche Standard-Theme zurücksetzt, selbst wenn der Benutzer vorher ein anderes Theme ausgewählt hat, bevor das Theme dieser Erweiterung angewendet wurde (siehe [bug 1415267](https://bugzil.la/1415267)).

## Syntax

```js-nolint
browser.theme.reset(
  windowId     // integer
)
```

### Parameter

- `windowId` {{optional_inline}}
  - : `integer`. Die ID eines Fensters. Wenn dies angegeben ist, wird das auf dieses Fenster angewendete Theme zurückgesetzt. Wenn es weggelassen wird, wird das Theme in allen Fenstern zurückgesetzt.

## Beispiele

Dieser Code wendet ein Theme an und entfernt es dann, wenn der Benutzer auf eine Browser-Aktion klickt:

```js
browser.theme.update(themes.night);

browser.browserAction.onClicked.addListener(() => {
  browser.theme.reset();
});
```

{{WebExtExamples}}

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

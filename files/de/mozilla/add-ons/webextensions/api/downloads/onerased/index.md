---
title: downloads.onErased
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onErased
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das **`onErased()`** Event der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn ein Download aus dem Browserverlauf gelöscht wird.

Dem Listener wird die `downloadId` des betreffenden {{WebExtAPIRef('downloads.DownloadItem')}} Objekts als Parameter übergeben.

## Syntax

```js-nolint
browser.downloads.onErased.addListener(listener)
browser.downloads.onErased.removeListener(listener)
browser.downloads.onErased.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Event einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Event. Das `listener` Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob ein gegebener `listener` für dieses Event registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Event eintritt. Dieser Funktion wird folgendes Argument übergeben:

    - `downloadId`
      - : Ein `integer`, der die `id` des gelöschten {{WebExtAPIRef('downloads.DownloadItem')}} darstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Listener für `onErased` Events hinzu und löschen Sie dann den zuletzt heruntergeladenen Eintrag:

```js
function handleErased(item) {
  console.log(`Erased: ${item}`);
}

browser.downloads.onErased.addListener(handleErased);

let erasing = browser.downloads.erase({
  limit: 1,
  orderBy: ["-startTime"],
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onErased) API von Chromium.

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

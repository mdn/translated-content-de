---
title: downloads.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das **`onChanged()`**-Ereignis der {{WebExtAPIRef("downloads")}}-API wird ausgelöst, wenn sich eine der Eigenschaften eines {{WebExtAPIRef('downloads.DownloadItem')}} ändert (außer `bytesReceived`).

Dem Listener wird ein `downloadDelta` als Parameter übergeben — ein Objekt, das die `downloadId` des betreffenden {{WebExtAPIRef('downloads.DownloadItem')}}-Objekts sowie den Status aller geänderten Eigenschaften enthält.

## Syntax

```js-nolint
browser.downloads.onChanged.addListener(listener)
browser.downloads.onChanged.removeListener(listener)
browser.downloads.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein bestimmter `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Dieser Funktion wird folgendes Argument übergeben:

    - `downloadDelta`
      - : Ein `object`, das das geänderte {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt darstellt und den Status aller darin geänderten Eigenschaften enthält. Weitere Details finden Sie im Abschnitt [downloadDelta](#downloaddelta_2).

## Zusätzliche Objekte

### downloadDelta

Das `downloadDelta`-Objekt hat die folgenden verfügbaren Eigenschaften:

- `id`
  - : Ein `integer`, der die `id` des geänderten {{WebExtAPIRef('downloads.DownloadItem')}} darstellt.
- `url` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung der `url` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `filename` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `filename` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `danger` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung der `danger`-Eigenschaft eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `mime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `mime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `startTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung der `startTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `endTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung der `endTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `state` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `state` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `canResume` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung des `canResume`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `paused` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung des `paused`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `error` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `error`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `totalBytes` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DoubleDelta')}}-Objekt, das eine Änderung der `totalBytes` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `fileSize` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DoubleDelta')}}-Objekt, das eine Änderung der `fileSize` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `exists` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung des `exists`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie eine Nachricht, wenn Downloads abgeschlossen sind:

```js
function handleChanged(delta) {
  if (delta.state && delta.state.current === "complete") {
    console.log(`Download ${delta.id} has completed.`);
  }
}

browser.downloads.onChanged.addListener(handleChanged);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onChanged)-API von Chromium.

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

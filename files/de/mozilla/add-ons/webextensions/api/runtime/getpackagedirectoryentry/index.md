---
title: runtime.getPackageDirectoryEntry()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getPackageDirectoryEntry
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erhält ein `DirectoryEntry`-Objekt, das das Paketverzeichnis darstellt.

Dies ist eine asynchrone Funktion, die entweder einen Rückruf nimmt oder ein Promise zurückgibt.

> [!NOTE]
> Die auf Versprechen basierende API wird in Manifest V3 und später unterstützt.

## Syntax

```js-nolint
browser.runtime.getPackageDirectoryEntry(
  callback              // optional callback function
)
```

### Parameter

- `callback` {{optional_inline}}
  - : `function`. Wenn angegeben, wird die Funktion mit einem `DirectoryEntry`-Objekt aufgerufen. Wenn nicht vorhanden, gibt die Funktion stattdessen ein Promise zurück.

### Rückgabewert

`undefined` (nichts), wenn ein `callback` angegeben ist. Andernfalls wird ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgegeben, das mit einem `DirectoryEntry`-Objekt erfüllt wird, das das Paketverzeichnis darstellt.

## Beispiele

```js
browser.runtime.getPackageDirectoryEntry((directoryEntry) => {
  console.log(directoryEntry);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getPackageDirectoryEntry) API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

---
title: downloads.setShelfEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/setShelfEnabled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`setShelfEnabled()`** der {{WebExtAPIRef("downloads")}} API aktiviert oder deaktiviert das graue Regal am unteren Rand jedes Fensters, das mit dem aktuellen Browser-Profil verknüpft ist. Das Regal bleibt deaktiviert, solange es von mindestens einer Erweiterung deaktiviert wurde.

Wenn Sie versuchen, das Regal zu aktivieren, während mindestens eine andere Erweiterung es bereits deaktiviert hat, schlägt der Aufruf fehl und {{WebExtAPIRef("runtime.lastError")}} wird mit einer entsprechenden Fehlermeldung gesetzt.

> [!NOTE]
> Um diese Funktion in Ihrer Erweiterung zu verwenden, müssen Sie um die `"downloads.shelf"` [Manifest-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie um die `"downloads"` Berechtigung bitten.

## Syntax

```js-nolint
chrome.downloads.setShelfEnabled(enabled);
```

Diese API ist auch als `browser.downloads.setShelfEnabled()` verfügbar.

### Parameter

- `enabled`
  - : Ein `boolean`, der den Zustand darstellt, den Sie für `setShelfEnabled()` festlegen möchten — `true` für aktivieren und `false` für deaktivieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-setShelfEnabled) API.

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

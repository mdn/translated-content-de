---
title: cookies.OnChangedCause
slug: Mozilla/Add-ons/WebExtensions/API/cookies/OnChangedCause
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ `OnChangedCause` der {{WebExtAPIRef("cookies")}} API repräsentiert den Grund, aus dem ein Cookie geändert wurde.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `evicted`
  - : Ein Cookie wurde automatisch durch die Speicherbereinigung entfernt.
- `expired`
  - : Ein Cookie wurde automatisch aufgrund des Ablaufs entfernt.
- `explicit`
  - : Ein Cookie wurde durch einen expliziten Aufruf von {{WebExtAPIRef("cookies.remove()")}} eingefügt oder entfernt.
- `expired_overwrite`
  - : Ein Cookie wurde durch ein Cookie mit einem bereits abgelaufenen Ablaufdatum überschrieben.
- `overwrite`
  - : Ein Aufruf von {{WebExtAPIRef("cookies.set()")}} hat dieses Cookie mit einem anderen überschrieben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Sie können auf das {{WebExtAPIRef("cookies.onChanged")}}-Ereignis hören, um benachrichtigt zu werden, wenn Cookies geändert werden. Dem Listener wird ein `changeInfo`-Objekt übergeben, das eine `cause`-Eigenschaft enthält, deren Wert die `OnChangeCause`-Zeichenkette ist:

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(
    `Cookie changed: \n` +
      ` * Cookie: ${JSON.stringify(changeInfo.cookie)}\n` +
      ` * Cause: ${changeInfo.cause}\n` +
      ` * Removed: ${changeInfo.removed}`,
  );
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-OnChangedCause) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
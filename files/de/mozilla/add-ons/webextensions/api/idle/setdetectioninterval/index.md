---
title: idle.setDetectionInterval()
slug: Mozilla/Add-ons/WebExtensions/API/idle/setDetectionInterval
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Legt das Intervall in Sekunden fest, das verwendet wird, um zu bestimmen, wann das System für {{WebExtAPIRef("idle.onStateChanged")}}-Ereignisse in einem Leerlaufzustand ist. Das Standardintervall beträgt 60 Sekunden.

Das Erkennungsintervall ist spezifisch für die Erweiterung, die die Methode aufruft. Eine Änderung des Intervalls in einer Erweiterung wirkt sich nicht auf das Erkennungsintervall in einer anderen Erweiterung aus.

## Syntax

```js-nolint
browser.idle.setDetectionInterval(
  intervalInSeconds // integer
)
```

### Parameter

- `intervalInSeconds`
  - : `integer`. Schwellenwert in Sekunden, der verwendet wird, um zu bestimmen, wann das System in einem Leerlaufzustand ist. Der Mindestwert, den Sie hier angeben können, ist 15.

## Beispiele

```js
browser.idle.setDetectionInterval(15);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/api/idle#method-setDetectionInterval) API. Diese Dokumentation ist abgeleitet von [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) im Chromium-Code.

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

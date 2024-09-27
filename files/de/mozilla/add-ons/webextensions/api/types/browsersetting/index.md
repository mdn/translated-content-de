---
title: BrowserSetting
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `BrowserSetting` ist ein Objekt, das eine Browsereinstellung darstellt.

Es bietet Methoden, um den zugrunde liegenden Wert der Einstellung zu setzen und abzurufen, jede von Ihnen vorgenommene Änderung zu löschen und auf Änderungen ihres Wertes zu reagieren.

Beachten Sie, dass dieses Objekt zwar auf dem [ChromeSetting](https://developer.chrome.com/docs/extensions/reference/api/types#type-ChromeSetting)-Typ basiert, dieses Objekt jedoch nicht zwischen dem Setzen des Wertes in normalen und in privaten Browsing-Fenstern unterscheidet. Das bedeutet, dass alle Teile der API im Zusammenhang mit dem privaten Browsen (wie z. B. die `scope`-Option von `ChromeSetting.set()`) nicht implementiert sind.

## Methoden

- {{WebExtAPIRef("types.BrowserSetting.get()")}}
  - : Holen Sie den aktuellen Wert der Einstellung und eine Aufzählung, die darstellt, wie die Einstellung momentan gesteuert wird.
- {{WebExtAPIRef("types.BrowserSetting.set()")}}
  - : Setzen Sie die Einstellung auf einen neuen Wert.
- {{WebExtAPIRef("types.BrowserSetting.clear()")}}
  - : Löschen Sie jede von dieser Erweiterung vorgenommene Änderung der Einstellung.

## Ereignisse

- {{WebExtAPIRef("types.BrowserSetting.onChange")}}
  - : Wird ausgelöst, wenn sich der Wert der Einstellung ändert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API von Chromium.

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

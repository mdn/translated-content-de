---
title: BrowserSetting
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein `BrowserSetting` ist ein Objekt, das eine Browsereinstellung darstellt.

Es bietet Methoden, um den zugrunde liegenden Wert der Einstellung festzulegen und abzurufen, um Änderungen, die Sie daran vorgenommen haben, zu löschen und um auf Änderungen des Wertes zu hören.

Beachten Sie, dass, obwohl dieses Objekt auf dem [ChromeSetting](https://developer.chrome.com/docs/extensions/reference/api/types#type-ChromeSetting)-Typ basiert, dieses Objekt nicht zwischen dem Setzen des Wertes in normalen Browserfenstern und in privaten Browserfenstern unterscheidet. Das bedeutet, dass alle Teile der API, die sich auf privates Browsen beziehen (wie die `scope`-Option für `ChromeSetting.set()`), nicht implementiert sind.

## Methoden

- {{WebExtAPIRef("types.BrowserSetting.get()")}}
  - : Erhalten Sie den aktuellen Wert der Einstellung und eine Aufzählung, wie die Einstellung derzeit gesteuert wird.
- {{WebExtAPIRef("types.BrowserSetting.set()")}}
  - : Setzen Sie die Einstellung auf einen neuen Wert.
- {{WebExtAPIRef("types.BrowserSetting.clear()")}}
  - : Löschen Sie jede Änderung, die durch diese Erweiterung an der Einstellung vorgenommen wurde.

## Ereignisse

- {{WebExtAPIRef("types.BrowserSetting.onChange")}}
  - : Wird ausgelöst, wenn sich der Wert der Einstellung ändert.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.

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

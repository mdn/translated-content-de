---
title: runtime.PlatformOs
slug: Mozilla/Add-ons/WebExtensions/API/runtime/PlatformOs
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das Betriebssystem, auf dem der Browser läuft.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `"mac"`
  - : Das zugrunde liegende Betriebssystem ist macOS.
- `"ios"`
  - : Das zugrunde liegende Betriebssystem ist iOS/iPadOS.
- `"win"`
  - : Das zugrunde liegende Betriebssystem ist Windows.
- `"android"`
  - : Das zugrunde liegende Betriebssystem ist Android.
- `"cros"`
  - : Das zugrunde liegende Betriebssystem ist ChromeOS.
- `"linux"`
  - : Das zugrunde liegende Betriebssystem ist Linux.
- `"openbsd"`
  - : Das zugrunde liegende Betriebssystem ist Open/FreeBSD.
- `"fuchsia"`
  - : Das zugrunde liegende Betriebssystem ist Fuchsia.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-PlatformOs) API von Chromium. Diese Dokumentation wird aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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

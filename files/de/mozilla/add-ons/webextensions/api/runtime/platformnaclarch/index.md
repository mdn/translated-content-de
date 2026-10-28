---
title: runtime.PlatformNaclArch
slug: Mozilla/Add-ons/WebExtensions/API/runtime/PlatformNaclArch
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

> [!NOTE]
> **Dieser Typ ist veraltet**. Verwenden Sie stattdessen {{WebExtAPIRef("runtime.PlatformArch")}}. `PlatformArch` ist auch in {{WebExtAPIRef("runtime.PlatformInfo")}} verfügbar, das Sie über {{WebExtAPIRef("runtime.getPlatformInfo()")}} abrufen können.

Der Aufzählungswert, der die CPU-Befehlssatzarchitektur von Google Native Client angibt, die der Browser verwendet. Diese Aufzählung ist seit der Entfernung von Google Native Client aus Google Chrome veraltet. Chromium beabsichtigt, diese Aufzählung im Jahr 2026 zu entfernen.

## Typ

- `ARM`
  - : Das String-Literal `"arm"`. Steht für alle Versionen der ARM-Befehlssatzarchitektur, einschließlich aller 32-Bit- und 64-Bit-Varianten. Entspricht [`PlatformArch.arm`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#arm) (32-Bit-Variante) und [`PlatformArch.arm64`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#arm64) (64-Bit-Variante), zusammengefasst in einem Wert.
- `X86_32`
  - : Das String-Literal `"x86-32"`. Steht für die 32-Bit-Variante der x86-Architektur. Entspricht [`PlatformArch.x86_32`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#x86-32).
- `X86_64`
  - : Das String-Literal `"x86-64"`. Steht für die 64-Bit-Variante der x86-Architektur. Entspricht [`PlatformArch.X86_64`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#x86-64).
- `MIPS`
  - : Das String-Literal `"mips"`. Steht für die 32-Bit-Variante der MIPS-Befehlssatzarchitektur, die von offiziellen Versionen nie unterstützt wurde. Entspricht [`PlatformArch.mips`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#mips).
- `MIPS64`
  - : Das String-Literal `"mips64"`. Steht für die 64-Bit-Variante der MIPS-Befehlssatzarchitektur, die von offiziellen Versionen nie unterstützt wurde. Entspricht [`PlatformArch.mips64`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#mips64).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-PlatformNaclArch)-API. Diese Dokumentation wurde aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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

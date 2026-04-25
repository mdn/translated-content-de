---
title: runtime.PlatformNaclArch
slug: Mozilla/Add-ons/WebExtensions/API/runtime/PlatformNaclArch
l10n:
  sourceCommit: d093679f1b6c69e417e761d90eca65681e5f95f4
---

> [!NOTE]
> **Dieser Typ ist veraltet** zugunsten von {{WebExtAPIRef("runtime.PlatformArch")}}. `PlatformArch` ist ebenfalls verfügbar in {{WebExtAPIRef("runtime.PlatformInfo")}}, die Sie durch die Verwendung von {{WebExtAPIRef("runtime.getPlatformInfo()")}} erhalten.

Der aufgezählte Wert, der das CPU-Befehlssatzarchitektur des Google Native Client repräsentiert, das vom Browser verwendet wird. Dieses Enum ist veraltet, nach der Entfernung von Google Native Client aus Google Chrome. Ab 2026 plant Chromium, dieses Enum zu entfernen.

## Typ

- `ARM`
  - : Der Zeichenfolgenliteral `"arm"`. Repräsentiert alle Versionen der ARM ISA, einschließlich aller 32-Bit- und 64-Bit-Varianten. Entspricht [`PlatformArch.arm`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#arm) (32-Bit-Variante) und `PlatformArch.arm64` kombiniert in einem Wert.
- `X86_32`
  - : Der Zeichenfolgenliteral `"x86-32"`. Repräsentiert die 32-Bit-Variante der x86-Architektur. Entspricht [`PlatformArch.x86_32`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#x86-32).
- `X86_64`
  - : Der Zeichenfolgenliteral `"x86-64"`. Repräsentiert die 64-Bit-Variante der x86-Architektur. Entspricht [`PlatformArch.X86_64`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch#x86-64).
- `MIPS`
  - : Der Zeichenfolgenliteral `"mips"`. Repräsentiert die 32-Bit-Variante der MIPS ISA, die von offiziellen Releases nie unterstützt wurde. Entspricht `PlatformArch.mips`.
- `MIPS64`
  - : Der Zeichenfolgenliteral `"mips64"`. Repräsentiert die 64-Bit-Variante der MIPS ISA, die von offiziellen Releases nie unterstützt wurde. Entspricht `PlatformArch.mips64`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-PlatformNaclArch) API von Chromium. Diese Dokumentation basiert auf [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

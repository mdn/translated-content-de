---
title: runtime.PlatformArch
slug: Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch
l10n:
  sourceCommit: c6a89971a820ca6b76479a7ffc1b32c09aae2415
---

Die Prozessorarchitektur des Rechners.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `"arm"`
  - : Die Plattform basiert auf der 32-Bit-ARM-Architektur. Safari gibt diesen Wert auch für die 64-Bit-Architektur zurück.
- `"arm64"`
  - : Die Plattform basiert auf der 64-Bit-ARM-Architektur.
- `"mips"`
  - : Die Plattform basiert auf der 32-Bit-MIPS-Befehlssatzarchitektur (ISA).
- `"mips64"`
  - : Die Plattform basiert auf der 64-Bit-MIPS-Befehlssatzarchitektur (ISA).
- `"riscv64"`
  - : Die Plattform basiert auf der 64-Bit-Implementierung der offenen RISC-V-Befehlssatzarchitektur (ISA).
- `"x86-32"`
  - : Die Plattform basiert auf der 32-Bit-x86-Architektur.
- `"x86-64"`
  - : Die Plattform basiert auf der 64-Bit-x86-Architektur.

> [!NOTE]
> Inoffizielle Builds für andere Plattformen können weitere Werte verwenden. Soweit bekannt, sind diese Werte in der Übersicht zur Browser-Kompatibilität dokumentiert.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-PlatformArch)-API von Chromium. Diese Dokumentation wurde aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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

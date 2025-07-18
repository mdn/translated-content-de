---
title: windows.WindowState
slug: Mozilla/Add-ons/WebExtensions/API/windows/WindowState
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Zustand dieses Browserfensters.

## Typ

Werte dieses Typs sind `strings`. Mögliche Werte sind:

- `"normal"`
  - : Das Fenster hat die Standardgröße oder eine vom Benutzer gewählte Größe.
- `"minimized"`
  - : Das Fenster ist nur als Symbol in der Taskleiste sichtbar.
- `"maximized"`
  - : Das Fenster füllt den Bildschirm aus, auf dem es angezeigt wird, und schließt dabei keine vom Betriebssystem reservierten Bildschirmbereiche ein.
- `"fullscreen"`
  - : Das Fenster läuft als Anwendung im Vollbildmodus oder ein Inhalt in einem Tab verwendet die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- `"docked"`
  - : Ein angedocktes Fenster nimmt eine feste Position relativ zu anderen Fenstern ein, die von derselben Anwendung verwaltet werden.

Kompatibilität mit macOS: Ab macOS 10.10 hat sich das Standardverhalten beim Maximieren von Fenstern geändert, sodass Anwendungen im Vollbildmodus anstelle von "gezoomten" Fenstern ausgeführt werden. `fullscreen` bezieht sich sowohl auf den Browser, der als Vollbildanwendung ausgeführt wird, als auch auf den Fall, wenn Inhalte in einem Tab die Fullscreen-API verwenden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#type-WindowState). Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

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

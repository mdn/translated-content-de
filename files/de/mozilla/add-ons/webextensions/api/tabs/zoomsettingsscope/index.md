---
title: tabs.ZoomSettingsScope
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsScope
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Definiert, ob Zoomänderungen für den Ursprung der Seite bestehen bleiben oder nur in diesem Tab wirksam sind. Dies ist standardmäßig `per-origin`, wenn {{WebExtAPIRef("tabs.zoomSettingsMode")}} auf "automatic" steht, und immer `per-tab` in anderen Fällen.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "per-origin"
  - : Alle anderen Tabs mit demselben Ursprung wie dieser Tab werden von den Zoomänderungen betroffen sein. Dieser Umfang ist nur verfügbar, wenn {{WebExtAPIRef("tabs.zoomSettingsMode")}} auf "automatic" steht.
- "per-tab"
  - : Zoomänderungen wirken sich nur in diesem Tab aus, und Zoomänderungen in anderen Tabs beeinflussen das Zoomen dieses Tabs nicht. Außerdem:
    - in Firefox bleibt der Zoomlevel über Seitenladungen und Navigation innerhalb des Tabs bestehen.
    - in Chrome-basierten Browsern werden Zoomänderungen bei der Navigation zurückgesetzt; eine Navigation in einem Tab lädt Seiten immer mit ihren per-origin Zoomfaktoren.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-ZoomSettingsScope) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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

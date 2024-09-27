---
title: webNavigation.TransitionQualifier
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionQualifier
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Zusätzliche Informationen über einen Übergang. Beachten Sie, dass viele Werte hier derzeit in Firefox nicht unterstützt werden: weitere Details finden Sie in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "client_redirect"
  - : Umleitung(en), die durch JavaScript im Browserfenster oder ein "refresh"-Pragma im [meta](/de/docs/Web/HTML/Element/meta)-Tag der Seite verursacht werden.
- "server_redirect"
  - : Umleitung(en), die durch einen [3XX HTTP-Statuscode](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection) vom Server verursacht werden.
- "forward_back"
  - : Der Benutzer hat die Navigation durch die Vorwärts- oder Rückwärtstaste ausgelöst.
- "from_address_bar"
  - : Der Benutzer hat die Navigation aus der Adressleiste ausgelöst.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#type-TransitionQualifier) API. Diese Dokumentation leitet sich von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code ab.

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

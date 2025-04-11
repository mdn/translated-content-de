---
title: webNavigation.TransitionQualifier
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionQualifier
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

Zusätzliche Informationen über einen Übergang. Beachten Sie, dass viele Werte hier derzeit in Firefox nicht unterstützt werden: Einzelheiten finden Sie in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- "client_redirect"
  - : Weiterleitung(en) verursacht durch JavaScript, das auf der Seite ausgeführt wird, oder ein "refresh"-Pragma im [meta](/de/docs/Web/HTML/Reference/Elements/meta)-Tag der Seite.
- "server_redirect"
  - : Weiterleitung(en) verursacht durch einen [3XX-HTTP-Statuscode](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection), der vom Server gesendet wird.
- "forward_back"
  - : Der Benutzer hat die Navigation durch Drücken der Vorwärts- oder Zurück-Schaltfläche ausgelöst.
- "from_address_bar"
  - : Der Benutzer hat die Navigation über die Adressleiste ausgelöst.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#type-TransitionQualifier) API von Chromium. Diese Dokumentation ist von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.

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

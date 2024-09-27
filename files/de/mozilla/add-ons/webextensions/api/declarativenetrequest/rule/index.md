---
title: declarativeNetRequest.Rule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Rule
l10n:
  sourceCommit: 3a4950f53f1de09c0ed01438f0620ae972d4161f
---

{{AddonSidebar}}

Das Objekt, das die auszuführenden Aktionen für übereinstimmende Anfragen beschreibt. Diese können in den statischen Regelressourcen angegeben werden, die durch den [manifest.json `declarative_net_request` Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) verknüpft sind, oder dynamischer durch die Methoden {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} oder {{WebExtAPIRef("declarativeNetRequest.updateSessionRules")}}.

Weitere Informationen zu Regeln finden Sie unter [Regeln](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rules) auf der Übersichtsseite der API.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `action`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}. Die auszuführende Aktion, wenn diese Regel übereinstimmt.
- `condition`
  - : {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}. Die Bedingung, unter der diese Regel ausgelöst wird.
- `id`
  - : `number`. Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Obligatorisch und sollte >= 1 sein.
- `priority` {{optional_inline}}
  - : `number`. Regelpriorität. Standardwert ist 1. Wenn angegeben, sollte sie >= 1 sein. Siehe [Übereinstimmungspräzedenzfälle](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedents) für Details darüber, wie die Priorität beeinflusst, welche Regeln angewendet werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

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

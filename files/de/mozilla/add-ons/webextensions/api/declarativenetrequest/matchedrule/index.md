---
title: declarativeNetRequest.MatchedRule
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MatchedRule
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein Objekt, das die übereinstimmende Regel beschreibt. Dieser Typ kann von den Methoden {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} oder {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome")}} zurückgegeben oder durch das Ereignis {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}} beobachtet werden.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `extensionId`
  - : Ein `string`. Die ID der Erweiterung, falls diese Regel zu einer anderen Erweiterung gehört. Diese Eigenschaft ist nur verfügbar, wenn sie mit {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome")}} verwendet wird, mit der Option `includeOtherExtensions` auf `true` gesetzt.
- `ruleId`
  - : Eine `number`. Die ID der übereinstimmenden Regel.
- `rulesetId`
  - : Ein `string`. Die ID des [Regelsatzes](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rulesets), zu dem diese Regel gehört. Der zurückgegebene Wert ist:
    - Für eine Regel, die aus dem Satz statischer Regeln stammt, der in dem "id"-Schlüssel des Regelsatzes in dem [`declarative_net_request.rule_resources` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) angegebene Wert.
    - Für eine Regel, die aus dem Satz dynamischer Regeln stammt, der in {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}} definierte Wert, d. h., `"_dynamic"`.
    - Für eine Regel, die aus dem Satz von Sitzung-Regeln stammt, der in {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}} definierte Wert, d. h., `"_session"`.

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

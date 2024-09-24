---
title: declarativeNetRequest.RuleAction
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Details der Aktion, die ausgeführt werden soll, wenn eine Regel übereinstimmt, als die `action` Eigenschaft einer {{WebExtAPIRef("declarativeNetRequest.Rule")}}.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `redirect` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.Redirect")}}. Beschreibt, wie die Umleitung durchgeführt werden soll. Nur gültig für Umleitungsregeln.
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. Die Anforderungsheader, die für die Anfrage geändert werden sollen. Nur gültig, wenn `type` `"modifyHeaders"` ist.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}. Die Antwortheader, die für die Anfrage geändert werden sollen. Nur gültig, wenn `type` `"modifyHeaders"` ist.
- `type`
  - : Ein `string`. Der Typ der auszuführenden Aktion. Mögliche Werte sind `"block"`, `"redirect"`, `"allow"`, `"upgradeScheme"`, `"modifyHeaders"` und `"allowAllRequests"`. Die Verwendung der Aktionen `"redirect"` und `"modifyHeaders"` erfordert [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Anfrage und den Anforderungsinitiator. Auch die Aktionen "block" und "upgradeScheme" erfordern Host-Berechtigungen, es sei denn, die Berechtigung "declarativeNetRequest" ist angegeben. Ohne diese Berechtigungen werden übereinstimmende Regeln ignoriert. Weitere Informationen finden Sie unter [Berechtigungen bei declarativeNetRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#permissions). Weitere Details über die Auswirkungen von Regelaktionen finden Sie unter [Übereinstimmungspräzedenzfälle](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedents).

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

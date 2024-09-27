---
title: declarativeNetRequest.ModifyHeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Der Anfrage- oder Antwortheader, der für eine Anfrage modifiziert werden soll, angegeben im Array `rule.action.requestHeaders` oder `rule.action.responseHeaders` für Regeln, deren {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}`.type` "modifyHeaders" ist.

Jedes Objekt beschreibt eine Header-Modifikation. Um mehrere Header zu modifizieren, können mehrere Objekte in diesen Arrays oder in mehreren Regeln angegeben werden.

Übereinstimmende `modifyHeaders`-Regeln werden in der im Abschnitt [Matching precedents](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedents) beschriebenen Reihenfolge angewendet. Innerhalb jeder Erweiterung werden alle `modifyHeaders`-Regeln mit einer Priorität, die niedriger oder gleich den übereinstimmenden `allow`- oder `allowAllRequests`-Regeln ist, ignoriert.

Falls mehrere `modifyHeaders`-Regeln denselben Header spezifizieren, wird die resultierende Modifikation des Headers basierend auf der Priorität jeder Regel und den spezifizierten Operationen bestimmt:

- Wenn eine Regel zu einem Header hinzugefügt wurde, können Regeln mit niedrigerer Priorität nur zu diesem Header hinzufügen. `set`- und `remove`-Operationen sind nicht erlaubt.
- Wenn eine Regel einen Header gesetzt hat, können Regeln mit niedrigerer Priorität den Header nicht modifizieren, außer für `append`-Regeln derselben Erweiterung.
- Wenn eine Regel einen Header entfernt hat, können Regeln mit niedrigerer Priorität den Header nicht modifizieren.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers, der modifiziert werden soll.
- `operation`
  - : Ein `string`. Die auszuführende Operation an einem Header. Mögliche Werte sind `"append"`, `"set"` und `"remove"`.
- `value` {{optional_inline}}
  - : Ein `string`. Der neue Wert für den Header. Muss für `append`- und `set`-Operationen angegeben werden. Nicht erlaubt für die "remove"-Operation.

## Header-Beschränkungen

In Chrome wird `"append"` für die folgenden Anfrage-Header unterstützt:

- `Accept`
- `Accept-Encoding`
- `Accept-Language`
- `Access-Control-Request-Headers`
- `Cache-Control`
- `Connection`
- `Content-Language`
- `Cookie`
- `Forwarded`
- `If-Match`
- `If-None-Match`
- `Keep-Alive`
- `Range`
- `Te`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`
- `Want-Digest`
- `X-Forwarded-For`

In Firefox benötigt die Erweiterung Host-Berechtigungen für den neuen Wert des `Host`-Headers.

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

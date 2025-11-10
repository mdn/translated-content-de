---
title: declarativeNetRequest.ModifyHeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Anforderungs- oder Antwortheader, der für eine Anforderung geändert werden soll, wird im `rule.action.requestHeaders`-Array oder `rule.action.responseHeaders`-Array für Regeln deklariert, deren [`rule.action.type`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction#type_2) "modifyHeaders" ist.

Jedes Objekt beschreibt eine Header-Änderung. Um mehrere Header zu ändern, können mehrere Objekte in diesen Arrays oder über mehrere Regeln hinweg angegeben werden.

Passende `modifyHeaders`-Regeln werden in der Reihenfolge angewendet, die unter [Matching precedence](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence) beschrieben ist. Innerhalb einer Erweiterung werden alle `modifyHeaders`-Regeln mit einer Priorität, die niedriger oder gleich den passenden `allow`- oder `allowAllRequests`-Regeln ist, ignoriert.

Wenn mehrere `modifyHeaders`-Regeln denselben Header angeben, wird die resultierende Änderung des Headers basierend auf der Priorität jeder Regel und den angegebenen Operationen bestimmt:

- Wurde ein Regelwert an einen Header angehängt, können Regelwerte mit niedrigerer Priorität nur an diesen Header anhängen. `set`- und `remove`-Operationen sind nicht erlaubt.
- Wurde ein Header von einer Regel gesetzt, können Regelwerte mit niedrigerer Priorität den Header nicht ändern, ausgenommen `append`-Regeln aus derselben Erweiterung.
- Wenn ein Header von einer Regel entfernt wurde, können Regelwerte mit niedrigerer Priorität den Header nicht ändern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers, der geändert werden soll.
- `operation`
  - : Ein `string`. Die Operation, die an einem Header durchgeführt werden soll. Mögliche Werte sind `"append"`, `"set"` und `"remove"`.
- `value` {{optional_inline}}
  - : Ein `string`. Der neue Wert für den Header. Muss für Anfüge- und Setzoperationen angegeben werden. Nicht erlaubt für die "remove"-Operation.

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

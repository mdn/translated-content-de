---
title: declarativeNetRequest.ModifyHeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ModifyHeaderInfo
l10n:
  sourceCommit: 0a56c27c85a54c0f86eb3290e671c0f5ad65296b
---

Der Anfrage- oder Antwort-Header, der für eine Anfrage geändert werden soll. Er wird im Array `rule.action.requestHeaders` beziehungsweise `rule.action.responseHeaders` für Regeln angegeben, deren [`rule.action.type`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleAction#type_2) den Wert "modifyHeaders" hat.

Jedes Objekt beschreibt die Änderung eines Headers. Um mehrere Header zu ändern, können in diesen Arrays oder über mehrere Regeln hinweg mehrere Objekte angegeben werden.

Passende `modifyHeaders`-Regeln werden in der unter [Rangfolge passender Regeln](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#matching_precedence) beschriebenen Reihenfolge angewendet.
Innerhalb einer Erweiterung werden alle `modifyHeaders`-Regeln ignoriert, deren Priorität niedriger oder gleich der Priorität passender `allow`- oder `allowAllRequests`-Regeln ist.

Wenn mehrere `modifyHeaders`-Regeln denselben Header angeben, hängt die resultierende Änderung von der Priorität der einzelnen Regeln und den angegebenen Operationen ab:

- Wenn eine Regel einem Header einen Wert angehängt hat, dürfen Regeln mit niedrigerer Priorität diesem Header nur weitere Werte anhängen. Die Operationen `set` und `remove` sind nicht zulässig.
- Wenn eine Regel einen Header gesetzt hat, dürfen Regeln mit niedrigerer Priorität den Header nicht ändern. Ausgenommen sind `append`-Regeln derselben Erweiterung.
- Wenn eine Regel einen Header entfernt hat, dürfen Regeln mit niedrigerer Priorität den Header nicht ändern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers, der geändert werden soll.
- `operation`
  - : Ein `string`. Die Operation, die für einen Header ausgeführt werden soll. Mögliche Werte sind `"append"`, `"set"` und `"remove"`.
- `value` {{optional_inline}}
  - : Ein `string`. Der neue Wert für den Header. Er muss für die Operationen `"append"` und `"set"` angegeben werden. Für die Operation `"remove"` ist er nicht zulässig.

## Einschränkungen für Header

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
- `User-Agent`
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

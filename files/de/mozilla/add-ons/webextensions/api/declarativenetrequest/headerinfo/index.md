---
title: declarativeNetRequest.HeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/HeaderInfo
l10n:
  sourceCommit: 1b8805ce680f1fbb9dfbade6a64d4671cd04da80
---

{{AddonSidebar}}

Der Antwort-Header, der für die Anfrage übereinstimmen soll, angegeben im Array [`rule.condition.excludedResponseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#excludedresponseheaders) oder im Array [`rule.condition.responseHeaders`](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#responseheaders). Wenn angegeben, muss das Array nicht leer sein.

Wenn im Bedingungsfeld `responseHeaders` verwendet, stimmt die Regel überein, wenn die Anfrage dieser Antwort-Header-Bedingung entspricht. Wenn im Bedingungsfeld `excludedResponseHeaders` verwendet, stimmt die Regel nicht überein, wenn die Anfrage dieser Antwort-Header-Bedingung entspricht.

Jedes Objekt beschreibt einen Header, den es zu vergleichen oder auszuschließen gilt. Um mehrere Header zu prüfen, können mehrere Objekte in diesen Arrays oder über mehrere Regeln hinweg angegeben werden.

> [!NOTE]
> Das Abgleichen nach Headern ist eine relativ neue Funktion. Stellen Sie sicher, dass Sie die Verfügbarkeit erkennen, bevor Sie sich darauf verlassen. Während einige Browser die gesamte Regel ignorieren, wenn eine unbekannte Bedingung vorhanden ist, wendete Chrome von Version 121 bis 127 die gesamte Regel an, während die Bedingung `responseHeaders` ignoriert wurde. Dies könnte dazu führen, dass mehr Anfragen als beabsichtigt übereinstimmen, siehe [Chromium-Issue 347186592](https://crbug.com/347186592).

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers. Diese Bedingung stimmt nur mit dem Namen überein, wenn weder `values` noch `excludedValues` angegeben sind.
- `values` {{optional_inline}}
  - : Ein Array von `string`. Wenn angegeben, stimmt diese Bedingung überein, wenn der Wert des Headers mindestens mit einem Muster in dieser Liste übereinstimmt. Dies unterstützt die Groß-/Kleinschreibung-ignorierende Header-Wert-Abgleich sowie die folgenden Konstrukte:
    - `'*'` : Entspricht einer beliebigen Anzahl von Zeichen.
    - `'?'` : Entspricht null oder einem Zeichen.
    - `'*'` und `'?'` können mit einem Backslash maskiert werden, z. B. `'\*'` und `'\?'`.
- `excludedValues` {{optional_inline}}
  - : Ein Array von `string`. Wenn angegeben, stimmt diese Bedingung nicht überein, wenn der Header existiert, aber sein Wert mindestens ein Element in dieser Liste enthält. Es verwendet die gleiche Glob-Muster-Syntax wie `values`. Wenn sowohl `values` als auch `excludedValues` übereinstimmen, hat `excludedValues` Vorrang.

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

---
title: declarativeNetRequest.HeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/HeaderInfo
l10n:
  sourceCommit: a0835f752a97d1c4d738639f562db9d8e7551a1e
---

{{AddonSidebar}}

Der Antwort-Header, der für die Anfrage abgeglichen werden soll, deklariert im {{WebExtAPIRef("declarativeNetRequest.RuleCondition", "rule.condition")}}`.excludedResponseHeaders` Array oder {{WebExtAPIRef("declarativeNetRequest.RuleCondition", "rule.condition")}}`.responseHeaders` Array. Falls angegeben, muss das Array nicht leer sein.

Bei Verwendung in der Bedingung `responseHeaders` wird die Regel angewendet, wenn die Anfrage dieser Header-Bedingung entspricht. Bei Verwendung in der Bedingung `excludedResponseHeaders` wird die Regel nicht angewendet, wenn die Anfrage dieser Header-Bedingung entspricht.

Jedes Objekt beschreibt einen Header, der abgeglichen oder ausgeschlossen werden soll. Um mehrere Header zu überprüfen, können mehrere Objekte in diesen Arrays oder über mehrere Regeln hinweg angegeben werden.

> [!NOTE] Der Abgleich nach Headern ist eine relativ neue Funktion. Stellen Sie sicher, dass die Verfügbarkeit erkannt wird, bevor Sie sich darauf verlassen. Während einige Browser die komplette Regel ignorieren, wenn eine nicht erkannte Bedingung vorhanden ist, hat Chrome von Version 121 bis 127 die gesamte Regel angewandt, während die `responseHeaders` Bedingung ignoriert wurde. Dies könnte dazu führen, dass mehr Anfragen als beabsichtigt abgeglichen werden. Siehe [Chromium issue 347186592](https://issues.chromium.org/issues/347186592).

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers. Diese Bedingung stimmt nur auf den Namen überein, wenn sowohl `values` als auch `excludedValues` nicht angegeben sind.
- `values` {{optional_inline}}
  - : Ein Array von `string`. Falls angegeben, stimmt diese Bedingung überein, wenn der Wert des Headers mindestens einem Muster in dieser Liste entspricht. Dies unterstützt die Groß-/Kleinschreibung-unempfindliche Übereinstimmung des Header-Wertes sowie die folgenden Konstrukte:
    - `'*'` : Entspricht einer beliebigen Anzahl von Zeichen.
    - `'?'` : Entspricht null oder einem Zeichen.
    - `'*'` und `'?'` können mit einem Backslash maskiert werden, z.B. `'\*'` und `'\?'`.
- `excludedValues` {{optional_inline}}
  - : Ein Array von `string`. Falls angegeben, wird diese Bedingung nicht erfüllt, wenn der Header existiert, aber sein Wert mindestens ein Element aus dieser Liste enthält. Dies verwendet dasselbe Glob-Muster-Syntax wie `values`. Wenn `values` und `excludedValues` beide übereinstimmen, hat `excludedValues` Vorrang.

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

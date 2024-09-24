---
title: declarativeNetRequest.HeaderInfo
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/HeaderInfo
l10n:
  sourceCommit: 3d2cd62710699f455811feb389b474e90218605d
---

{{AddonSidebar}}

Der Antwort-Header, der für die Anfrage zu matchen ist, wird im {{WebExtAPIRef("declarativeNetRequest.RuleCondition", "rule.condition")}}`.excludedResponseHeaders` Array oder im {{WebExtAPIRef("declarativeNetRequest.RuleCondition", "rule.condition")}}`.responseHeaders` Array deklariert. Wenn angegeben, muss das Array nicht leer sein.

Wenn es in der Bedingung responseHeaders verwendet wird, stimmt die Regel überein, wenn die Anfrage dieser Antwort-Header-Bedingung entspricht. Wenn es in der Bedingung excludedResponseHeaders verwendet wird, stimmt die Regel nicht überein, wenn die Anfrage dieser Antwort-Header-Bedingung entspricht.

Jedes Objekt beschreibt einen Header, der zu matchen oder auszuschließen ist. Um mehrere Header zu prüfen, können mehrere Objekte in diesen Arrays oder über mehrere Regeln hinweg angegeben werden.

> [!NOTE] Das Matching von Headern ist ein relativ neues Feature. Stellen Sie sicher, dass Sie die Verfügbarkeit vor der Nutzung erkennen. Während einige Browser die Regel vollständig ignorieren, wenn eine nicht erkannte Bedingung vorliegt, hat Chrome 121 bis 127 die ganze Regel angewendet, während die `responseHeaders`-Bedingung ignoriert wurde. Dies könnte dazu führen, dass mehr Anfragen als beabsichtigt gematcht werden, siehe [Chromium Issue 347186592](https://crbug.com/347186592).

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `header`
  - : Ein `string`. Der Name des Headers. Diese Bedingung matcht den Namen nur, wenn sowohl Werte als auch ausgeschlossene Werte nicht angegeben sind.
- `values` {{optional_inline}}
  - : Ein Array von `string`. Wenn angegeben, stimmt diese Bedingung überein, wenn der Wert des Headers mindestens ein Muster in dieser Liste matcht. Dies unterstützt eine Groß-/Kleinschreibung ignorierende Übereinstimmung von Header-Werten sowie die folgenden Konstrukte:
    - `'*'` : Matcht eine beliebige Anzahl von Zeichen.
    - `'?'` : Matcht null oder ein Zeichen.
    - `'*'` und `'?'` können mit einem Backslash maskiert werden, z.B. `'\*'` und `'\?'`.
- `excludedValues` {{optional_inline}}
  - : Ein Array von `string`. Wenn angegeben, wird diese Bedingung nicht gematcht, wenn der Header existiert, aber sein Wert mindestens ein Element in dieser Liste enthält. Dies verwendet die gleiche Glob-Muster-Syntax wie `values`. Wenn sowohl `values` als auch `excludedValues` übereinstimmen, hat `excludedValues` Vorrang.

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

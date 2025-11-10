---
title: declarativeNetRequest.Redirect
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Redirect
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Details zur Beschreibung, wie eine Umleitung durchgeführt werden soll, als `redirect`-Eigenschaft von {{WebExtAPIRef("declarativeNetRequest.RuleAction", "RuleAction")}}. Nur gültig für Umleitungsregeln.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um, und die Anfrage wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z. B. ist der Wert von `regexSubstitution` keine gültige URL).

## Typ

Werte dieses Typs sind Objekte. Sie enthalten diese Eigenschaften:

- `extensionPath` {{optional_inline}}
  - : Ein `string`. Der Pfad relativ zum Erweiterungsverzeichnis. Sollte mit '/' beginnen. Der Initiator der Anfrage kann der Umleitung nur folgen, wenn die Ressource in [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) aufgeführt ist.
- `regexSubstitution` {{optional_inline}}
  - : Ein `string`. Das Ersetzungsmuster für Regeln, die einen `regexFilter` angeben. Das erste Vorkommen von `regexFilter` innerhalb der URL wird durch dieses Muster ersetzt. Innerhalb von `regexSubstitution` werden durch Rückwärtsschrägstrich-escapete Ziffern (`\1` bis `\9`) die entsprechenden Erfassungsgruppen eingefügt. `\0` bezieht sich auf den gesamten übereinstimmenden Text.
- `transform` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}. Die URL-Transformationen, die durchgeführt werden sollen.
- `url` {{optional_inline}}
  - : Ein `string`. Die Umleitungs-URL. Umleitungen zu JavaScript-URLs sind nicht erlaubt.

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

---
title: declarativeNetRequest.Redirect
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Redirect
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Details zu der Art und Weise, wie eine Weiterleitung ausgeführt werden soll, als Eigenschaft `redirect` einer {{WebExtAPIRef("declarativeNetRequest.RuleAction", "RuleAction")}}. Nur gültig für Weiterleitungsregeln.

> [!NOTE]
> Eine Weiterleitungsaktion leitet die Anfrage nicht um, und die Anfrage wird wie üblich fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Weiterleitungs-URL ungültig ist (z. B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} keine gültige URL ist).

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `extensionPath` {{optional_inline}}
  - : Ein `string`. Der Pfad relativ zum Erweiterungsverzeichnis. Sollte mit '/' beginnen. Der Initiator der Anfrage kann der Weiterleitung nur folgen, wenn die Ressource in [`web_accessible_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) aufgeführt ist.
- `regexSubstitution` {{optional_inline}}
  - : Ein `string`. Das Ersetzungsmuster für Regeln, die einen `regexFilter` angeben. Der erste Treffer von `regexFilter` innerhalb der URL wird durch dieses Muster ersetzt. Innerhalb von `regexSubstitution` werden rückwärts geschriebene Ziffern (`\1` bis `\9`) verwendet, um die entsprechenden Erfassungsgruppen einzufügen. `\0` bezieht sich auf den gesamten übereinstimmenden Text.
- `transform` {{optional_inline}}
  - : {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}. Die durchzuführenden URL-Transformationen.
- `url` {{optional_inline}}
  - : Ein `string`. Die Weiterleitungs-URL. Weiterleitungen zu JavaScript-URLs sind nicht erlaubt.

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

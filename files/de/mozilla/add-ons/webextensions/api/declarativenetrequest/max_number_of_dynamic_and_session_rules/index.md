---
title: declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die maximale Anzahl an dynamischen und sitzungsgespeicherten Regeln, die eine Erweiterung hinzufügen kann.

- Bis Firefox 126 hatte diese Eigenschaft einen Wert von 5.000 und gab an, dass eine Erweiterung bis zu 5.000 dynamische Regeln und bis zu 5.000 sitzungsspezifische Regeln erstellen konnte. Diese Eigenschaft wurde in Firefox 126 veraltet, und die Grenzen werden nun separat für jeden Regeltyp durch {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}} definiert.
- Bis Chrome 119 hatte diese Eigenschaft einen Wert von 5.000 und bedeutete, dass eine Erweiterung jede Kombination aus dynamischen und sitzungsspezifischen Regeln bis zu 5.000 erstellen konnte. Diese Eigenschaft wurde in Chrome 120 veraltet. Siehe [Regelgrenzen](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#limits) in der Chrome-Dokumentation für Informationen zu Grenzen in Chrome 120 und höher.
- In Safari hat diese Eigenschaft einen Wert von 30.000 und gibt an, dass eine Erweiterung jede Kombination aus dynamischen und sitzungsspezifischen Regeln bis zu 30.000 erstellen kann.

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

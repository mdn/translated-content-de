---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Funktionen zur Internationalisierung Ihrer Erweiterung. Sie können diese APIs verwenden, um lokalisierte Zeichenfolgen aus mit Ihrer Erweiterung gepackten Sprachdateien abzurufen, die aktuelle Sprache des Browsers zu ermitteln und den Wert seines [Accept-Language Headers](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) herauszufinden.

Sehen Sie sich die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Verwendung dieser API an.

## Typen

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Ein [Sprachtag](https://www.rfc-editor.org/rfc/rfc9110.html#name-language-tags) wie `"en-US"` oder `"fr"`.

## Funktionen

- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Erkennt die Sprache des bereitgestellten Textes unter Verwendung des [Compact Language Detector](https://github.com/CLD2Owners/cld2).
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Ruft die lokalisierte Zeichenfolge für die angegebene Nachricht ab.
- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Ruft die [accept-languages](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) des Browsers ab. Dies unterscheidet sich von der vom Browser verwendeten Sprache. Um die Sprache zu ermitteln, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Ruft die UI-Sprache des Browsers ab. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getAcceptLanguages')}}, welche die bevorzugten Benutzersprachen zurückgibt.
- {{WebExtAPIRef("i18n.getPreferredSystemLanguages()")}}
  - : Gibt die bevorzugten Sprachen des Betriebssystems zurück.
- {{WebExtAPIRef("i18n.getSystemUILanguage()")}}
  - : Gibt die aktuelle UI-Sprache des Betriebssystems zurück.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n) API von Chromium. Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

## Siehe auch

- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization): ein Leitfaden zur Verwendung des WebExtension-i18n-Systems.
- [Locale-Specific Message reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): Erweiterungen liefern sprachspezifische Zeichenfolgen in Dateien namens `messages.json`. Diese Seite beschreibt das Format von `messages.json`.

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

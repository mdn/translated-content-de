---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Funktionen zur Internationalisierung Ihrer Erweiterung. Sie können diese APIs verwenden, um lokalisierte Zeichenketten aus Sprachdateien abzurufen, die mit Ihrer Erweiterung gebündelt sind, die aktuelle Sprache des Browsers zu ermitteln und den Wert seines [Accept-Language-Headers](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) herauszufinden.

Sehen Sie sich die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Verwendung dieser API an.

## Typen

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Ein [Sprach-Tag](https://www.rfc-editor.org/info/rfc9110/#name-language-tags) wie `"en-US"` oder `"fr"`.

## Funktionen

- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Erkennt die Sprache des bereitgestellten Textes mittels des [Compact Language Detector](https://github.com/CLD2Owners/cld2).
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Holt die lokalisierte Zeichenkette für die angegebene Nachricht.
- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Ruft die [accept-languages](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) des Browsers ab. Dies unterscheidet sich von der vom Browser verwendeten Gebietsschema. Um das Gebietsschema zu erhalten, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Ermittelt die UI-Sprache des Browsers. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getAcceptLanguages')}}, welches die bevorzugten Benutzersprachen zurückgibt.
- {{WebExtAPIRef("i18n.getPreferredSystemLanguages()")}}
  - : Gibt die bevorzugten Gebietsschemas des Betriebssystems zurück.
- {{WebExtAPIRef("i18n.getSystemUILanguage()")}}
  - : Gibt das aktuelle UI-Gebietsschema des Betriebssystems zurück.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n) API. Diese Dokumentation leitet sich von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code ab.

## Siehe auch

- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization): ein Leitfaden zur Verwendung des WebExtension i18n-Systems.
- [Locale-Specific Message reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): Erweiterungen liefern sprachspezifische Zeichenketten in Dateien namens `messages.json`. Diese Seite beschreibt das Format von `messages.json`.

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

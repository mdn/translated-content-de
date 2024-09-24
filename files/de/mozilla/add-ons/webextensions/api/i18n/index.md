---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Funktionen zur Internationalisierung Ihrer Erweiterung. Sie können diese APIs verwenden, um lokalisierte Zeichenfolgen aus Sprachdateien, die mit Ihrer Erweiterung verpackt sind, zu erhalten, die aktuelle Sprache des Browsers zu ermitteln und den Wert seines [Accept-Language-Headers](/de/docs/Web/HTTP/Content_negotiation#the_accept-language_header) herauszufinden.

Siehe die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für eine Anleitung zur Nutzung dieser API.

## Typen

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Ein [Sprach-Tag](https://www.rfc-editor.org/rfc/rfc9110.html#name-language-tags) wie "`en-US`" oder "`fr`".

## Funktionen

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Ruft die [accept-languages](/de/docs/Web/HTTP/Content_negotiation#the_accept-language_header) des Browsers ab. Dies unterscheidet sich von der vom Browser verwendeten Locale. Um die Locale zu erhalten, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Ruft die lokalisierte Zeichenfolge für die angegebene Nachricht ab.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Ruft die Benutzeroberflächensprache des Browsers ab. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die die bevorzugten Benutzersprachen zurückgibt.
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Erkennt die Sprache des bereitgestellten Textes unter Verwendung des [Compact Language Detectors](https://github.com/CLD2Owners/cld2).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n) API. Diese Dokumentation stammt von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

## Siehe auch

- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization): eine Anleitung zur Verwendung des WebExtension i18n-Systems.
- [Locale-spezifische Nachrichtenreferenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): Erweiterungen liefern locale-spezifische Zeichenfolgen in Dateien namens `messages.json`. Diese Seite beschreibt das Format von `messages.json`.

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

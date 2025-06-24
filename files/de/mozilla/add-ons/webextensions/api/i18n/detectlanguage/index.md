---
title: i18n.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ermittelt die Sprache des bereitgestellten Textes mithilfe des [Compact Language Detector](https://github.com/CLD2Owners/cld2) (CLD).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Sehen Sie sich die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Nutzung dieser Funktion an.

## Syntax

```js-nolint
let detectingLanguages = browser.i18n.detectLanguage(
  text                  // string
)
```

### Parameter

- `text`
  - : `string`. Benutzerdefinierter Eingabestring, der übersetzt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Ergebnisobjekt erfüllt wird. Das Ergebnisobjekt hat zwei Eigenschaften:

- `isReliable`
  - : `boolean`. Ob die Sprache zuverlässig erkannt wurde.
- `languages`
  - : `array` von Objekten, von denen jedes zwei Eigenschaften hat:
    - `language`
      - : {{WebExtAPIRef('i18n.LanguageCode')}}. Die erkannte Sprache.
    - `percentage`
      - : `integer`. Der Prozentsatz des Eingabestrings, der in der erkannten Sprache war.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function onLanguageDetected(langInfo) {
  for (const lang of langInfo.languages) {
    console.log(`Language is: ${lang.language}`);
    console.log(`Percentage is: ${lang.percentage}`);
  }
}

let text = "L'homme est né libre, et partout il est dans les fers.";

let detecting = browser.i18n.detectLanguage(text);
detecting.then(onLanguageDetected);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-detectLanguage) API. Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

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

---
title: i18n.getMessage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getMessage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft den lokalisierten String für die angegebene Nachricht ab.

Sehen Sie sich die Seite zur [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Verwendung dieser Funktion an.

## Syntax

```js-nolint
browser.i18n.getMessage(
  messageName,  // string
  substitutions // optional any
)
```

### Parameter

- `messageName`
  - : `string`. Der Name der Nachricht, wie er in der messages.json-Datei angegeben ist. Wenn die Nachricht in messages.json nicht gefunden werden kann:
    - Gibt Firefox "" zurück und loggt einen Fehler.
    - Gibt Chrome "" zurück und loggt keinen Fehler.

- `substitutions` {{optional_inline}}
  - : `string` oder `array` von `string`. Ein einzelner Ersetzungsstring oder ein Array von Ersetzungsstrings.

    In Chrome, wenn Sie mehr als 9 Ersetzungsstrings angeben, wird `getMessage()` `undefined` zurückgeben.

### Rückgabewert

`string`. Nachricht, die für das aktuelle Gebietsschema lokalisiert ist.

## Beispiele

Holen Sie sich den lokalisierten String für `"messageContent"`, mit Ersetzung von `target.url`:

```js
let message = browser.i18n.getMessage("messageContent", target.url);
console.log(message);
```

Dies würde mit einer \_locales/en/messages.json-Datei funktionieren, die folgendes enthält:

```json
{
  "messageContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

Wenn `target.url` "https\://developer.mozilla.org" ist, dann wäre der Wert der Nachricht im "en" Gebietsschema:

```plain
"You clicked https://developer.mozilla.org."
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-getMessage) API von Chromium. Diese Dokumentation stammt aus [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

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

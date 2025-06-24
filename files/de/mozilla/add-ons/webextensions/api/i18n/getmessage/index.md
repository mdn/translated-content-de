---
title: i18n.getMessage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getMessage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ruft die lokalisierte Zeichenfolge für die angegebene Nachricht ab.

Siehe die Seite [Internationalization](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Verwendung dieser Funktion.

## Syntax

```js-nolint
browser.i18n.getMessage(
  messageName,  // string
  substitutions // optional any
)
```

### Parameter

- `messageName`

  - : `string`. Der Name der Nachricht, wie in der messages.json-Datei angegeben. Wenn die Nachricht nicht in messages.json gefunden werden kann:
    - Gibt Firefox "" zurück und protokolliert einen Fehler.
    - Gibt Chrome "" zurück und protokolliert keinen Fehler.

- `substitutions` {{optional_inline}}

  - : `string` oder `array` von `string`. Ein einzelner Ersetzungs-String oder ein Array von Ersetzungs-Strings.

    In Chrome, wenn Sie mehr als 9 Ersetzungs-Strings bereitstellen, wird `getMessage()` `undefined` zurückgeben.

### Rückgabewert

`string`. Nachricht, lokalisiert für das aktuelle Gebietsschema.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Rufen Sie die lokalisierte Zeichenfolge für `"messageContent"` ab, mit `target.url` ersetzt:

```js
let message = browser.i18n.getMessage("messageContent", target.url);
console.log(message);
```

Dies würde mit einer \_locales/en/messages.json-Datei funktionieren, die enthält:

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

Wenn `target.url` "https\://developer.mozilla.org" ist, wäre der Wert der Nachricht im "en"-Gebietsschema:

```plain
"You clicked https://developer.mozilla.org."
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-getMessage) API. Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

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

---
title: devtools.inspectedWindow.reload()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

Lädt das Fenster neu, an das die DevTools angehängt sind.

## Syntax

```js-nolint
browser.devtools.inspectedWindow.reload(
  reloadOptions       // object
)
```

### Parameter

- `reloadOptions` {{optional_inline}}

  - : `object`. Optionen für die Funktion, wie folgt:

    - `ignoreCache` {{optional_inline}}
      - : `boolean`. Wenn true, wird beim Neuladen der Browser-Cache ignoriert (wie wenn der Benutzer Shift+Strg+R gedrückt hätte).
    - `userAgent` {{optional_inline}}
      - : `string`. Setzt einen benutzerdefinierten User-Agent für die Seite. Der hier angegebene String wird im [User-Agent](/de/docs/Web/HTTP/Reference/Headers/User-Agent)-Header des Browsers gesendet und bei Aufrufen von [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) zurückgegeben, die von in der Seite ausgeführten Skripten gemacht werden.
    - `injectedScript` {{optional_inline}}
      - : `string`. Injezieren Sie den angegebenen JavaScript-Ausdruck in alle Frames der Seite, bevor andere Skripte ausgeführt werden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Laden Sie das untersuchte Fenster neu, setzen Sie den User-Agent und injizieren Sie ein Skript:

```js
const reloadButton = document.querySelector("#reload-button");

reloadButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.reload({
    injectedScript: "alert(navigator.userAgent);",
    userAgent: "Not a real UA",
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.

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

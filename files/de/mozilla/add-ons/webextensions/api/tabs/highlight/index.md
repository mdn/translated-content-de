---
title: tabs.highlight()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/highlight
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Hebt ein oder mehrere Tabs hervor (wählt sie aus). Tabs werden mit einer Fenster-ID und einem Bereich von Tab-Indizes angegeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let highlighting = browser.tabs.highlight(
  highlightInfo         // object
)
```

### Parameter

- `highlightInfo`
  - : `object`.
    - `windowId` {{optional_inline}}
      - : `integer`. ID des Fensters, das die Tabs enthält.
    - `populate` {{optional_inline}}
      - : `boolean`. Standardwert ist `true`. Wenn auf `false` gesetzt, wird das {{WebExtAPIRef('windows.Window')}}-Objekt keine `tabs`-Eigenschaft haben, die eine Liste von {{WebExtAPIRef('tabs.Tab')}}-Objekten enthält, die die im Fenster geöffneten Tabs darstellen.

        > [!NOTE]
        > Das Befüllen des Fensters (das Standardverhalten) kann eine kostspielige Operation sein, wenn viele Tabs vorhanden sind. Für eine bessere Performance wird empfohlen, `populate` manuell auf `false` zu setzen, wenn Tab-Details nicht benötigt werden.

    - `tabs`
      - : `array` von ganzzahligen Werten, die einen oder mehrere Tab-Indizes angeben, die hervorgehoben werden sollen. Zuvor hervorgehobene Tabs, die nicht in `tabs` enthalten sind, werden nicht mehr hervorgehoben. Der erste Tab in `tabs` wird aktiv.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das Details über das Fenster enthält, dessen Tabs hervorgehoben wurden. Wenn das Fenster nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-highlight)-API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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

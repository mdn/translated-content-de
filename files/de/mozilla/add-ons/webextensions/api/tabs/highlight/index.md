---
title: tabs.highlight()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/highlight
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Hebt einen oder mehrere Tabs hervor (selektiert sie). Tabs werden unter Verwendung einer Fenster-ID und eines Bereichs von Tab-Indizes angegeben.

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

      - : `boolean`. Standardmäßig `true`. Wenn auf `false` gesetzt, wird das {{WebExtAPIRef('windows.Window')}}-Objekt keine `tabs`-Eigenschaft enthalten, die eine Liste von {{WebExtAPIRef('tabs.Tab')}}-Objekten darstellt, die die im Fenster geöffneten Tabs repräsentieren.

        > [!NOTE]
        > Das Füllen des Fensters (das Standardverhalten) kann eine aufwendige Operation sein, wenn viele Tabs vorhanden sind. Für bessere Leistung wird empfohlen, `populate` manuell auf `false` zu setzen, wenn Sie keine Tab-Details benötigen.

    - `tabs`
      - : `array` von Integer-Werten, die einen oder mehrere Tab-Indizes angeben, die hervorgehoben werden sollen. Zuvor hervorgehobene Tabs, die nicht in `tabs` enthalten sind, werden nicht mehr hervorgehoben. Der erste Tab in `tabs` wird aktiv.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}}-Objekt erfüllt wird, das Details über das Fenster enthält, dessen Tabs hervorgehoben wurden. Wenn das Fenster nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-highlight)-API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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

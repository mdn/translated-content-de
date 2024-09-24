---
title: browserAction.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeText
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt den Abzeichnungstext für die Browseraktion. Die Abzeichnung wird über dem Symbol angezeigt.

Tabs ohne spezifischen Abzeichnungstext übernehmen den globalen Abzeichnungstext, der standardmäßig `""` ist.

## Syntax

```js-nolint
browser.browserAction.setBadgeText(
  details // object
)
```

Diese API ist auch als `chrome.browserAction.setBadgeText()` verfügbar.

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `text`

      - : `string` oder `null`. Es können beliebig viele Zeichen übergeben werden, aber nur etwa vier passen in den vorhandenen Platz.

        Verwenden Sie eine leere Zeichenkette - `""` - wenn Sie keine Abzeichnung wollen.

        Wenn eine `tabId` angegeben wird, entfernt `null` den tab-spezifischen Abzeichnungstext, sodass der Tab den globalen Abzeichnungstext übernimmt. Andernfalls wird der globale Abzeichnungstext auf `""` zurückgesetzt.

        Wenn eine `windowId` angegeben wird, entfernt `null` den fensterspezifischen Abzeichnungstext, sodass der Tab den globalen Abzeichnungstext übernimmt. Andernfalls wird der globale Abzeichnungstext auf `""` zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Abzeichnungstext nur für den angegebenen Tab. Der Text wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Abzeichnungstext für das angegebene Fenster.

<!---->

- Falls `windowId` und `tabId` beide angegeben werden, schlägt die Funktion fehl.
- Falls `windowId` und `tabId` beide ausgelassen werden, wird die globale Abzeichnung gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie eine Abzeichnung hinzu, die anzeigt, wie oft der Benutzer auf die Schaltfläche geklickt hat:

```js
let clicks = 0;

function increment() {
  browser.browserAction.setBadgeText({ text: (++clicks).toString() });
}

browser.browserAction.onClicked.addListener(increment);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeText) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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

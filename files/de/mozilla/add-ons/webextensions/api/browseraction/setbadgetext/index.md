---
title: browserAction.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeText
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt den Badge-Text für die Browseraktion. Der Badge wird über dem Symbol angezeigt.

Tabs ohne spezifischen Badge-Text übernehmen den globalen Badge-Text, der standardmäßig `""` ist.

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

      - : `string` oder `null`. Es kann eine beliebige Anzahl von Zeichen übergeben werden, aber nur etwa vier passen in den verfügbaren Platz.

        Verwenden Sie einen leeren String - `""` - wenn Sie keinen Badge wünschen.

        Wenn ein `tabId` angegeben ist, entfernt `null` den tab-spezifischen Badge-Text, sodass der Tab den globalen Badge-Text erbt. Andernfalls wird der globale Badge-Text auf `""` zurückgesetzt.

        Wenn ein `windowId` angegeben ist, entfernt `null` den fensterspezifischen Badge-Text, sodass der Tab den globalen Badge-Text erbt. Andernfalls wird der globale Badge-Text auf `""` zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzen Sie den Badge-Text nur für den angegebenen Tab. Der Text wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzen Sie den Badge-Text für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl.
- Wenn `windowId` und `tabId` beide ausgelassen werden, wird der globale Badge gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Badge hinzu, der anzeigt, wie oft der Benutzer auf die Schaltfläche geklickt hat:

```js
let clicks = 0;

function increment() {
  browser.browserAction.setBadgeText({ text: (++clicks).toString() });
}

browser.browserAction.onClicked.addListener(increment);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeText). Diese Dokumentation basiert auf [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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

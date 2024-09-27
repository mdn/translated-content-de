---
title: action.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeText
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt den Abzeichen-Text für die Browser-Aktion fest. Das Abzeichen wird über dem Symbol angezeigt.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Tabs ohne einen bestimmten Abzeichen-Text erben den globalen Abzeichen-Text, der standardmäßig `""` ist.

## Syntax

```js-nolint
browser.action.setBadgeText(
  details // object
)
```

Diese API ist auch als `chrome.action.setBadgeText()` verfügbar.

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `text`

      - : `string` oder `null`. Es können beliebig viele Zeichen übergeben werden, aber nur etwa vier passen in den Platz.

        Verwenden Sie eine leere Zeichenkette - `""` - wenn Sie kein Abzeichen möchten.

        Wenn eine `tabId` angegeben ist, entfernt `null` den tabspezifischen Abzeichen-Text, sodass der Tab den globalen Abzeichen-Text erbt. Andernfalls setzt es den globalen Abzeichen-Text auf `""` zurück.

        Wenn eine `windowId` angegeben ist, entfernt `null` den fensterspezifischen Abzeichen-Text, sodass der Tab den globalen Abzeichen-Text erbt. Andernfalls setzt es den globalen Abzeichen-Text auf `""` zurück.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Abzeichen-Text nur für den angegebenen Tab. Der Text wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Abzeichen-Text für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Abzeichen gesetzt.

## Beispiele

Fügen Sie ein Abzeichen hinzu, das anzeigt, wie oft der Benutzer die Schaltfläche geklickt hat:

```js
let clicks = 0;

function increment() {
  browser.action.setBadgeText({ text: (++clicks).toString() });
}

browser.action.onClicked.addListener(increment);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeText). Diese Dokumentation leitet sich von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code ab.

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

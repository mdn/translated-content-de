---
title: action.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/action/setTitle
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzt den Titel der Browser-Aktion. Der Titel wird in einem Tooltip über dem Symbol der Browser-Aktion angezeigt. Sie können eine `tabId` oder eine `windowId` als optionalen Parameter übergeben — wenn Sie dies tun, wird der Titel nur für den angegebenen Tab oder das Fenster geändert. Tabs oder Fenster ohne spezifischen Titel übernehmen den globalen Titeltext, der standardmäßig auf den im Manifest angegebenen [`default_title`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) festgelegt ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.setTitle(
  details // object
)
```

### Parameter

- `details`
  - : `object`. Der neue Titel und optional die ID des Tabs oder Fensters, das angesprochen werden soll.
    - `title`
      - : `string` oder `null`. Der Text, den die Browser-Aktion bei Mauszeigerbewegung anzeigen soll.

        Wenn `title` ein leerer String ist, wird der Erweiterungsname als Titel verwendet, aber {{WebExtAPIRef("action.getTitle")}} liefert dennoch den leeren String.

        Wenn `title` `null` ist:
        - Wenn `tabId` angegeben ist und der Tab einen tab-spezifischen Titel hat, übernimmt der Tab den Titel des Fensters, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fensterspezifischen Titel hat, übernimmt das Fenster den globalen Titel.
        - Andernfalls wird der globale Titel auf den Manifesttitel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` ausgelassen werden, wird der globale Titel gesetzt.

## Beispiele

Dieser Code wechselt den Titel zwischen "this" und "that" jedes Mal, wenn der Benutzer auf die Browser-Aktion klickt:

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.action.setTitle({ title: "that" });
  } else {
    browser.action.setTitle({ title: "this" });
  }
}

browser.action.onClicked.addListener(() => {
  let gettingTitle = browser.action.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setTitle) API von Chromium. Diese Dokumentation ist von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.

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

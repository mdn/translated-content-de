---
title: browserAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt den Titel der Browseraktion fest. Der Titel wird in einem Tooltip über dem Symbol der Browseraktion angezeigt. Sie können optional eine `tabId` oder eine `windowId` übergeben — wenn Sie dies tun, wird der Titel nur für den angegebenen Tab oder das angegebene Fenster geändert. Tabs oder Fenster ohne spezifischen Titel erben den globalen Titeltext, der standardmäßig dem [`default_title`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) entspricht, der im Manifest angegeben ist.

## Syntax

```js-nolint
browser.browserAction.setTitle(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Der neue Titel und optional die ID des Tabs oder Fensters, das angesprochen werden soll.

    - `title`

      - : `string` oder `null`. Der Text, den die Browseraktion beim Überfahren mit der Maus anzeigen soll.

        Wenn `title` eine leere Zeichenkette ist, wird der verwendete Titel der Name der Erweiterung sein, aber {{WebExtAPIRef("browserAction.getTitle")}} wird dennoch die leere Zeichenkette ausgeben.

        Wenn `title` `null` ist:

        - Wenn `tabId` angegeben ist und der Tab einen tab-spezifischen Titel hat, dann übernimmt der Tab den Titel von dem Fenster, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fenster-spezifischen Titel hat, dann übernimmt das Fenster den globalen Titel.
        - Andernfalls wird der globale Titel auf den Manifesteintrag zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code wechselt den Titel zwischen "this" und "that" jedes Mal, wenn der Benutzer auf die Browseraktion klickt:

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.browserAction.setTitle({ title: "that" });
  } else {
    browser.browserAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setTitle) API von Chromium. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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

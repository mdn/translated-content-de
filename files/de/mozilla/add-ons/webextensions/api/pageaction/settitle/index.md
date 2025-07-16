---
title: pageAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setTitle
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Setzt den Titel der Page Action. Der Titel wird in einem Tooltip angezeigt, wenn der Nutzer mit der Maus über die Page Action fährt.

## Syntax

```js-nolint
browser.pageAction.setTitle(
  details // object
)
```

### Parameter

- `details`
  - : `object`.
    - `tabId`
      - : `integer`. Die ID des Tabs, dessen Titel Sie setzen möchten.
    - `title`
      - : `string` oder `null`. Der Tooltip-Text.

        Wenn `null` übergeben wird, wird der Titel auf den Titel zurückgesetzt, der im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Manifest-Schlüssel angegeben wurde.

## Beispiele

Wenn immer ein Tab aktualisiert wird, zeigen Sie die Page Action für diesen Tab an und setzen Sie den Titel, um die ID des Tabs anzuzeigen:

```js
browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  browser.pageAction.show(tabId);
  browser.pageAction.setTitle({
    tabId,
    title: `Tab ID: ${tabId}`,
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-setTitle) API von Chromium. Diese Dokumentation stammt aus [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.

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

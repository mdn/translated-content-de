---
title: pageAction.show()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/show
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Zeigt die {{WebExtAPIRef("pageAction")}} für einen bestimmten {{WebExtAPIRef("tabs/Tab", "tab")}} an. Die Page Action wird angezeigt, wann immer der angegebene Tab der aktive Tab ist.

`show()` überschreibt das Musterabgleich, sodass die Page Action im angegebenen Tab angezeigt wird, auch wenn [`show_matches`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) nicht mit der URL übereinstimmt oder [`hide_matches`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) es tut.

Beachten Sie, dass ein Aufruf von `show()` keine Wirkung auf einen Tab hat, der keinen geladenen Inhalt enthält.

## Syntax

```js-nolint
browser.pageAction.show(
  tabId // integer
)
```

### Parameter

- `tabId`
  - : `integer`. Die ID des {{WebExtAPIRef("tabs/Tab", "tab")}}, für den Sie die Page Action anzeigen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `undefined` erfüllt wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel zeigt die {{WebExtAPIRef("pageAction")}} für den aktiven Tab, wenn der Benutzer ein Kontextmenüelement auswählt.

> [!NOTE]
> Sie benötigen die Berechtigung `contextMenus` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrem [Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), um Kontextmenüelemente zu erstellen.

```js
browser.contextMenus.create({
  id: "show",
  title: "Show page action",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "show") {
    browser.pageAction.show(tab.id);
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-show) API. Diese Dokumentation ist abgeleitet von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.

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
---
title: sidebarAction.setPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt das Panel der Seitenleiste: das heißt, das HTML-Dokument, das den Inhalt dieser Seitenleiste definiert.

## Arten von Panels

Seitenleisten haben immer ein _"Manifest-Panel"_, das im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel definiert ist.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und die Option `tabId` einschließen, wird das Panel nur für den angegebenen Tab festgelegt. Dieses Panel wird als _"tab-spezifisches Panel"_ bezeichnet.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und die Option `windowId` einschließen, wird das Panel nur für das angegebene Fenster festgelegt. Dieses Panel wird als _"fenster-spezifisches Panel"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die kein tab-spezifisches Panel festgelegt haben.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und sowohl die Optionen `tabId` als auch `windowId` weglassen, wird das _"globale Panel"_ festgelegt. Das globale Panel wird dann in allen Tabs angezeigt, die kein tab-spezifisches Panel haben und deren Fenster kein fenster-spezifisches Panel hat.

## Syntax

```js-nolint
browser.sidebarAction.setPanel(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt mit den folgenden Eigenschaften:

    - `panel`

      - : `string` oder `null`. Das Panel, das in die Seitenleiste geladen werden soll, angegeben als URL, die auf ein HTML-Dokument verweist, oder `null`, oder eine leere Zeichenfolge.

        Dies kann auf eine innerhalb der Erweiterung gepackte Datei verweisen (zum Beispiel erstellt mit {{WebExtAPIRef("runtime.getURL")}}), oder ein entferntes Dokument (z.B. `https://example.org/`). Es muss eine gültige URL sein.

        Wenn `panel` `null` oder `""` ist, wird ein zuvor festgelegtes Panel entfernt, sodass:

        - Wenn `tabId` angegeben ist, und der Tab ein tab-spezifisches Panel hat, dann erbt der Tab das Panel von dem Fenster, zu dem es gehört.
        - Wenn `windowId` angegeben ist, und das Fenster ein fenster-spezifisches Panel hat, dann erbt das Fenster das globale Panel.
        - Andernfalls wird das globale Panel auf das Manifest-Panel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Legt das Panel nur für den angegebenen Tab fest.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt das Panel nur für das angegebene Fenster fest.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Panel wird nicht festgelegt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Panel festgelegt.

## Beispiele

Dieser Code wechselt das Dokument der Seitenleiste, wenn der Benutzer auf eine Browseraktion klickt:

```js
let thisPanel = browser.runtime.getURL("/this.html");
let thatPanel = browser.runtime.getURL("/that.html");

function toggle(panel) {
  if (panel === thisPanel) {
    browser.sidebarAction.setPanel({ panel: thatPanel });
  } else {
    browser.sidebarAction.setPanel({ panel: thisPanel });
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.sidebarAction.getPanel({}).then(toggle);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API von Opera.

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

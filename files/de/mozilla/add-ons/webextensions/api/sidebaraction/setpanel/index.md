---
title: sidebarAction.setPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Legt das Panel der Sidebar fest: das ist das HTML-Dokument, das den Inhalt dieser Sidebar definiert.

## Arten von Panels

Sidebars haben immer ein _"Manifest-Panel"_, das im [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel definiert ist.

Wenn Sie mit `setPanel()` ein neues Panel setzen und die Option `tabId` einbinden, wird das Panel nur für den angegebenen Tab festgelegt. Dieses Panel wird als _"tab-spezifisches Panel"_ bezeichnet.

Wenn Sie mit `setPanel()` ein neues Panel setzen und die Option `windowId` einbinden, wird das Panel nur für das angegebene Fenster festgelegt. Dieses Panel wird als _"fensterspezifisches Panel"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die kein tab-spezifisches Panel gesetzt haben.

Wenn Sie mit `setPanel()` ein neues Panel setzen und sowohl die Optionen `tabId` als auch `windowId` weglassen, wird das _"globale Panel"_ gesetzt. Das globale Panel erscheint dann in allen Tabs, die kein tab-spezifisches Panel gesetzt haben und deren Fenster kein fensterspezifisches Panel hat.

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

      - : `string` oder `null`. Das Panel, das in die Sidebar geladen werden soll, angegeben als URL, die auf ein HTML-Dokument verweist, oder `null`, oder ein leerer String.

        Dies kann auf eine Datei innerhalb der Erweiterung hinweisen (zum Beispiel erstellt mit {{WebExtAPIRef("runtime.getURL")}}), oder auf ein entferntes Dokument (z.B. `https://example.org/`). Es muss eine gültige URL sein.

        Wenn `panel` `null` oder `""` ist, wird ein zuvor gesetztes Panel entfernt, sodass:

        - Wenn `tabId` angegeben ist und der Tab ein tab-spezifisches Panel hat, übernimmt der Tab das Panel von dem Fenster, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster ein fensterspezifisches Panel hat, übernimmt das Fenster das globale Panel.
        - Andernfalls wird das globale Panel auf das Manifest-Panel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Panel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Panel nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Panel wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Panel gesetzt.

## Beispiele

Dieser Code wechselt das Sidebar-Dokument, wenn der Benutzer eine Browser-Aktion anklickt:

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
> Diese API basiert auf der Opera [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.

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

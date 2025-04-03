---
title: sidebarAction.setPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Legt das Panel der Seitenleiste fest, also das HTML-Dokument, das den Inhalt dieser Seitenleiste definiert.

## Arten von Panels

Seitenleisten haben immer ein _"Manifest-Panel"_, das im Manifest-Schlüssel [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) definiert ist.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und die Option `tabId` einschließen, wird das Panel nur für den angegebenen Tab festgelegt. Dieses Panel wird als _"Tab-spezifisches Panel"_ bezeichnet.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und die Option `windowId` einschließen, wird das Panel nur für das angegebene Fenster festgelegt. Dieses Panel wird als _"Fenster-spezifisches Panel"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die kein Tab-spezifisches Panel haben.

Wenn Sie ein neues Panel mit `setPanel()` festlegen und sowohl die Optionen `tabId` als auch `windowId` auslassen, wird das _"globale Panel"_ festgelegt. Das globale Panel erscheint dann in allen Tabs, die kein Tab-spezifisches Panel haben und deren Fenster kein Fenster-spezifisches Panel hat.

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

      - : `string` oder `null`. Das zu ladende Panel in der Seitenleiste, angegeben als URL, die auf ein HTML-Dokument verweist, oder `null` oder ein leerer String.

        Dies kann auf eine Datei innerhalb der Erweiterung verweisen (zum Beispiel erstellt mit {{WebExtAPIRef("runtime.getURL")}}), oder auf ein entferntes Dokument (z.B. `https://example.org/`). Es muss eine gültige URL sein.

        Wenn `panel` `null` oder `""` ist, wird ein zuvor eingestelltes Panel entfernt, so dass:

        - Wenn `tabId` angegeben ist und der Tab ein Tab-spezifisches Panel hat, dann übernimmt der Tab das Panel von dem Fenster, zu dem es gehört.
        - Wenn `windowId` angegeben ist und das Fenster ein Fenster-spezifisches Panel hat, übernimmt das Fenster das globale Panel.
        - Andernfalls wird das globale Panel auf das Manifest-Panel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Legt das Panel nur für den angegebenen Tab fest.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt das Panel nur für das angegebene Fenster fest.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Panel wird nicht festgelegt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Panel festgelegt.

## Beispiele

Dieser Code wechselt das Dokument der Seitenleiste, wenn der Benutzer auf eine Browser-Aktion klickt:

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
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.

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

---
title: sidebarAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt den Titel der Seitenleiste. Der Titel wird überall angezeigt, wo der Browser verfügbare Seitenleisten auflistet. Zum Beispiel zeigt Firefox ihn im Menü "Ansicht > Seitenleiste" an. Er wird auch oben in der Seitenleiste angezeigt, wenn diese geöffnet ist.

## Arten von Titeln

Ihre Erweiterung sollte einen Titel für die Seitenleiste im [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssel spezifizieren. Dieser wird als _"Manifest-Titel"_ bezeichnet. Wenn Sie den Manifest-Titel nicht angeben, wird standardmäßig der Name der Erweiterung verwendet.

Wenn Sie einen neuen Titel mit `setTitle()` setzen und die `tabId`-Option einschließen, wird der Titel nur für den angegebenen Tab gesetzt. Dieser Titel wird als _"tab-spezifischer Titel"_ bezeichnet.

Wenn Sie einen neuen Titel mit `setTitle()` setzen und die `windowId`-Option einschließen, wird der Titel nur für das angegebene Fenster gesetzt. Dieser Titel wird als _"fensterspezifischer Titel"_ bezeichnet und erscheint in allen Tabs dieses Fensters, die keinen tab-spezifischen Titel haben.

Wenn Sie einen neuen Titel mit `setTitle()` setzen und sowohl die `tabId`- als auch die `windowId`-Option weglassen, wird damit der _"globale Titel"_ gesetzt. Der globale Titel erscheint dann in allen Tabs, die keinen tab-spezifischen Titel haben und deren Fenster keinen fensterspezifischen Titel hat.

## Syntax

```js-nolint
browser.sidebarAction.setTitle(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt mit den folgenden Eigenschaften:

    - `title`

      - : `string` oder `null`. Der neue Titel der Seitenleiste.

        Wenn `title` ein leerer String ist, wird der verwendete Titel der Name der Erweiterung sein, jedoch liefert {{WebExtAPIRef("sidebarAction.getTitle")}} trotzdem den leeren String.

        Wenn `title` `null` ist, wird ein zuvor gesetzter Titel entfernt, sodass:

        - Wenn `tabId` angegeben ist und der Tab einen tab-spezifischen Titel hat, erbt der Tab den Titel des Fensters, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fensterspezifischen Titel hat, erbt das Fenster den globalen Titel.
        - Andernfalls wird der globale Titel auf den Manifest-Titel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code ändert den Titel für die Seitenleiste, wenn der Benutzer auf eine Browseraktion klickt, jedoch nur für den aktuellen Tab:

```js
let title = "A different title";

function setTitleForTab(tab) {
  browser.sidebarAction.setTitle({ title, tabId: tab.id });
}

browser.browserAction.onClicked.addListener(setTitleForTab);
```

{{WebExtExamples}}

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

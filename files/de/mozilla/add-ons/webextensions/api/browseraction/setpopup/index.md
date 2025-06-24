---
title: browserAction.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setPopup
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Legt das HTML-Dokument fest, das als Popup geöffnet wird, wenn der Benutzer auf das Symbol der Browseraktion klickt. Tabs ohne spezifisches Popup erben das globale Popup, das standardmäßig dem im Manifest angegebenen [`default_popup`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) entspricht.

## Syntax

```js-nolint
browser.browserAction.setPopup(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für einen bestimmten Tab. Das Popup wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für das angegebene Fenster.
    - `popup`

      - : `string` oder `null`. Die HTML-Datei, die in einem Popup angezeigt werden soll, angegeben als URL.

        Dies kann auf eine Datei verweisen, die innerhalb der Erweiterung gepackt ist (zum Beispiel erstellt mit {{WebExtAPIRef("extension.getURL")}}) oder auf ein entferntes Dokument (z. B. `https://example.org/`).

        Wird hier ein leerer String (`""`) übergeben, ist das Popup deaktiviert, und die Erweiterung erhält {{WebExtAPIRef("browserAction.onClicked")}}-Ereignisse.

        Wenn `popup` `null` ist:

        - Wenn `tabId` angegeben ist, entfernt es das tab-spezifische Popup, damit der Tab das globale Popup erbt.
        - Wenn `windowId` angegeben ist, entfernt es das fensterspezifische Popup, damit das Fenster das globale Popup erbt.
        - Wenn `tabId` und `windowId` beide ausgelassen werden, wird das globale Popup auf den Standardwert zurückgesetzt.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Popup wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide ausgelassen werden, wird das globale Popup gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fügt ein Paar von Kontextmenüelementen hinzu, mit denen Sie zwischen zwei Popups wechseln können. Beachten Sie, dass Sie die Berechtigung "contextMenus" im Manifest der Erweiterung festlegen müssen, um Kontextmenüelemente zu erstellen.

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("error creating item:", browser.runtime.lastError);
  } else {
    console.log("item created successfully");
  }
}

browser.contextMenus.create(
  {
    id: "popup-1",
    type: "radio",
    title: "Popup 1",
    contexts: ["all"],
    checked: true,
  },
  onCreated,
);

browser.contextMenus.create(
  {
    id: "popup-2",
    type: "radio",
    title: "Popup 2",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "popup-1") {
    browser.browserAction.setPopup({ popup: "/popup/popup1.html" });
  } else if (info.menuItemId === "popup-2") {
    browser.browserAction.setPopup({ popup: "/popup/popup2.html" });
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setPopup) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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

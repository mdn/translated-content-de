---
title: action.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/setPopup
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

Setzt das HTML-Dokument, das geöffnet wird, wenn der Benutzer auf das Symbol der Browser-Aktion klickt. Tabs ohne ein spezifisches Popup erben das globale Popup, welches standardmäßig im [`default_popup`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) des Manifests angegeben ist.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.setPopup(
  details // object
)
```

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für einen bestimmten Tab. Das Popup wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Popup nur für das angegebene Fenster.
    - `popup`
      - : `string` oder `null`. Die HTML-Datei, die in einem Popup angezeigt werden soll, angegeben als URL.

        Dies kann auf eine im Add-on enthaltene Datei zeigen (zum Beispiel, erstellt mithilfe von {{WebExtAPIRef("runtime.getURL")}}), oder auf ein entferntes Dokument (z.B. `https://example.org/`).

        Wenn hier ein leerer String (`""`) übergeben wird, wird das Popup deaktiviert und das Add-on erhält {{WebExtAPIRef("action.onClicked")}}-Ereignisse.

        Wenn `popup` `null` ist:
        - Wenn `tabId` angegeben ist, wird das tab-spezifische Popup entfernt, sodass der Tab das globale Popup erbt.
        - Wenn `windowId` angegeben ist, wird das fenster-spezifische Popup entfernt, sodass das Fenster das globale Popup erbt.
        - Wenn `tabId` und `windowId` beide nicht angegeben sind, wird das globale Popup auf den Standardwert zurückgesetzt.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Popup wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Popup gesetzt.

## Beispiele

Dieser Code fügt ein Paar von Kontextmenüeinträgen hinzu, die verwendet werden können, um zwischen zwei Popups zu wechseln. Beachten Sie, dass Sie die "contextMenus" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) im Manifest des Add-ons festlegen müssen, um Kontextmenüeinträge zu erstellen.

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
    browser.action.setPopup({ popup: "/popup/popup1.html" });
  } else if (info.menuItemId === "popup-2") {
    browser.action.setPopup({ popup: "/popup/popup2.html" });
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setPopup) API von Chromium. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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

---
title: tabs.connect()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/connect
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Rufen Sie diese Funktion auf, um eine Verbindung zwischen den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten wie Popup-Skripten oder Optionsseitenskripten) und allen [Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) herzustellen, die zu dieser Erweiterung gehören und im angegebenen Tab ausgeführt werden. Diese Funktion gibt ein {{WebExtAPIRef("runtime.Port")}} Objekt zurück.

Wenn dies aufgerufen wird, wird das {{WebExtAPIRef('runtime.onConnect')}}-Ereignis in jedem Inhaltsskript, das zu dieser Erweiterung gehört und im angegebenen Tab ausgeführt wird, ausgelöst. Dem Ereignis-Listener wird ein weiteres {{WebExtAPIRef("runtime.Port")}} Objekt übergeben. Die beiden Seiten können dann die `Port` Objekte verwenden, um Nachrichten auszutauschen.

Weitere Details finden Sie unter [Verbindungsbasierte Nachrichtenübermittlung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging). Sie können Nachrichten senden, ohne eine Verbindung herzustellen. Einen Leitfaden zur Auswahl zwischen den Optionen finden Sie unter [Wahl zwischen einmaligen Nachrichten und verbindungsbasierter Nachrichtenübermittlung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

## Syntax

```js-nolint
browser.tabs.connect(
  tabId,      // integer
  connectInfo // optional object
)
```

### Parameter

- `tabId`
  - : `integer`. ID des Tabs, zu dessen Inhaltsskripten wir eine Verbindung herstellen möchten.
- `connectInfo` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `name` {{optional_inline}}
      - : `string`. Wird in die {{WebExtAPIRef("runtime.onConnect")}} Ereignis-Listener in den Inhaltsskripten übergeben, die zu dieser Erweiterung gehören und im angegebenen Tab ausgeführt werden.
    - `frameId` {{optional_inline}}
      - : `integer`. Öffnet einen Port zu einem bestimmten Frame, der durch `frameId` identifiziert wird, anstatt zu allen Frames im Tab.

### Rückgabewert

{{WebExtAPIRef('runtime.Port')}}. Ein Port, der zur Kommunikation mit den im angegebenen Tab ausgeführten Inhaltsskripten verwendet werden kann.

## Beispiele

In diesem Beispiel lauscht ein Hintergrundskript auf einen Klick auf eine [Browser-Aktion](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), verbindet sich dann mit dem aktuell aktiven Tab und sendet dann eine Nachricht mit dem `Port`, der von `connect()` zurückgegeben wird:

```js
function connectToTab(tabs) {
  if (tabs.length > 0) {
    let examplePort = browser.tabs.connect(tabs[0].id, {
      name: "tabs-connect-example",
    });
    examplePort.postMessage({ greeting: "Hi from background script" });
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingActive = browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  gettingActive.then(connectToTab, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-connect) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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

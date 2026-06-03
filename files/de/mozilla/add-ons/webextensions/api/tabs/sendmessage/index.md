---
title: tabs.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
l10n:
  sourceCommit: ecdff1d43aa1606d354cafc6eadf4b0c33e16352
---

Sendet eine einzelne Nachricht von den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten, wie z.B. Popup-Skripten oder Optionsseitenskripten) an beliebige [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) oder Erweiterungsseiten/Iframes, die zur Erweiterung gehören und im angegebenen Tab laufen.

Die Nachricht wird im Kontext der Erweiterung von allen Listenern des {{WebExtAPIRef("runtime.onMessage")}}-Ereignisses empfangen. Listener können optional etwas als Antwort an den Absender zurücksenden.

Dies ist eine asynchrone Funktion, die ein {{jsxref("Promise")}} zurückgibt.

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz verwenden, um Nachrichten auszutauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

## Syntax

```js-nolint
const sending = browser.tabs.sendMessage(
  tabId,     // integer
  message,   // any
  options    // optional object
)
```

### Parameter

- `tabId`
  - : `integer`. ID des Tabs, dessen Content-Skripten wir eine Nachricht senden möchten.
- `message`
  - : `any`. Ein Objekt, das serialisierbar ist (siehe [Datenklonierungsalgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
- `options` {{optional_inline}}
  - : `object`.
    - `documentId` {{optional_inline}}
      - : `string`. Sendet eine Nachricht an ein bestimmtes Dokument, das durch `documentId` identifiziert wird, anstatt an alle Frames im Tab.
    - `frameId` {{optional_inline}}
      - : `integer`. Sendet die Nachricht an einen bestimmten Frame, der durch `frameId` identifiziert wird, anstatt an alle Frames im Tab. Ob das Content-Skript in allen Frames ausgeführt wird, hängt von der `all_frames`-Einstellung im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Abschnitt von `manifest.json` ab.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Antwortobjekt erfüllt wird, das vom Handler der Nachricht im Content-Skript gesendet wurde, oder ohne Argumente, wenn das Content-Skript keine Antwort gesendet hat.

Wenn ein Fehler beim Verbinden mit dem angegebenen Tab oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn mehrere Frames auf die Nachricht antworten, wird das Promise mit einer der Antworten gelöst.

## Beispiele

Hier ist ein Beispiel für ein Hintergrundskript, das eine Nachricht an die Content-Skripte sendet, die im aktiven Tab laufen, wenn der Benutzer auf die Browser-Aktion klickt. Das Hintergrundskript erwartet auch, dass das Content-Skript eine Antwort sendet:

```js
// background-script.js
"use strict";

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (const tab of tabs) {
    browser.tabs
      .sendMessage(tab.id, { greeting: "Hi from background script" })
      .then((response) => {
        console.log("Message from the content script:");
        console.log(response.response);
      })
      .catch(onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(sendMessageToTabs)
    .catch(onError);
});
```

Hier ist das entsprechende Content-Skript:

```js
// content-script.js
"use strict";

browser.runtime.onMessage.addListener((request) => {
  console.log("Message from the background script:");
  console.log(request.greeting);
  return Promise.resolve({ response: "Hi from content script" });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-sendMessage)-API von Chromium. Diese Dokumentation wird aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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

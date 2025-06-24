---
title: runtime.connect()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/connect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Stellen Sie eine Verbindung zwischen verschiedenen Kontexten innerhalb der Erweiterung her.

Sie können dies aufrufen:

- in den Inhalteskripten einer Erweiterung, um eine Verbindung zu den Hintergrundskripten der Erweiterung (oder ähnlich privilegierten Skripten, wie z. B. Pop-up-Skripten oder Optionen-Seitenskripten) herzustellen.
- in den Hintergrundskripten einer Erweiterung (oder ähnlich privilegierten Skripten), um eine Verbindung zu einer anderen Erweiterung herzustellen.

Beachten Sie, dass Sie diese Funktion nicht nutzen können, um eine Erweiterung mit ihren Inhalteskripten zu verbinden. Dazu verwenden Sie {{WebExtAPIRef('tabs.connect()')}}.

Standardmäßig ermöglicht diese Verbindung der Erweiterung, Nachrichten mit sich selbst oder einer anderen Erweiterung (wenn `extensionId` angegeben ist) auszutauschen. Allerdings kann der [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) Manifest-Schlüssel verwendet werden, um die Kommunikation auf bestimmte Erweiterungen zu beschränken und Kommunikation mit Websites zu ermöglichen. Verbindungen innerhalb der Erweiterung lösen das {{WebExtAPIRef('runtime.onConnect')}}-Ereignis aus, Verbindungen von anderen Erweiterungen oder Webseiten lösen das {{WebExtAPIRef('runtime.onConnectExternal')}}-Ereignis aus.

## Syntax

```js-nolint
let port = browser.runtime.connect(
  extensionId, // optional string
  connectInfo  // optional object
)
```

### Parameter

- `extensionId` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, zu der verbunden werden soll. Wenn das Ziel explizit eine ID mit Hilfe des [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssels in der manifest.json gesetzt hat, dann sollte `extensionId` diesen Wert haben. Andernfalls sollte es die für das Ziel generierte ID sein.
- `connectInfo` {{optional_inline}}
  - : `object`. Details der Verbindung:
    - `name` {{optional_inline}}
      - : `string`. Wird in {{WebExtAPIRef("runtime.onConnect")}} übermittelt für Prozesse, die auf das Verbindungsevent hören.
    - `includeTlsChannelId` {{optional_inline}}
      - : `boolean`. Ob die TLS-Kanal-ID in {{WebExtAPIRef("runtime.onConnectExternal")}} übermittelt wird für Prozesse, die auf das Verbindungsevent hören.

### Rückgabewert

{{WebExtAPIRef('runtime.Port')}}. Port, über den Nachrichten gesendet und empfangen werden können. Das `onDisconnect`-Ereignis des Ports wird ausgelöst, wenn die Erweiterung nicht existiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Inhalteskript:

- verbindet sich mit dem Hintergrundskript und speichert den `Port` in einer Variablen namens `myPort`.
- hört auf Nachrichten bei `myPort` und protokolliert sie.
- sendet Nachrichten an das Hintergrundskript, unter Verwendung von `myPort`, wenn der Benutzer das Dokument anklickt.

```js
// content-script.js

let myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "hello from content script" });

myPort.onMessage.addListener((m) => {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

Das entsprechende Hintergrundskript:

- hört auf Verbindungsversuche vom Inhalteskript.
- Wenn es einen Verbindungsversuch empfängt:

  - speichert es den Port in einer Variablen namens `portFromCS`.
  - sendet dem Inhalteskript eine Nachricht unter Verwendung des Ports.
  - beginnt, auf Nachrichten zu hören, die über den Port empfangen werden, und protokolliert sie.

- sendet Nachrichten an das Inhalteskript, unter Verwendung von `portFromCS`, wenn der Benutzer die Browseraktion der Erweiterung anklickt.

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hi there content script!" });
  portFromCS.onMessage.addListener((m) => {
    console.log("In background script, received message from content script");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({ greeting: "they clicked the button!" });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-connect)-API von Chromium. Diese Dokumentation ist abgeleitet aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

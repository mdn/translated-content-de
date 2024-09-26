---
title: runtime.onConnectExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onConnectExternal
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Erweiterung eine Verbindungsanfrage von einer anderen Erweiterung erhält.

Um eine Nachricht zu senden, die vom `onConnectExternal` Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.connect()")}} und übergeben Sie die ID des Empfängers im `extensionId` Parameter.

Dem Listener wird ein {{WebExtAPIRef('runtime.Port')}} Objekt übergeben, das er verwenden kann, um Nachrichten zu senden und zu empfangen. Das `Port` Objekt enthält auch eine `sender` Eigenschaft, die ein {{WebExtAPIRef("runtime.MessageSender")}} Objekt ist und das der Empfänger zur Überprüfung der Absender-ID verwenden kann.

## Syntax

```js-nolint
browser.runtime.onConnectExternal.addListener(listener)
browser.runtime.onConnectExternal.removeListener(listener)
browser.runtime.onConnectExternal.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das `listener` Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `function`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `port`
      - : Ein {{WebExtAPIRef('runtime.Port')}} Objekt, das das aktuelle Skript mit der anderen Erweiterung verbindet, mit der es sich verbindet.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem Beispiel verbindet sich die Erweiterung Hansel mit der Erweiterung Gretel:

```js
console.log("connecting to Gretel");
let myPort = browser.runtime.connect("gretel@mozilla.org");

myPort.onMessage.addListener((message) => {
  console.log(`From Gretel: ${message.content}`);
});

browser.browserAction.onClicked.addListener(() => {
  myPort.postMessage({ content: "Hello from Hansel" });
});
```

Gretel hört auf die Verbindung und überprüft, ob der Absender tatsächlich Hansel ist:

```js
let portFromHansel;

browser.runtime.onConnectExternal.addListener((port) => {
  console.log(port);
  if (port.sender.id === "hansel@mozilla.org") {
    console.log("connection attempt from Hansel");
    portFromHansel = port;
    portFromHansel.onMessage.addListener((message) => {
      console.log(`From Hansel: ${message.content}`);
    });
  }
});

browser.browserAction.onClicked.addListener(() => {
  portFromHansel.postMessage({ content: "Message from Gretel" });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onConnectExternal) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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
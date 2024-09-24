---
title: runtime.connectNative()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/connectNative
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verbindet die Erweiterung mit einer nativen Anwendung auf dem Computer des Nutzers. Dies nimmt den Namen einer nativen Anwendung als Parameter entgegen. Es startet die native Anwendung und gibt ein {{WebExtAPIRef("runtime.Port")}}-Objekt an den Aufrufer zurück. Der Aufrufer kann dann den `Port` nutzen, um Nachrichten mit der nativen Anwendung auszutauschen, indem er `Port.postMessage()` und `port.onMessage` verwendet. Die native Anwendung wird ausgeführt, bis sie sich selbst beendet, der Aufrufer `Port.disconnect()` aufruft oder die Seite, die den `Port` erstellt hat, zerstört wird. Sobald der `Port` getrennt wird, gibt der Browser dem Prozess ein paar Sekunden Zeit, um sich ordnungsgemäß zu beenden, und beendet ihn dann, falls er nicht beendet wurde.

Für weitere Informationen siehe [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).

## Syntax

```js-nolint
let port = browser.runtime.connectNative(
  application // string
)
```

### Parameter

- `application`
  - : `string`. Der Name der nativen Anwendung, zu der eine Verbindung hergestellt werden soll. Dies muss mit der "name"-Eigenschaft in der [Manifestdatei der nativen Anwendung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging#app_manifest) übereinstimmen.

### Rückgabewert

Ein {{WebExtAPIRef('runtime.Port')}}-Objekt. Der Port, den der Aufrufer verwenden kann, um Nachrichten mit der nativen Anwendung auszutauschen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel verbindet sich mit der nativen Anwendung "ping_pong" und beginnt, Nachrichten von ihr zu empfangen. Es sendet der nativen Anwendung auch eine Nachricht, wenn der Benutzer auf ein Browser-Aktionssymbol klickt:

```js
/*
Beim Start verbinden mit der "ping_pong"-App.
*/
let port = browser.runtime.connectNative("ping_pong");

/*
Nachrichten von der App empfangen.
*/
port.onMessage.addListener((response) => {
  console.log(`Received: ${response}`);
});

/*
Beim Klick auf die Browser-Aktion, der App eine Nachricht senden.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-connectNative)-API von Chromium. Diese Dokumentation leitet sich ab von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

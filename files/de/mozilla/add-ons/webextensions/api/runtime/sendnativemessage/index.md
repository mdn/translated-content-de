---
title: runtime.sendNativeMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Sendet eine einzelne Nachricht von einer Erweiterung an eine native Anwendung.

Dies erfordert zwei obligatorische Parameter: den Namen der nativen Anwendung und ein JSON-Objekt, das die Nachricht darstellt, die gesendet werden soll. Der Browser startet die native Anwendung und übermittelt die Nachricht.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt. Die erste Nachricht, die von der nativen Anwendung gesendet wird, wird als Antwort auf den Aufruf von `sendNativeMessage()` behandelt, und das Promise wird mit dieser Nachricht als Parameter erfüllt. Beachten Sie, dass Sie {{WebExtAPIRef("runtime.onMessage")}} nicht verwenden können, um Antworten von der Anwendung zu erhalten: Sie müssen stattdessen die Callback-Funktion verwenden.

Eine neue Instanz der Anwendung wird bei jedem Aufruf von `runtime.sendNativeMessage()` gestartet. Der Browser beendet die native Anwendung, nachdem er eine Antwort erhalten hat. Um eine native Anwendung zu beenden, wird der Browser die Verbindung schließen, dem Prozess ein paar Sekunden Zeit geben, sich ordnungsgemäß zu beenden, und ihn dann beenden, falls er nicht gestoppt wurde.

Für weitere Informationen siehe [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).

## Syntax

```js-nolint
let sending = browser.runtime.sendNativeMessage(
  application,             // string
  message                  // object
)
```

### Parameter

- `application`
  - : `string`. Der Name der nativen Anwendung. Dieser muss mit der "name"-Eigenschaft in der [Manifest-Datei der nativen Anwendung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging#app_manifest) übereinstimmen.
- `message`
  - : `object`. Ein JSON-Objekt, das an die native Anwendung gesendet wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Absender eine Antwort gesendet hat, wird dieses mit der Antwort als JSON-Objekt erfüllt. Andernfalls wird es ohne Argumente erfüllt. Tritt ein Fehler beim Verbinden zur nativen Anwendung auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Hier ist ein Hintergrundskript, das eine "ping"-Nachricht an die "ping_pong"-App sendet und die Antwort protokolliert, wann immer der Benutzer auf die Browser-Aktion klickt:

```js
function onResponse(response) {
  console.log(`Received ${response}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
Bei einem Klick auf die Browser-Aktion wird der App eine Nachricht gesendet.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  let sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendNativeMessage) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

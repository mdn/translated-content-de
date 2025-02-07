---
title: runtime.onMessageExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal
l10n:
  sourceCommit: 73654599ba40ad5c0de8e2fa06ec354734203ad5
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um Nachrichten von anderen Erweiterungen oder Webseiten zu empfangen.

Standardmäßig kann eine Erweiterung Nachrichten von jeder anderen Erweiterung empfangen. Der [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable)-Manifest-Schlüssel kann jedoch verwendet werden, um die Kommunikation auf bestimmte Erweiterungen zu beschränken und die Kommunikation mit Webseiten zu ermöglichen.

Um eine Nachricht zu senden, die vom `onMessageExternal`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}}, wobei die ID des Empfängers in der `extensionId`-Parameter übergeben wird.

Zusammen mit der Nachricht erhält der Listener folgende Parameter:

- ein `sender`-Objekt mit Details über den Absender der Nachricht.
- eine `sendResponse`-Funktion, die der Listener verwenden kann, um eine Antwort an den Absender zu senden.

Diese API kann nicht in einem Content-Skript verwendet werden.

Weitere Informationen zum Empfangen von Nachrichten und zum Senden von Antworten sowie Beispiele für die verschiedenen Möglichkeiten, Antworten zu senden, finden Sie unter {{WebExtAPIRef("runtime.onMessage")}}.

## Syntax

```js-nolint
browser.runtime.onMessageExternal.addListener()
browser.runtime.onMessageExternal.removeListener(listener)
browser.runtime.onMessageExternal.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er registriert ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält folgende Argumente:

    - `message`
      - : `object`. Die Nachricht. Dies ist ein JSON-serialisierbares Objekt.
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht repräsentiert.
    - `sendResponse`

      - : Eine Funktion, die höchstens einmal aufgerufen werden kann, um eine Antwort auf die Nachricht zu senden. Die Funktion nimmt ein Argument an, das ein JSON-serialisierbares Objekt ist. Dieses Argument wird an den Absender der Nachricht zurückgegeben.

        Falls Sie mehr als einen `onMessageExternal`-Listener im selben Dokument haben, kann nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse()` auf, bevor die Listener-Funktion zurückgibt.

        Um eine Antwort asynchron zu senden, verwenden Sie eine der folgenden Optionen:

        - Geben Sie ein {{jsxref("Promise")}} von der Listener-Funktion zurück und lösen Sie das Promise, wenn die Antwort bereit ist. Dies ist der bevorzugte Ansatz.
        - Behalten Sie eine Referenz auf das Argument `sendResponse()` und geben Sie `true` von der Listener-Funktion zurück. Sie rufen `sendResponse()` auf, nachdem die Listener-Funktion zurückgegeben hat.

          > [!NOTE]
          > Ein `Promise` als Rückgabewert wird in Chrome erst unterstützt, wenn [Chrome Bug 1185241](https://crbug.com/1185241) gelöst ist. Alternativ geben Sie `true` zurück und verwenden `sendResponse` [wie unter `runtime.onMessage` beschrieben](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

## Beispiele

In diesem Beispiel sendet die Erweiterung "blue\@mozilla.org" eine Nachricht an die Erweiterung "red\@mozilla.org":

```js
// sender: browser.runtime.id === "blue@mozilla.org"

// Send a message to the extension whose ID is "red@mozilla.org"
browser.runtime.sendMessage("red@mozilla.org", "my message");
```

```js
// recipient: browser.runtime.id === "red@mozilla.org"

function handleMessage(message, sender) {
  // check that the message is from "blue@mozilla.org"
  if (sender.id === "blue@mozilla.org") {
    // process message
  }
}

browser.runtime.onMessageExternal.addListener(handleMessage);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessageExternal)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

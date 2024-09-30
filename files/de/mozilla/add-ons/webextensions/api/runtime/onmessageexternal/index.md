---
title: runtime.onMessageExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um Nachrichten von anderen Erweiterungen oder Webseiten zu empfangen.

Standardmäßig kann eine Erweiterung Nachrichten von jeder anderen Erweiterung empfangen. Der Schlüssel [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) im Manifest kann jedoch verwendet werden, um die Kommunikation auf bestimmte Erweiterungen zu beschränken und die Kommunikation mit Webseiten zu ermöglichen.

Um eine Nachricht zu senden, die vom `onMessageExternal`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}}, und übergeben Sie die ID des Empfängers im `extensionId` Parameter.

Zusammen mit der Nachricht selbst wird dem Listener übergeben:

- ein `sender`-Objekt, das Details über den Nachrichtenabsender liefert
- eine `sendResponse`-Funktion, die der Listener verwenden kann, um eine Antwort an den Absender zurückzusenden.

Diese API kann nicht in einem Content-Skript verwendet werden.

## Syntax

```js-nolint
browser.runtime.onMessageExternal.addListener()
browser.runtime.onMessageExternal.removeListener(listener)
browser.runtime.onMessageExternal.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er hörend ist, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `message`
      - : `object`. Die Nachricht selbst. Dies ist ein JSON-fähiges Objekt.
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}} Objekt, das den Absender der Nachricht repräsentiert.
    - `sendResponse`

      - : Eine Funktion, die höchstens einmal aufgerufen werden kann, um eine Antwort auf die Nachricht zu senden. Die Funktion nimmt ein einzelnes Argument an, das ein beliebiges JSON-fähiges Objekt sein kann. Dieses Argument wird an den Nachrichtenabsender zurückgegeben.

        Wenn Sie mehr als einen `onMessageExternal`-Listener im selben Dokument haben, kann nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse` auf, bevor die Listener-Funktion zurückkehrt. Um eine Antwort asynchron zu senden, tun Sie eines der folgenden:

        - Behalten Sie eine Referenz auf das `sendResponse`-Argument und geben Sie `true` aus der Listener-Funktion zurück. Sie können dann `sendResponse` aufrufen, nachdem die Listener-Funktion zurückgekehrt ist.
        - Geben Sie ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) von der Listener-Funktion zurück und lösen Sie das Promise, wenn die Antwort bereit ist.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessageExternal) API von Chromium. Diese Dokumentation ist aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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

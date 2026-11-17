---
title: runtime.onMessageExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal
l10n:
  sourceCommit: 7b9d2e318ce7478530f4f31bdc24e36fcc6c41fa
---

Verwenden Sie dieses Ereignis, um auf Nachrichten von anderen Erweiterungen oder Webseiten zu warten.

Standardmäßig kann eine Erweiterung Nachrichten von jeder anderen Erweiterung empfangen. Mit dem Manifest-Schlüssel [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) können Sie die Kommunikation jedoch auf bestimmte Erweiterungen beschränken und die Kommunikation mit Websites ermöglichen.

Um eine Nachricht zu senden, die vom `onMessageExternal`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}} und übergeben Sie die ID des Empfängers im Parameter `extensionId`.

Zusammen mit der Nachricht werden dem Listener folgende Argumente übergeben:

- ein `sender`-Objekt mit Informationen zum Absender der Nachricht.
- eine `sendResponse`-Funktion, mit der der Listener dem Absender antworten kann.

Diese API kann nicht in einem Content Script verwendet werden.

Weitere Informationen zum Empfangen von Nachrichten und Senden von Antworten sowie Beispiele für die verschiedenen Antwortmöglichkeiten finden Sie unter {{WebExtAPIRef("runtime.onMessage")}}.

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
  - : Entfernt den `listener`-Listener von diesem Ereignis.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn dies der Fall ist, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `message`
      - : `object`. Die Nachricht. Dies ist ein Objekt, das sich in JSON umwandeln lässt.
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht repräsentiert.
    - `sendResponse`
      - : Eine Funktion, die höchstens einmal aufgerufen werden kann, um auf die Nachricht zu antworten. Die Funktion nimmt ein Argument entgegen: ein Objekt, das sich in JSON umwandeln lässt. Dieses Argument wird an den Absender der Nachricht zurückgegeben.

        Wenn Sie mehrere `onMessageExternal`-Listener im selben Dokument haben, kann nur einer davon eine Antwort senden.

        Um synchron zu antworten, rufen Sie `sendResponse()` auf, bevor die Listener-Funktion zurückkehrt.

        Um asynchron zu antworten, verwenden Sie eine der folgenden Möglichkeiten:
        - Geben Sie ein {{jsxref("Promise")}} aus der Listener-Funktion zurück und lösen Sie das Promise auf, sobald die Antwort bereit ist. Dies ist die bevorzugte Vorgehensweise.
        - Bewahren Sie eine Referenz auf das Argument `sendResponse()` auf und geben Sie `true` aus der Listener-Funktion zurück. Rufen Sie anschließend `sendResponse()` auf, nachdem die Listener-Funktion zurückgekehrt ist.

          > [!NOTE]
          > Chrome unterstützt Promise als Rückgabewert ab Chrome 148 oder ab Chrome 152 bei Erweiterungen mit einer DevTools-Seite. Geben Sie für frühere Chrome-Versionen `true` zurück und verwenden Sie `sendResponse`, [wie für `runtime.onMessage` beschrieben](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

## Beispiele

In diesem Beispiel sendet die Erweiterung „blue\@mozilla.org“ eine Nachricht an die Erweiterung „red\@mozilla.org“:

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
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessageExternal)-API von Chromium. Diese Dokumentation wurde aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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

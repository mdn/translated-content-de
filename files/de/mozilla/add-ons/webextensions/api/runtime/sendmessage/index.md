---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Sendet eine einzelne Nachricht an Ereignis-Listener innerhalb Ihrer Erweiterung oder einer anderen Erweiterung.

Wenn Sie an Ihre eigene Erweiterung senden, lassen Sie das Argument `extensionId` weg. Das Ereignis {{WebExtAPIRef('runtime.onMessage')}} wird auf jeder Seite Ihrer Erweiterung ausgelöst, außer im Frame, der `runtime.sendMessage` aufgerufen hat.

Wenn Sie an eine andere Erweiterung senden, geben Sie das `extensionId`-Argument an, das auf die ID der anderen Erweiterung gesetzt ist. {{WebExtAPIRef('runtime.onMessageExternal')}} wird in der anderen Erweiterung ausgelöst. Standardmäßig kann Ihre Erweiterung Nachrichten mit sich selbst und jeder anderen Erweiterung (definiert durch `extensionId`) austauschen. Der [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) Manifest-Schlüssel kann jedoch verwendet werden, um die Kommunikation auf bestimmte Erweiterungen zu beschränken.

Erweiterungen können mit dieser Methode keine Nachrichten an Inhalts-Skripte senden. Um Nachrichten an Inhalts-Skripte zu senden, verwenden Sie {{WebExtAPIRef('tabs.sendMessage')}}.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz zum Austausch von Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden.

## Syntax

```js-nolint
let sending = browser.runtime.sendMessage(
  extensionId,             // optional string
  message,                 // any
  options                  // optional object
)
```

### Parameter

- `extensionId` {{optional_inline}}

  - : `string`. Die ID der Erweiterung, an die die Nachricht gesendet werden soll. Geben Sie dies an, um die Nachricht an eine andere Erweiterung zu senden. Wenn der beabsichtigte Empfänger eine ID explizit mit dem [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel in manifest.json gesetzt hat, sollte `extensionId` diesen Wert haben. Andernfalls sollte es die ID haben, die für den beabsichtigten Empfänger generiert wurde.

    Wenn `extensionId` weggelassen wird, wird die Nachricht an Ihre eigene Erweiterung gesendet.

- `message`
  - : `any`. Ein Objekt, das strukturiert klonbar serialisiert werden kann (siehe [Datenklonierungsalgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
- `options` {{optional_inline}}

  - : `object`.

    - `includeTlsChannelId` {{optional_inline}}

      - : `boolean`. Ob die TLS-Kanal-ID in {{WebExtAPIRef('runtime.onMessageExternal')}} für Prozesse übergeben wird, die auf das Verbindungsevent hören.

        Diese Option wird nur in Chromium-basierten Browsern unterstützt.

Je nach den gegebenen Argumenten ist diese API manchmal mehrdeutig. Die folgenden Regeln werden verwendet:

- **wenn ein Argument gegeben ist**, ist es die Nachricht, die gesendet werden soll, und die Nachricht wird intern gesendet.
- **wenn zwei Argumente gegeben sind:**

  - Die Argumente werden als `(message, options)` interpretiert, und die Nachricht wird intern gesendet, wenn das zweite Argument eines der folgenden ist:

    1. ein gültiges `options` Objekt (das bedeutet, es ist ein Objekt, das nur die vom Browser unterstützten Eigenschaften von `options` enthält)
    2. null
    3. undefined

  - Andernfalls werden die Argumente als `(extensionId, message)` interpretiert. Die Nachricht wird an die durch `extensionId` identifizierte Erweiterung gesendet.

- **wenn drei Argumente gegeben sind**, werden die Argumente als `(extensionId, message, options)` interpretiert. Die Nachricht wird an die durch `extensionId` identifizierte Erweiterung gesendet.

Beachten Sie, dass vor Firefox 55 die Regeln im 2-Argument-Fall anders waren. Nach den alten Regeln wurde, wenn das erste Argument ein String war, es als `extensionId` behandelt, mit der Nachricht als zweites Argument. Das bedeutete, dass, wenn Sie `sendMessage()` mit Argumenten wie `("my-message", {})` aufriefen, es eine leere Nachricht an die durch "my-message" identifizierte Erweiterung senden würde. Nach den neuen Regeln würden Sie mit diesen Argumenten die Nachricht "my-message" intern senden, mit einem leeren Options-Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Empfänger eine Antwort gesendet hat, wird dies mit der Antwort erfüllt. Ansonsten wird es ohne Argumente erfüllt. Wenn ein Fehler beim Verbinden mit der Erweiterung auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Hier ist ein Inhalts-Skript, das eine Nachricht an das Hintergrundskript sendet, wenn der Benutzer das Inhaltsfenster anklickt. Die Nutzlast der Nachricht ist `{greeting: "Greeting from the content script"}`, und der Sender erwartet auch, eine Antwort zu erhalten, die in der Funktion `handleResponse` verarbeitet wird:

```js
// content-script.js

function handleResponse(message) {
  console.log(`Message from the background script: ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  const sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);
```

Das entsprechende Hintergrundskript sieht so aus:

```js
// background-script.js
function handleMessage(request, sender, sendResponse) {
  console.log(`A content script sent a message: ${request.greeting}`);
  sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

> [!NOTE]
> Anstatt `sendResponse()` zu verwenden, wird für Firefox-Add-ons ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) als empfohlener Ansatz zurückgegeben.
> Beispiele für die Verwendung eines Promise sind im [Example-Bereich](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) des {{WebExtAPIRef('runtime.onMessage')}} Listeners verfügbar.

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendMessage) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Sendet eine einzelne Nachricht an Ereignis-Listener innerhalb Ihrer Erweiterung oder einer anderen Erweiterung.

Wenn Sie an Ihre eigene Erweiterung senden, lassen Sie das Argument `extensionId` weg. Das {{WebExtAPIRef('runtime.onMessage')}}-Ereignis wird auf jeder Seite Ihrer Erweiterung ausgelöst, mit Ausnahme des Frames, der `runtime.sendMessage` aufgerufen hat.

Wenn Sie an eine andere Erweiterung senden, geben Sie das Argument `extensionId` an, das auf die ID der anderen Erweiterung gesetzt ist. In der anderen Erweiterung wird {{WebExtAPIRef('runtime.onMessageExternal')}} ausgelöst. Standardmäßig kann Ihre Erweiterung Nachrichten mit sich selbst und jeder anderen Erweiterung austauschen (definiert durch `extensionId`). Das Manifest-Schlüsselwort [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) kann jedoch verwendet werden, um die Kommunikation auf spezifische Erweiterungen zu beschränken.

Erweiterungen können mit dieser Methode keine Nachrichten an Inhaltsskripte senden. Um Nachrichten an Inhaltsskripte zu senden, verwenden Sie {{WebExtAPIRef('tabs.sendMessage')}}.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz für den Nachrichtenaustausch verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

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

  - : `string`. Die ID der Erweiterung, an die die Nachricht gesendet werden soll. Schließen Sie dies ein, um die Nachricht an eine andere Erweiterung zu senden. Wenn der beabsichtigte Empfänger explizit eine ID mittels des [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)-Schlüssels in manifest.json festgelegt hat, sollte `extensionId` diesen Wert haben. Andernfalls sollte es die für den beabsichtigten Empfänger generierte ID haben.

    Wenn `extensionId` weggelassen wird, wird die Nachricht an Ihre Erweiterung gesendet.

- `message`
  - : `any`. Ein Objekt, das strukturiert klonbar serialisierbar ist (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
- `options` {{optional_inline}}

  - : `object`.

    - `includeTlsChannelId` {{optional_inline}}

      - : `boolean`. Ob die TLS-Kanal-ID in {{WebExtAPIRef('runtime.onMessageExternal')}} für Prozesse übergeben wird, die auf das Verbindungsevent lauschen.

        Diese Option wird nur in Chromium-basierten Browsern unterstützt.

Abhängig von den gegebenen Argumenten ist diese API manchmal mehrdeutig. Die folgenden Regeln werden verwendet:

- **wenn ein Argument gegeben ist**, ist es die Nachricht, die gesendet werden soll, und die Nachricht wird intern gesendet.
- **wenn zwei Argumente gegeben sind:**

  - die Argumente werden interpretiert als `(message, options)`, und die Nachricht wird intern gesendet, wenn es sich beim zweiten Argument um eines der folgenden handelt:

    1. ein gültiges `options`-Objekt (d.h. es ist ein Objekt, das nur die vom Browser unterstützten Eigenschaften von `options` enthält)
    2. null
    3. undefined

  - andernfalls werden die Argumente als `(extensionId, message)` interpretiert. Die Nachricht wird an die durch `extensionId` identifizierte Erweiterung gesendet.

- **wenn drei Argumente gegeben sind**, werden die Argumente als `(extensionId, message, options)` interpretiert. Die Nachricht wird an die durch `extensionId` identifizierte Erweiterung gesendet.

Beachten Sie, dass vor Firefox 55 die Regeln im Fall von zwei Argumenten anders waren. Nach den alten Regeln, wenn das erste Argument ein String war, wurde es als `extensionId` behandelt, wobei die Nachricht das zweite Argument war. Das bedeutete, dass wenn Sie `sendMessage()` mit Argumenten wie `("my-message", {})` aufriefen, dann würde eine leere Nachricht an die durch "my-message" identifizierte Erweiterung gesendet werden. Nach den neuen Regeln, würden Sie mit diesen Argumenten die Nachricht "my-message" intern senden, mit einem leeren options-Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Empfänger eine Antwort gesendet hat, wird dieses mit der Antwort erfüllt. Andernfalls wird es ohne Argumente erfüllt. Wenn ein Fehler beim Verbinden zur Erweiterung auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Hier ist ein Inhaltsskript, das eine Nachricht an das Hintergrundskript sendet, wenn der Benutzer auf das Inhaltsfenster klickt. Die Nutzdaten der Nachricht sind `{greeting: "Greeting from the content script"}`, und der Sender erwartet auch eine Antwort, die in der Funktion `handleResponse` verarbeitet wird:

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
> Anstelle von `sendResponse()` zu verwenden, ist das Zurückgeben eines [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) der empfohlene Ansatz für Firefox-Add-ons. Beispiele mit einem Promise sind im [Beispiele-Abschnitt](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) des {{WebExtAPIRef('runtime.onMessage')}}-Listeners verfügbar.

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendMessage)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

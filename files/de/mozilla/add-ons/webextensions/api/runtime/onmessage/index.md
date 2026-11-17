---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
l10n:
  sourceCommit: 7b9d2e318ce7478530f4f31bdc24e36fcc6c41fa
---

Verwenden Sie dieses Ereignis, um auf Nachrichten aus einem anderen Teil Ihrer Erweiterung zu reagieren.

Einige Anwendungsbeispiele:

- **In einem [Content-Script](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)** auf Nachrichten von einem [Background-Script](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) reagieren.
- **In einem Background-Script** auf Nachrichten von einem Content-Script reagieren.
- **In einem Script einer [Optionsseite oder eines Popups](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#sidebars_popups_and_options_pages)** auf Nachrichten von einem Background-Script reagieren.
- **In einem Background-Script** auf Nachrichten von einer Optionsseite oder einem Popup-Script reagieren.
- **In einem Script auf einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)** auf Nachrichten reagieren, die die Ausführung von Code in den Scripts der Seite anfordern.

Um eine Nachricht zu senden, die vom `onMessage()`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}} oder – um eine Nachricht an ein Content-Script zu senden – {{WebExtAPIRef("tabs.sendMessage()")}}.

> [!NOTE]
> Vermeiden Sie es, mehrere `onMessage()`-Listener für denselben Nachrichtentyp zu erstellen, da die Reihenfolge, in der mehrere Listener aufgerufen werden, nicht garantiert ist.
>
> Wenn Sie sicherstellen möchten, dass eine Nachricht an einen bestimmten Endpunkt zugestellt wird, verwenden Sie den [verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

Neben der Nachricht selbst erhält der Listener:

- ein `sender`-Objekt mit Informationen über den Absender der Nachricht.
- eine `sendResponse()`-Funktion, mit der eine Antwort an den Absender gesendet werden kann.

Sie können synchron auf die Nachricht antworten, indem Sie die `sendResponse()`-Funktion innerhalb Ihres Listeners aufrufen. Siehe das [Beispiel zum Senden einer synchronen Antwort](#eine_synchrone_antwort_senden).

Für eine asynchrone Antwort gibt es zwei Möglichkeiten:

- Geben Sie im Event-Listener `true` zurück. Dadurch bleibt die `sendResponse()`-Funktion auch nach der Rückkehr des Listeners gültig, sodass Sie sie später aufrufen können. Siehe das [Beispiel zum Senden einer asynchronen Antwort mit `sendResponse`](#eine_asynchrone_antwort_mit_sendresponse_senden).
  > [!WARNING]
  > Stellen Sie der Funktion kein `async` voran. Dadurch ändert sich die Bedeutung hin zum [Senden einer asynchronen Antwort mit einem Promise](#eine_asynchrone_antwort_mit_einem_promise_senden), was praktisch `sendResponse(true)` entspricht.
- Geben Sie im Event-Listener ein `Promise` zurück und erfüllen Sie es, sobald die Antwort vorliegt (oder lehnen Sie es im Fehlerfall ab). Siehe das [Beispiel zum Senden einer asynchronen Antwort mit einem Promise](#eine_asynchrone_antwort_mit_einem_promise_senden).

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden.

## Syntax

```js-nolint
browser.runtime.onMessage.addListener(listener)
browser.runtime.onMessage.removeListener(listener)
browser.runtime.onMessage.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` bezeichnet den zu entfernenden Listener.
- `hasListener(listener)`
  - : Prüft, ob mindestens ein Listener für dieses Ereignis registriert ist. Gibt `true` zurück, wenn der angegebene Listener registriert ist, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die beim Auftreten dieses Ereignisses aufgerufen wird. Ihr werden folgende Argumente übergeben:
    - `message`
      - : `object`. Die Nachricht. Dies ist ein serialisierbares Objekt (siehe [Algorithmus zum Klonen von Daten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht repräsentiert.
    - `sendResponse`
      - : Eine Funktion, die höchstens einmal aufgerufen werden kann, um eine Antwort auf `message` zu senden. Die Funktion nimmt ein Argument entgegen: ein beliebiges serialisierbares Objekt (siehe [Algorithmus zum Klonen von Daten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)). Dieses Argument wird an den Absender der Nachricht zurückgegeben.

        Wenn Sie im selben Dokument mehrere `onMessage()`-Listener haben, kann nur einer davon eine Antwort senden.

        Um synchron zu antworten, rufen Sie `sendResponse()` auf, bevor die Listener-Funktion zurückkehrt.

        Um asynchron zu antworten, verwenden Sie eine dieser Möglichkeiten:
        - Geben Sie in der Listener-Funktion ein {{jsxref("Promise")}} zurück und erfüllen Sie das Promise, sobald die Antwort bereitsteht. Dies ist der bevorzugte Ansatz.
        - Behalten Sie eine Referenz auf das Argument `sendResponse()` und geben Sie in der Listener-Funktion `true` zurück. Rufen Sie `sendResponse()` anschließend auf, nachdem die Listener-Funktion zurückgekehrt ist.

          > [!NOTE]
          > Chrome unterstützt Promise als Rückgabewert ab Chrome 148 beziehungsweise ab Chrome 152 für Erweiterungen mit einer DevTools-Seite. Geben Sie bei früheren Chrome-Versionen [true zurück und verwenden Sie sendResponse](#eine_asynchrone_antwort_mit_sendresponse_senden).

    Die Funktion `listener` kann entweder einen booleschen Wert oder ein {{jsxref("Promise")}} zurückgeben.

    > [!NOTE]
    > Wenn Sie `addListener()` eine async-Funktion übergeben, gibt der Listener für jede empfangene Nachricht ein Promise zurück. Dadurch können andere Listener nicht antworten:
    >
    > ```js example-bad
    > // don't do this
    > browser.runtime.onMessage.addListener(async (data, sender) => {
    >   if (data.type === "handle_me") {
    >     return "done";
    >   }
    > });
    > ```
    >
    > Angenommen, der Listener soll nur auf Nachrichten eines bestimmten Typs antworten. In diesem Fall müssen Sie ihn als nicht-asynchrone Funktion definieren und nur für die Nachrichten, auf die er antworten soll, ein Promise zurückgeben. Andernfalls geben Sie false oder undefined zurück:
    >
    > ```js example-good
    > browser.runtime.onMessage.addListener((data, sender) => {
    >   if (data.type === "handle_me") {
    >     return Promise.resolve("done");
    >   }
    >   return false;
    > });
    > ```

## Beispiele

### Einfaches Beispiel

Dieses Content-Script reagiert auf Klickereignisse auf der Webseite. Wenn auf einen Link geklickt wird, sendet es eine Nachricht mit der Ziel-URL an die Background-Seite:

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName !== "A") {
    return;
  }
  browser.runtime.sendMessage({ url: e.target.href });
}
```

Das Background-Script reagiert auf diese Nachrichten und zeigt mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-API eine Benachrichtigung an:

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.runtime.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

### Eine synchrone Antwort senden

Dieses Content-Script sendet eine Nachricht an das Background-Script, wenn der Benutzer auf die Seite klickt. Außerdem protokolliert es jede Antwort des Background-Scripts:

```js
// content-script.js

function handleResponse(message) {
  console.log(`background script sent a response: ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function sendMessage(e) {
  const sending = browser.runtime.sendMessage({
    content: "message from the content script",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", sendMessage);
```

Hier ist eine Version des zugehörigen Background-Scripts, die innerhalb des Listeners synchron antwortet:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  sendResponse({ response: "response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

Hier ist eine weitere Version, die {{jsxref("Promise.resolve()")}} verwendet:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  return Promise.resolve({ response: "response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

### Eine asynchrone Antwort mit sendResponse senden

Hier ist eine alternative Version des Background-Scripts aus dem vorherigen Beispiel. Sie sendet eine asynchrone Antwort, nachdem der Listener zurückgekehrt ist. Beachten Sie `return true;` im Listener: Damit teilen Sie dem Browser mit, dass Sie das Argument `sendResponse` nach der Rückkehr des Listeners verwenden möchten.

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  setTimeout(() => {
    sendResponse({ response: "async response from background script" });
  }, 1000);
  return true;
}

browser.runtime.onMessage.addListener(handleMessage);
```

> [!WARNING]
> Stellen Sie der Funktion kein `async` voran. Dadurch ändert sich die Bedeutung hin zum [Senden einer asynchronen Antwort mit einem Promise](#eine_asynchrone_antwort_mit_einem_promise_senden), was praktisch `sendResponse(true)` entspricht.

### Eine asynchrone Antwort mit einem Promise senden

> [!NOTE]
> Chrome unterstützt Promise als Rückgabewert ab Chrome 148 beziehungsweise ab Chrome 152 für Erweiterungen mit einer DevTools-Seite. Geben Sie bei früheren Chrome-Versionen [true zurück und verwenden Sie `sendResponse`](#eine_asynchrone_antwort_mit_sendresponse_senden).

Dieses Content-Script ermittelt den ersten `<a>`-Link auf der Seite und fragt per Nachricht, ob dessen Zieladresse als Lesezeichen gespeichert ist. Es erwartet eine boolesche Antwort (`true`, wenn die Zieladresse als Lesezeichen gespeichert ist, andernfalls `false`):

```js
// content-script.js

const firstLink = document.querySelector("a");

function handleResponse(isBookmarked) {
  if (isBookmarked) {
    firstLink.classList.add("bookmarked");
  }
}

browser.runtime
  .sendMessage({
    url: firstLink.href,
  })
  .then(handleResponse);
```

Hier ist das Background-Script. Es verwendet {{WebExtAPIRef("bookmarks.search()")}}, um zu prüfen, ob der Link als Lesezeichen gespeichert ist. Diese Methode gibt ein {{jsxref("Promise")}} zurück:

```js
// background-script.js

function isBookmarked(message, sender, response) {
  return browser.bookmarks
    .search({
      url: message.url,
    })
    .then((results) => results.length > 0);
}

browser.runtime.onMessage.addListener(isBookmarked);
```

Wenn der asynchrone Handler kein Promise zurückgibt, können Sie selbst eines erstellen. Dieses etwas konstruierte Beispiel sendet mithilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) nach einer Verzögerung von einer Sekunde eine Antwort:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ response: "async response from background script" });
    }, 1000);
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessage)-API von Chromium. Diese Dokumentation wurde aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

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

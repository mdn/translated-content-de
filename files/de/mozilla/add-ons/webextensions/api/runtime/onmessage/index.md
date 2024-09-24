---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um Nachrichten von einem anderen Teil Ihrer Erweiterung zu empfangen.

Einige Anwendungsbeispiele sind:

- **in einem [Content-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)**, um Nachrichten von einem [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) zu empfangen.
- **in einem Hintergrundskript**, um Nachrichten von einem Content-Skript zu empfangen.
- **in einer [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages) oder einem [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface#popups)-Skript**, um Nachrichten von einem Hintergrundskript zu empfangen.
- **in einem Hintergrundskript**, um Nachrichten von einer Optionsseite oder einem Popup-Skript zu empfangen.

Um eine Nachricht zu senden, die vom `onMessage()`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}} oder (um eine Nachricht an ein Content-Skript zu senden) {{WebExtAPIRef("tabs.sendMessage()")}}.

> [!NOTE]
> Vermeiden Sie es, mehrere `onMessage()`-Listener für denselben Nachrichtentyp zu erstellen, da die Reihenfolge, in der die Listener ausgelöst werden, nicht garantiert ist.
>
> Wenn Sie die Zustellung einer Nachricht an einen bestimmten Endpunkt garantieren möchten, verwenden Sie den [verbindungsbasierten Ansatz, um Nachrichten auszutauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

Zusammen mit der Nachricht selbst erhält der Listener folgende Informationen:

- ein `sender` Objekt, das Details über den Absender der Nachricht enthält.
- eine `sendResponse()` Funktion, die verwendet werden kann, um eine Antwort an den Absender zu senden.

Sie können eine synchronisierte Antwort auf die Nachricht senden, indem Sie die `sendResponse()` Funktion innerhalb Ihres Listeners aufrufen. [Siehe ein Beispiel](#senden_einer_synchronen_antwort).

Um eine asynchrone Antwort zu senden, gibt es zwei Optionen:

- Geben Sie `true` vom Ereignislistener zurück. Dadurch bleibt die `sendResponse()` Funktion nach der Rückkehr des Listeners gültig, sodass Sie sie später aufrufen können. [Siehe ein Beispiel](#senden_einer_asynchronen_antwort_unter_verwendung_von_sendresponse).
  > [!WARNING]
  > Präfixen Sie die Funktion nicht mit `async`. Das Präfixieren mit `async` ändert die Bedeutung zu [Senden einer asynchronen Antwort mit einem Promise](#senden_einer_asynchronen_antwort_mit_einem_promise), was im Wesentlichen dasselbe ist wie `sendResponse(true)`.
- Geben Sie ein `Promise` vom Ereignislistener zurück, und lösen Sie es auf, wenn Sie die Antwort haben (oder lehnen Sie es im Falle eines Fehlers ab). [Siehe ein Beispiel](#senden_einer_asynchronen_antwort_mit_einem_promise).

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz verwenden, um Nachrichten auszutauschen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

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
  - : Hört auf, dieses Ereignis zu überwachen. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob mindestens ein Listener für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es überwacht wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Die Funktion erhält folgende Argumente:

    - `message`
      - : `object`. Die Nachricht selbst. Dies ist ein serialisierbares Objekt (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}} Objekt, das den Absender der Nachricht repräsentiert.
    - `sendResponse`

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um eine Antwort auf die `message` zu senden. Die Funktion nimmt ein einziges Argument an, das jedes serialisierbare Objekt sein kann (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)). Dieses Argument wird an den Nachrichtenabsender zurückgegeben.

        Wenn Sie mehr als einen `onMessage()`-Listener im selben Dokument haben, darf nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse()` auf, bevor die Listener-Funktion zurückkehrt.

        Um eine Antwort asynchron zu senden:

        - behalten Sie entweder eine Referenz auf das `sendResponse()`-Argument und geben Sie `true` von der Listener-Funktion zurück. Sie können dann `sendResponse()` aufrufen, nachdem die Listener-Funktion zurückgekehrt ist.
        - oder geben Sie ein {{jsxref("Promise")}} von der Listener-Funktion zurück und lösen Sie das Promise auf, wenn die Antwort bereit ist. Dies ist die bevorzugte Methode.

          > [!NOTE]
          > Promise als Rückgabewert wird in Chrome nicht unterstützt, bis [Chrome bug 1185241](https://crbug.com/1185241) gelöst ist. Als Alternative [return true und verwenden Sie sendResponse](#senden_einer_asynchronen_antwort_unter_verwendung_von_sendresponse).

    Die `listener`-Funktion kann entweder einen Boolean oder ein {{jsxref("Promise")}} zurückgeben.

    > [!NOTE]
    > Wenn Sie eine asynchrone Funktion an `addListener()` übergeben, gibt der Listener ein Promise für jede empfangene Nachricht zurück, was verhindert, dass andere Listener antworten:
    >
    > ```js example-bad
    > // nicht so machen
    > browser.runtime.onMessage.addListener(async (data, sender) => {
    >   if (data.type === "handle_me") {
    >     return "done";
    >   }
    > });
    > ```
    >
    > Wenn Sie möchten, dass der Listener nur auf Nachrichten eines bestimmten Typs reagiert, müssen Sie den Listener als nicht-`async` Funktion definieren und nur für die Nachrichten ein Promise zurückgeben, auf die der Listener reagieren soll – und ansonsten false oder undefined zurückgeben:
    >
    > ```js example-good
    > browser.runtime.onMessage.addListener((data, sender) => {
    >   if (data.type === "handle_me") {
    >     return Promise.resolve("done");
    >   }
    >   return false;
    > });
    > ```

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Einfaches Beispiel

Dieses Content-Skript hört auf Klick-Ereignisse auf der Webseite. Wenn der Klick auf einen Link erfolgte, sendet es eine Nachricht an die Hintergrundseite mit der Ziel-URL:

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

Das Hintergrundskript hört auf diese Nachrichten und zeigt eine Benachrichtigung mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "You clicked a link!",
    message: message.url,
  });
}
```

### Senden einer synchronen Antwort

Dieses Content-Skript sendet eine Nachricht an das Hintergrundskript, wenn der Benutzer auf die Seite klickt. Es protokolliert auch alle Antworten, die vom Hintergrundskript gesendet werden:

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

Hier ist eine Version des entsprechenden Hintergrundskripts, die eine Antwort synchron, von innen im Listener, sendet:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  sendResponse({ response: "response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

Und hier ist eine weitere Version, die {{jsxref("Promise.resolve()")}} verwendet:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  return Promise.resolve({ response: "response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

### Senden einer asynchronen Antwort unter Verwendung von sendResponse

Hier ist eine alternative Version des Hintergrundskripts aus dem vorherigen Beispiel. Es sendet eine Antwort asynchron, nachdem der Listener zurückgekehrt ist. Beachten Sie `return true;` im Listener: Dies teilt dem Browser mit, dass Sie beabsichtigen, das `sendResponse`-Argument nach der Rückkehr des Listeners zu verwenden.

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
> Präfixen Sie die Funktion nicht mit `async`. Das Präfixieren mit `async` ändert die Bedeutung zu [Senden einer asynchronen Antwort mit einem Promise](#senden_einer_asynchronen_antwort_mit_einem_promise), was im Wesentlichen dasselbe ist wie `sendResponse(true)`.

### Senden einer asynchronen Antwort mit einem Promise

> [!NOTE]
> Promise als Rückgabewert wird in Chrome nicht unterstützt, bis [Chrome bug 1185241](https://crbug.com/1185241) gelöst ist. Als Alternative [return true und verwenden Sie `sendResponse`](#senden_einer_asynchronen_antwort_unter_verwendung_von_sendresponse).

Dieses Content-Skript erhält den ersten `<a>`-Link auf der Seite und sendet eine Nachricht, um zu fragen, ob der Speicherort des Links ein Lesezeichen ist. Es erwartet eine Boolean-Antwort (`true`, wenn der Speicherort ein Lesezeichen ist, andernfalls `false`):

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

Hier ist das Hintergrundskript. Es verwendet `{{WebExtAPIRef("bookmarks.search()")}}` um zu überprüfen, ob der Link ein Lesezeichen ist, was ein {{jsxref("Promise")}} zurückgibt:

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

Wenn der asynchrone Handler kein Promise zurückgibt, können Sie ein Promise explizit konstruieren. Dieses eher konstruierte Beispiel sendet eine Antwort nach einer 1-Sekunden-Verzögerung, unter Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout):

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

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessage) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

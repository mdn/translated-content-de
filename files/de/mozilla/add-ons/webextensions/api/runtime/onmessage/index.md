---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
l10n:
  sourceCommit: 73654599ba40ad5c0de8e2fa06ec354734203ad5
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um Nachrichten von einem anderen Teil Ihrer Erweiterung zu empfangen.

Einige Anwendungsbeispiele sind:

- **in einem [Content Script](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)**, um Nachrichten von einem [Background Script](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) zu empfangen.
- **in einem Background Script**, um Nachrichten von einem Content Script zu empfangen.
- **in einer [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages) oder einem [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface#popups)**, um Nachrichten von einem Background Script zu empfangen.
- **in einem Background Script**, um Nachrichten von einer Optionsseite oder einem Popup-Skript zu empfangen.

Um eine Nachricht zu senden, die vom `onMessage()`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}} oder (um eine Nachricht an ein Content Script zu senden) {{WebExtAPIRef("tabs.sendMessage()")}}.

> [!NOTE]
> Vermeiden Sie es, mehrere `onMessage()`-Listener für denselben Nachrichtentyp zu erstellen, da die Reihenfolge, in der mehrere Listener ausgelöst werden, nicht garantiert ist.
>
> Wenn Sie die Zustellung einer Nachricht an einen spezifischen Endpunkt garantieren möchten, verwenden Sie den [verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

Zusätzlich zur Nachricht selbst erhält der Listener:

- ein `sender`-Objekt mit Details zum Absender der Nachricht.
- eine `sendResponse()`-Funktion, mit der eine Antwort an den Absender zurückgesendet werden kann.

Sie können eine synchrone Antwort auf die Nachricht senden, indem Sie die `sendResponse()`-Funktion innerhalb Ihres Listeners aufrufen. Siehe das [Beispiel für das Senden einer synchronen Antwort](#senden_einer_synchronen_antwort).

Um eine asynchrone Antwort zu senden, gibt es zwei Optionen:

- Geben Sie `true` vom Ereignis-Listener zurück. Dadurch bleibt die `sendResponse()`-Funktion nach der Rückgabe des Listeners gültig, sodass Sie sie später aufrufen können. Siehe das [Beispiel für das Senden einer asynchronen Antwort mit `sendResponse`](#senden_einer_asynchronen_antwort_mit_sendresponse).
  > [!WARNING]
  > Präfixieren Sie die Funktion nicht mit `async`. Das Hinzufügen von `async` ändert die Bedeutung zu [Senden einer asynchronen Antwort mittels Promise](#senden_einer_asynchronen_antwort_mittels_promise), was effektiv dasselbe wie `sendResponse(true)` ist.
- Geben Sie ein `Promise` vom Ereignis-Listener zurück und lösen Sie es auf, sobald Sie die Antwort haben (oder lehnen Sie es im Fehlerfall ab). [Siehe das [Beispiel für das Senden einer asynchronen Antwort mittels Promise](#senden_einer_asynchronen_antwort_mittels_promise)].

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden.

## Syntax

```js-nolint
browser.runtime.onMessage.addListener(listener)
browser.runtime.onMessage.removeListener(listener)
browser.runtime.onMessage.hasListener(listener)
```

Ereignisse bieten drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu lauschen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob mindestens ein Listener für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, sonst `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `message`
      - : `object`. Die Nachricht. Dies ist ein serialisierbares Objekt (siehe [Algorithmus zum Klonen von Daten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht darstellt.
    - `sendResponse`

      - : Eine Funktion, die höchstens einmal aufgerufen werden kann, um eine Antwort auf die`message` zu senden. Die Funktion nimmt ein Argument: ein beliebiges serialisierbares Objekt (siehe [Algorithmus zum Klonen von Daten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)). Dieses Argument wird an den Nachrichtensender zurückgegeben.

        Wenn Sie mehr als einen `onMessage()`-Listener im selben Dokument haben, kann nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse()` auf, bevor die Listener-Funktion zurückkehrt.

        Um eine Antwort asynchron zu senden, verwenden Sie eine der folgenden Optionen:

        - Geben Sie ein {{jsxref("Promise")}} von der Listener-Funktion zurück und lösen Sie das Promise auf, wenn die Antwort bereit ist. Dies ist der bevorzugte Ansatz.
        - Behalten Sie eine Referenz auf das `sendResponse()`-Argument und geben Sie `true` von der Listener-Funktion zurück. Sie rufen anschließend `sendResponse()` auf, nachdem die Listener-Funktion zurückkehrt.

          > [!NOTE]
          > Promise als Rückgabewert wird in Chrome nicht unterstützt, solange [Chrome Bug 1185241](https://crbug.com/1185241) nicht behoben ist. Alternativ [geben Sie true zurück und verwenden Sie sendResponse](#senden_einer_asynchronen_antwort_mit_sendresponse).

    Die `listener`-Funktion kann entweder ein Boolean oder ein {{jsxref("Promise")}} zurückgeben.

    > [!NOTE]
    > Wenn Sie eine async-Funktion an `addListener()` übergeben, gibt der Listener ein Promise für jede empfangene Nachricht zurück, was verhindert, dass andere Listener antworten:
    >
    > ```js example-bad
    > // tun Sie dies nicht
    > browser.runtime.onMessage.addListener(async (data, sender) => {
    >   if (data.type === "handle_me") {
    >     return "done";
    >   }
    > });
    > ```
    >
    > Angenommen, Sie möchten, dass der Listener nur auf Nachrichten eines bestimmten Typs antwortet. In diesem Fall müssen Sie den Listener als nicht-async-Funktion definieren und ein Promise nur für die Nachrichten zurückgeben, auf die der Listener antworten soll – und andernfalls false oder undefined zurückgeben:
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

Dieses Content Script lauscht auf Klick-Ereignisse auf der Webseite. Wenn der Klick auf einen Link erfolgt, sendet es dem Background-Skript eine Nachricht mit der Ziel-URL:

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

Das Background Script lauscht auf diese Nachrichten und zeigt eine Benachrichtigung mit der API [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) an:

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

Dieses Content Script sendet bei einem Klick des Nutzers auf die Seite eine Nachricht an das Background Script. Es protokolliert auch jede Antwort, die vom Background Script gesendet wird:

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

Hier ist eine Version des entsprechenden Background-Skripts, das synchron aus dem Listener heraus eine Antwort sendet:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  sendResponse({ response: "response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

Und hier ist eine andere Version, die {{jsxref("Promise.resolve()")}} verwendet:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`content script sent a message: ${request.content}`);
  return Promise.resolve({ response: "response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

### Senden einer asynchronen Antwort mit sendResponse

Hier ist eine alternative Version des Background-Skripts aus dem vorherigen Beispiel. Es sendet eine Antwort asynchron, nachdem der Listener zurückgekehrt ist. Beachten Sie `return true;` im Listener: Dies teilt dem Browser mit, dass Sie das `sendResponse`-Argument nach der Rückkehr des Listeners verwenden möchten.

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
> Präfixieren Sie die Funktion nicht mit `async`. Das Präfixieren mit `async` ändert die Bedeutung zu [Senden einer asynchronen Antwort mittels Promise](#senden_einer_asynchronen_antwort_mittels_promise), was effektiv dasselbe wie `sendResponse(true)` ist.

### Senden einer asynchronen Antwort mittels Promise

> [!NOTE]
> Promise als Rückgabewert wird in Chrome nicht unterstützt, solange [Chrome Bug 1185241](https://crbug.com/1185241) nicht behoben ist. Alternativ [geben Sie true zurück und verwenden Sie `sendResponse`](#senden_einer_asynchronen_antwort_mit_sendresponse).

Dieses Content Script erhält den ersten `<a>`-Link auf der Seite und sendet eine Nachricht, um zu prüfen, ob die Zieladresse des Links als Lesezeichen gespeichert ist. Es erwartet eine Boolean-Antwort (`true`, wenn die Adresse ein Lesezeichen ist, sonst `false`):

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

Hier ist das Background Script. Es verwendet `{{WebExtAPIRef("bookmarks.search()")}}`, um zu prüfen, ob der Link als Lesezeichen gespeichert ist, was ein {{jsxref("Promise")}} zurückgibt:

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

Falls der asynchrone Handler kein Promise zurückgibt, können Sie explizit ein Promise erstellen. Dieses etwas konstruierte Beispiel sendet nach einer Sekunde Verzögerung mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) eine Antwort:

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
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessage) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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

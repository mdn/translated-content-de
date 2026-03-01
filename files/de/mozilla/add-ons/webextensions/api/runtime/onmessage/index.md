---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
l10n:
  sourceCommit: 286918035156c33cc4ed073304f4c51ab5cfacfe
---

Verwenden Sie dieses Ereignis, um Nachrichten von einem anderen Teil Ihrer Erweiterung zu empfangen.

Einige Anwendungsbeispiele sind:

- **in einem [Content Script](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)**, um Nachrichten von einem [Background-Script](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) zu empfangen.
- **in einem Background-Script**, um Nachrichten von einem Content Script zu empfangen.
- **in einem [Optionsseite oder Popup](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#sidebars_popups_and_options_pages) Script**, um Nachrichten von einem Background-Script zu empfangen.
- **in einem Background-Script**, um Nachrichten von einem Optionsseite- oder Popup-Script zu empfangen.
- **in einem Script auf einer [Erweiterungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)**, um Nachrichten zu empfangen, die die Ausführung von Code in den Scripten der Seite anfordern.

Um eine Nachricht zu senden, die vom `onMessage()`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}} oder (um eine Nachricht an ein Content Script zu senden) {{WebExtAPIRef("tabs.sendMessage()")}}.

> [!NOTE]
> Vermeiden Sie die Erstellung mehrerer `onMessage()`-Listener für denselben Nachrichtentyp, da die Reihenfolge, in der mehrere Listener ausgelöst werden, nicht garantiert ist.
>
> Wenn Sie die Zustellung einer Nachricht an einen bestimmten Endpunkt garantieren möchten, verwenden Sie die [verbindungsbasierte Methode zum Austausch von Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

Zusammen mit der Nachricht selbst wird dem Listener übergeben:

- ein `sender`-Objekt mit Details über den Absender der Nachricht.
- eine `sendResponse()`-Funktion, die verwendet werden kann, um eine Antwort an den Absender zurückzusenden.

Sie können eine synchrone Antwort auf die Nachricht senden, indem Sie die `sendResponse()`-Funktion innerhalb Ihres Listeners aufrufen. Sehen Sie das [Beispiel für das Senden einer synchronen Antwort](#senden_einer_synchronen_antwort).

Um eine asynchrone Antwort zu senden, gibt es zwei Optionen:

- Rufen Sie `true` aus dem Ereignis-Listener zurück. Dies hält die `sendResponse()`-Funktion nach der Rückgabe des Listeners gültig, sodass Sie sie später aufrufen können. Sehen Sie das [Beispiel für das Senden einer asynchronen Antwort über `sendResponse`](#senden_einer_asynchronen_antwort_mit_sendresponse).
  > [!WARNING]
  > Setzen Sie `async` nicht vor die Funktion. Das Voranstellen von `async` ändert die Bedeutung zu [Sendung einer asynchronen Antwort mit einem Promise](#senden_einer_asynchronen_antwort_mit_einem_promise), was effektiv dem gleichen wie `sendResponse(true)` entspricht.
- Rückgabe eines `Promise` vom Ereignis-Listener und lösen Sie es auf, wenn Sie die Antwort haben (oder lehnen Sie es im Falle eines Fehlers ab). [Sehen Sie das [Beispiel für das Senden einer asynchronen Antwort mit einem Promise](#senden_einer_asynchronen_antwort_mit_einem_promise).

> [!NOTE]
> Sie können auch eine [verbindungsbasierte Methode zum Austausch von Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden.

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
  - : Stoppen Sie das Zuhören für dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob mindestens ein Listener für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält folgende Argumente:
    - `message`
      - : `object`. Die Nachricht. Dies ist ein serialisierbares Objekt (siehe [Data cloning algorithm](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht repräsentiert.
    - `sendResponse`
      - : Eine Funktion, die höchstens einmal aufgerufen wird, um eine Antwort auf die `message` zu senden. Die Funktion nimmt ein Argument: jedes serialisierbare Objekt (siehe [Data cloning algorithm](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)). Dieses Argument wird an den Nachrichtenabsender zurückgegeben.

        Wenn Sie mehr als einen `onMessage()`-Listener im selben Dokument haben, kann nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse()` auf, bevor die Listener-Funktion zurückkehrt.

        Um eine Antwort asynchron zu senden, verwenden Sie eine dieser Optionen:
        - Geben Sie ein {{jsxref("Promise")}} von der Listener-Funktion zurück und lösen Sie das Promise auf, wenn die Antwort bereit ist. Dies ist der bevorzugte Ansatz.
        - Behalten Sie eine Referenz auf das `sendResponse()`-Argument und geben Sie `true` von der Listener-Funktion zurück. Sie rufen dann `sendResponse()` auf, nachdem die Listener-Funktion zurückgekehrt ist.

          > [!NOTE]
          > Promise als Rückgabewert wird in Chrome nicht unterstützt, bis [Chrome bug 1185241](https://crbug.com/1185241) gelöst ist. Als Alternative [geben Sie true zurück und verwenden sendResponse](#senden_einer_asynchronen_antwort_mit_sendresponse).

    Die `listener`-Funktion kann entweder ein Boolean oder ein {{jsxref("Promise")}} zurückgeben.

    > [!NOTE]
    > Wenn Sie eine async-Funktion an `addListener()` übergeben, gibt der Listener ein Promise für jede empfangene Nachricht zurück, was das Antworten anderer Listener verhindert:
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
    > Angenommen, Sie möchten, dass der Listener nur auf Nachrichten eines bestimmten Typs antwortet. In diesem Fall müssen Sie den Listener als Nicht-Async-Funktion definieren und nur für die Nachrichten ein Promise zurückgeben, auf die der Listener antworten soll — und sonst false oder undefined zurückgeben:
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

Dieses Content Script lauscht auf Klickereignisse auf der Webseite. Wenn der Klick auf einen Link erfolgt, sendet es eine Nachricht mit der Ziel-URL an die Hintergrundseite:

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

Das Hintergrund-Script lauscht auf diese Nachrichten und zeigt eine Benachrichtigung unter Verwendung der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API:

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

Dieses Content Script sendet eine Nachricht an das Hintergrund-Script, wenn der Benutzer auf die Seite klickt. Es protokolliert auch jede Antwort, die vom Hintergrundscript gesendet wird:

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

Hier ist eine Version des entsprechenden Hintergrund-Scripts, das eine Antwort synchron aus dem Listener sendet:

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

Hier ist eine alternative Version des Hintergrund-Scripts aus dem vorherigen Beispiel. Es sendet eine Antwort asynchron, nachdem der Listener zurückgekehrt ist. Beachten Sie `return true;` im Listener: Dies teilt dem Browser mit, dass Sie beabsichtigen, das `sendResponse`-Argument nach der Rückkehr des Listeners zu verwenden.

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
> Setzen Sie `async` nicht vor die Funktion. Das Voranstellen von `async` ändert die Bedeutung zu [Senden einer asynchronen Antwort mit einem Promise](#senden_einer_asynchronen_antwort_mit_einem_promise), was effektiv dem gleichen wie `sendResponse(true)` entspricht.

### Senden einer asynchronen Antwort mit einem Promise

> [!NOTE]
> Promise als Rückgabewert wird in Chrome nicht unterstützt, bis [Chrome bug 1185241](https://crbug.com/1185241) gelöst ist. Als Alternative [geben Sie true zurück und verwenden `sendResponse`](#senden_einer_asynchronen_antwort_mit_sendresponse).

Dieses Content Script holt den ersten `<a>`-Link auf der Seite und sendet eine Nachricht, die fragt, ob der Speicherort des Links als Lesezeichen gespeichert ist. Es erwartet eine boolesche Antwort (`true`, wenn der Speicherort als Lesezeichen gespeichert ist, sonst `false`):

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

Hier ist das Hintergrund-Script. Es verwendet {{WebExtAPIRef("bookmarks.search()")}}, um zu sehen, ob der Link als Lesezeichen gespeichert ist, was ein {{jsxref("Promise")}} zurückgibt:

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

Wenn der asynchrone Handler kein Promise zurückgibt, können Sie explizit ein Promise konstruieren. Dieses etwas gekünstelte Beispiel sendet eine Antwort nach einer 1-Sekunden-Verzögerung mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout):

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
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessage) API. Diese Dokumentation stammt von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

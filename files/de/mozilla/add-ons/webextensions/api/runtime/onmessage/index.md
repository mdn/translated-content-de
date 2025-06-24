---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um auf Nachrichten aus einem anderen Teil Ihrer Erweiterung zu lauschen.

Einige Anwendungsfälle sind:

- **in einem [Inhalts-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)** um Nachrichten von einem [Hintergrund-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) zu empfangen.
- **in einem Hintergrund-Skript**, um Nachrichten von einem Inhalts-Skript zu empfangen.
- **in einem [Einstellungs- oder Popup-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#sidebars_popups_and_options_pages)** um Nachrichten von einem Hintergrund-Skript zu empfangen.
- **in einem Hintergrund-Skript**, um Nachrichten von einem Einstellungs- oder Popup-Skript zu empfangen.

Um eine Nachricht zu senden, die vom `onMessage()`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}} oder (um eine Nachricht an ein Inhalts-Skript zu senden) {{WebExtAPIRef("tabs.sendMessage()")}}.

> [!NOTE]
> Vermeiden Sie es, mehrere `onMessage()`-Listener für den gleichen Nachrichtentyp zu erstellen, da die Reihenfolge, in der mehrere Listener aufgerufen werden, nicht garantiert ist.
>
> Wenn Sie die Zustellung einer Nachricht an einen bestimmten Endpunkt garantieren möchten, verwenden Sie den [verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

Zusammen mit der Nachricht selbst wird dem Listener Folgendes übergeben:

- ein `sender`-Objekt mit Details über den Nachrichtenabsender.
- eine `sendResponse()`-Funktion, die verwendet werden kann, um eine Antwort an den Absender zurückzusenden.

Sie können eine synchrone Antwort auf die Nachricht senden, indem Sie die `sendResponse()`-Funktion innerhalb Ihres Listeners aufrufen. Siehe das [Beispiel für das Senden einer synchronen Antwort](#senden_einer_synchronen_antwort).

Um eine asynchrone Antwort zu senden, gibt es zwei Optionen:

- Geben Sie `true` aus dem Event-Listener zurück. Dies hält die `sendResponse()`-Funktion nach der Rückgabe des Listeners gültig, sodass Sie sie später aufrufen können. Siehe das [Beispiel für eine asynchrone Antwort mit `sendResponse`](#senden_einer_asynchronen_antwort_mit_sendresponse).
  > [!WARNING]
  > Fügen Sie der Funktion nicht `async` als Präfix hinzu. `async` als Präfix ändert die Bedeutung zu [Senden einer asynchronen Antwort mit einem Promise](#senden_einer_asynchronen_antwort_mit_einem_promise), was im Wesentlichen dasselbe ist wie `sendResponse(true)`.
- Geben Sie ein `Promise` aus dem Event-Listener zurück, und lösen Sie es auf, wenn die Antwort bereit ist (oder lehnen Sie es im Falle eines Fehlers ab). [Siehe das [Beispiel für eine asynchrone Antwort mit einem Promise](#senden_einer_asynchronen_antwort_mit_einem_promise).

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
  - : Beendet das Lauschen dieses Ereignisses. Das `listener`-Argument ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob mindestens ein Listener für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, sonst `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `message`
      - : `object`. Die Nachricht. Dies ist ein serialisierbares Objekt (siehe [Data cloning algorithm](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht repräsentiert.
    - `sendResponse`

      - : Eine Funktion, die höchstens einmal aufgerufen werden kann, um eine Antwort auf die `message` zu senden. Die Funktion nimmt ein Argument: jedes serialisierbare Objekt (siehe [Data cloning algorithm](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)). Dieses Argument wird an den Nachrichtenabsender zurückgegeben.

        Wenn Sie mehr als einen `onMessage()`-Listener im gleichen Dokument haben, kann nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse()` auf, bevor die Listener-Funktion zurückkehrt.

        Um eine Antwort asynchron zu senden, verwenden Sie eine der folgenden Optionen:

        - Geben Sie ein {{jsxref("Promise")}} aus der Listener-Funktion zurück und lösen Sie das Promise auf, wenn die Antwort bereit ist. Dies ist der bevorzugte Ansatz.
        - Behalten Sie eine Referenz auf das `sendResponse()`-Argument und geben Sie `true` aus der Listener-Funktion zurück. Sie rufen dann `sendResponse()` auf, nachdem die Listener-Funktion zurückgekehrt ist.

          > [!NOTE]
          > Promise als Rückgabewert wird in Chrome nicht unterstützt, bis [Chrome Bug 1185241](https://crbug.com/1185241) behoben ist. Alternativ [geben Sie true zurück und verwenden Sie sendResponse](#senden_einer_asynchronen_antwort_mit_sendresponse).

    Die `listener`-Funktion kann entweder ein Boolean oder ein {{jsxref("Promise")}} zurückgeben.

    > [!NOTE]
    > Wenn Sie eine asynchrone Funktion an `addListener()` übergeben, gibt der Listener für jede empfangene Nachricht ein Promise zurück, was andere Listener daran hindert zu antworten:
    >
    > ```js example-bad
    > // Machen Sie das nicht
    > browser.runtime.onMessage.addListener(async (data, sender) => {
    >   if (data.type === "handle_me") {
    >     return "done";
    >   }
    > });
    > ```
    >
    > Angenommen, Sie möchten, dass der Listener nur auf Nachrichten eines bestimmten Typs reagiert. In diesem Fall müssen Sie den Listener als nicht asynchrone Funktion definieren und nur für die Nachrichten ein Promise zurückgeben, auf die der Listener reagieren soll — und sonst false oder undefined zurückgeben:
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

Dieses Inhalts-Skript horcht auf Klick-Ereignisse auf der Webseite. Wenn der Klick auf einen Link erfolgt, sendet es eine Nachricht mit der Ziel-URL an die Hintergrundseite:

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

Das Hintergrund-Skript horcht auf diese Nachrichten und zeigt eine Benachrichtigung mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API an:

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

Dieses Inhalts-Skript sendet eine Nachricht an das Hintergrund-Skript, wenn der Benutzer auf die Seite klickt. Es protokolliert auch jede vom Hintergrund-Skript gesendete Antwort:

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

Hier ist eine Version des entsprechenden Hintergrund-Skripts, das eine Antwort synchron aus dem Listener sendet:

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

Hier ist eine alternative Version des Hintergrund-Skripts aus dem vorherigen Beispiel. Es sendet eine Antwort asynchron, nachdem der Listener zurückgekehrt ist. Beachten Sie `return true;` im Listener: Dies teilt dem Browser mit, dass Sie beabsichtigen, das `sendResponse`-Argument nach der Rückkehr des Listeners zu verwenden.

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
> Fügen Sie der Funktion nicht `async` als Präfix hinzu. `async` als Präfix ändert die Bedeutung zu [Senden einer asynchronen Antwort mit einem Promise](#senden_einer_asynchronen_antwort_mit_einem_promise), was im Wesentlichen dasselbe ist wie `sendResponse(true)`.

### Senden einer asynchronen Antwort mit einem Promise

> [!NOTE]
> Promise als Rückgabewert wird in Chrome nicht unterstützt, bis [Chrome Bug 1185241](https://crbug.com/1185241) behoben ist. Alternativ [geben Sie true zurück und verwenden Sie `sendResponse`](#senden_einer_asynchronen_antwort_mit_sendresponse).

Dieses Inhalts-Skript sucht den ersten `<a>`-Link auf der Seite und sendet eine Nachricht, die fragt, ob der Standort des Links als Lesezeichen gespeichert ist. Es erwartet eine booleanische Antwort (`true`, wenn der Standort als Lesezeichen gespeichert ist, sonst `false`):

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

Hier ist das Hintergrund-Skript. Es verwendet {{WebExtAPIRef("bookmarks.search()")}}, um zu überprüfen, ob der Link als Lesezeichen gespeichert ist, was ein {{jsxref("Promise")}} zurückgibt:

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

Wenn der asynchrone Handler kein Promise zurückgibt, können Sie explizit ein Promise konstruieren. Dieses eher gekünstelte Beispiel sendet eine Antwort nach einer Verzögerung von 1 Sekunde unter Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout):

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
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessage)-API von Chromium. Diese Dokumentation ist von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um Nachrichten aus einem anderen Teil Ihrer Erweiterung zu empfangen.

Einige Anwendungsbeispiele sind:

- **in einem [Inhalts-Skript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts)**, um Nachrichten von einem [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) zu empfangen.
- **in einem Hintergrundskript**, um Nachrichten von einem Inhalts-Skript zu empfangen.
- **in einem [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages) oder [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface#popups) Skript**, um Nachrichten von einem Hintergrundskript zu empfangen.
- **in einem Hintergrundskript**, um Nachrichten von einer Optionsseite oder einem Popup-Skript zu empfangen.

Um eine Nachricht zu senden, die vom `onMessage()`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}} oder (um eine Nachricht an ein Inhalts-Skript zu senden) {{WebExtAPIRef("tabs.sendMessage()")}}.

> [!NOTE]
> Vermeiden Sie die Erstellung mehrerer `onMessage()`-Listener für den gleichen Nachrichtentyp, da die Reihenfolge, in der mehrere Listener ausgelöst werden, nicht garantiert ist.
>
> Wenn Sie die Zustellung einer Nachricht an einen bestimmten Endpunkt garantieren möchten, verwenden Sie den [verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

Zusammen mit der Nachricht selbst wird dem Listener Folgendes übergeben:

- ein `sender`-Objekt, das Details über den Absender der Nachricht gibt.
- eine `sendResponse()`-Funktion, die verwendet werden kann, um eine Antwort an den Absender zurückzusenden.

Sie können eine synchrone Antwort auf die Nachricht senden, indem Sie die `sendResponse()`-Funktion innerhalb Ihres Listeners aufrufen. [Sehen Sie ein Beispiel](#senden_einer_synchronen_antwort).

Um eine asynchrone Antwort zu senden, gibt es zwei Möglichkeiten:

- Geben Sie `true` vom Ereignis-Listener zurück. Dies hält die `sendResponse()`-Funktion nach der Rückgabe des Listeners gültig, sodass Sie sie später aufrufen können. [Sehen Sie ein Beispiel](#senden_einer_asynchronen_antwort_mit_sendresponse).
  > [!WARNING]
  > Präfixieren Sie die Funktion nicht mit `async`. Das Präfix `async` ändert die Bedeutung zu [asynchrone Antwort mithilfe eines Versprechens senden](#senden_einer_asynchronen_antwort_mithilfe_eines_promise), was effektiv dasselbe ist wie `sendResponse(true)`.
- Geben Sie ein `Promise` vom Ereignis-Listener zurück und lösen Sie es auf, wenn Sie die Antwort haben (oder lehnen Sie es im Falle eines Fehlers ab). [Sehen Sie ein Beispiel](#senden_einer_asynchronen_antwort_mithilfe_eines_promise).

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
  - : Stoppt das Zuhören bei diesem Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob mindestens ein Listener für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion wird mit diesen Argumenten aufgerufen:

    - `message`
      - : `object`. Die Nachricht selbst. Dies ist ein serialisierbares Objekt (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht darstellt.
    - `sendResponse`

      - : Eine Funktion, die aufgerufen werden kann, um eine Antwort auf die `message` zu senden. Die Funktion nimmt ein einziges Argument, das jedes serialisierbare Objekt sein kann (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)). Dieses Argument wird an den Nachrichtensender zurückgegeben.

        Wenn Sie mehr als einen `onMessage()`-Listener im selben Dokument haben, dann kann nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse()` auf, bevor die Listener-Funktion zurückkehrt.

        Um eine Antwort asynchron zu senden:

        - behalten Sie entweder eine Referenz auf das `sendResponse()`-Argument und geben Sie `true` aus der Listener-Funktion zurück. Sie können dann `sendResponse()` aufrufen, nachdem die Listener-Funktion zurückgekehrt ist.
        - oder geben Sie ein {{jsxref("Promise")}} von der Listener-Funktion zurück und lösen Sie das Versprechen auf, wenn die Antwort bereit ist. Dies ist eine bevorzugte Methode.

          > [!NOTE]
          > `Promise` als Rückgabewert wird in Chrome nicht unterstützt, bis [Chrome-Bug 1185241](https://crbug.com/1185241) behoben ist. Alternativ können Sie [true zurückgeben und `sendResponse` verwenden](#senden_einer_asynchronen_antwort_mit_sendresponse).

    Die `listener`-Funktion kann entweder ein Boolescher Wert oder ein {{jsxref("Promise")}} zurückgeben.

    > [!NOTE]
    > Wenn Sie eine `async` Funktion an `addListener()` übergeben, wird der Listener ein `Promise` für jede empfangene Nachricht zurückgeben, wodurch andere Listener daran gehindert werden, zu antworten:
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
    > Wenn Sie möchten, dass der Listener nur auf Nachrichten eines bestimmten Typs reagiert, müssen Sie den Listener als nicht-`async` Funktion definieren und nur für die Nachrichten ein `Promise` zurückgeben, auf die der Listener reagieren soll — und ansonsten `false` oder `undefined` zurückgeben:
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

Dieses Inhalts-Skript lauscht auf Klickereignisse auf der Webseite. Wenn der Klick auf einem Link war, sendet es eine Nachricht mit der Ziel-URL an die Hintergrundseite:

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

Das Hintergrundskript lauscht auf diese Nachrichten und zeigt eine Benachrichtigung über die [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API:

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "Sie haben auf einen Link geklickt!",
    message: message.url,
  });
}
```

### Senden einer synchronen Antwort

Dieses Inhalts-Skript sendet beim Klick des Benutzers auf die Seite eine Nachricht an das Hintergrundskript. Es protokolliert auch jede Antwort, die vom Hintergrundskript gesendet wird:

```js
// content-script.js

function handleResponse(message) {
  console.log(`Das Hintergrundskript hat eine Antwort gesendet: ${message.response}`);
}

function handleError(error) {
  console.log(`Fehler: ${error}`);
}

function sendMessage(e) {
  const sending = browser.runtime.sendMessage({
    content: "Nachricht vom Inhalts-Skript",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", sendMessage);
```

Hier ist eine Version des entsprechenden Hintergrundskripts, das eine Antwort synchron aus dem Listener sendet:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`Das Inhalts-Skript hat eine Nachricht gesendet: ${request.content}`);
  sendResponse({ response: "Antwort vom Hintergrundskript" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

Und hier ist eine weitere Version, die {{jsxref("Promise.resolve()")}} verwendet:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`Das Inhalts-Skript hat eine Nachricht gesendet: ${request.content}`);
  return Promise.resolve({ response: "Antwort vom Hintergrundskript" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

### Senden einer asynchronen Antwort mit sendResponse

Hier ist eine alternative Version des Hintergrundskripts vom vorherigen Beispiel. Es sendet eine Antwort asynchron, nachdem der Listener zurückgegeben hat. Beachten Sie `return true;` im Listener: Das teilt dem Browser mit, dass Sie das `sendResponse`-Argument beabsichtigen zu verwenden, nachdem der Listener zurückgegeben hat.

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`Das Inhalts-Skript hat eine Nachricht gesendet: ${request.content}`);
  setTimeout(() => {
    sendResponse({ response: "asynchrone Antwort vom Hintergrundskript" });
  }, 1000);
  return true;
}

browser.runtime.onMessage.addListener(handleMessage);
```

> [!WARNING]
> Präfixieren Sie die Funktion nicht mit `async`. Das Präfix `async` ändert die Bedeutung zu [asynchrone Antwort mithilfe eines Versprechens senden](#senden_einer_asynchronen_antwort_mithilfe_eines_promise), was effektiv dasselbe ist wie `sendResponse(true)`.

### Senden einer asynchronen Antwort mithilfe eines Promise

> [!NOTE]
> `Promise` als Rückgabewert wird in Chrome nicht unterstützt, bis [Chrome-Bug 1185241](https://crbug.com/1185241) behoben ist. Alternativ können Sie [true zurückgeben und `sendResponse` verwenden](#senden_einer_asynchronen_antwort_mit_sendresponse).

Dieses Inhalts-Skript erhält den ersten `<a>` Link auf der Seite und sendet eine Nachricht, um zu fragen, ob der Ort des Links als Lesezeichen gespeichert ist. Es erwartet eine boolesche Antwort (`true`, wenn der Ort als Lesezeichen gespeichert ist, `false` sonst):

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

Hier ist das Hintergrundskript. Es verwendet `{{WebExtAPIRef("bookmarks.search()")}}`, um zu sehen, ob der Link als Lesezeichen gespeichert ist, was ein {{jsxref("Promise")}} zurückgibt:

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

Wenn der asynchrone Handler kein Promise zurückgibt, können Sie explizit ein Promise erzeugen. Dieses eher konstruierte Beispiel sendet eine Antwort nach einer 1-sekündigen Verzögerung, unter Verwendung von [`setTimeout()`](/de/docs/Web/API/setTimeout):

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ response: "asynchrone Antwort vom Hintergrundskript" });
    }, 1000);
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessage) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

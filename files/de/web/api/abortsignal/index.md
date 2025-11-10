---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`AbortSignal`**-Interface repräsentiert ein Signalobjekt, das es Ihnen ermöglicht, mit einem asynchronen Vorgang (wie einer `fetch`-Anfrage) zu kommunizieren und diesen bei Bedarf über ein [`AbortController`](/de/docs/Web/API/AbortController)-Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) {{ReadOnlyInline}}
  - : Ein {{Glossary("Boolean", "Boolean")}}, das angibt, ob die Anfrage bzw. die Anfragen, mit denen das Signal kommuniziert, abgebrochen ist/sind (`true`) oder nicht (`false`).
- [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Abbruchgrund angibt, sobald das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die bereits als abgebrochen festgelegt ist.
- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
  - : Gibt ein `AbortSignal` zurück, das abbricht, wenn eines der gegebenen Abbruchsignale abbricht.
- [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die nach einer bestimmten Zeit automatisch abbricht.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted)
  - : Wirft den Abbruch-[`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals, wenn das Signal abgebrochen wurde; andernfalls tut es nichts.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Dieses Ereignis kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) gehört werden oder durch Zuweisen eines Ereignisbehandlers zur `oneventname`-Eigenschaft dieses Interfaces.

- [`abort`](/de/docs/Web/API/AbortSignal/abort_event)
  - : Wird aufgerufen, wenn die asynchronen Vorgänge, mit denen das Signal kommuniziert, abgebrochen werden.
    Auch über die `onabort`-Eigenschaft verfügbar.

## Beispiele

### Abbrechen einer `fetch`-Operation mit einem expliziten Signal

Das folgende Beispiel zeigt, wie wir ein Signal verwenden könnten, um das Herunterladen eines Videos mit der [Fetch-API](/de/docs/Web/API/Fetch_API) abzubrechen.

Wir definieren zuerst eine Variable für unseren `AbortController`.

Vor jedem [fetch-Request](/de/docs/Web/API/Window/fetch) erstellen wir einen neuen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor, dann holen wir eine Referenz zu seinem zugehörigen `AbortSignal`-Objekt mit der [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft.

> [!NOTE]
> Ein `AbortSignal` kann nur einmal verwendet werden. Nachdem es abgebrochen wurde, wird jeder `fetch`-Aufruf, der dasselbe Signal verwendet, sofort abgelehnt.

Wenn der [fetch-Request](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option im Optionsobjekt der Anfrage (das `{ signal }` unten). Dies verknüpft das Signal und den Controller mit der `fetch`-Anfrage und ermöglicht es uns, es abzubrechen, indem wir [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen, wie im zweiten Ereignislistener unten gezeigt.

Wenn `abort()` aufgerufen wird, lehnt das `fetch()`-Versprechen mit einer `DOMException` namens `AbortError` ab.

```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("Download aborted");
  }
});

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("Download complete", response);
    // process response further
  } catch (err) {
    console.error(`Download error: ${err.message}`);
  }
}
```

Wenn die Anfrage abgebrochen wird, nachdem der `fetch()`-Aufruf erfüllt wurde, aber bevor der Antworttext gelesen wurde, dann wird der Versuch, den Antworttext zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // The next line will throw `AbortError`
  const text = await response.text();
  console.log(text);
}
```

Sie finden ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

### Abbrechen einer `fetch`-Operation mit einem Timeout

Wenn Sie die Operation bei einem Timeout abbrechen möchten, können Sie die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden.
Diese gibt ein `AbortSignal` zurück, das nach einer bestimmten Anzahl von Millisekunden automatisch abläuft.

Der folgende Code-Schnipsel zeigt, wie Sie entweder erfolgreich eine Datei herunterladen oder einen Timeout-Fehler nach 5 Sekunden behandeln würden.
Beachten Sie, dass bei einem Timeout das `fetch()`-Versprechen mit einer `TimeoutError`-`DOMException` abgelehnt wird.
Dies ermöglicht es dem Code, zwischen Timeouts (für die wahrscheinlich eine Benutzerbenachrichtigung erforderlich ist) und Benutzerabbrüchen zu unterscheiden.

```js
const url = "video.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    console.error(
      "Fetch aborted by user action (browser stop button, closing tab, etc.",
    );
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

### Abbrechen einer `fetch`-Operation mit Timeout oder explizitem Abbruch

Wenn Sie von mehreren Signalen aus abbrechen möchten, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um sie in ein einzelnes Signal zu kombinieren. Das folgende Beispiel zeigt dies mit [`fetch`](/de/docs/Web/API/Window/fetch):

```js
try {
  const controller = new AbortController();
  const timeoutSignal = AbortSignal.timeout(5000);
  const res = await fetch(url, {
    // This will abort the fetch when either signal is aborted
    signal: AbortSignal.any([controller.signal, timeoutSignal]),
  });
  const body = await res.json();
} catch (e) {
  if (e.name === "AbortError") {
    // Notify the user of abort.
  } else if (e.name === "TimeoutError") {
    // Notify the user of timeout
  } else {
    // A network error, or some other problem.
    console.log(`Type: ${e.name}, Message: ${e.message}`);
  }
}
```

> [!NOTE]
> Anders als bei der Verwendung von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) gibt es keine Möglichkeit zu erkennen, ob der endgültige Abbruch aufgrund eines Timeouts verursacht wurde.

### Implementierung einer abbrechbaren API

Eine API, die das Abbrechen unterstützen muss, kann ein `AbortSignal`-Objekt akzeptieren und seinen Zustand verwenden, um bei Bedarf das Signal zur Abbruchbehandlung auszulösen.

Eine API, die auf {{jsxref("Promise")}} basiert, sollte auf das Abbruchsignal reagieren, indem sie jedes ungesicherte Versprechen mit dem Abbruch-[`reason`](/de/docs/Web/API/AbortSignal/reason) des `AbortSignal` ablehnt.
Zum Beispiel können Sie die folgende `myCoolPromiseAPI` betrachten, die ein Signal annimmt und ein Versprechen zurückgibt.
Das Versprechen wird sofort abgelehnt, wenn das Signal bereits abgebrochen ist oder das Abbruchereignis erkannt wird.
Andernfalls wird es normal abgeschlossen und das Versprechen wird aufgelöst.

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    if (signal.aborted) {
      reject(signal.reason);
      return;
    }

    // Perform the main purpose of the API
    // Call resolve(result) when done.

    // Watch for 'abort' signals
    signal.addEventListener("abort", () => {
      // Stop the main operation
      // Reject the promise with the abort reason.
      reject(signal.reason);
    });
  });
}
```

Die API könnte dann wie gezeigt verwendet werden.
Beachten Sie, dass [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird, um die Operation abzubrechen.

```js
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

myCoolPromiseAPI({ /* …, */ signal })
  .then((result) => {})
  .catch((err) => {
    if (err.name === "AbortError") return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
```

APIs, die keine Versprechen zurückgeben, könnten in ähnlicher Weise reagieren.
In einigen Fällen kann es sinnvoll sein, das Signal zu absorbieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

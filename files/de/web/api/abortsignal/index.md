---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: 4854b2e695bd40ec2a124e15bf57b032f96e493d
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal`**-Schnittstelle stellt ein Signalobjekt dar, das es Ihnen ermöglicht, mit einer asynchronen Operation (wie einer Fetch-Anfrage) zu kommunizieren und sie bei Bedarf über ein [`AbortController`](/de/docs/Web/API/AbortController)-Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) {{ReadOnlyInline}}
  - : Ein {{Glossary("Boolean", "Boolean")}}, das angibt, ob die Anforderung(en), mit der/die das Signal kommuniziert, abgebrochen wurde(n) (`true`) oder nicht (`false`).
- [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Abbruchgrund angibt, nachdem das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die bereits als abgebrochen eingestellt ist.
- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
  - : Gibt ein `AbortSignal` zurück, das abbricht, wenn eines der angegebenen Abbruchsignale abbricht.
- [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die nach einer bestimmten Zeit automatisch abbricht.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted)
  - : Wirft den Abbruch-[`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals, wenn das Signal abgebrochen wurde; ansonsten passiert nichts.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Hören Sie diesem Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`abort`](/de/docs/Web/API/AbortSignal/abort_event)
  - : Wird aufgerufen, wenn die asynchronen Operationen, mit denen das Signal kommuniziert, abgebrochen werden. Auch über die `onabort`-Eigenschaft verfügbar.

## Beispiele

### Abbrechen eines Fetch-Vorgangs mit einem expliziten Signal

Das folgende Snippet zeigt, wie wir ein Signal verwenden könnten, um das Herunterladen eines Videos mit der [Fetch-API](/de/docs/Web/API/Fetch_API) abzubrechen.

Zuerst definieren wir eine Variable für unseren `AbortController`.

Vor jeder [fetch-Anfrage](/de/docs/Web/API/Window/fetch) erstellen wir einen neuen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und holen dann eine Referenz zu seinem zugehörigen `AbortSignal`-Objekt mit der [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft.

> [!NOTE]
> Ein `AbortSignal` kann nur einmal verwendet werden. Nachdem es abgebrochen wurde, wird jede Fetch-Aufruf mit demselben Signal sofort abgelehnt.

Wenn die [fetch-Anfrage](/de/docs/Web/API/Window/fetch) gestartet wird, übergeben wir das `AbortSignal` als Option innerhalb des Optionen-Objekts der Anfrage (das `{ signal }` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, sie abzubrechen, indem wir [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen, wie unten im zweiten Event-Listener gezeigt.

Wenn `abort()` aufgerufen wird, lehnt das `fetch()`-Versprechen mit einem `DOMException` namens `AbortError` ab.

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

Wenn die Anfrage nach dem Erfüllen des `fetch()`-Aufrufs, aber bevor der Antwortinhalt gelesen wurde, abgebrochen wird, wird der Versuch, den Antwortinhalt zu lesen, mit einem `AbortError`-Ausnahme abgelehnt.

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

Sie können ein [vollständiges funktionierendes Beispiel auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

### Abbrechen eines Fetch-Vorgangs mit einem Timeout

Wenn Sie den Vorgang bei einem Timeout abbrechen müssen, können Sie die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden. Diese gibt ein `AbortSignal` zurück, das nach einer bestimmten Anzahl von Millisekunden automatisch abbricht.

Das folgende Code-Snippet zeigt, wie Sie entweder beim Herunterladen einer Datei erfolgreich sind oder einen Timeout-Fehler nach 5 Sekunden behandeln. Beachten Sie, dass, wenn es zu einem Timeout kommt, das `fetch()`-Versprechen mit einem `TimeoutError`-`DOMException` abgelehnt wird. Dies ermöglicht es dem Code, zwischen Timeouts (für die wahrscheinlich Benachrichtigungen an den Benutzer erforderlich sind) und Benutzerabbrüchen zu unterscheiden.

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

### Abbrechen eines Fetch mit Timeout oder explizitem Abbruch

Wenn Sie von mehreren Signalen abbrechen wollen, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um sie in einem einzigen Signal zu kombinieren. Das folgende Beispiel zeigt dies unter Verwendung von [`fetch`](/de/docs/Web/API/Window/fetch):

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
> Im Gegensatz zu der Verwendung von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static), gibt es keine Möglichkeit festzustellen, ob der endgültige Abbruch durch einen Timeout verursacht wurde.

### Implementierung einer abbrechbaren API

Eine API, die das Abbrechen unterstützen muss, kann ein `AbortSignal`-Objekt akzeptieren und seinen Status verwenden, um bei Bedarf die Behandlung des Abbruchsignals auszulösen.

Eine auf {{jsxref("Promise")}} basierende API sollte auf das Abbruchsignal reagieren, indem sie ein nicht abgeschlossenes Versprechen mit dem Abbruch-[`reason`](/de/docs/Web/API/AbortSignal/reason) des `AbortSignal` ablehnt. Zum Beispiel, betrachten Sie die folgende `myCoolPromiseAPI`, die ein Signal nimmt und ein Versprechen zurückgibt. Das Versprechen wird sofort abgelehnt, wenn das Signal bereits abgebrochen ist, oder wenn das Abbruch-Ereignis erkannt wird. Ansonsten wird es normal abgeschlossen und löst dann das Versprechen.

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    signal.throwIfAborted();

    // Perform the main purpose of the API
    // Call resolve(result) when done.

    // Watch for 'abort' signals
    // Passing `once: true` ensures the Promise can be garbage collected after abort is called
    signal.addEventListener(
      "abort",
      () => {
        // Stop the main operation
        // Reject the promise with the abort reason.
        reject(signal.reason);
      },
      { once: true },
    );
  });
}
```

Die API könnte dann wie gezeigt verwendet werden. Beachten Sie, dass [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird, um den Vorgang abzubrechen.

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

APIs, die keine Versprechen zurückgeben, könnten auf ähnliche Weise reagieren. In einigen Fällen kann es sinnvoll sein, das Signal zu absorbieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

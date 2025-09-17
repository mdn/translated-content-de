---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: a4fd602696976d79d8690f9c86a2a1c1f2b9b9eb
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`AbortSignal`** Interface repräsentiert ein Signalobjekt, das Ihnen ermöglicht, mit einer asynchronen Operation (wie einer Fetch-Anfrage) zu kommunizieren und sie bei Bedarf über ein [`AbortController`](/de/docs/Web/API/AbortController) Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) {{ReadOnlyInline}}
  - : Ein {{Glossary("Boolean", "Boolean")}}, das angibt, ob die Anfrage(n), mit der/dem das Signal kommuniziert, abgebrochen (`true`) ist/sind oder nicht (`false`).
- [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Abbruchgrund liefert, sobald das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die bereits als abgebrochen festgelegt ist.
- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
  - : Gibt ein `AbortSignal` zurück, das abbricht, wenn eines der gegebenen Abbruchsignale abbricht.
- [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die automatisch nach einer festgelegten Zeit abbricht.

## Instanzmethoden

_Erbt auch Methoden von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted)
  - : Wirft den Abbruch [`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals, wenn das Signal abgebrochen wurde; andernfalls tut es nichts.

## Ereignisse

_Erbt auch Ereignisse von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Dieses Ereignis kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder indem ein Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zugewiesen wird.

- [`abort`](/de/docs/Web/API/AbortSignal/abort_event)
  - : Wird aufgerufen, wenn die asynchronen Operationen, mit denen das Signal kommuniziert, abgebrochen werden.
    Auch über die `onabort` Eigenschaft verfügbar.

## Beispiele

### Abbrechen einer Fetch-Operation mit einem expliziten Signal

Das folgende Beispiel zeigt, wie wir ein Signal nutzen könnten, um den Download eines Videos über die [Fetch API](/de/docs/Web/API/Fetch_API) abzubrechen.

Wir definieren zuerst eine Variable für unseren `AbortController`.

Vor jeder [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) erstellen wir einen neuen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController) Konstruktor, dann erhalten wir eine Referenz zu dem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekt über die [`AbortController.signal`](/de/docs/Web/API/AbortController/signal) Eigenschaft.

> [!NOTE]
> Ein `AbortSignal` kann nur einmal verwendet werden. Nachdem es abgebrochen wurde, wird jede Fetch-Anfrage, die dasselbe Signal nutzt, sofort zurückgewiesen.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) gestartet wird, übergeben wir das `AbortSignal` als Option innerhalb des Optionsobjekts der Anfrage (das `{ signal }` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, sie durch Aufruf von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen, wie unten im zweiten Ereignis-Listener zu sehen ist.

Wenn `abort()` aufgerufen wird, wird das `fetch()` Versprechen mit einem `DOMException` namens `AbortError` abgelehnt.

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

Wenn die Anfrage nach dem Fulfillment des `fetch()`-Aufrufs, aber bevor der Antwortkörper gelesen wurde, abgebrochen wird, führt der Versuch, den Antwortkörper zu lesen, zu einer `AbortError`-Ausnahme.

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

Sie können ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api) finden; Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

### Abbrechen einer Fetch-Operation mit einem Timeout

Wenn Sie die Operation bei einem Timeout abbrechen müssen, können Sie die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden.
Dies gibt ein `AbortSignal` zurück, das nach einer bestimmten Anzahl von Millisekunden automatisch abläuft.

Das untenstehende Code-Beispiel zeigt, wie Sie entweder erfolgreich eine Datei herunterladen oder einen Timeout-Fehler nach 5 Sekunden behandeln würden.
Beachten Sie, dass bei einem Timeout das `fetch()` Versprechen mit einem `TimeoutError` `DOMException` abgelehnt wird.
Dies ermöglicht es dem Code, zwischen Timeouts (für die wahrscheinlich eine Benachrichtigung des Benutzers erforderlich ist) und Nutzerabbrüchen zu unterscheiden.

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

Wenn Sie von mehreren Signalen abbrechen möchten, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um sie in ein einzelnes Signal zu kombinieren. Das folgende Beispiel zeigt dies mit [`fetch`](/de/docs/Web/API/Window/fetch):

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
> Im Gegensatz zur Verwendung von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) gibt es keine Möglichkeit festzustellen, ob der endgültige Abbruch durch einen Timeout verursacht wurde.

### Implementierung einer abbruchbaren API

Eine API, die das Abbrechen unterstützen muss, kann ein `AbortSignal` Objekt akzeptieren und dessen Status verwenden, um bei Bedarf die Signalhandhabung für Abbrüche zu triggern.

Eine auf {{jsxref("Promise")}} basierende API sollte auf das Abbruchsignal reagieren, indem sie jedes ungelöste Versprechen mit dem Abbruch [`reason`](/de/docs/Web/API/AbortSignal/reason) von `AbortSignal` ablehnt.
Zum Beispiel, betrachten Sie die `myCoolPromiseAPI`, die ein Signal annimmt und ein Versprechen zurückgibt.
Das Versprechen wird sofort abgelehnt, wenn das Signal bereits abgebrochen ist oder wenn das Abbruchereignis erkannt wird.
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

APIs, die keine Versprechen zurückgeben, könnten auf ähnliche Weise reagieren.
In einigen Fällen kann es sinnvoll sein, das Signal zu absorbieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

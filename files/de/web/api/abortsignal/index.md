---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal`**-Schnittstelle repräsentiert ein Signalobjekt, das es Ihnen ermöglicht, mit einem asynchronen Vorgang (wie einer Fetch-Anfrage) zu kommunizieren und diesen bei Bedarf über ein [`AbortController`](/de/docs/Web/API/AbortController)-Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) {{ReadOnlyInline}}
  - : Ein {{Glossary("Boolean", "Boolean")}}, das angibt, ob die Anfrage(n), mit der(en) das Signal kommuniziert, abgebrochen ist/sind (`true`) oder nicht (`false`).
- [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Abbruchgrund angibt, sobald das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die bereits als abgebrochen gesetzt ist.
- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
  - : Gibt ein `AbortSignal` zurück, das abbricht, wenn eines der angegebenen Abbruchsignale abbricht.
- [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die nach einer bestimmten Zeit automatisch abgebrochen wird.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted)
  - : Wirft den Abbruch-`reason` des Signals, wenn das Signal abgebrochen wurde; andernfalls passiert nichts.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Dieses Ereignis kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder indem ein Ereignislistener der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- [`abort`](/de/docs/Web/API/AbortSignal/abort_event)
  - : Wird aufgerufen, wenn die asynchronen Vorgänge, mit der(en) das Signal kommuniziert, abgebrochen werden.
    Auch über die `onabort`-Eigenschaft verfügbar.

## Beispiele

### Abbrechen einer Fetch-Operation mit einem expliziten Signal

Der folgende Ausschnitt zeigt, wie wir ein Signal verwenden könnten, um das Herunterladen eines Videos mit der [Fetch API](/de/docs/Web/API/Fetch_API) abzubrechen.

Zunächst erstellen wir einen Abbruch-Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und holen dann eine Referenz auf sein zugehöriges `AbortSignal`-Objekt über die [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option in das Optionsobjekt der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht uns, sie abzubrechen, indem wir [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen.
Unten können Sie sehen, dass die Fetch-Operation im zweiten Ereignislistener abgebrochen wird, der ausgelöst wird, wenn der Abbruchknopf (`abortBtn`) geklickt wird.

Wenn `abort()` aufgerufen wird, lehnt das `fetch()`-Promise mit einer `DOMException` namens `AbortError` ab.

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

Wenn die Anfrage nach dem Abschluss des `fetch()`-Aufrufs, aber bevor der Antwortkörper gelesen wurde, abgebrochen wird, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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
Diese gibt ein `AbortSignal` zurück, das nach einer bestimmten Anzahl von Millisekunden automatisch abgebrochen wird.

Der untenstehende Codeausschnitt zeigt, wie Sie entweder erfolgreich eine Datei herunterladen, oder einen Timeout-Fehler nach 5 Sekunden behandeln würden.
Beachten Sie, dass bei einem Timeout das `fetch()`-Promise mit einer `TimeoutError` `DOMException` abgelehnt wird.
Dies ermöglicht es dem Code, zwischen Timeouts (für die wahrscheinlich eine Benachrichtigung des Benutzers erforderlich ist) und Benutzerabbrüchen zu unterscheiden.

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

Wenn Sie aus mehreren Signalen abbrechen möchten, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um sie in ein einziges Signal zu kombinieren. Das folgende Beispiel zeigt dies mit [`fetch`](/de/docs/Web/API/Window/fetch):

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
> Anders als bei der Verwendung von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static), gibt es keine Möglichkeit festzustellen, ob der endgültige Abbruch durch einen Timeout verursacht wurde.

### Implementieren einer abbrechbaren API

Eine API, die das Abbrechen unterstützen muss, kann ein `AbortSignal`-Objekt akzeptieren und seinen Status verwenden, um bei Bedarf das Handling von Abbruchsignalen auszulösen.

Eine auf {{jsxref("Promise")}} basierende API sollte auf das Abbruchsignal reagieren, indem sie ein ungelöstes Promise mit dem Abbruch-`reason` des `AbortSignal` ablehnt.
Zum Beispiel kann die folgende `myCoolPromiseAPI`, die ein Signal annimmt und ein Promise zurückgibt, sofort abgelehnt werden, wenn das Signal bereits abgebrochen ist oder das Abbruchereignis erkannt wird.
Andernfalls wird es normal abgeschlossen und das Promise wird aufgelöst.

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    if (signal.aborted) {
      reject(signal.reason);
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

APIs, die keine Promises zurückgeben, könnten auf ähnliche Weise reagieren.
In einigen Fällen kann es sinnvoll sein, das Signal zu absorbieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

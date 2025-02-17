---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: 594eb7514960642e7c79b19fdd71c203db55c9db
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal`**-Schnittstelle repräsentiert ein Signalobjekt, das es ermöglicht, mit einer asynchronen Operation (wie einer `fetch`-Anfrage) zu kommunizieren und diese bei Bedarf über ein [`AbortController`](/de/docs/Web/API/AbortController)-Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) {{ReadOnlyInline}}
  - : Ein {{Glossary("Boolean", "Boolean")}}, der anzeigt, ob die Anfrage(n), mit denen das Signal kommuniziert, abgebrochen ist/sind (`true`) oder nicht (`false`).
- [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Abbruchgrund bereitstellt, wenn das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die bereits als abgebrochen gesetzt ist.
- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
  - : Gibt ein `AbortSignal` zurück, das abgebrochen wird, wenn eines der übergebenen Abbruchsignale abgebrochen wird.
- [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die nach einer bestimmten Zeit automatisch abgebrochen wird.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted)
  - : Wirft den Abbruch-[`reason`](/de/docs/Web/API/AbortSignal/reason) des Signals, wenn das Signal abgebrochen wurde; andernfalls tut es nichts.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Hören Sie auf dieses Ereignis mittels [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignislisteners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`abort`](/de/docs/Web/API/AbortSignal/abort_event)
  - : Wird ausgelöst, wenn die asynchronen Operationen, mit denen das Signal kommuniziert, abgebrochen werden.
    Auch verfügbar über die `onabort`-Eigenschaft.

## Beispiele

### Abbrechen einer Fetch-Operation mit einem expliziten Signal

Der folgende Ausschnitt zeigt, wie wir ein Signal verwenden könnten, um den Download eines Videos über die [Fetch-API](/de/docs/Web/API/Fetch_API) abzubrechen.

Zuerst erstellen wir einen Abbruch-Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und greifen dann auf das zugehörige `AbortSignal`-Objekt über die Eigenschaft [`AbortController.signal`](/de/docs/Web/API/AbortController/signal) zu.

Wenn die [fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option im Optionen-Objekt der Anfrage (das `{signal}` unten). Dadurch wird das Signal und der Controller mit der Fetch-Anfrage verknüpft, und wir können sie durch Aufruf von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abbrechen.
Nachfolgend sehen Sie, dass die Fetch-Operation im zweiten Event-Listener abgebrochen wird, welcher ausgelöst wird, wenn der Abbruch-Button (`abortBtn`) geklickt wird.

Wenn `abort()` aufgerufen wird, lehnt das `fetch()`-Versprechen mit einem `DOMException` ab, der den Namen `AbortError` trägt.

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

Wenn die Anfrage nach dem erfolgreichen Abschluss des `fetch()`-Aufrufs, aber bevor der Antwortkörper gelesen wurde, abgebrochen wird, schlägt der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Exception fehl.

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

Sie können ein [voll funktionsfähiges Beispiel auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live ansehen](https://mdn.github.io/dom-examples/abort-api/).

### Abbrechen einer Fetch-Operation mit einem Timeout

Wenn Sie eine Operation bei Timeout abbrechen müssen, können Sie die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden.
Diese gibt ein `AbortSignal` zurück, das nach einer bestimmten Anzahl von Millisekunden automatisch abläuft.

Der folgende Codeausschnitt zeigt, wie Sie entweder eine Datei erfolgreich herunterladen oder nach 5 Sekunden einen Timeout-Fehler handhaben würden.
Beachten Sie, dass die `fetch()`-Promise bei einem Timeout mit einem `TimeoutError`-`DOMException` verworfen wird.
Dies ermöglicht es, zwischen Timeouts (für die eine Benutzerbenachrichtigung wahrscheinlich erforderlich ist) und Benutzerabbrüchen zu unterscheiden.

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

### Abbrechen eines Fetchs mit Timeout oder explizitem Abbruch

Wenn Sie mehrere Signale verwenden möchten, um eine Operation abzubrechen, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um sie in ein einzelnes Signal zu kombinieren. Das folgende Beispiel zeigt dies mit [`fetch`](/de/docs/Web/API/Window/fetch):

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
> Im Gegensatz zur Nutzung von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) gibt es keine Möglichkeit festzustellen, ob der endgültige Abbruch durch einen Timeout verursacht wurde.

### Implementieren einer abbrechbaren API

Eine API, die das Abbrechen unterstützen muss, kann ein `AbortSignal`-Objekt akzeptieren und dessen Zustand verwenden, um bei Bedarf die Abbruchsignalverarbeitung auszulösen.

Eine {{jsxref("Promise")}}-basierte API sollte auf das Abbruchsignal reagieren, indem es ein noch ungelöstes Promise mit dem `AbortSignal`-Abbruch-[`reason`](/de/docs/Web/API/AbortSignal/reason) ablehnt.
Betrachten Sie zum Beispiel die folgende `myCoolPromiseAPI`, welche ein Signal akzeptiert und ein Promise zurückgibt.
Das Promise wird sofort abgelehnt, wenn das Signal bereits abgebrochen wurde oder wenn das Abbruchereignis erkannt wird.
Andernfalls wird es normal abgeschlossen und das Promise wird aufgelöst.

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
Beachten Sie, dass [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird, um den Vorgang abzubrechen.

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

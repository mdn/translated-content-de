---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: 9187ced76026d7784a8600296c4e04b0e6f72382
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`AbortSignal`** Interface repräsentiert ein Signalobjekt, das es Ihnen ermöglicht, mit einem asynchronen Vorgang (wie einer Fetch-Anfrage) zu kommunizieren und diesen bei Bedarf über ein [`AbortController`](/de/docs/Web/API/AbortController) Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) {{ReadOnlyInline}}
  - : Ein {{Glossary("Boolean", "Boolean")}}, welches anzeigt, ob die Anfrage(n), mit denen das Signal kommuniziert, abgebrochen ist/sind (`true`) oder nicht (`false`).
- [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Abbruchgrund bereitstellt, sobald das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)
  - : Gibt eine `AbortSignal` Instanz zurück, die bereits als abgebrochen gesetzt ist.
- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
  - : Gibt ein `AbortSignal` zurück, das abbricht, wenn eines der gegebenen Abbruchsignale abbricht.
- [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static)
  - : Gibt eine `AbortSignal` Instanz zurück, die nach einer bestimmten Zeit automatisch abbricht.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted)
  - : Wirft den Abbruch-`reason` des Signals, wenn das Signal abgebrochen wurde; ansonsten tut es nichts.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle setzen.

- [`abort`](/de/docs/Web/API/AbortSignal/abort_event)
  - : Wird aufgerufen, wenn die asynchronen Operationen, mit denen das Signal kommuniziert, abgebrochen sind.
    Auch über die `onabort`-Eigenschaft verfügbar.

## Beispiele

### Abbrechen einer Fetch-Operation mit einem expliziten Signal

Das folgende Snippet zeigt, wie wir ein Signal verwenden können, um das Herunterladen eines Videos mithilfe der [Fetch API](/de/docs/Web/API/Fetch_API) abzubrechen.

Zuerst definieren wir eine Variable für unseren `AbortController`.

Vor jeder [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) erstellen wir einen neuen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und holen uns dann eine Referenz zu seinem zugehörigen `AbortSignal`-Objekt mit der [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft.

> [!NOTE]
> Ein `AbortSignal` kann nur einmal verwendet werden. Nachdem es abgebrochen wurde, wird jede Fetch-Anfrage, die dasselbe Signal verwendet, sofort abgelehnt.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option im Optionsobjekt der Anfrage (das `{ signal }` unten). Dies assoziiert das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, sie abzubrechen, indem wir [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen, wie unten im zweiten Event-Listener zu sehen.

Wenn `abort()` aufgerufen wird, wird das `fetch()`-Versprechen mit einem `DOMException` namens `AbortError` abgelehnt.

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

Wenn die Anfrage nach dem Erfüllen des `fetch()`-Aufrufs, aber bevor der Antwortkörper gelesen wurde, abgebrochen wird, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sie können ein [voll funktionsfähiges Beispiel auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

### Abbrechen einer Fetch-Operation mit einem Timeout

Wenn Sie die Operation bei einem Timeout abbrechen müssen, können Sie die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden.
Dies gibt ein `AbortSignal` zurück, das automatisch nach einer festgelegten Anzahl von Millisekunden abbricht.

Der folgende Codeausschnitt zeigt, wie Sie entweder das Herunterladen einer Datei erfolgreich abschließen oder einen Timeout-Fehler nach 5 Sekunden behandeln würden.
Beachten Sie, dass, wenn ein Timeout eintritt, das `fetch()`-Versprechen mit einem `TimeoutError` `DOMException` abgelehnt wird.
Dies erlaubt es dem Code, zwischen Timeouts (für die wahrscheinlich eine Benachrichtigung des Nutzers erforderlich ist) und Benutzerabbrüchen zu unterscheiden.

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
      "Fetch aborted by user action (browser stop button, closing tab, etc.)",
    );
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

### Abbrechen eines Fetch mit Timeout oder explizitem Abbruch

Wenn Sie von mehreren Signalen her abbrechen möchten, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um sie in ein einziges Signal zu kombinieren. Das folgende Beispiel zeigt dies mit [`fetch`](/de/docs/Web/API/Window/fetch):

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
> Im Gegensatz zur Verwendung von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) gibt es keine Möglichkeit festzustellen, ob der finale Abbruch durch einen Timeout verursacht wurde.

### Implementierung einer abbrechbaren API

Eine API, die das Abbrechen unterstützen muss, kann ein `AbortSignal`-Objekt akzeptieren und seinen Status verwenden, um das Abbruchsignal-Handling bei Bedarf auszulösen.

Eine auf {{jsxref("Promise")}} basierende API sollte auf das Abbruchsignal reagieren, indem sie ein nicht erfülltes Versprechen mit dem `AbortSignal`-Abbruch-`reason` ablehnt.
Zum Beispiel, betrachten Sie das folgende `myCoolPromiseAPI`, das ein Signal nimmt und ein Versprechen zurückgibt.
Das Versprechen wird sofort abgelehnt, wenn das Signal bereits abgebrochen ist oder wenn das Abbruchereignis erkannt wird.
Andernfalls wird es normal abgeschlossen und dann das Versprechen erfüllt.

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
- [Abbrechbares Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

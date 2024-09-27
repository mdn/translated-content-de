---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal`**-Schnittstelle repräsentiert ein Signalobjekt, das Ihnen ermöglicht, mit einem asynchronen Vorgang (wie einer `fetch`-Anfrage) zu kommunizieren und diesen bei Bedarf über ein [`AbortController`](/de/docs/Web/API/AbortController)-Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) {{ReadOnlyInline}}
  - : Ein [Boolean](/de/docs/Glossary/Boolean), der angibt, ob die Anforderung(en), mit der/dem das Signal kommuniziert, abgebrochen ist/sind (`true`) oder nicht (`false`).
- [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Grund für den Abbruch angibt, sobald das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die bereits als abgebrochen festgelegt ist.
- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
  - : Gibt ein `AbortSignal` zurück, das abbricht, wenn eines der angegebenen Abbruchsignale abbricht.
- [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die nach einer bestimmten Zeit automatisch abbricht.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted)
  - : Wirft den Abbruchgrund des Signals, wenn das Signal abgebrochen wurde; andernfalls tut es nichts.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Hören Sie sich dieses Ereignis an, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`abort`](/de/docs/Web/API/AbortSignal/abort_event)
  - : Wird aufgerufen, wenn die asynchronen Vorgänge, mit denen das Signal kommuniziert, abgebrochen werden. Zusätzlich verfügbar über die `onabort`-Eigenschaft.

## Beispiele

### Abbrechen eines `fetch`-Vorgangs mit einem expliziten Signal

Der folgende Ausschnitt zeigt, wie wir ein Signal verwenden könnten, um das Herunterladen eines Videos mit der [Fetch API](/de/docs/Web/API/Fetch_API) abzubrechen.

Wir erstellen zunächst einen Abbruch-Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und holen dann eine Referenz auf das zugehörige `AbortSignal`-Objekt mithilfe der [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft.

Wenn die [fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option innerhalb des Optionen-Objekts der Anfrage (das `{signal}` unten). Dies verbindet das Signal und den Controller mit der `fetch`-Anfrage und erlaubt uns, sie durch Aufrufen von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen.
Unten sehen Sie, dass der `fetch`-Vorgang im zweiten Ereignis-Listener abgebrochen wird, der ausgelöst wird, wenn der Abbruch-Button (`abortBtn`) geklickt wird.

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

Wenn die Anfrage abgebrochen wird, nachdem der `fetch()`-Aufruf erfüllt wurde, aber bevor der Antwortkörper gelesen wurde, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sie finden ein [vollständig funktionierendes Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

### Abbrechen einer `fetch`-Operation mit einem Timeout

Wenn Sie den Vorgang bei einem Timeout abbrechen müssen, können Sie die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden.
Dies gibt ein `AbortSignal` zurück, das nach einer bestimmten Anzahl von Millisekunden automatisch ein Timeout auslöst.

Das untenstehende Code-Beispiel zeigt, wie Sie entweder erfolgreich eine Datei herunterladen oder einen Timeout-Fehler nach 5 Sekunden behandeln würden.
Beachten Sie, dass bei einem Timeout das `fetch()`-Versprechen mit einer `TimeoutError` `DOMException` abgelehnt wird.
Dies ermöglicht es dem Code, zwischen Timeouts (für die wahrscheinlich eine Benachrichtigung des Benutzers erforderlich ist) und Benutzeraborten zu unterscheiden.

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

### Abbrechen eines `fetch` mit Timeout oder explizitem Abbruch

Wenn Sie von mehreren Signalen abbrechen möchten, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um sie zu einem einzelnen Signal zu kombinieren. Das folgende Beispiel zeigt dies mit [`fetch`](/de/docs/Web/API/Window/fetch):

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
> Anders als beim Verwenden von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) gibt es keine Möglichkeit festzustellen, ob der endgültige Abbruch durch ein Timeout verursacht wurde.

### Implementierung einer abbrechbaren API

Eine API, die das Abbrechen unterstützen muss, kann ein `AbortSignal`-Objekt akzeptieren und seinen Zustand verwenden, um bei Bedarf die Behandlung von Abbruchsignalen auszulösen.

Eine auf `Promise` basierende API sollte auf das Abbruchsignal reagieren, indem sie jedes nicht erfüllte Versprechen mit dem Abbruchgrund von `AbortSignal` ablehnt.
Zum Beispiel betrachten Sie die folgende `myCoolPromiseAPI`, die ein Signal entgegennimmt und ein Versprechen zurückgibt.
Das Versprechen wird sofort abgelehnt, wenn das Signal bereits abgebrochen ist oder wenn das Abbruchereignis erkannt wird.
Andernfalls vervollständigt es sich normal und löst dann das Versprechen.

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

APIs, die keine Versprechen zurückgeben, könnten auf ähnliche Weise reagieren.
In einigen Fällen kann es sinnvoll sein, das Signal zu absorbieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

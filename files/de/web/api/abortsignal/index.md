---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`AbortSignal`**-Interface stellt ein Signalobjekt dar, das es Ihnen ermöglicht, mit einer asynchronen Operation (wie etwa einer Fetch-Anfrage) zu kommunizieren und diese bei Bedarf über ein [`AbortController`](/de/docs/Web/API/AbortController)-Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.aborted`](/de/docs/Web/API/AbortSignal/aborted) {{ReadOnlyInline}}
  - : Ein {{Glossary("Boolean", "Boolean")}}, das angibt, ob die Anfrage(n), mit der/denen das Signal kommuniziert, abgebrochen ist/sind (`true`) oder nicht (`false`).
- [`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason) {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Abbruchgrund angibt, sobald das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die bereits als abgebrochen gesetzt ist.
- [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static)
  - : Gibt ein `AbortSignal` zurück, das abbricht, wenn eines der angegebenen Abbruchsignale abbricht.
- [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static)
  - : Gibt eine `AbortSignal`-Instanz zurück, die nach einer festgelegten Zeit automatisch abbricht.

## Instanzmethoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`AbortSignal.throwIfAborted()`](/de/docs/Web/API/AbortSignal/throwIfAborted)
  - : Wirft den Abbruch-`reason` des Signals, wenn das Signal abgebrochen wurde; ansonsten tut es nichts.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

Hören Sie diesem Ereignis zu, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Event-Listener auf die `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`abort`](/de/docs/Web/API/AbortSignal/abort_event)
  - : Wird aufgerufen, wenn die asynchronen Operationen, mit denen das Signal kommuniziert, abgebrochen werden.
    Ist auch über die `onabort`-Eigenschaft verfügbar.

## Beispiele

### Abbrechen einer Fetch-Operation mit einem expliziten Signal

Der folgende Ausschnitt zeigt, wie wir ein Signal verwenden könnten, um das Herunterladen eines Videos mit der [Fetch API](/de/docs/Web/API/Fetch_API) abzubrechen.

Wir definieren zunächst eine Variable für unseren `AbortController`.

Vor jeder [fetch request](/de/docs/Web/API/Window/fetch) erstellen wir einen neuen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und holen uns dann eine Referenz zu seinem zugehörigen `AbortSignal`-Objekt über die [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft.

> [!NOTE]
> Ein `AbortSignal` kann nur einmal verwendet werden. Nachdem es abgebrochen wurde, wird jeder Fetch-Aufruf, der dasselbe Signal verwendet, sofort zurückgewiesen.

Wenn die [fetch request](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option im Optionsobjekt der Anfrage (das `{ signal }` unten). Dies verbindet das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, diese abzubrechen, indem wir [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen, wie unten im zweiten Event-Listener zu sehen ist.

Wenn `abort()` aufgerufen wird, lehnt das `fetch()`-Promise mit einem `DOMException`, genannt `AbortError`, ab.

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

Wenn die Anfrage nach dem Aufruf von `fetch()` erfüllt wird, aber bevor der Antwortkörper gelesen wurde, dann wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Sie können ein [vollständig funktionierendes Beispiel auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/abort-api); es kann auch [live angesehen werden](https://mdn.github.io/dom-examples/abort-api/).

### Abbrechen einer Fetch-Operation mit einem Timeout

Wenn Sie die Operation bei einem Timeout abbrechen müssen, können Sie die statische Methode [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) verwenden.
Dies gibt ein `AbortSignal` zurück, das automatisch nach einer bestimmten Anzahl von Millisekunden abläuft.

Der folgende Codeausschnitt zeigt, wie Sie entweder das Herunterladen einer Datei erfolgreich abschließen oder nach 5 Sekunden einen Timeout-Fehler behandeln würden.
Beachten Sie, dass bei einem Timeout das `fetch()`-Promise mit einem `TimeoutError`-`DOMException` abgelehnt wird.
Dies ermöglicht es dem Code, zwischen Timeouts (für die wahrscheinlich eine Benachrichtigung des Benutzers erforderlich ist) und Benutzerabbruch zu unterscheiden.

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

### Abbrechen eines Fetches mit Timeout oder explizitem Abbruch

Wenn Sie von mehreren Signalen abbrechen möchten, können Sie [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) verwenden, um sie zu einem einzigen Signal zu kombinieren. Das folgende Beispiel zeigt dies mit [`fetch`](/de/docs/Web/API/Window/fetch):

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
> Anders als bei der Verwendung von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) gibt es keine Möglichkeit festzustellen, ob der endgültige Abbruch durch ein Timeout verursacht wurde.

## Entfernen des `abort`-Event-Listeners

Signale, die von [`AbortController`](/de/docs/Web/API/AbortController)s erstellt wurden, sind als Müll sammelbar, sobald sowohl das Signal als auch sein zugehöriger Controller nicht mehr erreichbar sind, selbst mit `abort`-Event-Listenern, da garantiert ist, dass das Ereignis nicht ausgelöst wird. Allerdings werden Signale, deren Abbruch von etwas anderem als einem Controller verwaltet wird, durch das Vorhandensein eines `abort`-Event-Listeners am Leben gehalten:

- Ein nicht abgebrochenes Signal, das von [`AbortSignal.any()`](/de/docs/Web/API/AbortSignal/any_static) zurückgegeben wird, wird am Leben gehalten, solange es noch Quellsignale und entweder angehängte `abort`-Listener oder interne Abbruchschritte registriert hat, die von einer API erstellt wurden.
- Ein Signal, das von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) zurückgegeben wird, wird am Leben gehalten, solange sein Timeout noch aussteht und es angehängte `abort`-Listener hat.

Die folgende Funktion kombiniert eine anwendungsweite Stornierung mit einem vom Aufrufer gelieferten Signal für eine einzelne Operation. Sie fügt einen Listener hinzu, um die Stornierung zu protokollieren, verlässt sich jedoch auf `{ once: true }`, um ihn zu entfernen:

```js example-bad
const globalController = new AbortController();

async function doOperation(url, localSignal) {
  const signal = AbortSignal.any([globalController.signal, localSignal]);
  signal.addEventListener("abort", () => console.log(`Aborted: ${url}`), {
    once: true,
  });

  const response = await fetch(url, { signal });
  return response.text();
}
```

`{ once: true }` entfernt den Listener nur, wenn das Ereignis ausgelöst wird. Wenn keines der Eingangssignale abbricht, bleibt der Listener auch nach dem Lesen des Antwortkörpers bestehen. Wiederholte Aufrufe können daher kombinierte Signale und ihre Listener so lange behalten, wie das globale Signal erreichbar bleibt und die kombinierten Signale nicht abgebrochen sind. Das Verwerfen des kombinierten Signals entfernt den Listener nicht, und `fetch()` bereinigt keine Listener, die von Ihrem Code hinzugefügt wurden.

Stattdessen sollten Sie den Listener entfernen, wenn die Operation abgeschlossen ist, unabhängig davon, ob sie erfolgreich oder fehlgeschlagen ist. Verwenden Sie einen benannten Listener, damit Sie ihn in einem {{jsxref("Statements/try...catch", "finally")}}-Block entfernen können:

```js
async function doOperation(url, localSignal) {
  const signal = AbortSignal.any([globalController.signal, localSignal]);
  const onAbort = () => console.log(`Aborted: ${url}`);
  signal.addEventListener("abort", onAbort, { once: true });

  try {
    const response = await fetch(url, { signal });
    return await response.text();
  } finally {
    signal.removeEventListener("abort", onAbort);
  }
}
```

Das `await` bei `response.text()` stellt sicher, dass der Listener registriert bleibt, bis der Antwortkörper gelesen wurde. Diese Bereinigung betrifft den vom Beispiel hinzugefügten Listener, nicht die interne Abbruchverarbeitung von `fetch()`. Wenn eine Operation nur eine anwendungsweite Stornierung benötigt, übergeben Sie `globalController.signal` direkt, anstatt ein kombiniertes Signal zu erstellen.

### Implementierung einer abbrechbaren API

Eine API, die Abbrechen unterstützen muss, kann ein `AbortSignal`-Objekt akzeptieren und dessen Zustand verwenden, um bei Bedarf die Signalverarbeitung zum Abbrechen auszulösen.

Eine auf {{jsxref("Promise")}} basierende API sollte auf das Abbruchsignal reagieren, indem sie jedes unerfüllte Versprechen mit dem Abbruch-`reason` des `AbortSignal` ablehnt.
Betrachten Sie zum Beispiel die folgende `myCoolPromiseAPI`, die ein Signal annimmt und ein Versprechen zurückgibt.
Das Versprechen wird sofort abgelehnt, wenn das Signal bereits abgebrochen ist oder wenn das Abbruchereignis erkannt wird.
Andernfalls wird es normalerweise nach einer Verzögerung abgeschlossen und löst das Versprechen auf.

Entfernen Sie den `abort`-Listener, wenn die Operation normalerweise abgeschlossen wird, damit ein langlebiges Signal den Listener und die von ihm referenzierten Werte nicht behält. Auch hier entfernt `{ once: true }` den Listener nur, wenn das Signal tatsächlich abbricht.

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    signal.throwIfAborted();

    // Simulate the main operation completing after a delay.
    const timeoutId = setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve("Operation completed");
    }, 1000);

    function onAbort() {
      // Stop the main operation and reject with the abort reason.
      clearTimeout(timeoutId);
      reject(signal.reason);
    }

    signal.addEventListener("abort", onAbort, { once: true });
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

APIs, die keine Versprechen zurückgeben, könnten ähnlich reagieren.
In einigen Fällen kann es sinnvoll sein, das Signal zu absorbieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abbrechbares Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

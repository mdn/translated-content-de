---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: abc17b7843821141a834944777fa412b34327e00
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`AbortSignal`** Schnittstelle repräsentiert ein Signalobjekt, das Ihnen ermöglicht, mit einer asynchronen Operation (wie einem Fetch-Aufruf) zu kommunizieren und diese bei Bedarf über ein {{domxref("AbortController")}} Objekt abzubrechen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.aborted")}} {{ReadOnlyInline}}
  - : Ein {{Glossary("Boolean")}}, das angibt, ob die Anfrage(n), mit denen das Signal kommuniziert, abgebrochen ist/sind (`true`) oder nicht (`false`).
- {{domxref("AbortSignal.reason")}} {{ReadOnlyInline}}
  - : Ein JavaScript-Wert, der den Abbruchgrund bereitstellt, sobald das Signal abgebrochen wurde.

## Statische Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal/abort_static", "AbortSignal.abort()")}}
  - : Gibt eine `AbortSignal` Instanz zurück, die bereits auf abgebrochen gesetzt ist.
- {{domxref("AbortSignal/any_static", "AbortSignal.any()")}}
  - : Gibt ein `AbortSignal` zurück, das abbricht, wenn eines der angegebenen Abbruchsignale abbricht.
- {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}}
  - : Gibt eine `AbortSignal` Instanz zurück, die nach einer bestimmten Zeit automatisch abbricht.

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.throwIfAborted()")}}
  - : Wirft den Abbruch-{{domxref("AbortSignal.reason", "Grund")}} des Signals, wenn das Signal abgebrochen wurde; andernfalls tut es nichts.

## Ereignisse

_Erbt auch Ereignisse von ihrer Elternschnittstelle, {{DOMxRef("EventTarget")}}._

Hören Sie auf dieses Ereignis mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder durch Zuordnen einer Ereignis-Listener-Funktion zur `oneventname`-Eigenschaft dieser Schnittstelle.

- {{domxref("AbortSignal/abort_event", "abort")}}
  - : Wird aufgerufen, wenn die asynchronen Operationen, mit denen das Signal kommuniziert, abgebrochen werden.
    Ebenfalls über die `onabort`-Eigenschaft verfügbar.

## Beispiele

### Abbrechen einer Fetch-Operation mit einem expliziten Signal

Der folgende Ausschnitt zeigt, wie wir ein Signal verwenden können, um das Herunterladen eines Videos mit der [Fetch API](/de/docs/Web/API/Fetch_API) abzubrechen.

Wir erstellen zuerst einen Abbruchcontroller mit dem {{domxref("AbortController.AbortController","AbortController()")}} Konstruktor und greifen dann auf das zugehörige `AbortSignal`-Objekt über die {{domxref("AbortController.signal")}}-Eigenschaft zu.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option innerhalb des Anfrageoptionsobjekts (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht uns, diese durch Aufrufen von {{domxref("AbortController.abort()")}} abzubrechen. Unten sehen Sie, dass die Fetch-Operation im zweiten Event-Listener abgebrochen wird, der ausgelöst wird, wenn die Abbruch-Schaltfläche (`abortBtn`) geklickt wird.

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
    console.log("Download abgebrochen");
  }
});

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("Download abgeschlossen", response);
    // weitere Verarbeitung der Antwort
  } catch (err) {
    console.error(`Fehler beim Herunterladen: ${err.message}`);
  }
}
```

Wenn die Anfrage nach dem Erfüllen des `fetch()` Aufrufs abgebrochen wird, aber bevor der Antwortkörper gelesen wurde, wird der Versuch, den Antwortkörper zu lesen, mit einem `AbortError`-Ausnahme ablehnen.

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // Die nächste Zeile wird `AbortError` auslösen
  const text = await response.text();
  console.log(text);
}
```

Sie können ein [voll funktionsfähiges Beispiel auf GitHub finden](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

### Abbrechen einer Fetch-Operation mit einem Timeout

Wenn Sie die Operation bei einem Timeout abbrechen müssen, können Sie die statische Methode {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}} verwenden. Dies gibt ein `AbortSignal` zurück, das nach einer bestimmten Anzahl von Millisekunden automatisch abbricht.

Der folgende Codeausschnitt zeigt, wie Sie entweder erfolgreich eine Datei herunterladen oder mit einem Timeout-Fehler nach 5 Sekunden umgehen würden. Beachten Sie, dass bei einem Timeout das `fetch()`-Versprechen mit einem "`TimeoutError`" `DOMException` abgelehnt wird. Dies ermöglicht es dem Code, zwischen Timeouts (für die wahrscheinlich eine Benachrichtigung des Benutzers erforderlich ist) und Benutzerabbrüchen zu unterscheiden.

```js
const url = "video.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: Es dauerte mehr als 5 Sekunden, um das Ergebnis zu erhalten!");
  } else if (err.name === "AbortError") {
    console.error(
      "Fetch durch Benutzeraktion abgebrochen (Browser-Stop-Knopf, Tab schließen, etc.).",
    );
  } else {
    // Ein Netzwerkfehler oder ein anderes Problem.
    console.error(`Fehler: Typ: ${err.name}, Nachricht: ${err.message}`);
  }
}
```

### Abbrechen eines Fetch mit Timeout oder explizitem Abbruch

Wenn Sie von mehreren Signalen abbrechen möchten, können Sie {{domxref("AbortSignal/any_static", "AbortSignal.any()")}} verwenden, um sie zu einem einzigen Signal zu kombinieren. Das folgende Beispiel zeigt dies mit {{domxref("Window/fetch", "fetch")}}:

```js
try {
  const controller = new AbortController();
  const timeoutSignal = AbortSignal.timeout(5000);
  const res = await fetch(url, {
    // Dies wird das Fetch abbrechen, wenn eines der Signale abgebrochen wird
    signal: AbortSignal.any([controller.signal, timeoutSignal]),
  });
  const body = await res.json();
} catch (e) {
  if (e.name === "AbortError") {
    // Benachrichtige den Benutzer über den Abbruch.
  } else if (e.name === "TimeoutError") {
    // Benachrichtige den Benutzer über den Timeout
  } else {
    // Ein Netzwerkfehler oder ein anderes Problem.
    console.log(`Typ: ${e.name}, Nachricht: ${e.message}`);
  }
}
```

> [!NOTE]
> Im Gegensatz zur Verwendung von {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}} gibt es keine Möglichkeit zu erkennen, ob der endgültige Abbruch durch einen Timeout verursacht wurde.

### Implementierung einer abbrechbaren API

Eine API, die das Abbrechen unterstützen muss, kann ein `AbortSignal`-Objekt akzeptieren und dessen Status verwenden, um den Abbruchsignalen zu entsprechen, wenn nötig.

Eine auf {{jsxref("Promise")}} basierende API sollte auf das Abbruchsignal reagieren, indem sie jedes unerledigte Versprechen mit dem Abbruch-{{domxref("AbortSignal.reason", "Grund")}} des `AbortSignal` ablehnt. Zum Beispiel betrachten Sie die folgende `myCoolPromiseAPI`, die ein Signal übernimmt und ein Versprechen zurückgibt. Das Versprechen wird sofort abgelehnt, wenn das Signal bereits abgebrochen ist, oder wenn das Abbruchereignis entdeckt wird. Andernfalls wird es normal abgeschlossen und das Versprechen wird aufgelöst.

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // Wenn das Signal bereits abgebrochen ist, sofort werfen, um das Versprechen abzulehnen.
    if (signal.aborted) {
      reject(signal.reason);
    }

    // Hauptzweck der API ausführen
    // Rufen Sie resolve(result) auf, wenn abgeschlossen.

    // Auf 'abort'-Signale achten
    signal.addEventListener("abort", () => {
      // Hauptvorgang stoppen
      // Das Versprechen mit dem Abbruchgrund ablehnen.
      reject(signal.reason);
    });
  });
}
```

Die API könnte dann wie gezeigt verwendet werden. Beachten Sie, dass {{domxref("AbortController.abort()")}} aufgerufen wird, um die Operation abzubrechen.

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

APIs, die keine Versprechen zurückgeben, könnten auf ähnliche Weise reagieren. In manchen Fällen kann es sinnvoll sein, das Signal zu absorbieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

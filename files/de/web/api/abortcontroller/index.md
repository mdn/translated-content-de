---
title: AbortController
slug: Web/API/AbortController
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`AbortController`**-Interface stellt ein Controller-Objekt dar, das Ihnen ermöglicht, eine oder mehrere Web-Anfragen bei Bedarf abzubrechen.

Sie können ein neues `AbortController`-Objekt mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor erstellen. Die Kommunikation mit einer asynchronen Operation erfolgt über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Konstruktor

- [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)
  - : Erstellt eine neue Instanz eines `AbortController`-Objekts.

## Instanz-Eigenschaften

- [`AbortController.signal`](/de/docs/Web/API/AbortController/signal) {{ReadOnlyInline}}
  - : Gibt eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts zurück, das zur Kommunikation mit oder zum Abbruch einer asynchronen Operation verwendet werden kann.

## Instanz-Methoden

- [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort)
  - : Bricht eine asynchrone Operation ab, bevor sie abgeschlossen ist. Dies kann [fetch-Anfragen](/de/docs/Web/API/Window/fetch), den Verbrauch von Antwortinhalten und Strömen abbrechen.

## Beispiele

> [!NOTE]
> Es gibt zusätzliche Beispiele in der [`AbortSignal`](/de/docs/Web/API/AbortSignal) Referenz.

Im folgenden Beispiel versuchen wir, ein Video mit der [Fetch API](/de/docs/Web/API/Fetch_API) herunterzuladen.

Zunächst erstellen wir einen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und greifen dann auf ein zugehöriges [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt über die [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft zu.

Wenn die [fetch-Anfrage](/de/docs/Web/API/Window/fetch) gestartet wird, übergeben wir das `AbortSignal` als Option innerhalb des Optionsobjekts der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der fetch-Anfrage und ermöglicht es uns, sie durch Aufrufen von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen, wie unten im zweiten Ereignis-Listener zu sehen ist.

Wenn `abort()` aufgerufen wird, lehnt das `fetch()`-Promise mit einem `DOMException` namens `AbortError` ab.

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

Wenn die Anfrage nach dem `fetch()`-Aufruf abgebrochen wird, aber bevor der Antwortkörper gelesen wurde, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Ein [voll funktionsfähiges Beispiel finden Sie auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live ansehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

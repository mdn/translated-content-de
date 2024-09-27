---
title: AbortController
slug: Web/API/AbortController
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`AbortController`**-Interface repräsentiert ein Controller-Objekt, das es ermöglicht, eine oder mehrere Webanfragen nach Bedarf abzubrechen.

Sie können ein neues `AbortController`-Objekt mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController) Konstruktor erstellen. Die Kommunikation mit einem asynchronen Vorgang erfolgt mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekt.

## Konstruktor

- [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)
  - : Erstellt eine neue `AbortController`-Objektinstanz.

## Instanzeigenschaften

- [`AbortController.signal`](/de/docs/Web/API/AbortController/signal) {{ReadOnlyInline}}
  - : Gibt eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz zurück, die zur Kommunikation mit einem asynchronen Vorgang oder zum Abbruch desselben verwendet werden kann.

## Instanzmethoden

- [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort)
  - : Bricht einen asynchronen Vorgang ab, bevor er abgeschlossen ist. Dies kann [Fetch-Anfragen](/de/docs/Web/API/Window/fetch), den Verbrauch von Antwortinhalten und Streams abbrechen.

## Beispiele

> [!NOTE]
> Es gibt zusätzliche Beispiele in der [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Referenz.

Im folgenden Beispiel beabsichtigen wir, ein Video mit der [Fetch API](/de/docs/Web/API/Fetch_API) herunterzuladen.

Zuerst erstellen wir einen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController) Konstruktor und erhalten dann eine Referenz zu seinem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekt über die [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als eine Option im Optionsobjekt der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, sie durch Aufruf von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen, wie im zweiten Event-Listener unten gezeigt.

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

Wird die Anfrage abgebrochen, nachdem der `fetch()`-Aufruf erfüllt wurde, aber bevor der Antwortkörper gelesen wurde, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme abgelehnt.

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

Ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api) finden Sie; Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

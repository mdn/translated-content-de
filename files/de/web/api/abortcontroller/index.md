---
title: AbortController
slug: Web/API/AbortController
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`AbortController`**-Interface stellt ein Controller-Objekt dar, das es Ihnen ermöglicht, eine oder mehrere Webanfragen nach Belieben abzubrechen.

Sie können ein neues `AbortController`-Objekt mit dem {{domxref("AbortController.AbortController()", "AbortController()")}}-Konstruktor erstellen. Die Kommunikation mit einem asynchronen Vorgang erfolgt über ein {{domxref("AbortSignal")}}-Objekt.

## Konstruktor

- {{domxref("AbortController.AbortController()", "AbortController()")}}
  - : Erstellt eine neue `AbortController`-Objektinstanz.

## Instanzeigenschaften

- {{domxref("AbortController.signal")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("AbortSignal")}}-Objektinstanz zurück, die zur Kommunikation mit oder zum Abbrechen eines asynchronen Vorgangs verwendet werden kann.

## Instanzmethoden

- {{domxref("AbortController.abort()")}}
  - : Bricht einen asynchronen Vorgang ab, bevor er abgeschlossen ist. Dies kann dazu verwendet werden, [Fetch-Anfragen](/de/docs/Web/API/Window/fetch), die Verarbeitung von Antwortkörpern und Streams abzubrechen.

## Beispiele

> [!NOTE]
> Es gibt zusätzliche Beispiele in der {{domxref("AbortSignal")}}-Referenz.

Im folgenden Snippet möchten wir ein Video mithilfe der [Fetch API](/de/docs/Web/API/Fetch_API) herunterladen.

Zuerst erstellen wir einen Controller mit dem {{domxref("AbortController.AbortController","AbortController()")}}-Konstruktor und greifen dann mit der {{domxref("AbortController.signal")}}-Eigenschaft auf das zugehörige {{domxref("AbortSignal")}}-Objekt zu.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option im Optionsobjekt der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, sie durch Aufrufen von {{domxref("AbortController.abort()")}} abzubrechen, wie im zweiten Event-Listener unten gezeigt.

Wenn `abort()` aufgerufen wird, wird das `fetch()`-Versprechen mit einer `DOMException` namens `AbortError` zurückgewiesen.

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
    // verarbeite die Antwort weiter
  } catch (err) {
    console.error(`Download-Fehler: ${err.message}`);
  }
}
```

Wird die Anfrage abgebrochen, nachdem der `fetch()`-Aufruf erfüllt wurde, aber bevor der Antwortkörper gelesen wurde, wird der Versuch, den Antwortkörper zu lesen, mit einer `AbortError`-Ausnahme zurückgewiesen.

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

Ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api) finden Sie auch [live in Aktion](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) von Jake Archibald

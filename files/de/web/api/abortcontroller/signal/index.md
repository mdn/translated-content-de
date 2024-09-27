---
title: "AbortController: signal-Eigenschaft"
short-title: signal
slug: Web/API/AbortController/signal
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`signal`**-Eigenschaft der [`AbortController`](/de/docs/Web/API/AbortController)-Schnittstelle gibt eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz zurück, die verwendet werden kann, um mit einer asynchronen Operation zu kommunizieren oder diese nach Bedarf abzubrechen.

## Wert

Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz.

## Beispiele

Im folgenden Beispiel möchten wir ein Video mit der [Fetch API](/de/docs/Web/API/Fetch_API) herunterladen.

Zuerst erstellen wir einen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und holen dann eine Referenz zu seinem zugehörigen [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt über die `AbortController.signal`-Eigenschaft.

Wenn die [fetch-Anfrage](/de/docs/Web/API/Window/fetch) gestartet wird, übergeben wir das `AbortSignal` als Option innerhalb des Optionsobjekts der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der fetch-Anfrage und ermöglicht es uns, sie durch Aufruf von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen, wie unten im zweiten Event-Listener zu sehen ist.

```js
const controller = new AbortController();
const signal = controller.signal;

const url = "video.mp4";
const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});

function fetchVideo() {
  fetch(url, { signal })
    .then((response) => {
      console.log("Download complete", response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}
```

> [!NOTE]
> Wird `abort()` aufgerufen, lehnt das `fetch()`-Versprechen mit einem `AbortError` ab.

Ein [vollständig funktionierendes Beispiel finden Sie auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)

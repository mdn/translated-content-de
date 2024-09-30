---
title: "AbortController: signal-Eigenschaft"
short-title: signal
slug: Web/API/AbortController/signal
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`signal`** der [`AbortController`](/de/docs/Web/API/AbortController)-Schnittstelle gibt eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts zurück, die verwendet werden kann, um eine asynchrone Operation nach Bedarf zu kommunizieren oder abzubrechen.

## Wert

Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts.

## Beispiele

Im folgenden Beispiel versuchen wir, ein Video mithilfe der [Fetch API](/de/docs/Web/API/Fetch_API) herunterzuladen.

Zuerst erstellen wir einen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und greifen dann über die `AbortController.signal`-Eigenschaft auf das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt zu.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option innerhalb des Optionsobjekts der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, die Anfrage durch Aufrufen von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) abzubrechen, wie im zweiten Event-Listener unten gezeigt.

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
> Wenn `abort()` aufgerufen wird, wird das `fetch()`-Promise mit einem `AbortError` abgelehnt.

Sie finden ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live ausführen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)

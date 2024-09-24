---
title: "AbortController: signal-Eigenschaft"
short-title: signal
slug: Web/API/AbortController/signal
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`signal`** schreibgeschützte Eigenschaft der {{domxref("AbortController")}}-Schnittstelle gibt eine {{domxref("AbortSignal")}}-Objektinstanz zurück, die verwendet werden kann, um wie gewünscht mit einer asynchronen Operation zu kommunizieren oder diese abzubrechen.

## Wert

Eine {{domxref("AbortSignal")}}-Objektinstanz.

## Beispiele

Im folgenden Beispiel möchten wir ein Video mit der [Fetch-API](/de/docs/Web/API/Fetch_API) herunterladen.

Wir erstellen zuerst einen Controller mit dem {{domxref("AbortController.AbortController","AbortController()")}}-Konstruktor und erhalten dann eine Referenz zu seinem zugeordneten {{domxref("AbortSignal")}}-Objekt über die `AbortController.signal`-Eigenschaft.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) gestartet wird, übergeben wir das `AbortSignal` als Option im Optionsobjekt der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht uns, diese abzubrechen, indem wir {{domxref("AbortController.abort()")}} aufrufen, wie im zweiten Event-Listener unten zu sehen ist.

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
> Wenn `abort()` aufgerufen wird, lehnt das `fetch()`-Promise mit einem `AbortError` ab.

Sie finden ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)

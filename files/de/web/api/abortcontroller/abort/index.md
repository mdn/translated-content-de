---
title: "AbortController: abort()-Methode"
short-title: abort()
slug: Web/API/AbortController/abort
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode der [`AbortController`](/de/docs/Web/API/AbortController)-Schnittstelle bricht einen asynchronen Vorgang ab, bevor er abgeschlossen ist.
Dies kann [Fetch-Anfragen](/de/docs/Web/API/Window/fetch), den Verbrauch von Antwortkörpern oder Streams abbrechen.

## Syntax

```js-nolint
abort()
abort(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Der Grund, warum der Vorgang abgebrochen wurde, kann ein beliebiger JavaScript-Wert sein.
    Wenn nicht angegeben, wird der Grund auf "AbortError" [`DOMException`](/de/docs/Web/API/DOMException) gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel möchten wir ein Video mit der [Fetch API](/de/docs/Web/API/Fetch_API) herunterladen.

Wir erstellen zuerst einen Controller mit dem [`AbortController()`](/de/docs/Web/API/AbortController/AbortController)-Konstruktor und greifen dann mithilfe der [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft auf das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt zu.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option im Optionsobjekt der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, sie abzubrechen, indem wir `AbortController.abort()` aufrufen, wie unten im zweiten Event-Listener zu sehen ist.

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
> Wenn `abort()` aufgerufen wird, lehnt das `fetch()`-Versprechen mit einem `Error` vom Typ `DOMException` mit dem Namen `AbortError` ab.

Sie können ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api) finden; Sie können es auch [live laufen sehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)

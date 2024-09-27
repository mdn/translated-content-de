---
title: "AbortController: AbortController() Konstruktor"
short-title: AbortController()
slug: Web/API/AbortController/AbortController
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`AbortController()`**-Konstruktor erstellt eine neue Instanz des [`AbortController`](/de/docs/Web/API/AbortController)-Objekts.

## Syntax

```js-nolint
new AbortController()
```

### Parameter

Keine.

## Beispiele

Im folgenden Beispiel versuchen wir, ein Video mit der [Fetch API](/de/docs/Web/API/Fetch_API) herunterzuladen.

Wir erstellen zunächst einen Controller mit dem `AbortController()`-Konstruktor und erhalten dann eine Referenz auf das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt über die [`AbortController.signal`](/de/docs/Web/API/AbortController/signal)-Eigenschaft.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) gestartet wird, übergeben wir das `AbortSignal` als Option innerhalb des Optionsobjekts der Anfrage (das `{ signal }` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und ermöglicht es uns, sie abzubrechen, indem wir [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen, wie unten im zweiten Event-Listener zu sehen ist.

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

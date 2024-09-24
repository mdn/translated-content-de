---
title: "AbortController: abort()-Methode"
short-title: abort()
slug: Web/API/AbortController/abort
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode der {{domxref("AbortController")}}-Schnittstelle bricht eine asynchrone Operation ab, bevor sie abgeschlossen ist.
Dies kann verwendet werden, um [Fetch-Anfragen](/de/docs/Web/API/Window/fetch), den Verbrauch von Antwortkörpern oder Streams abzubrechen.

## Syntax

```js-nolint
abort()
abort(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Der Grund, warum die Operation abgebrochen wurde, der jeder beliebige JavaScript-Wert sein kann.
    Falls nicht angegeben, wird der Grund auf "AbortError" {{domxref("DOMException")}} gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wollen wir ein Video mit der [Fetch API](/de/docs/Web/API/Fetch_API) herunterladen.

Wir erstellen zunächst einen Controller mit dem {{domxref("AbortController.AbortController","AbortController()")}} Konstruktor und greifen dann auf das zugehörige {{domxref("AbortSignal")}}-Objekt über die {{domxref("AbortController.signal")}}-Eigenschaft zu.

Wenn die [Fetch-Anfrage](/de/docs/Web/API/Window/fetch) gestartet wird, übergeben wir das `AbortSignal` als Option im Optionsobjekt der Anfrage (das `{signal}` unten). Dies verknüpft das Signal und den Controller mit der Fetch-Anfrage und erlaubt es uns, sie abzubrechen, indem wir `AbortController.abort()` aufrufen, wie unten im zweiten Event-Listener gezeigt.

```js
const controller = new AbortController();
const signal = controller.signal;

const url = "video.mp4";
const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download abgebrochen");
});

function fetchVideo() {
  fetch(url, { signal })
    .then((response) => {
      console.log("Download abgeschlossen", response);
    })
    .catch((err) => {
      console.error(`Download-Fehler: ${err.message}`);
    });
}
```

> [!NOTE]
> Wenn `abort()` aufgerufen wird, schlägt das `fetch()`-Promise mit einem `Error` vom Typ `DOMException` fehl, mit dem Namen `AbortError`.

Sie finden ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live sehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)

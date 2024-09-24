---
title: "AbortController: AbortController() Konstruktor"
short-title: AbortController()
slug: Web/API/AbortController/AbortController
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`AbortController()`** Konstruktor erstellt eine neue Instanz des {{domxref("AbortController")}} Objekts.

## Syntax

```js-nolint
new AbortController()
```

### Parameter

Keine.

## Beispiele

Im folgenden Beispiel wollen wir ein Video mit der [Fetch API](/de/docs/Web/API/Fetch_API) herunterladen.

Wir erstellen zuerst einen Controller mit dem `AbortController()` Konstruktor und greifen dann über die {{domxref("AbortController.signal")}} Eigenschaft auf das zugeordnete {{domxref("AbortSignal")}} Objekt zu.

Wenn die [fetch-Anfrage](/de/docs/Web/API/Window/fetch) initiiert wird, übergeben wir das `AbortSignal` als Option innerhalb des Optionsobjekts der Anfrage (das `{ signal }` unten). Dadurch wird das Signal und der Controller mit der Fetch-Anfrage verknüpft und ermöglicht es uns, diese durch Aufrufen von {{domxref("AbortController.abort()")}} abzubrechen, wie unten im zweiten Event-Listener zu sehen ist.

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
> Wenn `abort()` aufgerufen wird, schlägt das `fetch()`-Promise mit einem `AbortError` fehl.

Sie finden ein [voll funktionsfähiges Beispiel auf GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); Sie können es auch [live laufen sehen](https://mdn.github.io/dom-examples/abort-api/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)

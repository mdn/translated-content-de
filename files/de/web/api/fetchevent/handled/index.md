---
title: "FetchEvent: handled-Eigenschaft"
short-title: handled
slug: Web/API/FetchEvent/handled
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`handled`**-Eigenschaft des [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt ein Promise zurück, das angibt, ob das Ereignis vom Fetch-Algorithmus behandelt wurde oder nicht. Diese Eigenschaft ermöglicht die Ausführung von Code, nachdem der Browser eine Antwort verarbeitet hat, und wird normalerweise zusammen mit der [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode verwendet.

## Wert

Ein {{jsxref("Promise")}}, das anhängig ist, während das Ereignis noch nicht behandelt wurde, und erfüllt wird, sobald es behandelt wurde.

## Beispiele

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      const response = await doCalculateAResponse(event.request);

      event.waitUntil(
        (async function () {
          await doSomeAsyncStuff(); // optional

          // Wait for the event to be consumed by the browser
          await event.handled;

          return doFinalStuff(); // Finalize AFTER the event has been consumed
        })(),
      );

      return response;
    })(),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)

---
title: "FetchEvent: handled-Eigenschaft"
short-title: handled
slug: Web/API/FetchEvent/handled
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`handled`** der Schnittstelle [`FetchEvent`](/de/docs/Web/API/FetchEvent) gibt ein Promise zurück, das anzeigt, ob das Ereignis vom Fetch-Algorithmus verarbeitet wurde. Mit dieser Eigenschaft kann Code ausgeführt werden, nachdem der Browser eine Antwort verarbeitet hat. Sie wird üblicherweise zusammen mit der Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) verwendet.

## Wert

Ein {{jsxref("Promise")}}, das ausstehend bleibt, solange das Ereignis nicht verarbeitet wurde, und erfüllt wird, sobald es verarbeitet wurde.

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

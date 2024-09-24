---
title: "FetchEvent: Eigenschaft handled"
short-title: handled
slug: Web/API/FetchEvent/handled
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`handled`**-Eigenschaft der {{DOMxRef("FetchEvent")}}-Schnittstelle gibt ein Promise zurück, das anzeigt, ob das Ereignis vom Fetch-Algorithmus verarbeitet wurde oder nicht. Diese Eigenschaft ermöglicht die Ausführung von Code, nachdem der Browser eine Antwort verarbeitet hat und wird normalerweise zusammen mit der {{DOMxRef("ExtendableEvent.waitUntil", "waitUntil()")}}-Methode verwendet.

## Wert

Ein {{jsxref("Promise")}}, das aussteht, solange das Ereignis nicht verarbeitet wurde, und erfüllt wird, sobald es verarbeitet wurde.

## Beispiele

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      const response = await doCalculateAResponse(event.request);

      event.waitUntil(
        (async function () {
          await doSomeAsyncStuff(); // optional

          // Warten, bis das Ereignis vom Browser verarbeitet wurde
          await event.handled;

          return doFinalStuff(); // Abschließen NACHDEM das Ereignis verarbeitet wurde
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

- {{DOMxRef("ExtendableEvent.waitUntil()")}}

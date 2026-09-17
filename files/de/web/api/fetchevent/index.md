---
title: FetchEvent
slug: Web/API/FetchEvent
l10n:
  sourceCommit: b19a19b1f3563c8f24fe7146c21cec2abdf68c9a
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Dies ist der Ereignistyp für `fetch`-Ereignisse, die im [globalen Scope des Service Workers](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgelöst werden. Er enthält Informationen über den Fetch, einschließlich der Anfrage und wie der Empfänger die Antwort behandeln wird. Er stellt die Methode [`event.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereit, mit der wir eine Antwort auf diesen Fetch bereitstellen können.

{{InheritanceDiagram}}

## Konstruktor

- [`FetchEvent()`](/de/docs/Web/API/FetchEvent/FetchEvent)
  - : Erstellt ein neues `FetchEvent`-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet. Der Browser erstellt diese Objekte und stellt sie den Callbacks von `fetch`-Ereignissen bereit.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorgänger, [`Event`](/de/docs/Web/API/Event)_.

- [`FetchEvent.clientId`](/de/docs/Web/API/FetchEvent/clientId) {{ReadOnlyInline}}
  - : Die [`id`](/de/docs/Web/API/Client/id) des gleichnamigen Ursprungs angehörenden [`client`](/de/docs/Web/API/Client), der den Fetch initiiert hat.
- [`FetchEvent.handled`](/de/docs/Web/API/FetchEvent/handled) {{ReadOnlyInline}}
  - : Ein Promise, das ausstehend ist, solange das Ereignis nicht verarbeitet wurde, und erfüllt wird, sobald es verarbeitet wurde.
- [`FetchEvent.isReload`](/de/docs/Web/API/FetchEvent/isReload) {{ReadOnlyInline}} {{Deprecated_inline}} {{Non-standard_inline}}
  - : Gibt `true` zurück, wenn das Ereignis durch den Versuch des Benutzers ausgelöst wurde, die Seite neu zu laden, andernfalls `false`.
- [`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response) oder `undefined`, wenn dieser Fetch keine Navigation ist oder [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) nicht aktiviert ist.
- [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) {{ReadOnlyInline}}
  - : Die [`id`](/de/docs/Web/API/Client/id) des [`client`](/de/docs/Web/API/Client), der den vorherigen Client während einer Seitennavigation ersetzt.
- [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) {{ReadOnlyInline}}
  - : Die [`Request`](/de/docs/Web/API/Request), die der Browser ausführen möchte.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Element, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)
  - : Verhindert die standardmäßige Fetch-Verarbeitung des Browsers und stellt selbst eine Antwort (oder ein Promise für eine Antwort) bereit.
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)
  - : Verlängert die Lebensdauer des Ereignisses. Wird verwendet, um den Browser über Aufgaben zu informieren, die über die Rückgabe einer Antwort hinausgehen, etwa Streaming und Caching.

## Beispiele

Dieses Fetch-Ereignis verwendet für Nicht-GET-Anfragen den Browser-Standard.
Bei GET-Anfragen wird versucht, eine Übereinstimmung im Cache zurückzugeben; andernfalls wird auf das Netzwerk zurückgegriffen. Wenn eine Übereinstimmung im Cache gefunden wird, wird der Cache asynchron für das nächste Mal aktualisiert.

```js
self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method !== "GET") return;

  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cache = await caches.open("dynamic-v1");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // If we found a match in the cache, return it, but also
        // update the entry in the cache in the background.
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })(),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetch`-Ereignis](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)

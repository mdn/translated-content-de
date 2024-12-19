---
title: FetchEvent
slug: Web/API/FetchEvent
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Dies ist der Ereignistyp für `fetch`-Ereignisse, die im [Service Worker Global Scope](/de/docs/Web/API/ServiceWorkerGlobalScope) ausgelöst werden. Es enthält Informationen über den Abruf, einschließlich der Anfrage und wie der Empfänger die Antwort behandeln wird. Es stellt die Methode [`event.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereit, die es uns ermöglicht, eine Antwort auf diesen Abruf bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`FetchEvent()`](/de/docs/Web/API/FetchEvent/FetchEvent)
  - : Erstellt ein neues `FetchEvent`-Objekt. Dieser Konstruktor wird typischerweise nicht verwendet. Der Browser erstellt diese Objekte und stellt sie `fetch`-Ereignisrückrufen zur Verfügung.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Event`](/de/docs/Web/API/Event)_.

- [`FetchEvent.clientId`](/de/docs/Web/API/FetchEvent/clientId) {{ReadOnlyInline}}
  - : Die [`id`](/de/docs/Web/API/Client/id) des gleichnamigen [`client`](/de/docs/Web/API/Client), der den Abruf initiiert hat.
- [`FetchEvent.handled`](/de/docs/Web/API/FetchEvent/handled) {{ReadOnlyInline}}
  - : Ein Versprechen, das anhängig ist, während das Ereignis nicht behandelt wurde, und erfüllt wird, sobald es behandelt wurde.
- [`FetchEvent.isReload`](/de/docs/Web/API/FetchEvent/isReload) {{ReadOnlyInline}} {{Deprecated_inline}} {{Non-standard_inline}}
  - : Gibt `true` zurück, wenn das Ereignis vom Benutzer ausgelöst wurde, der versucht hat, die Seite neu zu laden, andernfalls `false`.
- [`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response), oder `undefined`, wenn dieser Abruf keine Navigation ist oder [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) nicht aktiviert ist.
- [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) {{ReadOnlyInline}}
  - : Die [`id`](/de/docs/Web/API/Client/id) des [`client`](/de/docs/Web/API/Client), der während einer Seitennavigation ersetzt wird.
- [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) {{ReadOnlyInline}}
  - : Die [`id`](/de/docs/Web/API/Client/id) des [`client`](/de/docs/Web/API/Client), der den vorherigen Client während einer Seitennavigation ersetzt.
- [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) {{ReadOnlyInline}}
  - : Die [`Request`](/de/docs/Web/API/Request), die der Browser ausführen möchte.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)
  - : Verhindert die Standard-Abrufverarbeitung des Browsers und stellt (ein Versprechen für) eine eigene Antwort bereit.
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)
  - : Verlängert die Lebensdauer des Ereignisses. Wird verwendet, um den Browser über Aufgaben zu informieren, die über die Rückgabe einer Antwort hinausgehen, wie Streaming und Caching.

## Beispiele

Dieses `fetch`-Ereignis verwendet den Standard des Browsers für Nicht-GET-Anfragen. Bei GET-Anfragen versucht es, einen Cache-Treffer zurückzugeben und weicht auf das Netzwerk aus. Wenn es einen Treffer im Cache findet, aktualisiert es den Cache asynchron für das nächste Mal.

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

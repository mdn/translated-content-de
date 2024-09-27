---
title: FetchEvent
slug: Web/API/FetchEvent
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Dies ist der Ereignistyp für `fetch`-Ereignisse, die im {{domxref("ServiceWorkerGlobalScope", "service worker global scope", "", 1)}} ausgelöst werden. Es enthält Informationen über den Abruf, einschließlich der Anfrage und wie der Empfänger die Antwort behandeln wird. Es bietet die Methode [`event.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith), die es uns ermöglicht, eine Antwort auf diesen Abruf bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`FetchEvent()`](/de/docs/Web/API/FetchEvent/FetchEvent)
  - : Erstellt ein neues `FetchEvent`-Objekt. Dieser Konstruktor wird typischerweise nicht verwendet. Der Browser erstellt diese Objekte und stellt sie den `fetch`-Ereignisrückrufen bereit.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Event`](/de/docs/Web/API/Event)_.

- [`FetchEvent.clientId`](/de/docs/Web/API/FetchEvent/clientId) {{ReadOnlyInline}}
  - : Die [`id`](/de/docs/Web/API/Client/id) des gleich-originigen [`client`](/de/docs/Web/API/Client), der den Abruf initiiert hat.
- [`FetchEvent.handled`](/de/docs/Web/API/FetchEvent/handled) {{ReadOnlyInline}}
  - : Ein Promise, das anhängig ist, solange das Ereignis nicht bearbeitet wurde, und erfüllt wird, sobald es bearbeitet wurde.
- [`FetchEvent.isReload`](/de/docs/Web/API/FetchEvent/isReload) {{ReadOnlyInline}} {{Deprecated_inline}} {{Non-standard_inline}}
  - : Gibt `true` zurück, wenn das Ereignis ausgelöst wurde, weil der Benutzer versucht hat, die Seite neu zu laden, und `false` andernfalls.
- [`FetchEvent.preloadResponse`](/de/docs/Web/API/FetchEvent/preloadResponse) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response), oder `undefined`, wenn dieser Abruf keine Navigation ist oder [navigation preload](/de/docs/Web/API/NavigationPreloadManager) nicht aktiviert ist.
- [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) {{ReadOnlyInline}}
  - : Die [`id`](/de/docs/Web/API/Client/id) des [`client`](/de/docs/Web/API/Client), der bei einer Seiten-Navigation ersetzt wird.
- [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) {{ReadOnlyInline}}
  - : Die [`id`](/de/docs/Web/API/Client/id) des [`client`](/de/docs/Web/API/Client), der den vorherigen Client bei einer Seiten-Navigation ersetzt.
- [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) {{ReadOnlyInline}}
  - : Die [`Request`](/de/docs/Web/API/Request), die der Browser ausführen möchte.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)_.

- [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)
  - : Verhindert die Standardbehandlung des Abrufs durch den Browser und stellen Sie (ein Promise für) eine Antwort selbst bereit.
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)
  - : Verlängert die Lebensdauer des Ereignisses. Wird verwendet, um den Browser über Aufgaben zu informieren, die über die Bereitstellung einer Antwort hinausgehen, wie zum Beispiel Streaming und Caching.

## Beispiele

Dieses Fetch-Ereignis verwendet die Standardoption des Browsers für Nicht-GET-Anfragen.
Für GET-Anfragen versucht es, ein Ergebnis im Cache zurückzugeben und greift andernfalls auf das Netzwerk zurück. Wenn es ein Ergebnis im Cache findet, aktualisiert es den Cache asynchron für das nächste Mal.

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

- [`fetch` Ereignis](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
- {{jsxref("Promise")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)

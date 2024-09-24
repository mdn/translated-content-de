---
title: FetchEvent
slug: Web/API/FetchEvent
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Dies ist der Eventtyp für `fetch`-Ereignisse, die im {{domxref("ServiceWorkerGlobalScope", "Service Worker Global Scope", "", 1)}} ausgelöst werden. Es enthält Informationen über den Abruf, einschließlich der Anfrage und wie der Empfänger die Antwort behandeln wird. Es stellt die Methode {{domxref("FetchEvent.respondWith", "event.respondWith()")}} bereit, mit der wir eine Antwort auf diesen Abruf bereitstellen können.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("FetchEvent.FetchEvent()", "FetchEvent()")}}
  - : Erzeugt ein neues `FetchEvent`-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet. Der Browser erstellt diese Objekte und stellt sie den `fetch`-Ereignisrückrufen zur Verfügung.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren {{domxref("Event")}}_.

- {{domxref("FetchEvent.clientId")}} {{ReadOnlyInline}}
  - : Die {{domxref("Client.id", "id")}} des gleichartigen Ursprungs-{{domxref("Client", "Clients")}}, die den Abruf initiiert hat.
- {{domxref("FetchEvent.handled")}} {{ReadOnlyInline}}
  - : Ein Promise, das aussteht, solange das Ereignis nicht behandelt wurde, und erfüllt wird, sobald es behandelt wurde.
- {{domxref("FetchEvent.isReload")}} {{ReadOnlyInline}} {{Deprecated_inline}} {{Non-standard_inline}}
  - : Gibt `true` zurück, wenn das Ereignis durch den Versuch des Benutzers, die Seite neu zu laden, ausgelöst wurde, und ansonsten `false`.
- {{domxref("FetchEvent.preloadResponse")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}} für eine {{domxref("Response")}}, oder `undefined`, wenn dieser Abruf keine Navigation ist oder das [Navigations-Preload](/de/docs/Web/API/NavigationPreloadManager) nicht aktiviert ist.
- {{domxref("FetchEvent.replacesClientId")}} {{ReadOnlyInline}}
  - : Die {{domxref("Client.id", "id")}} des {{domxref("Client", "Clients")}}, die während einer Seitennavigation ersetzt wird.
- {{domxref("FetchEvent.resultingClientId")}} {{ReadOnlyInline}}
  - : Die {{domxref("Client.id", "id")}} des {{domxref("Client", "Clients")}}, die den vorherigen Client während einer Seitennavigation ersetzt.
- {{domxref("FetchEvent.request")}} {{ReadOnlyInline}}
  - : Die {{domxref("Request")}}, die der Browser ausführen möchte.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten {{domxref("ExtendableEvent")}}_.

- {{domxref("FetchEvent.respondWith()")}}
  - : Verhindert die Standardverarbeitung des Abrufs durch den Browser und liefert (ein Promise für) eine Antwort selbst.
- {{domxref("ExtendableEvent.waitUntil()")}}
  - : Verlängert die Lebensdauer des Ereignisses. Wird verwendet, um den Browser über Aufgaben zu informieren, die über das Zurückgeben einer Antwort hinausgehen, wie Streaming und Caching.

## Beispiele

Dieses Fetch-Ereignis verwendet den Standard des Browsers für Anfragen, die keine GET-Anfragen sind. Bei GET-Anfragen versucht es, eine Übereinstimmung im Cache zurückzugeben und greift im Fehlerfall auf das Netzwerk zurück. Wenn es eine Übereinstimmung im Cache findet, wird der Cache asynchron für das nächste Mal aktualisiert.

```js
self.addEventListener("fetch", (event) => {
  // Lassen Sie den Browser seine Standardaktion
  // für Anfragen, die keine GET-Anfragen sind, durchführen.
  if (event.request.method !== "GET") return;

  // Verhindern Sie die Standardaktion und bearbeiten Sie die Anfrage selbst.
  event.respondWith(
    (async () => {
      // Versuchen Sie, die Antwort aus einem Cache zu erhalten.
      const cache = await caches.open("dynamic-v1");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // Wenn wir eine Übereinstimmung im Cache gefunden haben, geben wir sie zurück,
        // aktualisieren aber auch den Eintrag im Cache im Hintergrund.
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      // Wenn wir keine Übereinstimmung im Cache gefunden haben, verwenden wir das Netzwerk.
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

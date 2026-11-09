---
title: "ServiceWorkerGlobalScope: fetch-Ereignis"
short-title: fetch
slug: Web/API/ServiceWorkerGlobalScope/fetch_event
l10n:
  sourceCommit: 0ef94661e0944ab73b1bb9470a6f44b00255be9a
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`fetch`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird im globalen Gültigkeitsbereich des Service Workers ausgelöst, wenn der Hauptthread der Anwendung eine Netzwerkanfrage stellt. Es ermöglicht dem Service Worker, Netzwerkanfragen abzufangen und angepasste Antworten zu senden, beispielsweise aus einem lokalen Cache.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht an übergeordnete Elemente weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("fetch", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onfetch = (event) => { }
```

## Ereignistyp

Ein [`FetchEvent`](/de/docs/Web/API/FetchEvent).

## Beschreibung

Das `fetch`-Ereignis wird im globalen Gültigkeitsbereich des Service Workers ausgelöst, wenn der Hauptthread der Anwendung eine Netzwerkanfrage stellt. Dazu gehören nicht nur explizite [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Aufrufe aus dem Hauptthread, sondern auch implizite Netzwerkanfragen, mit denen der Browser nach einer Seitennavigation Seiten und Unterressourcen wie JavaScript, CSS und Bilder lädt.

Dem Event-Handler wird ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt übergeben, das als [`Request`](/de/docs/Web/API/Request)-Instanz Zugriff auf die Anfrage bietet.

Das `FetchEvent` stellt außerdem eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode bereit, die eine [`Response`](/de/docs/Web/API/Response) (oder ein `Promise`, das zu einer `Response` aufgelöst wird) als Parameter entgegennimmt. Dadurch kann der Event-Handler des Service Workers die Antwort bereitstellen, die an die Anfrage im Hauptthread zurückgegeben wird.

Der Service Worker kann beispielsweise Folgendes zurückgeben:

- Eine lokal zwischengespeicherte Antwort, die über die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle abgerufen wurde.
- Eine vom Service Worker erzeugte Antwort, etwa mithilfe von Methoden wie [`Response.json()`](/de/docs/Web/API/Response/json) oder dem [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor.
- Einen Netzwerkfehler mithilfe der Methode [`Response.error()`](/de/docs/Web/API/Response/error_static). Dadurch wird der `fetch()`-Aufruf zurückgewiesen.

Die Methode `respondWith()` kann für eine bestimmte Anfrage nur einmal aufgerufen werden. Wenn mehrere `fetch`-Event-Listener hinzugefügt wurden, werden sie in der Reihenfolge ihrer Registrierung aufgerufen, bis einer von ihnen `respondWith()` aufruft.

Die Methode `respondWith()` muss synchron aufgerufen werden. Sie können sie also nicht in einem `then`-Handler aufrufen.

Üblicherweise verwendet ein `fetch`-Event-Handler je nach Eigenschaften der Anfrage, beispielsweise ihrer URL, unterschiedliche Strategien:

```js
function strategy1() {
  return fetch("picnic.jpg");
}

function strategy2() {
  return Response.error();
}

const pattern1 = /^\/salamander/;
const pattern2 = /^\/lizard/;

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (pattern1.test(url.pathname)) {
    event.respondWith(strategy1());
  } else if (pattern2.test(url.pathname)) {
    event.respondWith(strategy2());
  }
});
```

Wenn `respondWith()` im Handler nicht aufgerufen wird, führt der User Agent automatisch die ursprüngliche Netzwerkanfrage aus. Im obigen Code werden beispielsweise alle Anfragen, die weder `pattern1` noch `pattern2` entsprechen, so ausgeführt, als gäbe es den Service Worker nicht.

## Beispiele

### Cache mit Rückgriff auf das Netzwerk

Dieser `fetch`-Event-Handler versucht zunächst, die Antwort im Cache zu finden. Findet er eine Antwort, gibt er die zwischengespeicherte Antwort zurück. Andernfalls versucht er, die Ressource aus dem Netzwerk abzurufen.

```js
async function cacheThenNetwork(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    console.log("Found response in cache:", cachedResponse);
    return cachedResponse;
  }
  console.log("Falling back to network");
  return fetch(request);
}

self.addEventListener("fetch", (event) => {
  console.log(`Handling fetch event for ${event.request.url}`);
  event.respondWith(cacheThenNetwork(event.request));
});
```

### Nur Cache

Dieser `fetch`-Event-Handler setzt für Skripte und Stylesheets eine „Nur-Cache“-Strategie um. Wenn die Eigenschaft [`destination`](/de/docs/Web/API/Request/destination) der Anfrage `"script"` oder `"style"` ist, sucht der Handler ausschließlich im Cache und gibt einen Fehler zurück, falls keine Antwort gefunden wurde. Alle anderen Anfragen werden an das Netzwerk weitergeleitet.

```js
async function cacheOnly(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    console.log("Found response in cache:", cachedResponse);
    return cachedResponse;
  }
  return Response.error();
}

self.addEventListener("fetch", (event) => {
  if (
    event.request.destination === "script" ||
    event.request.destination === "style"
  ) {
    event.respondWith(cacheOnly(event.request));
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- Methode [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- Schnittstelle [`Request`](/de/docs/Web/API/Request)
- Schnittstelle [`Response`](/de/docs/Web/API/Response)

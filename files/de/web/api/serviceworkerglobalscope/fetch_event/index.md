---
title: "ServiceWorkerGlobalScope: fetch-Event"
short-title: fetch
slug: Web/API/ServiceWorkerGlobalScope/fetch_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`fetch`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird im globalen Gültigkeitsbereich des Service Workers ausgelöst, wenn der Haupt-App-Thread eine Netzwerk-Anfrage durchführt. Es ermöglicht dem Service Worker, Netzwerk-Anfragen abzufangen und angepasste Antworten zu senden (zum Beispiel aus einem lokalen Cache).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("fetch", (event) => { })

onfetch = (event) => { }
```

## Beschreibung

Das `fetch`-Ereignis wird im globalen Gültigkeitsbereich des Service Workers ausgelöst, wenn der Haupt-App-Thread eine Netzwerk-Anfrage stellt. Dies umfasst nicht nur explizite [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Aufrufe vom Haupt-Thread, sondern auch implizite Netzwerk-Anfragen, um Seiten und untergeordnete Ressourcen (wie JavaScript, CSS und Bilder) zu laden, die vom Browser nach einer Seiten-Navigation durchgeführt werden.

Der Ereignishandler erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt, welches Zugriff auf die Anfrage als [`Request`](/de/docs/Web/API/Request)-Instanz bietet.

Das `FetchEvent` stellt zudem eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode bereit, die eine [`Response`](/de/docs/Web/API/Response) (oder ein `Promise`, das zu einer `Response` aufgelöst wird) als Parameter annimmt. Dies ermöglicht dem Service Worker-Ereignishandler, die Antwort bereitzustellen, die auf die Anfrage im Haupt-Thread zurückgegeben wird.

Zum Beispiel kann der Service Worker zurückgeben:

- Eine lokal zwischengespeicherte Antwort, die über die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle abgerufen wird.
- Eine Antwort, die der Service Worker synthetisiert, unter Verwendung von Methoden wie [`Response.json()`](/de/docs/Web/API/Response/json) oder dem [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor.
- Einen Netzwerkfehler, unter Verwendung der [`Response.error()`](/de/docs/Web/API/Response/error_static)-Methode. Dies führt dazu, dass der `fetch()`-Aufruf abgelehnt wird.

Die `respondWith()`-Methode kann nur einmal für eine gegebene Anfrage aufgerufen werden. Wenn mehrere `fetch`-Ereignis-Listener hinzugefügt werden, werden sie in der Reihenfolge aufgerufen, in der sie registriert wurden, bis einer von ihnen `respondWith()` aufruft.

Die `respondWith()`-Methode muss synchron aufgerufen werden: Das heißt, man kann sie nicht in einem `then`-Handler aufrufen.

Typischerweise wird ein `fetch`-Ereignishandler unterschiedliche Strategien je nach Eigenschaften der Anfrage wie deren URL ausführen:

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

Wenn `respondWith()` im Handler nicht aufgerufen wird, führt der Benutzeragent automatisch die ursprüngliche Netzwerk-Anfrage durch. Zum Beispiel werden im obigen Code alle Anfragen, die nicht `pattern1` oder `pattern2` entsprechen, ausgeführt, als ob der Service Worker nicht existierte.

## Ereignistyp

Ein [`FetchEvent`](/de/docs/Web/API/FetchEvent).

## Beispiele

### Cache mit Fallback auf Netzwerk

Dieser `fetch`-Ereignishandler versucht zunächst, die Antwort im Cache zu finden. Wenn eine Antwort gefunden wird, gibt er die zwischengespeicherte Antwort zurück. Andernfalls versucht er, die Ressource aus dem Netzwerk zu holen.

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

Dieser `fetch`-Ereignishandler implementiert eine "nur Cache"-Strategie für Skripte und Stylesheets. Wenn die [`destination`](/de/docs/Web/API/Request/destination)-Eigenschaft der Anfrage `"script"` oder `"style"` ist, durchsucht der Handler nur den Cache und gibt bei Nichterfolg einen Fehler zurück. Alle anderen Anfragen gehen durch das Netzwerk.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Methode
- [`Request`](/de/docs/Web/API/Request)-Schnittstelle
- [`Response`](/de/docs/Web/API/Response)-Schnittstelle

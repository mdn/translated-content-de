---
title: "ServiceWorkerGlobalScope: fetch Event"
short-title: fetch
slug: Web/API/ServiceWorkerGlobalScope/fetch_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`fetch`**-Event der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird im globalen Kontext des Service-Workers ausgelöst, wenn der Haupt-App-Thread eine Netzwerk-Anfrage stellt. Es ermöglicht dem Service-Worker, Netzwerk-Anfragen abzufangen und angepasste Antworten zu senden (zum Beispiel aus einem lokalen Cache).

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("fetch", (event) => {});

onfetch = (event) => {};
```

## Beschreibung

Das `fetch`-Event wird im globalen Kontext des Service-Workers ausgelöst, wenn der Haupt-App-Thread eine Netzwerk-Anfrage stellt. Dies schließt nicht nur explizite [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Aufrufe vom Hauptthread ein, sondern auch implizite Netzwerk-Anfragen zum Laden von Seiten und Subressourcen (wie JavaScript, CSS und Bilder), die vom Browser nach einer Seitennavigation gestellt werden.

Der Ereignis-Handler erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt übergeben, das Zugriff auf die Anfrage als [`Request`](/de/docs/Web/API/Request)-Instanz bietet.

Das `FetchEvent` stellt auch eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode zur Verfügung, die eine [`Response`](/de/docs/Web/API/Response) (oder ein `Promise`, das in eine `Response` aufgelöst wird) als Parameter annimmt.
Dies ermöglicht es dem Event-Handler des Service-Workers, die Antwort zu liefern, die an die Anfrage im Hauptthread zurückgegeben wird.

Der Service-Worker kann zum Beispiel Folgendes zurückgeben:

- Eine lokal zwischengespeicherte Antwort, die über das [`Cache`](/de/docs/Web/API/Cache)-Interface abgerufen wurde.
- Eine Antwort, die der Service-Worker generiert, unter Verwendung von Methoden wie [`Response.json()`](/de/docs/Web/API/Response/json) oder dem [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor.
- Einen Netzwerkfehler mit der Methode [`Response.error()`](/de/docs/Web/API/Response/error_static). Dies führt dazu, dass der `fetch()`-Aufruf abgelehnt wird.

Die `respondWith()`-Methode kann nur einmal für eine gegebene Anfrage aufgerufen werden. Wenn mehrere `fetch`-Event-Listener hinzugefügt werden, werden sie in der Reihenfolge aufgerufen, in der sie registriert wurden, bis einer von ihnen `respondWith()` aufruft.

Die `respondWith()`-Methode muss synchron aufgerufen werden: das heißt, Sie können sie nicht in einem `then`-Handler aufrufen.

Typischerweise führt ein `fetch`-Ereignis-Handler verschiedene Strategien aus, abhängig von Merkmalen der Anfrage, wie zum Beispiel ihrer URL:

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

Wenn `respondWith()` nicht im Handler aufgerufen wird, führt der Benutzeragent automatisch die ursprüngliche Netzwerk-Anfrage aus.
Zum Beispiel werden im obigen Code alle Anfragen, die nicht `muster1` oder `muster2` entsprechen, so ausgeführt, als ob der Service-Worker nicht existieren würde.

## Ereignistyp

Ein [`FetchEvent`](/de/docs/Web/API/FetchEvent).

## Beispiele

### Cache bei Fehlen Rückgriff auf Netzwerk

Dieser `fetch`-Ereignis-Handler versucht zunächst, die Antwort im Cache zu finden. Wenn eine Antwort gefunden wird, gibt er die zwischengespeicherte Antwort zurück. Andernfalls versucht er, die Ressource aus dem Netzwerk abzurufen.

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

Dieser `fetch`-Ereignis-Handler implementiert eine "Nur Cache"-Policy für Skripte und Stylesheets. Wenn die [`destination`](/de/docs/Web/API/Request/destination)-Eigenschaft der Anfrage `"script"` oder `"style"` ist, sucht der Handler nur im Cache und gibt einen Fehler zurück, wenn die Antwort nicht gefunden wurde.
Alle anderen Anfragen werden über das Netzwerk geleitet.

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

- [Verwendung von Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service-Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Methode
- [`Request`](/de/docs/Web/API/Request)-Schnittstelle
- [`Response`](/de/docs/Web/API/Response)-Schnittstelle

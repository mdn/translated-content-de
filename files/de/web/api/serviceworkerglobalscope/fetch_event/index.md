---
title: "ServiceWorkerGlobalScope: fetch-Ereignis"
short-title: fetch
slug: Web/API/ServiceWorkerGlobalScope/fetch_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`fetch`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird im globalen Gültigkeitsbereich des Service Workers ausgelöst, wenn der Hauptanwendungsthread eine Netzwerk-Anfrage stellt. Es ermöglicht dem Service Worker, Netzwerk-Anfragen abzufangen und angepasste Antworten zu senden (z. B. aus einem lokalen Cache).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht "gebubbelt".

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("fetch", (event) => {});

onfetch = (event) => {};
```

## Beschreibung

Das `fetch`-Ereignis wird im globalen Bereich des Service Workers ausgelöst, wenn der Hauptanwendungsthread eine Netzwerk-Anfrage durchführt. Dies umfasst nicht nur explizite [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Aufrufe aus dem Hauptthread, sondern auch implizite Netzwerk-Anfragen zum Laden von Seiten und Unterressourcen (wie JavaScript, CSS und Bilder), die der Browser beim Seitenwechsel ausführt.

Der Ereignishandler erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt übergeben, das Zugriff auf die Anfrage als eine [`Request`](/de/docs/Web/API/Request)-Instanz bietet.

Das `FetchEvent` stellt auch eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode bereit, die eine [`Response`](/de/docs/Web/API/Response) (oder ein `Promise`, das in eine `Response` aufgelöst wird) als Parameter annimmt.
Dies ermöglicht es dem Service-Worker-Ereignishandler, die Antwort bereitzustellen, die auf die Anfrage im Hauptthread zurückgegeben wird.

Zum Beispiel kann der Service Worker Folgendes zurückgeben:

- Eine lokal zwischengespeicherte Antwort, die über das [`Cache`](/de/docs/Web/API/Cache)-Interface abgerufen wird.
- Eine Antwort, die der Service Worker synthetisiert, unter Verwendung von Methoden wie [`Response.json()`](/de/docs/Web/API/Response/json) oder dem [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor.
- Einen Netzwerkfehler mittels der [`Response.error()`](/de/docs/Web/API/Response/error_static)-Methode. Dies wird dazu führen, dass der `fetch()`-Aufruf abgelehnt wird.

Die `respondWith()`-Methode kann nur einmal für eine gegebene Anfrage aufgerufen werden. Wenn mehrere `fetch`-Ereignishandler hinzugefügt werden, werden sie in der Reihenfolge aufgerufen, in der sie registriert wurden, bis einer von ihnen `respondWith()` aufruft.

Die `respondWith()`-Methode muss synchron aufgerufen werden: das heißt, Sie können sie nicht in einem `then`-Handler aufrufen.

Typischerweise wird ein `fetch`-Ereignishandler unterschiedliche Strategien ausführen, abhängig von Merkmalen der Anfrage, wie ihrer URL:

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
Zum Beispiel werden in dem obigen Code alle Anfragen, die nicht `pattern1` oder `pattern2` entsprechen, so ausgeführt, als ob der Service Worker nicht existieren würde.

## Ereignistyp

Ein [`FetchEvent`](/de/docs/Web/API/FetchEvent).

## Beispiele

### Cache mit Rückgriff auf das Netzwerk

Dieser `fetch`-Ereignishandler versucht zuerst, die Antwort im Cache zu finden. Wenn eine Antwort gefunden wird, gibt er die zwischengespeicherte Antwort zurück. Andernfalls versucht er, die Ressource aus dem Netzwerk zu laden.

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

Dieser `fetch`-Ereignishandler implementiert eine "nur Cache"-Richtlinie für Skripte und Stylesheets. Wenn die [`destination`](/de/docs/Web/API/Request/destination)-Eigenschaft der Anfrage `"script"` oder `"style"` lautet, schaut der Handler nur im Cache nach und gibt einen Fehler zurück, wenn die Antwort nicht gefunden wird.
Alle anderen Anfragen werden über das Netzwerk weitergeleitet.

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
- [Einfaches Service-Worker-Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Methode
- [`Request`](/de/docs/Web/API/Request)-Schnittstelle
- [`Response`](/de/docs/Web/API/Response)-Schnittstelle

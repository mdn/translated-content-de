---
title: "ServiceWorkerGlobalScope: fetch-Ereignis"
short-title: fetch
slug: Web/API/ServiceWorkerGlobalScope/fetch_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`fetch`**-Ereignis des {{domxref("ServiceWorkerGlobalScope")}}-Interfaces wird im globalen Kontext des Service Workers ausgelöst, wenn der Hauptanwendungsthread eine Netzwerkanforderung stellt. Dadurch kann der Service Worker Netzwerkanforderungen abfangen und angepasste Antworten senden (z.B. aus einem lokalen Cache).

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("fetch", (event) => {});

onfetch = (event) => {};
```

## Beschreibung

Das `fetch`-Ereignis wird im globalen Kontext des Service Workers ausgelöst, wenn der Hauptanwendungsthread eine Netzwerkanforderung stellt. Dies umfasst nicht nur explizite {{domxref("WorkerGlobalScope/fetch", "fetch()")}}-Aufrufe aus dem Hauptthread, sondern auch implizite Netzwerkanforderungen zum Laden von Seiten und Subressourcen (wie JavaScript, CSS und Bilder), die vom Browser bei der Navigation ausgeführt werden.

Der Event-Handler erhält ein {{domxref("FetchEvent")}}-Objekt, das Zugriff auf die Anforderung als {{domxref("Request")}}-Instanz bietet.

Das `FetchEvent` bietet auch eine {{domxref("FetchEvent.respondWith()", "respondWith()")}}-Methode, die eine {{domxref("Response")}} (oder ein `Promise`, das in eine `Response` aufgelöst wird) als Parameter annimmt.
Dies ermöglicht es dem Service Worker-Event-Handler, die Antwort bereitzustellen, die an die Anforderung im Hauptthread zurückgegeben wird.

Der Service Worker kann zum Beispiel Folgendes zurückgeben:

- Eine lokal zwischengespeicherte Antwort, die über das {{domxref("Cache")}}-Interface abgerufen wurde.
- Eine Antwort, die der Service Worker synthetisiert, unter Verwendung von Methoden wie {{domxref("Response.json()")}} oder dem {{domxref("Response.Response()", "Response()")}}-Konstruktor.
- Einen Netzwerkfehler, mit der Methode {{domxref("Response.error_static()", "Response.error()")}}. Dadurch wird der `fetch()`-Aufruf abgelehnt.

Die Methode `respondWith()` kann nur einmal für eine gegebene Anforderung aufgerufen werden. Wenn mehrere `fetch`-Ereignis-Listener hinzugefügt werden, werden sie in der Reihenfolge aufgerufen, in der sie registriert wurden, bis einer von ihnen `respondWith()` aufruft.

Die Methode `respondWith()` muss synchron aufgerufen werden: das bedeutet, dass Sie sie nicht in einem `then`-Handler aufrufen können.

Typischerweise führt ein `fetch`-Ereignis-Handler unterschiedliche Strategien abhängig von den Eigenschaften der Anforderung wie ihrer URL aus:

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

Falls `respondWith()` nicht im Handler aufgerufen wird, führt der User Agent die ursprüngliche Netzwerkabfrage automatisch aus.
Zum Beispiel werden in dem obigen Code alle Anfragen, die weder `pattern1` noch `pattern2` entsprechen, ausgeführt, als ob der Service Worker nicht existieren würde.

## Ereignistyp

Ein {{domxref("FetchEvent")}}.

## Beispiele

### Cache mit Fallback auf Netzwerk

Dieser `fetch`-Ereignis-Handler versucht zuerst, die Antwort im Cache zu finden. Wenn eine Antwort gefunden wird, gibt er die gecachte Antwort zurück. Andernfalls versucht er, die Ressource aus dem Netzwerk abzurufen.

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

Dieser `fetch`-Ereignis-Handler implementiert eine "Nur-Cache"-Strategie für Skripte und Stylesheets. Wenn die {{domxref("Request.destination", "destination")}}-Eigenschaft der Anforderung `"script"` oder `"style"` ist, sucht der Handler nur im Cache und gibt einen Fehler zurück, wenn die Antwort nicht gefunden wurde.
Alle anderen Anfragen gehen direkt über das Netzwerk.

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
- [Beispielcode für grundlegende Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- {{domxref("WorkerGlobalScope/fetch", "fetch()")}}-Methode
- {{domxref("Request")}}-Interface
- {{domxref("Response")}}-Interface

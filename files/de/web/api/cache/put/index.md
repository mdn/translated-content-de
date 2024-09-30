---
title: "Cache: put() Methode"
short-title: put()
slug: Web/API/Cache/put
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`put()`**-Methode der
[`Cache`](/de/docs/Web/API/Cache)-Schnittstelle ermöglicht es, Schlüssel/Wert-Paare zum aktuellen
[`Cache`](/de/docs/Web/API/Cache)-Objekt hinzuzufügen.

Häufig möchten Sie einfach nur eine oder mehrere Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) abrufen und das Ergebnis direkt zu Ihrem Cache hinzufügen. In solchen Fällen ist es besser,
[`Cache.add()`](/de/docs/Web/API/Cache/add)/[`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) zu verwenden, da dies Kurzfunktionen für eine oder mehrere dieser Operationen sind.

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("Bad response status");
  }
  return cache.put(url, response);
});
```

> **Note:** `put()` überschreibt jedes zuvor im Cache gespeicherte Schlüssel/Wert-Paar, das der Anfrage entspricht.

> **Note:** [`Cache.add`](/de/docs/Web/API/Cache/add)/[`Cache.addAll`](/de/docs/Web/API/Cache/addAll) cachen keine Antworten mit `Response.status`-Werten, die nicht im 200-Bereich liegen, während `Cache.put` jede Anfrage-/Antwort-Paarung speichern lässt. Infolgedessen können [`Cache.add`](/de/docs/Web/API/Cache/add)/[`Cache.addAll`](/de/docs/Web/API/Cache/addAll) nicht verwendet werden, um undurchsichtige Antworten zu speichern, während `Cache.put` dies kann.

## Syntax

```js-nolint
put(request, response)
```

### Parameter

- `request`
  - : Das [`Request`](/de/docs/Web/API/Request)-Objekt oder die URL, die Sie dem Cache hinzufügen möchten.
- `response`
  - : Die [`Response`](/de/docs/Web/API/Response), die Sie der Anfrage zuordnen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn das URL-Schema nicht `http` oder `https` ist.

## Beispiele

Dieses Beispiel stammt aus dem MDN [simple-service-worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [simple-service-worker live](https://bncb2v.csb.app/)).
Hier warten wir auf das Auftreten eines [`FetchEvent`](/de/docs/Web/API/FetchEvent). Wir konstruieren eine benutzerdefinierte Antwort wie folgt:

1. Prüfen, ob ein Treffer für die Anfrage im [`CacheStorage`](/de/docs/Web/API/CacheStorage) mithilfe von [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match) gefunden wird. Wenn ja, diese bereitstellen.
2. Falls nicht, den `v1`-Cache mit `open()` öffnen, die Standard-Netzwerkanfrage mit `Cache.put()` in den Cache legen und eine Kopie der Standard-Netzwerkanfrage mit `return response.clone()` zurückgeben. Clone ist erforderlich, da `put()` den Antwortkörper verbraucht.
3. Sollte dies fehlschlagen (z.B. weil das Netzwerk nicht verfügbar ist), eine Ersatzantwort zurückgeben.

```js
let response;
const cachedResponse = caches
  .match(event.request)
  .then((r) => (r !== undefined ? r : fetch(event.request)))
  .then((r) => {
    response = r;
    caches.open("v1").then((cache) => {
      cache.put(event.request, response);
    });
    return response.clone();
  })
  .catch(() => caches.match("/gallery/myLittleVader.jpg"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

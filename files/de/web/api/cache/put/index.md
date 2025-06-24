---
title: "Cache: put() Methode"
short-title: put()
slug: Web/API/Cache/put
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`put()`** Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces ermöglicht das Hinzufügen von Schlüssel/Wert-Paaren zum aktuellen [`Cache`](/de/docs/Web/API/Cache)-Objekt.

Häufig möchten Sie einfach eine oder mehrere Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) ausführen und das Ergebnis direkt zu Ihrem Cache hinzufügen. In solchen Fällen ist es besser, [`Cache.add()`](/de/docs/Web/API/Cache/add)/[`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) zu verwenden, da dies Kurzbefehle für eine oder mehrere solcher Operationen sind.

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("Bad response status");
  }
  return cache.put(url, response);
});
```

> [!NOTE] > `put()` überschreibt jedes zuvor im Cache gespeicherte Schlüssel/Wert-Paar, das der Anfrage entspricht.

> [!NOTE] > [`Cache.add`](/de/docs/Web/API/Cache/add)/[`Cache.addAll`](/de/docs/Web/API/Cache/addAll) speichern keine Antworten mit `Response.status`-Werten, die nicht im 200er-Bereich liegen, wohingegen `Cache.put` es ermöglicht, jedes Anfrage-/Antwortpaar zu speichern. Daher können [`Cache.add`](/de/docs/Web/API/Cache/add)/[`Cache.addAll`](/de/docs/Web/API/Cache/addAll) nicht verwendet werden, um undurchsichtige Antworten zu speichern, während `Cache.put` dies kann.

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

Ein {{jsxref("Promise")}}, der mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn das URL-Schema nicht `http` oder `https` ist.

## Beispiele

Dieses Beispiel stammt aus dem MDN [simple-service-worker example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [simple-service-worker live ausführen](https://bncb2v.csb.app/)).
Hier warten wir auf das Auslösen eines [`FetchEvent`](/de/docs/Web/API/FetchEvent). Wir konstruieren eine benutzerdefinierte Antwort folgendermaßen:

1. Überprüfen Sie, ob ein Treffer für die Anfrage im [`CacheStorage`](/de/docs/Web/API/CacheStorage) mit [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match) gefunden wird. Falls ja, dienen Sie diese aus.
2. Falls nicht, öffnen Sie den `v1` Cache mit `open()`, legen die Standardnetzwerkanfrage im Cache mit `Cache.put()` ab und geben einen Klon der Standardnetzwerkantwort mit `return response.clone()` zurück. Ein Klon ist notwendig, da `put()` den Antwortkörper verbraucht.
3. Falls dies fehlschlägt (z. B. weil das Netzwerk ausgefallen ist), geben Sie eine Ersatzantwort zurück.

```js
let response;
const cachedResponse = caches
  .match(event.request)
  .then((r) => (r !== undefined ? r : fetch(event.request)))
  .then((r) => {
    response = r;
    caches.open("v1").then((cache) => cache.put(event.request, response));
    return response.clone();
  })
  .catch(() => caches.match("/gallery/myLittleVader.jpg"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

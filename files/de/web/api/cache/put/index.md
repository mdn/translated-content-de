---
title: "Cache: put()-Methode"
short-title: put()
slug: Web/API/Cache/put
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`put()`**-Methode der
[`Cache`](/de/docs/Web/API/Cache)-Schnittstelle ermöglicht es, Schlüssel/Wert-Paare zum aktuellen
[`Cache`](/de/docs/Web/API/Cache)-Objekt hinzuzufügen.

Oft möchten Sie einfach nur eine oder mehrere Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch)
abrufen und das Ergebnis direkt Ihrem Cache hinzufügen. In solchen Fällen ist es besser,
[`Cache.add()`](/de/docs/Web/API/Cache/add)/[`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) zu verwenden, da sie Kurzbefehle für eine oder mehrere dieser Operationen sind.

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("Bad response status");
  }
  return cache.put(url, response);
});
```

> **Note:** `put()` wird jedes zuvor im Cache gespeicherte Schlüssel/Wert-Paar, das mit der Anfrage übereinstimmt, überschreiben.

> **Note:** [`Cache.add`](/de/docs/Web/API/Cache/add)/[`Cache.addAll`](/de/docs/Web/API/Cache/addAll) cachen keine Antworten mit `Response.status`-Werten, die nicht im 200er-Bereich liegen, wohingegen `Cache.put` Ihnen erlaubt, jedes beliebige Anfrage-/Antwortenpaar zu speichern. Daher können [`Cache.add`](/de/docs/Web/API/Cache/add)/[`Cache.addAll`](/de/docs/Web/API/Cache/addAll) nicht verwendet werden, um undurchsichtige Antworten zu speichern, während `Cache.put` dies kann.

## Syntax

```js-nolint
put(request, response)
```

### Parameter

- `request`
  - : Das [`Request`](/de/docs/Web/API/Request)-Objekt oder die URL, die Sie dem Cache hinzufügen möchten.
- `response`
  - : Die [`Response`](/de/docs/Web/API/Response), die Sie mit der Anfrage abgleichen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn das URL-Schema nicht `http` oder `https` ist.

## Beispiele

Dieses Beispiel stammt aus dem MDN [simple-service-worker example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [simple-service-worker live ansehen](https://bncb2v.csb.app/)).
Hier warten wir darauf, dass ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort wie folgt:

1. Überprüfen Sie, ob ein Treffer für die Anfrage im [`CacheStorage`](/de/docs/Web/API/CacheStorage)
   mit [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match) gefunden wird. Wenn ja, dient das als Antwort.
2. Wenn nicht, öffnen Sie den `v1`-Cache mit `open()`, legen die Standardnetzwerkanfrage im Cache ab mit `Cache.put()` und geben Sie einen
   Klon der Standardnetzwerkanfrage zurück mit `return response.clone()`. Ein Klon ist notwendig, da `put()` den Antwortinhalt verbraucht.
3. Wenn dies fehlschlägt (z. B. weil das Netzwerk ausfällt), geben Sie eine Ersatzantwort zurück.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

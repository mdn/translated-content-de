---
title: "Cache: put()-Methode"
short-title: put()
slug: Web/API/Cache/put
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`put()`**-Methode der
{{domxref("Cache")}}-Schnittstelle ermöglicht das Hinzufügen von Schlüssel/Wert-Paaren zum aktuellen
{{domxref("Cache")}}-Objekt.

Oft möchten Sie einfach nur eine oder mehrere Anfragen mit {{domxref("Window/fetch", "fetch()")}} durchführen und dann das Ergebnis direkt Ihrem Cache hinzufügen. In solchen Fällen ist es besser, {{domxref("Cache.add","Cache.add()")}}/{{domxref("Cache.addAll","Cache.addAll()")}} zu verwenden, da sie Kurzbefehle für eine oder mehrere dieser Operationen sind.

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("Bad response status");
  }
  return cache.put(url, response);
});
```

> **Note:** `put()` überschreibt jedes zuvor im Cache gespeicherte Schlüssel/Wert-Paar, das der Anfrage entspricht.

> **Note:** {{domxref("Cache.add")}}/{{domxref("Cache.addAll")}} speichern keine Antworten mit `Response.status`-Werten, die nicht im 200er-Bereich liegen, während `Cache.put` es Ihnen ermöglicht, jedes Anfrage-/Antwort-Paar zu speichern. Daher können {{domxref("Cache.add")}}/{{domxref("Cache.addAll")}} nicht verwendet werden, um undurchsichtige Antworten zu speichern, während `Cache.put` dies tun kann.

## Syntax

```js-nolint
put(request, response)
```

### Parameter

- `request`
  - : Das {{domxref("Request")}}-Objekt oder die URL, die Sie zum Cache hinzufügen möchten.
- `response`
  - : Die {{domxref("Response")}}, die Sie mit der Anfrage abgleichen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn das URL-Schema nicht `http` oder `https` ist.

## Beispiele

Dieses Beispiel stammt aus dem MDN [simple-service-worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [simple-service-worker live ausgeführt](https://bncb2v.csb.app/)). Hier warten wir darauf, dass ein {{domxref("FetchEvent")}} ausgelöst wird. Wir erstellen eine benutzerdefinierte Antwort wie folgt:

1. Überprüfen, ob ein Treffer für die Anfrage im {{domxref("CacheStorage")}} gefunden wird, indem {{domxref("CacheStorage.match","CacheStorage.match()")}} verwendet wird. Falls ja, wird dieser bereitgestellt.
2. Falls nicht, öffnen Sie den `v1`-Cache mit `open()`, legen Sie die standardmäßige Netzwerkanfrage mit `Cache.put()` im Cache ab und geben Sie einen Klon der standardmäßigen Netzwerkanfrage mit `return response.clone()` zurück. Ein Klon ist erforderlich, da `put()` den Antwortinhalt verbraucht.
3. Falls dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), geben Sie eine Fallback-Antwort zurück.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}

---
title: "CacheStorage: match() Methode"
short-title: match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode des [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interfaces überprüft, ob ein gegebener [`Request`](/de/docs/Web/API/Request) oder eine URL-Zeichenkette ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist.
Diese Methode gibt ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response) zurück oder ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird, wenn kein Treffer gefunden wird.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

`Cache`-Objekte werden in der Reihenfolge ihrer Erstellung durchsucht.

> **Note:** `caches.match()` ist eine Komfortmethode.
> Eine gleichwertige Funktionalität besteht darin, [`cache.match()`](/de/docs/Web/API/Cache/match) auf jedem Cache aufzurufen (in der Reihenfolge, die von [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben wird), bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Der [`Request`](/de/docs/Web/API/Request), den Sie abgleichen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL-Zeichenkette sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `match`-Operation durchgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der festlegt, ob der Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll. Wenn beispielsweise `true` gesetzt ist, würde der Teil `?value=bar` von `http://foo.com/?value=bar` bei der Durchführung eines Abgleichs ignoriert werden. Standardmäßig ist dieser auf `false` gesetzt.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, verhindert, dass Abgleichsoperationen die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist dieser auf `false` gesetzt.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, der Abgleichsoperation vorschreibt, keine `VARY`-Header-Überprüfung durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie einen Treffer, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist dieser auf `false` gesetzt.
    - `cacheName`
      - : Eine Zeichenkette, die einen spezifischen Cache repräsentiert, innerhalb dessen gesucht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zur übereinstimmenden [`Response`](/de/docs/Web/API/Response) aufgelöst wird. Wenn keine übereinstimmende Antwort auf die angegebene Anfrage gefunden wird, wird das Promise mit `undefined` aufgelöst.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfaches Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfacher Service Worker live](https://bncb2v.csb.app/)).
Hier warten wir auf ein [`FetchEvent`](/de/docs/Web/API/FetchEvent). Wir konstruieren eine benutzerdefinierte Antwort wie folgt:

1. Überprüfen, ob ein Treffer für die Anfrage im [`CacheStorage`](/de/docs/Web/API/CacheStorage) mit `CacheStorage.match()` gefunden wird. Falls ja, dieser wird verwendet.
2. Wenn nicht, öffnen Sie den `v1` Cache mit `open()`, legen Sie die Standardnetzwerkanfrage mit [`Cache.put()`](/de/docs/Web/API/Cache/put) in den Cache und geben Sie mit `return response.clone()` einen Klon der Standardnetzwerkanfrage zurück. Letzteres ist notwendig, da `put()` den Antwortkörper verbraucht.
3. Wenn dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), geben Sie eine Ersatzantwort zurück.

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then((response) => {
            // response may be used only once
            // we need to save clone to put one copy in cache
            // and serve second one
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => caches.match("/gallery/myLittleVader.jpg"));
      }
    }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

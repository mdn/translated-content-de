---
title: "CacheStorage: match() Methode"
short-title: match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode des [`CacheStorage`](/de/docs/Web/API/CacheStorage) Schnittstelle überprüft, ob eine gegebene [`Request`](/de/docs/Web/API/Request) oder URL-Zeichenfolge ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Diese Methode gibt ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response) zurück oder ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird, wenn kein Treffer gefunden wird.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches) Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft in Workern zugreifen.

`Cache`-Objekte werden in der Reihenfolge ihrer Erstellung durchsucht.

> [!NOTE] > `caches.match()` ist eine bequeme Methode.
> Eine gleichwertige Funktionalität besteht darin, [`cache.match()`](/de/docs/Web/API/Cache/match) auf jedem Cache (in der Reihenfolge der von [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegebenen Werte) aufzurufen, bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), die Sie abgleichen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL-Zeichenfolge sein.
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften steuern, wie der Abgleich in der `match`-Operation durchgeführt wird. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsvorgang den Abfrage-String in der URL ignorieren soll. Zum Beispiel, wenn auf `true` gesetzt, würde der `?value=bar` Teil von `http://foo.com/?value=bar` ignoriert, wenn ein Abgleich durchgeführt wird. Standardmäßig ist dies `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, verhindert, dass die Abgleichsoperationen die `http`-Methode der [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist dies `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, der Abgleichsoperation mitteilt, das `VARY`-Header-Matching nicht durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie einen Treffer, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist dies `false`.
    - `cacheName`
      - : Eine Zeichenfolge, die einen bestimmten Cache zum Durchsuchen darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu der übereinstimmenden [`Response`](/de/docs/Web/API/Response) auflöst. Falls keine übereinstimmende Antwort für die angegebene Anfrage gefunden wird, wird das Promise mit `undefined` aufgelöst.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfachen Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfacher Service Worker läuft live](https://bncb2v.csb.app/)). Hier warten wir darauf, dass ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort folgendermaßen:

1. Überprüfen Sie, ob ein Treffer für die Anfrage im [`CacheStorage`](/de/docs/Web/API/CacheStorage) gefunden wird, indem `CacheStorage.match()` verwendet wird. Falls vorhanden, wird dieser bedient.
2. Falls nicht, öffnen Sie den `v1`-Cache mit `open()`, legen Sie die Standard-Netzwerkanfrage mit [`Cache.put()`](/de/docs/Web/API/Cache/put) in den Cache und geben Sie eine Kopie der Standard-Netzwerkanfrage zurück, indem Sie `return response.clone()` verwenden. Letzteres ist notwendig, weil `put()` den Antwortkörper konsumiert.
3. Wenn dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), geben Sie eine Ersatzantwort zurück.

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      }
      return fetch(event.request)
        .then((response) => {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();

          caches
            .open("v1")
            .then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => caches.match("/gallery/myLittleVader.jpg"));
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

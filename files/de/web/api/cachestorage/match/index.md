---
title: "CacheStorage: match()-Methode"
short-title: match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`**-Methode des [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interfaces überprüft, ob eine gegebene [`Request`](/de/docs/Web/API/Request)- oder URL-Zeichenfolge ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist.
Diese Methode gibt ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response) zurück oder ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird, wenn kein Treffer gefunden wird.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

`Cache`-Objekte werden in der Erstellungsreihenfolge durchsucht.

> [!NOTE]
> `caches.match()` ist eine Komfortmethode.
> Eine gleichwertige Funktionalität besteht darin, [`cache.match()`](/de/docs/Web/API/Cache/match) für jeden Cache (in der Reihenfolge, die von [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben wird) aufzurufen, bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), die Sie abgleichen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL-Zeichenfolge sein.
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `match`-Operation durchgeführt wird. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Matching-Prozess die Abfragezeichenfolge in der URL ignorieren soll. Wenn zum Beispiel auf `true` gesetzt, würde der `?value=bar` Teil von `https://example.com/?value=bar` beim Matching ignoriert. Standard ist `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, verhindert, dass Matching-Operationen die `http`-Methode der [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standard ist `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, die Matching-Operation anweist, kein `VARY` Header-Matching durchzuführen. Mit anderen Worten: Wenn die URL übereinstimmt, erhalten Sie einen Treffer, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standard ist `false`.
    - `cacheName`
      - : Eine Zeichenkette, die einen bestimmten Cache darstellt, in dem gesucht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das die übereinstimmende [`Response`](/de/docs/Web/API/Response) auflöst. Wenn keine übereinstimmende Antwort auf die angegebene Anfrage gefunden wird, wird das Promise mit `undefined` aufgelöst.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfachen Service-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfacher Service Worker live](https://bncb2v.csb.app/)).
Hier warten wir, bis ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort wie folgt:

1. Prüfen, ob ein Treffer für die Anfrage in der [`CacheStorage`](/de/docs/Web/API/CacheStorage) mit `CacheStorage.match()` gefunden wird. Falls ja, dienen Sie diese.
2. Falls nicht, öffnen Sie den `v1` Cache mit `open()`, setzen die Standardnetzwerkanfrage in den Cache mit [`Cache.put()`](/de/docs/Web/API/Cache/put) und geben Sie einen Klon der Standardnetzwerkanfrage mittels `return response.clone()` zurück. Das Letzte ist notwendig, da `put()` den Antwortkörper verbraucht.
3. Wenn dies fehlschlägt (z. B. weil das Netzwerk ausgefallen ist), geben Sie eine Fallback-Antwort zurück.

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

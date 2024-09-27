---
title: "CacheStorage: match() Methode"
short-title: match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode der [`CacheStorage`](/de/docs/Web/API/CacheStorage) Schnittstelle prüft, ob eine angegebene [`Request`](/de/docs/Web/API/Request) oder URL-Zeichenfolge ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Diese Methode gibt ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response) zurück oder ein {{jsxref("Promise")}}, das sich in `undefined` auflöst, falls kein Treffer gefunden wird.

Sie können `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches) Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft in Worker-Threads aufrufen.

`Cache` Objekte werden in der Reihenfolge ihrer Erstellung durchsucht.

> **Note:** `caches.match()` ist eine Komfortmethode. Die äquivalente Funktionalität besteht darin, [`cache.match()`](/de/docs/Web/API/Cache/match) auf jedem Cache (in der Reihenfolge, die durch [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben wird) aufzurufen, bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), die Sie abgleichen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request) Objekt oder eine URL-Zeichenfolge sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `match`-Operation durchgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess den Abfrage-String in der URL ignorieren soll. Zum Beispiel, wenn `true` gesetzt ist, würde der `?value=bar` Teil von `http://foo.com/?value=bar` beim Abgleich ignoriert. Der Standardwert ist `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, die Abgleichsoperationen daran hindert, die [`Request`](/de/docs/Web/API/Request) `http` Methode zu validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Der Standardwert ist `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, der Abgleichsoperation anweist, kein `VARY` Header-Matching durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie einen Treffer, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response) Objekt einen `VARY` Header hat oder nicht. Der Standardwert ist `false`.
    - `cacheName`
      - : Ein String, der einen spezifischen Cache repräsentiert, in dem gesucht werden soll.

### Rückgabewert

ein {{jsxref("Promise")}}, das sich in die übereinstimmende [`Response`](/de/docs/Web/API/Response) auflöst. Wenn keine übereinstimmende Antwort zur angegebenen Anfrage gefunden wird, löst sich das Promise mit `undefined` auf.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfachen Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfachen Service Worker live laufend](https://bncb2v.csb.app/)). Hier warten wir darauf, dass ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort wie folgt:

1. Überprüfen Sie, ob ein Treffer für die Anfrage in der [`CacheStorage`](/de/docs/Web/API/CacheStorage) mit `CacheStorage.match()` gefunden wird. Wenn ja, liefern Sie diese.
2. Falls nicht, öffnen Sie den `v1` Cache mit `open()`, legen Sie die Standardnetzwerkanfrage mit [`Cache.put()`](/de/docs/Web/API/Cache/put) in den Cache und geben Sie mit `return response.clone()` eine Kopie der Standardnetzwerkanfrage zurück. Das Letzte ist notwendig, weil `put()` den Antwortkörper verbraucht.
3. Wenn dies fehlschlägt (z. B. weil das Netzwerk ausgefallen ist), geben Sie eine Ersatzantwort zurück.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

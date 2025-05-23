---
title: "CacheStorage: match() Methode"
short-title: match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode der [`CacheStorage`](/de/docs/Web/API/CacheStorage) Schnittstelle überprüft, ob eine gegebene [`Request`](/de/docs/Web/API/Request) oder URL-Zeichenkette ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Diese Methode gibt ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response) zurück oder ein {{jsxref("Promise")}}, das sich zu `undefined` auflöst, wenn keine Übereinstimmung gefunden wird.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches) Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft in Workern zugreifen.

`Cache` Objekte werden in der Reihenfolge ihrer Erstellung durchsucht.

> **Note:** `caches.match()` ist eine praktische Methode.
> Funktional gleichwertig ist es, [`cache.match()`](/de/docs/Web/API/Cache/match) auf jedem Cache (in der Reihenfolge, die von [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben wird) aufzurufen, bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Der [`Request`](/de/docs/Web/API/Request), den Sie abgleichen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request)
    Objekt oder eine URL-Zeichenkette sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `match`-Operation durchgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der
        Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll. Zum Beispiel, wenn auf `true` gesetzt, würde der `?value=bar` Teil von
        `http://foo.com/?value=bar` beim Abgleich ignoriert werden.
        Standardmäßig ist dies `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Abgleichsoperationen die
        [`Request`](/de/docs/Web/API/Request) `http` Methode überprüfen (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist dies `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, die Abgleichsoperation anweist, keine `VARY`
        Header-Überprüfung durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung,
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response) Objekt einen `VARY`
        Header hat oder nicht. Standardmäßig ist dies `false`.
    - `cacheName`
      - : Ein String, der einen spezifischen
        Cache repräsentiert, in dem gesucht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zur übereinstimmenden [`Response`](/de/docs/Web/API/Response) auflöst. Wenn
keine übereinstimmende Antwort für die angegebene Anfrage gefunden wird, löst sich das Promise
mit `undefined` auf.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfachen Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfachen Service Worker live laufen](https://bncb2v.csb.app/)).
Hier warten wir darauf, dass ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort
wie folgt:

1. Überprüfen Sie, ob eine Übereinstimmung für die Anfrage im [`CacheStorage`](/de/docs/Web/API/CacheStorage)
   mithilfe von `CacheStorage.match()` gefunden wird. Falls ja, liefern Sie diese.
2. Falls nicht, öffnen Sie den `v1` Cache mit `open()`, setzen die Standard-Netzwerkanfrage
   mit [`Cache.put()`](/de/docs/Web/API/Cache/put) in den Cache und geben einen
   Klon der Standard-Netzwerkanfrage mit `return response.clone()` zurück. Letzteres
   ist nötig, da `put()` den Antwortkörper verbraucht.
3. Falls dies fehlschlägt (z. B. weil das Netzwerk ausgefallen ist), geben Sie eine
   Ersatzantwort zurück.

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

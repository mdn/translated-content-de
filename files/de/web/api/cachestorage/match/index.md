---
title: "CacheStorage: match() Methode"
short-title: match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode des [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interfaces überprüft, ob eine gegebene [`Request`](/de/docs/Web/API/Request) oder URL-String ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Diese Methode gibt ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response) zurück, oder ein {{jsxref("Promise")}}, das zu `undefined` aufgelöst wird, wenn keine Übereinstimmung gefunden wird.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Arbeitern zugreifen.

`Cache` Objekte werden in der Reihenfolge ihrer Erstellung durchsucht.

> **Note:** `caches.match()` ist eine Komfortmethode. Eine gleichwertige Funktionalität besteht darin, [`cache.match()`](/de/docs/Web/API/Cache/match) für jeden Cache (in der Reihenfolge, die von [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben wird) aufzurufen, bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request) die Sie abgleichen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder ein URL-String sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `match`-Operation durchgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolean Wert, der angibt, ob der Matching-Prozess den Abfrage-String in der URL ignorieren soll. Zum Beispiel, wenn auf `true` gesetzt, würde der `?value=bar`-Teil von `http://foo.com/?value=bar` bei einem Match ignoriert werden. Standardmäßig ist es `false`.
    - `ignoreMethod`
      - : Ein boolean Wert, der, wenn auf `true` gesetzt, verhindert, dass Matching-Operationen die `http`-Methode der [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist es `false`.
    - `ignoreVary`
      - : Ein boolean Wert, der, wenn auf `true` gesetzt, der Matching-Operation mitteilt, keine `VARY`-Header-Überprüfung durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist es `false`.
    - `cacheName`
      - : Ein String, der einen spezifischen Cache repräsentiert, in dem gesucht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu der übereinstimmenden [`Response`](/de/docs/Web/API/Response) aufgelöst wird. Wenn keine übereinstimmende Antwort auf die angegebene Anfrage gefunden wird, wird das Versprechen mit `undefined` aufgelöst.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfaches Service-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfacher Service-Worker läuft live](https://bncb2v.csb.app/)). Hier warten wir darauf, dass ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort so:

1. Prüfen, ob eine Übereinstimmung für die Anfrage im [`CacheStorage`](/de/docs/Web/API/CacheStorage) mit `CacheStorage.match()` gefunden wird. Falls ja, diese bereitstellen.
2. Falls nicht, den `v1`-Cache mit `open()` öffnen, die Standard-Netzwerkanfrage mit [`Cache.put()`](/de/docs/Web/API/Cache/put) in den Cache setzen und einen Klon der Standard-Netzwerkanfrage mit `return response.clone()` zurückgeben. Letzteres ist notwendig, weil `put()` den Antwortkörper verbraucht.
3. Wenn dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), eine Ersatzantwort zurückgeben.

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

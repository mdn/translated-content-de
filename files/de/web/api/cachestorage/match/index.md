---
title: "CacheStorage: match() Methode"
short-title: match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode des [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interfaces überprüft, ob eine angegebene [`Request`](/de/docs/Web/API/Request) oder URL-Zeichenkette ein Schlüssel für eine gespeicherte [`Response`](/de/docs/Web/API/Response) ist. Diese Methode gibt ein {{jsxref("Promise")}} für eine [`Response`](/de/docs/Web/API/Response) zurück oder ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird, wenn kein Treffer gefunden wird.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

`Cache`-Objekte werden in der Reihenfolge ihrer Erstellung durchsucht.

> [!NOTE]
> `caches.match()` ist eine bequeme Methode. Eine gleichwertige Funktionalität besteht darin, [`cache.match()`](/de/docs/Web/API/Cache/match) für jeden Cache (in der Reihenfolge, die von [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben wird) aufzurufen, bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), die Sie abgleichen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL-Zeichenkette sein.
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `match`-Operation durchgeführt wird. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Matching-Prozess die Abfragezeichenfolge in der URL ignorieren soll. Wenn beispielsweise auf `true` gesetzt, würde der Teil `?value=bar` von `https://example.com/?value=bar` bei einem Abgleich ignoriert. Standardmäßig ist er `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, verhindert, dass die Operationen zur Übereinstimmung die `http`-Methode der [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist er `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, die Übereinstimmungsoperation anweist, keine `VARY`-Header-Abgleichung durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie ungeachtet dessen eine Übereinstimmung, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist er `false`.
    - `cacheName`
      - : Eine Zeichenkette, die einen spezifischen Cache repräsentiert, in dem gesucht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf die übereinstimmende [`Response`](/de/docs/Web/API/Response) aufgelöst wird. Wenn keine übereinstimmende Antwort für die angegebene Anfrage gefunden wird, wird das Versprechen mit `undefined` aufgelöst.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfachen Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfachen Service Worker live ausgeführt](https://bncb2v.csb.app/)). Hier warten wir darauf, dass ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir erstellen eine benutzerdefinierte Antwort folgendermaßen:

1. Überprüfen Sie, ob ein Treffer für die Anfrage im [`CacheStorage`](/de/docs/Web/API/CacheStorage) mit `CacheStorage.match()` gefunden wird. Falls ja, wird dieser bereitgestellt.
2. Falls nicht, öffnen Sie den `v1` Cache mit `open()`, platzieren Sie die Standard-Netzwerkanfrage im Cache mit [`Cache.put()`](/de/docs/Web/API/Cache/put) und geben Sie einen Klon der Standard-Netzwerkanfrage mit `return response.clone()` zurück. Letzteres ist notwendig, da `put()` den Antwortkörper verbraucht.
3. Schlägt dies fehl (z. B. weil das Netzwerk ausgefallen ist), wird eine Fallback-Antwort zurückgegeben.

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

---
title: "CacheStorage: match()-Methode"
short-title: match()
slug: Web/API/CacheStorage/match
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`**-Methode der {{domxref("CacheStorage")}}-Schnittstelle überprüft, ob eine angegebene {{domxref("Request")}} oder URL-Zeichenkette ein Schlüssel für eine gespeicherte {{domxref("Response")}} ist.
Diese Methode gibt ein {{jsxref("Promise")}} für eine {{domxref("Response")}} zurück oder ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird, wenn kein Treffer gefunden wird.

Sie können auf `CacheStorage` über die {{domxref("Window.caches")}}-Eigenschaft in Fenstern oder über die {{domxref("WorkerGlobalScope.caches")}}-Eigenschaft in Workern zugreifen.

`Cache`-Objekte werden in der Reihenfolge der Erstellung durchsucht.

> **Note:** `caches.match()` ist eine bequeme Methode.
> Die äquivalente Funktionalität besteht darin, {{domxref("cache.match()")}} für jeden Cache (in der Reihenfolge, die von {{domxref("CacheStorage.keys()", "caches.keys()")}} zurückgegeben wird) aufzurufen, bis eine {{domxref("Response")}} zurückgegeben wird.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die {{domxref("Request")}}, die Sie abgleichen möchten. Dies kann ein {{domxref("Request")}}-Objekt oder eine URL-Zeichenkette sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `match`-Operation ausgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll. Beispielsweise würde bei Einstellung auf `true` der `?value=bar`-Teil von `http://foo.com/?value=bar` bei einem Abgleich ignoriert. Standardmäßig ist dieser Wert `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, verhindert, dass Matching-Operationen die `http`-Methode der {{domxref("Request")}} validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist dieser Wert `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, der Matching-Operation sagt, dass keine `VARY`-Header-Übereinstimmung durchgeführt werden soll. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie einen Treffer, unabhängig davon, ob das {{domxref("Response")}}-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist dieser Wert `false`.
    - `cacheName`
      - : Eine Zeichenkette, die einen spezifischen Cache darstellt, innerhalb dessen gesucht werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf die passende {{domxref("Response")}} aufgelöst wird. Wenn keine passende Antwort auf die angegebene Anfrage gefunden wird, wird das Promise mit `undefined` aufgelöst.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfaches Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfacher Service Worker live](https://bncb2v.csb.app/)).
Hier warten wir auf ein {{domxref("FetchEvent")}}, das ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort wie folgt:

1. Überprüfen Sie, ob ein Treffer für die Anfrage im {{domxref("CacheStorage")}} mit `CacheStorage.match()` gefunden wird. Wenn ja, wird dieser bereitgestellt.
2. Wenn nicht, öffnen Sie den `v1`-Cache mit `open()`, speichern die standardmäßige Netzwerk-Anfrage im Cache mit {{domxref("Cache.put","Cache.put()")}} und geben Sie ein Duplikat der standardmäßigen Netzwerk-Anfrage mit `return response.clone()` zurück. Letzteres ist notwendig, da `put()` den Antworttext konsumiert.
3. Wenn dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), geben Sie eine alternative Antwort zurück.

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
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}

---
title: "Cache: keys() Methode"
short-title: keys()
slug: Web/API/Cache/keys
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`keys()`** Methode der {{domxref("Cache")}} Schnittstelle gibt ein
{{jsxref("Promise")}} zurück, das in ein Array von {{domxref("Request")}} Objekten
aufgelöst wird, welche die Schlüssel des {{domxref("Cache")}} darstellen.

Die Anfragen werden in der Reihenfolge zurückgegeben, in der sie eingefügt wurden.

> [!NOTE]
> Anfragen mit doppelten URLs, aber unterschiedlichen Headern können
> zurückgegeben werden, wenn ihre Antworten den `VARY` Header gesetzt haben.

## Syntax

```js-nolint
keys()
keys(request)
keys(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Der {{domxref("Request")}}, den Sie zurückgeben möchten, falls ein spezifischer Schlüssel gewünscht ist. Dies kann ein `Request`-Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `keys`
    Operation durchgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der
        Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll. Wenn auf
        `true` gesetzt, würde der `?value=bar` Teil von
        `http://foo.com/?value=bar` bei einem Abgleich ignoriert. Der Standardwert ist `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, Abgleichsoperationen daran hindert, die
        {{domxref("Request")}} `HTTP` Methode zu validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Der Standardwert ist `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, der Abgleichsoperation mitteilt, keine `VARY`
        Header-Abgleiche durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie
        unabhängig davon ein Match, ob das {{domxref("Response")}}-Objekt einen `VARY`
        Header hat oder nicht. Der Standardwert ist `false`.
    - `cacheName`
      - : Ein String, der einen spezifischen
        Cache darstellt, in dem gesucht werden soll. Beachten Sie, dass diese Option von
        `Cache.keys()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Array von {{domxref("Request")}}
Objekten aufgelöst wird.

## Beispiele

```js
caches.open("v1").then((cache) => {
  cache.keys().then((keys) => {
    keys.forEach((request, index, array) => {
      cache.delete(request);
    });
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}

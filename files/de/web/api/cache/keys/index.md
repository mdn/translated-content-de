---
title: "Cache: keys() Methode"
short-title: keys()
slug: Web/API/Cache/keys
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`keys()`** Methode der [`Cache`](/de/docs/Web/API/Cache) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das in ein Array von [`Request`](/de/docs/Web/API/Request) Objekten aufgelöst wird. Diese Objekte repräsentieren die Schlüssel des [`Cache`](/de/docs/Web/API/Cache).

Die Anfragen werden in der gleichen Reihenfolge zurückgegeben, in der sie eingefügt wurden.

> [!NOTE]
> Anfragen mit doppelten URLs, aber unterschiedlichen Headern können zurückgegeben werden, wenn ihre Antworten den `VARY` Header gesetzt haben.

## Syntax

```js-nolint
keys()
keys(request)
keys(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Der gewünschte [`Request`](/de/docs/Web/API/Request), falls ein spezifischer Schlüssel gewünscht ist. Dies kann ein `Request` Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften kontrollieren, wie das Matching bei der `keys`
    Operation durchgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der
        Abgleichsprozess den Query-String in der URL ignorieren soll. Wenn auf
        `true` gesetzt, würde der `?value=bar` Teil von
        `http://foo.com/?value=bar` beim Abgleich ignoriert werden.
        Standardmäßig ist dieser Wert `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Abgleichsoperationen die
        `HTTP` Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist dieser Wert `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, angibt, dass die Abgleichsoperation kein `VARY`
        Header-Matching durchführen soll. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung,
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response) Objekt einen `VARY`
        Header hat. Standardmäßig ist dieser Wert `false`.
    - `cacheName`
      - : Ein String, der einen spezifischen
        Cache darstellt, in dem gesucht werden soll. Beachten Sie, dass diese Option von
        `Cache.keys()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Array von [`Request`](/de/docs/Web/API/Request)
Objekten aufgelöst wird.

## Beispiele

```js
caches
  .open("v1")
  .then((cache) => cache.keys())
  .then((keys) => {
    keys.forEach((request, index, array) => {
      cache.delete(request);
    });
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

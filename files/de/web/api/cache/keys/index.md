---
title: "Cache: keys() Methode"
short-title: keys()
slug: Web/API/Cache/keys
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`keys()`** Methode des [`Cache`](/de/docs/Web/API/Cache) Schnittstelle gibt ein
{{jsxref("Promise")}} zurück, der in ein Array von [`Request`](/de/docs/Web/API/Request) Objekten
aufgelöst wird, die die Schlüssel des [`Cache`](/de/docs/Web/API/Cache) darstellen.

Die Anfragen werden in der Reihenfolge zurückgegeben, in der sie eingefügt wurden.

> [!NOTE]
> Anfragen mit doppelten URLs, jedoch unterschiedlichen Headern können zurückgegeben werden, wenn ihre Antworten den `VARY` Header gesetzt haben.

## Syntax

```js-nolint
keys()
keys(request)
keys(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Das [`Request`](/de/docs/Web/API/Request), das zurückgegeben werden soll, wenn ein bestimmter Schlüssel gewünscht ist. Dies kann ein `Request` Objekt oder eine URL sein.
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `keys` Operation durchgeführt wird. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess die Query-String in der URL ignorieren soll. Wenn auf `true` gesetzt, würde der `?value=bar` Teil von `https://example.com/?value=bar` ignoriert, wenn eine Übereinstimmung durchgeführt wird. Standardmäßig ist es `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, Abgleichsoperationen daran hindert, die `HTTP` Methode des [`Request`](/de/docs/Web/API/Request) zu validieren (normalerweise sind nur `GET` und `HEAD` erlaubt.) Standardmäßig ist es `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, die Abgleichsoperation anweist, keine `VARY` Header-Übereinstimmung durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response) Objekt einen `VARY` Header hat. Standardmäßig ist es `false`.
    - `cacheName`
      - : Ein String, der einen bestimmten Cache darstellt, in dem gesucht werden soll. Beachten Sie, dass diese Option von `Cache.keys()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, der in ein Array von [`Request`](/de/docs/Web/API/Request) Objekten aufgelöst wird.

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

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

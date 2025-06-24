---
title: "Cache: keys() Methode"
short-title: keys()
slug: Web/API/Cache/keys
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`keys()`** Methode der [`Cache`](/de/docs/Web/API/Cache) Schnittstelle gibt ein
{{jsxref("Promise")}} zurück, das in ein Array von [`Request`](/de/docs/Web/API/Request) Objekten aufgelöst wird,
die die Schlüssel des [`Cache`](/de/docs/Web/API/Cache) darstellen.

Die Anfragen werden in der gleichen Reihenfolge zurückgegeben, in der sie eingefügt wurden.

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
  - : Der gewünschte [`Request`](/de/docs/Web/API/Request), falls ein spezifischer Schlüssel gewünscht wird. Dies kann ein
    `Request` Objekt oder eine URL sein.
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `keys`
    Operation durchgeführt wird. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll. Wenn auf
        `true` gesetzt, würde der `?value=bar` Teil von
        `http://foo.com/?value=bar` beim Durchführen eines Abgleichs ignoriert werden.
        Der Standardwert ist `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Abgleichsoperationen die
        [`Request`](/de/docs/Web/API/Request) `HTTP` Methode validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Der Standardwert ist `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, die Abgleichsoperation anweist, kein `VARY`
        Header-Matching durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung,
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response) Objekt einen `VARY`
        Header hat. Der Standardwert ist `false`.
    - `cacheName`
      - : Ein String, der einen spezifischen
        Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von
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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

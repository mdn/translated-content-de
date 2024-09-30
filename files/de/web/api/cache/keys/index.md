---
title: "Cache: keys()-Methode"
short-title: keys()
slug: Web/API/Cache/keys
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`keys()`**-Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces gibt ein
{{jsxref("Promise")}} zurück, das ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten auflöst,
die die Schlüssel des [`Cache`](/de/docs/Web/API/Cache) repräsentieren.

Die Anfragen werden in der gleichen Reihenfolge zurückgegeben, in der sie eingefügt wurden.

> [!NOTE]
> Anfragen mit doppelten URLs, aber unterschiedlichen Headern können
> zurückgegeben werden, wenn ihre Antworten den `VARY`-Header gesetzt haben.

## Syntax

```js-nolint
keys()
keys(request)
keys(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Der [`Request`](/de/docs/Web/API/Request), der zurückgegeben werden soll, falls ein bestimmter Schlüssel gewünscht ist. Dies kann ein `Request`-Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching bei der `keys`-Operation durchgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Query-String in der URL beim Matching ignoriert werden soll. Wenn `true` gesetzt ist, wird der `?value=bar` Teil von
        `http://foo.com/?value=bar` beim Abgleich ignoriert.
        Standardmäßig ist `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt,
        verhindert, dass die Matching-Operationen die
        `HTTP`-Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt,
        der Matching-Operation mitteilt, das `VARY`-Header-Matching nicht durchzuführen. Mit anderen Worten: wenn die URL übereinstimmt, erhält man eine Übereinstimmung,
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat. Es ist standardmäßig `false`.
    - `cacheName`
      - : Ein String, der einen bestimmten
        Cache repräsentiert, in dem gesucht wird. Beachten Sie, dass diese Option von
        `Cache.keys()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten auflöst.

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
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

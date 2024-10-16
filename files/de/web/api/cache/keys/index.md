---
title: "Cache: keys() Methode"
short-title: keys()
slug: Web/API/Cache/keys
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`keys()`** Methode der [`Cache`](/de/docs/Web/API/Cache) Schnittstelle gibt ein
{{jsxref("Promise")}} zurück, welches ein Array von [`Request`](/de/docs/Web/API/Request) Objekten auflöst,
die die Schlüssel des [`Cache`](/de/docs/Web/API/Cache) repräsentieren.

Die Anfragen werden in der Reihenfolge zurückgegeben, in der sie eingefügt wurden.

> [!NOTE]
> Anfragen mit doppelten URLs, aber unterschiedlichen Headers können
> zurückgegeben werden, wenn ihre Antworten den `VARY` Header gesetzt haben.

## Syntax

```js-nolint
keys()
keys(request)
keys(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Die [`Request`](/de/docs/Web/API/Request), die zurückgegeben werden soll, wenn ein bestimmter Schlüssel gewünscht ist. Dies kann ein
    `Request` Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching bei der `keys`
    Operation durchgeführt wird. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der
        Matching-Prozess den Abfrage-String in der URL ignorieren soll. Wenn auf
        `true` gesetzt, würde der `?value=bar` Teil von
        `http://foo.com/?value=bar` beim Abgleichen ignoriert werden.
        Standardmäßig auf `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Matching-Operationen die
        [`Request`](/de/docs/Web/API/Request) `HTTP` Methode validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig auf `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, der Matching-Operation mitteilt, kein `VARY`
        Header-Matching durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung,
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response) Objekt einen `VARY`
        Header hat. Standardmäßig auf `false`.
    - `cacheName`
      - : Ein String, der einen bestimmten
        Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von
        `Cache.keys()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Array von [`Request`](/de/docs/Web/API/Request)
Objekten auflöst.

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

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

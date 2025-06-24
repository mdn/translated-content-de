---
title: "Cache: delete() Methode"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`** Methode der [`Cache`](/de/docs/Web/API/Cache) Schnittstelle findet den [`Cache`](/de/docs/Web/API/Cache) Eintrag, dessen Schlüssel die Anfrage ist, und falls gefunden, löscht den [`Cache`](/de/docs/Web/API/Cache) Eintrag und gibt ein {{jsxref("Promise")}} zurück, das sich zu `true` auflöst. Wenn kein [`Cache`](/de/docs/Web/API/Cache) Eintrag gefunden wird, löst es sich zu `false` auf.

## Syntax

```js-nolint
delete(request)
delete(request, options)
```

### Parameter

- `request`
  - : Der [`Request`](/de/docs/Web/API/Request), den Sie löschen möchten.
    Dies kann ein `Request` Objekt oder eine URL sein.
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `delete` Operation durchgeführt wird.
    Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Matching-Prozess den Abfrage-String in der URL ignorieren soll.
        Wenn auf `true` gesetzt, wird der Teil `?value=bar` von `http://foo.com/?value=bar` beim Matching ignoriert.
        Standardmäßig ist er `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Matching-Operationen die
        [`Request`](/de/docs/Web/API/Request) `HTTP` Methode validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt.) Standardmäßig ist er `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, dem Matching-Prozess mitteilt, keine `VARY`
        Header-Abstimmung durchzuführen. Mit anderen Worten: Wenn die URL übereinstimmt, gibt es einen Treffer,
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response) Objekt einen `VARY`
        Header hat. Standardmäßig ist er `false`.
    - `cacheName`
      - : Ein String, der einen bestimmten Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von `Cache.delete()` ignoriert wird.

### Rückgabewert

ein {{jsxref("Promise")}}, das sich zu `true` auflöst, wenn der Cache-Eintrag
gelöscht wird, oder `false` andernfalls.

## Beispiele

```js
caches
  .open("v1")
  .then((cache) => cache.delete("/images/image.png"))
  .then((response) => {
    someUIUpdateFunction();
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

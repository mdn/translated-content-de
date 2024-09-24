---
title: "Cache: delete()-Methode"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`** Methode des {{domxref("Cache")}}-Interfaces findet den {{domxref("Cache")}}-Eintrag, dessen Schlüssel die Anfrage ist, und löscht den {{domxref("Cache")}}-Eintrag, falls er gefunden wird. Das Ergebnis ist ein {{jsxref("Promise")}}, das entweder mit `true` aufgelöst wird. Wenn kein {{domxref("Cache")}}-Eintrag gefunden wird, wird es mit `false` aufgelöst.

## Syntax

```js-nolint
delete(request)
delete(request, options)
```

### Parameter

- `request`
  - : Die {{domxref("Request")}}, die Sie löschen möchten.
    Dies kann ein `Request`-Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `delete`-Operation durchgeführt wird.
    Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll.
        Wenn auf `true` gesetzt, wird der Teil `?value=bar` von `http://foo.com/?value=bar` bei der Durchführung eines Abgleichs ignoriert.
        Standardmäßig ist dies auf `false` gesetzt.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, verhindert, dass Abgleichsoperationen die `HTTP`-Methode der
        {{domxref("Request")}} validieren (normalerweise sind nur `GET` und `HEAD` erlaubt.) Standardmäßig ist dies auf `false` gesetzt.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt ist, der Abgleichsoperation mitteilt, keine `VARY`-Header-Abgleiche durchzuführen.
        Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das {{domxref("Response")}}-Objekt einen `VARY`-Header hat. Standardmäßig ist dies auf `false` gesetzt.
    - `cacheName`
      - : Ein String, der einen spezifischen Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von `Cache.delete()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das entweder mit `true` aufgelöst wird, wenn der Cache-Eintrag gelöscht wird, oder mit `false` in anderen Fällen.

## Beispiele

```js
caches.open("v1").then((cache) => {
  cache.delete("/images/image.png").then((response) => {
    someUIUpdateFunction();
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}

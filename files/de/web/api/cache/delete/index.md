---
title: "Cache: delete()-Methode"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`**-Methode der [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle findet den [`Cache`](/de/docs/Web/API/Cache)-Eintrag, dessen Schlüssel die Anfrage ist, und löscht, falls gefunden, den [`Cache`](/de/docs/Web/API/Cache)-Eintrag und gibt ein {{jsxref("Promise")}} zurück, das sich zu `true` auflöst.
Falls kein [`Cache`](/de/docs/Web/API/Cache)-Eintrag gefunden wird, löst es sich zu `false` auf.

## Syntax

```js-nolint
delete(request)
delete(request, options)
```

### Parameter

- `request`
  - : Der [`Request`](/de/docs/Web/API/Request), den Sie löschen möchten.
    Dies kann ein `Request`-Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie die Übereinstimmung bei der `delete`-Operation durchgeführt wird.
    Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess den Abfrageteil der URL ignorieren soll.
        Wenn auf `true` gesetzt, wird der `?value=bar` Teil von `http://foo.com/?value=bar` bei der Übereinstimmung ignoriert.
        Standardmäßig ist er `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Übereinstimmungsoperationen die
        `HTTP`-Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist er `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, der Übereinstimmungsoperation mitteilt, das `VARY`-
        Header-Matching nicht durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-
        Header hat. Standardmäßig ist er `false`.
    - `cacheName`
      - : Ein String, der einen spezifischen Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von `Cache.delete()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu `true` auflöst, wenn der Cache-Eintrag
gelöscht wurde, oder zu `false` andernfalls.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

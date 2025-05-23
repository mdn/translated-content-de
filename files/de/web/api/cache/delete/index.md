---
title: "Cache: delete() Methode"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`** Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces findet den Eintrag im [`Cache`](/de/docs/Web/API/Cache), dessen Schlüssel die Anfrage ist, und löscht, falls gefunden, den [`Cache`](/de/docs/Web/API/Cache)-Eintrag. Sie gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird. Wenn kein [`Cache`](/de/docs/Web/API/Cache)-Eintrag gefunden wird, wird es zu `false` aufgelöst.

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

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `delete`-Operation durchgeführt wird.
    Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichprozess den Abfrage-String in der URL ignorieren soll.
        Wenn auf `true` gesetzt, wird der Teil `?value=bar` von `http://foo.com/?value=bar` ignoriert, wenn ein Abgleich durchgeführt wird.
        Standardmäßig ist dieser Wert `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Abgleichoperationen die
        `HTTP`-Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist dieser Wert `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, den Abgleichprozess anweist, kein `VARY`-Header-Matching durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat. Standardmäßig ist dieser Wert `false`.
    - `cacheName`
      - : Ein String, der einen bestimmten Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von `Cache.delete()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `true` aufgelöst wird, wenn der Cache-Eintrag
gelöscht wurde, oder zu `false` andernfalls.

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

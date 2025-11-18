---
title: "Cache: delete() Methode"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`** Methode der [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle findet den [`Cache`](/de/docs/Web/API/Cache)-Eintrag, dessen Schlüssel die Anfrage ist, und wenn sie gefunden wird, löscht sie den [`Cache`](/de/docs/Web/API/Cache)-Eintrag und gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird. Wenn kein [`Cache`](/de/docs/Web/API/Cache)-Eintrag gefunden wird, wird es auf `false` aufgelöst.

## Syntax

```js-nolint
delete(request)
delete(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), die Sie löschen möchten. Dies kann ein `Request`-Objekt oder eine URL sein.
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching in der `delete`-Operation durchgeführt wird. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichprozess den Abfrage-String in der URL ignorieren soll. Wenn auf `true` gesetzt, würde der Teil `?value=bar` von `https://example.com/?value=bar` beim Abgleichen ignoriert. Standardmäßig ist es `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, die Abgleichoperation daran hindert, die `HTTP`-Methode der [`Request`](/de/docs/Web/API/Request) zu validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist es `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, der Abgleichoperation mitteilt, kein `VARY`-Header-Matching durchzuführen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat. Standardmäßig ist es `false`.
    - `cacheName`
      - : Ein String, der einen spezifischen Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von `Cache.delete()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `true` aufgelöst wird, wenn der Cache-Eintrag gelöscht wird, oder andernfalls `false`.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

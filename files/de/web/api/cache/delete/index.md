---
title: "Cache: delete() Methode"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`**-Methode der [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle findet den [`Cache`](/de/docs/Web/API/Cache)-Eintrag, dessen Schlüssel die Anfrage ist, und löscht, falls gefunden, den [`Cache`](/de/docs/Web/API/Cache)-Eintrag und gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird.
Wenn kein [`Cache`](/de/docs/Web/API/Cache)-Eintrag gefunden wird, wird es zu `false` aufgelöst.

## Syntax

```js-nolint
delete(request)
delete(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), die Sie löschen möchten.
    Dies kann ein `Request`-Objekt oder eine URL sein.
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching im `delete`-Vorgang durchgeführt wird.
    Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Matching-Prozess den Abfrage-String in der URL ignorieren soll.
        Wenn auf `true` gesetzt, würde der `?value=bar`-Teil von `https://example.com/?value=bar` bei der Durchführung eines Matches ignoriert werden.
        Der Standardwert ist `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass die Matching-Operationen die
        Methode der [`Request`](/de/docs/Web/API/Request) `HTTP` validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Der Standardwert ist `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, der Matching-Operation mitteilt, keine VARY-Header
        zu berücksichtigen. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie ein Match,
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen VARY-
        Header hat. Der Standardwert ist `false`.
    - `cacheName`
      - : Ein String, der einen bestimmten Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von `Cache.delete()` ignoriert wird.

### Rückgabewert

ein {{jsxref("Promise")}}, das zu `true` aufgelöst wird, wenn der Cache-Eintrag
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

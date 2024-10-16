---
title: "Cache: delete() Methode"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`** Methode der [`Cache`](/de/docs/Web/API/Cache) Schnittstelle findet den [`Cache`](/de/docs/Web/API/Cache)-Eintrag, dessen Schlüssel die Anfrage ist, und löscht den [`Cache`](/de/docs/Web/API/Cache)-Eintrag, falls er gefunden wird. Sie gibt ein {{jsxref("Promise")}} zurück, das sich auf `true` auflöst.
Falls kein [`Cache`](/de/docs/Web/API/Cache)-Eintrag gefunden wird, löst sie sich auf `false` auf.

## Syntax

```js-nolint
delete(request)
delete(request, options)
```

### Parameter

- `request`
  - : Das [`Request`](/de/docs/Web/API/Request), das gelöscht werden soll.
    Dies kann ein `Request`-Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften steuern, wie die Übereinstimmung in der `delete`-Operation durchgeführt wird.
    Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsvorgang den Abfrage-String in der URL ignorieren soll.
        Wenn auf `true` gesetzt, wird der `?value=bar`-Teil von `http://foo.com/?value=bar` beim Abgleich ignoriert.
        Standardmäßig ist er auf `false` gesetzt.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, Verhinderung der Überprüfung des `HTTP`-Methods von [`Request`](/de/docs/Web/API/Request) beim Abgleich erlaubt (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist er auf `false` gesetzt.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, angibt, dass der Abgleichsvorgang keine Prüfung der `VARY`
        Header durchführen soll. Anders gesagt, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat. Standardmäßig ist er auf `false` gesetzt.
    - `cacheName`
      - : Ein String, der einen spezifischen Cache repräsentiert, in dem gesucht werden soll. Beachten Sie, dass diese Option von `Cache.delete()` ignoriert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf `true` auflöst, wenn der Cache-Eintrag
gelöscht wird, oder auf `false` andernfalls.

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

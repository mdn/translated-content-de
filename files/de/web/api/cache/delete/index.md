---
title: "Cache: delete()-Methode"
short-title: delete()
slug: Web/API/Cache/delete
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`**-Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces sucht den [`Cache`](/de/docs/Web/API/Cache)-Eintrag, dessen Schlüssel die Anfrage ist, und löscht, falls gefunden, den [`Cache`](/de/docs/Web/API/Cache)-Eintrag. Sie gibt ein {{jsxref("Promise")}} zurück, das sich zu `true` auflöst. Wenn kein [`Cache`](/de/docs/Web/API/Cache)-Eintrag gefunden wird, löst es sich zu `false` auf.

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

  - : Ein Objekt, dessen Eigenschaften steuern, wie das Matching im `delete`-Vorgang durchgeführt wird.
    Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess den Abfrage-String in der URL ignorieren soll.
        Wenn auf `true` gesetzt, wird der Teil `?value=bar` von `http://foo.com/?value=bar` beim Abgleich ignoriert.
        Standardmäßig ist es `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Abgleichsvorgänge die
        [`Request`](/de/docs/Web/API/Request)-`HTTP`-Methode validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Es ist standardmäßig `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, dem Abgleichsvorgang sagt, dass er nicht das `VARY`-
        Header-Matching durchführen soll. Mit anderen Worten, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung
        unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-
        Header hat. Es ist standardmäßig `false`.
    - `cacheName`
      - : Ein String, der einen bestimmten Cache repräsentiert, innerhalb dessen gesucht werden soll. Beachten Sie, dass diese Option von `Cache.delete()` ignoriert wird.

### Rückgabewert

ein {{jsxref("Promise")}}, das sich zu `true` auflöst, wenn der Cache-Eintrag
gelöscht wird, oder `false` andernfalls.

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

- [Einsatz von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

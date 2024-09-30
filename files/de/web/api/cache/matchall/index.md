---
title: "Cache: matchAll()-Methode"
short-title: matchAll()
slug: Web/API/Cache/matchAll
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`matchAll()`**-Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das ein Array aller passenden Antworten im [`Cache`](/de/docs/Web/API/Cache)-Objekt auflöst.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Der [`Request`](/de/docs/Web/API/Request), für den Sie versuchen, Antworten im
    [`Cache`](/de/docs/Web/API/Cache) zu finden. Dies kann ein `Request`-Objekt oder eine URL sein. Wenn dieses
    Argument weggelassen wird, erhalten Sie eine Kopie aller Antworten in diesem Cache.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Ihnen ermöglicht, spezifische Steuerungsoptionen für das durchgeführte Matching festzulegen. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der
        Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll. Wenn auf
        `true` gesetzt, würde der Teil `?value=bar` von
        `http://foo.com/?value=bar` beim Matching ignoriert werden.
        Standardmäßig ist dies auf `false` gesetzt.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn er auf
        `true` gesetzt ist, Matching-Operationen davon abhält, die
        [`Request`](/de/docs/Web/API/Request) `http`-Methode zu validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist dies auf `false` gesetzt.
    - `ignoreVary`
      - : Ein boolescher Wert, der bei Einstellung auf
        `true` angibt, dass der Abgleich ohne Berücksichtigung des `VARY`
        Headers durchgeführt werden soll — d.h. wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung unabhängig davon, ob das
        [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Es
        ist standardmäßig auf `false` gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Array aller passenden Antworten im
[`Cache`](/de/docs/Web/API/Cache)-Objekt auflöst.

> **Note:** [`Cache.match()`](/de/docs/Web/API/Cache/match) ist im Grunde identisch mit
> `Cache.matchAll()`, außer dass es anstelle einer Auflösung mit einem Array aller
> passenden Antworten nur mit der ersten passenden Antwort auflöst (also
> `response[0]`).

## Beispiele

Das folgende Beispiel ruft alle Antworten im `v1` Cache ab, die mit der URL `/` übereinstimmen, einschließlich potenzieller Abfrageparameter. Durch Verwenden von `{ ignoreSearch: true }`, würde `matchAll` sowohl `/` als auch `/?value=bar` abrufen.

Es gibt dann die Anzahl der passenden Antworten aus.

```js
caches.open("v1").then((cache) => {
  cache.matchAll("/", { ignoreSearch: true }).then((responses) => {
    console.log(`Found ${responses.length} matching responses`);
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

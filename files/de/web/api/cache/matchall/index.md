---
title: "Cache: matchAll() Methode"
short-title: matchAll()
slug: Web/API/Cache/matchAll
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`matchAll()`** Methode des [`Cache`](/de/docs/Web/API/Cache)
Interfaces gibt ein {{jsxref("Promise")}} zurück, das zu einem Array aller übereinstimmenden
Antworten im [`Cache`](/de/docs/Web/API/Cache) Objekt aufgelöst wird.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Das [`Request`](/de/docs/Web/API/Request) Objekt, für das Sie versuchen, Antworten im
    [`Cache`](/de/docs/Web/API/Cache) zu finden. Dies kann ein `Request` Objekt oder eine URL sein. Wenn dieses
    Argument weggelassen wird, erhalten Sie eine Kopie aller Antworten in diesem Cache.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das es Ihnen ermöglicht, spezifische Steuerungsoptionen für das durchgeführte Matching festzulegen. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein Boolean-Wert, der angibt, ob der
        Abgleichsprozess die Query-String in der URL ignorieren soll. Wenn auf
        `true` gesetzt, wird der Teil `?value=bar` von
        `http://foo.com/?value=bar` bei der Durchführung eines Abgleichs ignoriert.
        Es ist standardmäßig auf `false` gesetzt.
    - `ignoreMethod`
      - : Ein Boolean-Wert, der, wenn auf
        `true` gesetzt, verhindert, dass die Abgleichsoperationen die
        `http` Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt.) Standardmäßig ist es auf `false` gesetzt.
    - `ignoreVary`
      - : Ein Boolean-Wert, der, wenn auf
        `true` gesetzt, der Matching-Operation sagt, dass kein `VARY`
        Header-Abgleich durchgeführt wird — d.h. wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung unabhängig davon, ob das
        [`Response`](/de/docs/Web/API/Response) Objekt einen `VARY` Header hat oder nicht. Standardmäßig ist es auf `false` gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Array aller übereinstimmenden Antworten im
[`Cache`](/de/docs/Web/API/Cache) Objekt aufgelöst wird.

> [!NOTE] > [`Cache.match()`](/de/docs/Web/API/Cache/match) ist im Wesentlichen identisch mit
> `Cache.matchAll()`, außer dass es mit nur der ersten übereinstimmenden Antwort aufgelöst wird (d.h.
> `response[0]`).

## Beispiele

Das folgende Beispiel ruft alle Antworten im `v1` Cache ab, die mit der URL `/` übereinstimmen, einschließlich potenzieller Abfrageparameter. Indem `{ ignoreSearch: true }` verwendet wird, würde `matchAll` sowohl `/` als auch `/?value=bar` abrufen.

Es werden dann die Anzahl der übereinstimmenden Antworten protokolliert.

```js
caches
  .open("v1")
  .then((cache) => cache.matchAll("/", { ignoreSearch: true }))
  .then((responses) => {
    console.log(`Found ${responses.length} matching responses`);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

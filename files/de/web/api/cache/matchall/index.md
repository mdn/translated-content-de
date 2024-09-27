---
title: "Cache: matchAll()-Methode"
short-title: matchAll()
slug: Web/API/Cache/matchAll
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`matchAll()`**-Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das zu einem Array aller passenden Antworten im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

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

  - : Ein Optionsobjekt, das Ihnen erlaubt, spezifische Kontrolloptionen für das durchgeführte Matching festzulegen. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der
        Matching-Prozess den Query-String in der URL ignorieren soll. Wenn auf `true` gesetzt,
        würde der `?value=bar` Teil von
        `http://foo.com/?value=bar` beim Durchführen eines Matchings ignoriert werden.
        Standardmäßig ist er auf `false` gesetzt.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass Matching-Operationen die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist er auf `false` gesetzt.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, das Matching davon abhält, eine `VARY`-Header-Anpassung durchzuführen — d. h., wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob
        das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist er auf `false` gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Array aller passenden Antworten im
[`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

> **Note:** [`Cache.match()`](/de/docs/Web/API/Cache/match) ist im Grunde identisch mit
> `Cache.matchAll()`, mit dem Unterschied, dass es nicht mit einem Array aller
> passenden Antworten aufgelöst wird, sondern nur mit der ersten passenden Antwort (das heißt,
> `response[0]`).

## Beispiele

Das folgende Beispiel ruft alle Antworten im `v1`-Cache ab, die mit der URL `/` übereinstimmen, einschließlich möglicher Query-Parameter. Durch die Verwendung von `{ ignoreSearch: true }` würde `matchAll` sowohl `/` als auch `/?value=bar` abrufen.

Anschließend wird die Anzahl der passenden Antworten protokolliert.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

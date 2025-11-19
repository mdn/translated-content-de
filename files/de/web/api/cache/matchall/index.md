---
title: "Cache: matchAll() Methode"
short-title: matchAll()
slug: Web/API/Cache/matchAll
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`matchAll()`** Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das in ein Array aller übereinstimmenden Antworten im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Der [`Request`](/de/docs/Web/API/Request), für den Sie versuchen, Antworten im [`Cache`](/de/docs/Web/API/Cache) zu finden. Dies kann ein `Request`-Objekt oder eine URL sein. Wenn dieses Argument weggelassen wird, erhalten Sie eine Kopie aller Antworten in diesem Cache.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das es ermöglicht, bestimmte Kontrolloptionen für die durchzuführende Übereinstimmung festzulegen. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll. Wenn `true` festgelegt ist, würde der Teil `?value=bar` von `https://example.com/?value=bar` bei der Durchführung einer Übereinstimmung ignoriert. Standardmäßig ist der Wert `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, verhindert, dass Abgleichsoperationen die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist der Wert `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, angibt, dass beim Abgleich die `VARY`-Header-Übereinstimmung nicht durchgeführt werden soll – d.h. wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist der Wert `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Array aller übereinstimmenden Antworten im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

> [!NOTE]
> [`Cache.match()`](/de/docs/Web/API/Cache/match) ist im Wesentlichen identisch mit `Cache.matchAll()`, außer dass es nicht mit einem Array aller übereinstimmenden Antworten aufgelöst wird, sondern nur mit der ersten übereinstimmenden Antwort (das heißt, `response[0]`).

## Beispiele

Das folgende Beispiel ruft alle Antworten im `v1`-Cache ab, die mit der URL `/` übereinstimmen, selbst wenn potenzielle Abfrageparameter enthalten sind. Durch die Verwendung von `{ ignoreSearch: true }` würden mit `matchAll` sowohl `/` als auch `/?value=bar` abgerufen.

Anschließend wird die Anzahl der übereinstimmenden Antworten protokolliert.

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

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

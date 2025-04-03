---
title: "Cache: matchAll() Methode"
short-title: matchAll()
slug: Web/API/Cache/matchAll
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`matchAll()`** Methode der [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zu einem Array aller übereinstimmenden Antworten im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

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

  - : Ein Optionsobjekt, das es Ihnen ermöglicht, spezifische Kontrolloptionen für das durchzuführende Matching festzulegen. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abfrage-String in der URL beim Matching ignoriert werden soll. Wenn auf `true` gesetzt, würde der Teil `?value=bar` von `http://foo.com/?value=bar` bei der Übereinstimmung ignoriert. Standardmäßig ist er auf `false` gesetzt.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, Matching-Operationen daran hindert, die `http`-Methode des [`Request`](/de/docs/Web/API/Request) zu validieren (normalerweise sind nur `GET` und `HEAD` erlaubt.) Standardmäßig ist er auf `false` gesetzt.
    - `ignoreVary`
      - : Ein boolescher Wert, der wenn auf `true` gesetzt, die Matching-Operation anweist, kein Matching des `VARY`-Headers durchzuführen — d.h. wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist er auf `false` gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Array aller übereinstimmenden Antworten im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

> **Note:** [`Cache.match()`](/de/docs/Web/API/Cache/match) ist im Wesentlichen identisch mit `Cache.matchAll()`, mit dem Unterschied, dass es nicht mit einem Array aller übereinstimmenden Antworten, sondern nur mit der ersten übereinstimmenden Antwort (d.h. `response[0]`) aufgelöst wird.

## Beispiele

Das folgende Beispiel ruft alle Antworten im `v1`-Cache ab, die mit der URL `/` übereinstimmen, einschließlich möglicher Abfrageparameter. Durch die Verwendung von `{ ignoreSearch: true }` würde `matchAll` sowohl `/` als auch `/?value=bar` abrufen.

Es protokolliert dann die Anzahl der übereinstimmenden Antworten.

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

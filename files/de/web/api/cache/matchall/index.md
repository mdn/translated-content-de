---
title: "Cache: matchAll() Methode"
short-title: matchAll()
slug: Web/API/Cache/matchAll
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`matchAll()`** Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das sich in ein Array von allen passenden Antworten im [`Cache`](/de/docs/Web/API/Cache)-Objekt auflöst.

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

  - : Ein Optionsobjekt, das es Ihnen ermöglicht, spezifische Kontrolloptionen für das durchgeführte Matching festzulegen. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abgleichsprozess den Query-String in der URL ignorieren soll. Wenn auf `true` gesetzt, wird der `?value=bar` Teil von `http://foo.com/?value=bar` beim Abgleich ignoriert. Standardmäßig ist es `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, verhindert, dass Abgleichsoperationen die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist es `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt, dem Abgleich mitteilt, dass kein `VARY`-Header-Abgleich durchgeführt werden soll — d.h. wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist es `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Array von allen passenden Antworten im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

> **Note:** [`Cache.match()`](/de/docs/Web/API/Cache/match) ist grundsätzlich identisch zu `Cache.matchAll()`, außer, dass es anstelle der Auflösung mit einem Array aller passenden Antworten nur mit der ersten passenden Antwort aufgelöst wird (das heißt, `response[0]`).

## Beispiele

Das folgende Beispiel ruft alle Antworten im `v1` Cache ab, die mit der URL `/` übereinstimmen, auch inklusive potenzieller Query-Parameter. Durch Verwendung von `{ ignoreSearch: true }` würde `matchAll` sowohl `/` als auch `/?value=bar` abrufen.

Anschließend protokolliert es die Anzahl der passenden Antworten.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)

---
title: "Cache: matchAll() Methode"
short-title: matchAll()
slug: Web/API/Cache/matchAll
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`matchAll()`** Methode des {{domxref("Cache")}}
Interfaces gibt ein {{jsxref("Promise")}} zurück, das zu einem Array aller passenden
Antworten im {{domxref("Cache")}} Objekt aufgelöst wird.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request, options)
```

### Parameter

- `request` {{optional_inline}}
  - : Die {{domxref("Request")}}, für die Sie versuchen, Antworten im
    {{domxref("Cache")}} zu finden. Dies kann ein `Request`-Objekt oder eine URL sein. Wenn dieses
    Argument weggelassen wird, erhalten Sie eine Kopie aller Antworten in diesem Cache.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das Ihnen ermöglicht, spezifische Kontrolloptionen für das durchgeführte Matching festzulegen. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der
        Abgleichsprozess die Abfragezeichenfolge in der URL ignorieren soll. Wenn auf
        `true` gesetzt, würde der `?value=bar` Teil von
        `http://foo.com/?value=bar` bei der Suche ignoriert. Standardmäßig ist dies `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt,
        verhindert, dass Abgleichsoperationen die {{domxref("Request")}} `http`-Methode validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist dies `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf `true` gesetzt,
        der Abgleichsoperation mitteilt, keine Übereinstimmung der `VARY`-Header durchzuführen — das heißt, wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das
        {{domxref("Response")}}-Objekt einen `VARY`-Header hat oder nicht. Standardmäßig ist dies `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Array aller passenden Antworten im
{{domxref("Cache")}} Objekt aufgelöst wird.

> **Note:** {{domxref("Cache.match()")}} ist im Wesentlichen identisch mit
> `Cache.matchAll()`, außer dass es nicht mit einem Array aller
> passenden Antworten, sondern nur mit der ersten passenden Antwort (das heißt,
> `response[0]`) aufgelöst wird.

## Beispiele

Das folgende Beispiel ruft alle Antworten im `v1` Cache ab, die mit der URL `/` übereinstimmen, selbst wenn potenzielle Abfrageparameter vorhanden sind. Durch die Verwendung von `{ ignoreSearch: true }` würde `matchAll` sowohl `/` als auch `/?value=bar` abrufen.

Es wird dann die Anzahl der passenden Antworten protokolliert.

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
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}

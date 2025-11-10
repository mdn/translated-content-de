---
title: "BackgroundFetchRegistration: match() Methode"
short-title: match()
slug: Web/API/BackgroundFetchRegistration/match
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`match()`** Methode des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Interfaces gibt das erste übereinstimmende [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) zurück.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Der [`Request`](/de/docs/Web/API/Request), für den Sie versuchen, Aufzeichnungen zu finden.
    Dies kann ein [`Request`](/de/docs/Web/API/Request) Objekt oder eine URL sein.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für den `match` Vorgang festlegt. Die verfügbaren
    Optionen sind:
    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Abfragezeichenfolge in der URL ignoriert werden soll. Wenn beispielsweise auf
        `true` gesetzt, würde der Teil `?value=bar` von
        `https://example.com/?value=bar` beim Abgleichen ignoriert werden.
        Standard ist `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`,
        verhindert es, dass Übereinstimmungsvorgänge die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren.
        Wenn `false` (Standard) sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, gibt an, dass der {{HTTPHeader("Vary")}} Header ignoriert werden soll.
        Standard ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit dem ersten [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) aufgelöst wird, der zur Anfrage passt, oder mit {{jsxref("undefined")}}, falls keine Übereinstimmung gefunden wird.

> [!NOTE]
> `BackgroundFetchRegistration.match()` ist im Grunde genommen identisch mit
> [`BackgroundFetchRegistration.matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll), außer dass es nicht mit einem Array aller übereinstimmenden Einträge aufgelöst wird, sondern nur mit dem ersten übereinstimmenden Eintrag.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn Sie `match()` aufrufen, während keine Fetches im Gange sind. Dieser Zustand wird durch [`BackgroundFetchRegistration.recordsAvailable`](/de/docs/Web/API/BackgroundFetchRegistration/recordsAvailable), das auf `false` gesetzt ist, widerspiegelt.

## Beispiele

In diesem Beispiel suchen wir nach einem Eintrag mit der URL "/ep-5.mp3". Wenn ein [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) gefunden wird, können wir einige Informationen darüber zurückgeben.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
  const response = await record.responseReady;
  console.log(`And here's the response`, response);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

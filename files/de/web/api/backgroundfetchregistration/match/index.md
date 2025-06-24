---
title: "BackgroundFetchRegistration: match() Methode"
short-title: match()
slug: Web/API/BackgroundFetchRegistration/match
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`match()`** Methode des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Interfaces gibt das erste passende [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) zurück.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Der [`Request`](/de/docs/Web/API/Request), für den Sie Datensätze zu finden versuchen. Dies kann ein [`Request`](/de/docs/Web/API/Request) Objekt oder eine URL sein.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für den `match`-Vorgang festlegt. Die verfügbaren Optionen sind:
    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Abfragezeichenfolge in der URL ignoriert werden soll. Wenn beispielsweise auf `true` gesetzt, würde der Teil `?value=bar` von `http://foo.com/?value=bar` bei der Durchführung eines Abgleichs ignoriert. Standardmäßig ist es `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird verhindert, dass Abgleichsvorgänge die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren. Wenn `false` (Standardwert), sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true` wird angegeben, dass der {{HTTPHeader("Vary")}}-Header ignoriert werden sollte. Standardmäßig ist es `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem ersten [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) aufgelöst wird, das mit der Anfrage übereinstimmt, oder {{jsxref("undefined")}}, wenn kein Übereinstimmung gefunden wird.

> [!NOTE] > `BackgroundFetchRegistration.match()` ist im Wesentlichen identisch mit [`BackgroundFetchRegistration.matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll), außer dass es anstelle der Auflösung mit einem Array aus allen passenden Datensätzen nur mit dem ersten passenden Datensatz aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn Sie `match()` aufrufen, während keine Fetches in Bearbeitung sind. Dieser Zustand wird durch [`BackgroundFetchRegistration.recordsAvailable`](/de/docs/Web/API/BackgroundFetchRegistration/recordsAvailable) reflektiert, das auf `false` gesetzt ist.

## Beispiele

In diesem Beispiel suchen wir nach einem Datensatz mit der URL "/ep-5.mp3". Wenn ein [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) gefunden wird, können wir einige Informationen darüber zurückgeben.

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

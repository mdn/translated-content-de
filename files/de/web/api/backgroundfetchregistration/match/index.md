---
title: "BackgroundFetchRegistration: match() Methode"
short-title: match()
slug: Web/API/BackgroundFetchRegistration/match
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`match()`** Methode der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle gibt das erste passende [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) zurück.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Das [`Request`](/de/docs/Web/API/Request), für das Sie versuchen, Datensätze zu finden.
    Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die `match`-Operation festlegt. Die verfügbaren
    Optionen sind:

    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Abfragezeichenfolge in der URL ignoriert werden soll. Wenn zum Beispiel
        auf `true` gesetzt, wird der Teil `?value=bar` von
        `http://foo.com/?value=bar` bei der Suche ignoriert.
        Standardmäßig ist der Wert `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, verhindert dies, dass Abgleichsoperationen die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren.
        Wenn `false` (Standard), sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, zeigt dies an, dass der {{HTTPHeader("Vary")}}-Header ignoriert werden soll.
        Standardmäßig ist der Wert `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem ersten [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) aufgelöst wird, das der Anfrage entspricht oder mit {{jsxref("undefined")}}, wenn kein Treffer gefunden wird.

> **Hinweis:** `BackgroundFetchRegistration.match()` ist im Wesentlichen identisch mit
> [`BackgroundFetchRegistration.matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll), außer dass es anstelle einer Auflösung mit einem Array aller passenden Datensätze nur mit dem ersten passenden Datensatz aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn Sie `match()` aufrufen, wenn keine Abrufe im Gange sind. Dieser Zustand wird dadurch widergespiegelt, dass [`BackgroundFetchRegistration.recordsAvailable`](/de/docs/Web/API/BackgroundFetchRegistration/recordsAvailable) auf `false` gesetzt ist.

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

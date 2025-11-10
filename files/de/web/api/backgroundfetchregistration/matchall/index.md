---
title: "BackgroundFetchRegistration: matchAll()-Methode"
short-title: matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`matchAll()`**-Methode des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt ein Array von passenden [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekten zurück.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request,options)
```

### Parameter

- `request` {{optional_inline}}
  - : Der [`Request`](/de/docs/Web/API/Request), für den Sie versuchen, Datensätze zu finden.
    Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL sein. Wenn dieser Parameter weggelassen wird, werden alle Datensätze in das Ergebnis einbezogen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für den `match`-Vorgang festlegt. Die verfügbaren
    Optionen sind:
    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Abfrage-String in der URL ignoriert werden soll. Wenn zum Beispiel auf
        `true` gesetzt, wird der `?value=bar`-Teil von
        `http://foo.com/?value=bar` bei der Durchführung eines Abgleichs ignoriert.
        Standardmäßig ist dieser `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`,
        verhindert, dass Abgleichsvorgänge die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren.
        Wenn `false` (der Standard), sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, zeigt an, dass der {{HTTPHeader("Vary")}}-Header ignoriert werden sollte.
        Standardmäßig ist dieser `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem Array aller passenden [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekte aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das [`recordsAvailable`](/de/docs/Web/API/BackgroundFetchRegistration/recordsAvailable)-Flag `false` ist, was anzeigt, dass kein Abruf im Gange ist.

## Beispiele

Verwenden Sie `matchAll()` ohne Parameter, um alle Datensätze in einem Hintergrundabruf zurückzugeben.

```js
const records = await bgFetch.matchAll();
console.log(records); // an array of BackgroundFetchRecord objects
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

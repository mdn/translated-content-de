---
title: "BackgroundFetchRegistration: matchAll() Methode"
short-title: matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`matchAll()`** Methode des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Interfaces gibt ein Array von passenden [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) Objekten zurück.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request,options)
```

### Parameter

- `request` {{optional_inline}}
  - : Der [`Request`](/de/docs/Web/API/Request), für den Sie versuchen, Datensätze zu finden. Dies kann ein [`Request`](/de/docs/Web/API/Request) Objekt oder eine URL sein. Wenn dieser Parameter weggelassen wird, werden alle Datensätze im Ergebnis enthalten.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für den `match`-Vorgang festlegt. Die verfügbaren
    Optionen sind:

    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Abfragezeichenfolge in der URL ignoriert werden soll. Wenn zum Beispiel `true` gesetzt ist, wird der `?value=bar` Teil von
        `http://foo.com/?value=bar` beim Durchführen eines Abgleichs ignoriert. Der Standardwert ist `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, verhindert, dass Übereinstimmungsoperationen die `http`-Methode des [`Request`](/de/docs/Web/API/Request) validieren.
        Wenn `false` (der Standard), sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird angezeigt, dass der {{HTTPHeader("Vary")}} Header ignoriert werden sollte.
        Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array aller passenden [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) Objekte aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das [`recordsAvailable`](/de/docs/Web/API/BackgroundFetchRegistration/recordsAvailable) Flag `false` ist, was darauf hinweist, dass kein Abruf im Gange ist.

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

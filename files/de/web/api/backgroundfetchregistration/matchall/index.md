---
title: "BackgroundFetchRegistration: matchAll()-Methode"
short-title: matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`matchAll()`**-Methode der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle gibt ein Array von passenden [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekten zurück.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request,options)
```

### Parameter

- `request` {{optional_inline}}
  - : Das [`Request`](/de/docs/Web/API/Request)-Objekt, für das Sie versuchen, Datensätze zu finden.
    Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL sein. Wenn dieser Parameter weggelassen wird, sind alle Datensätze im Ergebnis enthalten.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Optionen für die `match`-Operation festlegt. Die verfügbaren
    Optionen sind:
    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Abfragezeichenfolge in der URL ignoriert werden soll. Beispielsweise würde bei `true` der Teil `?value=bar` von
        `https://example.com/?value=bar` beim Ausführen einer Übereinstimmung ignoriert. Standardmäßig ist es `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, verhindert dies, dass Übereinstimmungsoperationen die `http`-Methode der [`Request`](/de/docs/Web/API/Request) validieren.
        Wenn `false` (Standard) sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, zeigt dies an, dass der {{HTTPHeader("Vary")}}-Header ignoriert werden sollte.
        Standardmäßig ist es `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array aller passenden [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekten auflöst.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das [`recordsAvailable`](/de/docs/Web/API/BackgroundFetchRegistration/recordsAvailable)-Flag `false` ist, was darauf hinweist, dass kein Abruf im Gange ist.

## Beispiele

Verwenden Sie `matchAll()` ohne Parameter, um alle Datensätze in einem Hintergrund-Abruf zurückzugeben.

```js
const records = await bgFetch.matchAll();
console.log(records); // an array of BackgroundFetchRecord objects
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

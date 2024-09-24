---
title: "BackgroundFetchRegistration: matchAll() Methode"
short-title: matchAll()
slug: Web/API/BackgroundFetchRegistration/matchAll
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`matchAll()`**-Methode der {{domxref("BackgroundFetchRegistration")}}-Schnittstelle gibt ein Array von passenden {{domxref("BackgroundFetchRecord")}}-Objekten zurück.

## Syntax

```js-nolint
matchAll()
matchAll(request)
matchAll(request,options)
```

### Parameter

- `request` {{optional_inline}}
  - : Das {{domxref("Request")}}, für das Sie versuchen, Datensätze zu finden. Dies kann ein {{domxref("Request")}}-Objekt oder eine URL sein. Wenn dieser Parameter weggelassen wird, sind alle Datensätze im Ergebnis enthalten.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die `match`-Operation setzt. Die verfügbaren Optionen sind:

    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Abfragezeichenfolge in der URL ignoriert werden soll. Wenn beispielsweise auf `true` gesetzt, wird der Teil `?value=bar` von `http://foo.com/?value=bar` beim Ausführen eines Abgleichs ignoriert. Standardmäßig ist es `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, verhindert er, dass übereinstimmende Operationen die `http`-Methode des {{domxref("Request")}} validieren. Wenn `false` (Standard), sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, gibt dies an, dass der {{HTTPHeader("Vary")}}-Header ignoriert werden soll. Standardmäßig ist es `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array aller passenden {{domxref("BackgroundFetchRecord")}}-Objekte aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das {{domxref("BackgroundFetchRegistration.recordsAvailable","recordsAvailable")}}-Flag `false` ist, was anzeigt, dass kein Abruf im Gange ist.

## Beispiele

Verwenden Sie `matchAll()` ohne Parameter, um alle Datensätze in einem Hintergrundabruf zurückzugeben.

```js
const records = await bgFetch.matchAll();
console.log(records); // ein Array von BackgroundFetchRecord-Objekten
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

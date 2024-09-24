---
title: "BackgroundFetchRegistration: match() Methode"
short-title: match()
slug: Web/API/BackgroundFetchRegistration/match
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`match()`** Methode der {{domxref("BackgroundFetchRegistration")}} Schnittstelle gibt den ersten passenden {{domxref("BackgroundFetchRecord")}} zurück.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Der {{domxref("Request")}}, für den Sie versuchen, Datensätze zu finden.
    Dies kann ein {{domxref("Request")}} Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für den `match` Vorgang festlegt. Die verfügbaren
    Optionen sind:

    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Abfrage-String in der URL ignoriert werden soll. Beispielsweise würde bei `true` der `?value=bar` Teil von
        `http://foo.com/?value=bar` ignoriert, wenn ein Abgleich durchgeführt wird.
        Der Standardwert ist `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, verhindert dies, dass Matching-Operationen die `http`-Methode des {{domxref("Request")}} validieren.
        Bei `false` (dem Standardwert) sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true` gibt an, dass der {{HTTPHeader("Vary")}} Header ignoriert werden soll.
        Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem ersten {{domxref("BackgroundFetchRecord")}} aufgelöst wird, der
der Anfrage entspricht, oder {{jsxref("undefined")}} wenn kein Treffer gefunden wird.

> **Note:** `BackgroundFetchRegistration.match()` ist im Grunde identisch zu
> {{domxref("BackgroundFetchRegistration.matchAll()")}}, außer dass es anstelle der Auflösung mit einem Array aller passenden Datensätze nur mit dem ersten passenden Datensatz aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn Sie `match()` aufrufen, wenn keine Abrufe im Gange sind. Dieser Zustand wird durch {{domxref("BackgroundFetchRegistration.recordsAvailable")}} widergespiegelt, das auf `false` gesetzt ist.

## Beispiele

In diesem Beispiel suchen wir nach einem Datensatz mit der URL "/ep-5.mp3". Wird ein {{domxref("BackgroundFetchRecord")}} gefunden, können wir einige Informationen darüber zurückgeben.

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

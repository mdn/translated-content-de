---
title: "BackgroundFetchRegistration: match()-Methode"
short-title: match()
slug: Web/API/BackgroundFetchRegistration/match
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`match()`**-Methode der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle gibt den ersten passenden [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) zurück.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), für die unter den Aufzeichnungen gesucht werden soll.
    Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Ausführung der `match`-Operation festlegt. Die verfügbaren
    Optionen sind:

    - `ignoreSearch` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die
        Abfragezeichenfolge in der URL ignoriert werden soll. Zum Beispiel, wenn auf
        `true` gesetzt, würde der Teil `?value=bar` von
        `http://foo.com/?value=bar` ignoriert werden, wenn ein Abgleich vorgenommen wird.
        Der Standardwert ist `false`.
    - `ignoreMethod` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`,
        wird verhindert, dass die Abgleichs-Operationen die `HTTP`-Methode der [`Request`](/de/docs/Web/API/Request) validieren.
        Ist der Wert `false` (der Standardwert), sind nur `GET` und `HEAD` erlaubt.
    - `ignoreVary` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, zeigt dies an, dass der {{HTTPHeader("Vary")}}-Header ignoriert werden soll.
        Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem ersten [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) aufgelöst wird, der zur Anfrage passt oder mit {{jsxref("undefined")}}, wenn kein Treffer gefunden wird.

> **Note:** `BackgroundFetchRegistration.match()` ist im Wesentlichen identisch mit
> [`BackgroundFetchRegistration.matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll), mit dem Unterschied, dass es nicht mit einem Array aller passenden Aufzeichnungen, sondern nur mit der ersten passenden Aufzeichnung aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn Sie `match()` aufrufen, obwohl keine Abrufe im Gange sind. Dieser Zustand wird dadurch angezeigt, dass [`BackgroundFetchRegistration.recordsAvailable`](/de/docs/Web/API/BackgroundFetchRegistration/recordsAvailable) auf `false` gesetzt ist.

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

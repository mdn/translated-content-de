---
title: "FetchLaterResult: activated-Eigenschaft"
short-title: activated
slug: Web/API/FetchLaterResult/activated
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Die schreibgeschützte **`activated`**-Eigenschaft des [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Interfaces gibt einen boolean-Wert zurück, der angibt, ob der verzögerte Abruf gesendet wurde.

## Wert

Ein {{jsxref('Boolean')}}.

## Beispiele

### Einen `POST`-Request für etwa eine Minute verzögern und eine Funktion erstellen, um zu überprüfen, ob er gesendet wurde

```js
const result = fetchLater("https://report.example.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 60000 /* 1 minute */,
});

function checkIfFetched() {
  return result.activated;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

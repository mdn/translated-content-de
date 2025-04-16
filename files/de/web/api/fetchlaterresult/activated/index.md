---
title: "FetchLaterResult: aktiviert Eigenschaft"
short-title: activated
slug: Web/API/FetchLaterResult/activated
l10n:
  sourceCommit: a753bfc10d401d87f72220636166b560264fa1fa
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`activated`** der [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der verzögerte Abruf gesendet wurde.

## Wert

Ein {{jsxref('Boolean')}}.

## Beispiele

### Eine `POST`-Anfrage für etwa eine Minute verzögern und eine Funktion erstellen, um zu überprüfen, ob sie gesendet wurde

```js
const result = fetchLater("https://report.example.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 60000 /* 1 minute */,
});

function check_if_fetched() {
  return result.activated;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

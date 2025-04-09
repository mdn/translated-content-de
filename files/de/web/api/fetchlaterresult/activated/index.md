---
title: "FetchLaterResult: activated-Eigenschaft"
short-title: activated
slug: Web/API/FetchLaterResult/activated
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Die schreibgeschützte **`activated`**-Eigenschaft der [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der verzögerte Abruf (Fetch) gesendet wurde.

## Wert

Ein {{jsxref('Boolean')}}.

## Beispiele

### Verzögern einer `POST`-Anfrage um ungefähr eine Minute und Erstellen einer Funktion zur Überprüfung, ob sie gesendet wurde

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

---
title: FetchLaterResult
slug: Web/API/FetchLaterResult
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die **`FetchLaterResult`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) wird von der [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater)-Methode zurückgegeben, nachdem ein verzögerter Abruf erstellt wurde.

Sie enthält eine einzelne Eigenschaft `activated`, die angibt, ob die verzögerte Anfrage gesendet wurde oder nicht.

Nach einem erfolgreichen Versand wird die gesamte Antwort ignoriert — einschließlich Body und Header — sodass die Antwort des verzögerten Abrufs niemals an die `FetchLaterResult`-Schnittstelle zurückgegeben wird.

## Instanz-Eigenschaften

- [`FetchLaterResult.activated`](/de/docs/Web/API/FetchLaterResult/activated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein schreibgeschütztes boolesches Feld, das angibt, ob die verzögerte Anfrage gesendet wurde. Dies ist zunächst auf `false` gesetzt und wird dann vom Browser aktualisiert, sobald der verzögerte Abruf gesendet wurde.

## Beispiele

### Eine `POST`-Anfrage für etwa eine Minute verzögern und eine Funktion erstellen, um zu überprüfen, ob sie gesendet wurde

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

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Verwendung von Deferred Fetch](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch)

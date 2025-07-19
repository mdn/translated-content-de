---
title: FetchLaterResult
slug: Web/API/FetchLaterResult
l10n:
  sourceCommit: 6d19a35ed11d841f8dbbf886014ce714b347f8ab
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Das **`FetchLaterResult`**-Interface der [`fetchLater()`-API](/de/docs/Web/API/fetchLater_API) wird von der Methode [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) zurückgegeben, nachdem ein verzögertes Abrufen erstellt wurde.

Es enthält eine einzelne `activated`-Eigenschaft, die angibt, ob die verzögerte Anfrage gesendet wurde oder nicht.

Nach einem erfolgreichen Versand wird die gesamte Antwort ignoriert — einschließlich des Körpers und der Header —, sodass die Antwort des verzögerten Abrufs niemals an das `FetchLaterResult`-Interface zurückgegeben wird.

## Instanz-Eigenschaften

- [`FetchLaterResult.activated`](/de/docs/Web/API/FetchLaterResult/activated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein schreibgeschütztes boolesches Feld, das angibt, ob die verzögerte Anfrage gesendet wurde. Dies ist anfangs auf `false` gesetzt und wird dann vom Browser aktualisiert, sobald der verzögerte Abruf gesendet wurde.

## Beispiele

### Verzögern Sie eine `POST`-Anfrage für etwa eine Minute und erstellen Sie eine Funktion, um zu überprüfen, ob sie gesendet wurde

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

## Siehe auch

- [`fetchLater()`-API](/de/docs/Web/API/fetchLater_API)
- [Fetch-API](/de/docs/Web/API/Fetch_API)

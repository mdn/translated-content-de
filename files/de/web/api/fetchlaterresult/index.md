---
title: FetchLaterResult
slug: Web/API/FetchLaterResult
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Das **`FetchLaterResult`**-Interface der [`fetchLater()`-API](/de/docs/Web/API/fetchLater_API) wird von der Methode [`Window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) zurückgegeben, nachdem ein verzögerter Abruf erstellt wurde.

Es enthält eine einzelne Eigenschaft `activated`, die angibt, ob die verzögerte Anfrage gesendet wurde oder nicht.

Nach einem erfolgreichen Senden wird die gesamte Antwort ignoriert – einschließlich Body und Header – sodass die Antwort des verzögerten Abrufs niemals an das `FetchLaterResult`-Interface zurückgegeben wird.

## Instanzeigenschaften

- [`FetchLaterResult.activated`](/de/docs/Web/API/FetchLaterResult/activated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein schreibgeschütztes boolesches Feld, das angibt, ob die verzögerte Anfrage gesendet wurde. Dies wird zunächst auf `false` gesetzt und dann vom Browser aktualisiert, sobald der verzögerte Abruf gesendet wurde.

## Beispiele

### Einen `POST`-Anfrage um ungefähr eine Minute verzögern und eine Funktion erstellen, um zu überprüfen, ob sie gesendet wurde

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

- [`fetchLater()`-API](/de/docs/Web/API/fetchLater_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)

---
title: FetchLaterResult
slug: Web/API/FetchLaterResult
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Das **`FetchLaterResult`**-Interface des [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) wird von der [`Window.FetchLater()`](/de/docs/Web/API/Window/fetchLater)-Methode zurückgegeben, nachdem ein verzögertes Abrufen erstellt wurde.

Es enthält eine einzige `activated`-Eigenschaft, die angibt, ob die verzögerte Anfrage gesendet wurde oder nicht.

Nach einem erfolgreichen Senden wird die gesamte Antwort ignoriert — einschließlich Körper und Header — sodass die Antwort des verzögerten Abrufs niemals an das `FetchLaterResult`-Interface zurückgegeben wird.

## Instanz-Eigenschaften

- [`FetchLaterResult.activated`](/de/docs/Web/API/FetchLaterResult/activated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein schreibgeschütztes boolesches Feld, das angibt, ob die verzögerte Anfrage gesendet wurde. Dies ist zunächst auf `false` gesetzt und wird dann vom Browser aktualisiert, sobald der verzögerte Abruf gesendet wurde.

## Beispiele

### Eine `POST`-Anfrage um etwa eine Minute verzögern und eine Funktion erstellen, um zu überprüfen, ob sie gesendet wurde

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

- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)

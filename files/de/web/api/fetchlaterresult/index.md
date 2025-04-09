---
title: FetchLaterResult
slug: Web/API/FetchLaterResult
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Das **`FetchLaterResult`**-Interface der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) wird von der [`Window.FetchLater()`](/de/docs/Web/API/Window/fetchLater)-Methode zurückgegeben, nachdem ein verzögerter Abruf erstellt wurde.

Es enthält eine einzelne `activated`-Eigenschaft, die angibt, ob die verzögerte Anforderung gesendet wurde oder nicht.

Nach einem erfolgreichen Senden wird die gesamte Antwort ignoriert – einschließlich Body und Header – sodass die Antwort des verzögerten Abrufs niemals an das `FetchLaterResult`-Interface zurückgegeben wird.

## Instanzeigenschaften

- [`FetchLaterResult.activated`](/de/docs/Web/API/FetchLaterResult/activated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein schreibgeschütztes boolesches Feld, das angibt, ob die verzögerte Anforderung gesendet wurde. Dies ist zunächst auf `false` gesetzt und wird dann vom Browser aktualisiert, sobald der verzögerte Abruf gesendet wurde.

## Beispiele

### Verzögern Sie eine `POST`-Anfrage für ungefähr eine Minute und erstellen Sie eine Funktion, um zu überprüfen, ob sie gesendet wurde

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

- [`fetchLater() API`](/de/docs/Web/API/fetchLater_API)
- [Fetch API](/de/docs/Web/API/Fetch_API)

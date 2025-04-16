---
title: FetchLaterResult
slug: Web/API/FetchLaterResult
l10n:
  sourceCommit: a753bfc10d401d87f72220636166b560264fa1fa
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Das **`FetchLaterResult`**-Interface der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) wird von der Methode [`Window.FetchLater()`](/de/docs/Web/API/Window/fetchLater) zurückgegeben, nachdem ein verzögerter Abruf erstellt wurde.

Es enthält eine einzige Eigenschaft `activated`, die anzeigt, ob die verzögerte Anforderung gesendet wurde oder nicht.

Nachdem eine Anforderung erfolgreich gesendet wurde, wird die gesamte Antwort ignoriert — einschließlich des Inhalts und der Kopfdaten — sodass die Antwort des verzögerten Abrufs niemals an das `FetchLaterResult`-Interface zurückgegeben wird.

## Instanz-Eigenschaften

- [`FetchLaterResult.activated`](/de/docs/Web/API/FetchLaterResult/activated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein schreibgeschütztes boolesches Feld, das anzeigt, ob die verzögerte Anforderung gesendet wurde. Dieses Feld ist zunächst auf `false` gesetzt und wird vom Browser aktualisiert, sobald der verzögerte Abruf gesendet wurde.

## Beispiele

### Verschieben Sie eine `POST`-Anfrage um etwa eine Minute und erstellen Sie eine Funktion, um zu überprüfen, ob gesendet

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

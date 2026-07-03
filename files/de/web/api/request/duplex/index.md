---
title: "Anforderung: Duplex-Eigenschaft"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die schreibgeschützte **`duplex`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request) Interface gibt den Duplex-Modus der Anforderung zurück, der bestimmt, ob der Browser die gesamte Anforderung senden muss, bevor er die Antwort verarbeitet.

## Wert

Ein String mit dem folgenden möglichen Wert:

- `"half"`
  - : Der Browser muss die gesamte Anforderung senden, bevor er die Antwort verarbeitet.

## Hinweise

Obwohl `duplex` beim Erstellen einer `Request` als Option übergeben werden kann, wird es derzeit nicht in allen Browsern als lesbare Eigenschaft des resultierenden `Request`-Objekts angezeigt.

## Beispiele

### Überprüfen des Duplex-Modus einer Anfrage

```js
const stream = new ReadableStream({/* ... */});
const request = new Request("/upload", {
  method: "POST",
  body: stream,
  duplex: "half", // Required for streaming requests
});

console.log(request.duplex); // "half"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor
- [`RequestInit.duplex`](/de/docs/Web/API/RequestInit#duplex) in Anfrageoptionen
- [Verwenden eines Fetch als Stream](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream)

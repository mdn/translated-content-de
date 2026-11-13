---
title: "Request: duplex-Eigenschaft"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("Fetch API")}}

Die schreibgeschützte Eigenschaft **`duplex`** der Schnittstelle [`Request`](/de/docs/Web/API/Request) gibt den Duplex-Modus der Anfrage zurück. Dieser bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.

Obwohl `duplex` beim Erstellen eines `Request` als Option übergeben werden kann, ist die Eigenschaft derzeit nicht in allen Browsern als lesbare Eigenschaft des resultierenden `Request`-Objekts verfügbar.

## Wert

Ein String mit folgendem möglichen Wert:

- `"half"`
  - : Der Browser muss die gesamte Anfrage senden, bevor er die Antwort verarbeitet.

## Beispiele

### Duplex-Modus einer Anfrage prüfen

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
- [`RequestInit.duplex`](/de/docs/Web/API/RequestInit#duplex) in den Anfrageoptionen
- [Einen Fetch als Stream verarbeiten](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream)

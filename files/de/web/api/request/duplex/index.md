---
title: "Request: duplex-Eigenschaft"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`duplex`** der Schnittstelle [`Request`](/de/docs/Web/API/Request) gibt den Duplexmodus der Anfrage zurück. Dieser bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.

Obwohl `duplex` beim Erstellen eines `Request` als Option übergeben werden kann, ist die Eigenschaft derzeit nicht in allen Browsern auf dem resultierenden `Request`-Objekt lesbar.

## Wert

Ein String mit dem folgenden möglichen Wert:

- `"half"`
  - : Der Browser muss die gesamte Anfrage senden, bevor er die Antwort verarbeitet.

## Beispiele

### Den Duplexmodus einer Anfrage prüfen

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

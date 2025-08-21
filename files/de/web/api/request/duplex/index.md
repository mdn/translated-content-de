---
title: "Anforderung: duplex-Eigenschaft"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: 3a9a6f9dd92859dca2f928c59b34d9177adb9ae5
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die **`duplex`** schreibgeschützte Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces gibt den Duplex-Modus der Anfrage zurück, welcher bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor die Antwort verarbeitet wird.

## Wert

Ein String mit dem folgenden möglichen Wert:

- `"half"`
  - : Der Browser muss die gesamte Anfrage senden, bevor die Antwort verarbeitet wird.

## Hinweise

Obwohl `duplex` als Option beim Erstellen eines `Request` übergeben werden kann, wird es derzeit nicht in allen Browsern als lesbare Eigenschaft am resultierenden `Request`-Objekt bereitgestellt.

## Beispiele

### Überprüfen des Duplex-Modus einer Anfrage

```js
const stream = new ReadableStream({
  /* ... */
});
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
- [Verwendung eines Fetch als Stream](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream)

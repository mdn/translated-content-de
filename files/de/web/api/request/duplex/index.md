---
title: "Anforderung: duplex-Eigenschaft"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die schreibgeschützte **`duplex`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle gibt den Duplex-Modus der Anfrage zurück, der bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor die Antwort verarbeitet wird.

## Wert

Ein String mit dem folgenden möglichen Wert:

- `"half"`
  - : Der Browser muss die gesamte Anfrage senden, bevor die Antwort verarbeitet wird.

## Hinweise

Obwohl `duplex` als Option beim Erstellen eines `Request` übergeben werden kann, wird es derzeit nicht in allen Browsern als lesbare Eigenschaft des resultierenden `Request`-Objekts bereitgestellt.

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
- [`RequestInit.duplex`](/de/docs/Web/API/RequestInit#duplex) in Anfrage-Optionen
- [Verarbeiten eines Fetch als Stream](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_streamh)

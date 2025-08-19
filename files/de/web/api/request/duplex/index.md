---
title: "Anfrage: duplex-Eigenschaft"
short-title: duplex
slug: Web/API/Request/duplex
l10n:
  sourceCommit: 03bec1862b095fc71beac2341a9faaaa8d209f49
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`duplex`** der [`Request`](/de/docs/Web/API/Request)-Schnittstelle gibt den Duplex-Modus der Anfrage zurück, der bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.

## Wert

Ein String mit dem folgenden möglichen Wert:

- `"half"`
  - : Der Browser muss die gesamte Anfrage senden, bevor er die Antwort verarbeitet.

## Hinweise

Obwohl `duplex` als Option beim Erstellen eines `Request` übergeben werden kann, wird es derzeit nicht als lesbare Eigenschaft auf dem resultierenden `Request`-Objekt in allen Browsern offengelegt.

## Beispiele

### Überprüfung des Duplex-Modus einer Anfrage

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
- [`RequestInit.duplex`](/de/docs/Web/API/RequestInit/duplex) in Anfrageoptionen
- [Verwendung von ReadableStreams mit fetch](/de/docs/Web/API/Streams_API/Using_readable_streams#streams_with_fetch)

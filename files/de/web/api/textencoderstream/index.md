---
title: TextEncoderStream
slug: Web/API/TextEncoderStream
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextEncoderStream`**-Interface der [Encoding API](/de/docs/Web/API/Encoding_API) konvertiert einen Strom von Zeichenketten in Bytes im UTF-8-Encoding. Es ist das Streaming-Äquivalent zum [`TextEncoder`](/de/docs/Web/API/TextEncoder).

## Konstruktor

- [`TextEncoderStream()`](/de/docs/Web/API/TextEncoderStream/TextEncoderStream)
  - : Erstellt ein neues `TextEncoderStream`-Objekt.

## Instanzeigenschaften

- [`TextEncoderStream.encoding`](/de/docs/Web/API/TextEncoderStream/encoding) {{ReadOnlyInline}}
  - : Gibt immer `"utf-8"` zurück.
- [`TextEncoderStream.readable`](/de/docs/Web/API/TextEncoderStream/readable) {{ReadOnlyInline}}
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.
- [`TextEncoderStream.writable`](/de/docs/Web/API/TextEncoderStream/writable) {{ReadOnlyInline}}
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.

## Beispiele

- [Beispiele für Streaming strukturierter Daten und HTML](https://streams.spec.whatwg.org/demos/)
- [Ein Beispiel für Fetch-Request-Ströme, das `TextEncoderStream` verwendet, um die Daten hochzuladen](https://glitch.com/~fetch-request-stream).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)
- [Streams API Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams API](https://deanhume.com/experimenting-with-the-streams-api/)

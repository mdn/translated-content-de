---
title: TextEncoderStream
slug: Web/API/TextEncoderStream
l10n:
  sourceCommit: 64cadd5fed8c49a9655724a49b3b2747a4fbae2d
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextEncoderStream`**-Interface der [Encoding API](/de/docs/Web/API/Encoding_API) konvertiert einen Strom von Zeichenfolgen in Bytes im UTF-8-Format. Es ist das Streaming-Äquivalent von [`TextEncoder`](/de/docs/Web/API/TextEncoder).

## Konstruktor

- [`TextEncoderStream()`](/de/docs/Web/API/TextEncoderStream/TextEncoderStream)
  - : Erstellt ein neues `TextEncoderStream`-Objekt.

## Instanzeigenschaften

- [`TextEncoderStream.encoding`](/de/docs/Web/API/TextEncoderStream/encoding) {{ReadOnlyInline}}
  - : Gibt immer `"utf-8"` zurück.
- [`TextEncoderStream.readable`](/de/docs/Web/API/TextEncoderStream/readable) {{ReadOnlyInline}}
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem Objekt kontrolliert wird.
- [`TextEncoderStream.writable`](/de/docs/Web/API/TextEncoderStream/writable) {{ReadOnlyInline}}
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem Objekt kontrolliert wird.

## Beispiele

[Beispiele für Streaming strukturierter Daten und HTML](https://streams.spec.whatwg.org/demos/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)
- [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
- [Streaming-Anfragen mit der Fetch API](https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests), developer.chrome.com (2020)

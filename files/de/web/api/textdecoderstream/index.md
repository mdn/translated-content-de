---
title: TextDecoderStream
slug: Web/API/TextDecoderStream
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextDecoderStream`**-Interface der [Encoding API](/de/docs/Web/API/Encoding_API) konvertiert einen Strom von Text in einer binären Kodierung, wie z.B. UTF-8, in einen Strom von Zeichenfolgen.
Es ist das Streaming-Äquivalent von [`TextDecoder`](/de/docs/Web/API/TextDecoder).

## Konstruktor

- [`TextDecoderStream()`](/de/docs/Web/API/TextDecoderStream/TextDecoderStream)
  - : Erstellt ein neues `TextDecoderStream`-Objekt.

## Instanzeigenschaften

- [`TextDecoderStream.encoding`](/de/docs/Web/API/TextDecoderStream/encoding) {{ReadOnlyInline}}
  - : Eine Kodierung.
- [`TextDecoderStream.fatal`](/de/docs/Web/API/TextDecoderStream/fatal) {{ReadOnlyInline}}
  - : Ein {{jsxref("boolean")}}, das anzeigt, ob der Fehlermodus fatal ist.
- [`TextDecoderStream.ignoreBOM`](/de/docs/Web/API/TextDecoderStream/ignoreBOM) {{ReadOnlyInline}}
  - : Ein {{jsxref("boolean")}}, das anzeigt, ob das Byte Order Mark ignoriert wird.
- [`TextDecoderStream.readable`](/de/docs/Web/API/TextDecoderStream/readable) {{ReadOnlyInline}}
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.
- [`TextDecoderStream.writable`](/de/docs/Web/API/TextDecoderStream/writable) {{ReadOnlyInline}}
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.

## Beispiele

- [Beispiele für Streaming von strukturierten Daten und HTML](https://streams.spec.whatwg.org/demos/)
- [Ein Beispiel für `fetch`-Anforderungsströme, das `TextDecoderStream` verwendet](https://glitch.com/~fetch-request-stream).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)
- [Streams API Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams API](https://deanhume.com/experimenting-with-the-streams-api/)

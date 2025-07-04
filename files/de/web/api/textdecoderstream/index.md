---
title: TextDecoderStream
slug: Web/API/TextDecoderStream
l10n:
  sourceCommit: 64cadd5fed8c49a9655724a49b3b2747a4fbae2d
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextDecoderStream`**-Interface der [Encoding API](/de/docs/Web/API/Encoding_API) konvertiert einen Strom von Text in einer binären Kodierung, wie UTF-8 usw., zu einem Strom von Zeichenfolgen.
Es ist das Streaming-Äquivalent zu [`TextDecoder`](/de/docs/Web/API/TextDecoder).

## Konstruktor

- [`TextDecoderStream()`](/de/docs/Web/API/TextDecoderStream/TextDecoderStream)
  - : Erstellt ein neues `TextDecoderStream`-Objekt.

## Instanz-Eigenschaften

- [`TextDecoderStream.encoding`](/de/docs/Web/API/TextDecoderStream/encoding) {{ReadOnlyInline}}
  - : Eine Kodierung.
- [`TextDecoderStream.fatal`](/de/docs/Web/API/TextDecoderStream/fatal) {{ReadOnlyInline}}
  - : Ein {{jsxref("boolean")}}, der angibt, ob der Fehlermodus fatal ist.
- [`TextDecoderStream.ignoreBOM`](/de/docs/Web/API/TextDecoderStream/ignoreBOM) {{ReadOnlyInline}}
  - : Ein {{jsxref("boolean")}}, der angibt, ob das byte order mark ignoriert wird.
- [`TextDecoderStream.readable`](/de/docs/Web/API/TextDecoderStream/readable) {{ReadOnlyInline}}
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem Objekt kontrolliert wird.
- [`TextDecoderStream.writable`](/de/docs/Web/API/TextDecoderStream/writable) {{ReadOnlyInline}}
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem Objekt kontrolliert wird.

## Beispiele

[Beispiele für das Streaming von strukturierten Daten und HTML](https://streams.spec.whatwg.org/demos/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)
- [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
- [Streaming von Anfragen mit der fetch API](https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests), developer.chrome.com (2020)

---
title: TextDecoderStream
slug: Web/API/TextDecoderStream
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextDecoderStream`** Interface der [Encoding API](/de/docs/Web/API/Encoding_API) konvertiert einen Strom von Text in einer binären Kodierung, wie z.B. UTF-8, in einen Strom von Zeichenketten.
Es ist das Stream-Äquivalent zu [`TextDecoder`](/de/docs/Web/API/TextDecoder).
Es implementiert dieselbe Form wie ein [`TransformStream`](/de/docs/Web/API/TransformStream), was es ermöglicht, in [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und ähnlichen Methoden verwendet zu werden.

## Konstruktor

- [`TextDecoderStream()`](/de/docs/Web/API/TextDecoderStream/TextDecoderStream)
  - : Erstellt ein neues `TextDecoderStream`-Objekt.

## Instanz-Eigenschaften

- [`TextDecoderStream.encoding`](/de/docs/Web/API/TextDecoderStream/encoding) {{ReadOnlyInline}}
  - : Eine Kodierung.
- [`TextDecoderStream.fatal`](/de/docs/Web/API/TextDecoderStream/fatal) {{ReadOnlyInline}}
  - : Ein {{jsxref("Boolean")}}, der angibt, ob der Fehlermodus fatal ist.
- [`TextDecoderStream.ignoreBOM`](/de/docs/Web/API/TextDecoderStream/ignoreBOM) {{ReadOnlyInline}}
  - : Ein {{jsxref("Boolean")}}, der angibt, ob das Byte-Order-Mark ignoriert wird.
- [`TextDecoderStream.readable`](/de/docs/Web/API/TextDecoderStream/readable) {{ReadOnlyInline}}
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.
- [`TextDecoderStream.writable`](/de/docs/Web/API/TextDecoderStream/writable) {{ReadOnlyInline}}
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.

## Beispiele

[Beispiele für Streaming von strukturierten Daten und HTML](https://streams.spec.whatwg.org/demos/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [Streams API Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
- [Streaming-Anfragen mit der Fetch-API](https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests), developer.chrome.com (2020)

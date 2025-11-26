---
title: TextDecoderStream
slug: Web/API/TextDecoderStream
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextDecoderStream`**-Interface der [Encoding API](/de/docs/Web/API/Encoding_API) wandelt einen Textstrom in einer binären Kodierung, wie z.B. UTF-8, in einen Strom von Zeichenketten um.
Es ist das Streaming-Äquivalent zu [`TextDecoder`](/de/docs/Web/API/TextDecoder).
Es implementiert dieselbe Form wie ein [`TransformStream`](/de/docs/Web/API/TransformStream), wodurch es in Methoden wie [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) verwendet werden kann.

## Konstruktor

- [`TextDecoderStream()`](/de/docs/Web/API/TextDecoderStream/TextDecoderStream)
  - : Erstellt ein neues `TextDecoderStream`-Objekt.

## Instanzeigenschaften

- [`TextDecoderStream.encoding`](/de/docs/Web/API/TextDecoderStream/encoding) {{ReadOnlyInline}}
  - : Eine Kodierung.
- [`TextDecoderStream.fatal`](/de/docs/Web/API/TextDecoderStream/fatal) {{ReadOnlyInline}}
  - : Ein {{jsxref("boolean")}}, der angibt, ob der Fehlermodus fatal ist.
- [`TextDecoderStream.ignoreBOM`](/de/docs/Web/API/TextDecoderStream/ignoreBOM) {{ReadOnlyInline}}
  - : Ein {{jsxref("boolean")}}, der angibt, ob das Byte Order Mark ignoriert wird.
- [`TextDecoderStream.readable`](/de/docs/Web/API/TextDecoderStream/readable) {{ReadOnlyInline}}
  - : Gibt die [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.
- [`TextDecoderStream.writable`](/de/docs/Web/API/TextDecoderStream/writable) {{ReadOnlyInline}}
  - : Gibt die [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz zurück, die von diesem Objekt gesteuert wird.

## Beispiele

[Beispiele für das Streaming von strukturierten Daten und HTML](https://streams.spec.whatwg.org/demos/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)
- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [Konzepte der Streams API](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
- [Streaming von Anfragen mit der Fetch API](https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests), developer.chrome.com (2020)

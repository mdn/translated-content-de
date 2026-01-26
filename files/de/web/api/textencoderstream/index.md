---
title: TextEncoderStream
slug: Web/API/TextEncoderStream
l10n:
  sourceCommit: ae6626ec9a5729a51f202b77586f37958088ed77
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextEncoderStream`**-Interface der [Encoding API](/de/docs/Web/API/Encoding_API) konvertiert einen Strom von Zeichenketten in Bytes im UTF-8-Encoding. Es ist das Streaming-Äquivalent von [`TextEncoder`](/de/docs/Web/API/TextEncoder).
Es implementiert die gleiche Form wie ein [`TransformStream`](/de/docs/Web/API/TransformStream), wodurch es in [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und ähnlichen Methoden verwendet werden kann.

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

[Beispiele für das Streaming strukturierter Daten und HTML](https://streams.spec.whatwg.org/demos/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)
- [`TextEncoder`](/de/docs/Web/API/TextEncoder)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams API](https://deanhume.com/experimenting-with-the-streams-api/)
- [Streaming-Anfragen mit der Fetch API](https://developer.chrome.com/docs/capabilities/web-apis/fetch-streaming-requests), developer.chrome.com (2020)

---
title: TextDecoderStream
slug: Web/API/TextDecoderStream
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("Encoding API")}}

Das **`TextDecoderStream`**-Interface der {{domxref('Encoding API','','',' ')}} konvertiert einen Datenstrom in einer binären Codierung, wie beispielsweise UTF-8, in einen Datenstrom aus Zeichenfolgen.
Es ist das Streaming-Äquivalent zu {{domxref("TextDecoder")}}.

## Konstruktor

- {{domxref("TextDecoderStream.TextDecoderStream","TextDecoderStream()")}}
  - : Erstellt ein neues `TextDecoderStream`-Objekt.

## Instanz-Eigenschaften

- {{DOMxRef("TextDecoderStream.encoding")}} {{ReadOnlyInline}}
  - : Eine Codierung.
- {{DOMxRef("TextDecoderStream.fatal")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("boolean")}}, der anzeigt, ob der Fehlermodus fatal ist.
- {{DOMxRef("TextDecoderStream.ignoreBOM")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("boolean")}}, der anzeigt, ob die Bytes Order Mark ignoriert wird.
- {{DOMxRef("TextDecoderStream.readable")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("ReadableStream")}}-Instanz zurück, die von diesem Objekt kontrolliert wird.
- {{DOMxRef("TextDecoderStream.writable")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("WritableStream")}}-Instanz zurück, die von diesem Objekt kontrolliert wird.

## Beispiele

- [Beispiele für Streaming strukturierter Daten und HTML](https://streams.spec.whatwg.org/demos/)
- [Ein Beispiel für Fetch-Request-Streams, das `TextDecoderStream` verwendet](https://glitch.com/~fetch-request-stream).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextEncoderStream")}}
- [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams-API](https://deanhume.com/experimenting-with-the-streams-api/)

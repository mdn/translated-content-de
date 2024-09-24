---
title: TextEncoderStream
slug: Web/API/TextEncoderStream
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("Encoding API")}}

Das **`TextEncoderStream`**-Interface der {{domxref('Encoding API','','',' ')}} wandelt einen Stream von Zeichenfolgen in Bytes im UTF-8-Format um. Es ist das Streaming-Äquivalent zu {{domxref("TextEncoder")}}.

## Konstruktor

- {{domxref("TextEncoderStream.TextEncoderStream","TextEncoderStream()")}}
  - : Erstellt ein neues `TextEncoderStream`-Objekt.

## Instanz-Eigenschaften

- {{DOMxRef("TextEncoderStream.encoding")}} {{ReadOnlyInline}}
  - : Gibt immer "`utf-8`" zurück.
- {{DOMxRef("TextEncoderStream.readable")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("ReadableStream")}}-Instanz zurück, die von diesem Objekt gesteuert wird.
- {{DOMxRef("TextEncoderStream.writable")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("WritableStream")}}-Instanz zurück, die von diesem Objekt gesteuert wird.

## Beispiele

- [Beispiele für Streaming von strukturierten Daten und HTML](https://streams.spec.whatwg.org/demos/)
- [Ein Beispiel für Fetch-Anfrage-Streams, das `TextEncoderStream` nutzt, um die Daten hochzuladen](https://glitch.com/~fetch-request-stream).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextDecoderStream")}}
- [Streams API Konzepte](/de/docs/Web/API/Streams_API/Concepts)
- [Experimentieren mit der Streams-API](https://deanhume.com/experimenting-with-the-streams-api/)

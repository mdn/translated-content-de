---
title: Encoding API
slug: Web/API/Encoding_API
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{DefaultAPISidebar("Encoding API")}}{{AvailableInWorkers}}

Die **Encoding API** ermöglicht es Webentwicklern, mit Text zu arbeiten, der in {{Glossary("character_encoding", "Zeichenkodierungssystemen")}} dargestellt wird, die sich von der internen Kodierung von JavaScript-Strings unterscheiden. Insbesondere erlaubt sie Entwicklern, Text zwischen JavaScript-Strings und der {{Glossary("UTF-8", "UTF-8")}} Kodierung zu konvertieren, die für die meisten Dokumente im Web verwendet wird.

Sie bietet zwei Mechanismen:

- **Encoding**: Umwandlung eines JavaScript-Strings in ein Byte-Array, das die {{Glossary("UTF-8", "UTF-8")}} Kodierung des Strings darstellt.
- **Decoding**: Umwandlung eines Byte-Arrays, das eine bestimmte Zeichenkodierung eines Textes darstellt, in einen JavaScript-String.

Beachten Sie, dass diese Operationen asymmetrisch sind: Encoding kodiert nur in UTF-8, während Decoding UTF-8 sowie [viele veraltete Kodierungssysteme](/de/docs/Web/API/Encoding_API/Encodings) dekodieren kann.

Die API stellt synchrone Schnittstellen für Encoding und Decoding zur Verfügung, und auch [streambasierte](/de/docs/Web/API/Streams_API) Encoder und Decoder, die genutzt werden könnten, um zum Beispiel Text zu dekodieren, während er über eine Netzwerkverbindung eintrifft.

## Schnittstellen

- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
  - : Ein Decoder, um ein Byte-Array, das eine bestimmte Kodierung enthält, in einen JavaScript-String zu konvertieren.
- [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)
  - : Ein Decoder, um einen Byte-Stream, der eine bestimmte Kodierung enthält, in einen Stream von JavaScript-Strings zu konvertieren.
- [`TextEncoder`](/de/docs/Web/API/TextEncoder)
  - : Ein Encoder, um einen JavaScript-String in ein Byte-Array zu konvertieren, das die UTF-8 Kodierung des Strings darstellt.
- [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)
  - : Ein Encoder, um einen Stream von JavaScript-Strings in einen Stream von Bytes zu konvertieren, der die UTF-8 Kodierung der Strings darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Encoding API Encodings](/de/docs/Web/API/Encoding_API/Encodings) - Kodierungen, die für die Dekodierung von Text unterstützt werden müssen.

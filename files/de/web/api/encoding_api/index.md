---
title: Encoding API
slug: Web/API/Encoding_API
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Encoding API")}}{{AvailableInWorkers}}

Die **Encoding API** ermöglicht es Webentwicklern, mit Text zu arbeiten, der in {{Glossary("character_encoding", "Zeichenkodierungen")}} dargestellt wird, die sich von der Kodierung unterscheiden, die intern von JavaScript-Zeichenfolgen verwendet wird. Insbesondere ermöglicht sie Entwicklern, Text zwischen JavaScript-Zeichenfolgen und der {{Glossary("UTF-8", "UTF-8")}}-Kodierung zu konvertieren, die für die meisten Dokumente im Web genutzt wird.

Sie bietet zwei Mechanismen:

- **Encoding**: Eine JavaScript-Zeichenfolge wird in ein Array von Bytes umgewandelt, das die {{Glossary("UTF-8", "UTF-8")}}-Kodierung der Zeichenfolge darstellt.
- **Decoding**: Ein Array von Bytes, das eine bestimmte Zeichenkodierung eines Textes darstellt, wird in eine JavaScript-Zeichenfolge umgewandelt.

Beachten Sie, dass diese Operationen asymmetrisch sind: Encoding kodiert nur in UTF-8, während Decoding UTF-8 sowie [viele Legacy-Kodierungssysteme](/de/docs/Web/API/Encoding_API/Encodings) dekodieren kann.

Die API bietet synchrone Schnittstellen für Encoding und Decoding sowie auch [stream-basierte](/de/docs/Web/API/Streams_API) Encoder und Decoder, die beispielsweise verwendet werden könnten, um Text zu dekodieren, sobald er über eine Netzwerkverbindung eintrifft.

## Schnittstellen

- [`TextDecoder`](/de/docs/Web/API/TextDecoder)
  - : Ein Decoder, um ein Bytearray, das eine bestimmte Kodierung enthält, in eine JavaScript-Zeichenfolge zu konvertieren.
- [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream)
  - : Ein Decoder, um einen Bytestream, der eine bestimmte Kodierung enthält, in einen Stream von JavaScript-Zeichenfolgen zu konvertieren.
- [`TextEncoder`](/de/docs/Web/API/TextEncoder)
  - : Ein Encoder, um eine JavaScript-Zeichenfolge in ein Array von Bytes zu konvertieren, das die UTF-8-Kodierung der Zeichenfolge darstellt.
- [`TextEncoderStream`](/de/docs/Web/API/TextEncoderStream)
  - : Ein Encoder, um einen Stream von JavaScript-Zeichenfolgen in einen Stream von Bytes zu konvertieren, der die UTF-8-Kodierung der Zeichenfolgen darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Encoding API Encodings](/de/docs/Web/API/Encoding_API/Encodings) - Kodierungen, die zur Dekodierung von Text unterstützt werden müssen.

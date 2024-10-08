---
title: EncodedVideoChunk
slug: Web/API/EncodedVideoChunk
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`EncodedVideoChunk`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert ein Segment von kodierten Videodaten.

## Konstruktor

- [`EncodedVideoChunk()`](/de/docs/Web/API/EncodedVideoChunk/EncodedVideoChunk)
  - : Erstellt ein neues `EncodedVideoChunk`-Objekt.

## Instanzeigenschaften

- [`EncodedVideoChunk.type`](/de/docs/Web/API/EncodedVideoChunk/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der angibt, ob dieses Datensegment ein Schlüssel-Chunk ist.
- [`EncodedVideoChunk.timestamp`](/de/docs/Web/API/EncodedVideoChunk/timestamp) {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die den Zeitstempel des Videos in Mikrosekunden darstellt.
- [`EncodedVideoChunk.duration`](/de/docs/Web/API/EncodedVideoChunk/duration) {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Dauer des Videos in Mikrosekunden darstellt.
- [`EncodedVideoChunk.byteLength`](/de/docs/Web/API/EncodedVideoChunk/byteLength) {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Länge des Videos in Bytes darstellt.

## Instanzmethoden

- [`EncodedVideoChunk.copyTo()`](/de/docs/Web/API/EncodedVideoChunk/copyTo)
  - : Kopiert die kodierten Videodaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

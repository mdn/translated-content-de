---
title: EncodedAudioChunk
slug: Web/API/EncodedAudioChunk
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`EncodedAudioChunk`**-Schnittstelle der [WebCodecs-API](/de/docs/Web/API/WebCodecs_API) repräsentiert einen Abschnitt von kodierten Audiodaten.

## Konstruktor

- [`EncodedAudioChunk()`](/de/docs/Web/API/EncodedAudioChunk/EncodedAudioChunk)
  - : Erstellt ein neues `EncodedAudioChunk`-Objekt.

## Instanz-Eigenschaften

- [`EncodedAudioChunk.type`](/de/docs/Web/API/EncodedAudioChunk/type) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die angibt, ob dieser Datenabschnitt ein Schlüsselabschnitt ist.
- [`EncodedAudioChunk.timestamp`](/de/docs/Web/API/EncodedAudioChunk/timestamp) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der den Zeitstempel des Audios in Mikrosekunden darstellt.
- [`EncodedAudioChunk.duration`](/de/docs/Web/API/EncodedAudioChunk/duration) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die Dauer des Audios in Mikrosekunden darstellt.
- [`EncodedAudioChunk.byteLength`](/de/docs/Web/API/EncodedAudioChunk/byteLength) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die Länge des Audios in Bytes darstellt.

## Instanz-Methoden

- [`EncodedAudioChunk.copyTo()`](/de/docs/Web/API/EncodedAudioChunk/copyTo)
  - : Kopiert die kodierten Audiodaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: EncodedVideoChunk
slug: Web/API/EncodedVideoChunk
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`EncodedVideoChunk`**-Schnittstelle der {{domxref('WebCodecs API','','',' ')}} repräsentiert einen Abschnitt kodierter Videodaten.

## Konstruktor

- {{domxref("EncodedVideoChunk.EncodedVideoChunk", "EncodedVideoChunk()")}}
  - : Erstellt ein neues `EncodedVideoChunk`-Objekt.

## Instanz Eigenschaften

- {{domxref("EncodedVideoChunk.type")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der angibt, ob dieser Datenabschnitt ein Schlüsselabschnitt ist.
- {{domxref("EncodedVideoChunk.timestamp")}} {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die den Zeitstempel des Videos in Mikrosekunden darstellt.
- {{domxref("EncodedVideoChunk.duration")}} {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Dauer des Videos in Mikrosekunden darstellt.
- {{domxref("EncodedVideoChunk.byteLength")}} {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Länge des Videos in Bytes darstellt.

## Instanzmethoden

- {{domxref("EncodedVideoChunk.copyTo()")}}
  - : Kopiert die kodierten Videodaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

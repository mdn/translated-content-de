---
title: EncodedAudioChunk
slug: Web/API/EncodedAudioChunk
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`EncodedAudioChunk`**-Schnittstelle der {{domxref('WebCodecs API','','',' ')}} repräsentiert einen Block von kodierten Audiodaten.

## Konstruktor

- {{domxref("EncodedAudioChunk.EncodedAudioChunk", "EncodedAudioChunk()")}}
  - : Erstellt ein neues `EncodedAudioChunk`-Objekt.

## Instanz-Eigenschaften

- {{domxref("EncodedAudioChunk.type")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die angibt, ob dieser Datenblock ein Schlüsselblock ist.
- {{domxref("EncodedAudioChunk.timestamp")}} {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die den Zeitstempel des Audios in Mikrosekunden repräsentiert.
- {{domxref("EncodedAudioChunk.duration")}} {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Dauer des Audios in Mikrosekunden repräsentiert.
- {{domxref("EncodedAudioChunk.byteLength")}} {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Länge des Audios in Bytes repräsentiert.

## Instanz-Methoden

- {{domxref("EncodedAudioChunk.copyTo()")}}
  - : Kopiert die kodierten Audiodaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: AudioData
slug: Web/API/AudioData
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioData`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert ein Audio-Sample.

`AudioData` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`AudioData()`](/de/docs/Web/API/AudioData/AudioData)
  - : Erstellt ein neues `AudioData`-Objekt.

## Instanzeigenschaften

- [`AudioData.format`](/de/docs/Web/API/AudioData/format) {{ReadOnlyInline}}
  - : Gibt das Sample-Format der Audiodaten zurück.
- [`AudioData.sampleRate`](/de/docs/Web/API/AudioData/sampleRate) {{ReadOnlyInline}}
  - : Gibt die Abtastrate der Audiodaten in Hz zurück.
- [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames zurück.
- [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Audiokanäle zurück.
- [`AudioData.duration`](/de/docs/Web/API/AudioData/duration) {{ReadOnlyInline}}
  - : Gibt die Dauer der Audiodaten in Mikrosekunden zurück.
- [`AudioData.timestamp`](/de/docs/Web/API/AudioData/timestamp) {{ReadOnlyInline}}
  - : Gibt den Zeitstempel der Audiodaten in Mikrosekunden zurück.

## Instanzmethoden

- [`AudioData.allocationSize()`](/de/docs/Web/API/AudioData/allocationSize)
  - : Gibt die Anzahl der Bytes zurück, die zum Speichern des Samples unter Berücksichtigung der an die Methode übergebenen Optionen erforderlich sind.
- [`AudioData.copyTo()`](/de/docs/Web/API/AudioData/copyTo)
  - : Kopiert die Samples aus der angegebenen Ebene des `AudioData`-Objekts in das Ziel.
- [`AudioData.clone()`](/de/docs/Web/API/AudioData/clone)
  - : Erstellt ein neues `AudioData`-Objekt, das auf dieselbe Medienressource wie das Original verweist.
- [`AudioData.close()`](/de/docs/Web/API/AudioData/close)
  - : Löscht sämtliche Zustände und gibt die Referenz auf die Medienressource frei.

## Beschreibung

Eine Audiospur besteht aus einem Strom von Audio-Samples, von denen jedes einen aufgenommenen Moment des Schalls repräsentiert. Ein `AudioData`-Objekt stellt ein solches Sample dar. In Verbindung mit den Schnittstellen der [Insertable Streams API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) können Sie einen Strom mithilfe von [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) in einzelne `AudioData`-Objekte zerlegen oder mithilfe von [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) aus einem Strom von Frames eine Audiospur erstellen.

> [!NOTE]
> Weitere Informationen zu Audio im Web finden Sie unter [Grundlagen digitaler Audiodaten](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

### Die Medienressource

Ein `AudioData`-Objekt enthält eine Referenz auf eine zugehörige **Medienressource**. Diese Medienressource enthält die eigentlichen Audio-Sample-Daten, die das Objekt beschreibt. Der User-Agent verwaltet eine Medienressource, solange ein `AudioData`-Objekt auf sie verweist, beispielsweise bis [`AudioData.close()`](/de/docs/Web/API/AudioData/close) aufgerufen wird.

### Ebenen und Audioformat

Um das Sample-Format eines `AudioData`-Objekts abzurufen, verwenden Sie die Eigenschaft [`AudioData.format`](/de/docs/Web/API/AudioData/format). Das Format kann als **interleaved** (verschachtelt) oder **planar** (ebenenbasiert) beschrieben werden. Bei interleaved-Formaten liegen die Audio-Samples der verschiedenen Kanäle in einem einzigen Puffer, der als **Ebene** bezeichnet wird. Diese Ebene enthält eine Anzahl von Elementen, die [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) \* [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels) entspricht.

Beim planaren Format entspricht die Anzahl der Ebenen [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels). Jede Ebene ist ein Puffer, dessen Elementanzahl [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

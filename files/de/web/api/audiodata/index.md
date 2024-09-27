---
title: AudioData
slug: Web/API/AudioData
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioData`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine Audioaufnahme.

`AudioData` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Ein Audiotrack besteht aus einem Strom von Audiodaten, wobei jede Probe einen aufgenommenen Moment des Klangs darstellt. Ein `AudioData`-Objekt ist eine Darstellung einer solchen Probe. In Zusammenarbeit mit den Schnittstellen der [Insertable Streams API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) können Sie einen Strom in einzelne `AudioData`-Objekte zerlegen, z.B. mit [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor), oder einen Audiotrack aus einem Strom von Frames mit [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) konstruieren.

> [!NOTE]
> Erfahren Sie mehr über Audio im Web in [Digital audio concepts](/de/docs/Web/Media/Formats/Audio_concepts).

### Die Medienressource

Ein `AudioData`-Objekt enthält einen Verweis auf eine angehängte **Medienressource**. Diese Medienressource enthält die tatsächlichen Audiodaten, die durch das Objekt beschrieben werden. Eine Medienressource wird vom Benutzeragenten beibehalten, bis sie nicht mehr von einem `AudioData`-Objekt referenziert wird, beispielsweise wenn [`AudioData.close()`](/de/docs/Web/API/AudioData/close) aufgerufen wird.

### Planes und Audioformat

Um das Probenformat eines `AudioData` zu erhalten, verwenden Sie die Eigenschaft [`AudioData.format`](/de/docs/Web/API/AudioData/format). Das Format kann als **interleaved** oder **planar** beschrieben werden. In interleaved Formaten sind die Audiodaten der verschiedenen Kanäle in einem einzigen Puffer angeordnet, der als **Plane** bezeichnet wird. Diese Plane enthält eine Anzahl von Elementen entsprechend [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) \* [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels).

Im planar Format entspricht die Anzahl der Planes [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels), und jede Plane ist ein Puffer, der eine Anzahl von Elementen entsprechend [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) enthält.

## Konstruktor

- [`AudioData()`](/de/docs/Web/API/AudioData/AudioData)
  - : Erstellt ein neues `AudioData`-Objekt.

## Instanzeigenschaften

- [`AudioData.format`](/de/docs/Web/API/AudioData/format) {{ReadOnlyInline}}
  - : Gibt das Probenformat des Audios zurück.
- [`AudioData.sampleRate`](/de/docs/Web/API/AudioData/sampleRate) {{ReadOnlyInline}}
  - : Gibt die Abtastrate des Audios in Hz zurück.
- [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames zurück.
- [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Audiokanäle zurück.
- [`AudioData.duration`](/de/docs/Web/API/AudioData/duration) {{ReadOnlyInline}}
  - : Gibt die Dauer des Audios in Mikrosekunden zurück.
- [`AudioData.timestamp`](/de/docs/Web/API/AudioData/timestamp) {{ReadOnlyInline}}
  - : Gibt den Zeitstempel des Audios in Mikrosekunden zurück.

## Instanzmethoden

- [`AudioData.allocationSize()`](/de/docs/Web/API/AudioData/allocationSize)
  - : Gibt die Anzahl der Bytes zurück, die erforderlich sind, um die Probe entsprechend den in die Methode übergebenen Optionen zu halten.
- [`AudioData.copyTo()`](/de/docs/Web/API/AudioData/copyTo)
  - : Kopiert die Proben von der angegebenen Plane des `AudioData`-Objekts zum Ziel.
- [`AudioData.clone()`](/de/docs/Web/API/AudioData/clone)
  - : Erstellt ein neues `AudioData`-Objekt mit einer Referenz auf dieselbe Medienressource wie das Original.
- [`AudioData.close()`](/de/docs/Web/API/AudioData/close)
  - : Löscht alle Zustände und gibt die Referenz auf die Medienressource frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

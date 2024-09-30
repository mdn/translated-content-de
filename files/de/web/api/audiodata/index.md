---
title: AudioData
slug: Web/API/AudioData
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioData`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine Audio-Abtastung.

`AudioData` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Eine Audiospur besteht aus einem Strom von Audio-Abtastungen, wobei jede Abtastung einen erfassten Moment eines Tons darstellt. Ein `AudioData`-Objekt ist eine Darstellung einer solchen Abtastung. In Verbindung mit den Schnittstellen der [Insertable Streams API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) können Sie einen Strom in einzelne `AudioData`-Objekte mit [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) aufteilen oder eine Audiospur aus einem Strom von Frames mit [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) konstruieren.

> [!NOTE]
> Erfahren Sie mehr über Audio im Web in [Digitale Audiokonzepten](/de/docs/Web/Media/Formats/Audio_concepts).

### Die Medienressource

Ein `AudioData`-Objekt enthält einen Verweis auf eine angehängte **Medienressource**. Diese Medienressource enthält die tatsächlichen Audio-Abtastungsdaten, die durch das Objekt beschrieben werden. Eine Medienressource wird vom Benutzeragenten verwaltet, bis sie nicht mehr von einem `AudioData`-Objekt referenziert wird, zum Beispiel, wenn [`AudioData.close()`](/de/docs/Web/API/AudioData/close) aufgerufen wird.

### Planes und Audioformat

Um das Abtastungsformat eines `AudioData` zurückzugeben, verwenden Sie die Eigenschaft [`AudioData.format`](/de/docs/Web/API/AudioData/format). Das Format kann als **interleaved** oder **planar** beschrieben werden. In interleaved Formaten werden die Audio-Abtastungen der verschiedenen Kanäle in einem einzigen Puffer angeordnet, der als **plane** beschrieben wird. Diese plane enthält eine Anzahl von Elementen, die gleich [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) \* [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels) ist.

Im planen Format ist die Anzahl der Planes gleich [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels), und jede Plane ist ein Puffer mit einer Anzahl von Elementen, die gleich [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) ist.

## Konstruktor

- [`AudioData()`](/de/docs/Web/API/AudioData/AudioData)
  - : Erstellt ein neues `AudioData`-Objekt.

## Instanz-Eigenschaften

- [`AudioData.format`](/de/docs/Web/API/AudioData/format) {{ReadOnlyInline}}
  - : Gibt das Abtastungsformat des Audios zurück.
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

## Instanz-Methoden

- [`AudioData.allocationSize()`](/de/docs/Web/API/AudioData/allocationSize)
  - : Gibt die Anzahl von Bytes zurück, die zur Aufnahme der Abtastung benötigt werden, gefiltert durch die in die Methode übergebenen Optionen.
- [`AudioData.copyTo()`](/de/docs/Web/API/AudioData/copyTo)
  - : Kopiert die Abtastungen aus der angegebenen Plane des `AudioData`-Objekts zum Ziel.
- [`AudioData.clone()`](/de/docs/Web/API/AudioData/clone)
  - : Erstellt ein neues `AudioData`-Objekt mit Verweis auf dieselbe Medienressource wie das Original.
- [`AudioData.close()`](/de/docs/Web/API/AudioData/close)
  - : Löscht alle Zustände und gibt den Verweis auf die Medienressource frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

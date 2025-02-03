---
title: AudioData
slug: Web/API/AudioData
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioData`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine Audio-Probe.

`AudioData` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Eine Audiospur besteht aus einem Strom von Audio-Proben, wobei jede Probe einen aufgenommenen Moment des Tons darstellt. Ein `AudioData`-Objekt ist eine Darstellung einer solchen Probe. In Verbindung mit den Schnittstellen der [Insertable Streams API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) können Sie einen Strom in einzelne `AudioData`-Objekte zerlegen, z. B. mit dem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor), oder eine Audiospur aus einem Strom von Frames mit dem [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) erstellen.

> [!NOTE]
> Erfahren Sie mehr über Audio im Web in [Digital Audio Concepts](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

### Die Medienressource

Ein `AudioData`-Objekt enthält eine Referenz zu einer angehängten **Medienressource**. Diese Medienressource enthält die tatsächlich von dem Objekt beschriebenen Audiodaten. Eine Medienressource wird vom Benutzeragenten verwaltet, bis sie nicht mehr von einem `AudioData`-Objekt referenziert wird, zum Beispiel, wenn [`AudioData.close()`](/de/docs/Web/API/AudioData/close) aufgerufen wird.

### Ebenen und Audioformat

Um das Format der Probe eines `AudioData` zurückzugeben, verwenden Sie die Eigenschaft [`AudioData.format`](/de/docs/Web/API/AudioData/format). Das Format kann als **interleaved** oder **planar** beschrieben werden. In interleaved Formaten sind die Audiosamples der verschiedenen Kanäle in einem einzigen Puffer angeordnet, der als **Ebene** beschrieben wird. Diese Ebene enthält eine Anzahl von Elementen, die gleich der Anzahl von [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) \* [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels) ist.

Im planaren Format ist die Anzahl der Ebenen gleich der Anzahl von [`AudioData.numberOfChannels`](/de/docs/Web/API/AudioData/numberOfChannels), und jede Ebene ist ein Puffer, der eine Anzahl von Elementen enthält, die gleich der Anzahl von [`AudioData.numberOfFrames`](/de/docs/Web/API/AudioData/numberOfFrames) ist.

## Konstruktor

- [`AudioData()`](/de/docs/Web/API/AudioData/AudioData)
  - : Erstellt ein neues `AudioData`-Objekt.

## Instanz-Eigenschaften

- [`AudioData.format`](/de/docs/Web/API/AudioData/format) {{ReadOnlyInline}}
  - : Gibt das Format der Audio-Probe zurück.
- [`AudioData.sampleRate`](/de/docs/Web/API/AudioData/sampleRate) {{ReadOnlyInline}}
  - : Gibt die Samplerate des Audios in Hz zurück.
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
  - : Gibt die Anzahl der Bytes zurück, die benötigt werden, um die Probe entsprechend den in die Methode übergebenen Optionen zu halten.
- [`AudioData.copyTo()`](/de/docs/Web/API/AudioData/copyTo)
  - : Kopiert die Samples von der angegebenen Ebene des `AudioData`-Objekts zum Ziel.
- [`AudioData.clone()`](/de/docs/Web/API/AudioData/clone)
  - : Erstellt ein neues `AudioData`-Objekt mit Verweis auf dieselbe Medienressource wie das Original.
- [`AudioData.close()`](/de/docs/Web/API/AudioData/close)
  - : Löscht alle Zustände und gibt die Referenz zur Medienressource frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

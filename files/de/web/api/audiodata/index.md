---
title: AudioData
slug: Web/API/AudioData
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`AudioData`**-Schnittstelle der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert eine Audioaufnahme.

`AudioData` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Ein Audiotrack besteht aus einem Strom von Audiodaten, wobei jede Probe einen aufgenommenen Moment des Klangs darstellt. Ein `AudioData`-Objekt ist eine Darstellung einer solchen Aufnahme. In Zusammenarbeit mit den Schnittstellen der [Insertable Streams API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) können Sie einen Stream in einzelne `AudioData`-Objekte zerlegen mit dem {{domxref("MediaStreamTrackProcessor")}}, oder einen Audiotrack aus einem Strom von Frames mit dem {{domxref("MediaStreamTrackGenerator")}} konstruieren.

> [!NOTE]
> Erfahren Sie mehr über Audio im Web in [Digitale Audiokonzepte](/de/docs/Web/Media/Formats/Audio_concepts).

### Die Medienquelle

Ein `AudioData`-Objekt enthält eine Referenz zu einer angehängten **Medienquelle**. Diese Medienquelle enthält die eigentlichen Audiodaten, die durch das Objekt beschrieben werden. Eine Medienquelle wird vom User-Agent verwaltet, bis sie nicht mehr von einem `AudioData`-Objekt referenziert wird, beispielsweise wenn {{domxref("AudioData.close()")}} aufgerufen wird.

### Ebenen und Audioformat

Um das Aufnahmeformat eines `AudioData` zurückzugeben, verwenden Sie die Eigenschaft {{domxref("AudioData.format")}}. Das Format kann als **interleaved** oder **planar** beschrieben werden. Bei interleaved Formaten werden die Audiodaten der verschiedenen Kanäle in einem einzelnen Puffer abgelegt, der als **Ebene** beschrieben wird. Diese Ebene enthält eine Anzahl von Elementen, die gleich {{domxref("AudioData.numberOfFrames")}} \* {{domxref("AudioData.numberOfChannels")}} ist.

Im planar Format ist die Anzahl der Ebenen gleich {{domxref("AudioData.numberOfChannels")}}, und jede Ebene ist ein Puffer, der eine Anzahl von Elementen enthält, die gleich {{domxref("AudioData.numberOfFrames")}} ist.

## Konstruktor

- {{domxref("AudioData.AudioData", "AudioData()")}}
  - : Erstellt ein neues `AudioData`-Objekt.

## Instanzeigenschaften

- {{domxref("AudioData.format")}} {{ReadOnlyInline}}
  - : Gibt das Aufnahmeformat des Audio zurück.
- {{domxref("AudioData.sampleRate")}} {{ReadOnlyInline}}
  - : Gibt die Abtastrate des Audio in Hz zurück.
- {{domxref("AudioData.numberOfFrames")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Frames zurück.
- {{domxref("AudioData.numberOfChannels")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Tonkanäle zurück.
- {{domxref("AudioData.duration")}} {{ReadOnlyInline}}
  - : Gibt die Dauer des Audio in Mikrosekunden zurück.
- {{domxref("AudioData.timestamp")}} {{ReadOnlyInline}}
  - : Gibt den Zeitstempel des Audio in Mikrosekunden zurück.

## Instanzmethoden

- {{domxref("AudioData.allocationSize()")}}
  - : Gibt die Anzahl der Bytes zurück, die erforderlich sind, um die Probe wie durch Optionen, die in die Methode übergeben wurden, gefiltert zu speichern.
- {{domxref("AudioData.copyTo()")}}
  - : Kopiert die Aufnahmen von der angegebenen Ebene des `AudioData`-Objekts zu dem Ziel.
- {{domxref("AudioData.clone()")}}
  - : Erstellt ein neues `AudioData`-Objekt mit Referenz zur selben Medienquelle wie das Original.
- {{domxref("AudioData.close()")}}
  - : Löscht alle Zustände und gibt die Referenz zur Medienquelle frei.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

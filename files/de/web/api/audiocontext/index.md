---
title: AudioContext
slug: Web/API/AudioContext
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}

Das `AudioContext`-Interface repräsentiert einen Audioverarbeitungsgrafen, der aus miteinander verknüpften Audiomodulen besteht, die jeweils durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt werden.

Ein Audiokontext steuert sowohl die Erstellung der darin enthaltenen Nodes als auch die Durchführung der Audiobearbeitung oder -decodierung. Sie müssen ein `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontexts geschieht. Es wird empfohlen, ein einziges AudioContext zu erstellen und wiederzuverwenden, anstatt jedes Mal ein neues zu initialisieren. Es ist in Ordnung, ein einziges `AudioContext` für mehrere verschiedene Audioquellen und Pipelines gleichzeitig zu verwenden.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)
  - : Erstellt und gibt ein neues `AudioContext`-Objekt zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Sekunden an Verarbeitungsverzögerung zurück, die durch das `AudioContext` beim Übertragen des Audios vom [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zum Audiosubsystem entsteht.
- [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) {{ReadOnlyInline}}
  - : Gibt eine Schätzung der Ausgabeverzögerung des aktuellen Audiokontexts zurück.
- [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekt zurück, das Zugriff auf Dauer-, Unterlauf- und Latenzstatistiken für das `AudioContext` bietet.
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt die Sink-ID des aktuellen Audio-Ausgabegeräts zurück.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)
  - : Schließt den Audiokontext und gibt alle Systemaudioressourcen frei, die er verwendet.
- [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)
  - : Erstellt einen [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), der mit einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) assoziiert ist. Dies kann verwendet werden, um Audio von {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abzuspielen und zu manipulieren.
- [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource)
  - : Erstellt einen [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) assoziiert ist, der einen Audiostream darstellt, der möglicherweise von einem Mikrofon des lokalen Computers oder anderen Quellen stammt.
- [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination)
  - : Erstellt einen [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) assoziiert ist, der möglicherweise in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet wird.
- [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource)
  - : Erstellt einen [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) assoziiert ist, der einen Mediastream-Track darstellt.
- [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp)
  - : Gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audio-Zeitstempelwerte im Zusammenhang mit dem aktuellen Audiokontext enthält.
- [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume)
  - : Setzt den Zeitverlauf in einem Audiokontext fort, der zuvor ausgesetzt/pausiert wurde.
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Setzt das Ausgabegerät für das `AudioContext`.
- [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)
  - : Setzt den Zeitverlauf im Audiokontext aus, was den Zugriff auf die Audio-Hardware vorübergehend stoppt und die CPU-/Akkunutzung verringert.

## Ereignisse

- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich das Ausgabegerät des Audios (und damit die [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) geändert hat.

## Beispiele

Grundlegende Deklaration eines Audiokontexts:

```js
const audioCtx = new AudioContext();

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
const finish = audioCtx.destination;
// etc.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)

---
title: AudioContext
slug: Web/API/AudioContext
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Das `AudioContext`-Interface repräsentiert einen Audiotverarbeitungsgraphen, der aus miteinander verbundenen Audiomodulen besteht, die jeweils durch ein [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt werden.

Ein Audio-Kontext steuert sowohl die Erstellung der darin enthaltenen Knoten als auch die Ausführung der Audioverarbeitung oder -dekodierung. Sie müssen ein `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontextes geschieht. Es wird empfohlen, ein AudioContext zu erstellen und es wiederzuverwenden, anstatt jedes Mal ein neues zu initialisieren. Es ist in Ordnung, ein einziges `AudioContext` für verschiedene Audioquellen und Pipelines gleichzeitig zu verwenden.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)
  - : Erstellt und gibt ein neues `AudioContext`-Objekt zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Sekunden der Verarbeitungsverzögerung zurück, die dem `AudioContext` entsteht, wenn es den Ton vom [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zum Audiosubsystem leitet.
- [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) {{ReadOnlyInline}}
  - : Gibt eine Schätzung der Ausgabeverzögerung des aktuellen Audiokontextes zurück.
- [`AudioContext.playbackStats`](/de/docs/Web/API/AudioContext/playbackStats) {{ReadOnlyInline}}
  - : Gibt ein [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekt zurück, das Zugang zu Statistiken über Dauer, Unterbrechung und Latenz des `AudioContext` bietet.
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt die Sink-ID des aktuellen Ausgabegeräts zurück.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)
  - : Schließt den Audio-Kontext und gibt alle genutzten System-Audioressourcen frei.
- [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)
  - : Erstellt eine [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), die mit einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) assoziiert ist. Dies kann verwendet werden, um Audio von {{HTMLElement("video")}} oder {{HTMLElement("audio")}}-Elementen abzuspielen und zu manipulieren.
- [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource)
  - : Erstellt eine [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode), die mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) assoziiert ist, das einen Audiostream repräsentiert, der von einem Mikrofon des lokalen Computers oder anderen Quellen stammen kann.
- [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination)
  - : Erstellt eine [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode), die mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) assoziiert ist, das einen Audiostream repräsentiert, der in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet werden kann.
- [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource)
  - : Erstellt eine [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode), die mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) assoziiert ist, das eine Mediastream-Spur repräsentiert.
- [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp)
  - : Gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audio-Zeitstempelwerte in Bezug auf den aktuellen Audiokontext enthält.
- [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume)
  - : Setzt die Fortschreitung der Zeit in einem Audiokontext fort, der zuvor angehalten oder pausiert wurde.
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Legt das Ausgabegerät für den `AudioContext` fest.
- [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)
  - : Hält die Fortschreitung der Zeit im Audiokontext an, stoppt vorübergehend den Zugang zu Audio-Hardware und reduziert dabei den CPU-/Batterieverbrauch.

## Ereignisse

- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn das Ausgabe-Audiogerät (und somit die [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) geändert wurde.

## Beispiele

Grundlegende Deklaration eines Audiokontextes:

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

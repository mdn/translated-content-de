---
title: AudioContext
slug: Web/API/AudioContext
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Audio API")}}

Das `AudioContext`-Interface repräsentiert einen Audiobearbeitungsgraphen, der aus miteinander verbundenen Audiomodulen besteht, von denen jedes durch ein [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt wird.

Ein AudioContext steuert sowohl die Erstellung der darin enthaltenen Knoten als auch die Ausführung der Audiobearbeitung oder -decodierung. Sie müssen ein `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontextes stattfindet. Es wird empfohlen, ein einzelnes `AudioContext` zu erstellen und es wiederzuverwenden, anstatt jedes Mal ein neues zu initialisieren. Es ist in Ordnung, ein einziges `AudioContext` für mehrere verschiedene Audioquellen und Pipelines gleichzeitig zu verwenden.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)
  - : Erstellt und gibt ein neues `AudioContext`-Objekt zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Sekunden der Verarbeitungslatenz an, die das `AudioContext` benötigt, um das Audio vom [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) an das Audiosubsystem weiterzugeben.
- [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) {{ReadOnlyInline}}
  - : Gibt eine Schätzung der Ausgabelatenz des aktuellen Audiokontextes zurück.
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt die Sink-ID des aktuellen Ausgabegerätes zurück.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)
  - : Schließt den Audiokontext und gibt dabei alle verwendeten Systemaudioressourcen frei.
- [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)
  - : Erstellt eine [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), die mit einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) verbunden ist. Dies kann verwendet werden, um Audio von {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Elementen abzuspielen und zu manipulieren.
- [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource)
  - : Erstellt eine [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode), die mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, das einen Audiostream repräsentiert, der möglicherweise von einem lokalen Computermikrofon oder anderen Quellen stammt.
- [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination)
  - : Erstellt eine [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode), die mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, das einen Audiostream repräsentiert, der möglicherweise in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet wird.
- [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource)
  - : Erstellt eine [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode), die mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, das einen Medienstrom-Track repräsentiert.
- [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp)
  - : Gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audiotimestamp-Werte in Bezug auf den aktuellen Audiokontext enthält.
- [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume)
  - : Setzt den Zeitverlauf in einem Audiokontext fort, der zuvor ausgesetzt/pausiert wurde.
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Setzt das Ausgabeaudiogerät für das `AudioContext`.
- [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)
  - : Setzt den Zeitverlauf im Audiokontext aus und stoppt vorübergehend den Zugriff auf die Audiohardware, wodurch der CPU- und Batterieverbrauch reduziert wird.

## Ereignisse

- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich das Ausgabegerät (und damit die [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) geändert hat.

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

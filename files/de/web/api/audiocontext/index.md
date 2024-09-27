---
title: AudioContext
slug: Web/API/AudioContext
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Audio API")}}

Die `AudioContext`-Schnittstelle repräsentiert ein Audioverarbeitungsnetzwerk, das aus miteinander verbundenen Audiomodulen besteht, wobei jedes durch ein [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt wird.

Ein Audio-Kontext steuert sowohl die Erstellung der enthaltenen Knoten als auch die Ausführung der Audioverarbeitung oder Dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontexts stattfindet. Es wird empfohlen, einen AudioContext zu erstellen und wiederzuverwenden, anstatt jedes Mal einen neuen zu initialisieren. Es ist in Ordnung, einen einzelnen `AudioContext` für mehrere verschiedene Audioquellen und -pipelines gleichzeitig zu verwenden.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)
  - : Erstellt und gibt ein neues `AudioContext`-Objekt zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Sekunden der Verarbeitungsverzögerung zurück, die der `AudioContext` verursacht, wenn er das Audio vom [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) an das Audiosubsystem weiterleitet.
- [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) {{ReadOnlyInline}}
  - : Gibt eine Schätzung der Ausgabeverzögerung des aktuellen Audiokontexts zurück.
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt die Sink-ID des aktuellen Ausgabegeräts zurück.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)
  - : Schließt den Audiokontext und gibt alle Systemaudio-Ressourcen frei, die er verwendet.
- [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)
  - : Erstellt einen [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), der mit einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) verbunden ist. Dies kann verwendet werden, um Audio von {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abzuspielen und zu manipulieren.
- [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource)
  - : Erstellt einen [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, das einen Audiostream darstellt, der möglicherweise vom Mikrofon des lokalen Computers oder anderen Quellen stammt.
- [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination)
  - : Erstellt einen [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, das einen Audiostream darstellt, der möglicherweise in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet wird.
- [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource)
  - : Erstellt einen [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, das einen Medienstromtrack darstellt.
- [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp)
  - : Gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audiotimestamp-Werte in Bezug auf den aktuellen Audiokontext enthält.
- [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume)
  - : Nimmt den Fortschritt der Zeit in einem zuvor angehaltenen/pausierten Audiokontext wieder auf.
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Legt das Ausgabegerät für den `AudioContext` fest.
- [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)
  - : Hält den Fortschritt der Zeit im Audiokontext an, stoppt vorübergehend den Zugriff auf die Audio-Hardware und reduziert dabei die CPU-/Akkunutzung.

## Ereignisse

- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich das Ausgabegerät (und daher die [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) geändert hat.

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

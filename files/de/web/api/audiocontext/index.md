---
title: AudioContext
slug: Web/API/AudioContext
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Audio API")}}

Das `AudioContext`-Interface repräsentiert einen Audioverarbeitungsgraphen, der aus miteinander verbundenen Audiomodulen besteht, von denen jedes durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt wird.

Ein Audio-Kontext steuert sowohl die Erstellung der enthaltenen Knoten als auch die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen ein `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontexts abläuft. Es wird empfohlen, ein AudioContext zu erstellen und es wiederzuverwenden, anstatt jedes Mal ein neues zu initialisieren. Es ist in Ordnung, ein einziges `AudioContext` für mehrere verschiedene Audioquellen und Pipelines gleichzeitig zu verwenden.

{{InheritanceDiagram}}

## Konstruktor

- [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)
  - : Erstellt und gibt ein neues `AudioContext`-Objekt zurück.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.baseLatency`](/de/docs/Web/API/AudioContext/baseLatency) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Sekunden an Verarbeitungsverzögerung zurück, die das `AudioContext` verursacht, wenn es das Audio vom [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zum Audiosubsystem übermittelt.
- [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency) {{ReadOnlyInline}}
  - : Gibt eine Schätzung der Ausgangsverzögerung des aktuellen Audiokontexts zurück.
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt die Sink-ID des aktuellen Ausgangsaudiogeräts zurück.

## Instanzmethoden

_Erbt auch Methoden von seinem Eltern-Interface, [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`AudioContext.close()`](/de/docs/Web/API/AudioContext/close)
  - : Schließt den Audio-Kontext und gibt alle Audiosystem-Ressourcen frei, die es verwendet.
- [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource)
  - : Erstellt einen [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), der mit einem [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) verbunden ist. Dies kann verwendet werden, um Audio von {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abzuspielen und zu manipulieren.
- [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource)
  - : Erstellt einen [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, der einen Audiostream darstellt, der möglicherweise vom Mikrofon des lokalen Computers oder von anderen Quellen stammt.
- [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination)
  - : Erstellt einen [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, der einen Audiostream darstellt, der möglicherweise in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet wird.
- [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource)
  - : Erstellt einen [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode), der mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden ist, der eine Mediastream-Spur repräsentiert.
- [`AudioContext.getOutputTimestamp()`](/de/docs/Web/API/AudioContext/getOutputTimestamp)
  - : Gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audiotimestamp-Werte enthält, die sich auf den aktuellen Audio-Kontext beziehen.
- [`AudioContext.resume()`](/de/docs/Web/API/AudioContext/resume)
  - : Setzt den Fortschritt der Zeit in einem Audio-Kontext fort, der zuvor angehalten/pausiert wurde.
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Legt das Ausgangsaudiogerät für das `AudioContext` fest.
- [`AudioContext.suspend()`](/de/docs/Web/API/AudioContext/suspend)
  - : Unterbricht den Fortschritt der Zeit im Audio-Kontext und stoppt vorübergehend den Zugriff auf die Audiohardware, wodurch die CPU/Batteriebelastung reduziert wird.

## Ereignisse

- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich das Ausgangsaudiogerät (und damit die [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) geändert hat.

## Beispiele

Grundlegende Audio-Kontext-Deklaration:

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

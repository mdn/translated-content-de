---
title: AudioContext
slug: Web/API/AudioContext
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Audio API")}}

Das `AudioContext`-Interface repräsentiert einen Audiobearbeitungsgraphen, der aus miteinander verbundenen Audiomodulen besteht, von denen jedes durch einen {{domxref("AudioNode")}} dargestellt wird.

Ein Audio-Kontext steuert sowohl die Erstellung der enthaltenen Knoten als auch die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen ein `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontexts stattfindet. Es wird empfohlen, ein AudioContext zu erstellen und es wiederzuverwenden, anstatt bei jedem Mal ein neues zu initialisieren. Es ist in Ordnung, einen einzelnen `AudioContext` für verschiedene Audioquellen und Pipelines gleichzeitig zu verwenden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("AudioContext.AudioContext", "AudioContext()")}}
  - : Erstellt und gibt ein neues `AudioContext`-Objekt zurück.

## Instanz-Eigenschaften

_Übernimmt auch Eigenschaften von seiner Elternschnittstelle, {{domxref("BaseAudioContext")}}._

- {{domxref("AudioContext.baseLatency")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Sekunden der Bearbeitungslatenz zurück, die durch das `AudioContext` entsteht, wenn das Audio vom {{domxref("AudioDestinationNode")}} an das Audiosubsystem weitergegeben wird.
- {{domxref("AudioContext.outputLatency")}} {{ReadOnlyInline}}
  - : Gibt eine Schätzung der Ausgangslatenz des aktuellen Audio-Kontexts zurück.
- {{domxref("AudioContext.sinkId")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Gibt die Sink-ID des aktuellen Ausgangs-Audiogeräts zurück.

## Instanz-Methoden

_Übernimmt auch Methoden von seiner Elternschnittstelle, {{domxref("BaseAudioContext")}}._

- {{domxref("AudioContext.close()")}}
  - : Schließt den Audio-Kontext und gibt die System-Audioressourcen frei, die er verwendet.
- {{domxref("AudioContext.createMediaElementSource()")}}
  - : Erstellt einen {{domxref("MediaElementAudioSourceNode")}}, der mit einem {{domxref("HTMLMediaElement")}} verbunden ist. Dies kann verwendet werden, um Audio von {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abzuspielen und zu manipulieren.
- {{domxref("AudioContext.createMediaStreamSource()")}}
  - : Erstellt einen {{domxref("MediaStreamAudioSourceNode")}}, der mit einem {{domxref("MediaStream")}} verbunden ist, das einen Audiostream darstellt, der möglicherweise vom Mikrofon des lokalen Computers oder anderen Quellen stammt.
- {{domxref("AudioContext.createMediaStreamDestination()")}}
  - : Erstellt einen {{domxref("MediaStreamAudioDestinationNode")}}, der mit einem {{domxref("MediaStream")}} verbunden ist, das einen Audiostream darstellt, der möglicherweise in einer lokalen Datei gespeichert oder an einen anderen Computer gesendet wird.
- {{domxref("AudioContext.createMediaStreamTrackSource()")}}
  - : Erstellt einen {{domxref("MediaStreamTrackAudioSourceNode")}}, der mit einem {{domxref("MediaStream")}} verbunden ist, das einen Mediastream-Track darstellt.
- {{domxref("AudioContext.getOutputTimestamp()")}}
  - : Gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audiotimestamp-Werte in Bezug auf den aktuellen Audio-Kontext enthält.
- {{domxref("AudioContext.resume()")}}
  - : Nimmt den Fortgang der Zeit in einem zuvor angehaltenen/pausierten Audio-Kontext wieder auf.
- {{domxref("AudioContext.setSinkId()")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Legt das Ausgabegerät für das `AudioContext` fest.
- {{domxref("AudioContext.suspend()")}}
  - : Hält den Fortgang der Zeit im Audio-Kontext an, wodurch der Zugriff auf die Audio-Hardware vorübergehend gestoppt und die CPU/Batterieverbrauch dabei reduziert wird.

## Ereignisse

- {{domxref("AudioContext/sinkchange_event", "sinkchange")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn das Ausgabegerät (und daher die {{domxref("AudioContext.sinkId")}}) geändert wurde.

## Beispiele

Einfache Deklaration eines Audiokontexts:

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
- {{domxref("OfflineAudioContext")}}

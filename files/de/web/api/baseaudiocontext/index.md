---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Die `BaseAudioContext`-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) dient als grundlegende Definition für Online- und Offline-Audiobearbeitungsgraphen, wie sie durch {{domxref("AudioContext")}} und {{domxref("OfflineAudioContext")}} dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden – Sie würden seine Funktionen über eine dieser beiden erbenden Schnittstellen nutzen.

Ein `BaseAudioContext` kann Ziel von Ereignissen sein, daher implementiert es die {{domxref("EventTarget")}}-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("BaseAudioContext.audioWorklet")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt das {{domxref("AudioWorklet")}}-Objekt zurück, das verwendet werden kann, um {{domxref("AudioNode")}}s zu erstellen und zu verwalten, in denen JavaScript-Code, der die {{domxref("AudioWorkletProcessor")}}-Schnittstelle implementiert, im Hintergrund ausgeführt wird, um Audiodaten zu verarbeiten.
- {{domxref("BaseAudioContext.currentTime")}} {{ReadOnlyInline}}
  - : Gibt einen Double-Wert zurück, der die sich ständig erhöhende Hardware-Zeit in Sekunden darstellt, die für die Planung verwendet wird. Sie beginnt bei `0`.
- {{domxref("BaseAudioContext.destination")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("AudioDestinationNode")}} zurück, der das endgültige Ziel aller Audios im Kontext darstellt. Es kann als das Audio-Wiedergabegerät angesehen werden.
- {{domxref("BaseAudioContext.listener")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("AudioListener")}}-Objekt zurück, das für die 3D-Raummodellierung verwendet wird.
- {{domxref("BaseAudioContext.sampleRate")}} {{ReadOnlyInline}}
  - : Gibt einen Float-Wert zurück, der die Abtastrate (in Samples pro Sekunde) darstellt, die von allen Knoten in diesem Kontext verwendet wird. Die Abtastrate eines {{domxref("AudioContext")}} kann nicht geändert werden.
- {{domxref("BaseAudioContext.state")}} {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des `AudioContext` zurück.

## Instanz-Methoden

_Implementiert auch Methoden aus der Schnittstelle_ {{domxref("EventTarget")}}.

- {{domxref("BaseAudioContext.createAnalyser()")}}
  - : Erstellt einen {{domxref("AnalyserNode")}}, der verwendet werden kann, um Audiozeit- und Frequenzdaten offenzulegen und beispielsweise Datenvisualisierungen zu erstellen.
- {{domxref("BaseAudioContext.createBiquadFilter()")}}
  - : Erstellt einen {{domxref("BiquadFilterNode")}}, der einen Filter zweiter Ordnung darstellt, der als verschiedene gängige Filtertypen konfiguriert werden kann: Hochpass, Tiefpass, Bandpass usw.
- {{domxref("BaseAudioContext.createBuffer()")}}
  - : Erstellt ein neues, leeres {{domxref("AudioBuffer")}}-Objekt, das dann mit Daten gefüllt und über einen {{domxref("AudioBufferSourceNode")}} abgespielt werden kann.
- {{domxref("BaseAudioContext.createBufferSource()")}}
  - : Erstellt einen {{domxref("AudioBufferSourceNode")}}, der verwendet werden kann, um Audiodaten zu spielen und zu manipulieren, die in einem {{domxref("AudioBuffer")}}-Objekt enthalten sind. {{domxref("AudioBuffer")}}s werden mittels {{domxref("BaseAudioContext/createBuffer", "AudioContext.createBuffer()")}} erstellt oder durch {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} zurückgegeben, wenn es erfolgreich einen Audiotrack dekodiert.
- {{domxref("BaseAudioContext.createConstantSource()")}}
  - : Erstellt ein {{domxref("ConstantSourceNode")}}-Objekt, das eine Audioquelle ist, die kontinuierlich ein einkanaliges Audiosignal ausgibt, dessen Samples alle den gleichen Wert haben.
- {{domxref("BaseAudioContext.createChannelMerger()")}}
  - : Erstellt einen {{domxref("ChannelMergerNode")}}, der verwendet wird, um Kanäle aus mehreren Audioströmen in einen einzelnen Audiostrom zu kombinieren.
- {{domxref("BaseAudioContext.createChannelSplitter()")}}
  - : Erstellt einen {{domxref("ChannelSplitterNode")}}, der verwendet wird, um auf die einzelnen Kanäle eines Audiostroms zuzugreifen und sie separat zu verarbeiten.
- {{domxref("BaseAudioContext.createConvolver()")}}
  - : Erstellt einen {{domxref("ConvolverNode")}}, der verwendet werden kann, um Faltungseffekte auf Ihren Audiografen anzuwenden, beispielsweise einen Halleffekt.
- {{domxref("BaseAudioContext.createDelay()")}}
  - : Erstellt einen {{domxref("DelayNode")}}, der verwendet wird, um das eingehende Audiosignal um einen bestimmten Betrag zu verzögern. Dieser Knoten ist auch nützlich, um Feedbackschleifen in einem Web-Audio-API-Graphen zu erstellen.
- {{domxref("BaseAudioContext.createDynamicsCompressor()")}}
  - : Erstellt einen {{domxref("DynamicsCompressorNode")}}, der verwendet werden kann, um eine akustische Kompression auf ein Audiosignal anzuwenden.
- {{domxref("BaseAudioContext.createGain()")}}
  - : Erstellt einen {{domxref("GainNode")}}, der verwendet werden kann, um die Gesamtlautstärke des Audiografen zu steuern.
- {{domxref("BaseAudioContext.createIIRFilter()")}}
  - : Erstellt einen {{domxref("IIRFilterNode")}}, der einen Filter zweiter Ordnung darstellt, der als verschiedene gängige Filtertypen konfiguriert werden kann.
- {{domxref("BaseAudioContext.createOscillator()")}}
  - : Erstellt einen {{domxref("OscillatorNode")}}, eine Quelle, die eine periodische Wellenform darstellt. Er erzeugt im Wesentlichen einen Ton.
- {{domxref("BaseAudioContext.createPanner()")}}
  - : Erstellt einen {{domxref("PannerNode")}}, der verwendet wird, um einen eingehenden Audiostrom im 3D-Raum zu raummodellieren.
- {{domxref("BaseAudioContext.createPeriodicWave()")}}
  - : Erstellt eine {{domxref("PeriodicWave")}}, die verwendet wird, um eine periodische Wellenform zu definieren, die verwendet werden kann, um die Ausgabe eines {{domxref("OscillatorNode")}} zu bestimmen.
- {{domxref("BaseAudioContext.createScriptProcessor()")}} {{deprecated_inline}}
  - : Erstellt einen {{domxref("ScriptProcessorNode")}}, der für die direkte Audiobearbeitung über JavaScript verwendet werden kann.
- {{domxref("BaseAudioContext.createStereoPanner()")}}
  - : Erstellt einen {{domxref("StereoPannerNode")}}, der verwendet werden kann, um Stereo-Panning auf eine Audioquelle anzuwenden.
- {{domxref("BaseAudioContext.createWaveShaper()")}}
  - : Erstellt einen {{domxref("WaveShaperNode")}}, der verwendet wird, um nichtlineare Verzerrungseffekte zu implementieren.
- {{domxref("BaseAudioContext.decodeAudioData()")}}
  - : Dekodiert asynchron Audiodateidaten, die in einem {{jsxref("ArrayBuffer")}} enthalten sind. In diesem Fall wird `ArrayBuffer` normalerweise aus einem `response`-Attribut von {{domxref("XMLHttpRequest")}} geladen, nachdem der `responseType` auf `arraybuffer` gesetzt wurde. Diese Methode funktioniert nur mit vollständigen Dateien, nicht mit Fragmenten von Audiodateien.

## Ereignisse

- {{domxref("BaseAudioContext.statechange_event", "statechange")}}
  - : Wird ausgelöst, wenn sich der Zustand des `AudioContext` aufgrund des Aufrufs einer der Zustandsänderungsmethoden ({{domxref("AudioContext.suspend")}}, {{domxref("AudioContext.resume")}} oder {{domxref("AudioContext.close")}}) ändert.

## Beispiele

```js
const audioContext = new AudioContext();

const oscillatorNode = audioContext.createOscillator();
const gainNode = audioContext.createGain();
const finish = audioContext.destination;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioContext")}}
- {{domxref("OfflineAudioContext")}}

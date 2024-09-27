---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
l10n:
  sourceCommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{APIRef("Web Audio API")}}

Das `BaseAudioContext`-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) dient als Basisdefinition für Online- und Offline-Audioverarbeitungsgraphen, die durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden – Sie würden seine Funktionen über eine der beiden erbenden Schnittstellen nutzen.

Ein `BaseAudioContext` kann das Ziel von Ereignissen sein und implementiert daher das [`EventTarget`](/de/docs/Web/API/EventTarget) Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt das [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) Objekt zurück, das zum Erstellen und Verwalten von [`AudioNode`](/de/docs/Web/API/AudioNode)s verwendet werden kann, in denen JavaScript-Code, der das [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) Interface implementiert, im Hintergrund läuft, um Audiodaten zu verarbeiten.
- [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die eine ständig zunehmende Hardware-Zeit in Sekunden für die Planung darstellt. Sie beginnt bei `0`.
- [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) {{ReadOnlyInline}}
  - : Gibt einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zurück, der das endgültige Ziel aller Audios im Kontext darstellt. Es kann als das Audio-Wiedergabegerät betrachtet werden.
- [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) {{ReadOnlyInline}}
  - : Gibt das [`AudioListener`](/de/docs/Web/API/AudioListener) Objekt zurück, das für die 3D-Raumklangverarbeitung verwendet wird.
- [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) {{ReadOnlyInline}}
  - : Gibt eine Fließkommazahl zurück, die die Abtastrate (in Abtastungen pro Sekunde) darstellt, die von allen Knoten in diesem Kontext verwendet wird. Die Abtastrate eines [`AudioContext`](/de/docs/Web/API/AudioContext) kann nicht geändert werden.
- [`BaseAudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des `AudioContext` zurück.

## Instanz-Methoden

_Implementiert auch Methoden aus der Schnittstelle_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`BaseAudioContext.createAnalyser()`](/de/docs/Web/API/BaseAudioContext/createAnalyser)
  - : Erstellt einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), der verwendet werden kann, um Audio-Zeit- und Frequenzdaten offenzulegen und beispielsweise Datenvisualisierungen zu erstellen.
- [`BaseAudioContext.createBiquadFilter()`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter)
  - : Erstellt einen [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), der einen Zweitordnungsfilter darstellt, der als verschiedene gängige Filtertypen konfigurierbar ist: Hochpass, Tiefpass, Bandpass usw.
- [`BaseAudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer)
  - : Erstellt ein neues, leeres [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) Objekt, das dann mit Daten gefüllt und über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abgespielt werden kann.
- [`BaseAudioContext.createBufferSource()`](/de/docs/Web/API/BaseAudioContext/createBufferSource)
  - : Erstellt einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), der verwendet werden kann, um Audiodaten, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) Objekt enthalten sind, abzuspielen und zu manipulieren. [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)s werden mit [`AudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt oder von [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) zurückgegeben, wenn es eine Audiospur erfolgreich dekodiert.
- [`BaseAudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource)
  - : Erstellt ein [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Objekt, das eine Audioquelle ist, die kontinuierlich ein monaurales (ein-Kanal) Audiosignal ausgibt, dessen Abtastungen alle denselben Wert haben.
- [`BaseAudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger)
  - : Erstellt einen [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode), der verwendet wird, um Kanäle aus mehreren Audiostreams in einem einzigen Audiostream zu kombinieren.
- [`BaseAudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter)
  - : Erstellt einen [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), der verwendet wird, um die einzelnen Kanäle eines Audiostreams zuzugreifen und sie separat zu verarbeiten.
- [`BaseAudioContext.createConvolver()`](/de/docs/Web/API/BaseAudioContext/createConvolver)
  - : Erstellt einen [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), der verwendet werden kann, um Faltungseffekte auf Ihren Audiographen anzuwenden, beispielsweise einen Halleffekt.
- [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay)
  - : Erstellt einen [`DelayNode`](/de/docs/Web/API/DelayNode), der verwendet wird, um das eingehende Audiosignal um einen bestimmten Betrag zu verzögern. Dieser Knoten ist auch nützlich, um Rückkopplungsschleifen in einem Web Audio API Graphen zu erstellen.
- [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor)
  - : Erstellt einen [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode), der verwendet werden kann, um auf ein Audiosignal akustische Kompression anzuwenden.
- [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain)
  - : Erstellt einen [`GainNode`](/de/docs/Web/API/GainNode), der verwendet werden kann, um die Gesamtlautstärke des Audiographen zu steuern.
- [`BaseAudioContext.createIIRFilter()`](/de/docs/Web/API/BaseAudioContext/createIIRFilter)
  - : Erstellt einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode), der einen Zweitordnungsfilter darstellt, der als verschiedene gängige Filtertypen konfigurierbar ist.
- [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator)
  - : Erstellt einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), eine Quelle, die eine periodische Wellenform darstellt. Es erzeugt im Grunde einen Ton.
- [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner)
  - : Erstellt einen [`PannerNode`](/de/docs/Web/API/PannerNode), der verwendet wird, um einen eingehenden Audiostream im 3D-Raum zu räumlich zu positionieren.
- [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)
  - : Erstellt eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave), die verwendet wird, um eine periodische Wellenform zu definieren, die verwendet werden kann, um den Ausgang eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu bestimmen.
- [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) {{deprecated_inline}}
  - : Erstellt einen [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode), der für die direkte Audiobearbeitung über JavaScript verwendet werden kann.
- [`BaseAudioContext.createStereoPanner()`](/de/docs/Web/API/BaseAudioContext/createStereoPanner)
  - : Erstellt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), der verwendet werden kann, um eine Stereo-Panorama zu einer Audioquelle anzuwenden.
- [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper)
  - : Erstellt einen [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode), der verwendet wird, um nichtlineare Verzerrungseffekte zu implementieren.
- [`BaseAudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData)
  - : Dekodiert asynchron Audiodaten, die in einem {{jsxref("ArrayBuffer")}} enthalten sind. In diesem Fall wird `ArrayBuffer` normalerweise aus dem `response`-Attribut eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) geladen, nachdem der `responseType` auf `arraybuffer` gesetzt wurde. Diese Methode funktioniert nur bei vollständigen Dateien, nicht bei Fragmenten von Audiodateien.

## Ereignisse

- [`statechange`](/de/docs/Web/API/BaseAudioContext/statechange_event)
  - : Wird ausgelöst, wenn sich der Zustand des `AudioContext` aufgrund des Aufrufs einer der Methoden zur Zustandsänderung ([`AudioContext.suspend`](/de/docs/Web/API/AudioContext/suspend), [`AudioContext.resume`](/de/docs/Web/API/AudioContext/resume) oder [`AudioContext.close`](/de/docs/Web/API/AudioContext/close)) ändert.

## Beispiele

```js
const audioContext = new AudioContext();

const oscillatorNode = audioContext.createOscillator();
const gainNode = audioContext.createGain();
const finish = audioContext.destination;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)

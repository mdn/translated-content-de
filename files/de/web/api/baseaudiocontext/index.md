---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
l10n:
  sourceCommit: e2c34c75df6238fbeff790100cea1ab7e552e49e
---

{{APIRef("Web Audio API")}}

Das `BaseAudioContext`-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) dient als Basisdefinition für Online- und Offline-Audioverarbeitungsgraphen, die jeweils durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden – Sie würden seine Funktionen über eines dieser beiden geerbten Schnittstellen nutzen.

Ein `BaseAudioContext` kann Ziel von Ereignissen sein, daher implementiert es das [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt das [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)-Objekt zurück, das verwendet werden kann, um [`AudioNode`](/de/docs/Web/API/AudioNode)s zu erstellen und zu verwalten, in denen JavaScript-Code, der das [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Interface implementiert, im Hintergrund zur Verarbeitung von Audiodaten ausgeführt wird.
- [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) {{ReadOnlyInline}}
  - : Gibt ein Double zurück, das eine sich ständig erhöhende Hardware-Zeit in Sekunden darstellt, die zur Planung verwendet wird. Sie beginnt bei `0`.
- [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) {{ReadOnlyInline}}
  - : Gibt ein [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zurück, das die endgültige Bestimmung aller Audios im Kontext darstellt. Es kann als das Audio-Rendering-Gerät betrachtet werden.
- [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) {{ReadOnlyInline}}
  - : Gibt das [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurück, das für die 3D-Räumlichkeit verwendet wird.
- [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) {{ReadOnlyInline}}
  - : Gibt ein Float zurück, das die Abtastrate (in Samples pro Sekunde) darstellt, die von allen Knoten in diesem Kontext verwendet wird. Die Abtastrate eines [`AudioContext`](/de/docs/Web/API/AudioContext) kann nicht geändert werden.
- [`BaseAudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des `AudioContext` zurück.

## Instanz-Methoden

_Implementiert auch Methoden aus dem Interface_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`BaseAudioContext.createAnalyser()`](/de/docs/Web/API/BaseAudioContext/createAnalyser)
  - : Erstellt ein [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), das verwendet werden kann, um Audiozeit- und Frequenzdaten offenzulegen und beispielsweise Datenvisualisierungen zu erstellen.
- [`BaseAudioContext.createBiquadFilter()`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter)
  - : Erstellt ein [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), das einen zweiten Ordnungsfilter darstellt, der als verschiedene gängige Filtertypen konfigurierbar ist: Hochpass, Tiefpass, Bandpass, usw.
- [`BaseAudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer)
  - : Erstellt ein neues, leeres [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt, das dann mit Daten gefüllt und über ein [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abgespielt werden kann.
- [`BaseAudioContext.createBufferSource()`](/de/docs/Web/API/BaseAudioContext/createBufferSource)
  - : Erstellt ein [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), das verwendet werden kann, um Audiodaten zu spielen und zu manipulieren, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt enthalten sind. [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)s werden mit [`AudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt oder durch [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) zurückgegeben, wenn es eine Audiospur erfolgreich dekodiert.
- [`BaseAudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource)
  - : Erstellt ein [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Objekt, das eine Audioquelle ist, die kontinuierlich ein monaurales (einkanaliges) Tonsignal ausgibt, dessen Samples alle denselben Wert haben.
- [`BaseAudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger)
  - : Erstellt ein [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode), das verwendet wird, um Kanäle aus mehreren Audioströmen zu einem einzigen Audiostrom zu kombinieren.
- [`BaseAudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter)
  - : Erstellt ein [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), das verwendet wird, um die einzelnen Kanäle eines Audiostroms zuzugreifen und sie separat zu verarbeiten.
- [`BaseAudioContext.createConvolver()`](/de/docs/Web/API/BaseAudioContext/createConvolver)
  - : Erstellt ein [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), das verwendet werden kann, um Faltungseffekte auf Ihr Audio-Graphen anzuwenden, beispielsweise einen Halleffekt.
- [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay)
  - : Erstellt ein [`DelayNode`](/de/docs/Web/API/DelayNode), das verwendet wird, um das eingehende Audiosignal um eine bestimmte Zeit zu verzögern. Dieser Node ist auch nützlich, um Rückkopplungsschleifen in einem Web Audio API-Graphen zu erstellen.
- [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor)
  - : Erstellt ein [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode), das verwendet werden kann, um akustische Kompression auf ein Audiosignal anzuwenden.
- [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain)
  - : Erstellt ein [`GainNode`](/de/docs/Web/API/GainNode), das verwendet werden kann, um die Gesamtlautstärke des Audio-Graphen zu steuern.
- [`BaseAudioContext.createIIRFilter()`](/de/docs/Web/API/BaseAudioContext/createIIRFilter)
  - : Erstellt ein [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode), das einen zweiten Ordnungsfilter darstellt, der als verschiedene gängige Filtertypen konfigurierbar ist.
- [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator)
  - : Erstellt ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), eine Quelle, die eine periodische Wellenform darstellt. Es erzeugt im Wesentlichen einen Ton.
- [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner)
  - : Erstellt ein [`PannerNode`](/de/docs/Web/API/PannerNode), das verwendet wird, um einen eingehenden Audiostrom im 3D-Raum zu räumlich zu gestalten.
- [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)
  - : Erstellt ein [`PeriodicWave`](/de/docs/Web/API/PeriodicWave), das verwendet wird, um eine periodische Wellenform zu definieren, die zur Bestimmung der Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) verwendet werden kann.
- [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) {{deprecated_inline}}
  - : Erstellt ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode), das für die direkte Audiobearbeitung über JavaScript verwendet werden kann.
- [`BaseAudioContext.createStereoPanner()`](/de/docs/Web/API/BaseAudioContext/createStereoPanner)
  - : Erstellt ein [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), das verwendet werden kann, um Stereo-Panning auf eine Audioquelle anzuwenden.
- [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper)
  - : Erstellt ein [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode), das verwendet wird, um nichtlineare Verzerrungseffekte zu implementieren.
- [`BaseAudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData)
  - : Dekodiert asynchron Audiodatendateien, die in einem {{jsxref("ArrayBuffer")}} enthalten sind. In diesem Fall wird der `ArrayBuffer` normalerweise von einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-`response`-Attribut geladen, nachdem der `responseType` auf `arraybuffer` gesetzt wurde. Diese Methode funktioniert nur mit vollständigen Dateien, nicht mit Fragmenten von Audiodateien.

## Ereignisse

- [`statechange`](/de/docs/Web/API/BaseAudioContext/statechange_event)
  - : Wird ausgelöst, wenn sich der Zustand des `AudioContext` aufgrund des Aufrufs einer der Zustandsänderungsmethoden ([`AudioContext.suspend`](/de/docs/Web/API/AudioContext/suspend), [`AudioContext.resume`](/de/docs/Web/API/AudioContext/resume) oder [`AudioContext.close`](/de/docs/Web/API/AudioContext/close)) ändert.

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

- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)

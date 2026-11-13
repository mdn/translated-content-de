---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("Web Audio API")}}

Das Interface `BaseAudioContext` der [Web Audio API](/de/docs/Web/API/Web_Audio_API) dient als Basisdefinition für Graphen zur Online- und Offline-Audioverarbeitung, die durch [`AudioContext`](/de/docs/Web/API/AudioContext) beziehungsweise [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) repräsentiert werden. Sie verwenden `BaseAudioContext` nicht direkt, sondern nutzen seine Funktionen über eines dieser beiden abgeleiteten Interfaces.

Ein `BaseAudioContext` kann Ziel von Ereignissen sein und implementiert daher das Interface [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) {{ReadOnlyInline}} {{securecontext_inline}}
  - : Gibt das Objekt [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) zurück. Damit lassen sich [`AudioNode`](/de/docs/Web/API/AudioNode)-Instanzen erstellen und verwalten, in denen JavaScript-Code, der das Interface [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) implementiert, im Hintergrund zur Verarbeitung von Audiodaten ausgeführt wird.
- [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) {{ReadOnlyInline}}
  - : Gibt einen Wert vom Typ `double` zurück, der eine stetig zunehmende Hardware-Zeit in Sekunden zur zeitlichen Planung angibt. Er beginnt bei `0`.
- [`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) {{ReadOnlyInline}}
  - : Gibt einen [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) zurück, der das endgültige Ziel aller Audiodaten im Kontext darstellt. Er kann als das Gerät betrachtet werden, das die Audiodaten ausgibt.
- [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) {{ReadOnlyInline}}
  - : Gibt das Objekt [`AudioListener`](/de/docs/Web/API/AudioListener) zurück, das für die räumliche Darstellung in 3D verwendet wird.
- [`BaseAudioContext.renderQuantumSize`](/de/docs/Web/API/BaseAudioContext/renderQuantumSize) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Größe eines Verarbeitungsblocks des Audiographen angibt, also die Anzahl der Audio-Sample-Frames, die bei jedem Verarbeitungsdurchlauf verarbeitet werden.
- [`BaseAudioContext.sampleRate`](/de/docs/Web/API/BaseAudioContext/sampleRate) {{ReadOnlyInline}}
  - : Gibt einen Gleitkommawert zurück, der die von allen Knoten in diesem Kontext verwendete Abtastrate (in Samples pro Sekunde) angibt. Die Abtastrate eines [`AudioContext`](/de/docs/Web/API/AudioContext) kann nicht geändert werden.
- [`BaseAudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand des `AudioContext` zurück.

## Instanzmethoden

_Implementiert außerdem Methoden des Interfaces_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`BaseAudioContext.createAnalyser()`](/de/docs/Web/API/BaseAudioContext/createAnalyser)
  - : Erstellt einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), mit dem sich zeit- und frequenzbezogene Audiodaten bereitstellen und beispielsweise Datenvisualisierungen erstellen lassen.
- [`BaseAudioContext.createBiquadFilter()`](/de/docs/Web/API/BaseAudioContext/createBiquadFilter)
  - : Erstellt einen [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode). Dieser stellt einen Filter zweiter Ordnung dar, der als einer von mehreren gängigen Filtertypen konfiguriert werden kann, etwa als Hochpass-, Tiefpass- oder Bandpassfilter.
- [`BaseAudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer)
  - : Erstellt ein neues, leeres [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt, das anschließend mit Daten gefüllt und über einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) abgespielt werden kann.
- [`BaseAudioContext.createBufferSource()`](/de/docs/Web/API/BaseAudioContext/createBufferSource)
  - : Erstellt einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), mit dem Audiodaten in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekt abgespielt und bearbeitet werden können. [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)-Objekte werden mit [`AudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt oder von [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) zurückgegeben, wenn eine Audiospur erfolgreich dekodiert wurde.
- [`BaseAudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource)
  - : Erstellt ein [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Objekt. Diese Audioquelle gibt fortlaufend ein monaurales (einkanaliges) Tonsignal aus, dessen Samples alle denselben Wert haben.
- [`BaseAudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger)
  - : Erstellt einen [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode), mit dem Kanäle aus mehreren Audiostreams zu einem einzigen Audiostream zusammengeführt werden.
- [`BaseAudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter)
  - : Erstellt einen [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), mit dem auf die einzelnen Kanäle eines Audiostreams zugegriffen werden kann, um sie getrennt zu verarbeiten.
- [`BaseAudioContext.createConvolver()`](/de/docs/Web/API/BaseAudioContext/createConvolver)
  - : Erstellt einen [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), mit dem sich Faltungseffekte auf Ihren Audiographen anwenden lassen, beispielsweise ein Halleffekt.
- [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay)
  - : Erstellt einen [`DelayNode`](/de/docs/Web/API/DelayNode), mit dem das eingehende Audiosignal um eine bestimmte Zeit verzögert wird. Dieser Knoten eignet sich auch zum Erstellen von Rückkopplungsschleifen in einem Graphen der Web Audio API.
- [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor)
  - : Erstellt einen [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode), mit dem sich ein Audiosignal dynamisch komprimieren lässt.
- [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain)
  - : Erstellt einen [`GainNode`](/de/docs/Web/API/GainNode), mit dem sich die Gesamtlautstärke des Audiographen steuern lässt.
- [`BaseAudioContext.createIIRFilter()`](/de/docs/Web/API/BaseAudioContext/createIIRFilter)
  - : Erstellt einen [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode). Dieser stellt einen Filter zweiter Ordnung dar, der als einer von mehreren gängigen Filtertypen konfiguriert werden kann.
- [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator)
  - : Erstellt einen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), eine Quelle für eine periodische Wellenform. Er erzeugt im Wesentlichen einen Ton.
- [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner)
  - : Erstellt einen [`PannerNode`](/de/docs/Web/API/PannerNode), mit dem ein eingehender Audiostream im dreidimensionalen Raum positioniert wird.
- [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)
  - : Erstellt eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave), mit der eine periodische Wellenform definiert wird, die zur Bestimmung der Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) verwendet werden kann.
- [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) {{deprecated_inline}}
  - : Erstellt einen [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode), der zur direkten Audioverarbeitung mit JavaScript verwendet werden kann.
- [`BaseAudioContext.createStereoPanner()`](/de/docs/Web/API/BaseAudioContext/createStereoPanner)
  - : Erstellt einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode), mit dem sich eine Audioquelle im Stereopanorama positionieren lässt.
- [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper)
  - : Erstellt einen [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode), mit dem nichtlineare Verzerrungseffekte umgesetzt werden.
- [`BaseAudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData)
  - : Dekodiert asynchron Audiodateidaten, die in einem {{jsxref("ArrayBuffer")}} enthalten sind. In diesem Fall wird der `ArrayBuffer` üblicherweise aus dem Attribut `response` einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) geladen, nachdem `responseType` auf `arraybuffer` gesetzt wurde. Diese Methode funktioniert nur mit vollständigen Dateien, nicht mit Fragmenten von Audiodateien.

## Ereignisse

- [`statechange`](/de/docs/Web/API/BaseAudioContext/statechange_event)
  - : Wird ausgelöst, wenn sich der Zustand des `AudioContext` durch den Aufruf einer der Methoden zur Zustandsänderung ([`AudioContext.suspend`](/de/docs/Web/API/AudioContext/suspend), [`AudioContext.resume`](/de/docs/Web/API/AudioContext/resume) oder [`AudioContext.close`](/de/docs/Web/API/AudioContext/close)) ändert.

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

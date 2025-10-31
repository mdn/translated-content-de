---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web und ermöglicht Entwicklern die Auswahl von Audioquellen, Hinzufügen von Effekten zu Audio, Erstellen von Audio-Visualisierungen, Anwenden räumlicher Effekte (wie Panning) und vieles mehr.

## Web-Audio-Konzepte und Verwendung

Die Web Audio API umfasst die Handhabung von Audiovorgängen innerhalb eines **Audio Context** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiobearbeitungen werden mit **Audio Nodes** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Mehrere Quellen - mit verschiedenen Kanal-Layouts - werden sogar innerhalb eines einzelnen Kontexts unterstützt. Diese modulare Gestaltung bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio Nodes sind durch ihre Eingänge und Ausgänge in Ketten und einfachen Netzen verbunden. Sie beginnen in der Regel mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitscheiben, oft Zehntausende pro Sekunde. Diese können entweder mathematisch berechnet werden (wie beim [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder sie können Aufnahmen von Ton-/Videodateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) und Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Tondateien nur Aufnahmen der Schallintensitäten selbst, die von Mikrofonen oder elektronischen Instrumenten aufgenommen und in eine einzige, komplizierte Welle gemischt werden.

Ausgänge dieser Nodes könnten mit Eingängen anderer verknüpft werden, die diese Streams von Schallsamples in verschiedene Streams mischen oder ändern. Eine häufige Modifikation besteht darin, die Samples mit einem Wert zu multiplizieren, um sie lauter oder leiser zu machen (wie es beim [`GainNode`](/de/docs/Web/API/GainNode) der Fall ist). Sobald der Ton für den beabsichtigten Effekt ausreichend verarbeitet wurde, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Ton an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Workflow für Web-Audio könnte folgendermaßen aussehen:

1. Erstellen des Audio Contexts
2. Innerhalb des Contexts Quellen erstellen — wie `<audio>`, Oszillator, Stream
3. Erstellen von Effekt-Nodes, wie Hall, Biquad-Filter, Panner, Kompressor
4. Auswahl des finalen Audioziels, z.B. die Systemlautsprecher
5. Verbinden der Quellen mit den Effekten und der Effekte mit dem Ziel.

![Ein einfaches Box-Diagramm mit einer äußeren Box, die als Audio Context bezeichnet ist, und drei inneren Boxen, die als Quellen, Effekte und Ziel bezeichnet sind. Die drei inneren Boxen haben Pfeile zwischen ihnen, die von links nach rechts zeigen, was den Fluss der Audioinformationen anzeigt.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz gesteuert, was es den Entwicklern ermöglicht, Code zu schreiben, der präzise auf Ereignisse reagiert und in der Lage ist, spezifische Samples anzuzielen, selbst bei einer hohen Abtastrate. Anwendungen wie Drum Machines und Sequenzer sind somit in greifbarer Nähe.

Die Web Audio API ermöglicht es uns auch, zu steuern, wie Audio _räumlich gegliedert_ wird. Durch ein System, das auf einem _Quellen-Hörer-Modell_ basiert, ermöglicht es die Kontrolle des _Panning-Modells_ und beschäftigt sich mit _entfernungsbedingter Dämpfung_, die durch eine sich bewegende Quelle (oder einen bewegenden Hörer) verursacht wird.

> [!NOTE]
> Sie können in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) viel ausführlicher über die Theorie der Web Audio API lesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann für diejenigen, die nicht mit Audio- oder Musikbegriffen vertraut sind, einschüchternd wirken, und da sie viele Funktionen enthält, kann es sich als schwierig erweisen, als Entwickler den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem sie z.B. [Atmosphäre wie futurelibrary.no](https://www.futurelibrary.no/) bereitstellt oder [auditive Rückmeldungen in Formularen](https://css-tricks.com/form-validation-web-audio/). Sie kann jedoch auch verwendet werden, um _fortschrittliche_ interaktive Instrumente zu erstellen. In diesem Sinne ist sie sowohl für Entwickler als auch Musiker geeignet.

Für diejenigen, die mit dem Programmieren vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen, haben wir ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Es gibt auch einen Artikel zu [Grundlegenden Konzepten hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen hilft zu verstehen, wie digitale Audio speziell im Bereich der API funktioniert. Dies beinhaltet auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Programmieren zu lernen ist wie Karten zu spielen — Sie lernen die Regeln, dann spielen Sie, dann gehen Sie zurück und lernen die Regeln wieder, dann spielen Sie erneut. Wenn also in den ersten Tutorials und dem Artikel einige Theorie nicht ganz passt, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben, und einige fortgeschrittenere Techniken, um einen Step-Sequenzer aufzubauen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial verfügbar, das alle Funktionen der API umfasst. Weitere Informationen finden Sie in der Seitenleiste dieser Seite.

Wenn Sie eher mit der musikalischen Seite vertraut sind, mit musikspezifischen Konzepten vertraut sind und Instrumente bauen möchten, können Sie direkt mit dem fortgeschrittenen Tutorial und anderen als Leitfaden beginnen (das oben verlinkte Tutorial behandelt das Planen von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie ein LFO unter anderem).

Wenn Ihnen die Grundlagen der Programmierung nicht vertraut sind, sollten Sie zunächst einige JavaScript-Einsteiger-Tutorials konsultieren und dann hierher zurückkehren — sehen Sie sich unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn_web_development/Core/Scripting) für einen großartigen Einstieg an.

## Web Audio API-Schnittstellen

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition des Audio-Graphen

Allgemeine Container und Definitionen, die Audio-Graphen in der Nutzung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle stellt einen Audio-Verarbeitungsgraphen dar, der aus miteinander verknüpften Audiomodulen besteht, von denen jedes durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt wird. Ein Audio Context steuert die Erstellung der enthaltenen Nodes und die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Contexts geschieht.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle stellt ein Audiobearbeitungsmodul wie eine _Audioquelle_ (z.B. ein HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), _Audioziel_, _Zwischenbearbeitungsmodul_ (z.B. einen Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)) dar.
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle stellt einen audiobezogenen Parameter dar, wie einer eines [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen bestimmten Wert oder eine Änderung des Werts gesetzt werden und kann so programmiert werden, dass er zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster erfolgt.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine map-ähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass sie die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bereitstellt.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle fungiert als Grunddefinition für Online- und Offline-Audioverarbeitungsgraphen, dargestellt durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) jeweils. Sie würden `BaseAudioContext` nicht direkt verwenden — Sie würden dessen Funktionen über eine dieser beiden vererbenden Schnittstellen nutzen.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende der Mediendaten erreicht wurde.

### Audioquellen definieren

Schnittstellen, die Audioquellen zur Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für mehrere Arten von Audiosource-Node-Schnittstellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle stellt eine periodische Wellenform dar, wie eine Sinus- oder Dreieckswelle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audioverarbeitungsmodul, das eine bestimmte _Frequenz_ einer Welle erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle repräsentiert ein kurzes Audio-Asset, das im Speicher residiert, erstellt aus einer Audiodatei mit der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData), oder erstellt mit Rohdaten unter Verwendung von [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer). Sobald es in diese Form dekodiert ist, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) gelegt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus im Speicher vorhandenem Audio besteht, gespeichert in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer). Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus einem HTML {{ htmlelement("audio") }} oder {{ htmlelement("video") }} Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) besteht (wie eine Webcam, Mikrofon oder ein Stream, der von einem entfernten Computer gesendet wird). Wenn mehrere Audio-Tracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikographisch (alphabetisch) zuerst kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Node vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) stellt eine Audioquelle dar, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Nodes mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource), um den Node zu erstellen, geben Sie den zu verwendenden Track an. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audio-Effekten

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle stellt einen einfachen Filter niedriger Ordnung dar. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Klangregelgeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Lineare Faltung auf einen gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) ausführt und häufig verwendet wird, um einen Hall-Effekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle stellt eine [Verzögerungsleitung](https://de.wikipedia.org/wiki/Delay-Line); ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audioverarbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen eines Eingabedatums und seiner Weiterleitung an den Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals reduziert, um das Clipping und die Verzerrung zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und multiplexiert werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle stellt eine Änderung der Lautstärke dar. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audioverarbeitungsmodul, das einen bestimmten _Gewinn_ auf die Eingabedaten anwendet, bevor es weitergeleitet wird.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle stellt einen nicht-linearen Verzerrer dar. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das mit einer Kurve eine Wellenformverzerrung auf das Signal anwendet. Neben offensichtlichen Verzerreffekten wird es oft genutzt, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu gestalten.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [Infinite Impulse Response](https://de.wikipedia.org/wiki/Infiniter_Impulsantwort)-Filter; dieser Filtertyp kann verwendet werden, um Klangregelgeräte und grafische Equalizer zu implementieren.

### Definition von Audio-Zielen

Sobald Sie Ihre Audioverarbeitung abgeschlossen haben, definieren diese Schnittstellen, wohin Sie sie ausgeben möchten.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle innerhalb eines bestimmten Kontextes — normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle stellt ein Audiosziel dar, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzigen `AudioMediaStreamTrack` besteht, das ähnlich verwendet werden kann wie ein [`MediaStream`](/de/docs/Web/API/MediaStream), der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audiosziel fungiert.

### Datenanalyse und Visualisierung

Wenn Sie Zeit-, Frequenz- und andere Daten aus Ihrem Audio extrahieren möchten, benötigen Sie das `AnalyserNode`.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle stellt einen Node dar, der in der Lage ist, Echtzeit-Frequenz- und Zeitbereichsanalyseinformationen bereitzustellen, für die Zwecke der Datenanalyse und Visualisierung.

### Aufteilen und Zusammenführen von Audiospuren

Zum Aufteilen und Zusammenführen von Audiospuren verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in ein Set von _Mono_-Ausgängen.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle führt verschiedene Mono-Eingänge zu einer einzigen Ausgabe zusammen. Jeder Eingang wird verwendet, um einen Kanal der Ausgabe zu füllen.

### Audio-Spatialisation

Diese Schnittstellen erlauben Ihnen, Audio-Spatialisation-Panning-Effekte zu Ihren Audioquellen hinzuzufügen.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Ausrichtung der einzigartigen Person, die dem Audio-Szenario zuhört, das in der Audio-Spatialisation verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audio-Source-Signals im 3D-Raum und ermöglicht Ihnen das Erstellen komplexer Panning-Effekte.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle stellt einen einfachen Stereo-Panner-Node dar, der verwendet werden kann, um einen Audio-Stream nach links oder rechts zu pannen.

### Verarbeitung von Audio in JavaScript

Mit Audio Worklets können Sie benutzerdefinierte Audio Nodes erstellen, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind. Audio Worklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichte Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt verfügbar, dessen [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet), und ermöglicht es Ihnen, Module zum Audio Worklet hinzuzufügen, die außerhalb des Haupt-Threads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle stellt einen [`AudioNode`](/de/docs/Web/API/AudioNode) dar, der in einen Audio-Graphen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle stellt die in einem `AudioWorkletGlobalScope` laufende Audiobearbeitungscode dar, die Audio direkt generiert, verarbeitet oder analysiert und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-abgeleitetes Objekt, das einen Worker-Kontext darstellt, in dem ein Audiobearbeitungsskript ausgeführt wird; es ist dafür ausgelegt, die Generierung, Verarbeitung und Analyse von Audiodaten direkt unter Verwendung von JavaScript in einem Worklet-Thread statt im Haupt-Thread zu ermöglichen.

#### Veraltet: Script-Processor-Nodes

Vor der Definition von Audio Worklets verwendete die Web Audio API den `ScriptProcessorNode` für die auf JavaScript basierende Audiobearbeitung. Da der Code im Haupt-Thread läuft, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Generierung, Verarbeitung oder Analyse von Audio mit JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das mit zwei Buffern verbunden ist: ein Puffer, der den aktuellen Eingang enthält, und ein anderer, der die Ausgabe enthält. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird an das Objekt gesendet, jedes Mal, wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler endet, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) der Web Audio API zur Verarbeitung bereit ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Der `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) zur Verarbeitung bereit ist.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audio-Graphen sehr schnell im Hintergrund zu verarbeiten/rendern - ihn in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern anstelle der Lautsprecher des Geräts - mit dem Folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audiobearbeitungsgraphen darstellt, der aus miteinander verknüpften [`AudioNode`](/de/docs/Web/API/AudioNode)s besteht. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio eigentlich nicht, sondern generiert es _so schnell wie möglich_ in einem Buffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Der `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Anleitungen

{{SubpagesWithSummaries}}

## Beispiele

Sie finden eine Reihe von Beispielen in unserem [webaudio-examples Repo](https://github.com/mdn/webaudio-examples/) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Sound-Erstellung, Sequenzierung, Timing, Zeitplanung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web-Audio-Spatialisation](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Kontrolle mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Positional Audio und WebGL mischen (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spielaudio mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tone.js](https://tonejs.github.io/): Ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): Eine JS-Audiobibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) verwendet und auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückgreift sowie weitere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliches Verkettung von AudioNodes, Mixer-ähnliche Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung, die die Web Audio API verwendet, um Video und Audio von verschiedenen Quellen in einer einzigen Datei aufzuzeichnen und zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Sie ermöglicht Entwicklern die Auswahl von Audioquellen, das Hinzufügen von Effekten zu Audio, das Erstellen von Audiovisualisierungen, das Anwenden räumlicher Effekte (wie Panning) und vieles mehr.

## Konzepte und Nutzung der Web Audio API

Die Web Audio API umfasst die Verarbeitung von Audiooperationen innerhalb eines **audio context** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **audio nodes** durchgeführt, die miteinander verbunden werden, um einen **audio routing graph** zu bilden. Mehrere Quellen — mit unterschiedlichen Arten von Kanalaufteilungen — werden sogar innerhalb eines einzigen Kontexts unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten werden über ihre Eingänge und Ausgänge in Ketten und einfachen Netzwerken verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitabschnitten, oft zehntausende davon pro Sekunde. Diese könnten entweder mathematisch berechnet werden (wie z.B. [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder sie können Aufnahmen von Ton-/Videodateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) und Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Tondateien einfach Aufnahmen von Schallintensitäten, die von Mikrofonen oder elektrischen Instrumenten stammen und in eine einzige, komplexe Welle gemischt werden.

Ausgänge dieser Knoten können mit den Eingängen anderer verbunden werden, die diese Stromströme von Tonsamples in unterschiedliche Streams mischen oder modifizieren. Eine häufige Modifikation ist das Multiplizieren der Samples mit einem Wert, um sie lauter oder leiser zu machen (wie es beim [`GainNode`](/de/docs/Web/API/GainNode) der Fall ist). Sobald der Ton ausreichend für den gewünschten Effekt verarbeitet wurde, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Ton an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfaches, typisches Arbeitsablauf für Web-Audio könnte folgendermaßen aussehen:

1. Audio-Kontext erstellen
2. Innerhalb des Kontexts Quellen erstellen - wie `<audio>`, Oszillator, Stream
3. Effekt-Knoten erstellen, wie Nachhall, Biquad-Filter, Panner, Kompressor
4. Endziel des Audios wählen, zum Beispiel Ihre Systemlautsprecher
5. Verbinden Sie die Quellen mit den Effekten und die Effekte mit dem Ziel.

![Ein einfaches Blockdiagramm mit einem äußeren Block, der mit Audio-Kontext beschriftet ist, und drei inneren Blöcken, die mit Quellen, Effekten und Ziel beschriftet sind. Die drei inneren Blöcke haben Pfeile zwischen ihnen, die von links nach rechts zeigen und den Fluss von Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz gesteuert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, bestimmte Samples selbst bei hoher Abtastrate anzuzielen. Anwendungen wie Drum Machines und Sequenzer sind somit gut erreichbar.

Die Web Audio API erlaubt es uns auch, die _Räumlichkeit_ von Audio zu steuern. Durch ein System basierend auf einem _Quellen-Hörer-Modell_ ermöglicht sie die Steuerung des _Panning-Modells_ und die Handhabung der _entfernungsinduzierten Dämpfung_, die durch eine sich bewegende Quelle (oder einen sich bewegenden Hörer) verursacht wird.

> [!NOTE]
> Sie können die Theorie hinter der Web Audio API viel detaillierter in unserem Artikel [Grundlegende Konzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) nachlesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann für diejenigen, die nicht mit Audio- oder Musikbegriffen vertraut sind, einschüchternd wirken und da sie eine große Menge an Funktionalität umfasst, kann es für Entwickler schwierig sein, damit zu beginnen.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem z. B. [eine Atmosphäre wie futurelibrary.no bereitgestellt wird](https://www.futurelibrary.no/), oder [auditive Rückmeldung bei Formularen gegeben wird](https://css-tricks.com/form-validation-web-audio/). Allerdings kann es auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. Mit diesem Gedanken im Hinterkopf ist sie sowohl für Entwickler als auch für Musiker geeignet.

Wir haben ein [einfaches einführendes Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit der Programmierung vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel zur [Grundlagenkonzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), um Ihnen zu helfen, die Funktionsweise von digitalem Audio zu verstehen, insbesondere im Bereich der API. Dieser enthält auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Programmierung zu lernen ist wie Karten zu spielen — man lernt die Regeln, dann spielt man, dann geht man zurück und lernt die Regeln erneut, dann spielt man wieder. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, zu üben, was Sie gelernt haben, und einige fortgeschrittenere Techniken anzuwenden, um einen Schrittsequencer aufzubauen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial, das alle Funktionen der API abdeckt. Siehe die Seitenleiste auf dieser Seite für mehr.

Wenn Sie mit den musikalischen Aspekten vertrauter sind, mit den Konzepten der Musiktheorie vertraut sind, Instrumente erstellen möchten, können Sie direkt mit dem fortgeschrittenen Tutorial und anderen als Leitfaden beginnen (das oben verlinkte Tutorial umfasst das Planen von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie eines LFOs unter anderem).

Wenn Sie mit den Grundlagen der Programmierung nicht vertraut sind, möchten Sie vielleicht zuerst einige JavaScript-Tutorials für Anfänger konsultieren und dann hierher zurückkehren — sehen Sie sich unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn/JavaScript) an, um einen großartigen Einstieg zu erhalten.

## Web Audio API Schnittstellen

Die Web Audio API hat eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition des Audio-Graphen

Allgemeine Container und Definitionen, die Audio-Graphen in der Nutzung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`** Schnittstelle repräsentiert einen Audio-Verarbeitungsgrafen, der aus miteinander verknüpften Audiosmodulen besteht, die jeweils durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt werden. Ein Audio-Kontext steuert die Erstellung der darin enthaltenen Knoten und die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontexts passiert.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`** Schnittstelle repräsentiert ein Audio-Verarbeitungsmodul wie eine _Audioquelle_ (z.B. ein HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), _Audioziel_, _Zwischenverarbeitungsmodul_ (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), oder _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`** Schnittstelle repräsentiert einen mit Audio zusammenhängenden Parameter, wie einen von [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen bestimmten Wert oder eine Änderung des Wertes gesetzt werden und kann so geplant werden, dass dies zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster geschieht.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine kartenartige Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam) Schnittstellen, was bedeutet, dass sie die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size` Eigenschaft bereitstellt.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`** Schnittstelle agiert als Basisdefinition für Online- und Offline-Audio-Verarbeitungsgraphen, wie sie jeweils durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden — Sie würden seine Funktionen über eine der beiden erbenden Schnittstellen nutzen.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
  - : Das `ended` Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wird, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen definieren, die in der Web Audio API verwendet werden.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Die **`AudioScheduledSourceNode`** ist eine Basisschnittstelle für mehrere Arten von Audiosquellen-Knotenschnittstellen. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`** Schnittstelle repräsentiert eine periodische Wellenform, wie eine Sinus- oder Sägezahnwelle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das eine bestimmte _Frequenz_ von Wellen erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`** Schnittstelle repräsentiert einen kurzen Audio-Bestandteil, der im Speicher gespeichert ist, entweder von einer Audiodatei, die mithilfe der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) erstellt wurde, oder mit rohen Daten erstellt wurde, die mit [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt wurden. Sobald die Audiodaten in dieser Form vorliegen, können sie in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`** Schnittstelle repräsentiert eine Audiosquelle, die aus im Speicher befindlichen Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audiosquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`** Schnittstelle repräsentiert eine Audiosquelle, die aus einem HTML {{ htmlelement("audio") }} oder {{ htmlelement("video") }} Element besteht. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audiosquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`** Schnittstelle repräsentiert eine Audiosquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) besteht (z.B. eine Webcam, ein Mikrofon oder ein Stream, der von einem entfernten Computer gesendet wird). Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikographisch (alphabetisch) zuerst kommt. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audiosquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audiosquelle, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Bei der Erstellung des Knotens mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) geben Sie an, welchen Track Sie verwenden möchten. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`** Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der verschiedene Arten von Filtern, Tonsteuergeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`** Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einen gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und oft verwendet wird, um einen Nachhalleffekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`** Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das eine Verzögerung zwischen dem Eingangsdaten und dessen Weiterleitung an den Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`** Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals verringert, um das Clipping und Verzerrungen zu vermeiden, die auftreten können, wenn mehrere Klänge gleichzeitig abgespielt und miteinander vermultiplext werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`** Schnittstelle repräsentiert eine Änderung der Lautstärke. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das eine bestimmte _Verstärkung_ auf die Eingangsdaten anwendet, bevor sie an den Ausgang weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`** Schnittstelle repräsentiert einen nicht-linearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Wellenformverzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um den Ausgang eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR) Filter; dieser Filtertyp kann verwendet werden, um Tonsteuergeräte und grafische Equalizer zu implementieren.

### Definition von Audiozielen

Nachdem Sie Ihr Audio verarbeitet haben, definieren diese Schnittstellen, wohin es ausgegeben werden soll.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`** Schnittstelle repräsentiert das Endziel einer Audiosquelle in einem bestimmten Kontext — normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`** Schnittstelle repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) besteht, mit einem einzigen `AudioMediaStreamTrack`, das auf ähnliche Weise verwendet werden kann wie ein [`MediaStream`](/de/docs/Web/API/MediaStream), das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wird. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und -visualisierung

Wenn Sie Zeit, Frequenz und andere Daten aus Ihrem Audio extrahieren möchten, ist der `AnalyserNode` das, was Sie brauchen.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`** Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Frequenz- und Zeitbereichsanalyseinformationen bereitzustellen, für die Zwecke der Datenanalyse und -visualisierung.

### Aufteilung und Zusammenführung von Audiokanälen

Um Audiokanäle aufzuteilen und neu zu bereinigen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`** Schnittstelle trennt die verschiedenen Kanäle einer Audiosquelle in eine Reihe von _Mono_-Ausgängen.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`** Schnittstelle vereint verschiedene Mono-Eingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Räumlichkeit

Diese Schnittstellen ermöglichen es Ihnen, Ihrer Audio-Räumlichkeit Panning-Effekte hinzuzufügen.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`** Schnittstelle repräsentiert die Position und Orientierung der einzigartigen Person, die die Audioszene hört, die in der Audio-Räumlichkeit verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`** Schnittstelle repräsentiert die Position und das Verhalten eines Audiossignals im 3D-Raum, wodurch komplexe Panning-Effekte erstellt werden können.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`** Schnittstelle repräsentiert einen einfachen Stereo-Panner-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu pannen.

### Audiobearbeitung in JavaScript

Mit Audio-Arbeitsblättern können Sie benutzerdefinierte Audioknoten definieren, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind. Audio-Arbeitsblätter implementieren die [`Worklet`](/de/docs/Web/API/Worklet) Schnittstelle, eine leichtgewichtige Version der [`Worker`](/de/docs/Web/API/Worker) Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet` Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext) Objekt erreichbar, dessen [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) es erlaubt, Module zu dem Audio-Arbeitsblatts hinzuzufügen, die außerhalb des Hauptthreads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode` Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einen Audio-Grafen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor` Schnittstelle repräsentiert Audio-Verarbeitungscode, der im `AudioWorkletGlobalScope` läuft, das Audio direkt generiert, verarbeitet oder analysiert, und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope` Schnittstelle ist ein von `WorkletGlobalScope` abgeleitetes Objekt, das einen Arbeitskontext repräsentiert, in dem ein Audiobearbeitungsskript ausgeführt wird; sie ist darauf ausgelegt, die Erzeugung, Bearbeitung und Analyse von Audiodaten direkt in einem Arbeitsblatt-Thread anstelle im Hauptthread zu ermöglichen.

#### Veraltet: Skriptprozessor-Knoten

Bevor Audio-Arbeitsblätter definiert wurden, verwendete die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Hauptthread läuft, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen behalten, ist aber als veraltet gekennzeichnet.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`** Schnittstelle ermöglicht die Generierung, Verarbeitung oder Analyse von Audio mithilfe von JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das mit zwei Puffern verbunden ist, einer enthält den aktuellen Eingang, einer den Ausgang. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) Schnittstelle implementiert, wird an das Objekt gesendet, wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler endet, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess` Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit ist, verarbeitet zu werden.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) Eingabepuffer bereit ist, verarbeitet zu werden.

### Offline- / Hintergrund-Audiobearbeitung

Es ist möglich, einen Audio-Graphen sehr schnell im Hintergrund zu verarbeiten/rendern — indem er an einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gerendert wird anstatt an die Lautsprecher des Geräts — mit dem folgenden:

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`** Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext) Schnittstelle, die einen Audio-Verarbeitungsgrafen repräsentiert, der aus verlinkten [`AudioNode`](/de/docs/Web/API/AudioNode)s besteht. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern generiert es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete` Ereignis wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{LandingPageListSubpages}}

## Beispiele

Sie können eine Reihe von Beispielen in unserem [webaudio-example Repo](https://github.com/mdn/webaudio-examples/) auf GitHub finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

### AudioContext

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundlagenkonzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Sound erstellen, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web-Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Kontrolle mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischen von Positionsaudio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spieleaudio mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): eine einfache Bibliothek zum Abspielen spezifischer Töne/Noten mit der Web Audio API.
- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audio-Bibliothek, die standardmäßig auf der [Web Audio API](https://webaudio.github.io/web-audio-api/) basiert und optional auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückfällt und weitere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliches Verkettungen von AudioNodes, Mixer-ähnliche Sendungen/Rückgaben, und mehr.
- [XSound](https://xsound.jp/): Web-Audio-API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahmen, usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung unter Verwendung der Web Audio API, um Videos und Audios von verschiedenen Quellen aufzunehmen und in einer einzigen Datei zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

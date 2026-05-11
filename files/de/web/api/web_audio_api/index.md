---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Sie ermöglicht es Entwicklern, Audioquellen auszuwählen, Effekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) anzuwenden und vieles mehr.

## Konzepte und Nutzung der Web Audio API

Die Web Audio API umfasst die Verarbeitung von Audiooperationen innerhalb eines **audio context**, und sie wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **audio nodes** durchgeführt, die miteinander verknüpft werden, um einen **audio routing graph** zu bilden. Mehrere Quellen – mit unterschiedlichen Arten von Kanal-Layouts – werden sogar innerhalb eines einzelnen Kontexts unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audionoten werden durch ihre Eingänge und Ausgänge zu Ketten und einfachen Netzen verbunden. Sie beginnen in der Regel mit einer oder mehreren Quellen. Quellen liefern Arrays von Samples – Messungen der Amplitude des Audiosignals zu aufeinanderfolgenden Zeitpunkten – oft zehntausende pro Sekunde. Diese können entweder mathematisch berechnet werden (wie [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder sie können Aufnahmen von Sound-/Videodateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) und Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Audiodateien lediglich Aufnahmen der Tonintensitäten selbst, die von Mikrofonen oder elektrischen Instrumenten aufgenommen und zu einer einzigen, komplizierten Welle gemischt werden.

Ausgänge dieser Knoten können mit Eingängen anderer Knoten verbunden werden, die diese Streams von Tonsamples zu unterschiedlichen Streams mischen oder modifizieren. Eine häufige Modifikation besteht darin, die Samples mit einem Wert zu multiplizieren, um sie lauter oder leiser zu machen (wie beim [`GainNode`](/de/docs/Web/API/GainNode)). Sobald der Ton ausreichend für den beabsichtigten Effekt verarbeitet wurde, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Ton an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Workflow für Webaudio könnte etwa so aussehen:

1. Erstellen Sie einen Audiokontext.
2. Innerhalb des Kontexts Quellen erstellen – wie `<audio>`, Oszillator, Stream.
3. Effektknoten wie Hall, Biquad-Filter, Panner, Kompressor erstellen.
4. Wählen Sie das endgültige Ziel des Audios, zum Beispiel Ihre Systemlautsprecher.
5. Verbinden Sie die Quellen mit den Effekten und die Effekte mit dem Ziel.

![Ein einfaches Box-Diagramm mit einer äußeren Box, die als Audiokontext beschriftet ist, und drei inneren Boxen, die als Quellen, Effekte und Ziel beschriftet sind. Die drei inneren Boxen haben Pfeile dazwischen, die von links nach rechts zeigen und den Fluss von Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz kontrolliert, was es Entwicklern ermöglicht, Code zu schreiben, der genau auf Ereignisse reagiert und in der Lage ist, spezifische Samples anzusprechen, selbst bei einer hohen Abtastrate. Anwendungen wie Drum Machines und Sequencer sind somit in Reichweite.

Die Web Audio API ermöglicht auch die Kontrolle darüber, wie Audio _räumlich dargestellt_ wird. Basierend auf einem _Quelle-Hörer-Modell_ erlaubt sie die Kontrolle des _Panning-Modells_ und behandelt _entfernungsbedingte Dämpfung_, die durch eine bewegte Quelle (oder einen bewegten Hörer) hervorgerufen wird.

> [!NOTE]
> Sie können mehr über die Theorie der Web Audio API in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) lesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann auf den ersten Blick einschüchternd wirken, besonders für diejenigen, die nicht vertraut mit Audio- oder Musikterminen sind. Aufgrund der Vielzahl an Funktionen kann es für Entwickler schwierig sein, den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem z. B. [eine Atmosphäre wie auf futurelibrary.no bereitgestellt wird](https://www.futurelibrary.no/) oder [akustisches Feedback bei Formularen](https://css-tricks.com/form-validation-web-audio/). Sie kann jedoch auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. Mit diesem Gedanken ist sie sowohl für Entwickler als auch für Musiker geeignet.

Wir haben ein [einfaches einführendes Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit dem Programmieren vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), um Ihnen zu helfen, zu verstehen, wie digitale Audiofunktioniert, insbesondere im Bereich der API. Dies beinhaltet auch eine gute Einführung in einige der Konzepte, auf denen die API aufbaut.

Programmieren zu lernen ist wie Kartenspielen – man lernt die Regeln, dann spielt man, dann geht man zurück und lernt die Regeln erneut, dann spielt man wieder. Wenn also die Theorie nach dem ersten Tutorial und Artikel nicht ganz greift, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert und Ihnen hilft, das Gelernte zu üben und einige fortgeschrittene Techniken anzuwenden, um einen Step-Sequencer zu erstellen.

Wir haben auch andere Tutorials und umfassende Referenzmaterialien, die alle Funktionen der API abdecken. Sehen Sie die Seitenleiste auf dieser Seite für mehr.

Wenn Sie sich mehr mit der musikalischen Seite der Dinge auskennen, mit den Konzepten der Musiktheorie vertraut sind und anfangen möchten, Instrumente zu bauen, dann können Sie mit dem fortgeschrittenen Tutorial und anderen als Leitfaden direkt loslegen (das oben verlinkte Tutorial behandelt das Planen von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie ein LFO und andere Dinge).

Wenn Sie mit den Grundlagen der Programmierung nicht vertraut sind, sollten Sie möglicherweise zuerst einige JavaScript-Tutorials für Anfänger konsultieren und dann hierher zurückkommen – siehe unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn_web_development/Core/Scripting) als einen großartigen Ausgangspunkt.

## Schnittstellen der Web Audio API

Die Web Audio API verfügt über mehrere Schnittstellen und zugehörige Ereignisse, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition des Audiografen

Allgemeine Container und Definitionen, die Audiografen in der Nutzung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle repräsentiert einen Audiobearbeitungsgraphen, der aus Audio-Modulen aufgebaut ist, die miteinander verknüpft sind, wobei jedes von einem [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt wird. Ein Audiokontext steuert die Erstellung der Knoten, die er enthält, und die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontexts passiert.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audiobearbeitungsmodul wie eine _Audioquelle_ (z.B. ein HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), einen _Audioausgang_, ein _Zwischenbearbeitungsmodul_ (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)) oder eine _Lautstärkeregelung_ wie der [`GainNode`](/de/docs/Web/API/GainNode).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen audio-bezogenen Parameter, wie einen von einem [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen bestimmten Wert oder eine Wertänderung gesetzt und so geplant werden, dass er zu einer bestimmten Zeit und mit einem bestimmten Muster erfolgt.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine kartenähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass sie die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bereitstellt.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle dient als Basisdefinition für Online- und Offline-Audiobearbeitungsgraphen, wie sie von [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) repräsentiert werden. Sie würden `BaseAudioContext` nicht direkt verwenden - Sie würden seine Funktionen über eine dieser beiden ererbten Schnittstellen nutzen.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen für die Nutzung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für mehrere Typen von Audiosource-Node-Schnittstellen. Er ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle stellt eine periodische Wellenform dar, die Sinus, Quadrat, Sägezahn, Dreieck oder benutzerdefiniert sein kann. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine gegebene _Frequenz_ der Welle erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle stellt ein kurzes Audiodateiobjekt im Speicher dar, das mit der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) aus einer Audiodatei erstellt wurde, oder mit Rohdaten mit [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer). Sobald es in diese Form dekodiert ist, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) platziert werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus im Speicher gespeicherten Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML {{ htmlelement("audio") }} oder {{ htmlelement("video") }} Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) (wie einer Webcam, einem Mikrofon oder einem Stream, der von einem entfernten Computer gesendet wird), besteht. Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikografisch (alphabetisch) zuerst kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audioquelle, deren Daten aus einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Wenn Sie den Knoten mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) erstellen, geben Sie an, welchen Track Sie verwenden möchten. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die auf Audioquellen angewendet werden sollen.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Niedrigordnungsfilter. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Tonkontrollgeräten oder Grafik-Equalizern darstellt. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und oft verwendet wird, um einen Halleffekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://de.wikipedia.org/wiki/Digitale_Verz%C3%B6gerungsleitung); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingangsdaten und ihrer Ausbreitung an den Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der das Volumen der lautesten Teile des Signals verringert, um Clipping und Verzerrung zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und gemultiplext werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Lautstärkenänderung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine bestimmte _Verstärkung_ auf die Eingabedaten anwendet, bevor diese an den Ausgang weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nicht-linearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Wellenshaping-Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird häufig verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [unendlichen Impulsantwortfilter](https://de.wikipedia.org/wiki/Unendlicher_Impulsantwortfilter) (IIR); dieser Filtertyp kann verwendet werden, um Tonkontrollgeräte und Grafik-Equalizer zu implementieren.

### Definition von Audioausgängen

Wenn Sie mit der Verarbeitung Ihres Audios fertig sind, definieren diese Schnittstellen, wohin es ausgegeben wird.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle in einem gegebenen Kontext - üblicherweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht, der ähnlich wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und Visualisierung

Schnittstellen zum Extrahieren von Statistiken aus Audiografen, zu Zwecken der Datenanalyse und Visualisierung.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Frequenz- und Zeitdomänenanalyseinformationen bereitzustellen.
- [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)
  - : Bietet Zugriff auf Dauer-, Unterbrechungs- und Latenzstatistiken für den zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Diese Statistiken ermöglichen es, Audiolatenz und Aussetzer zu messen.

### Audio-Kanäle aufteilen und zusammenführen

Um Audio-Kanäle aufzuspalten und zu verbinden, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_-Ausgängen auf.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereinigt verschiedene Monoeingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Räumlichkeit

Diese Schnittstellen ermöglichen es Ihnen, Audio-Panning-Effekte auf Ihre Audioquellen anzuwenden.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Ausrichtung der einzigartigen Person, die dem Audiobild zuhört, das in der audio-räumlichen Darstellung verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audiosignalquelle in einem dreidimensionalen Raum, wodurch Sie komplexe Panning-Effekte erstellen können.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereo-Panner-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu pannen.

### Audiobearbeitung in JavaScript

Mit Audio-Worklets können Sie benutzerdefinierte Audio-Knoten in JavaScript oder [WebAssembly](/de/docs/WebAssembly) schreiben. Audio-Worklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichtgewichtige Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht es Ihnen, Module zu dem Audio-Worklet hinzuzufügen, die außerhalb des Hauptthreads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einem Audiobild eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audiobearbeitungscode, der in einem `AudioWorkletGlobalScope` läuft, der Audio direkt generiert, verarbeitet oder analysiert und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein von `WorkletGlobalScope` abgeleitetes Objekt, das einen Worker-Kontext repräsentiert, in dem ein Audiodatenverarbeitungsskript ausgeführt wird; es ist so konzipiert, dass es die Erzeugung, Verarbeitung und Analyse von Audiodaten direkt mit JavaScript in einem Worklet-Thread ermöglicht, anstatt im Hauptthread.

#### Veraltet: Script-Prozessorknoten

Bevor Audio-Worklets definiert wurden, verwendete die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Hauptthread läuft, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle erlaubt die Generierung, Verarbeitung oder Analyse von Audio mithilfe von JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das mit zwei Puffern verknüpft ist, von denen einer den aktuellen Eingang und der andere den Ausgang enthält. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird bei jedem neuen Dateninhalt des Eingabepuffers an das Objekt gesendet, und der Ereignishandler wird beendet, wenn der Ausgabe-Puffer mit Daten gefüllt ist.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) zur Bearbeitung bereit ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Eingabepuffer zur Bearbeitung bereit ist.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audiographen sehr schnell im Hintergrund zu verarbeiten/rendern – ihn in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt ihn an die Lautsprecher des Geräts auszugeben – mit den folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audiobearbeitungsgraphen repräsentiert, der aus verknüpften [`AudioNode`](/de/docs/Web/API/AudioNode)s gebaut ist. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern generiert es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendern eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{SubpagesWithSummaries}}

## Beispiele

Sie finden eine Reihe von Beispielen in unserem [webaudio-examples-Repo](https://github.com/mdn/webaudio-examples/) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Erstellung von Klang, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Multimedia- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Audiowiedergabe](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischung von Position Audio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spielesound mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tone.js](https://tonejs.github.io/): ein Rahmen für die Kreation interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): Eine JS-Audiobibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) verwendet und auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückgreift, sowie andere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliche Verkettung von AudioNodes, Mixerstil-Sendungen/Rücksendungen und mehr.
- [XSound](https://xsound.jp/): Web Audio API Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme, etc.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachlabor-Webanwendung, die die Web Audio API verwendet, um Video und Audio von verschiedenen Quellen zu einem einzelnen File zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Visualisierung von Web Audio ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Multimedia-Technologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)

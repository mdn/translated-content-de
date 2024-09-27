---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsfähiges und vielseitiges System zur Steuerung von Audio im Web. Sie ermöglicht es Entwicklern, Audiodateien auszuwählen, Effekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie das Panning) anzuwenden und vieles mehr.

## Web-Audio-Konzepte und Verwendung

Die Web Audio API umfasst die Verarbeitung von Audiooperationen innerhalb eines **audio context** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **audio nodes** durchgeführt, die miteinander verbunden werden, um einen **audio routing graph** zu bilden. Mehrere Quellen – mit unterschiedlichen Arten von Kanalaufstellungen – werden selbst innerhalb eines einzelnen Kontextes unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten werden durch ihre Eingaben und Ausgaben zu Ketten und einfachen Netzen verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitschnitten, oft zehntausende pro Sekunde. Diese können entweder mathematisch berechnet werden (wie der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)) oder Aufnahmen von Ton-/Videodateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) und Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Tondateien einfach Aufnahmen der Schallintensitäten selbst, die von Mikrofonen oder elektrischen Instrumenten stammen und zu einer einzigen, komplizierten Welle zusammengeführt werden.

Ausgänge dieser Knoten könnten mit Eingaben anderer verbunden werden, die diese Streams von Tonsamples in verschiedene Streams mischen oder modifizieren. Eine häufige Modifikation ist das Multiplizieren der Samples mit einem Wert, um sie lauter oder leiser zu machen (wie beim [`GainNode`](/de/docs/Web/API/GainNode)). Sobald der Ton ausreichend für den beabsichtigten Effekt bearbeitet wurde, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, der den Ton an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Arbeitsablauf für Web-Audio könnte so aussehen:

1. Erstellen Sie einen Audio-Kontext
2. Erstellen Sie innerhalb des Kontexts Quellen – wie `<audio>`, Oszillator, Stream
3. Erstellen Sie Effekt-Knoten, wie Hall, Biquad-Filter, Panner, Kompressor
4. Wählen Sie das endgültige Ziel des Audios, zum Beispiel Ihre Systemlautsprecher
5. Verbinden Sie die Quellen mit den Effekten und die Effekte mit dem Ziel.

![Ein einfaches Box-Diagramm mit einer äußeren Box beschriftet als Audio-Kontext und drei inneren Boxen beschriftet als Quellen, Effekte und Ziel. Die drei inneren Boxen haben Pfeile dazwischen, die von links nach rechts zeigen und den Fluss der Audioinformation anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und geringer Latenz gesteuert, was es Entwicklern ermöglicht, Code zu schreiben, der genau auf Ereignisse reagiert und in der Lage ist, spezifische Samples auch bei einer hohen Samplerate gezielt anzusprechen. Anwendungen wie Drum Machines und Sequenzer sind damit leicht erreichbar.

Die Web Audio API ermöglicht es uns auch, die _Räumlichkeit_ von Audio zu steuern. Mit einem System, das auf einem _Quell-Hörer-Modell_ basiert, erlaubt sie die Kontrolle über das _Panning-Modell_ und befasst sich mit der _Entfernungsdämpfung_, die durch eine bewegte Quelle (oder einen bewegten Hörer) verursacht wird.

> [!NOTE]
> Sie können mehr über die Theorie der Web Audio API in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) lesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann für diejenigen, die mit Audio- oder Musikbegriffen nicht vertraut sind, einschüchternd wirken, und da sie eine große Funktionalität umfasst, kann es schwierig sein, als Entwickler den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem sie [Atmosphäre bereitstellt wie futurelibrary.no](https://www.futurelibrary.no/) oder [akustisches Feedback in Formularen](https://css-tricks.com/form-validation-web-audio/). Darüber hinaus kann sie verwendet werden, um _fortschrittliche_ interaktive Instrumente zu erstellen. Mit diesem Gedanken im Hinterkopf ist sie sowohl für Entwickler als auch für Musiker geeignet.

Für diejenigen, die sich mit Programmierung auskennen, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen, haben wir ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Es gibt auch einen Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen hilft zu verstehen, wie digitale Audioarbeit funktioniert, speziell im Bereich der API. Dieser enthält auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Das Lernen von Programmierung ist wie Kartenspielen – man lernt die Regeln, dann spielt man, geht dann zurück und lernt die Regeln erneut, dann spielt man wieder. Wenn also einige Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben und einige fortgeschrittenere Techniken anzuwenden, um einen Schrittsequencer zu bauen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial, das alle Funktionen der API abdeckt. Weitere Informationen finden Sie in der Seitenleiste auf dieser Seite.

Wenn Sie mit der musikalischen Seite vertrauter sind, Konzepte der Musiktheorie kennen, Instrumente bauen möchten, dann können Sie mit dem fortgeschrittenen Tutorial und anderen als Leitfaden direkt loslegen (das oben verlinkte Tutorial behandelt die Planung von Noten, die Erstellung maßgeschneiderter Oszillatoren und Hüllkurven sowie ein LFO unter anderem).

Wenn Sie mit den Programmiergrundlagen nicht vertraut sind, möchten Sie vielleicht zunächst einige JavaScript-Tutorials für Anfänger zu Rate ziehen und dann hierher zurückkommen – sehen Sie sich unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn/JavaScript) an, um einen großartigen Ausgangspunkt zu finden.

## Schnittstellen der Web Audio API

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien aufgeteilt haben.

### Allgemeine Audiograf-Definition

Allgemeine Container und Definitionen, die Audiografen in der Verwendung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle stellt einen Audioprozessgrafen dar, der aus miteinander verbundenen Audiomodulen erstellt wird, von denen jedes durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert wird. Ein Audiokontext steuert die Erstellung der darin enthaltenen Knoten und die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontexts passiert.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle stellt ein Audiobearbeitungsmodul wie eine _Audioquelle_ (z. B. ein HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), _Audioziel_, _Zwischenbearbeitungsmodul_ (z. B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)) dar.
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle stellt einen audiobezogenen Parameter wie einen von einem [`AudioNode`](/de/docs/Web/API/AudioNode) dar. Es kann auf einen bestimmten Wert oder eine Wertänderung gesetzt und geplant werden, um zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster zu erfolgen.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine kartenähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass es die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bereitstellt.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle fungiert als Basisdefinition für Online- und Offline-Audiobearbeitungsgrafen, die jeweils durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) repräsentiert werden. Sie würden `BaseAudioContext` nicht direkt verwenden – Sie würden seine Funktionen über eine dieser beiden erbenden Schnittstellen verwenden.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
  - : Das `ended` Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wird, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen für die Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine Eltern-Schnittstelle für mehrere Arten von Audioquellenknoten-Interfaces. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle stellt eine periodische Wellenform dar, wie eine Sinus- oder Dreieckswelle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine bestimmte _Frequenz_ von Wellenschwingungen erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle stellt ein kurzes Audio-Asset dar, das im Speicher residiert, erstellt aus einer Audiodatei mit der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) oder mit Rohdaten mit [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt. Sobald es in dieser Form dekodiert ist, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingesetzt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus im Speicher befindlichen Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus einem HTML {{ htmlelement("audio") }} oder {{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) (wie einer Webcam, einem Mikrofon oder einem Stream, der von einem entfernten Computer gesendet wird) besteht. Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikographisch (alphabetisch) zuerst kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) stellt eine Audioquelle dar, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Knotens mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) um den Knoten zu erstellen, geben Sie an, welcher Track verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle stellt einen einfachen Tiefenfilter dar. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Tonkontrollgeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und häufig verwendet wird, um einen Halleffekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://de.wikipedia.org/wiki/Verzögerungsleitung); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingabedaten und deren Weiterleitung zum Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um Übersteuern und Verzerrungen zu verhindern, die auftreten können, wenn mehrere Geräusche gleichzeitig abgespielt und zusammengeführt werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Änderung der Lautstärke. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das einen bestimmten _Gewinn_ auf die Eingabedaten anwendet, bevor sie zum Ausgang weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle stellt einen nichtlinearen Verzerrer dar. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Wellengestaltungsverzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um den Ausgang eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [unendlichen Impulsantwort](https://de.wikipedia.org/wiki/Infinite_Impulse_Response)-Filter (IIR); dieser Filtertyp kann verwendet werden, um Tonkontrollgeräte und grafische Equalizer zu implementieren.

### Definition von Audiozielen

Sobald Sie die Bearbeitung Ihres Audios abgeschlossen haben, definieren diese Schnittstellen, wohin es ausgegeben wird.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle stellt das endgültige Ziel einer Audioquelle in einem bestimmten Kontext dar – normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle stellt ein Audioziel dar, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht, der ähnlich verwendet werden kann wie ein [`MediaStream`](/de/docs/Web/API/MediaStream), der aus [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und Visualisierung

Wenn Sie Zeit-, Frequenz- und andere Daten aus Ihrem Audio extrahieren möchten, ist der `AnalyserNode` das, was Sie benötigen.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle stellt einen Knoten dar, der in der Lage ist, Echtzeit-Frequenz- und Zeitbereichsanalyseinformationen bereitzustellen, zum Zwecke der Datenanalyse und Visualisierung.

### Aufteilen und Zusamenführen von Audiokanälen

Um Audiokanäle aufzuteilen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_-Ausgängen auf.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle fügt verschiedene Monoeingaben in einen einzigen Ausgang zusammen. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Räumlichkeit

Diese Schnittstellen ermöglichen es Ihnen, Audio-Räumlichkeitseffekte und Panning-Effekte auf Ihre Audioquellen anzuwenden.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle stellt die Position und Orientierung der einzigartigen Person dar, die in der Audio-Räumlichkeit den Lautstärkepegel hört.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audioquellensignals im 3D-Raum, sodass Sie komplexe Panning-Effekte erstellen können.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle stellt einen einfachen Stereo-Panner-Knoten dar, der verwendet werden kann, um einen Audiostream nach links oder rechts zu schwenken.

### Audiobearbeitung in JavaScript

Unter Verwendung von Audioworklets können Sie benutzerdefinierte Audio-Knoten definieren, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind. Audioworklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichtgewichtige Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das `AudioContext`-Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) zugänglich und ermöglicht es, Module zum Audioworklet hinzuzufügen, die außerhalb des Haupt-Threads ausgeführt werden sollen.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle stellt einen [`AudioNode`](/de/docs/Web/API/AudioNode) dar, der in einen Audiograf eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` weiterleiten kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle stellt Audiobearbeitungscode dar, der im `AudioWorkletGlobalScope` ausgeführt wird und Audio direkt generieren, verarbeiten oder analysieren kann und Nachrichten an den entsprechenden `AudioWorkletNode` weiterleiten kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein von `WorkletGlobalScope` abgeleitetes Objekt, das einen Worker-Kontext darstellt, in dem ein Audiobearbeitungsskript ausgeführt wird; sie soll die Generierung, Verarbeitung und Analyse von Audiodaten direkt mit JavaScript in einem Worklet-Thread und nicht im Haupt-Thread ermöglichen.

#### Veraltet: Skriptprozessor-Knoten

Bevor Audioworklets definiert wurden, verwendete die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Haupt-Thread läuft, haben sie eine schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Generierung, Verarbeitung oder Analyse von Audio unter Verwendung von JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das mit zwei Puffern verknüpft ist, einer mit den aktuellen Eingabedaten und einer mit den Ausgabedaten. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird an das Objekt jedes Mal gesendet, wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler endet, wenn der Ausgabepuffer mit Daten gefüllt ist.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) zur Verarbeitung bereit ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` stellt Ereignisse dar, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Eingabepuffer zur Verarbeitung bereit ist.

### Offline-Hintergrund-Audiobearbeitung

Es ist möglich, ein Audiograf sehr schnell im Hintergrund zu verarbeiten/rendern – es in ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt es an die Lautsprecher des Geräts zu senden – mit dem folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audioprozessgrafen darstellt, der aus miteinander verbundenen [`AudioNode`](/de/docs/Web/API/AudioNode)s erstellt wird. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern generiert es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` stellt Ereignisse dar, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{LandingPageListSubpages}}

## Beispiele

Sie finden eine Reihe von Beispielen in unserem [Webaudio-Example-Repo](https://github.com/mdn/webaudio-examples/) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

### AudioContext

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Erstellen von Ton, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Anleitung für Media- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web Audio Raumklang](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischung von Positionsaudio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spielaudio mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): eine einfache Bibliothek zum Abspielen bestimmter Töne/Noten mit der Web Audio API.
- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audio-Bibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) verwendet und bei Bedarf auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückfällt, und bietet außerdem andere nützliche Funktionen.
- [Mooog](https://github.com/mattlima/mooog): jQuery-Style-Verkettung von AudioNodes, Mixer-Style-Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung, die die Web Audio API verwendet, um Video und Audio von verschiedenen Quellen in eine einzige Datei aufzunehmen und zu kombinieren ([Quellcode auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

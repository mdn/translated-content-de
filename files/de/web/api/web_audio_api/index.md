---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web-Audio-API bietet ein leistungsfähiges und vielseitiges System zur Steuerung von Audio im Web. Es erlaubt Entwicklern, Audioquellen auszuwählen, Effekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) anzuwenden und vieles mehr.

## Konzepte und Nutzung der Web-Audio

Die Web-Audio-API beinhaltet die Handhabung von Audiooperationen innerhalb eines **Audio-Kontextes** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Mehrere Quellen — mit unterschiedlichen Kanal-Layouts — werden sogar innerhalb eines einzigen Kontextes unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu schaffen.

Audio-Knoten sind über ihre Eingänge und Ausgänge in Ketten und einfache Netzwerke verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitabschnitten, häufig Zehntausende pro Sekunde. Diese können entweder mathematisch berechnet werden (wie [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder es können Aufnahmen aus Ton-/Video-Dateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) sowie Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Tondateien nur Aufnahmen von Schallintensitäten, die aus Mikrofonen oder elektrischen Instrumenten stammen und zu einer einzigen, komplexen Welle gemischt werden.

Die Ausgänge dieser Knoten können mit den Eingängen anderer verbunden werden, die diese Sound-Stream-Samples zu unterschiedlichen Strömen mischen oder modifizieren. Eine häufige Modifikation ist die Multiplikation der Samples durch einen Wert, um sie lauter oder leiser zu machen (wie beim [`GainNode`](/de/docs/Web/API/GainNode)). Sobald der Sound ausreichend für den gewünschten Effekt verarbeitet wurde, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Sound an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Arbeitsablauf für Web-Audio könnte folgendermaßen aussehen:

1. Erstellen eines Audiokontextes
2. Erstellen von Quellen innerhalb des Kontextes — wie `<audio>`, Oszillator, Stream
3. Erstellen von Effektknoten, wie Hall, Biquad-Filter, Panner, Kompressor
4. Auswahl des endgültigen Ziels des Audios, zum Beispiel Ihre Lautsprechersysteme
5. Verbinden der Quellen mit den Effekten und der Effekte mit dem Ziel.

![Ein einfaches Kastendiagramm mit einem äußeren Kasten mit der Bezeichnung Audio-Kontext und drei inneren Kästen mit den Bezeichnungen Quellen, Effekte und Ziel. Die drei inneren Kästen haben Pfeile zwischen sich, die von links nach rechts zeigen und den Fluss der Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz gesteuert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, sich auf bestimmte Samples zu konzentrieren, selbst bei einer hohen Abtastrate. Anwendungen wie Drum-Machines und Sequencer liegen daher gut im Bereich des Möglichen.

Die Web-Audio-API ermöglicht auch die Kontrolle darüber, wie Audio _räumlich positioniert_ wird. Mit einem System basierend auf einem _Quellen-Hörer-Modell_ erlaubt es die Kontrolle des _Panning-Modells_ und befasst sich mit der durch eine sich bewegende Quelle (oder sich bewegenden Hörer) induzierten _Distanz-bedingten Dämpfung_.

> [!NOTE]
> Sie können in unserem Artikel [Grundlegende Konzepte hinter der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) sehr viel detaillierter über die Theorie der Web-Audio-API lesen.

## Zielgruppe der Web Audio API

Die Web-Audio-API kann einschüchternd wirken für diejenigen, die mit Audio- oder Musikbegriffen nicht vertraut sind. Da sie ein breites Spektrum an Funktionen umfasst, kann es für einen Entwickler schwierig sein, den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Webseite oder Anwendung einzubinden, etwa [um die Atmosphäre wie futurelibrary.no bereitzustellen](https://www.futurelibrary.no/) oder [auditive Rückmeldungen bei Formularen](https://css-tricks.com/form-validation-web-audio/) zu geben. Sie kann jedoch auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. Mit diesen Möglichkeiten im Hinterkopf ist die API sowohl für Entwickler als auch für Musiker geeignet.

Wir bieten ein [einfaches Einführungs-Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit Programmieren vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel über [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), um Ihnen zu helfen, zu verstehen, wie digitale Audio funktioniert, speziell im Bereich der API. Dies beinhaltet auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Das Erlernen von Programmierung ist wie Kartenspielen — Sie lernen die Regeln, dann spielen Sie, dann gehen Sie zurück und lernen die Regeln erneut, dann spielen Sie wieder. Wenn einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernt zu üben und einige fortschrittlichere Techniken anzuwenden, um einen Step-Sequencer zu bauen.

Wir haben auch weitere Tutorials und umfangreiche Referenzmaterialien verfügbar, die alle Funktionen der API abdecken. Siehe die Seitenleiste auf dieser Seite für mehr.

Wenn Sie mit der musikalischen Seite der Dinge vertrauter sind, die Konzepte der Musiktheorie kennen und beginnen möchten, Instrumente zu bauen, dann können Sie direkt loslegen und mit dem fortgeschrittenen Tutorial und anderen als Leitfaden Dinge erstellen (das oben verlinkte Tutorial behandelt die Planung von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie eines LFOs unter anderem).

Sollten Sie mit den grundlegenden Programmierkenntnissen nicht vertraut sein, könnten Sie einige JavaScript-Einführungstutorials zuerst konsultieren und dann hierher zurückkommen — siehe unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn/JavaScript) für einen großartigen Einstiegspunkt.

## Schnittstellen der Web Audio API

Die Web-Audio-API bietet eine Vielzahl von Schnittstellen und zugehörigen Ereignissen, die in neun Funktionskategorien aufgeteilt sind.

### Allgemeine Definition des Audio-Graphen

Allgemeine Container und Definitionen, die Audio-Graphen bei der Nutzung der Web-Audio-API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die Schnittstelle **`AudioContext`** repräsentiert einen Audiobearbeitungsgraphen, der aus miteinander verbundenen Audiomodulen besteht, die jeweils durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt werden. Ein Audiokontext steuert die Erstellung der darin enthaltenen Knoten und die Durchführung der Audiobearbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontextes geschieht.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die Schnittstelle **`AudioNode`** repräsentiert ein Audiobearbeitungsmodul wie eine _Audioquelle_ (z. B. ein HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element), _Audioziel_, _Zwischenbearbeitungsmodul_ (z. B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), oder _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die Schnittstelle **`AudioParam`** repräsentiert einen audiobezogenen Parameter, wie einen eines [`AudioNode`](/de/docs/Web/API/AudioNode). Sie kann auf einen spezifischen Wert gesetzt werden oder eine Veränderung des Wertes, und kann so geplant werden, dass dies zu einem spezifischen Zeitpunkt und nach einem spezifischen Muster geschieht.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine Map-ähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass sie die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bereitstellt.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die Schnittstelle **`BaseAudioContext`** fungiert als Grunddefinition für Online- und Offline-Audiobearbeitungsgraphen, wie durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt. Sie würden `BaseAudioContext` nicht direkt verwenden — Sie würden seine Funktionen über eine dieser beiden vererbenden Schnittstellen nutzen.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)-Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen zur Definition von Audioquellen für die Verwendung in der Web-Audio-API.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine Hauptschnittstelle für mehrere Arten von Audioknoten-Schnittstellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die Schnittstelle **`OscillatorNode`** repräsentiert eine periodische Wellenform, wie eine Sinus- oder Dreiecks-Welle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine bestimmte _Frequenz_ von Wellen erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die Schnittstelle **`AudioBuffer`** repräsentiert eine kurze Audioquelle, die im Speicher gespeichert ist, die aus einer Audiodatei unter Verwendung der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) erstellt wird, oder mit Rohdaten unter Verwendung von [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer). Einmal in dieser Form dekodiert, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingespeist werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die Schnittstelle **`AudioBufferSourceNode`** repräsentiert eine Audioquelle, die im Speicher gespeichert ist und in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert ist. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die Schnittstelle **`MediaElementAudioSourceNode`** repräsentiert eine Audioquelle, die aus einem HTML-{{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die Schnittstelle **`MediaStreamAudioSourceNode`** repräsentiert eine Audioquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) (wie einer Webcam, einem Mikrofon oder einem von einem entfernten Computer gesendeten Stream) besteht. Wenn im Stream mehrere Audiotracks vorhanden sind, wird derjenige, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikografisch (alphabetisch) zuerst kommt, verwendet. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audioquelle, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Knotens mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) zur Erstellung des Knotens geben Sie an, welcher Track verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffekt-Filtern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die Schnittstelle **`BiquadFilterNode`** repräsentiert einen einfachen Tiefordnungsfilter. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Tonregelgeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die Schnittstelle **`ConvolverNode`** ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einen gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und häufig verwendet wird, um einen Halleffekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die Schnittstelle **`DelayNode`** repräsentiert eine [Verzögerungslinie](https://de.wikipedia.org/wiki/Verz%C3%B6gerungsleitungsfilter); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Empfang der Eingabedaten und ihrer Weiterleitung an den Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die Schnittstelle **`DynamicsCompressorNode`** bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um Clipping und Verzerrung zu verhindern, die auftreten können, wenn mehrere Klänge gleichzeitig gespielt und zusammengeführt werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die Schnittstelle **`GainNode`** repräsentiert eine Veränderung der Lautstärke. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das einen bestimmten _Gewinn_ auf die Eingabedaten anwendet, bevor sie an den Ausgang weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die Schnittstelle **`WaveShaperNode`** repräsentiert einen nichtlinearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Waveshaping-Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die zur Gestaltung des Ausgangs eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) verwendet werden kann.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert ein allgemeines [Infinite Impulse Response](https://de.wikipedia.org/wiki/Infinite_Impulse_Response)-Filter (IIR); dieser Filtertyp kann verwendet werden, um Tonregelgeräte und grafische Equalizer zu implementieren.

### Definition von Audiozielen

Sobald Sie mit der Audiobearbeitung fertig sind, definieren diese Schnittstellen, wohin der Ausgang gehen soll.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die Schnittstelle **`AudioDestinationNode`** repräsentiert das endgültige Ziel einer Audioquelle in einem gegebenen Kontext — normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die Schnittstelle **`MediaStreamAudioDestinationNode`** repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API)-[`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht, der ähnlich wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und -visualisierung

Wenn Sie Zeit, Frequenz und andere Daten aus Ihrem Audio extrahieren möchten, benötigen Sie den `AnalyserNode`.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die Schnittstelle **`AnalyserNode`** repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Frequenz- und Zeitbereichsanalyseinformationen bereitzustellen, für Datenanalyse- und Visualisierungszwecke.

### Aufteilen und Zusammenführen von Audiokanälen

Um Audiokanäle zu teilen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die Schnittstelle **`ChannelSplitterNode`** trennt die verschiedenen Kanäle einer Audioquelle in ein Set von _Mono_-Ausgängen auf.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die Schnittstelle **`ChannelMergerNode`** vereint verschiedene Mono-Eingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Räumlicheffekte

Diese Schnittstellen ermöglichen es Ihnen, räumliche Panning-Effekte auf Ihre Audioquellen anzuwenden.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die Schnittstelle **`AudioListener`** repräsentiert die Position und Orientierung der einzigartigen Person, die die Audioumgebung im Rahmen der Audio-Räumlichkeitsfunktion hört.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die Schnittstelle **`PannerNode`** repräsentiert die Position und das Verhalten eines Audioquellensignals im 3D-Raum und ermöglicht es, komplexe Panning-Effekte zu erstellen.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die Schnittstelle **`StereoPannerNode`** repräsentiert einen einfachen Stereopan-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu pannen.

### Audiobearbeitung in JavaScript

Mit Audio-Arbeitsmodulen können Sie benutzerdefinierte Audioknoten schreiben, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind. Audio-Arbeitsmodule implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichtgewichtige Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht es, Module zur Audio-Arbeitsmodul-Hauptdatei hinzuzufügen, die außerhalb des Hauptthreads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einen Audiographen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audiobearbeitungscode, der im `AudioWorkletGlobalScope` ausgeführt wird, der Audio direkt generiert, verarbeitet oder analysiert und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-abgeleitetes Objekt, das einen Worker-Kontext repräsentiert, in dem ein Audiobearbeitungsskript ausgeführt wird; es ist so konzipiert, dass die Generierung, Verarbeitung und Analyse von Audiodaten direkt mit JavaScript in einem Arbeitsmodul-Thread anstelle des Hauptthreads ermöglicht wird.

#### Veraltet: Skriptprozessor-Knoten

Bevor Audio-Arbeitsmodule definiert wurden, verwendete die Web-Audio-API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Hauptthread ausgeführt wird, haben sie eine schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet gekennzeichnet.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die Schnittstelle **`ScriptProcessorNode`** ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mit JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das mit zwei Puffern verbunden ist, ein Puffer enthält die aktuelle Eingabe, ein anderer den Ausgabe. Ein Ereignis unter der Implementierung der [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle wird an das Objekt gesendet, jedes Mal, wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler beendet, wenn es den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web-Audio-API-`ScriptProcessorNode` verarbeitet werden kann.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein Eingabepuffer eines `ScriptProcessorNode` verarbeitet werden kann.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audio-Graphen sehr schnell im Hintergrund zu verarbeiten/rendrieren — hin zu einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) anstatt zu den Lautsprechern des Geräts — mit den folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die Schnittstelle **`OfflineAudioContext`** ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audiobearbeitungsgraphen repräsentiert, der aus miteinander verbundenen [`AudioNode`](/de/docs/Web/API/AudioNode)s besteht. Im Gegensatz zu einem standardmäßigen `AudioContext`, rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern erzeugt es, _so schnell es geht_, in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendern von einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Bearbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{SubpagesWithSummaries}}

## Beispiele

Sie können eine Reihe von Beispielen in unserem [webaudio-examples-Repo](https://github.com/mdn/webaudio-examples/) auf GitHub finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Erstellen von Klängen, Sequenzen, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Leitfaden zur Autoplay-Funktion für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web-Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mixing von Positionalem Audio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spielegrafik mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): Eine einfache Bibliothek zur Wiedergabe spezifischer Töne/Noten mit der Web Audio API.
- [Tone.js](https://tonejs.github.io/): Ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): Eine JS-Audio-Bibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) nutzt und bei Bedarf auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückfällt und weitere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliches Ketten von AudioNodes, Mischpult-ähnliche Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web-Audio-API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachenlabor-Webanwendung, die die Web-Audio-API verwendet, um Video und Audio aus verschiedenen Quellen aufzunehmen und zu einer Datei zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

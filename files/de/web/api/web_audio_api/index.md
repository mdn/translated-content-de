---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 3157f78e4c4131d85ff82a4d4ab7d67e91c32b69
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web und ermöglicht es Entwicklern, Audioquellen auszuwählen, Effekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) anzuwenden und vieles mehr.

## Web-Audio-Konzepte und -Verwendung

Die Web Audio API umfasst das Verarbeiten von Audiooperationen innerhalb eines **Audio-Kontexts** und wurde so gestaltet, dass sie **modulares Routing** ermöglicht. Grundlegende Audiooperationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Mehrere Quellen — mit unterschiedlichen Kanal-Layouts — werden sogar in einem einzigen Kontext unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten werden durch ihre Eingänge und Ausgänge zu Ketten und einfachen Netzen verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitabschnitten, oft Zehntausende davon pro Sekunde. Diese können entweder mathematisch berechnet werden (wie z.B. der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)) oder es können Aufnahmen von Sound-/Videodateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) sowie Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Sounddateien nur Aufnahmen der Schallintensitäten selbst, die von Mikrofonen oder elektrischen Instrumenten kommen und zu einer einzigen, komplizierten Welle gemischt werden.

Ausgänge dieser Knoten können mit Eingängen anderer verbunden werden, die diese Ströme von Schallsamples mischen oder ändern, um verschiedene Ströme zu erzeugen. Eine häufige Modifikation besteht darin, die Samples mit einem Wert zu multiplizieren, um sie lauter oder leiser zu machen (wie im Fall von [`GainNode`](/de/docs/Web/API/GainNode)). Sobald der Klang für den beabsichtigten Effekt ausreichend verarbeitet wurde, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Klang an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Arbeitsablauf für Web-Audio sieht etwa so aus:

1. Audio-Kontext erstellen
2. Innerhalb des Kontexts Quellen erstellen — wie `<audio>`, Oszillator, Stream
3. Effekt-Knoten erstellen, wie Hall, Biquad-Filter, Panner, Kompressor
4. Endziel des Audios wählen, beispielsweise Ihre Systemlautsprecher
5. Quellen mit den Effekten und die Effekte mit dem Ziel verbinden.

![Ein einfaches Blockdiagramm mit einem äußeren Kasten, der als Audio-Kontext bezeichnet ist, und drei inneren Kästen, die als Quellen, Effekte und Zielmarkiert sind. Die drei inneren Kästen haben Pfeile zwischen sich, die von links nach rechts zeigen und den Fluss von Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz kontrolliert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, auf spezifische Samples zu zielen, selbst bei einer hohen Abtastrate. Anwendungen wie Drum Machines und Sequenzer sind damit durchaus erreichbar.

Die Web Audio API ermöglicht es uns auch, die _Spatialisation_ von Audio zu steuern. Basierend auf einem _Modell von Quelle und Zuhörer_ erlaubt es die Kontrolle des _Panning-Modells_ und behandelt die _durch Entfernung induzierte Abschwächung_, die durch eine sich bewegende Quelle (oder einen sich bewegenden Zuhörer) verursacht wird.

> [!NOTE]
> Sie können mehr über die Theorie der Web Audio API in unserem Artikel [Grundkonzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) erfahren.

## Zielgruppe der Web Audio API

Die Web Audio API kann einschüchternd wirken für diejenigen, die mit Audio- oder Musikbegriffen nicht vertraut sind, und da sie eine Vielzahl von Funktionalitäten enthält, kann es schwer sein, als Entwickler damit zu beginnen.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung einzufügen, etwa durch [Bereitstellung von Atmosphäre wie futurelibrary.no](https://www.futurelibrary.no/) oder [akustisches Feedback bei Formularen](https://css-tricks.com/form-validation-web-audio/). Sie kann jedoch auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. In diesem Sinne ist sie sowohl für Entwickler als auch für Musiker geeignet.

Für diejenigen, die mit Programmieren vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen, haben wir ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Es gibt auch einen Artikel [Grundlegende Konzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen hilft, zu verstehen, wie digitale Audioverarbeitung speziell im Bereich der API funktioniert. Dieser enthält auch eine gute Einführung in einige der Konzepte, auf denen die API aufgebaut ist.

Das Lernen von Programmierung ist wie das Erlernen von Kartenspielen — man lernt die Regeln, spielt, lernt die Regeln nochmal, spielt wieder. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben und einige fortgeschrittene Techniken anzuwenden, um einen Step-Sequencer zu erstellen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial, das alle Funktionen der API abdeckt. Weitere Informationen finden Sie in der Seitenleiste auf dieser Seite.

Wenn Sie mit den musikalischen Aspekten vertraut sind, mit Musikkonzepten vertraut sind, Instrumente erstellen möchten, können Sie direkt mit dem fortgeschrittenen Tutorial und anderen als Leitfaden beginnen (das oben verlinkte Tutorial behandelt das Planen von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie eines LFOs unter anderem).

Wenn Sie mit den Programmiergrundlagen nicht vertraut sind, möchten Sie vielleicht zuerst einige JavaScript-Tutorials für Anfänger konsultieren und dann hierher zurückkehren — unser [Lernmodul JavaScript für Anfänger](/de/docs/Learn_web_development/Core/Scripting) ist ein guter Ausgangspunkt.

## Schnittstellen der Web Audio API

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien aufgeteilt haben.

### Allgemeine Definition des Audio-Graphen

Allgemeine Container und Definitionen, die Audio-Graphen in der Verwendung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle repräsentiert einen Audioprozess-Graphen, der aus verbundenen Audiomodulen besteht, von denen jedes durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt wird. Ein Audiokontext steuert die Erstellung der Knoten, die er enthält, und die Ausführung der Audioverarbeitung oder -decodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontexts passiert.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audioprozessmodul wie eine _Audioquelle_ (z.B. ein HTML {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element), ein _Audiodestination_, ein _Zwischenverarbeitungsmodul_ (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder eine _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen audiobezogenen Parameter, wie einen eines [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen bestimmten Wert oder eine Wertänderung gesetzt werden und kann so geplant werden, dass er zu einer bestimmten Zeit und einem bestimmten Muster erfolgt.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine map-ähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bereitgestellt werden.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle fungiert als Basismedium für Online- und Offline-Audioprozessgraphen, die jeweils durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden — Sie würden dessen Funktionen über eine dieser beiden ererbenden Schnittstellen verwenden.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)-Ereignis
  - : Das ‘ended‘-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende der Medien erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen zur Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für mehrere Arten von Audioquellen-Knoten-Schnittstellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, wie eine Sinus- oder Dreieckswelle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioprozessmodul, das eine gegebene _Frequenz_ einer Welle erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle repräsentiert ein kurzes Audiodatei-Asset im Speicher, das aus einer Audiodatei mit der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) erstellt wurde oder mit Rohdaten unter Verwendung von [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt wurde. Nachdem es in diese Form decodiert wurde, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus im Speicher befindlichen Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML {{ htmlelement("audio") }} oder {{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) besteht (wie einer Webcam, einem Mikrofon oder einem Stream, der von einem entfernten Computer gesendet wird). Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikografisch (alphabetisch) zuerst kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audioquelle, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Wenn Sie den Knoten mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) erstellen, geben Sie an, welchen Track Sie verwenden möchten. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audio-Effekten und Filtern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Tonregelsystemen oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) ausführt und oft verwendet wird, um einen Hall-Effekt zu erreichen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioprozessmodul, das eine Verzögerung zwischen dem Eintreffen von Eingangsdaten und ihrer Weiterleitung an den Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals verringert, um das Clipping und die Verzerrung zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und miteinander gemischt werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Änderung der Lautstärke. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioprozessmodul, das eine gegebene _Verstärkung_ auf die Eingangsdaten anwendet, bevor sie zum Ausgang weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Wellenformungs-Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um den Ausgang eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter; dieser Filtertyp kann verwendet werden, um Tonregelgeräte und grafische Equalizer zu implementieren.

### Definition von Audio-Destinationen

Sobald Sie mit der Verarbeitung Ihres Audios fertig sind, definieren diese Schnittstellen, wohin es ausgegeben wird.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle in einem gegebenen Kontext – normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert eine Audio-Destination, bestehend aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack`, der ähnlich verwendet werden kann wie ein [`MediaStream`](/de/docs/Web/API/MediaStream), der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und Visualisierung

Wenn Sie Zeit-, Frequenz- und andere Daten aus Ihrem Audio extrahieren möchten, benötigen Sie den `AnalyserNode`.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeitfrequenz- und Zeitbereichsanalyseinformationen bereitzustellen, für Datenanalyse- und Visualisierungszwecke.

### Aufteilung und Zusammenführung von Audiokanälen

Um Audiokanäle zu trennen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_-Ausgängen auf.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereint verschiedene Mono-Eingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Spatialisation

Diese Schnittstellen ermöglichen es Ihnen, Ihren Audioquellen Audio-Spatialisation und Panning-Effekte hinzuzufügen.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Ausrichtung der einzigartigen Person, die das Audioszenario hört, das bei der Audiospatialisation verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audiosignalquelle im 3D-Raum, das Ihnen ermöglicht, komplexe Panning-Effekte zu erstellen.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereopanner-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu pannen.

### Audioprozessierung in JavaScript

Mit Audio-Worklets können Sie benutzerdefinierte Audioknoten in JavaScript oder [WebAssembly](/de/docs/WebAssembly) definieren. Audio-Worklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichtgewichtige Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekts [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht es Ihnen, Module zum Audio-Worklet hinzuzufügen, die abseits des Haupt-Threads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einem Audiograph eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audioprozesscode, der in einem `AudioWorkletGlobalScope` läuft, und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-abgeleitetes Objekt, das einen Worker-Kontext darstellt, in dem ein Audioprozess-Skript ausgeführt wird; es ist darauf ausgelegt, die Erzeugung, Verarbeitung und Analyse von Audiodaten direkt mittels JavaScript in einem Worklet-Thread anstelle des Haupt-Threads zu ermöglichen.

#### Veraltet: Scriptprozessor-Knoten

Bevor Audioworklets definiert wurden, verwendete die Web Audio API den `ScriptProcessorNode` für die JavaScript-basierte Audioprozessierung. Da der Code im Haupt-Thread ausgeführt wird, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist aber als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mittels JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioprozessmodul, das mit zwei Puffern verbunden ist, einem, der den aktuellen Eingang enthält, und einem, der den Ausgang enthält. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird an das Objekt gesendet, jedes Mal, wenn der Eingabepuffer neue Daten enthält, und der Ereignis-Handler wird beendet, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit zur Verarbeitung ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Eingabepuffer bereit zur Verarbeitung ist.

### Offline/Hintergrund-Audioprozessierung

Es ist möglich, einen Audiographen sehr schnell im Hintergrund zu verarbeiten/rendern – und dabei in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt ihn auf den Geräten der Nutzer abzuspielen – mit dem Folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audioprozessgraphen darstellt, der aus miteinander verbundenen [`AudioNode`](/de/docs/Web/API/AudioNode)s besteht. Im Gegensatz zu einem Standard-‘AudioContext‘ rendert ein ‘OfflineAudioContext‘ das Audio nicht wirklich, sondern generiert es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendern eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{SubpagesWithSummaries}}

## Beispiele

Sie können eine Reihe von Beispielen in unserem [webaudio-examples Repo](https://github.com/mdn/webaudio-examples/) auf GitHub finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundkonzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Klangerzeugung, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web-Audio-Spatialisation](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischung von Positionsaudio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spieleanwendungen mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audiobibliothek, die standardmäßig auf der [Web Audio API](https://webaudio.github.io/web-audio-api/) basiert und auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückfällt, sowie andere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-artige Verkettung von AudioNodes, mixerähnliche Send/Return und mehr.
- [XSound](https://xsound.jp/): Web Audio API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachlabor-Webanwendung unter Verwendung der Web Audio API, um Video und Audio aus verschiedenen Quellen aufzunehmen und zu einem einzigen File zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Audio-Visualisierung im Web ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

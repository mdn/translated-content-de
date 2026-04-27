---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 09160497a769a44ef51cfb34e04b171587435370
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web, das es Entwicklern ermöglicht, Audioquellen auszuwählen, Effekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) anzuwenden und vieles mehr.

## Web Audio-Konzepte und Verwendung

Die Web Audio API umfasst die Handhabung von Audiooperationen innerhalb eines **Audio-Kontextes** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiooperationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graph** zu bilden. Mehrere Quellen — mit verschiedenen Arten von Kanal-Layouts — werden sogar innerhalb eines einzelnen Kontextes unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten sind über ihre Eingänge und Ausgänge zu Ketten und einfachen Netzen verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Samples — Messungen der Amplitude des Audiosignals zu aufeinanderfolgenden Zeitpunkten — oft Zehntausende pro Sekunde. Diese könnten entweder mathematisch berechnet werden (wie zum Beispiel [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)) oder sie können Aufnahmen aus Sound-/Videodateien (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) und Audio-Streams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)) sein. Tatsächlich sind Sounddateien nur Aufnahmen von Klangintensitäten selbst, die von Mikrofonen oder elektrischen Instrumenten kommen und zu einer einzigen komplizierten Welle zusammengeführt werden.

Ausgänge dieser Knoten könnten mit Eingängen anderer Knoten verbunden werden, die diese Klangstrom-Samples in unterschiedliche Ströme mischen oder modifizieren. Eine gängige Modifikation ist das Multiplizieren der Samples mit einem Wert, um sie lauter oder leiser zu machen (wie es beim [`GainNode`](/de/docs/Web/API/GainNode) der Fall ist). Sobald der Klang ausreichend für den beabsichtigten Effekt verarbeitet ist, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Klang an Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur erforderlich, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Workflow für Web-Audio könnte wie folgt aussehen:

1. Audio-Kontext erstellen
2. Innerhalb des Kontextes Quellen erstellen — wie `<audio>`, Oszillator, Stream
3. Effektknoten erstellen, wie Hall, Biquad-Filter, Panner, Kompressor
4. Endziel des Audios auswählen, beispielsweise Ihre Systemlautsprecher
5. Die Quellen mit den Effekten verbinden und die Effekte mit dem Ziel.

![Ein einfaches Blockdiagramm mit einem äußeren Kasten, der mit Audio-Kontext beschriftet ist, und drei inneren Kästen, die mit Quellen, Effekten und Ziel beschriftet sind. Die drei inneren Kästen haben Pfeile dazwischen, die von links nach rechts zeigen, um den Fluss der Audioinformationen anzuzeigen.](audio-context_.png)

Die Zeitsteuerung wird mit hoher Präzision und niedriger Latenz kontrolliert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, gezielt auf bestimmte Samples, sogar bei einer hohen Abtastrate, zuzugreifen. So sind Anwendungen wie Drumcomputer und Sequenzer in greifbarer Nähe.

Die Web Audio API ermöglicht es uns auch, zu kontrollieren, wie Audio _räumlich verteilt_ wird. Mit einem System basierend auf einem _Quell-Listener-Modell_ ermöglicht sie die Kontrolle des _Panning-Modells_ und befasst sich mit _abstandsbedingter Abschwächung_, die durch eine sich bewegende Quelle (oder einen sich bewegenden Hörer) verursacht wird.

> [!NOTE]
> Sie können über die Theorie der Web Audio API in unserem Artikel [Grundlegende Konzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) ausführlicher lesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann für diejenigen einschüchternd wirken, die nicht mit Audio- oder Musikbegriffen vertraut sind, und da sie eine Fülle an Funktionen beinhaltet, kann es schwierig sein, als Entwickler den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, entweder indem [eine Atmosphäre wie futurelibrary.no bereitgestellt wird](https://www.futurelibrary.no/) oder [auditive Rückmeldungen zu Formularen geben](https://css-tricks.com/form-validation-web-audio/). Sie kann jedoch auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. Mit diesem Hintergrund ist sie sowohl für Entwickler als auch Musiker geeignet.

Wir haben ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit dem Programmieren vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel [Grundlegende Konzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen hilft, zu verstehen, wie digitale Audio im Bereich der API funktioniert. Dieser enthält auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Das Lernen von Programmierung ist wie Kartenspielen — Sie lernen die Regeln, dann spielen Sie, dann gehen Sie zurück und lernen die Regeln erneut, dann spielen Sie wieder. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben und einige fortgeschrittenere Techniken anzuwenden, um einen Schrittsequenzer aufzubauen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial verfügbar, das alle Funktionen der API abdeckt. Siehe die Seitenleiste auf dieser Seite für mehr.

Wenn Sie mit der musikalischen Seite der Dinge vertrauter sind, mit Konzepten der Musiktheorie vertraut sind und Instrumente zu bauen beginnen möchten, können Sie direkt mit dem fortgeschrittenen Tutorial und anderen als Leitfaden anfangen (das oben verlinkte Tutorial behandelt das Planen von Notizen, Erstellen von maßgeschneiderten Oszillatoren und Hüllkurven, sowie ein LFO unter anderem).

Wenn Sie nicht mit den Grundlagen der Programmierung vertraut sind, sollten Sie vielleicht zuerst einige JavaScript-Tutorials für Anfänger konsultieren und dann hierher zurückkehren — unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn_web_development/Core/Scripting) ist ein guter Anfangspunkt.

## Schnittstellen der Web Audio API

Die Web Audio API verfügt über eine Vielzahl von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition von Audio-Graphen

Allgemeine Container und Definitionen, die Audio-Graphen in der Nutzung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle repräsentiert einen Audio-Verarbeitungsgraphen, der aus miteinander verknüpften Audio-Modulen besteht, die jeweils durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt werden. Ein Audio-Kontext steuert die Erstellung der darin enthaltenen Knoten und die Ausführung der Audiobearbeitung oder Dekodierung. Sie müssen ein `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontextes passiert.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audio-Verarbeitungsmodul wie eine _Audioquelle_ (z.B. ein HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), _Audioziel_, _Zwischenverarbeitungsmodul_ (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)) oder _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen audio-bezogenen Parameter, wie einen von einem [`AudioNode`](/de/docs/Web/API/AudioNode). Sie kann auf einen bestimmten Wert oder eine Wertänderung gesetzt werden und kann programmiert werden, um zu einem bestimmten Zeitpunkt und einem bestimmten Muster zu erfolgen.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine kartenähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam) Schnittstellen, was bedeutet, dass sie die Methoden `forEach()`, `get()`, `has()`, `keys()`, und `values()` sowie eine `size`-Eigenschaft bereitstellt.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle fungiert als Basisdefinition für Online- und Offline-Audioverarbeitungsgraphen, die jeweils durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden — Sie würden seine Funktionen über eine dieser beiden vererbenden Schnittstellen verwenden.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
  - : Das `ended` Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen für die Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für mehrere Arten von Audioquellenknotenschnittstellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, wie eine Sinus- oder Dreieckswelle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das eine bestimmte _Frequenz_ der Welle erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle stellt ein kurzes Audio-Asset dar, das im Speicher residiert, erstellt aus einer Audiodatei mithilfe der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) oder erstellt mit Rohdaten mithilfe von [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer). Sobald es in diese Form dekodiert wurde, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus im Speicher befindlichen Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle stellt eine Audioquelle dar, bestehend aus einem HTML {{ htmlelement("audio") }} oder {{ htmlelement("video") }} Element. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) besteht (wie eine Webcam, ein Mikrofon oder ein Stream, der von einem entfernten Computer gesendet wird). Wenn mehrfach Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikographisch (alphabetisch) zuerst kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) stellt eine Audioquelle dar, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Bei der Erstellung des Knotens mithilfe der [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) Methode geben Sie an, welcher Track verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffektfiltern

Schnittstellen für die Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Tiefordnungsfilter. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Klangregelgeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Lineare Faltung auf einem angegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und häufig verwendet wird, um einen Hall-Effekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das eine Verzögerung zwischen dem Empfang von Eingangsdaten und deren Propagation zum Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um das Schneiden und Verzerrungen zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig gespielt und multiplexiert werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle stellt eine Lautstärkenänderung dar. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das eine bestimmte _Verstärkung_ auf die Eingangsdaten anwendet, bevor sie an den Ausgang weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle stellt einen nichtlinearen Verzerrer dar. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Wellenshaping-Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR) Filter; dieser Filtertyp kann verwendet werden, um Klangregelsysteme und grafische Equalizer zu implementieren.

### Definition von Audiozielen

Sobald Sie mit der Verarbeitung Ihres Audios fertig sind, definieren diese Schnittstellen, wohin es ausgegeben wird.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle in einem gegebenen Kontext — normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzigen `AudioMediaStreamTrack` besteht, das auf ähnliche Weise wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wird. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und Visualisierung

Wenn Sie Zeit-, Frequenz- und andere Daten aus Ihrem Audio extrahieren möchten, ist der `AnalyserNode` das, was Sie brauchen.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Frequenz- und Zeitbereichsanalyseinformationen bereitzustellen, zum Zweck der Datenanalyse und Visualisierung.

### Aufteilen und Zusammenführen von Audiokanälen

Um Audiokanäle aufzuteilen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_-Ausgängen auf.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereint verschiedene Mono-Eingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Räumlichkeit

Diese Schnittstellen ermöglichen es Ihnen, Audio-Raumklangeffekte zu Ihren Audioquellen hinzuzufügen.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Orientierung der einzigartigen Person, die die Audioszene hört, die in der Audio-Räumlichkeit verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audiosignals im 3D-Raum, wodurch komplexe Panning-Effekte erstellt werden können.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereo-Panner-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu schwenken.

### Audioverarbeitung in JavaScript

Mithilfe von Audio-Worklets können Sie benutzerdefinierte Audionoten schreiben, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) ausgeführt werden. Audio-Worklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet) Schnittstelle, eine leichte Version der [`Worker`](/de/docs/Web/API/Worker) Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext) Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht es Ihnen, Module zum Audio-Worklet hinzuzufügen, die außerhalb des Hauptthreads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einen Audiographen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audiobearbeitungscode, der in einem `AudioWorkletGlobalScope` ausgeführt wird, der Audio direkt generiert, verarbeitet oder analysiert und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein vom `WorkletGlobalScope` abgeleitetes Objekt, das einen Worker-Kontext darstellt, in dem ein Audiobearbeitungsskript ausgeführt wird. Sie ist so konzipiert, dass die Generierung, Verarbeitung und Analyse von Audiodaten direkt mit JavaScript in einem Worklet-Thread und nicht im Haupt-Thread ermöglicht wird.

#### Veraltet: Skriptprozessor-Knoten

Bevor Audio-Worklets definiert wurden, nutzte die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Haupt-Thread läuft, haben sie eine schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Generierung, Verarbeitung oder Analyse von Audio mithilfe von JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das mit zwei Puffern verbunden ist, einer enthält den aktuellen Eingang, einer enthält den Ausgang. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) Schnittstelle implementiert, wird an das Objekt gesendet, wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler beendet sich, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess` Ereignis wird gefeuert, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit zur Verarbeitung ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` stellt Ereignisse dar, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) Eingabepuffer bereit zur Verarbeitung ist.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audio-Graphen sehr schnell im Hintergrund zu verarbeiten/rendern — ihn in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt auf die Lautsprecher des Geräts — mit folgendem.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist ein [`AudioContext`](/de/docs/Web/API/AudioContext) Schnittstelle, die einen Audiographen darstellt, der aus miteinander verbundenen [`AudioNode`](/de/docs/Web/API/AudioNode)s aufgebaut ist. Im Gegensatz zu einem standardmäßigen `AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern generiert es in einem Puffer _so schnell wie möglich_.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete` Ereignis wird ausgelöst, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) Ereignis verwendet diese Schnittstelle.

## Leitfäden und Anleitungen

{{SubpagesWithSummaries}}

## Beispiele

Sie finden eine Reihe von Beispielen in unserem [webaudio-examples GitHub-Repository](https://github.com/mdn/webaudio-examples/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundlegende Konzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Sound erstellen, sequenzieren, timen, planen](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien- und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web-Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Kontrolle mehrere Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischung von Positionsaudio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Game-Audio mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tone.js](https://tonejs.github.io/): Ein Framework für die Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): Eine JS-Audiobibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) verwendet und bei Bedarf auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückfällt sowie weitere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliches Ketten von AudioNodes, Mischpult-ähnliche Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung, die die Web Audio API verwendet, um Video und Audio von verschiedenen Quellen in einer Datei zusammenzuführen und aufzunehmen ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

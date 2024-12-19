---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Diese ermöglicht Entwicklern, Audioquellen auszuwählen, Audioeffekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) anzuwenden und vieles mehr.

## Konzepte und Nutzung der Web Audio-API

Die Web Audio API umfasst die Verarbeitung von Audiovorgängen innerhalb eines **audio context** und wurde entwickelt, um **modulares Routing** zu ermöglichen. Grundlegende Audiovorgänge werden mit **audio nodes** durchgeführt, die miteinander verknüpft werden, um einen **audio routing graph** zu bilden. Mehrere Quellen — mit unterschiedlichen Arten von Kanalaufteilungen — werden sogar innerhalb eines einzigen Kontexts unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio nodes sind durch ihre Eingaben und Ausgaben zu Ketten und einfachen Netzwerken verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitabschnitten, oft zehntausende von ihnen pro Sekunde. Diese können entweder mathematisch berechnet werden (wie zum Beispiel der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder es können Aufnahmen von Audio-/Videodateien sein (wie der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und der [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) sowie Audio-Streams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Audiodateien nichts anderes als Aufzeichnungen von Schallintensitäten, die von Mikrofonen oder elektrischen Instrumenten kommen und in eine einzige, komplizierte Wellenform gemischt werden.

Ausgänge dieser nodes können mit den Eingängen anderer nodes verbunden werden, die diese Tonstreams mischen oder verändern, um unterschiedlich Streams zu erzeugen. Eine häufige Änderung besteht darin, die Samples mit einem Wert zu multiplizieren, um sie lauter oder leiser zu machen (wie es beim [`GainNode`](/de/docs/Web/API/GainNode) der Fall ist). Sobald der Ton für den beabsichtigten Effekt ausreichend verarbeitet ist, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Ton an Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Workflow für Webaudio könnte folgendermaßen aussehen:

1. Erstellen Sie einen Audio-Kontext
2. Erstellen Sie innerhalb des Kontexts Quellen – wie `<audio>`, Oszillator, Stream
3. Erstellen Sie Effekt-Nodes, wie Hall, Biquad-Filter, Panning, Kompressor
4. Wählen Sie die endgültige Audioziel, zum Beispiel Ihre Systemlautsprecher
5. Verbinden Sie die Quellen mit den Effekten und die Effekte mit dem Ziel.

![Ein einfaches Box-Diagramm mit einer äußeren Box, die mit Audio-Kontext beschriftet ist, und drei inneren Boxen, die mit Quellen, Effekten und Ziel beschriftet sind. Die drei inneren Boxen haben Pfeile zwischen sich, die von links nach rechts zeigen, und den Fluss von Audioinformationen angeben.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz gesteuert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, spezifische Samples, auch bei hoher Samplerate, anzusprechen. Anwendungen wie Drum-Machines und Sampler sind somit in Reichweite.

Die Web Audio API ermöglicht uns auch, zu steuern, wie Audio _räumlich dargestellt_ wird. Basierend auf einem _Quellen-Hörer-Modell_ ermöglicht sie die Kontrolle über das _Panning-Modell_ und beschäftigt sich mit der _durch Entfernungen induzierten Abschwächung_ durch eine sich bewegende Quelle (oder einen sich bewegenden Hörer).

> [!NOTE]
> Sie können über die Theorie der Web Audio API in viel größerem Detail in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) lesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann für diejenigen einschüchternd sein, die mit Audio- oder Musikbegriffen nicht vertraut sind, und da sie eine Vielzahl von Funktionen beinhaltet, kann es schwierig sein, als Entwickler einzusteigen.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem Sie [eine Atmosphäre bereitstellen wie futurelibrary.no](https://www.futurelibrary.no/) oder [auditive Rückmeldungen bei Formularen](https://css-tricks.com/form-validation-web-audio/) hinzufügen. Sie kann jedoch auch verwendet werden, um _fortschrittliche_ interaktive Instrumente zu erstellen. Mit diesem Gedanken eignet sie sich sowohl für Entwickler als auch für Musiker.

Wir haben ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit der Programmierung vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen helfen soll zu verstehen, wie digitale Audioarbeiten, insbesondere im Bereich der API, funktionieren. Dies beinhaltet auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Das Lernen von Programmierung ist wie Kartenspielen – Sie lernen die Regeln, dann spielen Sie, dann gehen Sie zurück und lernen die Regeln erneut, dann spielen Sie wieder. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen beim Üben des Gelernten zu helfen und einige fortgeschrittenere Techniken anzuwenden, um einen Step-Sequencer aufzubauen.

Wir haben auch andere Tutorials und umfassende Referenzmaterialien verfügbar, die alle Funktionen der API abdecken. Siehe die Seitenleiste auf dieser Seite für mehr.

Wenn Sie sich mit der musikalischen Seite der Dinge vertrauter fühlen, mit Konzepten der Musiktheorie vertraut sind und beginnen möchten, Instrumente zu bauen, dann können Sie mit dem fortgeschrittenen Tutorial und anderen anfangen, als Leitfaden Dinge zu bauen (das oben verlinkte Tutorial deckt die Planung von Noten, das Erstellen maßgeschneiderter Oszillatoren und Umschläge sowie einen LFO unter anderem ab.)

Wenn Sie mit den Grundlagen der Programmierung nicht vertraut sind, möchten Sie möglicherweise zuerst einige JavaScript-Tutorials für Anfänger konsultieren und dann hierher zurückkehren – sehen Sie sich unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn_web_development/Core/Scripting) an, um einen großartigen Einstieg zu finden.

## Schnittstellen der Web Audio API

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition des Audiografen

Allgemeine Container und Definitionen, die Audiografen in der Verwendung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`** Schnittstelle stellt einen Audio-Verarbeitungsgraph dar, der aus miteinander verknüpften Audio-Modulen aufgebaut ist, die jeweils durch ein [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert werden. Ein Audio-Kontext steuert die Erstellung der darin enthaltenen Nodes und die Ausführung der Audiobearbeitung oder Decodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontexts passiert.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`** Schnittstelle repräsentiert ein Audio-Verarbeitungsmodul wie eine _Audioquelle_ (z.B. ein HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), _Audioziel_, _zwischenzeitliches Verarbeitungsmodul_ (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), oder _Lautstärkeregler_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`** Schnittstelle repräsentiert einen audio-bezogenen Parameter, wie einen von einem [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen bestimmten Wert oder eine Wertänderung eingestellt werden und kann so geplant werden, dass es zu einer bestimmten Zeit und einem bestimmten Muster geschieht.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine kartenausartige Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam) Schnittstellen und bietet somit die Methoden `forEach()`, `get()`, `has()`, `keys()`, und `values()`, sowie eine `size` Eigenschaft.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`** Schnittstelle fungiert als Basisdefinition für Online- und Offline-Audio-Verarbeitungsgraphen, wie sie jeweils durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden – Sie würden ihre Funktionen über eine der beiden vererbenden Schnittstellen verwenden.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
  - : Das `ended` Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.

### Definieren von Audioquellen

Schnittstellen, die Audioquellen für die Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für mehrere Arten von Audiosource-Node-Schnittstellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`** Schnittstelle stellt eine periodische Welle dar, wie eine Sinus- oder Dreieckswelle. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das eine bestimmte _Frequenz_ einer Welle erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`** Schnittstelle stellt ein kurzes Audio-Asset dar, das im Speicher residiert und aus einer Audiodatei mithilfe der [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) Methode oder mit Rohdaten mithilfe der [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt wurde. Sobald es in dieser Form decodiert wurde, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`** Schnittstelle stellt eine Audioquelle dar, die aus im Speicher befindlichen Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`** Schnittstelle stellt eine Audioquelle dar, die aus einem HTML {{ htmlelement("audio") }} oder {{ htmlelement("video") }} Element besteht. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`** Schnittstelle stellt eine Audioquelle dar, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) (wie einer Webcam, Mikrofon oder einem Stream, der von einem entfernten Computer gesendet wird) besteht. Wenn mehrere Audio-Tracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikografisch (alphabetisch) zuerst kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) stellt eine Audioquelle dar, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Knotens mit der [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) Methode, um den Knoten zu erstellen, geben Sie an, welcher Track verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definieren von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`** Schnittstelle stellt einen einfachen Filter niedriger Ordnung dar. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Klangregelgeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`** Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) ausführt und häufig für einen Halleffekt verwendet wird.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`** Schnittstelle stellt eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line) dar; ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingangsdaten und deren Weiterleitung zum Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`** Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um Übersteuerung und Verzerrungen zu vermeiden, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und zusammengeführt werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`** Schnittstelle repräsentiert eine Änderung der Lautstärke. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das einen bestimmten _Verstärkungsfaktor_ auf die Eingangsdaten anwendet, bevor sie zum Ausgang weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`** Schnittstelle stellt einen nicht-linearen Verzerrer dar. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine waveshaping Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird sie häufig verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR) Filter; dieser Filtertyp kann verwendet werden, um Klangregelgeräte und grafische Equalizer zu implementieren.

### Definieren von Audiozielen

Sobald Sie Ihre Audiodaten verarbeitet haben, definieren diese Schnittstellen, wohin sie ausgegeben werden sollen.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`** Schnittstelle stellt das Endziel einer Audioquelle in einem bestimmten Kontext dar — normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`** Schnittstelle stellt ein Audioziel dar, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht, der ähnlich wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, der aus [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und Visualisierung

Wenn Sie Zeit-, Frequenz- und andere Daten aus Ihrem Audio extrahieren möchten, ist `AnalyserNode` genau das, was Sie brauchen.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`** Schnittstelle stellt ein Node dar, das in der Lage ist, Echtzeitfrequenz- und Zeitbereichsanalysen zur Verfügung zu stellen, für Zwecke der Datenanalyse und Visualisierung.

### Aufteilen und Zusammenführen von Audiokanälen

Um Audiokanäle aufzuteilen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`** Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_ Ausgängen.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`** Schnittstelle vereinigt verschiedene Mono-Eingaben in einen einzelnen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Raumklang

Diese Schnittstellen ermöglichen es Ihnen, Audio-Raumklang-Panning-Effekte auf Ihre Audioquellen anzuwenden.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`** Schnittstelle repräsentiert die Position und Orientierung der einzigartigen Person, die die Audio-Szene anhört, die in der Audio-Raumklangverarbeitung verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`** Schnittstelle stellt die Position und das Verhalten eines Audioquellsignals im 3D-Raum dar und ermöglicht das Erstellen von komplexen Panning-Effekten.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`** Schnittstelle stellt einen einfachen Stereo-Panning-Knoten dar, der verwendet werden kann, um einen Audiostream nach links oder rechts zu schwenken.

### Audioverarbeitung in JavaScript

Mit Hilfe von Audio-Worklets können Sie benutzerdefinierte Audio-Nodes erstellen, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind. Audio-Worklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet) Schnittstelle, eine leichte Version der [`Worker`](/de/docs/Web/API/Worker) Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet` Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext) Objekt und dessen [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht es Ihnen, Module zum Audio-Worklet hinzuzufügen, die außerhalb des Hauptthreads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode` Schnittstelle stellt ein [`AudioNode`](/de/docs/Web/API/AudioNode) dar, das in einen Audio-Graph eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor` Schnittstelle stellt Audioprozessor-Code dar, der im `AudioWorkletGlobalScope` ausgeführt wird, der Audio direkt generiert, verarbeitet oder analysiert und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope` Schnittstelle ist ein von `WorkletGlobalScope` abgeleitetes Objekt, das einen Worker-Kontext darstellt, in dem ein Audiobearbeitungsskript ausgeführt wird; sie ist darauf ausgelegt, die Erzeugung, Verarbeitung und Analyse von Audiodaten direkt in einem Worklet-Thread anstelle des Hauptthreads zu ermöglichen.

#### Veraltet: Script-Prozessor-Nodes

Bevor Audio-Worklets definiert wurden, verwendete die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Hauptthread läuft, haben sie eine schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`** Schnittstelle ermöglicht die Generierung, Verarbeitung oder Analyse von Audio mithilfe von JavaScript. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audio-Verarbeitungsmodul, das mit zwei Puffern verknüpft ist, von denen einer den aktuellen Eingang enthält, einer den Ausgang. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) Schnittstelle implementiert, wird an das Objekt gesendet, jedes Mal wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler beendet, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess` Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) zur Verarbeitung bereit ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` stellt Ereignisse dar, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) Eingabepuffer zur Verarbeitung bereit ist.

### Offline-/Hintergrund-Audioverarbeitung

Es ist möglich, einen Audio-Graph sehr schnell im Hintergrund zu verarbeiten/rendern — ihn in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt zu den Lautsprechern des Geräts — mit dem Folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`** Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext) Schnittstelle, die einen Audio-Verarbeitungsgraph repräsentiert, der aus miteinander verknüpften [`AudioNode`](/de/docs/Web/API/AudioNode)s aufgebaut ist. Im Gegensatz zu einem normalen `AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern generiert es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete` Ereignis wird ausgelöst, wenn das Rendern eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` stellt Ereignisse dar, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) Ereignis verwendet diese Schnittstelle.

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
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Sound erstellen, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Leitfaden zur automatischen Wiedergabe für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklang-Verarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischen von Positionsaudio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spielsound mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): eine einfache Bibliothek zum Abspielen bestimmter Töne/Noten mit der Web Audio API.
- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audiobibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) verwendet und auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückgreift, sowie andere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliches Chaining von AudioNodes, Mixer-Style Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachlabor-Webanwendung, die die Web Audio API verwendet, um Video- und Audioaufnahmen aus verschiedenen Quellen in einer einzigen Datei aufzuzeichnen und zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): vereinfacht Webaudio-Visualisierungen ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

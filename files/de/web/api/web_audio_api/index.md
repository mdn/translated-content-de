---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web, das es Entwicklern ermöglicht, Audioquellen auszuwählen, Effekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) anzuwenden und vieles mehr.

## Konzepte und Nutzung der Web Audio API

Die Web Audio API umfasst die Verarbeitung von Audiooperationen in einem **Audio-Kontext** und wurde entwickelt, um eine **modulare Weiterleitung** zu ermöglichen. Grundlegende Audiooperationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Mehrere Quellen — mit unterschiedlichen Kanal-Layouts — werden selbst in einem einzelnen Kontext unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten sind durch ihre Eingänge und Ausgänge in Ketten und einfachen Netzwerken miteinander verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitintervallen, oft zehntausende pro Sekunde. Diese können entweder mathematisch berechnet werden (wie z.B. [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder sie können Aufnahmen von Audio-/Videodateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) und Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Audiodateien selbst nur Aufnahmen von Schallintensitäten, die von Mikrofonen oder elektrischen Instrumenten kommen und in eine einzige, komplizierte Welle gemischt werden.

Die Ausgänge dieser Knoten könnten mit den Eingängen anderer Knoten verbunden werden, die diese Streams von Audiosamples in verschiedene Streams mischen oder modifizieren. Eine häufige Modifikation ist das Multiplizieren der Samples mit einem Wert, um sie lauter oder leiser zu machen (wie es bei [`GainNode`](/de/docs/Web/API/GainNode) der Fall ist). Sobald der Ton für den beabsichtigten Effekt ausreichend bearbeitet ist, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Ton an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer den Ton hören soll.

Ein einfacher, typischer Arbeitsfluss für Web-Audio könnte folgendermaßen aussehen:

1. Erstellen Sie einen Audio-Kontext
2. Erstellen Sie innerhalb des Kontexts Quellen — wie `<audio>`, Oszillator, Stream
3. Erstellen Sie Effektknoten, wie Nachhall, Biquad-Filter, Panner, Kompressor
4. Wählen Sie das endgültige Audioziel, zum Beispiel Ihre Systemlautsprecher
5. Verbinden Sie die Quellen mit den Effekten und die Effekte mit dem Ziel.

![Ein einfaches Blockdiagramm mit einem äußeren Kasten, der als Audiokontext gekennzeichnet ist, und drei inneren Kästen mit der Beschriftung Quellen, Effekte und Ziel. Die drei inneren Kästen haben Pfeile zwischen ihnen, die von links nach rechts zeigen und den Fluss von Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz gesteuert, was es Entwicklern ermöglicht, Code zu schreiben, der präzise auf Ereignisse reagiert und in der Lage ist, bestimmte Samples selbst bei einer hohen Sample-Rate genau anzusprechen. Anwendungen wie Drum Machines und Sequencer sind daher leicht realisierbar.

Die Web Audio API erlaubt uns auch, wie Audio _räumlich dargestellt_ wird, zu steuern. Durch ein System, das auf einem _Quell-Listener-Modell_ basiert, erlaubt sie die Kontrolle des _Panning-Modells_ und behandelt _distanzbezogene Dämpfung_, die durch eine bewegliche Quelle (oder einen beweglichen Zuhörer) verursacht wird.

> [!NOTE]
> Sie können über die Theorie der Web Audio API in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) ausführlicher nachlesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann für diejenigen, die nicht mit Audio- oder Musikterminologie vertraut sind, einschüchternd wirken. Da sie einen großen Funktionsumfang bietet, kann es schwierig sein, als Entwickler den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, z.B. [Stimmung wie bei futurelibrary.no Atmosphären zu schaffen](https://www.futurelibrary.no/) oder [akustisches Feedback in Formularen zu geben](https://css-tricks.com/form-validation-web-audio/). Sie kann jedoch auch verwendet werden, um _fortschrittliche_ interaktive Instrumente zu erstellen. In Anbetracht dessen ist sie sowohl für Entwickler als auch für Musiker geeignet.

Wir haben ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit der Programmierung vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen hilft zu verstehen, wie digitale Audioverarbeitung funktioniert, insbesondere im Rahmen der API. Dieser enthält auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Das Erlernen der Programmierung ist wie Kartenspielen — Sie lernen die Regeln, dann spielen Sie, dann gehen Sie zurück und lernen die Regeln erneut, dann spielen Sie wieder. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben und einige fortgeschrittenere Techniken anzuwenden, um einen Step Sequencer zu bauen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial, das alle Funktionen der API abdeckt. Sehen Sie die Seitenleiste auf dieser Seite für mehr.

Wenn Sie mit der musikalischen Seite vertrauter sind, mit Konzepten der Musiktheorie vertraut sind und anfangen möchten, Instrumente zu bauen, dann können Sie mit dem fortgeschrittenen Tutorial und anderen als Leitfaden beginnen (das oben verlinkte Tutorial behandelt das Planen von Noten, das Erstellen von speziellen Oszillatoren und Hüllkurven sowie eines LFOs unter anderem).

Wenn Sie mit den Programmiergrundlagen nicht vertraut sind, möchten Sie vielleicht zuerst einige JavaScript-Anfängertutorials konsultieren und dann hierher zurückkehren — sehen Sie unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn_web_development/Core/Scripting) für einen großartigen Ausgangspunkt.

## Web Audio API Schnittstellen

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörige Ereignisse, die wir in neun funktionale Kategorien unterteilt haben.

### Allgemeine Definition des Audio-Graphen

Allgemeine Container und Definitionen, die Audio-Graphen bei der Nutzung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle repräsentiert einen Audioverarbeitungsgraphen, der aus Audio-Modulen besteht, die miteinander verbunden sind, wobei jedes durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert wird. Ein Audiokontext steuert die Erstellung der Knoten, die er enthält, und die Ausführung der Audioverarbeitung oder Dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontexts geschieht.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audiomodul wie eine _Audioquelle_ (z.B. ein HTML-{{HTMLElement("audio")}}- oder -{{HTMLElement("video")}}-Element), einen _Audiosender_, ein _Zwischenverarbeitungsmodul_ (z.B. einen Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), oder eine Lautstärkeregelung wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen audiobezogenen Parameter, wie einen von einem [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen bestimmten Wert festgelegt werden oder eine Änderung des Wertes darstellen und kann geplante Änderungen zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster vornehmen.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine map-ähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass sie die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bietet.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle fungiert als Basisdefinition für Online- und Offline-Audioverarbeitungsgraphen, wie sie durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) jeweils dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden - Sie würden seine Funktionen über eine dieser beiden erbenden Schnittstellen nutzen.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen für die Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine Elternschnittstelle für verschiedene Arten von Audioquellenknotenschnittstellen. Er ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, wie eine Sinus- oder Dreieckswelle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiomodul, das eine gegebene _Frequenz_ einer Welle erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle repräsentiert ein kurzes Audio-Asset, das im Arbeitsspeicher residiert und durch eine Audiodatei mit der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) erstellt wurde oder durch rohe Daten mit [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt wurde. Einmal in dieser Form decodiert, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem im Speicher befindlichen Audio besteht, das in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert ist. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML-{{ htmlelement("audio") }}- oder -{{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) besteht (wie eine Webcam, ein Mikrofon oder ein Stream, der von einem externen Computer gesendet wird). Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikographisch (alphabetisch) zuerst kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audioquelle, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Knotens mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) zur Erstellung des Knotens geben Sie an, welcher Track verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffekt-Filtern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Klangsteuerungsgeräten oder graphischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und häufig verwendet wird, um einen Halleffekt zu erreichen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiomodul, das eine Verzögerung zwischen dem Eintreffen von Eingabedaten und ihrem Weiterleiten an den Ausgang bewirkt.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals reduziert, um Clipping und Verzerrungen zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und zusammengeführt werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Lautstärkeänderung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiomodul, das einen gegebenen _Gain_ auf die Eingabedaten anwendet, bevor sie weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Waveshaping-Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es oft verwendet, um dem Signal ein warmes Gefühl hinzuzufügen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR) Filter; dieser Filtertyp kann verwendet werden, um Klangregelungsgeräte und grafische Equalizer wie auch andere Soundsysteme zu implementieren.

### Definition von Audio-Zielen

Nachdem Sie Ihre Audiosignale verarbeitet haben, definieren diese Schnittstellen, wohin sie ausgegeben werden.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle in einem gegebenen Kontext - normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API)-[`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzigen `AudioMediaStreamTrack` besteht und ähnlich verwendet werden kann wie ein [`MediaStream`](/de/docs/Web/API/MediaStream), das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wird. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und Visualisierung

Wenn Sie Zeit-, Frequenz- und andere Daten aus Ihrem Audio extrahieren möchten, ist der `AnalyserNode` das, was Sie brauchen.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Frequenz- und Zeit-Domain-Analyseinformationen zur Verfügung zu stellen, um Datenanalyse und Visualisierung zu ermöglichen.

### Aufteilen und Zusammenführen von Audiokanälen

Zum Aufteilen und Zusammenführen von Audiokanälen verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_-Ausgängen.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereint verschiedene Mono-Eingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Räumlichkeitssteuerung

Diese Schnittstellen ermöglichen es Ihnen, Panning-Effekte der Audio-Räumlichkeit auf Ihre Audioquellen anzuwenden.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Orientierung der einzigartigen Person, die die Audioszene hört, wie sie in der Audiogeografie verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audiosignals in 3D-Raum und ermöglicht es Ihnen, komplexe Panning-Effekte zu erstellen.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereopanner-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu bewegen.

### Audiobearbeitung in JavaScript

Mit Audio-Worklets können Sie benutzerdefinierte Audioknoten schreiben, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) definiert sind. Audio-Worklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichtgewichtige Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt verfügbar, dessen [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) es ermöglicht, Module dem Audio-Worklet hinzuzufügen, um außerhalb des Haupt-Threads ausgeführt zu werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einen Audio-Graphen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` weiterleiten kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audiobearbeitungscode, der in einem `AudioWorkletGlobalScope` ausgeführt wird, das audio generiert, verarbeitet oder direkt analysiert und Nachrichten mit dem entsprechenden `AudioWorkletNode` austauschen kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-basiertes Objekt, das einen Worker-Kontext repräsentiert, in dem ein Audiobearbeitungsskript ausgeführt wird; es ist darauf ausgelegt, die Erzeugung, Verarbeitung und Analyse von Audiodaten direkt mithilfe von JavaScript in einem Worklet-Thread statt im Hauptthread zu ermöglichen.

#### Veraltet: Skriptprozessor-Knoten

Bevor Audio-Worklets definiert wurden, verwendete die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Haupt-Thread ausgeführt wird, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mithilfe von JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das mit zwei Puffern verbunden ist, wobei ein Puffer die aktuellen Eingabedaten enthält und der andere die Ausgabe. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird an das Objekt jedes Mal gesendet, wenn der Eingabepuffer neue Daten enthält, und der Ereignis-Handler endet, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit ist, verarbeitet zu werden.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit ist, verarbeitet zu werden.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audiographen sehr schnell im Hintergrund zu verarbeiten/rendern — ihn in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt in die Lautsprecher des Geräts — mit dem folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audiographen darstellt, der aus verketteten [`AudioNode`](/de/docs/Web/API/AudioNode)s besteht. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern erzeugt es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{SubpagesWithSummaries}}

## Beispiele

Sie finden eine Reihe von Beispielen in unserem [webaudio-examples repo](https://github.com/mdn/webaudio-examples/) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Erstellung von Klängen, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web-Audio-Räumlichkeitssteuerung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischen von positionalem Audio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spiel-Sound mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): eine einfache Bibliothek zum Abspielen bestimmter Töne/Noten mithilfe der Web Audio API.
- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audio-Bibliothek, die standardmäßig auf [Web Audio API](https://webaudio.github.io/web-audio-api/) zurückgreift und als Fallback auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) setzt, sowie andere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliches Ketten von AudioNodes, Mixer-ähnliche Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme, etc.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung, die die Web Audio API verwendet, um Audio und Video von verschiedenen Quellen zu einer Datei zusammenzuführen ([Quellcode auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

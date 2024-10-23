---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web, das Entwicklern die Möglichkeit gibt, Audioquellen auszuwählen, Effekte auf Audio anzuwenden, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) einzusetzen und vieles mehr.

## Konzepte und Nutzung von Web Audio

Die Web Audio API umfasst die Verarbeitung von Audiooperationen innerhalb eines **Audio-Kontexts** und ist so konzipiert, dass sie ein **modulares Routing** ermöglicht. Grundlegende Audiooperationen werden mit **Audio-Knoten** durchgeführt, die miteinander verbunden werden, um einen **Audio-Routing-Graphen** zu bilden. Mehrere Quellen – mit verschiedenen Arten von Kanal-Layouts – werden sogar innerhalb eines einzigen Kontexts unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten sind über ihre Eingänge und Ausgänge miteinander zu Ketten und einfachen Netzen verknüpft. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitscheiben, oft Zehntausende davon pro Sekunde. Diese können entweder mathematisch berechnet werden (wie `OscillatorNode`), oder es handelt sich um Aufnahmen aus Audio-/Videodateien (wie `AudioBufferSourceNode` und `MediaElementAudioSourceNode`) und Audiostreams (`MediaStreamAudioSourceNode`). Tatsächlich sind Audiodateien nur Aufnahmen von Schallintensitäten, die von Mikrofonen oder elektrischen Instrumenten stammen und zu einer einzigen, komplexen Welle gemischt werden.

Ausgänge dieser Knoten könnten mit Eingängen anderer Knoten verbunden werden, die diese Streams von Tonsamples zu verschiedenen Streams mischen oder modifizieren. Eine häufige Modifikation besteht darin, die Samples mit einem Wert zu multiplizieren, um sie lauter oder leiser zu machen (wie beim `GainNode`). Sobald der Ton ausreichend für den vorgesehenen Effekt verarbeitet wurde, kann er mit dem Eingang eines Ziels (`BaseAudioContext.destination`) verbunden werden, das den Ton an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur erforderlich, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Arbeitsablauf für Web-Audio könnte folgendermaßen aussehen:

1. Erstellen Sie einen Audio-Kontext
2. Erstellen Sie innerhalb des Kontexts Quellen – wie `<audio>`, Oszillator, Stream
3. Erstellen Sie Effekt-Knoten wie Nachhall, Biquadfilter, Panner, Kompressor
4. Wählen Sie das endgültige Ziel des Audios, zum Beispiel Ihre Systemlautsprecher
5. Verbinden Sie die Quellen mit den Effekten und die Effekte mit dem Ziel.

![Ein einfaches Kasten-Diagramm mit einem äußeren Kasten, der als Audio-Kontext bezeichnet ist, und drei inneren Kästen, die als Quellen, Effekte und Ziel bezeichnet sind. Die drei inneren Kästen haben Pfeile zwischen sich, die von links nach rechts zeigen und den Fluss von Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und geringer Latenz gesteuert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, gezielt auf bestimmte Samples zuzugreifen, selbst bei einer hohen Samplerate. Anwendungen wie Drumcomputer und Sequenzer sind daher gut realisierbar.

Die Web Audio API ermöglicht es uns zudem, wie Audio _räumlich angeordnet_ wird, zu steuern. Mit einem System basierend auf einem _Quell-Hörer-Modell_ ermöglicht sie die Kontrolle über das _Panning-Modell_ und behandelt _distanziert induzierte Abschwächung_, die durch eine sich bewegende Quelle (oder einen sich bewegenden Hörer) hervorgerufen wird.

> [!NOTE]
> Sie können sich ausführlicher über die Theorie der Web Audio API in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) informieren.

## Zielgruppe der Web Audio API

Die Web Audio API kann für diejenigen, die mit Audio- oder Musikbegriffen nicht vertraut sind, einschüchternd wirken, und da sie eine Vielzahl von Funktionen umfasst, kann es für Entwickler schwierig sein, den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem sie [eine Atmosphäre wie futurelibrary.no bietet](https://www.futurelibrary.no/) oder [auditive Rückmeldung in Formularen](https://css-tricks.com/form-validation-web-audio/). Sie kann jedoch auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. Daher ist sie sowohl für Entwickler als auch für Musiker geeignet.

Wir haben ein [einfaches einführendes Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit der Programmierung vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel zu [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen helfen soll, zu verstehen, wie digitale Audioverarbeitung speziell im Bereich der API funktioniert. Dieser enthält auch eine gute Einführung in einige Konzepte, auf denen die API basiert.

Das Erlernen von Programmierung ist wie das Spielen von Karten — man lernt die Regeln, dann spielt man, dann lernt man die Regeln erneut, und dann spielt man wieder. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel noch nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um das Gelernte zu üben und einige fortgeschrittenere Techniken anzuwenden, um einen Step-Sequenzer zu erstellen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial verfügbar, das alle Funktionen der API abdeckt. Siehe die Seitenleiste auf dieser Seite für weitere Informationen.

Wenn Sie mit der musikalischen Seite der Dinge vertrauter sind, mit Konzepten der Musiktheorie vertraut sind und Instrumente bauen möchten, dann können Sie mit dem fortgeschrittenen Tutorial und anderen als Leitfaden direkt loslegen (das oben verlinkte Tutorial behandelt das Planen von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie eines LFOs unter anderem).

Wenn Sie noch nicht mit den Grundlagen der Programmierung vertraut sind, möchten Sie vielleicht zuerst einige JavaScript-Tutorials für Anfänger konsultieren und dann hierher zurückkehren – unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn/JavaScript) ist ein guter Ausgangspunkt.

## Web Audio API Schnittstellen

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Generelle Audiograph-Definition

Allgemeine Container und Definitionen, die beim Einsatz der Web Audio API Audiographen formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle repräsentiert einen Audioverarbeitungsgraphen, der aus verknüpften Audiomodulen besteht, die jeweils von einem [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt werden. Ein Audiokontext steuert die Erstellung der darin enthaltenen Knoten sowie die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles in einem Kontext geschieht.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audiobearbeitungsmodul wie eine _Audioquelle_ (z. B. ein HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element), _Audioziel_, _Zwischenbearbeitungsmodul_ (z. B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)), oder _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen audio-bezogenen Parameter, wie einen eines [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen bestimmten Wert gesetzt oder eine Wertänderung geplant werden, die zu einer bestimmten Zeit und nach einem spezifischen Muster erfolgen soll.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine map-ähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass es die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bietet.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle dient als Basisdefinition für Online- und Offline-Audioverarbeitungsgraphen, die jeweils durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden – Sie würden seine Funktionen über eine dieser beiden erbenden Schnittstellen nutzen.
- Das Ereignis [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Das Ereignis `ended` wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen zur Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine Elternschnittstelle für mehrere Arten von Audiosource-Knoteninterfaces. Er ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Welle, wie beispielsweise eine Sinus- oder Dreieckswelle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das eine gegebene _Frequenz_ von Wellen erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle repräsentiert ein kurzes Audiosignal, das im Speicher residente ist und aus einer Audiodatei mittels der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) oder mit Rohdaten unter Verwendung [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt wurde. Sobald es in dieser Form dekodiert ist, kann das Audio in ein [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, bestehend aus im Speicher befindlichen Audiodaten, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML-{{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) (wie einer Webcam, einem Mikrofon oder einem Stream von einem entfernten Computer) besteht. Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikographisch (alphabetisch) als erstes kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audioquelle, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Knotens mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) geben Sie an, welcher Track verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audiodfiltereffekten

Schnittstellen zur Definition von Effekten, die auf Ihre Audioquellen angewendet werden sollen.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Tonreglern oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und oft verwendet wird, um einen Nachhall-Effekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingangsdaten und deren Weiterleitung an den Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals verringert, um Clipping und Verzerrungen zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und gemultiplext werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Veränderung der Lautstärke. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das einen gegebenen _Gewinn_ auf die Eingangsdaten anwendet, bevor diese an den Ausgang weitergegeben werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Wave-Shaping-Verzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es oft verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Welle, die zur Formgestaltung der Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) verwendet werden kann.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter; dieser Filtertyp kann zur Implementierung von Tonregelgeräten und grafischen Equalizern verwendet werden.

### Definition von Audiodestinationen

Sobald Sie mit der Bearbeitung Ihres Audios fertig sind, definieren diese Schnittstellen, wohin es ausgegeben wird.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle in einem gegebenen Kontext – normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert eine Audiodestination, die aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht, das auf ähnliche Weise wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audiodestination fungiert.

### Datenanalyse und Visualisierung

Wenn Sie Zeit, Frequenz und andere Daten aus Ihrem Audio extrahieren möchten, ist der `AnalyserNode` das, was Sie brauchen.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Informationen zur Frequenz- und Zeitbereichsanalyse bereitzustellen, zum Zwecke der Datenanalyse und -visualisierung.

### Aufteilen und Zusammenführen von Audiokanälen

Um Audiokanäle aufzuteilen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Gruppe von _Mono_-Ausgängen.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereint verschiedene Mono-Eingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audioräumlichkeit

Diese Schnittstellen ermöglichen es Ihnen, Räumlichkeitseffekte auf Ihre Audioquellen anzuwenden.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Orientierung der einzigartigen Person, die dem Audioszene zuhört, die in der Audioräumlichkeit verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audioquellensignals im 3D-Raum, sodass Sie komplexe Panning-Effekte erstellen können.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereopanning-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu pannen.

### Audiobearbeitung in JavaScript

Mit Audioworklets können Sie benutzerdefinierte Audioknoten definieren, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind. Audioworklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichte Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht es Ihnen, Module zum Audioworklet hinzuzufügen, die außerhalb des Haupt-Threads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einen Audiographen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` weitergeben kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audiobearbeitungscode, der in einem `AudioWorkletGlobalScope` läuft, der Audio direkt generiert, verarbeitet oder analysiert und Nachrichten an den entsprechenden `AudioWorkletNode` weitergeben kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-abgeleitetes Objekt, das einen Worker-Kontext darstellt, in dem ein Audiobearbeitungsskript ausgeführt wird; sie ist darauf ausgelegt, die Erzeugung, Verarbeitung und Analyse von Audiodaten direkt mithilfe von JavaScript in einem Worklet-Thread statt im Haupt-Thread zu ermöglichen.

#### Veraltet: Skript-Processor-Knoten

Vor der Definition von Audioworklets verwendete die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Haupt-Thread läuft, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist aber als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mithilfe von JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das mit zwei Puffern verbunden ist, einer, der den aktuellen Eingang enthält, und einer, der den Ausgang enthält. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird an das Objekt gesendet, jedes Mal, wenn der Eingabepuffer neue Daten enthält, und die Ereignisbehandlung endet, wenn der Ausgabepuffer mit Daten gefüllt ist.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) zur Verarbeitung bereit ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Der `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) Eingabepuffer zur Verarbeitung bereit ist.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audiographen sehr schnell im Hintergrund zu verarbeiten/rendern – ihn in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt ihn auf die Lautsprecher des Geräts auszugeben – mit dem folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audioverarbeitungsgraphen darstellt, der aus verknüpften [`AudioNode`](/de/docs/Web/API/AudioNode) aufgebaut ist. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` nicht wirklich das Audio, sondern erzeugt es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{LandingPageListSubpages}}

## Beispiele

Sie finden eine Reihe von Beispielen in unserem [webaudio-example repository](https://github.com/mdn/webaudio-examples/) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Erstellung von Sound, Sequenzierung, Zeitplanung, Terminplanung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung von IIR-Filter](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischen von positionalem Audio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spieletönen mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): eine einfache Bibliothek zum Abspielen spezifischer Töne/Noten unter Verwendung der Web Audio API.
- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audiobibliothek, die standardmäßig auf die [Web Audio API](https://webaudio.github.io/web-audio-api/) und bei Bedarf auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückgreift und weitere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-Style-Chaining von AudioNodes, Mixerstyle-Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachenlabor-Webanwendung, die die Web Audio API verwendet, um Video und Audio aus verschiedenen Quellen aufzunehmen und zu einer einzigen Datei zu kombinieren ([Quellcode auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

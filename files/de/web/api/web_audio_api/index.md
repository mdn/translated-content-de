---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Audio API")}}

Das Web-Audio-API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Es ermöglicht Entwicklern, Audioquellen zu wählen, Effekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) anzuwenden und vieles mehr.

## Web-Audio-Konzepte und Nutzung

Das Web-Audio-API umfasst die Durchführung von Audio-Operationen innerhalb eines **Audio-Kontexts** und wurde so entworfen, dass **modulares Routing** ermöglicht wird. Grundlegende Audio-Operationen werden mit **Audio-Knoten** durchgeführt, die zusammen verknüpft werden, um ein **Audio-Routing-Diagramm** zu bilden. Mehrere Quellen mit unterschiedlichen Kanal-Layouts werden sogar innerhalb eines einzigen Kontexts unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audio-Funktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten werden durch ihre Ein- und Ausgänge in Ketten und einfachen Netzwerken verlinkt. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen stellen Arrays von Lautstärkepegeln (Samples) in sehr kleinen Zeitabschnitten bereit, oft zehntausende von ihnen pro Sekunde. Diese können entweder mathematisch berechnet werden (wie [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder sie können Aufnahmen von Audio-/Videodateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) und Audio-Streams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Sounddateien lediglich Aufnahmen von Lautstärkepegeln, die von Mikrofonen oder elektrischen Instrumenten kommen und in eine einzige, komplexe Welle gemischt werden.

Ausgaben dieser Knoten können mit Eingängen anderer verlinkt werden, die diese Streams von Sound-Samples in unterschiedliche Streams mischen oder modifizieren. Eine übliche Modifikation ist das Multiplizieren der Samples mit einem Wert, um sie lauter oder leiser zu machen (wie im Fall von [`GainNode`](/de/docs/Web/API/GainNode)). Sobald der Sound ausreichend für den gewünschten Effekt verarbeitet wurde, kann er mit der Eingabe eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Sound an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Workflow für Web-Audio könnte folgendermaßen aussehen:

1. Audio-Kontext erstellen
2. Innerhalb des Kontexts Quellen erstellen — wie `<audio>`, Oszillator, Stream
3. Effektknoten erstellen, wie Nachhall, Biquad-Filter, Panner, Kompressor
4. Endziel des Audios wählen, zum Beispiel die Systemlautsprecher
5. Die Quellen mit den Effekten verbinden und die Effekte mit dem Ziel.

![Ein einfaches Blockdiagramm mit einem äußeren Block, der mit Audiokontext beschriftet ist, und drei inneren Blöcken, die mit Quellen, Effekten und Ziel beschriftet sind. Die drei inneren Blöcke haben Pfeile dazwischen, die von links nach rechts zeigen, wodurch der Fluss der Audioinformation angezeigt wird.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz gesteuert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, spezifische Samples, selbst bei einer hohen Abtastrate, anzusprechen. Anwendungen wie Drum Machines und Sequencer sind also gut erreichbar.

Das Web-Audio-API ermöglicht es uns auch, zu kontrollieren, wie Audio _räumlich angeordnet_ wird. Mithilfe eines auf einem _Quelle-Hörer-Modell_ basierenden Systems ermöglicht es die Kontrolle des _Panning-Modells_ und behandelt _abstandsbedingte Abschwächung_, die durch eine sich bewegende Quelle (oder Hörer) verursacht wird.

> [!NOTE]
> Sie können mehr über die Theorie des Web-Audio-API detailliert in unserem Artikel [Grundkonzepte des Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) lesen.

## Zielgruppe des Web-Audio-API

Das Web-Audio-API kann auf diejenigen einschüchternd wirken, die nicht mit Audio- oder Musikbegriffen vertraut sind, und da es eine Vielzahl von Funktionalitäten umfasst, kann es für Entwickler schwierig sein zu starten.

Es kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem es [Atmosphäre wie futurelibrary.no bereitstellt](https://www.futurelibrary.no/) oder [akustische Rückmeldung in Formularen bietet](https://css-tricks.com/form-validation-web-audio/). Doch es kann auch verwendet werden, um _fortschrittliche_ interaktive Instrumente zu schaffen. Damit ist es sowohl für Entwickler als auch Musiker gleichermaßen geeignet.

Wir haben ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit dem Programmieren vertraut sind, aber eine gute Einführung in einige der Begriffe und Strukturen der API benötigen.

Es gibt auch einen Artikel [Grundkonzepte des Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen helfen soll zu verstehen, wie digitale Audioarbeiten, insbesondere im Bereich der API, funktionieren. Dies beinhaltet auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Das Erlernen des Codierens ist wie das Kartenspielen — Sie lernen die Regeln, dann spielen Sie, dann gehen Sie zurück und lernen die Regeln erneut, dann spielen Sie wieder. Wenn einige der Theorien nach dem ersten Tutorial und dem Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen bei der Übung dessen, was Sie gelernt haben, zu helfen und einige fortgeschrittene Techniken anzuwenden, um einen Step-Sequencer aufzubauen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial, das alle Funktionen der API abdeckt. Siehe die Seitenleiste auf dieser Seite für mehr.

Wenn Sie mit dem musikalischen Aspekt vertrauter sind, mit Musiktheorie-Konzepten vertraut sind und anfangen möchten, Instrumente zu bauen, dann können Sie mit dem fortgeschrittenen Tutorial und anderen als Leitfaden loslegen (das oben verlinkte Tutorial behandelt die Planung von Noten, Erstellung maßgeschneiderter Oszillatoren und Hüllkurven sowie eines LFOs unter anderem).

Sollten Sie nicht mit den Programmiergrundlagen vertraut sein, möchten Sie vielleicht zuerst einige Anfängertutorials zu JavaScript konsultieren und dann hierher zurückkehren - sehen Sie sich unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn_web_development/Core/Scripting) für einen guten Ausgangspunkt an.

## Schnittstellen des Web-Audio-API

Das Web-Audio-API hat eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition des Audio-Diagramms

Allgemeine Container und Definitionen, die Audio-Diagramme im Einsatz des Web-Audio-API modellieren.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle repräsentiert ein Audiobearbeitungs-Diagramm, das aus miteinander verbundenen Audiomodulen aufgebaut ist, von denen jedes durch ein [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert wird. Ein Audiokontext steuert die Erstellung der Knoten, die er enthält, und die Durchführung der Audiobearbeitung oder Decodierung. Sie müssen ein `AudioContext` erstellen, bevor Sie etwas anderes tun, da alles innerhalb eines Kontexts geschieht.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audiobearbeitungsmodule wie eine _Audioquelle_ (z.B. ein HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element), ein _Audi-Ziel_, ein _Zwischenbearbeitungsmodul_ (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen Audio-bezogenen Parameter, wie einen von einem [`AudioNode`](/de/docs/Web/API/AudioNode). Sie kann auf einen bestimmten Wert eingestellt oder eine Wertänderung angesetzt werden, und kann programmiert werden, zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster zu geschehen.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine kartenähnliche Schnittstelle für eine Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass es die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bereitstellt.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle fungiert als Baseline-Definition für Online- und Offline-Audioverarbeitungsdiagramme, wie sie durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) jeweils repräsentiert werden. Sie würden `BaseAudioContext` nicht direkt verwenden — Sie würden seine Funktionen über eine der beiden vererbenden Schnittstellen nutzen.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)-Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wird, weil das Ende der Medien erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen zur Verwendung im Web-Audio-API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine Eltern-Schnittstelle für verschiedene Arten von AudiosOURCE-Knoten-Schnittstellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, wie eine Sinus- oder Dreieckswelle. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das eine gegebene _Frequenz_ einer Welle erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle repräsentiert ein kurzes Audio-Asset, das im Speicher liegt und aus einer Audiodatei mit der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) erstellt wird, oder mit Rohdaten mit [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt wird. Sobald es in dieser Form dekodiert ist, kann das Audio dann in einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) verwendet werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus Audiodaten im Arbeitsspeicher besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML {{ htmlelement("audio") }} oder {{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) (wie eine Webcam, Mikrofon oder ein Stream, der von einem entfernten Computer gesendet wird) besteht. Wenn mehrere Audiospuren im Stream vorhanden sind, wird die Spur verwendet, deren [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikographisch (alphabetisch) zuerst kommt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten des Typs [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) stellt eine Audioquelle dar, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Knotens mit der [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource)-Methode zur Erstellung des Knotens geben Sie an, welche Spur verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Tonregelgeräten oder graphischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Lineare Faltung auf einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und oft verwendet wird, um einen Nachhall-Effekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://de.wikipedia.org/wiki/Digitales_Verl%C3%A4ngerung); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingabedaten und deren Weiterleitung an den Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um zu helfen, Clipping und Verzerrungen zu vermeiden, die auftreten können, wenn mehrere Sounds gleichzeitig gespielt und gemultiplext werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Änderung der Lautstärke. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das einen bestimmten _Verstärker_ auf die Eingabedaten anwendet, bevor er auf die Ausgabe weitergeleitet wird.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Verzerrung des Signals zu bewirken. Neben offensichtlichen Verzerrungseffekten wird sie oft verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [Infinite Impulse Response](https://de.wikipedia.org/wiki/Faltung)-Filter (IIR); dieser Filtertyp kann verwendet werden, um Tonregelgeräte und graphische Equalizer zu implementieren.

### Definition von Audio-Zielen

Sobald Sie mit der Verarbeitung Ihres Audios fertig sind, definieren diese Schnittstellen, wohin es ausgegeben werden soll.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Ende einer Audioquelle in einem bestimmten Kontext — normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert ein Audioziel bestehend aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzigen `AudioMediaStreamTrack`, welcher auf ähnliche Weise wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und -visualisierung

Wenn Sie Zeit, Frequenz und andere Daten aus Ihrem Audio extrahieren möchten, benötigen Sie den `AnalyserNode`.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der Echtzeit-Frequenz- und Zeitbereichsanalyseinformationen bereitstellen kann, für die Zwecke der Datenanalyse und Visualisierung.

### Trennen und Zusammenführen von Audiokanälen

Um Audiokanäle zu trennen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Monokanälen_-Ausgängen auf.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereinigt verschiedenen Monoeingänge in einen einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Raumklang

Diese Schnittstellen ermöglichen Ihnen das Hinzufügen von Raumklang-Panning-Effekten zu Ihren Audioquellen.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Orientierung der einzigartigen Person, die die Audioszene hört, die bei der Audioklanggestaltung verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audioquellensignals im 3D-Raum, wodurch es Ihnen ermöglicht wird, komplexe Panning-Effekte zu erstellen.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereo-Panner-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu schwenken.

### Audiobearbeitung in JavaScript

Unter Verwendung von Audioworklets können Sie benutzerdefinierte Audioknoten in JavaScript oder [WebAssembly](/de/docs/WebAssembly) definieren. Audioworklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, einer leichten Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist verfügbar über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) und ermöglicht es Ihnen, Module zum Audioworklet hinzuzufügen, die außerhalb des Hauptthreads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in ein Audiodiagramm eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Code zur Audiobearbeitung, der im `AudioWorkletGlobalScope` ausgeführt wird, das Audio direkt generiert, verarbeitet oder analysiert und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-Objekt, das einen Arbeitskontext repräsentiert, in dem ein Audiobearbeitungsskript ausgeführt wird. Sie ist darauf ausgelegt, die Generierung, Verarbeitung und Analyse von Audiodaten direkt unter Verwendung von JavaScript in einem Worklet-Thread anstatt im Hauptthread zu ermöglichen.

#### Veraltet: Skriptverarbeitungsknoten

Bevor Audioworklets definiert wurden, verwendete das Web-Audio-API den `ScriptProcessorNode` für die JavaScript-basierte Audiobearbeitung. Da der Code im Hauptthread läuft, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Generierung, Verarbeitung oder Analyse von Audio unter Verwendung von JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das mit zwei Puffer verbunden ist, von denen einer den aktuellen Eingang enthält und der andere die Ausgabe. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird an das Objekt gesendet, jedes Mal wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler wird beendet, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web-Audio-API-`ScriptProcessorNode` zur Bearbeitung bereit ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` stellt Ereignisse dar, die auftreten, wenn ein Eingabepuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit zur Bearbeitung ist.

### Offline-/Hintergrund-Audioverarbeitung

Es ist möglich, ein Audiodiagramm sehr schnell im Hintergrund zu verarbeiten/rendern - es in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) anstatt in die Lautsprecher des Geräts zu rendern - mit dem Folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die ein Audiobearbeitungsdiagramm repräsentiert, das aus miteinander verbundenen [`AudioNode`](/de/docs/Web/API/AudioNode)s besteht. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern generiert es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` stellt Ereignisse dar, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{SubpagesWithSummaries}}

## Beispiele

Sie können eine Reihe von Beispielen auf unserem [webaudio-examples Repo](https://github.com/mdn/webaudio-examples/) auf GitHub finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundkonzepte des Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung des Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Klang erstellen, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Automatische Wiedergabe-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Audioklanggestaltung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischen von Positionsaudio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spiel-Audio mit dem Web-Audio-API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): eine einfache Bibliothek zur Wiedergabe spezifischer Töne/Noten mit dem Web-Audio-API.
- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audiobibliothek, die standardmäßig auf [Web-Audio-API](https://webaudio.github.io/web-audio-api/) und HTML Audio zurückfällt und weitere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliche Verkettung von AudioNodes, Mischpultstil-Send/Returns und mehr.
- [XSound](https://xsound.jp/): Web-Audio-API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung, die das Web-Audio-API verwendet, um Video und Audio von verschiedenen Quellen in einer Datei aufzuzeichnen und zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfachte Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

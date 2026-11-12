---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Entwickler können damit Audioquellen auswählen, Effekte hinzufügen, Audiovisualisierungen erstellen, räumliche Effekte wie Panning anwenden und vieles mehr.

## Konzepte und Verwendung von Web Audio

Bei der Web Audio API werden Audiooperationen innerhalb eines **Audiokontexts** ausgeführt. Die API ist für ein **modulares Routing** ausgelegt. Grundlegende Audiooperationen werden von **Audioknoten** ausgeführt, die zu einem **Audiorouting-Graphen** verbunden sind. Selbst innerhalb eines einzelnen Kontexts werden mehrere Quellen mit unterschiedlichen Kanalanordnungen unterstützt. Dieser modulare Aufbau ermöglicht komplexe Audiofunktionen mit dynamischen Effekten.

Audioknoten werden über ihre Ein- und Ausgänge zu Ketten und einfachen Netzen verbunden. Am Anfang stehen in der Regel eine oder mehrere Quellen. Quellen liefern Folgen von Samples – Messwerte der Amplitude des Audiosignals zu aufeinanderfolgenden Zeitpunkten, oft mehrere Zehntausend pro Sekunde. Diese können mathematisch berechnet werden, wie bei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), oder aus Aufnahmen in Audio- oder Videodateien stammen, wie bei [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode), beziehungsweise aus Audiostreams, wie bei [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode). Audiodateien sind letztlich Aufzeichnungen von Schallintensitäten, die von Mikrofonen oder elektrischen Instrumenten aufgenommen und zu einer einzigen komplexen Wellenform zusammengemischt wurden.

Die Ausgänge dieser Knoten können mit den Eingängen anderer Knoten verbunden werden, die die Ströme von Audiosamples mischen oder verändern. Eine häufige Veränderung besteht darin, die Samples mit einem Wert zu multiplizieren, um sie lauter oder leiser zu machen, wie bei [`GainNode`](/de/docs/Web/API/GainNode). Sobald das Audiosignal für den gewünschten Effekt ausreichend verarbeitet wurde, kann es mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Ton an Lautsprecher oder Kopfhörer ausgibt. Diese letzte Verbindung ist nur erforderlich, wenn die Nutzer den Ton hören sollen.

Ein einfacher, typischer Arbeitsablauf für Web Audio sieht etwa so aus:

1. Einen Audiokontext erstellen
2. Innerhalb des Kontexts Quellen erstellen, beispielsweise `<audio>`, einen Oszillator oder einen Stream
3. Effektknoten erstellen, beispielsweise für Hall, Biquad-Filter, Panning oder Kompression
4. Das endgültige Ausgabeziel für das Audiosignal auswählen, beispielsweise die Systemlautsprecher
5. Die Quellen mit den Effekten und die Effekte mit dem Ausgabeziel verbinden

![Ein einfaches Kastendiagramm mit einem äußeren Kasten mit der Beschriftung „Audio context“ und drei inneren Kästen mit den Beschriftungen „Sources“, „Effects“ und „Destination“. Pfeile zwischen den inneren Kästen zeigen von links nach rechts und veranschaulichen den Fluss der Audioinformationen.](audio-context_.png)

Die zeitliche Steuerung erfolgt mit hoher Präzision und geringer Latenz. Dadurch können Entwickler Code schreiben, der genau auf Ereignisse reagiert und selbst bei einer hohen Abtastrate bestimmte Samples gezielt anspricht. Anwendungen wie Drumcomputer und Sequenzer lassen sich damit gut umsetzen.

Mit der Web Audio API lässt sich auch steuern, wie Audio _räumlich dargestellt_ wird. Auf Grundlage eines _Quelle-Hörer-Modells_ ermöglicht sie die Steuerung des _Panning-Modells_ und berücksichtigt die _entfernungsbedingte Abschwächung_, die durch eine sich bewegende Quelle oder einen sich bewegenden Hörer entsteht.

> [!NOTE]
> Eine ausführlichere Erklärung der Theorie hinter der Web Audio API finden Sie in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API).

## Zielgruppe der Web Audio API

Für Personen, die mit Audio- oder Musikbegriffen nicht vertraut sind, kann die Web Audio API zunächst einschüchternd wirken. Wegen ihres großen Funktionsumfangs kann auch Entwicklern der Einstieg schwerfallen.

Sie können damit Audio in Ihre Website oder Anwendung einbinden, etwa um [wie auf futurelibrary.no eine Atmosphäre zu schaffen](https://www.futurelibrary.no/) oder [akustisches Feedback für Formulare](https://css-tricks.com/form-validation-web-audio/) bereitzustellen. Sie können die API aber auch für _fortgeschrittene_ interaktive Instrumente verwenden. Sie eignet sich daher sowohl für Entwickler als auch für Musiker.

Für Personen mit Programmiererfahrung, die eine Einführung in die Begriffe und den Aufbau der API benötigen, bieten wir ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

Außerdem gibt es den Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API). Er erklärt, wie digitales Audio insbesondere im Rahmen der API funktioniert, und führt in einige der Konzepte ein, auf denen die API beruht.

Programmieren zu lernen ist wie Kartenspielen: Sie lernen die Regeln, spielen eine Runde, beschäftigen sich erneut mit den Regeln und spielen wieder. Falls nach dem ersten Tutorial und dem Artikel noch nicht alle theoretischen Grundlagen klar sind, können Sie mit einem [fortgeschrittenen Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques) weitermachen. Es baut auf dem ersten Tutorial auf und hilft Ihnen, das Gelernte anzuwenden und mit fortgeschritteneren Techniken einen Step-Sequenzer zu erstellen.

Weitere Tutorials und umfassendes Referenzmaterial zu allen Funktionen der API finden Sie in der Seitenleiste dieser Seite.

Wenn Sie mit der musikalischen Seite und musiktheoretischen Konzepten bereits vertraut sind und Instrumente entwickeln möchten, können Sie das fortgeschrittene Tutorial und die weiteren Materialien als Leitfaden verwenden. Das oben verlinkte Tutorial behandelt unter anderem die zeitliche Planung von Noten, die Erstellung eigener Oszillatoren und Hüllkurven sowie einen LFO.

Wenn Ihnen die Grundlagen der Programmierung noch nicht vertraut sind, sollten Sie sich zunächst einige JavaScript-Tutorials für Einsteiger ansehen und anschließend hierher zurückkehren. Einen guten Einstieg bietet unser [JavaScript-Lernmodul für Einsteiger](/de/docs/Learn_web_development/Core/Scripting).

## Schnittstellen der Web Audio API

Die Web Audio API umfasst zahlreiche Schnittstellen und zugehörige Ereignisse, die wir in neun Funktionsbereiche unterteilt haben.

### Allgemeine Definition des Audiographen

Allgemeine Container und Definitionen, die Audiographen bei der Verwendung der Web Audio API strukturieren.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die Schnittstelle **`AudioContext`** stellt einen Audiographen dar, der aus miteinander verbundenen Audiomodulen besteht, die jeweils durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert werden. Ein Audiokontext steuert die Erstellung der darin enthaltenen Knoten sowie die Ausführung der Audioverarbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie etwas anderes tun, da sämtliche Vorgänge innerhalb eines Kontexts stattfinden.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die Schnittstelle **`AudioNode`** stellt ein Audioverarbeitungsmodul dar, beispielsweise eine _Audioquelle_ wie ein HTML-Element {{HTMLElement("audio")}} oder {{HTMLElement("video")}}, ein _Audioausgabeziel_ oder ein _zwischengeschaltetes Verarbeitungsmodul_ wie einen Filter vom Typ [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder einen _Lautstärkeregler_ vom Typ [`GainNode`](/de/docs/Web/API/GainNode).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die Schnittstelle **`AudioParam`** stellt einen audiobezogenen Parameter dar, beispielsweise einen Parameter eines [`AudioNode`](/de/docs/Web/API/AudioNode). Für ihn können ein bestimmter Wert oder eine Wertänderung festgelegt werden. Änderungen lassen sich für einen bestimmten Zeitpunkt und nach einem bestimmten Muster planen.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Stellt für eine Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen eine Map-ähnliche Schnittstelle bereit. Sie bietet die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie die Eigenschaft `size`.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die Schnittstelle **`BaseAudioContext`** dient als Basisdefinition für Audiographen zur Echtzeit- und Offlineverarbeitung, die durch [`AudioContext`](/de/docs/Web/API/AudioContext) beziehungsweise [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) repräsentiert werden. `BaseAudioContext` verwenden Sie nicht direkt, sondern greifen über eine dieser beiden abgeleiteten Schnittstellen auf seine Funktionen zu.
- Das Ereignis [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Das Ereignis `ended` wird ausgelöst, wenn die Wiedergabe stoppt, weil das Ende des Mediums erreicht wurde.

### Audioquellen definieren

Schnittstellen zur Definition von Audioquellen für die Verwendung mit der Web Audio API.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für verschiedene Arten von Audioquellenknoten. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die Schnittstelle **`OscillatorNode`** stellt eine periodische Wellenform dar, die sinus-, rechteck-, sägezahn- oder dreieckförmig oder benutzerdefiniert sein kann. Sie ist ein Audioverarbeitungsmodul vom Typ [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Welle mit einer bestimmten _Frequenz_ erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die Schnittstelle **`AudioBuffer`** stellt ein kurzes, im Arbeitsspeicher befindliches Audiomaterial dar. Es kann mithilfe der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) aus einer Audiodatei oder mithilfe von [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) aus Rohdaten erstellt werden. Nachdem das Audio in diese Form dekodiert wurde, kann es in einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) verwendet werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die Schnittstelle **`AudioBufferSourceNode`** stellt eine Audioquelle dar, deren Audiodaten im Arbeitsspeicher in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der als Audioquelle dient.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die Schnittstelle **`MediaElementAudioSourceNode`** stellt eine Audioquelle dar, die aus einem HTML-Element {{ htmlelement("audio") }} oder {{ htmlelement("video") }} besteht. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der als Audioquelle dient.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die Schnittstelle **`MediaStreamAudioSourceNode`** stellt eine Audioquelle dar, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) besteht, beispielsweise aus einer Webcam, einem Mikrofon oder einem von einem entfernten Computer gesendeten Stream. Enthält der Stream mehrere Audiospuren, wird die Spur verwendet, deren [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikografisch (alphabetisch) an erster Stelle steht. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der als Audioquelle dient.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) stellt eine Audioquelle dar, deren Daten aus einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Wenn Sie den Knoten mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) erstellen, geben Sie die zu verwendende Spur an. Dadurch haben Sie mehr Kontrolle als mit `MediaStreamAudioSourceNode`.

### Filter für Audioeffekte definieren

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die Schnittstelle **`BiquadFilterNode`** stellt einen einfachen Filter niedriger Ordnung dar. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der verschiedene Filterarten, Klangregler oder grafische Equalizer darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die Schnittstelle **`ConvolverNode`** ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der eine lineare Faltung auf einen bestimmten [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) anwendet und häufig zur Erzeugung eines Halleffekts verwendet wird.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die Schnittstelle **`DelayNode`** stellt eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line) dar: ein Audioverarbeitungsmodul vom Typ [`AudioNode`](/de/docs/Web/API/AudioNode), das die Weitergabe eingehender Daten an den Ausgang verzögert.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die Schnittstelle **`DynamicsCompressorNode`** bietet einen Kompressionseffekt, der die Lautstärke der lautesten Signalanteile verringert. So lassen sich Clipping und Verzerrungen vermeiden, die auftreten können, wenn mehrere Klänge gleichzeitig wiedergegeben und zusammengemischt werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die Schnittstelle **`GainNode`** stellt eine Lautstärkeänderung dar. Sie ist ein Audioverarbeitungsmodul vom Typ [`AudioNode`](/de/docs/Web/API/AudioNode), das die Eingangsdaten mit einem bestimmten _Verstärkungsfaktor_ multipliziert, bevor es sie an den Ausgang weitergibt.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die Schnittstelle **`WaveShaperNode`** stellt einen nichtlinearen Verzerrer dar. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der mithilfe einer Kurve eine Waveshaping-Verzerrung auf das Signal anwendet. Neben deutlich hörbaren Verzerrungseffekten wird er häufig verwendet, um dem Signal einen wärmeren Klang zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, mit der sich die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) formen lässt.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen Filter mit [unendlicher Impulsantwort](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR). Dieser Filtertyp kann auch für Klangregler und grafische Equalizer verwendet werden.

### Audioausgabeziele definieren

Nach der Verarbeitung Ihres Audios legen diese Schnittstellen fest, wo es ausgegeben wird.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die Schnittstelle **`AudioDestinationNode`** stellt das endgültige Ausgabeziel einer Audioquelle in einem bestimmten Kontext dar – normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die Schnittstelle **`MediaStreamAudioDestinationNode`** stellt ein Audioausgabeziel dar, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API)-[`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht. Dieser kann ähnlich wie ein über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhaltener [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden. Sie ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der als Audioausgabeziel dient.

### Datenanalyse und Visualisierung

Schnittstellen zum Abrufen von Statistiken aus dem Audiographen für die Datenanalyse und Visualisierung.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Stellt einen Knoten dar, der Informationen zur Frequenz- und Zeitbereichsanalyse in Echtzeit bereitstellen kann.
- [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)
  - : Ermöglicht den Zugriff auf Statistiken zu Dauer, Pufferunterläufen und Latenz des zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Anhand dieser Statistiken können Sie Audioverzögerungen und Wiedergabestörungen messen.

### Audiokanäle aufteilen und zusammenführen

Mit diesen Schnittstellen können Sie Audiokanäle aufteilen und zusammenführen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die Schnittstelle **`ChannelSplitterNode`** trennt die verschiedenen Kanäle einer Audioquelle in mehrere _Mono_-Ausgänge auf.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die Schnittstelle **`ChannelMergerNode`** führt verschiedene Mono-Eingänge zu einem einzigen Ausgang zusammen. Jeder Eingang belegt dabei einen Kanal des Ausgangs.

### Räumliche Audiowiedergabe

Mit diesen Schnittstellen können Sie Ihren Audioquellen räumliche Panning-Effekte hinzufügen.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die Schnittstelle **`AudioListener`** stellt die Position und Ausrichtung der einzelnen hörenden Person in der räumlichen Audioszene dar.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die Schnittstelle **`PannerNode`** stellt die Position und das Verhalten eines Audioquellensignals im dreidimensionalen Raum dar und ermöglicht komplexe Panning-Effekte.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die Schnittstelle **`StereoPannerNode`** stellt einen einfachen Stereo-Panning-Knoten dar, mit dem ein Audiostream nach links oder rechts verschoben werden kann.

### Audioverarbeitung in JavaScript

Mit Audio-Worklets können Sie eigene Audioknoten definieren, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind. Audio-Worklets implementieren die Schnittstelle [`Worklet`](/de/docs/Web/API/Worklet), eine schlankere Variante der Schnittstelle [`Worker`](/de/docs/Web/API/Worker).

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die Schnittstelle `AudioWorklet` ist über die Eigenschaft [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) eines [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekts verfügbar. Mit ihr können Sie dem Audio-Worklet Module hinzufügen, die außerhalb des Haupt-Threads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die Schnittstelle `AudioWorkletNode` stellt einen [`AudioNode`](/de/docs/Web/API/AudioNode) dar, der in einen Audiographen eingebunden ist und Nachrichten mit dem zugehörigen `AudioWorkletProcessor` austauschen kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die Schnittstelle `AudioWorkletProcessor` stellt Audioverarbeitungscode dar, der in einem `AudioWorkletGlobalScope` ausgeführt wird, Audio direkt erzeugt, verarbeitet oder analysiert und Nachrichten mit dem zugehörigen `AudioWorkletNode` austauschen kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die Schnittstelle `AudioWorkletGlobalScope` ist ein von `WorkletGlobalScope` abgeleitetes Objekt, das einen Worker-Kontext für die Ausführung eines Audioverarbeitungsskripts darstellt. Sie ermöglicht es, Audiodaten mit JavaScript direkt in einem Worklet-Thread statt im Haupt-Thread zu erzeugen, zu verarbeiten und zu analysieren.

#### Veraltet: Script-Processor-Knoten

Bevor Audio-Worklets definiert wurden, verwendete die Web Audio API `ScriptProcessorNode` für die Audioverarbeitung mit JavaScript. Da der Code im Haupt-Thread ausgeführt wird, ist die Leistung schlecht. `ScriptProcessorNode` bleibt aus historischen Gründen erhalten, ist aber als veraltet gekennzeichnet.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die Schnittstelle **`ScriptProcessorNode`** ermöglicht es, Audio mit JavaScript zu erzeugen, zu verarbeiten oder zu analysieren. Sie ist ein Audioverarbeitungsmodul vom Typ [`AudioNode`](/de/docs/Web/API/AudioNode), das mit zwei Puffern verbunden ist: einem für die aktuellen Eingangsdaten und einem für die Ausgangsdaten. Jedes Mal, wenn der Eingangspuffer neue Daten enthält, wird ein Ereignis an das Objekt gesendet, das die Schnittstelle [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) implementiert. Der Event-Handler endet, sobald er den Ausgangspuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das Ereignis `audioprocess` wird ausgelöst, wenn ein Eingangspuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) der Web Audio API zur Verarbeitung bereit ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : `AudioProcessingEvent` stellt Ereignisse dar, die auftreten, wenn ein Eingangspuffer eines [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) zur Verarbeitung bereit ist.

### Offline- und Hintergrundverarbeitung von Audio

Mit den folgenden Schnittstellen können Sie einen Audiographen im Hintergrund sehr schnell verarbeiten beziehungsweise rendern – in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) statt über die Lautsprecher des Geräts.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die Schnittstelle **`OfflineAudioContext`** ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audiographen aus miteinander verbundenen [`AudioNode`](/de/docs/Web/API/AudioNode)-Knoten darstellt. Im Gegensatz zu einem normalen `AudioContext` gibt ein `OfflineAudioContext` das Audio nicht in Echtzeit wieder, sondern erzeugt es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das Ereignis `complete` wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : `OfflineAudioCompletionEvent` stellt Ereignisse dar, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist. Das Ereignis [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) verwendet diese Schnittstelle.

## Leitfäden und Tutorials

{{SubpagesWithSummaries}}

## Bibliotheken

- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JavaScript-Audiobibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) nutzt und andernfalls auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückgreift. Sie bietet außerdem weitere nützliche Funktionen.
- [Mooog](https://github.com/mattlima/mooog): jQuery-artige Verkettung von AudioNodes, Sends und Returns nach dem Vorbild eines Mischpults und mehr.
- [XSound](https://xsound.jp/): eine Bibliothek für die Web Audio API für Synthesizer, Effekte, Visualisierung, Aufnahmen und mehr.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): eine Webanwendung für ein HTML-Video-Sprachlabor, die mit der Web Audio API Video und Audio aus verschiedenen Quellen aufzeichnet und in einer einzigen Datei zusammenführt ([Quellcode auf GitHub](https://github.com/chrisjohndigital/OpenLang)).
- [Pts.js](https://ptsjs.org/): vereinfacht die Visualisierung von Web Audio ([Leitfaden](https://ptsjs.org/guide/sound-0800)).

## Beispiele

Eine Reihe von Beispielen finden Sie in unserem [Repository webaudio-examples](https://github.com/mdn/webaudio-examples/) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Klänge erzeugen, Sequenzierung, Timing und zeitliche Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay)
- [IIR-Filter verwenden](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der räumlichen Audiowiedergabe im Web](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Positionsabhängiges Audio und WebGL kombinieren (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Audio für Spiele mit der Web Audio API entwickeln (2012)](https://web.dev/articles/webaudio-games)

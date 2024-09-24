---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Entwicklern wird ermöglicht, Audioquellen auszuwählen, Effekte auf Audio anzuwenden, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) einzusetzen und vieles mehr.

## Web-Audio-Konzepte und Nutzung

Die Web Audio API umfasst die Verwaltung von Audiooperationen innerhalb eines **audio context** und wurde so gestaltet, dass **modulares Routing** ermöglicht wird. Grundlegende Audiooperationen werden mit **audio nodes** durchgeführt, die miteinander verknüpft werden, um einen **audio routing graph** zu bilden. Mehrere Quellen – mit unterschiedlichen Kanallayouts – werden auch innerhalb eines einzigen Kontextes unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten sind durch ihre Eingänge und Ausgänge zu Ketten und einfachen Netzen verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schalldruckpegeln (Samples) in sehr kleinen Zeitintervallen, oft zehntausende pro Sekunde. Diese können entweder mathematisch berechnet werden (wie bei {{domxref("OscillatorNode")}}), oder Aufnahmen von Audio-/Videodateien (wie {{domxref("AudioBufferSourceNode")}} und {{domxref("MediaElementAudioSourceNode")}}) sowie Audiostreams ({{domxref("MediaStreamAudioSourceNode")}}) sein. Tatsächlich sind Audiodateien selbst nur Aufnahmen von Schalldruckpegeln, die von Mikrofonen oder elektrischen Instrumenten kommen und zu einer einzigen, komplexen Welle abgemischt werden.

Ausgänge dieser Knoten können mit Eingängen anderer Knoten verbunden werden, die diese Audio-Sample-Ströme mischen oder modifizieren. Eine häufige Modifikation ist das Multiplizieren der Samples mit einem Wert, um sie lauter oder leiser zu machen (wie im Fall des {{domxref("GainNode")}}). Sobald der Klang für den beabsichtigten Effekt ausreichend bearbeitet wurde, kann er mit dem Eingang eines Ziels ({{domxref("BaseAudioContext.destination")}}) verbunden werden, das den Klang an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfaches, typisches Arbeitsablaufschema für Web-Audio könnte wie folgt aussehen:

1. Erstellen Sie einen Audio-Kontext
2. Erstellen Sie innerhalb des Kontextes Quellen – wie `<audio>`, Oszillator, Stream
3. Erstellen Sie Effektknoten, wie Hall, Biquad-Filter, Panner, Kompressor
4. Wählen Sie das endgültige Ziel des Audios, zum Beispiel Ihre Systemlautsprecher
5. Verbinden Sie die Quellen mit den Effekten und die Effekte mit dem Ziel.

![Ein einfaches Box-Diagramm mit einer äußeren Box, die als Audio-Kontext bezeichnet ist, und drei inneren Boxen, die als Quellen, Effekte und Ziel bezeichnet sind. Die drei inneren Boxen haben Pfeile zwischen sich, die von links nach rechts zeigen und den Fluss von Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und geringer Latenz gesteuert, was Entwicklern ermöglicht, Code zu schreiben, der genau auf Ereignisse reagiert und in der Lage ist, gezielt bestimmte Samples anzusprechen, selbst bei einer hohen Samplerate. So sind auch Anwendungen wie Drum-Machines und Sequencer in Reichweite.

Die Web Audio API ermöglicht es uns auch, wie Audio _räumlich positioniert_ wird. Anhand eines auf einem _Quellen-Hörer-Modell_ basierenden Systems erlaubt es die Kontrolle des _Panning-Modells_ und befasst sich mit der _Distanz-Abschwächung_, die durch eine bewegte Quelle (oder einen bewegten Hörer) verursacht wird.

> [!NOTE]
> Sie können die Theorie hinter der Web Audio API viel detaillierter in unserem Artikel [Grundlagenkonzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) lesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann einschüchternd wirken für diejenigen, die mit Audio- oder Musikbegriffen nicht vertraut sind, und aufgrund der vielen Funktionalitäten kann es für Entwickler schwierig sein, den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem sie [Atmosphäre schafft wie futurelibrary.no](https://www.futurelibrary.no/) oder [akustisches Feedback bei Formularen bietet](https://css-tricks.com/form-validation-web-audio/). Es ist jedoch auch möglich, damit _fortgeschrittene_ interaktive Instrumente zu erstellen. Mit diesem Gedanken ist sie sowohl für Entwickler als auch für Musiker geeignet.

Wir bieten ein [einfaches, einführendes Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit der Programmierung vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel zu den [Grundlegenden Konzepten hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), um zu helfen, das Verständnis des digitalen Audios, speziell im Bereich der API, zu erleichtern. Dieser enthält auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Programmieren lernen ist wie Kartenspielen – Sie lernen die Regeln, dann spielen Sie, dann gehen Sie zurück und lernen die Regeln erneut, dann spielen Sie erneut. Wenn einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben und einige fortgeschrittene Techniken anzuwenden, um einen Schritt-Sequenzer zu bauen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial verfügbar, das alle Funktionen der API abdeckt. Siehe die Seitenleiste auf dieser Seite für mehr.

Wenn Sie mit der musikalischen Seite besser vertraut sind, mit Konzepten der Musiktheorie vertraut sind und beginnen möchten, Instrumente zu bauen, können Sie direkt anfangen zu bauen, wobei Ihnen das fortgeschrittene Tutorial und andere als Leitfaden dienen können (das oben verlinkte Tutorial deckt das Planen von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie einen LFO unter anderem ab).

Wenn Sie mit den programmierungstechnischen Grundlagen nicht vertraut sind, möchten Sie vielleicht zuerst einige Einführungs-JavaScript-Tutorials konsultieren und dann hierher zurückkommen – sehen Sie sich unser [Einsteiger-JavaScript-Lernmodul](/de/docs/Learn/JavaScript) als einen großartigen Ausgangspunkt an.

## Schnittstellen der Web Audio API

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition des Audio-Grafen

Allgemeine Container und Definitionen, die Audio-Grafen beim Einsatz der Web Audio API formen.

- {{domxref("AudioContext")}}
  - : Die **`AudioContext`**-Schnittstelle repräsentiert einen Audio-Verarbeitungsgraf, der aus miteinander verlinkten Audiomodulen besteht, die jeweils durch einen {{domxref("AudioNode")}} dargestellt sind. Ein Audio-Kontext steuert die Erstellung der darin enthaltenen Knoten und die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontexts geschieht.
- {{domxref("AudioNode")}}
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audiomodul wie eine _Audioquelle_ (z. B. ein HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element), _Audioziel_, _Zwischenverarbeitungsmodul_ (z. B. ein Filter wie {{domxref("BiquadFilterNode")}}, oder _Lautstärkeregelung_ wie {{domxref("GainNode")}}).
- {{domxref("AudioParam")}}
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen audiobezogenen Parameter, wie einen eines {{domxref("AudioNode")}}. Er kann auf einen bestimmten Wert oder eine Wertänderung gesetzt werden und kann so geplant werden, dass er zu einer bestimmten Zeit und nach einem bestimmten Muster erfolgt.
- {{domxref("AudioParamMap")}}
  - : Bietet ein kartonähnliches Interface zu einer Gruppe von {{domxref("AudioParam")}}-Schnittstellen, was bedeutet, dass es die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bietet.
- {{domxref("BaseAudioContext")}}
  - : Die **`BaseAudioContext`**-Schnittstelle fungiert als Basisdefinition für online und offline Audio-Verarbeitungsgrafen, dargestellt durch {{domxref("AudioContext")}} bzw. {{domxref("OfflineAudioContext")}}. Sie würden `BaseAudioContext` nicht direkt verwenden – Sie würden seine Features über eine dieser beiden erbenden Schnittstellen nutzen.
- Das {{domxref("AudioScheduledSourceNode/ended_event", "ended")}}-Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen für die Verwendung in der Web Audio API definieren.

- {{domxref("AudioScheduledSourceNode")}}
  - : Der **`AudioScheduledSourceNode`** ist eine Elternschnittstelle für mehrere Arten von Audioquellen-Knoten-Schnittstellen. Er ist ein {{domxref("AudioNode")}}.
- {{domxref("OscillatorNode")}}
  - : Die **`OscillatorNode`**-Schnittstelle stellt eine periodische Wellenform dar, wie eine Sinus- oder Dreieckwelle. Es ist ein {{domxref("AudioNode")}}-Audiomodul, das eine gegebene _Frequenz_ von Wellen erzeugt.
- {{domxref("AudioBuffer")}}
  - : Die **`AudioBuffer`**-Schnittstelle stellt ein kurzes Audio-Asset dar, das im Speicher residiert, erstellt aus einer Audiodatei mithilfe der {{ domxref("BaseAudioContext.decodeAudioData") }}-Methode oder erstellt mit Rohdaten mithilfe von {{ domxref("BaseAudioContext.createBuffer") }}. Sobald es in dieser Form dekodiert ist, kann das Audio dann in einen {{ domxref("AudioBufferSourceNode") }} eingefügt werden.
- {{domxref("AudioBufferSourceNode")}}
  - : Die **`AudioBufferSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus im Speicher befindlichen Audiodaten besteht, gespeichert in einem {{domxref("AudioBuffer")}}. Es ist ein {{domxref("AudioNode")}}, das als Audioquelle fungiert.
- {{domxref("MediaElementAudioSourceNode")}}
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML-{{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element besteht. Es ist ein {{domxref("AudioNode")}}, das als Audioquelle fungiert.
- {{domxref("MediaStreamAudioSourceNode")}}
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem {{domxref("MediaStream")}} (wie einer Webcam, einem Mikrofon oder einem Stream, der von einem entfernten Computer gesendet wird) besteht. Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen {{domxref("MediaStreamTrack.id", "id")}} lexikografisch (alphabetisch) zuerst kommt. Es ist ein {{domxref("AudioNode")}}, das als Audioquelle fungiert.
- {{domxref("MediaStreamTrackAudioSourceNode")}}
  - : Ein Knoten vom Typ {{domxref("MediaStreamTrackAudioSourceNode")}} repräsentiert eine Audioquelle, deren Daten von einem {{domxref("MediaStreamTrack")}} stammen. Bei der Erstellung des Knotens mit der {{domxref("AudioContext.createMediaStreamTrackSource", "createMediaStreamTrackSource()")}}-Methode zur Erstellung des Knotens geben Sie an, welcher Track verwendet werden soll. Dies bietet im Vergleich zu `MediaStreamAudioSourceNode` mehr Kontrolle.

### Definition von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- {{domxref("BiquadFilterNode")}}
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung. Es ist ein {{domxref("AudioNode")}}, das unterschiedliche Arten von Filtern, Tonregelungsgeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- {{domxref("ConvolverNode")}}
  - : Die **`ConvolverNode`**-Schnittstelle ist ein {{domxref("AudioNode")}}, das eine lineare Faltung auf einem bestimmten {{domxref("AudioBuffer")}} durchführt und häufig verwendet wird, um einen Halleffekt zu erzielen.
- {{domxref("DelayNode")}}
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein {{domxref("AudioNode")}}-Audiomodul, das zwischen der Ankunft von Eingabedaten und deren Weiterleitung an den Ausgang eine Verzögerung verursacht.
- {{domxref("DynamicsCompressorNode")}}
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um Clipping und Verzerrungen zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und multipliziert werden.
- {{domxref("GainNode")}}
  - : Die **`GainNode`**-Schnittstelle stellt eine Lautstärkenänderung dar. Es ist ein {{domxref("AudioNode")}}-Audiomodul, das eine bestimmte _Verstärkung_ auf die Eingabedaten anwendet, bevor sie an den Ausgang weitergeleitet werden.
- {{domxref("WaveShaperNode")}}
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer. Es ist ein {{domxref("AudioNode")}}, das eine Kurve verwendet, um eine Wellformverzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es oft verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- {{domxref("PeriodicWave")}}
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um den Ausgang eines {{ domxref("OscillatorNode") }} zu formen.
- {{domxref("IIRFilterNode")}}
  - : Implementiert einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter; dieser Filtertyp kann verwendet werden, um Tonregelungsgeräte und grafische Equalizer zu implementieren.

### Definition von Audiozielen

Sobald Sie die Audioverarbeitung abgeschlossen haben, definieren diese Schnittstellen, wohin sie ausgegeben werden soll.

- {{domxref("AudioDestinationNode")}}
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle in einem gegebenen Kontext – normalerweise die Lautsprecher Ihres Geräts.
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert ein Audioziel, bestehend aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} mit einem einzelnen `AudioMediaStreamTrack`, der ähnlich verwendet werden kann wie ein {{domxref("MediaStream")}}, der von {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }} erhalten wurde. Es ist ein {{domxref("AudioNode")}}, das als Audioziel fungiert.

### Datenanalyse und -visualisierung

Wenn Sie Zeit-, Frequenz- und andere Daten aus Ihrem Audio extrahieren möchten, ist der `AnalyserNode` das, was Sie benötigen.

- {{domxref("AnalyserNode")}}
  - : Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeitanalysen von Frequenz- und Zeitbereichsinformationen bereitzustellen, zum Zwecke der Datenanalyse und Visualisierung.

### Audio-Kanäle trennen und zusammenführen

Um Audio-Kanäle zu trennen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- {{domxref("ChannelSplitterNode")}}
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Menge von _Mono_-Ausgängen.
- {{domxref("ChannelMergerNode")}}
  - : Die **`ChannelMergerNode`**-Schnittstelle vereinigt verschiedene Mono-Eingänge zu einem einzelnen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Spatialisation

Diese Schnittstellen ermöglichen es Ihnen, räumliche Pannereffekte auf Ihre Audioquellen anzuwenden.

- {{domxref("AudioListener")}}
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Orientierung der einzigartigen Person, die die Audio-Szene hört, die in der Audio-Spatialisation verwendet wird.
- {{domxref("PannerNode")}}
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audiosignal in 3D-Raum, wodurch komplexe Pannereffekte erzeugt werden können.
- {{domxref("StereoPannerNode")}}
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereo-Panner-Knoten, mit dem ein Audiostream nach links oder rechts gepannt werden kann.

### Audiobearbeitung in JavaScript

Mit Audio-Worklets können Sie benutzerdefinierte Audioknoten in JavaScript oder [WebAssembly](/de/docs/WebAssembly) definieren. Audio-Worklets implementieren die {{domxref("Worklet")}}-Schnittstelle, eine leichte Version der {{domxref("Worker")}}-Schnittstelle.

- {{domxref("AudioWorklet")}}
  - : Die `AudioWorklet`-Schnittstelle ist über das {{domxref("AudioContext")}}-Objekt's {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} verfügbar und ermöglicht es Ihnen, Module zu dem Audio-Worklet hinzuzufügen, das außerhalb des Haupt-Threads ausgeführt wird.
- {{domxref("AudioWorkletNode")}}
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen {{domxref("AudioNode")}}, der in einen Audiograf eingebettet ist und Nachrichten zum entsprechenden `AudioWorkletProcessor` senden kann.
- {{domxref("AudioWorkletProcessor")}}
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audio-Verarbeitungscode, der im `AudioWorkletGlobalScope` läuft und Audio direkt generiert, verarbeitet oder analysiert und Nachrichten zum entsprechenden `AudioWorkletNode` senden kann.
- {{domxref("AudioWorkletGlobalScope")}}
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-abgeleitetes Objekt, das einen Worker-Kontext darstellt, in dem ein Audioverarbeitungsskript ausgeführt wird. Es ist dafür ausgelegt, die Generierung, Verarbeitung und Analyse von Audiodaten direkt mittels JavaScript in einem Worklet-Thread statt auf dem Haupt-Thread zu ermöglichen.

#### Veraltet: Skriptprozessor-Knoten

Bevor Audio-Worklets definiert wurden, benutzte die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audioverarbeitung. Da der Code im Haupt-Thread ausgeführt wird, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen behalten, ist aber als veraltet markiert.

- {{domxref("ScriptProcessorNode")}} {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Generierung, Verarbeitung oder Analyse von Audio mittels JavaScript. Es ist ein {{domxref("AudioNode")}}-Audiomodul, das mit zwei Puffern verbunden ist, einer, der den aktuellen Eingang enthält, und einer, der den Ausgang enthält. Ein Ereignis, das die {{domxref("AudioProcessingEvent")}}-Schnittstelle implementiert, wird an das Objekt gesendet, jedes Mal, wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler beendet sich, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- {{domxref("ScriptProcessorNode.audioprocess_event", "audioprocess")}} (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API-{{domxref("ScriptProcessorNode")}}-Elements bereit zur Verarbeitung ist.
- {{domxref("AudioProcessingEvent")}} {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein {{domxref("ScriptProcessorNode")}}-Eingabepuffer bereit zur Verarbeitung ist.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audio-Graf sehr schnell im Hintergrund zu verarbeiten/rendern – ihn in einen {{domxref("AudioBuffer")}} zu rendern, anstatt zu den Lautsprechern des Geräts – mit dem Folgenden.

- {{domxref("OfflineAudioContext")}}
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine {{domxref("AudioContext")}}-Schnittstelle, die einen Audio-Verarbeitungsgraf repräsentiert, der aus miteinander verlinkten {{domxref("AudioNode")}}s besteht. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern generiert es _so schnell wie möglich_ in einem Puffer.
- {{domxref("OfflineAudioContext/complete_event", "complete")}} (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendering eines {{domxref("OfflineAudioContext")}} abgeschlossen ist.
- {{domxref("OfflineAudioCompletionEvent")}}
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines {{domxref("OfflineAudioContext")}} abgeschlossen ist. Das {{domxref("OfflineAudioContext/complete_event", "complete")}}-Ereignis verwendet diese Schnittstelle.

## Anleitungen und Tutorials

{{LandingPageListSubpages}}

## Beispiele

Sie können eine Reihe von Beispielen in unserem [webaudio-example repo](https://github.com/mdn/webaudio-examples/) auf GitHub finden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

### AudioContext

{{Compat}}

## Siehe auch

### Tutorials/Anleitungen

- [Grundlagenkonzepte der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Erzeugen von Klang, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Richtlinien für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web Audio-Spatialisation](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Positional Audio mit WebGL mischen (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spielaudio mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): eine einfache Bibliothek zum Abspielen spezifischer Töne/Noten mit der Web Audio API.
- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audiobibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) verwendet und auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückfällt, sowie andere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): Verkettung von AudioNodes im jQuery-Stil, Mixer-ähnliche Sends/Rücksendungen und mehr.
- [XSound](https://xsound.jp/): Web Audio API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprache-Labor-Webanwendung, die die Web Audio API verwendet, um Video und Audio von verschiedenen Quellen aufzuzeichnen und zu einer einzigen Datei zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Anleitung](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

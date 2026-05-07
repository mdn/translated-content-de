---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: f915c21a5cd94ba26bc2d2c4d8bfb492a8196c73
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Sie ermöglicht es Entwicklern, Audioquellen auszuwählen, Effekte hinzuzufügen, Audio-Visualisierungen zu erstellen, räumliche Effekte (wie Panning) anzuwenden und vieles mehr.

## Konzepte und Nutzung der Web Audio API

Die Web Audio API beinhaltet die Handhabung von Audiooperationen innerhalb eines **audio context** und wurde so konzipiert, dass sie **modulares Routing** ermöglicht. Grundlegende Audiooperationen werden mit **audio nodes** durchgeführt, die miteinander verbunden werden, um einen **audio routing graph** zu bilden. Mehrere Quellen – mit verschiedenen Kanal-Layouts – werden auch innerhalb eines einzigen Kontextes unterstützt. Dieses modulare Design bietet die Flexibilität für komplexe Audiofunktionen mit dynamischen Effekten.

Audio-Knoten werden durch ihre Eingänge und Ausgänge zu Ketten und einfachen Netzen verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Samples – Messungen der Amplitude des Audiosignals zu aufeinanderfolgenden Zeitpunkten – oft Zehntausende pro Sekunde. Diese können entweder mathematisch berechnet werden (wie beim [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder es können Aufnahmen von Audio-/Videodateien sein (wie [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) sowie Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)). Tatsächlich sind Audiodateien einfach Aufnahmen von Schallintensitäten, die durch Mikrofone oder elektrische Instrumente aufgenommen und in eine einzige, komplizierte Welle gemischt werden.

Die Ausgänge dieser Knoten können mit den Eingängen anderer Knoten verbunden werden, die diese Tonstrom-Samples in verschiedene Streams mischen oder modifizieren. Eine häufige Modifikation ist das Multiplizieren der Samples mit einem Wert, um sie lauter oder leiser zu machen (wie im Fall des [`GainNode`](/de/docs/Web/API/GainNode)). Sobald der Ton für den beabsichtigten Effekt ausreichend verarbeitet ist, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Ton an Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur nötig, wenn der Benutzer das Audio hören soll.

Ein einfacher, typischer Workflow für Web-Audio könnte folgendermaßen aussehen:

1. Erstellen Sie einen Audio-Kontext
2. Erstellen Sie innerhalb des Kontexts Quellen — wie `<audio>`, Oszillator, Stream
3. Erstellen Sie Effektknoten, wie zum Beispiel Nachhall, Biquad-Filter, Panner, Kompressor
4. Wählen Sie das endgültige Audioziel, zum Beispiel Ihre Systemlautsprecher
5. Verbinden Sie die Quellen mit den Effekten und die Effekte mit dem Ziel.

![Ein einfaches Blockdiagramm mit einem äußeren Kasten, der als Audiokontext gekennzeichnet ist, und drei inneren Kästen, die als Quellen, Effekte und Ziel gekennzeichnet sind. Die drei inneren Kästen haben Pfeile zwischen ihnen, die von links nach rechts zeigen und den Fluss der Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz gesteuert, sodass Entwickler Code schreiben können, der präzise auf Ereignisse reagiert und in der Lage ist, gezielte Samples zu treffen, selbst bei einer hohen Abtastrate. Anwendungen wie Drum Machines und Sequencer sind also leicht realisierbar.

Die Web Audio API ermöglicht uns auch die Kontrolle darüber, wie Audio _räumlich gestaltet_ wird. Mithilfe eines Systems, das auf einem _Source-Listener-Modell_ basiert, ermöglicht es die Kontrolle des _Panoramamodells_ und beschäftigt sich mit _entfernungsbedingter Dämpfung_, die durch eine bewegte Quelle (oder einen bewegten Hörer) hervorgerufen wird.

> [!NOTE]
> Sie können die Theorie der Web Audio API viel detaillierter in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) nachlesen.

## Zielgruppe der Web Audio API

Die Web Audio API kann einschüchternd wirken für diejenigen, die nicht mit Audio- oder Musikbegriffen vertraut sind, und da sie eine Vielzahl von Funktionalitäten umfasst, kann es schwierig sein, als Entwickler den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem [eine Atmosphäre geschaffen wird, wie futurelibrary.no](https://www.futurelibrary.no/), oder [akustisches Feedback bei Formularen bereitgestellt wird](https://css-tricks.com/form-validation-web-audio/). Sie kann jedoch auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. In diesem Sinne ist sie sowohl für Entwickler als auch für Musiker gleichermaßen geeignet.

Wir haben ein [einfaches Einführungs-Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit Programmierung vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), um zu verstehen, wie digitale Audiodaten funktionieren, speziell im Bereich der API. Dies beinhaltet auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Das Lernen von Kodierung ist wie Kartenspielen — Sie lernen die Regeln, dann spielen Sie, dann lernen Sie die Regeln erneut, dann spielen Sie erneut. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben und einige fortgeschrittenere Techniken anzuwenden, um einen Step-Sequencer aufzubauen.

Wir haben auch andere Tutorials und umfassende Referenzmaterialien verfügbar, die alle Funktionen der API abdecken. Siehe die Seitenleiste auf dieser Seite für mehr.

Wenn Sie mit der musikalischen Seite vertrauter sind, sich mit Konzepten der Musiktheorie auskennen und Instrumente bauen möchten, dann können Sie mit dem fortgeschrittenen Tutorial und anderen als Leitfaden beginnen (das oben verlinkte Tutorial behandelt das Planen von Noten, das Erstellen von maßgeschneiderten Oszillatoren und Hüllkurven sowie eines LFOs und anderes).

Wenn Sie mit den Grundlagen der Programmierung nicht vertraut sind, sollten Sie möglicherweise zunächst einige JavaScript-Anfängertutorials konsultieren und dann hierher zurückkehren — siehe unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn_web_development/Core/Scripting) als großartigen Ausgangspunkt.

## Schnittstellen der Web Audio API

Die Web Audio API umfasst eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition des Audiografen

Allgemeine Container und Definitionen, die Audiografen in der Web Audio API-Nutzung gestalten.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle repräsentiert einen Audioprocessing-Grafen, der aus Audio-Modulen besteht, die miteinander verknüpft sind, wobei jedes durch ein [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert wird. Ein Audiokontext steuert die Erstellung der Knoten, die er enthält, und die Ausführung der Audiobearbeitung oder -dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontexts geschieht.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audiobearbeitungsmodul wie eine _Audioquelle_ (z. B. ein HTML {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element), ein _Audiobestimmungsort_, ein _mittleres Verarbeitungselement_ (z. B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)) oder eine _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen audiobezogenen Parameter, wie einen eines [`AudioNode`](/de/docs/Web/API/AudioNode). Sie kann auf einen bestimmten Wert oder eine Änderung des Wertes eingestellt werden und kann geplant werden, um zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster zu erfolgen.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine kartenähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass sie die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bietet.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle dient als Basisdefinition für Online- und Offline-Audioprozessing-Grafen, die durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) bzw. dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden — Sie würden seine Funktionen über eine dieser beiden ererbten Schnittstellen nutzen.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)-Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende der Medien erreicht wurde.

### Definition von Audioquellen

Schnittstellen zur Definition von Audioquellen für die Verwendung in der Web Audio API.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für mehrere Arten von Audioquellenknotenschnittstellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, die sinusförmig, quadratisch, sägezahnförmig, dreieckig oder benutzerdefiniert sein kann. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das eine bestimmte _Frequenz_ einer Welle erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle repräsentiert einen kurzen Audiobestand, der im Speicher verankert und aus einer Audiodatei mithilfe der [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData)-Methode erstellt wurde oder mit rohen Daten mittels [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) erstellt wurde. Nach dem Dekodieren in diese Form kann das Audio in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) geladen werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus Audiodaten im Speicher besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML {{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) (wie einer Webcam, einem Mikrofon oder einem Stream, der von einem entfernten Computer gesendet wird) besteht. Wenn mehrere Audioträger im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikographisch (alphabetisch) zuerst liegt. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten des Typs [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audioquelle, deren Daten von einer [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Knotens mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) geben Sie an, welcher Track verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) der verschiedene Arten von Filtern, Tonkontrollgeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Lineare Faltung auf einen gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und oft verwendet wird, um einen Halleffekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Delay-Line](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingangsdaten und seiner Weitergabe an die Ausgabe verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals verringert, um das Clipping und die Verzerrung zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und zusammengeführt werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Veränderung der Lautstärke. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das eine bestimmte _Verstärkung_ auf die Eingangsdaten anwendet, bevor sie zur Ausgabe weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um dem Signal eine Waveshaping-Verzerrung zu verleihen. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter; dieser Filtertyp kann verwendet werden, um Tonsteuergeräte und grafische Equalizer zu implementieren.

### Definition von Zielen für Audioausgabe

Sobald Ihre Audiobearbeitung abgeschlossen ist, definieren diese Schnittstellen, wo sie ausgegeben wird.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das endgültige Ziel einer Audioquelle in einem bestimmten Kontext — normalerweise die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht, der ähnlich wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wird. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und -visualisierung

Wenn Sie Zeit-, Frequenz- und andere Daten aus Ihrem Audio extrahieren möchten, ist der `AnalyserNode` das, was Sie brauchen.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der Echtzeit-Frequenz- und Zeitdomänenanalysen bereitstellen kann, für die Zwecke der Datenanalyse und -visualisierung.

### Trennen und Zusammenführen von Audiokanälen

Um Audiokanäle zu trennen und zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_-Ausgängen.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereint verschiedene Mono-Eingänge in einen einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audioräumliche Verarbeitung

Mit diesen Schnittstellen können Sie Panning-Effekte zur Audioräumlischen Verarbeitung auf Ihre Audioquellen anwenden.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Orientierung der einzigartigen Person, die die Audioszene hört, die in der Audiobräumlichen Verarbeitung verwendet wird.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audiosignals im 3D-Raum und ermöglicht Ihnen die Erstellung komplexer Verarbeitungseffekte durch Panning.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereopannerknoten, der verwendet werden kann, um einen Audio-Stream nach links oder rechts zu schwenken.

### Audiobearbeitung in JavaScript

Mit Audio-Worklets können Sie benutzerdefinierte Audio-Knoten in JavaScript oder [WebAssembly](/de/docs/WebAssembly) definieren. Audio-Worklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichtgewichtige Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht es Ihnen, Module zum Audio-Worklet hinzuzufügen, die außerhalb des Hauptthreads ausgeführt werden sollen.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert ein [`AudioNode`](/de/docs/Web/API/AudioNode), das in einen Audiografen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audiobearbeitungscode, der im `AudioWorkletGlobalScope` ausgeführt wird, der direkt Audio erzeugt, verarbeitet oder analysiert und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-abgeleitetes Objekt, das einen Worker-Kontext darstellt, in dem ein Audiobearbeitungsskript ausgeführt wird; es ist so konzipiert, dass es die Erzeugung, Bearbeitung und Analyse von Audiodaten direkt mittels JavaScript in einem Worklet-Thread, anstatt auf dem Haupt-Thread, ermöglicht.

#### Veraltet: Script Processor Nodes

Bevor Audio-Worklets definiert wurden, verwendete die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Hauptthread ausgeführt wird, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen behalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Erzeugung, Bearbeitung oder Analyse von Audio mittels JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das mit zwei Puffern verknüpft ist, von denen einer die aktuellen Eingabedaten, der andere die Ausgangsdaten enthält. Jedes Mal, wenn der Eingabepuffer neue Daten enthält, wird ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, an das Objekt gesendet, und der Event-Handler beendet sich, sobald der Ausgangspuffer mit Daten gefüllt ist.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit zur Verarbeitung ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Eingabepuffer bereit zur Verarbeitung ist.

### Offline/ Hintergrund-Audiobearbeitung

Es ist möglich, einen Audiografen sehr schnell im Hintergrund zu verarbeiten/zu rendern — und ihn in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) anstelle der Lautsprecher des Geräts zu rendern — mit den folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audioprozessing-Grafen repräsentiert, der aus miteinander verknüpften [`AudioNode`](/de/docs/Web/API/AudioNode)s aufgebaut ist. Im Gegensatz zu einem Standard-`AudioContext` rendern ein `OfflineAudioContext` das Audio nicht wirklich, sondern erzeugt es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendern eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn das Verarbeiten eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Anleitungen

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
- [Fortgeschrittene Techniken: Sound erzeugen, sequenzieren, timen, planen](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web-Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mixing Positional Audio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spielaudio mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tone.js](https://tonejs.github.io/): ein Framework zur Erstellung interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audiobibliothek, die standardmäßig auf [Web Audio API](https://webaudio.github.io/web-audio-api/) zurückgreift und auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückfällt, sowie andere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliches Chaining von AudioNodes, Mischpult-artige Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API-Bibliothek für Synthesizer, Effekte, Visualisierung, Aufzeichnung usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Videosprachlabor-Webanwendung, die die Web Audio API verwendet, um Video und Audio von verschiedenen Quellen in eine einzelne Datei aufzunehmen und zu kombinieren ([Quellcode auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die web audio Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

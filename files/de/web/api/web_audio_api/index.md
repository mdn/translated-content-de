---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Sie ermöglicht Entwicklern die Auswahl von Audioquellen, das Hinzufügen von Effekten zu Audio, das Erstellen von Audio-Visualisierungen, das Anwenden von räumlichen Effekten (wie Panning) und vieles mehr.

## Web-Audio-Konzepte und Nutzung

Die Web Audio API umfasst die Handhabung von Audiooperationen innerhalb eines **Audiokontexts** und wurde so konzipiert, dass sie **modulares Routing** ermöglicht. Grundlegende Audiooperationen werden mit **Audionodes** durchgeführt, die miteinander verbunden sind, um einen **Audio-Routing-Graphen** zu bilden. Mehrere Quellen — mit unterschiedlichen Arten von Kanal-Layouts — werden sogar innerhalb eines einzigen Kontexts unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audionodes sind über ihre Ein- und Ausgänge in Ketten und einfachen Netzen miteinander verbunden. Sie starten typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Samples — Messwerte der Amplitude des Audiosignals zu aufeinanderfolgenden Zeitpunkten — oft Zehntausende pro Sekunde. Diese können entweder mathematisch berechnet werden (wie `OscillatorNode`), oder sie können Aufnahmen von Ton-/Videodateien sein (wie `AudioBufferSourceNode` und `MediaElementAudioSourceNode`) und Audiostreams (`MediaStreamAudioSourceNode`). Tatsächlich sind Audiodateien nur Aufnahmen von Schallintensitäten selbst, die von Mikrofonen oder elektrischen Instrumenten aufgenommen werden und zu einer einzigen, komplizierten Welle gemischt werden.

Ausgaben dieser Nodes können mit Eingängen anderer Nodes verknüpft werden, die diese Streams von Tonsamples in verschiedene Streams mischen oder modifizieren. Eine häufige Modifikation ist das Multiplizieren der Samples mit einem Wert, um sie lauter oder leiser zu machen (so wie beim `GainNode`). Sobald der Ton ausreichend für den beabsichtigten Effekt bearbeitet wurde, kann er mit dem Eingang eines Ziels (`BaseAudioContext.destination`) verbunden werden, welches den Ton an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Benutzer das Audio hören soll.

Ein einfaches, typisches Workflow für Web-Audio könnte folgendermaßen aussehen:

1. Erstellen eines Audiokontexts
2. Innerhalb des Kontexts Quellen erstellen — wie `<audio>`, Oszillator, Stream
3. Erstellen von Effekt-Nodes, wie Hall, Biquad-Filter, Panner, Kompressor
4. Bestimmen des endgültigen Ziels des Audios, beispielsweise Ihre Systemlautsprecher
5. Verbinden der Quellen mit den Effekten und der Effekte mit dem Ziel

![Ein einfaches Blockdiagramm mit einem äußeren Kasten mit der Bezeichnung Audiokontext und drei inneren Kästen mit der Bezeichnung Quellen, Effekte und Ziel. Die drei inneren Kästen haben Pfeile zwischen sich, die von links nach rechts zeigen und den Fluss von Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und geringer Latenz gesteuert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, bestimmte Samples anzusprechen, auch bei einer hohen Samplerate. Anwendungen wie Drum Machines und Sequenzer sind daher sehr gut machbar.

Die Web Audio API ermöglicht es uns auch, zu steuern, wie Audio _räumlich verteilt_ wird. Mit einem auf einem _Quellen-Hörer-Modell_ basierenden System ermöglicht sie die Steuerung des _Panning-Modells_ und behandelt die _Entfernungsbedingte Abschwächung_, die durch eine bewegte Quelle (oder einen bewegten Hörer) verursacht wird.

> [!NOTE]
> Details zur Theorie der Web Audio API finden Sie ausführlich in unserem Artikel [Grundlegende Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API).

## Zielgruppe der Web Audio API

Die Web Audio API kann einschüchternd wirken für diejenigen, die mit Audio- oder Musikbegriffen nicht vertraut sind. Da sie eine Vielzahl von Funktionen umfasst, kann es für Entwickler schwierig sein, den Einstieg zu finden.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung zu integrieren, indem Sie beispielsweise [Atmosphäre schaffen wie futurelibrary.no](https://www.futurelibrary.no/) oder [akustische Rückmeldungen zu Formularen](https://css-tricks.com/form-validation-web-audio/). Aber sie kann auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. In diesem Sinne ist sie sowohl für Entwickler als auch Musiker gleichermaßen geeignet.

Wir haben ein [einfaches einführendes Tutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit Programmierung vertraut sind, aber eine gute Einführung in einige der Begriffe und Strukturen der API benötigen.

Es gibt auch einen Artikel über die [grundlegenden Konzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), der Ihnen hilft zu verstehen, wie digitale Audioarbeiten speziell im Bereich der API funktionieren. Dieser enthält auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Programmieren lernen ist wie Karten spielen — man lernt die Regeln, dann spielt man, dann lernt man die Regeln erneut, dann spielt man erneut. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben und einige fortgeschrittene Techniken anzuwenden, um einen Step-Sequenzer aufzubauen.

Wir haben auch andere Tutorials und umfassendes Referenzmaterial verfügbar, das alle Funktionen der API abdeckt. Siehe die Sidebar auf dieser Seite für mehr.

Wenn Sie mehr mit der musikalischen Seite vertraut sind und musikalische Theorie-Konzepte kennen und Instrumente bauen möchten, dann können Sie mit dem fortgeschrittenen Tutorial und anderen als Leitfaden beginnen (das oben verlinkte Tutorial deckt das Planen von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie eines LFO unter anderem ab.)

Wenn Sie nicht mit den Grundlagen der Programmierung vertraut sind, möchten Sie möglicherweise zuerst einige JavaScript-Tutorials für Anfänger konsultieren und dann hierher zurückkehren — siehe unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn_web_development/Core/Scripting), um einen großartigen Einstieg zu finden.

## Web Audio API Schnittstellen

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Funktionskategorien unterteilt haben.

### Allgemeine Definition des Audio-Graphs

Allgemeine Container und Definitionen, die Audio-Graphen in der Nutzung der Web Audio API formen.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle repräsentiert einen Audio-Verarbeitungsgrafen, der aus Audio-Modulen besteht, die miteinander verbunden sind, wobei jedes durch eine [`AudioNode`](/de/docs/Web/API/AudioNode) dargestellt wird. Ein Audiokontext steuert die Erstellung der Nodes, die er enthält und die Ausführung der Audioverarbeitung oder Dekodierung. Sie müssen einen `AudioContext` erstellen, bevor Sie irgendetwas anderes tun, da alles innerhalb eines Kontexts passiert.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audiomodul wie eine _Audioquelle_ (z.B. ein HTML {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element), _Audiouziel_, _Zwischenverarbeitungsmodul_ (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder _Lautstärkeregler_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen Audio-bezogenen Parameter, wie einer von einem [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen spezifischen Wert oder eine Wertänderung gesetzt werden und kann so geplant werden, dass er zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster erfolgt.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine map-ähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam) Schnittstellen, was bedeutet, dass sie die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bereitstellt.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle dient als Basisdefinition für Online- und Offline-Audio-Verarbeitungsgrafen, wie sie durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) dargestellt werden. Sie würden `BaseAudioContext` nicht direkt verwenden, sondern seine Funktionen über eine der beiden vererbenden Schnittstellen nutzen.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)-Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende der Medien erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen zur Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für verschiedene Arten von Audioquellknoten-Schnittstellen. Er ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, die Sinus, Rechteck, Sägezahn, Dreieck oder benutzerdefiniert sein kann. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiomodul, das eine gegebene _Frequenz_ von Wellen erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle repräsentiert ein kurzes Audio-Asset, das im Speicher residiert, erstellt aus einer Audiodatei mit der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) oder mit rohen Daten erstellt mit [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer). Einmal in dieser Form dekodiert, kann das Audio dann in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus im Arbeitsspeicher gespeicherten Audiodaten besteht, die in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) gespeichert sind. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML-Element {{ htmlelement("audio") }} oder {{ htmlelement("video") }} besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) besteht (wie eine Webcam, Mikrofon oder ein Stream, der von einem Remote-Computer gesendet wird). Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) lexikografisch (alphabetisch) zuerst kommt, verwendet. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten des Typs [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audioquelle, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Beim Erstellen des Knotens mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource), um den Knoten zu erstellen, geben Sie an, welcher Track verwendet werden soll. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle repräsentiert einen einfachen Filter niedriger Ordnung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der verschiedene Arten von Filtern, Klangregelgeräten oder grafische Equalizer darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung auf einen gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und oft verwendet wird, um einen Halleffekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungslinie](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiomodul, das eine Verzögerung zwischen dem Eintreffen von Eingabedaten und ihrer Weiterleitung zum Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals reduziert, um Verzerrungen und Clipping zu vermeiden, die auftreten können, wenn mehrere Klänge gleichzeitig abgespielt und zusammengeführt werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Lautstärkeänderung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiomodul, das einen gegebenen _Gain_ auf die Eingangsdaten anwendet, bevor es sie an den Ausgang weiterleitet.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Kurve verwendet, um eine Verformung des Signals durch Wellenformung anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es oft verwendet, um dem Signal ein warmes Gefühl zu verleihen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert einen allgemeinen [infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter; diese Art von Filter kann verwendet werden, um Klangregelgeräte und grafische Equalizer zu implementieren.

### Definition von Audiozielen

Nachdem Sie Ihre Audiodaten verarbeitet haben, definieren diese Schnittstellen, wohin sie ausgegeben werden sollen.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle in einem gegebenen Kontext – in der Regel die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzigen `AudioMediaStreamTrack` besteht, das ähnlich wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wird. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und Visualisierung

Schnittstellen zur Extraktion von Audio-Graph-Statistiken für Datenanalyse und Visualisierung.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Repräsentiert einen Knoten, der Echtzeit-Frequenz- und Zeitbereichsanalyseinformationen bereitstellen kann.
- [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)
  - : Bietet Zugriff auf Dauer-, Unterbrechungs- und Latenzstatistiken für den zugehörigen [`AudioContext`](/de/docs/Web/API/AudioContext). Diese Statistiken ermöglichen es Ihnen, Audioverschiebung und -störungen zu messen.

### Splitten und Mergen von Audiokanälen

Um Audiokanäle zu splitten und zu mergen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_-Ausgängen.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereint verschiedene Mono-Eingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audio-Räumlichkeit

Diese Schnittstellen ermöglichen es Ihnen, Audioräumlichkeits-Panning-Effekte auf Ihre Audioquellen anzuwenden.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Ausrichtung der einzigartigen Person, die die Audio-Szene in der Audioräumlichkeit hört.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audioquellensignals im 3D-Raum und ermöglicht es Ihnen, komplexe Panning-Effekte zu erstellen.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereo-Panner-Zweig, der verwendet werden kann, um einen Audiostream nach links oder rechts zu schwenken.

### Audiobearbeitung in JavaScript

Mit Audioworklets können Sie benutzerdefinierte Audionodes definieren, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind. Audioworklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichtgewichtige Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht das Hinzufügen von Modulen zum Audioworklet, die außerhalb des Haupt-Threads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einen Audiographen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audiobearbeitungscode, der im `AudioWorkletGlobalScope` ausgeführt wird und Audio direkt generieren, verarbeiten oder analysieren kann und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein `WorkletGlobalScope`-abgeleitetes Objekt, das einen Arbeitskontext repräsentiert, in dem ein Audiobearbeitungsskript ausgeführt wird; es ist so konzipiert, dass es die Erzeugung, Verarbeitung und Analyse von Audiodaten direkt mit JavaScript in einem Worklet-Thread und nicht im Main-Thread ermöglicht.

#### Veraltet: Script-Prozessor-Nodes

Bevor Audioworklets definiert wurden, nutzte die Web Audio API den `ScriptProcessorNode` für JavaScript-basierte Audiobearbeitung. Da der Code im Haupt-Thread ausgeführt wird, haben sie schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist aber als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mit JavaScript. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audiobearbeitungsmodul, das mit zwei Puffern verbunden ist, einem, der die aktuelle Eingabe enthält, und einem, der die Ausgabe enthält. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird an das Objekt gesendet, sobald der Eingabepuffer neue Daten enthält, und der Ereignishandler endet, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) zur Verarbeitung bereit ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Eingabepuffer zur Verarbeitung bereit ist.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audiographen sehr schnell im Hintergrund zu verarbeiten/rendern — ihn in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt auf die Geräte-Lautsprecher — mit dem Folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audiographen repräsentiert, der aus verknüpften [`AudioNode`](/de/docs/Web/API/AudioNode)s besteht. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern erzeugt es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Tutorials

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
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Erweiterte Techniken: Erstellen von Sound, Sequenzieren, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Web-Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Kontrollieren mehrfacher Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischen von Positions-Audio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spiel-Audio mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tone.js](https://tonejs.github.io/): ein Framework, um interaktive Musik im Browser zu erstellen.
- [howler.js](https://github.com/goldfire/howler.js/): eine JS-Audiobibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) verwendet und auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückgreift, sowie andere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-ähnliches Verkettung von AudioNodes, Mixer-ähnliche Send/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API-Bibliothek für Synthesizer, Effekte, Visualisierungen, Aufnahmen, usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Themensprachenlabor-Webanwendung, die die Web Audio API verwendet, um Video- und Audioaufnahmen von verschiedenen Quellen zu einer einzigen Datei zu kombinieren ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)

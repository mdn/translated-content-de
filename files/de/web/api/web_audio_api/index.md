---
title: Web Audio API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("Web Audio API")}}

Die Web Audio API bietet ein leistungsstarkes und vielseitiges System zur Steuerung von Audio im Web. Sie ermöglicht Entwicklern die Auswahl von Audioquellen, die Hinzufügung von Effekten, die Erstellung von Audio-Visualisierungen, die Anwendung räumlicher Effekte (wie Panorama) und vieles mehr.

## Web-Audio-Konzepte und Verwendung

Die Web Audio API beinhaltet die Verarbeitung von Audio innerhalb eines **audio context** und ist so konzipiert, dass **modulares Routing** ermöglicht wird. Grundlegende Audiooperationen werden mit **audio nodes** durchgeführt, die miteinander verbunden sind, um einen **audio routing graph** zu bilden. Mehrere Quellen — mit unterschiedlichen Arten der Kanalaufteilung — werden sogar innerhalb eines einzelnen Kontextes unterstützt. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten sind über ihre Eingänge und Ausgänge in Ketten und einfachen Netzen miteinander verbunden. Sie beginnen typischerweise mit einer oder mehreren Quellen. Quellen liefern Arrays von Schallintensitäten (Samples) in sehr kleinen Zeitabschnitten, oft Zehntausende pro Sekunde. Diese können entweder mathematisch berechnet sein (wie [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)), oder es können Aufnahmen aus Sound-/Videodateien ([`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) und [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)) sowie Audiostreams ([`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)) sein. Tatsächlich sind Schallaufnahmen nur Aufzeichnungen von Schallintensitäten selbst, die von Mikrofonen oder elektrischen Instrumenten kommen und zu einer einzigen, komplexen Welle gemischt werden.

Ausgänge dieser Knoten können mit Eingängen anderer Knoten verbunden sein, die diese Sound-Sample-Ströme zu verschiedenen Streams mischen oder modifizieren. Eine häufige Modifikation besteht darin, die Samples mit einem Wert zu multiplizieren, um sie lauter oder leiser zu machen (wie es bei einem [`GainNode`](/de/docs/Web/API/GainNode) der Fall ist). Sobald der Sound ausreichend für den beabsichtigten Effekt verarbeitet wurde, kann er mit dem Eingang eines Ziels ([`BaseAudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)) verbunden werden, das den Sound an die Lautsprecher oder Kopfhörer sendet. Diese letzte Verbindung ist nur notwendig, wenn der Nutzer das Audio hören soll.

Ein einfacher, typischer Arbeitsablauf für Web-Audio sieht folgendermaßen aus:

1. Audio-Kontext erstellen
2. Innerhalb des Kontexts Quellen erstellen — wie `<audio>`, Oszillator, Stream
3. Effektknoten erstellen, wie Hall, Biquad-Filter, Panoramaverschiebung, Kompressor
4. Endziel des Audios auswählen, zum Beispiel Ihre Systemlautsprecher
5. Die Quellen mit den Effekten und die Effekte mit dem Ziel verbinden.

![Ein einfaches Diagramm mit einem äußeren Kasten, beschriftet mit Audio-Kontext, und drei inneren Kästen, beschriftet mit Quellen, Effekte und Ziel. Die drei inneren Kästen haben Pfeile, die zwischen ihnen von links nach rechts zeigen und den Fluss der Audioinformationen anzeigen.](audio-context_.png)

Das Timing wird mit hoher Präzision und niedriger Latenz gesteuert, sodass Entwickler Code schreiben können, der genau auf Ereignisse reagiert und in der Lage ist, spezifische Samples anzuvisieren, selbst bei einer hohen Abtastrate. Anwendungen wie Drum Machines und Sequencer sind somit durchaus erreichbar.

Die Web Audio API ermöglicht es uns auch, wie Audio _räumlich dargestellt_ wird. Mit einem System basierend auf einem _Quelle-Hörer-Modell_ erlaubt sie die Steuerung des _Panoramamodells_ und befasst sich mit der _distanzbedingten Abschwächung_, die durch eine sich bewegende Quelle (oder einen sich bewegenden Hörer) verursacht wird.

> [!NOTE]
> Sie können sich eingehender über die Theorie der Web Audio API in unserem Artikel [Grundkonzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) informieren.

## Zielgruppe der Web Audio API

Die Web Audio API kann einschüchternd wirken für diejenigen, die mit Audio- oder Musikbegriffen nicht vertraut sind, und da sie eine Vielzahl von Funktionen umfasst, kann es schwierig sein, einen Einstieg zu finden, wenn Sie ein Entwickler sind.

Sie kann verwendet werden, um Audio in Ihre Website oder Anwendung einzubinden, indem Sie beispielsweise [Atmosphäre wie futurelibrary.no bereitstellen](https://www.futurelibrary.no/), oder [auditive Rückmeldungen in Formularen](https://css-tricks.com/form-validation-web-audio/). Sie kann jedoch auch verwendet werden, um _fortgeschrittene_ interaktive Instrumente zu erstellen. In dieser Hinsicht ist sie sowohl für Entwickler als auch für Musiker geeignet.

Wir haben ein [einfaches Einführungstutorial](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) für diejenigen, die mit der Programmierung vertraut sind, aber eine gute Einführung in einige der Begriffe und die Struktur der API benötigen.

Es gibt auch einen Artikel zu den [Grundkonzepten hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), um Ihnen zu helfen, die Funktionsweise von digitalem Audio im speziellen Rahmen der API zu verstehen. Dieser enthält auch eine gute Einführung in einige der Konzepte, auf denen die API basiert.

Das Programmieren lernen ist wie ein Kartenspiel — Sie lernen die Regeln, dann spielen Sie, dann gehen Sie zurück und lernen die Regeln erneut, dann spielen Sie wieder. Wenn also einige der Theorien nach dem ersten Tutorial und Artikel nicht ganz passen, gibt es ein [fortgeschrittenes Tutorial](/de/docs/Web/API/Web_Audio_API/Advanced_techniques), das das erste erweitert, um Ihnen zu helfen, das Gelernte zu üben und einige fortgeschrittenere Techniken anzuwenden, um einen Step-Sequencer zu erstellen.

Es gibt auch andere Tutorials und umfassendes Referenzmaterial, das alle Funktionen der API abdeckt. Siehe die Seitenleiste auf dieser Seite für mehr.

Wenn Sie mit dem musikalischen Aspekt mehr vertraut sind, mit Musikkonzepten vertraut sind, Instrumente bauen möchten, dann können Sie mit dem fortgeschrittenen Tutorial und anderen als Leitfaden beginnen (das oben verlinkte Tutorial behandelt das Planen von Noten, das Erstellen maßgeschneiderter Oszillatoren und Hüllkurven sowie eines LFOs unter anderem).

Sollten Sie mit den Grundlagen der Programmierung nicht vertraut sein, könnten Sie zuerst einige JavaScript-Tutorials für Anfänger konsultieren und dann hierher zurückkehren — sehen Sie sich unser [JavaScript-Lernmodul für Anfänger](/de/docs/Learn/JavaScript) als einen großartigen Ausgangspunkt an.

## Schnittstellen der Web Audio API

Die Web Audio API verfügt über eine Reihe von Schnittstellen und zugehörigen Ereignissen, die wir in neun Kategorien von Funktionen unterteilt haben.

### Allgemeine Audio-Graph-Definition

Allgemeine Container und Definitionen, die Audio-Graphen in der Verwendung der Web Audio API gestalten.

- [`AudioContext`](/de/docs/Web/API/AudioContext)
  - : Die **`AudioContext`**-Schnittstelle stellt einen Audioverarbeitungsgraphen dar, der aus miteinander verbundenen Audiomodulen besteht, die jeweils durch einen [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert werden. Ein Audio-Kontext steuert die Erstellung der darin enthaltenen Knoten und die Ausführung der Audiobearbeitung oder des Dekodierens. Sie müssen einen `AudioContext` erstellen, bevor Sie etwas anderes tun können, da alles innerhalb eines Kontextes geschieht.
- [`AudioNode`](/de/docs/Web/API/AudioNode)
  - : Die **`AudioNode`**-Schnittstelle repräsentiert ein Audioverarbeitungsmodul wie eine _Audioquelle_ (z. B. ein HTML {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element), ein _Audioziel_, ein _Zwischenverarbeitungsmodul_ (z. B. einen Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), oder eine _Lautstärkeregelung_ wie [`GainNode`](/de/docs/Web/API/GainNode)).
- [`AudioParam`](/de/docs/Web/API/AudioParam)
  - : Die **`AudioParam`**-Schnittstelle repräsentiert einen audio-bezogenen Parameter, ähnlich einem eines [`AudioNode`](/de/docs/Web/API/AudioNode). Er kann auf einen bestimmten Wert oder eine Wertänderung eingestellt werden und ist so geplant, dass er zu einer bestimmten Zeit und einem bestimmten Muster erfolgt.
- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
  - : Bietet eine kartenähnliche Schnittstelle zu einer Gruppe von [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstellen, was bedeutet, dass es die Methoden `forEach()`, `get()`, `has()`, `keys()` und `values()` sowie eine `size`-Eigenschaft bietet.
- [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
  - : Die **`BaseAudioContext`**-Schnittstelle fungiert als Basisdefinition für Online- und Offline-Audioverarbeitungsgraphen, vertreten durch [`AudioContext`](/de/docs/Web/API/AudioContext) und [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext). Sie würden `BaseAudioContext` nicht direkt verwenden – Sie würden seine Funktionen über eine dieser beiden erbenden Schnittstellen verwenden.
- Das [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event) Ereignis
  - : Das `ended`-Ereignis wird ausgelöst, wenn die Wiedergabe gestoppt wurde, weil das Ende des Mediums erreicht wurde.

### Definition von Audioquellen

Schnittstellen, die Audioquellen für die Verwendung in der Web Audio API definieren.

- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
  - : Der **`AudioScheduledSourceNode`** ist eine übergeordnete Schnittstelle für mehrere Arten von Audiosource-Knotenschnittstellen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode).
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
  - : Die **`OscillatorNode`**-Schnittstelle repräsentiert eine periodische Wellenform, wie eine Sinus- oder Dreieckswelle. Es handelt sich um ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioverarbeitungsmodul, das eine bestimmte _Frequenz_ an Wellen erzeugt.
- [`AudioBuffer`](/de/docs/Web/API/AudioBuffer)
  - : Die **`AudioBuffer`**-Schnittstelle stellt ein kurzes Audio-Asset dar, das sich im Speicher befindet, erstellt aus einer Audiodatei mit der Methode [`BaseAudioContext.decodeAudioData`](/de/docs/Web/API/BaseAudioContext/decodeAudioData), oder mit Rohdaten erstellt mit [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer). Sobald es in dieser Form dekodiert ist, kann das Audio in ein [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingesetzt werden.
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
  - : Die **`AudioBufferSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus sich im Speicher befindlichen Audiodaten besteht, gespeichert in einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer). Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)
  - : Die **`MediaElementAudioSourceNode`**-Schnittstelle repräsentiert eine Audioquelle, die aus einem HTML {{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
  - : Die **`MediaStreamAudioSourceNode`**-Schnittstelle stellt eine Audioquelle dar, die aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) (wie eine Webcam, Mikrofon oder ein von einem entfernten Computer gesendeter Stream) besteht. Wenn mehrere Audiotracks im Stream vorhanden sind, wird der Track verwendet, dessen [`id`](/de/docs/Web/API/MediaStreamTrack/id) alphabetisch als erster aufgeführt ist. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
  - : Ein Knoten vom Typ [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) repräsentiert eine Audioquelle, deren Daten von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen. Wenn Sie den Knoten mit der Methode [`createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) erstellen, geben Sie an, welchen Track Sie verwenden möchten. Dies bietet mehr Kontrolle als `MediaStreamAudioSourceNode`.

### Definition von Audioeffektfiltern

Schnittstellen zur Definition von Effekten, die Sie auf Ihre Audioquellen anwenden möchten.

- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
  - : Die **`BiquadFilterNode`**-Schnittstelle stellt einen einfachen niederordentlichen Filter dar. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das verschiedene Arten von Filtern, Tonregelgeräten oder grafischen Equalizern darstellen kann. Ein `BiquadFilterNode` hat immer genau einen Eingang und einen Ausgang.
- [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)
  - : Die **`ConvolverNode`**-Schnittstelle ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine lineare Faltung an einem gegebenen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) durchführt und häufig verwendet wird, um einen Halleffekt zu erzielen.
- [`DelayNode`](/de/docs/Web/API/DelayNode)
  - : Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioverarbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingabedaten und ihrer Weiterleitung an den Ausgang verursacht.
- [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)
  - : Die **`DynamicsCompressorNode`**-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals verringert, um Clipping und Verzerrungen zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und multiplexiert werden.
- [`GainNode`](/de/docs/Web/API/GainNode)
  - : Die **`GainNode`**-Schnittstelle repräsentiert eine Lautstärkeänderung. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioverarbeitungsmodul, das einen angegebenen _gain_ auf die Eingabedaten anwendet, bevor sie weitergeleitet werden.
- [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)
  - : Die **`WaveShaperNode`**-Schnittstelle repräsentiert einen nichtlinearen Verzerrer. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das eine Wellenform verwendet, um eine Wellenformverzerrung auf das Signal anzuwenden. Neben offensichtlichen Verzerrungseffekten wird es häufig verwendet, um ein warmes Gefühl im Signal hinzuzufügen.
- [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)
  - : Beschreibt eine periodische Wellenform, die zum Shaping der Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) verwendet werden kann.
- [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode)
  - : Implementiert eine allgemeine [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter; dieser Filtertyp kann verwendet werden, um Tonregelgeräte und grafische Equalizer zu implementieren.

### Definition von Auditiven Zielen

Sobald Sie die Audiobearbeitung abgeschlossen haben, definieren diese Schnittstellen, wohin Sie sie ausgeben.

- [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode)
  - : Die **`AudioDestinationNode`**-Schnittstelle repräsentiert das Endziel einer Audioquelle in einem gegebenen Kontext – in der Regel die Lautsprecher Ihres Geräts.
- [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)
  - : Die **`MediaStreamAudioDestinationNode`**-Schnittstelle repräsentiert ein Audioziel, bestehend aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzigen `AudioMediaStreamTrack`, der ähnlich wie ein [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet werden kann, der von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioziel fungiert.

### Datenanalyse und Visualisierung

Wenn Sie Zeit, Frequenz und andere Daten aus Ihrem Audio extrahieren möchten, benötigen Sie den `AnalyserNode`.

- [`AnalyserNode`](/de/docs/Web/API/AnalyserNode)
  - : Die **`AnalyserNode`**-Schnittstelle repräsentiert einen Knoten, der in der Lage ist, Echtzeit-Zeit- und Frequenzbereichsanalyseinformationen für die Zwecke der Datenanalyse und Visualisierung bereitzustellen.

### Aufsplittung und Zusammenführung von Audiokanälen

Um Audiokanäle zu splitten und zu zusammenzuführen, verwenden Sie diese Schnittstellen.

- [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)
  - : Die **`ChannelSplitterNode`**-Schnittstelle trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von _Mono_-Ausgängen auf.
- [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)
  - : Die **`ChannelMergerNode`**-Schnittstelle vereint verschiedene Mono-Eingänge zu einem einzelnen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen.

### Audioräumliche Darstellung

Diese Schnittstellen ermöglichen es Ihnen, Audioräumliche Panning-Effekte zu Ihren Audioquellen hinzuzufügen.

- [`AudioListener`](/de/docs/Web/API/AudioListener)
  - : Die **`AudioListener`**-Schnittstelle repräsentiert die Position und Ausrichtung der einzigartigen Person, die das Audioszenario in der audio-räumlichen Darstellung hört.
- [`PannerNode`](/de/docs/Web/API/PannerNode)
  - : Die **`PannerNode`**-Schnittstelle repräsentiert die Position und das Verhalten eines Audiosignals in einem 3D-Raum, wodurch Sie komplexe Panning-Effekte erstellen können.
- [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)
  - : Die **`StereoPannerNode`**-Schnittstelle repräsentiert einen einfachen Stereoverteilungsknoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu verteilen.

### Audiobearbeitung in JavaScript

Mit Audio-Worklets können Sie benutzerdefinierte Audionodes, die in JavaScript oder [WebAssembly](/de/docs/WebAssembly) geschrieben sind, definieren. Audio-Worklets implementieren die [`Worklet`](/de/docs/Web/API/Worklet)-Schnittstelle, eine leichte Version der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle.

- [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)
  - : Die `AudioWorklet`-Schnittstelle ist über das [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekt [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) verfügbar und ermöglicht es Ihnen, Module zur Audio-Worklet hinzuzufügen, die außerhalb des Hauptthreads ausgeführt werden.
- [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)
  - : Die `AudioWorkletNode`-Schnittstelle repräsentiert einen [`AudioNode`](/de/docs/Web/API/AudioNode), der in einen Audiographen eingebettet ist und Nachrichten an den entsprechenden `AudioWorkletProcessor` senden kann.
- [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)
  - : Die `AudioWorkletProcessor`-Schnittstelle repräsentiert Audiobearbeitungscode, der im `AudioWorkletGlobalScope` ausgeführt wird und Audio direkt generieren, bearbeiten oder analysieren und Nachrichten an den entsprechenden `AudioWorkletNode` senden kann.
- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)
  - : Die `AudioWorkletGlobalScope`-Schnittstelle ist ein von `WorkletGlobalScope` abgeleitetes Objekt, das einen Worker-Kontext repräsentiert, in dem ein Audiobearbeitungsskript ausgeführt wird; sie ist dazu gedacht, die Erzeugung, Bearbeitung und Analyse von Audiodaten direkt mit JavaScript in einem Worklet-Thread statt im Haupt-Thread zu ermöglichen.

#### Veraltet: Script-Processor-Knoten

Bevor die Audio-Worklets definiert wurden, nutzte die Web Audio API den `ScriptProcessorNode` zur JavaScript-basierten Audiobearbeitung. Da der Code im Haupt-Thread ausgeführt wird, haben sie eine schlechte Leistung. Der `ScriptProcessorNode` wird aus historischen Gründen beibehalten, ist jedoch als veraltet markiert.

- [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) {{deprecated_inline}}
  - : Die **`ScriptProcessorNode`**-Schnittstelle ermöglicht das Generieren, Verarbeiten oder Analysieren von Audio mit JavaScript. Es handelt sich um ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioverarbeitungsmodul, das mit zwei Puffern verbunden ist, einem, der den aktuellen Eingang enthält, und einem, der den Ausgang enthält. Ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Schnittstelle implementiert, wird an das Objekt gesendet, jedes Mal wenn der Eingabepuffer neue Daten enthält, und der Ereignishandler beendet sich, wenn er den Ausgabepuffer mit Daten gefüllt hat.
- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) (Ereignis) {{deprecated_inline}}
  - : Das `audioprocess`-Ereignis wird ausgelöst, wenn ein Eingabepuffer eines Web Audio API [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode) bereit zur Verarbeitung ist.
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{deprecated_inline}}
  - : Das `AudioProcessingEvent` repräsentiert Ereignisse, die auftreten, wenn ein [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Eingabepuffer bereit zur Verarbeitung ist.

### Offline-/Hintergrund-Audiobearbeitung

Es ist möglich, einen Audiografen sehr schnell im Hintergrund zu verarbeiten/rendern — ihn in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) statt an die Lautsprecher des Geräts zu rendern — mit dem folgenden.

- [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)
  - : Die **`OfflineAudioContext`**-Schnittstelle ist eine [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle, die einen Audioverarbeitungsgraphen darstellt, der aus miteinander verbundenen [`AudioNode`](/de/docs/Web/API/AudioNode)s besteht. Im Gegensatz zu einem Standard-`AudioContext` rendert ein `OfflineAudioContext` das Audio nicht wirklich, sondern erzeugt es _so schnell wie möglich_ in einem Puffer.
- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event) (Ereignis)
  - : Das `complete`-Ereignis wird ausgelöst, wenn das Rendering eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) beendet ist.
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
  - : Das `OfflineAudioCompletionEvent` repräsentiert Ereignisse, die auftreten, wenn die Verarbeitung eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) abgeschlossen ist. Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis verwendet diese Schnittstelle.

## Leitfäden und Anleitungen

{{LandingPageListSubpages}}

## Beispiele

Sie finden eine Reihe von Beispielen in unserem [webaudio-examples repo](https://github.com/mdn/webaudio-examples/) auf GitHub.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Tutorials/Leitfäden

- [Grundkonzepte hinter der Web Audio API](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Fortgeschrittene Techniken: Erstellen von Sound, Sequenzierung, Timing, Planung](/de/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Autoplay-Leitfaden für Medien- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide)
- [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Grundlagen der Audioräumlichen Darstellung mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mischen von Positionsaudio und WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Entwicklung von Spielaudio mit der Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### Bibliotheken

- [Tones](https://github.com/bit101/tones): Eine einfache Bibliothek, um bestimmte Töne/Noten mit der Web Audio API abzuspielen.
- [Tone.js](https://tonejs.github.io/): Ein Framework zur Erstellung von interaktiver Musik im Browser.
- [howler.js](https://github.com/goldfire/howler.js/): Eine JS-Audiobibliothek, die standardmäßig die [Web Audio API](https://webaudio.github.io/web-audio-api/) verwendet und auf [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element) zurückfällt und auch andere nützliche Funktionen bietet.
- [Mooog](https://github.com/mattlima/mooog): jQuery-Stil Ketten von AudioNodes, mixerartige Sends/Returns und mehr.
- [XSound](https://xsound.jp/): Web Audio API Bibliothek für Synthesizer, Effekte, Visualisierung, Aufnahme usw.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML-Video-Sprachlabor-Webanwendung mithilfe der Web Audio API zur Aufnahme und Kombination von Video und Audio aus verschiedenen Quellen zu einer einzigen Datei ([Quelle auf GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Vereinfacht die Web-Audio-Visualisierung ([Leitfaden](https://ptsjs.org/guide/sound-0800))

### Verwandte Themen

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)

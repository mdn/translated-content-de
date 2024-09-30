---
title: Grundlegende Konzepte hinter der Web Audio API
slug: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt einige theoretische Grundlagen der Audioverarbeitung, um zu verstehen, wie die Funktionen der Web Audio API arbeiten. Dies wird Ihnen helfen, fundierte Entscheidungen zu treffen, wenn Sie Ihre App zur Verarbeitung von Audio entwerfen. Wenn Sie noch kein Tontechniker sind, gibt Ihnen dieser Artikel genügend Hintergrundwissen, um zu verstehen, warum die Web Audio API so funktioniert, wie sie es tut.

## Audiographen

Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) beinhaltet die Verarbeitung von Audiooperationen innerhalb eines [Audio-Kontextes](/de/docs/Web/API/AudioContext) und wurde entwickelt, um _modulare Signalführung_ zu ermöglichen. Jeder [Audio-Knoten](/de/docs/Web/API/AudioNode) führt eine grundlegende Audiooperation durch und ist mit einem oder mehreren anderen Audio-Knoten verbunden, um einen [Audio-Routing-Graphen](/de/docs/Web/API/AudioNode#the_audio_routing_graph) zu bilden. Mehrere Quellen mit unterschiedlichen Kanal-Layouts werden unterstützt, sogar innerhalb eines einzigen Kontexts. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten sind über ihre Ein- und Ausgänge verbunden und bilden eine Kette, die mit einer oder mehreren Quellen beginnt, durch einen oder mehrere Knoten verläuft und dann an einem Ziel endet (obwohl Sie kein Ziel angeben müssen, wenn Sie nur einige Audiodaten visualisieren möchten). Ein einfacher, typischer Workflow für Web-Audio würde in etwa so aussehen:

1. Erstellen Sie den Audio-Kontext.
2. Erstellen Sie Audioquellen innerhalb des Kontexts (wie {{HTMLElement("audio")}}, einen Oszillator oder Stream).
3. Erstellen Sie Audioeffekte (wie die Hall-, Biquad-Filter-, Panner-, oder Kompressor-Knoten).
4. Wählen Sie das endgültige Ziel für das Audio (wie die Lautsprecher des Benutzers).
5. Verbinden Sie die Quellknoten mit null oder mehr Effekt-Knoten und dann mit dem gewählten Ziel.

> [!NOTE]
> Die [Kanalnotation](https://en.wikipedia.org/wiki/Surround_sound#Channel_notation) ist ein numerischer Wert, wie _2.0_ oder _5.1_, der die Anzahl der Audiokanäle angibt, die in einem Signal verfügbar sind. Die erste Zahl ist die Anzahl der Audiokanäle im vollen Frequenzbereich, die das Signal enthält. Die Zahl nach dem Punkt steht für die Anzahl der Kanäle, die für den Low-Frequency-Effekt (LFE) reserviert sind; diese werden oft als **Subwoofer** bezeichnet.

![Ein einfaches Blockdiagramm mit einem äußeren Kasten, der als Audio-Kontext und drei innere Kästen, die als Quellen, Effekte und Ziel beschriftet sind. Die drei inneren Kästen haben Pfeile dazwischen, die von links nach rechts zeigen und den Fluss der Audioinformationen anzeigen.](webaudioapi_en.svg)

Jeder Eingang oder Ausgang besteht aus einem oder mehreren Audio-**Kanälen**, die zusammen ein bestimmtes Audio-Layout darstellen. Jede diskrete Kanalstruktur wird unterstützt, einschließlich _Mono_, _Stereo_, _Quad_, _5.1_ usw.

![Zeigt die Fähigkeit von Audio-Knoten, über ihre Ein- und Ausgänge und die Kanäle innerhalb dieser Eingänge/Ausgänge zu verbinden.](mdn.png)

Es gibt mehrere Möglichkeiten, um Audio zu erhalten:

- Der Sound kann direkt in JavaScript von einem Audio-Knoten (wie einem Oszillator) generiert werden.
- Er kann aus rohen [PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)-Daten erstellt werden (zum Beispiel .WAV-Dateien oder andere Formate, die von [`decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) unterstützt werden).
- Er kann von HTML-Media-Elementen wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}} generiert werden.
- Er kann von einem [WebRTC](/de/docs/Web/API/WebRTC_API)[`MediaStream`](/de/docs/Web/API/MediaStream) wie einer Webcam oder einem Mikrofon erlangt werden.

## Audiodaten: Was in einem Sample steckt

Wenn ein Audiosignal verarbeitet wird, erfolgt eine Abtastung. **Abtastung** ist die Umwandlung eines [kontinuierlichen Signals](https://en.wikipedia.org/wiki/Continuous_signal) in ein [diskretes Signal](https://en.wikipedia.org/wiki/Discrete_signal). Anders ausgedrückt, eine kontinuierliche Schallwelle, wie sie von einer Band live gespielt wird, wird in eine Abfolge von digitalen Samples (ein diskretes Zeitsignal) umgewandelt, die es einem Computer ermöglichen, das Audio in getrennten Blöcken zu verarbeiten.

Weitere Informationen finden Sie auf der Wikipedia-Seite [_Abtastung (Signalverarbeitung)_](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29).

## Audiopuffer: Frames, Samples und Kanäle

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) ist mit drei Parametern definiert:

- der Anzahl der Kanäle (1 für Mono, 2 für Stereo usw.),
- seiner Länge, also der Anzahl der Sample-Frames im Puffer,
- und der Abtastrate, der Anzahl der Sample-Frames, die pro Sekunde abgespielt werden.

Ein _Sample_ ist ein einzelner 32-Bit-Gleitkommawert, der den Wert des Audio-Streams zu jedem bestimmten Zeitpunkt innerhalb eines bestimmten Kanals (links oder rechts, im Fall von Stereo) repräsentiert. Ein _Frame_ oder _Sample-Frame_ ist die Menge aller Werte für alle Kanäle, die zu einem bestimmten Zeitpunkt abgespielt werden: alle Samples aller Kanäle, die zur gleichen Zeit abgespielt werden (zwei für einen Stereo-Sound, sechs für 5.1 usw.).

Die _Abtastrate_ ist die Menge dieser Samples (oder Frames, da alle Samples eines Frames gleichzeitig abgespielt werden), die in einer Sekunde abgespielt werden und wird in Hz gemessen. Je höher die Abtastrate, desto besser die Klangqualität.

Schauen wir uns einen _Mono_ und einen _Stereo_ Audiopuffer an, die jeweils eine Sekunde lang bei einer Rate von 44100Hz sind:

- Der _Mono_-Puffer hat 44.100 Samples und 44.100 Frames. Die Eigenschaft `length` wird 44.100 sein.
- Der _Stereo_-Puffer hat 88.200 Samples, aber immer noch 44.100 Frames. Die Eigenschaft `length` wird immer noch 44.100 sein, da sie gleich der Anzahl der Frames ist.

![Ein Diagramm, das mehrere Frames in einem Audiopuffer in einer langen Linie zeigt, jeder enthält zwei Samples, da der Puffer zwei Kanäle hat, ist es Stereo.](sampleframe-english.png)

Wenn ein Puffer abgespielt wird, hören Sie zuerst den ganz links befindlichen Sample-Frame, dann den direkt daneben, dann den nächsten _und so weiter_ bis zum Ende des Puffers. Im Fall von Stereo hören Sie beide Kanäle gleichzeitig. Sample-Frames sind praktisch, da sie unabhängig von der Anzahl der Kanäle sind und die Zeit auf ideale Weise für präzise Audiomanipulation darstellen.

> [!NOTE]
> Um eine Zeit in Sekunden aus einer Frame-Anzahl zu berechnen, teilen Sie die Anzahl der Frames durch die Abtastrate. Um die Anzahl der Frames aus der Anzahl der Samples zu berechnen, müssen Sie nur den letzteren Wert durch die Anzahl der Kanäle teilen.

Hier sind einige einfache Beispiele:

```js
const context = new AudioContext();
const buffer = new AudioBuffer(context, {
  numberOfChannels: 2,
  length: 22050,
  sampleRate: 44100,
});
```

> [!NOTE]
> In [digitaler Audioverarbeitung](https://en.wikipedia.org/wiki/Digital_audio) ist **44.100 [Hz](https://en.wikipedia.org/wiki/Hertz)** (alternativ dargestellt als **44,1 kHz**) eine gängige [Abtastfrequenz](https://en.wikipedia.org/wiki/Sampling_frequency). Warum 44,1 kHz?
>
> Erstens, weil der [Hörbereich](https://en.wikipedia.org/wiki/Hearing_range) des menschlichen Ohrs ungefähr von 20 Hz bis 20.000 Hz reicht. Gemäß dem [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem) muss die Abtastfrequenz größer sein als das Doppelte der maximalen Frequenz, die man reproduzieren möchte. Daher muss die Abtastrate _größer_ als 40.000 Hz sein.
>
> Zweitens müssen Signale [Tiefpass-gefiltert](https://en.wikipedia.org/wiki/Low-pass_filter) werden, bevor sie abgetastet werden, andernfalls tritt [Aliasing](https://en.wikipedia.org/wiki/Aliasing) auf. Während ein idealer Tiefpassfilter perfekt Frequenzen unter 20 kHz durchlassen würde (ohne sie zu dämpfen) und Frequenzen über 20 kHz perfekt abschneiden würde, ist in der Praxis ein [Übergangsbereich](https://en.wikipedia.org/wiki/Transition_band) notwendig, in dem Frequenzen teilweise gedämpft werden. Je breiter dieser Übergangsbereich ist, desto einfacher und wirtschaftlicher ist es, einen [Antialiasing-Filter](https://en.wikipedia.org/wiki/Anti-aliasing_filter) herzustellen. Die Abtastfrequenz von 44,1 kHz ermöglicht einen Übergangsbereich von 2,05 kHz.

Wenn Sie den obigen Aufruf verwenden, erhalten Sie einen Stereo-Puffer mit zwei Kanälen, der beim Abspielen auf einem [`AudioContext`](/de/docs/Web/API/AudioContext), der bei 44.100 Hz läuft (sehr häufig, die meisten normalen Soundkarten laufen mit dieser Rate), 0,5 Sekunden dauert: 22.050 Frames/44.100 Hz = 0,5 Sekunden.

```js
const context = new AudioContext();
const buffer = new AudioBuffer(context, {
  numberOfChannels: 1,
  length: 22050,
  sampleRate: 22050,
});
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Mono-Puffer (Einkanal-Puffer), der beim Abspielen auf einem [`AudioContext`](/de/docs/Web/API/AudioContext), der bei 44.100 Hz läuft, automatisch auf 44.100 Hz _neu abgetastet_ wird (und daher 44.100 Frames ergibt) und 1,0 Sekunde dauert: 44.100 Frames/44.100 Hz = 1 Sekunde.

> [!NOTE]
> Audio-Resampling ist dem Bild-Resizing sehr ähnlich. Sagen Sie, Sie haben ein 16 x 16 Bild, möchten es aber auf einen 32 x 32 Bereich füllen. Sie passen es an (oder ändern die Abtastung). Das Ergebnis hat weniger Qualität (es kann unscharf oder kantig sein, je nach Resize-Algorithmus), aber es funktioniert, wobei das angepasste Bild weniger Speicherplatz benötigt. Neugewonnenes Audio ist dasselbe: Sie sparen Speicherplatz, aber in der Praxis können Sie keine hochfrequenten Inhalte oder hohe Töne korrekt reproduzieren.

### Planare versus verschachtelte Puffer

Die Web Audio API verwendet ein planares Pufferformat. Die linken und rechten Kanäle werden so gespeichert:

```plain
LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR (for a buffer of 16 frames)
```

Diese Struktur ist in der Audiobearbeitung weit verbreitet und erleichtert die unabhängige Bearbeitung jedes Kanals.

Die Alternative ist die Verwendung eines verschachtelten Pufferformats:

```plain
LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR (for a buffer of 16 frames)
```

Dieses Format ist häufig für die Speicherung und Wiedergabe von Audio ohne große Bearbeitung, zum Beispiel: .WAV-Dateien oder ein decodierter MP3-Stream.

Da die Web Audio API auf die Verarbeitung ausgelegt ist, bietet sie _nur_ planare Puffer. Sie verwendet das planare Format, konvertiert das Audio jedoch beim Senden an die Soundkarte zur Wiedergabe in ein verschachteltes Format. Umgekehrt, wenn die API einen MP3 decodiert, beginnt sie mit dem verschachtelten Format und wandelt es zur Verarbeitung in das planare Format um.

## Audiokanäle

Jeder Audiopuffer kann unterschiedliche Anzahlen von Kanälen enthalten. Die meisten modernen Audiogeräte verwenden die grundlegenden _Mono_- (nur ein Kanal) und _Stereo_- (linke und rechte Kanäle) Einstellungen. Einige komplexere Geräte unterstützen _Surround Sound_-Einstellungen (wie _Quad_ und _5.1_), was zu einem reichhaltigeren Klangerlebnis führen kann, dank ihrer hohen Kanalanzahl. Wir repräsentieren die Kanäle in der Regel mit den standardmäßigen Abkürzungen, die in der folgenden Tabelle aufgeführt sind:

| Name     | Kanäle                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| _Mono_   | `0: M: mono`                                                                                                 |
| _Stereo_ | `0: L: links 1: R: rechts`                                                                                   |
| _Quad_   | `0: L: links 1: R: rechts 2: SL: surround links 3: SR: surround rechts`                                       |
| _5.1_    | `0: L: links 1: R: rechts 2: C: center 3: LFE: subwoofer 4: SL: surround links 5: SR: surround rechts`        |

### Up-Mixing und Down-Mixing

Wenn die Anzahl der Kanäle des Eingangs und des Ausgangs nicht übereinstimmen, muss ein Up-Mixing oder Down-Mixing durchgeführt werden. Die folgenden Regeln, die durch die Einstellung der [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation)-Eigenschaft auf `speakers` oder `discrete` gesteuert werden, gelten:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Interpretation</th>
      <th scope="col">Eingangskanäle</th>
      <th scope="col">Ausgangskanäle</th>
      <th scope="col">Mixing-Regeln</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="13" scope="row"><code>speakers</code></th>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Up-Mix von Mono zu Stereo</em>.<br />Der <code>M</code>-Eingangskanal
        wird für beide Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet.<br /><code
          >output.L = input.M<br />output.R = input.M</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Mono zu Quad.</em><br />Der <code>M</code>-Eingangskanal
        wird für die nicht-surround-Ausgangskanäle (<code>L</code> und <code>R</code>)
        verwendet. Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>)
        sind stumm.<br /><code
          >output.L = input.M<br />output.R = input.M<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Mono zu 5.1.</em><br />Der <code>M</code>-Eingangskanal
        wird für den Center-Ausgangskanal (<code>C</code>) verwendet. Alle
        anderen (<code>L</code>, <code>R</code>, <code>LFE</code>, <code>SL</code>,
        und <code>SR</code>) sind stumm.<br /><code
          >output.L = 0<br />output.R = 0</code
        ><br /><code
          >output.C = input.M<br />output.LFE = 0<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Down-Mix von Stereo zu Mono</em>.<br />Beide Eingangskanäle (<code>L</code>
        und <code>R</code>) werden gleichmäßig kombiniert, um den einzigen Ausgangskanal
        (<code>M</code>) zu erzeugen.<br /><code
          >output.M = 0.5 * (input.L + input.R)</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Stereo zu Quad.</em><br />Die <code>L</code>- und
        <code>R</code>-Eingangskanäle werden für ihre nicht-surround entsprechenden
        Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet. Surround-Ausgangskanäle
        (<code>SL</code> und <code>SR</code>) sind stumm.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Stereo zu 5.1.</em><br />Die <code>L</code>- und
        <code>R</code>-Eingangskanäle werden für ihre nicht-surround entsprechenden
        Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet. Surround-Ausgangskanäle
        (<code>SL</code> und <code>SR</code>), sowie die Center (<code>C</code>)
        und Subwoofer (<code>LFE</code>) Kanäle sind stumm.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.C = 0<br />output.LFE
          = 0<br />output.SL = 0<br />output.SR = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Down-Mix von Quad zu Mono</em>.<br />Alle vier Eingangskanäle
        (<code>L</code>, <code>R</code>, <code>SL</code>, und <code>SR</code>)
        werden gleichmäßig kombiniert, um den einzigen Ausgangskanal
        (<code>M</code>) zu erzeugen.<br />
        <code>output.M = 0.25 * (input.L + input.R + input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von Quad zu Stereo</em>.<br />Beide linken Eingangskanäle
        (<code>L</code> und <code>SL</code>) werden gleichmäßig kombiniert, um den
        einzigen linken Ausgangskanal (<code>L</code>) zu erzeugen. Und ähnlich
        werden beide rechten Eingangskanäle (<code>R</code> und <code>SR</code>)
        gleichmäßig kombiniert, um den einzigen rechten Ausgangskanal
        (<code>R</code>) zu erzeugen.<br />
        <code>output.L = 0.5 * (input.L + input.SL)</code><br />
        <code>output.R = 0.5 * (input.R + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Quad zu 5.1.</em><br />Die <code>L</code>,
        <code>R</code>, <code>SL</code>, und <code>SR</code>-Eingangskanäle werden
        für ihre entsprechenden Ausgangskanäle (<code>L</code> und <code>R</code>)
        verwendet. Center (<code>C</code>) und Subwoofer (<code>LFE</code>) Kanäle
        sind stumm.<br />
        <code>output.L = input.L</code><br />
        <code>output.R = input.R</code><br />
        <code>output.C = 0</code><br />
        <code>output.LFE = 0</code><br />
        <code>output.SL = input.SL</code><br />
        <code>output.SR = input.SR</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Down-Mix von 5.1 zu Mono.</em><br />Die linken (<code>L</code> und
        <code>SL</code>), rechten (<code>R</code> und <code>SR</code>) und
        zentralen Kanäle werden alle zusammengemischt. Die Surround-Kanäle sind
        leicht gedämpft, und die regulären seitlichen Kanäle werden leistungskompensiert,
        um sie als einen einzigen Kanal zu zählen, indem sie mit <code>√2/2</code>
        multipliziert werden. Der Subwoofer (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von 5.1 zu Stereo.</em><br />Der zentrale Kanal (<code>C</code>)
        wird mit jedem seitlichen Surround-Kanal (<code>SL</code> oder <code>SR</code>)
        summiert und zu jedem seitlichen Kanal gemischt. Da es auf zwei Kanäle
        heruntergemischt wird, wird es mit einer niedrigeren Leistung gemischt: in
        jedem Fall wird es mit <code>√2/2</code> multipliziert. Der Subwoofer
        (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.L = input.L + 0.7071 * (input.C + input.SL)</code><br />
        <code>output.R = input.R + 0.7071 * (input.C + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Down-Mix von 5.1 zu Quad.</em><br />Der zentrale (<code>C</code>)
        wird mit den seitlichen nicht-surround Kanälen (<code>L</code> und
        <code>R</code>) gemischt. Da es auf zwei Kanäle heruntergemischt wird, wird
        es mit einer niedrigeren Leistung gemischt: in jedem Fall wird es mit
        <code>√2/2</code> multipliziert. Die Surround-Kanäle werden unverändert
        weitergeben. Der Subwoofer (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.L = input.L + 0.7071 * input.C</code><br />
        <code>output.R = input.R + 0.7071 * input.C</code><br />
        <code>output.SL = input.SL</code><br />
        <code>output.SR = input.SR</code>
      </td>
    </tr>
    <tr>
      <td colspan="2">Andere, nicht standardmäßige Layouts</td>
      <td>
        Nicht-standardmäßige Kanal-Layouts verhalten sich so, als ob
        <code>channelInterpretation</code> auf
        <code>discrete</code> gesetzt ist.<br />Die Spezifikation erlaubt ausdrücklich die zukünftige Definition neuer Lautsprecher-Layouts. Daher ist dieser Fallback nicht zukunftssicher, da das Verhalten der Browser für eine bestimmte Anzahl von Kanälen sich in Zukunft ändern kann.
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="row"><code>discrete</code></th>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>) wobei <code>x&#x3C;y</code></td>
      <td>
        <em>Up-Mix diskrete Kanäle.</em><br />Füllen Sie jeden Ausgangskanal mit
        seinem Eingabepartner &mdash; das heißt, dem Eingangskanal mit dem gleichen Index.
        Kanäle ohne entsprechende Eingangskanäle bleiben stumm.
      </td>
    </tr>
    <tr>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>) wobei <code>x>y</code></td>
      <td>
        <em>Down-Mix diskrete Kanäle.</em><br />Füllen Sie jeden Ausgangskanal mit
        seinem Eingabepartner &mdash; das heißt, dem Eingangskanal mit dem gleichen Index.
        Eingangskanäle ohne entsprechende Ausgangskanäle werden fallen gelassen.
      </td>
    </tr>
  </tbody>
</table>

## Visualisierungen

Im Allgemeinen erhalten wir den Ausgang im Laufe der Zeit, um Audio-Visualisierungen zu erzeugen, normalerweise durch Lesen der Verstärkung oder Frequenzdaten. Dann verwenden wir ein grafisches Werkzeug, um die gewonnenen Daten in eine visuelle Darstellung, wie ein Diagramm, umzuwandeln. Die Web Audio API verfügt über einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), der das durchlaufende Audiosignal nicht verändert. Darüber hinaus gibt er die Audiodaten aus, was uns ermöglicht, sie mit einer Technologie wie {{htmlelement("canvas")}} zu verarbeiten.

![Ohne das Audio-Stream zu modifizieren, ermöglicht der Node das Abrufen der Frequenz- und Zeit-Domänendaten, die damit verbunden sind, unter Verwendung eines FFT.](fttaudiodata_en.svg)

Sie können Daten mit den folgenden Methoden abrufen:

- [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Float32Array")}} Array.
- [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Uint8Array")}} (unsigned Byte Array).
- [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData)
  - : Kopiert die aktuelle Wellenform oder Zeit-Domänendaten in ein übergebenes {{jsxref("Float32Array")}} Array.
- [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData)
  - : Kopiert die aktuelle Wellenform oder Zeit-Domänendaten in ein übergebenes {{jsxref("Uint8Array")}} (unsigned Byte Array).

> [!NOTE]
> Für weitere Informationen, siehe unseren [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API) Artikel.

## Raumklang

Die Audio-Raumklangerweiterung ermöglicht uns, die Position und das Verhalten eines Audiosignals an einem bestimmten Punkt im physischen Raum zu modellieren, um zu simulieren, dass der Zuhörer dieses Audio hört. In der Web Audio API wird die Raumklangerweiterung durch den [`PannerNode`](/de/docs/Web/API/PannerNode) und den [`AudioListener`](/de/docs/Web/API/AudioListener) behandelt.

Der Panner verwendet ein kartesisches Koordinatensystem, um die _Position_ der Audioquelle als Vektor und ihre _Orientierung_ als 3D-Richtkegel zu beschreiben. Der Kegel kann ziemlich groß sein, zum Beispiel für omnidirektionale Quellen.

![Der PannerNode definiert eine räumliche Position und Orientierung für ein bestimmtes Signal.](pannernode_en.svg)

Ebenso beschreibt die Web Audio API den Zuhörer mit einem kartesischen Koordinatensystem: Seine _Position_ als Vektor und seine _Orientierung_ als zwei Richtungsvektoren, _oben_ und _vorne_. Diese Vektoren definieren die Richtung des Kopfes des Zuhörers und die Richtung, in die die Nase des Zuhörers zeigt. Die Vektoren sind zueinander senkrecht.

![Wir sehen die Position, oben, und vorn Vektoren eines AudioListener, wobei die oben und vorne Vektoren sich in einem 90° Winkel befinden.](webaudiolistenerreduced.png)

> [!NOTE]
> Für weitere Informationen, siehe unseren [Basislehrgang zur Web-Audio-Raumklangverarbeitung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) Artikel.

## Fan-in und Fan-out

Im Audiobereich beschreibt **Fan-in** den Vorgang, bei dem ein [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) eine Serie von _Mono_-Eingangsquellen aufnimmt und ein einziges Mehrkanalsignal als Ausgang erzeugt:

![Fan-in-Prozess-Diagramm. Mehrere pfeillose Pfeile, die Mono-Eingangsquellen darstellen, kombinieren sich, um einen einzelnen spitzen Pfeil zu erzeugen, der ein einzelnes Mehrkanalsignal darstellt](fanin.svg)

**Fan-out** beschreibt den entgegengesetzten Vorgang, bei dem ein [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) eine Mehrkanal-Eingangsquelle aufnimmt und mehrere _Mono_-Ausgangssignale erzeugt:

![Fan-out-Prozess-Diagramm. Ein Pfeilloser Pfeil, der eine Mehrkanal-Eingangsquelle darstellt, teilt sich auf, um mehrere spitze Pfeile zu erzeugen, die mehrere Mono-Ausgangssignale darstellen](fanout.svg)

---
title: Grundkonzepte hinter der Web-Audio-API
slug: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt einige der Audiotheorien hinter den Funktionen der Web-Audio-API, um Ihnen bei der Gestaltung Ihrer App-Signalwege fundierte Entscheidungen zu ermöglichen. Wenn Sie noch kein Tontechniker sind, gibt Ihnen dieser Artikel genügend Hintergrundwissen, um zu verstehen, warum die Web-Audio-API so funktioniert, wie sie es tut.

## Audiographen

Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) befasst sich mit der Handhabung von Audiooperationen innerhalb eines [Audio-Kontexts](/de/docs/Web/API/AudioContext) und wurde so entworfen, dass sie modulare Signalwege erlaubt. Jeder [Audio-Knoten](/de/docs/Web/API/AudioNode) führt eine grundlegende Audiooperation durch und ist mit einem oder mehreren anderen Audio-Knoten verbunden, um ein [Audio-Signalweg-Diagramm](/de/docs/Web/API/AudioNode#the_audio_routing_graph) zu bilden. Mehrere Quellen mit unterschiedlichen Kanal-Layouts werden unterstützt, sogar innerhalb eines einzelnen Kontexts. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten sind über ihre Eingänge und Ausgänge miteinander verbunden und bilden eine Kette, die mit einer oder mehreren Quellen beginnt, durch einen oder mehrere Knoten geht und dann bei einem Ziel endet (obwohl Sie kein Ziel angeben müssen, wenn Sie lediglich einige Audiodaten visualisieren möchten). Ein einfacher, typischer Workflow für Web-Audio könnte folgendermaßen aussehen:

1. Erstellen Sie den Audio-Kontext.
2. Erstellen Sie Audioquellen innerhalb des Kontexts (wie {{HTMLElement("audio")}}, einen Oszillator oder Stream).
3. Erstellen Sie Audioeffekte (wie die Nachhall-, Biquad-Filter-, Panner- oder Kompressor-Knoten).
4. Wählen Sie das endgültige Ziel für das Audio (wie die Lautsprecher des Benutzers).
5. Verbinden Sie die Quellknoten mit null oder mehr Effektknoten und dann mit dem gewählten Ziel.

> [!NOTE]
> Die [Kanalnotation](https://en.wikipedia.org/wiki/Surround_sound#Channel_notation) ist ein numerischer Wert, wie _2.0_ oder _5.1_, der die Anzahl der verfügbaren Audiokanäle auf einem Signal darstellt. Die erste Zahl ist die Anzahl der Audiokanäle mit voller Frequenzbandbreite, die das Signal enthält. Die nach dem Punkt angezeigte Zahl gibt die Anzahl der für niederfrequente Effekt-Ausgänge (LFE) reservierten Kanäle an; diese werden oft **Subwoofer** genannt.

![Ein einfaches Blockdiagramm mit einem äußeren Kasten, der als Audiokontext bezeichnet ist, und drei inneren Kästen, die als Quellen, Effekte und Ziel bezeichnet sind. Die drei inneren Kästen haben Pfeile dazwischen, die von links nach rechts zeigen und den Audiofluss anzeigen.](webaudioapi_en.svg)

Jeder Eingang oder Ausgang besteht aus einem oder mehreren Audio-**Kanälen**, die zusammen ein bestimmtes Audiolayout darstellen. Jede diskrete Kanalstruktur wird unterstützt, einschließlich _Mono_, _Stereo_, _Quad_, _5.1_ und so weiter.

![Zeigt die Fähigkeit von Audioknoten, über ihre Eingänge und Ausgänge und die Kanäle innerhalb dieser Eingänge/Ausgänge verbunden zu werden.](mdn.png)

Es gibt mehrere Möglichkeiten, Audio zu erhalten:

- Sound kann direkt in JavaScript durch einen Audio-Knoten erzeugt werden (wie ein Oszillator).
- Es kann aus rohen [PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)-Daten erstellt werden (wie .WAV-Dateien oder andere Formate, die von {{domxref("BaseAudioContext/decodeAudioData", "decodeAudioData()")}} unterstützt werden).
- Es kann aus HTML-Medienelementen generiert werden, wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}}.
- Es kann aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}}, wie einer Webcam oder einem Mikrofon, bezogen werden.

## Audiodaten: Was ist in einer Abtastung

Wenn ein Audiosignal verarbeitet wird, findet die Abtastung statt. **Sampling** ist die Umwandlung eines [kontinuierlichen Signals](https://en.wikipedia.org/wiki/Continuous_signal) in ein [diskretes Signal](https://en.wikipedia.org/wiki/Discrete_signal). Anders ausgedrückt wird eine kontinuierliche Schallwelle, wie eine Band, die live spielt, in eine Folge digitaler Abtastungen (ein diskretes Zeitsignal) umgewandelt, das es einem Computer ermöglicht, das Audio in einzelnen Blöcken zu verarbeiten.

Weitere Informationen finden Sie auf der Wikipedia-Seite [_Abtastung (Signalverarbeitung)_](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29).

## Audio-Puffer: Frames, Samples und Kanäle

Ein {{domxref("AudioBuffer")}} wird durch drei Parameter definiert:

- die Anzahl der Kanäle (1 für Mono, 2 für Stereo usw.),
- seine Länge, also die Anzahl der Abtastrahmen im Puffer,
- und die Abtastrate, die Anzahl der Abtastrahmen, die pro Sekunde wiedergegeben werden.

Ein _Sample_ ist ein einzelner 32-Bit-Gleitkommawert, der den Wert des Audiostreams zu jedem bestimmten Zeitpunkt innerhalb eines bestimmten Kanals (links oder rechts, im Falle von Stereo) darstellt. Ein _Frame_ oder _Abtastrahmen_ ist der Satz aller Werte für alle Kanäle, die zu einem bestimmten Zeitpunkt wiedergegeben werden: alle Samples aller Kanäle, die zur gleichen Zeit wiedergegeben werden (zwei für einen Stereo-Sound, sechs für 5.1 usw.).

Die _Abtastrate_ ist die Anzahl dieser Samples (oder Frames, da alle Samples eines Frames gleichzeitig abgespielt werden), die in einer Sekunde abgespielt werden, gemessen in Hz. Je höher die Abtastrate, desto besser die Klangqualität.

Betrachten wir einen _Mono- und einen Stereo-Audio-Puffer_, die jeweils eine Sekunde lang bei einer Rate von 44100Hz sind:

- Der _Mono_-Puffer hat 44.100 Samples und 44.100 Frames. Die `length`-Eigenschaft ist 44.100.
- Der _Stereo_-Puffer hat 88.200 Samples, aber immer noch 44.100 Frames. Die `length`-Eigenschaft bleibt bei 44100, da sie der Anzahl der Frames entspricht.

![Ein Diagramm, das mehrere Frames in einem Audiopuffer in einer langen Linie zeigt, wobei jeder zwei Samples enthält, da der Puffer zwei Kanäle hat, also Stereo ist.](sampleframe-english.png)

Wenn ein Puffer abgespielt wird, hören Sie zuerst den ganz links liegenden Abtastrahmen, dann den direkt daneben, dann den nächsten _und so weiter_ bis zum Ende des Puffers. Im Fall von Stereo hören Sie beide Kanäle gleichzeitig. Abtastrahmen sind praktisch, weil sie unabhängig von der Anzahl der Kanäle sind und die Zeit in idealer Weise für eine präzise Audiomanipulation repräsentieren.

> [!NOTE]
> Um aus einer Frame-Anzahl eine Zeit in Sekunden zu erhalten, teilen Sie die Anzahl der Frames durch die Abtastrate. Um die Anzahl der Frames aus der Anzahl der Samples zu erhalten, müssen Sie nur den letzteren Wert durch die Kanalanzahl teilen.

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
> In [digitalem Audio](https://en.wikipedia.org/wiki/Digital_audio) ist **44,100 [Hz](https://en.wikipedia.org/wiki/Hertz)** (alternativ als **44,1 kHz** dargestellt) eine häufige [Abtastfrequenz](https://en.wikipedia.org/wiki/Sampling_frequency). Warum 44,1 kHz?
>
> Erstens, weil der [Hörbereich](https://en.wikipedia.org/wiki/Hearing_range) des menschlichen Ohrs ungefähr von 20 Hz bis 20.000 Hz reicht. Nach dem [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem) muss die Abtastfrequenz größer als das Doppelte der maximal gewünschten Frequenz sein. Daher muss die Abtastrate _größer_ als 40.000 Hz sein.
>
> Zweitens müssen Signale [Tiefpass gefiltert](https://en.wikipedia.org/wiki/Low-pass_filter) werden, bevor sie abgetastet werden, sonst tritt [Aliasing](https://en.wikipedia.org/wiki/Aliasing) auf. Während ein idealer Tiefpassfilter perfekt Frequenzen unterhalb von 20 kHz passieren würde (ohne sie zu schwächen) und Frequenzen über 20 kHz perfekt abschneiden würde, ist in der Praxis ein [Übergangsband](https://en.wikipedia.org/wiki/Transition_band) erforderlich, in dem Frequenzen teilweise abgeschwächt werden. Je breiter dieses Übergangsband ist, desto einfacher und kostengünstiger ist es, einen [Antialiasing-Filter](https://en.wikipedia.org/wiki/Anti-aliasing_filter) zu erstellen. Die 44.1 kHz Abtastfrequenz erlaubt ein 2,05 kHz Übergangsband.

Wenn Sie den obigen Aufruf verwenden, erhalten Sie einen Stereo-Puffer mit zwei Kanälen, der, wenn er auf einem {{domxref("AudioContext")}} mit 44100 Hz (sehr häufig, die meisten normalen Soundkarten laufen mit dieser Rate) abgespielt wird, 0,5 Sekunden dauern wird: 22.050 Frames/44.100 Hz = 0,5 Sekunden.

```js
const context = new AudioContext();
const buffer = new AudioBuffer(context, {
  numberOfChannels: 1,
  length: 22050,
  sampleRate: 22050,
});
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Mono-Puffer (Ein-Kanal-Puffer), der, wenn er auf einem {{domxref("AudioContext")}} mit 44.100 Hz abgespielt wird, automatisch auf 44.100 Hz _neu abgetastet_ wird (und daher 44.100 Frames ergibt) und 1,0 Sekunde dauern wird: 44.100 Frames/44.100 Hz = 1 Sekunde.

> [!NOTE]
> Audio-Resampling ist dem Bildgrößenanpassung sehr ähnlich. Angenommen, Sie haben ein 16 x 16 Bild, möchten es aber auf eine Fläche von 32 x 32 anpassen. Sie ändern die Größe (oder resample) es. Das Ergebnis hat weniger Qualität (es kann unscharf oder pixelig sein, je nach Resampling-Algorithmus), aber es funktioniert, wobei das angepasste Bild weniger Platz beansprucht. Resampeltes Audio ist ähnlich: Sie sparen Platz, aber in der Praxis können Sie keinen hochfrequenten Inhalt oder hohe Töne korrekt wiedergeben.

### Planar versus Interleaved Buffers

Die Web-Audio-API verwendet ein Planar-Pufferformat. Die linken und rechten Kanäle werden folgendermaßen gespeichert:

```plain
LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR (für einen Puffer von 16 Frames)
```

Diese Struktur ist im Audiobereich weit verbreitet und erleichtert die unabhängige Verarbeitung jedes Kanals.

Die Alternative ist die Verwendung eines Interleaved-Pufferformats:

```plain
LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR (für einen Puffer von 16 Frames)
```

Dieses Format ist weit verbreitet zur Speicherung und Wiedergabe von Audio ohne große Verarbeitung, zum Beispiel: .WAV-Dateien oder ein dekodierter MP3-Stream.

Da die Web-Audio-API für die Verarbeitung konzipiert ist, stellt sie _nur_ Planar-Puffer bereit. Sie verwendet das Planar-Format, wandelt das Audio jedoch in das Interleaved-Format um, wenn es zur Wiedergabe an die Soundkarte gesendet wird. Umgekehrt beginnt die API beim Dekodieren eines MP3s mit dem Interleaved-Format und wandelt es für die Verarbeitung in das Planar-Format um.

## Audio-Kanäle

Jeder Audio-Puffer kann unterschiedliche Kanalanzahlen enthalten. Die meisten modernen Audiogeräte verwenden die grundlegenden _Mono_- (nur ein Kanal) und _Stereo_- (linke und rechte Kanäle) Einstellungen. Einige komplexere Systeme unterstützen _Surround-Sound_-Einstellungen (wie _Quad_ und _5.1_), die dank ihrer hohen Kanalanzahl zu einem reichhaltigeren Klangerlebnis führen können. Wir stellen die Kanäle in der Regel mit den Standardabkürzungen dar, die in der folgenden Tabelle aufgeführt sind:

| Name     | Kanäle                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------ |
| _Mono_   | `0: M: mono`                                                                                     |
| _Stereo_ | `0: L: left 1: R: right`                                                                         |
| _Quad_   | `0: L: left 1: R: right 2: SL: surround left 3: SR: surround right`                              |
| _5.1_    | `0: L: left 1: R: right 2: C: center 3: LFE: subwoofer 4: SL: surround left 5: SR: surround right` |

### Up-Mixing und Down-Mixing

Wenn die Anzahl der Kanäle des Eingangs und des Ausgangs nicht übereinstimmt, muss ein Up-Mixing oder Down-Mixing durchgeführt werden. Die folgenden Regeln, gesteuert durch das Setzen der {{domxref("AudioNode.channelInterpretation")}} Eigenschaft auf `speakers` oder `discrete`, gelten:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Interpretation</th>
      <th scope="col">Eingangskanäle</th>
      <th scope="col">Ausgangskanäle</th>
      <th scope="col">Mischregeln</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="13" scope="row"><code>speakers</code></th>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Up-Mix von Mono zu Stereo</em>.<br />Der <code>M</code>-Eingangskanal wird für beide Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet.<br /><code
          >output.L = input.M<br />output.R = input.M</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Mono zu Quad.</em><br />Der <code>M</code>-Eingangskanal wird für die nicht-surround Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet. Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>) sind stumm.<br /><code
          >output.L = input.M<br />output.R = input.M<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Mono zu 5.1.</em><br />Der <code>M</code>-Eingangskanal wird für den Center-Ausgangskanal (<code>C</code>) verwendet. Alle anderen Kanäle (<code>L</code>, <code>R</code>, <code>LFE</code>, <code>SL</code>, und <code>SR</code>) sind stumm.<br /><code
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
        <em>Down-Mix von Stereo zu Mono</em>.<br />Beide Eingangskanäle (<code>L</code> und <code>R</code>) werden gleichmäßig kombiniert, um den einzigartigen Ausgangskanal (<code>M</code>) zu erzeugen.<br /><code
          >output.M = 0.5 * (input.L + input.R)</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Stereo zu Quad.</em><br />Die <code>L</code> und <code>R</code>-Eingangskanäle werden für ihre nicht-surround entsprechenden Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet. Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>) sind stumm.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Stereo zu 5.1.</em><br />Die <code>L</code> und <code>R</code>-Eingangskanäle werden für ihre nicht-surround entsprechenden Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet. Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>), sowie die Center (<code>C</code>)- und Subwoofer (<code>LFE</code>)-Kanäle, bleiben stumm.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.C = 0<br />output.LFE
          = 0<br />output.SL = 0<br />output.SR = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Down-Mix von Quad zu Mono</em>.<br />Alle vier Eingangskanäle (<code>L</code>, <code>R</code>, <code>SL</code>, und <code>SR</code>) werden gleichmäßig kombiniert, um den einzigartigen Ausgangskanal (<code>M</code>) zu erzeugen.<br />
        <code>output.M = 0.25 * (input.L + input.R + input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von Quad zu Stereo</em>.<br />Beide linken Eingangskanäle (<code>L</code> und <code>SL</code>) werden gleichmäßig kombiniert, um den einzigartigen linken Ausgangskanal (<code>L</code>) zu erzeugen. Ähnlich werden beide rechten Eingangskanäle (<code>R</code> und <code>SR</code>) gleichmäßig kombiniert, um den einzigartigen rechten Ausgangskanal (<code>R</code>) zu erzeugen.<br />
        <code>output.L = 0.5 * (input.L + input.SL)</code><br />
        <code>output.R = 0.5 * (input.R + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Quad zu 5.1.</em><br />Die <code>L</code>, <code>R</code>, <code>SL</code> und <code>SR</code>-Eingangskanäle werden für ihre jeweiligen Ausgangskanäle verwendet (<code>L</code> und <code>R</code>). Center (<code>C</code>) und Subwoofer (<code>LFE</code>) Kanäle bleiben stumm.<br />
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
        <em>Down-Mix von 5.1 zu Mono.</em><br />Die linken (<code>L</code> und <code>SL</code>), rechten (<code>R</code> und <code>SR</code>) und zentralen Kanäle werden alle zusammen gemischt. Die Surround-Kanäle werden leicht abgeschwächt, und die regulären lateralen Kanäle werden leistungsmäßig kompensiert, damit sie als ein einziger Kanal zählen, indem sie mit <code>√2/2</code> multipliziert werden. Der Subwoofer (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von 5.1 zu Stereo.</em><br />Der zentrale Kanal (<code>C</code>) wird mit jedem lateralen Surround-Kanal (<code>SL</code> oder <code>SR</code>) summiert und zu jedem lateralen Kanal gemischt. Da er auf zwei Kanäle heruntergemischt wird, wird er mit geringerer Leistung gemischt: In jedem Fall wird er mit <code>√2/2</code> multipliziert. Der Subwoofer (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.L = input.L + 0.7071 * (input.C + input.SL)</code><br />
        <code>output.R = input.R + 0.7071 * (input.C + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Down-Mix von 5.1 zu Quad.</em><br />Der zentrale (<code>C</code>) wird mit den lateralen nicht-surround Kanälen (<code>L</code> und <code>R</code>) gemischt. Da er auf zwei Kanäle heruntergemischt wird, wird er mit geringerer Leistung gemischt: In jedem Fall wird er mit <code>√2/2</code> multipliziert. Die Surround-Kanäle werden unverändert weitergegeben. Der Subwoofer (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.L = input.L + 0.7071 * input.C</code><br />
        <code>output.R = input.R + 0.7071 * input.C</code><br />
        <code>output.SL = input.SL</code><br />
        <code>output.SR = input.SR</code>
      </td>
    </tr>
    <tr>
      <td colspan="2">Andere, nicht standardisierte Layouts</td>
      <td>
        Nicht standardisierte Kanal-Layouts verhalten sich so, als wäre
        <code>channelInterpretation</code> auf
        <code>discrete</code> gesetzt.<br />Die Spezifikation erlaubt ausdrücklich die zukünftige Definition neuer Lautsprecher-Layouts. Daher ist dieses Fallback nicht zukunftssicher, da sich das Verhalten der Browser für eine bestimmte Anzahl von Kanälen in Zukunft ändern kann.
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="row"><code>discrete</code></th>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>) wobei <code>x&#x3C;y</code></td>
      <td>
        <em>Up-Mix diskreter Kanäle.</em><br />Füllen Sie jeden Ausgangskanal mit seinem jeweiligen Eingabekanal &mdash; das heißt, dem Eingangskanal mit demselben Index.
        Kanäle ohne entsprechenden Eingangskanal bleiben stumm.
      </td>
    </tr>
    <tr>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>) wobei <code>x>y</code></td>
      <td>
        <em>Down-Mix diskreter Kanäle.</em><br />Füllen Sie jeden Ausgangskanal mit seinem jeweiligen Eingabekanal &mdash; das heißt, dem Eingangskanal mit demselben Index.
        Eingabekanäle ohne entsprechenden Ausgangskanal werden verworfen.
      </td>
    </tr>
  </tbody>
</table>

## Visualisierungen

Im Allgemeinen erhalten wir den Ausgang über die Zeit, um Audiovisualisierungen zu erzeugen, indem wir normalerweise seine Verstärkung oder Frequenzdaten lesen. Dann verwenden wir ein grafisches Werkzeug, um die erhaltenen Daten in eine visuelle Darstellung, wie ein Diagramm, umzuwandeln. Die Web-Audio-API verfügt über einen {{domxref("AnalyserNode")}}, der das durchgehende Audiosignal nicht verändert. Zusätzlich gibt er die Audiodaten aus, sodass wir sie über eine Technologie wie {{htmlelement("canvas")}} verarbeiten können.

![Ohne den Audiostrom zu verändern, ermöglicht der Knoten den Zugriff auf die zugehörigen Frequenz- und Zeitbereich-Daten unter Nutzung einer FFT.](fttaudiodata_en.svg)

Sie können Daten mit den folgenden Methoden erfassen:

- {{domxref("AnalyserNode.getFloatFrequencyData()")}}
  - : Kopiert die aktuellen Frequenzdaten in ein {{jsxref("Float32Array")}}-Array, das an sie übergeben wird.
- {{domxref("AnalyserNode.getByteFrequencyData()")}}
  - : Kopiert die aktuellen Frequenzdaten in ein {{jsxref("Uint8Array")}} (unsigned Byte-Array), das an sie übergeben wird.
- {{domxref("AnalyserNode.getFloatTimeDomainData()")}}
  - : Kopiert die aktuelle Wellenform oder Zeitbereichsdaten in ein {{jsxref("Float32Array")}}-Array, das an sie übergeben wird.
- {{domxref("AnalyserNode.getByteTimeDomainData()")}}
  - : Kopiert die aktuelle Wellenform oder Zeitbereichsdaten in ein {{jsxref("Uint8Array")}} (unsigned Byte-Array), das an sie übergeben wird.

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Visualisierungen mit der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API).

## Raumaudio (Spatializations)

Die räumliche Audiowiedergabe ermöglicht es, die Position und das Verhalten eines Audiosignals an einem bestimmten Punkt im physischen Raum zu modellieren, und simuliert, wie der Zuhörer dieses Audio hört. In der Web-Audio-API wird die räumliche Wiedergabe durch das {{domxref("PannerNode")}} und das {{domxref("AudioListener")}} gehandhabt.

Der Panner verwendet rechtswinkelige kartesische Koordinaten, um die _Position_ der Audioquelle als Vektor und ihre _Ausrichtung_ als 3D-Richtungskegel zu beschreiben. Der Kegel kann ziemlich groß sein, zum Beispiel für omnidirektionale Quellen.

![Der PannerNode definiert eine räumliche Position und Orientierung für ein gegebenes Signal.](pannernode_en.svg)

Ähnlich beschreibt die Web-Audio-API den Zuhörer mit rechtswinkeligen kartesischen Koordinaten: seine _Position_ als einen Vektor und seine _Ausrichtung_ als zwei Richtungsvektoren, _oben_ und _vorn_. Diese Vektoren definieren die Richtung der Oberseite des Kopfs des Zuhörers und die Richtung, in die die Nase des Zuhörers zeigt. Die Vektoren stehen zueinander senkrecht.

![Wir sehen die Positions-, Hoch- und Vordervektoren eines AudioListeners, wobei die Hoch- und Vordervektoren im 90°-Winkel zueinander stehen.](webaudiolistenerreduced.png)

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Grundlagen der räumlichen Audiowiedergabe mit der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics).

## Fan-In und Fan-Out

In Audiobegriffen beschreibt **Fan-In** den Prozess, bei dem ein {{domxref("ChannelMergerNode")}} eine Serie von _Mono_-Eingangsquellen nimmt und ein einzelnes Mehrkanalsignal ausgibt:

![Fan-In Prozessdiagramm. Mehrere punktlose Pfeile, die Mono-Eingangsquellen darstellen, kombinieren sich, um einen einzelnen spitzen Pfeil auszugeben, der ein einzelnes Mehrkanalsignal darstellt.](fanin.svg)

**Fan-Out** beschreibt den entgegengesetzten Prozess, bei dem ein {{domxref("ChannelSplitterNode")}} eine Mehrkanaleingangsquelle nimmt und mehrere _Mono_-Ausgangssignale ausgibt:

![Fan-Out Prozessdiagramm. Ein einzelner punktloser Pfeil, der eine Mehrkanaleingangsquelle darstellt, teilt sich, um mehrere spitze Pfeile auszugeben, die mehrere Mono-Ausgangssignale darstellen.](fanout.svg)

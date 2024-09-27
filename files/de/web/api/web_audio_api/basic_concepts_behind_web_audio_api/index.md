---
title: Grundlegende Konzepte der Web Audio API
slug: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt einige der Audiokonzepte, die hinter den Funktionen der Web Audio API stehen, um Ihnen bei der Entscheidungsfindung zu helfen, wie Sie das Audio in Ihrer Anwendung routen. Wenn Sie kein Toningenieur sind, bietet er Ihnen genügend Hintergrundwissen, um zu verstehen, warum die Web Audio API so funktioniert, wie sie es tut.

## Audiografen

Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) befasst sich mit der Verarbeitung von Audiooperationen innerhalb eines [Audio Context](/de/docs/Web/API/AudioContext) und wurde entwickelt, um eine _modulare Routing_-Möglichkeit zu ermöglichen. Jeder [Audio Node](/de/docs/Web/API/AudioNode) führt eine grundlegende Audiooperation aus und ist mit einem oder mehreren anderen Audio Nodes verbunden, um einen [Audio Routing Graph](/de/docs/Web/API/AudioNode#the_audio_routing_graph) zu bilden. Mehrere Quellen mit unterschiedlichen Kanallayouts werden unterstützt, sogar innerhalb eines einzigen Kontexts. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio Nodes sind über ihre Eingänge und Ausgänge miteinander verbunden und bilden eine Kette, die mit einer oder mehreren Quellen beginnt, durch einen oder mehrere Nodes geht und dann an einem Ziel endet (obwohl Sie kein Ziel bereitstellen müssen, wenn Sie nur einige Audiodaten visualisieren möchten). Ein einfacher, typischer Workflow für Web-Audio könnte wie folgt aussehen:

1. Erstellen Sie den Audio Context.
2. Erstellen Sie Audioquellen im Kontext (wie z. B. {{HTMLElement("audio")}}, einen Oszillator oder Stream).
3. Erstellen Sie Audioeffekte (wie z. B. die Reverb-, Biquad-Filter-, Panner- oder Kompressornodes).
4. Wählen Sie das endgültige Ziel für das Audio aus (wie z. B. die Lautsprecher des Benutzers).
5. Verbinden Sie die Quellnodes mit null oder mehr Effektnodes und dann mit dem gewählten Ziel.

> [!NOTE]
> Die [Kanalkennzeichnung](https://en.wikipedia.org/wiki/Surround_sound#Channel_notation) ist ein numerischer Wert, wie _2.0_ oder _5.1_, der die Anzahl der Audiokanäle auf einem Signal darstellt. Die erste Zahl gibt die Anzahl der ganzheitlichen Audiokanäle an, die das Signal umfasst. Die Zahl, die nach dem Punkt erscheint, zeigt die Anzahl der Kanäle an, die für Tieffrequenzeffekt (LFE)-Ausgaben reserviert sind; diese werden oft **Subwoofer** genannt.

![Ein einfaches Diagramm mit einem äußeren Kasten, der als Audio Context und drei innere Kästen, die als Quellen, Effekte und Ziel beschriftet sind. Die drei inneren Kästen haben Pfeile zwischen sich, die von links nach rechts zeigen, was den Fluss der Audioinformationen anzeigt.](webaudioapi_en.svg)

Jeder Eingang oder Ausgang besteht aus einem oder mehreren Audio-**Kanälen**, die zusammen ein spezifisches Audio-Layout darstellen. Jedes diskrete Kanalformat wird unterstützt, einschließlich _mono_, _stereo_, _quad_, _5.1_ und so weiter.

![Die Möglichkeit der Vernetzung von Audio Nodes durch ihre Eingänge und Ausgänge sowie die Kanäle in diesen Eingängen/Ausgängen.](mdn.png)

Es gibt verschiedene Möglichkeiten, Audio zu erzielen:

- Der Ton kann direkt in JavaScript von einem Audio Node (wie einem Oszillator) erzeugt werden.
- Er kann aus rohen [PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)-Daten erstellt werden (wie z. B. .WAV-Dateien oder andere Formate, die von [`decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) unterstützt werden).
- Er kann von HTML-Mediaelementen erzeugt werden, wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}}.
- Er kann aus einem [WebRTC](/de/docs/Web/API/WebRTC_API)-[`MediaStream`](/de/docs/Web/API/MediaStream) bezogen werden, wie z. B. einer Webcam oder einem Mikrofon.

## Audiodaten: Was ist in einer Probe

Wenn ein Audiosignal verarbeitet wird, erfolgt die Abtastung. **Abtastung** ist die Umwandlung eines [kontinuierlichen Signals](https://en.wikipedia.org/wiki/Continuous_signal) in ein [diskretes Signal](https://en.wikipedia.org/wiki/Discrete_signal). Anders ausgedrückt: Eine kontinuierliche Schallwelle, wie eine live spielende Band, wird in eine Sequenz digitaler Proben umgewandelt (ein diskretes Zeitsignal), das es einem Computer ermöglicht, das Audio in getrennten Blöcken zu verarbeiten.

Weitere Informationen finden Sie auf der Wikipedia-Seite [_Sampling (signal processing)_](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29).

## Audiopuffer: Frames, Samples und Kanäle

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) wird mit drei Parametern definiert:

- die Anzahl der Kanäle (1 für mono, 2 für stereo, etc.),
- seine Länge, also die Anzahl der Sample-Frames im Puffer,
- und die Abtastrate, die Anzahl der Sample-Frames, die pro Sekunde abgespielt werden.

Ein _Sample_ ist ein einzelner 32-Bit-Gleitkommawert, der den Wert des Audiostreams zu jedem bestimmten Zeitpunkt innerhalb eines bestimmten Kanals darstellt (links oder rechts, wenn stereo). Ein _Frame_ oder _Sample-Frame_ ist die Gesamtheit aller Werte für alle Kanäle, die zu einem bestimmten Zeitpunkt abgespielt werden: alle Samples aller Kanäle, die gleichzeitig abgespielt werden (zwei für einen Stereoklang, sechs für 5.1, etc.).

Die _Abtastrate_ ist die Anzahl dieser Samples (oder Frames, da alle Samples eines Frames zur gleichen Zeit abgespielt werden), die in einer Sekunde abgespielt werden, gemessen in Hz. Je höher die Abtastrate, desto besser die Klangqualität.

Schauen wir uns einen _Mono_- und einen _Stereo_-Audiopuffer an, jeweils eine Sekunde lang bei einer Rate von 44100Hz:

- Der _Mono_-Puffer wird 44.100 Samples und 44.100 Frames haben. Die `length`-Eigenschaft wird 44.100 sein.
- Der _Stereo_-Puffer wird 88.200 Samples aber immer noch 44.100 Frames haben. Die `length`-Eigenschaft wird immer noch 44.100 betragen, da sie der Anzahl der Frames entspricht.

![Ein Diagramm zeigt mehrere Frames in einem Audiopuffer in einer langen Reihe, jeder enthält zwei Samples, da der Puffer zwei Kanäle hat, es ist stereo.](sampleframe-english.png)

Wenn ein Puffer abgespielt wird, hören Sie zuerst das linkeste Sample-Frame, dann das direkt daneben, dann das nächste, _und so weiter_, bis zum Ende des Puffers. Im Fall von Stereo werden Sie beide Kanäle gleichzeitig hören. Sample-Frames sind nützlich, da sie unabhängig von der Anzahl der Kanäle sind und die Zeit in einer idealen Weise für eine präzise Audiobearbeitung darstellen.

> [!NOTE]
> Um eine Zeit in Sekunden aus einer Frame-Anzahl zu erhalten, teilen Sie die Anzahl der Frames durch die Abtastrate. Um die Anzahl der Frames aus der Anzahl der Samples zu erhalten, müssen Sie nur den letzteren Wert durch die Kanalanzahl teilen.

Hier sind ein paar einfache Beispiele:

```js
const context = new AudioContext();
const buffer = new AudioBuffer(context, {
  numberOfChannels: 2,
  length: 22050,
  sampleRate: 44100,
});
```

> [!NOTE]
> Bei [digitalem Audio](https://en.wikipedia.org/wiki/Digital_audio) ist **44.100 [Hz](https://en.wikipedia.org/wiki/Hertz)** (alternativ als **44.1 kHz** dargestellt) eine übliche [Abtastfrequenz](https://en.wikipedia.org/wiki/Sampling_frequency). Warum 44.1 kHz?
>
> Erstens, weil der [Hörbereich](https://en.wikipedia.org/wiki/Hearing_range) des menschlichen Ohrs etwa 20 Hz bis 20.000 Hz beträgt. Laut dem [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem) muss die Abtastfrequenz mehr als das Doppelte der maximalen Frequenz sein, die man reproduzieren möchte. Daher muss die Abtastrate _größer_ als 40.000 Hz sein.
>
> Zweitens müssen Signale [Tiefpass-gefiltert](https://en.wikipedia.org/wiki/Low-pass_filter) werden, bevor sie abgetastet werden, andernfalls tritt [Aliasing](https://en.wikipedia.org/wiki/Aliasing) auf. Während ein idealer Tiefpassfilter Frequenzen unter 20 kHz perfekt passieren lassen würde (ohne sie abzuschwächen) und Frequenzen über 20 kHz perfekt abschneiden würde, ist in der Praxis ein [Übergangsband](https://en.wikipedia.org/wiki/Transition_band) erforderlich, in dem Frequenzen teilweise abgeschwächt werden. Je breiter dieses Übergangsband ist, desto einfacher und wirtschaftlicher ist es, einen [Anti-Aliasing-Filter](https://en.wikipedia.org/wiki/Anti-aliasing_filter) herzustellen. Die 44.1 kHz Abtastfrequenz ermöglicht ein 2.05 kHz Übergangsband.

Wenn Sie diesen Anruf oben verwenden, erhalten Sie einen Stereo-Puffer mit zwei Kanälen, der beim Abspielen auf einem [`AudioContext`](/de/docs/Web/API/AudioContext) mit 44100 Hz (sehr üblich, die meisten normalen Soundkarten laufen mit dieser Rate) für 0.5 Sekunden dauert: 22.050 Frames/44.100 Hz = 0.5 Sekunden.

```js
const context = new AudioContext();
const buffer = new AudioBuffer(context, {
  numberOfChannels: 1,
  length: 22050,
  sampleRate: 22050,
});
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Mono-Puffer (Einkanal-Puffer), der beim Abspielen auf einem [`AudioContext`](/de/docs/Web/API/AudioContext) mit 44.100 Hz automatisch auf 44.100 Hz _resampled_ wird (und somit 44.100 Frames liefert) und 1.0 Sekunde dauert: 44.100 Frames/44.100 Hz = 1 Sekunde.

> [!NOTE]
> Die Audio-Resampling ähnelt sehr dem Bildgrößenänderung. Angenommen, Sie haben ein 16 x 16 Bild, möchten es aber an eine 32 x 32 Fläche anpassen. Sie ändern die Größe (oder resamplen) es. Das Ergebnis hat eine geringere Qualität (es kann verschwommen oder kantig sein, abhängig vom Algorithmus der Größenänderung), aber es funktioniert, wobei das verkleinerte Bild weniger Platz einnimmt. Resampelte Audio ist dasselbe: Sie sparen Platz, können jedoch in der Praxis keine hochfrequenten Inhalte oder hohe Töne korrekt wiedergeben.

### Planar versus Interleaved Buffers

Die Web Audio API verwendet ein Planar-Pufferformat. Die linken und rechten Kanäle werden so gespeichert:

```plain
LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR (for a buffer of 16 frames)
```

Diese Struktur ist in der Audiobearbeitung weit verbreitet, was es einfach macht, jeden Kanal unabhängig zu verarbeiten.

Die Alternative besteht darin, ein Interleaved-Pufferformat zu verwenden:

```plain
LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR (for a buffer of 16 frames)
```

Dieses Format ist weit verbreitet zur Speicherung und Wiedergabe von Audio ohne viel Verarbeitung, zum Beispiel: .WAV-Dateien oder ein dekodierter MP3-Stream.

Da die Web Audio API für die Verarbeitung entwickelt wurde, bietet sie _nur_ Planar-Puffer. Sie verwendet das Planar-Format, konvertiert das Audio jedoch in das Interleaved-Format, wenn es zur Wiedergabe an die Soundkarte gesendet wird. Umgekehrt beginnt die API mit dem Interleaved-Format und konvertiert es in das Planar-Format zur Verarbeitung, wenn sie eine MP3-Datei dekodiert.

## Audiokanäle

Jeder Audiopuffer kann eine unterschiedliche Anzahl von Kanälen enthalten. Die meisten modernen Audiogeräte verwenden die grundlegenden _Mono_- (nur ein Kanal) und _Stereo_- (linke und rechte Kanäle) Einstellungen. Einige komplexere Sets unterstützen _Surround Sound_-Einstellungen (wie _quad_ und _5.1_), die durch ihre hohe Kanalanzahl ein reichhaltigeres Klangerlebnis bieten können. Wir repräsentieren die Kanäle üblicherweise mit den in der folgenden Tabelle aufgeführten Standardabkürzungen:

| Name     | Kanäle                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------- |
| _Mono_   | `0: M: mono`                                                                                       |
| _Stereo_ | `0: L: left 1: R: right`                                                                           |
| _Quad_   | `0: L: left 1: R: right 2: SL: surround left 3: SR: surround right`                                |
| _5.1_    | `0: L: left 1: R: right 2: C: center 3: LFE: subwoofer 4: SL: surround left 5: SR: surround right` |

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
        wird für beide Ausgangskanäle verwendet (<code>L</code> und
        <code>R</code>).<br /><code
          >output.L = input.M<br />output.R = input.M</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Mono zu Quad.</em><br />Der <code>M</code>-Eingangskanal
        wird für die nicht-surround Ausgangskanäle verwendet (<code>L</code> und
        <code>R</code>). Surround-Ausgangskanäle (<code>SL</code> und
        <code>SR</code>) sind still.<br /><code
          >output.L = input.M<br />output.R = input.M<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Mono auf 5.1.</em><br />Der <code>M</code>-Eingangskanal
        wird für den Center-Ausgangskanal (<code>C</code>) verwendet. Alle anderen
        (<code>L</code>, <code>R</code>, <code>LFE</code>, <code>SL</code> und
        <code>SR</code>) sind still.<br /><code
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
        <em>Down-Mix von Stereo zu Mono</em>.<br />Beide Eingangskanäle (<code
          >L</code
        >
        und <code>R</code>) werden gleichmäßig kombiniert, um den einzigartigen
        Ausgangskanal (<code>M</code>) zu erzeugen.<br /><code
          >output.M = 0.5 * (input.L + input.R)</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Stereo zu Quad.</em><br />Die <code>L</code> und
        <code>R</code>-Eingangskanäle werden für ihre nicht-surround entsprechenden
        Ausgangskanäle verwendet (<code>L</code> und <code>R</code>). Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>)
        sind still.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Stereo auf 5.1.</em><br />Die <code>L</code> und
        <code>R</code>-Eingangskanäle werden für ihre nicht-surround entsprechenden
        Ausgangskanäle verwendet (<code>L</code> und <code>R</code>). Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>) sowie die
        Center (<code>C</code>) und Subwoofer (<code>LFE</code>)-Kanäle bleiben
        still.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.C = 0<br />output.LFE
          = 0<br />output.SL = 0<br />output.SR = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Down-Mix von Quad auf Mono</em>.<br />Alle vier Eingangskanäle
        (<code>L</code>, <code>R</code>, <code>SL</code> und <code>SR</code>)
        werden gleichmäßig kombiniert, um den einzigartigen Ausgangskanal
        (<code>M</code>) zu erzeugen.<br />
        <code>output.M = 0.25 * (input.L + input.R + input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von Quad auf Stereo</em>.<br />Beide linken Eingangskanäle
        (<code>L</code> und <code>SL</code>) werden kombiniert, um den einzigen
        linken Ausgangskanal (<code>L</code>) zu erzeugen. Ähnlich werden die
        beiden rechten Eingangskanäle (<code>R</code> und <code>SR</code>)
        kombiniert, um den einzigen rechten Ausgangskanal (<code>R</code>) zu
        erzeugen.<br />
        <code>output.L = 0.5 * (input.L + input.SL)</code><br />
        <code>output.R = 0.5 * (input.R + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Quad auf 5.1.</em><br />Die <code>L</code>,
        <code>R</code>, <code>SL</code> und <code>SR</code>-Eingangskanäle werden
        für ihre entsprechenden Ausgangskanäle verwendet (<code>L</code> und
        <code>R</code>). Center (<code>C</code>) und Subwoofer
        (<code>LFE</code>)-Kanäle bleiben still.<br />
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
        <em>Down-Mix von 5.1 auf Mono.</em><br />Die linken (<code>L</code> und
        <code>SL</code>), rechten (<code>R</code> und <code>SR</code>) und zentralen
        Kanäle werden alle zusammen gemischt. Die Surround-Kanäle werden leicht abgeschwächt, und die regulären lateralen Kanäle werden leistungsmäßig kompensiert, um als einzelner Kanal zu zählen, indem sie mit <code>√2/2</code> multipliziert werden. Der Subwoofer (<code>LFE</code>)-Kanal geht verloren.<br />
        <code>output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von 5.1 auf Stereo.</em><br />Der zentrale Kanal
        (<code>C</code>) wird mit jedem seitlichen Surround-Kanal (<code
          >SL</code
        >
        oder <code>SR</code>) summiert und mit jedem seitlichen Kanal gemischt.
        Da es auf zwei Kanäle heruntergemischt wird, wird es mit niedrigerer
        Leistung gemischt: in jedem Fall wird es mit <code>√2/2</code>
        multipliziert. Der Subwoofer (<code>LFE</code>)-Kanal geht verloren.<br />
        <code>output.L = input.L + 0.7071 * (input.C + input.SL)</code><br />
        <code>output.R = input.R + 0.7071 * (input.C + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Down-Mix von 5.1 auf Quad.</em><br />Der zentrale (<code>C</code>)
        wird mit den lateralen nicht-surround Kanälen (<code>L</code> und
        <code>R</code>) gemischt. Da es auf zwei Kanäle heruntergemischt wird,
        wird es mit niedrigerer Leistung gemischt: in jedem Fall wird es mit
        <code>√2/2</code> multipliziert. Die Surround-Kanäle werden unverändert
        übergeben. Der Subwoofer (<code>LFE</code>)-Kanal geht verloren.<br />
        <code>output.L = input.L + 0.7071 * input.C</code><br />
        <code>output.R = input.R + 0.7071 * input.C</code><br />
        <code>output.SL = input.SL</code><br />
        <code>output.SR = input.SR</code>
      </td>
    </tr>
    <tr>
      <td colspan="2">Andere, nicht-standardmäßige Layouts</td>
      <td>
        Nicht-standardmäßige Kanallayouts verhalten sich so, als ob
        <code>channelInterpretation</code> auf
        <code>discrete</code> gesetzt ist.<br />Die Spezifikation erlaubt ausdrücklich die zukünftige Definition neuer Lautsprecherlayouts. Daher ist dieses Fallback nicht zukunftssicher, da sich das Verhalten der Browser für eine bestimmte Anzahl von Kanälen in Zukunft ändern kann.
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="row"><code>discrete</code></th>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>) wobei <code>x&#x3C;y</code></td>
      <td>
        <em>Up-Mix diskrete Kanäle.</em><br />Füllen Sie jeden Ausgangskanal mit
        seinem Eingabeggenstück &mdash; das ist der Eingabegenstückskanal mit dem gleichen Indes.
        Kanäle ohne entsprechendes Eingabegenstück bleiben still.
      </td>
    </tr>
    <tr>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>) wobei <code>x>y</code></td>
      <td>
        <em>Down-Mix diskrete Kanäle.</em><br />Füllen Sie jede Ausgangskanal mit
        seinem Eingabeggenstück &mdash; das ist der Eingabegenstückskanal mit dem gleichen-Indes.
        Eingabekanäle ohne entsprechendes Ausgangskanal werden gelöscht.
      </td>
    </tr>
  </tbody>
</table>

## Visualisierungen

Im Allgemeinen erhalten wir den Ausgang über die Zeit, um Audiovisualisierungen zu erzeugen, indem wir normalerweise seine Verstärkung oder Frequenzdaten lesen. Dann verwenden wir ein grafisches Werkzeug, um die erhaltenen Daten in eine visuelle Darstellung umzuwandeln, wie ein Diagramm. Die Web Audio API stellt einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) zur Verfügung, der das Audiosignal, das durch ihn geht, nicht verändert. Darüber hinaus gibt es die Audiodaten aus, wodurch wir sie über eine Technologie wie {{htmlelement("canvas")}} verarbeiten können.

![Ohne den Audiostream zu ändern, ermöglicht es der Node, die Frequenz- und Zeitbereichsdaten, die damit verbunden sind, mithilfe einer FFT zu erhalten.](fttaudiodata_en.svg)

Sie können die Daten mit den folgenden Methoden erfassen:

- [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein {{jsxref("Float32Array")}} Array, das ihm übergeben wird.
- [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein {{jsxref("Uint8Array")}} (unsigniertes Byte-Array) übergeben ihm.
- [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData)
  - : Kopiert die aktuelle Wellenform- oder Zeitbereichsdaten in ein {{jsxref("Float32Array")}} Array, das ihm übergeben wird.
- [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData)
  - : Kopiert die aktuelle Wellenform- oder Zeitbereichsdaten in ein {{jsxref("Uint8Array")}} (unsigniertes Byte-Array) übergeben ihm.

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API).

## Spatialisationen

Audiolokalisierung ermöglicht es uns, die Position und das Verhalten eines Audiosignals an einem bestimmten Punkt im physischen Raum zu modellieren und zu simulieren, wie der Hörer dieses Audio hört. In der Web Audio API wird die Lokalisation durch den [`PannerNode`](/de/docs/Web/API/PannerNode) und den [`AudioListener`](/de/docs/Web/API/AudioListener) gehandhabt.

Der Panner verwendet rechtshändige kartesische Koordinaten, um die _Position_ der Audioquelle als Vektor und ihre _Ausrichtung_ als 3D-Richtungskegel zu beschreiben. Der Kegel kann ziemlich groß sein, zum Beispiel für omnidirektionale Quellen.

![Der PannerNode definiert eine räumliche Position und Orientierung für ein bestimmtes Signal.](pannernode_en.svg)

Ähnlich beschreibt die Web Audio API den Zuhörer mit rechtshändigen kartesischen Koordinaten: seine _Position_ als einen Vektor und seine _Ausrichtung_ als zwei Richtungsvektoren, _up_ und _front_. Diese Vektoren bestimmen die Richtung der Oberseite des Kopfes des Hörers und die Richtung, in die die Nase des Hörers zeigt. Die Vektoren stehen senkrecht zueinander.

![Wir sehen die Position, die Up- und Frontvektoren eines AudioListener, wobei die Up- und Frontvektoren 90° zueinander stehen.](webaudiolistenerreduced.png)

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Grundlagen der Web Audiolokalisation](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics).

## Fan-in und Fan-out

In Audiobegriffen beschreibt **Fan-in** den Prozess, bei dem ein [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) eine Reihe von _Mono_-Eingangsquellen nimmt und ein einziges Mehrkanalsignal ausgibt:

![Fan-in-Prozess-Diagramm. Mehrere pfeilmittellose Pfeile, die Mono-Eingangsquellen darstellen, kombinieren sich, um einen einzigen spitzenden Pfeil darzustellen, der ein einziges Mehrkanalsignal darstellt](fanin.svg)

**Fan-out** beschreibt den entgegengesetzten Prozess, bei dem ein [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) eine Mehrkanalseingangsquelle nimmt und mehrere _Mono_-Ausgangssignale ausgibt:

![Fan-out-Prozess-Diagramm. Ein einziger pfeilmittelloser Pfeil, der eine Mehrkanalseingangsquelle darstellt, teilt sich auf, um mehrere spitzende Pfeile darzustellen, die mehrere Mono-Ausgangssignale darstellen](fanout.svg)

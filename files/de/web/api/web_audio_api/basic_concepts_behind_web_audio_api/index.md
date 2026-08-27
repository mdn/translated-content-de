---
title: Grundkonzepte hinter der Web Audio API
slug: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt einige der Audiotheorien, welche die Funktionsweise der Web Audio API-Features betreffen, um Ihnen zu helfen, informierte Entscheidungen bei der Gestaltung der Audioverwaltung in Ihrer App zu treffen. Wenn Sie kein Tontechniker sind, bietet dieser Artikel genügend Hintergrundinformationen, um zu verstehen, warum die Web Audio API so funktioniert, wie sie es tut.

## Audiographen

Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) umfasst das Verwalten von Audiovorgängen innerhalb eines [Audio-Kontextes](/de/docs/Web/API/AudioContext), und ist so konzipiert, dass sie _modular routing_ ermöglicht. Jedes [Audio-Knoten](/de/docs/Web/API/AudioNode) führt eine grundlegende Audiooperation aus und ist mit einem oder mehreren anderen Audio-Knoten verbunden, um einen [Audio-Routing-Graphen](/de/docs/Web/API/AudioNode#the_audio_routing_graph) zu bilden. Mehrere Quellen mit unterschiedlichen Kanal-Layouts werden unterstützt, sogar innerhalb eines einzelnen Kontextes. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audio-Knoten werden über ihre Eingänge und Ausgänge verbunden und bilden eine Kette, die mit einer oder mehreren Quellen beginnt, über einen oder mehrere Knoten verläuft und dann an einem Ziel endet (obwohl Sie kein Ziel bereitstellen müssen, wenn Sie nur einige Audiodaten visualisieren möchten). Ein einfacher, typischer Arbeitsablauf für Web-Audio könnte folgendermaßen aussehen:

1. Erstellen Sie den Audio-Kontext.
2. Erstellen Sie Audioquellen innerhalb des Kontextes (wie {{HTMLElement("audio")}}, einen Oszillator oder einen Stream).
3. Erstellen Sie Audiodaten-Effekte (wie den Reverb, Biquadratsfilter, Panner oder Kompressor-Knoten).
4. Wählen Sie das endgültige Ziel für das Audio (wie die Lautsprecher des Benutzer-PCs).
5. Verbinden Sie die Quell-Knoten mit null oder mehr Effekt-Knoten und dann mit dem gewählten Ziel.

> [!NOTE]
> Die [Kanalsymbolik](https://en.wikipedia.org/wiki/Surround_sound#Channel_notation) ist ein numerischer Wert, zum Beispiel _2.0_ oder _5.1_, der die Anzahl der Audiokanäle eines Signals darstellt. Die erste Zahl gibt die Anzahl der Audiokanäle im vollen Frequenzbereich an, die das Signal enthält. Die Zahl nach dem Punkt zeigt die Anzahl der Kanäle, die für Tieffrequenzeffekt (LFE)-Ausgaben reserviert sind; diese werden oft **Subwoofer** genannt.

![Ein einfaches Boxdiagramm mit einer äußeren Box, die als Audiokontext bezeichnet wird, und drei inneren Boxen, die als Quellen, Effekte und Ziel bezeichnet werden. Die drei inneren Boxen haben Pfeile dazwischen, die von links nach rechts zeigen, was den Fluss von Audioinformationen anzeigt.](webaudioapi_en.svg)

Jeder Ein- oder Ausgang besteht aus einem oder mehreren Audio-**Kanälen**, die zusammen ein spezifisches Audio-Layout darstellen. Jede diskrete Kanalstruktur wird unterstützt, einschließlich _Mono_, _Stereo_, _Quad_, _5.1_ und so weiter.

![Zeigen Sie die Fähigkeit von Audio-Knoten, sich über ihre Eingänge und Ausgänge zu verbinden und die Kanäle innerhalb dieser Eingänge/Ausgänge.](mdn.png)

Sie haben mehrere Möglichkeiten, Audio zu erhalten:

- Ton kann direkt in JavaScript von einem Audio-Knoten (wie einem Oszillator) generiert werden.
- Er kann aus rohen [PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)-Daten erstellt werden (wie .WAV-Dateien oder andere Formate, die von [`decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) unterstützt werden).
- Er kann aus HTML-Media-Elementen generiert werden, wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}}.
- Er kann aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) stammen, wie z.B. einer Webcam oder einem Mikrofon.

## Audiodaten: was in einem Sample steckt

Wenn ein Audiosignal verarbeitet wird, erfolgt die Abtastung. **Abtastung** ist die Umwandlung eines [kontinuierlichen Signals](https://en.wikipedia.org/wiki/Continuous_signal) in ein [diskretes Signal](https://en.wikipedia.org/wiki/Discrete_signal). Anders ausgedrückt, eine kontinuierliche Schallwelle, wie ein Live-Auftritt einer Band, wird in eine Folge digitaler Samples (ein diskretes Zeitsignal) umgewandelt, das es einem Computer ermöglicht, das Audio in diskreten Blöcken zu verarbeiten.

Mehr Informationen finden Sie auf der Wikipedia-Seite [_Sampling (Signalverarbeitung)_](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29).

## Audiodaten-Puffer: Frames, Samples und Kanäle

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) ist mit drei Parametern definiert:

- der Anzahl der Kanäle (1 für Mono, 2 für Stereo usw.),
- seiner Länge, d.h. die Anzahl der Sample-Frames im Puffer,
- und der Abtastrate, der Anzahl von Sample-Frames, die pro Sekunde abgespielt werden.

Ein _Sample_ ist ein einzelner 32-Bit-Float-Wert, der den Wert des Audiostreams zu einem bestimmten Zeitpunkt innerhalb eines bestimmten Kanals (links oder rechts, falls stereo) repräsentiert. Ein _Frame_ oder _Sample-Frame_ ist die Menge aller Werte für alle Kanäle, die zu einem bestimmten Zeitpunkt abgespielt werden: alle Samples aller Kanäle, die gleichzeitig abspielen (zwei für ein Stereo-Sound, sechs für 5.1 usw.).

Die _Abtastrate_ ist die Anzahl dieser Samples (oder Frames, da alle Samples eines Frames gleichzeitig abgespielt werden), die in einer Sekunde abgespielt werden, gemessen in Hz. Je höher die Abtastrate, desto besser die Klangqualität.

Schauen wir uns einen _Mono_- und einen _Stereo_-Audiopuffer an, jeweils eine Sekunde lang bei einer Rate von 44100Hz:

- Der _Mono_-Puffer wird 44.100 Samples und 44.100 Frames haben. Die `length`-Eigenschaft wird 44.100 sein.
- Der _Stereo_-Puffer wird 88.200 Samples, aber immer noch 44.100 Frames haben. Die `length`-Eigenschaft wird noch 44100 sein, da sie der Anzahl der Frames entspricht.

![Ein Diagramm, das mehrere Frames in einem Audiopuffer in einer langen Linie zeigt, wobei jeder Frame zwei Samples enthält, da der Puffer zwei Kanäle hat und es also stereo ist.](sampleframe-english.png)

Wenn ein Puffer abgespielt wird, hören Sie zuerst das linkeste Sample-Frame, dann das direkt daneben, dann das nächste, _und so weiter_, bis zum Ende des Puffers. Im Falle von Stereo hören Sie beide Kanäle gleichzeitig. Sample-Frames sind nützlich, weil sie unabhängig von der Anzahl der Kanäle sind und die Zeit auf ideale Weise für präzise Audiomanipulation darstellen.

> [!NOTE]
> Um aus einer Frame-Anzahl eine Zeit in Sekunden zu erhalten, teilen Sie die Anzahl der Frames durch die Abtastrate. Um die Anzahl der Frames aus der Anzahl der Samples zu erhalten, müssen Sie nur den letzteren Wert durch die Kanalanzahl teilen.

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
> In der [digitalen Audioverarbeitung](https://en.wikipedia.org/wiki/Digital_audio) ist **44.100 [Hz](https://en.wikipedia.org/wiki/Hertz)** (alternativ dargestellt als **44,1 kHz**) eine gebräuchliche [Abtastfrequenz](https://en.wikipedia.org/wiki/Sampling_frequency). Warum 44,1 kHz?
>
> Erstens, weil der [Hörbereich](https://en.wikipedia.org/wiki/Hearing_range) des menschlichen Ohrs grob 20 Hz bis 20.000 Hz beträgt. Nach dem [Nyquist-Shannon-Sampling-Theorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem) muss die Abtastfrequenz größer als das Doppelte der maximalen Frequenz sein, die man reproduzieren möchte. Daher muss die Abtastrate _größer_ als 40.000 Hz sein.
>
> Zweitens müssen Signale [Tiefpass-gefiltert](https://en.wikipedia.org/wiki/Low-pass_filter) werden, bevor sie abgetastet werden, ansonsten tritt [Aliasing](https://en.wikipedia.org/wiki/Aliasing) auf. Während ein idealer Tiefpassfilter perfekt Frequenzen unter 20 kHz durchlassen würde (ohne sie zu dämpfen) und Frequenzen über 20 kHz perfekt abschneiden würde, ist in der Praxis ein [Übergangsband](https://en.wikipedia.org/wiki/Transition_band) notwendig, in welchem Frequenzen teilweise gedämpft werden. Je breiter dieses Übergangsband ist, desto einfacher und kostengünstiger ist es, einen [Anti-Alias-Filter](https://en.wikipedia.org/wiki/Anti-aliasing_filter) herzustellen. Die Abtastfrequenz von 44,1 kHz ermöglicht ein 2,05 kHz Übergangsband.

Wenn Sie diesen Aufruf oben verwenden, erhalten Sie einen Stereo-Puffer mit zwei Kanälen, der bei einer Wiedergabe in einem [`AudioContext`](/de/docs/Web/API/AudioContext) bei 44100 Hz (sehr verbreitet, die meisten normalen Soundkarten laufen mit dieser Rate) 0,5 Sekunden dauert: 22.050 Frames/44.100 Hz = 0,5 Sekunden.

```js
const context = new AudioContext();
const buffer = new AudioBuffer(context, {
  numberOfChannels: 1,
  length: 22050,
  sampleRate: 22050,
});
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Mono-Puffer (einzelkanaliger Puffer), der bei einer Wiedergabe in einem [`AudioContext`](/de/docs/Web/API/AudioContext) bei 44.100 Hz automatisch auf 44.100 Hz _resampled_ wird (und daher 44.100 Frames erhält) und 1,0 Sekunde dauert: 44.100 Frames/44.100 Hz = 1 Sekunde.

> [!NOTE]
> Audio-Resampling ist sehr ähnlich zum Bild-Resizing. Angenommen, Sie haben ein 16 x 16 Bild, möchten es aber auf ein 32 x 32 Bereich füllen. Sie ändern (oder resampeln) die Größe. Das Ergebnis hat eine geringere Qualität (es kann verschwommen oder kantig sein, abhängig vom Resampling-Algorithmus), aber es funktioniert, wobei das geänderte Bild weniger Speicherplatz benötigt. Resampled-Audio ist dasselbe: Sie sparen Platz, aber in der Praxis können Sie keine hohen Frequenzinhalte oder Höhentöne korrekt reproduzieren.

### Planare vs. verwobene Puffer

Die Web Audio API verwendet ein Planar-Pufferformat. Die linken und rechten Kanäle werden so gespeichert:

```plain
LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR (for a buffer of 16 frames)
```

Diese Struktur ist weit verbreitet in der Audiobearbeitung, da sie das unabhängige Bearbeiten jedes Kanals erleichtert.

Die Alternative ist die Verwendung eines verwobenen Pufferformats:

```plain
LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR (for a buffer of 16 frames)
```

Dieses Format ist weit verbreitet zum Speichern und Abspielen von Audio ohne viel Bearbeitung, zum Beispiel: .WAV-Dateien oder ein dekodierter MP3-Stream.

Da die Web Audio API für die Verarbeitung konzipiert ist, stellt sie _nur_ Planar-Puffer zur Verfügung. Sie verwendet das Planar-Format, konvertiert das Audio aber in das verwobene Format, wenn es zur Wiedergabe an die Soundkarte gesendet wird. Umgekehrt beginnt die API beim Dekodieren eines MP3 mit dem verwobenen Format und konvertiert es zum Planar-Format zum Verarbeiten.

## Audiokanäle

Jeder Audiopuffer kann unterschiedliche Anzahlen an Kanälen enthalten. Die meisten modernen Audiogeräte verwenden die grundlegenden _Mono_ (nur ein Kanal) und _Stereo_ (linke und rechte Kanäle) Einstellungen. Einige komplexere Sets unterstützen _Surround-Sound_-Einstellungen (wie _Quad_ und _5.1_), die dank ihrer hohen Kanalanzahl zu einem reichhaltigeren Klangerlebnis führen können. Wir stellen die Kanäle normalerweise mit den in der unten stehenden Tabelle angegebenen Standardabkürzungen dar:

| Name     | Kanäle                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------ |
| _Mono_   | `0: M: Mono`                                                                                           |
| _Stereo_ | `0: L: links 1: R: rechts`                                                                             |
| _Quad_   | `0: L: links 1: R: rechts 2: SL: Surround links 3: SR: Surround rechts`                                |
| _5.1_    | `0: L: links 1: R: rechts 2: C: Center 3: LFE: Subwoofer 4: SL: Surround links 5: SR: Surround rechts` |

### Up-Mixing und Down-Mixing

Wenn die Anzahl der Kanäle des Eingangs und der Ausgang nicht übereinstimmen, muss ein Up-Mixing oder Down-Mixing durchgeführt werden. Die folgenden Regeln, gesteuert durch die Einstellung der [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation)-Eigenschaft auf `speakers` oder `discrete`, gelten:

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
        <em>Up-Mix von Mono zu Quad.</em><br />Der <code>M</code>-Eingangskanal wird für die nicht-Surround-Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet. Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>) sind stumm.<br /><code
          >output.L = input.M<br />output.R = input.M<br />output.SL = 0<br />output.SR = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Mono zu 5.1.</em><br />Der <code>M</code>-Eingangskanal wird für den Center-Ausgangskanal (<code>C</code>) verwendet. Alle anderen (<code>L</code>, <code>R</code>, <code>LFE</code>, <code>SL</code> und <code>SR</code>) sind stumm.<br /><code
          >output.L = 0<br />output.R = 0</code
        ><br /><code
          >output.C = input.M<br />output.LFE = 0<br />output.SL = 0<br />output.SR = 0</code
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
        und <code>R</code>) werden gleichmäßig kombiniert, um den einzigartigen Ausgangskanal (<code>M</code>) zu erzeugen.<br /><code
          >output.M = 0.5 * (input.L + input.R)</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Stereo zu Quad.</em><br />Die <code>L</code> und
        <code>R</code>-Eingangskanäle werden für ihre nicht-Surround entsprechenden
        Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet. Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>) sind stumm.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Stereo zu 5.1.</em><br />Die <code>L</code> und
        <code>R</code>-Eingangskanäle werden für ihre nicht-Surround entsprechenden Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet. Surround-Ausgangskanäle (<code>SL</code> und <code>SR</code>), ebenso wie der Center (<code>C</code>) und Subwoofer (<code>LFE</code>)-Kanäle, bleiben stumm.<br /><code
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
        <em>Down-Mix von Quad zu Stereo</em>.<br />Beide linken Eingangskanäle
        (<code>L</code> und <code>SL</code>) werden gleichmäßig kombiniert, um den
        einzigartigen linken Ausgangskanal (<code>L</code>) zu erzeugen. Ebenso werden beide rechten
        Eingangskanäle (<code>R</code> und <code>SR</code>) gleichmäßig kombiniert, um den einzigartigen rechten Ausgangskanal (<code>R</code>) zu erzeugen.<br />
        <code>output.L = 0.5 * (input.L + input.SL)</code><br />
        <code>output.R = 0.5 * (input.R + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Quad zu 5.1.</em><br />Die <code>L</code>,
        <code>R</code>, <code>SL</code> und <code>SR</code>-Eingangskanäle
        werden für ihre entsprechenden Ausgangskanäle (<code>L</code> und
        <code>R</code>) verwendet. Center (<code>C</code>) und Subwoofer
        (<code>LFE</code>)-Kanäle sind stumm.<br />
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
        <code>SL</code>), rechten (<code>R</code> und <code>SR</code>) und zentralen
        Kanäle werden alle zusammen gemischt. Die Surround-Kanäle werden leicht
        gedämpft, und die normalen seitlichen Kanäle werden leistungs-kompensiert, damit sie als Einzelkanal zählen, durch Multiplikation mit <code>√2/2</code>.
        Der Subwoofer (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von 5.1 zu Stereo.</em><br />Der zentrale Kanal
        (<code>C</code>) wird mit jedem seitlichen Surround-Kanal (<code
          >SL</code
        >
        oder <code>SR</code>) summiert und mit jedem seitlichen Kanal gemischt. Da er auf zwei Kanäle gemischt wird, wird er mit weniger Leistung gemischt: in jedem Fall wird er durch <code>√2/2</code> multipliziert. Der Subwoofer (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.L = input.L + 0.7071 * (input.C + input.SL)</code><br />
        <code>output.R = input.R + 0.7071 * (input.C + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Down-Mix von 5.1 zu Quad.</em><br />Der zentrale (<code>C</code>) wird
        mit den seitlichen nicht-Surround-Kanäle (<code>L</code> und
        <code>R</code>) gemischt. Da er auf zwei Kanäle gemischt wird, wird er mit
        weniger Leistung gemischt: in jedem Fall wird er durch <code>√2/2</code> multipliziert. Die Surround-Kanäle werden unverändert übernommen. Der Subwoofer (<code>LFE</code>) Kanal geht verloren.<br />
        <code>output.L = input.L + 0.7071 * input.C</code><br />
        <code>output.R = input.R + 0.7071 * input.C</code><br />
        <code>output.SL = input.SL</code><br />
        <code>output.SR = input.SR</code>
      </td>
    </tr>
    <tr>
      <td colspan="2">Andere, nicht standardisierte Layouts</td>
      <td>
        Nicht-standardisierte Kanallayouts verhalten sich, als ob
        <code>channelInterpretation</code> auf
        <code>discrete</code> gesetzt ist.<br />Die Spezifikation erlaubt ausdrücklich die zukünftige Definition neuer Lautsprecher-Layouts. Daher ist dieser Fallback nicht zukunftssicher, da das Verhalten der Browser für eine bestimmte Anzahl von Kanälen in Zukunft ändern kann.
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="row"><code>discrete</code></th>
      <td>jegliche (<code>x</code>)</td>
      <td>jegliche (<code>y</code>) wo <code>x&#x3C;y</code></td>
      <td>
        <em>Up-Mix diskreter Kanäle.</em><br />Füllen Sie jeden Ausgangskanal mit
        seinem entsprechenden Eingang &mdash; das heißt, dem Eingangs-kanal mit demselben Index.
        Kanäle ohne entsprechendes Eingangskanal werden stummgeschaltet.
      </td>
    </tr>
    <tr>
      <td>jegliche (<code>x</code>)</td>
      <td>jegliche (<code>y</code>) wo <code>x>y</code></td>
      <td>
        <em>Down-Mix diskreter Kanäle.</em><br />Füllen Sie jeden Ausgangskanal mit
        seinem entsprechenden Eingang &mdash; das heißt, dem Eingangs-kanal mit demselben Index.
        Eingabekanäle ohne entsprechendes Ausgangskanal werden verworfen.
      </td>
    </tr>
  </tbody>
</table>

## Visualisierungen

Im Allgemeinen erhalten wir den Ausgang über die Zeit, um Audio-Visualisierungen zu erzeugen, indem wir normalerweise seine Verstärkung oder Frequenzdaten lesen. Dann, mit einem grafischen Tool, wandeln wir die erhaltenen Daten in eine visuelle Darstellung um, z. B. in ein Diagramm. Die Web Audio API bietet einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), der das Audiosignal, das durch ihn hindurchfließt, nicht verändert. Zusätzlich gibt er die Audiodaten aus, welche uns ermöglicht, diese durch eine Technologie wie {{htmlelement("canvas")}} zu verarbeiten.

![Ohne den Audiostream zu ändern, ermöglicht Ihnen der Knoten, die Frequenz- und Zeitdomaindaten damit zu erhalten, unter Verwendung einer FFT.](fttaudiodata_en.svg)

Sie können Daten mit den folgenden Methoden abrufen:

- [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein {{jsxref("Float32Array")}}-Array, das an ihn übergeben wird.
- [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein {{jsxref("Uint8Array")}} (unsigned byte Array), das an ihn übergeben wird.
- [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData)
  - : Kopiert die aktuelle Wellenform- oder Zeitdomaindaten in ein {{jsxref("Float32Array")}}-Array, das an ihn übergeben wird.
- [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData)
  - : Kopiert die aktuelle Wellenform- oder Zeitdomaindaten in ein {{jsxref("Uint8Array")}} (unsigned byte Array), das an ihn übergeben wird.

> [!NOTE]
> Für weitere Informationen siehe unser Artikel [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API).

## Räumliche Klangverarbeitung

Die räumliche Klangverarbeitung ermöglicht es uns, die Position und das Verhalten eines Audiosignals an einem bestimmten Punkt im physischen Raum zu modellieren, um zu simulieren, wie der Hörer dieses Audio hört. In der Web Audio API wird die räumliche Klangverarbeitung durch den [`PannerNode`](/de/docs/Web/API/PannerNode) und den [`AudioListener`](/de/docs/Web/API/AudioListener) gehandhabt.

Der Panner verwendet rechtshändige kartesische Koordinaten, um die _Position_ der Audioquelle als Vektor und ihre _Orientierung_ als einen 3D-Richtungskegel zu beschreiben. Der Kegel kann recht groß sein, zum Beispiel für omnidirektionale Quellen.

![Der PannerNode definiert eine räumliche Position und Orientierung für ein gegebenes Signal.](pannernode_en.svg)

Ähnlich beschreibt die Web Audio API den Hörer mit rechtshändigen kartesischen Koordinaten: seine _Position_ als ein Vektor und seine _Orientierung_ als zwei Richtungsvektoren, _Oben_ und _Vorne_. Diese Vektoren definieren die Richtung des oberen Teils des Kopfes des Hörers und die Richtung, in die die Nase des Hörers zeigt. Die Vektoren sind zueinander senkrecht.

![Wir sehen die Position, die „oben“ und die „vorne“ Vektoren eines AudioListeners, wobei die „oben“ und „vorne“ Vektoren im 90°-Winkel zueinander stehen.](webaudiolistenerreduced.png)

> [!NOTE]
> Für weitere Informationen siehe unser Artikel [Web Audio Raumklangverarbeitung Grundlagen](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics).

## Fan-In und Fan-Out

In Audiobegriffen beschreibt **Fan-In** den Prozess, bei dem ein [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) eine Reihe von _Mono_-Eingangsquellen nimmt und ein einziges multisignaliges Signal ausgibt:

![Fan-In-Prozessdiagramm. Mehrere punktlose Pfeile, die Mono-Eingangsquellen darstellen, kombinieren sich, um einen einzelnen gepunkteten Pfeil auszugeben, der ein einzelnes multisignaliges Signal darstellt](fanin.svg)

**Fan-Out** beschreibt den entgegengesetzten Prozess, bei dem ein [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) eine multisignalige Eingangsquelle nimmt und mehrere _Mono_-Ausgangssignale ausgibt:

![Fan-Out-Prozessdiagramm. Ein einzelner punktloser Pfeil, der eine multisignalige Eingangsquelle darstellt, teilt sich auf, um mehrere gepunktete Pfeile auszugeben, die mehrere Mono-Ausgangssignale darstellen](fanout.svg)

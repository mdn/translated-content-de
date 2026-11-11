---
title: Grundlegende Konzepte der Web Audio API
slug: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
l10n:
  sourceCommit: 64d2a33125b048766fa69bba398e750e29ffa875
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erläutert einige Grundlagen der Audiotechnik, die erklären, wie die Funktionen der [Web Audio API](/de/docs/Web/API/Web_Audio_API) arbeiten. So können Sie fundierte Entscheidungen treffen, wenn Sie festlegen, wie Ihre App Audiosignale weiterleitet. Wenn Sie noch keine Erfahrung in der Tontechnik haben, erhalten Sie hier genügend Hintergrundwissen, um zu verstehen, warum die Web Audio API so funktioniert, wie sie funktioniert.

## Audiographen

Ein **Audiograph** (oder [Audio-Routing-Graph](/de/docs/Web/API/AudioNode#the_audio_routing_graph)) ist ein Netzwerk verbundener [Audio-Nodes](/de/docs/Web/API/AudioNode) innerhalb eines [`AudioContext`](/de/docs/Web/API/AudioContext). Die Web Audio API verwendet dieses Netzwerk, um Klang zu verarbeiten und zu erzeugen. Jeder Node erfüllt eine bestimmte Aufgabe. Mehrere Nodes werden miteinander verbunden, um einen Signalpfad von einer Quelle zu einem Ziel aufzubauen – in der Regel zu den Lautsprechern. Dieser modulare Aufbau ermöglicht komplexe Audiofunktionen mit dynamischen Effekten.

Mehrere Quellen mit unterschiedlichen Kanalanordnungen werden unterstützt, auch innerhalb eines einzigen Kontexts.

Audio-Nodes werden über ihre Ein- und Ausgänge verbunden. So entsteht eine Kette, die bei einer oder mehreren Quellen beginnt, durch einen oder mehrere Nodes führt und an einem Ziel endet. Wenn Sie Audiodaten lediglich visualisieren möchten, müssen Sie allerdings kein Ziel angeben. Ein einfacher, typischer Ablauf für Web Audio sieht etwa so aus:

1. Erstellen Sie den Audiokontext.
2. Erstellen Sie Audioquellen innerhalb des Kontexts, beispielsweise {{HTMLElement("audio")}}, einen Oszillator oder einen Stream.
3. Erstellen Sie Audioeffekte, beispielsweise Reverb-, Biquad-Filter-, Panner- oder Kompressor-Nodes.
4. Wählen Sie das endgültige Ziel für das Audiosignal, beispielsweise die Lautsprecher des Computers.
5. Verbinden Sie die Quell-Nodes mit keinem, einem oder mehreren Effekt-Nodes und anschließend mit dem gewählten Ziel.

> [!NOTE]
> Die [Kanalnotation](https://en.wikipedia.org/wiki/Surround_sound#Channel_notation) ist eine Zahlenangabe wie _2.0_ oder _5.1_, die die Anzahl der für ein Signal verfügbaren Audiokanäle angibt. Die erste Zahl bezeichnet die Anzahl der Kanäle mit vollem Frequenzbereich. Die Zahl nach dem Punkt gibt an, wie viele Kanäle für Ausgänge mit Tieffrequenzeffekten (LFE) vorgesehen sind; diese werden oft als **Subwoofer** bezeichnet.

![Ein einfaches Kastendiagramm mit einem äußeren Kasten namens Audio context und drei inneren Kästen namens Sources, Effects und Destination. Pfeile zwischen den inneren Kästen zeigen von links nach rechts und veranschaulichen den Fluss der Audioinformationen.](webaudioapi_en.svg)

Jeder Ein- oder Ausgang besteht aus einem oder mehreren Audio-**Kanälen**, die zusammen eine bestimmte Kanalanordnung bilden. Beliebige diskrete Kanalstrukturen werden unterstützt, darunter _Mono_, _Stereo_, _Quad_, _5.1_ und weitere.

![Die Abbildung zeigt, wie Audio-Nodes über ihre Ein- und Ausgänge sowie die darin enthaltenen Kanäle verbunden werden können.](mdn.png)

Sie haben mehrere Möglichkeiten, Audiosignale zu beziehen:

- Klang kann direkt in JavaScript von einem Audio-Node erzeugt werden, beispielsweise einem Oszillator.
- Er kann aus rohen [PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)-Daten erstellt werden, beispielsweise aus .WAV-Dateien oder anderen von [`decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) unterstützten Formaten.
- Er kann von HTML-Medienelementen wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}} stammen.
- Er kann aus einem [WebRTC](/de/docs/Web/API/WebRTC_API)-[`MediaStream`](/de/docs/Web/API/MediaStream) stammen, beispielsweise von einer Webcam oder einem Mikrofon.

## Audiodaten: Was steckt in einem Sample?

Bei der Verarbeitung eines Audiosignals findet eine Abtastung statt. **Abtastung** bezeichnet die Umwandlung eines [kontinuierlichen Signals](https://en.wikipedia.org/wiki/Continuous_signal) in ein [diskretes Signal](https://en.wikipedia.org/wiki/Discrete_signal). Anders ausgedrückt: Eine kontinuierliche Schallwelle, etwa die Musik einer live spielenden Band, wird in eine Folge digitaler Samples (ein zeitdiskretes Signal) umgewandelt. Dadurch kann ein Computer das Audiosignal in einzelnen Blöcken verarbeiten.

Weitere Informationen finden Sie auf der Wikipedia-Seite [_Sampling (signal processing)_](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29).

## Audiopuffer: Frames, Samples und Kanäle

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) wird durch drei Parameter definiert:

- die Anzahl der Kanäle (1 für Mono, 2 für Stereo, sechs für 5.1 usw.),
- seine Länge, also die Anzahl der Sample-Frames im Puffer,
- und die Abtastrate, also die Anzahl der pro Sekunde abgespielten Sample-Frames.

Einige wichtige Begriffe:

- Ein _Sample_ ist ein einzelner 32-Bit-Gleitkommawert, der den Wert des Audiosignals zu einem bestimmten Zeitpunkt in einem bestimmten Kanal darstellt (bei Stereo im linken oder rechten Kanal).
- Ein _Frame_ oder _Sample-Frame_ ist die Gesamtheit der Werte aller Kanäle, die zu einem bestimmten Zeitpunkt abgespielt werden (einer bei Mono, zwei bei Stereo usw.).
- Die _Abtastrate_ gibt an, wie viele dieser Samples (oder Frames, da alle Samples eines Frames gleichzeitig abgespielt werden) pro Sekunde abgespielt werden. Sie wird in Hz gemessen. Je höher die Abtastrate, desto besser die Klangqualität.

Betrachten wir je einen _Mono_- und einen _Stereo_-Audiopuffer mit einer Dauer von einer Sekunde bei 44100 Hz:

- Der _Mono_-Puffer enthält 44.100 Samples und 44.100 Frames. Die Eigenschaft `length` hat den Wert 44.100.
- Der _Stereo_-Puffer enthält 88.200 Samples, aber weiterhin 44.100 Frames. Die Eigenschaft `length` hat weiterhin den Wert 44100, da sie der Anzahl der Frames entspricht.

![Ein Diagramm zeigt mehrere Frames eines Audiopuffers in einer langen Reihe. Jeder Frame enthält zwei Samples, da der Puffer zwei Kanäle hat und somit Stereo ist.](sampleframe-english.png)

Beim Abspielen eines Puffers hören Sie zuerst den Frame ganz links, dann den unmittelbar daneben, dann den nächsten _und so weiter_ bis zum Ende des Puffers. Bei Stereo hören Sie beide Kanäle gleichzeitig. Sample-Frames sind nützlich, weil sie unabhängig von der Anzahl der Kanäle sind und die Zeit für eine präzise Audiobearbeitung auf ideale Weise abbilden.

> [!NOTE]
> Um aus einer Anzahl von Frames eine Zeit in Sekunden zu berechnen, teilen Sie die Anzahl der Frames durch die Abtastrate. Um aus der Anzahl der Samples die Anzahl der Frames zu berechnen, teilen Sie die Anzahl der Samples durch die Anzahl der Kanäle.

Hier sind zwei einfache Beispiele:

```js
const buffer = new AudioBuffer({
  numberOfChannels: 2,
  length: 22050,
  sampleRate: 44100,
});
```

> [!NOTE]
> Bei [digitalem Audio](https://en.wikipedia.org/wiki/Digital_audio) sind **44.100 [Hz](https://en.wikipedia.org/wiki/Hertz)** (auch als **44,1 kHz** angegeben) eine gängige [Abtastfrequenz](https://en.wikipedia.org/wiki/Sampling_frequency). Warum 44,1 kHz?
>
> Erstens liegt der [Hörbereich](https://en.wikipedia.org/wiki/Hearing_range) des Menschen ungefähr zwischen 20 Hz und 20.000 Hz. Nach dem [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem) muss die Abtastfrequenz mehr als doppelt so hoch sein wie die höchste Frequenz, die wiedergegeben werden soll. Die Abtastrate muss daher _höher_ als 40.000 Hz sein.
>
> Zweitens müssen Signale vor dem Abtasten mit einem [Tiefpassfilter](https://en.wikipedia.org/wiki/Low-pass_filter) gefiltert werden, da sonst [Aliasing](https://en.wikipedia.org/wiki/Aliasing) auftritt. Ein idealer Tiefpassfilter würde Frequenzen unter 20 kHz ohne Dämpfung vollständig durchlassen und Frequenzen über 20 kHz vollständig unterdrücken. In der Praxis ist jedoch ein [Übergangsbereich](https://en.wikipedia.org/wiki/Transition_band) erforderlich, in dem Frequenzen teilweise gedämpft werden. Je breiter dieser Übergangsbereich ist, desto einfacher und kostengünstiger lässt sich ein [Anti-Aliasing-Filter](https://en.wikipedia.org/wiki/Anti-aliasing_filter) herstellen. Die Abtastfrequenz von 44,1 kHz ermöglicht einen Übergangsbereich von 2,05 kHz.

Mit dem obigen Aufruf erhalten Sie einen Stereo-Puffer mit zwei Kanälen. Wird er über einen [`AudioContext`](/de/docs/Web/API/AudioContext) mit 44100 Hz abgespielt (ein sehr gängiger Wert, den die meisten gewöhnlichen Soundkarten verwenden), dauert die Wiedergabe 0,5 Sekunden: 22.050 Frames / 44.100 Hz = 0,5 Sekunden.

```js
const buffer = new AudioBuffer({
  numberOfChannels: 1,
  length: 22050,
  sampleRate: 22050,
});
```

Mit diesem Aufruf erhalten Sie einen Mono-Puffer (einen Puffer mit einem Kanal). Wird er über einen [`AudioContext`](/de/docs/Web/API/AudioContext) mit 44.100 Hz abgespielt, wird er automatisch auf 44.100 Hz _neu abgetastet_ (und enthält dadurch 44.100 Frames). Die Wiedergabe dauert 1,0 Sekunden: 44.100 Frames / 44.100 Hz = 1 Sekunde.

> [!NOTE]
> Die erneute Abtastung von Audiodaten ähnelt stark der Größenänderung eines Bildes. Angenommen, Sie haben ein Bild mit 16 × 16 Pixeln, möchten damit aber eine Fläche von 32 × 32 Pixeln füllen. Dazu ändern Sie seine Größe (oder tasten es neu ab). Das Ergebnis hat eine geringere Qualität: Je nach Verfahren kann es unscharf wirken oder sichtbare Kanten aufweisen. Es funktioniert aber, und das skalierte Bild benötigt weniger Speicherplatz. Bei neu abgetasteten Audiodaten ist es ähnlich: Sie sparen Speicherplatz, können in der Praxis aber hohe Frequenzen oder Höhen nicht originalgetreu wiedergeben.

### Planare und verschachtelte Puffer

Die Web Audio API verwendet ein planares Pufferformat. Der linke und der rechte Kanal werden folgendermaßen gespeichert:

```plain
LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR (for a buffer of 16 frames)
```

Diese Struktur ist in der Audioverarbeitung weit verbreitet und erleichtert die unabhängige Verarbeitung jedes Kanals.

Eine Alternative ist ein verschachteltes Pufferformat:

```plain
LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR (for a buffer of 16 frames)
```

Dieses Format wird häufig verwendet, um Audiodaten ohne aufwendige Verarbeitung zu speichern und abzuspielen, beispielsweise bei .WAV-Dateien oder einem dekodierten MP3-Stream.

Da die Web Audio API für die Verarbeitung konzipiert ist, stellt sie _ausschließlich_ planare Puffer bereit. Sie verwendet das planare Format, wandelt die Audiodaten aber in das verschachtelte Format um, wenn sie sie zur Wiedergabe an die Soundkarte sendet. Umgekehrt beginnt die API beim Dekodieren einer MP3-Datei mit dem verschachtelten Format und wandelt es zur Verarbeitung in das planare Format um.

## Audiokanäle

Audiopuffer können unterschiedlich viele Kanäle enthalten. Die meisten modernen Audiogeräte verwenden die grundlegenden Einstellungen _Mono_ (nur ein Kanal) und _Stereo_ (linker und rechter Kanal). Einige komplexere Systeme unterstützen _Surround-Sound_-Anordnungen wie _Quad_ und _5.1_. Dank der größeren Anzahl an Kanälen können sie ein räumlicheres Klangerlebnis bieten. Für die Kanäle verwenden wir üblicherweise die Standardabkürzungen aus der folgenden Tabelle:

| Name     | Kanäle                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------- |
| _Mono_   | `0: M: mono`                                                                                       |
| _Stereo_ | `0: L: left 1: R: right`                                                                           |
| _Quad_   | `0: L: left 1: R: right 2: SL: surround left 3: SR: surround right`                                |
| _5.1_    | `0: L: left 1: R: right 2: C: center 3: LFE: subwoofer 4: SL: surround left 5: SR: surround right` |

### Up-Mixing und Down-Mixing

Wenn die Anzahl der Eingangs- und Ausgangskanäle nicht übereinstimmt, ist Up-Mixing oder Down-Mixing erforderlich. Die folgenden Regeln gelten abhängig davon, ob die Eigenschaft [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation) auf `speakers` oder `discrete` gesetzt ist:

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
        <em>Up-Mix von Mono auf Stereo</em>.<br />Der Eingangskanal <code>M</code>
        wird für beide Ausgangskanäle (<code>L</code> und
        <code>R</code>) verwendet.<br /><code
          >output.L = input.M<br />output.R = input.M</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Mono auf Quad.</em><br />Der Eingangskanal <code>M</code>
        wird für die vorderen Ausgangskanäle (<code>L</code> und
        <code>R</code>) verwendet. Die Surround-Ausgangskanäle (<code>SL</code> und
        <code>SR</code>) bleiben stumm.<br /><code
          >output.L = input.M<br />output.R = input.M<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Mono auf 5.1.</em><br />Der Eingangskanal <code>M</code>
        wird für den mittleren Ausgangskanal (<code>C</code>) verwendet. Alle anderen
        (<code>L</code>, <code>R</code>, <code>LFE</code>, <code>SL</code> und
        <code>SR</code>) bleiben stumm.<br /><code
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
        <em>Down-Mix von Stereo auf Mono</em>.<br />Die beiden Eingangskanäle (<code
          >L</code
        >
        und <code>R</code>) werden zu gleichen Teilen zum einzigen Ausgangskanal
        (<code>M</code>) kombiniert.<br /><code
          >output.M = 0.5 * (input.L + input.R)</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Up-Mix von Stereo auf Quad.</em><br />Die Eingangskanäle <code>L</code>
        und <code>R</code> werden für die entsprechenden vorderen Ausgangskanäle
        (<code>L</code> und <code>R</code>) verwendet. Die Surround-Ausgangskanäle
        (<code>SL</code> und <code>SR</code>) bleiben stumm.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.SL = 0<br />output.SR
          = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Stereo auf 5.1.</em><br />Die Eingangskanäle <code>L</code>
        und <code>R</code> werden für die entsprechenden vorderen Ausgangskanäle
        (<code>L</code> und <code>R</code>) verwendet. Die Surround-Ausgangskanäle
        (<code>SL</code> und <code>SR</code>) sowie der mittlere Kanal
        (<code>C</code>) und der Subwoofer-Kanal (<code>LFE</code>) bleiben
        stumm.<br /><code
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
        werden zu gleichen Teilen zum einzigen Ausgangskanal
        (<code>M</code>) kombiniert.<br />
        <code>output.M = 0.25 * (input.L + input.R + input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von Quad auf Stereo</em>.<br />Die beiden linken Eingangskanäle
        (<code>L</code> und <code>SL</code>) werden zu gleichen Teilen zum
        linken Ausgangskanal (<code>L</code>) kombiniert. Entsprechend werden
        die beiden rechten Eingangskanäle (<code>R</code> und <code>SR</code>)
        zu gleichen Teilen zum rechten Ausgangskanal (<code>R</code>)
        kombiniert.<br />
        <code>output.L = 0.5 * (input.L + input.SL)</code><br />
        <code>output.R = 0.5 * (input.R + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Up-Mix von Quad auf 5.1.</em><br />Die Eingangskanäle <code>L</code>,
        <code>R</code>, <code>SL</code> und <code>SR</code> werden für ihre
        jeweiligen Ausgangskanäle (<code>L</code>, <code>R</code>,
        <code>SL</code> und <code>SR</code>) verwendet. Der mittlere Kanal
        (<code>C</code>) und der Subwoofer-Kanal (<code>LFE</code>) bleiben
        stumm.<br />
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
        <em>Down-Mix von 5.1 auf Mono.</em><br />Die linken Kanäle (<code>L</code>
        und <code>SL</code>), die rechten Kanäle (<code>R</code> und
        <code>SR</code>) sowie der mittlere Kanal werden zusammengemischt. Die
        Surround-Kanäle werden etwas gedämpft; die vorderen Seitenkanäle
        werden durch Multiplikation mit <code>√2/2</code> hinsichtlich ihrer
        Leistung angepasst, damit sie zusammen wie ein einzelner Kanal
        berücksichtigt werden. Der Subwoofer-Kanal (<code>LFE</code>) entfällt.<br />
        <code>output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Down-Mix von 5.1 auf Stereo.</em><br />Der mittlere Kanal
        (<code>C</code>) wird jeweils mit einem seitlichen Surround-Kanal (<code
          >SL</code
        >
        oder <code>SR</code>) summiert und dem entsprechenden Seitenkanal
        beigemischt. Da auf zwei Kanäle heruntergemischt wird, erfolgt die
        Beimischung mit geringerer Leistung: Der jeweilige Anteil wird mit
        <code>√2/2</code> multipliziert. Der Subwoofer-Kanal
        (<code>LFE</code>) entfällt.<br />
        <code>output.L = input.L + 0.7071 * (input.C + input.SL)</code><br />
        <code>output.R = input.R + 0.7071 * (input.C + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Down-Mix von 5.1 auf Quad.</em><br />Der mittlere Kanal
        (<code>C</code>) wird den vorderen Seitenkanälen (<code>L</code> und
        <code>R</code>) beigemischt. Da er auf zwei Kanäle verteilt wird,
        erfolgt die Beimischung mit geringerer Leistung: Der jeweilige Anteil
        wird mit <code>√2/2</code> multipliziert. Die Surround-Kanäle werden
        unverändert übernommen. Der Subwoofer-Kanal (<code>LFE</code>)
        entfällt.<br />
        <code>output.L = input.L + 0.7071 * input.C</code><br />
        <code>output.R = input.R + 0.7071 * input.C</code><br />
        <code>output.SL = input.SL</code><br />
        <code>output.SR = input.SR</code>
      </td>
    </tr>
    <tr>
      <td colspan="2">Andere, nicht standardmäßige Kanalanordnungen</td>
      <td>
        Nicht standardmäßige Kanalanordnungen verhalten sich so, als wäre
        <code>channelInterpretation</code> auf
        <code>discrete</code> gesetzt.<br />Die Spezifikation lässt ausdrücklich
        zu, dass künftig neue Lautsprecheranordnungen definiert werden. Dieser
        Fallback ist daher nicht zukunftssicher: Das Verhalten der Browser bei
        einer bestimmten Kanalanzahl kann sich künftig ändern.
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="row"><code>discrete</code></th>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>), wobei <code>x&#x3C;y</code></td>
      <td>
        <em>Up-Mix diskreter Kanäle.</em><br />Jeder Ausgangskanal wird mit
        seinem entsprechenden Eingangskanal belegt &mdash; also mit dem
        Eingangskanal mit demselben Index. Kanäle ohne entsprechenden
        Eingangskanal bleiben stumm.
      </td>
    </tr>
    <tr>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>), wobei <code>x>y</code></td>
      <td>
        <em>Down-Mix diskreter Kanäle.</em><br />Jeder Ausgangskanal wird mit
        seinem entsprechenden Eingangskanal belegt &mdash; also mit dem
        Eingangskanal mit demselben Index. Eingangskanäle ohne entsprechenden
        Ausgangskanal werden verworfen.
      </td>
    </tr>
  </tbody>
</table>

## Visualisierungen

Für Audiovisualisierungen erfassen wir in der Regel das Ausgangssignal im zeitlichen Verlauf und lesen dabei beispielsweise Pegel- oder Frequenzdaten aus. Anschließend wandeln wir die gewonnenen Daten mit einem Grafikwerkzeug in eine visuelle Darstellung um, etwa ein Diagramm. Die Web Audio API stellt dafür einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) bereit. Er verändert das Audiosignal, das ihn durchläuft, nicht und gibt zusätzlich Audiodaten aus, die wir beispielsweise mit {{htmlelement("canvas")}} verarbeiten können.

![Der Node liefert mithilfe einer FFT die zugehörigen Frequenz- und Zeitbereichsdaten, ohne den Audiostream zu verändern.](fttaudiodata_en.svg)

Mit den folgenden Methoden können Sie Daten abrufen:

- [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Float32Array")}}-Array.
- [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Uint8Array")}} (ein Array vorzeichenloser Bytes).
- [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData)
  - : Kopiert die aktuellen Wellenform- beziehungsweise Zeitbereichsdaten in ein übergebenes {{jsxref("Float32Array")}}-Array.
- [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData)
  - : Kopiert die aktuellen Wellenform- beziehungsweise Zeitbereichsdaten in ein übergebenes {{jsxref("Uint8Array")}} (ein Array vorzeichenloser Bytes).

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API).

## Räumliche Audiowiedergabe

Mit räumlicher Audiowiedergabe können wir die Position und das Verhalten eines Audiosignals an einem bestimmten Punkt im Raum modellieren und simulieren, wie eine hörende Person dieses Signal wahrnimmt. In der Web Audio API übernehmen [`PannerNode`](/de/docs/Web/API/PannerNode) und [`AudioListener`](/de/docs/Web/API/AudioListener) die räumliche Audiowiedergabe.

Der Panner verwendet ein rechtshändiges kartesisches Koordinatensystem. Er beschreibt die _Position_ der Audioquelle als Vektor und ihre _Ausrichtung_ als dreidimensionalen Richtungskegel. Dieser Kegel kann beispielsweise bei omnidirektionalen Quellen sehr groß sein.

![Der PannerNode definiert eine räumliche Position und Ausrichtung für ein bestimmtes Signal.](pannernode_en.svg)

Auch die hörende Person wird in der Web Audio API mithilfe eines rechtshändigen kartesischen Koordinatensystems beschrieben: ihre _Position_ durch einen Vektor und ihre _Ausrichtung_ durch zwei Richtungsvektoren, _up_ und _front_. Diese Vektoren geben an, in welche Richtung der Scheitel beziehungsweise die Nase der Person zeigt. Sie stehen senkrecht zueinander.

![Zu sehen sind die Vektoren für Position, up und front eines AudioListener. Die Vektoren up und front stehen im 90°-Winkel zueinander.](webaudiolistenerreduced.png)

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Grundlagen der räumlichen Audiowiedergabe mit Web Audio](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics).

## Fan-in und Fan-out

In der Audiotechnik bezeichnet **Fan-in** einen Vorgang, bei dem ein [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) mehrere _Mono_-Eingangsquellen zu einem einzigen Mehrkanalsignal zusammenführt:

![Diagramm des Fan-in-Vorgangs. Mehrere Pfeile ohne Spitze stehen für Mono-Eingangsquellen und werden zu einem einzelnen Pfeil mit Spitze zusammengeführt, der ein Mehrkanalsignal darstellt.](fanin.svg)

**Fan-out** bezeichnet den umgekehrten Vorgang: Ein [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) nimmt eine Mehrkanal-Eingangsquelle entgegen und gibt mehrere _Mono_-Ausgangssignale aus:

![Diagramm des Fan-out-Vorgangs. Ein einzelner Pfeil ohne Spitze steht für eine Mehrkanal-Eingangsquelle und teilt sich in mehrere Pfeile mit Spitze auf, die mehrere Mono-Ausgangssignale darstellen.](fanout.svg)

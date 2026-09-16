---
title: Grundlegende Konzepte hinter der Web Audio API
slug: Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API
l10n:
  sourceCommit: 0bea820aae684828109c8818734b87e995e51dbe
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erläutert einige der Audiotheorie-Grundlagen, auf denen die Funktionen der Web Audio API basieren. Er soll Ihnen dabei helfen, fundierte Entscheidungen zu treffen, wenn Sie das Audio-Routing Ihrer App entwerfen. Auch wenn Sie kein Tontechniker sind, vermittelt er Ihnen genügend Hintergrundwissen, um zu verstehen, warum die Web Audio API so funktioniert, wie sie funktioniert.

## Audiographen

Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verarbeitet Audiooperationen innerhalb eines [Audiokontexts](/de/docs/Web/API/AudioContext) und wurde entwickelt, um _modulares Routing_ zu ermöglichen. Jeder [Audioknoten](/de/docs/Web/API/AudioNode) führt eine grundlegende Audiooperation aus und wird mit einem oder mehreren weiteren Audioknoten verknüpft, um einen [Audio-Routing-Graphen](/de/docs/Web/API/AudioNode#the_audio_routing_graph) zu bilden. Mehrere Quellen mit unterschiedlichen Kanallayouts werden unterstützt, sogar innerhalb eines einzelnen Kontexts. Dieses modulare Design bietet die Flexibilität, komplexe Audiofunktionen mit dynamischen Effekten zu erstellen.

Audioknoten werden über ihre Ein- und Ausgänge verknüpft und bilden eine Kette, die mit einer oder mehreren Quellen beginnt, durch einen oder mehrere Knoten führt und schließlich an einem Ziel endet (Sie müssen jedoch kein Ziel angeben, wenn Sie nur Audiodaten visualisieren möchten). Ein einfacher, typischer Workflow für Web Audio könnte etwa so aussehen:

1. Erstellen Sie den Audiokontext.
2. Erstellen Sie Audioquellen innerhalb des Kontexts, beispielsweise {{HTMLElement("audio")}}, einen Oszillator oder einen Stream.
3. Erstellen Sie Audioeffekte, beispielsweise Reverb-, Biquad-Filter-, Panner- oder Kompressorknoten.
4. Wählen Sie das endgültige Ziel für die Audiodaten, beispielsweise die Lautsprecher des Computers des Benutzers.
5. Verbinden Sie die Quellknoten mit null oder mehr Effektknoten und anschließend mit dem ausgewählten Ziel.

> [!NOTE]
> Die [Kanalnotation](https://en.wikipedia.org/wiki/Surround_sound#Channel_notation) ist ein numerischer Wert wie _2.0_ oder _5.1_, der die Anzahl der in einem Signal verfügbaren Audiokanäle darstellt. Die erste Zahl gibt die Anzahl der im Signal enthaltenen Audiokanäle mit vollständigem Frequenzbereich an. Die Zahl nach dem Punkt gibt die Anzahl der Kanäle an, die für Ausgänge mit Tieffrequenzeffekten (LFE) reserviert sind; diese werden oft **Subwoofer** genannt.

![Ein einfaches Blockdiagramm mit einem äußeren Kasten mit der Beschriftung Audio context und drei inneren Kästen mit den Beschriftungen Sources, Effects und Destination. Zwischen den drei inneren Kästen befinden sich von links nach rechts zeigende Pfeile, die den Fluss der Audioinformationen anzeigen.](webaudioapi_en.svg)

Jeder Ein- oder Ausgang besteht aus einem oder mehreren Audio-**Kanälen**, die zusammen ein bestimmtes Audiolayout darstellen. Jede diskrete Kanalstruktur wird unterstützt, einschließlich _Mono_, _Stereo_, _Quad_, _5.1_ und so weiter.

![Zeigt die Möglichkeit, Audioknoten über ihre Ein- und Ausgänge sowie die Kanäle innerhalb dieser Ein-/Ausgänge zu verbinden.](mdn.png)

Es gibt mehrere Möglichkeiten, Audio zu erhalten:

- Klang kann direkt in JavaScript durch einen Audioknoten erzeugt werden, beispielsweise durch einen Oszillator.
- Er kann aus rohen [PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation)-Daten erstellt werden, beispielsweise aus .WAV-Dateien oder anderen durch [`decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) unterstützten Formaten.
- Er kann aus HTML-Medienelementen wie {{HTMLElement("video")}} oder {{HTMLElement("audio")}} erzeugt werden.
- Er kann aus einem [WebRTC](/de/docs/Web/API/WebRTC_API)-[`MediaStream`](/de/docs/Web/API/MediaStream) abgerufen werden, beispielsweise von einer Webcam oder einem Mikrofon.

## Audiodaten: Was enthält ein Sample?

Bei der Verarbeitung eines Audiosignals findet eine Abtastung statt. **Abtastung** ist die Umwandlung eines [kontinuierlichen Signals](https://en.wikipedia.org/wiki/Continuous_signal) in ein [diskretes Signal](https://en.wikipedia.org/wiki/Discrete_signal). Anders ausgedrückt: Eine kontinuierliche Schallwelle, etwa von einer live spielenden Band, wird in eine Folge digitaler Samples umgewandelt – ein zeitdiskretes Signal –, sodass ein Computer die Audiodaten in einzelnen Blöcken verarbeiten kann.

Weitere Informationen finden Sie auf der Wikipedia-Seite [_Sampling (signal processing)_](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29).

## Audiopuffer: Frames, Samples und Kanäle

Ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) wird durch drei Parameter definiert:

- die Anzahl der Kanäle (1 für Mono, 2 für Stereo usw.),
- seine Länge, also die Anzahl der Sample-Frames im Puffer,
- und die Abtastrate, also die Anzahl der pro Sekunde wiedergegebenen Sample-Frames.

Ein _Sample_ ist ein einzelner 32-Bit-Gleitkommawert, der den Wert des Audiostreams zu einem bestimmten Zeitpunkt innerhalb eines bestimmten Kanals darstellt, etwa links oder rechts bei Stereo. Ein _Frame_ beziehungsweise _Sample-Frame_ ist die Menge aller Werte für alle Kanäle, die zu einem bestimmten Zeitpunkt wiedergegeben werden: alle Samples aller Kanäle, die gleichzeitig wiedergegeben werden – zwei bei Stereoton, sechs bei 5.1 usw.

Die _Abtastrate_ ist die Anzahl dieser Samples – oder Frames, da alle Samples eines Frames gleichzeitig wiedergegeben werden –, die innerhalb einer Sekunde wiedergegeben werden, gemessen in Hz. Je höher die Abtastrate, desto besser die Klangqualität.

Betrachten wir einen _Mono_- und einen _Stereo_-Audiopuffer, jeweils eine Sekunde lang bei einer Rate von 44100 Hz:

- Der _Mono_-Puffer enthält 44.100 Samples und 44.100 Frames. Die Eigenschaft `length` beträgt 44.100.
- Der _Stereo_-Puffer enthält 88.200 Samples, aber weiterhin 44.100 Frames. Die Eigenschaft `length` beträgt weiterhin 44100, da sie der Anzahl der Frames entspricht.

![Ein Diagramm, das mehrere Frames in einem Audiopuffer als lange Reihe zeigt. Jeder enthält zwei Samples, da der Puffer zwei Kanäle hat und somit Stereo ist.](sampleframe-english.png)

Wenn ein Puffer wiedergegeben wird, hören Sie zuerst den am weitesten links liegenden Sample-Frame, dann den direkt daneben, anschließend den nächsten _und so weiter_, bis zum Ende des Puffers. Bei Stereo hören Sie beide Kanäle gleichzeitig. Sample-Frames sind praktisch, da sie unabhängig von der Kanalanzahl sind und Zeit auf eine für präzise Audiomanipulation ideale Weise darstellen.

> [!NOTE]
> Um aus einer Frame-Anzahl eine Zeit in Sekunden zu erhalten, teilen Sie die Anzahl der Frames durch die Abtastrate. Um aus der Anzahl der Samples die Anzahl der Frames zu erhalten, müssen Sie den letzteren Wert nur durch die Kanalanzahl teilen.

Hier sind einige einfache Beispiele:

```js
const buffer = new AudioBuffer({
  numberOfChannels: 2,
  length: 22050,
  sampleRate: 44100,
});
```

> [!NOTE]
> In [digitalem Audio](https://en.wikipedia.org/wiki/Digital_audio) sind **44.100 [Hz](https://en.wikipedia.org/wiki/Hertz)** – alternativ dargestellt als **44,1 kHz** – eine gängige [Abtastfrequenz](https://en.wikipedia.org/wiki/Sampling_frequency). Warum 44,1 kHz?
>
> Erstens liegt der [Hörbereich](https://en.wikipedia.org/wiki/Hearing_range) des menschlichen Gehörs ungefähr zwischen 20 Hz und 20.000 Hz. Nach dem [Nyquist-Shannon-Abtasttheorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem) muss die Abtastfrequenz mehr als doppelt so hoch sein wie die maximale Frequenz, die reproduziert werden soll. Daher muss die Abtastrate _größer_ als 40.000 Hz sein.
>
> Zweitens müssen Signale vor der Abtastung [tiefpassgefiltert](https://en.wikipedia.org/wiki/Low-pass_filter) werden, da andernfalls [Aliasing](https://en.wikipedia.org/wiki/Aliasing) auftritt. Während ein idealer Tiefpassfilter Frequenzen unter 20 kHz perfekt durchlassen würde, ohne sie abzuschwächen, und Frequenzen über 20 kHz perfekt abschneiden würde, ist in der Praxis ein [Übergangsband](https://en.wikipedia.org/wiki/Transition_band) erforderlich, in dem Frequenzen teilweise abgeschwächt werden. Je breiter dieses Übergangsband ist, desto einfacher und kostengünstiger lässt sich ein [Anti-Aliasing-Filter](https://en.wikipedia.org/wiki/Anti-aliasing_filter) herstellen. Die Abtastfrequenz von 44,1 kHz ermöglicht ein Übergangsband von 2,05 kHz.

Wenn Sie den obigen Aufruf verwenden, erhalten Sie einen Stereopuffer mit zwei Kanälen, der bei Wiedergabe in einem mit 44100 Hz laufenden [`AudioContext`](/de/docs/Web/API/AudioContext) – was sehr häufig ist, da die meisten üblichen Soundkarten mit dieser Rate arbeiten – 0,5 Sekunden dauert: 22.050 Frames/44.100 Hz = 0,5 Sekunden.

```js
const buffer = new AudioBuffer({
  numberOfChannels: 1,
  length: 22050,
  sampleRate: 22050,
});
```

Wenn Sie diesen Aufruf verwenden, erhalten Sie einen Monopuffer (Puffer mit einem Kanal), der bei Wiedergabe in einem mit 44.100 Hz laufenden [`AudioContext`](/de/docs/Web/API/AudioContext) automatisch auf 44.100 Hz _neu abgetastet_ wird – und somit 44.100 Frames ergibt – und 1,0 Sekunde dauert: 44.100 Frames/44.100 Hz = 1 Sekunde.

> [!NOTE]
> Die Neuabtastung von Audio ähnelt stark der Größenänderung eines Bildes. Angenommen, Sie haben ein Bild mit 16 × 16 Pixeln, möchten damit aber einen Bereich von 32 × 32 Pixeln füllen. Sie ändern seine Größe – oder tasten es neu ab. Das Ergebnis hat eine geringere Qualität; abhängig vom Skalierungsalgorithmus kann es unscharf oder kantig sein. Es funktioniert jedoch, und das skalierte Bild benötigt weniger Speicherplatz. Bei neu abgetastetem Audio ist es ähnlich: Sie sparen Speicherplatz, können aber in der Praxis hochfrequente Inhalte oder hohe Töne nicht korrekt reproduzieren.

### Planare und verschachtelte Puffer

Die Web Audio API verwendet ein planares Pufferformat. Die linken und rechten Kanäle werden wie folgt gespeichert:

```plain
LLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRR (for a buffer of 16 frames)
```

Diese Struktur ist in der Audioverarbeitung weit verbreitet und erleichtert die unabhängige Verarbeitung jedes Kanals.

Die Alternative ist ein verschachteltes Pufferformat:

```plain
LRLRLRLRLRLRLRLRLRLRLRLRLRLRLRLR (for a buffer of 16 frames)
```

Dieses Format ist verbreitet für das Speichern und Wiedergeben von Audio ohne umfangreiche Verarbeitung, beispielsweise .WAV-Dateien oder einen dekodierten MP3-Stream.

Da die Web Audio API für die Verarbeitung konzipiert ist, stellt sie _nur_ planare Puffer bereit. Sie verwendet das planare Format, wandelt die Audiodaten jedoch in das verschachtelte Format um, wenn sie zur Wiedergabe an die Soundkarte gesendet werden. Umgekehrt beginnt die API beim Dekodieren einer MP3 mit dem verschachtelten Format und wandelt es zur Verarbeitung in das planare Format um.

## Audiokanäle

Jeder Audiopuffer kann unterschiedlich viele Kanäle enthalten. Die meisten modernen Audiogeräte verwenden die grundlegenden Einstellungen _Mono_ (nur ein Kanal) und _Stereo_ (linker und rechter Kanal). Einige komplexere Systeme unterstützen _Surround-Sound_-Einstellungen wie _Quad_ und _5.1_, die dank ihrer hohen Kanalanzahl zu einem intensiveren Klangerlebnis führen können. Üblicherweise stellen wir die Kanäle mit den folgenden Standardabkürzungen dar:

| Name     | Kanäle                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------- |
| _Mono_   | `0: M: mono`                                                                                       |
| _Stereo_ | `0: L: left 1: R: right`                                                                           |
| _Quad_   | `0: L: left 1: R: right 2: SL: surround left 3: SR: surround right`                                |
| _5.1_    | `0: L: left 1: R: right 2: C: center 3: LFE: subwoofer 4: SL: surround left 5: SR: surround right` |

### Hochmischen und Heruntermischen

Wenn die Kanalanzahl von Ein- und Ausgang nicht übereinstimmt, muss hoch- oder heruntergemischt werden. Dabei gelten die folgenden Regeln, die durch das Setzen der Eigenschaft [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation) auf `speakers` oder `discrete` gesteuert werden:

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
        <em>Hochmischen von Mono auf Stereo</em>.<br />Der Eingangskanal <code>M</code>
        wird für beide Ausgangskanäle (<code>L</code> und <code>R</code>) verwendet.<br /><code
          >output.L = input.M<br />output.R = input.M</code
        >
      </td>
    </tr>
    <tr>
      <td><code>1</code> <em>(Mono)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Hochmischen von Mono auf Quad.</em><br />Der Eingangskanal <code>M</code>
        wird für die Nicht-Surround-Ausgangskanäle (<code>L</code> und
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
        <em>Hochmischen von Mono auf 5.1.</em><br />Der Eingangskanal <code>M</code>
        wird für den zentralen Ausgangskanal (<code>C</code>) verwendet. Alle anderen
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
        <em>Heruntermischen von Stereo auf Mono</em>.<br />Beide Eingangskanäle (<code
          >L</code
        >
        und <code>R</code>) werden gleich gewichtet kombiniert, um den einzigen
        Ausgangskanal (<code>M</code>) zu erzeugen.<br /><code
          >output.M = 0.5 * (input.L + input.R)</code
        >
      </td>
    </tr>
    <tr>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Hochmischen von Stereo auf Quad.</em><br />Die Eingangskanäle <code>L</code>
        und <code>R</code> werden für die entsprechenden Nicht-Surround-Ausgangskanäle
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
        <em>Hochmischen von Stereo auf 5.1.</em><br />Die Eingangskanäle <code>L</code>
        und <code>R</code> werden für die entsprechenden Nicht-Surround-Ausgangskanäle
        (<code>L</code> und <code>R</code>) verwendet. Die Surround-Ausgangskanäle
        (<code>SL</code> und <code>SR</code>) sowie der Center- (<code>C</code>) und
        Subwoofer-Kanal (<code>LFE</code>) bleiben stumm.<br /><code
          >output.L = input.L<br />output.R = input.R<br />output.C = 0<br />output.LFE
          = 0<br />output.SL = 0<br />output.SR = 0</code
        >
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>1</code> <em>(Mono)</em></td>
      <td>
        <em>Heruntermischen von Quad auf Mono</em>.<br />Alle vier Eingangskanäle
        (<code>L</code>, <code>R</code>, <code>SL</code> und <code>SR</code>)
        werden gleich gewichtet kombiniert, um den einzigen Ausgangskanal
        (<code>M</code>) zu erzeugen.<br />
        <code>output.M = 0.25 * (input.L + input.R + input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Heruntermischen von Quad auf Stereo</em>.<br />Beide linken Eingangskanäle
        (<code>L</code> und <code>SL</code>) werden gleich gewichtet kombiniert, um
        den einzigen linken Ausgangskanal (<code>L</code>) zu erzeugen. Entsprechend
        werden beide rechten Eingangskanäle (<code>R</code> und <code>SR</code>)
        gleich gewichtet kombiniert, um den einzigen rechten Ausgangskanal
        (<code>R</code>) zu erzeugen.<br />
        <code>output.L = 0.5 * (input.L + input.SL)</code><br />
        <code>output.R = 0.5 * (input.R + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>4</code> <em>(Quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>Hochmischen von Quad auf 5.1.</em><br />Die Eingangskanäle <code>L</code>,
        <code>R</code>, <code>SL</code> und <code>SR</code> werden für ihre
        jeweiligen Ausgangskanäle verwendet. Die Center- (<code>C</code>) und
        Subwoofer-Kanäle (<code>LFE</code>) bleiben stumm.<br />
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
        <em>Heruntermischen von 5.1 auf Mono.</em><br />Die linken (<code>L</code> und
        <code>SL</code>), rechten (<code>R</code> und <code>SR</code>) und zentralen
        Kanäle werden alle zusammengemischt. Die Surround-Kanäle werden leicht
        abgeschwächt, und die normalen seitlichen Kanäle werden leistungskompensiert,
        sodass sie durch Multiplikation mit <code>√2/2</code> als einzelner Kanal
        zählen. Der Subwoofer-Kanal (<code>LFE</code>) geht verloren.<br />
        <code>output.M = 0.7071 * (input.L + input.R) + input.C + 0.5 * (input.SL + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(Stereo)</em></td>
      <td>
        <em>Heruntermischen von 5.1 auf Stereo.</em><br />Der zentrale Kanal
        (<code>C</code>) wird mit jedem seitlichen Surround-Kanal (<code
          >SL</code
        >
        oder <code>SR</code>) summiert und in jeden seitlichen Kanal gemischt.
        Da auf zwei Kanäle heruntergemischt wird, erfolgt die Mischung mit geringerer
        Leistung: In jedem Fall wird mit <code>√2/2</code> multipliziert. Der
        Subwoofer-Kanal (<code>LFE</code>) geht verloren.<br />
        <code>output.L = input.L + 0.7071 * (input.C + input.SL)</code><br />
        <code>output.R = input.R + 0.7071 * (input.C + input.SR)</code>
      </td>
    </tr>
    <tr>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(Quad)</em></td>
      <td>
        <em>Heruntermischen von 5.1 auf Quad.</em><br />Der zentrale Kanal (<code>C</code>)
        wird mit den seitlichen Nicht-Surround-Kanälen (<code>L</code> und
        <code>R</code>) gemischt. Da auf zwei Kanäle heruntergemischt wird, erfolgt
        die Mischung mit geringerer Leistung: In jedem Fall wird mit
        <code>√2/2</code> multipliziert. Die Surround-Kanäle werden unverändert
        durchgeleitet. Der Subwoofer-Kanal (<code>LFE</code>) geht verloren.<br />
        <code>output.L = input.L + 0.7071 * input.C</code><br />
        <code>output.R = input.R + 0.7071 * input.C</code><br />
        <code>output.SL = input.SL</code><br />
        <code>output.SR = input.SR</code>
      </td>
    </tr>
    <tr>
      <td colspan="2">Andere, nicht standardmäßige Layouts</td>
      <td>
        Nicht standardmäßige Kanallayouts verhalten sich, als wäre
        <code>channelInterpretation</code> auf <code>discrete</code> gesetzt.<br />Die
        Spezifikation erlaubt ausdrücklich die zukünftige Definition neuer
        Lautsprecherlayouts. Daher ist dieser Fallback nicht zukunftssicher, da sich
        das Verhalten der Browser für eine bestimmte Kanalanzahl künftig ändern kann.
      </td>
    </tr>
    <tr>
      <th rowspan="2" scope="row"><code>discrete</code></th>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>), wobei <code>x&#x3C;y</code></td>
      <td>
        <em>Diskrete Kanäle hochmischen.</em><br />Füllen Sie jeden Ausgangskanal mit
        seinem entsprechenden Eingangskanal – also dem Eingangskanal mit demselben
        Index. Kanäle ohne entsprechenden Eingangskanal bleiben stumm.
      </td>
    </tr>
    <tr>
      <td>beliebig (<code>x</code>)</td>
      <td>beliebig (<code>y</code>), wobei <code>x>y</code></td>
      <td>
        <em>Diskrete Kanäle heruntermischen.</em><br />Füllen Sie jeden Ausgangskanal
        mit seinem entsprechenden Eingangskanal – also dem Eingangskanal mit demselben
        Index. Eingangskanäle ohne entsprechenden Ausgangskanal werden verworfen.
      </td>
    </tr>
  </tbody>
</table>

## Visualisierungen

Im Allgemeinen verwenden wir die Ausgabe über die Zeit, um Audiovisualisierungen zu erzeugen, und lesen dafür meist deren Verstärkungs- oder Frequenzdaten. Anschließend wandeln wir die erhaltenen Daten mithilfe eines Grafikwerkzeugs in eine visuelle Darstellung, beispielsweise ein Diagramm, um. Die Web Audio API stellt einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode) bereit, der das durch ihn laufende Audiosignal nicht verändert. Außerdem gibt er die Audiodaten aus, sodass wir sie mithilfe einer Technologie wie {{htmlelement("canvas")}} verarbeiten können.

![Ohne den Audiostream zu verändern, ermöglicht der Knoten das Abrufen der zugehörigen Frequenz- und Zeitbereichsdaten unter Verwendung einer FFT.](fttaudiodata_en.svg)

Sie können Daten mit den folgenden Methoden abrufen:

- [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Float32Array")}}-Array.
- [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData)
  - : Kopiert die aktuellen Frequenzdaten in ein übergebenes {{jsxref("Uint8Array")}} (Array vorzeichenloser Bytes).
- [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData)
  - : Kopiert die aktuellen Wellenform- oder Zeitbereichsdaten in ein übergebenes {{jsxref("Float32Array")}}-Array.
- [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData)
  - : Kopiert die aktuellen Wellenform- oder Zeitbereichsdaten in ein übergebenes {{jsxref("Uint8Array")}} (Array vorzeichenloser Bytes).

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Visualisierungen mit der Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API).

## Verräumlichung

Die Audioverräumlichung ermöglicht es uns, die Position und das Verhalten eines Audiosignals an einem bestimmten Punkt im physischen Raum zu modellieren und zu simulieren, wie der Zuhörer dieses Audio hört. In der Web Audio API wird die Verräumlichung durch [`PannerNode`](/de/docs/Web/API/PannerNode) und [`AudioListener`](/de/docs/Web/API/AudioListener) verarbeitet.

Der Panner verwendet rechtshändige kartesische Koordinaten, um die _Position_ der Audioquelle als Vektor und ihre _Orientierung_ als gerichteten 3D-Kegel zu beschreiben. Der Kegel kann beispielsweise bei omnidirektionalen Quellen recht groß sein.

![Der PannerNode definiert eine räumliche Position und Orientierung für ein bestimmtes Signal.](pannernode_en.svg)

Ebenso beschreibt die Web Audio API den Zuhörer mit rechtshändigen kartesischen Koordinaten: seine _Position_ als einen Vektor und seine _Orientierung_ als zwei Richtungsvektoren, _up_ und _front_. Diese Vektoren definieren die Richtung des oberen Teils des Kopfes des Zuhörers sowie die Richtung, in die dessen Nase zeigt. Die Vektoren stehen senkrecht aufeinander.

![Wir sehen die Positions-, Up- und Front-Vektoren eines AudioListener, wobei die Up- und Front-Vektoren im 90°-Winkel zueinander stehen.](webaudiolistenerreduced.png)

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Grundlagen der Web-Audio-Verräumlichung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics).

## Fan-in und Fan-out

Im Audiobereich beschreibt **Fan-in** den Prozess, bei dem ein [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) eine Reihe von _Mono_-Eingangsquellen aufnimmt und ein einzelnes Mehrkanalsignal ausgibt:

![Diagramm des Fan-in-Prozesses. Mehrere pfeillose Pfeile, die Mono-Eingangsquellen darstellen, werden zu einem einzelnen Pfeil zusammengeführt, der ein Mehrkanalsignal darstellt.](fanin.svg)

**Fan-out** beschreibt den umgekehrten Prozess: Ein [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) nimmt eine Mehrkanal-Eingangsquelle auf und gibt mehrere _Mono_-Ausgangssignale aus:

![Diagramm des Fan-out-Prozesses. Ein einzelner pfeilloser Pfeil, der eine Mehrkanal-Eingangsquelle darstellt, teilt sich in mehrere Pfeile auf, die mehrere Mono-Ausgangssignale darstellen.](fanout.svg)

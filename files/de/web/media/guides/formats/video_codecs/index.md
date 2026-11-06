---
title: Leitfaden zu Videocodecs im Web
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

Dieser Leitfaden stellt die Videocodecs vor, denen Sie im Web am ehesten begegnen oder deren Einsatz Sie in Betracht ziehen könnten. Er fasst ihre Fähigkeiten sowie mögliche Fragen zur Kompatibilität und Eignung zusammen und hilft Ihnen, den passenden Codec für die Videos Ihres Projekts auszuwählen.

Da unkomprimierte Videodaten sehr umfangreich sind, müssen sie erheblich komprimiert werden, um sie speichern oder gar über ein Netzwerk übertragen zu können. Stellen Sie sich die Datenmenge vor, die für unkomprimiertes Video benötigt wird:

- Ein einzelner Frame eines hochauflösenden Videos (1920 × 1080) in voller Farbe (4 Bytes pro Pixel) umfasst 8.294.400 Bytes.
- Bei üblichen 30 Frames pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) belegen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine recht typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, ein zweistündiger Film _fast 1,79 **TB** (also 1790 GB)_.

Nicht nur der benötigte Speicherplatz wäre enorm: Auch die Netzwerkbandbreite zur Übertragung eines solchen unkomprimierten Videos wäre mit 249 MB/s riesig – Audio und Protokoll-Overhead noch nicht eingerechnet. Hier kommen Videocodecs ins Spiel. So wie Audiocodecs Audiodaten komprimieren, komprimieren Videocodecs Videodaten und codieren sie in ein Format, das später decodiert und wiedergegeben oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**: Das decodierte Video stimmt also nicht exakt mit dem Ausgangsmaterial überein. Einige Details können verloren gehen. Wie groß dieser Verlust ist, hängt vom Codec und seiner Konfiguration ab. Generell gilt jedoch: Je stärker die Komprimierung, desto mehr Details und Bildtreue gehen verloren. Es gibt auch verlustfreie Codecs, diese werden aber üblicherweise zur Archivierung und Speicherung für die lokale Wiedergabe eingesetzt und nicht für die Übertragung über ein Netzwerk.

## Gängige Codecs

Die folgenden Videocodecs werden im Web am häufigsten verwendet. Zu jedem Codec sind auch die Container (Dateitypen) aufgeführt, die ihn unterstützen können. Jeder Codec ist mit einem Abschnitt weiter unten verlinkt, der zusätzliche Einzelheiten enthält, darunter spezifische Fähigkeiten und Kompatibilitätsfragen, die Sie beachten sollten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (Kurzform)</th>
      <th scope="col">Vollständiger Codec-Name</th>
      <th scope="col">Container-Unterstützung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#av1">AV1</a></th>
      <td>AOMedia Video 1</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#avc_h.264">AVC (H.264)</a></th>
      <td>Advanced Video Coding</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#h.263">H.263</a></th>
      <td>H.263 Video</td>
      <td><a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#hevc_h.265">HEVC (H.265)</a></th>
      <td>High Efficiency Video Coding</td>
      <td><a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#mp4v-es">MP4V-ES</a></th>
      <td>MPEG-4 Video Elemental Stream</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-1_part_2_video">MPEG-1</a></th>
      <td>MPEG-1 Part 2 Visual</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Part 2 Visual</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#theora">Theora</a> {{deprecated_inline}}</th>
      <td>Theora</td>
      <td><a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp8">VP8</a></th>
      <td>Video Processor 8</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp9">VP9</a></th>
      <td>Video Processor 9</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
  </tbody>
</table>

## Faktoren, die das codierte Video beeinflussen

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die Größe und Qualität des codierten Videos beeinflussen: Eigenschaften von Format und Inhalt des Ausgangsvideos sowie Eigenschaften und Konfiguration des Codecs, mit dem das Video codiert wird.

Die einfachste Faustregel lautet: Alles, was das codierte Video dem unkomprimierten Original ähnlicher macht, vergrößert in der Regel auch die resultierende Datenmenge. Es geht also immer um einen Kompromiss zwischen Größe und Qualität. Manchmal lohnt es sich, zugunsten einer kleineren Datei größere Qualitätseinbußen hinzunehmen. In anderen Fällen sind diese Einbußen nicht akzeptabel, sodass eine Codec-Konfiguration gewählt werden muss, die eine entsprechend größere Datei erzeugt.

### Einfluss des Formats des Ausgangsvideos auf das codierte Ergebnis

Wie stark sich das Format des Ausgangsvideos auf das Ergebnis auswirkt, hängt vom Codec und seiner Funktionsweise ab. Wenn der Codec das Medium in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als durch einfache Pixel darstellt, spielt das Format des ursprünglichen Bildes keine Rolle. Faktoren wie die Framerate und natürlich die Auflösung wirken sich dagegen immer auf die Größe des resultierenden Mediums aus.

Außerdem hat jeder Codec Stärken und Schwächen. Manche kommen mit bestimmten Formen und Mustern schlecht zurecht, bilden scharfe Kanten nicht gut nach oder verlieren in dunklen Bereichen Details. Welche Probleme auftreten, hängt von den zugrunde liegenden Algorithmen und mathematischen Verfahren ab.

<table class="standard-table">
  <caption>
    Mögliche Auswirkungen von Format und Inhalt des Ausgangsvideos auf Qualität
    und Größe des codierten Videos
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Auswirkung auf die Qualität</th>
      <th scope="col">Auswirkung auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Farbtiefe (Bittiefe)</th>
      <td>
        Je höher die Farbtiefe in Bit, desto originalgetreuer werden die Farben
        im Video wiedergegeben. In gesättigten Bildbereichen – also dort, wo
        Farben rein und intensiv sind, etwa bei einem hellen, reinen Rot:
        <code>rgb(255 0 0 / 100%)</code> – kann bei weniger als 10 Bit pro
        Komponente (10-Bit-Farbe) Banding auftreten. Dabei lassen sich
        Farbverläufe nicht ohne sichtbare Farbstufen darstellen.
      </td>
      <td>
        Je nach Codec können höhere Farbtiefen zu größeren komprimierten Dateien
        führen. Entscheidend ist das interne Speicherformat der komprimierten
        Daten.
      </td>
    </tr>
    <tr>
      <th scope="row">Framerate</th>
      <td>
        Beeinflusst vor allem, wie flüssig die Bewegung im Bild wahrgenommen
        wird. Bis zu einem gewissen Punkt wirken Bewegungen mit steigender
        Framerate flüssiger und realistischer. Irgendwann nimmt der zusätzliche
        Nutzen jedoch ab. Einzelheiten finden Sie weiter unten unter
        <a href="#reduced_frame_rate">Framerate</a>.
      </td>
      <td>
        Sofern die Framerate beim Codieren nicht reduziert wird, führen höhere
        Framerates zu größeren komprimierten Videos.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Bei der Videokomprimierung werden typischerweise Frames verglichen,
        Unterschiede ermittelt und Datensätze erstellt, die genügend
        Informationen enthalten, um den vorherigen Frame so zu aktualisieren,
        dass er dem nächsten Frame ähnelt. Je stärker sich aufeinanderfolgende
        Frames unterscheiden, desto umfangreicher sind diese Unterschiede und
        desto schwerer lassen sich Artefakte im komprimierten Video vermeiden.
      </td>
      <td>
        Bewegung erhöht die Komplexität und führt wegen der größeren Zahl von
        Unterschieden zwischen Frames zu umfangreicheren Zwischenframes.
        Deshalb und aus weiteren Gründen wird die Ausgabedatei normalerweise
        größer, je mehr Bewegung ein Video enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrauschen</th>
      <td>
        Bildrauschen – beispielsweise Filmkorn, Staub oder eine andere körnige
        Bildstruktur – erzeugt Variabilität. Diese erschwert im Allgemeinen die
        Komprimierung: Um denselben Komprimierungsgrad zu erreichen, müssen mehr
        Details verworfen werden, wodurch die Qualität stärker sinkt.
      </td>
      <td>
        Je mehr Variabilität, etwa durch Rauschen, im Bild vorhanden ist, desto
        komplexer wird die Komprimierung und desto unwahrscheinlicher ist es,
        dass der Algorithmus das Bild im selben Maß komprimieren kann. Wenn Sie
        den Encoder nicht so konfigurieren, dass er einige oder alle durch
        Rauschen verursachten Abweichungen ignoriert, wird das komprimierte
        Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Ein Video mit höherer Auflösung kann die ursprüngliche Szene bei
        gleicher Anzeigegröße in der Regel genauer darstellen, sofern keine
        Komprimierungseffekte dies beeinträchtigen.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Die
        Auflösung spielt für die endgültige Videogröße eine wesentliche Rolle.
      </td>
    </tr>
  </tbody>
</table>

Wie stark sich diese Faktoren auf das codierte Video auswirken, hängt von den genauen Umständen ab, darunter vom verwendeten Encoder und seiner Konfiguration. Zusätzlich zu allgemeinen Codec-Optionen lässt sich ein Encoder unter Umständen so konfigurieren, dass er beim Codieren die Framerate reduziert, Rauschen entfernt und/oder die Gesamtauflösung des Videos verringert.

### Einfluss der Codec-Konfiguration auf das codierte Ergebnis

Die zur Videocodierung verwendeten Algorithmen setzen normalerweise eine oder mehrere allgemeine Verfahrenstechniken ein. Grundsätzlich wird jede Konfigurationsoption, die die Ausgabegröße verringern soll, wahrscheinlich die Gesamtqualität des Videos beeinträchtigen oder bestimmte Artefakte verursachen. Es kann auch eine verlustfreie Codierung gewählt werden. Sie erzeugt eine wesentlich größere Datei, gibt das ursprüngliche Video nach dem Decodieren aber exakt wieder.

Darüber hinaus können sich Encoder-Programme darin unterscheiden, wie sie das Ausgangsvideo verarbeiten. Das kann Unterschiede bei Qualität und/oder Größe der Ausgabe zur Folge haben.

<table class="standard-table">
  <caption>
    Auswirkungen der Videoencoder-Konfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Auswirkung auf die Qualität</th>
      <th scope="col">Auswirkung auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Verlustfreie Komprimierung</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Komprimierung kann die Videogröße bei Weitem nicht so
        stark reduzieren wie verlustbehaftete Komprimierung. Die resultierenden
        Dateien sind für eine allgemeine Verwendung wahrscheinlich immer noch
        zu groß.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Komprimierung</th>
      <td>
        Je nach Codec und Stärke der Komprimierung treten in gewissem Umfang
        Artefakte und andere Qualitätseinbußen auf.
      </td>
      <td>
        Je stärker das codierte Video vom Ausgangsmaterial abweichen darf,
        desto leichter lassen sich höhere Komprimierungsraten erzielen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die eingestellte Qualität, desto ähnlicher sieht das codierte
        Video dem Originalmedium.
      </td>
      <td>
        Höhere Qualitätseinstellungen führen im Allgemeinen zu größeren
        codierten Videodateien. Wie stark dieser Effekt ist, hängt vom Codec ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Mit höheren Bitraten verbessert sich die Qualität normalerweise.</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien.</td>
    </tr>
  </tbody>
</table>

Welche Optionen beim Codieren eines Videos verfügbar sind und welche Werte Sie ihnen zuweisen können, hängt nicht nur vom Codec, sondern auch von der verwendeten Codierungssoftware ab. Deren Dokumentation hilft Ihnen zu verstehen, wie sich die einzelnen Optionen konkret auf das codierte Video auswirken.

## Komprimierungsartefakte

**Artefakte** sind Nebenwirkungen einer verlustbehafteten Codierung, bei der verlorene oder umgeordnete Daten sichtbar negative Auswirkungen haben. Ist ein Artefakt erst einmal aufgetreten, kann es aufgrund der Art der Videodarstellung eine Zeit lang sichtbar bleiben. Jeder Videoframe wird dargestellt, indem Änderungen auf den aktuell sichtbaren Frame angewendet werden. Fehler oder Artefakte können sich dadurch im Laufe der Zeit verstärken und Störungen oder andere ungewöhnliche, unerwartete Bildabweichungen erzeugen, die eine Weile bestehen bleiben.

Um dies zu beheben und das Springen innerhalb des Videos zu beschleunigen, werden in regelmäßigen Abständen **Keyframes** (auch **Intra-Frames** oder **I-Frames**) in die Videodatei eingefügt. Keyframes sind vollständige Frames, mit denen aktuell sichtbare Schäden oder verbliebene Artefakte korrigiert werden.

### Aliasing

Aliasing ist ein Oberbegriff für alles, was nach der Rekonstruktion aus den codierten Daten anders aussieht als vor der Komprimierung. Es gibt viele Formen von Aliasing. Zu den häufigsten zählen:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="Moiré_patterns">Moiré-Muster</h4>
        <p>
          Ein
          <a href="https://en.wikipedia.org/wiki/Moir%C3%A9_pattern"
            ><strong>Moiré-Muster</strong></a
          >
          ist ein großflächiges räumliches Interferenzmuster. Es entsteht,
          wenn ein Muster im Ausgangsbild und die Arbeitsweise des Encoders
          räumlich leicht gegeneinander versetzt sind. Die vom Encoder
          erzeugten Artefakte verursachen nach dem Decodieren merkwürdige,
          wirbelartige Effekte im Muster des Ausgangsbildes.
        </p>
      </td>
      <td>
        <img alt="Eine Ziegelwand mit einem durch das Moiré-Muster verursachten, wellenartigen Wirbeleffekt" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, bei
          dem diagonale gerade oder gekrümmte Kanten, die glatt sein sollten,
          gezackt erscheinen – ähnlich einer Treppe. Diesen Effekt sollen
          „Anti-Aliasing“-Filter verringern.
        </p>
      </td>
      <td>
        <img alt="Foto diagonaler Linien, die durch einen Aliasing-bedingten Treppeneffekt wie eine Treppe aussehen" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der <strong>Wagenradeffekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboskopische Effekt</a></strong
          >) ist ein häufig in Filmen zu beobachtender visueller Effekt. Dabei
          scheint sich ein drehendes Rad aufgrund des Zusammenspiels von
          Framerate und Komprimierungsalgorithmus mit falscher Geschwindigkeit
          oder sogar rückwärts zu drehen. Derselbe Effekt kann bei jedem
          bewegten, sich wiederholenden Muster auftreten, etwa bei
          Eisenbahnschwellen oder Pfosten am Straßenrand. Es handelt sich um
          ein zeitliches Aliasing-Problem: Die Drehgeschwindigkeit
          beeinflusst die Frequenz der Abtastung während der Komprimierung
          oder Codierung.
        </p>
      </td>
      <td>
        <img alt="Drehendes Rad mit einem durch Aliasing verursachten Wagenradeffekt" src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbsäume

**Farbsäume** sind visuelle Artefakte in Form unerwünschter Farben entlang der Kanten farbiger Objekte in einer Szene. Diese Farben stehen in keiner beabsichtigten farblichen Beziehung zum Inhalt des Frames.

### Verlust an Schärfe

Wenn beim Codieren eines Videos Daten entfernt werden, gehen zwangsläufig einige Details verloren. Bei ausreichender Komprimierung können Teile des Bildes oder sogar das gesamte Bild an Schärfe verlieren und leicht unscharf oder verschwommen wirken.

Der Schärfeverlust kann Text im Bild schwer lesbar machen. Insbesondere kleiner Text ist stark von Details abhängig; schon geringe Veränderungen können seine Lesbarkeit erheblich beeinträchtigen.

### Ringing

Verlustbehaftete Komprimierungsalgorithmen können **[Ringing](https://en.wikipedia.org/wiki/Ringing_artifacts)** verursachen: Dabei erscheinen außerhalb eines Objekts farbige Pixel, die der Komprimierungsalgorithmus erzeugt hat. Das passiert, wenn ein Algorithmus Blöcke verwendet, die eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund überdecken. Besonders häufig tritt dies bei stärkerer Komprimierung auf.

![Beispiel für den Ringing-Effekt](ringing-effects.png)

Beachten Sie die blauen und rosa Säume an den Kanten des Sterns oben sowie die Stufenbildung und andere deutliche Komprimierungsartefakte. Diese Säume sind der Ringing-Effekt. Ringing ähnelt in mancher Hinsicht dem [Mosquito Noise](#mosquito_noise). Während der Ringing-Effekt jedoch mehr oder weniger konstant bleibt, flimmert und bewegt sich Mosquito Noise.

Auch Ringing kann das Lesen von Text in Bildern besonders erschweren.

### Posterisation

**Posterisation** tritt auf, wenn durch die Komprimierung Farbabstufungen in Farbverläufen verloren gehen. Anstelle fließender Übergänge zwischen den verschiedenen Farben eines Bereichs entstehen blockartige Farbflächen, die das ursprüngliche Bild nur annähernd wiedergeben.

![Foto eines Weißkopfseeadlers mit fleckiger Darstellung.](posterize-effect.jpg)

Beachten Sie die blockartigen Farben im Gefieder des Weißkopfseeadlers auf dem Foto oben sowie bei der Schneeeule im Hintergrund. Durch die Posterisationsartefakte sind die Details der Federn weitgehend verloren gegangen.

### Konturierung

**Konturierung** oder **Color Banding** ist eine besondere Form der Posterisation, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Das passiert, wenn das Video mit einer zu groben Quantisierung codiert wird. Dadurch wirkt der Videoinhalt „geschichtet“: Anstelle fließender Farbverläufe und Übergänge wechseln die Farben abrupt, sodass Farbstreifen sichtbar werden.

![Beispiel für ein Bild, bei dem die Komprimierung Konturierung verursacht hat](contouring-effect.jpg)

Beachten Sie im Beispielbild oben, wie der Himmel Bänder in unterschiedlichen Blautönen aufweist, statt einen gleichmäßigen Farbverlauf zum Horizont hin zu zeigen. Das ist der Konturierungseffekt.

### Mosquito Noise

**Mosquito Noise** ist ein zeitliches Artefakt. Es äußert sich als Rauschen oder **Unruhe an Kanten**: Ein flimmernder Schleier oder ein Schimmern erscheint ungefähr entlang der Außenseiten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrund und Hintergrund. Der Effekt kann [Ringing](#ringing) ähneln.

![Beispiel für ein Bild, bei dem die Komprimierung Mosquito Noise verursacht hat.](mosquito-effect-sm.png)

Das Foto oben zeigt Mosquito Noise an mehreren Stellen, unter anderem am Himmel um die Brücke. Oben rechts ist ein Ausschnitt mit einer vergrößerten Ansicht eines betroffenen Bildbereichs eingeblendet.

Mosquito-Noise-Artefakte kommen am häufigsten bei MPEG-Videos vor, können aber immer dann auftreten, wenn ein Algorithmus auf Basis der diskreten Kosinustransformation (DCT) verwendet wird. Dazu gehören beispielsweise auch JPEG-Standbilder.

### Blockgrenzenartefakte bei der Bewegungskompensation

Bei der Videokomprimierung werden im Allgemeinen zwei Frames verglichen und ihre Unterschiede aufgezeichnet – Frame für Frame bis zum Ende des Videos. Dieses Verfahren funktioniert gut, wenn die Kamera feststeht oder die Objekte im Bild relativ unbewegt sind. Bei viel Bewegung können die Unterschiede zwischen den Frames jedoch so groß werden, dass die Komprimierung kaum noch etwas bringt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist ein Verfahren, das Bewegungen der Kamera oder von Objekten im Bild erkennt und ermittelt, um wie viele Pixel sich ein bewegtes Objekt in jede Richtung verschoben hat. Diese Verschiebung wird zusammen mit einer Beschreibung der bewegten Pixel gespeichert, die sich nicht allein durch die Verschiebung beschreiben lassen. Im Wesentlichen erkennt der Encoder die bewegten Objekte und erstellt daraus eine Art internen Frame, der dem Original ähnelt, in dem die Objekte aber bereits an ihre neuen Positionen verschoben sind. Theoretisch nähert dies das Aussehen des neuen Frames an. Anschließend werden die übrigen Unterschiede ermittelt. Die Objektverschiebungen und Pixelunterschiede werden dann in den Daten gespeichert, die den neuen Frame darstellen. Diese Beschreibung der Verschiebungen und Pixelunterschiede wird **Residual-Frame** genannt.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Original-Frame</th>
      <th scope="col" style="width: 216px">Unterschiede zwischen Frames</th>
      <th scope="col" style="width: 216px">
        Unterschiede nach der Bewegungskompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Original-Frame eines Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten und dem folgenden Frame" src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Frames nach einer Verschiebung um zwei Pixel nach rechts"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Der erste vollständige Frame, wie ihn die betrachtende Person sieht.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten und dem folgenden
        Frame zu sehen. Alles andere ist schwarz. Bei genauerem Hinsehen wird
        deutlich, dass die meisten Unterschiede durch eine horizontale
        Kamerabewegung entstehen. Damit eignet sich die Aufnahme gut für eine
        Bewegungskompensation.
      </td>
      <td style="vertical-align: top">
        Um die Zahl der abweichenden Pixel zu minimieren, berücksichtigen wir
        hier den Kameraschwenk: Zuerst verschieben wir den ersten Frame um zwei
        Pixel nach rechts, anschließend ermitteln wir die Unterschiede. Das
        gleicht den Kameraschwenk aus und erhöht die Übereinstimmung zwischen
        den beiden Frames.
      </td>
    </tr>
    <tr>
      <th
        colspan="3"
        style="
          font: italic 0.9em Arial, x-locale-body, sans-serif;
          vertical-align: middle;
        "
      >
        Bilder von
        <a
          href="https://en.wikipedia.org/wiki/Motion_compensation#Illustrated_example"
          >Wikipedia</a
        >
      </th>
    </tr>
  </tbody>
</table>

Es gibt zwei grundlegende Arten der Bewegungskompensation: **globale Bewegungskompensation** und **blockbasierte Bewegungskompensation**. Die globale Bewegungskompensation gleicht im Allgemeinen Kamerabewegungen aus, etwa Kamerafahrten, Schwenks, Neigungen, Rollbewegungen sowie Bewegungen nach oben und unten. Die blockbasierte Bewegungskompensation behandelt lokale Veränderungen. Sie sucht nach kleineren Bildbereichen, die mittels Bewegungskompensation codiert werden können. Diese Blöcke haben normalerweise eine feste Größe und sind in einem Raster angeordnet. Es gibt aber auch Verfahren mit variablen Blockgrößen oder sogar überlappenden Blöcken.

Durch Bewegungskompensation können allerdings Artefakte entstehen. Sie treten an Blockgrenzen in Form scharfer Kanten auf, die falsches Ringing und andere Kanteneffekte hervorrufen. Ursache sind die mathematischen Verfahren zur Codierung der Residual-Frames. Die Artefakte können deutlich sichtbar sein, bevor der nächste Keyframe sie korrigiert.

### Reduzierte Frame-Größe

In bestimmten Situationen kann es sinnvoll sein, die Abmessungen des Videos zu verringern, um die endgültige Größe der Videodatei zu reduzieren. Der unmittelbare Verlust an Bildgröße oder Wiedergabeschärfe kann zwar nachteilig sein, doch eine sorgfältige Abwägung kann zu einem guten Ergebnis führen. Wird ein 1080p-Video vor dem Codieren auf 720p verkleinert, kann das resultierende Video bei deutlich geringerer Dateigröße eine wesentlich höhere visuelle Qualität haben. Selbst wenn es bei der Wiedergabe wieder hochskaliert wird, kann das Ergebnis besser sein, als das Originalvideo in voller Auflösung zu codieren und die Qualitätseinbußen hinzunehmen, die zum Erreichen der gewünschten Dateigröße nötig wären.

### Reduzierte Framerate

Ebenso können Sie Frames vollständig aus dem Video entfernen und die Framerate entsprechend senken. Das hat zwei Vorteile: Das Video wird insgesamt kleiner, und durch die geringere Größe kann die Bewegungskompensation noch wirksamer arbeiten. Statt beispielsweise Bewegungsunterschiede zwischen zwei Frames mit einer Verschiebung von zwei Pixeln zu berechnen, könnte das Überspringen jedes zweiten Frames zu einem Unterschied von vier Pixeln führen. So lässt sich die gesamte Kamerabewegung mit weniger Residual-Frames darstellen.

Die absolute Mindestframerate, bei der das menschliche Auge den Videoinhalt noch als Bewegung wahrnimmt, liegt bei etwa 12 Frames pro Sekunde. Darunter wirkt ein Video wie eine Folge von Standbildern. Kinofilm hat üblicherweise 24 Frames pro Sekunde, Fernsehen in Standardauflösung etwa 30 Frames pro Sekunde (etwas weniger, aber ungefähr diesen Wert) und hochauflösendes Fernsehen zwischen 24 und 60 Frames pro Sekunde. Ab 24 FPS wird die Bewegung im Allgemeinen als ausreichend flüssig wahrgenommen. Je nach Bedarf sind 30 oder 60 FPS ein guter Zielwert.

Letztlich entscheiden allein Sie und/oder Ihr Designteam, welche Kompromisse Sie eingehen können.

## Einzelheiten zu den Codecs

### AV1

Der Codec **AOMedia Video 1** (**AV1**) ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Er erreicht höhere Datenkomprimierungsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50 % höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und sowohl für die Verwendung mit dem Element {{HTMLElement("video")}} als auch mit [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **Main**, **High** und **Professional**, die zunehmend höhere Farbtiefen und weitere Arten von Chroma-Subsampling unterstützen. Darüber hinaus sind mehrere **Levels** festgelegt, die jeweils Grenzen für verschiedene Videoeigenschaften definieren. Dazu gehören die Frame-Abmessungen, die Bildfläche in Pixeln, Anzeige- und Decodierraten, durchschnittliche und maximale Bitraten sowie die Anzahl der beim Codieren und Decodieren verwendeten Kacheln und Kachelspalten.

AV1 Level 2.0 erlaubt beispielsweise eine maximale Frame-Breite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln. Die maximale Frame-Fläche beträgt jedoch 147.456 Pixel, sodass ein Video mit 2048 × 1152 Pixeln auf Level 2.0 tatsächlich nicht möglich ist. Zumindest Firefox und Chrome ignorieren die Levels derzeit allerdings bei der Softwaredecodierung: Der Decoder versucht, das Video mit den vorgegebenen Einstellungen so gut wie möglich wiederzugeben. Im Interesse der künftigen Kompatibilität sollten Sie dennoch innerhalb der Grenzen des gewählten Levels bleiben.

AV1 wird von allen Browsern unterstützt. In Safari beschränkt sich die Unterstützung jedoch auf Geräte mit einem Hardwaredecoder, also M3-MacBooks und neuere Modelle, das iPhone 15 Pro sowie das iPhone 16 und neuere Modelle. Viele Mobil- und Desktopgeräte verfügen über Hardwaredecoder. Damit ist AV1 eine gute Wahl für die Bereitstellung von Videos im Web, sofern Sie für ältere Apple-Geräte eine Alternative anbieten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Abhängig vom Video-Level; das theoretische Maximum liegt bei 800 Mbit/s auf Level 6.3.
        </p>
        <p>
          Die <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Level-Tabellen</a
          > der AV1-Spezifikation beschreiben die maximalen Auflösungen und Raten für jedes Level.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>
        Abhängig vom Level; Level 2.0 erlaubt beispielsweise maximal 30 FPS, Level 6.3 bis zu 120 FPS.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>
        Von 8 × 8 bis 65.535 × 65.535 Pixel; jede Abmessung kann einen beliebigen Wert innerhalb dieses Bereichs annehmen.
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Subsampling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Main</th>
              <td>8 oder 10</td>
              <td>4:0:0 (Graustufen) oder 4:2:0</td>
            </tr>
            <tr>
              <th scope="row">High</th>
              <td>8 oder 10</td>
              <td>4:0:0 (Graustufen), 4:2:0 oder 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Professional</th>
              <td>8, 10 oder 12</td>
              <td>4:0:0 (Graustufen), 4:2:0, 4:2:2 oder 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Firefox Android</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AV1-Unterstützung</th>
              <td>70</td>
              <td>121</td>
              <td>67</td>
              <td>113</td>
              <td>57</td>
              <td>17<sup>*</sup></td>
            </tr>
          </tbody>
        </table>
        <p>
          <sup>*</sup> Safari unterstützt AV1 auf M3-MacBooks und neueren Modellen, dem iPhone 15 Pro sowie dem iPhone 16 und neueren Modellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td><a href="https://aomedia.org/">Alliance for Open Media</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf"
          >https://aomediacodec.github.io/av1-spec/av1-spec.pdf</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Lizenzgebührenfrei, offener Standard</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

Der Standard **Advanced Video Coding** (**AVC**) aus der MPEG-4-Spezifikationsfamilie wird durch die inhaltlich identischen Spezifikationen ITU H.264 und MPEG-4 Part 10 festgelegt. Dieser auf Bewegungskompensation basierende Codec ist heute für unterschiedlichste Medien weit verbreitet, darunter Fernsehübertragungen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und Blu-ray-Discs.

AVC ist äußerst flexibel und bietet mehrere Profile mit unterschiedlichen Fähigkeiten. Das Constrained Baseline Profile ist beispielsweise für Videokonferenzen und mobile Anwendungen ausgelegt und benötigt weniger Bandbreite als das Main Profile (das in einigen Regionen für digitales Fernsehen in Standardauflösung verwendet wird) oder das High Profile (das für Videos auf Blu-ray-Discs eingesetzt wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chroma-Subsampling. Das High 10 Profile unterstützt zusätzlich 10-Bit-Farben; erweiterte Varianten von High 10 bieten außerdem 4:2:2- und 4:4:4-Chroma-Subsampling.

AVC besitzt zudem besondere Funktionen wie die Unterstützung mehrerer Ansichten derselben Szene (Multiview Video Coding). Damit lassen sich unter anderem stereoskopische Videos erstellen.

AVC ist allerdings ein proprietäres Format, dessen Technologien durch zahlreiche Patente unterschiedlicher Rechteinhaber geschützt sind. Für die kommerzielle Nutzung von AVC-Medien ist eine Lizenz erforderlich. Der Patentpool von Via LA erhebt jedoch keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format, solange die Videos für Endnutzer kostenlos sind.

Implementierungen von WebRTC außerhalb von Webbrowsern – also alle Implementierungen ohne JavaScript-APIs – _müssen_ AVC als Codec für WebRTC-Anrufe unterstützen. Webbrowser sind dazu nicht verpflichtet, einige tun es aber.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel, und viele Plattformen unterstützen die hardwarebeschleunigte Codierung und Decodierung von AVC-Medien. Beachten Sie dennoch die [Lizenzanforderungen](https://www.via-la.com/licensing-programs/avc-h-264/), bevor Sie AVC für Ihr Projekt auswählen!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Abhängig vom Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>Abhängig vom Level; bis zu 300 FPS sind möglich.</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >; innerhalb eines Bildes können jedoch verlustfreie Makroblöcke erzeugt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>Bis zu 8.192 × 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>Einige häufig verwendete oder besonders interessante Profile:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Subsampling</th>
            </tr>
            <tr>
              <td>Constrained Baseline (CBP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Baseline (BP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Extended (XP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main (MP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>High (HiP)</td>
              <td>8</td>
              <td>4:0:0 (Graustufen) und 4:2:0</td>
            </tr>
            <tr>
              <td>Progressive High (ProHiP)</td>
              <td>8</td>
              <td>4:0:0 (Graustufen) und 4:2:0</td>
            </tr>
            <tr>
              <td>High 10 (Hi10P)</td>
              <td>8 bis 10</td>
              <td>4:0:0 (Graustufen) und 4:2:0</td>
            </tr>
            <tr>
              <td>High 4:2:2 (Hi422P)</td>
              <td>8 bis 10</td>
              <td>4:0:0 (Graustufen), 4:2:0 und 4:2:2</td>
            </tr>
            <tr>
              <td>High 4:4:4 Predictive</td>
              <td>8 bis 14</td>
              <td>4:0:0 (Graustufen), 4:2:0, 4:2:2 und 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>
        Ja; <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder
        Advanced HDR/SL-HDR; beide sind Teil von ATSC.
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Um Patentprobleme zu vermeiden, hängt die AVC-Unterstützung in Firefox
          von integrierten oder vorinstallierten Codecs des Betriebssystems
          für AVC und dessen Container ab.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a
          href="https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding.html"
          >https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding.html</a
        ><br /><a href="https://www.itu.int/rec/T-REC-H.264"
          >https://www.itu.int/rec/T-REC-H.264</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär und durch zahlreiche Patente geschützt. Die kommerzielle
        Nutzung <a href="https://www.via-la.com/licensing-programs/avc-h-264/"
          >erfordert eine Lizenz</a
        >. Beachten Sie, dass mehrere Patentpools relevant sein können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der Codec **H.263** der ITU wurde vor allem für Situationen mit geringer Bandbreite entwickelt. Sein Schwerpunkt liegt insbesondere auf Videokonferenzen über öffentliche Telefonnetze (PSTN), {{Glossary("RTSP", "RTSP")}} und SIP-Systeme (IP-basierte Videokonferenzen). Obwohl er für Netzwerke mit geringer Bandbreite optimiert ist, beansprucht er die CPU recht stark und liefert auf leistungsschwächeren Computern möglicherweise keine ausreichende Leistung. Das Datenformat ähnelt dem von MPEG-4 Part 2.

H.263 war im Web nie weit verbreitet. Varianten davon dienten als Grundlage für andere proprietäre Formate wie Flash Video oder den Sorenson-Codec. Allerdings hat keiner der großen Browser jemals standardmäßig H.263 unterstützt. Bestimmte Medien-Plugins ermöglichten die Wiedergabe von H.263-Medien.

Anders als die meisten Codecs definiert H.263 grundlegende Eigenschaften eines codierten Videos anhand der maximalen Bitrate pro Frame (Bild), auch **BPPmaxKb** genannt. Beim Codieren wird ein Wert für BPPmaxKb gewählt, den kein Frame überschreiten darf. Die endgültige Bitrate hängt von diesem Wert, der Framerate, der Komprimierung sowie der gewählten Auflösung und dem Blockformat ab.

H.263 wurde von H.264 abgelöst und gilt daher als älteres Medienformat, das Sie nach Möglichkeit nicht mehr verwenden sollten. Ein sinnvoller Grund für den Einsatz in neuen Projekten besteht nur dann, wenn Sie sehr alte Geräte unterstützen müssen, für die H.263 die beste Wahl ist.

H.263 ist ein proprietäres Format. [Patente](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) daran halten zahlreiche Organisationen und Unternehmen, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom und Qualcomm. Zur Verwendung von H.263 sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen einzuholen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbegrenzt, üblicherweise jedoch unter 64 kbit/s</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>
        <p>Bis zu 1408 × 1152 Pixel.</p>
        <p>
          Version 1 von H.263 legt eine Reihe unterstützter Bildgrößen fest.
          Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) legt
        sowohl die Frame-Größe in Pixeln als auch die Anzahl der Zeilen mit
        Luminanz- und Chrominanz-Samples pro Frame fest.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">H.263-Unterstützung</th>
              <td>Nein</td>
              <td>Nein</td>
              <td>Nein</td>
              <td>Nein</td>
              <td>Nein</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td><a href="https://www.itu.int/">ITU</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.263/"
          >https://www.itu.int/rec/T-REC-H.263/</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; eine oder mehrere entsprechende Lizenzen sind erforderlich.
        Beachten Sie, dass mehrere Patentpools relevant sein können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der Codec **High Efficiency Video Coding** (**HEVC**) ist sowohl durch **H.265** der ITU als auch durch MPEG-H Part 2 (den noch in Entwicklung befindlichen Nachfolger von MPEG-4) definiert. HEVC wurde für die effiziente Codierung und Decodierung von Videos einschließlich sehr hoher Auflösungen wie 8K entwickelt. Seine Struktur ist speziell darauf ausgelegt, dass Software moderne Prozessoren nutzen kann. Theoretisch kann HEVC bei vergleichbarer Bildqualität Dateien erzeugen, die nur halb so groß sind wie mit [AVC](#avc_h.264) komprimierte Dateien.

Jede Coding Tree Unit (CTU) – vergleichbar mit den Makroblöcken früherer Codecs – besteht beispielsweise aus einer Baumstruktur von Luma-Werten für jedes Sample und einer Baumstruktur von Chroma-Werten für jedes Chroma-Sample derselben Coding Tree Unit sowie allen erforderlichen Syntaxelementen. Diese Struktur lässt sich gut auf mehreren Prozessorkernen verarbeiten.

Eine interessante Eigenschaft von HEVC ist, dass das Main Profile nur 8 Bit pro Farbkomponente mit 4:2:0-Chroma-Subsampling unterstützt. Interessant ist auch die besondere Behandlung von 4:4:4-Video: Anstelle von Luma-Samples, die die Bildpixel in Graustufen darstellen, und Cb- und Cr-Samples, die die Farbgebung dieser Graustufen bestimmen, werden die drei Kanäle als drei monochrome Bilder behandelt – eines für jede Farbe. Beim Rendern werden sie zu einem Vollfarbbild kombiniert.

HEVC ist ein proprietäres Format und durch mehrere Patente geschützt. Die Lizenzierung wird [von Via LA verwaltet](https://www.via-la.com/licensing-programs/hevc-vvc/); Gebühren werden Entwicklern und nicht den Produzenten oder Vertreibern von Inhalten berechnet. Prüfen Sie unbedingt die aktuellen Lizenzbedingungen und Anforderungen, bevor Sie entscheiden, ob Sie HEVC in Ihrer App oder auf Ihrer Website verwenden möchten!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800.000 kbit/s</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>Abhängig vom Level; bis zu 300 FPS sind möglich.</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>Von 128 × 96 bis 8.192 × 4.320 Pixel; abhängig von Profil und Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Die folgenden Angaben beziehen sich auf die wichtigsten Profile.
          Weitere verfügbare Profile sind hier nicht aufgeführt.
        </p>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Subsampling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 10</td>
              <td>8 bis 10</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 12</td>
              <td>8 bis 12</td>
              <td>4:0:0 und 4:2:0</td>
            </tr>
            <tr>
              <td>Main 4:2:2 10</td>
              <td>8 bis 10</td>
              <td>4:0:0, 4:2:0 und 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:2:2 12</td>
              <td>8 bis 12</td>
              <td>4:0:0, 4:2:0 und 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:4:4</td>
              <td>8</td>
              <td>4:0:0, 4:2:0, 4:2:2 und 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 10</td>
              <td>8 bis 10</td>
              <td>4:0:0, 4:2:0, 4:2:2 und 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 12</td>
              <td>8 bis 12</td>
              <td>4:0:0, 4:2:0, 4:2:2 und 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 16 Intra</td>
              <td>8 bis 16</td>
              <td>4:0:0, 4:2:0, 4:2:2 und 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">HEVC-/H.265-Unterstützung</th>
              <td>107</td>
              <td>18</td>
              <td>120</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome unterstützt HEVC auf Geräten mit Hardwareunterstützung unter Windows 8+, Linux und ChromeOS sowie auf allen Geräten unter macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC auf Geräten mit Hardwareunterstützung unter Windows 10 1709+, wenn die
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind. Auf anderen Plattformen entspricht die Unterstützung der von Chrome. Edge (Legacy) unterstützt HEVC nur auf Geräten mit Hardwaredecoder.
        </p>
        <p>Firefox aktiviert HEVC unter:
          <ul>
            <li>Windows ab Firefox 134 über Hardware (auf unterstützten Geräten, mit demselben Gerätebereich wie Edge) oder Software (unter Windows müssen Nutzer eine kostenpflichtige Erweiterung erwerben und installieren).</li>
            <li>macOS ab Firefox 136 über Hardware oder Software.</li>
            <li>Linux ab Firefox 137 über Hardware oder Software (mittels systemseitigem ffmpeg).</li>
            <li>Android ab Firefox 137 ausschließlich über Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere Chromium-basierte Browser unterstützen HEVC im selben Umfang wie Chrome.</p>
        <p>Safari unterstützt HEVC auf allen Geräten mit macOS High Sierra oder neuer.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">HEVC-/H.265-Unterstützung</th>
              <td>136</td>
              <td>136</td>
              <td>Nein</td>
              <td>121</td>
              <td>Nein</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td>
        <a href="https://www.itu.int/">ITU</a> /
        <a href="https://mpeg.chiariglione.org/">MPEG</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Spezifikationen</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.265"
          >https://www.itu.int/rec/T-REC-H.265</a
        ><br /><a href="https://www.iso.org/standard/69668.html"
          >https://www.iso.org/standard/69668.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; prüfen Sie, ob Sie die
        <a href="https://www.via-la.com/licensing-programs/hevc-vvc/"
          >Lizenzanforderungen</a
        > erfüllen. Beachten Sie, dass mehrere Patentpools relevant sein können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das Format **MPEG-4 Video Elemental Stream** (**MP4V-ES**) ist Teil des Standards MPEG-4 Part 2 Visual. MPEG-4-Part-2-Video wird im Allgemeinen kaum verwendet, weil es gegenüber anderen Codecs keine überzeugenden Vorteile bietet. MP4V-ES kommt jedoch teilweise auf Mobilgeräten zum Einsatz. MP4V ist im Wesentlichen eine H.263-Codierung in einem MPEG-4-Container.

Es dient hauptsächlich dazu, MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Sitzung zu streamen. MP4V-ES wird aber auch verwendet, um MPEG-4-Audio und -Video über eine Mobilfunkverbindung mittels [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie sollten dieses Format mit ziemlicher Sicherheit nicht verwenden: Keiner der großen Browser unterstützt es in nennenswertem Umfang, und es ist weitgehend veraltet. Entsprechende Dateien sollten die Erweiterung `.mp4v` haben, werden jedoch manchmal fälschlich als `.mp4` bezeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Von 5 kbit/s bis 1 Gbit/s und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>Keine feste Grenze; nur durch die Datenrate begrenzt</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>Bis zu 4.096 × 4.096 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCrCb mit Chroma-Subsampling (4:2:0, 4:2:2 und 4:4:4); bis zu
        12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MP4V-ES-Unterstützung</th>
              <td>Nein</td>
              <td>Nein</td>
              <td>Ja</td>
              <td>Nein</td>
              <td>Nein</td>
            </tr>
          </tbody>
        </table>
        <p>
          Firefox unterstützt MP4V-ES nur in
          <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>-Containern.
        </p>
        <p>Chrome unterstützt MP4V-ES nicht; ChromeOS hingegen schon.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6416)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Sämtliche Patente im MPEG-4-Visual-Patentpool von Via LA sind bis zum 19. Juli 2026 ausgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde Anfang der 1990er-Jahre vorgestellt. Anders als die späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG entwickelt, ohne Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Videos wiedergeben kann, ist das Format mit zahlreichen Software- und Hardwaregeräten kompatibel. Für MPEG-1-Video bestehen keine aktiven Patente mehr; es kann daher ohne lizenzrechtliche Bedenken verwendet werden. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne Plugin. Da Plugins in Webbrowsern nicht mehr empfohlen werden, sind entsprechende Lösungen in der Regel nicht mehr verfügbar. Damit ist MPEG-1 für Websites und Webanwendungen eine schlechte Wahl.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1,5 Mbit/s</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>
        23,976 FPS, 24 FPS, 25 FPS, 29,97 FPS, 30 FPS, 50 FPS, 59,94 FPS und
        60 FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>Bis zu 4.095 × 4.095 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0-Chroma-Subsampling und bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-1-Unterstützung</th>
              <td>Nein</td>
              <td>Nein</td>
              <td>Nein</td>
              <td>Nein</td>
              <td>Ja</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>MPEG</td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.iso.org/standard/22411.html"
          >https://www.iso.org/standard/22411.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; da jedoch alle Patente ausgelaufen sind, kann MPEG-1 frei
        verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das durch die MPEG-2-Spezifikation definierte Videoformat und wird gelegentlich auch mit seiner {{Glossary("ITU", "ITU")}}-Bezeichnung H.262 bezeichnet. Es ähnelt MPEG-1-Video stark – tatsächlich kann jeder MPEG-2-Player ohne zusätzliche Anpassungen auch MPEG-1 wiedergeben –, wurde aber um höhere Bitraten und verbesserte Codierungsverfahren erweitert.

MPEG-2 sollte Fernsehen in Standardauflösung komprimieren können und unterstützt deshalb auch Interlaced-Video. Komprimierungsrate und Qualität des resultierenden Videos erfüllten die Anforderungen so gut, dass MPEG-2 zum wichtigsten Videocodec für DVD-Videomedien wurde.

Für MPEG-2 sind mehrere Profile mit unterschiedlichen Fähigkeiten verfügbar. Jedes Profil ist wiederum in vier Levels erhältlich, die höhere Werte für Eigenschaften wie Framerate, Auflösung und Bitrate ermöglichen. Die meisten Profile verwenden Y'CbCr mit 4:2:0-Chroma-Subsampling; fortgeschrittenere Profile unterstützen auch 4:2:2. Die vier Levels erlauben jeweils größere Frame-Abmessungen und höhere Bitraten. Die in Nordamerika verwendete Fernsehspezifikation [ATSC](https://en.wikipedia.org/wiki/ATSC_standards) unterstützt beispielsweise hochauflösendes MPEG-2-Video mit dem Main Profile auf dem High Level: Damit sind 4:2:0-Videos sowohl mit 1920 × 1080 (30 FPS) als auch mit 1280 × 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbit/s möglich.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne Plugin. Da Plugins in Webbrowsern nicht mehr empfohlen werden, sind entsprechende Lösungen in der Regel nicht mehr verfügbar. Damit ist MPEG-2 für Websites und Webanwendungen eine schlechte Wahl.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 100 Mbit/s; abhängig von Level und Profil</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Abk.</th>
              <th scope="col">Level-Name</th>
              <th scope="col">Unterstützte Framerates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>23,9; 24; 25; 29,97; 30</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>23,976; 24; 25; 29,97; 30</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>23,976; 24; 26; 29,97; 30; 50; 59,94; 60</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>23,976; 24; 26; 29,97; 30; 50; 59,94; 60</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Abk.</th>
              <th scope="col">Level-Name</th>
              <th scope="col">Maximale Frame-Größe</th>
            </tr>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>352 × 288 Pixel</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>720 × 576 Pixel</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>1440 × 1152 Pixel</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>1920 × 1152 Pixel</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0-Chroma-Subsampling in den meisten Profilen; die
        Profile „High“ und „4:2:2“ unterstützen zusätzlich
        4:2:2-Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-2-Unterstützung</th>
              <td>Nein</td>
              <td>Nein</td>
              <td>Nein</td>
              <td>Nein</td>
              <td>Ja</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>, MPEG-TS (MPEG Transport Stream), <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>, <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> / <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.262">https://www.itu.int/rec/T-REC-H.262</a><br /><a href="https://www.iso.org/standard/61152.html">https://www.iso.org/standard/61152.html</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; mit Ausnahme von Malaysia sind weltweit alle Patente ausgelaufen (Stand: 1. Oktober 2024). Außerhalb Malaysias kann MPEG-2 daher frei verwendet werden.
        Die Patente werden von <a href="https://www.via-la.com/licensing-programs/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er wird nur noch äußerst selten verwendet, und die Browserunterstützung wird entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)** wurde von [Xiph.org](https://xiph.org/) entwickelt und ist ein offener, frei nutzbarer Videocodec, für den keine Lizenzgebühren oder Lizenzen erforderlich sind. In Qualität und Komprimierungsrate ist Theora mit MPEG-4 Part 2 Visual und AVC vergleichbar und damit eine sehr gute, wenn auch nicht führende Wahl für die Videocodierung. Dass der Codec keine lizenzrechtlichen Probleme mit sich bringt und vergleichsweise wenig CPU-Leistung benötigt, macht ihn für viele Software- und Webprojekte attraktiv. Der geringe CPU-Bedarf ist besonders nützlich, da für Theora keine Hardwaredecoder verfügbar sind.

Theora basierte ursprünglich auf dem Codec VC3 von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org übergeben, wo daraus der Theora-Standard entwickelt wurde.

Ein Nachteil von Theora ist, dass der Codec nur 8 Bit pro Farbkomponente unterstützt. 10 Bit oder mehr zur Vermeidung von Color Banding sind nicht möglich. Allerdings sind 8 Bit pro Komponente auch heute noch das am häufigsten verwendete Farbformat, sodass dies in den meisten Fällen nur eine geringe Einschränkung darstellt. Zudem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil ist jedoch die fehlende Unterstützung durch Safari: Damit steht Theora weder unter macOS noch auf den vielen Millionen iPhones und iPads zur Verfügung.

Das [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) enthält weitere Einzelheiten zu Theora und dem verwendeten Ogg-Containerformat.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbit/s</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>
        Beliebig; jeder Wert außer null wird unterstützt. Die Framerate wird
        als 32-Bit-Zähler und 32-Bit-Nenner angegeben, sodass auch
        nicht-ganzzahlige Framerates möglich sind.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>
        Beliebige Kombinationen aus Breite und Höhe bis zu 1.048.560 × 1.048.560 Pixel
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0-, 4:2:2- oder 4:4:4-Chroma-Subsampling bei 8 Bit
        pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Theora unterstützt zwar keine variable Framerate (VFR) innerhalb
          eines einzelnen Streams, doch mehrere Streams können in einer Datei
          aneinandergereiht werden. Jeder Stream kann eine eigene Framerate
          besitzen, wodurch sich im Wesentlichen VFR erreichen lässt.
          Häufige Änderungen der Framerate sind auf diese Weise allerdings
          unpraktisch.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Theora-Unterstützung</th>
              <td>3 bis 121</td>
              <td>12 bis 121</td>
              <td>3.5 bis 126</td>
              <td>10.5 bis 107</td>
              <td>Nein</td>
            </tr>
          </tbody>
        </table>
        <p>
          Edge unterstützt Theora mit dem optionalen Add-on
          <a
            href="https://apps.microsoft.com/detail/9n5tdp8vcmhs"
            >Web Media Extensions</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td><a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td><a href="https://www.xiph.org/">Xiph.org</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.theora.org/doc/">https://www.theora.org/doc/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und frei von Lizenzgebühren oder sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der Codec **Video Processor 8** (**VP8**) wurde ursprünglich von On2 Technologies entwickelt. Nach der Übernahme von On2 veröffentlichte Google VP8 als offenes und lizenzgebührenfreies Videoformat und sagte zu, die einschlägigen Patente nicht durchzusetzen. In Qualität und Komprimierungsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Sofern der Browser dies unterstützt, erlaubt VP8 Videos mit Alphakanal. Dadurch kann der Hintergrund entsprechend dem Alphawert jedes Pixels in unterschiedlichem Maß durch das Video hindurch sichtbar sein. Safari unterstützt keine Alphatransparenz in VP8-Videos.

VP8 wird in HTML-Inhalten von Browsern gut unterstützt, insbesondere in [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, sofern keine Level-Grenzen durchgesetzt werden</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>Bis zu 16.384 × 16.384 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>Y'CbCr mit 4:2:0-Chroma-Subsampling bei 8 Bit pro Komponente</td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari. Safari unterstützt jedoch keine Alphatransparenz.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja; VP8 ist einer der von der Spezifikation vorgeschriebenen Codecs für WebRTC.</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und frei von Lizenzgebühren oder sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren, von Google entwickelten VP8-Standards.
Wie VP8 ist VP9 vollständig offen und lizenzgebührenfrei.
Seine Codierungs- und Decodierungsleistung ist mit der von AVC vergleichbar oder etwas besser, bei höherer Qualität.
Die Qualität von mit VP9 codierten Videos ist bei ähnlichen Bitraten mit der von HEVC vergleichbar.

Das Main Profile von VP9 unterstützt nur 8-Bit-Farbtiefe mit 4:2:0-Chroma-Subsampling. Andere Profile bieten jedoch höhere Farbtiefen und sämtliche Chroma-Subsampling-Modi.
VP9 unterstützt mehrere HDR-Varianten und lässt bei der Auswahl von Framerates, Seitenverhältnissen und Frame-Größen große Freiheit.

VP9 wird von Browsern breit unterstützt; Hardwareimplementierungen des Codecs sind ebenfalls recht verbreitet.
VP9 ist einer der beiden von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) vorgeschriebenen Videocodecs (der andere ist [VP8](#vp8)).
Beachten Sie jedoch, dass Safari in diesem Format keine Alphatransparenz unterstützt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, sofern keine Level-Grenzen durchgesetzt werden</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framerates</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frame-Größen</th>
      <td>Bis zu 65.536 × 65.536 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Subsampling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Profile 0</th>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 1</th>
              <td>8</td>
              <td>4:2:0, 4:2:2 und 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Profile 2</th>
              <td>10 bis 12</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 3</th>
              <td>10 bis 12</td>
              <td>4:2:0, 4:2:2 und f:4:4</td>
            </tr>
          </tbody>
        </table>
        <p>
          Unterstützte Farbräume:
          <a href="https://en.wikipedia.org/wiki/Rec._601">Rec. 601</a>,
          <a href="https://en.wikipedia.org/wiki/Rec._709">Rec. 709</a>,
          <a href="https://en.wikipedia.org/wiki/Rec._2020">Rec. 2020</a>,
          <a href="https://en.wikipedia.org/wiki/SMPTE_C">SMPTE C</a>, SMPTE-240M
          (veraltet; durch Rec. 709 ersetzt) und
          <a href="https://en.wikipedia.org/wiki/SRGB">sRGB</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>
        Ja; HDR10+, <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">HLG</a> und
        <a href="https://en.wikipedia.org/wiki/Perceptual_Quantizer">PQ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Framerate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari. Safari unterstützt jedoch keine Alphatransparenz.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} / <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/betreuende Organisation</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.webmproject.org/vp9/">https://www.webmproject.org/vp9/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und frei von Lizenzgebühren oder sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Einen Videocodec auswählen

Die Entscheidung für einen oder mehrere Codecs beginnt mit einigen Fragen:

- Möchten Sie ein offenes Format verwenden, oder kommen auch proprietäre Formate infrage?
- Haben Sie die Ressourcen, jedes Video in mehr als einem Format bereitzustellen? Eine alternative Version vereinfacht die Entscheidung erheblich.
- Gibt es Browser, für die Sie auf Kompatibilität verzichten können?
- Wie alt ist die älteste Browserversion, die Sie unterstützen müssen? Soll Ihr Angebot beispielsweise in allen Browsern funktionieren, die in den vergangenen fünf Jahren veröffentlicht wurden, oder nur in denen des vergangenen Jahres?

In den folgenden Abschnitten empfehlen wir Codecs für bestimmte Anwendungsfälle. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der am besten geeignete Codec proprietär ist oder Lizenzgebühren anfallen können, nennen wir zwei Möglichkeiten: zuerst eine offene, lizenzgebührenfreie Option und danach die proprietäre.

Wenn Sie von jedem Video nur eine Version anbieten können, wählen Sie das Format, das Ihren Anforderungen am besten entspricht. Die erste Empfehlung bietet eine gute Kombination aus Qualität, Leistung und Kompatibilität. Die zweite Option ist am breitesten kompatibel, geht dafür aber mit gewissen Nachteilen bei Qualität, Leistung und/oder Größe einher.

### Empfehlungen für das Web

Betrachten wir zunächst die besten Möglichkeiten für Videos auf typischen Websites, etwa Blogs, Informationsseiten oder Websites kleiner Unternehmen, die Videos zur Produktvorstellung einsetzen, bei denen die Videos aber nicht selbst das Produkt sind.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container mit dem Videocodec **[AV1](#av1)** und dem Audiocodec **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**. Alle diese Formate sind offen, lizenzgebührenfrei und werden im Allgemeinen gut unterstützt. Eine Ausnahme ist Safari auf älteren Apple-Geräten.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
   </video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container mit dem Videocodec **[AVC](#avc_h.264)** (**H.264**), idealerweise zusammen mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audiocodec. Ein MP4-Container mit AVC und AAC wird von allen großen Browsern unterstützt und bietet für die meisten Anwendungsfälle eine gute Qualität. Prüfen Sie allerdings unbedingt, ob Sie die Lizenzanforderungen erfüllen.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das Element {{HTMLElement("video")}} benötigt ein schließendes `</video>`-Tag, unabhängig davon, ob es {{HTMLElement("source")}}-Elemente enthält.

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Derzeit sind in Webbrowsern keine allgemein verfügbaren verlustfreien oder auch nur annähernd verlustfreien Videocodecs vorhanden. Der Grund ist einfach: Videos sind riesig. Verlustfreie Komprimierung ist per Definition weniger effektiv als verlustbehaftete. Unkomprimiertes 1080p-Video (1920 × 1080 Pixel) mit 4:2:0-Chroma-Subsampling benötigt beispielsweise mindestens 1,5 Gbit/s. Verlustfreie Komprimierung wie FFV1 (das Webbrowser nicht unterstützen) könnte diesen Wert je nach Inhalt möglicherweise auf etwa 600 Mbit/s senken. Das ist immer noch eine gewaltige Datenmenge, die jede Sekunde über eine Verbindung übertragen werden müsste, und derzeit für praktische Anwendungen nicht realistisch.

Das gilt, obwohl einige verlustbehaftete Codecs auch einen verlustfreien Modus bieten: Diese Modi sind in aktuellen Webbrowsern nicht implementiert. Die beste Möglichkeit besteht darin, einen hochwertigen Codec mit verlustbehafteter Komprimierung zu wählen und ihn so zu konfigurieren, dass er möglichst wenig komprimiert. Eine Möglichkeit dafür ist die Einstellung „schnelle“ Komprimierung, die naturgemäß einen geringeren Komprimierungsgrad erreicht.

#### Video extern vorbereiten

Um Videos außerhalb Ihrer Website oder App für die Archivierung vorzubereiten, verwenden Sie ein Programm, das die ursprünglichen unkomprimierten Videodaten komprimiert. Das kostenlose Programm [x264](https://www.videolan.org/developers/x264.html) kann beispielsweise Videos mit einer sehr hohen Bitrate im [AVC](#avc_h.264)-Format codieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Andere Codecs können bei erheblicher Videokomprimierung zwar im besten Fall eine höhere Qualität liefern. Ihre Encoder sind jedoch häufig so langsam, dass eine nahezu verlustfreie Codierung mit dieser Komprimierung bei ungefähr gleicher Gesamtqualität wesentlich schneller ist.

#### Video aufzeichnen

Angesichts der Grenzen, wie nahe Sie an eine verlustfreie Aufzeichnung herankommen können, sollten Sie [AVC](#avc_h.264) oder [AV1](#av1) in Betracht ziehen. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, könnten Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt mit folgendem Code erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der [AV1](#av1)-Video mit BT.2100 HDR, 12-Bit-Farbe und 4:4:4-Chroma-Subsampling sowie verlustfreies Audio mit [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) aufzeichnet. Die resultierende Datei verwendet für Video- und Audiospuren zusammen eine Bitrate von höchstens 800 Mbit/s. Wahrscheinlich müssen Sie diese Werte an die Hardwareleistung, Ihre Anforderungen und die gewählten Codecs anpassen. Diese Bitrate ist für eine Netzwerkübertragung offensichtlich nicht praktikabel und dürfte nur lokal verwendet werden.

Wenn wir den Wert des Parameters `codecs` in seine durch Punkte getrennten Bestandteile zerlegen, ergibt sich Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                 |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Der vierstellige Code (4CC), der den Codec [AV1](#av1) kennzeichnet.                                                                                                                                                                                                         |
| `2`    | Das Profil. Der Wert 2 bezeichnet das Professional Profile. Der Wert 1 steht für das High Profile, der Wert 0 für das Main Profile.                                                                                                                                          |
| `19H`  | Level und Tier. Dieser Wert stammt aus der Tabelle in [Abschnitt A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und bezeichnet das High Tier von Level 6.3.                                                                                     |
| `12`   | Die Farbtiefe. Sie beträgt hier 12 Bit pro Komponente. Weitere mögliche Werte sind 8 und 10; 12 bietet die präziseste Farbdarstellung in AV1.                                                                                                                                |
| `0`    | Das Flag für den Monochrom-Modus. Bei 1 würden keine Chroma-Ebenen aufgezeichnet; alle Daten wären ausschließlich Luma-Daten, wodurch ein Graustufenbild entstünde. Wir haben 0 angegeben, weil wir Farbe möchten.                                                           |
| `000`  | Der Chroma-Subsampling-Modus aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) der AV1-Spezifikation. Zusammen mit dem Monochrom-Wert 0 bedeutet 000, dass wir 4:4:4-Chroma-Subsampling und damit keinen Verlust von Farbdaten möchten. |
| `09`   | Die zu verwendenden Primärfarben. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) der AV1-Spezifikation. 9 bedeutet, dass wir die für HDR verwendeten BT.2020-Farben nutzen möchten.                               |
| `16`   | Die zu verwendenden Übertragungscharakteristiken. Auch dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). 16 bedeutet, dass wir die Charakteristiken für BT.2100-PQ-Farbe verwenden möchten.                         |
| `09`   | Die zu verwendenden Matrixkoeffizienten, ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Der Wert 9 legt BT.2020 mit variabler Luminanz fest; dies wird auch als BT.2010 YbCbCr bezeichnet.                                |
| `1`    | Das „Full Range“-Flag des Videos. Der Wert 1 bedeutet, dass der gesamte Farbbereich verwendet werden soll.                                                                                                                                                                   |

Die Dokumentation der gewählten Codecs enthält wahrscheinlich Informationen, die Ihnen beim Zusammenstellen des Parameters `codecs` helfen.

## Siehe auch

- [Leitfaden zu Audiocodecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Probleme bei der Medienunterstützung in Webinhalten behandeln](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die Parameter „Codecs“ und „Profiles“ für „Bucket“-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: Registrierung von MIME-Typen für 3GPP-Multimediadateien
- {{RFC(4381)}}: Registrierung von MIME-Typen für 3GPP2-Multimediadateien
- {{RFC(4337)}}: Registrierung von MIME-Typen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

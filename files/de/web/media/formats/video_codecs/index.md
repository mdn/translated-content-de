---
title: Web-Video-Codec-Leitfaden
slug: Web/Media/Formats/Video_codecs
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Dieser Leitfaden führt in die Video-Codecs ein, die Sie wahrscheinlich im Web antreffen oder in Betracht ziehen werden, fasst deren Fähigkeiten zusammen und behandelt eventuelle Kompatibilitäts- und Nützlichkeitsprobleme. Zudem erhalten Sie Ratschläge, die Ihnen helfen sollen, den richtigen Codec für die Videos Ihres Projekts auszuwählen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie speichern zu können, geschweige denn, sie über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die zum Speichern unkomprimierter Videos benötigt wird:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in Vollfarbe (4 Bytes pro Pixel) sind 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) belegen.
- Eine Minute HD-Video würde 14,93 GB Speicher benötigen.
- Eine typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz erfordern, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ benötigen.

Nicht nur der benötigte Speicherplatz ist riesig, auch die Netzbandbreite, die zum Übertragen eines solchen unkomprimierten Videos erforderlich wäre, wäre enorm, bei 249 MB/s - Audio und Overhead nicht eingeschlossen. Hier kommen Video-Codecs ins Spiel. Genau wie Audio-Codecs für die Tondaten komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später wieder dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details können verloren gehen; die Menge des Verlustes hängt vom Codec und dessen Konfiguration ab. Als allgemeine Regel gilt jedoch: Je mehr Kompression erreicht wird, desto mehr Detail- und Qualitätsverlust tritt auf. Einige verlustfreie Codecs existieren, aber sie werden typischerweise für die Archivierung und lokale Wiedergabe statt für den Einsatz im Netzwerk verwendet.

## Gängige Codecs

Die folgenden Video-Codecs werden am häufigsten im Web verwendet. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, in dem zusätzliche Details zum Codec, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, beschrieben werden, auf die Sie achten sollten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
      <th scope="col">Vollständiger Codec-Name</th>
      <th scope="col">Container-Support</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#av1">AV1</a></th>
      <td>AOMedia Video 1</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#avc_h.264">AVC (H.264)</a></th>
      <td>Advanced Video Coding</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#h.263">H.263</a></th>
      <td>H.263 Video</td>
      <td><a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#hevc_h.265">HEVC (H.265)</a></th>
      <td>High Efficiency Video Coding</td>
      <td><a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#mp4v-es">MP4V-ES</a></th>
      <td>MPEG-4 Video Elemental Stream</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-1_part_2_video">MPEG-1</a></th>
      <td>MPEG-1 Part 2 Visual</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Part 2 Visual</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#theora">Theora</a> {{deprecated_inline}}</th>
      <td>Theora</td>
      <td><a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp8">VP8</a></th>
      <td>Video Processor 8</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp9">VP9</a></th>
      <td>Video Processor 9</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
  </tbody>
</table>

## Faktoren, die das codierte Video beeinflussen

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des codierten Videos beeinflussen: spezifische Merkmale des Videoformats und -inhalts der Quelle sowie die Eigenschaften und Konfiguration des Codecs, die während der Codierung verwendet werden.

Die einfachste Richtlinie lautet: Alles, was das codierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, wird im Allgemeinen auch die resultierende Datenmenge vergrößern. Es ist somit immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist ein größerer Qualitätsverlust zugunsten einer Reduzierung der Datengröße diesen Verlust wert; in anderen Fällen ist der Qualitätsverlust jedoch nicht akzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Einfluss des Quellvideoformats auf das codierte Ausgangsmaterial

Das Ausmaß, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und dessen Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als einfache Pixel darstellt, hat das ursprüngliche Bildformat keinen Einfluss. Dinge wie Bildrate und offensichtlich Auflösung haben jedoch immer Auswirkungen auf die Ausgangsgröße der Medien.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern oder sind nicht gut darin, scharfe Kanten wiederzugeben, oder neigen dazu, in dunklen Bereichen Details zu verlieren, oder auf zahlreiche andere Möglichkeiten. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Die potenziellen Auswirkungen des Quellvideoformats und dessen Inhalt auf
    die codierte Videoqualität und -größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Einfluss auf die Qualität</th>
      <th scope="col">Einfluss auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Farbtiefe (Bit-Tiefe)</th>
      <td>
        Je höher die Farbbit-Tiefe, desto höher wird die Farbtreue im Video erreicht. Darüber hinaus fördern in stark gesättigten Bildbereichen (d. h. dort, wo Farben rein und intensiv sind, wie ein helles, reines Rot: <code>rgb(255 0 0 / 100%)</code>) Farbtiefen unter 10 Bit pro Komponente (10-Bit-Farbe) das Banding, bei dem Farbverläufe nicht ohne sichtbare Abstufungen dargestellt werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren komprimierten Dateigrößen führen. Der Bestimmungsfaktor ist das verwendete interne Speicherformat für die komprimierten Daten.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst in erster Linie die wahrgenommene Glätte der Bewegung im Bild. Bis zu einem gewissen Punkt wird die Bewegung umso flüssiger und realistischer wahrgenommen, je höher die Bildrate ist. Irgendwann wird jedoch ein Punkt der abnehmenden Renditen erreicht. Siehe <a href="#reduced_frame_rate">Bildrate</a> unten für Details.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird während der Codierung nicht reduziert, führen höhere Bildraten zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Videokompression funktioniert typischerweise, indem sie Bilder vergleicht, feststellt, wo sie sich unterscheiden, und Datensätze erstellt, die genügend Informationen enthalten, um das vorherige Bild zu aktualisieren, um das Aussehen des folgenden Bildes annähernd darzustellen. Je mehr aufeinanderfolgende Frames sich voneinander unterscheiden, desto größer sind diese Unterschiede, und desto weniger effektiv ist die Kompression bei der Vermeidung der Einführung von Artefakten im komprimierten Video.
      </td>
      <td>
        Die durch die Bewegung eingeführte Komplexität führt aufgrund der höheren Anzahl von Unterschieden zwischen den Frames zu größeren Zwischenframes. Aus diesem und anderen Gründen gilt: Je mehr Bewegung in einem Video vorhanden ist, desto größer wird die Ausgabedatei in der Regel sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Körnigkeit im Bild) bringt Variabilität ein. Variabilität erschwert die Kompression im Allgemeinen, was zu einem stärkeren Qualitätsverlust führt, da Details wegfallen müssen, um den gleichen Kompressionsgrad zu erreichen.
      </td>
      <td>
        Je mehr Variabilität - wie Rauschen - im Bild vorhanden ist, desto komplexer ist der Kompressionsprozess und desto weniger Erfolg hat der Algorithmus in der Regel beim Komprimieren des Bildes auf den gleichen Grad. Es sei denn, Sie konfigurieren den Encoder so, dass einige oder alle der durch Rauschen verursachten Variationen ignoriert werden, wird das komprimierte Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video, das in derselben Bildschirmgröße dargestellt wird, kann in der Regel die Originalszene genauer darstellen, abgesehen von den Effekten, die während der Kompression eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es. Dies spielt eine entscheidende Rolle in der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende codierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des von Ihnen verwendeten Encoders und wie er konfiguriert ist. Zusätzlich zu allgemeinen Codec-Optionen kann der Encoder konfiguriert werden, um die Bildrate zu reduzieren, Rauschen zu bereinigen und/oder die gesamte Videoauflösung während der Codierung zu reduzieren.

### Einfluss der Codec-Konfiguration auf das codierte Ausgangsmaterial

Die Algorithmen, die zum Codieren von Video verwendet werden, nutzen typischerweise eine oder mehrere von mehreren allgemeinen Techniken, um ihre Codierung durchzuführen. Im Allgemeinen hat jede Konfigurationsoption, die darauf abzielt, die Ausgabegröße des Videos zu reduzieren, wahrscheinlich negative Auswirkungen auf die Gesamtkapazität des Videos oder führt dazu, dass bestimmte Arten von Artefakten im Video auftreten. Es ist auch möglich, eine verlustfreie Form der Codierung auszuwählen, die zu einer wesentlich größeren codierten Datei führt, jedoch mit perfekter Reproduktion des Originalvideos nach dem Dekodieren.

Darüber hinaus kann jedes Encoder-Programm Unterschiede darin aufweisen, wie es das Quellvideo verarbeitet, wobei Unterschiede in der Ausgabequalität und/oder -größe entstehen.

<table class="standard-table">
  <caption>
    Videoencoder-Konfigurationseffekte auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Einfluss auf die Qualität</th>
      <th scope="col">Einfluss auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Verlustfreie Kompression</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Kompression kann die Gesamtvideogröße nicht annähernd so
        stark reduzieren wie verlustbehaftete Kompression; die resultierenden
        Dateien sind wahrscheinlich immer noch zu groß für den allgemeinen
        Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße treten Artefakte und andere Formen der
        Qualitätsverschlechterung auf, abhängig vom spezifischen Codec und
        davon, wie stark die Kompression ist
      </td>
      <td>
        Je mehr das codierte Video von der Quelle abweichen darf, desto einfacher
        ist es, höhere Kompressionsraten zu erreichen
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr wird das codierte Video
        dem Originalmedium ähneln
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren
        codierten Videodateien; das Ausmaß, in dem dies zutrifft, variiert
        abhängig vom Codec
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich in der Regel mit höheren Bitraten</td>
      <td>Höhere Bitraten führen von Natur aus zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Codieren von Video verfügbar sind, und die Werte, die diesen Optionen zugewiesen werden sollen, variieren nicht nur von einem Codec zum anderen, sondern auch je nach der von Ihnen verwendeten Codierungssoftware. Die Dokumentation, die mit Ihrer Codierungssoftware geliefert wird, hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das codierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Codierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten sichtbare negative Effekte erzeugen. Sobald ein Artefakt aufgetaucht ist, kann es eine Weile bestehen bleiben, aufgrund der Art und Weise, wie Video angezeigt wird. Jedes Bild eines Videos wird durch das Anwenden einer Reihe von Änderungen auf das aktuell sichtbare Bild präsentiert. Dies bedeutet, dass Fehler oder Artefakte sich im Laufe der Zeit potenzieren, was zu Störungen oder anderweitig seltsamen oder unerwarteten Abweichungen auf dem Bild führt, die eine Zeitlang bestehen bleiben.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselbilder** (auch bekannt als **Intra-Frames** oder **i-Frames**) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Bilder, die verwendet werden, um eventuelle Beschädigungen oder Artefaktrückstände, die derzeit sichtbar sind, zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was bei der Rekonstruktion aus den codierten Daten anders aussieht, als es vor der Kompression war. Es gibt viele Formen von Aliasing; die häufigsten, die Sie möglicherweise sehen, beinhalten:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="Moiré_patterns">Moiré-Muster</h4>
        <p>
          Ein
          <a href="https://de.wikipedia.org/wiki/Moir%C3%A9-Effekt"
            ><strong>Moiré-Muster</strong></a
          >
          ist ein großflächiges räumliches Interferenzmuster, das erzeugt wird,
          wenn ein Muster im Quellbild und die Art und Weise, wie der Encoder
          arbeitet, leicht räumlich nicht übereinstimmen. Die durch den Encoder
          erzeugten Artefakte führen dann dazu, dass im Muster des Quellbildes
          seltsame, wirbelnde Effekte entstehen.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="eine Ziegelwand, die durch den Moiré-Effekt einen wirbelnden Effekt ähnlich Wellen zeigt" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der **Treppeneffekt** ist ein räumliches Artefakt, das auftritt, wenn
          diagonale gerade oder gebogene Kanten, die glatt erscheinen sollten,
          ein gezacktes Aussehen annehmen und etwas wie ein Satz von
          Treppenstufen aussehen. Dies ist der Effekt, der durch
          "Anti-Aliasing"-Filter reduziert wird.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die aufgrund von Aliasing wie eine Treppe aussehen, was einen Treppeneffekt verursacht
          " src="staircase-effect.jpg"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der **Wagenradeffekt** (oder
          <strong
            ><a href="https://de.wikipedia.org/wiki/Stroboskopeffekt">Stroboskopeffekt</a></strong
          >) ist der visuelle Effekt, der häufig in Filmen zu sehen ist, bei dem
          ein drehendes Rad mit der falschen Geschwindigkeit oder sogar
          rückwärts zu rotieren scheint, durch eine Interaktion zwischen der
          Bildrate und dem Kompressionsalgorithmus. Derselbe Effekt kann mit
          jedem sich wiederholenden Muster auftreten, das sich bewegt, wie die
          Schwellen einer Eisenbahnstrecke, Pfeiler entlang einer Straße und so
          weiter. Dies ist ein zeitliches (zeitabhängiges) Aliasing-Problem; die
          Geschwindigkeit der Drehung stört die Frequenz des während der
          Kompression oder Codierung durchgeführten Samplings.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Drehendes Rad, das aufgrund von Aliasing einen Wagenradeffekt verursacht." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farbsaum

**Farbsaum** ist eine Art visuelles Artefakt, das als störende Farben entlang der Kanten von farbigen Objekten in der Szene auftritt. Diese Farben haben keine beabsichtigte Farbbeziehung zu den Inhalten des Bildes.

### Schärfeverlust

Der Akt der Datenentfernung im Prozess der Videocodierung erfordert, dass einige Details verloren gehen. Wenn genügend Kompression angewendet wird, können Teile oder sogar das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder nebligen Erscheinungsbild führt.

Verlorene Schärfe kann es erschweren, Text im Bild zu lesen, da Text - insbesondere kleiner Text - sehr detailorientierter Inhalt ist, bei dem kleinste Änderungen die Lesbarkeit erheblich beeinflussen können.

### Klingeln

Verlustbehaftete Komprimierungsalgorithmen können **[Clipping](https://de.wikipedia.org/wiki/Klingelartefakte)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln kontaminiert werden, die vom Komprimierungsalgorithmus erzeugt werden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blocks verwendet, die über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund verlaufen. Dies ist besonders bei höheren Kompressionsgrade üblich.

![Beispiel für den Clipping-Effekt](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Stufen und andere signifikante Kompressionsartefakte). Diese Ränder sind der Clipping-Effekt. Clipping ähnelt in gewisser Hinsicht dem [Mückenrauschen](#mückenrauschen), außer dass der Clipping-Effekt mehr oder weniger stabil und unverändert ist, während Mückenrauschen schimmert und sich bewegt.

Clipping ist eine weitere Art von Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Kompression zum Verlust von Farbdetails in Verläufen führt. Anstatt sanft durch die verschiedenen Farben in einem Bereich überzugehen, wird das Bild blockartig, mit Farbklecksen, die das ursprüngliche Erscheinungsbild des Bildes annähern.

![Weißkopfseeadler-Foto mit blockiger Resolution.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers im obigen Foto (und die Schneeeule im Hintergrund). Die Details der Federn gehen größtenteils aufgrund dieser Posterisierungsartefakte verloren.

### Konturierung

**Konturierung** oder **Farbbanding** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungskonfiguration codiert wird. Infolgedessen zeigen die Inhalte des Videos ein "geschichtetes" Aussehen, bei dem anstelle sanfter Verläufe und Übergänge die Übergänge von Farbe zu Farbe abrupt sind, wodurch Farbstreifen entstehen.

![Beispiel eines Bildes, dessen Kompression zur Konturierung geführt hat](contouring-effect.jpg)

Im obigen Beispielbild sehen Sie, wie der Himmel Bänder unterschiedlicher Blautöne aufweist, anstatt einen gleichmäßigen Verlauf zu zeigen, während sich die Himmelsfarbe dem Horizont annähert. Dies ist der Konturierungs-Effekt.

### Mückenrauschen

**Mückenrauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Kantengeschäftigkeit** auftritt, das als flimmernder Nebel oder Schimmern erscheint, das grob außerhalb der Ränder von Objekten mit scharfen Kanten oder starken Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann ähnlich wie das [Clipping](#klingeln) aussehen.

![Beispiel eines Bildes, dessen Kompression Mückenrauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Mückenrauschen an mehreren Stellen, einschließlich im Himmel, der die Brücke umgibt. In der oberen rechten Ecke zeigt ein Ausschnitt eine Nahaufnahme eines Teils des Bildes, das Mückenrauschen aufweist.

Mückenrauschen-Artefakte sind am häufigsten in MPEG-Videos zu finden, können jedoch immer dann auftreten, wenn ein diskreter Cosinus-Transformationsalgorithmus (DCT) verwendet wird; dies umfasst zum Beispiel JPEG-Standbilder.

### Bewegungsentschädigungsblockgrenzen-Artefakte

Die Kompression von Videos funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufeinander aufbauend aufgenommen werden, Bild für Bild, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest steht oder die Objekte im Bild relativ stationär sind, aber wenn es viel Bewegung im Bild gibt, kann die Anzahl der Unterschiede zwischen den Frames so groß sein, dass die Kompression keinen Nutzen bringt.

**[Motion compensation](https://de.wikipedia.org/wiki/Bewegungskompensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder von Objekten im Sichtfeld) sucht und bestimmt, wie viele Pixel das sich bewegende Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der nicht durch diese Verschiebung erklärbaren Pixel, wodurch das neue Bild beschrieben wird. Im Wesentlichen findet der Encoder die sich bewegenden Objekte und erstellt dann intern ein Bild, das dem ursprünglichen Bild ähnelt, jedoch mit allen Objekten, die zu ihren neuen Positionen verschoben sind. Dies nährt theoretisch das Aussehen des neuen Bildes. Um die Aufgabe abzuschließen, werden dann die verbleibenden Unterschiede gefunden. Danach werden die Menge der Objektverschiebungen und die Anzahl der Pixelunterschiede in den Daten des neuen Bildes gespeichert. Dieser Unterschied ist der sogenannte **Residuenrahmen**.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Original-Frame</th>
      <th scope="col" style="width: 216px">Inter-Frame-Unterschiede</th>
      <th scope="col" style="width: 216px">
        Unterschied nach Bewegungskompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalbild eines Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Bild und dem folgenden Bild." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Bildern nach Verschiebung um zwei Pixel nach rechts"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Das erste vollständige Bild, wie es vom Betrachter gesehen wird.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Bild und dem
        folgenden zu sehen. Alles andere ist schwarz. Bei näherer Betrachtung
        sehen wir, dass die Mehrheit dieser Unterschiede aus einer horizontalen
        Kamerabewegung resultiert, was dies zu einem guten Kandidaten für die
        Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen
        wir hier die Panorama-Aufnahme der Kamera, indem wir zuerst das erste
        Bild um zwei Pixel nach rechts verschieben und dann den Unterschied
        berechnen. Dies kompensiert die Panorama-Aufnahme der Kamera und
        ermöglicht mehr Überlappung zwischen den beiden Bildern.
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Block-Bewegungskompensation**. Die globale Bewegungskompensation passt im Allgemeinen Kamerabewegungen wie das Verfolgen, Dolly-Bewegungen, Panorama, Neigen, Rollen und Auf- und Abwärtsbewegungen an. Die Block-Bewegungskompensation befasst sich mit lokalen Änderungen und sucht nach kleineren Abschnitten des Bildes, die über die Bewegungskompensation codiert werden können. Diese Blöcke haben normalerweise eine feste Größe in einem Raster, es gibt aber auch Formen der Bewegungskompensation, die variable Blockgrößen oder sogar sich überlappende Blöcke erlauben.

Es gibt jedoch Artefakte, die durch Bewegungskompensation auftreten können. Diese treten entlang der Blockgrenzen auf, in Form von scharfen Kanten, die falsches Klingeln und andere Kanten-Effekte erzeugen. Diese resultieren aus der Mathematik, die in der Codierung der Residuenrahmen verwendet wird, und können leicht notiert werden, bevor sie vom nächsten Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es sinnvoll sein, die Dimensionen des Videos zu reduzieren, um die endgültige Dateigröße des Videos zu verbessern. Während der unmittelbare Verlust an Größe oder Glätte der Wiedergabe ein negativer Faktor sein mag, kann eine sorgfältige Entscheidungsfindung ein gutes Endergebnis erzielen. Wenn ein 1080p-Video vor der Codierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein und eine viel höhere visuelle Qualität aufweisen; selbst nach skalieren während der Wiedergabe kann das Ergebnis besser sein, als das Originalvideo in voller Größe zu codieren und den notwendigen Qualitätseinbruch für eine Größenanforderung hinzunehmen.

### Reduzierte Bildrate

Ebenso können Sie Frames aus dem Video vollständig entfernen und die Bildrate kompensieren, indem Sie sie senken. Dadurch ergeben sich zwei Vorteile: Es macht das Gesamtergebnis kleiner, und diese kleinere Größe erlaubt es der Bewegungskompensation, noch mehr für Sie zu tun. Zum Beispiel, anstatt Bewegungsunterschiede für zwei sich bewegende Frames zu berechnen, wenn sie zwei Pixel aufgrund von Inter-Frame-Bewegung auseinanderliegen, könnte das Überspringen jedes anderen Frames zu einer Differenz führen, die vier Pixel Bewegung ergibt. Dies lässt die allgemeine Bewegung der Kamera durch weniger Residuenrahmen dargestellt werden.

Die absolute Mindestbildrate, bei der ein Video sein kann, bevor dessen Inhalt vom menschlichen Auge nicht mehr als Bewegung wahrgenommen wird, beträgt etwa 12 Bilder pro Sekunde. Weniger als das wird das Video zu einer Reihe von Standbildern. Kinofilme haben in der Regel 24 Bilder pro Sekunde, während Standard-Definition-Fernsehen etwa 30 Bilder pro Sekunde (etwas weniger, aber nah genug) hat und High-Definition-Fernsehen zwischen 24 und 60 Bilder pro Sekunde liegt. Alles ab 24 FPS wird im Allgemeinen als zufriedenstellend glatt empfunden; 30 oder 60 FPS ist ein ideales Ziel, abhängig von Ihren Bedürfnissen.

Letztendlich liegt die Entscheidung darüber, welche Opfer Sie machen können, ganz bei Ihnen und/oder Ihrem Designteam.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Er erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50 % höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzfrei und wurde sowohl für das {{HTMLElement("video")}}-Element als auch für [WebRTC](/de/docs/Web/API/WebRTC_API) entwickelt.

AV1 bietet derzeit drei Profile: **main**, **high**, und **professional** mit wachsender Unterstützung für Farbtiefen und Chrominanz-Subsampling. Zusätzlich wird eine Reihe von **Leveln** spezifiziert, die jeweils Grenzwerte für eine Reihe von Attributen des Videos definieren. Diese Attribute umfassen Bilddimensionen, Bildbereich in Pixeln, Anzeige- und Dekodiergeschwindigkeiten, durchschnittliche und maximale Bitraten sowie Grenzwerte für die Anzahl der Kacheln und Kachelspalten, die im Codierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber seine maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video bei Level 2.0 haben können. Es ist jedoch erwähnenswert, dass zumindest in Firefox und Chrome die Level derzeit ignoriert werden, wenn eine Software-Dekodierung durchgeführt wird, und der Decoder einfach versucht, das Video bestmöglich unter Einhaltung der angegebenen Einstellungen abzuspielen. Aus Gründen der zukünftigen Kompatibilität sollte man jedoch innerhalb der Grenzen des gewählten Levels bleiben.

Der Hauptnachteil von AV1 zu diesem Zeitpunkt ist, dass er sehr neu ist und die Unterstützung derzeit noch in die meisten Browser integriert wird. Zudem werden Encoder und Decoder noch hinsichtlich der Leistung optimiert, und Hardware-Encoder und -Decoder befinden sich meist noch in der Entwicklung anstatt in der Produktion. Daher dauert das Codieren eines Videos im AV1-Format sehr lange, da die gesamte Arbeit in Software erfolgt.

Für den Moment sind aufgrund dieser Faktoren AV1 noch nicht bereit, Ihre erste Wahl für einen Video-Codec zu sein, aber man sollte beobachten, bis er in Zukunft einsatzbereit ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Video-Level; theoretisches Maximum erreicht 800 Mbps
          bei Level 6.3
        </p>
        <p>
          Siehe die AV1-Definition
          <a href="https://aomediacodec.github.io/av1-spec/#levels">Tabellen der Level</a>, die die maximalen Auflösungen und Raten in jedem Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Variiert je nach Level; beispielsweise hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 bis zu 120 FPS erreichen kann
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension einen beliebigen Wert zwischen diesen annehmen kann
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
              <th scope="col">Chrominanz-Subsampling</th>
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
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
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
              <td>75</td>
              <td>67</td>
              <td>113</td>
              <td>57</td>
              <td>17</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
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
      <td>Lizenzfrei, offener Standard</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

Der **Advanced Video Coding** (**AVC**) Standard der MPEG-4-Spezifikationsreihe ist durch die identische ITU H.264-Spezifikation und die MPEG-4 Part 10-Spezifikation spezifiziert. Es ist ein auf Bewegungskompensation basierender Codec, der heute weit verbreitet für alle Arten von Medien verwendet wird, einschließlich des Rundfunkfernsehens, von [RTP](/de/docs/Glossary/RTP) Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist hochflexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien ausgelegt, mit weniger Bandbreitenbedarf als das Main Profile (das in einigen Regionen für digitales Fernsehen in Standardauflösung verwendet wird) oder das High Profile (das für Blu-Ray Disc-Videos verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chrominanz-Subsampling; das High 10 Profile fügt Unterstützung für 10-Bit-Farben hinzu, und erweiterte Formen von High 10 fügen 4:2:2 und 4:4:4 Chrominanz-Subsampling hinzu.

AVC verfügt auch über spezielle Funktionen wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), was unter anderem die Produktion von stereoskopischem Video ermöglicht.

AVC ist jedoch ein proprietäres Format, und zahlreiche Patente werden von mehreren Parteien bezüglich seiner Technologien gehalten. Der kommerzielle Einsatz von AVC-Medien erfordert eine Lizenz, obwohl der Via LA Patentpool keine Lizenzgebühren für AVC-Format-internes Streaming erhebt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Web-Browser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs umfasst) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufe zu unterstützen. Zwar sind Webbrowser nicht dazu verpflichtet, einige tun es jedoch.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen die Hardwarekodierung und -dekodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzierungsanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Varies by level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variert je nach Level; bis zu 300 FPS sind möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
          >DCT-basierter Algorithmus</a
        >, obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des Bildes zu erzeugen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8.192 x 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>Einige der häufigeren oder interessanteren Profile:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chrominanz-Subsampling</th>
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
              <td>4:0:0 (Graustufen), 4:2:0, 4:2:2, und 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>
        Ja; <a href="https://de.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder
        Advanced HDR/SL-HDR; beide sind Teil von ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera, und Safari
        <p>
          Die Unterstützung von Firefox für AVC hängt von den im Betriebssystem
          integrierten oder vorinstallierten Codecs für AVC und dessen Container ab, um
          Patentprobleme zu vermeiden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
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
        Proprietär mit zahlreichen Patenten. Kommerzielle Nutzung
        <a href="https://www.via-la.com/licensing-2/avc-h-264/"
          >erfordert eine Lizenz</a
        >. Beachten Sie, dass möglicherweise mehrere Patentpools anwendbar sind.
      </td>
    </tr>
  </tbody>
</table>

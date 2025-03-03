---
title: Leitfaden für Web-Video-Codecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: ef59ed7e2923b8854ad5708e7306924b3970c929
---

Dieser Leitfaden stellt die Video-Codecs vor, die Sie im Web wahrscheinlich am häufigsten antreffen oder in Betracht ziehen werden, zusammen mit Zusammenfassungen ihrer Fähigkeiten, eventuelle Kompatibilitäts- und Nutzungsprobleme sowie Ratschläge zur Auswahl des richtigen Codecs für das Video Ihres Projekts.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es erforderlich, diese erheblich zu komprimieren, um sie speichern zu können, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die benötigt wird, um unkomprimiertes Video zu speichern:

- Ein einzelnes Bild eines hochauflösenden Videos (1920x1080) in voller Farbe (4 Byte pro Pixel) entspricht 8.294.400 Byte.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Byte (ca. 249 MB) belegen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine ziemlich typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen und ein zweistündiger Film würde _fast 1,79 **TB** (also 1790 GB)_ in Anspruch nehmen.

Nicht nur der benötigte Speicherplatz ist enorm, auch die Netzwerkbandbreite, die erforderlich wäre, um ein unkomprimiertes Video zu übertragen, wäre enorm, mit 249 MB/s - ohne Audio und Overhead. Hier kommen Video-Codecs ins Spiel. Wie Audio-Codecs für die Tondaten komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau dem Original entspricht. Einige Details können verloren gehen; die Menge an Verlust hängt vom Codec und dessen Konfiguration ab, aber in der Regel gilt: Je mehr Kompression Sie erreichen, desto mehr Verlust an Details und Treue tritt auf. Es gibt einige verlustfreie Codecs, aber diese werden typischerweise für Archivierung und Speicherung für lokale Wiedergaben verwendet und nicht für den Einsatz in Netzwerken.

## Gängige Codecs

Die folgenden Video-Codecs werden am häufigsten im Web verwendet. Für jeden Codec werden auch die Container (Dateitypen) aufgelistet, die sie unterstützen. Jeder Codec bietet einen Link zu einem Abschnitt unten, der zusätzliche Details zu den Fähigkeiten des Codecs und zu Kompatibilitätsproblemen enthält, die Sie kennen müssen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
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

## Faktoren, die das kodierte Video beeinflussen

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: die spezifischen Merkmale des Quellvideoformats und Inhalts sowie die Eigenschaften und die Konfiguration des Codecs, der beim Kodieren des Videos verwendet wird.

Die einfachste Richtlinie ist diese: Alles, was das kodierte Video mehr wie das originale, unkomprimierte Video aussehen lässt, wird normalerweise auch die resultierenden Daten größer machen. Daher ist es immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist es wert, mehr Qualität zu opfern, um die Datengröße zu reduzieren; in anderen Fällen ist der Verlust an Qualität inakzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die eine entsprechend größere Datei ergibt.

### Einfluss des Quellvideoformats auf das codierte Ergebnis

Das Maß, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat konvertiert oder das Bild auf eine andere Art als durch einfache Pixel repräsentiert, spielt das Format des Originalbildes keine Rolle. Dinge wie Bildrate und natürlich Auflösung werden jedoch immer einen Einfluss auf die Ausgabengröße der Medien haben.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Manche haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern, sind nicht gut darin, scharfe Kanten zu replizieren, oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder eine beliebige Anzahl anderer Möglichkeiten. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss des Quellvideoformats und -inhalts auf die
    Qualität und Größe des kodierten Videos
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
        Je höher die Farbtiefe, desto höher ist die erreichte Qualität der
        Farbtiefe im Video. Zusätzlich ermöglichen Farbtiefen unter 10 Bit pro
        Komponente (10-Bit-Farbe) in gesättigten Bildbereichen (also dort, wo
        Farben rein und intensiv sind, wie ein leuchtendes, reines Rot:
        <code>rgb(255 0 0 / 100%)</code>), Streifenbildung, wo
        Farbverläufe nicht ohne sichtbare Farbtreppen dargestellt werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren komprimierten
        Dateigrößen führen. Der entscheidende Faktor ist das interne
        Speicherformat, das für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Geschmeidigkeit der Bewegung
        im Bild. Bis zu einem bestimmten Punkt gilt: Je höher die Bildrate,
        desto geschmeidiger und realistischer erscheint die Bewegung.
        Irgendwann wird jedoch der Punkt abnehmender Erträge erreicht. Siehe
        <a href="#reduced_frame_rate">Bildrate</a> unten für Details.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird während der Kodierung nicht reduziert,
        führt eine höhere Bildrate zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Kompression von Video funktioniert typischerweise durch den Vergleich von
        Bildern, bei dem Unterschiede festgestellt und Datensätze
        erstellt werden, die genug Informationen enthalten, um das vorherige
        Bild zu aktualisieren, sodass es in etwa dem folgenden Bild entspricht. Je mehr sich aufeinanderfolgende Frames voneinander
        unterscheiden, desto größer sind diese Unterschiede, und desto weniger
        effektiv ist die Kompression, um die Einführung von Artefakten in das
        komprimierte Video zu vermeiden.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren
        Zwischenbildern aufgrund der höheren Anzahl von Unterschieden zwischen
        den Bildern). Aus diesem und anderen Gründen gilt: Je mehr Bewegung in
        einem Video vorhanden ist, desto größer wird typischerweise die
        Ausgabedatei sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Körnigkeit im Bild)
        führt zu Variabilität. Variabilität macht die Kompression im Allgemeinen
        schwieriger, was zu mehr Qualitätsverlust führt, da Details
        entfernt werden müssen, um das gleiche Kompressionsniveau zu
        erreichen.
      </td>
      <td>
        Je mehr Variabilität - wie Rauschen - im Bild vorhanden ist, desto
        komplexer ist der Kompressionsprozess und umso geringer ist
        wahrscheinlich der Erfolg des Algorithmus, das Bild in gleichem Maße zu
        komprimieren. Sofern Sie den Encoder nicht so konfigurieren, dass einige
        oder alle durch Rauschen verursachten Variationen ignoriert werden, wird
        das komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video, das in derselben Bildschirmgröße präsentiert
        wird, kann typischerweise die Originalszene genauer darstellen,
        abgesehen von Effekten, die während der Kompression eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies spielt
        eine entscheidende Rolle bei der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Der Grad, in dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Umständen, einschließlich des verwendeten Encoders und dessen Konfiguration. Zusätzlich zu den allgemeinen Codec-Optionen könnte der Encoder so konfiguriert werden, dass die Bildfrequenz reduziert, das Rauschen bereinigt und/oder die allgemeine Auflösung des Videos während der Kodierung reduziert wird.

### Einfluss der Codec-Konfiguration auf das codierte Ergebnis

Die Algorithmen, die zum Kodieren von Video verwendet werden, verwenden typischerweise eine oder mehrere allgemeine Techniken zur Durchführung ihrer Kodierung. Allgemein gesagt, wird jede Konfigurationsoption, die darauf abzielt, die Ausgabengröße des Videos zu reduzieren, wahrscheinlich einen negativen Einfluss auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Kodierung zu wählen, die zu einer viel größeren kodierten Datei führt, aber mit perfekter Reproduktion des Originalvideos nach der Dekodierung.

Darüber hinaus können unterschiedliche Encoder-Utilities Unterschiede darin aufweisen, wie sie das Quellvideo verarbeiten, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

<table class="standard-table">
  <caption>
    Auswirkungen der Videokodierer-Konfiguration auf Qualität und Größe
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
        Verlustfreie Kompression kann die Gesamtgröße des Videos nicht annähernd
        so stark reduzieren wie verlustbehaftete Kompression; die resultierenden
        Dateien sind wahrscheinlich immer noch zu groß für den allgemeinen
        Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        Artefakte und andere Formen der Qualitätsverschlechterung werden in
        gewissem Maße auftreten, je nach spezifischem Codec und Menge der
        angewandten Kompression
      </td>
      <td>
        Je mehr das kodierte Video vom Original abweichen darf, desto leichter
        lassen sich höhere Kompressionsraten erzielen
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto ähnlicher sieht das kodierte
        Video dem Original aus
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten
        Videodateien; das Ausmaß, in dem dies zutrifft, variiert je nach Codec
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Qualität verbessert sich in der Regel mit höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die beim Kodieren von Videos verfügbaren Optionen und die Werte, die diesen Optionen zugewiesen werden sollen, variieren nicht nur von einem Codec zum anderen, sondern hängen auch von der verwendeten Kodierungssoftware ab. Die Dokumentation, die mit Ihrer Kodierungssoftware mitgeliefert wird, hilft Ihnen dabei, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten zu sichtbar negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, da Video so angezeigt wird. Jedes Bild eines Videos wird angezeigt, indem eine Reihe von Änderungen auf das aktuell sichtbare Bild angewendet wird. Das bedeutet, dass etwaige Fehler oder Artefakte sich im Laufe der Zeit kumulieren, was zu Störungen oder anderen seltsamen oder unerwarteten Abweichungen im Bild führt, die eine Zeit lang bestehen bleiben.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden regelmäßig **Schlüsselframes** (auch als **Intra-Frames** oder **i-Frames** bekannt) in die Videodatei eingefügt. Die Schlüsselframes sind vollständige Bilder, die verwendet werden, um eventuelle Schäden oder Artefaktrückstände zu reparieren, die derzeit sichtbar sind.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alle Fälle, in denen etwas, das nach der Dekodierung aus den kodierten Daten rekonstruiert wird, nicht gleich aussieht wie vor der Kompression. Es gibt viele Formen von Aliasing; die häufigsten, die Sie möglicherweise sehen, sind:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht, wenn
          ein Muster im Quellbild und die Art und Weise, wie der Encoder
          arbeitet, räumlich leicht ausgerichtet sind. Die durch den Encoder
          erstellten Artefakte führen dann dazu, dass seltsame, wirbelnde
          Effekte im Muster des Quellbilds bei der Dekodierung auftreten.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="eine Backsteinwand, die aufgrund des Moiré-Musters einen wirbelnden Effekt ähnlich wie Wellen zeigt" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt
          sein sollten, ein gezacktes Aussehen annehmen, das einem Satz von
          Treppenstufen ähnelt. Dies ist der Effekt, der durch
          "Anti-Aliasing"-Filter verringert wird.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die aufgrund von Aliasing wie eine Treppe aussehen und einen Treppeneffekt verursachen
          " src="staircase-effect.jpg"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der <strong>Wagenradeffekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">Stroboskopeffekt</a></strong
          >) ist der visuelle Effekt, der häufig im Film zu sehen ist, bei dem
          ein sich drehendes Rad aufgrund einer Wechselwirkung zwischen der
          Bildfrequenz und dem Kompressionsalgorithmus mit der falschen
          Geschwindigkeit oder sogar rückwärts zu rotieren scheint. Der gleiche
          Effekt kann bei jedem sich wiederholenden Muster auftreten, das sich
          bewegt, wie zum Beispiel die Eisenbahnschwellen eines Gleises oder die
          Pfosten entlang einer Straße usw. Dies ist ein zeitbasiertes
          (temporales) Aliasing-Problem; die Geschwindigkeit der Rotation
          interferiert mit der Frequenz der während der Kompression oder
          Kodierung durchgeführten Abtastung.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Ein drehendes Rad, das aufgrund von Aliasing den Wagenradeffekt verursacht." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farbsaum

**Farbsaum** ist eine Art von visuellem Artefakt, das als ungewollte Farben entlang der Kanten von farbigen Objekten innerhalb der Szene erscheint. Diese Farben haben keine absichtliche Farbbeziehung zum Inhalt des Bildes.

### Verlust von Schärfe

Beim Prozess der Datenentfernung während der Video-Kodierung müssen einige Details verloren gehen. Bei ausreichender Kompression könnten Teile oder möglicherweise das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder nebligen Aussehen führt.

Ein Verlust an Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text - insbesondere kleiner Text - sehr detailorientierter Inhalt ist, bei dem geringe Änderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Kompressionsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln kontaminiert werden, die vom Kompressionsalgorithmus generiert wurden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund überspannen. Dies ist besonders häufig bei höheren Kompressionsstufen der Fall.

![Beispiel des Klingeleffekts](ringing-effects.png)

Beachten Sie die blauen und pinken Ränder um die Kanten des Sterns oben (sowie die Stufenbildung und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ähnelt in gewissen Maße dem [Moskito-Rauschen](#moskito-rauschen), außer dass das Klingeln mehr oder weniger stabil und unverändert ist, während das Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Form von Artefakt, die es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Kompression zu einem Verlust von Farbdetails in Farbabstufungen führt. Anstelle von sanften Übergängen durch die verschiedenen Farben in einem Bereich wird das Bild blockartig, mit Farbblöcken, die das ursprüngliche Aussehen des Bilds näherungsweise darstellen.

![Foto eines Weißkopfseeadlers mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben in dem Gefieder des Weißkopfseeadlers im obigen Foto (und der Schnee-Eule im Hintergrund). Die Details der Federn gehen größtenteils aufgrund dieser Posterisierungseffekte verloren.

### Konturierung

**Konturierung** oder **Farbbanding** ist eine spezielle Form der Posterisierung, bei der die Farbflecken im Bild zu Bändern oder Streifen werden. Dies geschieht, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Als Ergebnis zeigt der Inhalt des Videos ein "geschichtetes" Aussehen, bei dem anstelle von sanften Verläufen und Übergängen die Übergänge von einer Farbe in die nächste abrupt sind und Streifen von Farbe auftreten.

![Beispiel eines Bildes, dessen Kompression Konturierung eingeführt hat](contouring-effect.jpg)

Im obigen Beispielfoto beachten Sie, wie der Himmel Bänder unterschiedlicher Blautöne aufweist, anstatt ein gleichmäßiger Verlauf zu sein, während sich die Himmelsfarbe zum Horizont ändert. Dies ist der Kontureneffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein zeitliches Artefakt, das als Rauschen oder als **Randgeschäftigkeit** auftritt, das als flimmernde Unschärfe oder Schimmern auftritt, das in etwa den Außenkanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann in seiner Erscheinung dem [Klingeln](#klingeln) ähneln.

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich des Himmels um die Brücke herum. In der oberen rechten Ecke zeigt ein Inset eine Nahaufnahme eines Teils des Bildes, das Moskito-Rauschen aufweist.

Moskito-Rauschen-Artefakte treten am häufigsten in MPEG-Videos auf, können jedoch auftreten, wann immer ein diskreter Kosinustransformationsalgorithmus (DCT) verwendet wird; dies schließt zum Beispiel JPEG-Standbilder ein.

### Bewegungs-Kompensations-Blockgrenzen-Artefakte

Die Kompression von Video funktioniert im Allgemeinen indem zwei Frames verglichen werden und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest an ihrem Platz ist oder die Objekte im Bild relativ stationär sind, aber wenn eine große Menge an Bewegung im Bild vorhanden ist, können die Unterschiede zwischen den Frames so groß sein, dass Kompression keinen Nutzen bringt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder der Objekte im Bild) sucht und bestimmt, wie viele Pixel sich das bewegliche Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die bewegt wurden, die nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die bewegenden Objekte, erstellt dann einen internen Frame, der dem Original ähnelt, abgesehen davon, dass alle Objekte an ihre neuen Positionen verschoben wurden. Theoretisch entspricht dies dem Aussehen des neuen Bildes. Um die Aufgabe abzuschließen, werden dann die verbleibenden Unterschiede gefunden, und das Set von Objektverschiebungen und das Set von Pixelunterschieden werden in den Daten gespeichert, die den neuen Frame darstellen. Dieses Objekt, das die Verschiebung und die Pixelunterschiede beschreibt, wird als **Residuum-Frame** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalframe</th>
      <th scope="col" style="width: 216px">Interframe-Unterschiede</th>
      <th scope="col" style="width: 216px">
        Unterschied nach Bewegungskompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalbild eines Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Bild und dem darauffolgenden Bild." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Bildern nach Verschieben um zwei Pixel nach rechts"
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
        darauffolgenden Bild sichtbar. Alles andere ist schwarz. Bei genauerem
        Hinsehen können wir erkennen, dass die Mehrheit dieser Unterschiede
        durch eine horizontale Kamerafahrt entstehen, was dies zu einem guten
        Kandidaten für die Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Zahl der verschiedenen Pixel zu minimieren, berücksichtigen wir
        hier das Schwenken der Kamera, indem wir das erste Bild zuerst um zwei
        Pixel nach rechts verschieben und dann den Unterschied berechnen. Dies
        kompensiert das Schwenken der Kamera und ermöglicht mehr Überlappung
        zwischen den beiden Bildern.
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

Es gibt zwei allgemeine Arten von Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Globale Bewegungskompensation wird normalerweise verwendet, um Kamera-Bewegungen wie Tracking, Dolly-Bewegungen, Schwenken, Neigen, Rollen sowie Auf- und Abbewegungen zu justieren. Die Blockbewegungskompensation behandelt lokale Änderungen und sucht nach kleineren Abschnitten des Bildes, die mittels Bewegungskompensation kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe, werden in einem Raster dargestellt, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen erlauben und sogar die Überlappung von Blöcken zulassen.

Es gibt jedoch Artefakte, die durch Bewegungskompensation entstehen können. Diese treten entlang der Blockgrenzen auf, in Form von scharfen Kanten, die falsches Klingeln und andere Randeffekte erzeugen. Diese sind auf die Mathematik zurückzuführen, die bei der Kodierung der Residuum-Frames verwendet wird, und können leicht bemerkt werden, bevor sie durch das nächste Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu verkleinern, um die endgültige Größe der Videodatei zu verbessern. Während der unmittelbare Verlust an Größe oder Geschmeidigkeit bei der Wiedergabe ein negativer Faktor sein kann, kann durch sorgfältige Entscheidungsfindung ein gutes Endergebnis erzielt werden. Wenn ein Video in 1080p vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein und eine deutlich höhere visuelle Qualität aufweisen. Selbst nach dem Hochskalieren während der Wiedergabe kann das Ergebnis besser sein, als das Originalvideo in voller Größe zu kodieren und den notwendigen Qualitätseinbußen zu akzeptieren, um die Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ebenso können Sie Bilder vollständig aus dem Video entfernen und die Bildrate anpassen, um dies auszugleichen. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungskompensation, noch mehr für Sie zu leisten. Zum Beispiel könnte durch das Auslassen jedes zweiten Bildes anstelle der Berechnung von Bewegungsunterschieden für zwei Bilder, die sich aufgrund zwischenbildlicher Bewegung um zwei Pixel unterscheiden, zu einer Berechnung führen, bei der eine Verschiebung von vier Pixeln ermittelt wird. Dies ermöglicht es, die Gesamtbewegung der Kamera mit weniger Residuum-Bildern darzustellen.

Die absolute Mindestbildfrequenz, die ein Video haben kann, bevor der Inhalt vom menschlichen Auge nicht mehr als Bewegung wahrgenommen wird, beträgt etwa 12 Bilder pro Sekunde. Darunter wird das Video zu einer Reihe von Standbildern. Kinofilme sind typischerweise mit 24 Bildern pro Sekunde, während Standard-Definition-Fernsehen mit ca. 30 Bildern pro Sekunde (leicht darunter, aber nah genug) und High-Definition-Fernsehen mit zwischen 24 und 60 Bildern pro Sekunde erstellt wird. Alles von 24 FPS aufwärts wird im Allgemeinen als ausreichend flüssig angesehen; 30 oder 60 FPS sind je nach Bedarf ideale Zielwerte.

Am Ende liegen die Entscheidungen darüber, welche Opfer Sie bereit sind zu bringen, ganz bei Ihnen und/oder Ihrem Designteam.

## Details zu Codecs

### AV1

Der **AOMedia Video 1** (**AV1**)-Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und sogar bis zu 50 % höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzfrei und für die Verwendung sowohl im {{HTMLElement("video")}}-Element als auch mit [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

Derzeit bietet AV1 drei Profile: **main**, **high** und **professional** mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Zudem wird eine Reihe von **Levels** spezifiziert, die jeweils Beschränkungen für eine Reihe von Videoattributen definieren. Diese Attribute umfassen Bilddimensionen, Bildfläche in Pixeln, Anzeige- und Dekodierraten, durchschnittliche und maximale Bitraten sowie Begrenzungen für die Anzahl der Kacheln und Kachelspalten, die im Kodierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln ist 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es ist jedoch erwähnenswert, dass zumindest bei Firefox und Chrome die Levels derzeit beim Software-Dekodieren ignoriert werden und der Dekoder lediglich versucht, das Video mit den gegebenen Einstellungen so gut wie möglich abzuspielen. Um künftig Kompatibilität zu gewährleisten, sollten Sie jedoch die Begrenzungen des gewählten Levels einhalten.

Der Hauptnachteil von AV1 ist derzeit, dass es sehr neu ist und die Unterstützung noch in die meisten Browser integriert wird. Zudem werden Encoder und Decoder noch für die Leistung optimiert, und Hardware-Encoder und -Decoder befinden sich hauptsächlich in der Entwicklung statt in der Produktion. Aus diesem Grund dauert es sehr lange, ein Video im AV1-Format zu kodieren, da die gesamte Arbeit in Software erfolgt.

Derzeit ist AV1 aufgrund dieser Faktoren noch nicht bereit, Ihre erste Wahl als Videocodec zu sein, aber Sie sollten darauf achten, wann es bereit ist, eingesetzt zu werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Level des Videos; theoretisches Maximum erreicht 800 Mbps bei Level 6.3
        </p>
        <p>
          Siehe die AV1-Spezifikation
          <a href="https://aomediacodec.github.io/av1-spec/#levels">Tabellen der Levels</a>, die die maximalen Auflösungen und Raten für jedes Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Variiert je nach Level; zum Beispiel hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 bis zu 120 FPS erreichen kann
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jeden Wert zwischen diesen annehmen kann
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
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
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Funktion</th>
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
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format">ISOBMFF</a>, MPEG-TS,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
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
        <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">https://aomediacodec.github.io/av1-spec/av1-spec.pdf</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Lizenzfrei, offener Standard</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

Der **Advanced Video Coding** (**AVC**)-Standard der MPEG-4-Spezifikationssuite ist durch die identische ITU H.264-Spezifikation und die MPEG-4 Teil 10-Spezifikation festgelegt. Es handelt sich um einen bewegungskompensationsbasierten Codec, der heute weit verbreitet für alle Arten von Medien genutzt wird, einschließlich Rundfunkfernsehen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist sehr flexibel, mit einer Anzahl von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für die Nutzung in Videokonferenzen und mobilen Szenarien mit geringerem Bandbreitenbedarf als das Main Profile (das in manchen Regionen für digitales Standard-Definition-TV genutzt wird) oder das High Profile (das für Blu-Ray-Disc-Video verwendet wird) konzipiert. Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling; Das High 10 Profile fügt Unterstützung für 10-Bit-Farbe hinzu, und erweiterte Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC hat auch spezielle Funktionen wie Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), die unter anderem die Produktion von stereoskopischem Video ermöglichen.

AVC ist ein proprietäres Format und es gibt zahlreiche Patente, die von mehreren Parteien in Bezug auf seine Technologien gehalten werden. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Webbrowser sind dazu nicht verpflichtet, einige tun es jedoch.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen die Hardware-Kodierung und -Dekodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzierungsanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Variiert je nach Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Variiert je nach Level; bis zu 300 FPS möglich
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>, obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des Bildes zu erstellen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8.192 x 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
      <td>
        <p>Einige der häufigeren oder interessanteren Profile:</p>
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
              <td>4:0:0 (Graustufen), 4:2:0, und 4:2:2</td>
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
        Ja; <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder Advanced HDR/SL-HDR; beide sind Teil der ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Firefox-Unterstützung für AVC hängt von den integrierten oder vorinstallierten Codecs für AVC und seinen Containern im Betriebssystem ab, um Patentprobleme zu vermeiden.
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
        {{Glossary("RTP", "RTP")}} /
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
        <a href="https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding.html">https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding.html</a>
        <br /><a href="https://www.itu.int/rec/T-REC-H.264">https://www.itu.int/rec/T-REC-H.264</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär mit zahlreichen Patenten. Kommerzielle Nutzung
        <a href="https://www.via-la.com/licensing-2/avc-h-264/">erfordert eine Lizenz</a>. Beachten Sie, dass mehrere Patentpools anwendbar sein können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263**-Codec der ITU wurde hauptsächlich für Situationen mit niedriger Bandbreite entwickelt. Insbesondere ist er für Videokonferenzen über PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenz) Systeme optimiert. Obwohl er für Netzwerke mit niedriger Bandbreite optimiert ist, ist er ziemlich CPU-intensiv und kann auf leistungsschwächeren Computern möglicherweise nicht zufriedenstellend arbeiten. Das Datenformat ist dem von MPEG-4 Part 2 ähnlich.

H.263 wurde nie weit im Web verwendet. Varianten von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie z.B. Flash-Video oder den Sorenson-Codec. Jedoch hat kein großer Browser von Haus aus H.263-Unterstützung enthalten. Bestimmte Medien-Plugins haben die Unterstützung für H.263-Medien ermöglicht.

Anders als die meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Bezug auf die maximale Bitrate pro Frame (Bild), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann kann das Video diesen Wert für jeden Frame nicht überschreiten. Die endgültige Bitrate hängt davon ab, von der Bildfrequenz, der Kompression und der gewählten Auflösung und Blockformat.

H.263 wurde durch H.264 abgelöst und wird daher als ein veraltetes Medienformat betrachtet, das Sie im Allgemeinen vermeiden sollten, wenn Sie können. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, besteht, wenn Sie Unterstützung auf sehr alten Geräten benötigen, bei denen H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und so weiter. Um H.263 zu nutzen, sind Sie gesetzlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbegrenzt, jedoch typischerweise unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        <p>Bis zu 1408 x 1152 Pixel.</p>
        <p>
          Version 1 von H.263 spezifiziert eine Reihe von Bildgrößen, die unterstützt werden. Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert die Bildgröße in Pixeln sowie wie viele Reihen an Luminanz- und Chrominanzenmustern für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">H.263 Unterstützung</th>
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
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
      <td><a href="https://www.itu.int/">ITU</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.263/">https://www.itu.int/rec/T-REC-H.263/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; die entsprechenden Lizenzen sind erforderlich. Beachten Sie, dass mehrere Patentpools anwendbar sein können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**)-Codec ist durch ITUs **H.265** sowie durch MPEG-H Teil 2 (die noch in Entwicklung befindliche Nachfolge von MPEG-4) definiert. HEVC wurde entwickelt, um eine effiziente Kodierung und Dekodierung von Video in Größen einschließlich sehr hoher Auflösungen (einschließlich 8K-Video) zu unterstützen, mit einer Struktur, die speziell dazu entwickelt wurde, Software die Nutzung moderner Prozessoren zu ermöglichen. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie die von [AVC](#avc_h.264), jedoch bei vergleichbarer Bildqualität.

Zum Beispiel besteht jede Codierungsbaum-Einheit (CTU) - ähnlich dem Makroblock, der in vorherigen Codecs verwendet wird - aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede Chroma-Probe, die in derselben Codierungsbaum-Einheit verwendet werden, sowie allen erforderlichen Syntaxelementen. Diese Struktur unterstützt eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-Bit-Farbe pro Komponente mit 4:2:0 Chroma-Subsampling unterstützt. Ebenfalls interessant ist, dass 4:4:4 Video speziell behandelt wird. Anstatt die Luma-Proben (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Proben (die angeben, wie die Grautöne verändert werden sollen, um Farbpixel zu erzeugen) zu haben, werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann während des Renderns kombiniert werden, um ein vollfarbiges Bild zu erzeugen.

HEVC ist ein proprietäres Format und wird von einer Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA verwaltet](https://www.via-la.com/licensing-2/hevc-vvc/); Gebühren werden Entwicklern anstatt Inhalteerzeugern und Verteilern berechnet. Stellen Sie sicher, die neuesten Lizenzbedingungen und -anforderungen zu überprüfen, bevor Sie eine Entscheidung darüber treffen, ob Sie HEVC in Ihrer App oder Website verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800.000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>128 x 96 bis 8.192 x 4.320 Pixel; variiert je nach Profil und Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
      <td>
        <p>
          Die nachfolgenden Informationen beziehen sich auf die wichtigsten Profile. Es gibt eine Reihe anderer verfügbarer Profile, die hier nicht enthalten sind.
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
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">HEVC / H.265-Unterstützung</th>
              <td>107</td>
              <td>18</td>
              <td>120</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>
          Chrome unterstützt HEVC für Geräte mit Hardware-Unterstützung auf Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.
        </p>
        <p>
          Edge (Chromium) unterstützt HEVC für Geräte mit Hardware-Unterstützung auf Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat denselben Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Dekoder.
        </p>
        <p>
          Firefox 120 unterstützte anfänglich HEVC-Dekodierung nur in Nightly. Die Unterstützung wurde standardmäßig in Firefox 134 unter Windows aktiviert, Windows und macOS in Firefox 136, und Windows, macOS und Linux in Firefox 137. HEVC-Unterstützung wird nur auf Geräten mit Hardware-Unterstützung bereitgestellt (der Bereich ist derselbe wie bei Edge).
        </p>
        <p>
          Opera und andere Chromium-basierte Browser haben denselben Unterstützungsstatus wie Chrome.
        </p>
        <p>
          Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder später.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format">ISOBMFF</a>, MPEG-TS,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
      <td>
        <a href="https://www.itu.int/">ITU</a> /
        <a href="https://mpeg.chiariglione.org/">MPEG</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Spezifikationen</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.265">http://www.itu.int/rec/T-REC-H.265</a>
        <br /><a href="https://www.iso.org/standard/69668.html">https://www.iso.org/standard/69668.html</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; bestätigen Sie die Einhaltung der
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/">Lizenzanforderungen</a>.
        Beachten Sie, dass mehrere Patentpools anwendbar sein können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**)-Format ist ein Teil des MPEG-4 Teil 2 Visual-Standards. Im Allgemeinen wird MPEG-4 Teil 2 Video aufgrund seines mangelnden überzeugenden Wertes im Vergleich zu anderen Codecs von niemandem verwendet, jedoch gibt es einige mobile Anwendungen für MP4V-ES. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist das Streamen von MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Sitzung. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine Mobilfunkverbindung mit [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie werden dieses Format wahrscheinlich nicht verwenden wollen, da es von keinem großen Browser in nennenswerter Weise unterstützt wird und recht veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden aber manchmal fälschlicherweise als `.mp4` gekennzeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Kein spezifisches Limit; nur durch die Datenrate beschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4.096 x 4.096 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
      <td>
        YCrCb mit Chroma-Subsampling (4:2:0, 4:2:2, und 4:4:4) unterstützt; bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Funktion</th>
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
          <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>
          Containern.
        </p>
        <p>Chrome unterstützt MP4V-ES nicht; jedoch ChromeOS schon.</p>
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6416)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär;
        <a href="https://www.via-la.com/licensing-2/mpeg-4-visual/"
          >Lizenz erwerben</a>
        durch <a href="https://www.via-la.com/">Via LA</a> und/oder
        <a href="https://about.att.com/innovation/ip/patents">AT&#x26;T</a>
        wie erforderlich
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Teil 2 Video

**MPEG-1 Teil 2 Video** wurde zu Beginn der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 allein von MPEG erstellt, ohne die Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Dekoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr in Bezug auf MPEG-1-Video, daher kann es ohne Lizenzierungsbedenken verwendet werden. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Verwendung von Plugins in Webbrowsern veraltet ist, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für die Verwendung auf Websites und in Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1,5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        23,976 FPS, 24 FPS, 25 FPS, 29,97 FPS, 30 FPS, 50 FPS, 59,94 FPS, und 60 FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4.095 x 4.095 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
      <td>
        Y'CbCr mit 4:2:0 Chroma-Subsampling mit bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Funktion</th>
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.iso.org/standard/22411.html">https://www.iso.org/standard/22411.html</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; jedoch sind alle Patente abgelaufen, sodass MPEG-1 frei verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Teil 2 Video

**[MPEG-2 Teil 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert ist und wird gelegentlich durch seine {{Glossary("ITU", "ITU")}}-Bezeichnung, H.262, bezeichnet. Es ist dem MPEG-1 Video sehr ähnlich - tatsächlich kann jeder MPEG-2-Player automatisch MPEG-1 ohne besondere Maßnahmen abspielen - allerdings wurde es erweitert, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 in die Lage zu versetzen, Standard-Definition-Fernsehen zu komprimieren, sodass auch interlaced Video unterstützt wird. Die Kompressionsrate für Standard-Definition und die Qualität des resultierenden Videos erfüllten die Anforderungen so gut, dass MPEG-2 der primäre Videocodec für DVD-Videoformate ist.

MPEG-2 verfügt über mehrere Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Levels erhältlich, die jeweils Attribute des Videos erhöhen, wie Bildfrequenz, Auflösung, Bitrate und so weiter. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Levels, die jeweils Unterstützung für größere Bilddimensionen und Bitraten bieten. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für Fernsehen in Nordamerika MPEG-2-Video in hoher Definition unter Nutzung des Main Profiles auf High Level, das 4:2:0 Video sowohl bei 1920 x 1080 (30 FPS) als auch bei 1280 x 720 (60 FPS), mit einer maximalen Bitrate von 80 Mbps erlaubt.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern veraltet ist, sind diese in der Regel nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für die Nutzung auf Websites und in Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 100 Mbps; variiert je nach Level und Profil</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Abkürzung</th>
              <th scope="col">Level-Name</th>
              <th scope="col">Unterstützte Bildraten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>23,9, 24, 25, 29,97, 30</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>23,976, 24, 25, 29,97, 30</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>23,976, 24, 26, 29,97, 30, 50, 59,94, 60</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>23,976, 24, 26, 29,97, 30, 50, 59,94, 60</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Abkürzung</th>
              <th scope="col">Level-Name</th>
              <th scope="col">Maximale Bildgröße</th>
            </tr>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>352 x 288 Pixel</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>720 x 576 Pixel</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>1440 x 1152 Pixel</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>1920 x 1152 Pixel</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
      <td>
        Y'CbCr mit 4:2:0 Chroma-Subsampling in den meisten Profilen; die "High" und "4:2:2" Profile unterstützen auch 4:2:2 Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Funktion</th>
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen, mit Ausnahme in Malaysia (Stand 1. Oktober 2024), sodass MPEG-2 außerhalb von Malaysia frei verwendet werden kann.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat extrem geringe Nutzung und die Unterstützung wird aus Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und freier Videocodec, der ohne Lizenzgebühren oder Lizenzierung verwendet werden kann. Theora ist hinsichtlich Qualität und Kompressionsraten mit MPEG-4 Part 2 Visual und AVC vergleichbar, was ihn zu einer sehr guten, wenn auch nicht unbedingt erstklassigen Wahl für die Video-Kodierung macht. Aber sein Status als frei von jeglichen Lizenzierungsbedenken und seine relativ geringen CPU-Ressourcenanforderungen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Der geringe CPU-Einsatz ist besonders nützlich, da keine Hardwaredekoder für Theora verfügbar sind.

Theora wurde ursprünglich auf dem VC3-Codec von On2 Technologies basierend entwickelt. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, die ihn dann zum Theora-Standard entwickelten.

Ein Nachteil von Theora ist, dass er nur 8 Bits pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Trotzdem sind 8 Bits pro Komponente noch das am häufigsten verwendete Farbformat, sodass dies in den meisten Fällen nur eine geringe Unannehmlichkeit darstellt. Darüber hinaus kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil jedoch ist, dass er nicht von Safari unterstützt wird, was Theora nicht nur auf macOS, sondern auch auf all den Millionen von iPhones und iPads nicht verfügbar macht.

Das [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) bietet zusätzliche Details zu Theora sowie dem Ogg-Containerformat, in dem es verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Beliebig; jeder ungleich Null Wert wird unterstützt. Die Bildrate ist als 32-Bit-Zähler und ein 32-Bit-Nenner angegeben, um die Verwendung von nicht-ganzzahligen Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        Jede Kombination aus Breite und Höhe bis zu 1.048.560 x 1.048.560 Pixel
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
      <td>
        Y'CbCr mit 4:2:0, 4:2:2, und 4:4:4 Chroma-Subsampling bei 8 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Unterstützung für die Variable Bildrate (VFR) innerhalb eines einzelnen Streams bietet, können mehrere Streams innerhalb einer einzigen Datei verkettet werden, wobei jeder dieser Streams seine eigene Bildrate haben kann, was im Wesentlichen VFR ermöglicht. Dies ist jedoch unpraktisch, wenn sich die Bildrate häufig ändern muss.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Funktion</th>
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
          Edge unterstützt Theora mit dem optionalen
          <a href="https://apps.microsoft.com/detail/9n5tdp8vcmhs">Web Media Extensions</a>
          Add-on.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td><a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**)-Codec wurde ursprünglich von On2 Technologies erstellt. Nach dem Kauf von On2 veröffentlichte Google VP8 als ein offenes und lizenzfreies Videoformat mit einer Zusicherung, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Wenn der Browser es unterstützt, ermöglicht VP8 Video mit einem Alphakanal, wodurch das Video mit einem Hintergrund abgespielt werden kann, der durch das Video hindurch sichtbar sein kann, in einem durch den Alphakanal jedes Pixels bestimmten Grad.

Es gibt gute Browser-Unterstützung für VP8 in HTML-Inhalten, insbesondere in [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien.
Das macht VP8 zu einer guten Wahl für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl ist, wenn es Ihnen zur Verfügung steht.
Webbrowser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, aber nicht alle Browser, die dies tun, unterstützen es auch in HTML-Audio- und Video-Elementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn levelbasierte Einschränkungen werden erzwungen</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 16.384 x 16.384 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
      <td>Y'CbCr mit 4:2:0 Chroma-Subsampling bei 8 Bit pro Komponente</td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und spätere unterstützt VP8 nur in WebRTC-Verbindungen.</p>
        <p>Firefox unterstützt VP8 nur in MSE, wenn kein H.264-Hardwaredekoder verfügbar ist. Verwenden Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu überprüfen.</p>
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja; VP8 ist einer der im Spezifikationsanforderung deklarierten Codecs für WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, der von Google entwickelt wurde.
Wie VP8 ist VP9 vollkommen offen und lizenzfrei.
Seine Kodierungs- und Dekodierungsleistung ist mit der von AVC vergleichbar oder etwas schneller, bietet aber bessere Qualität.
Die codierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0-Chroma-Subsampling-Niveaus, aber seine Profile beinhalten Unterstützung für tiefere Farben und die gesamte Palette der Chroma-Subsampling-Modi.
Es unterstützt mehrere HDR-Implementierungen und bietet großen Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von vielen Browsern unterstützt, und hardwarebasierte Implementierungen des Codecs sind häufig.
VP9 ist einer der beiden Videocodecs, die für [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) obligatorisch sind (der andere ist [VP8](#vp8)).
Beachten Sie jedoch, dass die Unterstützung für WebM und VP9 in Safari erst ab Version 14.1 eingeführt wurde, sodass, wenn Sie sich entscheiden, VP9 zu verwenden, Sie ein Ersatzformat wie AVC oder HEVC für iPhone, iPad und Mac-Nutzer anbieten sollten.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und bei Bedarf Ersatzvideo bereitstellen können).
Dies gilt besonders, wenn Sie einen offenen Codec anstelle eines proprietären verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, wenn es nicht levelbasierte Einschränkungen gibt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 65.536 x 65.536 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbtiefen</th>
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
              <th scope="row">Profil 0</th>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profil 1</th>
              <td>8</td>
              <td>4:2:0, 4:2:2, und 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Profil 2</th>
              <td>10 bis 12</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profil 3</th>
              <td>10 bis 12</td>
              <td>4:2:0, 4:2:2, und f:4:4</td>
            </tr>
          </tbody>
        </table>
        <p>
          Unterstützte Farbräume:
          <a href="https://en.wikipedia.org/wiki/Rec._601">Rec. 601</a>,
          <a href="https://en.wikipedia.org/wiki/Rec._709">Rec. 709</a>,
          <a href="https://en.wikipedia.org/wiki/Rec._2020">Rec. 2020</a>,
          <a href="https://en.wikipedia.org/wiki/SMPTE_C">SMPTE C</a>, SMPTE-240M
          (veraltet; ersetzt durch Rec. 709), und
          <a href="https://en.wikipedia.org/wiki/SRGB">sRGB</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>
        Ja; HDR10+, <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">HLG</a>, und
        <a href="https://en.wikipedia.org/wiki/Perceptual_Quantizer">PQ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p>
          Firefox unterstützt VP8 nur in MSE, wenn kein H.264-Hardwaredekoder verfügbar ist. Verwenden Sie
          [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu prüfen.
        </p>
        </ul>
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Verwaltende Organisation</th>
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Video-Codecs

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen, um sich vorzubereiten:

- Möchten Sie ein offenes Format verwenden, oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, auf deren Kompatibilität Sie verzichten können?
- Wie alt ist die älteste Version eines Webbrowsers, die Sie unterstützen müssen? Zum Beispiel: Müssen Sie auf jedem Browser funktionieren, der in den letzten fünf Jahren veröffentlicht wurde, oder nur im letzten Jahr?

In den unten stehenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als am besten geeignet für den Anwendungsfall betrachtet wird, proprietär ist oder Lizenzgebühren erfordert, werden zwei Optionen bereitgestellt: zunächst eine offene und gebührenfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format auswählen, das am besten zu Ihren Anforderungen passt. Die erste Empfehlung bietet in der Regel eine gute Kombination aus Qualität, Leistung und Kompatibilität. Die zweite Option ist die weitaus kompatiblere Wahl, auf Kosten einiger Einbußen bei Qualität, Leistung und/oder Größe.

### Empfehlungen für Alltagsvideos

Werfen wir zunächst einen Blick auf die besten Optionen für Videos, die auf einer typischen Webseite präsentiert werden, wie etwa einem Blog, einer Informationsseite oder der Webseite eines kleinen Unternehmens, auf der Videos zur Demonstration von Produkten verwendet werden (aber nicht, wo die Videos selbst ein Produkt sind), und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container, der den **[VP9](#vp9)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Dies sind alles offene, gebührenfreie Formate, die im Allgemeinen gut unterstützt werden, obwohl nur in recht aktuellen Browsern, weshalb eine Fallback-Option eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audiocodec. Der MP4-Container mit AVC- und AAC-Codecs stellt nämlich eine weit-verbreitete Kombination dar — in der Tat in jedem führenden Browser — und die Qualität ist für die meisten Anwendungsfälle typischerweise gut. Stellen Sie jedoch sicher, dass Sie die Lizenzanforderungen einhalten.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element benötigt einen schließenden `</video>`-Tag, unabhängig davon, ob Sie irgendwelche {{HTMLElement("source")}}-Elemente darin haben oder nicht.

### Empfehlungen für hochwertige Videopräsentationen

Wenn Ihr Ziel darin besteht, Video in höchstmöglicher Qualität zu präsentieren, profitieren Sie wahrscheinlich davon, so viele Formate wie möglich anzubieten, da die Codecs, die die beste Qualität liefern können, tendenziell auch die neuesten sind und daher am ehesten Lücken in der Browser-Kompatibilität aufweisen.

1. Ein WebM-Container, der AV1 für Video und Opus für Audio verwendet. Wenn Sie in der Lage sind, das High- oder Professional-Profil bei der Kodierung von AV1 zu verwenden, auf einem hohen Level wie 6.3, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erreichen, während Sie eine exzellente Videoqualität beibehalten. Die Kodierung Ihres Audios mit Opus's Fullband-Profil bei einer Abtastrate von 48 kHz maximiert die erfasste Audiobandbreite und erfasst fast den gesamten Frequenzbereich, der im menschlichen Gehör erreichbar ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container, der den [HEVC](#hevc_h.265)-Codec mit einem der fortgeschrittenen Main-Profile verwendet, wie Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4 Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies exzellente Grafikqualität mit bemerkenswerter Farbwiedergabe. Zudem können Sie optional HDR-Metadaten einschließen, um Video mit hohem Dynamikumfang bereitzustellen. Für Audio verwenden Sie den AAC-Codec mit einer hohen Abtastrate (mindestens 48 kHz, idealerweise 96 kHz), und kodieren es mit komplexer Kodierung anstelle von schneller Kodierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Derzeit gibt es keine verlustfreien — oder sogar nahezu verlustfreien — Videocodecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Beispielsweise benötigt unkomprimiertes 1080p Video (1920 mal 1080 Pixel) mit 4:2:0 Chroma Subsampling mindestens 1.5 Gbps. Die Verwendung verlustfreier Kompression wie FFV1 (die in Webbrowsern nicht unterstützt wird) könnte dies möglicherweise auf etwa 600 Mbps reduzieren, je nach Inhalt. Das sind immer noch eine enorme Menge Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keinen realen Anwendungsfall praktikabel.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus anbieten; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec auszuwählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass so wenig Kompression wie möglich durchgeführt wird. Eine Möglichkeit, dies zu tun, besteht darin, den Codec auf "schnelle" Kompression zu konfigurieren, was von Natur aus bedeutet, dass weniger Kompression erreicht wird.

#### Vorbereitung des Videos extern

Um Videos für Archivierungszwecke außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Kompression der ursprünglichen unkomprimierten Videodaten durchführt. Zum Beispiel kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Videos im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 infile
```

Während andere Codecs bei der Komprimierung des Videos um einen erheblichen Spielraum bessere Qualitätsniveaus aufweisen können, neigen deren Encoder dazu, so langsam zu sein, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Kompression erhalten, bei etwa gleicher Gesamtqualität wesentlich schneller ist.

#### Aufzeichnung von Videos

Angesichts der Einschränkungen, wie nah an verlustfreie Qualität man kommen kann, könnten Sie in Betracht ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, um Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt zu erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, um [AV1](#av1) Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4 Chroma Subsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codec#flac_free_lossless_audio_codec) für verlustfreies Audio aufzuzeichnen. Die resultierende Datei wird eine Bitrate von nicht mehr als 800 Mbps verwenden, die zwischen den Video- und Audiotracks geteilt wird. Sie müssen diese Werte wahrscheinlich je nach Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Netzwerkübertragung und würde wahrscheinlich nur lokal verwendet.

Wenn wir den Wert des `codecs`-Parameters in seine durch Punkte abgegrenzten Eigenschaften zerlegen, sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                          |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Die vier Zeichen lange Code-Bezeichnung (4CC), die den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                               |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil angeben würde.                                                                                                                                                 |
| `19H`  | Der Level und die Stufe. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und zeigt die hohe Stufe von Level 6.3 an.                                                                                                      |
| `12`   | Die Farbtiefe. Dies bedeutet 12 Bit pro Komponente. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchstgenaue Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                                      |
| `0`    | Der Monochrom-Modus-Flag. Wenn 1, würden keine Chroma-Ebenen aufgezeichnet und alle Daten sollten streng Luma-Daten sein, was zu einem Graustufenbild führen würde. Wir haben 0 angegeben, da wir Farbe wünschen.                                                                                     |
| `000`  | Der Chroma-Subsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrom-Modus-Wert 0, zeigt an, dass wir 4:4:4 Chroma Subsampling wollen, ohne Verlust von Farbdaten. |
| `09`   | Die zu verwendenden Farbursprünge. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farbe verwenden wollen, die für HDR verwendet wird.                                               |
| `16`   | Die zu verwendenden Übertragungsmerkmale. Dieser Wert stammt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 zeigt an, dass wir die Merkmale für BT.2100 PQ-Farbe verwenden wollen.                                                              |
| `09`   | Die zu verwendenden Matrixkoeffizienten, ebenfalls aus dem [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Luminanz verwenden wollen; dies ist auch als BT.2010 YbCbCr bekannt.                            |
| `1`    | Der Video-"Vollbereich"-Flag. Ein Wert von 1 zeigt an, dass wir den vollen Farbbereich verwenden wollen.                                                                                                                                                                                              |

Die Dokumentation zu Ihren Codec-Auswahlen bietet wahrscheinlich Informationen, die Sie verwenden, um Ihren `codecs`-Parameter zu erstellen.

## Siehe auch

- [Webaudio-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Unterstützung von Medieninhalten in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die "Codecs"- und "Profiles"-Parameter für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

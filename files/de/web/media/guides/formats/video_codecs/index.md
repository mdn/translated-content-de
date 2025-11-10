---
title: Web-Video-Codec-Leitfaden
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Dieser Leitfaden stellt die Video-Codecs vor, denen Sie am wahrscheinlichsten im Web begegnen oder die Sie in Betracht ziehen könnten zu verwenden. Er enthält Zusammenfassungen ihrer Fähigkeiten, eventueller Kompatibilitäts- und Nützlichkeitsprobleme sowie Ratschläge, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der schieren Menge an unkomprimierten Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie zu speichern, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die benötigt wird, um unkomprimierte Videos zu speichern:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in voller Farbtiefe (4 Byte pro Pixel) sind 8.294.400 Byte.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Byte (ca. 249 MB) belegen.
- Eine Minute HD-Video würde 14,93 GB Speicher benötigen.
- Eine relativ typische 30-minütige Videokonferenz benötigt etwa 447,9 GB Speicher, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ erfordern.

Nicht nur der benötigte Speicherplatz ist enorm, auch die Netzwerkbandbreite, die erforderlich wäre, um ein solches unkomprimiertes Video zu übertragen, wäre mit 249 MB pro Sekunde—ohne Audio und Overhead—enorm. Hier kommen Video-Codecs ins Spiel. Genau wie Audiocodecs es mit den Audiodaten tun, komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, d.h. das dekodierte Video entspricht nicht genau der Quelle. Einige Details können verloren gehen; der Grad des Verlustes hängt vom Codec und dessen Konfiguration ab, aber als allgemeine Regel gilt: Je mehr Kompression Sie erreichen, desto mehr Detail- und Qualitätsverlust tritt auf. Es gibt einige verlustfreie Codecs, aber sie werden in der Regel für die Archivierung und Speicherung zur lokalen Wiedergabe verwendet und nicht für den Einsatz in Netzwerken.

## Häufige Codecs

Die folgenden Video-Codecs sind die am häufigsten im Web verwendeten. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec gibt einen Link zu einem Abschnitt weiter unten an, der zusätzliche Details über den Codec bietet, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Ihnen bewusst sein sollten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (Kurz)</th>
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
      <td>MPEG-1 Teil 2 Visual</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Teil 2 Visual</td>
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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: spezifische Details über das Format und den Inhalt des Quellvideos und die Eigenschaften und Konfiguration des Codecs, der beim Kodieren des Videos verwendet wird.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, macht die resultierenden Daten im Allgemeinen ebenfalls größer. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist es der Verlust an Qualität wert, um die Datengröße zu reduzieren; in anderen Fällen ist der Qualitätsverlust inakzeptabel, und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Einfluss des Quellvideoformats auf das kodierte Ausgabeformat

Das Ausmaß, in dem das Format des Quellvideos die Ausgabe beeinflusst, variiert je nach Codec und wie er funktioniert. Wenn der Codec die Medien in ein internes Pixelformat konvertiert oder das Bild auf andere Weise als durch einfache Pixel darstellt, macht das Format des ursprünglichen Bildes keinen Unterschied. Dinge wie Bildrate und, offensichtlich, Auflösung werden jedoch immer Auswirkungen auf die Ausgabegröße der Medien haben.

Zusätzlich haben alle Codecs ihre Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern, sind nicht gut darin, scharfe Kanten zu reproduzieren oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder eine beliebige Anzahl von Möglichkeiten. Alles hängt von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss des Quellvideoformats und -inhalts auf die kodierte
    Videoqualität und -größe
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
        Je höher die Farbbittiefe, desto höher ist die Qualität der Farbtiefe
        im Video. Darüber hinaus erlauben in gesättigten Bereichen des Bildes
        (d.h. dort, wo die Farben rein und intensiv sind, wie ein leuchtendes,
        reines Rot: <code>rgb(255 0 0 / 100%)</code>) Farbtiefen unter
        10 Bits pro Komponente (10-Bit-Farbe) das Banding, bei dem
        Farbverläufe nicht ohne sichtbare Farbverläufe dargestellt werden
        können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren
        komprimierten Dateigrößen führen. Der entscheidende Faktor ist, welches interne
        Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst in erster Linie die wahrgenommene Flüssigkeit der Bewegung
        im Bild. Bis zu einem gewissen Punkt wird die Bewegung umso flüssiger
        und realistischer wahrgenommen, je höher die Bildrate ist. Irgendwann
        wird jedoch der Punkt erreicht, an dem eine
        abnehmende Rückkehr eintritt. Siehe <a href="#reduced_frame_rate">Bildrate</a>
        unten für Details.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird während der Kodierung nicht reduziert,
        führen höhere Bildraten zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Kompression von Video funktioniert typischerweise, indem Bilder
        miteinander verglichen werden, um herauszufinden, wo sie sich
        unterscheiden, und Datenstrukturen erstellt werden, die genügend
        Informationen enthalten, um das vorherige Bild so zu aktualisieren, dass
        es dem folgenden Bild ungefähr ähnlich sieht. Je mehr aufeinander
        folgende Bilder sich voneinander unterscheiden, desto größer sind diese
        Unterschiede, und desto weniger effektiv ist die Kompression beim
        Vermeiden der Einführung von Artefakten in das komprimierte Video.
      </td>
      <td>
        Die durch die Bewegung verursachte Komplexität führt zu größeren
        Zwischenbildern aufgrund der höheren Anzahl von Unterschieden zwischen
        den Bildern. Aus diesem und anderen Gründen wird die Ausgabedatei umso
        größer, je mehr Bewegung in einem Video vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Körnigkeit im Bild)
        führt zu Variabilität. Variabilität macht die Kompression
        generell schwieriger und führt zu mehr Qualitätsverlusten aufgrund der
        Notwendigkeit, Details zu verwerfen, um das gleiche Kompressionsniveau
        zu erreichen.
      </td>
      <td>
        Je mehr Variabilität – wie Rauschen – im Bild vorhanden ist, desto
        komplexer ist der Kompressionsprozess und desto weniger Erfolg hat der Algorithmus
        wahrscheinlich, das Bild im gleichen Maße zu komprimieren. Es sei denn, Sie
        konfigurieren den Encoder so, dass er einige oder alle durch Rauschen
        verursachten Variationen ignoriert, wird das komprimierte Video
        größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video, das auf derselben Bildschirmgröße
        präsentiert wird, wird in der Regel in der Lage sein, die ursprüngliche
        Szene genauer darzustellen, abgesehen von Effekten, die während der
        Kompression eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies spielt
        eine entscheidende Rolle in der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Aspekte das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des Encoders, den Sie verwenden, und wie er konfiguriert ist. Zusätzlich zu allgemeinen Codec-Optionen könnte der Encoder konfiguriert werden, um die Bildrate zu reduzieren, Rauschen zu bereinigen und/oder die Gesamtauflösung des Videos während der Kodierung zu reduzieren.

### Einfluss der Codec-Konfiguration auf die kodierte Ausgabe

Die Algorithmen, die zur Videokodierung verwendet werden, verwenden in der Regel eine oder mehrere allgemeine Techniken zur Kodierung. Im Allgemeinen wird jede Konfigurationsoption, die darauf abzielt, die Ausgabedateigröße des Videos zu reduzieren, wahrscheinlich negative Auswirkungen auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Kodierung zu wählen, die in einer viel größeren codierten Datei resultiert, aber eine perfekte Reproduktion des ursprünglichen Videos beim Dekodieren ermöglicht.

Zusätzlich kann jedes Encoder-Dienstprogramm Variationen dabei aufweisen, wie sie das Quellvideo verarbeiten, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

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
        Dateien sind wahrscheinlich immer noch zu groß für die allgemeine
        Nutzung.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße werden Artefakte und andere Arten von
        Qualitätsverschlechterung auftreten, abhängig vom spezifischen Codec
        und wie viel Kompression angewendet wird.
      </td>
      <td>
        Je mehr erlaubt wird, dass das kodierte Video von der Quelle abweicht,
        desto einfacher ist es, höhere Kompressionsraten zu erreichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto ähnlicher sieht das kodierte
        Video dem Originalmedium aus.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren
        kodierten Videodateien; der Grad, zu dem dies zutrifft, variiert je nach
        Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich im Allgemeinen mit höheren Bitraten</td>
      <td>Höhere Bitraten führen von Natur aus zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Kodieren von Video verfügbar sind, und die Werte, die diesen Optionen zugewiesen werden, variieren nicht nur von einem Codec zum anderen, sondern auch abhängig von der von Ihnen verwendeten Kodierungssoftware. Die Dokumentation, die mit Ihrer Kodierungssoftware geliefert wird, hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder umgeordneten Daten zu sichtbar negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, da das Video dargestellt wird. Jedes Videobild wird angezeigt, indem ein Satz von Änderungen auf das aktuell sichtbare Bild angewendet wird. Das bedeutet, dass alle Fehler oder Artefakte im Laufe der Zeit kumuliert werden und zu Störungen oder anderweitig seltsamen oder unerwarteten Abweichungen im Bild führen, die eine Zeitlang bestehen bleiben.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselframes** (auch bekannt als **Intra-Frames** oder **i-Frames**) in die Videodatei eingefügt. Die Schlüsselframes sind vollständige Bilder, die verwendet werden, um sichtbare Schäden oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was nach der Wiederherstellung aus den codierten Daten nicht mehr so aussieht wie vor der Kompression. Es gibt viele Formen des Aliasing; die häufigsten, die Sie möglicherweise sehen, sind:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht,
          wenn ein Muster im Quellbild und die Art und Weise, wie der Encoder
          arbeitet, räumlich leicht verschoben ausgerichtet sind. Die vom
          Encoder erzeugten Artefakte führen dazu, dass im Muster des
          Quellbilds beim Dekodieren seltsame, wirbelnde Effekte eingeführt
          werden.
        </p>
      </td>
      <td>
        <img alt="Eine Backsteinmauer, die aufgrund des Moiré-Musters einen wirbelnden Effekt ähnlich Wellen zeigt" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt,
          das auftritt, wenn diagonale gerade oder kurvige Ränder, die glatt
          sein sollten, ein gezacktes Aussehen haben und einem Satz von Treppenstufen
          ähneln. Dies ist der Effekt, der durch "Antialiasing"-Filter
          reduziert wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die aufgrund von Aliasing wie eine Treppe wirken" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der <strong>Wagenradeffekt</strong> (oder
          <strong
            ><a href="https://de.wikipedia.org/wiki/Stroboskopeffekt">Stroboskopeffekt</a></strong
          >) ist der visuelle Effekt, der in Filmen häufig zu sehen ist, bei
          dem ein sich drehendes Rad aufgrund einer Interaktion zwischen der
          Bildrate und dem Kompressionsalgorithmus mit der falschen
          Geschwindigkeit oder sogar rückwärts zu rotieren scheint. Der
          gleiche Effekt kann bei jedem sich wiederholenden Muster auftreten,
          das sich bewegt, wie z. B. die Schwellen auf einer Bahnlinie,
          Pfosten entlang einer Straße usw. Dies ist ein zeitliches (zeitbasiertes)
          Aliasing-Problem; die Geschwindigkeit der Rotation stört die
          Frequenz der Komprimierungs- oder Kodierungsabnahme.
        </p>
      </td>
      <td>
        <img alt="Drehendes Rad aufgrund von Aliasing, das den Wagenradeffekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbverläufe an Kanten

**Farbverläufe an Kanten** sind eine Art von visuellen Artefakten, die sich als falsche Farben entlang der Ränder farbiger Objekte innerhalb der Szene darstellen. Diese Farben haben keine beabsichtigte Farbbeziehung zu den Inhalten des Bildes.

### Verlust der Schärfe

Der Akt des Entfernens von Daten im Prozess der Videokodierung erfordert, dass einige Details verloren gehen. Wenn genug Kompression angewendet wird, könnten Teile oder möglicherweise das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder trüben Erscheinungsbild führt.

Verlust der Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text – insbesondere kleiner Text – sehr detailorientierter Inhalt ist, bei dem geringfügige Veränderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Komprimierungsalgorithmen können **[Klingeln](https://de.wikipedia.org/wiki/Klingelartefakt)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit vom Kompressionsalgorithmus erzeugten farbigen Pixeln kontaminiert werden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die sich über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund erstrecken. Dies ist besonders häufig bei höheren Kompressionsstufen der Fall.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Stufen und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ist in gewisser Hinsicht ähnlich dem [Moskito-Rauschen](#moskito-rauschen), außer dass während der Klingeleffekt mehr oder weniger konstant und unverändert ist, schimmert Moskito-Rauschen und bewegt sich.

Klingeln ist eine weitere Art von Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisieren

**Posterisierung** tritt auf, wenn die Kompression zum Verlust von Farbdetaile in Verläufen führt. Anstelle von sanften Übergängen durch die verschiedenen Farben in einem Bereich wird das Bild klobig, mit Farbklecksen, die das ursprüngliche Erscheinungsbild des Bildes approximieren.

![Weißkopfseeadler-Foto mit körniger Auflösung.](posterize-effect.jpg)

Beachten Sie die Klobigkeit der Farben im Federkleid des Weißkopfseeadlers im Foto oben (und der Schneeeule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisationsartefakte verloren.

### Konturierung

**Konturierung** oder **Farbverlaufseffekt** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke zu Bändern oder Streifen im Bild werden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Dadurch zeigt der Inhalt des Videos ein "geschichtetes" Aussehen, bei dem die Übergänge von Farbe zu Farbe abrupt sind und Streifen von Farbe erscheinen.

![Beispiel eines Bildes, dessen Kompression zur Konturierung geführt hat](contouring-effect.jpg)

Im Beispielbild oben sehen Sie, wie der Himmel Bänder in verschiedenen Blautönen aufweist, anstatt ein konsistenter Verlauf zu sein, da sich die Himmelfarbe zum Horizont ändert. Dies ist der Konturierungseffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Randunruhe** auftritt, die als flackernde Trübung oder Schimmer wahrgenommen wird, die ungefähr den Außenbereichen von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann in der Erscheinung dem [Klingeln](#klingeln) ähneln.

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an verschiedenen Stellen, einschließlich am Himmel rund um die Brücke. In der oberen rechten Ecke zeigt ein Ausschnitt eine Nahaufnahme eines Teils des Bildes, der Moskito-Rauschen aufweist.

Moskito-Rauschen-Artefakte sind am häufigsten in MPEG-Videos zu finden, können jedoch immer auftreten, wenn ein diskreter Kosinustransformationsalgorithmus (DCT) verwendet wird; dies schließt zum Beispiel JPEG-Standbilder ein.

### Bewegungsbereitstellung von Blockgrenzenartefakten

Die Kompression von Video funktioniert im Allgemeinen, indem zwei Bilder miteinander verglichen und die Unterschiede zwischen ihnen erfasst werden, ein Bild nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest montiert ist oder die Objekte im Bild relativ stationär sind, aber wenn es im Bild eine große Menge an Bewegungen gibt, können die Unterschiede zwischen den Bildern so groß sein, dass die Kompression keinen Nutzen bringt.

**[Motion Compensation](https://de.wikipedia.org/wiki/Bewegungskompensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder der Objekte im Sichtfeld) sucht und herausfindet, wie viele Pixel sich das sich bewegende Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die verschoben wurden und nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die bewegten Objekte, baut dann eine Art internes Bild auf, das dem ursprünglichen ähnelt, jedoch mit allen Objekten, die auf ihre neuen Positionen verschoben wurden. Theoretisch nähert dies das Erscheinungsbild des neuen Bildes an. Um die Arbeit abzuschließen, werden dann die verbleibenden Unterschiede gefunden, und dann werden der Satz von Objektverschiebungen und der Satz von Pixelunterschieden in den Daten gespeichert, die das neue Bild darstellen. Dieses Objekt, das die Verschiebung und die Pixelunterschiede beschreibt, wird als **Restbild** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalbild</th>
      <th scope="col" style="width: 216px">Unterschiede zwischen einzelnen Bildern</th>
      <th scope="col" style="width: 216px">
        Unterschiede nach Bewegungsbereitstellung
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalbild des Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Bild und dem folgenden Bild." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Bildern nach der Verschiebung um zwei Pixel nach rechts"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Das erste volle Bild, wie es vom Betrachter gesehen wird.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Bild und dem
        folgenden Bild zu sehen. Alles andere ist schwarz. Bei näherem
        Hinsehen können wir erkennen, dass die Mehrheit dieser Unterschiede
        von einer horizontalen Kamerabewegung stammt, was dies zu einem guten
        Kandidaten für die Bewegungsbereitstellung macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen
        wir hier die Neigung der Kamera, indem wir zuerst das erste Bild um
        zwei Pixel nach rechts verschieben und dann die Differenz ermitteln.
        Dies kompensiert die Neigung der Kamera und ermöglicht mehr
        Überlappung zwischen den beiden Bildern.
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

Es gibt zwei allgemeine Arten der Bewegungsbereitstellung: **Globale Bewegungsbereitstellung** und **Blockbewegungsbereitstellung**. Die globale Bewegungsbereitstellung passt im Allgemeinen Kamerabewegungen wie Fahren, Dolly-Bewegungen, Schwenken, Neigen, Rollen und Auf- und Abbewegungen an. Die Blockbewegungsbereitstellung behandelt lokalisierte Änderungen, indem kleinere Abschnitte des Bildes gesucht werden, die mit Bewegungsbereitstellung kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe in einem Raster, aber es gibt Formen der Bewegungsbereitstellung, die variable Blockgrößen und sogar überlappende Blöcke erlauben.

Es gibt jedoch Artefakte, die durch Bewegungsbereitstellung auftreten können. Diese treten entlang von Blockgrenzen auf, in Form von scharfen Kanten, die falsches Klingeln und andere Randeffekte erzeugen. Diese sind auf die mathematischen Prozesse im Kodieren der Restbilder zurückzuführen und können leicht bemerkt werden, bevor sie durch das nächste Schlüsselframe repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Dimensionen des Videos zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Während der unmittelbare Verlust an Größe oder Flüssigkeit der Wiedergabe ein negativer Faktor sein kann, kann eine sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video deutlich kleiner sein, während die visuelle Qualität viel höher ist; selbst nach der Wiederskalierung während der Wiedergabe könnte das Ergebnis besser sein als die Kodierung des ursprünglichen Videos in voller Größe und die Akzeptanz des erforderlichen Qualitätsverlustes, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ebenso können Sie die Bildraten aus dem Video vollständig entfernen und die Bildrate reduzieren, um dies zu kompensieren. Dies hat zwei Vorteile: Es macht das Gesamtvideo kleiner, und diese kleinere Größe ermöglicht es der Bewegungsbereitstellung, noch mehr für Sie zu leisten. Wenn zum Beispiel die Berechnung von Bewegungsunterschieden für zwei Bilder durchgeführt wird, die sich aufgrund von Zwischenbildbewegungen um zwei Pixel unterscheiden, könnte das Überspringen jedes zweiten Bildes zu einer Berechnung eines Unterschieds führen, der vier Pixel Bewegung ergibt. Dies ermöglicht es der Gesamtbewegung der Kamera, mit weniger Restbildern dargestellt zu werden.

Die absolute Mindestbildrate, die ein Video haben kann, bevor sein Inhalt vom menschlichen Auge nicht mehr als Bewegung wahrgenommen wird, liegt bei etwa 12 Bildern pro Sekunde. Darunter wird das Video zu einer Reihe von Standbildern. Filmaufnahmen haben typischerweise 24 Bilder pro Sekunde, während Standardfernsehen etwa 30 Bilder pro Sekunde (etwas weniger, aber nah genug) und hochauflösendes Fernsehen zwischen 24 und 60 Bildern pro Sekunde liegt. Alles von 24 FPS aufwärts wird im Allgemeinen als ausreichend flüssig angesehen; 30 oder 60 FPS sind ein ideales Ziel, abhängig von Ihren Bedürfnissen.

Am Ende liegen die Entscheidungen darüber, welche Opfer Sie bringen können, ganz bei Ihnen und/oder Ihrem Designteam.

## Codec-Details

### AV1

Der Codec **AOMedia Video 1** (**AV1**) ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50 % höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und wurde sowohl für das {{HTMLElement("video")}}-Element als auch für [WebRTC](/de/docs/Web/API/WebRTC_API) entwickelt.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional** mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Darüber hinaus ist eine Reihe von **Levels** spezifiziert, die jeweils Grenzen für eine Reihe von Attributen des Videos definieren. Zu diesen Attributen gehören Bildabmessungen, Bildfläche in Pixeln, Anzeigerate und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Grenzen für die Anzahl der Kacheln und Kachelspalten, die im Kodierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber seine maximale Bildgröße in Pixeln ist 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es ist jedoch erwähnenswert, dass zumindest für Firefox und Chrome die Levels derzeit beim Software-Decodieren ignoriert werden, und der Decoder einfach das Bestmögliche versucht, um das Video entsprechend den bereitgestellten Einstellungen abzuspielen. Aus Kompatibilitätsgründen sollten Sie jedoch die Grenzen des gewählten Levels einhalten.

Der Hauptnachteil von AV1 ist derzeit, dass es sehr neu ist und die Unterstützung noch in die meisten Browser integriert wird. Darüber hinaus werden Encoder und Decoder immer noch auf Leistung optimiert, und Hardware-Encoder und -Decoder sind größtenteils noch in der Entwicklung und nicht in der Produktion. Aus diesem Grund dauert das Encodieren eines Videos im AV1-Format sehr lange, da alle Arbeiten in Software durchgeführt werden.

Vorläufig ist AV1 aus diesen Gründen noch nicht bereit, Ihre erste Wahl als Videocodec zu sein, aber Sie sollten darauf achten, wann es bereit für den Einsatz ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Level des Videos; das theoretische Maximum erreicht 800 Mbps bei Level 6.3
        </p>
        <p>
          Siehe die
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Level-Tabellen</a
          > in der AV1-Spezifikation, die die maximalen Auflösungen und Raten für jedes Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Variiert je nach Level; zum Beispiel hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 120 FPS erreichen kann
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
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jeden Wert zwischen diesen annehmen darf
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
        <a href="https://de.wikipedia.org/wiki/ISO_IEC_Base_Media_File_Format"
          >ISOBMFF</a
        >, MPEG-TS,
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

Der **Advanced Video Coding** (**AVC**)-Standard der MPEG-4-Spezifikationssuite ist in der identischen ITU H.264-Spezifikation und der MPEG-4 Teil 10-Spezifikation festgelegt. Er ist ein bewegungskompensationsbasierter Codec, der heute weit verbreitet für alle Arten von Medien verwendet wird, einschließlich Fernsehausstrahlungen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist äußerst flexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel wurde das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien entwickelt, wobei weniger Bandbreite verwendet wird als das Main Profile (das in einigen Regionen für digitales Standardfernsehen verwendet wird) oder das High Profile (das für Blu-Ray Disc-Video verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chroma-Subsampling; Das High 10 Profile fügt Unterstützung für 10-Bit-Farben hinzu, und erweiterte Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC verfügt auch über spezielle Funktionen wie die Unterstützung mehrerer Ansichten derselben Szene (Multiview Video Coding), die es unter anderem ermöglicht, stereoskopisches Video zu produzieren.

AVC ist jedoch ein proprietäres Format, und zahlreiche Patente werden von mehreren Parteien in Bezug auf seine Technologien gehalten. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl das Via LA Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endnutzer kostenfrei ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs umfasst) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser dazu nicht verpflichtet sind, tun dies einige.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen die Hardware-Kodierung und -Dekodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://via-la.com/licensing-programs/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Variiert nach Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert nach Level; bis zu 300 FPS ist möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
          >DCT-basierter Algorithmus</a
        >, obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des Bildes zu erstellen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8.192 x 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>Einige der häufigeren oder interessanten Profile:</p>
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
        Ja; <a href="https://de.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder
        Advanced HDR/SL-HDR; beide sind Teil von ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Firefox-Unterstützung für AVC hängt von den integrierten oder vorinstallierten Codecs für AVC und dessen Container des Betriebssystems ab, um Bedenken hinsichtlich Patenten zu vermeiden.
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
        <a href="https://via-la.com/licensing-programs/avc-h-264/"
          >erfordert eine Lizenz</a
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263**-Codec der ITU wurde hauptsächlich für den Einsatz in Situationen mit geringer Bandbreite entwickelt. Insbesondere liegt der Fokus auf Videokonferenzen über PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme). Trotz der Optimierung für Netzwerke mit geringer Bandbreite ist er ziemlich CPU-intensiv und möglicherweise nicht ausreichend leistungsfähig auf Computern mit niedrigeren Spezifikationen. Das Datenformat ist ähnlich dem von MPEG-4 Teil 2.

H.263 wurde im Web nie weit verbreitet. Varianten von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie zum Beispiel Flash-Video oder den Sorenson-Codec. Allerdings hat kein großer Browser je H.263-Unterstützung standardmäßig aufgenommen. Bestimmte Medien-Plugins haben die Unterstützung von H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines codierten Videos in Bezug auf die maximale Bitrate pro Frame (Bild), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann darf das Video diesen Wert für jedes Bild nicht überschreiten. Die finale Bitrate hängt von diesem, der Bildrate, der Kompression und der gewählten Auflösung und Blockformat ab.

H.263 wurde von H.264 abgelöst und wird daher als veraltetes Medienformat angesehen, das Sie nach Möglichkeit vermeiden sollten. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, besteht darin, Unterstützung auf sehr alten Geräten zu benötigen, auf denen H.263 die beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) im Besitz einer Reihe von Organisationen und Unternehmen, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und so weiter. Um H.263 zu verwenden, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbegrenzt, aber typischerweise unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
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
        <p>Bis zu 1408 x 1152 Pixel.</p>
        <p>
          Version 1 von H.263 speichert eine Reihe von Bildgrößen, die unterstützt werden. Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixeln sowie die Anzahl der Zeilen für jedes Frame von
        Luminanz- und Chrominanzproben.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
        <a href="https://www.itu.int/rec/T-REC-H.263/"
          >https://www.itu.int/rec/T-REC-H.263/</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; eine geeignete Lizenz oder Lizenzen sind erforderlich. Beachten Sie, dass
        mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **High Efficiency Video Coding** (**HEVC**) Codec wird sowohl durch ITUs **H.265** als auch durch MPEG-H Teil 2 (die noch in Entwicklung befindliche Nachfolge von MPEG-4) definiert. HEVC wurde entwickelt, um das effiziente Codieren und Decodieren von Videos in Größen einschließlich sehr hoher Auflösungen (einschließlich 8K-Video) zu unterstützen, mit einer Struktur, die speziell entwickelt wurde, damit Software moderne Prozessoren effektiv nutzen kann. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie die von [AVC](#avc_h.264), aber mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Codierbaum-Einheit (CTU) - ähnlich dem Makroblock, der in früheren Codecs verwendet wird - aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede in derselben Codierbaum-Einheit verwendete Chroma-Probe, sowie alle erforderlichen Syntaxelemente. Diese Struktur unterstützt eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-Bit Farbtiefe pro Komponente mit 4:2:0 Chroma-Subsampling unterstützt. Ebenfalls interessant ist, dass 4:4:4 Videos speziell behandelt werden. Anstelle der Luma-Proben (die die Pixel des Bildes in Graustufen repräsentieren) und der Cb- und Cr-Proben (die angeben, wie die Graustufen verändert werden sollen, um Farb-Pixel zu erzeugen), werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann bei der Wiedergabe kombiniert werden, um ein Vollfarbbild zu erzeugen.

HEVC ist ein proprietäres Format und durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird [von Via LA](https://via-la.com/licensing-programs/hevc-vvc/) verwaltet; Gebühren werden von Entwicklern statt von Inhaltsproduzenten und Distributoren erhoben. Stellen Sie sicher, dass Sie die neuesten Lizenzbedingungen und Anforderungen überprüfen, bevor Sie eine Entscheidung darüber treffen, ob Sie HEVC in Ihrer App oder Website verwenden möchten!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800.000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS ist möglich</td>
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
      <td>128 x 96 bis 8.192 x 4.320 Pixel; variiert je nach Profil und Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Informationen unten sind für die Hauptprofile angegeben. Es gibt eine
          Reihe von weiteren Profilen, die hier nicht aufgeführt sind.
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
          Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.
        </p>
        <p>
          Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat den gleichen Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Decoder.
        </p>
        <p>
          Firefox aktiviert HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 mit entweder Hardware- (auf Geräten, die es unterstützen, wobei der Bereich der gleiche ist wie bei Edge) oder Softwarelösung (auf Windows muss der Benutzer bezahlen und eine Erweiterung installieren)</li>
            <li>macOS ab Firefox 136 mit entweder Hardware- oder Softwarelösung.</li>
            <li>Linux ab Firefox 137 mit entweder Hardware- oder Softwarelösung (über das System-ffmpeg).</li>
            <li>Android ab Firefox 137 mit nur Hardware.</li>
          </ul>
        </p>
        <p>
          Opera und andere auf Chromium basierende Browser haben denselben Unterstützungsstatus wie Chrome.
        </p>
        <p>
          Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder später.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://de.wikipedia.org/wiki/ISO_IEC_Base_Media_File_Format"
          >ISOBMFF</a
        >, MPEG-TS,
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
        <a href="https://www.itu.int/rec/T-REC-H.265"
          >http://www.itu.int/rec/T-REC-H.265</a
        ><br /><a href="https://www.iso.org/standard/69668.html"
          >https://www.iso.org/standard/69668.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; Bestätigen Sie Ihre Einhaltung der
        <a href="https://via-la.com/licensing-programs/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das Format **MPEG-4 Video Elemental Stream** (**MP4V-ES**) ist Teil des MPEG-4 Teil 2 Visual-Standards. Während MPEG-4 Teil 2-Video im Allgemeinen wegen seines fehlenden Mehrwerts im Vergleich zu anderen Codecs von niemandem verwendet wird, hat MP4V-ES auf Mobilgeräten eine gewisse Verbreitung. MP4V ist im Wesentlichen eine H.263-Codierung in einem MPEG-4-Container.

Der Hauptzweck besteht darin, MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Sitzung zu streamen. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung unter Verwendung von [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie wollen dieses Format fast sicher nicht verwenden, da es von keinem großen Browser in nennenswerter Weise unterstützt wird und ziemlich obsolet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, sind jedoch manchmal fälschlicherweise als `.mp4` gekennzeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Keine spezifische Begrenzung; nur durch die Datenrate eingeschränkt</td>
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
      <td>Bis zu 4.096 x 4.096 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCrCb mit Chroma-Subsampling (4:2:0, 4:2:2 und 4:4:4) unterstützt; bis
        zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
        <p>Chrome unterstützt MP4V-ES nicht; jedoch unterstützt ChromeOS es.</p>
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
        <a href="https://via-la.com/licensing-programs/mpeg-4-visual/"
          >erwerben Sie eine Lizenz</a
        >
        über <a href="https://via-la.com/">Via LA</a> und/oder
        <a href="https://about.att.com/innovation/ip/patents"
          >AT&#x26;T</a
        >
        falls erforderlich.
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Teil 2 Video** wurde zu Beginn der 1990er Jahre präsentiert. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG entwickelt, ohne Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software- und Hardware-Geräten kompatibel. Es gibt keine aktiven Patente mehr im Zusammenhang mit MPEG-1-Video, sodass es ohne jegliche Lizenzierungsbedenken verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Verwendung von Plugins in Webbrowsern veraltet ist, sind diese in der Regel nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für den Einsatz in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1,5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        23,976 FPS, 24 FPS, 25 FPS, 29,97 FPS, 30 FPS, 50 FPS, 59,94 FPS und 60
        FPS
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
      <td>Bis zu 4.095 x 4.095 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0-Chroma-Subsampling mit bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
        <a href="https://www.iso.org/standard/22411.html"
          >https://www.iso.org/standard/22411.html</a
        >
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

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das durch die MPEG-2-Spezifikation definierte Videoformat und wird auch gelegentlich durch seine {{Glossary("ITU", "ITU")}} Bezeichnung, H.262, bezeichnet. Es ist MPEG-1 Video sehr ähnlich - tatsächlich kann jeder MPEG-2-Player automatisch MPEG-1 ohne besondere Maßnahmen behandeln - allerdings wurde es erweitert, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Ziel war es, MPEG-2 in die Lage zu versetzen, Standard-Definition Fernsehsignale zu komprimieren, daher wird auch Interlaced Video unterstützt. Die Standard-Definition-Kompressionsrate und die Qualität des resultierenden Videos haben die Anforderungen so gut erfüllt, dass MPEG-2 der primäre Video-Codec für DVD-Video-Medien ist.

MPEG-2 bietet mehrere Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Level verfügbar, die jeweils die Attribute des Videos wie Bildrate, Auflösung, Bitrate usw. erhöhen. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Zudem gibt es vier Levels, die jeweils Unterstützung für größere Bilddimensionen und Bitraten bieten. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards) Spezifikation für TV in Nordamerika MPEG-2 Video in hoher Definition mit dem Main Profile auf High Level, sodass 4:2:0 Video sowohl bei 1920 x 1080 (30 FPS) als auch 1280 x 720 (60 FPS) mit einer maximalen Bitrate von 80 Mbps möglich ist.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern veraltet ist, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für den Einsatz in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 100 Mbps; variiert nach Level und Profil</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Abk.</th>
              <th scope="col">Levelname</th>
              <th scope="col">Unterstützte Bildraten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>23.9, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>23.976, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
          </tbody>
        </table>
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
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Abk.</th>
              <th scope="col">Levelname</th>
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
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0-Chroma-Subsampling in den meisten Profilen; die "High" und
        "4:2:2" Profile unterstützen auch 4:2:2-Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen mit Ausnahme von Malaysia (Stand 1. Oktober 2024), sodass MPEG-2 außerhalb Malaysias frei genutzt werden kann.
        Patente werden von <a href="https://via-la.com/licensing-programs/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat nur eine sehr geringe Nutzung, und die Unterstützung wird aus den Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und kostenloser Videocodec, der ohne Lizenzgebühren oder Lizenzierung verwendet werden kann. Theora ist in Bezug auf Qualität und Kompressionsraten mit MPEG-4 Part 2 Visual und AVC vergleichbar, was ihn zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Video-Codierung macht. Sein Status als lizenzfrei und die relativ geringen CPU-Ressourcenanforderungen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Der geringe CPU-Aufwand ist besonders nützlich, da keine Hardware-Decoder für Theora verfügbar sind.

Theora basiert ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Allerdings sind 8 Bit pro Komponente immer noch das am häufigsten verwendete Farbformat, sodass dies in den meisten Fällen nur ein geringfügiges Ärgernis darstellt. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil jedoch ist, dass es nicht von Safari unterstützt wird, was Theora nicht nur auf macOS, sondern auf allen Millionen von iPhones und iPads unzugänglich macht.

Das [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) bietet zusätzliche Details zu Theora sowie zum Ogg-Containerformat, in dem es verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Beliebig; jeder nicht-Null-Wert wird unterstützt. Die Bildrate wird als
        32-Bit-Zähler und 32-Bit-Nenner angegeben, um nicht-ganze Bildraten zu
        ermöglichen.
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
        Jede Kombination von Breite und Höhe bis zu 1.048.560 x 1.048.560 Pixel
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0, 4:2:2 und 4:4:4-Chroma-Subsampling bei 8 Bit pro
        Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Obwohl Theora keine Variable Bildrate (VFR) innerhalb eines einzigen
          Streams unterstützt, können mehrere Streams innerhalb einer Datei
          verkettet werden, und jeder davon kann seine eigene Bildrate haben, wodurch im
          Wesentlichen VFR ermöglicht wird. Dies ist jedoch unpraktisch, wenn
          die Bildrate häufig geändert werden muss.
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
          <a
            href="https://apps.microsoft.com/detail/9n5tdp8vcmhs"
            >Web Media Extensions</a
          >
          Add-On.
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
      <td>Offen und frei von Lizenzgebühren und sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der Codec **Video Processor 8** (**VP8**) wurde ursprünglich von On2 Technologies erstellt. Nach dem Kauf von On2 hat Google VP8 als offenes und lizenzfreies Videoformat veröffentlicht, mit dem Versprechen, die entsprechenden Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Wenn der Browser es unterstützt, erlaubt VP8 Videos mit einem Alpha-Kanal, sodass das Video mit einem Hintergrund abgespielt werden kann, der durch das Video in einem Grad gesehen werden kann, der von der Alphakomponente jedes Pixels vorgegeben wird.

In HTML-Inhalten gibt es eine gute Browser-Unterstützung für VP8, insbesondere in [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien. Dies macht VP8 zu einer guten Wahl für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl wäre, wenn es Ihnen zur Verfügung steht. Webbrowser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, aber nicht alle Browser, die das tun, unterstützen es auch in HTML-Audio- und Video-Elementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, basierend auf Level-bezogenen Beschränkungen</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
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
      <td>Bis zu 16.384 x 16.384 Pixel</td>
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari</p>
        <p>
          <a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und später unterstützen VP8 nur in WebRTC-Verbindungen.
        </p>
        <p>
          Firefox unterstützt VP8 nur in MSE, wenn kein H.264-Hardware-Decoder verfügbar ist. Verwenden Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu prüfen.
        </p>
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
      <td>Ja; VP8 ist einer der spezifikationsgeforderten Codecs für WebRTC</td>
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
      <td>Offen und frei von Lizenzgebühren und sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, der von Google entwickelt wurde. Wie VP8 ist VP9 vollständig offen und lizenzgebührenfrei. Seine Kodierungs- und Dekodierungsgeschwindigkeit ist vergleichbar oder leicht schneller als die von AVC, jedoch mit besserer Qualität. Die kodierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

Das Hauptprofil von VP9 unterstützt nur eine Farbtiefe von 8 Bit bei 4:2:0 Chroma-Subsampling-Stufen, aber seine Profile umfassen Unterstützung für tiefere Farben und die gesamte Palette an Chroma-Subsampling-Modi. Es unterstützt mehrere HDR-Implementierungen und bietet große Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von Browsern weitgehend unterstützt, und Hardwareimplementierungen des Codecs sind ziemlich verbreitet. VP9 ist einer der beiden Video-Codecs, die von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) vorgeschrieben sind (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass die Unterstützung von Safari für WebM und VP9 erst in Version 14.1 eingeführt wurde. Wenn Sie sich also entscheiden, VP9 zu verwenden, sollten Sie ein alternatives Format wie AVC oder HEVC für iPhone-, iPad- und Mac-Benutzer anbieten.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und bei Bedarf ein alternatives Video bereitstellen können). Dies gilt insbesondere, wenn Sie lieber einen offenen Code als einen proprietären verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, basierend auf Level-bezogenen Beschränkungen</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
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
      <td>Bis zu 65.536 x 65.536 Pixel</td>
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
          (veraltet; ersetzt durch Rec. 709) und
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari</p>
        <p>
          Firefox unterstützt VP8 nur in MSE, wenn kein H.264-Hardware-Decoder verfügbar ist. Verwenden Sie
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
      <td>Offen und frei von Lizenzgebühren und sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Video-Codecs

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine Fallback-Option anzubieten, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei denen Sie bereit sind, die Kompatibilität zu opfern?
- Wie alt ist die älteste Webbrowser-Version, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem in den letzten fünf Jahren ausgelieferten Browser arbeiten oder nur im letzten Jahr?

In den unten stehenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als der beste für den Anwendungsfall angesehen wird, proprietär ist oder Lizenzgebühren erfordern könnte, werden zwei Optionen bereitgestellt: zuerst eine offene und lizenzkostenfreie Option, gefolgt von der proprietären Variante.

Wenn Sie nur in der Lage sind, eine einzelne Version jedes Videos anzubieten, können Sie das Format wählen, das Ihren Anforderungen am besten entspricht. Die erste Empfehlung gilt als eine gute Kombination aus Qualität, Leistung und Kompatibilität. Die zweite Option wird die am weitesten kompatible Wahl sein, auf Kosten von etwas Qualität, Leistung und/oder Größe.

### Empfehlungen für alltägliche Videos

Zuerst betrachten wir die besten Optionen für Videos, die auf einer typischen Website wie einem Blog, einer Informationsseite oder der Website eines kleinen Unternehmens präsentiert werden, auf der Videos zur Produktdemonstration verwendet werden (aber nicht, wo die Videos selbst das Produkt sind).

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container, der den **[VP9](#vp9)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Diese sind alle offene, lizenzkostenfreie Formate, die allgemein gut unterstützt werden, allerdings nur in recht aktuellen Browsern, weshalb eine Fallback-Option eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Video-Codec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Ihrem Audio-Codec. Dies liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs innerhalb ist eine weitgehend unterstützte Kombination - tatsächlich von jedem großen Browser - und die Qualität ist für die meisten Anwendungsfälle typischerweise gut. Stellen Sie jedoch sicher, dass Sie Ihre Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein schließendes `</video>`-Tag, unabhängig davon, ob Sie darin {{HTMLElement("source")}}-Elemente haben oder nicht.

### Empfehlungen für Präsentationen in hoher Videoqualität

Wenn Ihre Mission ist, Videos in der höchstmöglichen Qualität zu präsentieren, profitieren Sie wahrscheinlich davon, so viele Formate wie möglich anzubieten, da die Codecs, die die beste Qualität bieten können, auch eher die neuesten sind und daher am ehesten Lücken in der Browser-Kompatibilität aufweisen.

1. Ein WebM-Container, der AV1 für Video und Opus für Audio verwendet. Wenn Sie in der Lage sind, das High- oder Professional-Profil beim Kodieren von AV1 auf einem hohen Niveau wie 6.3 zu verwenden, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erzielen, während Sie eine exzellente Videoqualität beibehalten. Wenn Sie Ihr Audio mit dem Fullband-Profil von Opus bei einer Abtastrate von 48 kHz codieren, maximieren Sie die erfasste Audiobandbreite und erfassen nahezu den gesamten Frequenzbereich, der innerhalb des menschlichen Hörens liegt.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container, der den [HEVC](#hevc_h.265)-Codec mit einem der fortgeschrittenen Main-Profile verwendet, wie Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4-Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies eine hervorragende Grafikqualität mit bemerkenswerter Farbwiedergabe. Zusätzlich können Sie optional HDR-Metadaten hinzufügen, um Video mit hohem Dynamikbereich bereitzustellen. Für Audio verwenden Sie den AAC-Codec mit einer hohen Abtastrate (mindestens 48 kHz, idealerweise aber 96 kHz) und codieren mit komplexem Kodieren anstelle von schnellem Kodieren.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Derzeit gibt es keine verlustfreien—oder auch nur nahezu verlustfreien—Video-Codecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Beispielsweise benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0-Chroma-Subsampling mindestens 1,5 Gbps. Verwenden von verlustfreier Kompression wie FFV1 (welches von Webbrowsern nicht unterstützt wird), könnte dies möglicherweise auf etwa 600 Mbps reduziert werden, abhängig vom Inhalt. Das ist immer noch eine enorme Menge an Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keine reale Anwendung praktisch.

Dies ist auch dann der Fall, wenn einige der verlustbehafteten Codecs einen verlustfreien Modus verfügbar haben; die verlustfreien Modi sind in aktuellen Webbrowsern nicht implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec zu wählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass möglichst wenig Kompression durchgeführt wird. Eine Möglichkeit, dies zu tun, besteht darin, den Codec so zu konfigurieren, dass er "schnelle" Kompression verwendet, was von Natur aus bedeutet, dass weniger Kompression erreicht wird.

#### Vorbereitung von Videos extern

Um Videos für Archivierungszwecke außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Programm, das die Kompression auf den ursprünglichen unkomprimierten Videodaten durchführt. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Programm verwendet werden, um Videos im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Während andere Codecs bessere Qualitätsniveaus beim signifikanten Komprimieren des Videos erreichen können, neigen deren Encoder dazu, so langsam zu sein, dass das nahezu verlustfreie Kodieren, das Sie mit dieser Kompression erreichen, weitaus schneller bei etwa dem gleichen Gesamtqualitätsniveau ist.

#### Aufnahme von Videos

Angesichts der Einschränkungen, wie nah Sie an verlustfrei herankommen können, könnten Sie in Betracht ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Beispielsweise, wenn Sie die [MediaStream Aufnahme-API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Videos aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, [AV1](#av1) Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chroma-Subsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzunehmen. Die resultierende Datei wird eine Bitrate von nicht mehr als 800 Mbps verwenden, die zwischen den Video- und Audiotracks geteilt wird. Sie werden wahrscheinlich die Werte anpassen müssen, abhängig von der Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten. Diese Bitrate ist offensichtlich nicht realistisch für die Netzwerkübertragung und würde wahrscheinlich nur lokal verwendet werden.

Bei der Aufschlüsselung des Wertes des `codecs`-Parameters in seine durch Punkte getrennten Eigenschaften sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                         |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Der vierstellige Code (4CC), der den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                                                |
| `2`    | Das Profil. Ein Wert von 2 zeigt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil angeben würde.                                                                                                                                               |
| `19H`  | Die Stufe und Ebene. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und zeigt die hohe Stufe von Level 6.3 an.                                                                                                         |
| `12`   | Die Farbtiefe. Dies zeigt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchste Farbgenauigkeitsdarstellung, die in AV1 verfügbar ist.                                                                                                                              |
| `0`    | Das Monochrom-Modus-Flag. Wenn 1, würden keine Chrominanzebenen aufgezeichnet, und alle Daten sollten rein Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 angegeben, weil wir Farbe möchten.                                                                                        |
| `000`  | Der Chroma-Subsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrom-Modus-Wert 0, zeigt an, dass wir 4:4:4-Chroma-Subsampling wünschen, oder keinen Farbverlust. |
| `09`   | Die Farbprimärwerte, die verwendet werden sollen. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                              |
| `16`   | Die Übertragungsmerkmale, die verwendet werden sollen. Dies stammt auch aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 zeigt an, dass wir die Eigenschaften für BT.2100 PQ-Farbe verwenden möchten.                                                      |
| `09`   | Die Matrixkoeffizienten, die verwendet werden sollen, wieder aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Leuchtdichte verwenden möchten; dies ist auch bekannt als BT.2010 YbCbCr.                |
| `1`    | Das Video-„Vollbereich“-Flag. Ein Wert von 1 gibt an, dass wir möchten, dass die gesamte Farbpalette verwendet wird.                                                                                                                                                                                 |

Die Dokumentation zu Ihren Codec-Auswahlen wird wahrscheinlich Informationen bieten, die Sie verwenden werden, wenn Sie Ihren `codecs`-Parameter konstruieren.

## Siehe auch

- [Leitfaden zu Web-Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die Parameter "Codecs" und "Profiles" für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Type-Registrierungen für 3GPP-Multimediadateien
- {{RFC(4381)}}: MIME-Type-Registrierungen für 3GPP2-Multimediadateien
- {{RFC(4337)}}: MIME-Type-Registrierungen für MPEG-4
- [Video- und Audio-Codecs in Chrome](https://www.chromium.org/audio-video/)

---
title: Leitfaden zu Web-Videocodecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 24ccd89b8d57061b886019467bb78a6968a7cf3c
---

Dieser Leitfaden stellt die Videocodecs vor, die Sie im Internet am ehesten antreffen oder in Betracht ziehen werden, bietet Zusammenfassungen ihrer Fähigkeiten und etwaiger Kompatibilitäts- und Nutzungsbedenken sowie Ratschläge, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts zu wählen.

Aufgrund der schieren Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie speichern zu können, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die nötig ist, um unkomprimiertes Video zu speichern:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in voller Farbdarstellung (4 Bytes pro Pixel) benötigt 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) belegen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine recht typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicher erfordern, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ beanspruchen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzbandbreite, die erforderlich wäre, um ein solches unkomprimiertes Video zu übertragen, wäre enorm bei 249 MB/s - ohne Audio und Overhead. An dieser Stelle kommen Videocodecs ins Spiel. Genau wie Audiocodecs die Audiodaten komprimieren, komprimieren Videocodecs die Videodaten und codieren sie in ein Format, das später dekodiert und wiedergegeben oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**, das heißt, das dekodierte Video stimmt nicht genau mit der Quelle überein. Einige Details können verloren gehen; das Ausmaß des Verlusts hängt vom Codec und seiner Konfiguration ab, aber in der Regel gilt: Je mehr Komprimierung Sie erreichen, desto mehr Detail- und Treueverluste treten auf. Es gibt einige verlustfreie Codecs, aber sie werden typischerweise für die Archivierung und Speicherung zur lokalen Wiedergabe verwendet, nicht für den Einsatz in einem Netzwerk.

## Häufige Codecs

Die folgenden Videocodecs werden im Internet am häufigsten verwendet. Für jeden Codec werden auch die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec führt zu einem Abschnitt weiter unten, der weitere Einzelheiten zum Codec bietet, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Sie kennen sollten.

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

## Faktoren, die das codierte Video beeinflussen

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des codierten Videos beeinflussen: die Spezifika des Formats und des Inhalts des Quellvideos und die Eigenschaften und Konfiguration des Codecs, der beim Kodieren des Videos verwendet wird.

Die einfachste Richtlinie lautet: Alles, was das codierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, wird in der Regel auch die resultierenden Daten größer machen. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In manchen Situationen ist ein größerer Qualitätseinbußen, um die Datengröße zu reduzieren, diesen Qualitätsverlust wert; andere Male ist der Qualitätsverlust nicht akzeptabel, und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Einfluss des Quellvideoformats auf die kodierte Ausgabe

Das Ausmaß, in dem das Format des Quellvideos die Ausgabe beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf eine andere Weise als einfache Pixel darstellt, spielt das Format des ursprünglichen Bildes keine Rolle. Allerdings haben Dinge wie Bildrate und, offensichtlich, Auflösung immer einen Einfluss auf die Ausgabengröße der Medien.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern, oder sind nicht gut darin, scharfe Kanten zu reproduzieren, oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder andere mögliche Probleme. Es hängt alles von den Algorithmen und der Mathematik ab, die zugrunde liegen.

<table class="standard-table">
  <caption>
    Der mögliche Einfluss von Quellvideoformat und -inhalten auf die Qualität und Größe des codierten Videos
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Auswirkung auf Qualität</th>
      <th scope="col">Auswirkung auf Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Farbtiefe (Bit-Tiefe)</th>
      <td>
        Je höher die Farbbittiefe, desto höher die Qualität der Farbtreue im Video. Zusätzlich kann bei gesättigten Teilen des Bildes (d.h. dort, wo Farben rein und intensiv sind, wie ein helles, reines Rot: <code>rgb(255 0 0 / 100%)</code>), Farbtiefen unter 10 Bits pro Komponente (10-Bit-Farbe) Banding verursachen, wo Gradienten nicht dargestellt werden können, ohne dass man sichtbare Abstufungen der Farben sieht.
      </td>
      <td>
        Je nach Codec können höhere Farbtiefen zu größeren komprimierten Dateigrößen führen. Der bestimmende Faktor ist, welches interne Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Glätte der Bewegungen im Bild. Bis zu einem gewissen Punkt sorgt eine höhere Bildrate dafür, dass die Bewegungen glatter und realistischer erscheinen. Irgendwann wird jedoch der Punkt erreicht, an dem die zusätzlichen Bilder pro Sekunde keinen zusätzlichen Nutzen mehr bieten. Details siehe <a href="#reduced_frame_rate">Bildrate</a> unten.
      </td>
      <td>
        Unter der Annahme, dass die Bildrate während der Kodierung nicht reduziert wird, führen höhere Bildraten zu größeren komprimierten Videodateigrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Komprimierung von Videos funktioniert typischerweise, indem man Bilder vergleicht, Unterschiede findet und Aufzeichnungen erstellt, die genügend Informationen enthalten, um das vorherige Bild zu aktualisieren, um das Erscheinungsbild des nächsten Bildes annähernd darzustellen. Je mehr aufeinanderfolgende Bilder sich voneinander unterscheiden, desto größer sind diese Unterschiede, und desto weniger effektiv ist die Komprimierung beim Vermeiden der Einführung von Artefakten im komprimierten Video.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren Zwischenbildern aufgrund der höheren Anzahl von Unterschieden zwischen den Bildern. Aus diesem und anderen Gründen, je mehr Bewegung in einem Video ist, desto größer wird typischerweise die Ausgabedatei.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Körnungseffekte, Staub oder andere Körnungen im Bild) bringt Variabilität mit sich. Variabilität macht Komprimierung im Allgemeinen schwieriger und führt zu mehr Qualitätsverlust aufgrund der Notwendigkeit, Details wegzulassen, um den gleichen Komprimierungsgrad zu erreichen.
      </td>
      <td>
        Je mehr Variabilität - wie Rauschen - im Bild vorhanden ist, desto komplexer der Komprimierungsprozess und desto weniger Erfolg wird der Algorithmus beim Komprimieren des Bildes auf den gleichen Grad haben. Es sei denn, Sie konfigurieren den Encoder so, dass er einige oder alle durch Rauschen verursachten Variationen ignoriert, wird das komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video, das auf die gleiche Bildschirmgröße projiziert wird, kann typischerweise die ursprüngliche Szene genauer darstellen, abgesehen von Effekten, die während der Komprimierung eingeführt wurden.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies spielt eine Schlüsselrolle in der finalen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende codierte Video beeinflussen, wird variieren, je nach den genauen Umständen, einschließlich welchen Encoder Sie verwenden und wie er konfiguriert ist. Zusätzlich zu den allgemeinen Codeceinstellungen könnte der Encoder so konfiguriert werden, dass er die Bildrate reduziert, Rauschen bereinigt und/oder die gesamte Auflösung des Videos während der Kodierung reduziert.

### Einfluss der Codec-Konfiguration auf die kodierte Ausgabe

Die zum Kodieren von Video eingesetzten Algorithmen verwenden typischerweise eine oder mehrere allgemeine Techniken zur Durchführung ihrer Codierung. Im Allgemeinen wird jede Konfigurationsoption, die dazu bestimmt ist, die Ausgabedateigröße des Videos zu reduzieren, wahrscheinlich einen negativen Einfluss auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Form der Kodierung auszuwählen, die zu einer viel größeren codierten Datei führt, aber eine perfekte Reproduktion des ursprünglichen Videos beim Dekodieren ermöglicht.

Darüber hinaus kann jede Encoder-Software Variationen darin aufweisen, wie sie das Quellvideo verarbeitet, was zu Unterschieden in der Ausgabequalität und/oder Dateigröße führt.

<table class="standard-table">
  <caption>
    Auswirkungen der Videoencoder-Konfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Auswirkung auf Qualität</th>
      <th scope="col">Auswirkung auf Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Verlustfreie Komprimierung</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Komprimierung kann die Gesamtdatengröße nicht so stark reduzieren wie verlustbehaftete Komprimierung; die resultierenden Dateien sind wahrscheinlich trotzdem noch zu groß für eine allgemeine Nutzung.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Komprimierung</th>
      <td>
        In gewissem Maße werden Artefakte und andere Formen der Qualitätsverschlechterung auftreten, abhängig vom spezifischen Codec und wie stark die Komprimierung angewendet wird.
      </td>
      <td>
        Je mehr das codierte Video von der Quelle abweichen darf, desto leichter ist es, höhere Komprimierungsraten zu erreichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr wird das codierte Video dem Originalmedium ähneln.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren codierten Videodateien; die Auswirkung hängt im Einzelnen vom Codec ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Qualität verbessert sich im Allgemeinen mit höheren Bitraten.</td>
      <td>Höhere Bitraten führen grundsätzlich zu größeren Ausgabedateien.</td>
    </tr>
  </tbody>
</table>

Die beim Kodieren von Video verfügbaren Optionen und die Werte, die diesen Optionen zugewiesen werden, variieren nicht nur von einem Codec zum anderen, sondern auch je nach der verwendeten Kodierungssoftware. Die Dokumentation, die mit Ihrer Kodierungssoftware geliefert wird, wird Ihnen helfen, die spezifischen Auswirkungen dieser Optionen auf das codierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen des verlustbehafteten Kodierungsprozesses, bei dem das verlorene oder umorganisierte Datenmaterial negative sichtbare Effekte bewirkt. Einmal aufgetreten, können Artefakte eine Weile bestehen bleiben, da Video auf eine Art und Weise angezeigt wird. Jedes Videobild wird angezeigt, indem eine Reihe von Änderungen auf das derzeit sichtbare Bild angewendet wird. Das bedeutet, dass Fehler oder Artefakte im Laufe der Zeit zusammentreffen, was zu Störungen oder seltsam aussehenden Abweichungen im Bild führt, die eine Zeit lang bestehen bleiben.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden in regelmäßigen Abständen **Schlüsselbilder** (auch als **Intra-Frames** oder **i-Frames** bekannt) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Bilder, die dazu verwendet werden, sichtbare Schäden oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasbildung ist ein allgemeiner Begriff für alles, was beim Rekonstruieren aus den kodierten Daten nicht genauso aussieht, wie es vor der Komprimierung aussah. Es gibt viele Formen der Aliasbildung; die häufigsten, die Sie sehen könnten, beinhalten:

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
          ist ein großräumiges räumliches Interferenzmuster, das entsteht, wenn ein Muster im Quellbild und die Art und Weise, wie der Encoder arbeitet, räumlich geringfügig misaligned sind. Die vom Encoder generierten Artefakte führen dann zu seltsamen, wirbelnden Effekten im Muster des Quellbildes beim Dekodieren.
        </p>
      </td>
      <td>
        <img alt="Eine Backsteinwand, die einen wirbelnden Effekt ähnlich Wellen zeigt, verursacht durch das Moire-Muster" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt sein sollten, eine gezackte Erscheinung bekommen, die etwas wie eine Treppe aussieht. Dies ist der Effekt, der von "Anti-Aliasing"-Filtern reduziert wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die wegen Aliasing wie eine Treppe aussehen" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagonrad-Effekt</h4>
        <p>
          Der <strong>Wagonrad-Effekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, den man häufig in Filmen sieht, bei dem ein drehendes Rad mit falscher Geschwindigkeit oder sogar rückwärts zu rotieren scheint, dank einer Interaktion zwischen Bildrate und Komprimierungsalgorithmus. Der gleiche Effekt kann bei jedem sich bewegenden wiederholenden Muster auftreten, wie zum Beispiel den Schienen eines Eisenbahngleises, Pfosten entlang einer Straße, usw. Es handelt sich um ein zeitbasiertes (temporales) Aliasing-Problem; die Rotationsgeschwindigkeit stört die Frequenz des Samplings, das während der Komprimierung oder Kodierung durchgeführt wird.
        </p>
      </td>
      <td>
        <img alt="Ein sich drehendes Rad, das durch Aliasing einen Wagonrad-Effekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbkantenbildung

**Farbkantenbildung** ist eine Art von visuellen Artefakten, die als falsche Farben auftreten, die an den Rändern von farbigen Objekten innerhalb einer Szene hinzugefügt werden. Diese Farben haben keine bewusste Farbverbindung zum Inhalt des Rahmens.

### Verlust von Schärfe

Das Entfernen von Daten im Prozess der Videokodierung erfordert den Verlust einiger Details. Wenn ausreichend Komprimierung angewendet wird, könnten Teile oder möglicherweise das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder trüben Erscheinungsbild führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text – insbesondere kleiner Text – sehr detailorientierter Inhalt ist, bei dem geringfügige Veränderungen die Lesbarkeit erheblich beeinflussen können.

### Klingeln

Verlustbehaftete Komprimierungsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit Farbpixeln kontaminiert werden, die vom Komprimierungsalgorithmus generiert wurden. Dies geschieht, wenn ein Algorithmus eingesetzt wird, der Blöcke verwendet, die sich über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund erstrecken. Dies ist besonders häufig bei höheren Komprimierungsgraden.

![Beispiel für Klingel-Effekt](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Abstufung und andere signifikante Komprimierungsartefakte). Diese Ränder sind der Klingel-Effekt. Klingeln ähnelt in gewisser Hinsicht dem [Moskito-Rauschen](#moskito-rauschen), außer dass der Klingel-Effekt mehr oder weniger stabil und unverändert ist, während Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, die es besonders schwierig machen kann, Text, der in Ihren Bildern enthalten ist, zu lesen.

### Posterisieren

**Posterisierung** tritt auf, wenn die Komprimierung zu einem Verlust von Farbdetails in Farbverläufen führt. Anstelle von sanften Übergängen durch die verschiedenen Farben in einem Bereich wird das Bild grobkörnig, mit Farbbatzen, die das ursprüngliche Erscheinungsbild des Bildes annähernd darstellen.

![Weißkopfseeadler-Foto mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Grobkörnigkeit der Farben im Gefieder des Weißkopfseeadlers im obigen Foto (und der Schneeeule im Hintergrund). Die Details der Federn gehen größtenteils aufgrund der Posterisierungseffekte verloren.

### Konturierung

**Konturierung** oder **Farbbandbildung** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies geschieht, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Infolgedessen zeigt der Inhalt des Videos ein "geschichtetes" Erscheinungsbild, bei dem anstelle von glatten Farbverläufen und Übergängen die Übergänge von Farbe zu Farbe abrupt sind und Farbstreifen erscheinen.

![Beispiel eines Bildes, dessen Komprimierung Konturierung eingeführt hat](contouring-effect.jpg)

Im oben gezeigten Bild beachten Sie, wie der Himmel Bänder unterschiedlicher Blautöne hat, anstatt ein konsistenter Farbverlauf zu sein, wie die Himmelsfarbe sich Richtung Horizont verändert. Dies ist der Konturierungseffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Kantengeschäftigkeit** auftritt, das als flimmernde Trübheit oder Schimmern auftritt, welches sich ungefähr entlang der Ränder von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund zeigt. Der Effekt kann dem [Klingeln](#klingeln) ähnlich aussehen.

![Beispiel eines Bildes, dessen Komprimierung Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich im Himmel um die Brücke. Im rechten oberen Eck zeigt ein Ausschnitt eine Nahaufnahme eines Teils des Bildes, der Moskito-Rauschen zeigt.

Moskito-Rausch-Artefakte treten am häufigsten bei MPEG-Videos auf, können aber immer dann auftreten, wenn ein diskreter Cosinus-Transformations-Algorithmus (DCT) verwendet wird; dazu gehören beispielsweise JPEG-Standbilder.

### Bewegungs-Kompensationsblock-Grenzartefakte

Die Komprimierung von Video funktioniert generell, indem zwei Bilder verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Bild nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fixiert ist oder die Objekte im Bild relativ stationär sind; aber wenn im Bild viel Bewegung ist, können die Anzahl der Unterschiede zwischen den Bildern so groß sein, dass die Komprimierung keinen Nutzen bringt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegungen (entweder der Kamera oder von Objekten im Sichtfeld) sucht und bestimmt, wie viele Pixel sich das bewegende Objekt in jede Richtung bewegt hat. Dann wird dieser Verschiebung gespeichert, zusammen mit einer Beschreibung der bewegten Pixel, die nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die bewegenden Objekte und erstellt dann eine Art internes Bild, das wie das Original aussieht, aber mit allen Objekten, die an ihren neuen Positionen verschoben sind. In der Theorie entspricht dies dem Erscheinungsbild des neuen Bildes. Um die Arbeit abzuschließen, werden die verbleibenden Unterschiede festgestellt, dann werden das Set von Objektverschiebungen und das Set von Pixeldifferenzen im Datensatz gespeichert, der das neue Bild repräsentiert. Dieses Objekt, das die Verschiebung und die Pixeldifferenzen beschreibt, wird **Residualbild** genannt.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalbild</th>
      <th scope="col" style="width: 216px">Zwischenbildunterschiede</th>
      <th scope="col" style="width: 216px">
        Differenz nach Bewegungs-Kompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalbild des Videos" src="motion-comp-orig.jpg" /></td>
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
        Das erste vollständige Bild, das vom Betrachter gesehen wird.
      </td>
      <td style="vertical-align: top">
        Hier werden nur die Unterschiede zwischen dem ersten Bild und dem folgenden Bild gesehen. Alles andere ist schwarz. Bei genauerem Hinsehen können wir feststellen, dass der Großteil dieser Unterschiede von einer horizontalen Kamerabewegung stammt, wodurch dies ein guter Kandidat für die Bewegungskompensation ist.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen wir hier die Schwenkbewegung der Kamera, indem wir zuerst das erste Bild um zwei Pixel nach rechts verschieben und dann die Differenz bilden. Dies kompensiert die Schwenkung der Kamera, sodass mehr Überschneidungen zwischen den beiden Bildern möglich sind.
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globale Bewegungskompensation passt generell Kamera-Bewegungen wie Tracking, Dolly-Bewegungen, Schwenken, Neigung, Rollen und Auf- und Ab-Bewegungen an. Die Blockbewegungskompensation behandelt lokale Änderungen und sucht nach kleineren Abschnitten des Bildes, die mittels Bewegungskompensation kodiert werden können. Diese Blöcke sind normalerweise von fester Größe, in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen und sogar überlappende Blöcke zulassen.

Es gibt jedoch Artefakte, die aufgrund der Bewegungskompression auftreten können. Diese treten an Blockgrenzen in Form von scharfen Kanten auf, die falsches Klingeln und andere Kanteneffekte erzeugen. Diese entstehen durch die Mathematik, die bei der Kodierung der Residualbilder verwendet wird, und können leicht bemerkt werden, bevor sie vom nächsten Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Während der unmittelbare Verlust von Größe oder Glätte der Wiedergabe ein negativer Faktor sein kann, kann sorgfältiges Entscheiden zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein und eine viel höhere visuelle Qualität bieten; selbst nach einem Upscaling während der Wiedergabe könnte das Ergebnis besser sein, als das Originalvideo in voller Größe zu kodieren und die Qualitätsverschlechterung zu akzeptieren, die zur Erreichung Ihrer Größenanforderungen erforderlich wäre.

### Reduzierte Bildrate

Ebenso können Sie Bilder vollständig aus dem Video entfernen und die Bildrate entsprechend verringern. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungskompensation, noch mehr Arbeit zu leisten. Beispielsweise könnte anstatt die Bewegungsunterschiede für zwei Bilder, die aufgrund der Bewegung zwischen den Bildern zwei Pixel voneinander entfernt sind, jede zweite Bild entfernt werden, was zu einer Abweichung führt, die vier Pixel Bewegung ergibt. Dies ermöglicht, die gesamte Bewegung der Kamera mit weniger Residualbildern zu beschreiben.

Die absolut minimale Bildrate, die ein Video haben kann, bevor sein Inhalt nicht mehr als Bewegung vom menschlichen Auge wahrgenommen wird, liegt bei etwa 12 Bildern pro Sekunde. Unterhalb dessen wird das Video zu einer Serie von Standbildern. Kinofilme haben typischerweise 24 Bilder pro Sekunde, während Standardfernsehen etwa 30 Bilder pro Sekunde hat (leicht weniger, aber nah genug) und hochauflösendes Fernsehen zwischen 24 und 60 Bildern pro Sekunde liegt. Alles ab 24 FPS aufwärts wird in der Regel als ausreichend flüssig angesehen; 30 oder 60 FPS sind ein ideales Ziel, je nach Ihren Bedürfnissen.

Im Endeffekt liegen die Entscheidungen darüber, welche Opfer Sie bereit sind in Kauf zu nehmen, vollständig bei Ihnen und/oder Ihrem Designteam.

## Codecdetails

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und für die Verwendung sowohl im {{HTMLElement("video")}}-Element als auch in [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional** mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Darüber hinaus ist eine Reihe von **Leveln** spezifiziert, von denen jedes Grenzen für eine Reihe von Videoattributen definiert. Diese Attribute umfassen Bildabmessungen, Bildgröße in Pixeln, Anzeigen- und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Begrenzungen für die Anzahl der Kacheln und Kachelspalten, die im Kodierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein Video mit 2048x1152 bei Level 2.0 haben können. Es ist jedoch erwähnenswert, dass zumindest für Firefox und Chrome die Level beim Software-Decoding derzeit tatsächlich ignoriert werden und der Decoder einfach sein Bestes tut, um das Video mit den bereitgestellten Einstellungen abzuspielen. Für die zukünftige Kompatibilität sollten Sie jedoch innerhalb der Grenzen des gewählten Levels bleiben.

AV1 wird in allen Browsern unterstützt, aber die Unterstützung in Safari ist auf Geräte beschränkt, die einen Hardware-Decoder haben, das heißt M3 MacBooks und später, iPhone 15 Pro und iPhone 16 und später. Viele mobile und Desktop-Geräte verfügen über Hardware-Decoder, was AV1 zu einer hervorragenden Wahl macht, um Videos im Web bereitzustellen, mit einer Fallback-Option für ältere Apple-Geräte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert abhängig vom Videolevel; theoretisches Maximum erreicht 800 Mbit/s bei Level 6.3
        </p>
        <p>
          Siehe die
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Leveltabellen</a
          > der AV1-Spezifikation, die die maximalen Auflösungen und Raten für jedes Level beschreiben.
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
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jeden Wert zwischen diesen annehmen kann
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
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
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
              <td>121</td>
              <td>67</td>
              <td>113</td>
              <td>57</td>
              <td>17<sup>*</sup></td>
            </tr>
          </tbody>
        </table>
        <p>
          <sup>*</sup> Safari unterstützt AV1 auf M3 MacBooks und später, iPhone 15 Pro und iPhone 16 und später.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://de.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
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

Der Advanced Video Coding (**AVC**) Standard der MPEG-4-Spezifikationssuite ist durch die identische ITU H.264-Spezifikation und die MPEG-4 Part 10-Spezifikation spezifiziert. Es handelt sich um einen auf Bewegungskompensation basierenden Codec, der heute weit verbreitet für alle Arten von Medien verwendet wird, einschließlich des Fernsehrundfunks, von {{Glossary("RTP", "RTP")}}-Videokonferenzen und als der Videocodec für Blu-Ray-Discs.

AVC ist hochflexibel mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; beispielsweise ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien konzipiert und verwendet weniger Bandbreite als das Main Profile (das für Standard Definition Digital TV in einigen Regionen verwendet wird) oder das High Profile (das für Blu-Ray Disc-Video verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling; das High 10 Profile fügt Unterstützung für 10-Bit-Farben hinzu, und fortgeschrittene Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC verfügt auch über spezielle Funktionen wie Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), die unter anderem die Produktion von stereoskopischem Video ermöglicht.

AVC ist jedoch ein proprietäres Format und zahlreiche Patente werden von mehreren Parteien in Bezug auf seine Technologien gehalten. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA-Patentpool keine Lizenzgebühren für das Streaming von Internetvideo im AVC-Format verlangt, solange das Video für Endnutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs umfasst) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht dazu verpflichtet sind, tun dies einige.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen die Hardware-Codierung und -Decodierung von AVC-Medien. Seien Sie sich jedoch der [Lizenzanforderungen](https://via-la.com/licensing-programs/avc-h-264/) bewusst, bevor Sie in Ihrem Projekt AVC verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Variiert je nach Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS sind möglich</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
        <p>Einige der häufiger verwendeten oder interessanten Profile:</p>
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
        Ja;
        <a href="https://de.wikipedia.org/wiki/Hybrid-Log-Gamma"
          >Hybrid-Log-Gamma</a
        > oder Advanced HDR/SL-HDR; beide sind Teil von ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von AVC in Firefox hängt von den eingebauten oder
          vorinstallierten Codecs des Betriebssystems für AVC und dessen Container ab, um
          Patentprobleme zu vermeiden.
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
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263**-Codec der ITU wurde primär für den Einsatz bei niedriger Bandbreite entwickelt. Insbesondere ist er für Videokonferenzen auf PSTN (public switched telephone networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenz) Systeme optimiert. Trotz der Optimierung für Netze mit niedriger Bandbreite ist er recht CPU-intensiv und könnte auf leistungsschwächeren Computern nicht zufriedenstellend arbeiten. Das Datenformat ist ähnlich dem der MPEG-4 Part 2.

H.263 wurde nie weit verbreitet im Web genutzt. Varianten von H.263 wurden als Grundlage für andere proprietäre Formate wie Flash-Video oder den Sorenson-Codec verwendet. Kein bedeutender Browser hat jemals Standardunterstützung für H.263 integriert. Bestimmte Mediendienste haben Unterstützung für H.263-Medien aktiviert.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Begriffe der maximalen Bitrate pro Bild (also pro "Picture"), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb gewählt, und dann kann das Video diesen Wert pro Bild nicht überschreiten. Die endgültige Bitrate hängt von diesem Wert, der Bildrate, der Komprimierung sowie der gewählten Auflösung und Blockformatung ab.

H.263 wurde durch H.264 abgelöst und gilt daher als veraltetes Medienformat, das Sie grundsätzlich vermeiden sollten, wenn Sie können. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, besteht darin, dass Sie Unterstützung für sehr alte Geräte benötigen, auf denen H.263 Ihre beste Wahl darstellt.

H.263 ist ein proprietäres Format mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von zahlreichen Organisationen und Unternehmen wie Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm, und anderen gehalten werden. Um H.263 zu verwenden, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbeschränkt, aber typischerweise unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Jede</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
          Version 1 von H.263 spezifiziert eine Gruppe von Bildgrößen, die
          unterstützt werden. Spätere Versionen können zusätzliche Auflösungen
          unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixeln sowie die Anzahl der Reihen jeder Luminanz- und
        Chrominanzproben, die für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
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
        Proprietär; geeignete Lizenz oder Lizenzen werden benötigt. Beachten
        Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **High Efficiency Video Coding** (**HEVC**)-Codec wird durch ITUs **H.265** sowie durch MPEG-H Teil 2 (die sich noch in der Entwicklung befindliche Nachfolge von MPEG-4) definiert. HEVC wurde entwickelt, um das effiziente Kodieren und Dekodieren von Video in Größen bis hin zu sehr hohen Auflösungen (einschließlich 8K-Video) zu unterstützen, mit einer Struktur, die es der Software ermöglicht, moderne Prozessoren optimal zu nutzen. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie die von [AVC](#avc_h.264), aber mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Kodier-Baumeinheit (CTU)—ähnlich dem Makroblock, der in früheren Codecs verwendet wurde—aus einem Baum von Luma-Werten für jedes Sample sowie einem Baum von Chroma-Werten für jedes Chroma-Sample, das in derselben Kodier-Baumeinheit verwendet wird, sowie allen erforderlichen Syntaxelementen. Diese Struktur ermöglicht eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-Bit-pro-Komponente-Farbe mit 4:2:0 Chroma-Subsampling unterstützt. Ebenso interessant ist, dass 4:4:4 Video speziell behandelt wird. Anstatt die Luma-Proben (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Proben (die angeben, wie die Graustufen verändert werden, um Farbpixel zu erzeugen) zu haben, werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann beim Rendering kombiniert werden, um ein vollfarbiges Bild zu erzeugen.

HEVC ist ein proprietäres Format und ist durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA](https://via-la.com/licensing-programs/hevc-vvc/) verwaltet; Gebühren werden an Entwickler erhoben und nicht an Inhaltsproduzenten und -verteiler. Stellen Sie sicher, die neuesten Lizenzbedingungen und Anforderungen zu überprüfen, bevor Sie entscheiden, ob Sie HEVC in Ihrer App oder Website verwenden möchten!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800.000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS sind möglich</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
          Informationen unten sind für die Hauptprofile bereitgestellt. Es gibt eine
          Reihe anderer verfügbarer Profile, die hier nicht enthalten sind.
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
              <td>Hauptprofil</td>
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
              <td>4:0:0, 4:2:0, und 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:2:2 12</td>
              <td>8 bis 12</td>
              <td>4:0:0, 4:2:0, und 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:4:4</td>
              <td>8</td>
              <td>4:0:0, 4:2:0, 4:2:2, und 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 10</td>
              <td>8 bis 10</td>
              <td>4:0:0, 4:2:0, 4:2:2, und 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 12</td>
              <td>8 bis 12</td>
              <td>4:0:0, 4:2:0, 4:2:2, und 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 16 Intra</td>
              <td>8 bis 16</td>
              <td>4:0:0, 4:2:0, 4:2:2, und 4:4:4</td>
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
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
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
        <p>Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung auf Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung auf Windows 10 1709+ wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind und hat denselben Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Decoder.
        </p>
        <p>Firefox aktiviert HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 entweder mit Hardware (auf Geräten, die es unterstützen, wobei die Reichweite mit Edge übereinstimmt) oder Software (unter Windows muss der Benutzer eine Erweiterung erwerben und installieren)</li>
            <li>macOS ab Firefox 136 entweder mit Hardware oder Software.</li>
            <li>Linux ab Firefox 137 entweder mit Hardware oder Software (über das System-ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere auf Chromium basierende Browser haben denselben Unterstützungsstatus wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder neuer.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://de.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
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
      <th scope="row">Spezifikation</th>
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
        Proprietär; überprüfen Sie Ihre Übereinstimmung mit den
        <a href="https://via-la.com/licensing-programs/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**)-Format ist Teil des MPEG-4 Part 2 Visual-Standards. Obwohl MPEG-4 Teil 2 Video im Allgemeinen von niemandem verwendet wird, da es im Vergleich zu anderen Codecs keinen überzeugenden Mehrwert bietet, hat MP4V-ES einige Anwendungen im Mobilbereich. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist die Verwendung zur Übertragung von MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Sitzung. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung mithilfe von [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie möchten dieses Format fast sicherlich nicht verwenden, da es von keinem großen Browser in nennenswerter Weise unterstützt wird und ziemlich obsolet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden aber manchmal fälschlicherweise als `.mp4` bezeichnet.

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
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
        YCrCb mit Chroma-Subsampling (4:2:0, 4:2:2 und 4:4:4) unterstützt; bis zu
        12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
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
        <a href="https://via-la.com/licensing-programs/mpeg-4-visual/"
          >Lizenz erwerben</a
        >
        über <a href="https://via-la.com/">Via LA</a> und/oder
        <a href="https://about.att.com/innovation/ip/patents"
          >AT&#x26;T</a
        >
        nach Bedarf
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Teil 2 Video

**MPEG-1 Teil 2 Video** wurde Anfang der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 allein von MPEG ohne Beteiligung der {{Glossary("ITU", "ITU")}} entwickelt.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software und Hardware kompatibel. Es gibt keine aktiven Patente in Bezug auf MPEG-1-Video mehr, sodass es ohne Lizenzierungsprobleme verwendet werden kann. Allerdings unterstützen wenige Webbrowser MPEG-1-Video ohne Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern abgelehnt wird, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für die Verwendung in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1,5 Mbit/s</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS und 60
        FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
        Y'CbCr mit 4:2:0 Chroma-Subsampling mit bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
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
        Proprietär; jedoch sind alle Patente abgelaufen, sodass MPEG-1 frei
        genutzt werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Teil 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das in der MPEG-2-Spezifikation definiert ist, und wird auch gelegentlich unter seiner {{Glossary("ITU", "ITU")}}-Bezeichnung, H.262, geführt. Es ähnelt sehr dem MPEG-1-Video—tatsächlich kann jeder MPEG-2-Player MPEG-1 automatisch ohne spezielle Arbeit wiedergeben—jedoch wurde es erweitert, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 zu ermöglichen, Standard-Definition-Fernsehen zu komprimieren, sodass auch Interlaced-Video unterstützt wird. Die Kompressionsrate für Standard-Definition und die Qualität des resultierenden Videos erfüllten die Bedürfnisse so gut, dass MPEG-2 der primäre Videocodec für DVD-Video-Medien wurde.

MPEG-2 bietet mehrere Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Level unterteilt, von denen jedes Attribute des Videos wie Bildrate, Auflösung, Bitrate usw. steigert. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Level, von denen jedes Unterstützung für größere Bilddimensionen und Bitraten bietet. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für Fernsehen in Nordamerika MPEG-2 Video in High Definition mit dem Main Profile auf High Level, wobei 4:2:0-Video bei sowohl 1920 x 1080 (30 FPS) als auch 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbit/s erlaubt ist.

Allerdings unterstützen wenige Webbrowser MPEG-2 ohne Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern abgelehnt wird, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für die Verwendung in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 100 Mbit/s; variiert je nach Level und Profil</td>
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
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
        Y'CbCr mit 4:2:0 Chroma-Subsampling in den meisten Profilen; die Profile "High" und
        "4:2:2" unterstützen auch 4:2:2 Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen mit Ausnahme von Malaysia (ab dem 1. Oktober 2024), sodass MPEG-2 frei außerhalb von Malaysia verwendet werden kann.
        Patente werden von <a href="https://via-la.com/licensing-programs/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat eine äußerst geringe Nutzung, und die Unterstützung wird aus Browsern entfernt.

**[Theora](https://de.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und kostenloser Videocodec, der ohne Lizenzgebühren oder Lizenzierung verwendet werden kann. Theora ist in Bezug auf Qualität und Kompressionsrate mit MPEG-4 Part 2 Visual und AVC vergleichbar, was ihn zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Videokodierung macht. Aber sein Status als frei von jeglichen Lizenzierungsproblemen und seine vergleichsweise geringen CPU-Ressourcenanforderungen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Die geringe CPU-Belastung ist besonders nützlich, da es keine Hardware-Decoder für Theora gibt.

Theora basierte ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und an Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass er nur 8 Bit pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt, 8 Bit pro Komponente ist dennoch das am häufigsten verwendete Farbformat heute, so dass dies nur ein kleiner Nachteil in den meisten Fällen ist. Auch kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil ist jedoch, dass er von Safari nicht unterstützt wird, sodass Theora nicht nur auf macOS, sondern auf allen Millionen von iPhones und iPads nicht verfügbar ist.

Das [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) bietet zusätzliche Informationen zu Theora sowie zum Ogg-Containerformat, innerhalb dessen es verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbit/s</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Beliebig; jeder von Null verschiedener Wert wird unterstützt. Die Bildrate wird
        als 32-Bit-Zähler und -Nenner spezifiziert, um nicht-ganzzahlige
        Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
        Y'CbCr mit 4:2:0, 4:2:2 und 4:4:4 Chroma-Subsampling bei 8 Bit pro
        Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Unterstützung für Variable Frame Rate (VFR) innerhalb eines einzigen
          Streams bietet, können mehrere Streams innerhalb einer einzigen Datei aneinandergereiht werden,
          und jeder dieser Streams kann seine eigene Bildrate haben, was im
          Grunde genommen VFR ermöglicht. Dies ist jedoch unpraktisch, wenn die
          Bildrate häufig geändert werden muss.
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzierungsvoraussetzungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**)-Codec wurde ursprünglich von On2 Technologies entwickelt. Nach dem Kauf von On2 hat Google VP8 als offenes und lizenzgebührenfreies Videoformat veröffentlicht, mit dem Versprechen, die entsprechenden Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 vergleichbar mit [AVC](#avc_h.264).

Wenn es vom Browser unterstützt wird, erlaubt VP8 Video mit einem Alphakanal, wodurch das Video mit dem Hintergrund gespielt werden kann, sodass dieser durch das Video hindurchgesehen werden kann, in einem von jedem Pixel's Alphakomponente festgelegten Umfang. Safari unterstützt keine Alphatransparenz in VP8-Video.

Es gibt eine gute Browserunterstützung für VP8 in HTML-Inhalten, insbesondere innerhalb von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, basierend auf Levels-beschränkte Einschränkungen gelten</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
      <td>Y'CbCr mit 4:2:0 Chroma-Subsampling bei 8 Bits pro Komponente</td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja; VP8 ist einer der Spezifikation-erforderlichen Codecs für WebRTC</td>
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzierungsvoraussetzungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards von Google.
Wie VP8 ist VP9 völlig offen und lizenzgebührenfrei.
Seine Kodierungs- und Dekodierungsleistung ist vergleichbar mit oder etwas schneller als die von AVC, jedoch mit besserer Qualität.
Die kodierte Videoqualität von VP9 ist vergleichbar mit der von HEVC bei ähnlichen Bitraten.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0-Chroma-Subsampling-Stufen, aber seine Profile umfassen Unterstützung für tiefere Farben und die gesamte Palette der Chroma-Subsampling-Modi.
Es unterstützt mehrere HDR-Implementierungen und bietet erhebliche Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von vielen Browsern unterstützt und Hardwareimplementierungen des Codecs sind ziemlich häufig.
VP9 ist einer der beiden von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) vorgeschriebenen Videocodecs (der andere ist [VP8](#vp8)).
Beachten Sie jedoch, dass Safari in diesem Format keine Alphatransparenz unterstützt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, level-basierte Einschränkungen werden durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehafteter
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
              <th scope="row">Profil 0</th>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profil 1</th>
              <td>8</td>
              <td>4:2:0, 4:2:2 und 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Profil 2</th>
              <td>10 bis 12</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profil 3</th>
              <td>10 bis 12</td>
              <td>4:2:0, 4:2:2 und f:4:4</td>
            </tr>
          </tbody>
        </table>
        <p>
          Unterstützte Farbräume:
          <a href="https://de.wikipedia.org/wiki/Rec._601">Rec. 601</a>,
          <a href="https://de.wikipedia.org/wiki/Rec._709">Rec. 709</a>,
          <a href="https://de.wikipedia.org/wiki/Rec._2020">Rec. 2020</a>,
          <a href="https://de.wikipedia.org/wiki/SMPTE_C">SMPTE C</a>, SMPTE-240M
          (veraltet; ersetzt durch Rec. 709), und
          <a href="https://de.wikipedia.org/wiki/SRGB">sRGB</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>
        Ja; HDR10+, <a href="https://de.wikipedia.org/wiki/Hybrid-Log-Gamma">HLG</a> und
        <a href="https://de.wikipedia.org/wiki/Perceptual_Quantizer">PQ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung von variabler Bildrate (VFR)</th>
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
        {{Glossary("RTP", "RTP")}} / <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzierungsvoraussetzungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Videocodecs

Die Entscheidung, welche Codec oder Codecs verwendet werden sollen, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden, oder sollen auch proprietäre Formate berücksichtigt werden?
- Haben Sie die Ressourcen, mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Fähigkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei denen Sie bereit sind, Kompatibilität zu opfern?
- Wie alt ist die älteste Version eines Webbrowsers, die Sie unterstützen müssen? Beispielsweise, müssen Sie auf jedem in den letzten fünf Jahren ausgelieferten Browser arbeiten, oder nur im letzten Jahr?

In den folgenden Abschnitten bieten wir empfohlene Auswahlmöglichkeiten für spezifische Anwendungsfälle. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als der beste für den Anwendungsfall angesehen wird, proprietär ist oder Lizenzgebühren erfordern kann, werden zwei Optionen bereitgestellt: zuerst eine offene und gebührenfreie Option, gefolgt von der proprietären.

Wenn Sie nur in der Lage sind, eine einzige Version jedes Videos anzubieten, können Sie das Format wählen, das am besten für Ihre Bedürfnisse geeignet ist. Die erste wird als eine gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am breitesten kompatible Wahl sein, auf Kosten von etwas Qualität, Leistung und/oder Größe.

### Empfehlungen für das Web

Zuerst schauen wir uns die besten Optionen für Videos an, die auf einer typischen Website präsentiert werden, wie z. B. ein Blog, eine Informationsseite, eine kleine Geschäftswebsite, auf der Videos verwendet werden, um Produkte zu demonstrieren (aber nicht, wo die Videos selbst ein Produkt sind), und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container, der den **[AV1](#av1)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Diese sind alle offen, gebührenfrei und allgemein gut unterstützt, wobei die Ausnahme Safari auf älteren Apple-Geräten ist.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
   </video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Ihr Audiocodec. Dies liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs in einer breiten Palette von Browsern unterstützt wird, und die Qualität ist in der Regel gut für die meisten Anwendungsfälle. Überprüfen Sie jedoch Ihre Einhaltung der Lizenzanforderungen.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein abschließendes `</video>`-Tag, unabhängig davon, ob Sie {{HTMLElement("source")}}-Elemente darin haben oder nicht.

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Derzeit gibt es keine verlustfreien oder nahezu verlustfreien Videocodecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Beispielsweise benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0-Farbunterabtastung mindestens 1,5 Gbps. Durch die Verwendung verlustfreier Kompression wie FFV1 (das nicht von Webbrowsern unterstützt wird) könnte dies möglicherweise auf etwa 600 Mbps reduziert werden, je nach Inhalt. Das sind immer noch riesige Mengen an Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für den praktischen Einsatz nicht geeignet.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus haben; die verlustfreien Modi sind jedoch in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec zu wählen, der verlustbehaftete Kompression verwendet und ihn so zu konfigurieren, dass so wenig Kompression wie möglich durchgeführt wird. Eine Möglichkeit, dies zu tun, ist, den Codec für die Verwendung schneller Kompression zu konfigurieren, was automatisch bedeutet, dass weniger Kompression erreicht wird.

#### Externe Video-Vorbereitung

Um Video zu Archivierungszwecken außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das Kompression auf die ursprünglichen unkomprimierten Videodaten anwendet. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu codieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Während andere Codecs bessere Best-Case-Qualitätsniveaus haben können, wenn das Video erheblich komprimiert wird, sind ihre Encoder in der Regel so langsam, dass das fast verlustfreie Encoding, das Sie mit dieser Kompression erhalten, erheblich schneller ist und etwa das gleiche Gesamtniveau der Qualität erreicht.

#### Videoaufnahme

Angesichts der Einschränkungen, wie nahe man verlustfrei kommen kann, könnten Sie in Betracht ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Beispielsweise, wenn Sie die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzunehmen, könnten Sie Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Farbunterabtastung und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzeichnet. Die resultierende Datei wird eine Bitrate von maximal 800 Mbps haben, die zwischen den Video- und Audiotracks aufgeteilt ist. Sie müssen diese Werte wahrscheinlich anpassen, abhängig von der Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten. Diese Bitrate ist offensichtlich nicht realistisch für die Netzübertragung und würde wahrscheinlich nur lokal verwendet werden.

Wenn wir den Wert des `codecs`-Parameters in seine punktiert-durchgegliederten Eigenschaften aufschlüsseln, sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `av01` | Die vierzeichenlange Codebezeichnung (4CC) zur Identifizierung des [AV1](#av1)-Codecs.                                                                                                                                                                                                                 |
| `2`    | Das Profil. Ein Wert von 2 zeigt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                           |
| `19H`  | Die Stufe und Schicht. Dieser Wert stammt aus der Tabelle im Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und zeigt die hohe Schicht von Level 6.3 an.                                                                                                       |
| `12`   | Die Farbtiefe. Dies gibt 12 Bits pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die genaueste Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                                          |
| `0`    | Die monochrome Modus-Flagge. Wenn 1, würden keine Chromaplane aufgezeichnet, und alle Daten sollten streng genommen Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 spezifiziert, weil wir Farbe wollen.                                                                               |
| `000`  | Der Modus der Farbunterabtastung, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) der AV1-Spezifikation. Ein Wert von 000 kombiniert mit dem Monochrommodus-Wert 0 zeigt an, dass wir eine 4:4:4-Farbunterabtastung oder keinen Farbverlust wünschen. |
| `09`   | Die zu verwendenden Farbprimären. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) der AV1-Spezifikation; 9 gibt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                                                    |
| `16`   | Die zu verwendenden Übertragungscharakteristiken. Dies kommt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 zeigt, dass wir die Charakteristiken für BT.2100 PQ-Farbe verwenden möchten.                                                         |
| `09`   | Die zu verwendenden Matrixkoeffizienten, erneut aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Leuchtdichte verwenden möchten; dies ist auch als BT.2010 YbCbCr bekannt.                               |
| `1`    | Die Video-„Vollbereich“-Flagge. Ein Wert von 1 zeigt an, dass wir den vollen Farbbereich verwenden möchten.                                                                                                                                                                                            |

Die Dokumentation zu Ihren Codec-Auswahlmöglichkeiten bietet wahrscheinlich Informationen, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden werden.

## Siehe auch

- [Leitfaden für Web-Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Media-Container-Formate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Mediakompatibilitätsproblemen im Webinhalt](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die „Codecs“ und „Profiles“-Parameter für „Bucket“-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

---
title: Leitfaden zu Web-Videocodecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Dieser Leitfaden stellt die Videocodecs vor, denen Sie im Web am ehesten begegnen oder die Sie in Erwägung ziehen könnten, sowie Zusammenfassungen ihrer Fähigkeiten, eventuelle Kompatibilitäts- und Nutzbarkeitsprobleme, und Ratschläge, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es notwendig, diese deutlich zu komprimieren, um sie speichern und erst recht über ein Netzwerk übertragen zu können. Stellen Sie sich die Datenmenge vor, die für die Speicherung unkomprimierten Videos erforderlich ist:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in voller Farbe (4 Bytes pro Pixel) benötigt 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (ca. 249 MB) beanspruchen.
- Eine Minute HD-Video würde 14,93 GB Speicher benötigen.
- Ein typisches 30-minütiges Videokonferenz würde etwa 447,9 GB Speicher benötigen, und ein zweistündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ benötigen.

Nicht nur der erforderliche Speicherplatz ist enorm, auch die Netzwerkbandbreite, die für die Übertragung eines unkomprimierten Videos notwendig wäre, wäre mit 249 MB/s enorm – Audio und Overhead nicht einmal einbezogen. Hier kommen Videocodecs ins Spiel. Genau wie Audiocodecs für die Sounddaten komprimieren Videocodecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details können verloren gehen; das Ausmaß des Verlusts hängt vom Codec und dessen Konfiguration ab, aber generell gilt: Je mehr Kompression Sie erreichen, desto mehr Details und Qualität gehen verloren. Es gibt auch verlustfreie Codecs, diese werden jedoch typischerweise für Archivierung und Speicherung für lokale Wiedergabe verwendet und nicht für die Nutzung in einem Netzwerk.

## Häufige Codecs

Die folgenden Videocodecs sind die am häufigsten im Web verwendeten. Für jeden Codec sind auch die Container (Dateitypen) aufgelistet, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, der zusätzliche Details über den Codec enthält, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Sie beachten sollten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codiername (kurz)</th>
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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: die Besonderheiten des Formats und der Inhalte des Quellvideos sowie die Eigenschaften und Konfiguration des bei der Kodierung des Videos verwendeten Codecs.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das originale, unkomprimierte Video aussehen lässt, macht die resultierenden Daten in der Regel auch größer. Daher ist es immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist ein größerer Qualitätsverlust, um die Datenmenge zu reduzieren, diesen Qualitätsverlust wert; in anderen Fällen ist der Qualitätsverlust inakzeptabel, und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Auswirkungen des Quellvideoformats auf das kodierte Ergebnis

Das Ausmaß, in dem das Format des Quellvideos das Ausgabeergebnis beeinflusst, variiert je nach Codec und Arbeitsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als durch einfache Pixel darstellt, macht das Format des ursprünglichen Bildes keinen Unterschied. Dinge wie Bildrate und, offensichtlich, Auflösung haben jedoch immer einen Einfluss auf die Ausgabedateigröße der Medien.

Zusätzlich haben alle Codecs ihre Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern, sind nicht gut darin, scharfe Kanten zu replizieren, oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder eine Reihe anderer Möglichkeiten. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss von Quellvideoformat und -inhalten auf die
    kodierte Videoqualität und -größe
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
        Je höher die Farbbittiefe, desto höher ist die erzielte Qualität der Farbtreue im Video. Darüber hinaus können bei gesättigten Teilen des Bildes (also dort, wo die Farben rein und intensiv sind, wie z.B. ein leuchtendes, reines Rot: <code>rgb(255 0 0 / 100%)</code>) Farbtiefen unter 10 Bit pro Komponente (10-Bit-Farbe) Bändern ermöglichen, bei denen Übergänge nicht ohne sichtbare Farbstufen dargestellt werden können.
      </td>
      <td>
        Je nach Codec können höhere Farbtiefen zu größeren komprimierten Dateigrößen führen. Der entscheidende Faktor ist, welches interne Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Geschmeidigkeit der Bewegung im Bild. Bis zu einem bestimmten Punkt, desto höher die Bildrate, desto geschmeidiger und realistischer erscheint die Bewegung. Schließlich wird der Punkt geringer Rendite erreicht. Siehe <a href="#reduced_frame_rate">Bildrate</a> unten für Details.
      </td>
      <td>
        Sofern die Bildrate während der Kodierung nicht reduziert wird, führen höhere Bildraten zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Kompression von Videos erfolgt typischerweise durch den Vergleich von Bildern, um festzustellen, wo sie sich unterscheiden, und erstellt Datensätze, die genügend Informationen enthalten, um das vorherige Bild zu aktualisieren, um das Erscheinungsbild des folgenden Bildes zu approximieren. Je mehr aufeinanderfolgende Bilder sich voneinander unterscheiden, desto größer sind diese Unterschiede, und desto weniger effektiv ist die Kompression, um die Einführung von Artefakten in das komprimierte Video zu vermeiden.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren Zwischenbildern aufgrund der höheren Anzahl von Unterschieden zwischen den Bildern. Aus diesem und anderen Gründen wird das Ausgabefile tendenziell größer, je mehr Bewegung ein Video enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Körnigkeit im Bild) führt zu Variabilität. Variabilität macht die Kompression im Allgemeinen schwieriger, was zu mehr Qualitätsverlust aufgrund der Notwendigkeit führt, Details zu verwerfen, um das gleiche Maß an Kompression zu erreichen.
      </td>
      <td>
        Je mehr Variabilität – wie Rauschen – es im Bild gibt, desto komplexer wird der Kompressionsprozess, und desto weniger Erfolg wird die Algorithmen wahrscheinlich haben, das Bild in dem gleichen Maße zu komprimieren. Es sei denn, Sie konfigurieren den Encoder so, dass er einige oder alle Variationen verursacht durch Rauschen ignoriert, wird das komprimierte Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöste Videos, die in derselben Bildschirmgröße angezeigt werden, können typischerweise die ursprüngliche Szene genauer darstellen, abgesehen von Effekten, die während der Kompression eingeführt wurden.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies spielt eine entscheidende Rolle bei der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und dessen Konfiguration. Neben allgemeinen Codec-Optionen könnte der Encoder konfiguriert sein, die Bildrate zu reduzieren, Rauschen zu bereinigen und/oder die gesamte Auflösung des Videos während der Kodierung zu reduzieren.

### Auswirkungen der Codec-Konfiguration auf das kodierte Ergebnis

Die Algorithmen, die beim Kodieren von Videos verwendet werden, verwenden typischerweise eine oder mehrere allgemeine Techniken, um ihre Kodierung durchzuführen. Im Allgemeinen wird jede Konfigurationsoption, die dazu gedacht ist, die Ausgabedateigröße des Videos zu reduzieren, wahrscheinlich eine negative Auswirkung auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Form der Kodierung auszuwählen, was zu einer viel größeren kodierten Datei führt, aber mit perfekter Reproduktion des Originalvideos beim Dekodieren.

Darüber hinaus kann jedes Encoder-Benutzerprogramm Unterschiede darin aufweisen, wie es die Quellvideos verarbeitet, was zu unterschiedlichen Ausgabequalität und/oder -größe führen kann.

<table class="standard-table">
  <caption>
    Video-Encoder-Konfigurationseffekte auf Qualität und Größe
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
      <th scope="row">Verlustfreie Kompression</th>
      <td>Kein Verlust der Qualität</td>
      <td>
        Verlustfreie Kompression kann die Gesamtvideogröße nicht annähernd so stark reduzieren wie verlustbehaftete Kompression; die resultierenden Dateien sind wahrscheinlich immer noch zu groß für den allgemeinen Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße werden Artefakte und andere Formen von Qualitätsverschlechterungen auftreten, abhängig vom spezifischen Codec und davon, wie viel Kompression angewendet wird
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto leichter können höhere Kompressionsraten erreicht werden
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto ähnlicher wird das kodierte Video den Originalmedien aussehen
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten Video-Dateien; das Ausmaß, in dem dies zutrifft, variiert je nach dem Codec
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Qualität verbessert sich im Allgemeinen mit höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Kodieren von Videos verfügbar sind, und die Werte, die diesen Optionen zugewiesen werden sollten, variieren nicht nur von einem Codec zum anderen, sondern auch je nach der Kodierungssoftware, die Sie verwenden. Die Dokumentation, die Ihrer Kodierungssoftware beiliegt, hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebeneffekte eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder umgeordneten Daten zu sichtbaren negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, aufgrund der Darstellungsweise von Video. Jedes Video-Bild wird durch das Anwenden einer Reihe von Änderungen auf das derzeit sichtbare Bild präsentiert. Dies bedeutet, dass alle Fehler oder Artefakte im Laufe der Zeit zusammengerechnet werden und zu Glitches oder sonstigen seltsamen oder unerwarteten Abweichungen im Bild führen, die eine Weile andauern.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselframes** (auch als **Intra-Frames** oder **I-Frames** bekannt) in die Videodatei eingefügt. Schlüsselframes sind vollständige Frames, die dazu verwendet werden, sichtbare Schäden oder Artefaktreste zu reparieren.

### Aliasing

Alias-Bildung ist ein allgemeiner Begriff für alles, was beim Wiederherstellen aus den kodierten Daten nicht mehr genauso aussieht wie vor der Kompression. Es gibt viele Formen der Alias-Bildung; die am häufigsten anzutreffenden sind:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht, wenn ein Muster im Quellbild und die Funktionsweise des Encoders räumlich leicht nicht ausgerichtet sind. Die vom Encoder generierten Artefakte führen dann zu seltsamen, wirbelnden Effekten im Muster des Quellbilds beim Dekodieren.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="Eine Ziegelmauer zeigt sich aufgrund des Moiré-Musters wie Wellen mit einem wirbelnden Effekt" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das auftritt, wenn diagonale gerade oder gekrümmte Kanten, die eigentlich glatt sein sollten, ein gezackt bzw. "stufenartiges" Erscheinungsbild erhalten. Dies ist der Effekt, der durch "Anti-Aliasing"-Filter reduziert werden soll.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die aufgrund von Aliasing wie eine Treppe aussehen
          " src="staircase-effect.jpg"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenrad-Effekt</h4>
        <p>
          Der <strong>Wagenrad-Effekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">Stroboskop-Effekt</a></strong
          >) ist der visuelle Effekt, der oft im Film zu sehen ist, bei dem ein sich drehendes Rad in der falschen Geschwindigkeit oder sogar rückwärts zu drehen scheint, aufgrund einer Wechselwirkung zwischen der Bildrate und dem Kompressionsalgorithmus. Der gleiche Effekt kann bei jedem sich bewegenden wiederholenden Muster auftreten, wie z.B. die Bahnschwellen auf einem Gleis, Pfosten am Straßenrand usw. Dies ist ein zeitliches (zeitbasiertes) Alias-Problem; die Geschwindigkeit der Drehung interferiert mit der Frequenz der während der Kompression oder Kodierung durchgeführten Abtastung.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Sich drehendes Rad, das durch Aliasing einen Wagenradeffekt erzeugt." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farbrandsäume

**Farbrandsäume** sind eine Art von visuellen Artefakten, die als falsche Farben entlang der Ränder farbiger Objekte in der Szene auftreten. Diese Farben haben keine beabsichtigte Farbbeziehung zum Inhalt des Frames.

### Verlust von Schärfe

Das Entfernen von Daten beim Kodieren von Videos erfordert, dass einige Details verloren gehen. Bei ausreichender Kompression können Teile oder möglicherweise das gesamte Bild an Schärfe verlieren und ein leicht unscharfes oder nebliges Erscheinungsbild erhalten.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text - insbesondere kleiner Text - sehr detailorientierter Inhalt ist, bei dem kleine Veränderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Kompressionsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** verursachen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln verunreinigt werden, die vom Kompressionsalgorithmus generiert wurden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund überschreiten. Dies ist besonders häufig bei höheren Kompressionsstufen der Fall.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Stufen und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ist in gewisser Hinsicht dem [Moskito-Rauschen](#moskito-rauschen) ähnlich, nur dass beim Klingeln der Effekt mehr oder weniger gleichbleibend und unveränderlich ist, während Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Artefaktart, die das Lesen von im Bild enthaltenem Text besonders schwierig machen kann.

### Posterisierung

**Posterisierung** tritt auf, wenn die Kompression zu einem Verlust an Farbdetails in Farbverläufen führt. Statt durchgehender Übergänge zwischen den verschiedenen Farben in einem Bereich wird das Bild blockig, mit Farbflecken, die das ursprüngliche Erscheinungsbild des Bildes annähernd darstellen.

![Weißkopfseeadlerfoto mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben in der Befiederung des Weißkopfseeadlers im obigen Foto (und der Schnee-Eule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisationsartefakte verloren.

### Konturierung

**Konturierung** oder **Farbstrichbildung** ist eine spezielle Form der Posterisierung, bei der die Farbbereiche Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Infolgedessen zeigt der Inhalt des Videos ein "geschichtetes" Aussehen, bei dem die Übergänge von Farbe zu Farbe abrupt sind, und es entstehen Streifen von Farbe.

![Beispiel für ein Bild, dessen Kompression Konturierung eingeführt hat](contouring-effect.jpg)

Im obigen Bildbeispiel beachten Sie, wie der Himmel Bänder von verschiedenen Blautönen hat, anstatt ein gleichmäßiges Gefälle zu sein, wie der Himmel sich am Horizont verändert. Dies ist der Konturierungseffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein temporäres Artefakt, das sich als Rauschen oder **Kantenunruhe** präsentiert, das als flackernde Unschärfe oder Flimmern erscheint, das ungefähr außerhalb der Kanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann im Aussehen [Klingeln](#klingeln) ähneln.

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich im Himmel rund um die Brücke. In der oberen rechten Ecke zeigt ein Ausschnitt eine Nahaufnahme eines Teils des Bildes, das Moskito-Rauschen aufweist.

Moskito-Rauschen-Artefakte sind am häufigsten in MPEG-Videos zu finden, können aber auch auftreten, wann immer ein diskreter Kosinustransformations (DCT)-Algorithmus verwendet wird; dies umfasst beispielsweise JPEG-Standbilder.

### Bewegungsentschädigung-Blockgrenzartefakte

Die Komprimierung von Videos erfolgt im Allgemeinen durch den Vergleich zweier Bilder und das Aufzeichnen der Unterschiede zwischen ihnen, Bild für Bild, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest an einem Ort steht oder sich die Objekte im Bild relativ stationär befinden, aber wenn es eine große Menge an Bewegung im Bild gibt, kann die Anzahl der Unterschiede zwischen den Bildern so groß sein, dass die Kompression nichts bringt.

**[Motion Compensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder von Objekten im Sichtfeld) sucht und ermittelt, um wie viele Pixel sich das bewegende Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die sich bewegt haben, die nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die bewegenden Objekte und erstellt dann eine Art internes Bild, das wie das Original aussieht, jedoch mit allen Objekten, die an ihre neuen Positionen übersetzt wurden. Theoretisch entspricht dies dem Aussehen des neuen Bildes bei der Kompensation. Danach werden die verbleibenden Unterschiede gesucht, gut, die Menge an Objektverschiebungen und die Menge an Pixelunterschieden wurden in den Daten des neuen Bildes gespeichert. Dieses Objekt, welches die Verschiebung und die Pixelunterschiede beschreibt, wird **Residual Frame** genannt.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Ursprünglicher Frame</th>
      <th scope="col" style="width: 216px">Differenzen zwischen den Frames</th>
      <th scope="col" style="width: 216px">
        Unterschiede nach Bewegungsentschädigung
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalframe des Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Frame und dem folgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Frames nach Verschiebung um zwei Pixel nach rechts"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Der erste vollständige Frame, wie er vom Betrachter gesehen wird.
      </td>
      <td style="vertical-align: top">
        Hier werden nur die Unterschiede zwischen dem ersten Frame und dem folgenden Frame gesehen. Alles andere ist schwarz. Bei genauem Hinsehen ist zu erkennen, dass die Mehrheit dieser Unterschiede von einer horizontalen Kamerabewegung herrührt, was dies zu einem guten Kandidaten für Bewegungsentschädigung macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen wir hier die Schwenkung der Kamera, indem wir zuerst den ersten Frame um zwei Pixel nach rechts verschieben und dann die Differenz betrachten. Dies kompensiert das Schwenken der Kamera und ermöglicht mehr Überlappung zwischen den beiden Frames.
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

Es gibt zwei allgemeine Arten von Bewegungsentschädigung: **globale Bewegungsentschädigung** und **Blockbewegungsentschädigung**. Die globale Bewegungsentschädigung passt im Allgemeinen Kamerabewegungen wie Tracking, Dolly-Bewegungen, Schwenken, Neigen, Rollen und Auf- und Ab-Bewegungen an. Die Blockbewegungsentschädigung behandelt lokale Änderungen, indem sie kleinere Abschnitte des Bildes sucht, die mit Bewegungsentschädigung kodiert werden können. Diese Blöcke sind normalerweise von fester Größe auf einem Raster, aber es gibt Formen der Bewegungsentschädigung, die variable Blockgrößen erlauben und sogar eine Überlappung der Blöcke ermöglichen.

Es gibt jedoch Artefakte, die aufgrund von Bewegungsentschädigung auftreten können. Diese treten entlang der Blockgrenzen auf, in Form von scharfen Kanten, die falsche Klingel- und Kanten-Effekte produzieren. Diese entstehen durch die in die Kodierung der Residual Frames eingehende Mathematik und können leicht vor der Reparatur durch das nächste Schlüsselframe bemerkt werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu verkleinern, um die endgültige Größe der Videodatei zu verbessern. Während der sofortige Verlust an Größe oder die Glätte der Wiedergabe ein negativer Faktor sein kann, kann sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein und gleichzeitig eine viel höhere visuelle Qualität haben; selbst nach einer Skalierung während der Wiedergabe könnte das Ergebnis besser sein, als das ursprüngliche Video in voller Größe zu kodieren und den erforderlichen Qualitätseinbußen in Kauf zu nehmen, um die Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ebenso können Sie auch Frames vollständig aus dem Video entfernen und die Framerate entsprechend verringern. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner und diese geringere Grösse erlaubt es der Bewegungsentschädigung, noch mehr für Sie zu tun. Wenn beispielsweise bei jeder Aufnahme die Frames abwechselnd übersprungen werden, könnte die Bewegungsunterschiede mit vier Pixeln erfolgen, anstatt zwei Pixel Bewegungsdifferenz zwischen den Frames zu berechnen. Dies ermöglicht es der gesamten Kamerabewegung, mit weniger Residual Frames dargestellt zu werden.

Die absolute Mindestanzahl an Frames, die ein Video haben kann, bevor seine Inhalte vom menschlichen Auge nicht mehr als Bewegung wahrgenommen werden, liegt bei etwa 12 Frames pro Sekunde. Darunter wird das video zur einer Abfolge von Standbildern. Spielfilm ist typischerweise 24 Frames pro Sekunde, während das Fernsehen in SD bei etwa 30 Frames pro Sekunde liegt (leicht darunter, aber nahe genug) und HD-Fernsehen zwischen 24 und 60 Frames pro Sekunde liegt. Alles von 24 FPS aufwärts wird im Allgemeinen als ausreichend glatt wahrgenommen; 30 oder 60 FPS sind ein ideales Ziel, abhängig von Ihren Bedürfnissen.

Letztendlich liegen die Entscheidungen darüber, welche Opfer Sie bereit sind, zu bringen, ganz bei Ihnen und/oder Ihrem Design-Team.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Er erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50 % höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und ist sowohl für das {{HTMLElement("video")}} Element als auch für [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **Main**, **High** und **Professional** mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Darüber hinaus wird eine Reihe von **Levels** spezifiziert, die jeweils Grenzen für eine Reihe von Videoattributen definieren. Zu diesen Attributen gehören Bilddimensionen, Bildbereich in Pixeln, Anzeige- und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Begrenzungen der Anzahl von Kacheln und Kachelspalten, die im Kodierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es ist jedoch erwähnenswert, dass mindestens für Firefox und Chrome die Levels derzeit beim Software-Dekodieren ignoriert werden und der Dekoder einfach das Beste tut, um das Video abzuspielen, basierend auf den bereitgestellten Einstellungen. Um die zukünftige Kompatibilität zu gewährleisten, sollten Sie jedoch innerhalb der Grenzen des gewählten Levels bleiben.

Der Hauptnachteil von AV1 ist derzeit, dass er sehr neu ist und die Unterstützung noch in den meisten Browsern integriert wird. Darüber hinaus werden Kodierer und Dekodierer noch auf Leistung optimiert und Hardware-Kodierer und -Dekodierer befinden sich weitgehend noch in der Entwicklung anstelle der Produktion. Aus diesem Grund dauert das Kodieren eines Videos in AV1-Format sehr lange, da die gesamte Arbeit in Software ausgeführt wird.

Derzeit ist AV1 aufgrund dieser Faktoren noch nicht bereit, Ihre erste Wahl als Videocodec zu sein, aber Sie sollten darauf achten, dass er in Zukunft einsatzbereit wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Level des Videos; das theoretische Maximum erreicht 800 Mbps bei Level 6.3.
        </p>
        <p>
          Siehe die
          <a href="https://aomediacodec.github.io/av1-spec/#levels">Level-Tabellen</a>
          der AV1-Spezifikation, die die maximalen Auflösungen und Raten für jedes Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Variiert je nach Level; beispielsweise hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 120 FPS erreichen kann.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis zu 65.535 x 65,535 Pixel, wobei jede Dimension jeden Wert zwischen diesen annehmen darf.
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
              <td>4:0:0 (Graustufe) oder 4:2:0</td>
            </tr>
            <tr>
              <th scope="row">High</th>
              <td>8 oder 10</td>
              <td>4:0:0 (Graustufe), 4:2:0 oder 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Professional</th>
              <td>8, 10 oder 12</td>
              <td>4:0:0 (Graustufe), 4:2:0, 4:2:2 oder 4:4:4</td>
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
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
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
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
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

Der **Advanced Video Coding** (**AVC**) Standard der MPEG-4-Spezifikationssuite ist sowohl in der identischen ITU H.264-Spezifikation als auch in der MPEG-4 Part 10-Spezifikation spezifiziert. Es handelt sich um einen bewegungskompensationsbasierten Codec, der heute weit verbreitet für alle Arten von Medien verwendet wird, einschließlich Broadcast-Fernsehen, {{Glossary("RTP", "RTP")}} Videokonferenzen und als Videocodec für Blu-Ray Discs.

AVC ist hochflexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; beispielsweise ist das Constrained Baseline Profile für die Verwendung in Videokonferenzen und mobilen Szenarien ausgelegt und verwendet weniger Bandbreite als das Main Profile (das in einigen Regionen für digitales Farbfernsehen verwendet wird) oder das High Profile (das für Blu-Ray Disc-Video verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling; das High 10 Profile fügt Unterstützung für 10-Bit-Farbe hinzu, und fortgeschrittene Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC hat auch spezielle Funktionen wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), die unter anderem die Produktion von stereoskopischem Video ermöglicht.

AVC ist jedoch ein proprietäres Format, und zahlreiche Patente sind im Besitz mehrerer Parteien in Bezug auf seine Technologien. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der über die Via LA-Patent-Pool keine Lizenzgebühren für das Streaming von Internetvideo im AVC-Format erfordert, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser dies nicht tun müssen, tun es einige.

In HTML-Inhalten für Webbrowser ist AVC weit kompatibel und viele Plattformen unterstützen Hardware-Encoding und Decoding von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

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
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>,
        obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des Bildes zu erstellen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8.192 x 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>Einige der gebräuchlicheren oder interessanteren Profile:</p>
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
              <td>4:0:0 (Graustufe) und 4:2:0</td>
            </tr>
            <tr>
              <td>Progressive High (ProHiP)</td>
              <td>8</td>
              <td>4:0:0 (Graustufe) und 4:2:0</td>
            </tr>
            <tr>
              <td>High 10 (Hi10P)</td>
              <td>8 bis 10</td>
              <td>4:0:0 (Graustufe) und 4:2:0</td>
            </tr>
            <tr>
              <td>High 4:2:2 (Hi422P)</td>
              <td>8 bis 10</td>
              <td>4:0:0 (Graustufe), 4:2:0 und 4:2:2</td>
            </tr>
            <tr>
              <td>High 4:4:4 Predictive</td>
              <td>8 bis 14</td>
              <td>4:0:0 (Graustufe), 4:2:0, 4:2:2 und 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>
        Ja; <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder
        Advanced HDR/SL-HDR; beide sind Teil des ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von Firefox für AVC hängt von den
          integrierten oder vorinstallierten Codecs des Betriebssystems für AVC und dessen Container ab, um
          Patentproblemen zu vermeiden.
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
        <a href="https://www.via-la.com/licensing-2/avc-h-264/"
          >erfordert eine Lizenz</a
        >. Beachten Sie, dass mehrere Patentpools möglicherweise zutreffen.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der von der ITU entwickelte **H.263** Codec wurde hauptsächlich für den Einsatz in Situationen mit niedriger Bandbreite entwickelt. Insbesondere konzentriert er sich auf Videokonferenzen über PSTN (öffentliche Vermittlungsnetze), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme). Trotz der Optimierung für Netzwerke mit niedriger Bandbreite ist er ziemlich CPU-intensiv und kann auf Computern mit niedriger Leistung möglicherweise nicht ausreichend performant sein. Das Datenformat ähnelt dem von MPEG-4 Teil 2.

H.263 wurde nie weit verbreitet im Web eingesetzt. Variationen von H.263 wurden als Grundlage für andere proprietäre Formate wie Flash-Video oder den Sorenson-Codec verwendet. Dennoch hat kein bedeutender Browser jemals H.263-Unterstützung standardmäßig integriert. Bestimmte Media-Plugins haben Unterstützung für H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Bezug auf die maximale Bitrate pro Rahmen (Bild) oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann darf das Video diesen Wert für jeden Rahmen nicht überschreiten. Die endgültige Bitrate hängt von diesem, der Bildrate, der Kompression und der gewählten Auflösung und dem Blockformat ab.

H.263 wurde durch H.264 ersetzt und wird daher als veraltetes Medienformat angesehen, das generell vermieden werden sollte, wenn möglich. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, ist, wenn Unterstützung auf sehr alten Geräten erforderlich ist, auf denen H.263 die beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) im Besitz einer Anzahl von Organisationen und Unternehmen, einschließlich Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und so weiter. Um H.263 zu verwenden, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

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
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        <p>Bis zu 1408 x 1152 Pixel.</p>
        <p>
          Version 1 von H.263 spezifiziert eine Reihe von Bildgrößen, die
          unterstützt werden. Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixeln sowie die Anzahl der Zeilen mit Leuchtkraft- und
        Chrominanzproben, die für jeden Rahmen verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
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
        <a href="https://www.itu.int/rec/T-REC-H.263/"
          >https://www.itu.int/rec/T-REC-H.263/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; entsprechende Lizenz oder Lizenzen sind erforderlich. Beachten Sie, dass
        mehrere Patentpools möglicherweise zutreffen.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec ist durch das ITU's **H.265** sowie durch MPEG-H Teil 2 definiert (der noch in Entwicklung befindliche Nachfolger von MPEG-4). HEVC wurde entwickelt, um effizientes Kodieren und Dekodieren von Videos in großen Auflösungen zu unterstützen (einschließlich 8K-Video), mit einer Struktur, die speziell dazu geschaffen wurde, Software die Nutzung moderner Prozessoren zu ermöglichen. Theoretisch kann HEVC komprimierte Dateigrößen halb so groß wie [AVC](#avc_h.264) erreichen, jedoch mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Kodierungseinheit (Coding Tree Unit, CTU) — ähnlich dem in vorherigen Codecs verwendeten Makroblock — aus einem Baum von Luminanzwerten für jedes Sample sowie aus einem Baum von Chrominanzwerten für jedes in derselben Kodierungseinheit verwendete Chrominanz-Sample, sowie allen erforderlichen syntaktischen Elementen. Diese Struktur unterstützt die einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8 Bit pro Komponente Farbe mit 4:2:0 Chroma-Subsampling unterstützt. Ebenso interessant ist, dass 4:4:4 Video speziell behandelt wird. Anstatt die Luminanzproben (die die Graustufenpixel des Bildes darstellen) und die Cb- und Cr-Proben (die angeben, wie die Grautöne zu Farbpixels geändert werden) zu haben, werden die drei Kanäle als drei monochrome Bilder behandelt, eines für jede Farbe, die dann während des Renderings kombiniert werden, um ein Vollfarbbild zu erzeugen.

HEVC ist ein proprietäres Format und ist durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA](https://www.via-la.com/licensing-2/hevc-vvc/) verwaltet; Gebühren werden an Entwickler und nicht an Inhalteproduzenten und -verteiler erhoben. Stellen Sie sicher, dass Sie die neuesten Lizenzbedingungen und -anforderungen prüfen, bevor Sie sich entscheiden, ob Sie HEVC in Ihrer App oder Website verwenden möchten!

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
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>128 x 96 bis zu 8.192 x 4.320 Pixel; variiert je nach Profil und Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Informationen unten sind für die wichtigsten Profile verfügbar. Es gibt eine
          Reihe anderer Profile, die hier nicht aufgeführt sind.
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
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
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
              <td>Nein</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung auf Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung auf Windows 10 1709+ wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat den gleichen Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Dekoder.
        </p>
        <p>Mozilla wird HEVC nicht unterstützen, solange es durch Patente belastet ist.</p>
        <p>Opera und andere Chromium-basierte Browser haben den gleichen Support-Status wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder später.</p>
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
        Proprietär; bestätigen Sie Ihre Konformität mit den
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools möglicherweise zutreffen.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des MPEG-4 Teil 2 Visual Standards. Während im Allgemeinen MPEG-4 Teil 2 Video von niemandem verwendet wird, weil es im Vergleich zu anderen Codecs keinen überzeugenden Mehrwert bietet, hat MP4V-ES auf Mobilgeräten etwas Verwendung. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist es, verwendet zu werden, um MPEG-4 Audio und Video über eine {{Glossary("RTP", "RTP")}} Sitzung zu streamen. MP4V-ES wird jedoch auch verwendet, um MPEG-4 Audio und Video über eine mobile Verbindung mit [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie möchten dieses Format mit Sicherheit nicht verwenden, da es von keinem größeren Browser in einem nennenswerten Umfang unterstützt wird und ziemlich obsolet ist. Dateien dieses Typs sollten die `.mp4v` Erweiterung haben, werden aber manchmal fälschlicherweise als `.mp4` bezeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Kein spezifisches Limit; nur durch die Datenrate eingeschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
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
        12 Bits pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
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
          Firefox unterstützt MP4V-ES in
          <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>
          Containern nur.
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
        <a href="https://www.via-la.com/licensing-2/mpeg-4-visual/"
          >eine Lizenz beantragen</a>
        über <a href="https://www.via-la.com/">Via LA</a> und/oder
        <a href="https://about.att.com/innovation/ip/patents"
          >AT&#x26;T</a>
        wie erforderlich
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG entwickelt, ohne die Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist er mit einer Vielzahl von Software- und Hardware-Geräten kompatibel. Es gibt keine aktiven Patente mehr im Zusammenhang mit MPEG-1-Video, sodass es ohne Lizenzierungsbedenken verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Verwendung von Plugins in Webbrowsern veraltet ist, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für die Verwendung in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1,5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS und 60
        FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4.095 x 4.095 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0 Chroma-Subsampling mit bis zu 12 Bits pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
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
              <th scope="row">MPEG-1 Unterstützung</th>
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
        verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert wird und gelegentlich auch mit seiner {{Glossary("ITU", "ITU")}} Bezeichnung, H.262, bezeichnet wird. Es ist dem MPEG-1-Video sehr ähnlich — tatsächlich kann jeder MPEG-2-Player automatisch MPEG-1 ohne besondere Anpassungen abspielen —, außer dass es erweitert wurde, um höhere Bitraten und verbesserte Kodiertechniken zu unterstützen.

Das Ziel war es, MPEG-2 die Komprimierung von Standard-Fernsehen zu ermöglichen, sodass auch interlaced Video unterstützt wird. Die Kompressionsrate und die Qualität des resultierenden Videos beim Standard-Definition-Video erfüllten die Anforderungen derart gut, dass MPEG-2 der Hauptvideocodec für DVD-Medien ist.

MPEG-2 bietet mehrere Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Levels verfügbar, von denen jedes die Attribute des Videos wie Bildrate, Auflösung, Bitrate usw. erhöht. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Levels, die jeweils Unterstützung für größere Bilddimensionen und Bitraten bieten. Beispielsweise unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards) Spezifikation für Fernsehen, die in Nordamerika verwendet wird, MPEG-2 Video in HD mit dem Main Profile bei High Level, was 4:2:0 Video bei sowohl 1920 x 1080 (30 FPS) als auch 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbps erlaubt.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Verwendung von Plugins in Webbrowsern veraltet ist, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für die Verwendung in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 100 Mbps; variabel je nach Level und Profil</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Abk.</th>
              <th scope="col">Level-Name</th>
              <th scope="col">Unterstützte Bildraten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>23.9, 24, 25, 29,97, 30</td>
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
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Abk.</th>
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
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0 Chroma-Subsampling in den meisten Profilen; die "High"
        und "4:2:2" Profile unterstützen auch 4:2:2 Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
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
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>, MPEG-TS (MPEG Transportstream), <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>, <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
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
        Proprietär; alle Patente sind weltweit abgelaufen, mit Ausnahme von Malaysia (ab dem 1. Oktober 2024), sodass MPEG-2 außerhalb Malaysias frei verwendet werden kann.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat extrem geringe Nutzung und die Unterstützung wird aus den Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und freier Videocodec, der ohne Lizenzgebühren oder Lizenzen verwendet werden kann. Theora ist hinsichtlich Qualität und Kompressionsrate vergleichbar mit MPEG-4 Part 2 Visual und AVC, was ihn zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Videocodierung macht. Aber sein Status, frei von jeglichen Lizenzierungsbedenken zu sein, und seine relativ geringen CPU-Ressourcenanforderungen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Der geringe CPU-Einfluss ist besonders nützlich, da es keine Hardware-Dekoder für Theora gibt.

Theora basierte ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass er nur 8 Bits pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt, 8 Bits pro Komponente sind immer noch das am häufigsten verwendete Farbformat heute, daher ist dies in den meisten Fällen nur ein kleiner Nachteil. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil ist jedoch, dass er von Safari nicht unterstützt wird, was Theora auf macOS sowie auf all den Millionen von iPhones und iPads unerreichbar macht.

Das [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) bietet zusätzliche Details zu Theora sowie das Ogg-Containerformat, in dem es verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Beliebig; jeder nicht-null Wert wird unterstützt. Die Bildrate wird als
        32-Bit Zähler und 32-Bit Nenner angegeben, um nicht ganzzahlige
        Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
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
        Y'CbCr mit 4:2:0, 4:2:2 und 4:4:4 Chroma-Subsampling bei 8 Bits pro
        Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Unterstützung für variable Bildraten (VFR) innerhalb eines einzelnen
          Streams bietet, können mehrere Streams innerhalb einer Datei verknüpft werden,
          und jeder dieser Streams kann seine eigene Bildrate haben, was im Wesentlichen
          VFR ermöglicht. Dies ist jedoch unpraktisch, wenn sich die Bildrate häufig ändern muss.
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
      <td>Offen und frei von Lizenzgebühren oder sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies erstellt. Nach dem Kauf von On2 hat Google VP8 als offenes und lizenzfreies Videoformat unter einem Versprechen veröffentlicht, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 vergleichbar mit [AVC](#avc_h.264).

Wenn vom Browser unterstützt, ermöglicht VP8 ein Video mit Alphakanal, sodass das Video abgespielt werden kann, während der Hintergrund bis zu einem vom Alphakanal jedes Pixels angegebenen Grad durch das Video sichtbar bleibt.

Es gibt gute Browserunterstützung für VP8 in HTML-Inhalten, insbesondere innerhalb von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) Dateien. Dies macht VP8 zu einem guten Kandidaten für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl ist, wenn verfügbar. Webbrowser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, jedoch unterstützen nicht alle Browser, die dies tun, es auch in HTML-Audio- und Videoelementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden einschränkungsbasierte Begrenzungen durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
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
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und spätere Versionen unterstützen VP8 nur in WebRTC-Verbindungen.</p>
        <p>Firefox unterstützt VP8 in MSE nur, wenn kein H.264 Hardware-Dekoder verfügbar ist. Verwenden Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu prüfen.</p>
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
      <td>Ja; VP8 ist einer der spezifikationspflichtigen Codecs für WebRTC</td>
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
      <td>Offen und frei von Lizenzgebühren oder sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, entwickelt von Google. Wie VP8 ist VP9 vollständig offen und lizenzfrei. Seine Kodier- und Dekodierleistung ist mit der von AVC vergleichbar oder etwas schneller, aber mit besserer Qualität. Die kodierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

Das Hauptprofil von VP9 unterstützt nur 8-Bit Farbtiefe bei 4:2:0 Chroma-Subsampling-Niveaus, aber seine Profile schließen Unterstützung für tiefere Farben und die vollständige Palette von Chroma-Subsampling-Modi ein. Es unterstützt mehrere HDR-Implementierungen und bietet beträchtliche Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von Browsern breit unterstützt, und Hardware-Implementierungen des Codecs sind ziemlich häufig. VP9 ist einer der beiden Video-Codec-Vorgaben von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass Safari-Unterstützung für WebM und VP9 erst in Version 14.1 eingeführt wurde, sodass wenn Sie sich entscheiden, VP9 zu verwenden, eine alternative Format wie AVC oder HEVC für iPhone-, iPad- und Mac-Anwender erwägen.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und wenn nötig ein alternatives Video bereitstellen können). Dies gilt insbesondere, wenn Sie einen offenen Codec anstelle eines proprietären verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden einschränkungsbasierte Begrenzungen durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">DCT-basiertes Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 65,536 x 65,536 Pixel</td>
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
          Unterstützte Farbpaletten:
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
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p>
          Firefox unterstützt VP8 in MSE nur, wenn kein H.264 Hardware-Dekoder verfügbar ist. Verwenden Sie
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
      <td>Offen und frei von Lizenzgebühren oder sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Video-Codecs

Die Entscheidung, welcher Codec oder welche Codecs verwendet werden sollen, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden, oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine alternative Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, auf deren Kompatibilität Sie verzichten können?
- Wie alt ist die älteste Version eines Webbrowsers, die Sie unterstützen müssen? Zum Beispiel, müssen Sie jeden Browser, der in den letzten fünf Jahren veröffentlicht wurde, unterstützen, oder nur die der letzten ein Jahr?

In den untenstehenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als am besten für den Anwendungsfall angesehen wird, proprietär ist oder möglicherweise Lizenzgebühren erfordert, werden zwei Optionen bereitgestellt: zuerst eine offene und gebührenfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format auswählen, das am besten zu Ihren Bedürfnissen passt. Die erste Option wird als eine gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am breitesten kompatible Wahl sein, auf Kosten einiger Qualität, Leistung und/oder Größe.

### Empfehlungen für alltägliche Videos

Zunächst schauen wir uns die besten Optionen für Videos an, die auf einer typischen Webseite präsentiert werden, z.B. einem Blog, einer Informationsseite, einer kleinen Unternehmenswebseite, auf der Videos zur Demonstration von Produkten verwendet werden (aber nicht, wo die Videos selbst ein Produkt sind), usw.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container mit dem **[VP9](#vp9)**-Codec für Video und dem **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio. Dies sind alles offene, gebührenfreie Formate, die allgemein gut unterstützt werden, wenn auch nur in recht aktuellen Browsern, weshalb eine alternative Option eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audiocodec. Dies liegt daran, dass der MP4-Container mit AVC und AAC-Codecs eine breit unterstützte Kombination ist – tatsächlich von jedem großen Browser – und die Qualität ist typischerweise gut für die meisten Anwendungsfälle. Stellen Sie jedoch sicher, dass Sie die Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein schließendes `</video>`-Tag, unabhängig davon, ob Sie {{HTMLElement("source")}}-Elemente darin haben oder nicht.

### Empfehlungen für hochwertige Video-Präsentationen

Wenn Ihr Ziel darin besteht, Video in höchstmöglicher Qualität zu präsentieren, werden Sie wahrscheinlich davon profitieren, so viele Formate wie möglich anzubieten, da die Codecs, die die beste Qualität ermöglichen, dazu neigen, die neuesten zu sein und somit die Wahrscheinlichkeit besteht, Lücken in der Browser-Kompatibilität zu haben.

1. Ein WebM-Container, der AV1 für Video und Opus für Audio verwendet. Wenn Sie in der Lage sind, das High- oder Professional-Profil beim Kodieren von AV1 zu verwenden, auf einer hohen Stufe wie 6.3, können Sie sehr hohe Bitraten bei 4K oder 8K Auflösung erreichen, während Sie eine exzellente Videoqualität beibehalten. Das Kodieren Ihres Audios mit dem Fullband-Profil von Opus bei einer Abtastrate von 48 kHz maximiert die erfasste Audiobandbreite und erfasst fast den gesamten Frequenzbereich, der im menschlichen Hörbereich liegt.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container mit dem [HEVC](#hevc_h.265)-Codec unter Verwendung eines der fortgeschrittenen Hauptprofile, wie Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4-Profil mit bis zu 16 Bit pro Komponente. Bei hoher Bitrate bietet dies eine ausgezeichnete Grafikqualität mit bemerkenswerter Farbwiedergabe. Darüber hinaus können Sie optional HDR-Metadaten einfügen, um ein Video mit hohem Dynamikumfang bereitzustellen. Für Audio verwenden Sie den AAC-Codec bei einer hohen Abtastrate (mindestens 48 kHz, idealerweise aber 96 kHz) und kodieren Sie mit komplexer Kodierung anstelle von schneller Kodierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen zur Archivierung, Bearbeitung oder Remixing

Derzeit gibt es keine verlustfreien – oder sogar nahezu verlustfreien – Video-Codecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Zum Beispiel benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0-Chromasubsampling mindestens 1,5 Gbps. Die Verwendung verlustfreier Kompression wie FFV1 (die von Webbrowsern nicht unterstützt wird) könnte diese vielleicht auf etwa 600 Mbps reduzieren, abhängig vom Inhalt. Das ist immer noch eine enorme Menge an Bits, die jede Sekunde durch eine Verbindung fließen müssen, und ist derzeit für keinen praxisnahen Einsatz realisierbar.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus bieten; die verlustfreien Modi sind in aktuellen Webbrowsern nicht implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec auszuwählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass er so wenig Kompression wie möglich durchführt. Eine Möglichkeit, dies zu tun, ist, den Codec so zu konfigurieren, dass er "schnelle" Kompression nutzt, was von Natur aus bedeutet, dass weniger Kompression erreicht wird.

#### Vorbereitung von Videos außerhalb des Internets

Um Videos für Archivierungszwecke außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Kompression auf den ursprünglich unkomprimierten Videodaten durchführt. Zum Beispiel kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 infile
```

Während andere Codecs möglicherweise bessere Bestfall-Qualitätsniveaus bieten, wenn das Video erheblich komprimiert wird, neigen ihre Kodierer dazu, so langsam zu sein, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Kompression erreichen, weitaus schneller bei etwa dem gleichen allgemeinen Qualitätsniveau ist.

#### Videoaufnahme

In Anbetracht der Einschränkungen, wie nah Sie an verlustfrei herankommen können, müssen Sie möglicherweise [AVC](#avc_h.264) oder [AV1](#av1) in Betracht ziehen. Zum Beispiel, wenn Sie die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzunehmen, könnten Sie Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chromasubsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreie Audioaufnahme aufzuzeichnen. Die resultierende Datei wird eine Bitrate von maximal 800 Mbps zwischen Video- und Audiotracks verwenden. Sie müssen diese Werte wahrscheinlich an die Hardwareleistung, Ihre Anforderungen und die spezifischen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Netzwerkübertragung und würde wahrscheinlich nur lokal verwendet werden.

Das Aufschlüsseln des Wertes des `codecs`-Parameters in seine durch Punkte getrennten Eigenschaften zeigt Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Der vierstellige Code (4CC), der den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                                 |
| `2`    | Das Profil. Ein Wert von 2 zeigt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                          |
| `19H`  | Die Stufe und Ebene. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt die hohe Ebene von Level 6.3 an.                                                                                           |
| `12`   | Die Farbtiefe. Dies zeigt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die genaueste Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                         |
| `0`    | Das Monochrommodus-Flag. Wenn 1, würden keine Chromaflächen aufgezeichnet, und alle Daten sollten ausschließlich Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 angegeben, weil wir Farbe möchten.                                                                   |
| `000`  | Der Chromasubsampling-Modus, aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrommodus-Wert 0, gibt an, dass wir 4:4:4-Chromasubsampling oder keinen Farbverlust wünschen. |
| `09`   | Die Farbprimärfarben, die verwendet werden sollen. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.              |
| `16`   | Die Übertragungseigenschaften, die zu verwenden sind. Diese stammen ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 zeigt, dass wir die Eigenschaften von BT.2100 PQ-Farbe verwenden möchten.                                    |
| `09`   | Die zu verwendenden Matrixkoeffizienten, ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Leuchtdichte verwenden möchten; dies ist auch als BT.2010 YbCbCr bekannt.           |
| `1`    | Das Video-"Vollbereich"-Flag. Ein Wert von 1 gibt an, dass wir den vollen Farbbereich verwenden möchten.                                                                                                                                                                              |

Die Dokumentation für Ihre Codec-Auswahl wird wahrscheinlich Informationen bieten, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden werden.

## Siehe auch

- [Leitfaden für Web-Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die "Codecs"- und "Profiles"-Parameter für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimediadateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimediadateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

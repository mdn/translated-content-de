---
title: Leitfaden zu Web-Video-Codecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 4f6e436684338f9e1256108b456d28b28c9726b0
---

Dieser Leitfaden stellt die Video-Codecs vor, die Sie wahrscheinlich im Web verwenden oder in Erwägung ziehen werden. Er enthält Zusammenfassungen ihrer Fähigkeiten, eventuelle Kompatibilitäts- und Nutzungsbedenken sowie Ratschläge, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie zu speichern, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die benötigt wird, um unkomprimiertes Video zu speichern:

- Ein einzelnes Bild eines HD-Videos (1920x1080) in voller Farbe (4 Byte pro Pixel) sind 8.294.400 Byte.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) beanspruchen.
- Eine Minute HD-Video würde 14,93 GB Speicher benötigen.
- Eine typischerweise 30-minütige Videokonferenz würde etwa 447,9 GB Speicher benötigen, und ein zweistündiger Film würde _fast 1,79 **TB** (das heißt 1790 GB)_ einnehmen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die erforderlich ist, um ein solches unkomprimiertes Video zu übertragen, wäre enorm, bei 249 MB/s — ohne Ton und Begleitinformationen. Hier kommen Video-Codecs ins Spiel. Genau wie Audio-Codecs für die Klangausgabe, komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, d. h. das dekodierte Video stimmt nicht genau mit der Quelle überein. Einige Details können verloren gehen; der Grad des Verlusts hängt vom Codec und seiner Konfiguration ab, aber als allgemeine Regel gilt: Je mehr Kompression Sie erreichen, desto mehr Detail- und Qualitätsverlust wird auftreten. Einige verlustfreie Codecs existieren, aber diese werden typischerweise für Archivierungs- und Speicherzwecke für die lokale Wiedergabe verwendet und nicht für den Einsatz im Netzwerk.

## Häufige Codecs

Die folgenden Video-Codecs sind diejenigen, die im Web am häufigsten verwendet werden. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec enthält einen Link zu einem Abschnitt weiter unten, der zusätzliche Details über den Codec bietet, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Ihnen bekannt sein sollten.

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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: spezifische Details zum Format und Inhalt des Quellvideos sowie die Eigenschaften und Konfiguration des Codecs, der bei der Kodierung des Videos verwendet wird.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, macht die resultierenden Daten im Allgemeinen auch größer. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen lohnt sich ein größerer Qualitätsverlust, um die Dateigröße zu reduzieren; in anderen Fällen ist der Qualitätsverlust inakzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Auswirkung des Quellvideoformats auf das kodierte Ergebnis

Der Grad, zu dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als durch einfache Pixel darstellt, spielt das Format des ursprünglichen Bildes keine Rolle. Dennoch werden Dinge wie Bildrate und, offensichtlich, Auflösung immer einen Einfluss auf die Ausgabemenge der Medien haben.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Einige haben Probleme mit bestimmten Arten von Formen und Mustern oder sind nicht gut darin, scharfe Kanten zu reproduzieren, oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder jede Anzahl von Möglichkeiten. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Effekt des Quellvideoformats und -inhalts auf die kodierte
    Videoqualität und -größe
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
      <th scope="row">Farbtiefe (Bit-Tiefe)</th>
      <td>
        Je höher die Farbtiefe in Bits, desto höher ist die Qualität der
        Farbtreue im Video. Darüber hinaus lässt in gesättigten Bereichen des
        Bildes (das heißt, wo Farben rein und intensiv sind, wie ein helles,
        reines Rot: <code>rgb(255 0 0 / 100%)</code>) eine Farbtiefe unter 10
        Bit pro Komponente (10-Bit-Farbe) Banding zu, wo Verläufe nicht ohne
        sichtbare Abstufung der Farben dargestellt werden können.
      </td>
      <td>
        Je nach Codec können höhere Farbtiefen zu größeren komprimierten
        Dateigrößen führen. Der entscheidende Faktor ist, welches interne
        Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Geschmeidigkeit der Bewegung
        im Bild. Bis zu einem gewissen Punkt wird die Bewegung umso fließender
        und realistischer erscheinen, je höher die Bildrate ist. Schließlich
        wird der Punkt abnehmender Erträge erreicht. Siehe <a href="#reduced_frame_rate">Bildrate</a> unten für Details.
      </td>
      <td>
        Angenommen, die Bildrate wird während der Kodierung nicht reduziert,
        verursachen höhere Bildraten größere komprimierte Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Videokompression funktioniert in der Regel durch den Vergleich von
        Bildern, das Finden von Unterschieden und das Erstellen von Aufzeichnungen,
        die genügend Informationen enthalten, um das vorherige Bild zu aktualisieren
        und das Aussehen des folgenden Bildes zu approximieren.
        Je mehr aufeinanderfolgende Bilder voneinander abweichen,
        desto größer sind diese Unterschiede, und desto weniger effektiv
        ist die Kompression zur Vermeidung der Einführung von Artefakten
        im komprimierten Video.
      </td>
      <td>
        Die durch Bewegung verursachte Komplexität führt zu größeren
        Zwischenbildern aufgrund der höheren Anzahl an Unterschieden zwischen
        den Bildern. Aus diesem und anderen Gründen wird das Ausgabedatei in
        der Regel größer, je mehr Bewegung in einem Video vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Körnungseffekte beim Film, Staub oder andere
        Körnigkeit im Bild) führt zu Variabilität. Variabilität macht die
        Kompression im Allgemeinen schwieriger, was zu einem größeren
        Qualitätsverlust führt, da zur Erreichung des gleichen
        Kompressionsgrades Details fallen gelassen werden müssen.
      </td>
      <td>
        Je mehr Variabilität – wie Rauschen – im Bild vorhanden ist, desto
        komplexer ist der Kompressionsprozess, und desto unwahrscheinlicher ist
        es, dass der Algorithmus das Bild im gleichen Maße komprimieren kann.
        Sofern Sie den Encoder nicht so konfigurieren, dass einige oder alle
        durch Rauschen verursachten Variationen ignoriert werden, wird das
        komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöste Videos, präsentiert in derselben Bildschirmgröße,
        können das Originalbild in der Regel genauer darstellen,
        abgesehen von den durch die Kompression eingeführten Effekten.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es.
        Dies spielt eine Schlüsselrolle für die endgültige Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Der Grad, in dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und dessen Konfiguration. Neben allgemeinen Codecop Optionen könnte der Encoder so konfiguriert werden, dass er die Bildrate reduziert, Rauschen bereinigt und/oder die Gesamtauslösung des Videos während der Kodierung verringert.

### Auswirkung der Codec-Konfiguration auf das kodierte Ergebnis

Die Algorithmen, die zur Videokodierung verwendet werden, verwenden in der Regel eine oder mehrere allgemeine Techniken, um ihre Kodierung durchzuführen. Im Allgemeinen wird jede Konfigurationsoption, die dazu bestimmt ist, die Ausgabemenge des Videos zu reduzieren, wahrscheinlich eine negative Auswirkung auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Kodierungsform auszuwählen, die zu einer viel größeren kodierten Datei führt, jedoch mit perfekter Wiedergabe des Originalvideos nach dem Dekodieren.

Darüber hinaus kann jede Encoder-Software Variationen aufweisen, wie sie das Quellvideo verarbeitet, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

<table class="standard-table">
  <caption>
    Auswirkungen der Videocodierer-Konfiguration auf Qualität und Größe
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
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Kompression kann die Gesamtvideogröße bei weitem nicht so
        stark reduzieren wie verlustbehaftete Kompression; die resultierenden
        Dateien sind wahrscheinlich immer noch zu groß für die allgemeine
        Nutzung.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße treten Artefakte und andere Formen der
        Qualitätsverschlechterung auf, abhängig vom spezifischen Codec und
        dem angewandten Kompressionsgrad
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto besser
        können höhere Kompressionsraten erreicht werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto ähnlicher sieht das kodierte
        Video dem ursprünglichen Medieninhalt aus.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren
        kodierten Videodateien; der Grad, in dem dies zutrifft, variiert
        je nach Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich in der Regel mit höheren Bitraten</td>
      <td>Höhere Bitraten führen naturgemäß zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die bei der Kodierung von Video zur Verfügung stehen, und die den Optionen zuzuweisenden Werte variieren nicht nur von einem Codec zum anderen, sondern auch je nach der von Ihnen verwendeten Kodierungssoftware. Die Dokumentation zu Ihrer Kodierungssoftware hilft Ihnen zu verstehen, welche spezifischen Auswirkungen diese Optionen auf das kodierte Video haben.

## Kompressionsartefakte

**Artefakte** sind Nebeneffekte eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten zu sichtbar negativen Effekten führen. Sobald ein Artefakt aufgetaucht ist, kann es eine Zeit lang bestehen bleiben, da Video auf folgende Weise angezeigt wird: Jedes Videobild wird angezeigt, indem ein Satz von Änderungen auf das aktuell sichtbare Bild angewendet wird. Dies bedeutet, dass Fehler oder Artefakte sich mit der Zeit summieren und zu Störungen oder anderweitig seltsamen oder unerwarteten Abweichungen im Bild führen, die eine Zeit lang anhalten.

Um dies zu beheben und die Suchzeiten durch die Videodaten zu verbessern, werden periodische **Schlüsselbilder** (auch als **Intra-Frames** oder **I-Frames** bekannt) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Bilder, die verwendet werden, um sichtbare Schäden oder artefaktrückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was beim Wiederherstellen aus den kodierten Daten nicht genauso aussieht wie vor der Kompression. Es gibt viele Formen von Aliasing; die häufigsten, die Sie sehen können, beinhalten:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht,
          wenn ein Muster im Quellbild und die Arbeitsweise des Codierers
          räumlich etwas aus der Ausrichtung kommen. Die vom Codierer
          erzeugten Artefakte führen dann zu seltsamen,
          wirbelnden Effekten im Muster des Quellbildes beim Dekodieren.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="Eine Ziegelmauer zeigt einen wirbelnden Effekt ähnlich Wellen aufgrund des Moiré-Musters" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          auftritt, wenn diagonale gerade oder gebogene Kanten, die glatt sein
          sollten, ein gezacktes Aussehen annehmen und wie eine Treppe
          aussehen. Dies ist der Effekt, der durch "Anti-Alias" Filter
          reduziert wird.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die wie eine Treppe aussehen, weil Aliasing einen Treppeneffekt verursacht
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
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, der häufig im Film zu sehen ist,
          bei dem ein sich drehendes Rad mit falscher Geschwindigkeit oder
          sogar rückwärts zu rotieren scheint, aufgrund einer Wechselwirkung
          zwischen der Bildrate und dem Kompressionsalgorithmus. Der gleiche
          Effekt kann bei jedem sich wiederholenden Muster auftreten, das
          sich bewegt, wie die Schwellen auf einer Gleislinie, Pfosten entlang
          der Straßenseite usw. Dies ist ein zeitbasiertes (zeitliches)
          Aliasing-Problem; die Geschwindigkeit der Drehung interferiert mit
          der Frequenz der Abtastung während der Kompression oder Kodierung.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Drehendes Rad aufgrund von Aliasing, das einen Wagenradeffekt verursacht." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farbsaum

**Farbsaum** ist eine Art von visuellem Artefakt, das als falsche Farben erscheint, die entlang der Kanten von gefärbten Objekten innerhalb der Szene eingeführt werden. Diese Farben haben keine beabsichtigte farbliche Beziehung zum Inhalt des Frames.

### Verlust von Schärfe

Der Akt des Entfernens von Daten im Prozess der Videokodierung erfordert, dass einige Details verloren gehen. Wenn genügend Kompression angewendet wird, können Teile oder möglicherweise das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder trüben Aussehen führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text—insbesondere kleiner Text—sehr detailorientierter Inhalt ist, bei dem kleine Veränderungen die Lesbarkeit erheblich beeinflussen können.

### Klingeln

Verlustbehaftete Kompressionsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit durch den Kompressionsalgorithmus erzeugten farbigen Pixeln kontaminiert werden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund überqueren. Dies ist insbesondere bei höheren Kompressionsstufen üblich.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Stufen und andere bedeutende Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ähnelt in gewisser Hinsicht dem [Moskito-Rauschen](#moskito-rauschen), mit dem Unterschied, dass der Klingeleffekt mehr oder weniger stetig und unverändert ist, während Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, das es besonders schwierig machen kann, in Ihren Bildern enthaltenen Text zu lesen.

### Posterisieren

**Posterisierung** tritt auf, wenn die Kompression zu einem Verlust von Farbdetails in Verläufen führt. Anstatt von sanften Übergängen durch die verschiedenen Farben in einem Bereich wird das Bild grobkörnig, mit Farbklecksen, die das ursprüngliche Aussehen des Bildes annähern.

![Weißkopfseeadler-Foto mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers im obigen Foto (und die Schneeeule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund der Posterisierung verlorengegangen.

### Konturierung

**Konturierung** oder **Farbbänderung** ist eine spezielle Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies geschieht, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Infolgedessen zeigt der Videoinhalt ein "geschichtetes" Aussehen, bei dem anstelle von sanften Verläufen und Übergängen die Übergänge von Farbe zu Farbe abrupt sind, was Streifen von Farbe verursacht.

![Beispiel eines komprimierten Bildes mit eingeführter Konturierung](contouring-effect.jpg)

Im Beispielbild oben, beachten Sie, wie der Himmel Bänder aus verschiedenen Blautönen hat, anstatt ein konsistentes Gefälle zu sein, während sich die Himmelsfarbe dem Horizont nähert. Dies ist der Konturierungseffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Kantengeschäftigkeit** in Erscheinung tritt, das als flackernde Trübheit oder Schimmern auftritt, das grob den Kanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann dem [Klingeln](#klingeln) ähneln.

![Beispiel eines Bildes, in dem durch die Kompression Moskito-Rauschen eingeführt wurde.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich des Himmels um die Brücke herum. In der oberen rechten Ecke zeigt ein Ausschnitt eine Nahaufnahme eines Teils des Bildes, das Moskito-Rauschen aufweist.

Moskito-Rauschartefakte sind am häufigsten in MPEG-Video zu finden, können aber immer auftreten, wenn ein diskreter Kosinustransform- (DCT-)Algorithmus verwendet wird; dies schließt zum Beispiel JPEG-Standbilder ein.

### Bewegungsentschädigungsblock-Grenzartefakte

Die Videokompression funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fixiert ist oder die Objekte im Bild relativ stationär sind, aber wenn es eine große Menge an Bewegung im Bild gibt, können die Unterschiede zwischen den Frames so groß sein, dass die Kompression keinen Nutzen bringt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder der Objekte im Sichtfeld) sucht und bestimmt, um wie viele Pixel sich das bewegte Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die sich bewegt haben, die nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die bewegten Objekte und erstellt dann eine Art internes Frame, das wie das Original aussieht, jedoch mit allen in ihre neuen Positionen verschobenen Objekten. Theoretisch nähert dies das Aussehen des neuen Frames an. Dann, um den Job abzuschließen, werden die verbleibenden Unterschiede gefunden, dann der Satz von Objektverschiebungen und der Satz von Pixeldifferenzen in den Daten, die den neuen Frame repräsentieren, gespeichert. Dieses Objekt, das die Verschiebung und die Pixeldifferenzen beschreibt, wird als **Restbild** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalbild</th>
      <th scope="col" style="width: 216px">Zwischenbildunterschiede</th>
      <th scope="col" style="width: 216px">
        Unterschied nach Bewegungsausgleich
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalbild eines Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Frame und dem darauffolgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Frames nach Verschiebung um zwei Pixel nach rechts"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Der erste vollständige Frame, wie vom Betrachter gesehen.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Frame und dem
        darauffolgenden Frame sichtbar. Alles andere ist schwarz. Bei genauerem
        Hinsehen können wir sehen, dass die Mehrheit dieser Unterschiede von
        einer horizontalen Kamerabewegung herrührt, was dies zu einem guten
        Kandidaten für die Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Zur Minimierung der Anzahl von unterschiedlichen Pixeln berücksichtigen
        wir hier die Schwenkbewegung der Kamera, indem wir zunächst den ersten
        Frame um zwei Pixel nach rechts verschieben und dann den Unterschied
        berechnen. Dies kompensiert die Schwenkbewegung der Kamera und erlaubt
        mehr Überlappung zwischen den beiden Frames.
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globale Bewegungskompensation passt im Allgemeinen für Kamerabewegungen wie Tracking, Dolly-Bewegungen, Schwenken, Kippen, Rollen und Auf- und Abbewegungen. Die Blockbewegungskompensation befasst sich mit lokalen Änderungen und sucht nach kleineren Abschnitten des Bildes, die mittels Bewegungskompensation kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe, in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen erlauben und sogar Überlappungen von Blöcken möglich machen.

Es gibt jedoch Artefakte, die aufgrund der Bewegungskompensation auftreten können. Diese treten entlang der Blockgrenzen in Form von scharfen Kanten auf, die falsches Klingeln und andere Kantenphänomene erzeugen. Diese sind auf die Mathematik zurückzuführen, die bei der Kodierung der Restbilder verwendet wird, und können leicht bemerkt werden, bevor sie vom nächsten Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Während der sofortige Verlust an Größe oder Geschmeidigkeit der Wiedergabe ein negativer Faktor sein kann, kann durch sorgfältige Entscheidungsfindung ein gutes Endergebnis erzielt werden. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein, während es eine viel höhere visuelle Qualität hat; selbst nach dem Hochskalieren während der Wiedergabe kann das Ergebnis besser sein als die Kodierung des Originalvideos in voller Größe und die notwendige Qualitätseinbuße zu akzeptieren, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich kann man auch Frames aus dem Video vollständig entfernen und die Bildrate entsprechend verringern. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungskompensation, noch mehr für Sie zu erledigen. Beispielsweise könnte man, anstatt Bewegungsunterschiede für zwei Frames zu berechnen, die zwei Pixel auseinander liegen aufgrund der zwischen-Bild-Bewegung, indem man jeden zweiten Frame überspringt, zu einer Berechnung der Differenz führen, die auf vier Pixel Bewegung herauskommt. Dadurch kann die gesamte Bewegung der Kamera durch weniger Restbilder dargestellt werden.

Die absolute minimale Bildrate, die ein Video haben kann, bevor dessen Inhalte nicht mehr als Bewegung vom menschlichen Auge wahrgenommen werden, liegt bei etwa 12 Bildern pro Sekunde. Darunter verwandelt sich das Video in eine Reihe von Standbildern. Kinofilme haben typischerweise 24 Bilder pro Sekunde, während Standardfernsehen etwa 30 Bilder pro Sekunde hat (etwas weniger, aber nahe genug) und hochauflösendes Fernsehen liegt zwischen 24 und 60 Bildern pro Sekunde. Alles von 24 FPS aufwärts wird im Allgemeinen als ausreichend flüssig angesehen; 30 oder 60 FPS sind ein ideales Ziel, abhängig von Ihren Anforderungen.

Am Ende liegen die Entscheidungen darüber, welche Opfer Sie bereit sind zu bringen, ganz bei Ihnen und/oder Ihrem Designteam.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das speziell für Internetvideos von der [Alliance for Open Media](https://aomedia.org/) entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und erzielt bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzfrei und für die Nutzung durch das {{HTMLElement("video")}} Element und [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, die mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling bereitstehen. Zudem wird eine Reihe von **Levels** festgelegt, die jeweils Grenzen für verschiedene Attribute des Videos definieren. Zu diesen Attributen gehören Rahmenabmessungen, Bildfläche in Pixeln, Anzeige- und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Grenzen für die Anzahl der verwendeten Kacheln und Kachelspalten im Kodierungs-/Dekodierungsprozess.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln. Die maximale Bildgröße in Pixeln beträgt jedoch 147.456, sodass Sie kein 2048x1152 Video auf Level 2.0 haben können. Es ist jedoch erwähnenswert, dass die Levels zumindest für Firefox und Chrome bei der Software-Dekodierung derzeit ignoriert werden, und der Dekoder einfach das Beste versucht, um das Video anhand der bereitgestellten Einstellungen abzuspielen. Der Kompatibilität halber sollten Sie jedoch die Grenzen des ausgewählten Levels einhalten.

Der größte Nachteil von AV1 derzeit ist, dass es sehr neu ist und die Unterstützung immer noch in den meisten Browsern integriert wird. Zudem werden Encoder und Decoder immer noch hinsichtlich der Leistung optimiert, und Hardware-Encoder und Decoder befinden sich meist noch in der Entwicklung statt in der Produktion. Aus diesem Grund dauert es sehr lange, ein Video in das AV1-Format zu kodieren, da die gesamte Arbeit softwareseitig erfolgt.

Derzeit ist AV1 aufgrund dieser Faktoren noch nicht bereit, Ihre erste Wahl eines Videocodecs zu sein, aber Sie sollten beobachten, wann es einsatzbereit ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Level des Videos; das theoretische Maximum erreicht 800 Mbps bei Level 6.3
        </p>
        <p>
          Siehe die Tabelle der Levels in der AV1-Spezifikation, die maximale Auflösungen und Raten für jedes Level beschreibt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>
        Variiert je nach Level; zum Beispiel hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 120 FPS erreichen kann
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jeden Wert innerhalb dieser Grenzen annehmen darf
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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

Der **Advanced Video Coding** (**AVC**) Standard der MPEG-4-Spezifikationsreihe wird von der identischen ITU H.264-Spezifikation und der MPEG-4 Part 10-Spezifikation spezifiziert. Es ist ein bewegungskompensationsbasierter Codec, der heute weit verbreitet für alle möglichen Medien eingesetzt wird, einschließlich Rundfunkfernsehen, {{Glossary("RTP", "RTP")}} Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist sehr flexibel und bietet eine Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien konzipiert und verwendet weniger Bandbreite als das Main Profile (das in einigen Regionen für Standard Definition Digital TV verwendet wird) oder das High Profile (das für Blu-Ray-Disc-Video verwendet wird). Die meisten der Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling; Das High 10 Profile fügt Unterstützung für 10-Bit-Farbe hinzu, und fortgeschrittene Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC hat auch besondere Funktionen wie die Unterstützung mehrerer Ansichten derselben Szene (Multiview Video Coding), was unter anderem die Erstellung von stereoskopischen Videos ermöglicht.

AVC ist jedoch ein proprietäres Format, und zahlreiche Patente werden von mehreren Parteien bezüglich seiner Technologien gehalten. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die die JavaScript-APIs nicht enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser dazu nicht verpflichtet sind, tun es einige.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen Hardware-Codierung und -Dekodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Variiert je nach Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS sind möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
        >, obwohl es möglich ist, verlustfreie Macroblocks innerhalb des Bildes zu erstellen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8192 x 4320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>Einige der gängigsten oder interessanten Profile:</p>
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
        <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a>
        oder Advanced HDR/SL-HDR; beide sind Teil von ATSC
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
          Die Unterstützung von Firefox für AVC hängt von den integrierten oder
          vorinstallierten Codecs des Betriebssystems für AVC und seinen Container
          ab, um Patentprobleme zu vermeiden.
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263** Codec von ITU wurde in erster Linie für den Einsatz in Situationen mit geringer Bandbreite entwickelt. Insbesondere ist er für Videokonferenzen in PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme) optimiert. Trotz seiner Optimierung für Netzwerke mit geringer Bandbreite ist er relativ CPU-intensiv und möglicherweise auf leistungsschwächeren Computern nicht ausreichend leistungsfähig. Das Datenformat ist dem von MPEG-4 Part 2 ähnlich.

H.263 wurde im Web nie weit verbreitet genutzt. Varianten von H.263 wurden als Basis für andere proprietäre Formate verwendet, wie beispielsweise Flash-Video oder den Sorenson-Codec. Kein großer Browser hat jedoch jemals H.263-Unterstützung standardmäßig enthalten. Bestimmte Media-Plugins haben die Unterstützung für H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Bezug auf die maximale Bitrate pro Bild (Picture), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann kann das Video diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt von diesem Wert, der Bildwiederholrate, der Kompression und der gewählten Auflösung und Blockformat ab.

H.263 wurde durch H.264 ersetzt und wird daher als veraltetes Medienformat betrachtet, das Sie nach Möglichkeit vermeiden sollten. Der einzige wirkliche Grund zur Nutzung von H.263 in neuen Projekten ist, wenn Sie Unterstützung für sehr alte Geräte benötigen, auf denen H.263 die beste Wahl ist.

H.263 ist ein proprietäres Format, wobei [Patente](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) von verschiedenen Organisationen und Unternehmen wie Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und anderen gehalten werden. Für die Nutzung von H.263 sind Sie gesetzlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbeschränkt, aber typischerweise unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        <p>Bis zu 1408 x 1152 Pixel.</p>
        <p>
          Version 1 von H.263 spezifiziert eine Reihe von Bildgrößen, die unterstützt
          werden. Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixel sowie die Anzahl der Zeilen für Luminanz- und
        Chrominanzmuster pro Bild.
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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
        Proprietär; ein oder mehrere Lizenzen sind erforderlich. Beachten Sie,
        dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec wird durch ITUs **H.265** sowie durch MPEG-H Part 2 (die sich noch in Entwicklung befindliche Fortsetzung von MPEG-4) definiert. HEVC wurde entwickelt, um eine effiziente Kodierung und Dekodierung von Videos in Größen zu unterstützen, einschließlich sehr hoher Auflösungen (einschließlich 8K-Video), mit einer Struktur, die es der Software ermöglicht, moderne Prozessoren optimal zu nutzen. Theoretisch kann HEVC komprimierte Datei-Größen erreichen, die halb so groß sind wie die von [AVC](#avc_h.264), jedoch bei vergleichbarer Bildqualität.

Zum Beispiel besteht jede Coding Tree Unit (CTU), die den in früheren Codecs verwendeten Makroblock ähnelt, aus einem Baum von Luma-Werten für jedes Sample sowie einem Baum von Chroma-Werten für jedes Chroma-Sample, das in derselben Coding Tree Unit verwendet wird, sowie allen erforderlichen Syntax-Elementen. Diese Struktur ermöglicht eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-bit pro Komponente Farbe mit 4:2:0 Chroma-Subsampling unterstützt. Auch interessant ist, dass 4:4:4 Video speziell gehandhabt wird. Anstatt die Luma-Samples (die die Pixel des Bildes in Graustufen darstellen) und die Cb und Cr-Samples (die anzeigen, wie die Grautöne zu Farb-Pixeln verändert werden sollen) zu haben, werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann bei der Wiedergabe kombiniert werden, um ein Vollfarbbild zu erzeugen.

HEVC ist ein proprietäres Format und wird von einer Reihe von Patenten abgedeckt. Die Lizenzierung wird [von Via LA verwaltet](https://www.via-la.com/licensing-2/hevc-vvc/); Gebühren werden den Entwicklern anstatt den Inhaltsproduzenten und -verteilern berechnet. Überprüfen Sie unbedingt die neuesten Lizenzbedingungen und -anforderungen, bevor Sie sich entscheiden, HEVC in Ihrer App oder Website zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800.000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS ist möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>128 x 96 bis 8192 x 4320 Pixel; variiert je nach Profil und Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Informationen unten werden für die wichtigsten Profile bereitgestellt. Es
          gibt eine Reihe anderer Profile, die hier nicht enthalten sind.
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
              <td>120</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome unterstützt HEVC für Geräte mit Hardware-Unterstützung auf Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardware-Unterstützung auf Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat auf anderen Plattformen denselben Unterstützungsstatus wie Chrome. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Decoder.
        </p>
        <p>Firefox aktiviert HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 mit entweder Hardware (auf Geräten, die es unterstützen, wo der Bereich derselbe ist wie bei Edge) oder Software (auf Windows, wo der Benutzer für und eine Erweiterung installieren muss)</li>
            <li>macOS ab Firefox 136 mit entweder Hardware oder Software.</li>
            <li>Linux ab Firefox 137 mit entweder Hardware oder Software (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere Chromium-basierte Browser haben denselben Unterstützungsstatus wie Chrome.</p>
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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
        Proprietär; prüfen Sie die Einhaltung der
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/"
          >Lizenzierungsanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des MPEG-4 Part 2 Visual Standards. Während MPEG-4 Teil 2 Video im Allgemeinen von niemandem verwendet wird, weil ihm ein überzeugender Wert im Vergleich zu anderen Codecs fehlt, hat MP4V-ES auf mobilen Geräten einen gewissen Einsatz. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist der Einsatz im Streaming von MPEG-4 Audio und Video über eine {{Glossary("RTP", "RTP")}} Sitzung. MP4V-ES wird jedoch auch zur Übertragung von MPEG-4 Audio und Video über eine mobile Verbindung unter Verwendung von [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) verwendet.

Sie möchten dieses Format höchstwahrscheinlich nicht verwenden, da es von keinem großen Browser in relevanter Weise unterstützt wird und ziemlich obsolet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden aber manchmal fälschlicherweise als `.mp4` gekennzeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>Kein spezifisches Limit; nur durch die Datenrate eingeschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4096 x 4096 Pixel</td>
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
          Firefox unterstützt MP4V-ES nur in
          <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>
          Containern.
        </p>
        <p>Chrome unterstützt MP4V-ES nicht; jedoch tut es ChromeOS.</p>
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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
          >Lizenz erwerben</a
        >
        über <a href="https://www.via-la.com/">Via LA</a> und/oder
        <a href="https://about.att.com/innovation/ip/patents"
          >AT&#x26;T</a
        >
        nach Bedarf
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre vorgestellt. Anders als die späteren MPEG-Video-Standards wurde MPEG-1 ausschließlich durch MPEG erstellt, ohne die Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr in Bezug auf MPEG-1-Video, sodass es ohne Lizenzbedenken verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plug-ins, und da die Verwendung von Plug-ins in Webbrowsern veraltet ist, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für den Einsatz auf Websites und in Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1.5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS und 60
        FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4095 x 4095 Pixel</td>
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert wird und auch gelegentlich mit der {{Glossary("ITU", "ITU")}} Kennzeichnung, H.262, bezeichnet wird. Es ist dem MPEG-1-Video sehr ähnlich – tatsächlich kann jeder MPEG-2-Player MPEG-1 ohne weitere Maßnahmen automatisch handhaben – es wurde jedoch erweitert, um höhere Bitraten und fortgeschrittene Kodierungstechniken zu unterstützen.

Ziel war es, MPEG-2 in die Lage zu versetzen, Fernsehbilder in Standardqualität zu komprimieren, sodass auch interlaced Video unterstützt wird. Die Standard-Definition-Kompressionsrate und die Qualität des resultierenden Videos erfüllten die Bedürfnisse gut genug, dass MPEG-2 der primäre Video-Codec für DVD-Video-Medien ist.

MPEG-2 bietet mehrere Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Level verfügbar, die jeweils die Attribute des Videos erhöhen, wie Bildrate, Auflösung, Bitrate und so weiter. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Außerdem gibt es vier Levels, die jeweils Unterstützung für größere Bilddimensionen und Bitraten bieten. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards) Spezifikation für Fernsehen in Nordamerika MPEG-2-Video in hoher Auflösung unter Nutzung des Main Profile auf High Level, was 4:2:0 Video bei sowohl 1920 x 1080 (30 FPS) als auch 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbps ermöglicht.

Jedoch unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plug-ins, und da die Verwendung von Plug-ins in Webbrowsern veraltet ist, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für den Einsatz auf Websites und in Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 100 Mbps; variiert je nach Level und Profil</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
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
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
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
        Y'CbCr mit 4:2:0 Chroma-Subsampling in den meisten Profilen; die "High" und
        "4:2:2" Profile unterstützen auch 4:2:2 Chroma-Subsampling.
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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
        Proprietär; alle Patente weltweit außer in Malaysia sind abgelaufen (Stand: 1. Oktober 2024), sodass MPEG-2 außerhalb Malaysias frei verwendet werden kann.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat extrem geringe Verbreitung, und Unterstützung wird aus Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und freier Video-Codec, der ohne Lizenzgebühren oder Lizenzen verwendet werden kann. Die Qualität und die Kompressionsraten von Theora sind vergleichbar mit MPEG-4 Part 2 Visual und AVC, wodurch es eine sehr gute, wenn auch nicht Spitzenwahl für die Video-Kodierung ist. Sein Status als lizenzfrei und seine relativ niedrigen CPU-Ressourcenanforderungen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Die geringe CPU-Belastung ist besonders nützlich, da keine Hardware-Dekoder für Theora verfügbar sind.

Theora basierte ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass er nur 8 Bit pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt, sind 8 Bit pro Komponente immer noch das am häufigsten verwendete Farbformat heutzutage, sodass dies in den meisten Fällen nur ein kleiner Nachteil ist. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil ist jedoch, dass er von Safari nicht unterstützt wird, was Theora nicht nur auf macOS, sondern auf all den Millionen von iPhones und iPads unerreichbar macht.

Das [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) bietet zusätzliche Details über Theora sowie das Ogg-Containerformat, in dem es verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>
        Willkürlich; jeder Wert ungleich null wird unterstützt. Die Bildwiederholrate
        wird als 32-Bit-Zähler und 32-Bit-Nenner angegeben, um nicht-ganzzahlige
        Bildwiederholraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
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
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Unterstützung für Variable Frame Rate (VFR) innerhalb eines
          einzelnen Streams bietet, können mehrere Streams innerhalb einer einzigen Datei
          verkettet werden, und jeder von ihnen kann seine eigene Bildwiederholrate haben, wodurch
          im Wesentlichen VFR ermöglicht wird. Dies ist jedoch unpraktisch, wenn die
          Bildwiederholrate häufig geändert werden muss.
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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
      <td>Offen und frei von Lizenzgebühren und allen anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies erstellt. Nach dem Kauf von On2 hat Google VP8 als ein offenes und lizenzgebührenfreies Videoformat unter dem Versprechen veröffentlicht, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Wenn von einem Browser unterstützt, ermöglicht VP8 Video mit einem Alpha-Kanal, sodass das Video mit dem Hintergrund gespielt werden kann, der durch das Video in einem von jedem Pixel-Alpha-Komponenten angegebenen Grad gesehen werden kann.

Es gibt eine gute Browser-Unterstützung für VP8 in HTML-Inhalten, insbesondere innerhalb von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) Dateien. Dies macht VP8 zu einem guten Kandidaten für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl ist, wenn es Ihnen zur Verfügung steht. Webbrowser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, aber nicht alle Browser, die dies tun, unterstützen es auch in HTML Audio- und Video-Elementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, auf Level basierende Einschränkungen werden durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 16.384 x 16.384 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>Y'CbCr mit 4:2:0 Chroma-Subsampling bei 8 Bit pro Komponente</td>
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
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und später unterstützen VP8 nur in WebRTC-Verbindungen.</p>
        <p>Firefox unterstützt VP8 in MSE nur, wenn kein H.264-Hardware-Decoder verfügbar ist. Verwenden Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu prüfen.</p>
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
      <td>Ja; VP8 ist einer der speziell benötigten Codecs für WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und frei von Lizenzgebühren und allen anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, entwickelt von Google. Wie VP8 ist VP9 vollständig offen und lizenzgebührenfrei. Seine Kodierungs- und Dekodierungsleistung ist vergleichbar oder etwas schneller als die von AVC, jedoch mit besserer Qualität. Die kodierte Videoqualität von VP9 ist vergleichbar mit der von HEVC bei ähnlichen Bitraten.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0 Chroma-Subsampling-Niveaus, aber seine Profile umfassen Unterstützung für tiefere Farbe und das gesamte Spektrum der Chroma-Subsampling-Modi. Es unterstützt mehrere HDR-Implementierungen und bietet erheblichen Spielraum bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von vielen Browsern unterstützt, und Hardware-Implementierungen des Codecs sind ziemlich verbreitet. VP9 ist einer der beiden Video-Codecs, die von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) vorgeschrieben werden (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass Safari-Unterstützung für WebM und VP9 erst in Version 14.1 eingeführt wurde. Wenn Sie sich also entscheiden, VP9 zu verwenden, ziehen Sie in Betracht, ein Fallback-Format wie AVC oder HEVC für iPhone-, iPad- und Mac-Benutzer anzubieten.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und eine alternative Videolösung bereitstellen können, wenn nötig). Dies ist besonders wahr, wenn Sie einen offenen Codec anstelle eines proprietären verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Arbiträr; kein Maximum, es sei denn, auf Level basierende Einschränkungen werden durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildwiederholraten</th>
      <td>Arbiträr</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus auf DCT-Basis</a
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
      <th scope="row">Unterstützung für variable Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p>
          Firefox unterstützt VP8 in MSE nur, wenn kein H.264-Hardware-Decoder verfügbar ist. Verwenden Sie
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
      <th scope="row">Unterstützende/Erhaltende Organisation</th>
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
      <td>Offen und frei von Lizenzgebühren und allen anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Videocodecs

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden oder kommen auch proprietäre Formate in Frage?
- Haben Sie die Ressourcen, mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine Fallback-Option anzubieten, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, für die Sie auf die Kompatibilität verzichten können?
- Wie alt ist die älteste Webbrowser-Version, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem Browser arbeiten, der in den letzten fünf Jahren veröffentlicht wurde, oder nur im letzten Jahr?

In den nachstehenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Falls der Codec, der für den Anwendungsfall als am besten geeignet gilt, proprietär ist oder Lizenzzahlungen erfordern könnte, werden zwei Optionen bereitgestellt: zuerst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format wählen, das Ihren Anforderungen am besten entspricht. Das erste wird als gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die breiteste Kompatibilität bieten, auf Kosten eines gewissen Maßes an Qualität, Leistung und/oder Größe.

### Empfehlungen für Alltagsvideos

Zuerst betrachten wir die besten Optionen für Videos, die auf einer typischen Website wie einem Blog, einer Informationsseite oder einer kleinen Unternehmenswebsite präsentiert werden, wo Videos zur Demonstration von Produkten verwendet werden (aber nicht, wenn die Videos selbst ein Produkt sind) und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container, der den **[VP9](#vp9)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Diese sind alle offen und lizenzfrei und im Allgemeinen gut unterstützt, jedoch nur in recht aktuellen Browsern, weshalb ein Fallback eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audiocodec. Der MP4-Container mit AVC- und AAC-Codecs ist eine weit verbreitete Kombination – in der Tat von jedem großen Browser unterstützt – und die Qualität ist für die meisten Anwendungsfälle typischerweise gut. Stellen Sie jedoch sicher, dass Sie Ihre Konformität mit den Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert einen abschließenden `</video>`-Tag, unabhängig davon, ob Sie {{HTMLElement("source")}}-Elemente darin haben oder nicht.

### Empfehlungen für die Präsentation von Videos in hoher Qualität

Wenn Ihre Aufgabe darin besteht, Videos in höchster Qualität zu präsentieren, werden Sie wahrscheinlich von der Bereitstellung möglichst vieler Formate profitieren, da die Codecs mit der besten Qualität tendenziell auch die neuesten sind und somit am wahrscheinlichsten Lücken in der Browser-Kompatibilität aufweisen.

1. Ein WebM-Container, der AV1 für Video und Opus für Audio verwendet. Wenn Sie in der Lage sind, beim Kodieren von AV1 das High- oder Professional-Profil zu verwenden, auf hohem Niveau wie 6.3, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erzielen, bei exzellenter Videoqualität. Das Kodieren Ihres Audios mit dem Fullband-Profil von Opus bei einer Samplerate von 48 kHz maximiert die erfasste Audiobandbreite und erfasst nahezu den gesamten Frequenzbereich, der innerhalb des menschlichen Hörens liegt.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container, der den [HEVC](#hevc_h.265)-Codec mit einem der fortgeschrittenen Main-Profile verwendet, wie Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4-Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies exzellente Grafikqualität mit bemerkenswerter Farbwiedergabe. Zusätzlich können Sie optional HDR-Metadaten einfügen, um Video in hohem Dynamikbereich bereitzustellen. Für Audio verwenden Sie den AAC-Codec mit einer hohen Samplerate (mindestens 48 kHz, idealerweise aber 96 kHz) und kodiert mit komplexem Kodierungsverfahren statt schneller Kodierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remix

Derzeit sind keine verlustfreien oder sogar fast verlustfreien Videocodecs in Webbrowsern allgemein verfügbar. Der Grund dafür ist einfach: Video ist enorm. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Zum Beispiel benötigt unkomprimiertes 1080p-Video (1920 x 1080 Pixel) mit 4:2:0-Chroma-Subsampling mindestens 1,5 Gbps. Die Verwendung verlustfreier Kompression wie FFV1 (die von Webbrowsern nicht unterstützt wird) könnte dies möglicherweise auf etwa 600 Mbps reduzieren, abhängig vom Inhalt. Das ist immer noch eine enorme Menge an Bits, die jede Sekunde durch eine Verbindung fließen müssen, und ist derzeit für keinen praktischen Einsatz in der realen Welt machbar.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus haben; die verlustfreien Modi sind in aktuellen Webbrowsern nicht implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec auszuwählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass so wenig Kompression wie möglich durchgeführt wird. Eine Möglichkeit, dies zu erreichen, besteht darin, den Codec auf "schnelle" Kompression zu konfigurieren, was von Natur aus bedeutet, dass weniger Kompression erreicht wird.

#### Video extern vorbereiten

Um Video zu Archivierungszwecken außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Kompression der ursprünglichen unkomprimierten Videodaten durchführt. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit sehr hoher Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 infile
```

Obwohl andere Codecs potenziell bessere Bestfallqualität bieten, wenn das Video irgendwo signifikant komprimiert wird, neigen ihre Encoder dazu, so langsam zu sein, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Kompression erhalten, viel schneller bei etwa gleichem Qualitätsniveau ist.

#### Video aufzeichnen

Angesichts der Einschränkungen, wie nahe an verlustfrei Sie kommen können, könnten Sie in Betracht ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Beispielsweise, wenn Sie die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

In diesem Beispiel wird ein `MediaRecorder` erstellt, der konfiguriert ist, [AV1](#av1)-Video unter Verwendung von BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chroma-Subsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzunehmen. Die resultierende Datei wird eine Bitrate von nicht mehr als 800 Mbps verwenden, die zwischen den Video- und Audiotracks geteilt wird. Sie müssen diese Werte wahrscheinlich an die Hardwareleistung, Ihre Anforderungen und die spezifischen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für den Netzwerkversand und würde wahrscheinlich nur lokal verwendet werden.

Die Aufschlüsselung des Werts des `codecs`-Parameters in seine durch Punkte unterteilten Eigenschaften sieht wie folgt aus:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                       |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Der vierstellige Code (4CC), der den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                                              |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                        |
| `19H`  | Die Ebene und die Stufe. Dieser Wert stammt aus der Tabelle im Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt das High Tier von Level 6.3 an.                                                                                                     |
| `12`   | Die Farbtiefe. Diese gibt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die genaueste Farbvertretung, die in AV1 verfügbar ist.                                                                                                                                       |
| `0`    | Der Monochrommodus-Flag. Wenn 1, würden keine Chromapläne aufgezeichnet, und alle Daten sollten streng genommen Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 spezifiziert, da wir Farbe möchten.                                                                                |
| `000`  | Der Chroma-Subsampling-Modus, übernommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrommodus-Wert 0, zeigt an, dass wir 4:4:4-Chroma-Subsampling wollen, oder keinen Farbverlust. |
| `09`   | Die Farbprimärwerte, die verwendet werden sollen. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR genutzt wird.                              |
| `16`   | Die Transfercharakteristika, die verwendet werden sollen. Dies stammt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 gibt an, dass wir die Charakteristika für BT.2100 PQ-Farbe verwenden möchten.                                           |
| `09`   | Die Matrixkoeffizienten, die verwendet werden sollen, wiederum aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 spezifiziert, dass wir BT.2020 mit variabler Luminanz verwenden möchten; das ist auch bekannt als BT.2010 YbCbCr.            |
| `1`    | Der Video-"full range"-Flag. Ein Wert von 1 zeigt an, dass wir den vollen Farbbereich verwenden möchten.                                                                                                                                                                                           |

Die Dokumentation für Ihre Codecauswahl bietet wahrscheinlich Informationen, die Sie verwenden werden, wenn Sie Ihren `codecs`-Parameter konstruieren.

## Siehe auch

- [Anleitung zu Web-Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die "Codecs"- und "Profiles"-Parameter für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Type-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Type-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Type-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

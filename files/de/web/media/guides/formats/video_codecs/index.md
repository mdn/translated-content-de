---
title: Leitfaden für Web-Videocodecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 64d995ef99a84226348832ed398e9edc7809e53e
---

Dieser Leitfaden stellt die Videocodecs vor, denen Sie im Web am häufigsten begegnen oder die Sie in Erwägung ziehen, ihre Fähigkeiten und eventuelle Kompatibilitäts- und Nutzungsprobleme zusammenfasst und Ratschläge gibt, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es notwendig, sie erheblich zu komprimieren, um sie speichern zu können, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die benötigt wird, um unkomprimiertes Video zu speichern:

- Ein einzelnes Bild eines High-Definition-Videos (1920x1080) in voller Farbe (4 Bytes pro Pixel) beträgt 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) beanspruchen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicher benötigen und ein 2-stündiger Film würde _fast 1,79 **TB** (d.h. 1790 GB)_ benötigen.

Nicht nur der benötigte Speicherplatz ist enorm, auch die Netzwerkbandbreite, die erforderlich ist, um ein solches unkomprimiertes Video zu übertragen, wäre enorm, nämlich 249 MB/s - ohne Audio und Overhead. Hier kommen Videocodecs ins Spiel. Genau wie Audiocodecs die Daten komprimieren, komprimieren Videocodecs die Videodaten und kodieren sie in ein Format, das später dekodiert und wiedergegeben oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**, d.h. das dekodierte Video stimmt nicht genau mit der Quelle überein. Einige Details können verloren gehen; die Menge des Verlusts hängt vom Codec und seiner Konfiguration ab. Allgemein gilt: Je mehr Kompression Sie erreichen, desto mehr Verlust an Details und Genauigkeit wird auftreten. Es gibt auch einige verlustfreie Codecs, die jedoch typischerweise für Archivierungs- und Speicherzwecke für die lokale Wiedergabe und nicht für die Verwendung über ein Netzwerk verwendet werden.

## Gängige Codecs

Die folgenden Videocodecs sind die am häufigsten im Web verwendeten. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, der zusätzliche Details zum Codec enthält, einschließlich spezieller Fähigkeiten und Kompatibilitätsprobleme, die Sie beachten sollten.

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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: spezifische Informationen über das Format und den Inhalt des Quellvideos und die Merkmale und Konfiguration des beim Kodieren verwendeten Codecs.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das Original-Video aussehen lässt, führt in der Regel auch zu größeren Datenmengen. Daher ist es immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist ein größerer Qualitätsverzicht gerechtfertigt, um die Datengröße zu reduzieren; in anderen Fällen ist der Qualitätsverlust nicht akzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Auswirkungen des Quellvideoformats auf das kodierte Ergebnis

Das Ausmaß, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat konvertiert oder das Bild auf andere Weise als durch einfache Pixel darstellt, spielt das Format des Originalbildes keine Rolle. Allerdings werden Dinge wie Bildrate und offensichtlich die Auflösung immer Auswirkungen auf die Ausgabemenge der Medien haben.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Manche haben Probleme mit bestimmten Arten von Formen und Mustern, oder sind nicht gut darin, scharfe Kanten zu reproduzieren, oder neigen dazu, in dunklen Bereichen Details zu verlieren, oder es gibt eine Vielzahl anderer Möglichkeiten. Alles hängt von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss des Quellvideoformats und -inhalts auf die
    Qualität und Größe des kodierten Videos
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
        Je höher die Farbbittiefe, desto höher die Qualität der Farbwiedergabe
        im Video. Bei gesättigten Bildbereichen (d.h. wo Farben rein und intensiv sind, z.B. ein helles, reines Rot: <code>rgb(255 0 0 / 100%)</code>), lässt eine Farbtiefe unter 10 Bits pro Komponente (10-Bit-Farbe) das Aussehen von Farbabstufungen entstehen, bei dem Farbverläufe nicht ohne sichtbare Abstufungen der Farben wiedergegeben werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren
        komprimierten Dateigrößen führen. Der bestimmende Faktor ist, welches interne Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Glätte der Bewegung im Bild.
        Bis zu einem gewissen Punkt wird die Bewegungswiedergabe glatter und realistischer, je höher die Bildrate ist. Schließlich ist der Punkt erreicht, an dem keine weiteren Verbesserungen erzielt werden können. Siehe <a href="#reduced_frame_rate">Bildrate</a> weiter unten für Einzelheiten.
      </td>
      <td>
        Wenn die Bildrate während der Kodierung nicht reduziert wird, führen höhere Bildraten zu größeren komprimierten Videodateien.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Videokomprimierung funktioniert typischerweise, indem Frames verglichen werden, um Unterschiede zu finden, und dann Datenstrukturen erstellt werden, die genug Informationen enthalten, um den vorherigen Frame so zu aktualisieren, dass er dem folgenden Frame möglichst ähnlich sieht. Je mehr sich aufeinanderfolgende Frames voneinander unterscheiden, desto größer sind diese Unterschiede und desto weniger effektiv ist die Komprimierung dabei, das Hinzufügen von Artefakten zu vermeiden.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren Zwischenframes aufgrund der höheren Anzahl von Unterschieden zwischen den Frames. Aus diesem und anderen Gründen wird das Ausgabevideo umso größer, je mehr Bewegung vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmkorn-Effekte, Staub oder andere Unebenheiten im Bild) führt zu Variabilität. Variabilität macht die Komprimierung im Allgemeinen schwieriger und führt zu mehr Qualitätsverlust, da Details entfernt werden müssen, um dasselbe Maß an Komprimierung zu erreichen.
      </td>
      <td>
        Je mehr Variabilität – wie Rauschen – im Bild vorhanden ist, desto komplexer ist der Komprimierungsprozess und desto weniger Erfolg hat der Algorithmus wahrscheinlich, das Bild im gleichen Maße zu komprimieren. Es sei denn, Sie konfigurieren den Encoder so, dass einige oder alle der durch Rauschen verursachten Variationen ignoriert werden, wird das komprimierte Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöste Videos, die in derselben Bildschirmgröße präsentiert werden, können in der Regel das ursprüngliche Szenario genauer darstellen, abgesehen von Effekten, die während der Komprimierung eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies spielt eine entscheidende Rolle für die endgültige Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und seiner Konfiguration. Zusätzlich zu den allgemeinen Codec-Optionen könnte der Encoder so konfiguriert werden, dass er die Bildrate reduziert, das Rauschen bereinigt und/oder die Gesamtauflösung des Videos während der Kodierung reduziert.

### Auswirkungen der Codec-Konfiguration auf das kodierte Ergebnis

Die Algorithmen, die zur Kodierung von Videos verwendet werden, nutzen in der Regel eine oder mehrere allgemeine Techniken, um die Kodierung durchzuführen. Im Allgemeinen wird jede Konfigurationsoption, die darauf abzielt, die Ausgabemenge des Videos zu verringern, wahrscheinlich negative Auswirkungen auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Kodierung auszuwählen, was zu einer viel größeren kodierten Datei führt, jedoch eine perfekte Reproduktion des Originalvideos beim Dekodieren ermöglicht.

Darüber hinaus kann es je nach verwendetem Encoder-Programm Variationen in der Verarbeitung des Quellvideos geben, die zu Unterschieden in der Ausgabequalität und/oder -größe führen.

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
      <th scope="row">Verlustfreie Kompression</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Kompression kann die Gesamtvideogröße nicht annähernd so
        stark verringern wie verlustbehaftete Kompression; die resultierenden Dateien sind
        wahrscheinlich immer noch zu groß für den allgemeinen Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        Artefakte und andere Formen von Qualitätsverlust treten je nach spezifischem Codec und dem Grad der angewandten Kompression in gewisser Weise auf.
      </td>
      <td>
        Je stärker sich das kodierte Video von der Quelle unterscheiden darf, desto einfacher ist es, höhere Kompressionsraten zu erreichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätseinstellung, desto mehr wird das kodierte Video dem Originalmedium ähneln.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten Videodateien; das Ausmaß, in dem dies zutrifft, variiert je nach Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich im Allgemeinen mit höheren Bitraten.</td>
      <td>Höhere Bitraten führen inhärent zu größeren Ausgabedateien.</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Kodieren von Video zur Verfügung stehen, und die Werte, die diesen Optionen zugewiesen werden sollen, variieren nicht nur von einem Codec zum anderen, sondern auch abhängig von der verwendeten Kodierungssoftware. Die Dokumentation, die Ihrer Kodierungssoftware beiligt, hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder umgeordneten Daten zu sichtbar negativen Effekten führen. Wenn ein Artefakt erst einmal aufgetreten ist, kann es eine Weile bestehen bleiben, weil das Video auf eine Weise angezeigt wird. Jedes Videobild wird präsentiert, indem eine Reihe von Änderungen am aktuell sichtbaren Bild angewendet werden. Das bedeutet, dass Fehler oder Artefakte sich mit der Zeit anhäufen und zu Störungen oder sonstigen seltsamen oder unerwarteten Abweichungen im Bild führen können, die eine gewisse Zeit anhalten.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodische **Schlüsselbilder** (auch bekannt als **Intra-Frames** oder **I-Frames**) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Frames, die verwendet werden, um sichtbare Schäden oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was bei der Wiederherstellung aus den kodierten Daten nicht genauso aussieht wie vor der Kompression. Es gibt viele Formen von Aliasing; die häufigsten, die Sie sehen können, beinhalten:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht, wenn ein Muster im Quellbild und die Art und Weise, wie der Encoder arbeitet, räumlich leicht verschoben sind. Die vom Encoder erzeugten Artefakte führen beim Dekodieren zu seltsamen, wirbelnden Effekten im Muster des Quellbildes.
        </p>
      </td>
      <td>
        <img alt="Eine Backsteinwand zeigt einen wirbelnden Effekt ähnlich Wellen aufgrund des Moiré-Musters." src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt sein
          sollten, ein gezacktes Aussehen annehmen, das einem Treppenabsatz
          ähnelt. Dies ist der Effekt, der durch "Anti-Aliasing"-Filter reduziert
          wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die aufgrund von Aliasing wie eine Treppe aussehen und den Treppeneffekt verursachen." src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradd-Effekt</h4>
        <p>
          Der <strong>Wagenrad-Effekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboskopischer Effekt</a></strong
          >) ist der optische Effekt, der häufig im Film zu sehen ist, bei dem ein rotierendes Rad mit der falschen Geschwindigkeit oder sogar rückwärts erscheint, aufgrund einer Wechselwirkung zwischen der Bildrate und dem Komprimierungsalgorithmus. Der gleiche Effekt kann bei jedem sich wiederholenden Muster auftreten, das sich bewegt, wie z.B. die Schwellen einer Eisenbahnlinie, Pfosten entlang einer Straße usw. Dies ist ein zeitliches (zeitbasiertes) Aliasing-Problem; die Geschwindigkeit der Drehung beeinträchtigt die Frequenz der während der Komprimierung oder Kodierung durchgeführten Abtastung.
        </p>
      </td>
      <td>
        <img alt="Drehrades, das aufgrund von Aliasing den Wagenrad-Effekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbkantenbildung

**Farbkantenbildung** ist eine Art von optischem Artefakt, das als spurlose Farben entlang der Kanten von farbigen Objekten innerhalb der Szene angezeigt wird. Diese Farben haben keine absichtlich farbliche Beziehung zum Inhalt des Bildausschnitts.

### Schärfeverlust

Der Prozess der Datenentfernung während der Kodierung von Videos erfordert, dass einige Details verloren gehen. Wenn genug Kompression angewendet wird, könnten Teile oder möglicherweise das gesamte Bild an Schärfe verlieren und eine leicht verschwommene oder verschwommene Erscheinung erzeugen.

Schärfeverlust kann es schwierig machen, Text im Bild zu lesen, da Text - insbesondere kleiner Text - sehr detailorientierter Inhalt ist, bei dem kleine Änderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingelartefakte

Verlustbehaftete Komprimierungsalgorithmen können **[Klingelartefakte](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, ein Effekt, bei dem Bereiche außerhalb eines Objekts mit von dem Komprimierungsalgorithmus generierten farbigen Pixeln kontaminiert sind. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die über eine scharfe Grenze zwischen einem Objekt und dessen Hintergrund hinüberreichen. Dies ist besonders häufig bei höheren Kompressionsstufen.

![Beispiel für ein Klingelartefakt](ringing-effects.png)

Beachten Sie die blauen und rosa Fransen um die Kanten des Sterns oben (sowie das Abstufen und andere signifikante Kompressionsartefakte). Diese Fransen sind der Klingelartefakt. Klingelartefakte ähneln in gewisser Hinsicht dem [Mückenrauschen](#mückenrauschen), außer dass die Klingelartefakte mehr oder weniger konstant bleiben, während das Mückenrauschen flimmert und sich bewegt.

Klingelartefakte sind eine weitere Art von Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Kompression zu einem Verlust an Farbdetails in Farbverläufen führt. Anstatt glatte Übergänge durch die verschiedenen Farben in einem Bereich zu haben, wird das Bild blockig, mit Farbblobs, die das ursprüngliche Aussehen des Bildes approximieren.

![Weißkopfseeadlerfoto mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers im obigen Foto (und den Schneeeulen im Hintergrund). Die Details der Federn gehen größtenteils aufgrund dieser Posterisationsartefakte verloren.

### Konturierung

**Konturierung** oder **Farbbanding** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies geschieht, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Als Ergebnis zeigen die Inhalte des Videos ein "geschichtetes" Aussehen, bei dem anstelle von glatten Übergängen und Farbverläufen die Übergänge von Farbe zu Farbe abrupt sind und somit Farbstreifen entstehen.

![Beispiel für ein Bild, dessen Kompression Konturierung eingeführt hat](contouring-effect.jpg)

In dem Beispielbild oben beachten Sie, wie der Himmel Bänder von verschiedenen Blautönen aufweist, anstatt ein konsistentes Farbspektrum zu haben, wenn sich die Himmelsfarbe zum Horizont hin verändert. Dies ist der Konturieffekt.

### Mückenrauschen

**Mückenrauschen** ist ein zeitliches Artefakt, das sich als Rauschen oder **Randunruhe** darstellt, die als flimmernder Nebel oder Schimmer erscheint, der etwa entlang der Außenseiten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund verläuft. Der Effekt kann dem [Klingelartefakt](#klingelartefakte) ähnlich sein.

![Beispiel für ein Bild, dessen Kompression Mückenrauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Mückenrauschen an mehreren Stellen, einschließlich im Himmel um die Brücke herum. Die rechte obere Ecke zeigt eine Nahaufnahme eines Teils des Bildes, das Mückenrauschen aufweist.

Mückenrauschartefakte sind am häufigsten in MPEG-Videos zu finden, können jedoch immer auftreten, wenn ein diskreter Kosinustransformationsalgorithmus (DCT) verwendet wird; dies schließt zum Beispiel JPEG-Bilder ein.

### Bewegungs-Kompensations-Block-Rand-Artefakte

Die Videokompression funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera an Ort und Stelle fixiert ist oder sich die Objekte im Frame relativ wenig bewegen, aber wenn im Frame viel Bewegung ist, können die Unterschiede zwischen den Frames so groß werden, dass die Kompression keinen Nutzen bringt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegung sucht (entweder der Kamera oder der Objekte im Blickfeld) und bestimmt, wie viele Pixel sich die sich bewegenden Objekte in jede Richtung bewegt haben. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die verschoben wurden, aber nicht mit dieser Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die sich bewegenden Objekte und erstellt dann eine interne Art Rahmen, der wie das Original aussieht, aber mit allen Objekten an ihren neuen Positionen. Theoretisch approximiert dies das neue Erscheinungsbild des Frames. Um den Job zu beenden, werden dann die verbleibenden Unterschiede gefunden, und die Reihe der Objektschiebungsmuster und die Reihe von Pixelunterschieden werden in den Daten gespeichert, die den neuen Frame darstellen. Dieses Objekt, das die Schiebung und die Pixelunterschiede beschreibt, nennt sich **Residual-Frame**.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originale Frame</th>
      <th scope="col" style="width: 216px">Inter-Frame Unterschiede</th>
      <th scope="col" style="width: 216px">
        Unterschiede nach Bewegungskompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originaler Frame eines Videos" src="motion-comp-orig.jpg" /></td>
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
        Der erste vollständige Frame, den der Zuschauer sieht.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten und dem folgenden
        Frame zu sehen. Alles andere ist schwarz. Bei genauem Hinsehen erkennen wir, dass die Mehrheit dieser Unterschiede von einer horizontalen Kamerabewegung stammt, was dies zu einem guten Kandidaten für Bewegungsentschädigung macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen wir hier die Horizontalbewegung der Kamera, indem wir zunächst den ersten Frame um zwei Pixel nach rechts verschieben und dann den Unterschied betrachten. Dies kompensiert die Schwenkbewegung der Kamera, was zu mehr Überlappung zwischen den beiden Frames führt.
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Globale Bewegungskompensation passt im Allgemeinen an Kamera-Bewegungen wie Verfolgung, Dolly-Bewegungen, Schwenken, Kippen, Rollen und Aufwärts- und Abwärtsbewegungen an. Blockbewegungskompensation hingegen behandelt lokal begrenzte Veränderungen und sucht nach kleineren Abschnitten des Bildes, die unter Verwendung der Bewegungskompensation kodiert werden können. Diese Blöcke sind normalerweise gleich groß und in einem Raster angeordnet, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen und sogar sich überlappende Blöcke zulassen.

Es gibt jedoch Artefakte, die aufgrund der Bewegungskompensation auftreten können. Diese treten entlang der Blockgrenzen auf, in Form von scharfen Rändern, die falsches Klingeln und andere Kanten-Effekte erzeugen. Diese sind auf die Mathematik zurückzuführen, die bei der Kodierung der Residualframes verwendet wird, und können leicht bemerkt werden, bevor sie durch den nächsten Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Videodimensionen zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Während der anfängliche Verlust an Größe oder Glätte der Wiedergabe ein negativer Faktor sein kann, kann eine sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein und eine viel höhere visuelle Qualität aufweisen; selbst nach dem Hochskalieren bei der Wiedergabe kann das Ergebnis besser sein, als das Originalvideo in voller Größe zu kodieren und den Qualitätsverlust zu akzeptieren, der erforderlich ist, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ebenso können Sie Frames vollständig aus dem Video entfernen und die Bildrate zur Kompensation verringern. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungskompensation, noch mehr für Sie zu tun. Zum Beispiel könnte das Überspringen jedes zweiten Frames anstelle des Berechnens von Bewegungsunterschieden für zwei Frames, die aufgrund von Zwischenframe-Bewegungen um zwei Pixel verschoben sind, zu einer Differenzberechnung führen, die sich als Bewegungsverschiebung von vier Pixeln herausstellt. Dies ermöglicht es, die gesamte Bewegung der Kamera mit weniger Residualframes zu repräsentieren.

Die absolute minimale Bildrate, die ein Video haben kann, bevor seine Inhalte von den menschlichen Augen nicht mehr als Bewegung wahrgenommen werden, beträgt etwa 12 Bilder pro Sekunde. Weniger als das, und das Video wird zu einer Reihe von Standbildern. Spielfilme haben typischerweise 24 Bilder pro Sekunde, während das Standard-Fernsehen etwa 30 Bilder pro Sekunde (etwas weniger, aber nahe genug) und hochauflösendes Fernsehen zwischen 24 und 60 Bilder pro Sekunde hat. Jede Rate von 24 FPS aufwärts wird im Allgemeinen als ausreichend glatt angesehen; 30 oder 60 FPS sind ein ideales Ziel, abhängig von Ihren Bedürfnissen.

Letztendlich liegen die Entscheidungen darüber, welche Opfer Sie bereit sind zu bringen, ganz bei Ihnen und/oder Ihrem Designteam.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Er erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265), sowie bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzfrei und sowohl für die Verwendung mit dem {{HTMLElement("video")}}-Element als auch mit [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, die zunehmende Unterstützung für Farbtiefen und Chroma-Subsampling bieten. Darüber hinaus ist eine Reihe von **Levels** spezifiziert, die jeweils Grenzen für eine Reihe von Videoattributen definieren. Dazu gehören Bildabmessungen, Bildbereich in Pixel, Anzeige- und Dekodierraten, durchschnittliche und maximale Bitraten sowie Beschränkungen für die Anzahl von Kacheln und Kachelspalten, die im Kodierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet das AV1-Level 2.0 eine maximale Breite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber seine maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie bei Level 2.0 tatsächlich kein 2048x1152-Video haben können. Es ist jedoch anzumerken, dass zumindest in Firefox und Chrome die Levels beim Software-Dekodieren derzeit ignoriert werden und der Decoder einfach versucht, das Video so gut wie möglich abzuspielen, basierend auf den bereitgestellten Einstellungen. Um die Kompatibilität auch in der Zukunft zu gewährleisten, sollten Sie jedoch innerhalb der Grenzen des gewählten Levels bleiben.

AV1 wird in allen Browsern unterstützt, aber die Unterstützung in Safari ist auf Geräte mit Hardware-Decoder beschränkt, was M3 MacBooks und späteren, iPhone 15 Pro und iPhone 16 und später bedeutet. Viele mobile und Desktop-Geräte verfügen über Hard-Decoder, was AV1 zu einer großartigen Wahl für die Bereitstellung von Videos im Internet macht, mit einem Fallback für frühere Apple-Geräte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Video-Level; das theoretische Maximum erreicht 800 Mbps bei Level 6.3
        </p>
        <p>
          Siehe die AV1-Spezifikationen
          <a href="https://aomediacodec.github.io/av1-spec/#levels">Tabellen der Levels</a>, die die maximalen Auflösungen und Raten bei jedem Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>
        Variiert je nach Level; zum Beispiel hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 120 FPS erreichen kann
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jede beliebige Wert zwischen diesen annehmen darf
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
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
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

Der **Advanced Video Coding** (**AVC**)-Standard der MPEG-4-Spezifikationsreihe wird durch die identische ITU H.264-Spezifikation und die MPEG-4 Teil 10-Spezifikation spezifiziert. Es ist ein bewegungskompensationsbasierter Codec, der heute weit verbreitet für alle Arten von Medien verwendet wird, einschließlich des Fernsehrundfunks, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist hochflexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien konzipiert und verwendet weniger Bandbreite als das Main Profile (das in einigen Regionen für Standard Definition Digital TV verwendet wird) oder das High Profile (wird für Blu-Ray-Disc-Videos verwendet). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chroma-Subsampling. Das High 10 Profile fügt Unterstützung für 10-Bit-Farbe hinzu, und erweiterte Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC hat auch spezielle Funktionen wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), die unter anderem die Produktion von stereoskopischen Videos ermöglicht.

AVC ist jedoch ein proprietäres Format, und es sind zahlreiche Patente im Besitz mehrerer Parteien bezüglich seiner Technologien. Der kommerzielle Einsatz von AVC-Medien erfordert eine Lizenz, obwohl der Via LA-Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die die JavaScript-APIs nicht enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht verpflichtet sind, dies zu tun, unterstützen es einige doch.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen Hardwarekodierung und -dekodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://www.via-la.com/licensing-programs/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Variiert je nach Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS sind möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>, obwohl es möglich ist, verlustfreie Makroblöcke im Bild zu erstellen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8.192 x 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>Einige der gebräuchlicheren oder interessanteren Profile sind:</p>
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
        Advanced HDR/SL-HDR; beide sind Teil von ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von Firefox für AVC hängt von den integrierten oder vorinstallierten Codecs des Betriebssystems für AVC und seinen Container ab, um Patentprobleme zu vermeiden.
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding.html">https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding.html</a><br /><a href="https://www.itu.int/rec/T-REC-H.264">https://www.itu.int/rec/T-REC-H.264</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär mit zahlreichen Patenten. Die kommerzielle Nutzung
        <a href="https://www.via-la.com/licensing-programs/avc-h-264/">erfordert eine Lizenz</a>. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263**-Codec der ITU wurde hauptsächlich für den Einsatz in niedrigen Bandbreitensituationen entwickelt. Insbesondere liegt der Fokus auf Videokonferenzen über PSTN (öffentliches Telefonnetz), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenz) Systeme. Trotz seiner Optimierung für Netzwerke mit niedriger Bandbreite ist er relativ CPU-intensiv und könnte auf Computern mit niedrigerer Leistung nicht zufriedenstellend arbeiten. Das Datenformat ist dem von MPEG-4 Teil 2 ähnlich.

H.263 wurde nie weit im Web eingesetzt. Varianten von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie z.B. Flash-Video oder der Sorenson-Codec. Allerdings hat keiner der großen Browser jemals standardmäßig H.263-Unterstützung eingebaut. Bestimmte Media-Plugins haben die Unterstützung von H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Bezug auf die maximale Bitrate pro Bild (Picture), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann darf das Video diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt davon ab, der Framerate, der Kompression und der gewählten Auflösung und Blockformat.

H.263 wurde von H.264 abgelöst und gilt daher als Medienformat der Vergangenheit, das Sie nach Möglichkeit vermeiden sollten. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, ist, wenn Sie Unterstützung auf sehr alten Geräten erfordern, auf denen H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und viele mehr. Um H.263 zu verwenden, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbeschränkt, aber typischerweise unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        <p>Bis zu 1408 x 1152 Pixel.</p>
        <p>
          Version 1 von H.263 spezifiziert eine Reihe von unterstützten Bildgrößen. Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixel sowie wie viele Zeilen von Luminanz- und Chrominanzproben für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
      <td>Nein</td>
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
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
        Proprietär; entsprechende Lizenz oder Lizenzen sind erforderlich. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **High Efficiency Video Coding** (**HEVC**) Codec wird sowohl von ITUs **H.265** als auch von MPEG-H Teil 2 (dem sich noch in Entwicklung befindlichen Nachfolger von MPEG-4) definiert. HEVC wurde entwickelt, um eine effiziente Kodierung und Dekodierung von Videos in Größen einschließlich sehr hoher Auflösungen (einschließlich 8K-Videos) zu unterstützen, mit einer Struktur, die speziell darauf ausgelegt ist, dass Software die modernen Prozessoren nutzen kann. Theoretisch kann HEVC komprimierte Dateigrößen halb so groß wie [AVC](#avc_h.264) bei vergleichbarer Bildqualität erreichen.

Zum Beispiel besteht jede Coding Tree Unit (CTU)—ähnlich einem in vorherigen Codecs verwendeten Makroblock—aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede in derselben Coding Tree Unit verwendete Chroma-Probe sowie allen erforderlichen Syntaxelementen. Diese Struktur unterstützt eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Main Profil nur 8-Bit pro Farbkomponente mit 4:2:0 Chrominanzsubsampling unterstützt. Auch interessant ist, dass 4:4:4 Video speziell behandelt wird. Statt die Luma-Proben (die die Pixel des Bildes in Graustufen darstellen) und die Cb und Cr-Proben (die angeben, wie die Grautöne zu färben sind, um Farb-Pixel zu erzeugen), werden die drei Kanäle vielmehr als drei monochrome Bilder behandelt, eins für jede Farbe, die dann beim Rendering kombiniert werden, um ein Vollfarbenbild zu erzeugen.

HEVC ist ein proprietäres Format und ist durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA verwaltet](https://www.via-la.com/licensing-programs/hevc-vvc/); Gebühren werden Entwicklern statt Content-Produzenten und -Distributoren in Rechnung gestellt. Überprüfen Sie vor der Entscheidung, HEVC in Ihrer App oder Website zu verwenden, unbedingt die neuesten Lizenzbedingungen und Anforderungen!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800.000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS sind möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
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
          Die folgenden Informationen beziehen sich auf die wichtigsten Profile. Es sind eine
          Reihe anderer Profile verfügbar, die hier nicht enthalten sind.
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
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
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
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC Video Extensions aus dem Microsoft Store</a>
          installiert ist, und hat auf anderen Plattformen denselben Unterstützungsstatus wie Chrome. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Decoder.
        </p>
        <p>Firefox aktiviert HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 entweder mit Hardware (auf unterstützten Geräten, wo die Reichweite dieselbe ist wie bei Edge) oder Software (auf Windows muss der Nutzer für eine Erweiterung bezahlen und installieren)</li>
            <li>macOS ab Firefox 136 entweder mit Hardware oder Software.</li>
            <li>Linux ab Firefox 137 entweder mit Hardware oder Software (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere auf Chromium basierende Browser haben denselben Unterstützungsstatus wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder später.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format">ISOBMFF</a>, MPEG-TS,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">HEVC / H.265-Unterstützung</th>
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
      <td>
        <a href="https://www.itu.int/">ITU</a> /
        <a href="https://mpeg.chiariglione.org/">MPEG</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Spezifikationen</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.265">https://www.itu.int/rec/T-REC-H.265</a><br /><a href="https://www.iso.org/standard/69668.html">https://www.iso.org/standard/69668.html</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Proprietär; bestätigen Sie Ihre Compliance mit den
        <a href="https://www.via-la.com/licensing-programs/hevc-vvc/">Lizenzanforderungen</a>.
        Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**)-Format ist Teil des MPEG-4 Part 2 Visual-Standards. Während generell MPEG-4 Teil 2 Video von niemandem genutzt wird wegen des Mangels an überzeugendem Wert im Vergleich zu anderen Codecs, hat MP4V-ES eine gewisse Nutzung auf mobilen Geräten. MP4V ist im Wesentlichen eine H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist die Übertragung von MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Session. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung mittels [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie möchten dieses Format höchstwahrscheinlich nicht verwenden, da es von keinem großen Browser auf bedeutende Weise unterstützt wird und ziemlich veraltet ist. Dateien dieses Typs sollten die Endung `.mp4v` haben, werden jedoch manchmal fälschlicherweise als `.mp4` bezeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>Keine spezifische Grenze; nur durch die Datenrate eingeschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
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
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
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
        <p>Chrome unterstützt MP4V-ES nicht; ChromeOS jedoch schon.</p>
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
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
        <a href="https://www.via-la.com/licensing-programs/mpeg-4-visual/">Lizenz erwerben</a>
        über <a href="https://www.via-la.com/">Via LA</a> und/oder
        <a href="https://about.att.com/innovation/ip/patents">AT&#x26;T</a>
        nach Bedarf
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre enthüllt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 allein von MPEG ohne Beteiligung der {{Glossary("ITU", "ITU")}} entworfen.

Da jeder MPEG-2-Decoder auch MPEG-1-Video wiedergeben kann, ist es mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr in Bezug auf MPEG-1-Video, daher kann es frei von jeglichen Lizenzierungsbedenken verwendet werden. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne Unterstützung eines Plugins, und da die Verwendung von Plugins in Webbrowsern abgelehnt wird, sind sie im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für den Einsatz in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1,5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS und 60
        FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
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
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
      <td>Nein</td>
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
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
        Proprietär; alle Patente sind abgelaufen, sodass MPEG-1 frei verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert wird, und wird gelegentlich auch durch seine {{Glossary("ITU", "ITU")}}-Bezeichnung, H.262, bezeichnet. Es ist sehr ähnlich wie MPEG-1-Video—in der Tat kann jeder MPEG-2-Player automatisch MPEG-1 verarbeiten, ohne dass spezielle Maßnahmen erforderlich sind—außer dass es erweitert wurde, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 zu ermöglichen, Standard Definition Television zu komprimieren, sodass auch interlaced Video unterstützt wird. Die Standard Definition Kompressionsrate und die Qualität des resultierenden Videos erfüllten die Anforderungen so gut, dass MPEG-2 der primäre Videocodec ist, der für DVD-Video-Medien verwendet wird.

MPEG-2 hat mehrere verfügbare Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Levels verfügbar, die jeweils Attribute des Videos erhöhen, wie zum Beispiel Framerate, Auflösung, Bitrate usw. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortschrittlichere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Level, die jeweils Unterstützung für größere Bildabmessungen und Bitraten bieten. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für Fernsehen in Nordamerika MPEG-2-Video in hoher Definition mit dem Main Profile im High Level, was 4:2:0-Video bei sowohl 1920 x 1080 (30 FPS) als auch 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbps erlaubt.

Jedoch unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Verwendung von Plugins in Webbrowsern abgelehnt wird, sind sie im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für den Einsatz in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 100 Mbps; variiert je nach Level und Profil</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Abk.</th>
              <th scope="col">Level-Name</th>
              <th scope="col">Unterstützte Frameraten</th>
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
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
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
        Y'CbCr mit 4:2:0 Chroma-Subsampling in den meisten Profilen; die "High"- und
        "4:2:2"-Profile unterstützen ebenfalls 4:2:2 Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
      <td>Nein</td>
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
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>, MPEG-TS (MPEG-Transport-Stream), <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>, <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen, mit Ausnahme in Malaysia (ab 1. Oktober 2024), so dass MPEG-2 außerhalb Malaysias frei verwendet werden kann.
        Patente werden von <a href="https://www.via-la.com/licensing-programs/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat extrem geringe Verbreitung und die Unterstützung wird von den Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offenes und kostenloses Video-Codec, das gebührenfrei oder ohne Lizenzierung verwendet werden kann. Theora ist in Qualität und Kompressionsraten vergleichbar mit MPEG-4 Part 2 Visual und AVC, was es zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Video Kodierung macht. Aber sein Status als lizenzfrei und sein relativ niedriger CPU-Ressourcenbedarf machen es zu einer beliebten Wahl für viele Software- und Webprojekte. Der geringe CPU-Einfluss ist besonders nützlich, da es keine Hardware-Decoder für Theora gibt.

Theora basierte ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbkomponente unterstützt, ohne Möglichkeit, 10 oder mehr zu verwenden, um Farbbänder zu vermeiden. Abgesehen davon sind 8 Bit pro Komponente immer noch das am häufigsten verwendete Farbformat heute, so dass dies nur eine kleinere Unannehmlichkeit in den meisten Fällen ist. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil von allem ist jedoch, dass es nicht von Safari unterstützt wird, wodurch Theora nicht nur auf macOS, sondern auf all jenen Millionen von iPhones und iPads verfügbar ist.

Das [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) bietet zusätzliche Details zu Theora sowie zum Ogg-Containerformat, das darin verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>
        Beliebig; jeder nicht-nullwertige Wert wird unterstützt. Die Framerate wird als
        32-Bit-Numerator und 32-Bit-Denominator angegeben, um nicht-ganzzahlige
        Frameraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
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
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Variable Frame Rate (VFR) innerhalb eines einzelnen
          Streams unterstützt, können mehrere Streams innerhalb einer Datei miteinander verkettet werden,
          und jeder einzelne kann seine eigene Framerate haben, was im
          Wesentlichen VFR ermöglicht. Dies ist jedoch unpraktisch, wenn sich die Framerate häufig ändern muss.
        </p>
      </td>
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
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
      <td>Offen und kostenlos ohne Lizenzgebühren oder andere Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**)-Codec wurde ursprünglich von On2 Technologies entwickelt. Nach dem Erwerb von On2 veröffentlichte Google VP8 als ein offenes und lizenzfreies Videoformat mit dem Versprechen, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 vergleichbar mit [AVC](#avc_h.264).

Wenn der Browser es unterstützt, ermöglicht VP8 Videos mit einem Alphakanal, sodass das Video abgespielt werden kann, während der Hintergrund durch das Video hindurch sichtbar ist, in einem Maß, das von jedem Pixel's Alphakomponente bestimmt wird. Safari unterstützt keine Alphatransparenz in VP8-Videos.

Es gibt eine gute Browser-Unterstützung für VP8 in HTML-Inhalten, insbesondere in [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden Level-basierte Beschränkungen angewendet</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
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
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
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
      <td>Ja; VP8 ist einer der spezifikationsgerechten Codecs für WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Pflegende Organisation</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und kostenlos ohne Lizenzgebühren oder andere Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, der von Google entwickelt wurde. Wie VP8 ist VP9 vollständig offen und lizenzfrei. Seine Kodierungs- und Dekodierungsleistung ist vergleichbar mit oder etwas schneller als die von AVC, aber mit besserer Qualität. Die kodierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0 Chroma-Subsampling-Leveln, aber seine Profile umfassen Unterstützung für tiefere Farben und die vollständige Bandbreite der Chroma-Subsampling-Modi. Es unterstützt mehrere HDR-Implementierungen und bietet erhebliche Freiheit bei der Auswahl von Frameraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von Browsern weitgehend unterstützt, und Hardware-Implementierungen des Codecs sind recht häufig. VP9 ist einer der beiden Video-Codecs, die von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) vorgeschrieben sind (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass Safari in diesem Format keine Alphatransparenz unterstützt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden Level-basierte Beschränkungen angewendet</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Frameraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verluste
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">auf DCT-basierter Algorithmus</a>
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
          (veraltet; ersetzt durch Rec. 709), und
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
      <th scope="row">Variable Framerate (VFR)-Unterstützung</th>
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
      <th scope="row">Unterstützende/Pflegende Organisation</th>
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
      <td>Offen und kostenlos ohne Lizenzgebühren oder andere Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Videocodecs

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen, die Sie sich stellen sollten:

- Möchten Sie ein offenes Format verwenden oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine Fallback-Option anzubieten, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei deren Kompatibilität Sie bereit sind, Abstriche zu machen?
- Wie alt ist die älteste Version eines Webbrowsers, die Sie unterstützen müssen? Beispielsweise, müssen Sie jeden Browser unterstützen, der in den letzten fünf Jahren veröffentlicht wurde, oder nur in den letzten einem Jahr?

In den untenstehenden Abschnitten bieten wir empfohlene Codecauswahlen für spezifische Anwendungsfälle. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als am besten für den Anwendungsfall angesehen wird, proprietär ist oder Lizenzgebühren erfordern könnte, werden zwei Optionen angeboten: zuerst eine offene und gebührenfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format wählen, das am besten zu Ihren Bedürfnissen passt. Das erste wird als gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am weitesten kompatible Wahl sein, auf Kosten eines gewissen Maßes an Qualität, Leistung und/oder Größe.

### Empfehlungen für das Web

Zuerst schauen wir uns die besten Optionen für Videos an, die auf einer typischen Website wie einem Blog, einer Informationsseite oder einer kleinen Unternehmenswebsite präsentiert werden, auf der Videos zur Demonstration von Produkten verwendet werden (aber nicht, wo die Videos selbst ein Produkt sind), und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container unter Verwendung des **[AV1](#av1)**-Codecs für Video und des **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codecs für Audio. Diese sind alle offene, gebührenfreie Formate, die im Allgemeinen gut unterstützt werden, mit Ausnahme von Safari auf älteren Apple-Geräten.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
   </video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audio-Codec. Dies liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs eine weit verbreitete Kombination ist – tatsächlich in jedem großen Browser – und die Qualität typischerweise gut für die meisten Anwendungsfälle ist. Vergewissern Sie sich jedoch, dass Sie die Lizenzanforderungen einhalten.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein schließendes `</video>`-Tag, unabhängig davon, ob darin {{HTMLElement("source")}}-Elemente enthalten sind oder nicht.

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Derzeit stehen in Webbrowsern keine verlustfreien – oder sogar annähernd verlustfreien – Videocodecs allgemein zur Verfügung. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Unkomprimiertes 1080p-Video (1920x1080 Pixel) mit 4:2:0-Chromasubsampling benötigt beispielsweise mindestens 1,5 Gbps. Durch verlustfreie Kompression wie FFV1 (welches von Webbrowsern nicht unterstützt wird) könnte man dies möglicherweise auf etwa 600 Mbps reduzieren, abhängig vom Inhalt. Das sind immer noch eine riesige Menge an Daten, die jede Sekunde durch eine Verbindung gepumpt werden müssen und ist derzeit für keinen praktischen Einsatz im realen Leben realisierbar.

Dies gilt auch, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus verfügbar haben; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec zu wählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass er so wenig wie möglich komprimiert. Eine Möglichkeit, dies zu tun, besteht darin, den Codec auf "schnelle" Kompression zu konfigurieren, was inhärent bedeutet, dass weniger Kompression erreicht wird.

#### Vorbereitung von Video auf externem Weg

Um Video für Archivierungszwecke von außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Programm, das Kompression auf den ursprünglichen unkomprimierten Videodaten durchführt. Zum Beispiel kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Tool verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Während andere Codecs möglicherweise bessere Qualitätsniveaus im besten Fall aufweisen, wenn das Video in erheblichen Maße komprimiert wird, tendieren ihre Encoder dazu, langsam genug zu sein, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Kompression erhalten, bei etwa demselben allgemeinen Qualitätsniveau wesentlich schneller ist.

#### Aufnahme von Video

Angesichts der Einschränkungen, wie nah Sie an verlustfrei herankommen können, sollten Sie die Verwendung von [AVC](#avc_h.264) oder [AV1](#av1) in Betracht ziehen. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzunehmen, könnten Sie Code wie den folgenden verwenden, um Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt zu erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, um [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chromasubsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzuzeichnen. Die resultierende Datei wird eine Bitrate von maximal 800 Mbps verwenden, die zwischen den Video- und Audiotracks geteilt wird. Sie müssen diese Werte wahrscheinlich je nach Hardwareleistung, Ihren Anforderungen und den speziellen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Netzwerkübertragung und würde wahrscheinlich nur lokal verwendet werden.

Die Aufschlüsselung des Wertes des `codecs`-Parameters in seine durch Punkte abgegrenzten Eigenschaften ergibt Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                     |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `av01` | Der vierstellige Code (4CC), der den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                                            |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                      |
| `19H`  | Das Level und die Stufe. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt die hohe Stufe von Level 6.3 an.                                                                                                  |
| `12`   | Die Farbtiefe. Dies gibt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchste Genauigkeits-Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                          |
| `0`    | Das Flag für Monochrommodus. Wenn 1, würden keine Chromaflächen aufgezeichnet, und alle Daten sollten streng Luma-Daten sein, was zu einem Graustufenbild führen würde. Wir haben 0 angegeben, weil wir Farbe wünschen.                                                                          |
| `000`  | Der Chromasubsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrommodus-Wert 0, gibt an, dass wir 4:4:4-Chromasubsampling wünschen, oder keinen Farbverlust. |
| `09`   | Die Farbprimäre, die verwendet werden soll. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 gibt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                                 |
| `16`   | Die Übertragungscharakteristiken, die verwendet werden sollen. Dies stammt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 gibt an, dass wir die Charakteristiken für BT.2100 PQ-Farbe verwenden möchten.                                   |
| `09`   | Die Matrixkoeffizienten, die verwendet werden sollen, ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 spezifiziert, dass wir BT.2020 mit variabler Luminanz verwenden wollen; dies ist auch als BT.2010 YbCbCr bekannt.         |
| `1`    | Das Video-"Full Range"-Flag. Ein Wert von 1 gibt an, dass wir möchten, dass der volle Farbbereich verwendet wird.                                                                                                                                                                                |

Die Dokumentation zu Ihren Codecauswahlen wird wahrscheinlich Informationen enthalten, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden werden.

## Siehe auch

- [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Formate für Mediencontainer (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Problemen bei der Unterstützung von Medieninhalten im Web](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codec-Verwendung durch WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die Parameter "Codecs" und "Profile" für "Bucket"-Mediatypen
- {{RFC(5334)}}: Ogg Mediendateitypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimediadateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimediadateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

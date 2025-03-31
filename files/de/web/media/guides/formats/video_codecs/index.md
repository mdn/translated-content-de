---
title: Leitfaden für Web-Video-Codecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

Dieser Leitfaden stellt die Video-Codecs vor, auf die Sie im Web am wahrscheinlichsten stoßen oder die Sie in Betracht ziehen werden. Er enthält Zusammenfassungen ihrer Fähigkeiten, eventuelle Kompatibilitäts- und Nutzungsbedenken sowie Ratschläge, die Ihnen bei der Auswahl des richtigen Codecs für das Video Ihres Projekts helfen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie zu speichern, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die zum Speichern unkomprimierter Videos benötigt wird:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in voller Farbe (4 Bytes pro Pixel) ist 8.294.400 Bytes groß.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) beanspruchen.
- Eine Minute HD-Video würde 14,93 GB Speicher benötigen.
- Eine relativ typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicher benötigen, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ beanspruchen.

Der benötigte Speicherplatz ist nicht nur enorm, sondern auch die Netzwerkbandbreite, die benötigt wird, um ein solches unkomprimiertes Video zu übertragen, wäre enorm, bei 249 MB/s – ohne Audio und Overhead. Hier kommen Video-Codecs ins Spiel. Wie Audio-Codecs für die Audiodaten komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später dekodiert und wiedergegeben oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht exakt mit der Quelle übereinstimmt. Einige Details können verloren gehen; die Menge des Verlusts hängt vom Codec und seiner Konfiguration ab, aber als Faustregel gilt, je mehr Komprimierung Sie erreichen, desto mehr Verlust an Detail und Treue tritt auf. Es gibt einige verlustfreie Codecs, aber sie werden normalerweise für Archivierung und Speicherung zur lokalen Wiedergabe verwendet, statt für den Einsatz in einem Netzwerk.

## Häufige Codecs

Die folgenden Video-Codecs sind diejenigen, die im Web am häufigsten verwendet werden. Für jeden Codec werden auch die Container (Dateitypen) aufgelistet, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, der zusätzliche Details über den Codec bietet, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, deren Sie sich bewusst sein müssen.

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

## Faktoren, die das kodierte Video beeinflussen

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: die Besonderheiten des Formates und der Inhalte des Quellvideos sowie die Eigenschaften und Konfiguration des während der Kodierung verwendeten Codecs.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, wird die resultierenden Daten in der Regel ebenfalls größer machen. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In manchen Situationen lohnt sich ein größerer Verlust an Qualität, um die Datenmenge zu reduzieren; in anderen Fällen ist der Qualitätsverlust nicht akzeptabel, und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Wirkung des Quellvideoformats auf das kodierte Ergebnis

Das Ausmaß, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild anderweitig darstellt, unabhängig von einfachen Pixeln, spielt das Format des Originalbildes keine Rolle. Dinge wie Bildrate und, offensichtlich, Auflösung werden jedoch immer eine Auswirkung auf die Ausgabengröße der Medien haben.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Einige haben Probleme mit bestimmten Arten von Formen und Mustern oder sind nicht gut darin, scharfe Kanten zu reproduzieren, oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder jede Menge anderer Möglichkeiten. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Die potenzielle Auswirkung des Formats und Inhalts von Quellvideos auf die Qualität und Größe des kodierten Videos
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
        Je höher die Farbbittiefe, desto höher ist die Qualität der Farbtreue, die im Video erreicht wird. Außerdem führen in gesättigten Bereichen des Bildes (das heißt, wo Farben rein und intensiv sind, wie ein helles, reines Rot: <code>rgb(255 0 0 / 100%)</code>), Farbtiefen unter 10 Bit pro Komponente (10-Bit-Farbe) zu Banderolierung, bei der Verläufe nicht ohne sichtbare Abstufungen der Farben dargestellt werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren komprimierten Dateigrößen führen. Der bestimmende Faktor ist, welches interne Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Glätte der Bewegung im Bild. Bis zu einem gewissen Punkt gilt: Je höher die Bildrate ist, desto glatter und realistischer erscheint die Bewegung. Schließlich wird der Punkt des abnehmenden Ertrags erreicht. Siehe <a href="#reduced_frame_rate">Bildrate</a> weiter unten für Details.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird während der Kodierung nicht reduziert, führen höhere Bildraten zu größeren komprimierten Videodateien.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Komprimierung von Video funktioniert in der Regel, indem Frames verglichen werden, um festzustellen, wo sie sich unterscheiden, und Datensätze zu erstellen, die genügend Informationen enthalten, um den vorherigen Frame zu aktualisieren, um das Aussehen des folgenden Frames nachzuahmen. Je mehr aufeinanderfolgende Frames sich voneinander unterscheiden, desto größer sind diese Unterschiede, und desto weniger effektiv ist die Komprimierung, um die Einführung von Artefakten im komprimierten Video zu vermeiden.
      </td>
      <td>
        Die Komplexität, die durch Bewegung entsteht, führt zu größeren Zwischenframes aufgrund der höheren Anzahl von Unterschieden zwischen den Frames. Aus diesem und anderen Gründen wird bei Videos mit mehr Bewegung die Ausgabedatei in der Regel größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Körnigkeit im Bild) führt zu Variabilität. Variabilität macht die Komprimierung im Allgemeinen schwieriger, was zu mehr Qualitätsverlust führt, da Details gelöscht werden müssen, um das gleiche Maß an Komprimierung zu erreichen.
      </td>
      <td>
        Je mehr Variabilität – wie Rauschen – im Bild vorhanden ist, desto komplexer ist der Komprimierungsprozess und desto weniger erfolgreich wird der Algorithmus wahrscheinlich beim Komprimieren des Bildes zur gleichen Größe sein. Wenn Sie den Encoder nicht in einer Weise konfigurieren, die einige oder alle der durch Rauschen verursachten Variationen ignoriert, wird das komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Ein Video mit höherer Auflösung, das in derselben Bildschirmgröße präsentiert wird, kann im Allgemeinen die ursprüngliche Szene genauer darstellen, abgesehen von Effekten, die während der Komprimierung eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es. Dies spielt eine entscheidende Rolle in der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, hängt von den genauen Details der Situation ab, einschließlich des verwendeten Encoders und seiner Konfiguration. Neben allgemeinen Codec-Optionen könnte der Encoder so konfiguriert werden, dass er die Bildrate reduziert, das Rauschen bereinigt und/oder die Gesamtauslösung des Videos während der Kodierung reduziert.

### Einfluss der Codec-Konfiguration auf das kodierte Ergebnis

Die Algorithmen, die zur Kodierung von Video verwendet werden, verwenden in der Regel eine oder mehrere allgemeine Techniken zur Durchführung ihrer Kodierung. Im Allgemeinen wird jede Konfigurationsoption, die darauf abzielt, die Ausgabengröße des Videos zu reduzieren, wahrscheinlich eine negative Auswirkung auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Form der Kodierung zu wählen, die zu einer viel größeren kodierten Datei führt, aber mit perfekter Reproduktion des Originalvideos nach der Dekodierung.

Darüber hinaus kann jedes Encoder-Programm Unterschiede in der Art und Weise aufweisen, wie es das Quellvideo verarbeitet, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

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
      <th scope="row">Verlustfreie Komprimierung</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Komprimierung kann die gesamte Videogröße nicht annähernd so stark reduzieren wie verlustbehaftete Komprimierung; die resultierenden Dateien sind wahrscheinlich immer noch zu groß für die allgemeine Nutzung.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Komprimierung</th>
      <td>
        Bis zu einem gewissen Grad werden Artefakte und andere Formen der Qualitätsverschlechterung auftreten, abhängig vom spezifischen Codec und wie viel Komprimierung angewendet wird
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto einfacher ist es, höhere Komprimierungsraten zu erreichen
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr wird das kodierte Video dem Originalmedien ähnlich aussehen
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten Videodateien; das Ausmaß, in dem dies zutrifft, variiert je nach Codec
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich im Allgemeinen mit höheren Bitraten</td>
      <td>Höhere Bitraten führen von Natur aus zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Kodieren von Video verfügbar sind, und die Werte, die diesen Optionen zugewiesen werden können, variieren nicht nur von einem Codec zum anderen, sondern auch je nach der von Ihnen verwendeten Kodierungssoftware. Die in Ihrer Kodierungssoftware enthaltene Dokumentation hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten zu sichtbar negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, da Videos in dieser Weise angezeigt werden. Jeder Videoframe wird angezeigt, indem eine Reihe von Änderungen auf den derzeit sichtbaren Frame angewendet wird. Dies bedeutet, dass Fehler oder Artefakte sich im Laufe der Zeit summieren und zu Störungen oder anderweitig seltsamen oder unerwarteten Abweichungen im Bild führen können, die eine Zeit lang bestehen bleiben.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden regelmäßig **Schlüsselframes** (auch bekannt als **Intra-Frames** oder **I-Frames**) in die Videodatei eingefügt. Die Schlüsselframes sind vollständige Frames, die verwendet werden, um Schäden oder Artefaktrückstände zu reparieren, die derzeit sichtbar sind.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, das beim Rekonstruieren aus den kodierten Daten nicht mehr so aussieht wie vor der Komprimierung. Es gibt viele Formen von Aliasing; die häufigsten, die Sie möglicherweise sehen, sind:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht, wenn ein Muster im Quellbild und die Funktionsweise des Encoders räumlich leicht nicht übereinstimmen. Die vom Encoder erzeugten Artefakte führen dann nach der Dekodierung zu seltsamen, wirbelnden Effekten im Muster des Quellbildes.
        </p>
      </td>
      <td>
        <img alt="Eine Backsteinmauer zeigt einen wirbelnden Effekt ähnlich wie Wellen aufgrund des Moiré-Musters" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt sein sollten, ein gezacktes Aussehen annehmen, das ein wenig wie eine Treppe aussieht. Dies ist der Effekt, der durch "Anti-Aliasing"-Filter verringert wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die aufgrund von Aliasing wie eine Treppe aussehen" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der <strong>Wagenradeffekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">Stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, der im Film häufig zu sehen ist, bei dem sich ein drehendes Rad scheinbar mit falscher Geschwindigkeit dreht oder sogar rückwärts dreht, aufgrund einer Wechselwirkung zwischen der Bildrate und dem Komprimierungsalgorithmus. Der gleiche Effekt kann bei jedem sich wiederholenden Muster auftreten, das sich bewegt, z. B. die Schwellen auf einer Eisenbahnlinie, Pfosten entlang der Straße usw. Dies ist ein zeitraumbasiertes (zeitliches) Aliasing-Problem; die Geschwindigkeit der Drehung interferiert mit der Häufigkeit der Abtastung, die während der Komprimierung oder Kodierung durchgeführt wird.
        </p>
      </td>
      <td>
        <img alt="Drehendes Rad aufgrund von Aliasing, das einen Wagenradeffekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbkanten

**Farbkanten** sind eine Art visuelles Artefakt, das sich als unerwünschte Farben entlang der Kanten von gefärbten Objekten innerhalb der Szene präsentiert. Diese Farben haben keine beabsichtigte Farbbeziehung zum Inhalt des Frames.

### Verlust von Schärfe

Der Akt des Entfernens von Daten im Prozess der Kodierung von Video erfordert, dass einige Details verloren gehen. Wenn genügend Komprimierung angewendet wird, könnten Teile oder möglicherweise das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder dunstigen Erscheinungsbild führt.

Verlorene Schärfe kann den Text im Bild schwer lesbar machen, da Text – insbesondere kleiner Text – sehr detailorientierter Inhalt ist, bei dem geringfügige Veränderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Komprimierungsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln kontaminiert werden, die vom Komprimierungsalgorithmus erzeugt werden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund verlaufen. Dies ist besonders bei höheren Komprimierungsstufen häufig.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Abstufungen und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ist in mancher Hinsicht dem [Mückenrauschen](#mückenrauschen) ähnlich, außer dass der Klingeleffekt mehr oder weniger stabil und unveränderlich ist, während Mückenrauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, die es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Komprimierung zum Verlust von Farbdetails in Verläufen führt. Anstatt dass glatte Übergänge zwischen den verschiedenen Farben in einem Bereich bestehen, wird das Bild blockartig, mit Farbflecken, die das ursprüngliche Erscheinungsbild des Bildes nachahmen.

![Foto eines Weißkopfseeadlers mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers auf dem obigen Foto (und die Schnee-Eule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisierungseffekte verloren.

### Abstufungen

**Abstufungen** oder **Farbabstufungen** sind eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungs-Konfiguration kodiert wird. Als Folge zeigt der Inhalt des Videos ein "geschichtetes" Aussehen, bei dem statt glatten Verläufen und Übergängen die Übergänge von Farbe zu Farbe abrupt sind und Streifen von Farbe erscheinen.

![Beispiel für ein Bild, dessen Komprimierung Konturierung eingeführt hat](contouring-effect.jpg)

Im obigen Beispielbild beachten Sie, wie der Himmel Bänder unterschiedlicher Blautöne hat, anstatt einen gleichmäßigen Verlauf zu sein, da sich die Himmelsfärbung in Richtung Horizont ändert. Dies ist der Konturiereffekt.

### Mückenrauschen

**Mückenrauschen** ist ein temporäres Artefakt, das als Rauschen oder **Kantenschärfe** auftritt, das als flimmernde Dunstigkeit oder Flirren erscheint, das ungefähr den Kanten von Objekten mit starken Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann dem [Klingeln](#klingeln) ähnlich sein.

![Beispiel eines Bildes, dessen Komprimierung Mückenrauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Mückenrauschen an mehreren Stellen, einschließlich im Himmel um die Brücke. In der oberen rechten Ecke zeigt ein Inset eine Nahaufnahme eines Abschnitts des Bildes, der Mückenrauschen aufweist.

Mückenrausch-Artefakte sind am häufigsten in MPEG-Video zu finden, können jedoch auftreten, wann immer ein diskreter Kosinustransformations- (DCT-) Algorithmus verwendet wird; dies schließt zum Beispiel JPEG-Standbilder ein.

### Bewegungsentschädigung Block-Grenzartefakte

Die Komprimierung von Video funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest an einem Ort steht oder die Objekte im Bild relativ stationär sind, aber wenn es im Bild viel Bewegung gibt, können die Unterschiede zwischen den Frames so groß sein, dass die Komprimierung nicht viel nützt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder der Objekte im Bild) sucht und ermittelt, um wie viele Pixel sich das bewegte Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die sich bewegt haben und nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die beweglichen Objekte und erstellt dann eine Art internes Frame, das wie das Original aussieht, aber mit allen Objekten, die an ihre neuen Positionen verschoben wurden. In der Theorie nähert dieses den neuen Frame an. Um die Arbeit abzuschließen, werden dann die verbleibenden Unterschiede gefunden, und das Set von Objektverschiebungen und das Set von Pixeldifferenzen werden in den Daten gespeichert, die den neuen Frame darstellen. Dieses Objekt, das die Verschiebung und die Pixeldifferenzen beschreibt, wird als **Restframe** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalframe</th>
      <th scope="col" style="width: 216px">Inter-Frame-Unterschiede</th>
      <th scope="col" style="width: 216px">Unterschied nach Bewegungskompensation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalframe eines Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Frame und dem folgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td><img alt="Unterschiede zwischen den Frames nach Verschiebung um zwei Pixel nach rechts" src="motion-comp-compensated.jpg" /></td>
    </tr>
    <tr>
      <td style="vertical-align: top">Der erste vollständige Frame, wie ihn der Betrachter sieht.</td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Frame und dem folgenden Frame zu sehen. Alles andere ist schwarz. Bei genauem Hinsehen sehen wir, dass der Großteil dieser Unterschiede aus einer horizontalen Kamerabewegung stammt, was dies zu einem guten Kandidaten für Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen wir hier die Schwenkbewegung der Kamera, indem wir zuerst den ersten Frame nach rechts um zwei Pixel verschieben und dann die Unterschiede berechnen. Dies kompensiert die Schwenkbewegung der Kamera, sodass mehr Überlappungen zwischen den beiden Frames bestehen.
      </td>
    </tr>
    <tr>
      <th colspan="3" style="font: italic 0.9em Arial, x-locale-body, sans-serif; vertical-align: middle;">
        Bilder von
        <a href="https://en.wikipedia.org/wiki/Motion_compensation#Illustrated_example">Wikipedia</a>
      </th>
    </tr>
  </tbody>
</table>

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Globale Bewegungskompensation passt in der Regel für Kamerabewegungen wie Tracking, Dolly-Bewegungen, Schwenken, Kippen, Rollen sowie Auf- und Abbewegungen an. Blockbewegungskompensation behandelt lokale Änderungen und sucht nach kleineren Abschnitten des Bildes, die mit Bewegungskompensation kodiert werden können. Diese Blöcke sind normalerweise von fester Größe, in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen zulassen und sogar erlauben, dass Blöcke sich überlappen.

Es gibt jedoch Artefakte, die aufgrund der Bewegungskompensation auftreten können. Diese treten entlang der Blockgrenzen auf, in Form von scharfen Kanten, die falsches Klingeln und andere Randeffekte erzeugen. Diese liegen an der Mathematik, die beim Codieren der Restframes verwendet wird, und können leicht bemerkt werden, bevor sie vom nächsten Schlüsselframe repariert werden.

### Reduzierte Frame-Größe

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Während der unmittelbare Verlust an Größe oder Glätte der Wiedergabe ein negativer Faktor sein könnte, kann eine sorgfältige Entscheidung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein, während es gleichzeitig eine viel höhere visuelle Qualität hat; sogar nach der Skalierung zurück auf die ursprüngliche Größe während der Wiedergabe kann das Ergebnis besser sein, als das Originalvideo in voller Größe zu kodieren und den erforderlichen Qualitätseinbruch zu akzeptieren, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich können Sie Frames aus dem Video komplett entfernen und die Bildrate zum Ausgleich reduzieren. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungskompensation, noch mehr für Sie zu erreichen. Wenn zum Beispiel die Bewegungsunterschiede für zwei Frames berechnet werden, die sich aufgrund von Bewegungen zwischen den Frames um zwei Pixel unterscheiden, könnte das Überspringen jedes zweiten Frames dazu führen, dass ein Unterschied berechnet wird, der sich auf vier Pixel Bewegung beläuft. Dies ermöglicht es, die gesamte Bewegung der Kamera durch weniger Restframes darzustellen.

Die absolute Mindestframe-Rate, die ein Video haben kann, bevor sein Inhalt vom menschlichen Auge nicht mehr als Bewegung wahrgenommen wird, beträgt etwa 12 Bilder pro Sekunde. Unter dieser Rate wird das Video zu einer Reihe von Standbildern. Kinofilme haben in der Regel 24 Bilder pro Sekunde, während Standard Definition Fernsehen etwa 30 Bilder pro Sekunde hat (etwas weniger, aber nah genug) und High Definition Fernsehen zwischen 24 und 60 Bilder pro Sekunde liegt. Alles von 24 FPS aufwärts wird im Allgemeinen als zufriedenstellend glatt empfunden; 30 oder 60 FPS sind je nach Ihren Bedürfnissen ein ideales Ziel.

Letztendlich liegen die Entscheidungen darüber, welche Kompromisse Sie eingehen können, ganz bei Ihnen und/oder Ihrem Designteam.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50 % höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und für die Verwendung sowohl im {{HTMLElement("video")}}-Element als auch bei [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Darüber hinaus gibt es eine Reihe von **Levels**, die jeweils Grenzen für eine Reihe von Videoattributen definieren. Diese Attribute umfassen Bildabmessungen, Bildfläche in Pixeln, Anzeige- und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Limits für die Anzahl der im Kodierungs-/Dekodierungsprozess verwendeten Kacheln und Kachelspalten.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152 Video auf Level 2.0 haben können. Es ist jedoch zu beachten, dass für mindestens Firefox und Chrome die Levels derzeit beim Software-Dekodieren ignoriert werden und der Dekoder einfach versucht, das Video so gut wie möglich mit den gegebenen Einstellungen abzuspielen. Aus Kompatibilitätsgründen sollten Sie jedoch innerhalb der Grenzen des gewählten Levels bleiben.

Der Hauptnachteil von AV1 ist derzeit, dass es sehr neu ist und die Unterstützung noch in die meisten Browser integriert wird. Außerdem werden Encoder und Decoder noch optimiert, und Hardware-Encoder und -Decoder befinden sich größtenteils noch in der Entwicklung, nicht in der Produktion. Aus diesem Grund dauert die Kodierung eines Videos im AV1-Format sehr lange, da die gesamte Arbeit softwarebasiert erfolgt.

Derzeit ist AV1 aufgrund dieser Faktoren noch nicht bereit, Ihre erste Wahl für einen Videocodec zu sein, aber Sie sollten darauf achten, dass es in Zukunft einsatzbereit ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Videolevel; theoretisches Maximum erreicht 800 Mbit/s bei Level 6.3
        </p>
        <p>
          Siehe die
          <a href="https://aomediacodec.github.io/av1-spec/#levels">
            Tabellen der Levels
          </a>
          der AV1-Spezifikation, die die maximalen Auflösungen und Raten auf jedem Level beschreiben.
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
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
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
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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

Die **Advanced Video Coding** (**AVC**) des MPEG-4-Spezifikationspakets wird durch die identische ITU H.264-Spezifikation und die MPEG-4 Teil 10-Spezifikation spezifiziert. Es handelt sich um einen bewegungskompensierten Codec, der heutzutage weit verbreitet für alle Arten von Medien verwendet wird, einschließlich Rundfunkfernsehen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist sehr flexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für die Verwendung in Videokonferenzen und mobilen Szenarien ausgelegt und verwendet weniger Bandbreite als das Main Profile (das in einigen Regionen für digitales Standardfernsehen verwendet wird) oder das High Profile (das für Blu-Ray Disc Videos verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling; Das High 10 Profile fügt Unterstützung für 10-Bit-Farbe hinzu, und fortgeschrittene Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC besitzt auch spezielle Funktionen wie die Unterstützung mehrerer Ansichten derselben Szene (Multiview Video Coding), die unter anderem die Produktion stereoskopischer Videos ermöglicht.

AVC ist jedoch ein proprietäres Format, und es gibt zahlreiche Patente, die von mehreren Parteien bezüglich seiner Technologien gehalten werden. Der kommerzielle Gebrauch von AVC-Medien erfordert eine Lizenz, obwohl das Via LA-Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endnutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs umfasst) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Obwohl Webbrowser nicht verpflichtet sind, dies zu tun, unterstützen es einige.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen die Hardware-Kodierung und -Dekodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzierungsanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Variiert je nach Niveau</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS sind möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
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
        <p>Einige der häufigsten oder interessantesten Profile:</p>
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
        Advanced HDR/SL-HDR; beide sind Teil von ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die AVC-Unterstützung in Firefox hängt von den im Betriebssystem bereits integrierten oder vorinstallierten Codecs für AVC und dessen Container ab, um Patentbedenken zu umgehen.
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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

Der **H.263**-Codec von ITU wurde hauptsächlich für den Einsatz in Niedrigbandbreitensituationen entwickelt. Insbesondere liegt der Schwerpunkt auf Videokonferenzen über PSTN (vermittelte Telefonnetze), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme). Trotz seiner Optimierung für Niedrigbandbreitennetzwerke ist er ziemlich CPU-intensiv und möglicherweise nicht auf niedrigeren Computern ausreichend leistungsfähig. Das Datenformat ist ähnlich wie das von MPEG-4 Teil 2.

H.263 wurde im Internet nie weit verbreitet eingesetzt. Abwandlungen von H.263 wurden als Grundlage für andere proprietäre Formate wie Flash-Video oder den Sorenson-Codec verwendet. Allerdings hat kein bedeutender Browser jemals H.263-Unterstützung standardmäßig integriert. Bestimmte Mediaplug-ins haben die Unterstützung für H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines codierten Videos in Form der maximalen Bitrate pro Frame (Bild) oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann kann das Video diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt davon ab, der Bildrate, der Kompression und dem gewählten Auflösungs- und Blockformat.

H.263 wurde durch H.264 ersetzt und wird daher als ein veraltetes Medienformat angesehen, das Sie im Allgemeinen vermeiden sollten, wenn es möglich ist. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, ist, wenn Sie Unterstützung auf sehr alten Geräten benötigen, auf denen H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und so weiter. Für die Verwendung von H.263 sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

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
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
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
        die Bildgröße in Pixeln sowie die Anzahl der Zeilen von Luminanz- und Chrominanzproben, die für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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
        Proprietär; entsprechende Lizenz(en) erforderlich. Beachten Sie, dass
        mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Das **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec wird von ITUs **H.265** sowie vom MPEG-H Teil 2 (der noch in der Entwicklung befindlichen Nachfolge von MPEG-4) definiert. HEVC wurde entwickelt, um die effiziente Kodierung und Dekodierung von Videos in Größen, einschließlich sehr hoher Auflösungen (einschließlich 8K-Video), zu unterstützen, mit einer Struktur, die speziell darauf ausgelegt ist, dass die Software die Vorteile moderner Prozessoren nutzen kann. Theoretisch kann HEVC komprimierte Dateigrößen halb so groß wie [AVC](#avc_h.264) erreichen, aber mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Kodierungseinheit (CTU)—ähnlich dem Makroblock, der in früheren Codecs verwendet wurde—aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede Chroma-Probe, die in derselben Kodierungseinheit verwendet werden, sowie allen erforderlichen Syntaxelementen. Diese Struktur unterstützt eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Haupt-Profil nur 8-Bit pro Komponente Farbe mit 4:2:0 Chroma-Subsampling unterstützt. Ebenfalls interessant ist, dass 4:4:4 Video speziell behandelt wird. Anstatt die Luma-Proben (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Proben (die anzugeben, wie die Grautöne geändert werden, um Farb-Pixel zu erzeugen), die drei Kanäle sind stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann während der Wiedergabe kombiniert werden, um ein Vollfarbbild zu erzeugen.

HEVC ist ein proprietäres Format und ist durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA verwaltet](https://www.via-la.com/licensing-2/hevc-vvc/); Gebühren werden den Entwicklern und nicht den Inhaltsproduzenten und -vertreibern berechnet. Überprüfen Sie immer die neuesten Lizenzbedingungen und Anforderungen, bevor Sie entscheiden, ob Sie HEVC in Ihrer App oder Website verwenden möchten!

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
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
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
          Informationen unten werden für die Hauptprofile bereitgestellt. Es gibt eine
          Reihe anderer Profile zur Verfügung, die hier nicht enthalten sind.
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
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
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
        <p>Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 8+, Linux und ChromeOS, für alle Geräte unter macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen vom Microsoft Store</a>
          installiert sind, und hat denselben Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardwaredecoder.
        </p>
        <p>Firefox ermöglicht HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 unter Verwendung entweder von Hardware (auf Geräten, die es unterstützen, wo die Reichweite dieselbe ist wie bei Edge) oder Software (auf Windows muss der Benutzer für eine Erweiterung bezahlen und sie installieren)</li>
            <li>macOS ab Firefox 136 unter Verwendung von entweder Hardware oder Software.</li>
            <li>Linux ab Firefox 137 unter Verwendung von entweder Hardware oder Software (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere auf Chromium basierende Browser haben denselben Unterstützungsstatus wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte unter macOS High Sierra oder später.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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
          >Lizenzierungsanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des visuellen Standards MPEG-4 Teil 2. Während im Allgemeinen MPEG-4 Teil 2-Video von niemandem verwendet wird, da es im Vergleich zu anderen Codecs keinen überzeugenden Wert bietet, hat MP4V-ES eine gewisse Verbreitung im mobilen Bereich. MP4V ist im Wesentlichen H.263-Encoding in einem MPEG-4-Container.

Der Hauptzweck besteht darin, MPEG-4 Audio und Video über eine {{Glossary("RTP", "RTP")}} Sitzung zu streamen. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung mit [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie möchten dieses Format höchstwahrscheinlich nicht verwenden, da es von keinem großen Browser in einem sinnvollen Maße unterstützt wird und recht veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden aber manchmal fälschlicherweise `.mp4` bezeichnet.

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
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
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
        12 Bits pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
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
        <p>Chrome unterstützt MP4V-ES nicht; jedoch tut dies ChromeOS.</p>
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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
          >erhalten Sie eine Lizenz</a
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

### MPEG-1 Teil 2 Video

**MPEG-1 Teil 2 Video** wurde Anfang der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG ohne die Beteiligung der {{Glossary("ITU", "ITU")}} entwickelt.

Da jeder MPEG-2-Decoder auch MPEG-1-Videos abspielen kann, ist es kompatibel mit einer Vielzahl von Software- und Hardware-Geräten. Es gibt keine aktiven Patente mehr in Bezug auf MPEG-1-Video, sodass es ohne Lizenzierungsprobleme verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plug-ins, und da der Einsatz von Plug-ins in Webbrowsern veraltet ist, sind diese in der Regel nicht mehr verfügbar. Dadurch ist MPEG-1 eine schlechte Wahl für die Verwendung in Websites und Webanwendungen.

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
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
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
        Y'CbCr mit 4:2:0 Chroma-Subsampling mit bis zu 12 Bits pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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
        Proprietär; jedoch sind alle Patente abgelaufen, sodass MPEG-1
        uneingeschränkt verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Teil 2 Video

**[MPEG-2 Teil 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das vom MPEG-2 Standard definierte Videoformat und wird auch gelegentlich mit seiner {{Glossary("ITU", "ITU")}} Bezeichnung, H.262, bezeichnet. Es ist dem MPEG-1 Video sehr ähnlich—tatsächlich kann jeder MPEG-2-Player automatisch MPEG-1 ohne besondere Maßnahmen abspielen—, außer dass es erweitert wurde, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 in die Lage zu versetzen, Standarddefinitionen für das Fernsehen zu komprimieren, sodass auch interlace videos unterstützt werden. Die Standardkompressionsrate und die Qualität des resultierenden Videos erfüllten die Anforderungen so gut, dass MPEG-2 der primäre Videocodec war, der für DVD-Videomedien verwendet wurde.

MPEG-2 verfügt über mehrere Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist in vier Levels verfügbar, die jeweils die Attribute des Videos wie Bildrate, Auflösung, Bitrate usw. erhöhen. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Levels, von denen jeder Unterstützung für größere Bildabmessungen und Bitraten bietet. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für Fernsehen in Nordamerika MPEG-2-Video in hoher Auflösung mit dem Main Profile at High Level, was 4:2:0 Video bei sowohl 1920 x 1080 (30 FPS) und 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbps ermöglicht.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plug-ins, und da der Einsatz von Plug-ins in Webbrowsern veraltet ist, stehen diese in der Regel nicht mehr zur Verfügung. Dadurch ist MPEG-2 eine schlechte Wahl für die Verwendung in Websites und Webanwendungen.

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
              <th scope="row">Abk.</th>
              <th scope="col">Level-Name</th>
              <th scope="col">Unterstützte Bildraten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Niedriges Level</td>
              <td>23.9, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Hauptlevel</td>
              <td>23.976, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>Hoch 1440</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>Hohes Level</td>
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
              <th scope="col">Level-Name</th>
              <th scope="col">Maximale Bildgröße</th>
            </tr>
            <tr>
              <th scope="row">LL</th>
              <td>Niedriges Level</td>
              <td>352 x 288 Pixel</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Hauptlevel</td>
              <td>720 x 576 Pixel</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>Hoch 1440</td>
              <td>1440 x 1152 Pixel</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>Hohes Level</td>
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
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen, mit Ausnahme in Malaysia (Stand 1. Oktober 2024), so dass MPEG-2 außerhalb von Malaysia frei verwendet werden kann.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat eine äußerst geringe Nutzung, und die Unterstützung wird aus den Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und freier Videocodec, der ohne Lizenzgebühren oder Lizenzierung verwendet werden kann. Theora ist vergleichbar in der Qualität und Kompressionsraten mit MPEG-4 Teil 2 Visual und AVC, was ihn zu einer sehr guten Wahl für Video-Encoding macht, wenn auch nicht zur Spitzenklasse. Aber sein Status als frei von jeglichen Lizenzierungsfragen und seine relativ geringen Anforderungen an CPU-Ressourcen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Die geringe CPU-Auswirkung ist besonders nützlich, da es keine Hardwaredekoder für Theora gibt.

Theora basierte ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, welche ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass er nur 8 Bit pro Farbkomponente unterstützt, ohne Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt, sind 8 Bits pro Komponente immer noch das am häufigsten verwendete Farbformat heute, so dass dies nur in den meisten Fällen ein geringfügiger Nachteil ist. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil von allen ist jedoch, dass er nicht von Safari unterstützt wird, wodurch Theora nicht nur auf macOS, sondern auch auf all den Millionen von iPhones und iPads nicht verfügbar ist.

Das [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) bietet zusätzliche Details zu Theora sowie dem Ogg-Containerformat, welches darin verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbit/s</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Beliebig; jeder nicht-null Wert wird unterstützt. Die Bildrate wird
        als ein 32-Bit-Zähler und ein 32-Bit-Nenner angegeben, um nicht-ganzzahlige Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
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
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora innerhalb eines einzigen Streams keine Unterstützung für Variable Frame Rate (VFR) bietet, können mehrere Streams in einer einzigen Datei verkettet werden, und jeder davon kann seine eigene Bildrate haben, was im Wesentlichen VFR ermöglicht. Dies ist jedoch unpraktisch, wenn die Bildrate häufig geändert werden muss.
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies entwickelt. Nach ihrem Kauf von On2 veröffentlichte Google VP8 als offenes und lizenzgebührenfreies Videoformat mit einem Versprechen, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 vergleichbar mit [AVC](#avc_h.264).

Falls vom Browser unterstützt, ermöglicht VP8 Videos mit einem Alphakanal, was es erlaubt, im Video den Hintergrund bis zu einem vom Alphakanal jedes Pixels bestimmten Grad durchscheinen zu lassen.

Es gibt eine gute Browserunterstützung für VP8 in HTML-Inhalten, insbesondere innerhalb von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien.
Dadurch ist VP8 eine gute Wahl für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl wäre, wenn es verfügbar ist.
Webbrowser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, aber nicht alle Browser, die dies tun, unterstützen es auch in HTML-Audio- und Videoelementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, levelbasierte Einschränkungen werden durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
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
      <td>Y'CbCr mit 4:2:0 Chroma-Subsampling bei 8 Bit pro Komponente</td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und spätere Versionen unterstützen VP8 nur in WebRTC-Verbindungen.</p>
        <p>Firefox unterstützt VP8 nur in MSE, wenn kein H.264-Hardwaredecoder verfügbar ist. Verwenden Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu überprüfen.</p>
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
      <td>Ja; VP8 ist einer der spezifikationsbasierten Codecs für WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Wartende Organisation</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, der von Google entwickelt wurde.
Wie VP8 ist VP9 vollständig offen und lizenzfrei.
Seine Kodierungs- und Dekodierungsleistung ist vergleichbar mit oder etwas schneller als die von AVC, aber mit besserer Qualität.
VP9s codierte Videoqualität ist vergleichbar mit der von HEVC bei ähnlichen Bitraten.

VP9s Hauptprofil unterstützt nur eine Farbtiefe von 8 Bit bei 4:2:0 Chroma-Subsampling-Niveaus, aber seine Profile umfassen Unterstützung für tiefere Farben und das gesamte Spektrum an Chroma-Subsampling-Modi.
Es unterstützt mehrere HDR-Implementierungen und bietet erhebliche Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von vielen Browsern unterstützt, und Hardware-Implementierungen des Codecs sind ziemlich verbreitet.
VP9 ist einer der beiden Videocodecs, die von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) vorausgesetzt werden (der andere ist [VP8](#vp8)).
Beachten Sie jedoch, dass die Unterstützung von Safari für WebM und VP9 erst mit Version 14.1 eingeführt wurde, sodass Sie, wenn Sie sich entscheiden, VP9 zu verwenden, ein alternatives Format wie AVC oder HEVC für iPhone-, iPad- und Mac-Nutzer in Betracht ziehen sollten.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und bei Bedarf ein alternatives Video bereitstellen können).
Dies gilt besonders, wenn Sie einen offenen Codec anstelle eines proprietären verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, levelbasierte Einschränkungen werden durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehafteter
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
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
      <th scope="row">Unterstützung für Variable Frame Rate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p>
          Firefox unterstützt VP8 nur in MSE, wenn kein H.264-Hardwaredecoder verfügbar ist. Verwenden Sie
          [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu überprüfen.
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
      <th scope="row">Unterstützende/Wartende Organisation</th>
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Videocodecs

Die Entscheidung, welchen Codec oder welche Codecs man verwenden möchte, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden oder sind proprietäre Formate ebenfalls eine Option?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Fähigkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, für die Sie bereit sind, die Kompatibilität zu opfern?
- Wie alt ist die älteste Version eines Webbrowsers, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem Browser arbeiten, der in den letzten fünf Jahren ausgeliefert wurde, oder nur im letzten Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codex-Auswahlen für spezifische Anwendungsfälle. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der für den Anwendungsfall als am besten geeignete Codec proprietär ist oder Lizenzzahlungen erfordern könnte, werden zwei Optionen angeboten: zuerst eine offene und gebührenfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format wählen, das am besten zu Ihren Anforderungen passt. Das erste wird als gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am weitesten kompatible Wahl sein, auf Kosten einer gewissen Qualität, Leistung und/oder Größe.

### Empfehlungen für Alltagsvideos

Schauen wir uns zunächst die besten Optionen für Videos an, die auf einer typischen Website wie einem Blog, einer Informationsseite oder einer kleinen Unternehmenswebsite präsentiert werden, auf der Videos zur Produktdemonstration (aber nicht, wo die Videos selbst ein Produkt sind) verwendet werden.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container, der den **[VP9](#vp9)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Dies sind alles offene, gebührenfreie Formate, die allgemein gut unterstützt werden, obwohl nur in ziemlich aktuellen Browsern, weshalb ein Fallback eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Ihrem Audiocodec. Dies liegt daran, dass der MP4-Container mit AVC und AAC-Codecs innerhalb von jedem großen Browser unterstützt wird und die Qualität typischerweise gut für die meisten Anwendungsfälle ist. Stellen Sie jedoch sicher, dass Sie Ihre Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert einen schließenden `</video>`-Tag, unabhängig davon, ob Sie {{HTMLElement("source")}}-Elemente darin haben oder nicht.

### Empfehlungen für Videopräsentationen in hoher Qualität

Wenn Ihr Ziel darin besteht, Videos in höchstmöglicher Qualität zu präsentieren, profitieren Sie wahrscheinlich davon, so viele Formate wie möglich anzubieten, da die Codecs, die die beste Qualität bieten können, tendenziell auch die neuesten sind und daher am ehesten Lücken in der Browser-Kompatibilität aufweisen.

1. Ein WebM-Container mit AV1 für Video und Opus für Audio. Wenn Sie in der Lage sind, das High- oder Professional-Profil beim Kodieren von AV1 auf einem hohen Level wie 6.3 zu verwenden, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erreichen und dabei eine ausgezeichnete Videoqualität beibehalten. Die Kodierung Ihres Audios mit dem Fullband-Profil von Opus bei einer Abtastrate von 48 kHz maximiert die aufgezeichnete Audiobandbreite und erfasst nahezu den gesamten Frequenzbereich, der für das menschliche Gehör zugänglich ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container, der den [HEVC](#hevc_h.265)-Codec mit einem der erweiterten Main-Profile verwendet, wie z.B. Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4-Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies ausgezeichnete Grafikqualität mit bemerkenswerter Farbwiedergabe. Darüber hinaus können Sie optional HDR-Metadaten einschließen, um eine Video mit hohem Dynamikumfang bereitzustellen. Verwenden Sie für Audio den AAC-Codec mit einer hohen Abtastrate (mindestens 48 kHz, idealerweise jedoch 96 kHz) und kodieren Sie mit komplexer Kodierung anstelle von schneller Kodierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Derzeit gibt es keine verlustfreien oder auch nur annähernd verlustfreien Video-Codecs, die allgemein in Web-Browsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Beispielsweise benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0 Farbabtastung mindestens 1,5 Gbit/s. Bei Anwendung verlustfreier Kompression wie FFV1 (was von Web-Browsern nicht unterstützt wird) könnte dies möglicherweise auf etwa 600 Mbit/s reduziert werden, abhängig vom Inhalt. Das sind immer noch eine enorme Menge an Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keinen realen Anwendungsfall praktisch.

Dies ist auch dann der Fall, wenn einige der verlustbehafteten Codecs einen verlustfreien Modus haben; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec auszuwählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass er so wenig Kompression wie möglich durchführt. Ein Weg, dies zu tun, besteht darin, den Codec so zu konfigurieren, dass er "schnelle" Kompression verwendet, was impliziert, dass weniger Kompression erreicht wird.

#### Video extern vorbereiten

Um ein Video für Archivierungszwecke von außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Kompression auf den ursprünglichen unkomprimierten Videodaten durchführt. Zum Beispiel kann das freie [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 infile
```

Auch wenn andere Codecs möglicherweise bessere Bestfall-Qualitätsniveaus bieten, wenn sie das Video um einen bedeutenden Betrag komprimieren, neigen ihre Encoder dazu, so langsam zu sein, dass der nahezu verlustfreie Encoding, den Sie mit dieser Kompression erhalten, bei annähernd der gleichen Gesamtqualität erheblich schneller ist.

#### Videoaufzeichnung

Angesichts der Einschränkungen, wie nah an verlustfrei Sie herankommen können, könnten Sie erwägen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) zur Videoaufzeichnung verwenden, könnten Sie Code wie den folgenden verwenden, um Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt zu erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, um [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Farbabtastung und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzuzeichnen. Die resultierende Datei wird eine Bitrate von höchstens 800 Mbit/s verwenden, die zwischen den Video- und Audiospuren geteilt wird. Sie müssen diese Werte wahrscheinlich anpassen, je nach Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten. Diese Bitrate ist offensichtlich nicht für die Netzwerkausgabe realistisch und wird wahrscheinlich nur lokal verwendet.

Bei der Zerlegung des Werts des `codecs`-Parameters in seine punktgetrennten Eigenschaften sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Die vier Zeichen umfassende Code-(4CC)-Bezeichnung, die den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                            |
| `2`    | Das Profil. Ein Wert von 2 zeigt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil angibt.                                                                                                                                                         |
| `19H`  | Das Level und Tier. Dieser Wert stammt aus der Tabelle im Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und zeigt das hohe Tier des Levels 6.3 an.                                                                                                             |
| `12`   | Die Farbtiefe. Dies zeigt 12 Bits pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchste Genauigkeitsfarbdarstellung, die in AV1 verfügbar ist.                                                                                                                                |
| `0`    | Das Monochrom-Modus-Flag. Wenn 1, dann würden keine Chromaflächen aufgezeichnet, und alle Daten sollten streng Hell-Daten sein, was in einem Graustufenbild resultiert. Wir haben 0 angegeben, weil wir Farbe möchten.                                                                                  |
| `000`  | Der Farbabtastmodus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000 in Kombination mit dem Monochrom-Moduswert 0 gibt an, dass wir eine 4:4:4-Chroma-Abtastung wünschen, oder keinen Verlust an Farbdaten. |
| `09`   | Die Farbprimaries, die zu verwenden sind. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 gibt an, dass wir die BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                                      |
| `16`   | Die Übertragungscharakteristik, die zu verwenden ist. Auch diese stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 gibt an, dass wir die Eigenschaften für BT.2100 PQ-Farbe verwenden möchten.                                                          |
| `09`   | Die Matrixkoeffizienten, die zu verwenden sind, stammen ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Helligkeit verwenden möchten; dies ist auch als BT.2010 YbCbCr bekannt.                |
| `1`    | Das Video-"Full Range"-Flag. Ein Wert von 1 gibt an, dass wir den vollen Farbbereich verwenden möchten.                                                                                                                                                                                                 |

Die Dokumentation zu Ihren Codec-Optionen wird wahrscheinlich Informationen enthalten, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden können.

## Siehe auch

- [Leitfaden für Web-Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die Parameter "Codecs" und "Profiles" für "Bucket"-Mediatypen
- {{RFC(5334)}}: Ogg Media Types
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

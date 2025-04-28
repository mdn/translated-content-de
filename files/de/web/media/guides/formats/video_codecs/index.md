---
title: Leitfaden zu Web-Video-Codecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

Dieser Leitfaden stellt die Video-Codecs vor, die Sie höchstwahrscheinlich im Web antreffen oder in Erwägung ziehen werden. Er bietet Zusammenfassungen ihrer Fähigkeiten sowie Informationen zu Kompatibilitäts- und Nutzbarkeitsaspekten und Ratschläge, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es erforderlich, diese erheblich zu komprimieren, um sie zu speichern, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die benötigt wird, um unkomprimierte Videos zu speichern:

- Ein einzelnes Bild eines hochauflösenden Videos (1920x1080) in voller Farbe (4 Bytes pro Pixel) sind 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (ca. 249 MB) beanspruchen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ benötigen.

Nicht nur ist der benötigte Speicherplatz enorm, auch die Netzwerk-Bandbreite, die erforderlich ist, um ein solches unkomprimiertes Video zu übertragen, wäre enorm, mit 249 MB/s — Audio und Overhead nicht eingerechnet. Hier kommen Video-Codecs ins Spiel. Genau wie Audio-Codecs die Daten von Audiodateien komprimieren, komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht exakt mit der Quelle übereinstimmt. Einige Details können verloren gehen; die Menge des Verlusts hängt vom Codec und dessen Konfiguration ab, aber als allgemeine Regel gilt: Je stärker die Kompression, desto mehr Detail- und Qualitätsverlust tritt auf. Einige verlustfreie Codecs existieren, werden jedoch typischerweise zur Archivierung und lokalen Wiedergabe und nicht zur Verwendung im Netzwerk eingesetzt.

## Häufige Codecs

Die folgenden Video-Codecs sind diejenigen, die am häufigsten im Web verwendet werden. Für jeden Codec sind die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec führt zu einem Abschnitt unten, der zusätzliche Details über den Codec bietet, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Ihnen bewusst sein sollten.

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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: Spezifische Merkmale des Formats und Inhalts des Quellvideos sowie die Eigenschaften und Konfiguration des Codecs, der bei der Kodierung des Videos verwendet wird.

Die einfachste Richtlinie ist diese: Alles, was das kodierte Video dem Original, unkomprimierten Video ähnlicher macht, wird im Allgemeinen auch dazu führen, dass die resultierenden Daten größer werden. Somit ist es immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist ein größerer Qualitätsverlust, um die Datengröße zu verringern, es wert; in anderen Zeiten ist der Qualitätsverlust nicht akzeptabel, und es ist notwendig, eine Codec-Konfiguration zu wählen, die zu einer entsprechend größeren Datei führt.

### Einfluss des Quellvideoformats auf das kodierte Ergebnis

Der Grad, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat konvertiert oder das Bild mit einem anderen Mittel als einfachen Pixeln darstellt, spielt das Format des Originalbildes keine Rolle. Allerdings werden Dinge wie Bildrate und Auflösung immer einen Einfluss auf die Ausgabegröße der Medien haben.

Zudem haben alle Codecs ihre Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Formen und Mustern, sind nicht gut darin, scharfe Kanten zu replizieren, oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder viele andere Möglichkeiten. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Die potenziellen Auswirkungen des Quellvideoformats und -inhalts auf die
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
      <th scope="row">Farbtiefe (Bit-Tiefe)</th>
      <td>
        Je höher die Farbbit-Tiefe, desto höher die Farbtreuequalität, die im
        Video erreicht wird. Außerdem erlauben Farbtiefen unter 10 Bit pro
        Komponente (10-Bit-Farbe) in gesättigten Bildbereichen (d.h. dort, wo
        die Farben rein und intensiv sind, wie bei einem hellen, reinen Rot:
        <code>rgb(255 0 0 / 100%)</code>) Banding, bei dem Verläufe nicht ohne
        sichtbare Abstufungen der Farben dargestellt werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren
        komprimierten Dateigrößen führen. Der bestimmende Faktor ist, welches
        interne Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Flüssigkeit der Bewegung im
        Bild. Bis zu einem Punkt wird die Bewegung umso flüssiger und
        realistischer erscheinen, je höher die Bildrate ist. Schließlich wird
        der Punkt abnehmender Renditen erreicht. Siehe
        <a href="#reduced_frame_rate">Bildrate</a> unten für weitere Details.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird während der Kodierung nicht verringert,
        führen höhere Bildraten zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Komprimierung von Videos funktioniert typischerweise durch den
        Vergleich von Frames, wobei festgestellt wird, wo sie sich
        unterscheiden, und es werden Datensätze erstellt, die genügend
        Informationen enthalten, um das vorherige Frame zu aktualisieren, um das
        Erscheinungsbild des folgenden Frames zu approximieren. Je mehr
        aufeinanderfolgende Frames voneinander abweichen, desto größer sind
        diese Unterschiede und desto weniger effektiv ist die Komprimierung
        darin, das Auftreten von Artefakten im komprimierten Video zu vermeiden.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren
        Zwischenbildern aufgrund der höheren Anzahl von Unterschieden zwischen
        den Frames). Aus diesem und anderen Gründen, je mehr Bewegung in einem
        Video vorhanden ist, desto größer wird die Ausgabedatei in der Regel
        sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Körnigkeit im Bild)
        bringt Variabilität mit sich. Variabilität erschwert in der Regel die
        Komprimierung, was zu mehr Qualitätsverlust führt, da Details
        weggelassen werden müssen, um das gleiche Maß an Komprimierung zu
        erreichen.
      </td>
      <td>
        Je mehr Variabilität—wie Rauschen—im Bild vorhanden ist, desto
        komplexer ist der Komprimierungsprozess und desto weniger wahrscheinlich
        hat der Algorithmus Erfolg, das Bild im gleichen Maße zu komprimieren.
        Es sei denn, Sie konfigurieren den Encoder so, dass einige oder alle des
        durch Rauschen verursachten Variationen ignoriert werden, wird das
        komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video, das in der gleichen Bildschirmgröße
        präsentiert wird, kann typischerweise die ursprüngliche Szene genauer
        darstellen, abgesehen von Effekten, die während der Komprimierung
        eingeführt wurden.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es. Dies
        spielt eine Schlüsselrolle in der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Der Grad, in dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und dessen Konfiguration. Zusätzlich zu allgemeinen Codec-Optionen könnte der Encoder so konfiguriert sein, dass die Bildrate reduziert, das Rauschen bereinigt und/oder die Gesamtauflösung des Videos während der Kodierung reduziert wird.

### Wirkung der Codec-Konfiguration auf das kodierte Ergebnis

Die Algorithmen, die zum Kodieren von Videos verwendet werden, verwenden typischerweise eine oder mehrere allgemeine Techniken zur Durchführung ihrer Kodierung. Im Allgemeinen wird jede Konfigurationsoption, die dazu gedacht ist, die Ausgabedateigröße des Videos zu reduzieren, wahrscheinlich einen negativen Einfluss auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten im Video einführen. Es ist auch möglich, eine verlustfreie Kodierung zu wählen, die zu einer viel größeren kodierten Datei führt, aber die perfekte Reproduktion des Originalvideos bei der Dekodierung ermöglicht.

Zusätzlich kann jedes Encoder-Tool Unterschiede in der Art und Weise aufweisen, wie das Quellvideo verarbeitet wird, was zu Unterschieden in der Ausgabequalität und/oder Größe führen kann.

<table class="standard-table">
  <caption>
    Effekte der Video-Encoder-Konfiguration auf Qualität und Größe
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
        Verlustfreie Komprimierung kann die Gesamtgröße des Videos nicht in dem
        Maße reduzieren wie verlustbehaftete Komprimierung; die resultierenden
        Dateien sind wahrscheinlich immer noch zu groß für den allgemeinen
        Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Komprimierung</th>
      <td>
        In gewissem Maße treten Artefakte und andere Formen von
        Qualitätsverschlechterung auf, abhängig vom spezifischen Codec und wie
        viel Komprimierung angewendet wird.
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto
        leichter können höhere Kompressionsraten erreicht werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto ähnlicher wird das kodierte
        Video dem Originalmedium aussehen.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren
        kodierten Videodateien; das Ausmaß, in dem dies zutrifft, variiert
        abhängig vom Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Qualität verbessert sich in der Regel mit höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Kodieren von Videos zur Verfügung stehen, und die Werte, die diesen Optionen zugewiesen werden, variieren nicht nur von einem Codec zum anderen, sondern auch in Abhängigkeit von der verwendeten Kodierungssoftware. Die in Ihrer Kodierungssoftware enthaltene Dokumentation wird Ihnen helfen zu verstehen, wie sich diese Optionen spezifisch auf das kodierte Video auswirken.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten zu sichtbaren negativen Effekten führen. Sobald ein Artefakt auftritt, kann es eine Weile bestehen bleiben, da Video so dargestellt wird. Jedes Video-Frame wird angezeigt, indem eine Reihe von Änderungen auf das aktuell sichtbare Frame angewendet werden. Das bedeutet, dass etwaige Fehler oder Artefakte mit der Zeit zunehmen, was zu Glitches oder sonstigen merkwürdigen oder unerwarteten Abweichungen im Bild führt, die eine Weile anhalten.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodische **Schlüsselframes** (auch bekannt als **Intra-Frames** oder **I-Frames**) in die Videodatei eingefügt. Die Schlüsselframes sind vollständige Frames, die verwendet werden, um alle aktuell sichtbaren Schäden oder Artefakt-Rückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was beim Rekonstruieren aus den kodierten Daten anders aussieht als vor der Kompression. Es gibt viele Formen des Aliasings; die häufigsten, die Sie möglicherweise sehen, umfassen:

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
          funktioniert, räumlich leicht ungleichmäßig sind. Die vom Encoder
          erzeugten Artefakte führen dann dazu, dass seltsame, wirbelnde Effekte
          in das Muster des Quellbildes beim Dekodieren eingeführt werden.
        </p>
      </td>
      <td>
        <img alt="eine Backsteinmauer mit einem wirbelnden Effekt ähnlich wie Wellen durch das Moiré-Muster" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          auftritt, wenn diagonale gerade oder gebogene Kanten, die glatt sein
          sollten, ein gezacktes Erscheinungsbild annehmen, das ein bisschen wie
          eine Treppe aussieht. Dies ist der Effekt, der durch
          "Antialiasing"-Filter verringert wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die durch Aliasing-Effekte wie eine Treppe aussehen" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Kreisel-Effekt</h4>
        <p>
          Der <strong>Kreisel-Effekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, der häufig in Filmen zu sehen ist, bei dem
          ein sich drehendes Rad mit der falschen Geschwindigkeit oder sogar
          rückwärts zu rotieren scheint, was durch eine Interaktion zwischen der
          Bildrate und dem Kompressionsalgorithmus hervorgerufen wird. Derselbe
          Effekt kann bei jedem sich wiederholenden Muster auftreten, das sich
          bewegt, wie z. B. die Schwellen auf einer Eisenbahnlinie, Pfosten am
          Straßenrand usw. Dies ist ein zeitliches (zeitbasiertes) Aliasing-Problem; die
          Drehgeschwindigkeit stört die Frequenz der während der Komprimierung
          durchgeführten Abtastung.
        </p>
      </td>
      <td>
        <img alt="Drehendes Rad aufgrund des Aliasing-Effekts, der einen Kreisel-Effekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbsäume

**Farbsäume** sind eine Art von visuellem Artefakt, das als falsche Farben entlang der Kanten von gefärbten Objekten innerhalb der Szene auftritt. Diese Farben haben keine absichtliche Farbbeziehung zu den Inhalten des Frames.

### Verlust der Schärfe

Das Entfernen von Daten im Prozess der Kodierung von Videos erfordert, dass einige Details verloren gehen. Bei ausreichender Kompression können Teile oder potenziell das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder trüben Erscheinungsbild führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text—insbesondere kleiner Text—sehr detailorientierter Inhalt ist, bei dem geringfügige Veränderungen erheblich die Lesbarkeit beeinträchtigen können.

### Klingeln

Verlustbehaftete Kompressionsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln kontaminiert werden, die vom Komprimierungsalgorithmus erzeugt wurden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke umfasst, die eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund überschreiten. Dies ist besonders bei höherer Kompression üblich.

![Beispiel des Klingeleffekts](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Abstufungen und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ähnelt in gewisser Weise dem [Moskito-Rauschen](#moskito-rauschen), außer dass während der Klingeleffekt mehr oder weniger stetig und unverändert ist, das Moskito-Rauschen flackert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, die es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisieren

**Posterisation** tritt auf, wenn die Kompression zu einem Verlust von Farbdetails in Gradienten führt. Anstelle von sanften Übergängen durch die verschiedenen Farben in einem Bereich wird das Bild blockig, mit Farbklecksen, die das ursprüngliche Erscheinungsbild des Bildes approximieren.

![Foto von einem Weißkopfadler mit klobiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers auf dem Foto oben (und des Schneeeulen im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisationsartefakte verloren.

### Konturenbildung

**Konturenbildung** oder **Farbbänder** ist eine spezifische Form der Posterisation, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu gröberen Quantisierungskonfiguration kodiert wird. Infolgedessen zeigen die Inhalte des Videos ein "geschichtetes" Aussehen, wobei anstelle sanfter Übergänge die Übergänge von Farbe zu Farbe abrupt sind und dadurch Streifen von Farben erscheinen.

![Beispiel eines Bildes, dessen Kompression Konturen eingeführt hat](contouring-effect.jpg)

Im Beispielbild oben beachten Sie, wie der Himmel Bänder unterschiedlicher Blautöne hat, anstatt als konsistenter Verlauf zu erscheinen, während die Himmelfarbe sich in Richtung Horizont verändert. Dies ist der Kontureneffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein temporales Artefakt, das als Rauschen oder **Kantenhöchstfrequenzeffekte** auftritt, die als flimmernde Unschärfe oder Schimmern erscheinen und ungefähr an harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund entlang verlaufen. Der Effekt kann dem [Klingeln](#klingeln) ähnlich aussehen.

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich im Himmel um die Brücke herum. In der oberen rechten Ecke zeigt ein Ausschnitt eine Nahansicht eines Bildabschnitts, der Moskito-Rauschen aufweist.

Moskito-Rauschen-Artefakte sind am häufigsten in MPEG-Videos zu finden, können jedoch auftreten, wann immer ein diskreter Cosinus-Transformationsalgorithmus (DCT) verwendet wird; dies schließt beispielsweise JPEG-Standbilder ein.

### Bewegungsentschädigung Blockrand-Artefakte

Die Kompression von Video funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest an ihrem Platz ist oder die Objekte im Frame relativ unbeweglich sind, aber wenn im Frame eine große Bewegung vorhanden ist, können die Anzahl der Unterschiede zwischen den Frames so groß sein, dass die Komprimierung keinen Nutzen bringt.

**[Motion Compensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegungen sucht (entweder der Kamera oder von Objekten im Bildfeld) und bestimmt, wie viele Pixel das bewegende Objekt in jede Richtung bewegt hat. Diese Verschiebung wird dann gespeichert, zusammen mit einer Beschreibung der Pixel, die bewegt wurden und die nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die sich bewegenden Objekte, dann baut er eine Art internes Frame auf, das wie das Original aussieht, aber mit allen Objekten, die an ihren neuen Standorten übersetzt wurden. In der Theorie approximiert dies das Erscheinungsbild des neuen Frames. Dann, um die Aufgabe abzuschließen, werden die verbleibenden Unterschiede gefunden, dann werden das Set an Objektverschiebungen und die Menge der Pixeldifferenzen in den Daten gespeichert, die den neuen Frame darstellen. Dieses Objekt, das die Verschiebung und die Pixeldifferenzen beschreibt, wird als **Residual Frame** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Original-Frame</th>
      <th scope="col" style="width: 216px">Differenzen zwischen den Frames</th>
      <th scope="col" style="width: 216px">
        Differenzen nach Bewegungsentschädigung
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Original-Frame des Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Differenzen zwischen dem ersten und dem folgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Differenzen zwischen den Frames nach einer Verschiebung von zwei Pixeln nach rechts"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Das erste vollständige Frame, wie es der Betrachter sieht.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten und dem folgenden
        Frame zu sehen. Alles andere ist schwarz. Bei genauem Hinsehen können
        wir sehen, dass der Großteil dieser Unterschiede von einer horizontalen
        Kamerabewegung herrührt, was dies zu einem guten Kandidaten für
        Bewegungsentschädigung macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen
        wir hier die Kameraposition, indem wir das erste Frame zuerst um zwei
        Pixel nach rechts verschieben und dann die Differenzen bestimmen. Dies
        kompensiert für die Bewegung der Kamera und ermöglicht mehr Überlappung
        zwischen beiden Frames.
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

Es gibt zwei allgemeine Arten der Bewegungsentschädigung: **Globale Bewegungsentschädigung** und **Block-bewegungsentschädigung**. Die globale Bewegungsentschädigung passt im Allgemeinen auf Kamerabewegungen wie Tracking, Dolly-Bewegungen, Schwenken, Neigen, Rollen und Auf- und Abwärtsbewegungen an. Block-bewegungsentschädigung behandelt lokalere Veränderungen, indem sie nach kleineren Abschnitten des Bildes sucht, die mit Bewegungsentschädigung kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe in einem Raster, aber es gibt Formen der Bewegungsentschädigung, die variable Blockgrößen erlauben und sogar das Überlappen von Blöcken ermöglichen.

Es gibt jedoch Artefakte, die aufgrund der Bewegungsentschädigung auftreten können. Diese treten entlang der Blockränder auf, in Form von scharfen Kanten, die falsches Klingeln und andere Kanteneffekte erzeugen. Diese sind auf die Mathematik zurückzuführen, die in der Kodierung der Residual Frames verwendet wird, und können leicht bemerkt werden, bevor sie durch das nächste Schlüsselframe repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Dateigröße des Videos zu verbessern. Während der unmittelbare Verlust an Größe oder Flüssigkeit der Wiedergabe ein negativer Faktor sein kann, kann eine sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein, während es höhere visuelle Qualität aufweist; selbst nach dem Hochskalieren während der Wiedergabe könnte das Ergebnis besser sein, als das Originalvideo in voller Größe zu kodieren und den erforderlichen Qualitätsverlust zu akzeptieren, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich können Sie auch Bilder aus dem Video vollständig entfernen und die Bildrate entsprechend verringern. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungsentschädigung, noch mehr für Sie zu tun. Wenn Sie beispielsweise jedes zweite Bild überspringen, könnte die Berechnung einer Differenz von vier Pixeln an Bewegung statt nur zwei möglich sein. Dies lässt die gesamte Bewegung der Kamera mit weniger Residual Frames repräsentieren.

Die absolute Mindestbildrate, die ein Video haben kann, bevor seine Inhalte nicht mehr als Bewegung von menschlichen Augen wahrgenommen werden, liegt bei etwa 12 Bildern pro Sekunde. Weniger als das und das Video wird zu einer Reihe von Standbildern. Kinofilme haben in der Regel 24 Bilder pro Sekunde, während Standardqualität-Fernsehen etwa 30 Bilder pro Sekunde hat (etwas weniger, aber nahe genug) und HD-Fernsehen zwischen 24 und 60 Bilder pro Sekunde. Alles ab 24 FPS aufwärts wird allgemein als genügend flüssig angesehen; 30 oder 60 FPS ist je nach Ihren Bedürfnissen ein ideales Ziel.

Letztendlich liegen die Entscheidungen darüber, welche Kompromisse Sie eingehen können, ganz bei Ihnen und/oder Ihrem Designteam.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das speziell für Internet-Videos von der [Alliance for Open Media](https://aomedia.org/) entwickelt wurde. Er erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und für die Verwendung mit dem {{HTMLElement("video")}}-Element und [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile an: **main**, **high** und **professional**, mit wachsender Unterstützung für Farbtiefen und Chroma-Subsampling. Darüber hinaus sind eine Reihe von **Leveln** spezifiziert, die jeweils die Grenzen für eine Reihe von Attributen des Videos definieren. Zu diesen Attributen gehören Bilddimensionen, Bildbereich in Pixeln, Anzeige- und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Grenzen für die Anzahl von Kacheln und Kachelspalten, die im Kodierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet das AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixel und eine maximale Höhe von 1152 Pixeln, jedoch ist die maximale Bildgröße in Pixeln 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es ist jedoch erwähnenswert, dass zumindest bei Firefox und Chrome die Levels derzeit bei der Software-Dekodierung ignoriert werden und der Decoder einfach das Beste tut, um das Video mit den gegebenen Einstellungen abzuspielen. Aus Gründen der Kompatibilität sollten Sie jedoch innerhalb der Grenzen des gewählten Levels bleiben.

Der Hauptnachteil von AV1 ist derzeit, dass es sehr neu ist und die Unterstützung noch dabei ist, in die meisten Browser integriert zu werden. Zusätzlich werden Encoder und Decoder immer noch auf Leistung optimiert, und Hardware-Encoder und Decoder befinden sich noch größtenteils in der Entwicklung und nicht in der Produktion. Aus diesem Grund dauert die Kodierung eines Videos im AV1-Format sehr lange, da die gesamte Arbeit in der Software erfolgt.

Derzeit, aufgrund dieser Faktoren, ist AV1 noch nicht bereit, Ihre erste Wahl an Videocodec zu sein, aber Sie sollten darauf achten, dass es in Zukunft einsatzbereit ist.

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
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Tabellen der Levels</a
          >, die die maximalen Auflösungen und Raten für jedes Level beschreiben.
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
              <td>4:0:0 (Graustufen), 4:2:0, oder 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Professional</th>
              <td>8, 10, oder 12</td>
              <td>4:0:0 (Graustufen), 4:2:0, 4:2:2, oder 4:4:4</td>
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
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
      <td>Lizenzgebührenfrei, offener Standard</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

Der **Advanced Video Coding** (**AVC**), Standard der MPEG-4-Spezifikationsreihe, ist sowohl in der ITU H.264-Spezifikation als auch in der MPEG-4 Part 10-Spezifikation spezifiziert. Es handelt sich um einen Bewegungskompensations-basierten Codec, der heute weit verbreitet für alle Arten von Medien eingesetzt wird, einschließlich Fernsehsendungen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Video-Codec für Blu-Ray-Discs.

AVC ist äußerst flexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten. Zum Beispiel ist das Constrained Baseline Profile für Videokonferenzen und mobile Szenarien konzipiert, da es weniger Bandbreite als das Main Profile (das in einigen Regionen für Standarddefinitionen im Digitalfernsehen verwendet wird) oder das High Profile (das für Blu-Ray Disc Videos verwendet wird) benötigt. Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling. Das High 10 Profile fügt Unterstützung für 10-Bit-Farben hinzu, und erweiterte Formen von High 10 fügen 4:2:2- und 4:4:4-Chroma-Subsampling hinzu.

AVC hat auch spezielle Funktionen wie die Unterstützung mehrerer Ansichten derselben Szene (Multiview Video Coding), die unter anderem die Produktion von stereoskopischem Video ermöglicht.

AVC ist jedoch ein proprietäres Format, und zahlreiche Patente werden von mehreren Parteien hinsichtlich seiner Technologien gehalten. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA-Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange die Videos für Endbenutzer kostenlos sind.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht dazu verpflichtet sind, tun dies einige.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel, und viele Plattformen unterstützen Hardware für die Kodierung und Dekodierung von AVC-Medien. Bevor Sie sich jedoch zu einer Verwendung von AVC in Ihrem Projekt entscheiden, beachten Sie die [Lizenzanforderungen](https://www.via-la.com/licensing-2/avc-h-264/)!

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
        <p>Einige der gebräuchlichsten oder interessanten Profile:</p>
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
        Ja; <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder
        Advanced HDR/SL-HDR; beide sind Teil des ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Firefox-Unterstützung für AVC hängt von den im Betriebssystem eingebauten oder vorinstallierten Codecs für AVC und dessen Container ab, um Patentprobleme zu vermeiden.
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
        Proprietär mit zahlreichen Patenten. Die kommerzielle Nutzung
        <a href="https://www.via-la.com/licensing-2/avc-h-264/"
          >erfordert eine Lizenz</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263**-Codec des ITU wurde hauptsächlich für den Einsatz in Situationen mit geringer Bandbreite entwickelt. Insbesondere ist sein Fokus auf Videokonferenzen im PSTN (Public Switched Telephone Networks), in {{Glossary("RTSP", "RTSP")}}- und SIP (IP-basierte Videokonferenz)-Systemen. Trotz der Optimierung für Netzwerke mit geringer Bandbreite ist er ziemlich CPU-intensiv und kann möglicherweise auf Computern mit niedrigerer Leistung nicht ausreichend funktionieren. Das Datenformat ähnelt dem MPEG-4 Part 2.

H.263 wurde nie breit im Web eingesetzt. Abwandlungen von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie z.B. Flash-Video oder den Sorenson-Codec. Kein großer Browser hat jedoch jemals standardmäßig H.263-Unterstützung integriert. Bestimmte Media-Plugins haben die Unterstützung für H.263-Medien ermöglicht.

Anders als bei den meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Bezug auf die maximale Bitrate pro Frame (Bild), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann kann das Video diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt davon ab, von der Bildrate, der Kompression und der gewählten Auflösung und dem Blockformat.

H.263 wurde durch H.264 abgelöst und wird daher als veraltetes Medienformat betrachtet, das Sie generell vermeiden sollten, wenn es möglich ist. Der einzige wirkliche Grund zur Verwendung von H.263 in neuen Projekten wäre, wenn Sie Unterstützung auf sehr alten Geräten benötigen, auf denen H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm, und so weiter. Um H.263 zu nutzen, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbeschränkt, aber typischerweise unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
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
          Version 1 von H.263 spezifiziert eine Reihe von Bildgrößen, die unterstützt werden. Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF, oder 16CIF) definiert
        die Bildgröße in Pixel und wie viele Reihen jeden Luminanz- und Chrominanzproben für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
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
        Proprietär; eine entsprechende Lizenz oder Lizenzen sind erforderlich. Beachten Sie, dass
        mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec ist sowohl von der ITU als **H.265** als auch von MPEG-H Teil 2 (die noch in Entwicklung befindliche Fortsetzung von MPEG-4) definiert. HEVC wurde entwickelt, um eine effiziente Kodierung und Dekodierung von Videos in Größen einschließlich sehr hoher Auflösungen (einschließlich 8K-Video) zu unterstützen, mit einer Struktur, die speziell entwickelt wurde, um Software die Nutzung moderner Prozessoren zu erleichtern. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie [AVC](#avc_h.264), aber mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Coding Tree Unit (CTU) - ähnlich dem in früheren Codecs verwendeten Makroblock - aus einem Baum von Luminanzwerten für jede Probe sowie einem Baum von Chromawerten für jede Chromaprobe, die in derselben Coding Tree Unit verwendet wird, sowie allen erforderlichen Syntaxelementen. Diese Struktur unterstützt die einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Main-Profil nur 8-Bit-Farbe pro Komponente mit 4:2:0 Chroma-Subsampling unterstützt. Interessant ist auch, dass 4:4:4 Video speziell behandelt wird. Anstatt die Luminanzproben (die die Pixel des Bildes in Graustufen repräsentieren) und die Cb- und Cr-Proben (die anzeigen, wie die Graustufen modifiziert werden sollen, um Farbpixel zu erzeugen) zu haben, werden die drei Kanäle stattdessen als drei monochrome Bilder betrachtet, eines für jede Farbe, die dann während der Wiedergabe zu einem vollfarbigen Bild kombiniert werden.

HEVC ist ein proprietäres Format und wird durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird [von Via LA verwaltet](https://www.via-la.com/licensing-2/hevc-vvc/); Gebühren werden an Entwickler und nicht an Inhaltsproduzenten und -verteiler erhoben. Stellen Sie sicher, dass Sie die neuesten Lizenzbedingungen und Anforderungen überprüfen, bevor Sie eine Entscheidung treffen, ob Sie HEVC in Ihrer App oder Website verwenden möchten!

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
          Nachfolgend sind die Informationen zu den wichtigsten Profilen angegeben. Es gibt eine
          Anzahl weiterer Profile, die hier nicht enthalten sind.
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
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
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC Video-Erweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat denselben Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Decoder.
        </p>
        <p>Firefox aktiviert HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 mit entweder Hardware- (auf Geräten, die es unterstützen, wobei der Bereich dem von Edge entspricht) oder Software-Decoder (auf Windows muss der Benutzer für eine Erweiterung bezahlen und diese installieren)</li>
            <li>macOS ab Firefox 136 mit entweder Hardware- oder Software-Decoder.</li>
            <li>Linux ab Firefox 137 mit entweder Hardware- oder Software-Decoder (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware-Decoder.</li>
          </ul>
        </p>
        <p>Opera und andere auf Chromium basierende Browser haben denselben Unterstützungsstatus wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder neuer.</p>
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
        Proprietär; bestätigen Sie Ihre Übereinstimmung mit den
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des MPEG-4 Part 2 Visual Standards. Während im Allgemeinen MPEG-4 Teil 2 Video von niemandem verwendet wird, weil es im Vergleich zu anderen Codecs keinen überzeugenden Wert bietet, hat MP4V-ES dennoch einige Anwendungen auf Mobilgeräten. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist es, MPEG-4 Audio und Video über eine {{Glossary("RTP", "RTP")}}-Sitzung zu streamen. MP4V-ES wird jedoch auch verwendet, um MPEG-4 Audio und Video über eine mobile Verbindung mit [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie möchten dieses Format höchstwahrscheinlich nicht verwenden, da es von keinem großen Browser in einer bedeutenden Weise unterstützt wird und ziemlich veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden aber manchmal fälschlicherweise als `.mp4` bezeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Keine spezifische Grenze; nur durch die Datenrate eingeschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
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
        <p>Chrome unterstützt MP4V-ES nicht; jedoch tut ChromeOS dies.</p>
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
          >erwerben Sie eine Lizenz</a
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

**MPEG-1 Teil 2 Video** wurde Anfang der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG entwickelt, ohne die Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video wiedergeben kann, ist es mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr, die sich auf MPEG-1-Video beziehen, sodass es ohne jegliche Lizenzbedenken verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern veraltet ist, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für den Einsatz in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1,5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS, und 60
        FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
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
        Proprietär; allerdings sind alle Patente abgelaufen, sodass MPEG-1 frei verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Teil 2 Video

**[MPEG-2 Teil 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert wird, und wird gelegentlich auch durch sein {{Glossary("ITU", "ITU")}}-Kennzeichnung, H.262, bezeichnet. Es ist dem MPEG-1-Video sehr ähnlich - tatsächlich kann jeder MPEG-2-Player automatisch MPEG-1 ohne spezielle Anpassungen verarbeiten - außer dass es erweitert wurde, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 so zu gestalten, dass es Standard-Definition-Fernsehen komprimieren kann, weshalb auch interlaced Video unterstützt wird. Die Standard-Definition-Kompressionsrate und die Qualität des resultierenden Videos erfüllten die Anforderungen gut genug, dass MPEG-2 der primäre VideoCodec für DVD-Videomedien wurde.

MPEG-2 hat mehrere verfügbare Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist in vier Level verfügbar, von denen jeder die Attribute des Videos erhöht, wie Bildrate, Auflösung, Bitrate und so weiter. Die meisten Profile verwenden Y'CbCr mit 4:2:0-Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Level, von denen jeder Unterstützung für größere Bilddimensionen und Bitraten bietet. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für Fernsehen, die in Nordamerika verwendet wird, MPEG-2-Video in hoher Auflösung mit dem Main-Profil auf hohem Level, 4:2:0-Video bei sowohl 1920 x 1080 (30 FPS) als auch 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbps.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Plug-in-Verwendung in Webbrowsern veraltet ist, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für den Einsatz auf Websites und Webanwendungen.

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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen, mit Ausnahme von Malaysia (ab dem 1. Oktober 2024), sodass MPEG-2 außerhalb von Malaysia frei verwendet werden kann.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat eine sehr geringe Nutzung, und die Unterstützung wird aus Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und kostenloser Videocodec, der ohne Lizenzgebühren oder -anforderungen verwendet werden kann. Theora ist in Bezug auf Qualität und Kompressionsraten mit MPEG-4 Part 2 Visual und AVC vergleichbar, was ihn zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Video-Kodierung macht. Aber sein Status als frei von Lizenzbedenken und seine relativ geringen Anforderungen an CPU-Ressourcen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Die geringe CPU-Belastung ist besonders nützlich, da es keine Hardware-Decoder für Theora gibt.

Theora wurde ursprünglich auf Basis des VC3-Codecs von On2 Technologies entwickelt. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu nutzen, um Farbbanding zu vermeiden. Das gesagt, 8 Bit pro Komponente ist immer noch das am häufigsten verwendete Farbformat heute, sodass dies in den meisten Fällen nur eine geringfügige Unannehmlichkeit ist. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil überhaupt ist jedoch, dass es von Safari nicht unterstützt wird, was Theora nicht nur auf macOS, sondern auch auf all den Millionen von iPhones und iPads unzugänglich macht.

Das [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) bietet zusätzliche Informationen zu Theora sowie zum Ogg-Containerformat, das darin verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Beliebig; jeder ungleich Null positiv Wert wird unterstützt. Die Bildrate wird
        als 32-Bit-Zähler und 32-Bit-Nenner spezifiziert, um nicht-ganzzahlige
        Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Unterstützung für variable Bildrate (VFR) innerhalb eines einzigen
          Streams bietet, können mehrere Streams in einer einzigen Datei verkettet werden,
          und jeder dieser Streams kann seine eigene Bildrate haben, was im Grunde genommen
          VFR ermöglicht. Dies ist jedoch unpraktisch, wenn die Bildrate häufig
          geändert werden muss.
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
          Edge unterstützt Theora mit der optionalen
          <a
            href="https://apps.microsoft.com/detail/9n5tdp8vcmhs"
            >Web Media Extensions</a
          >
          Erweiterung.
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies erstellt. Nach dem Kauf von On2 durch Google wurde VP8 als offenes und lizenzgebührenfreies Videoformat unter dem Versprechen veröffentlicht, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Wenn der Browser es unterstützt, ermöglicht VP8 Videos mit einem Alphakanal, sodass das Video mit dem Hintergrund so abgespielt werden kann, dass der Hintergrund durch das Video zu einem Grad, der durch die Alphakomponente jedes Pixels spezifiziert wird, sichtbar ist.

Es gibt eine gute Browserunterstützung für VP8 in HTML-Inhalten, insbesondere in [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien. Dies macht VP8 zu einem guten Kandidaten für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl ist, wenn es Ihnen zur Verfügung steht. Webbrowser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, aber nicht alle Browser, die dies tun, unterstützen es auch in HTML-Audio- und Videoelementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Willkürlich; kein Maximum, sofern nicht durch Levels begrenzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Willkürlich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und später unterstützen VP8 nur in WebRTC-Verbindungen.</p>
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
      <td>Ja; VP8 ist einer der spezifikationsgeforderten Codecs für WebRTC</td>
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, entwickelt von Google. Wie VP8 ist VP9 vollständig offen und lizenzgebührenfrei. Seine Kodierungs- und Dekodierungsleistung ist vergleichbar mit oder leicht schneller als die von AVC, jedoch mit besserer Qualität. Die kodierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0 Chroma-Subsampling, aber seine Profile beinhalten Unterstützung für tiefere Farben und die gesamte Bandbreite der Chroma-Subsampling-Modi. Es unterstützt mehrere HDR-Implementierungen und bietet großen Spielraum bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 ist breit von Browsern unterstützt, und Hardware-Implementierungen des Codecs sind recht verbreitet. VP9 ist einer der beiden Videocodecs, die von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) gefordert werden (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass die Safari-Unterstützung für WebM und VP9 erst in Version 14.1 eingeführt wurde, daher sollten Sie, wenn Sie VP9 verwenden, ein alternatives Format wie AVC oder HEVC für iPhone, iPad und Mac-Benutzer in Betracht ziehen.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und gegebenenfalls alternatives Video bereitstellen können). Dies gilt insbesondere, wenn Sie einen offenen Codec anstelle eines proprietären verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Willkürlich; kein Maximum, sofern nicht durch Levels begrenzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Willkürlich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
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
          (veraltet; ersetzt durch Rec. 709) und
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
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
      <td>Offen und frei von Lizenzgebühren und anderen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Video-Codecs

Die Entscheidung, welche Codec oder Codecs verwendet werden sollen, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden, oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Fähigkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei denen Sie bereit sind, auf Kompatibilität zu verzichten?
- Wie alt ist die älteste Version des Webbrowsers, den Sie unterstützen müssen? Müssen Sie beispielsweise in jedem Browser funktionieren, der in den letzten fünf Jahren veröffentlicht wurde, oder nur im letzten Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als am besten für den Anwendungsfall betrachtet wird, proprietär ist oder möglicherweise Lizenzgebühren erfordert, werden zwei Optionen bereitgestellt: zuerst eine offene und lizenzgebührenfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format wählen, das am besten zu Ihren Bedürfnissen passt. Die erste wird als gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am weitesten verbreitete kompatible Wahl sein, auf Kosten von etwas Qualität, Leistung und/oder Größe.

### Empfehlungen für Alltagsvideos

Schauen wir uns zunächst die besten Optionen für Videos an, die auf einer typischen Website wie einem Blog, einer Informationsseite, einer kleinen Unternehmenswebsite präsentiert werden, wo Videos verwendet werden, um Produkte vorzuführen (aber nicht, wo die Videos selbst ein Produkt sind) und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)** Container, der den **[VP9](#vp9)** Codec für Video und den **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)** Codec für Audio verwendet. Diese sind alle offene, lizenzgebührenfreie Formate, die im Allgemeinen gut unterstützt werden, obwohl nur in recht aktuellen Browsern, weshalb ein Fallback eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)** Container und der **[AVC](#avc_h.264)** (**H.264**) Video-Codec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audio-Codec. Der MP4-Container mit AVC und AAC Codecs ist eine weit verbreitete Kombination - von jedem großen Browser, tatsächlich - und die Qualität ist typischerweise gut für die meisten Anwendungsfälle. Stellen Sie jedoch sicher, dass Sie die Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}} Element erfordert ein abschließendes `</video>` Tag, unabhängig davon, ob Sie {{HTMLElement("source")}} Elemente darin haben oder nicht.

### Empfehlungen für hochqualitative Videopräsentation

Wenn es Ihr Ziel ist, Video in bestmöglicher Qualität zu präsentieren, werden Sie wahrscheinlich davon profitieren, so viele Formate wie möglich anzubieten, da die Codecs, die die beste Qualität bieten können, auch dazu neigen, die neuesten zu sein, und somit am wahrscheinlichsten Lücken in der Browser-Kompatibilität aufweisen.

1. Ein WebM-Container, der AV1 für Video und Opus für Audio verwendet. Wenn Sie in der Lage sind, das High- oder Professional-Profil beim Codieren von AV1 auf einem hohen Level wie 6.3 zu verwenden, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erreichen und dabei exzellente Videoqualität beibehalten. Die Audiodaten können mit dem Fullband-Profil von Opus bei einer Abtastrate von 48 kHz codiert werden, um die Audiobandbreite zu maximieren und nahezu den gesamten Frequenzbereich zu erfassen, der im menschlichen Gehör liegt.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container, der den [HEVC](#hevc_h.265) Codec mit einem der fortschrittlichen Hauptprofile verwendet, wie Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4 Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies exzellente Grafikqualität mit bemerkenswerter Farbwiedergabe. Zusätzlich können Sie optional HDR-Metadaten hinzufügen, um Video mit hohem Dynamikumfang bereitzustellen. Für Audio verwenden Sie den AAC-Codec bei einer hohen Abtastrate (mindestens 48 kHz, idealerweise 96 kHz) und mit komplexer Codierung statt schneller Codierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remix

Derzeit gibt es keine verlustfreien – oder auch nur nahezu verlustfreien – Video-Codecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Beispielsweise benötigt unkomprimiertes 1080p Video (1920 mal 1080 Pixel) mit 4:2:0 Chroma-Subsampling mindestens 1,5 Gbps. Die Verwendung verlustfreier Kompression wie FFV1 (die von Webbrowsern nicht unterstützt wird) könnte diese Menge möglicherweise auf rund 600 Mbps reduzieren, abhängig vom Inhalt. Das ist immer noch eine riesige Menge an Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keinen realistischen Einsatz praktikabel.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus verfügbar haben; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, das Sie tun können, ist, einen hochwertigen Codec zu wählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass er so wenig Kompression wie möglich bietet. Eine Möglichkeit, dies zu tun, ist, den Codec so zu konfigurieren, dass er "schnelle" Kompression verwendet, was von Natur aus bedeutet, dass weniger Kompression erreicht wird.

#### Video extern vorbereiten

Um Videos für Archivierungszwecke außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Kompression auf den ursprünglichen unkomprimierten Videodaten durchführt. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html) Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264) Format mit einer sehr hohen Bitrate zu codieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Während andere Codecs bei signifikant höherer Kompression möglicherweise bessere Qualitätsniveaus aufweisen, neigen ihre Encoder dazu, so langsam zu sein, dass die nahezu verlustfreie Codierung, die Sie mit dieser Kompression erhalten, bei etwa gleichem Qualitätsniveau erheblich schneller ist.

#### Videoaufzeichnung

Angesichts der Einschränkungen, wie nah Sie an verlustfrei herankommen können, könnten Sie in Betracht ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, um Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) Objekt zu erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, um [AV1](#av1) Video unter Verwendung von BT.2100 HDR in 12-Bit-Farbe mit 4:4:4 Chroma-Subsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzuzeichnen. Die resultierende Datei wird eine Bitrate von maximal 800 Mbps haben, die zwischen den Video- und Audiospuren geteilt wird. Sie müssen wahrscheinlich diese Werte anpassen, abhängig von der Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten. Diese Bitrate ist offensichtlich nicht realistisch für die Übertragung über Netzwerke und würde wahrscheinlich nur lokal verwendet werden.

Wenn wir den Wert des `codecs`-Parameters in seine durch Punkte abgegrenzten Eigenschaften aufschlüsseln, sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                             |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Die vierstellige Zeichenfolge (4CC), die den [AV1](#av1) Codec identifiziert.                                                                                                                                                                                                                            |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                              |
| `19H`  | Das Level und die Tier. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt die hohe Tier von Level 6.3 an.                                                                                                            |
| `12`   | Die Farbtiefe. Dies gibt 12 Bits pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchstgenaue Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                                         |
| `0`    | Das Monochrom-Modus-Flag. Wenn 1, würden keine Chroma-Ebenen aufgezeichnet, und alle Daten sollten ausschließlich Luma-Daten sein, was zu einem Graustufen-Bild führen würde. Wir haben 0 spezifiziert, weil wir Farbe möchten.                                                                          |
| `000`  | Der Chroma-Subsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrom-Modus-Wert 0, zeigt an, dass wir 4:4:4 Chroma-Subsampling oder keinen Farbdatenverlust wünschen. |
| `09`   | Die Farbprimärfarben, die verwendet werden sollen. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 gibt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                                  |
| `16`   | Die Übertragungscharakteristiken, die verwendet werden sollen. Dies stammt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 gibt an, dass wir die Charakteristiken für BT.2100 PQ Farbe verwenden möchten.                                           |
| `09`   | Die Matrixkoeffizienten, die verwendet werden sollen, wieder aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Leuchtdichte verwenden möchten; dies ist auch als BT.2010 YbCbCr bekannt.                    |
| `1`    | Das Video-"Full-Range"-Flag. Ein Wert von 1 zeigt an, dass wir den vollen Farbbereich verwenden möchten.                                                                                                                                                                                                 |

Die Dokumentation zu Ihren Codec-Wahlen wird wahrscheinlich Informationen enthalten, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden werden.

## Siehe auch

- [Leitfaden für Web-Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Medien-Supportproblemen in Web-Inhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die "Codecs" und "Profiles" Parameter für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg Medientypen
- {{RFC(3839)}}: MIME-Typ Registrierung für 3GPP Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ Registrierung für 3GPP2 Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ Registrierung für MPEG-4
- [Video- und Audio-Codecs in Chrome](https://www.chromium.org/audio-video/)

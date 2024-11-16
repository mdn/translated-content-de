---
title: Leitfaden für Web-Video-Codecs
slug: Web/Media/Formats/Video_codecs
l10n:
  sourceCommit: 624f8b05f419ccb93a2e3d1fc356b7e5664ac478
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Dieser Leitfaden stellt die Video-Codecs vor, die Sie im Web wahrscheinlich am häufigsten antreffen oder in Betracht ziehen werden, Zusammenfassungen ihrer Fähigkeiten und eventuelle Kompatibilitäts- und Nutzungsbedenken sowie Ratschläge, die Ihnen bei der Auswahl des richtigen Codecs für das Video Ihres Projekts helfen sollen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie nicht nur zu speichern, sondern auch über ein Netzwerk zu übertragen. Stellen Sie sich die Menge an Daten vor, die erforderlich ist, um unkomprimiertes Video zu speichern:

- Ein einzelner Frame eines Hochauflösungsvideos (1920x1080) in voller Farbe (4 Bytes pro Pixel) beträgt 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) verbrauchen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine recht typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ benötigen.

Nicht nur der erforderliche Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die für die Übertragung eines solchen unkomprimierten Videos benötigt wird, wäre enorm, bei 249 MB/s—ohne Audio und Overhead. Hier kommen Video-Codecs ins Spiel. Genau wie Audio-Codecs für die Audiodaten komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später dekodiert und wiedergegeben oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, d. h., das dekodierte Video entspricht nicht genau der Quelle. Einige Details können verloren gehen; der Grad des Verlusts hängt vom Codec und seiner Konfiguration ab, aber als allgemeine Regel gilt: Je mehr Komprimierung Sie erreichen, desto mehr verlieren Sie an Details und Treue. Einige verlustfreie Codecs existieren, werden jedoch in der Regel für Archivierung und lokale Wiedergabe verwendet und nicht für den Netzwerkbetrieb.

## Häufig verwendete Codecs

Die folgenden Video-Codecs werden am häufigsten im Web verwendet. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die ihn unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, der zusätzliche Details über den Codec enthält, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Ihnen bewusst sein müssen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (Kurzform)</th>
      <th scope="col">Vollständiger Codec-Name</th>
      <th scope="col">Unterstützte Container</th>
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
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Part 2 Visual</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
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

## Faktoren, die das kodierte Video beeinflussen

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: Spezifika bezüglich des Formats und Inhalts des Quellvideos und die Eigenschaften und Konfiguration des Codecs, der während des Kodierungsprozesses verwendet wird.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, macht in der Regel auch die resultierenden Daten größer. Somit ist es immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen kann ein größerer Qualitätsverlust zur Reduzierung der Datenmenge diesen Qualitätsverlust wert sein; in anderen Fällen ist der Qualitätsverlust inakzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Effekt des Quellvideoformats auf die kodierte Ausgabe

Das Ausmaß, in dem das Format des Quellvideos die Ausgabe beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild anders als durch einfache Pixel darstellt, macht das Format des ursprünglichen Bildes keinen Unterschied. Dinge wie Bildrate und, offensichtlich, Auflösung werden jedoch immer einen Einfluss auf die Ausgabengröße der Medien haben.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Manche haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern oder sind nicht gut darin, scharfe Kanten zu replizieren, oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder es gibt zahlreiche andere Möglichkeiten. Alles hängt von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Effekt des Quellvideoformats und -inhalts auf die
    kodierte Videoqualität und -größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Effekt auf die Qualität</th>
      <th scope="col">Effekt auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Farbtiefe (Bit-Tiefe)</th>
      <td>
        Je höher die Farbtiefe, desto höher ist die Qualität der Farbtreue, die
        im Video erzielt wird. Zudem tritt bei gesättigten Bereichen des Bildes
        (das heißt, dort wo Farben rein und intensiv sind, wie ein helles,
        reines Rot: <code>rgb(255 0 0 / 100%)</code>)bei Farbtiefen unter 10
        Bit pro Komponente (10-Bit-Farbe) ein Banding-Effekt auf, wo
        Farbverläufe nicht ohne sichtbare Abstufungen dargestellt werden
        können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren
        komprimierten Dateigrößen führen. Der bestimmende Faktor ist das
        interne Speicherformat, das für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Flüssigkeit der Bewegung im
        Bild. Bis zu einem gewissen Punkt erscheint die Bewegung umso flüssiger
        und realistischer, je höher die Bildrate ist. Irgendwann wird jedoch
        der Punkt der abnehmenden Erträge erreicht. Einzelheiten finden Sie
        unter <a href="#reduced_frame_rate">Bildrate</a> weiter unten.
      </td>
      <td>
        Sofern die Bildrate während der Kodierung nicht reduziert wird,
        verursachen höhere Bildraten größere komprimierte Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Videokomprimierung funktioniert in der Regel, indem Frames
        verglichen und Unterschiede festgestellt werden, sowie Aufzeichnungen
        erstellt werden, die genügend Informationen enthalten, um den
        vorherigen Frame so zu aktualisieren, dass er dem folgenden Frame
        ungefähr entspricht. Je größer die Unterschiede nacheinander sind,
        desto weniger effektiv ist die Komprimierung darin, das Einführen von
        Artefakten in das komprimierte Video zu vermeiden.
      </td>
      <td>
        Die Komplexität, die durch Bewegung eingeführt wird, führt zu größeren
        Zwischenframes aufgrund der höheren Anzahl von Unterschieden zwischen
        den Frames). Aus diesem und anderen Gründen gilt, je mehr Bewegung in
        einem Video vorhanden ist, desto größer wird typischerweise die
        Ausgabedatei sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Unregelmäßigkeiten im
        Bild) führt zu Variabilität. Variabilität erschwert in der Regel die
        Komprimierung und führt zu einem höheren Qualitätsverlust, da Details
        fallen gelassen werden müssen, um den gleichen Komprimierungsgrad zu
        erreichen.
      </td>
      <td>
        Je mehr Variabilität—wie Rauschen—im Bild vorhanden ist, desto
        komplexer ist der Komprimierungsprozess und desto weniger wird der
        Algorithmus wahrscheinlich erfolgreich das Bild im gleichen Ausmaß
        komprimieren können. Sofern Sie den Encoder nicht konfigurieren, um
        einige oder alle durch Rauschen verursachten Variationen zu
        ignorieren, wird das komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video, das in der gleichen Bildschirmgröße
        präsentiert wird, kann typischerweise die ursprüngliche Szene genauer
        darstellen, abgesehen von Effekten, die während der Komprimierung
        eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es.
        Dies spielt eine Schlüsselrolle bei der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, hängt von den genauen Details der Situation ab, einschließlich der Wahl des verwendeten Encoders und dessen Konfiguration. Neben allgemeinen Codec-Optionen könnte der Encoder darauf konfiguriert werden, die Bildrate zu reduzieren, Rauschen zu bereinigen und/oder die Gesamtauflösung des Videos während der Kodierung zu verringern.

### Effekt der Codec-Konfiguration auf die kodierte Ausgabe

Die Algorithmen, die zur Videokodierung verwendet werden, nutzen in der Regel eine oder mehrere allgemeinere Techniken, um ihre Kodierung durchzuführen. Generell gilt: Jede Konfigurationsoption, die dazu bestimmt ist, die Ausgabedaten des Videos zu reduzieren, wird wahrscheinlich negative Auswirkungen auf die gesamte Videoqualität haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Form der Kodierung zu wählen, die zu einer viel größeren kodierten Datei führt, jedoch eine perfekte Reproduktion des Originalvideos nach der Dekodierung ermöglicht.

Hinzu kommt, dass jedes Codierdienstprogramm Unterschiede darin haben kann, wie es das Quellvideo verarbeitet, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

<table class="standard-table">
  <caption>
    Auswirkungen der Videokodiererkonfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Effekt auf die Qualität</th>
      <th scope="col">Effekt auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Verlustfreie Kompression</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Kompression kann die gesamte Videogröße nicht annähernd so
        stark reduzieren wie verlustbehaftete Kompression; die resultierenden
        Dateien sind wahrscheinlich immer noch zu groß für den allgemeinen
        Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße werden abhängig von dem spezifischen Codec und dem Grad
        der angewandten Kompression Artefakte und andere Formen der
        Qualitätsverschlechterung auftreten.
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen kann, desto leichter
        ist es, höhere Kompressionsraten zu erreichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätseinstellung, desto ähnlicher wird das kodierte
        Video dem Originalmedium aussehen.
      </td>
      <td>
        Im Allgemeinen resultieren höhere Qualitätseinstellungen in größeren
        kodierten Videodateien; das Ausmaß, in dem dies zutrifft, variiert je
        nach Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Qualität verbessert sich in der Regel mit höheren Bitraten</td>
      <td>Höhere Bitraten führen von Natur aus zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Kodieren von Video verfügbar sind, und die Werte, die diesen Optionen zugewiesen werden, variieren nicht nur von einem Codec zum anderen, sondern auch je nach der von Ihnen verwendeten Kodierungssoftware. Die in Ihrer Kodierungssoftware enthaltene Dokumentation hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebeneffekte eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder umarrangierten Daten sichtbar negative Auswirkungen haben. Sobald ein Artefakt aufgetreten ist, kann es eine Weile andauern, weil das Video bildbasiert angezeigt wird. Jedes Bild eines Videos wird dargestellt, indem eine Reihe von Änderungen auf das derzeit sichtbare Bild angewendet wird. Das bedeutet, dass Fehler oder Artefakte sich im Laufe der Zeit summieren, was zu Störungen oder anderweitig seltsamen oder unerwarteten Abweichungen im Bild führt, die für eine Zeit lang bestehen bleiben.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodische **Schlüsselframes** (auch bekannt als **Intra-Frames** oder **i-Frames**) in die Videodatei eingefügt. Die Schlüsselframes sind vollständige Frames, die verwendet werden, um sichtbare Schäden oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was beim Rekonstruieren aus den kodierten Daten nicht mehr so aussieht wie vor der Komprimierung. Es gibt viele Formen von Aliasing; die häufigsten, die Sie sehen könnten, sind:

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
          ist ein großräumiges räumliches Interferenzmuster, das entsteht, wenn
          ein Muster im Quellbild und die Arbeitsweise des Encoders räumlich
          leicht abweichen. Die vom Encoder erzeugten Artefakte führen dann
          beim Dekodieren zu seltsamen, wirbelnden Effekten in dem Muster des
          Quellbildes.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="eine Ziegelwand zeigt einen wirbelnden Effekt ähnlich Wellen aufgrund des Moiré-Musters" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt sein
          sollten, eine gezackte Erscheinung annehmen und wie ein Satz
          Treppenstufen aussehen. Dies ist der Effekt, der durch
          "Anti-Aliasing"-Filter reduziert wird.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die wegen Alias-Bildung einen Treppeneffekt zeigen
          " src="staircase-effect.jpg"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagon-wheel-Effekt</h4>
        <p>
          Der <strong>Wagon-wheel-Effekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, der häufig im Film zu sehen ist, bei dem
          ein drehendes Rad aufgrund einer Wechselwirkung zwischen Bildrate und
          Kompressionsalgorithmus mit falscher Geschwindigkeit oder gar
          rückwärts zu rotieren scheint. Der gleiche Effekt kann bei jedem
          sich wiederholenden Muster auftreten, das sich bewegt, wie z.B. bei
          den Schienen einer Eisenbahnlinie, Pfosten entlang der Straßenseite
          usw. Dies ist ein zeitliches (zeitbasiertes) Aliasing-Problem; die
          Geschwindigkeit der Rotation stört die Frequenz der während der
          Kompression oder Kodierung durchgeführten Abtastungen.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Drehendes Rad aufgrund von Aliasing, das einen Wagon-wheel-Effekt verursacht." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farbsaum

**Farbsaum** ist eine Art visuelles Artefakt, das als unerwünschte Farben entlang der Kanten von farbigen Objekten innerhalb der Szene auftritt. Diese Farben haben keine beabsichtigte farbliche Beziehung zum Inhalt des Frames.

### Verlust von Schärfe

Das Entfernen von Daten während des Videokodierungsprozesses erfordert, dass einige Details verloren gehen. Wenn genügend Kompression angewendet wird, könnten Teile oder möglicherweise das gesamte Bild an Schärfe verlieren und eine leicht unscharfe oder verschwommene Erscheinung annehmen.

Ein Verlust an Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text—insbesondere kleiner Text—sehr detailorientierter Inhalt ist, bei dem geringfügige Änderungen die Lesbarkeit erheblich beeinflussen können.

### Klingeleffekte

Verlustbehaftete Kompressionsalgorithmen können **[Ringing](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln kontaminiert sind, die vom Kompressionsalgorithmus erzeugt wurden. Dies geschieht, wenn ein Algorithmus Blöcke verwendet, die sich über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund erstrecken. Dies ist besonders bei höheren Komprimierungsstufen üblich.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und rosa Fransen um die Kanten des Sterns oben (sowie das Stufen- und andere signifikante Kompressionsartefakte). Diese Fransen sind der Klingeleffekt. Der Klingeleffekt ähnelt in gewisser Hinsicht dem [Moskito-Rauschen](#moskito-rauschen), außer dass der Klingeleffekt mehr oder weniger stabil und unverändert ist, während das Moskito-Rauschen flimmert und sich bewegt.

Der Klingeleffekt ist ein weiteres Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisieren

**Posterisierung** tritt auf, wenn die Komprimierung zu einem Verlust an Farbdetails in Verläufen führt. Anstatt sanfter Übergänge durch die verschiedenen Farben in einem Bereich, wird das Bild klobig, mit Farbblöcken, die das ursprüngliche Erscheinungsbild des Bildes annähernd darstellen.

![Weißkopfseeadler-Foto mit klotziger Auflösung.](posterize-effect.jpg)

Beachten Sie die Klobigkeit der Farben im Federkleid des Weißkopfseeadlers im obigen Foto (und der Schnee-Eule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisierungseffekte verloren.

### Konturierung

**Konturierung** oder **Farbbanding** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Infolgedessen zeigen die Inhalte des Videos ein "geschichtetes" Aussehen, wo anstelle glatter Farbverläufe und Übergänge die Übergänge von Farbe zu Farbe abrupt sind und Streifen von Farben erscheinen lassen.

![Beispiel eines Bildes, dessen Kompression Konturierung eingeführt hat](contouring-effect.jpg)

Im obigen Beispielbild beachten Sie, wie der Himmel Bänder unterschiedlicher Blautöne hat, anstatt ein gleichmäßiger Farbverlauf zu sein, wenn sich die Himmelsfarbe dem Horizont nähert. Dies ist der Kontureffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein zeitbasiertes Artefakt, das als Rauschen oder **Kantenaktivität** auftritt, das als flimmernder Dunst oder Schimmer erscheint, der ungefähr den Außenkanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann dem [Klingeleffekt](#klingeleffekte) ähnlich aussehen.

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich des Himmels um die Brücke. In der oberen rechten Ecke zeigt ein eigens angefertigter Ausschnitt eine Nahaufnahme eines Teils des Bildes, das Moskito-Rauschen aufweist.

Moskito-Rausch-Artefakte sind am häufigsten in MPEG-Videos zu finden, können aber auch bei jedem Algorithmus auftreten, der eine diskrete Kosinustransformation (DCT) verwendet; dies umfasst z.B. auch JPEG-Bilder.

### Bewegungsentschädigung für Blockgrenzen-Artefakte

Die Videokomprimierung funktioniert in der Regel, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, einen Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera stationär ist oder die Objekte im Rahmen relativ stationär sind, aber wenn sich viel im Frame bewegt, können die Unterschiede zwischen den Frames so groß sein, dass die Komprimierung nichts nützt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegungen (entweder der Kamera oder der Objekte im Sichtfeld) sucht und bestimmt, wie viele Pixel das bewegte Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung zusammen mit einer Beschreibung der Pixel gespeichert, die bewegt wurden und nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die beweglichen Objekt

## Codec Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkomprimierungsraten als [VP9](#empfehlungen_für_alltägliche_videos) und [H.265/HEVC](#hevc_h.265) sowie bis zu 50 % höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und für die Verwendung durch das {{HTMLElement("video")}} Element und durch [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, die steigenden Support für Farbtiefen und Chroma-Subsampling unterstützen. Darüber hinaus wird eine Reihe von **Levels** angegeben, von denen jedes Grenzen für eine Reihe von Videoattributen definiert. Diese Attribute umfassen Bildabmessungen, Bildbereich in Pixeln, Anzeige- und Decodierraten, durchschnittliche und maximale Bitraten sowie Grenzwerte für die Anzahl der Kacheln und Kachelspalten, die im Kodierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet das AV1-Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es ist jedoch erwähnenswert, dass zumindest für Firefox und Chrome die Levels derzeit bei der Software-Dekodierung ignoriert werden und der Decoder sein Bestes tut, um das Video mit den bereitgestellten Einstellungen abzuspielen. Aus Kompatibilitätsgründen sollten Sie sich jedoch an die Grenzen des gewählten Levels halten.

Der Hauptnachteil von AV1 zurzeit ist, dass es sehr neu ist und der Support noch in die meisten Browser integriert wird. Zusätzlich werden Encoder und Decoder noch für die Leistung optimiert, und Hardware-Encoder und -Decoder sind größtenteils noch in der Entwicklung statt in der Produktion. Daher dauert das Kodieren eines Videos ins AV1-Format sehr lange, da alle Arbeiten in Software erledigt werden.

Derzeit, aufgrund dieser Faktoren, ist AV1 noch nicht bereit, Ihre erste Wahl des Videocodecs zu sein, aber Sie sollten darauf achten, es in Zukunft nutzen zu können.

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
            >Tabellen der Levels</a
          > der AV1-Spezifikation, die die maximalen Auflösungen und Raten bei jedem Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Variiert je nach Level; Level 2.0 hat beispielsweise ein Maximum von 30 FPS, während Level 6.3 bis zu 120 FPS erreichen kann
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
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension einen Wert zwischen diesen annehmen kann
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
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>
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
      <th scope="row">Unterstützende/wartende Organisation</th>
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
      <td>Lizenzgebührenfrei, Open-Standard</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

Das **Advanced Video Coding** (**AVC**) Standard der MPEG-4-Spezifikationen wird durch die identische ITU H.264-Spezifikation und die MPEG-4-Part-10-Spezifikation definiert. Es ist ein bewegungskompensationsbasiertes Codec, das heute weit verbreitet für alle Arten von Medien verwendet wird, einschließlich Fernsehausstrahlungen, {{Glossary("RTP", "RTP")}} Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist sehr flexibel und bietet eine Reihe von Profilen mit unterschiedlichen Fähigkeiten; das Constrained Baseline Profile ist zum Beispiel für den Einsatz bei Videokonferenzen und mobilen Szenarien konzipiert, wobei weniger Bandbreite als das Main Profile (das in einigen Regionen für SDTV genutzt wird) oder das High Profile (das für Blu-Ray-Disc-Videos benutzt wird) erforderlich ist. Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chroma-Subsampling; das High-10-Profil fügt Unterstützung für 10-Bit-Farbe hinzu, und erweiterte Formen von High-10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC hat auch besondere Funktionen wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), was unter anderem die Produktion von stereoskopischen Videos ermöglicht.

AVC ist ein proprietäres Format und es gibt zahlreiche Patente von verschiedenen Parteien zu seinen Technologien. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA-Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format fordert, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs enthält) _müssen_ AVC als Codec in WebRTC-Anrufen unterstützen. Während Webbrowser dazu nicht verpflichtet sind, tun es einige dennoch.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen Hardware-Encodierung und -Decodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzierungsanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Variiert je nach Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS ist möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >, obwohl es möglich ist, verlustfreie Makroblocks innerhalb des Bildes zu erstellen
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
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von AVC in Firefox hängt von den eingebauten oder vorinstallierten Codecs des Betriebssystems für AVC und dessen Container ab, um Patentbedenken zu vermeiden.
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/wartende Organisation</th>
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

Der **H.263** Codec der ITU wurde hauptsächlich für den Einsatz in Situationen mit geringer Bandbreite entwickelt. Insbesondere wurde er für Videokonferenzen über PSTN (öffentliche Telefonnetze), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme) optimiert. Trotz seiner Optimierung für Netzwerke mit niedriger Bandbreite ist er relativ CPU-intensiv und kann auf weniger leistungsstarken Computern möglicherweise nicht ausreichend Leistung erbringen. Das Datenformat ähnelt dem von MPEG-4 Part 2.

H.263 wurde im Web nie weit verbreitet genutzt. Abwandlungen von H.263 wurden als Basis für andere proprietäre Formate verwendet, wie etwa Flash-Video oder den Sorenson-Codec. Allerdings hat kein führender Browser H.263-Unterstützung standardmäßig integriert. Bestimmte Medien-Plugins haben die Unterstützung für H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Bezug auf die maximale Bitrate pro Bild (Picture), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann kann das Video diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt von diesem, der Bildrate, der Kompression sowie der gewählten Auflösung und Blockformat ab.

H.263 wurde durch H.264 ersetzt und gilt daher als ein veraltetes Medienformat, das Sie in der Regel vermeiden sollten, wenn möglich. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, besteht darin, dass Sie auf sehr alten Geräten Unterstützung benötigen, auf denen H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, einschließlich Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm, und so weiter. Um H.263 zu verwenden, sind Sie gesetzlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

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
          Version 1 von H.263 legt eine Reihe von Bildgrößen fest, die
          unterstützt werden. Spätere Versionen können zusätzliche Auflösungen
          unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixeln sowie die Anzahl der Zeilen mit Luminanz- und
        Chrominanz-Mustern, die für jedes Bild verwendet werden
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
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime"
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
      <th scope="row">Unterstützende/wartende Organisation</th>
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
        Proprietär; es sind entsprechende Lizenzen erforderlich. Beachten Sie,
        dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec wird durch ITU's **H.265** sowie durch MPEG-H Part 2 (der noch in Entwicklung befindliche Nachfolger von MPEG-4) definiert. HEVC wurde entwickelt, um eine effiziente Kodierung und Dekodierung von Videos in Größen zu unterstützen, die sehr hohe Auflösungen (einschließlich 8K Video) umfassen, mit einer Struktur, die speziell entwickelt wurde, um Software von modernen Prozessoren profitieren zu lassen. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie bei [AVC](#avc_h.264), jedoch mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Coding Tree Unit (CTU) – ähnlich dem Makroblock, der in früheren Codecs verwendet wird – aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede Chroma-Probe, die in derselben Coding Tree Unit verwendet werden, zusammen mit allen erforderlichen Syntaxelementen. Diese Struktur unterstützt eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-Bit pro Komponente mit 4:2:0 Chroma-Subsampling unterstützt. Auch interessant ist, dass 4:4:4 Video speziell behandelt wird. Anstelle der Luma-Samples (die die Pixel des Bildes im Graustufen darstellen) und der Cb und Cr Samples (die angeben, wie die Graustufen in Farb-Pixel umgewandelt werden) werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann während des Renderns kombiniert werden, um ein vollständiges Farbbild zu erzeugen.

HEVC ist ein proprietäres Format und wird von einer Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA verwaltet](https://www.via-la.com/licensing-2/hevc-vvc/); Gebühren werden an Entwickler erhoben, nicht an Inhaltsproduzenten und -verbreiter. Überprüfen Sie die neuesten Lizenzierungsbedingungen und Anforderungen, bevor Sie sich entscheiden, ob Sie HEVC in Ihrer App oder Website verwenden!

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
          Die unten stehenden Informationen sind für die wichtigsten Profile angegeben. Es gibt eine Reihe anderer Profile, die hier nicht enthalten sind.
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
              <td>Nein</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome unterstützt HEVC für Geräte mit Hardware-Support auf Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardware-Support auf Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat denselben Support-Status wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Decoder.
        </p>
        <p>Mozilla wird HEVC nicht unterstützen, solange es durch Patente belastet ist.</p>
        <p>Opera und andere auf Chromium basierende Browser haben denselben Support-Status wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder später.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
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
      <th scope="row">Unterstützende/wartende Organisation</th>
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
        Proprietär; bestätigen Sie Ihre Compliance mit den
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des MPEG-4-Part-2-Visual-Standards. Im Allgemeinen wird MPEG-4 Part 2 Video von niemandem verwendet wegen des mangelnden überzeugenden Wertes im Vergleich zu anderen Codecs, aber MP4V-ES wird trotzdem teilweise auf mobilen Geräten genutzt. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist es, MPEG-4 Audio und Video über eine {{Glossary("RTP", "RTP")}} Sitzung zu streamen. MP4V-ES wird jedoch auch verwendet, um MPEG-4 Audio und Video über eine mobile Verbindung mit [3GP](/de/docs/Web/Media/Formats/Containers#3gp) zu übertragen.

Sie wollen dieses Format fast sicher nicht verwenden, da es von keinem wichtigen Browser in einer bedeutenden Weise unterstützt wird und es ziemlich veraltet ist. Dateien dieses Typs sollten die Endung `.mp4v` haben, werden aber gelegentlich fälschlicherweise als `.mp4` gekennzeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Keine spezifische Grenze; eingeschränkt nur durch die Datenrate</td>
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
        YCrCb mit Chroma-Subsampling (4:2:0, 4:2:2, und 4:4:4) unterstützt; bis zu
        12 Bits pro Komponente
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
          <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>
          Containern.
        </p>
        <p>Chrome unterstützt MP4V-ES nicht; jedoch ChromeOS.</p>
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/wartende Organisation</th>
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

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde Anfang der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 allein von MPEG entwickelt, ohne die Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2 Decoder auch MPEG-1 Video wiedergeben kann, ist es verbreitet mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr in Bezug auf MPEG-1 Video, sodass es ohne Lizenzierungsbedenken verwendet werden darf. Allerdings unterstützen nur wenige Webbrowser MPEG-1 Video ohne die Unterstützung eines Plugins, und da der Einsatz von Plugins in Webbrowsern veraltet ist, sind diese Plugins in der Regel nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für die Verwendung auf Websites und in Webanwendungen.

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
      <th scope="row">Unterstützende/wartende Organisation</th>
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
        Proprietär; jedoch sind alle Patente abgelaufen, sodass MPEG-1 frei genutzt werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert wird, und wird auch gelegentlich mit seiner {{Glossary("ITU", "ITU")}} Bezeichnung H.262 bezeichnet. Es ähnelt sehr dem MPEG-1 Video – tatsächlich kann jeder MPEG-2-Player automatisch MPEG-1 ohne spezielle Maßnahmen verarbeiten – mit der Ausnahme, dass es erweitert wurde, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 in die Lage zu versetzen, die Standardauflösung für Fernsehen zu komprimieren, sodass interlaced Video ebenfalls unterstützt wird. Die Standardauflösung der Kompressionsrate und die Qualität des resultierenden Videos erfüllten die Anforderungen so gut, dass MPEG-2 der Hauptvideocodec für DVD-Video-Medien geworden ist.

MPEG-2 verfügt über mehrere Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Levels verfügbar, die jeweils die Attribute des Videos steigern, wie Bildrate, Auflösung, Bitrate und so weiter. Die meisten Profile verwenden Y'CbCr mit 4:2:0-Chroma-Subsampling, aber fortschrittlichere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Levels, von denen jedes Unterstützung für größere Bilddimensionen und Bitraten bietet. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards) Spezifizierung für Fernsehen in Nordamerika MPEG-2 Video in hoher Auflösung unter Verwendung des Main Profile at High Level, das 4:2:0 Video bei 1920 x 1080 (30 FPS) und 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbps ermöglicht.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern veraltet ist, sind diese Plugins in der Regel nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für die Nutzung auf Websites und in Webanwendungen.

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
        Y'CbCr mit 4:2:0 Chroma-Subsampling in den meisten Profilen; die "High" und
        "4:2:2" Profile unterstützen ebenfalls 4:2:2 Chroma-Subsampling.
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
        <a href="/de/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>, MPEG-TS (MPEG Transport Stream), <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>, <a href="/de/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
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
      <th scope="row">Unterstützende/wartende Organisation</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen, mit Ausnahme von Malaysia (Stand 1. Oktober 2024), sodass MPEG-2 außerhalb Malaysias frei genutzt werden kann.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat extrem geringe Nutzung, und die Unterstützung wird von den Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und kostenloser Videocodec, der ohne Lizenzgebühren oder Lizenzen verwendet werden kann. Theora ist in Bezug auf die Qualität und Kompressionsraten vergleichbar mit MPEG-4 Part 2 Visual und AVC, was es zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Video-Codierung macht. Aber sein Status, frei von jeglichen Lizenzierungsbedenken und seine vergleichsweise geringen Anforderungen an die CPU-Ressourcen, machen es zu einer beliebten Wahl für viele Software- und Webprojekte. Der geringe CPU-Einfluss ist besonders nützlich, da es keine Hardware-Decoder für Theora gibt.

Theora war ursprünglich auf dem VC3 Codec von On2 Technologies basiert. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann in den Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt, ist 8 Bit pro Komponente heute immer noch das meistgenutzte Farbformat, so dass dies in den meisten Fällen nur ein kleines Ärgernis ist. Auch kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil ist jedoch, dass es nicht von Safari unterstützt wird, was Theora nicht nur auf macOS, sondern auf allen Millionen von iPhones und iPads unzugänglich macht.

Das [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) bietet zusätzliche Details über Theora sowie das Ogg-Containerformat, in dem es verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Willkürlich; jeder ungleich Null Wert wird unterstützt. Die Bildrate wird
        als 32-Bit-Zähler und 32-Bit-Nenner angegeben, um nicht-ganzzahlige
        Bildraten zu ermöglich.
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
        Jede Kombination aus Breite und Höhe bis zu 1.048.560 x 1.048.560 Pixel
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0, 4:2:2, und 4:4:4 Chroma-Subsampling bei 8 Bits pro
        Komponente
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
          Während Theora keine Variable Bildrate (VFR) innerhalb eines einzigen
          Streams unterstützt, können mehrere Streams innerhalb einer einzigen Datei verkettet werden,
          und jeder dieser Streams kann seine eigene Bildrate haben, was im Wesentlichen VFR ermöglicht.
          Dies ist jedoch unpraktisch, wenn sich die Bildrate häufig ändern muss.
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
      <td><a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/wartende Organisation</th>
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

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies entwickelt. Nach dem Kauf von On2 veröffentlichte Google VP8 als ein offenes und lizenzgebührenfreies Videoformat unter dem Versprechen, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 vergleichbar mit [AVC](#avc_h.264).

Wenn es vom Browser unterstützt wird, erlaubt VP8 Video mit einem Alphakanal, was das Abspielen des Videos mit dem Hintergrund, der durch das Video zu einem durch jeden Pixel angegebenen Grad zu sehen ist, ermöglicht.

Es gibt eine gute Browserunterstützung für VP8 in HTML-Inhalten, insbesondere in [WebM](/de/docs/Web/Media/Formats/Containers#webm)-Dateien.
Das macht VP8 zu einer guten Wahl für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl wäre, wenn es Ihnen zur Verfügung steht.
Webbrowser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, aber nicht alle Browser, die dies tun, unterstützen es auch in HTML-Audio- und Videoelementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Willkürlich; kein Maximum, es sei denn, es werden levelbasierte Einschränkungen durchgesetzt</td>
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
      <td>Y'CbCr mit 4:2:0 Chroma-Subsampling bei 8 Bits pro Komponente</td>
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
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und neuere Versionen unterstützen VP8 nur in WebRTC-Verbindungen.</p>
        <p>Firefox unterstützt VP8 nur in MSE, wenn kein H.264 Hardware-Decoder vorhanden ist. Verwenden Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu prüfen.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja; VP8 ist einer der spec-erforderlichen Codecs für WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/wartende Organisation</th>
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
Wie VP8 ist VP9 vollständig offen und lizenzgebührenfrei.
Seine Kodierungs- und Dekodierungsleistung ist vergleichbar oder geringfügig schneller als die von AVC, jedoch mit besserer Qualität.
Die kodierte Videoqualität von VP9 ist vergleichbar mit der von HEVC bei ähnlichen Bitraten.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0 Chroma-Subsampling-Stufen, aber seine Profile umfassen Unterstützung für tiefere Farben und die gesamte Bandbreite von Chroma-Subsampling-Modi.
Es unterstützt mehrere HDR-Implementierungen und bietet erhebliche Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von vielen Browsern unterstützt, und Hardwareimplementierungen des Codecs sind ziemlich häufig.
VP9 ist einer der beiden von [WebM](/de/docs/Web/Media/Formats/Containers#webm) vorgeschriebenen Videocodecs (der andere ist [VP8](#auswahl_eines_videocodecs)).
Beachten Sie jedoch, dass die Unterstützung für WebM und VP9 in Safari erst mit Version 14.1 eingeführt wurde. Wenn Sie sich für die Verwendung von VP9 entscheiden, sollten Sie daher ein Fallback-Format wie AVC oder HEVC für iPhone-, iPad- und Mac-Benutzer bieten.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und falls erforderlich, ein Fallback-Video bereitstellen können).
Dies gilt insbesondere, wenn Sie einen offenen Codec anstelle eines proprietären bevorzugen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Willkürlich; kein Maximum, es sei denn, es werden levelbasierte Einschränkungen durchgesetzt</td>
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
      <th scope="row">Variable Bildrate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p>
          Firefox unterstützt VP8 nur in MSE, wenn kein H.264 Hardware-Decoder vorhanden ist. Verwenden
          Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu prüfen.
        </p>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} / <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/wartende Organisation</th>
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

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen, um sich vorzubereiten:

- Möchten Sie ein offenes Format verwenden, oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei denen Sie die Kompatibilität opfern möchten?
- Wie alt ist die älteste Version eines Webbrowsers, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem Browser arbeiten, der in den letzten fünf Jahren veröffentlicht wurde, oder nur im letzten Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der für den Anwendungsfall als am besten geeignete Codec proprietär ist oder Lizenzgebühren erfordern könnte, werden zwei Optionen angeboten: zuerst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine Version jedes Videos anbieten können, können Sie das Format wählen, das am besten zu Ihren Anforderungen passt. Die erste Option wird als gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am weitesten kompatible Wahl sein, auf Kosten einer gewissen Qualität, Leistung und/oder Größe.

### Empfehlungen für alltägliche Videos

Zunächst betrachten wir die besten Optionen für Videos, die auf einer typischen Website präsentiert werden, wie etwa ein Blog, eine Informationsseite, eine kleine Unternehmenswebsite, auf der Videos zur Demonstration von Produkten verwendet werden (aber nicht, wo die Videos selbst ein Produkt sind) und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Formats/Containers#webm)**-Container, der den **[VP9](#empfehlungen_für_alltägliche_videos)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Diese sind alle offene, lizenzfreie Formate, die im Allgemeinen gut unterstützt werden, obwohl nur in relativ neuen Browsern, weshalb eine Fallback-Option eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audiocodec. Dies liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs eine weit unterstützte Kombination darstellt – tatsächlich von jedem großen Browser – und die Qualität in der Regel für die meisten Anwendungsfälle gut ist. Stellen Sie jedoch sicher, dass Sie die Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert einen schließenden `</video>`-Tag, unabhängig davon, ob Sie irgendwelche {{HTMLElement("source")}}-Elemente innerhalb haben.

### Empfehlungen für hochqualitative Video-Präsentation

Wenn Ihr Ziel ist, Video in höchstmöglicher Qualität zu präsentieren, profitieren Sie wahrscheinlich davon, so viele Formate wie möglich anzubieten, da die Codecs, die die beste Qualität bieten, oft auch die neuesten sind und somit die Wahrscheinlichkeit besteht, dass es Lücken in der Browser-Kompatibilität gibt.

1. Ein WebM-Container mit AV1 für Video und Opus für Audio. Wenn Sie in der Lage sind, das High- oder Professional-Profil beim Codieren von AV1 zu verwenden, auf einem hohen Level wie 6.3, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erreichen, während Sie eine hervorragende Videoqualität beibehalten. Indem Sie Ihr Audio mit dem Fullband-Profil von Opus bei einer Abtastrate von 48 kHz codieren, maximieren Sie die erfasste Audiobandbreite und erfassen nahezu den gesamten Frequenzbereich, der im menschlichen Hörbereich liegt.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container, der den [HEVC](#hevc_h.265)-Codec mit einem der fortgeschrittenen Main-Profile verwendet, wie beispielsweise Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4 Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies eine ausgezeichnete Grafikqualität mit bemerkenswerter Farbwiedergabe. Zusätzlich können Sie optional HDR-Metadaten einfügen, um Video mit hohem Dynamikumfang zu bieten. Für Audio verwenden Sie den AAC-Codec mit einer hohen Abtastrate (mindestens 48 kHz, idealerweise 96 kHz) und kodieren Sie mit komplexem Codieren anstelle von schnellem Codieren.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Derzeit gibt es keine verlustfreien – oder auch nur nahezu verlustfreien – Videocodecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Zum Beispiel benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0-Chroma-Subsampling mindestens 1,5 Gbps. Mit verlustfreier Kompression wie FFV1 (die von Webbrowsern nicht unterstützt wird) könnte das möglicherweise auf etwa 600 Mbps reduziert werden, abhängig vom Inhalt. Das ist immer noch eine riesige Datenmenge, die jede Sekunde durch eine Verbindung gepumpt werden muss und derzeit für keinen praktischen Anwendungsfall realistisch ist.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus haben; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec zu wählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass so wenig wie möglich komprimiert wird. Eine Möglichkeit, dies zu tun, besteht darin, den Codec so zu konfigurieren, dass er "schnelle" Kompression verwendet, was bedeutet, dass weniger Kompression erreicht wird.

#### Externe Video-Vorbereitung

Um Video zu Archivierungszwecken außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die ursprünglichen unkomprimierten Videodaten komprimiert. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 infile
```

Obwohl andere Codecs möglicherweise bessere bestenfalls Qualitätsstufen haben, wenn sie das Video erheblich komprimieren, sind ihre Encoder in der Regel so langsam, dass die nahezu verlustfreie Codierung, die Sie mit dieser Komprimierung erhalten, bei etwa dem gleichen Gesamtqualitätsniveau wesentlich schneller ist.

#### Videoaufnahme

Angesichts der Beschränkungen, wie nah Sie an verlustfrei herankommen können, sollten Sie möglicherweise [AVC](#avc_h.264) oder [AV1](#h.263) verwenden. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) zum Aufnehmen von Videos verwenden, könnten Sie Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, um [AV1](#h.263)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chroma-Subsampling und [FLAC](/de/docs/Web/Media/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzuzeichnen. Die resultierende Datei wird eine Bitrate von maximal 800 Mbps verwenden, die zwischen den Video- und Audiotracks geteilt wird. Sie müssen diese Werte wahrscheinlich an die Hardwareleistung, Ihre Anforderungen und die spezifischen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Übertragung über ein Netzwerk und würde wahrscheinlich nur lokal verwendet werden.

Wenn wir den Wert des `codecs`-Parameters in seine punktuell gegliederten Eigenschaften aufschlüsseln, sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                                    |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Der vier Zeichen umfassende Code (4CC), der den [AV1](#h.263)-Codec identifiziert.                                                                                                                                                                                                                              |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                                     |
| `19H`  | Das Level und die Stufe. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt die High-Stufe von Level 6.3 an.                                                                                                                 |
| `12`   | Die Farbtiefe. Dies gibt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchst-genaue Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                                                |
| `0`    | Die monochrome Modus-Flagge. Wenn 1, dann würden keine Chroma-Ebenen aufgezeichnet und alle Daten sollten strikt Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 angegeben, weil wir Farbe wollen.                                                                                              |
| `000`  | Das Chroma-Subsampling-Verfahren, das aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation stammt. Ein Wert von 000, kombiniert mit dem Monochrom-Modus-Wert 0, gibt an, dass wir 4:4:4 Chroma-Subsampling oder keinen Verlust von Farbdaten wollen. |
| `09`   | Die zu verwendenden Farbursprünge. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 gibt an, dass wir BT.2020-Farben verwenden möchten, die für HDR verwendet werden.                                                      |
| `16`   | Die zu verwendenden Transfercharakteristiken. Auch dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 gibt an, dass wir die Charakteristika für BT.2100 PQ-Farbe verwenden möchten.                                                                  |
| `09`   | Die zu verwendenden Matrixkoeffizienten, ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 spezifiziert, dass wir BT.2020 mit variabler Leuchtdichte verwenden möchten; dies ist auch bekannt als BT.2010 YbCbCr.                                |
| `1`    | Die "volle Reichweite" Flagge für Video. Ein Wert von 1 gibt an, dass wir die vollständige Farbpalette verwenden möchten.                                                                                                                                                                                       |

Die Dokumentation zu Ihren Codec-Auswahlen bietet wahrscheinlich Informationen, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden werden.

## Siehe auch

- [Leitfaden zu Webaudio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs)
- [Formate für Mediencontainer (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
- [Umgang mit Problemen bei der Medienunterstützung in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die "Codecs"- und "Profile"-Parameter für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Mediendateitypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

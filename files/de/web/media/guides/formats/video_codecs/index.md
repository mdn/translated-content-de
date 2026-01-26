---
title: Leitfaden für Web-Video-Codecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Dieser Leitfaden stellt die Video-Codecs vor, die Sie am wahrscheinlichsten im Web verwenden oder in Betracht ziehen werden, fasst ihre Fähigkeiten sowie eventuelle Kompatibilitäts- und Nutzungsprobleme zusammen und gibt Ratschläge, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der enormen Größe von unkomprimierten Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie zu speichern, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Menge an Daten vor, die benötigt wird, um unkomprimiertes Video zu speichern:

- Ein einzelnes Bild eines High-Definition-Videos (1920x1080) in voller Farbe (4 Bytes pro Pixel) benötigt 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (~249 MB) benötigen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine recht typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ in Anspruch nehmen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die benötigt wird, um ein unkomprimiertes Video zu übertragen. Diese würde 249 MB/Sek. betragen – Audio und Overhead nicht eingeschlossen. Hier kommen Video-Codecs ins Spiel. Genau wie Audio-Codecs es für die Klangdaten tun, komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details können verloren gehen; der Grad des Verlusts hängt vom Codec und dessen Konfiguration ab, aber als allgemeine Regel gilt: Je mehr Kompression Sie erreichen, desto mehr Detail- und Treueverlust wird auftreten. Einige verlustfreie Codecs existieren, werden jedoch typischerweise zur Archivierung und Speicherung für die lokale Wiedergabe verwendet und nicht für die Verwendung im Netzwerk.

## Häufige Codecs

Die folgenden Video-Codecs werden am häufigsten im Web verwendet. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die ihn unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, der zusätzliche Details über den Codec enthält, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, derer Sie sich bewusst sein sollten.

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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: Spezifische Informationen über das Format und den Inhalt des Quellvideos sowie die Eigenschaften und Konfiguration des Codecs, der bei der Kodierung des Videos verwendet wird.

Die einfachste Richtlinie ist die folgende: Alles, was das kodierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, führt in der Regel auch dazu, dass die resultierenden Daten größer werden. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In manchen Situationen lohnt es sich, mehr Qualität zu opfern, um die Datenmenge zu reduzieren; in anderen Fällen ist der Qualitätsverlust inakzeptabel, und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Einfluss des Quellvideoformats auf das kodierte Ausgabeergebnis

Der Grad, in dem das Format des Quellvideos das Ausgabeergebnis beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild anderweitig mit einer anderen Methode als einfachen Pixeln darstellt, spielt das Format des Originalbildes keine Rolle. Dinge wie Bildrate und Auflösung werden jedoch immer einen Einfluss auf die Ausgabengröße der Medien haben.

Darüber hinaus hat jeder Codec seine Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern, können scharfe Kanten nicht gut reproduzieren oder neigen dazu, Details in dunklen Bereichen zu verlieren oder jede andere mögliche Schwäche. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss des Quellvideoformats und -inhalts auf die
    kodierte Videoqualität und -größe
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
        Je höher die Farbtiefe, desto höher ist die Qualität der
        Farbtiefe im Video. In gesättigten Bildteilen (d.h. wo Farben rein und
        intensiv sind, z. B. ein helles, reines Rot: <code>rgb(255 0 0 / 100%)</code>)
        können Farbtiefen unter 10 Bit pro Komponente (10-Bit-Farbe) Streifenbildung
        zulassen, bei der Farbverläufe nicht ohne sichtbare Abstufungen der
        Farben dargestellt werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren
        komprimierten Dateigrößen führen. Der bestimmende Faktor ist das
        verwendete interne Speicherformat für die komprimierten Daten.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Flüssigkeit der Bewegung im
        Bild. Bis zu einem gewissen Grad, je höher die Bildrate, desto flüssiger
        und realistischer wird die Bewegung erscheinen. Letztlich wird der
        Punkt der abnehmenden Erträge erreicht. Siehe <a href="#reduced_frame_rate">Bildrate</a> unten für Details.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird während der Kodierung nicht verringert,
        führen höhere Bildraten zu größeren komprimierten Videodateigrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Komprimierung von Video arbeitet typischerweise, indem
        Frames verglichen, die Unterschiede erkannt und Datensätze erstellt
        werden, die genügend Informationen enthalten, um den vorherigen Frame zu
        aktualisieren und das Aussehen des folgenden Frames zu approximieren.
        Je mehr aufeinanderfolgende Frames sich voneinander unterscheiden,
        desto größer sind diese Unterschiede, und desto weniger effektiv ist die
        Komprimierung beim Vermeiden der Einführung von Artefakten in das
        komprimierte Video.
      </td>
      <td>
        Die Komplexität, die durch Bewegung eingeführt wird, führt zu größeren
        Zwischen-Frames aufgrund der höheren Anzahl an Unterschieden zwischen
        den Frames. Aus diesem und anderen Gründen gilt: Je mehr Bewegung in
        einem Video vorhanden ist, desto größer wird die Ausgabedatei in der
        Regel sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder anderes Krümeliges im Bild)
        führt zu Variabilität. Variabilität erschwert in der Regel die
        Komprimierung, was zu mehr Qualitätsverlust führt, da Details
        geopfert werden müssen, um dasselbe Kompressionsniveau zu erreichen.
      </td>
      <td>
        Je mehr Variabilität – wie Rauschen – im Bild vorhanden ist, desto
        komplexer ist der Komprimierungsprozess, und desto weniger Erfolg wird
        der Algorithmus beim Erreichen desselben Kompressionsgrades haben.
        Sofern Sie den Encoder nicht so konfigurieren, dass er einige oder
        alle durch Rauschen verursachten Variationen ignoriert, wird das
        komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höhere Auflösungsqualität, dargestellt in derselben Bildschirmgröße,
        wird normalerweise in der Lage sein, die Originalszene präziser
        darzustellen, es sei denn, durch Kompressionsprozesse eingeführte
        Effekte verhindern dies.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies spielt
        eine entscheidende Rolle bei der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Der Grad, zu dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und seiner Konfiguration. Neben allgemeinen Codec-Optionen könnte der Encoder so konfiguriert sein, dass die Bildrate reduziert, das Rauschen entfernt und/oder die Gesamtauflösung des Videos während der Kodierung reduziert wird.

### Einfluss der Codec-Konfiguration auf das kodierte Ausgabeergebnis

Die Algorithmen, die zur Kodierung von Videos verwendet werden, nutzen in der Regel eine oder mehrere allgemeine Methoden, um die Kodierung durchzuführen. Im Allgemeinen ist jede Konfigurationsoption, die darauf abzielt, die Ausgabegröße des Videos zu reduzieren, wahrscheinlich negativ betroffen auf die gesamte Qualität des Videos, oder wird bestimmte Arten von Artefakten in das Video einführen. Zudem ist es möglich, eine verlustfreie Form der Kodierung auszuwählen, die zu einer viel größeren kodierten Datei führt, aber eine perfekte Reproduktion des Originalvideos beim Decodieren erlaubt.

Darüber hinaus können die jeweiligen Encoder-Dienstprogramme Variationen darin aufweisen, wie sie das Quellvideo verarbeiten, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

<table class="standard-table">
  <caption>
    Auswirkungen der Video-Encoder-Konfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Auswirkungen auf die Qualität</th>
      <th scope="col">Auswirkungen auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Verlustfreie Kompression</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Kompression kann die Gesamtgröße eines Videos bei weitem
        nicht so stark reduzieren wie verlustbehaftete Kompression; die resultierenden
        Dateien sind wahrscheinlich weiterhin zu groß für den allgemeinen
        Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße werden Artefakte und andere Formen der Qualitätseinbuße
        auftreten, abhängig vom spezifischen Codec und davon, wie stark die
        Kompression ausfällt.
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto einfacher
        ist es, höhere Kompressionsraten zu erzielen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätseinstellung, desto stärker wird das kodierte Video
        dem Original-Video ähneln.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten
        Videodateien; die Ausprägung dieser Regel variiert je nach Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Qualität verbessert sich im Allgemeinen mit höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die beim Kodieren von Videos verfügbaren Optionen und die Werte, die diesen Optionen zugewiesen werden, variieren nicht nur von einem Codec zum anderen, sondern auch abhängig von der verwendeten Kodierungssoftware. Die Dokumentation, die Ihrer Kodierungssoftware beiliegt, hilft Ihnen zu verstehen, welche spezifischen Auswirkungen diese Optionen auf das kodierte Video haben.

## Kompressionsartefakte

**Artefakte** sind Nebenprodukte eines verlustbehafteten Kodierungsprozesses, bei dem verlorene oder umstrukturierte Daten zu sichtbaren negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, da Videos so dargestellt werden, dass jedes Bild durch das Anwenden von Änderungen auf das aktuell sichtbare Bild gezeigt wird. Das bedeutet, dass Fehler oder Artefakte sich im Laufe der Zeit summieren, was zu Störungen oder anderweitigen seltsamen oder unerwarteten Abweichungen im Bild führt, die eine Zeit lang verweilen können.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodische **Schlüsselbilder** (auch bekannt als **Intra-Frames** oder **I-Frames**) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Bilder, die verwendet werden, um eventuelle Schäden oder verbleibende Artefakte, die derzeit sichtbar sind, zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was beim Rekonstruieren aus den kodierten Daten nicht mehr so aussieht wie vor der Kompression. Es gibt viele Formen von Aliasing; die häufigsten, die Sie sehen könnten, beinhalten:

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
          ein Muster im Quellbild und die Art und Weise, wie der Encoder
          arbeitet, räumlich leicht verschoben sind. Die vom Encoder
          erzeugten Artefakte führen dann zu seltsamen, wirbelnden Effekten
          im Muster des Quellbildes bei der Dekodierung.
        </p>
      </td>
      <td>
        <img alt="eine Ziegelwand zeigt Wirbeleffekte ähnlich wie Wellen durch das Moiré-Muster" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          entsteht, wenn diagonale Gerade oder gekrümmte Kanten, die glatt
          sein sollten, eine gezackte Erscheinung annehmen und etwas wie
          Treppenstufen aussehen. Dies ist der Effekt, der durch "Anti-Aliasing"
          Filter reduziert wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die durch Aliasing-Effekte wie Treppenstufen aussehen" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der <strong>Wagenradeffekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">Stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, der häufig im Film zu sehen ist, bei
          dem ein drehendes Rad sich mit der falschen Geschwindigkeit oder
          sogar rückwärts zu drehen scheint, aufgrund einer Interaktion zwischen
          Bildrate und Kompressionsalgorithmus. Der gleiche Effekt kann bei
          jedem sich wiederholenden Muster auftreten, das sich bewegt, wie die
          Räder entlang einer Eisenbahnlinie, Pfosten entlang einer Straße
          usw. Dies ist ein temporales (zeitbasiertes) Aliasing-Problem; die
          Geschwindigkeit der Drehung interferiert mit der Frequenz der
          Abtastung, die während der Kompression oder Kodierung durchgeführt
          wird.
        </p>
      </td>
      <td>
        <img alt="Drehendes Rad durch Aliasing, das einen Wagenradeffekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbkonturen

**Farbkonturen** sind eine Art visuelles Artefakt, das als falsche Farben entlang der Kanten von gefärbten Objekten innerhalb der Szene auftritt. Diese Farben haben keine absichtliche Farbzusammenhang zu den Inhalten des Frames.

### Verlust von Schärfe

Der Prozess des Entfernens von Daten im Zuge der Kodierung von Videos erfordert, dass einige Details verloren gehen. Wenn genug Kompression angewendet wird, könnten Teile oder sogar das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder unscharfen Aussehen führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text – insbesondere kleiner Text – sehr detailorientierter Inhalt ist, bei dem geringfügige Änderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Kompressionsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln verunreinigt werden, die vom Kompressionsalgorithmus erzeugt wurden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund hinwegspannen. Dies ist besonders häufig bei höheren Kompressionsgraden zu beobachten.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Stufenbildung und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ist in gewisser Hinsicht dem [Moskito-Rauschen](#moskito-rauschen) ähnlich, außer dass das Klingeln mehr oder weniger konstant ist, während Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art des Artefakts, die es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Kompression zum Verlust von Farbdetails in Verläufen führt. Statt sanfter Übergänge durch die verschiedenen Farben in einem Bereich wird das Bild blockartig, mit Farbblasen, die das ursprüngliche Aussehen des Bildes approximieren.

![Weißkopfseeadler-Foto mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers im obigen Foto (und der Schnee-Eule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisierungsartefakte verloren.

### Konturierung

**Konturierung** oder **Farbabstufungen** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wurde. Infolgedessen zeigen die Inhalte des Videos ein "geschichtetes" Aussehen, bei dem anstatt sanfter Verläufe und Übergänge die Übergänge von Farbe zu Farbe abrupt sind, was den Eindruck von Farbebenen hinterlässt.

![Beispielauschnitt eines Bildes, dessen Kompression Konturierung eingeführt hat](contouring-effect.jpg)

In dem obigen Beispielbild fällt auf, dass der Himmel Bänder unterschiedlicher Blautöne aufweist, anstatt ein gleichmäßiger Verlauf zu sein, wenn sich die Himmelsfarbe dem Horizont nähert. Dies ist der Konturierungseffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein Temporalartefakt, das als Rauschen oder **Kantenunruhe** erscheint, die als flimmernde Unschärfe oder Schimmern um die Kanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund auftreten. Der Effekt kann dem ähnlich aussehen wie das [Klingeln](#klingeln).

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich im Himmel um die Brücke. Im oberen rechten Teil ist eine Nahaufnahme eines Bildausschnitts zu sehen, der Moskito-Rauschen aufweist.

Moskito-Rauschen wird am häufigsten im MPEG-Video gefunden, kann aber auftreten, wo auch immer ein diskreter Kosinustransformations-Algorithmus (DCT) verwendet wird; dies schließt beispielsweise JPEG-Bilder ein.

### Blockgrenzen-Artefakte der Bewegungsentschädigung

Die Kompression von Video funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen von einem Frame zum nächsten aufgezeichnet werden, bis das Ende des Videos erreicht ist. Diese Technik funktioniert gut, wenn die Kamera fest an einem Ort steht oder die Objekte im Bild relativ stationär sind, aber wenn es im Bild viel Bewegung gibt, kann die Zahl der Unterschiede zwischen den Bildern so groß sein, dass die Kompression keinen Nutzen hat.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegungen (entweder der Kamera oder der Objekte im Sichtfeld) sucht und ermittelt, um wie viele Pixel sich das bewegte Objekt in jede Richtung bewegt hat. Diese Verschiebung wird dann gespeichert, zusammen mit einer Beschreibung der Pixel, die sich bewegt haben und nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die bewegten Objekte, dann baut er eine interne Art von Frame, das aussieht wie das Original, aber mit allen Objekten, die an ihre neuen Positionen verschoben wurden. In der Theorie approximiert dies das Aussehen des neuen Frames. Um die Arbeit abzuschließen, werden die verbleibenden Unterschiede gefunden, dann werden die Menge der Objektverschiebungen und die Menge der Pixeldifferenzen in den Daten gespeichert, die den neuen Frame darstellen. Dieses Objekt, das die Schichten und die Pixeldifferenzen beschreibt, nennt man einen **Rückstand-Frame**.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Original-Frame</th>
      <th scope="col" style="width: 216px">Zwischenfabel Unterschiede</th>
      <th scope="col" style="width: 216px">
        Unterschied nach Bewegungsentschädigung
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalbild aus dem Video" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Frame und dem folgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Frames nach Verschieben um zwei Pixel nach rechts"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Der erste vollständige Frame, wie er vom Betrachter gesehen wird.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Frame und dem
        folgenden Frame sichtbar. Alles andere ist schwarz. Bei genauer
        Betrachtung kann man erkennen, dass die Mehrheit dieser Unterschiede
        aus einer horizontalen Kamerabewegung resultiert, was dies zu einem
        guten Kandidaten für eine Bewegungsentschädigung macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen
        wir hier die Kameraschwenks, indem wir den ersten Rahmens um zwei Pixel
        nach rechts verschieben und dann den Unterschied nehmen. Dies
        kompensiert das Schwenken der Kamera und ermöglicht mehr Überlappung
        zwischen den beiden Frames.
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **Globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globale Bewegungskompensation passt im Allgemeinen Bewegungen der Kamera an, wie z. B. Tracking, Dollybewegeungen, Schwenken, Neigen, Rollen und Auf- und Abwärtsbewegungen. Die Blockbewegungskompensation behandelt lokalere Änderungen und sucht nach kleineren Bildausschnitten, die durch Bewegungskompensation sinnvoll kodiert werden können. Diese Blöcke sind normalerweise von fester Größe und befinden sich in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen erlauben, und sogar Blöcke zu überlappen.

Es gibt jedoch auch Artefakte, die durch Bewegungskompensation auftreten können. Diese treten an Blockgrenzen als scharfe Kanten auf, die falsche Klingeln und andere Kanteneffekte erzeugen. Diese sind auf die Mathematik zurückzuführen, die in die Kodierung von Restbildern einfließt, und können leicht bemerkt werden, bevor sie vom nächsten Schlüsselbild korrigiert werden.

### Reduzierung der Bildgröße

In bestimmten Situationen kann es nützlich sein, die Dimensionen des Videos zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Während der unmittelbare Verlust an Größe oder Flüssigkeit der Wiedergabe ein negativer Faktor sein kann, können sorgfältige Entscheidungen ein gutes Endergebnis zur Folge haben. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein, während es eine viel höhere visuelle Qualität beibehält; selbst nach dem Skalieren bei der Wiedergabe kann das Ergebnis besser sein als die Kodierung des Originalvideos in voller Größe unter Akzeptanz des Qualitätsverlustes, der erforderlich ist, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ebenso können Sie Frames komplett aus dem Video entfernen und die Bildrate anpassen, um dies zu kompensieren. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungskompensation, noch mehr zu leisten. Wenn Sie zum Beispiel jeden zweiten Frame überspringen, anstatt Bewegungsunterschiede für zwei Bilder zu berechnen, die sich wegen zwischenbildlicher Bewegung um zwei Pixel unterscheiden, könnte dies dazu führen, dass ein Unterschied von vier Pixeln an Bewegung berechnet wird. Dies ermöglicht die Darstellung der gesamten Bewegungen mit weniger Restbildern.

Die absolute Mindestbildrate, die ein Video aufweisen kann, bevor seine Inhalte vom menschlichen Auge nicht mehr als Bewegung wahrgenommen werden, beträgt etwa 12 Bilder pro Sekunde. Weniger als das, und das Video wird zu einer Serie von Standbildern. Kinofilme haben typischerweise 24 Bilder pro Sekunde, während Standard-Fernsehen etwa 30 Bilder pro Sekunde beträgt (etwas weniger, aber nahe genug), und Hochauflösendes Fernsehen liegt zwischen 24 und 60 Bildern pro Sekunde. Alles ab 24 FPS wird im Allgemeinen als ausreichend flüssig empfunden; 30 oder 60 FPS ist ein ideales Ziel, je nach Ihren Bedürfnissen.

Letztendlich hängen die Entscheidungen darüber, welche Abstriche Sie machen können, ganz von Ihnen und/oder Ihrem Designteam ab.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Er erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und um bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und für den Einsatz sowohl mit dem {{HTMLElement("video")}}-Element als auch mit [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional** mit zunehmender Unterstützung für Farbtiefen und Chroma-Abtastung. Darüber hinaus sind eine Reihe von **Levels** spezifiziert, die jeweils Grenzen für eine Reihe von Videoattributen definieren. Diese Attribute umfassen Bildabmessungen, Bildfläche in Pixeln, Anzeige- und Decodierungsraten, durchschnittliche und maximale Bitraten sowie Beschränkungen hinsichtlich der Anzahl der Kacheln und Spaltengruppen, die im Codierungs-/Decodierungsprozess verwendet werden.

Zum Beispiel bietet das Level 2.0 von AV1 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es ist jedoch bemerkenswert, dass zumindest für Firefox und Chrome die Levels derzeit beim Software-Decodieren tatsächlich ignoriert werden und sich der Decoder lediglich bemüht, das Video entsprechend den bereitgestellten Einstellungen bestmöglich abzuspielen. Im Sinne der Kompatibilität in der Zukunft sollten Sie jedoch innerhalb der Grenzen des gewählten Levels bleiben.

AV1 wird in allen Browsern unterstützt, aber die Unterstützung in Safari ist auf Geräte mit Hardwaredecodern beschränkt, was bedeutet, dass M3 MacBooks und später, iPhone 15 Pro und iPhone 16 und später unterstützt werden. Viele mobile und Desktop-Geräte verfügen über Hardwaredecoder, was AV1 zu einer großartigen Wahl für das Bereitstellen von Videos im Web macht, mit einer Rückfallebene für frühere Apple-Geräte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Level des Videos; das theoretische Maximum erreicht 800 Mbps bei Level 6.3
        </p>
        <p>
          Siehe
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Tabellen der Levels</a
          > in der AV1-Spezifikation, die die maximalen Auflösungen und Raten auf jedem Level beschreiben.
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
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jeden Wert innerhalb dieses Bereichs annehmen kann
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
              <th scope="col">Chroma-Abtastung</th>
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
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
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

Der **Advanced Video Coding** (**AVC**)-Standard der MPEG-4-Spezifikationsreihe ist durch die identische ITU H.264-Spezifikation und die MPEG-4 Part 10-Spezifikation definiert. Es ist ein bewegungskompensationsbasierter Codec, der heute weit verbreitet für alle Arten von Medien verwendet wird, einschließlich Rundfunkfernsehen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist sehr flexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien konzipiert und verwendet weniger Bandbreite als das Main Profile (das in einigen Regionen für Standard-Definition-Digital-TV verwendet wird) oder das High Profile (das für Blu-Ray-Disc-Videos verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chroma-Sampling. Das High 10 Profile fügt Unterstützung für 10-Bit-Farbe hinzu, und erweiterte Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC bietet auch spezielle Funktionen wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), was unter anderem die Erstellung von stereoskopischen Videos ermöglicht.

AVC ist jedoch ein proprietäres Format, und zahlreiche Patente werden von mehreren Parteien bezüglich seiner Technologien gehalten. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA-Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Gesprächen zu unterstützen. Auch wenn Webbrowser nicht dazu verpflichtet sind, tun dies einige.

In HTML-Inhalten für Webbrowser ist AVC breit kompatibel, und viele Plattformen unterstützen Hardwarekodierung und -decodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://via-la.com/licensing-programs/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

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
        <p>Einige der geläufigeren oder interessanteren Profile:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Sampling</th>
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
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von Firefox für AVC hängt von den im Betriebssystem integrierten oder vorinstallierten Codecs für AVC und sein Container ab, um Patentsorgen zu vermeiden.
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
        <a href="https://via-la.com/licensing-programs/avc-h-264/"
          >erfordert eine Lizenz</a
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263**-Codec der ITU wurde primär für die Nutzung in Situationen mit geringer Bandbreite entworfen. Insbesondere liegt sein Fokus auf Videokonferenzen im PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme). Trotz Optimierung für Netzwerke mit geringer Bandbreite ist er relativ CPU-intensiv und kann möglicherweise auf Computern mit niedriger Leistung nicht ausreichend performen. Das Datenformat ist ähnlich dem von MPEG-4 Part 2.

H.263 wurde nie weit verbreitet im Web genutzt. Abwandlungen von H.263 wurden als Grundlage für andere proprietäre Formate, wie Flash-Video oder den Sorenson-Codec, verwendet. Allerdings hat kein großer Browser jemals von Haus aus H.263 unterstützt. Bestimmte Medien-Plugins haben die Unterstützung für H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines codierten Videos in Bezug auf die maximale Bitrate pro Frame (Bild) oder **BPPmaxKb**. Während des Codierens wird ein Wert für BPPmaxKb ausgewählt und dann kann das Video diesen Wert für jedes Frame nicht überschreiten. Die endgültige Bitrate hängt von diesem Wert, der Bildrate, der Kompression und der gewählten Auflösung und Blockformat ab.

H.263 wurde durch H.264 ersetzt und wird daher als veraltetes Medienformat angesehen, das Sie generell vermeiden sollten, wenn es möglich ist. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, besteht darin, extrem alte Geräte zu unterstützen, auf denen H.263 die beste Wahl ist.

H.263 ist ein proprietäres Format, wobei [Patente](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) von einer Reihe von Organisationen und Unternehmen gehalten werden, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und so weiter. Um H.263 zu nutzen, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbegrenzt, aber typischerweise unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebige</td>
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
          Version 1 von H.263 spezifiziert einen Satz von Bildgrößen, die
          unterstützt werden. Spätere Versionen können zusätzliche Auflösungen
          unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF, oder 16CIF) definiert
        die Bildgröße in Pixeln sowie wie viele Reihen von Luminanz- und
        Chrominanzproben für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
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
        Proprietär; entsprechende Lizenz oder Lizenzen sind erforderlich. Beachten Sie, dass
        mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **High Efficiency Video Coding** (**HEVC**) Codec wird durch ITUs **H.265** sowie durch MPEG-H Teil 2 (der noch in der Entwicklung befindliche Nachfolger von MPEG-4) definiert. HEVC wurde entwickelt, um effizientes Codieren und Decodieren von Videos in verschiedenen Größen, einschließlich sehr hoher Auflösungen (einschließlich 8K-Video), zu unterstützen, und zwar mit einer Struktur, die speziell darauf ausgelegt ist, es Software zu ermöglichen, moderne Prozessoren effektiv zu nutzen. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß wie bei [AVC](#avc_h.264) sind, jedoch mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Kodierungsbaum-Einheit (CTU) – ähnlich dem Makroblock, der in vorherigen Codecs verwendet wurde – aus einem Baum von Luma-Werten für jedes Sample sowie einem Baum von Chroma-Werten für jedes Chroma-Sample, das in derselben Kodierungsbaum-Einheit genutzt wird, sowie aus allen erforderlichen Syntaxelementen. Diese Struktur unterstützt eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur eine 8-Bit-Komponentenfarbe mit 4:2:0-Chroma-Sampling unterstützt. Auch interessant ist, dass 4:4:4-Video speziell behandelt wird. Anstatt die Luma-Samples (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Samples (die angeben, wie die Graustufen zu Farb-Pixeln verändert werden sollen) zu speichern, werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines pro Farbe, die dann bei der Wiedergabe zu einem Vollfarbbild kombiniert werden.

HEVC ist ein proprietäres Format und wird von einer Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA verwaltet](https://via-la.com/licensing-programs/hevc-vvc/); Gebühren werden an Entwickler statt an Inhaltsproduzenten und -vertreiber erhoben. Überprüfen Sie unbedingt die neuesten Lizenzbedingungen und -anforderungen, bevor Sie eine Entscheidung darüber treffen, ob Sie HEVC in Ihrer App oder Website verwenden!

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
          Die unten stehenden Informationen sind für die wichtigsten Profile
          bereitgestellt. Es gibt eine Reihe anderer Profile, die hier nicht
          enthalten sind.
        </p>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Sampling</th>
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
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
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
              <th scope="row">HEVC / H.265 Unterstützung</th>
              <td>107</td>
              <td>18</td>
              <td>120</td>
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
        <p>Firefox aktiviert HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 entweder mit Hardware (auf Geräten, die es unterstützen, wobei die Reichweite die gleiche wie bei Edge ist) oder Software (auf Windows muss der Benutzer eine kostenpflichtige Erweiterung installieren)</li>
            <li>macOS ab Firefox 136 entweder mit Hardware oder Software.</li>
            <li>Linux ab Firefox 137 entweder mit Hardware oder Software (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere auf Chromium basierende Browser haben denselben Support-Status wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder später.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a>, MPEG-TS,
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
        Proprietär; bestätigen Sie Ihre Konformität mit den
        <a href="https://via-la.com/licensing-programs/hevc-vvc/"
          >Lizenzierungsanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Esstream** (**MP4V-ES**) Format ist Teil des MPEG-4 Part 2 Visual Standards. Obwohl im Allgemeinen MPEG-4 Teil 2 Video von niemandem verwendet wird, da seine Vorteile gegenüber anderen Codecs nicht überzeugend sind, findet MP4V-ES einige Verwendung im Mobilbereich. MP4V ist im Wesentlichen H.263-Codierung in einem MPEG-4-Container.

Sein Hauptzweck besteht darin, verwendet zu werden, um MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Sitzung zu streamen. Allerdings wird MP4V-ES auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung unter Verwendung von [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie wollen dieses Format wahrscheinlich nicht verwenden, da es nicht auf sinnvolle Weise von großen Browsern unterstützt wird und ziemlich veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden jedoch manchmal fälschlicherweise als `.mp4` bezeichnet.

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
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
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
              <th scope="row">MP4V-ES Unterstützung</th>
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
        <a href="https://via-la.com/licensing-programs/mpeg-4-visual/"
          >erhalten Sie eine Lizenz</a
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

**MPEG-1 Teil 2 Video** wurde zu Beginn der 1990er Jahre enthüllt. Anders als die späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG erstellt, ohne die Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr in Bezug auf MPEG-1-Video, sodass es ohne Lizenzierungsprobleme verwendet werden kann. Allerdings unterstützen wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern abgelehnt wird, sind diese in der Regel nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für Webseiten und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1,5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        23,976 FPS, 24 FPS, 25 FPS, 29,97 FPS, 30 FPS, 50 FPS, 59,94 FPS, und 60
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
        Y'CbCr mit 4:2:0-Chroma-Sampling mit bis zu 12 Bits pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
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

### MPEG-2 Teil 2 Video

**[MPEG-2 Teil 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert wird und wird gelegentlich auch durch seine {{Glossary("ITU", "ITU")}}-Bezeichnung, H.262, bezeichnet. Es ist MPEG-1-Video sehr ähnlich – in der Tat kann jeder MPEG-2-Player automatisch mit MPEG-1 umgehen, ohne besondere Arbeit – außer dass es erweitert wurde, um höhere Bitraten und verbesserte Codierungstechniken zu unterstützen.

Das Ziel war, MPEG-2 zu ermöglichen, Standard-Definitionen Fernsehen zu komprimieren, sodass auch Interlaced-Video unterstützt wird. Die Standard-Definitionen Kompressionsrate und die Qualität des resultierenden Videos erfüllten die Anforderungen so gut, dass MPEG-2 der primäre Videocodec für DVD-Videomedien ist.

MPEG-2 hat mehrere Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Levels verfügbar, die jeweils Attribute des Videos erhöhen, wie Bildrate, Auflösung, Bitrate und so weiter. Die meisten Profile verwenden Y'CbCr mit 4:2:0-Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Levels, die jeweils Unterstützung für größere Bildabmessungen und Bitraten bieten. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für Fernsehen in Nordamerika MPEG-2-Video in hoher Auflösung mit dem Hauptprofil auf hohem Level, was 4:2:0-Video bei sowohl 1920 x 1080 (30 FPS) als auch 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbps erlaubt.

Allerdings unterstützen wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern abgelehnt wird, sind diese in der Regel nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für Webseiten und Webanwendungen.

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
        Y'CbCr mit 4:2:0-Chroma-Sampling in den meisten Profilen; die "High" und
        "4:2:2" Profile unterstützen auch 4:2:2-Chroma-Sampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
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
              <th scope="row">MPEG-2 Unterstützung</th>
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
        Proprietär; alle Patente sind weltweit mit Ausnahme von Malaysia (ab dem 1. Oktober 2024) abgelaufen, sodass MPEG-2 außerhalb von Malaysia frei verwendet werden kann.
        Patente werden von <a href="https://via-la.com/licensing-programs/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat extrem geringe Nutzung, und die Unterstützung wird aus den Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und kostenloser Videocodec, der ohne Lizenzgebühren oder Lizenzen verwendet werden kann. Theora ist in Qualität und Kompressionsrate vergleichbar mit MPEG-4 Part 2 Visual und AVC, was ihn zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Videocodierung macht. Aber seine Freiheit von Lizenzierungsbedenken und sein relativ geringer CPU-Ressourcenbedarf machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Die geringe CPU-Belastung ist besonders nützlich, da es für Theora keine Hardwaredecoder gibt.

Theora basierte ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und an Xiph.org übertragen, das ihn dann in den Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bits pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt, sind 8 Bits pro Komponente immer noch das am häufigsten verwendete Farbformat heutzutage, sodass dies in den meisten Fällen nur ein geringfügiges Ärgernis ist. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil von allen ist jedoch, dass es nicht von Safari unterstützt wird, was Theora nicht nur auf macOS, sondern auf all den Millionen von iPhones und iPads unzugänglich macht.

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
        Beliebig; jeder nicht-null Wert wird unterstützt. Die Bildrate wird
        als 32-Bit-Zähler und ein 32-Bit-Nenner angegeben, um auch nicht-ganzzahlige
        Bildraten zu ermöglichen.
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
        Jede Kombination von Breite und Höhe bis zu 1.048.560 x 1.048.560 Pixeln
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0, 4:2:2 und 4:4:4-Chroma-Subsampling bei 8 Bits pro
        Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Obwohl Theora keine variable Bildrate (VFR) innerhalb eines einzelnen
          Streams unterstützt, können mehrere Streams in einer einzigen Datei
          miteinander verkettet werden, und jeder davon kann seine eigene Bildrate
          haben, was im Wesentlichen VFR ermöglicht. Dies ist jedoch unpraktisch, wenn
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
              <th scope="row">Theora Unterstützung</th>
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
      <td>Offen und frei von Lizenzgebühren und sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies erstellt. Nach dem Kauf von On2 veröffentlichte Google VP8 als ein offenes und lizenzfreies Videoformat mit dem Versprechen, die entsprechenden Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 vergleichbar mit [AVC](#avc_h.264).

Wenn vom Browser unterstützt, ermöglicht VP8 Videos mit einem Alphakanal, was es dem Video ermöglicht, mit dem Hintergrund durch das Video in einem durch die Alphakomponente jedes Pixels spezifizierten Grad sichtbar zu sein. Safari unterstützt keine Alpha-Transparenz in VP8-Videos.

Es gibt eine gute Browserunterstützung für VP8 in HTML-Inhalten, besonders innerhalb von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, Einschränkungen basierend auf Levels werden durchgesetzt</td>
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
      <td>Y'CbCr mit 4:2:0-Chroma-Subsampling bei 8 Bits pro Komponente</td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari. Safari unterstützt jedoch keine Alpha-Transparenz.</p>
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
      <td>Ja; VP8 ist einer der spezifizierten Codecs für WebRTC</td>
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
      <td>Offen und frei von Lizenzgebühren und sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, entwickelt von Google.
Wie VP8 ist VP9 vollständig offen und lizenzfrei.
Seine Codier- und Decodierleistung ist mit der von AVC vergleichbar oder etwas schneller, jedoch mit besserer Qualität.
Die kodierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0-Chroma-Subsampling-Niveaus, aber seine Profile umfassen Unterstützung für tiefere Farben und die volle Bandbreite der Chroma-Subsampling-Modi.
Es unterstützt mehrere HDR-Implementierungen und bietet beträchtliche Freiheit bei der Wahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von vielen Browsern unterstützt, und Hardwareimplementierungen des Codecs sind recht häufig.
VP9 ist einer der beiden von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) geforderten Videocodecs (der andere ist [VP8](#vp8)).
Beachten Sie jedoch, dass Safari in diesem Format keine Alphatransparenz unterstützt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, Einschränkungen basierend auf Levels werden durchgesetzt</td>
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
              <td>4:2:0, 4:2:2 und 4:4:4</td>
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
      <th scope="row">Unterstützung variabler Bildraten (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari. Safari unterstützt jedoch keine Alpha-Transparenz.</p>
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
      <td>Offen und frei von Lizenzgebühren und sonstigen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Wahl eines Video-Codecs

Die Entscheidung, welcher Codec oder welche Codecs verwendet werden sollen, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, mit denen Sie bereit sind, die Kompatibilität zu opfern?
- Wie alt ist die älteste Version des Webbrowsers, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem Browser arbeiten, der in den letzten fünf Jahren ausgeliefert wurde, oder nur im letzten Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der als am besten für den Anwendungsfall geeignete Codec proprietär ist oder Lizenzgebühren erfordern könnte, werden zwei Optionen bereitgestellt: zunächst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie nur in der Lage sind, eine einzige Version jedes Videos anzubieten, können Sie das Format wählen, das Ihren Anforderungen am besten entspricht. Die erste wird als eine gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am weitesten kompatible Wahl sein, auf Kosten von etwas Qualität, Leistung und/oder Größe.

### Empfehlungen für das Web

Schauen wir uns zunächst die besten Optionen für Videos an, die auf einer typischen Website präsentiert werden, wie z.B. einem Blog, einer Informationsseite oder einer kleinen Unternehmenswebsite, auf der Videos zur Demonstration von Produkten verwendet werden (aber nicht, wo die Videos selbst ein Produkt sind).

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container mit dem **[AV1](#av1)**-Codec für Video und dem **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio. Diese sind alle offene, lizenzfreie Formate, die im Allgemeinen gut unterstützt werden, mit Ausnahme von Safari auf älteren Apple-Geräten.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
   </video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Video-Codec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audio-Codec. Dies liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs eine weit unterstützte Kombination ist - tatsächlich von jedem großen Browser - und die Qualität typischerweise für die meisten Anwendungsfälle gut ist. Stellen Sie jedoch sicher, dass Sie Ihre Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein abschließendes `</video>`-Tag, unabhängig davon, ob sich darin {{HTMLElement("source")}}-Elemente befinden oder nicht.

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Derzeit sind keine verlustfreien - oder auch nur nahezu verlustfreien - Video-Codecs allgemein in Webbrowsern verfügbar. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Komprimierung ist per Definition weniger effektiv als verlustbehaftete Komprimierung. Beispielsweise benötigt unkomprimiertes 1080p-Video (1920 x 1080 Pixel) mit 4:2:0-Chroma-Subsampling mindestens 1,5 Gbit/s. Durch die Verwendung verlustfreier Komprimierung wie FFV1 (das von Webbrowsern nicht unterstützt wird) könnte dies möglicherweise auf etwa 600 Mbit/s reduziert werden, je nach Inhalt. Das sind immer noch eine enorme Menge an Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keinen realen Anwendungsfall praktikabel.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus bieten; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec auszuwählen, der verlustbehaftete Komprimierung verwendet und ihn so zu konfigurieren, dass so wenig Komprimierung wie möglich erfolgt. Eine Möglichkeit, dies zu tun, besteht darin, den Codec so zu konfigurieren, dass eine "schnelle" Komprimierung verwendet wird, was von Natur aus bedeutet, dass weniger Komprimierung erreicht wird.

#### Vorbereitung von Videos extern

Um Videos für Archivierungszwecke außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Komprimierung der ursprünglichen unkomprimierten Videodaten durchführt. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Andere Codecs können bessere Qualitätsstufen liefern, wenn das Video erheblich komprimiert wird. Ihre Encoder tendieren jedoch dazu, so langsam zu sein, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Komprimierung erhalten, bei etwa gleicher Gesamtqualität erheblich schneller ist.

#### Aufzeichnung von Videos

Angesichts der Einschränkungen, wie nahe an verlustfrei man kommen kann, könnten Sie in Betracht ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Videos aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, um Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt zu erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, um [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chroma-Subsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzuzeichnen. Die resultierende Datei wird eine Bitrate von maximal 800 Mbit/s verwenden, die zwischen den Video- und Audiotracks geteilt wird. Sie werden diese Werte wahrscheinlich abhängig von der Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten, anpassen müssen. Diese Bitrate ist offensichtlich nicht realistisch für die Übertragung über das Netzwerk und würde wahrscheinlich nur lokal verwendet werden.

Die Aufschlüsselung des Wertes des `codecs`-Parameters in seine Punkt-delineierten Eigenschaften ergibt Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `av01` | Der vierstellige Code (4CC), der den [AV1](#av1)-Codec kennzeichnet.                                                                                                                                                                                                                                   |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                            |
| `19H`  | Das Level und die Stufe. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt die hohe Stufe von Level 6.3 an.                                                                                                        |
| `12`   | Die Farbtiefe. Diese gibt 12 Bits pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die hochpräziseste Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                                    |
| `0`    | Das Monochrom-Mode-Flag. Wenn 1, würden keine Chroma-Ebenen aufgenommen und alle Daten sollten ausschließlich Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 angegeben, weil wir Farbe wollen.                                                                                        |
| `000`  | Der Chroma-Subsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) der AV1-Spezifikation. Ein Wert von 000 kombiniert mit dem Monochrom-Mode-Wert 0 zeigt an, dass wir 4:4:4-Chroma-Subsampling wollen, also keinen Verlust von Farbdaten. |
| `09`   | Die zu verwendenden Farbprimärfarben. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) der AV1-Spezifikation; 9 gibt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                                                |
| `16`   | Die zu verwendenden Übertragungseigenschaften. Dies stammt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 gibt an, dass wir die Eigenschaften für BT.2100 PQ-Farbe verwenden möchten.                                                            |
| `09`   | Die zu verwendenden Matrix-Koeffizienten, ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Luminanz verwenden möchten; dies ist auch als BT.2010 YbCbCr bekannt.                               |
| `1`    | Das Video-"Vollbereich"-Flag. Ein Wert von 1 gibt an, dass wir den vollständigen Farbbereich nutzen möchten.                                                                                                                                                                                           |

Die Dokumentation zu Ihren Codec-Auswahlen wird wahrscheinlich Informationen bieten, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden können.

## Siehe auch

- [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die "Codecs"- und "Profiles"-Parameter für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Mediendateitypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audio-Codecs in Chrome](https://www.chromium.org/audio-video/)

---
title: Leitfaden zu Web-Videocodecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Dieser Leitfaden stellt Videocodecs vor, auf die Sie im Web am ehesten stoßen oder in Betracht ziehen werden, mit Zusammenfassungen ihrer Fähigkeiten sowie etwaiger Kompatibilitäts- und Nutzbarkeitsprobleme, und gibt Empfehlungen, um Ihnen bei der Auswahl des richtigen Codecs für Ihr Video-Projekt zu helfen.

Aufgrund der beträchtlichen Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie zu speichern, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die benötigt wird, um unkomprimiertes Video zu speichern:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in voller Farbe (4 Byte pro Pixel) sind 8.294.400 Byte.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Byte (ca. 249 MB) beanspruchen.
- Eine Minute HD-Video benötigt 14,93 GB Speicherplatz.
- Eine recht typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, und ein 2-stündiger Film würde _fast 1,79 **TB** (das heißt, 1790 GB)_ beanspruchen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die erforderlich ist, um ein solches unkomprimiertes Video zu übertragen, wäre mit 249 MB/s enorm—ohne Audio und Overhead. Hier kommen Videocodecs ins Spiel. Genauso wie Audiocodecs die Sounddaten komprimieren, komprimieren Videocodecs die Videodaten und kodieren sie in ein Format, das später dekodiert und wiedergegeben oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details können verloren gehen; der Umfang des Verlusts hängt vom Codec und seiner Konfiguration ab, aber generell gilt: Je mehr Kompression Sie erreichen, desto mehr Detail- und Gleichgewichtungsverluste werden auftreten. Es gibt einige verlustfreie Codecs, aber diese werden typischerweise für Archivierung und lokale Wiedergabe verwendet und nicht für den Einsatz in Netzwerken.

## Allgemeine Codecs

Die folgenden Videocodecs werden am häufigsten im Web verwendet. Für jeden Codec sind die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, der zusätzliche Details zum Codec bietet, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Sie beachten sollten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codecs-Name (Kurz)</th>
      <th scope="col">Vollständiger Codecs-Name</th>
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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: Details über das Format und die Inhalte des Quellvideos sowie die Eigenschaften und Konfiguration des Codecs, der während der Codierung des Videos verwendet wird.

Die einfachste Richtlinie ist diese: Alles, was das kodierte Video mehr wie das originale, unkomprimierte Video aussehen lässt, wird im Allgemeinen auch die resultierenden Daten größer machen. Daher ist es immer ein Kompromiss zwischen Größe und Qualität. In manchen Situationen ist es den Verlust an Qualität wert, um die Datenmenge zu reduzieren; in anderen Fällen ist der Qualitätsverlust inakzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die in einer entsprechend größeren Datei resultiert.

### Einfluss des Quellvideo-Formats auf die kodierte Ausgabe

Das Ausmaß, in dem das Format des Quellvideos die Ausgabe beeinflusst, variiert je nach Codec und deren Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als nur mit einfachen Pixeln darstellt, macht das Format des Originalbildes keinen Unterschied. Allerdings beeinflussen Dinge wie die Bildrate und offensichtlich die Auflösung immer die Größenausgabe der Medien.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Einige haben Probleme mit bestimmten Arten von Formen und Mustern, oder sind nicht gut darin, scharfe Kanten zu reproduzieren, oder neigen dazu, in dunklen Bereichen Details zu verlieren oder eine beliebige Anzahl anderer Möglichkeiten. Alles hängt von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss des Quellvideo-Formats und -Inhalts auf die Qualität und Größe des kodierten Videos
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
        Je höher die Farbbittiefe, desto höher wird die Farbgenauigkeit im Video erreicht. In gesättigten Bildbereichen (das heißt, wo Farben rein und intensiv sind, wie ein strahlendes, reines Rot: <code>rgb(255 0 0 / 100%)</code>) ermöglichen Farbtiefen unter 10 Bits pro Komponente (10-Bit-Farbe) ein Banding, bei dem Farbverläufe ohne sichtbares Abzeichnen nicht dargestellt werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren komprimierten Dateigrößen führen. Der bestimmende Faktor ist das interne Speicherformat, das für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Geschmeidigkeit der Bewegung im Bild. Bis zu einem gewissen Punkt, je höher die Bildrate, desto sanfter und realistischer wird die Bewegung erscheinen. Schließlich wird der Punkt der abnehmenden Erträge erreicht. Siehe <a href="#reduced_frame_rate">Bildrate</a> unten für Details.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird während der Kodierung nicht reduziert, führen höhere Bildraten zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Kompression von Video funktioniert typischerweise, indem man Frames vergleicht, herausfindet, wo sie sich unterscheiden, und Datensätze erstellt, die genügend Informationen enthalten, um das vorherige Frame zu aktualisieren, um die Erscheinung des folgenden Frames zu approximieren. Je mehr aufeinanderfolgende Frames sich voneinander unterscheiden, desto größer sind diese Unterschiede, und desto weniger effektiv ist die Kompression im Vermeiden der Einführung von Artefakten in das komprimierte Video.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren Zwischenframes aufgrund der höheren Anzahl von Unterschieden zwischen den Frames. Aus diesem und anderen Gründen gilt: Je mehr Bewegung es in einem Video gibt, desto größer wird typischerweise die Ausgabedatei sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Gritigkeit des Bildes) führt zu Variabilität. Variabilität macht die Kompression generell schwieriger, was zu mehr Qualitätsverlust führt, da Details wegfallen müssen, um das gleiche Kompressionsniveau zu erreichen.
      </td>
      <td>
        Je mehr Variabilitäten—wie Rauschen—es im Bild gibt, desto komplexer wird der Kompressionsprozess und desto weniger wahrscheinlich ist es, dass der Algorithmus das Bild im gleichen Maße komprimieren kann. Sofern Sie den Encoder nicht so konfigurieren, dass er einige oder alle durch Rauschen verursachten Variationen ignoriert, wird das komprimierte Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video, das in der gleichen Bildschirmgröße präsentiert wird, kann typischerweise die ursprüngliche Szene genauer darstellen, solange die während der Kompression eingeführten Effekte ausgeschlossen sind.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies spielt eine Schlüsselrolle bei der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese die resultierende kodierte Videoausgabe beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und dessen Konfiguration. Neben den allgemeinen Codec-Optionen könnte der Encoder so konfiguriert werden, dass die Bildrate reduziert, das Rauschen bereinigt und/oder die Gesamtauslösung des Videos während der Kodierung verringert wird.

### Einfluss der Codec-Konfiguration auf die kodierte Ausgabe

Die Algorithmen, die zur Kodierung von Video verwendet werden, nutzen typischerweise eine oder mehrere allgemeiner Techniken zur Durchführung ihrer Kodierung. Allgemein gesprochen, jede Konfigurationsoption, die darauf abzielt, die Ausgabelänge des Videos zu reduzieren, wird wahrscheinlich negative Auswirkungen auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustlose Form der Kodierung auszuwählen, die zu einer viel größeren kodierten Datei führt, aber mit perfekter Wiedergabe des originalen Videos nach dem Dekodieren.

Darüber hinaus kann jede Encoder-Utility Variationen darin haben, wie sie das Quellvideo verarbeiten, was zu Unterschieden in der Ausgabequalität und/oder -größe führt.

<table class="standard-table">
  <caption>
    Effekte der Videocodec-Konfiguration auf Qualität und Größe
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
        Verlustfreie Kompression kann die Größe des Videos nicht annähernd so stark reduzieren wie verlustbehaftete Kompression; die resultierenden Dateien sind wahrscheinlich immer noch zu groß für allgemeine Verwendungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße werden Artefakte und andere Formen von Qualitätsminderungen auftreten, je nach spezifischem Codec und dem Ausmaß der angewandten Kompression.
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto einfacher ist es, höhere Kompressionsraten zu erreichen
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr wird das kodierte Video dem ursprünglichen Medium ähneln
      </td>
      <td>
        Im Allgemeinen werden höhere Qualitätseinstellungen zu größeren kodierten Videodateien führen; das Ausmaß, in dem dies zutrifft, variiert je nach dem Codec
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Qualität verbessert sich im Allgemeinen mit höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Kodieren von Video zur Verfügung stehen, und die Werte, die diesen Optionen zugewiesen werden sollen, variieren nicht nur von einem Codec zum anderen, sondern auch je nach der von Ihnen verwendeten Kodierungssoftware. Die Dokumentation, die Ihrer Kodierungssoftware beiliegt, hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten zu sichtbaren negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, weil das Video auf eine bestimmte Weise dargestellt wird. Jedes Video-Frame wird präsentiert, indem eine Reihe von Änderungen auf das aktuell sichtbare Frame angewendet werden. Das bedeutet, dass Fehler oder Artefakte im Laufe der Zeit kumulieren und zu Bildstörungen oder sonstigen merkwürdigen oder unerwarteten Abweichungen im Bild führen können, die für eine Zeit bestehen bleiben.

Um dies zu beheben und um die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselbilder** (auch als **intra-frames** oder **i-frames** bekannt) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Frames, die verwendet werden, um eventuell sichtbare Beschädigungen oder Artefakt-Rückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was beim Rekarrierieren aus den kodierten Daten nicht mehr so aussieht wie vor der Kompression. Es gibt viele Formen von Aliasing; die häufigsten, die Sie sehen können, umfassen:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="Moiré_patterns">Moire-Muster</h4>
        <p>
          Ein <a href="https://de.wikipedia.org/wiki/Moir%C3%A9-Effekt"><strong>Moire-Muster</strong></a> ist ein groß angelegtes räumliches Interferenzmuster, das entsteht, wenn ein Muster im Quellbild und die Art und Weise, wie der Encoder arbeitet, räumlich leicht nicht übereinstimmen. Die vom Encoder generierten Artefakte führen dann zu seltsamen, wirbelnden Effekten im Muster des Quellbildes beim Dekodieren.
        </p>
      </td>
      <td>
        <img alt="Eine Backsteinwand, die einen wirbelnden Effekt ähnlich Wellen durch das Moire-Muster zeigt" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt sein sollten, ein gezacktes Erscheinungsbild annehmen, das ein wenig wie eine Treppe aussieht. Dies ist der Effekt, der durch "Anti-Aliasing"-Filter reduziert wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die durch Aliasing wie Treppenstufen erscheinen, was einen Treppeneffekt verursacht" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der <strong>Wagenradeffekt</strong> (oder <strong><a href="https://de.wikipedia.org/wiki/Stroboskopeffekt">Stroboskopeffekt</a></strong>) ist der visuelle Effekt, der häufig im Film zu sehen ist, bei dem ein drehendes Rad scheint mit falscher Geschwindigkeit oder sogar rückwärts zu rotieren, aufgrund einer Wechselwirkung zwischen der Bildrate und dem Kompressionsalgorithmus. Derselbe Effekt kann bei jedem sich bewegenden wiederholten Muster auftreten, wie etwa den Schwellenlinien einer Eisenbahn, Pfosten entlang einer Straßenseite usw. Dies ist ein zeitliches (zeitbasiertes) Aliasing-Problem; die Geschwindigkeit der Rotation interferiert mit der Frequenz der während der Kompression oder Kodierung durchgeführten Abtastung.
        </p>
      </td>
      <td>
        <img alt="Drehrades aufgrund von Aliasing, das einen Wagenradeffekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbkanten

**Farbkanten** sind eine Art von visuellem Artefakt, das als falsche Farben entlang der Ränder von farbigen Objekten in der Szene erscheint. Diese Farben haben keine beabsichtigte Farbverbindung zu den Inhalten des Frames.

### Verlust an Schärfe

Der Akt des Datenentfernens im Prozess der Videokodierung erfordert, dass einige Details verloren gehen. Wird genügend Kompression angewandt, können Teile oder möglicherweise das gesamte Bild an Schärfe verlieren, was zu einem leicht unscharfen oder nebligen Erscheinungsbild führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text—insbesondere kleiner Text—sehr detailorientiert ist, wobei kleine Änderungen die Lesbarkeit erheblich beeinflussen können.

### Ringing

Verlustbehaftete Kompressionsalgorithmen können **[Ringing](https://de.wikipedia.org/wiki/Ringing-Effekt)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit Farbige Pixeln kontaminiert werden, die vom Komprimierungsalgorithmus erzeugt werden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund hinweggehen. Dies ist insbesondere bei höheren Kompressionsstufen häufig.

![Beispiel für den Ringing-Effekt](ringing-effects.png)

Beachten Sie die blauen und rosafarbenen Ränder um die Kanten des oben gezeigten Sterns (sowie die Treppen und andere signifikante Kompressionsartefakte). Diese Ränder sind der Ringing-Effekt. Ringing ähnelt in gewisser Weise dem [Mückengeräusch](#mückengeräusch), außer dass der Ringing-Effekt mehr oder weniger konstant und unverändert ist, während das Mückengeräusch schimmert und sich bewegt.

Ringing ist eine weitere Art von Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Kompression zu einem Verlust an Farbdetails in Verläufen führt. Statt glatter Übergänge durch die verschiedenen Farben in einem Bereich wird das Bild blockig, mit Farbflecken, die das ursprüngliche Erscheinungsbild des Bildes annähernd darstellen.

![Foto eines Weißkopfseeadlers mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockhaftigkeit der Farben im Gefieder des Weißkopfseeadlers auf dem obigen Foto (und dem Schnee-Eule im Hintergrund). Die Details der Federn sind größtenteils verloren gegangen aufgrund dieser Posterisierungs-Artefakte.

### Konturierung

**Konturierung** oder **Farbabstufung** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit zu grober Quantisierung kodiert wurde. Infolgedessen zeigen die Inhalte des Videos einen "geschichteten" Look, bei dem statt glatter Verläufe und Übergänge die Übergänge von Farbe zu Farbe abrupt sind, wodurch Farbstreifen erscheinen.

![Beispiel für ein Bild, dessen Kompression Konturen eingeführt hat](contouring-effect.jpg)

Im obigen Beispielbild beachten Sie, wie der Himmel Bänder unterschiedlicher Blautöne aufweist, anstatt ein konsistenter Farbverlauf zu sein, da die Himmelsfarbe sich in Richtung des Horizonts ändert. Dies ist der Konturierungseffekt.

### Mückengeräusch

**Mückengeräusch** ist ein zeitliches Artefakt, das sich als Rauschen oder **Kantengeschäftigkeit** zeigt, die als flimmernde Trübung oder Schimmern auftritt, das ungefähr die Kanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund verfolgt. Der Effekt kann dem [Ringing](#ringing) ähnlich erscheinen.

![Beispiel für ein Bild, dessen Kompression Mückengeräusche eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Mückengeräusche an mehreren Stellen, einschließlich im Himmel um die Brücke herum. In der oberen rechten Ecke zeigt ein Inset eine Nahaufnahme eines Bildabschnitts, der Mückengeräusche aufweist.

Mückengeräusch-Artefakte sind am häufigsten in MPEG-Video zu finden, können aber auftreten, wann immer ein Algorithmus zur diskreten Kosinustransformation (DCT) verwendet wird; dies schließt zum Beispiel JPEG-Standbilder ein.

### Bewegungskompensation Blockgrenzartefakte

Die Kompression von Video funktioniert generell, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest an einem Ort bleibt oder die Objekte im Frame relativ stationär sind, wenn jedoch viel Bewegung im Frame ist, können die Unterschiede zwischen Frames so groß sein, dass die Kompression nichts nützt.

**[Bewegungskompensation](https://de.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder von Objekten im Frame) sucht und bestimmt, um wie viele Pixel sich das bewegte Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die sich bewegt haben und nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die bewegten Objekte und baut dann eine Art internes Frame, das wie das Original aussieht, aber mit allen Objekten, die an ihre neuen Positionen verschoben wurden. Theoretisch approximiert dies die Erscheinung des neuen Frames. Dann, um die Arbeit zu beenden, werden die restlichen Unterschiede gefunden, dann werden die Menge der Objektverschiebungen und die Menge der Pixelunterschiede in den Daten gespeichert, die das neue Frame darstellen. Dieses Objekt, das die Verschiebung und die Pixelunterschiede beschreibt, wird **Restframe** genannt.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Original Frame</th>
      <th scope="col" style="width: 216px">Inter-Frame-Differenzen</th>
      <th scope="col" style="width: 216px">
        Unterschied nach Bewegungskompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Original Frame eines Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Frame und dem folgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Frames nach rechts um zwei Pixel"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Das erste vollständige Frame, wie es vom Betrachter gesehen wird.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Frame und dem folgenden Frame zu sehen. Alles andere ist schwarz. Bei genauem Hinsehen können wir feststellen, dass die Mehrheit dieser Unterschiede von einer horizontalen Kamerabewegung stammt, was dies zu einem guten Kandidaten für die Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen wir hier die Schwenkung der Kamera, indem wir zuerst das erste Frame um zwei Pixel nach rechts verschieben und dann den Unterschied ermitteln. Dies kompensiert die Schwenkung der Kamera, sodass mehr Überlappung zwischen den beiden Frames besteht.
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
          href="https://de.wikipedia.org/wiki/Bewegungskompensation#Illustriertes_Beispiel"
          >Wikipedia</a
        >
      </th>
    </tr>
  </tbody>
</table>

Es gibt zwei allgemeine Arten der Bewegungskompensation: **Globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globale Bewegungskompensation passt im Allgemeinen Bewegungen der Kamera wie Verfolgung, Kamerafahrten, Schwenkungen, Neigungen, Rollbewegungen und Auf- und Ab-Bewegungen an. Blockbewegungskompensation kümmert sich um lokale Änderungen, indem sie nach kleineren Bildbereichen sucht, die mit Bewegungskompensation kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe, in einem Raster, es gibt jedoch Formen der Bewegungskompensation, die variable Blockgrößen ermöglichen und sogar Blöcke überlappen lassen.

Es gibt jedoch Artefakte, die durch Bewegungskompensation entstehen können. Diese treten entlang der Blockgrenzen in Form von scharfen Kanten auf, die falsches Ringing und andere Kanten-Effekte erzeugen. Diese resultieren aus der Mathematik, die in der Kodierung der Restframes involviert ist, und können leicht bemerkt werden, bevor sie durch den nächsten Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Video-Abmessungen zu reduzieren, um die endgültige Dateigröße des Videos zu verbessern. Während der unmittelbare Verlust an Größe oder Geschmeidigkeit der Wiedergabe ein negativer Faktor sein kann, kann eine sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein, während es eine viel höhere visuelle Qualität hat; selbst nach dem Skalieren während der Wiedergabe kann das Ergebnis besser sein, als das Originalvideo in voller Größe zu kodieren und den Qualitätsverlust zu akzeptieren, der erforderlich ist, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich können Sie Frames aus dem Video vollständig entfernen und die Bildrate entsprechend reduzieren. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungskompensation, noch mehr für Sie zu erreichen. Zum Beispiel, anstatt Bewegungsunterschiede für zwei Frames zu berechnen, die aufgrund der inter-frame Bewegung zwei Pixel voneinander entfernt sind, könnte das Überspringen jedes zweiten Frames dazu führen, dass ein Unterschied berechnet wird, der zu vier Pixeln Bewegung führt. Dadurch kann die gesamte Kamerabewegung mit weniger Restframes dargestellt werden.

Die absolute minimale Bildrate, die ein Video haben kann, bevor seine Inhalte vom menschlichen Auge nicht mehr als Bewegung wahrgenommen werden, beträgt etwa 12 Frames pro Sekunde. Weniger als das, und das Video wird zu einer Serie von Standbildern. Kinofilme laufen typischerweise mit 24 Frames pro Sekunde, während Standard-Definition-Fernsehen etwa 30 Frames pro Sekunde beträgt (leicht weniger, aber ausreichend genau) und High-Definition-Fernsehen zwischen 24 und 60 Frames pro Sekunde liegt. Alles von 24 FPS aufwärts wird im Allgemeinen als zufriedenstellend flüssig wahrgenommen; 30 oder 60 FPS sind je nach Bedarf ideale Ziele.

Am Ende sind die Entscheidungen darüber, welche Opfer Sie bringen können, ganz Ihnen und/oder Ihrem Designteam überlassen.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**)-Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht eine höhere Datenkomprimierungsrate als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265), und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzfrei und ist für die Verwendung mit dem {{HTMLElement("video")}}-Element und durch [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, welche mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling ausgestattet sind. Zusätzlich wird eine Reihe von **Levels** spezifiziert, von denen jedes die Grenzen einer Reihe von Videoattributen definiert. Diese Attribute umfassen Bildabmessungen, Bildflächen in Pixeln, Anzeige- und Decodiergeschwindigkeiten, durchschnittliche und maximale Bitraten sowie Begrenzungen für die Anzahl von Kacheln und Kachelspalten, die im Codier-/Decodierprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber seine maximale Bildgröße in Pixeln beträgt 147.456, sodass ein 2048x1152-Video auf Level 2.0 tatsächlich nicht abgespielt werden kann. Es sei jedoch darauf hingewiesen, dass zumindest bei Firefox und Chrome die Levels derzeit ignoriert werden, wenn eine Softwaredecodierung durchgeführt wird, und der Decoder einfach sein Bestes gibt, um das Video mit den bereitgestellten Einstellungen abzuspielen. Für zukünftige Kompatibilität sollten Sie jedoch innerhalb der Grenzen des gewählten Levels bleiben.

AV1 wird in allen Browsern unterstützt, aber die Unterstützung in Safari ist auf Geräte beschränkt, die über einen Hardwaredecoder verfügen, das heißt, M3 MacBooks und später, iPhone 15 Pro und iPhone 16 und später. Viele mobile und Desktop-Geräte haben Hardwaredecoder, was AV1 zu einer ausgezeichneten Wahl für die Bereitstellung von Videos im Web macht, mit einer Rückfalloption für ältere Apple-Geräte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Level des Videos; theoretisches Maximum erreicht 800 Mbps bei Level 6.3
        </p>
        <p>
          Siehe die
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Tabellen der Levels</a
          >
          der AV1-Spezifikation, die die maximalen Auflösungen und Raten in jedem Level beschreiben.
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
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basiertes Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension einen beliebigen Wert zwischen diesen annehmen kann
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
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
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
          <sup>*</sup> Safari unterstützt AV1 auf M3 MacBooks und später, iPhone 15 Pro, und iPhone 16 und später.
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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

Der **Advanced Video Coding** (**AVC**)-Standard ist in der ITU H.264-Spezifikation und der MPEG-4 Teil 10-Spezifikation identisch beschrieben. Er ist ein auf Bewegungs-Kompensation basierender Codec, der heute weit verbreitet für alle Arten von Medien genutzt wird, einschließlich Übertragung im Fernsehen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist sehr flexibel und bietet eine Vielzahl von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien entwickelt, da es weniger Bandbreite nutzt als das Main Profile (das in einigen Regionen für digitales Fernsehen in Standardauflösung verwendet wird) oder das High Profile (das für Blu-Ray-Disc-Video verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chroma-Subsampling. Das High 10 Profile fügt Unterstützung für 10-Bit-Farben hinzu, und fortgeschrittene Formen von High 10 fügen 4:2:2 und 4:4:4-Chroma-Subsampling hinzu.

AVC hat auch spezielle Funktionen wie die Unterstützung für mehrere Ansichten der gleichen Szene (Multiview Video Coding), was beispielsweise die Produktion von stereoskopischem Video ermöglicht.

AVC ist jedoch ein proprietäres Format und zahlreiche Patente werden von verschiedenen Parteien bezüglich seiner Technologien gehalten. Kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA-Patent-Pool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endnutzer kostenlos ist.

Nicht-Web-Browser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht dazu verpflichtet sind, tun es manche.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen Hardware-Codierung und -Dekodierung von AVC-Medien. Seien Sie jedoch auf die [Lizenzanforderungen](https://www.via-la.com/licensing-programs/avc-h-264/) aufmerksam, bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

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
          >DCT-basiertes Algorithmus</a
        >, jedoch ist es möglich, verlustfreie Makroblöcke innerhalb des Bildes zu erzeugen
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
        Ja;
        <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma"
          >Hybrid Log-Gamma</a>
        oder Advanced HDR/SL-HDR; beide sind Teil von ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von Firefox für AVC hängt davon ab, ob der
          eingebaute oder vorinstallierte Codec für AVC und dessen Container
          im Betriebssystem zur Verfügung steht, um Patentsorgen zu vermeiden.
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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
        <a href="https://www.via-la.com/licensing-programs/avc-h-264/"
          >erfordert eine Lizenz</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

ITUs **H.263**-Codec wurde hauptsächlich für den Einsatz in niedrigen Bandbreiten entwickelt. Insbesondere liegt der Schwerpunkt auf Videokonferenzen über PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme). Trotz seiner Optimierung für Netzwerke mit niedriger Bandbreite ist er recht CPU-intensiv und könnte auf schwächeren Rechnern möglicherweise nicht zufriedenstellend funktionieren. Das Datenformat ähnelt dem von MPEG-4 Teil 2.

H.263 wurde im Web nie weit verbreitet genutzt. Variationen von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie Flash-Video oder den Sorenson-Codec. Allerdings hat kein großer Browser jemals standardmäßig H.263-Unterstützung eingebaut. Bestimmte Medien-Plugins haben die Unterstützung für H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines codierten Videos hinsichtlich der maximalen Bitrate pro Frame (Bild) oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann kann das Video diesen Wert pro Frame nicht überschreiten. Die endgültige Bitrate hängt von diesem, der Bildrate, der Kompression und der gewählten Auflösung und Blockformat ab.

H.263 wurde durch H.264 abgelöst und wird daher als veraltetes Medienformat angesehen, das Sie generell vermeiden sollten, wenn möglich. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, ist, wenn Sie Unterstützung auf sehr alten Geräten benötigen, bei denen H.263 die beste Wahl darstellt.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, einschließlich Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und so weiter. Um H.263 zu verwenden, sind Sie gesetzlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

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
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basiertes Algorithmus</a
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
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF, oder 16CIF) definiert
        die Bildgröße in Pixeln sowie die Anzahl der Zeilen, die für jede der Luminanz- und Chrominanzproben
        für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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
        Proprietär; entsprechende Lizenz oder Lizenzen sind erforderlich. Beachten Sie,
        dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **High Efficiency Video Coding** (**HEVC**)-Codec ist durch die ITU als **H.265** sowie durch MPEG-H Teil 2 definiert (das noch in Entwicklung befindliche Nachfolgeformat zu MPEG-4). HEVC wurde entwickelt, um effizientes Kodieren und Dekodieren von Videos in Größen einschließlich sehr hoher Auflösungen (einschließlich 8K-Video) zu unterstützen, mit einer Struktur, die speziell darauf ausgelegt ist, dass Software moderne Prozessoren optimal nutzen kann. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie die von [AVC](#avc_h.264), jedoch mit vergleichbarer Bildqualität.

Jede Coding-Tree-Einheit (CTU) – ähnlich dem in früheren Codecs verwendeten Makroblock – besteht beispielsweise aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede Chroma-Probe, die in derselben Coding-Tree-Einheit verwendet werden, sowie aus allen erforderlichen Syntaxelementen. Diese Struktur unterstützt eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-Bit pro Komponente mit 4:2:0-Chroma-Subsampling unterstützt. Bemerkenswert ist auch, dass 4:4:4-Video speziell behandelt wird. Anstatt die Luma-Proben (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Proben (die angeben, wie die Graustufen in Farbpixel umgewandelt werden) zu verwenden, werden die drei Kanäle stattdessen als drei monochrome Bilder betrachtet, eines für jede Farbe, die dann während der Wiedergabe kombiniert werden, um ein Vollfarbbild zu erzeugen.

HEVC ist ein proprietäres Format und wird durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA](https://www.via-la.com/licensing-programs/hevc-vvc/) verwaltet; Gebühren werden an Entwickler und nicht an Inhalteproduzenten und -vertreiber erhoben. Stellen Sie sicher, die neuesten Lizenzbedingungen und -anforderungen zu prüfen, bevor Sie eine Entscheidung treffen, ob Sie HEVC in Ihrer App oder Webseite verwenden wollen!

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
          >DCT-basiertes Algorithmus</a
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
          Informationen unten sind für die Hauptprofile angegeben. Es gibt eine Reihe anderer Profile, die hier nicht aufgeführt sind.
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
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
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
        <p>Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 8+, Linux und ChromeOS, für alle Geräte unter macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 10 1709+ wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat denselben Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardwaredecoder.
        </p>
        <p>Firefox aktiviert HEVC unter:
          <ul>
            <li>Windows ab Firefox 134 mit entweder Hardware (auf Geräten, die es unterstützen, wobei der Bereich derselbe wie bei Edge ist) oder Software (unter Windows muss der Benutzer eine Erweiterung bezahlen und installieren)</li>
            <li>macOS ab Firefox 136 mit entweder Hardware oder Software.</li>
            <li>Linux ab Firefox 137 mit entweder Hardware oder Software (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere auf Chromium basierende Browser haben denselben Unterstützungsstatus wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte unter macOS High Sierra oder neuer.</p>
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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
        Proprietär; bestätigen Sie Ihre Einhaltung der
        <a href="https://www.via-la.com/licensing-programs/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**)-Format ist Teil des MPEG-4 Teil 2 Visual-Standards. Während im Allgemeinen MPEG-4 Teil 2-Video aufgrund seines Mangels an überzeugendem Wert im Vergleich zu anderen Codecs von niemandem verwendet wird, hat MP4V-ES etwas Nutzung auf mobilen Geräten. MP4V ist im Wesentlichen eine H.263-Codierung im MPEG-4-Container.

Sein Hauptzweck besteht darin, MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Sitzung zu streamen. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung mithilfe von [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie möchten dieses Format wahrscheinlich nicht verwenden, da es nicht in nennenswerter Weise von großen Browsern unterstützt wird und sehr veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, sind jedoch manchmal fälschlicherweise als `.mp4` gekennzeichnet.

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
          >DCT-basiertes Algorithmus</a
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
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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
        <a href="https://www.via-la.com/licensing-programs/mpeg-4-visual/"
          >eine Lizenz erhalten</a
        >
        durch <a href="https://www.via-la.com/">Via LA</a> und/oder
        <a href="https://about.att.com/innovation/ip/patents"
          >AT&#x26;T</a
        >
        nach Bedarf
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG entwickelt, ohne Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr im Zusammenhang mit MPEG-1-Video, sodass es ohne Lizenzprobleme verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne ein Plugin, und da die Verwendung von Plugins in Webbrowsern abgelehnt wird, sind diese in der Regel nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für den Einsatz auf Websites und in Webanwendungen.

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
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basiertes Algorithmus</a
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
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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
        Proprietär; allerdings sind alle Patente abgelaufen, sodass MPEG-1
        frei verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert wird und gelegentlich auch durch seine {{Glossary("ITU", "ITU")}}-Bezeichnung H.262 bekannt ist. Es ist dem MPEG-1-Video sehr ähnlich—tatsächlich kann jeder MPEG-2-Player MPEG-1 automatisch verarbeiten—, außer dass es erweitert wurde, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 fähig zu machen, Standarddefinitionen im Fernsehen zu komprimieren, sodass interlaced Video ebenfalls unterstützt wird. Die Standarddefinitionskompressionsrate und die Qualität des resultierenden Videos erfüllten die Bedürfnisse so gut, dass MPEG-2 der primäre Videocodec für DVD-Videomedien wurde.

MPEG-2 hat mehrere verfügbare Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Level verfügbar, von denen jedes die Attribute des Videos erhöht, wie Bildrate, Auflösung, Bitrate und so weiter. Die meisten Profile verwenden Y'CbCr mit 4:2:0-Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Zusätzlich gibt es vier Level, die jeweils Unterstützung für größere Bilddimensionen und Bitraten bieten. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für Fernsehen in Nordamerika MPEG-2-Video in hoher Auflösung unter Verwendung des Main Profile bei High Level, was 4:2:0-Video bei sowohl 1920 x 1080 (30 FPS) als auch 1280 x 720 (60 FPS) mit einer maximalen Bitrate von 80 Mbps ermöglicht.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da Plugins in Webbrowsern nicht mehr verwendet werden, sind diese in der Regel nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für den Einsatz auf Websites und in Webanwendungen.

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
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basiertes Algorithmus</a
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
        Y'CbCr mit 4:2:0-Chroma-Subsampling in den meisten Profilen; die "High" und
        "4:2:2"-Profile unterstützen ebenfalls 4:2:2-Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen mit Ausnahme von Malaysia (zum 1. Oktober 2024), sodass MPEG-2 außerhalb von Malaysia frei verwendet werden kann. Patente werden von <a href="https://www.via-la.com/licensing-programs/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat eine extrem geringe Nutzung, und die Unterstützung wird aus den Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und lizenzfreier Videocodec, der ohne Lizenzgebühren oder -anforderungen verwendet werden kann. Theora ist in Bezug auf Qualität und Kompressionsraten vergleichbar mit MPEG-4 Teil 2 Visual und AVC, was es zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Videokodierung macht. Aber sein Status, frei von jeglichen Lizenzproblemen zu sein, und die relativ niedrigen CPU-Ressourcenanforderungen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Die niedrige CPU-Belastung ist besonders nützlich, da es keine Hardwaredecoder für Theora gibt.

Theora basierte ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbänder zu vermeiden. Das gesagt, sind 8 Bit pro Komponente immer noch das am häufigsten verwendete Farbformat, sodass dies in den meisten Fällen nur ein geringfügiger Nachteil ist. Theora kann jedoch nur in einem Ogg-Container verwendet werden. Der größte Nachteil ist jedoch, dass es nicht von Safari unterstützt wird, was Theora nicht nur auf macOS unzugänglich macht, sondern auch auf all den Millionen von iPhones und iPads.

Das [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) bietet zusätzliche Details über Theora sowie das Ogg-Container-Format, in dem es verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Beliebig; jeder positive Wert wird unterstützt. Die Bildrate wird als 32-Bit-Zähler und 32-Bit-Nenner angegeben, um nicht-ganzzahlige Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basiertes Algorithmus</a
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
        Y'CbCr mit 4:2:0, 4:2:2 und 4:4:4 Chroma-Subsampling bei 8 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Variable Bildraten (VFR) innerhalb eines einzelnen Streams unterstützt, können mehrere Streams in einer einzigen Datei aneinandergereiht werden, und jeder davon kann seine eigene Bildrate haben, wodurch im Grunde genommen VFR ermöglicht wird. Dies ist jedoch unpraktisch, wenn sich die Bildrate häufig ändern muss.
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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

Der **Video Processor 8** (**VP8**)-Codec wurde ursprünglich von On2 Technologies entwickelt. Nach der Übernahme von On2 hat Google VP8 als offenes und lizenzfreies Videoformat unter der Zusicherung veröffentlicht, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Wenn der Browser es unterstützt, erlaubt VP8 Videos mit einem Alphakanal, der das Abspielen des Videos ermöglicht, wobei der Hintergrund im Maße, das durch die Alphakomponente jedes Pixels angegeben wird, sichtbar ist. Safari unterstützt keine Alphatransparenz in VP8-Videos.

Es gibt eine gute Browser-Unterstützung für VP8 in HTML-Inhalten, insbesondere innerhalb von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden levelbasierte Beschränkungen erzwungen</td>
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
          >DCT-basiertes Algorithmus</a
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
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari. Allerdings unterstützt Safari keine Alphatransparenz.</p>
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
      <td>Ja; VP8 ist einer der im WebRTC-Standard geforderten Codecs</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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
Wie VP8 ist VP9 vollständig offen und lizenzfrei.
Seine Codierungs- und Dekodierungsleistung ist mit der von AVC vergleichbar oder etwas schneller, jedoch mit besserer Qualität.
Die codierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

VP9s Hauptprofil unterstützt nur 8-Bit-Farbtiefe bei 4:2:0-Chroma-Subsampling-Stufen, aber seine Profile umfassen Unterstützung für tiefere Farben und die volle Bandbreite der Chroma-Subsampling-Modi.
Es unterstützt mehrere HDR-Implementierungen und bietet erhebliche Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von vielen Browsern unterstützt, und hardwarebasierte Implementierungen des Codecs sind ziemlich verbreitet.
VP9 ist einer der beiden von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) vorgeschriebenen Videocodecs (der andere ist [VP8](#vp8)).
Es ist jedoch zu beachten, dass Safari keine Alphatransparenz in diesem Format unterstützt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden levelbasierte Beschränkungen erzwungen</td>
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
          >DCT-basiertes Algorithmus</a
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
      <th scope="row">Variable Bildraten (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari. Allerdings unterstützt Safari keine Alphatransparenz.</p>
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
      <th scope="row">Unterstützende/Fördernde Organisation</th>
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

- Möchten Sie ein offenes Format verwenden oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu erstellen? Die Möglichkeit, eine Fallback-Option anzubieten, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei denen Sie bereit sind, auf Kompatibilität zu verzichten?
- Wie alt ist die älteste Version des Webbrowsers, die Sie unterstützen müssen? Zum Beispiel, müssen Sie auf jedem in den letzten fünf Jahren ausgelieferten Browser funktionieren oder nur im vergangenen Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als am besten für den Anwendungsfall betrachtet wird, proprietär ist oder Lizenzgebühren erfordern könnte, werden zwei Optionen bereitgestellt: Zuerst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format wählen, das am besten zu Ihren Anforderungen passt. Die erste wird als gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am weitesten kompatible Wahl sein, allerdings auf Kosten von etwas Qualität, Leistung und/oder Größe.

### Empfehlungen für das Web

Zuerst betrachten wir die besten Optionen für Videos auf einer typischen Website wie einem Blog, einer Informationsseite, einer kleinen Unternehmenswebsite, auf der Videos zur Demonstration von Produkten verwendet werden (aber nicht, wo die Videos selbst ein Produkt sind) und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)** Container mit dem **[AV1](#av1)** Codec für Video und dem **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)** Codec für Audio. Diese sind alle offene, lizenzfreie Formate, die im Allgemeinen gut unterstützt werden, mit der Ausnahme von Safari auf älteren Apple-Geräten.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
   </video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)** Container und der **[AVC](#avc_h.264)** (**H.264**) Video-Codec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Ihrem Audio-Codec. Dies ist, weil die Kombination aus dem MP4-Container mit AVC und AAC-Codec in jedem großen Browser unterstützt wird, und die Qualität ist typischerweise gut für die meisten Anwendungsfälle. Stellen Sie jedoch sicher, dass Sie Ihre Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein schließendes `</video>`-Tag, unabhängig davon, ob Sie irgendwelche {{HTMLElement("source")}}-Elemente darin haben oder nicht.

### Empfehlungen für Archivierung, Bearbeitung oder Remixen

Es gibt derzeit keine verlustfreien – oder auch nur annähernd verlustfreien – Video-Codecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Beispielsweise benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0-Chroma-Abtastung mindestens 1,5 Gbps. Die Verwendung verlustfreier Kompression wie FFV1 (die nicht von Webbrowsern unterstützt wird) könnte dies möglicherweise auf etwa 600 Mbps reduzieren, je nach Inhalt. Das ist immer noch eine riesige Menge an Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keinen realen Anwendungsfall praktikabel.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus haben; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec auszuwählen, der verlustbehaftete Kompression verwendet, und ihn so zu konfigurieren, dass so wenig Kompression wie möglich durchgeführt wird. Eine Möglichkeit, dies zu tun, besteht darin, den Codec so zu konfigurieren, dass er "schnelle" Kompression verwendet, was inhärent bedeutet, dass weniger Kompression erreicht wird.

#### Vorbereitung von Videos auf externen Systemen

Um Videos zu Archivierungszwecken außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Hilfsprogramm, das die Kompression auf den ursprünglichen unkomprimierten Videodaten durchführt. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Hilfsprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Obwohl andere Codecs möglicherweise bessere Qualitätsstufen erreichen können, wenn das Video erheblich komprimiert wird, sind deren Encoder oft so langsam, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Kompression erhalten, bei etwa gleichem Qualitätslevel erheblich schneller ist.

#### Aufnahme von Videos

Angesichts der Einschränkungen, wie nah Sie an verlustfreies Video herankommen können, sollten Sie vielleicht [AVC](#avc_h.264) oder [AV1](#av1) in Betracht ziehen. Zum Beispiel, wenn Sie die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie einen Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der so konfiguriert ist, [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chroma-Abtastung aufzunehmen und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio zu verwenden. Die resultierende Datei wird eine Bitrate von maximal 800 Mbps zwischen den Video- und Audiotracks verwenden. Sie müssen diese Werte wahrscheinlich an die Hardwareleistung, Ihre Anforderungen und die spezifischen Codecs, die Sie wählen, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Übertragung im Netzwerk und würde wahrscheinlich nur lokal verwendet werden.

Wenn wir den Wert des `codecs`-Parameters in seine punktabgetrennten Eigenschaften zerlegen, sehen wir folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                        |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Der vierstellige Code (4CC), der den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                                               |
| `2`    | Das Profil. Ein Wert von 2 steht für das professionelle Profil. Ein Wert von 1 ist das High Profile, während ein Wert von 0 das Main Profile angibt.                                                                                                                                                |
| `19H`  | Der Level und Tier. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt den High Tier von Level 6.3 an.                                                                                                           |
| `12`   | Die Farbtiefe. Dies zeigt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchste Farbgenauigkeit, die in AV1 verfügbar ist.                                                                                                                                         |
| `0`    | Das Monochrommodus-Flag. Wenn 1, dann würden keine Chroma-Ebenen aufgezeichnet, und alle Daten sollten nur Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 angegeben, da wir Farbe möchten.                                                                                         |
| `000`  | Der Chroma-Abtastmodus nach [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, in Kombination mit dem Monochrommodus-Wert 0, zeigt an, dass wir eine 4:4:4-Chroma-Abtastung oder keinen Verlust von Farbdaten wünschen. |
| `09`   | Die verwendeten Farbprimärfarben. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farben verwenden wollen, die für HDR verwendet werden.                                           |
| `16`   | Die verwendeten Übertragungscharakteristika. Diese stammen ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 zeigt an, dass wir die Charakteristika für BT.2100 PQ-Farben verwenden wollen.                                                      |
| `09`   | Die verwendeten Matrixkoeffizienten aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) erneut. Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Luminanz verwenden wollen; dies ist auch bekannt als BT.2010 YbCbCr.                                      |
| `1`    | Das Video-„Vollbereichs“-Flag. Ein Wert von 1 zeigt an, dass wir den vollen Farbbereich verwenden möchten.                                                                                                                                                                                          |

Die Dokumentation für Ihre gewählten Codecs wird wahrscheinlich Informationen bieten, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden können.

## Siehe auch

- [Leitfaden für Web-Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgehung von Medienunterstützungsproblemen im Webinhalt](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die Parameter „Codecs“ und „Profile“ für „Bucket“-Medientypen
- {{RFC(5334)}}: Ogg-Mediendateitypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimediadateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimediadateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

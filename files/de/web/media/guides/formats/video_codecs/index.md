---
title: Leitfaden für Web-Videocodecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 3d5a03ea2b7fefbd4428e582bd14c44177c4ba2f
---

Dieser Leitfaden stellt die Video-Codecs vor, auf die Sie im Web am ehesten stoßen oder in Erwägung ziehen könnten, zusammen mit Zusammenfassungen ihrer Fähigkeiten sowie etwaigen Kompatibilitäts- und Nutzbarkeitsbedenken und Ratschlägen, die Ihnen helfen, den richtigen Codec für die Videoprojekt auszuwählen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie speichern zu können, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die zur Speicherung unkomprimierter Videos benötigt wird:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in voller Farbe (4 Bytes pro Pixel) umfasst 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) beanspruchen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine übliche 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ in Anspruch nehmen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die erforderlich wäre, um ein solches unkomprimiertes Video zu übertragen, wäre enorm, bei 249 MB/Sek.—ohne Ton und Overhead. Hier kommen Video-Codecs ins Spiel. Genau wie Audio-Codecs dies für die Klangdaten tun, komprimieren Video-Codecs die Videodaten und encodieren sie in ein Format, das später decodiert und wiedergegeben oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, da das decodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details können verloren gehen; der Grad des Verlusts hängt vom Codec und seiner Konfiguration ab, doch als allgemeine Regel gilt: Je mehr Kompression Sie erzielen, desto größer sind Detail- und Treueverluste. Einige verlustfreie Codecs existieren, werden aber typischerweise für Archiv- und Speicherzwecke zur lokalen Wiedergabe verwendet und nicht zur Verwendung in einem Netzwerk.

## Häufige Codecs

Die folgenden Video-Codecs werden im Web am häufigsten verwendet. Für jeden Codec sind die Container (Dateitypen) aufgelistet, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt unten, der zusätzliche Details zu den spezifischen Fähigkeiten und Kompatibilitätsproblemen des Codecs enthält, die Sie möglicherweise berücksichtigen müssen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
      <th scope="col">Vollständiger Codec-Name</th>
      <th scope="col">Containerunterstützung</th>
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
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Part 2 Visual</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: Details über das Format und den Inhalt des Quellvideos sowie die Eigenschaften und die Konfiguration des Codecs, der bei der Kodierung des Videos verwendet wird.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video dem Original, unkomprimierten Video ähnlicher macht, wird in der Regel auch die resultierenden Daten vergrößern. Es ist daher immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen lohnt sich das größere Opfer an Qualität, um die Datengröße zu verringern; andere Male ist der Qualitätsverlust inakzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Einfluss des Quellvideoformats auf das kodierte Ergebnis

Das Ausmaß, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und dessen Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als mit einfachen Pixeln darstellt, macht das Format des Originalbildes keinen Unterschied. Faktoren wie die Bildfrequenz und natürlich die Auflösung haben jedoch immer einen Einfluss auf die Ausgabengröße der Medien.

Darüber hinaus haben alle Codecs ihre Stärken und Schwächen. Einige haben Probleme mit bestimmten Arten von Formen und Mustern, können keine scharfen Kanten replizieren oder neigen dazu, in dunklen Bereichen Details zu verlieren, oder es kann eine Vielzahl anderer Probleme auftreten. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss von Quellvideoformat und -inhalt auf die Qualität und Größe des kodierten Videos
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
      <th scope="row">Farbtiefe (Bittiefe)</th>
      <td>
        Je höher die Farbbittiefe, desto höher ist die erreichbare
        Farbtreuequalität im Video. Darüber hinaus ermöglichen
        bei gesättigten Bildbereichen (das heißt, dort, wo die Farben rein und
        intensiv sind, wie ein helles, reines Rot: <code>rgb(255 0 0 / 100%)</code>),
        Farbtiefen unter 10 Bit pro Komponente (10-Bit-Farbe) Banding, wo
        Verläufe ohne sichtbare Farbstufen nicht angezeigt werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren
        komprimierten Dateigrößen führen. Der entscheidende Faktor ist das
        verwendete interne Speicherformat für die komprimierten Daten.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildfrequenz</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Fließfähigkeit der Bewegung
        im Bild. Je höher die Bildfrequenz, desto fließender und realistischer
        wird die Bewegung bis zu einem bestimmten Punkt erscheinen. Irgendwann
        wird der Punkt abnehmender Rückkehr erreicht. Siehe unten unter
        <a href="#reduced_frame_rate">Bildfrequenz</a> für weitere Details.
      </td>
      <td>
        Lässt man die Bildfrequenz während der Kodierung nicht reduzieren,
        führt eine höhere Bildfrequenz zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Komprimierung von Videos funktioniert typischerweise durch den Vergleich
        von Bildern, das Auffinden von Unterschieden und das Erstellen von
        Aufzeichnungen, die ausreichend Informationen enthalten, um das vorherige
        Bild zu aktualisieren und das Erscheinungsbild des folgenden Bildes
        zu approximieren. Je mehr sich aufeinanderfolgende Bilder
        voneinander unterscheiden, desto größer sind diese Unterschiede und
        desto weniger effektiv ist die Komprimierung, um die Einführung von
        Artefakten in das komprimierte Video zu vermeiden.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren
        Zwischenbildern aufgrund der größeren Anzahl von Unterschieden
        zwischen den Bildern. Aus diesem und anderen Gründen wird die
        Ausgabedatei umso größer sein, je mehr Bewegung in einem Video
        vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere körnige
        Strukturen im Bild) führt zu Variabilität. Variabilität erschwert
        im Allgemeinen die Komprimierung und führt zu mehr
        Qualitätsverlust aufgrund der Notwendigkeit, Details fallen zu lassen,
        um das gleiche Kompressionsniveau zu erreichen.
      </td>
      <td>
        Je mehr Variabilität—wie Rauschen—im Bild vorhanden ist, desto
        komplexer ist der Komprimierungsprozess und desto geringer ist die
        Erfolgswahrscheinlichkeit des Algorithmus, das Bild zu demselben Grad zu
        komprimieren. Sofern Sie den Encoder nicht so konfigurieren, dass er
        einige oder alle durch Rauschen verursachten Variationen ignoriert, wird
        das komprimierte Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video kann auf derselben Bildschirmgröße typischerweise
        die Originalszene genauer darstellen, es sei denn, es treten Effekte auf
        bei der Komprimierung auf.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es.
        Dies spielt eine wichtige Rolle bei der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und seiner Konfiguration. Neben allgemeinen Codec-Optionen kann der Encoder so konfiguriert werden, dass die Bildfrequenz reduziert, das Rauschen entfernt und/oder die Gesamtauflösung des Videos während der Kodierung verringert wird.

### Einfluss der Codec-Konfiguration auf das kodierte Ergebnis

Die Algorithmen, die zur Kodierung von Videos verwendet werden, nutzen typischerweise eine oder mehrere allgemeine Techniken zur Durchführung der Kodierung. Im Allgemeinen haben alle Konfigurationsoptionen, die dazu dienen, die Ausgabegröße des Videos zu verringern, wahrscheinlich negative Auswirkungen auf die Gesamtqualität des Videos oder führen zu bestimmten Arten von Artefakten im Video. Es ist auch möglich, eine verlustfreie Kodierung zu wählen, was zu einer viel größeren kodierten Datei führt, jedoch bei der Decodierung eine perfekte Reproduktion des Originalvideos ermöglicht.

Darüber hinaus kann es bei jeder Encoder-Software Unterschiede in der Verarbeitung des Quellvideos geben, die zu Unterschieden in der Ausgabequalität und/oder -größe führen.

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
      <th scope="row">Verlustfreie Komprimierung</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Komprimierung kann die Gesamtgröße des Videos bei weitem
        nicht so stark reduzieren wie verlustbehaftete Komprimierung; die
        resultierenden Dateien sind wahrscheinlich noch zu groß für den
        allgemeinen Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Komprimierung</th>
      <td>
        In gewissem Maße treten Artefakte und andere Formen von
        Qualitätsverschlechterung auf, abhängig vom spezifischen Codec und
        davon, wie viel Komprimierung angewendet wird.
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto
        einfacher ist es, höhere Komprimierungsraten zu erzielen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr sieht das kodierte Video
        dem Originalmedium ähnlich.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten
        Videodateien; das Maß, in dem dies zutrifft, variiert je nach Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich im Allgemeinen mit höheren Bitraten.</td>
      <td>Höhere Bitraten führen von Natur aus zu größeren Ausgabedateien.</td>
    </tr>
  </tbody>
</table>

Die beim Kodieren von Videos verfügbaren Optionen und die den Optionen zuzuweisenden Werte variieren nicht nur von einem Codec zum anderen, sondern auch je nach der Kodierungssoftware, die Sie verwenden. Die in Ihrer Kodierungssoftware enthaltene Dokumentation hilft Ihnen zu verstehen, wie sich diese Optionen konkret auf das kodierte Video auswirken.

## Kompressionsartefakte

**Artefakte** sind Nebeneffekte eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten sichtbare negative Effekte verursachen. Einmal aufgetretene Artefakte können eine Weile bleiben, da Videos in einer bestimmten Weise angezeigt werden. Jedes Videobild wird angezeigt, indem ein Satz von Änderungen auf das derzeit sichtbare Bild angewendet wird. Dies bedeutet, dass alle Fehler oder Artefakte sich im Laufe der Zeit summieren und zu Ruckeln oder anderweitig merkwürdigen oder unerwarteten Abweichungen im Bild führen können, die eine Weile anhalten.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselbilder** (auch als **Intra-Bilder** oder **i-Frames** bekannt) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Bilder, die verwendet werden, um sichtbare Fehler oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was nach dem Wiederaufbau aus den kodierten Daten nicht mehr genauso aussieht wie vor der Kompression. Es gibt viele Formen von Aliasing; die häufigsten, die Sie sehen könnten, umfassen:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="Moiré_patterns">Moire-Muster</h4>
        <p>
          Ein
          <a href="https://de.wikipedia.org/wiki/Moire"><strong>Moire-Muster</strong></a>
          ist ein großflächiges räumliches Interferenzmuster, das entsteht, wenn ein
          Muster im Quellbild und die Art und Weise, wie der Encoder arbeitet,
          geringfügig räumlich nicht übereinstimmen. Die vom Encoder
          generierten Artefakte führen dann zu seltsamen, wirbelnden Effekten
          im Muster des Quellbildes beim Decodieren.
        </p>
      </td>
      <td>
        <img alt="eine Ziegelmauer, die durch das Moiré-Muster einen Wirbeleffekt zeigt, der Wellen ähnelt" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das auftritt,
          wenn Diagonalen oder gebogene Kanten, die glatt sein sollten, ein
          gezacktes Erscheinungsbild annehmen und wie eine Reihe von
          Treppenstufen aussehen. Dies ist der Effekt, den "Anti-Aliasing"-Filter
          reduzieren sollen.
        </p>
      </td>
      <td>
        <img alt="Foto von Diagonalen, die durch Aliasing wie eine Treppe aussehen und den Treppeneffekt verursachen" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradd-Effekt</h4>
        <p>
          Der <strong>Wagenradd-Effekt</strong> (oder
          <strong
            ><a href="https://de.wikipedia.org/wiki/Stroboskop-Effekt">Stroboskop-Effekt</a></strong
          >) ist der visuelle Effekt, der häufig in Filmen zu sehen ist, bei dem
          ein sich drehendes Rad aufgrund einer Interaktion zwischen der
          Bildfrequenz und dem Komprimierungsalgorithmus scheinbar mit der
          falschen Geschwindigkeit oder sogar rückwärts rotiert. Der gleiche
          Effekt kann bei jedem sich bewegenden Muster auftreten, wie etwa
          Bahnschwellen, Pfosten an der Straßenseite usw. Dies ist ein
          temporales (zeitbasiertes) Aliasing-Problem; die Geschwindigkeit der
          Rotation liegt dabei mit der Frequenz der während der Komprimierung
          oder Kodierung durchgeführten Abtastung im Clinch.
        </p>
      </td>
      <td>
        <img alt="Drehendes Rad aufgrund von Aliasing, das den Wagenradd-Effekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbränder

**Farbränder** sind eine Art von visuellen Artefakten, die sich als unnatürliche Farben entlang der Kanten von Objekten im Szenenbild präsentieren. Diese Farben haben keine beabsichtigte Beziehung zu den Bildinhalten.

### Verlust von Schärfe

Der Akt des Entfernens von Daten im Prozess der Videokodierung erfordert, dass einige Details verloren gehen. Wenn genügend Komprimierung angewendet wird, könnten Teile oder möglicherweise das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder trüben Erscheinungsbild führt.

Verlust von Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text—insbesondere kleiner Text—sehr detailorientierter Inhalt ist, bei dem geringfügige Veränderungen die Lesbarkeit erheblich beeinflussen können.

### Klingeln

Verlustbehaftete Komprimierungsalgorithmen können ein **[Klingeln](https://de.wikipedia.org/wiki/Ringartefakte)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit Farbpixeln verunreinigt werden, die vom Komprimierungsalgorithmus erzeugt wurden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund hinweg spannt. Dies ist insbesondere bei höheren Komprimierungsstufen häufig.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und pinkfarbenen Ränder um die Kanten des Sterns oben (sowie die Stufenbildung und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ähnelt in gewisser Hinsicht [Moskito-Rauschen](#moskito-rauschen), außer dass der Klingeleffekt mehr oder weniger konstant und unveränderlich ist, während Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, die es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Komprimierung zu Verlusten an Farbdetails in Farbabstufungen führt. Statt sanfter Übergänge durch verschiedene Farben in einem Bereich wird das Bild blockig, mit Farbflocken, die das ursprüngliche Erscheinungsbild des Bildes annähern.

![Foto des Weißkopfseeadlers mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers im obigen Foto (und der Schneeeule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisationsartefakte verloren.

### Konturierung

**Konturierung** oder **Farbbandbildung** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu grob quantisierenden Konfiguration kodiert wird. Infolgedessen zeigt der Inhalt des Videos ein "geschichtetes" Aussehen, bei dem Übergänge von Farbe zu Farbe abrupt sind und Streifen aus Farben erscheinen.

![Beispiel für ein Bild, dessen Komprimierung Konturierung eingeführt hat](contouring-effect.jpg)

Beachten Sie im Beispielbild oben, wie der Himmel Bänder verschiedener Blautöne hat, anstatt ein gleichmäßiger Gradient zu sein, während sich die Himmelfarbe dem Horizont nähert. Dies ist der Konturierungseffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein temporales Artefakt, das als Rauschen oder **Kantenknistern** erscheint, das sich als flackernde Dunstigkeit oder Schimmern manifestiert, die sich grob entlang der Kanten harter Übergänge oder scharfer Übergänge zwischen Vordergrundobjekten und dem Hintergrund bewegt. Der Effekt kann dem [Klingeln](#klingeln) ähnlich sehen.

![Beispiel für ein Bild, dessen Komprimierung Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das Foto oben zeigt Moskito-Rauschen an mehreren Stellen, einschließlich im Himmel, der die Brücke umgibt. In der oberen rechten Ecke zeigt ein Einsatz eine Nahaufnahme eines Teils des Bildes, das Moskito-Rauschen zeigt.

Moskito-Rauschen-Artefakte sind am häufigsten in MPEG-Video zu finden, können jedoch auftreten, wenn ein diskreter Kosinustransformationsalgorithmus (DCT) verwendet wird; dies umfasst beispielsweise JPEG-Standbilder.

### Bewegungskompensation Blockgrenzenartefakte

Die Komprimierung von Videos funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Bild nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera an Ort und Stelle fixiert ist oder sich die Objekte im Bild relativ ruhig verhalten. Wenn jedoch viel Bewegung im Bild vorhanden ist, kann die Anzahl der Unterschiede zwischen den Frames so groß sein, dass die Komprimierung keinen Nutzen mehr hat.

**[Bewegungskompensation](https://de.wikipedia.org/wiki/Bewegungskompensation)** ist eine Technik, die nach Bewegungen (entweder der Kamera oder der Objekte im Bild) sucht und bestimmt, um wie viele Pixel sich das bewegende Objekt in jede Richtung bewegt hat. Diese Verschiebungen werden dann gespeichert, zusammen mit einer Beschreibung der verschobenen Pixel, die nicht allein durch die Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die bewegten Objekte und erstellt dann eine Art internes Bild, das das Original reproduziert, aber mit allen Objekten an ihren neuen Positionen. Diese Methode bildet theoretisch das Aussehen des neuen Bildes nach. Um die Arbeit abzuschließen, werden die verbleibenden Unterschiede festgestellt, dann wird die Menge an Objektschmalungen und die Menge an Pixel-Differenzen in den Daten gespeichert, die das neue Bild darstellen. Dieses Objekt, das die Verschiebung und die Pixelunterschiede beschreibt, wird als **Residual-Bild** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalrahmen</th>
      <th scope="col" style="width: 216px">Unterschiede zwischen Bildern</th>
      <th scope="col" style="width: 216px">Unterschied nach Bewegungskompensation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalvideo-Rahmen" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Bild und dem nachfolgenden Bild." src="motion-comp-diff.jpg" /></td>
      <td><img alt="Unterschiede zwischen den Bildern nach Verschiebung um zwei Pixel nach rechts" src="motion-comp-compensated.jpg" /></td>
    </tr>
    <tr>
      <td style="vertical-align: top">Das erste voll sichtbare Bild.</td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Bild und dem
        folgenden Bild zu sehen. Alles andere ist schwarz. Bei genauerem Hinsehen
        erkennen wir, dass die Mehrheit dieser Unterschiede von einer horizontalen
        Kamerabewegung herrührt, was dies zu einem guten Kandidaten für Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der Pixel, die sich unterscheiden, zu minimieren, berücksichtigen wir
        hier die Kameraschwenkbewegung, indem wir das erste Bild um zwei Pixel nach
        rechts verschieben und dann die Differenz nehmen. Dies kompensiert den
        Kameraschwenk, um mehr Überlappung zwischen den beiden Bildern zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th colspan="3" style="font: italic 0.9em Arial, x-locale-body, sans-serif; vertical-align: middle;">Bilder von <a href="https://en.wikipedia.org/wiki/Motion_compensation#Illustrated_example">Wikipedia</a></th>
    </tr>
  </tbody>
</table>

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Block-Bewegungskompensation**. Die globale Bewegungskompensation passt sich im Allgemeinen für Kamerabewegungen wie Verfolgung, Kamerafahrten, Schwenken, Neigen, Drehen und Auf- und Abbewegungen an. Die Block-Bewegungskompensation behandelt lokale Änderungen und sucht nach kleineren Bildabschnitten, die mit Bewegungskompensation kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe in einem Raster, es gibt jedoch Formen der Bewegungskompensation, die variable Blockgrößen und sogar überlappende Blöcke ermöglichen.

Es gibt jedoch Artefakte, die aufgrund der Bewegungskompensation auftreten können. Diese treten entlang von Blockgrenzen in Form von scharfen Kanten auf, die falsches Klingeln und andere Randartefekte erzeugen. Diese Probleme resultieren aus der Mathematik, die bei der Kodierung der Restbilder verwendet wird, und können leicht bemerkt werden, bevor sie durch das nächste Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu verringern, um die endgültige Größe der Videodatei zu verbessern. Während der unmittelbare Verlust von Größe oder Geschmeidigkeit der Wiedergabe ein negativer Faktor sein kann, kann eine sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein, aber eine viel höhere visuelle Qualität aufweisen; selbst nach dem Hochskalieren während der Wiedergabe kann das Ergebnis besser sein, als das ursprüngliche Video in voller Größe zu kodieren und die erforderliche Qualitätseinbuße zu akzeptieren, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildfrequenz

In ähnlicher Weise können Sie völlig Bilder aus dem Video entfernen und die Bildfrequenz entsprechend verringern. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht, dass Bewegungskompensation noch mehr für Sie erreicht. Beispielsweise könnte das Überspringen jedes zweiten Bildes, anstatt Bewegungsunterschiede für zwei Bilder zu berechnen, die zwei Pixel auseinander stehen aufgrund der Bewegungen zwischen den Bildern, zu einer Bewegung führen, die aus vier Pixeln besteht. Dies ermöglicht, dass die Gesamtbewegung der Kamera durch weniger Restbilder dargestellt wird.

Die absolute Mindestbildfrequenz, bei der ein Video nicht mehr als Bewegung vom menschlichen Auge wahrgenommen wird, beträgt etwa 12 Bilder pro Sekunde. Weniger als das und das Video wird zu einer Bilderreihe. Kinofilme weisen typischerweise 24 Bilder pro Sekunde auf, während Standard-Definition-Fernsehfernseh etwa 30 Bilder pro Sekunde und hochauflösendes Fernsehen zwischen 24 und 60 Bilder pro Sekunde liegt. Alles von 24 FPS aufwärts wird im Allgemeinen als zufriedenstellend flüssig angesehen; 30 oder 60 FPS sind, abhängig von Ihren Bedürfnissen, ein ideales Ziel.

Letztendlich liegen die Entscheidungen darüber, welche Opfer Sie bringen können und/oder Ihr Designteam akzeptabel machen können, ganz bei Ihnen.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkomprimierungsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig gebührenfrei und ist sowohl für die Verwendung mit dem {{HTMLElement("video")}} Element als auch mit [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Darüber hinaus wird eine Reihe von **Levels** spezifiziert, die jeweils Grenzen für eine Reihe von Videoattributen definieren. Diese Attribute umfassen Bildabmessungen, Bildfläche in Pixel, Anzeige- und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Grenzen für die Anzahl der Kacheln und Kachelspalten, die im Codierungs-/Decodierungsprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video in Level 2.0 haben können. Es sei jedoch darauf hingewiesen, dass zumindest für Firefox und Chrome die Levels derzeit bei der Software-Dekodierung ignoriert werden und der Decoder sein Bestes tut, um das Video unter den gegebenen Einstellungen wiederzugeben. Im Hinblick auf die zukünftige Kompatibilität sollten Sie jedoch innerhalb der Grenzen des gewählten Levels bleiben.

Der Hauptnachteil von AV1 ist derzeit, dass es sehr neu ist und die Unterstützung noch in den meisten Browsern integriert wird. Zudem werden Encoder und Decoder noch für die Leistung optimiert, und Hardware-Encoder und -Decoder befinden sich größtenteils noch in der Entwicklung statt in der Produktion. Aus diesem Grund dauert das Kodieren eines Videos in AV1-Format sehr lange, da die gesamte Arbeit in Software erfolgt.

Derzeit ist AV1 aufgrund dieser Faktoren noch nicht bereit, Ihre erste Wahl unter den Video-Codecs zu sein, aber Sie sollten darauf achten, wann es einsatzbereit ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Level des Videos; theoretisch maximales Niveau erreicht 800 Mbps in Level 6.3
        </p>
        <p>
          Siehe die
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Tabellen der Levels</a
          >
          der AV1-Spezifikation, die die maximalen Auflösungen und Raten auf jedem Level beschreiben.
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
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis zu 65.535 x 65.535 Pixel, wobei jede Dimension einen Wert zwischen diesen annehmen darf
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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

Der **Advanced Video Coding** (**AVC**) Standard der MPEG-4-Spezifikationsreihe wird von der identischen ITU H.264 Spezifikation und der MPEG-4 Part 10 Spezifikation spezifiziert. Es handelt sich um einen auf Bewegungsentkopplung basierenden Codec, der heute weithin für alle Arten von Medien verwendet wird, einschließlich Rundfunkfernsehen, {{Glossary("RTP", "RTP")}} Videokonferenzen und als Video-Codec für Blu-Ray Discs.

AVC ist sehr flexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien konzipiert, wobei weniger Bandbreite als das Main Profile benötigt wird (das in einigen Regionen für digitales Fernsehen in Standardauflösung verwendet wird) oder das High Profile (wird für Blu-Ray Disc Video verwendet). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling; Das High 10 Profile fügt Unterstützung für 10-Bit-Farbe hinzu, und erweiterte Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC verfügt auch über spezielle Funktionen wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), was unter anderem die Produktion von stereoskopischen Videos ermöglicht.

AVC ist jedoch ein proprietäres Format, und zahlreiche Patente werden von mehreren Parteien in Bezug auf seine Technologien gehalten. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs umfasst) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht dazu verpflichtet sind, tun dies einige dennoch.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen die Hardwarekodierung und -dekodierung von AVC-Medien. Achten Sie jedoch auf seine [Lizenzierungsanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

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
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
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
        <p>Einige der häufigsten oder interessanten Profile:</p>
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von Firefox für AVC hängt davon ab, ob die
          integrierten oder vorinstallierten Codecs des Betriebssystems für AVC und sein Container verfügbar sind, um Patentprobleme zu vermeiden.
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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
        >. Beachten Sie, dass mehrere Patentpools anwendbar sein können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263** Codec der ITU wurde hauptsächlich für den Einsatz in Niedrigbandbreitenszenarien entwickelt. Insbesondere liegt sein Fokus auf Videokonferenzen in PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenz) Systemen. Trotz der Optimierung für Niedrigbandbreitennetze ist er ziemlich CPU-intensiv und möglicherweise auf leistungsschwächeren Computern nicht ausreichend leistungsfähig. Das Datenformat ist dem von MPEG-4 Part 2 ähnlich.

H.263 wurde im Web nie weit verbreitet genutzt. Abwandlungen von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie Flash Video oder der Sorenson Codec. However, no major browser has ever included H.263 support by default. Bestimmte Media-Plugins haben die Unterstützung für H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 Grundlagen eines codierten Videos hinsichtlich der maximalen Bitrate pro Bild (Bild), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und dann darf das Video diesen Wert pro Bild nicht überschreiten. Die endgültige Bitrate hängt von diesem Wert, der Bildrate, der Kompression und der gewählten Auflösung und Blockformat ab.

H.263 wurde durch H.264 abgelöst und wird daher als veraltetes Medienformat betrachtet, das Sie, wenn möglich, vermeiden sollten zu verwenden. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, ist, wenn Sie Unterstützung auf sehr alten Geräten benötigen, auf denen H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) im Besitz von einer Reihe von Organisationen und Unternehmen, einschließlich Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und so weiter. Um H.263 zu verwenden, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erhalten.

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
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        <p>Bis zu 1408 x 1152 Pixel.</p>
        <p>
          Version 1 von H.263 legt eine Reihe von unterstützten Bildgrößen fest. Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert die Bildgröße in Pixeln sowie wie viele Reihen von Luminanz- und Chrominanzproben für jedes Bild verwendet werden
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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
        mehrere Patentpools anwendbar sein können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec wird von ITUs **H.265** sowie von MPEG-H Teil 2 (dem noch in Entwicklung befindlichen Nachfolger von MPEG-4) festgelegt. HEVC wurde entwickelt, um effizientes Kodieren und Dekodieren von Video in Größen einschließlich sehr hoher Auflösungen (einschließlich 8K Video) zu unterstützen, mit einer Struktur, die speziell entwickelt wurde, um Software die Nutzung moderner Prozessoren zu ermöglichen. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie die von [AVC](#avc_h.264), aber mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Coding Tree Unit (CTU) - ähnlich dem Makroblock, der in früheren Codecs verwendet wird - aus einem Baum von Luma-Werten für jedes Sample sowie einem Baum von Chroma-Werten für jedes Chroma-Sample, das in derselben Coding Tree Unit verwendet wird, sowie allen erforderlichen Syntaxelementen. Diese Struktur unterstützt die einfache Verarbeitung durch mehrere Kerne.

Eine interessante Funktion von HEVC ist, dass das Main Profile nur 8-Bit-Farbe pro Komponente mit 4:2:0 Chroma-Subsampling unterstützt. Auch interessant ist, dass 4:4:4 Video speziell behandelt wird. Anstatt die Luma-Samples (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Samples (die angeben, wie die Grautöne geändert werden sollen, um Farb-Pixel zu erstellen), werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eins für jede Farbe, die dann beim Rendern kombiniert werden, um ein Vollfarbenbild zu erzeugen.

HEVC ist ein proprietäres Format und ist durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA verwaltet](https://www.via-la.com/licensing-2/hevc-vvc/); Gebühren werden an Entwickler und nicht an Inhalte-Produzenten und -Verteiler erhoben. Bitte überprüfen Sie die neuesten Lizenzbedingungen und -anforderungen, bevor Sie eine Entscheidung darüber treffen, ob Sie HEVC in Ihrer App oder Website verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800.000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert nach Level; bis zu 300 FPS ist möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
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
          Informationen unten werden für die großen Profile bereitgestellt. Es gibt eine
          Reihe anderer Profile, die hier nicht enthalten sind.
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
        <p>Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 8+, Linux und ChromeOS, für alle Geräte unter macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 10 1709+ wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat den gleichen Support-Status wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Dekoder.
        </p>
        <p>Firefox aktiviert HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 mit entweder Hardware (auf Geräten, die es unterstützen, wobei der Bereich derselbe ist wie bei Edge) oder Software (auf Windows muss der Benutzer eine kostenpflichtige Erweiterung installieren)</li>
            <li>macOS ab Firefox 136 mit entweder Hardware oder Software.</li>
            <li>Linux ab Firefox 137 mit entweder Hardware oder Software (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere auf Chromium basierende Browser haben den gleichen Support-Status wie Chrome.</p>
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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
        Proprietär; bestätigen Sie Ihre Einhaltung von den
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools anwendbar sein können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des MPEG-4 Teil 2 Visuellen Standards. Während MPEG-4 Teil 2 Video im Allgemeinen von niemandem verwendet wird, da es im Vergleich zu anderen Codecs keinen überzeugenden Wert bietet, wird MP4V-ES etwas in mobilen Anwendungen genutzt. MP4V ist im Wesentlichen eine H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist es, MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}} Sitzung zu streamen. Jedoch wird MP4V-ES auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung unter Verwendung von [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie möchten dieses Format fast sicher nicht verwenden, da es von keinem großen Browser in nennenswerter Weise unterstützt wird und ziemlich veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden jedoch manchmal fälschlicherweise als `.mp4` bezeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Keine spezifische Begrenzung; nur durch die Datenrate beschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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
          >Lizenz erhalten</a
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

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre eingeführt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG entwickelt, ohne Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr in Bezug auf MPEG-1-Video, sodass es ohne Lizenzierungssorgen verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne Unterstützung eines Plugins, und da die Verwendung von Plugins in Webbrowsern abgelöst wird, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für den Einsatz auf Websites und Webapplikationen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1.5 Mbps</td>
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
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert wird, und wird manchmal auch anhand seiner {{Glossary("ITU", "ITU")}} Bezeichnung, H.262, genannt. Es ist dem MPEG-1-Video sehr ähnlich - tatsächlich kann jeder MPEG-2-Player MPEG-1 automatisch handeln, ohne besondere Anpassungen - außer dass es erweitert wurde, um höhere Bitraten und fortschrittliche Kodierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 zu ermöglichen, SDTV zu komprimieren, sodass auch Interlaced-Video unterstützt wird. Die Standarddefinition Kompressionsrate und die Qualität des resultierenden Videos erfüllten die Anforderungen gut genug, sodass MPEG-2 das primäre Video-Codec für DVD-Video-Medien ist.

MPEG-2 hat mehrere Profile verfügbar mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Level verfügbar, die jeweils Attribute des Videos, wie Bildrate, Auflösung, Bitrate und so weiter, erhöhen. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortschrittlichere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Stufen, die jeweils Unterstützung für größere Bilddimensionen und Bitraten bieten. Zum Beispiel, die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards) Spezifikation Fernsehen, das in Nordamerika verwendet wird, unterstützt MPEG-2-Video in HD mit dem Main Profile bei High Level, wodurch 4:2:0 Video bei sowohl 1920 x 1080 (30 FPS) und 1280 x 720 (60 FPS), bei einer maximalen Bitrate von 80 Mbps möglich ist.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da der Nutzung von Plugins in Webbrowsern abgelöst ist, sind diese normalerweise nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für den Einsatz auf Websites und Webapplikationen.

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
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
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
        "4:2:2" Profile unterstützen auch 4:2:2 Chroma-Subsampling.
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
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>, MPEG-TS (MPEG Transport Stream), <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>, <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen, mit Ausnahme von Malaysia (ab dem 1. Oktober 2024), sodass MPEG-2 frei außerhalb Malaysias verwendet werden kann.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat extrem geringe Nutzung und die Unterstützung wird aus Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und freier Video-Codec, der ohne Lizenzgebühren oder Lizenzierung verwendet werden kann. Theora ist in Qualität und Kompressionsrate mit MPEG-4 Part 2 Visual und AVC vergleichbar, was es zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Video-Kodierung macht. Aber sein Status als frei von Lizenzierungsbedenken und sein relativ niedriger CPU-Ressourcenverbrauch macht es zu einer beliebten Wahl für viele Software- und Web-Projekte. Die geringe CPU-Belastung ist besonders nützlich, da keine Hardware-Dekoder für Theora verfügbar sind.

Theora wurde ursprünglich auf dem VC3-Codec von On2 Technologies basiert. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz freigegeben und Xiph.org anvertraut, das es dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbkomponente unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Dennoch ist 8 Bit pro Komponente immer noch das am häufigsten verwendete Farbformat heutzutage, sodass dies in den meisten Fällen nur ein geringes Ärgernis darstellt. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil jedoch ist, dass es von Safari nicht unterstützt wird, wodurch Theora nicht nur auf macOS, sondern auf all den Millionen von iPhones und iPads unzugänglich ist.

Das [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) bietet zusätzliche Details über Theora sowie das Ogg-Container-Format, in dem es verwendet wird.

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
        als 32-Bit-Zähler und ein 32-Bit-Nenner angegeben, um nicht-ganzzahlige
        Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
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
          Während Theora keine Unterstützung für Variable Bildrate (VFR) innerhalb eines einzelnen
          Stroms bietet, können mehrere Streams in einer einzigen Datei verkettet werden,
          und jeder dieser Streams kann seine eigene Bildrate haben, sodass im Wesentlichen
          VFR ermöglicht wird. Dies ist jedoch unpraktisch, wenn
          die Bildrate häufig wechseln muss.
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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
      <td>Offen und frei von Lizenzgebühren und jeglichen anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies entwickelt. Nach dem Kauf von On2 durch Google wurde VP8 als offenes und lizenzfreies Videoformat unter dem Versprechen veröffentlicht, die entsprechenden Patente nicht durchzusetzen. In Qualität und Kompressionsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Wenn der Browser es unterstützt, ermöglicht VP8 Video mit einem Alphakanal, der es erlaubt, dass das Video mit dem Hintergrund sichtbar in dem Grad abgespielt wird, der durch die Alphakomponente jedes Pixels angegeben wird.

Es gibt eine gute Browserunterstützung für VP8 in HTML-Inhalten, insbesondere innerhalb von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) Dateien.
Dies macht VP8 zu einer guten Wahl für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl ist, wenn verfügbar.
Web-Browser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, aber nicht alle Browser, die dies tun, unterstützen es auch in HTML-Audio- und Video-Elementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden einschränkende Level erzwungen</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
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
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und spätere Versionen unterstützen VP8 nur in WebRTC-Verbindungen.</p>
        <p>Firefox unterstützt VP8 nur in MSE, wenn kein H.264-Hardware-Decoder verfügbar ist. Verwenden Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu prüfen.</p>
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Ja; VP8 ist einer der spezifikations-required Codecs für WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und frei von Lizenzgebühren und jeglichen anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8 Standards, entwickelt von Google. Wie VP8 ist VP9 vollkommen offen und lizenzfrei. Seine Codierungs- und Dekodierungsleistung ist vergleichbar mit oder etwas schneller als die von AVC, jedoch mit besserer Qualität. Die kodierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0 Chroma-Subsampling-Niveaus, aber seine Profile beinhalten Unterstützung für tiefere Farben und die volle Bandbreite von Chroma-Subsampling-Modi. Es unterstützt mehrere HDR-Implementierungen und bietet erhebliche Freiheit bei der Wahl der Bildraten, Seitenverhältnisse und Bildgrößen.

VP9 wird von Browsern breit unterstützt, und Hardwareimplementierungen des Codecs sind ziemlich häufig. VP9 ist einer der beiden Video-Codecs, die von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) vorgeschrieben sind (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass die Safari-Unterstützung für WebM und VP9 erst in Version 14.1 eingeführt wurde, sodass Sie, wenn Sie VP9 verwenden, ein Fallback-Format wie AVC oder HEVC für iPhone-, iPad- und Mac-Benutzer in Betracht ziehen sollten.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und bei Bedarf Fallback-Video bereitstellen können). Dies gilt insbesondere, wenn Sie einen offenen Codec anstelle eines proprietären verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden einschränkende Level erzwungen</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >auf DCT-basierender Algorithmus</a
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p>
          Firefox unterstützt VP8 nur in MSE, wenn kein H.264-Hardware-Decoder verfügbar ist. Verwenden
          Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static), um die Verfügbarkeit zu prüfen.
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
        {{Glossary("RTP", "RTP")}} / <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>-kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Vergabeorganisation</th>
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
      <td>Offen und frei von Lizenzgebühren und jeglichen anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Videocodecs

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Fähigkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, mit denen Sie sich bereit erklären, die Kompatibilität zu opfern?
- Wie alt ist die älteste Version eines Webbrowsers, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem in den letzten fünf Jahren ausgelieferten Browser arbeiten oder nur im vergangenen Jahr?

In den unten stehenden Abschnitten bieten wir empfohlene Codecauswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der für den Anwendungsfall als am besten geeignete Codec proprietär ist oder Lizenzgebühren erforderlich sein könnten, werden zwei Optionen bereitgestellt: zuerst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format wählen, das für Ihre Bedürfnisse am besten geeignet ist. Die erste wird als gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option ist die am weitesten kompatible Wahl, auf Kosten von etwas Qualität, Leistung und/oder Größe.

### Empfehlungen für alltägliche Videos

Zuerst schauen wir uns die besten Optionen für Videos auf einer typischen Website an, wie z.B. einem Blog, einer Informationsseite, einer Website eines kleinen Unternehmens, auf der Videos verwendet werden, um Produkte zu demonstrieren (aber nicht, wo die Videos selbst ein Produkt sind), und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container, der den **[VP9](#vp9)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Dies sind alles offene, lizenzfreie Formate, die in der Regel gut unterstützt werden, obwohl nur in recht aktuellen Browsern, weshalb ein Fallback eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**) Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Ihrem Audiocodec. Dies liegt daran, dass der MP4-Container mit AVC und AAC Codecs eine weit verbreitete Kombination darstellt – tatsächlich von jedem großen Browser – und die Qualität in der Regel für die meisten Anwendungsfälle gut ist. Stellen Sie jedoch sicher, dass Sie die Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert einen schließenden `</video>`-Tag, unabhängig davon, ob sich darin {{HTMLElement("source")}}-Elemente befinden oder nicht.

### Empfehlungen für hochwertige Videopräsentationen

Wenn Ihr Ziel darin besteht, Videos in der höchstmöglichen Qualität zu präsentieren, profitieren Sie wahrscheinlich davon, so viele Formate wie möglich anzubieten, da die Codecs, die die beste Qualität erzielen können, auch tendenziell die neuesten sind und daher die größte Wahrscheinlichkeit haben, Lücken in der Browser-Kompatibilität zu haben.

1. Ein WebM-Container, der AV1 für Video und Opus für Audio verwendet. Wenn Sie in der Lage sind, das High- oder Professional-Profil beim Codieren von AV1 zu verwenden, auf einem hohen Level wie 6.3, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erzielen und gleichzeitig eine hervorragende Videoqualität beibehalten. Das Codieren Ihres Audios mit dem Fullband-Profil von Opus bei einer Abtastrate von 48 kHz maximiert die erfasste Audiobandbreite, erfasst fast den gesamten Frequenzbereich, der im menschlichen Gehör liegt.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container, der den [HEVC](#hevc_h.265)-Codec unter Verwendung eines der fortschrittlichen Hauptprofile verwendet, wie Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4 Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies exzellente Grafikqualität mit bemerkenswerter Farbwiedergabe. Darüber hinaus können Sie optional HDR-Metadaten einfügen, um Videos mit hohem Dynamikumfang bereitzustellen. Für Audio verwenden Sie den AAC-Codec bei einer hohen Abtastrate (mindestens 48 kHz, idealerweise 96 kHz) und kodiert mit komplexer Kodierung statt schneller Kodierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Es gibt derzeit keine verlustfreien – oder auch nur nahezu verlustfreien – Videocodecs, die generell in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Ein unkomprimiertes 1080p-Video (1920 x 1080 Pixel) mit 4:2:0-Chroma-Subsampling benötigt beispielsweise mindestens 1,5 Gbps. Die Verwendung verlustfreier Kompression wie FFV1 (die von Webbrowsern nicht unterstützt wird) könnte dies vielleicht auf etwa 600 Mbps reduzieren, abhängig vom Inhalt. Das sind immer noch eine enorme Menge an Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keine realen Anwendungen praktikabel.

Das ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus verfügbar haben; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen qualitativ hochwertigen Codec zu wählen, der verlustbehaftete Kompression verwendet und ihn so zu konfigurieren, dass er so wenig Kompression wie möglich durchführt. Eine Möglichkeit, dies zu tun, besteht darin, den Codec für "schnelle" Kompression zu konfigurieren, was impliziert, dass weniger Kompression erreicht wird.

#### Vorbereitung von Videos extern

Um Videos für Archivierungszwecke außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Kompression der ursprünglichen unkomprimierten Videodaten durchführt. Zum Beispiel kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 infile
```

Während andere Codecs möglicherweise bessere Qualitätsstufen im besten Fall bieten, wenn das Video mit einem signifikanten Vorsprung komprimiert wird, sind ihre Encoder oft so langsam, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Kompression erhalten, bei etwa der gleichen Gesamtqualität erheblich schneller ist.

#### Videoaufnahme

Angesichts der Einschränkungen, wie nah Sie an verlustfrei herankommen können, könnten Sie die Verwendung von [AVC](#avc_h.264) oder [AV1](#av1) in Betracht ziehen. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chroma-Subsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzunehmen. Die resultierende Datei wird eine Bitrate von nicht mehr als 800 Mbps verwenden, die zwischen den Video- und Audiotracks geteilt wird. Sie müssen wahrscheinlich diese Werte entsprechend der Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Übertragung über das Netz und würde wahrscheinlich nur lokal verwendet werden.

Aufgeschlüsselt auf die Werte des `codecs`-Parameters und deren punktgetrennte Eigenschaften sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                                   |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Die vierstellige Code-Bezeichnung (4CC), die den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                                              |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                                    |
| `19H`  | Das Level und Tier. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt das hohe Tier von Level 6.3 an.                                                                                                                      |
| `12`   | Die Farbtiefe. Dies gibt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchste Genauigkeit der Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                                     |
| `0`    | Das Monochrom-Modus-Flag. Wenn 1, würden keine Chroma-Ebenen aufgezeichnet, und alle Daten sollten rein Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 spezifiziert, weil wir Farbe wollen.                                                                                                   |
| `000`  | Der Chroma-Subsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrom-Modus-Wert 0, zeigt an, dass wir 4:4:4-Chroma-Subsampling wünschen, also keinen Verlust von Farbdaten. |
| `09`   | Die zu verwendenden Farbprimäre. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                                                         |
| `16`   | Die zu verwendenden Übertragungseigenschaften. Diese kommen ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 gibt an, dass wir die Eigenschaften für BT.2100 PQ-Farbe verwenden möchten.                                                                   |
| `09`   | Die zu verwendenden Matrix-Koeffizienten, ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Luminanz verwenden möchten; dies ist auch als BT.2010 YbCbCr bekannt.                                       |
| `1`    | Das Video-"Vollbereichs"-Flag. Ein Wert von 1 gibt an, dass wir den gesamten Farbbereich verwenden möchten.                                                                                                                                                                                                    |

Die Dokumentation zu Ihren Codecauswahlen bietet wahrscheinlich Informationen, die Sie beim Aufbau Ihres `codecs`-Parameters verwenden.

## Siehe auch

- [Webaudio-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Medienunterstützungsproblemen im Webinhalt](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die "Codecs" und "Profile"-Parameter für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

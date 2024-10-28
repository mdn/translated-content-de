---
title: Leitfaden zu Web-Video-Codecs
slug: Web/Media/Formats/Video_codecs
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Dieser Leitfaden stellt die Video-Codecs vor, auf die Sie am ehesten im Web stoßen oder die Sie in Betracht ziehen werden. Er bietet Zusammenfassungen ihrer Fähigkeiten sowie eventuelle Kompatibilitäts- und Nutzungsbedenken und gibt Ratschläge, die Ihnen helfen können, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der enormen Größe von unkomprimierten Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie speichern zu können, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Menge an Daten vor, die zur Speicherung von unkomprimiertem Video benötigt wird:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in voller Farbe (4 Bytes pro Pixel) ist 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde von HD-Video 248.832.000 Bytes (\~249 MB) beanspruchen.
- Eine Minute HD-Video würde 14,93 GB Speicher benötigen.
- Eine 30-minütige Videokonferenz würde etwa 447,9 GB Speicher benötigen, und ein 2-stündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ beanspruchen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die erforderlich wäre, um ein so unkomprimiertes Video zu übertragen, wäre bei 249 MB/s enorm — Audio und Overhead nicht eingeschlossen. Hier kommen Video-Codecs ins Spiel. Genau wie Audiocodecs für die Audiodaten komprimieren Videocodecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details könnten verloren gehen; das Ausmaß des Verlusts hängt vom Codec und seiner Konfiguration ab, aber als allgemeine Regel gilt: Je mehr Kompression Sie erreichen, desto mehr gehen Details und Qualität verloren. Es gibt auch verlustfreie Codecs, aber sie werden typischerweise für Archivierung und Speicherung für lokale Wiedergabe und nicht für die Netzwerknutzung eingesetzt.

## Allgemeine Codecs

Die folgenden Videocodecs sind diejenigen, die am häufigsten im Web verwendet werden. Für jeden Codec sind auch die Container (Dateitypen) angegeben, die ihn unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt unten, der zusätzliche Details über den Codec enthält, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Sie beachten sollten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: Spezifika über das Format und den Inhalt des Quellvideos sowie die Eigenschaften und Konfiguration des verwendeten Codecs während der Videokodierung.

Die einfachste Richtlinie ist folgende: Alles, was das kodierte Video dem originalen, unkomprimierten Video ähnlicher macht, wird in der Regel auch die resultierenden Daten größer machen. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In bestimmten Situationen ist ein größerer Qualitätsverlust zugunsten einer geringeren Datenmenge diesen Verlust wert; in anderen Fällen ist der Qualitätsverlust inakzeptabel, und es ist notwendig, eine Codec-Konfiguration zu wählen, die eine entsprechend größere Datei zur Folge hat.

### Einfluss des Quellvideo-Formats auf das kodierte Ergebnis

Das Ausmaß, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als durch einfache Pixel darstellt, macht das Format des ursprünglichen Bildes keinen Unterschied. Einige Dinge, wie die Bildrate und offensichtlich die Auflösung, werden jedoch immer einen Einfluss auf die Größe der Ausgabe haben.

Darüber hinaus hat jeder Codec seine Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern, sind nicht gut darin, scharfe Kanten zu reproduzieren, oder neigen dazu, Details in dunklen Bereichen zu verlieren, oder eine beliebige Anzahl von Möglichkeiten. Alles hängt von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss des Quellvideo-Formats und -inhalts auf die kodierte Videoqualität und -größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Einfluss auf Qualität</th>
      <th scope="col">Einfluss auf Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Farbtiefe (Bit-Tiefe)</th>
      <td>
        Je höher die Farbtiefe, desto höher die Farbtreue des Videos. In gesättigten Bereichen des Bildes (d. h. dort, wo Farben rein und intensiv sind, wie ein leuchtendes, reines Rot: <code>rgb(255 0 0 / 100%)</code>) kann bei Farbtiefen unter 10 Bit pro Komponente (10-Bit-Farbe) Farbbänder auftreten, bei denen die Farbverlaufs nicht ohne sichtbare Abstufung der Farben dargestellt werden kann.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren komprimierten Dateigrößen führen. Der entscheidende Faktor ist das interne Speicherformat, das für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Geschmeidigkeit der Bewegung im Bild. Bis zu einem gewissen Punkt gilt: Je höher die Bildrate, desto flüssiger und realistischer erscheint die Bewegung. Irgendwann wird der Punkt abnehmender Erträge erreicht. Details siehe <a href="#reduced_frame_rate">Bildrate</a> weiter unten.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird beim Kodieren nicht reduziert, führen höhere Bildraten zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Videokomprimierung funktioniert normalerweise, indem sie Rahmen vergleicht, wo sie sich unterscheiden, und Datensätze erstellt, die genügend Informationen enthalten, um den vorherigen Rahmen zu aktualisieren und den folgenden Rahmen annähernd darzustellen. Je mehr aufeinanderfolgende Frames sich voneinander unterscheiden, desto größer sind diese Unterschiede und desto weniger effektiv ist die Komprimierung bei der Vermeidung der Einführung von Artefakten in das komprimierte Video.
      </td>
      <td>
        Die Komplexität, die durch Bewegung entsteht, führt zu größeren Zwischenbildern aufgrund der höheren Anzahl an Unterschieden zwischen den Rahmen. Aus diesem und anderen Gründen wird das Ausgabevideo tendenziell größer, je mehr Bewegung in einem Video steckt.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmkörnungseffekte, Staub oder andere Körnigkeit des Bildes) führt zu Variabilität. Variabilität erschwert im Allgemeinen die Komprimierung, was zu mehr Qualitätsverlusten aufgrund der Notwendigkeit führt, Details zu verlieren, um das gleiche Komprimierungsniveau zu erreichen.
      </td>
      <td>
        Je mehr Variabilität – wie Rauschen – im Bild vorhanden ist, desto komplizierter wird der Komprimierungsprozess und desto weniger Erfolg wird der Algorithmus vermutlich dabei haben, das Bild im gleichen Maße zu komprimieren. Es sei denn, Sie konfigurieren den Encoder so, dass er einige oder alle durch Rauschen verursachten Variationen ignoriert, wird das komprimierte Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Ein Video mit höherer Auflösung wird in derselben Bildschirmgröße in der Regel in der Lage sein, die ursprüngliche Szene genauer darzustellen, abgesehen von Effekten, die während der Komprimierung eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies spielt eine wesentliche Rolle bei der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den präzisen Details der Situation, einschließlich des verwendeten Encoders und seiner Konfiguration. Neben allgemeinen Codec-Optionen könnte der Encoder so konfiguriert werden, dass er die Bildrate reduziert, das Rauschen bereinigt und/oder die gesamte Auflösung des Videos während der Kodierung reduziert.

### Einfluss der Codec-Konfiguration auf das kodierte Ergebnis

Die Algorithmen, die zur Kodierung von Videos verwendet werden, verwenden in der Regel eine oder mehrere allgemeine Techniken zur Durchführung der Kodierung. Im Allgemeinen gilt: Jede Konfigurationsoption, die dazu bestimmt ist, die Ausgabegröße des Videos zu reduzieren, wird wahrscheinlich negative Auswirkungen auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Form der Kodierung auszuwählen, die zu einer viel größeren kodierten Datei, aber mit perfekter Reproduktion des ursprünglichen Videos nach der Dekodierung führt.

Darüber hinaus kann es bei den verschiedenen Encoder-Utilities Unterschiede geben, wie sie das Quellvideo verarbeiten, was zu Unterschieden in der Ausgabequalität und/oder -größe führt.

<table class="standard-table">
  <caption>
    Auswirkungen der Video-Encoder-Konfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Einfluss auf Qualität</th>
      <th scope="col">Einfluss auf Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Verlustfreie Komprimierung</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Komprimierung kann die allgemeine Videogröße nicht annähernd so stark reduzieren wie verlustbehaftete Komprimierung; die resultierenden Dateien sind wahrscheinlich immer noch zu groß für den allgemeinen Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Komprimierung</th>
      <td>
        Bis zu einem bestimmten Grad werden Artefakte und andere Formen der Qualitätsminderung auftreten, abhängig vom spezifischen Codec und davon, wie viel Komprimierung angewendet wird.
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto leichter ist es, höhere Komprimierungsraten zu erzielen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr wird das kodierte Video wie das ursprüngliche Medium aussehen.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten Videodateien; das Ausmaß, in dem dies zutrifft, variiert je nach Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich im Allgemeinen mit höheren Bitraten</td>
      <td>Höhere Bitraten führen von Natur aus zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die beim Kodieren von Videos verfügbaren Optionen und die zuzuweisenden Werte variieren nicht nur von einem Codec zum anderen, sondern auch je nach der verwendeten Kodierungssoftware. Die Dokumentation, die Ihrer Kodierungssoftware beigefügt ist, wird Ihnen helfen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebeneffekte eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder umgeordneten Daten sichtbare negative Effekte hervorrufen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, da das Video angezeigt wird. Jedes Bild des Videos wird präsentiert, indem eine Reihe von Änderungen auf das derzeit sichtbare Bild angewendet werden. Das bedeutet, dass Fehler oder Artefakte sich im Laufe der Zeit summieren und zu Pannen oder andersartigen seltsamen oder unerwarteten Abweichungen im Bild führen, die eine Zeit lang bestehen bleiben.

Um dies zu lösen und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselbilder** (auch bekannt als **Intra-Frames** oder **i-Frames**) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Frames, die verwendet werden, um eventuell sichtbare Schäden oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasbildung ist ein allgemeiner Begriff für alles, was beim Rekonstruieren aus den kodierten Daten nicht mehr so aussieht wie vor der Komprimierung. Es gibt viele Formen der Aliasbildung; die häufigsten, die Sie möglicherweise sehen, sind:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="Moiré_patterns">Moiré-Muster</h4>
        <p>
          Ein
          <a href="https://de.wikipedia.org/wiki/Moir%C3%A9-Effekt"
            ><strong>Moiré-Muster</strong></a
          >
          ist ein großflächiges räumliches Interferenzmuster, das entsteht, wenn ein Muster im Quellbild und die Art und Weise, wie der Encoder arbeitet, räumlich leicht unausgerichtet sind. Die vom Encoder erzeugten Artefakte führen dann beim Dekodieren in das Muster des Quellbildes zu seltsamen, wirbelnden Effekten.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="Eine Ziegelmauer, die einen wirbelnden Effekt ähnlich Wellen durch das Moiré-Muster zeigt." src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das auftritt, wenn diagonale, gerade oder gekrümmte Kanten, die glatt sein sollten, eine gezackte Erscheinung annehmen und wie eine Treppenstufe aussehen. Diesen Effekt reduziert man mit „Anti-Aliasing“-Filtern.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die wie eine Treppe aussehen, verursacht durch Aliasing, das einen Treppeneffekt hervorruft
          " src="staircase-effect.jpg"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagon-Rad-Effekt</h4>
        <p>
          Der <strong>Wagon-Rad-Effekt</strong> (oder <strong><a href="https://de.wikipedia.org/wiki/Stroboskop-Effekt">Stroboskop-Effekt</a></strong>) ist der visuelle Effekt, der häufig im Film zu sehen ist, bei dem ein drehendes Rad scheint, sich mit der falschen Geschwindigkeit oder sogar rückwärts zu drehen, aufgrund einer Interaktion zwischen der Bildrate und dem Komprimierungsalgorithmus. Derselbe Effekt kann bei jedem sich bewegenden Muster auftreten, wie Krawatten auf einer Eisenbahnlinie, Pfosten entlang der Straße und dergleichen. Dies ist ein zeitliches (auf der Zeit basierendes) Aliasing-Problem; die Geschwindigkeit der Rotation interferiert mit der Frequenz des Samplings während der Kompression oder Kodierung.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Drehendes Rad, das durch Aliasing einen Wagon-Rad-Effekt hervorruft." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farb-Ränder

**Farb-Ränder** sind eine Art von visuellen Artefakten, die als ungewollte Farben entlang der Ränder farbiger Objekte innerhalb der Szene auftreten. Diese Farben haben keine beabsichtigte Farbbeziehung zu den Inhalten des Bildausschnitts.

### Verlust der Schärfe

Das Entfernen von Daten im Rahmen der Videokodierung erfordert, dass einige Details verloren gehen. Wenn genügend Kompression angewendet wird, könnten Teile oder potenziell das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder unscharfen Erscheinungsbild führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text – insbesondere kleiner Text – sehr detailorientierter Inhalt ist, bei dem kleine Änderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Komprimierungsalgorithmen können **[Klingeln](<https://de.wikipedia.org/wiki/Klingeln_(Technik)>)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit vom Komprimierungsalgorithmus erzeugten farbigen Pixeln kontaminiert werden. Dies passiert, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die sich über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund erstrecken. Dies ist insbesondere bei höheren Komprimierungsstufen üblich.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und rosa Fransen um die Kanten des Sterns oben (sowie die Stufung und andere signifikante Kompressionsartefakte). Diese Fransen sind der Klingeleffekt. Klingeln ähnelt in gewisser Hinsicht dem [Moskito-Rauschen](#moskito-rauschen), außer dass während der Klingeleffekt mehr oder weniger konstant und unverändert ist, Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Komprimierung zu einem Verlust von Farbdetails in Verläufen führt. Anstatt sanfter Übergänge durch die verschiedenen Farben in einer Region wird das Bild uneben, mit Farbblobs, die das ursprüngliche Erscheinungsbild des Bildes annähernd wiedergeben.

![Bild eines Weißkopfseeadlers mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Klumpigkeit der Farben im Gefieder des Weißkopfseeadlers im obigen Foto (und dem Schnee-Eule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisation verloren.

### Konturierung

**Konturierung** oder **Farb-Banding** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungs-Konfiguration kodiert wird. Infolgedessen zeigt der Inhalt des Videos ein „geschichtetes“ Aussehen, bei dem anstelle von sanften Farbverläufen und -übergängen diese abrupt wechseln und Farbstreifen entstehen.

![Beispiel für ein Bild, dessen Komprimierung zu Konturierung geführt hat](contouring-effect.jpg)

Im Beispielbild oben bemerken Sie, wie der Himmel Streifen unterschiedlicher Blautöne aufweist, anstatt ein gleichmäßiger Farbverlauf zu sein, wenn sich die Himmelsfarbe dem Horizont nähert. Dies ist der Konturierungs-Effekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Randaktivität** auftritt, die als flimmernde Unschärfe oder Schimmern erscheint, das grob außerhalb der Kanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann im Erscheinungsbild dem [Klingeln](#klingeln) ähneln.

![Beispiel eines Bildes, dessen Komprimierung Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich des Himmels um die Brücke. In der oberen rechten Ecke zeigt ein Einsatz eine Nahaufnahme eines Teils des Bildes, der Moskito-Rauschen aufweist.

Moskito-Rausch-Artefakte sind am häufigsten in MPEG-Videos zu finden, können jedoch immer dann auftreten, wenn ein diskreter Kosinustransformationsalgorithmus (DCT) verwendet wird; dies umfasst beispielsweise JPEG-Standbilder.

### Bewegungs-Kompensations-Blockgrenzen-Artefakte

Die Videokomprimierung funktioniert in der Regel, indem zwei Bilder verglichen und die Unterschiede zwischen ihnen erfasst werden, ein Bild nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera an Ort und Stelle fixiert ist oder sich die Objekte im Bild kaum bewegen, aber wenn es im Bild viel Bewegung gibt, können die Unterschiede zwischen den Bildern so groß sein, dass die Komprimierung keinen Nutzen mehr bringt.

**[Bewegungskompensation](https://de.wikipedia.org/wiki/Bewegungskompensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder von Objekten im sichtbaren Bereich) sucht und bestimmt, wie viele Pixel sich das bewegende Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung zusammen mit einer Beschreibung der sich bewegenden Pixel, die nicht nur durch die Verschiebung beschrieben werden können, gespeichert. Im Wesentlichen findet der Encoder die sich bewegenden Objekte und erstellt dann eine Art internes Bild, das dem Original ähnelt, aber mit allen Objekten an ihre neuen Positionen verschoben. Theoretisch nähert sich diese das Erscheinungsbild des neuen Bildes an. Zum Abschluss der Arbeit werden die verbleibenden Unterschiede gefunden und das Set von Objektverschiebungen sowie das Set von Pixelunterschieden in den Daten gespeichert, die das neue Bild repräsentieren. Dieses Objekt, das die Verschiebung und die Pixelunterschiede beschreibt, wird als **Residuenrahmen** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalbild</th>
      <th scope="col" style="width: 216px">Interframe-Unterschiede</th>
      <th scope="col" style="width: 216px">Unterschiede nach Bewegungs-Kompensation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originales Videobild" src="motion-comp-orig.jpg" /></td>
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
        Das erste vollständige Bild, wie es vom Betrachter gesehen wird.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Bild und dem folgenden zu sehen. Alles andere ist schwarz. Bei genauerem Hinsehen können wir feststellen, dass die Mehrheit dieser Unterschiede durch eine horizontale Kamerabewegung verursacht wird, was dieses Bild zu einem guten Kandidaten für die Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen wir hier das Schwenken der Kamera, indem wir das erste Bild zuerst um zwei Pixel nach rechts verschieben und dann den Unterschied berechnen. Dies kompensiert das Schwenken der Kamera, was zu mehr Überlappung der beiden Bilder führt.
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globale Bewegungskompensation passt im Allgemeinen Kamerabewegungen wie Verfolgung, Dolly-Bewegungen, Schwenken, Neigen, Rollen und Auf- und Abwärtsbewegungen an. Die Blockbewegungskompensation behandelt lokale Änderungen, indem kleinere Abschnitte des Bildes gesucht werden, die durch Bewegungskompensation kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen und sogar sich überlappende Blöcke zulassen.

Es gibt jedoch Artefakte, die durch Bewegungskompensation auftreten können. Diese treten entlang von Blockgrenzen in Form von scharfen Kanten auf, die falsches Klingeln und andere Randeffekte hervorrufen. Diese entstehen durch die Mathematik, die bei der Kodierung der Residuenrahmen zum Tragen kommt, und können leicht bemerkt werden, bevor sie durch das nächste Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Während der unmittelbare Verlust an Größe oder Geschmeidigkeit der Wiedergabe ein negativer Faktor sein kann, kann durch sorgfältige Entscheidungen ein gutes Endergebnis erzielt werden. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein und dennoch eine viel höhere visuelle Qualität haben; selbst nach dem Hochskalieren während der Wiedergabe kann das Ergebnis besser sein als die Kodierung des Originalvideos in voller Größe und das Akzeptieren des Qualitätsverlustes, um die Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich können Sie Frames aus dem Video vollständig entfernen und die Bildrate entsprechend reduzieren. Dies hat zwei Vorteile: es verringert die Gesamtdateigröße des Videos, und diese kleinere Größe ermöglicht es der Bewegungs-Kompensation, noch mehr zu erreichen. Beispielsweise könnte das Überspringen jedes zweiten Bildes bei einer Bewegung zwischen einer Bewegung um zwei Pixel aufgrund der Bewegungsebenen der Zwischenbilder zu einer Bewegung um vier Pixel führen. Dies ermöglicht es, die gesamte Kamera-Bewegung mit weniger Residuen-Rahmen darzustellen.

Die absolute Mindestbildrate, die ein Video haben kann, bevor sein Inhalt vom menschlichen Auge nicht mehr als Bewegung wahrgenommen wird, liegt bei etwa 12 Bildern pro Sekunde. Weniger als das und das Video wird zu einer Reihe von Standbildern. Motion-Picture-Film hat typischerweise 24 Bilder pro Sekunde, während Standard-Definition Fernsehen bei etwa 30 Bildern pro Sekunde liegt (leicht darunter, aber nah genug) und High-Definition Fernsehen zwischen 24 und 60 Bilder pro Sekunde liegt. Alles von 24 FPS aufwärts wird im Allgemeinen als ausreichend flüssig empfunden; 30 oder 60 FPS sind ein ideales Ziel, je nach Ihren Bedürfnissen.

Letztlich liegen alle Entscheidungen darüber, welche Opfer gebracht werden können, ganz bei Ihnen und/oder Ihrem Designteam.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**)-Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Er erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist völlig lizenzgebührenfrei und für die Verwendung durch das {{HTMLElement("video")}}-Element und durch [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Darüber hinaus ist eine Reihe von **Stufen** spezifiziert, die jeweils Grenzen für eine Reihe von Attributen des Videos definieren. Diese Attribute umfassen die Bildabmessungen, die Bildfläche in Pixeln, Anzeige- und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Grenzen für die Anzahl der Kacheln und Kachelspalten, die im Codierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber seine maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es sei jedoch darauf hingewiesen, dass zumindest bei Firefox und Chrome die Stufen beim Software-Decoding derzeit tatsächlich ignoriert werden und der Decoder einfach sein Bestes tut, um das Video basierend auf den bereitgestellten Einstellungen abzuspielen. Aus Gründen der Kompatibilität sollten Sie jedoch innerhalb der Grenzen der gewählten Stufe bleiben.

Der Hauptnachteil von AV1 zu diesem Zeitpunkt ist, dass es sehr neu ist und die Unterstützung gerade erst in die meisten Browser integriert wird. Außerdem werden Encoder und Decoder immer noch auf Leistung optimiert, und Hardware-Encoder und -Decoder sind noch überwiegend in der Entwicklung und nicht in der Produktion. Aus diesem Grund dauert die Codierung eines Videos im AV1-Format sehr lange, da die gesamte Arbeit in Software erfolgt.

Derzeit, aufgrund dieser Faktoren, ist AV1 noch nicht bereit, Ihre erste Wahl des Videocodecs zu sein, aber Sie sollten darauf achten, wann es in der Zukunft einsatzbereit ist.

| Attribute                               | Details                                                                                                                                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unterstützte Bitraten                   | Variiert je nach Video-Level; theoretisches Maximum erreicht 800 Mbps auf Level 6.3                                                                                                           |
| Unterstützte Bildraten                  | Variiert je nach Level; zum Beispiel hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 bis zu 120 FPS erreichen kann                                                                    |
| Kompression                             | Verlustbehafteter DCT-basierter Algorithmus ([Diskrete Cosinustransformation](https://en.wikipedia.org/wiki/Discrete_cosine_transform))                                                       |
| Unterstützte Bildgrößen                 | 8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jeden Wert zwischen diesen annehmen darf                                                                                          |
| Unterstützte Farbmodi                   | Siehe nachstehende Tabelle für Details zu Profilen, Farbtiefen und Chroma-Subsampling                                                                                                         |
| HDR-Unterstützung                       | Ja                                                                                                                                                                                            |
| Variable Frame Rate (VFR)-Unterstützung | Ja                                                                                                                                                                                            |
| Browser-Kompatibilität                  | Verfügbar, siehe detaillierte Tabelle in der Beschreibung                                                                                                                                     |
| Containerunterstützung                  | [ISOBMFF](https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format), MPEG-TS, [MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4), [WebM](/de/docs/Web/Media/Formats/Containers#webm) |
| RTP / WebRTC-kompatibel                 | Ja                                                                                                                                                                                            |
| Unterstützende/erhaltende Organisation  | [Alliance for Open Media](https://aomedia.org/)                                                                                                                                               |
| Spezifikation                           | [AV1-Spezifikation](https://aomediacodec.github.io/av1-spec/av1-spec.pdf)                                                                                                                     |
| Lizenzierung                            | Lizenzgebührenfrei, offener Standard                                                                                                                                                          |

... (Der restliche Inhalt sollte auf ähnliche Weise für die Abschnitte AVC (H.264), H.263, HEVC (H.265), MP4V-ES, MPEG-1 Part 2 Video, MPEG-2 Part 2 Video, Theora, VP8 und VP9 übersetzt werden.)

## Auswahl eines Video-Codecs

Die Entscheidung, welcher Codec oder welche Codecs verwendet werden sollen, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, auf deren Kompatibilität Sie verzichten möchten?
- Wie alt ist die älteste Version des Webbrowsers, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem Browser funktionieren, der in den letzten fünf Jahren veröffentlicht wurde, oder nur in den letzten einem Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als der beste für den Anwendungsfall angesehen wird, proprietär ist oder Lizenzgebühren erfordern könnte, werden zwei Optionen bereitgestellt: zuerst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie für jedes Video nur eine einzige Version anbieten können, können Sie das Format auswählen, das Ihren Bedürfnissen am besten entspricht. Das erste wird empfohlen, da es eine gute Kombination aus Qualität, Leistung und Kompatibilität bietet. Die zweite Option ist die am weitesten kompatible Wahl, auf Kosten einer gewissen Qualität, Leistung und/oder Größe.

### Empfehlungen für Alltagsvideos

Zunächst einmal betrachten wir die besten Optionen für Videos, die auf einer typischen Website präsentiert werden, wie z. B. ein Blog, eine Informationsseite, eine kleine Unternehmenswebsite, auf der Videos zur Produktdemonstration verwendet werden (jedoch nicht, wenn die Videos selbst ein Produkt sind), usw.

1. Ein **[WebM](/de/docs/Web/Media/Formats/Containers#webm)**-Container mit dem **[VP9](#vp9)**-Codec für Video und dem **[Opus](/de/docs/Web/Media/Formats/Audio_codecs#opus)**-Codec für Audio. Diese sind alle offene, lizenzfreie Formate, die im Allgemeinen gut unterstützt werden, jedoch nur in recht aktuellen Browsern, weshalb ein Fallback eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audiocodec. Dies liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs eine weitgehend unterstützte Kombination ist – tatsächlich von jedem großen Browser – und die Qualität ist typischerweise gut für die meisten Anwendungsfälle. Stellen Sie jedoch sicher, dass Sie die Lizenzanforderungen einhalten.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein schließendes `</video>`-Tag, unabhängig davon, ob Sie irgendwelche {{HTMLElement("source")}}-Elemente darin haben.

### Empfehlungen für hochqualitative Videopräsentationen

Wenn Ihre Aufgabe darin besteht, Video in höchstmöglicher Qualität zu präsentieren, werden Sie wahrscheinlich davon profitieren, so viele Formate wie möglich anbieten zu können, da die Codecs, die die beste Qualität bieten, oft auch die neuesten sind und somit am ehesten Lücken in der Browser-Kompatibilität aufweisen.

1. Ein WebM-Container mit AV1 für Video und Opus für Audio. Wenn Sie beim Encodieren von AV1 das High- oder Professional-Profil auf einem hohen Niveau wie 6.3 verwenden können, erhalten Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung, während Sie eine ausgezeichnete Videoqualität beibehalten. Die Kodierung Ihres Audios mit Opus' Fullband-Profil bei einer Abtastrate von 48 kHz maximiert die erfasste Audio-Bandbreite, wobei nahezu der gesamte Frequenzbereich erfasst wird, der innerhalb des menschlichen Hörvermögens liegt.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container mit dem [HEVC](#hevc_h.265)-Codec unter Verwendung eines der fortgeschrittenen Main-Profile, wie Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4-Profil bei bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies eine hervorragende Grafikqualität mit bemerkenswerter Farbwiedergabe. Außerdem können Sie optional HDR-Metadaten einbinden, um Videos mit hohem Dynamikbereich bereitzustellen. Für Audio verwenden Sie den AAC-Codec bei einer hohen Abtastrate (mindestens 48 kHz, aber idealerweise 96 kHz) und encodieren mit komplexer Codierung anstelle von schneller Codierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remixen

Derzeit gibt es keine verlustfreien—oder auch nur nahezu verlustfreien—Video-Codecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Zum Beispiel benötigt unkomprimiertes 1080p-Video (1920 x 1080 Pixel) mit 4:2:0-Chroma-Subsampling mindestens 1,5 Gbps. Die Verwendung verlustfreier Kompression wie FFV1 (die von Webbrowsern nicht unterstützt wird) könnte dies vielleicht auf etwa 600 Mbps reduzieren, je nach Inhalt. Das ist immer noch eine enorme Anzahl von Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für den praktischen Einsatz in der realen Welt nicht machbar.

Dies ist der Fall, obwohl einige verlustbehaftete Codecs einen verlustfreien Modus haben; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec auszuwählen, der verlustbehaftete Kompression verwendet und diesen so zu konfigurieren, dass möglichst wenig Kompression erfolgt. Eine Möglichkeit, dies zu tun, besteht darin, den Codec so zu konfigurieren, dass er "schnelle" Kompression verwendet, was von Natur aus bedeutet, dass weniger Kompression erreicht wird.

#### Vorbereitung von Videos extern

Um Videos zu Archivierungszwecken außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Tool, das Kompression auf den originalen unkomprimierten Videodaten durchführt. Zum Beispiel kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Tool verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 infile
```

Obwohl andere Codecs möglicherweise bessere Qualitätsstufen beim Komprimieren des Videos mit einem signifikanten Unterschied aufweisen, sind deren Encoder normalerweise so langsam, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Kompression erhalten, erheblich schneller bei etwa dem gleichen allgemeinen Qualitätsniveau ist.

#### Aufnahme von Videos

Angesichts der Einschränkungen hinsichtlich der Nähe zur verlustfreien Qualität könnten Sie in Erwägung ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der so konfiguriert ist, [AV1](#av1) Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chroma-Subsampling und [FLAC](/de/docs/Web/Media/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzunehmen. Die resultierende Datei wird eine Bitrate von nicht mehr als 800 Mbps zwischen den Video- und Audiotracks verwenden. Sie müssen diese Werte wahrscheinlich an die Leistung der Hardware, Ihre Anforderungen und die spezifischen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Netzwerkübertragung und würde wahrscheinlich nur lokal verwendet werden.

Bei der Aufschlüsselung des Wertes des `codecs`-Parameters in seine durch Punkte abgegrenzten Eigenschaften sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                                |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Die vierstellige Codebezeichnung (4CC), die den [AV1](#av1) Codec identifiziert.                                                                                                                                                                                                                            |
| `2`    | Das Profil. Ein Wert von 2 zeigt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                                |
| `19H`  | Das Level und die Stufe. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt die High-Tier von Level 6.3 an.                                                                                                              |
| `12`   | Die Farbtiefe. Dies zeigt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchstgenaueste Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                                         |
| `0`    | Das Monochrom-Modus-Flagge. Wenn 1, würden keine Chroma-Ebenen aufgezeichnet werden, und alle Daten sollten reine Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 angegeben, weil wir Farbe wollen.                                                                                         |
| `000`  | Der Chroma-Subsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrom-Modus-Wert 0, zeigt an, dass wir 4:4:4-Chroma-Subsampling wollen, oder keinen Verlust an Farbdaten. |
| `09`   | Die Farbprimärfaktoren zu verwenden. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farbe verwenden wollen, die für HDR verwendet wird.                                                   |
| `16`   | Die Übertragungscharakteristika zu verwenden. Dies stammt auch aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 zeigt an, dass wir die Eigenschaften für BT.2100 PQ-Farbe verwenden wollen.                                                                       |
| `09`   | Die Matrixkoeffizienten, die verwendet werden sollen, ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Leuchtdichte verwenden wollen; dies ist auch bekannt als BT.2010 YbCbCr.                     |
| `1`    | Das Video- "Full Range"-Flag. Ein Wert von 1 zeigt an, dass wir den vollen Farbbereich verwenden wollen.                                                                                                                                                                                                    |

Die Dokumentation zu Ihren Codec-Auswahlmöglichkeiten wird wahrscheinlich Informationen bieten, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden können.

## Siehe auch

- [Leitfaden zu Web-Audio-Codecs](/de/docs/Web/Media/Formats/Audio_codecs)
- [Media-Containerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
- [Umgang mit Problemen bei der Medienunterstützung im Webinhalt](/de/docs/Web/Media/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die "Codecs"- und "Profiles"-Parameter für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Type-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

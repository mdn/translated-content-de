---
title: Leitfaden für Web-Videocodecs
slug: Web/Media/Formats/Video_codecs
l10n:
  sourceCommit: bac8392ad57a40bcd42fdedd937180eaff49f8ef
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Dieser Leitfaden bietet eine Einführung in die Videocodecs, die Sie wahrscheinlich im Web verwenden werden oder in Betracht ziehen. Er enthält Zusammenfassungen ihrer Fähigkeiten sowie jeglicher Kompatibilitäts- und Nutzungsbedenken und gibt Ratschläge, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der enormen Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie speichern zu können, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die nötig ist, um unkomprimiertes Video zu speichern:

- Ein einzelnes Bild eines hochauflösenden (1920x1080) Videos in voller Farbe (4 Bytes pro Pixel) entspricht 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (\~249 MB) beanspruchen.
- Eine Minute HD-Video würde 14,93 GB Speicher benötigen.
- Eine relativ typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicher erfordern, und ein zweistündiger Film würde _fast 1,79 **TB** (das sind 1790 GB)_ benötigen.

Nicht nur der erforderliche Speicherplatz ist enorm, sondern auch die Netzwerkkapazität, die erforderlich wäre, um ein solches unkomprimiertes Video zu übertragen, wäre enorm: 249 MB/Sek.—ohne Audio und zusätzliche Daten. Hier kommen Videocodecs ins Spiel. Genauso wie Audiocodecs die Audiodaten komprimieren, komprimieren Videocodecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht exakt mit der Quelle übereinstimmt. Einige Details können verloren gehen; der Grad des Verlusts hängt vom Codec und dessen Konfiguration ab. Als Faustregel gilt jedoch, dass mit zunehmender Komprimierung auch der Verlust an Details und Qualität zunimmt. Einige verlustfreie Codecs existieren, werden jedoch typischerweise für Archivierungs- und Speicherung auf lokalen Geräten verwendet und nicht für die Nutzung über ein Netzwerk.

## Häufig verwendete Codecs

Die folgenden Videocodecs sind diejenigen, die am häufigsten im Web verwendet werden. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, der zusätzliche Details über den Codec enthält, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Sie berücksichtigen sollten.

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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: spezifische Merkmale des Quellvideoformats und -inhalts sowie die Eigenschaften und Konfiguration des Codecs, der beim Kodieren des Videos verwendet wird.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, wird in der Regel auch die resultierenden Daten größer machen. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist ein größerer Verlust an Qualität, um die Datengröße zu reduzieren, es wert; in anderen Fällen ist der Qualitätsverlust inakzeptabel, und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Auswirkungen des Quellvideoformats auf das kodierte Ergebnis

Der Grad, in dem das Format des Quellvideos das Ergebnis beeinflussen wird, variiert je nach Codec und dessen Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als durch einfache Pixel reproduziert, spielt das Format des ursprünglichen Bildes keine Rolle. Faktoren wie Bildrate und Auflösung haben jedoch immer eine Auswirkung auf die Ausgabengröße der Medien.

Zusätzlich haben alle Codecs ihre Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Formen und Mustern, können scharfe Kanten nicht gut replizieren oder neigen dazu, Details in dunklen Bereichen zu verlieren. Dies hängt alles von den zugrunde liegenden Algorithmen und mathematischen Methoden ab.

<table class="standard-table">
  <caption>
    Die potenziellen Auswirkungen des Quellvideoformats und -inhalts auf die
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
      <th scope="row">Farbtiefe (Bittiefe)</th>
      <td>
        Je höher die Farbbittiefe, desto höher ist die Qualität der
        Farbtreue im Video. In gesättigten Bereichen des Bildes (wo Farben rein
        und intensiv sind, wie ein leuchtendes, reines Rot:
        <code>rgb(255 0 0 / 100%)</code>) erlauben Farbtiefen unter 10 Bit pro
        Komponente (10-Bit-Farbe) das Entstehen von Streifen, bei denen
        Farbverläufe nicht ohne sichtbare Abstufungen dargestellt werden
        können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren
        komprimierten Dateigrößen führen. Der entscheidende Faktor
        ist das interne Speicherformat, das für die komprimierten Daten
        verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Flüssigkeit der Bewegung im
        Bild. Bis zu einem gewissen Punkt gilt: Je höher die Bildrate, desto
        flüssiger und realistischer erscheint die Bewegung. Irgendwann ist der
        Punkt des abnehmenden Ertrags erreicht. Siehe <a href="#reduced_frame_rate">Bildrate</a> unten für
        Details.
      </td>
      <td>
        Wenn die Bildrate bei der Kodierung nicht verringert wird, führen höhere
        Bildraten zu größeren komprimierten Dateigrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Videokomprimierung funktioniert typischerweise durch den Vergleich
        von Bildern, bei dem nach Abweichungen gesucht wird und Aufzeichnungen
        erstellt werden, die genügend Informationen enthalten, um das
        vorherige Bild so zu aktualisieren, dass es annähernd dem
        nächsten Bild ähnelt. Je mehr sich aufeinanderfolgende Bilder
        voneinander unterscheiden, desto größer sind diese Unterschiede und
        desto weniger effektiv ist die Komprimierung bei der Vermeidung von
        Artefakten im komprimierten Video.
      </td>
      <td>
        Die Komplexität, die durch Bewegung eingeführt wird, führt zu
        größeren Zwischenbildern aufgrund der höheren Anzahl von
        Unterschieden zwischen den Bildern. Aus diesem und anderen
        Gründen gilt: Je mehr Bewegung in einem Video vorhanden ist, desto
        größer wird normalerweise die Ausgabedatei.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie z. B. Filmkörnungseffekte, Staub oder andere
        Körnigkeit im Bild) führt zu Variabilität. Variabilität macht
        die Komprimierung in der Regel schwieriger, was zu einem stärkeren
        Qualitätsverlust führt, da Details fallen gelassen werden müssen,
        um denselben Komprimierungsgrad zu erreichen.
      </td>
      <td>
        Je mehr Variabilität—wie Rauschen—es im Bild gibt, desto
        komplexer ist der Komprimierungsprozess und desto geringer ist der
        Erfolg, den Algorithmus bei der Komprimierung des Bildes im gleichen
        Maße zu erreichen. Es sei denn, Sie konfigurieren den Encoder so,
        dass einige oder alle durch Rauschen verursachten Variationen ignoriert
        werden, wird das komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video kann bei gleicher Bildschirmgröße in der Regel
        die ursprüngliche Szene genauer darstellen, vorbehaltlich der während der
        Komprimierung eingeführten Effekte.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es. Dies spielt eine
        entscheidende Rolle bei der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Der Grad, zu dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und seiner Konfiguration. Zusätzlich zu den allgemeinen Codec-Optionen kann der Encoder so konfiguriert werden, dass er die Bildrate reduziert, Rauschen bereinigt und/oder die Gesamtauflösung des Videos während der Kodierung verringert.

### Auswirkungen der Codec-Konfiguration auf das kodierte Ergebnis

Die Algorithmen, die zur Kodierung von Video verwendet werden, verwenden typischerweise eine oder mehrere allgemeine Techniken zur Durchführung ihrer Kodierung. Im Allgemeinen gilt: Jede Konfigurationsoption, die beabsichtigt ist, die Ausgabedateigröße des Videos zu reduzieren, wird wahrscheinlich eine negative Auswirkung auf die Gesamtqualität des Videos haben oder bestimmte Artefakte einführen. Es ist auch möglich, eine verlustfreie Form der Kodierung auszuwählen, die zu einer wesentlich größeren kodierten Datei führt, jedoch bei der Dekodierung eine perfekte Reproduktion des ursprünglichen Videos liefert.

Darüber hinaus kann jede Encoder-Software Variationen bei der Verarbeitung des Quellvideos aufweisen, was zu Unterschieden in der Ausgabequalität und/oder -größe führt.

<table class="standard-table">
  <caption>
    Auswirkungen der Videokodierungs-Konfiguration auf Qualität und Größe
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
        Verlustfreie Kompression kann die Gesamtgröße des Videos nicht annähernd
        so stark reduzieren wie verlustbehaftete Kompression; die resultierenden Dateien
        sind wahrscheinlich immer noch zu groß für den allgemeinen Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße treten Artefakte und andere Formen der
        Qualitätsverschlechterung auf, abhängig vom spezifischen Codec
        und wie stark die Kompression angewendet wird.
      </td>
      <td>
        Je mehr sich das kodierte Video von der Quelle entfernen darf, desto
        einfacher ist es, höhere Komprimierungsraten zu erreichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr wird das
        kodierte Video wie die originalen Medien aussehen.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten
        Videodateien; die genaue Auswirkung hängt vom Codec ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich generell mit höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die bei der Videokodierung zur Verfügung stehen und die Werte, die diesen Optionen zugewiesen werden sollen, variieren nicht nur von einem Codec zum anderen, sondern auch abhängig von der verwendeten Kodierungssoftware. Die Dokumentation, die mit Ihrer Kodierungssoftware geliefert wird, wird Ihnen helfen, die spezifische Auswirkung dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder veränderten Daten zu sichtbaren negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, da das Video auf diese Weise angezeigt wird. Jedes Bild eines Videos wird durch Anwendung eines Satzes von Änderungen auf das derzeit sichtbare Bild präsentiert. Das bedeutet, dass alle Fehler oder Artefakte im Laufe der Zeit kumuliert werden, was zu Störungen oder anderen seltsamen oder unerwarteten Abweichungen im Bild führt, die eine Zeit lang bestehen bleiben.

Um dies zu beheben und die Suchzeit im Video zu verbessern, werden regelmäßig **Schlüsselybilder** (auch als **Intrabild** oder **I-Bild** bekannt) in die Videodatei eingefügt. Die Schlüsselybilder sind vollständige Bilder, die verwendet werden, um aktuelle Schäden oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, das beim Wiederherstellen aus den kodierten Daten nicht so aussieht wie vor der Kompression. Es gibt viele Formen von Aliasing; die häufigsten, die Sie sehen könnten, schließen ein:

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
          wenn ein Muster im Quellbild und die Funktionsweise des Encoders
          leicht räumlich nicht ausgerichtet sind. Die vom Encoder generierten
          Artefakte führen dann dazu, dass seltsame, wirbelnde Effekte im
          Muster des Quellbildes beim Dekodieren eingeführt werden.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="eine Ziegelmauer, die einen wirbelnden Effekt ähnlich Wellen aufgrund des Moiré-Musters zeigt" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          auftritt, wenn diagonale gerade oder gebogene Kanten, die glatt sein
          sollten, ein zackiges Aussehen annehmen, das etwas wie eine
          Treppenstufe aussieht. Dies ist der Effekt, der durch
          "Anti-Aliasing"-Filter reduziert wird.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die wie eine Treppe aussehen, aufgrund von Aliasing, das einen Treppeneffekt verursacht
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
          >) ist der visuelle Effekt, der häufig auf Film zu sehen ist, bei dem ein
          sich drehendes Rad scheint, sich mit der falschen Geschwindigkeit oder
          sogar rückwärts zu drehen, aufgrund einer Interaktion zwischen der Bildrate
          und dem Kompressionsalgorithmus. Der gleiche Effekt kann bei jedem
          sich wiederholenden Muster auftreten, das sich bewegt, wie Gleise auf
          einer Eisenbahnlinie, Pfosten entlang einer Straße usw. Dies ist ein
          zeitlich (zeitlich basiertes) Aliasing-Problem; die Geschwindigkeit
          der Rotation stört die Frequenz der während der Kompression oder
          Kodierung durchgeführten Abtastung.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Drehendes Rad, aufgrund von Aliasing, das einen Wagenradeffekt verursacht." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farbenränder

**Farbenränder** sind eine Art von visuellem Artefakt, das als falsche Farben erscheint, die entlang der Ränder von farbigen Objekten innerhalb der Szene eingeführt werden. Diese Farben haben keine beabsichtigte farbliche Beziehung zum Inhalt des Rahmens.

### Verlust an Schärfe

Der Akt, Daten im Prozess der Videokodierung zu entfernen, erfordert, dass einige Details verloren gehen. Wenn genug Komprimierung angewendet wird, können Teile oder sogar das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder nebligen Aussehen führt.

Verlorene Schärfe kann es erschweren, Text im Bild zu lesen, da Text—insbesondere kleiner Text—sehr detailorientierter Inhalt ist, bei dem geringfügige Veränderungen die Lesbarkeit erheblich beeinflussen können.

### Klingeln

Verlustbehaftete Kompressionsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit von dem Kompressionsalgorithmus erzeugten farbigen Pixeln verschmutzt sind. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund reichen. Dies ist besonders häufig bei höheren Kompressionsniveaus.

![Beispiel des Klingeleffekts](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Stufen und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ähnelt in einigen Aspekten dem [Mückenrauschen](#mückenrauschen), außer dass während der Klingeleffekt mehr oder weniger konstant und unverändert ist, Mückenrauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Kompression zu einem Verlust an Farbdetails in Farbverläufen führt. Statt sanfter Übergänge durch die verschiedenen Farben in einer Region wird das Bild blockartig, mit Farbflecken, die das ursprüngliche Erscheinungsbild des Bildes annähern.

![Foto des Weißkopfadlers mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfadlers im obigen Foto (und der Schnee-Eule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Posterisationsartefakte verloren.

### Konturierung

**Konturierung** oder **Farbabstufung** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Als Ergebnis zeigen die Videoinhalte einen "gestuften" Look, bei dem anstelle von glatten Farbverläufen die Übergänge von Farbe zu Farbe abrupt sind, wodurch sich Farbstreifen bilden.

![Beispiel eines Bildes, dessen Kompression Konturierung eingeführt hat](contouring-effect.jpg)

Im Beispielbild oben ist zu sehen, wie der Himmel Bänder aus verschiedenen Blautönen aufweist, anstatt einen durchgehenden Farbverlauf, da sich die Himmelsfarbe dem Horizont nähert. Dies ist der Konturierungseffekt.

### Mückenrauschen

**Mückenrauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Kantenaktivität** auftritt, das als flimmernde Unschärfe oder Flimmern erscheint, das ungefähr außerhalb der Ränder von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann dem [Klingeln](#klingeln) ähnlich aussehen.

![Beispiel eines Bildes, dessen Kompression Mückenrauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Mückenrauschen an mehreren Stellen, einschließlich im Himmel um die Brücke. In der oberen rechten Ecke zeigt ein Ausschnitt eine Nahaufnahme eines Teils des Bildes, der Mückenrauschen zeigt.

Mückenrausch-Artefakte sind am häufigsten in MPEG-Video zu finden, können jedoch immer auftreten, wenn ein diskreter Kosinustransformationsalgorithmus (DCT) verwendet wird; dies schließt beispielsweise JPEG-Standbilder ein.

### Bewegungskompensation Blockgrenzartefakte

Videokompression funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera an einem festen Ort steht oder die Objekte im Bild relativ stationär sind, aber wenn es im Bild zu viel Bewegung gibt, können die Unterschiede zwischen den Frames so groß sein, dass die Kompression nichts nützt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegung (entweder der Kamera oder von Objekten im Sichtfeld) sucht und feststellt, wie viele Pixel sich das bewegende Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung zusammen mit einer Beschreibung der Pixel gespeichert, die sich bewegt haben und nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die sich bewegenden Objekte und erstellt einen internen Frame, der aussieht wie der Originale, jedoch mit allen Objekten, die an ihre neuen Positionen verschoben wurden. Theoretisch nähert dies das Aussehen des neuen Frames an. Um die Arbeit abzuschließen, werden die verbleibenden Unterschiede festgestellt, dann wird die Menge der Objektverschiebungen und die Menge der Pixeldifferenzen in den Daten gespeichert, die den neuen Rahmen darstellen. Dieses Objekt, das die Verschiebungen und die Pixeldifferenzen beschreibt, wird als **Residual Frame** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalframe</th>
      <th scope="col" style="width: 216px">Inter-Frame-Differenzen</th>
      <th scope="col" style="width: 216px">
        Unterschied nach Bewegungskompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalbild eines Videos" src="motion-comp-orig.jpg" /></td>
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
        Hier sind nur die Unterschiede zwischen dem ersten Bild und dem
        folgenden Bild zu sehen. Alles andere ist schwarz. Bei genauerem Hinsehen kann
        man sehen, dass der Großteil dieser Unterschiede von einer
        horizontalen Kamerabewegung kommt, was dies zu einem guten
        Kandidaten für die Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, wird hier die
        Berücksichtigung der Kamerabewegung vorgenommen, indem zuerst das erste Bild
        um zwei Pixel nach rechts verschoben wird und dann die Differenz
        genommen wird. Dies gleicht die Kamerabewegung aus und ermöglicht
        mehr Überlappung zwischen den beiden Bildern.
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **Globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globale Bewegungskompensation passt im Allgemeinen Kamera-Bewegungen wie Verfolgung, Dolly-Bewegungen, Schwenken, Neigen, Rollen und Auf- und Abwärtsbewegungen an. Die Blockbewegungskompensation behandelt lokale Änderungen, indem sie nach kleineren Abschnitten des Bildes sucht, die durch Bewegungskompensation kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe, in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen erlauben und sogar, dass sich Blöcke überlappen.

Es gibt jedoch Artefakte, die durch Bewegungskompensation auftreten können. Diese treten entlang der Blockgrenzen auf, in Form von scharfen Kanten, die falsches Klingeln und andere Kanteneffekte erzeugen. Diese sind auf die Mathematik zurückzuführen, die an der Kodierung der Residual Frames beteiligt ist, und können leicht bemerkt werden, bevor sie durch den nächsten Schlüsselrahmen repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Videodateigröße zu verbessern. Während der sofortige Verlust an Größe oder Flüssigkeit der Wiedergabe ein negativer Faktor sein kann, kann eine sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein, während es eine viel höhere visuelle Qualität hat; auch nach dem Hochskalieren während der Wiedergabe kann das Ergebnis besser sein, als das ursprüngliche Video in voller Größe zu kodieren und den erforderlichen Qualitätsverlust zu akzeptieren, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich können Sie Frames aus dem Video vollständig entfernen und die Bildrate verringern, um dies auszugleichen. Dies hat zwei Vorteile: Es macht das Gesamtvideo kleiner, und diese kleinere Größe ermöglicht der Bewegungskompensation, noch mehr für Sie zu erreichen. Zum Beispiel könnte das Überspringen jedes zweiten Frames anstelle des Berechnens von Bewegungsunterschieden für zwei Frames, die zwei Pixel aufgrund von inter-frame Bewegung auseinanderliegen, dazu führen, dass ein Unterschied berechnet wird, der auf vier Pixel Bewegung kommt. Dies lässt die gesamte Bewegung der Kamera durch weniger residual Frames repräsentieren.

Die absolute Mindestbildrate, die ein Video haben kann, bevor seine Inhalte von den menschlichen Augen nicht mehr als Bewegung wahrgenommen werden, beträgt etwa 12 Bilder pro Sekunde. Weniger als das, und das Video wird zu einer Serie von Standbildern. Kinofilme sind in der Regel mit 24 Bildern pro Sekunde gedreht, während Standard-Definition-Fernsehen etwa 30 Bilder pro Sekunde (leicht weniger, aber nah genug) und High-Definition-Fernsehen zwischen 24 und 60 Bilder pro Sekunde liegt. Alles ab 24 FPS wird im Allgemeinen als ausreichend flüssig angesehen; 30 oder 60 FPS sind ein ideales Ziel, abhängig von Ihren Anforderungen.

Letztendlich sind die Entscheidungen darüber, welche Opfer Sie bereit sind zu machen, ganz Ihnen und/oder Ihrem Designteam überlassen.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzgebührenfrei und wurde sowohl für das {{HTMLElement("video")}}-Element als auch für [WebRTC](/de/docs/Web/API/WebRTC_API) entwickelt.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional** mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Außerdem ist eine Reihe von **Niveaus** spezifiziert, die jeweils Grenzen für eine Reihe von Videoattributen festlegen. Dazu gehören die Bildbreite, die Bildfläche in Pixeln, Wiedergabe- und Dekodiergeschwindigkeiten, durchschnittliche und maximale Bitraten sowie Grenzen für die Anzahl der Kacheln und Kachelspalten, die im Kodierungs- und Dekodierungsprozess verwendet werden.

Beispielsweise bietet AV1-Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass ein Video in 2048x1152 bei Level 2.0 tatsächlich nicht möglich ist. Es ist erwähnenswert, dass zumindest bei Firefox und Chrome die Levels bei der Softwaredecodierung derzeit ignoriert werden und der Decoder einfach sein Bestes gibt, um das Video gemäß den bereitgestellten Einstellungen abzuspielen. Für die zukünftige Kompatibilität sollten Sie sich jedoch innerhalb der Grenzen des gewählten Levels bewegen.

Der Hauptnachteil von AV1 ist derzeit, dass es noch relativ neu ist und die Unterstützung noch in den meisten Browsern integriert wird. Darüber hinaus werden Encoder und Decoder noch auf Leistung optimiert, und Hardware-Encoder und -Decoder befinden sich größtenteils noch in der Entwicklung und nicht in der Produktion. Aus diesem Grund dauert das Encodieren eines Videos im AV1-Format sehr lange, da alle Arbeiten in Software durchgeführt werden.

Derzeit ist AV1 aufgrund dieser Faktoren noch nicht bereit, Ihre erste Wahl als Videocodec zu sein, aber Sie sollten darauf achten, wenn es in Zukunft einsatzbereit ist.

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
            >Level-Tabellen</a
          > der AV1-Spezifikation, die die maximalen Auflösungen und Raten für jedes Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Variiert je nach Level; beispielsweise hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 120 FPS erreichen kann
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
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jeden Wert zwischen diesen annehmen darf
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
              <td>8, 10, oder 12</td>
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
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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

Der MPEG-4-Standardsuite zugehörige **Advanced Video Coding** (**AVC**) Standard ist sowohl in der ITU-H.264-Spezifikation als auch in der MPEG-4 Part 10-Spezifikation spezifiziert. Es handelt sich um einen bewegungskompensationsbasierten Codec, der heute weit verbreitet für alle Arten von Medien verwendet wird, darunter Rundfunkfernsehen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray Discs.

AVC ist sehr flexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel wurde das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien entwickelt und benötigt weniger Bandbreite als das Main Profile (das für Standard-Definition Digital-TV in einigen Regionen verwendet wird) oder das High Profile (das für Blu-Ray Disc Video verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chroma-Sampling; das High 10 Profile fügt Unterstützung für 10-Bit-Farben hinzu, und fortschrittlichere Formen von High 10 fügen 4:2:2 und 4:4:4-Chroma-Sampling hinzu.

AVC verfügt auch über spezielle Funktionen wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), die unter anderem die Produktion von stereoskopischem Video ermöglicht.

AVC ist jedoch ein proprietäres Format, und zahlreiche Patente werden von mehreren Parteien bezüglich seiner Technologien beansprucht. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA-Patentpool keine Lizenzgebühren für die Streaming-Videowiedergabe im Internet im AVC-Format verlangt, solange das Video für Endnutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die keine JavaScript-APIs enthält) sind _erforderlich_, um AVC als Codec in WebRTC-Anrufen zu unterstützen. Obwohl Webbrowser dazu nicht verpflichtet sind, tun es einige.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen Hardware-Encoding und -Decoding von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

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
        >, obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des Bildes zu erzeugen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8.192 x 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>Einige der gebräuchlichsten oder interessantesten Profile:</p>
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
        Ja; <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder Advanced HDR/SL-HDR; beide sind Teil von ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von Firefox für AVC hängt von den im Betriebssystem integrierten oder vorinstallierten Codecs für AVC und dessen Container ab, um Patentprobleme zu vermeiden.
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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
        >. Beachten Sie, dass mehrere Patentpools gelten könnten.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263**-Codec der ITU wurde hauptsächlich für den Einsatz in Niedrigbandbreitensituationen entwickelt. Insbesondere liegt der Fokus auf Videokonferenzen in PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}}- und SIP (IP-basierte Videokonferenz) -Systemen. Obwohl er für Netzwerke mit niedriger Bandbreite optimiert ist, ist er relativ CPU-intensiv und könnte auf weniger leistungsfähigen Computern nicht ausreichend funktionieren. Das Datenformat ist dem von MPEG-4 Teil 2 ähnlich.

H.263 wurde im Web nie weit verbreitet eingesetzt. Abwandlungen von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie zum Beispiel Flash-Video oder den Sorenson-Codec. Kein großer Browser hat jedoch jemals H.263-Unterstützung standardmäßig integriert. Bestimmte Media-Plugins haben Unterstützung für H.263-Medien ermöglicht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines encodierten Videos in Bezug auf die maximale Bitrate pro Frame (Bild) oder **BPPmaxKb**. Bei der Codierung wird ein Wert für BPPmaxKb ausgewählt, und dann kann das Video diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt von diesem, der Bildrate, der Kompression und der gewählten Auflösung und Blockform ab.

H.263 wurde durch H.264 abgelöst und wird daher als Legacy-Medienformat betrachtet, welches Sie nach Möglichkeit vermeiden sollten. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, ist, wenn Sie Unterstützung auf sehr alten Geräten benötigen, bei denen H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm etc., gehalten werden. Um H.263 zu verwenden, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbeschränkt, jedoch typischerweise unter 64 kbps</td>
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
          unterstützt werden. Spätere Versionen könnten zusätzliche Auflösungen
          unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (Sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixel sowie die Anzahl der Reihen von Luminanz- und
        Chrominanzproben, die für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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
        Proprietär; somit sind entsprechende Lizenz oder Lizenzen erforderlich. Beachten Sie, dass mehrere Patentpools gelten könnten.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec wird durch ITUs **H.265** sowie durch MPEG-H Teil 2 (dem noch in Entwicklung befindlichen Nachfolger von MPEG-4) definiert. HEVC wurde entwickelt, um effizientes Kodieren und Dekodieren von Videos in Größen einschließlich sehr hoher Auflösungen (einschließlich 8K-Videos) zu unterstützen, mit einer Struktur, die speziell entwickelt wurde, um es Software zu ermöglichen, moderne Prozessoren optimal zu nutzen. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie [AVC](#avc_h.264), jedoch mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Coding Tree Unit (CTU)—ähnlich dem in früheren Codecs verwendeten Makroblock—aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede in derselben Coding Tree Unit verwendete Chromaprobe und den erforderlichen Syntaxelementen. Diese Struktur unterstützt die einfache Verarbeitung durch mehrere Kerne.

Eine interessante Eigenschaft von HEVC ist, dass das Hauptprofil nur 8 Bit pro Farbkomponente mit 4:2:0-Chroma-Sampling unterstützt. Ebenfalls interessant ist, dass 4:4:4-Video speziell behandelt wird. Anstatt die Luma-Proben (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Proben (die angeben, wie die Graustufen in farbige Pixel umgewandelt werden) zu verwenden, werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann beim Rendern kombiniert werden, um ein Vollfarbbild zu erzeugen.

HEVC ist ein proprietäres Format und wird durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA verwaltet](https://www.via-la.com/licensing-2/hevc-vvc/); Gebühren werden den Entwicklern und nicht den Inhaltsproduzenten und -verteibern in Rechnung gestellt. Vergewissern Sie sich, dass Sie die neuesten Lizenzbedingungen und -anforderungen prüfen, bevor Sie eine Entscheidung treffen, ob Sie HEVC in Ihrer App oder Website verwenden!

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
          Die unten stehenden Informationen beziehen sich auf die Hauptprofile. Es gibt eine
          Reihe weiterer Profile, die hier nicht enthalten sind.
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
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
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
              <th scope="row">HEVC/H.265-Unterstützung</th>
              <td>107</td>
              <td>18</td>
              <td>Nein</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 8+, Linux und ChromeOS, für alle Geräte unter macOS Big Sur 11+ und Android 5.0+</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung auf Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat denselben Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardwaredecoder.
        </p>
        <p>Mozilla wird HEVC nicht unterstützen, solange es durch Patente belastet ist.</p>
        <p>Opera und andere auf Chromium basierende Browser haben denselben Unterstützungsstatus wie Chrome.</p>
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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
        Proprietär; Bestätigen Sie Ihre Einhaltung der
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools gelten könnten.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des MPEG-4 Teil 2 Visual Standards. Im Allgemeinen wird MPEG-4 Teil 2 Video von niemandem verwendet, aufgrund seines Mangels an überzeugendem Wert im Vergleich zu anderen Codecs. MP4V-ES hat jedoch eine gewisse Nutzung auf mobilen Plattformen. MP4V ist im Wesentlichen eine H.263-Codierung in einem MPEG-4-Container.

Sein Hauptzweck ist die Verwendung zum Streamen von MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}} Sitzung. MP4V-ES wird jedoch auch zum Übertragen von MPEG-4-Audio und -Video über eine mobile Verbindung unter Verwendung von [3GP](/de/docs/Web/Media/Formats/Containers#3gp) verwendet.

Sie möchten dieses Format fast sicher nicht verwenden, da es von keinem der großen Browser in signifikanter Weise unterstützt wird und ziemlich veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden aber manchmal fälschlicherweise als `.mp4` bezeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Kein spezifisches Limit; nur durch die Datenrate beschränkt</td>
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
        YCrCb mit Chroma-Subsampling (4:2:0, 4:2:2, und 4:4:4) unterstützt; bis zu
        12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
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
        <p>Chrome unterstützt MP4V-ES nicht; jedoch tut es ChromeOS.</p>
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG entwickelt, ohne Unterstützung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es kompatibel mit einer Vielzahl von Software- und Hardwaregeräten. Es gibt keine aktiven Patente mehr in Bezug auf MPEG-1-Video, sodass es ohne jegliche Lizenz Bedenken verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern als veraltet gilt, sind diese in der Regel nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für den Einsatz in Websites und Webanwendungen.

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
        Y'CbCr mit 4:2:0 Chroma-Subsampling mit bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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
        Proprietär; jedoch sind alle Patente abgelaufen, daher kann MPEG-1 frei genutzt werden
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert ist, und wird gelegentlich auch durch seine {{Glossary("ITU", "ITU")}}-Bezeichnung, H.262, bezeichnet. Es ist dem MPEG-1-Video sehr ähnlich – tatsächlich kann jeder MPEG-2-Player automatisch MPEG-1 ohne besondere Arbeit abspielen – außer dass es erweitert wurde, um höhere Bitraten und verbesserte Kodierungstechniken zu unterstützen.

Ziel war es, MPEG-2 zu ermöglichen, Standard Definition Television zu komprimieren, sodass auch interlaced Video unterstützt wird. Die Standard Definition Komprimierungsrate und die Qualität des resultierenden Videos erfüllten die Anforderungen gut genug, dass MPEG-2 der primäre Videocodec für DVD-Videomedien ist.

MPEG-2 hat mehrere verfügbare Profile mit verschiedenen Fähigkeiten. Jedes Profil ist dann in vier Level unterteilt, von denen jedes die Attribute des Videos erhöht, wie Bildrate, Auflösung, Bitrate usw. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Level, von denen jedes Unterstützung für größere Bilddimensionen und Bitraten bietet. Beispielsweise unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für das Fernsehen in Nordamerika MPEG-2-Video in High Definition unter Verwendung des Main Profile im High Level, mit Unterstützung für 4:2:0 Video sowohl in 1920 x 1080 (30 FPS) als auch in 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbps.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern als veraltet gilt, sind diese in der Regel nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für den Einsatz in Websites und Webanwendungen.

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
        Y'CbCr mit 4:2:0 Chroma-Subsampling in den meisten Profilen; die "High"- und
        "4:2:2"-Profile unterstützen ebenfalls 4:2:2 Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen mit Ausnahme von Malaysia (Stand 1. Oktober 2024), daher kann MPEG-2 außerhalb von Malaysia frei genutzt werden.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Code wird nicht mehr empfohlen.
> Er hat eine extrem geringe Verwendung, und die Unterstützung wird aus den Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und kostenloser Videocodec, der ohne Lizenzgebühren oder Lizenzierung verwendet werden kann. Theora ist in Bezug auf Qualität und Kompressionsraten mit MPEG-4 Part 2 Visual und AVC vergleichbar und stellt eine sehr gute, wenn nicht sogar die beste Wahl für die Video-Codierung dar. Sein Status als von jeglichen Lizenzierungsbedenken befreit und seine relativ niedrigen CPU-Ressourcenanforderungen machen ihn zu einer beliebten Wahl für viele Software- und Webprojekte. Die niedrige CPU-Belastung ist besonders nützlich, da für Theora keine Hardware-Decoder verfügbar sind.

Theora basierte ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, die ihn dann zum Theora-Standard entwickelten.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbkomponente unterstützt, ohne die Möglichkeit 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt sei noch angemerkt, dass 8 Bit pro Komponente immer noch das am häufigsten verwendete Farbformat ist, das heute verwendet wird, daher ist dies in den meisten Fällen nur ein geringfügiges Ärgernis. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil von allen ist jedoch, dass er nicht von Safari unterstützt wird, wodurch Theora nicht nur auf macOS, sondern auf all diesen Millionen von iPhones und iPads nicht verfügbar ist.

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
        Beliebig; jeder nicht-Null-Wert wird unterstützt. Die Bildrate ist als 32-Bit-Zähler und 32-Bit-Nenner angegeben, um nicht-ganzzahlige Bildraten zu ermöglichen.
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
        Jede Kombination aus Breite und Höhe bis zu 1.048.560 x 1.048.560 Pixel
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
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Variable Frame Rate (VFR) innerhalb eines einzelnen
          Streams unterstützt, können mehrere Streams innerhalb einer Datei aneinandergehängt werden,
          und jeder davon kann seine eigene Bildrate haben, was im Wesentlichen VFR ermöglicht. Dies ist jedoch unpraktisch,
          wenn die Bildrate häufig geändert werden muss.
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
              <td>3,5 bis 126</td>
              <td>10,5 bis 107</td>
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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
      <td>Offen und frei von Lizenzgebühren oder anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies entwickelt. Nach dem Kauf von On2 hat Google VP8 als ein offenes und lizenzfreies Videoformat veröffentlicht, mit dem Versprechen, die relevanten Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Falls vom Browser unterstützt, erlaubt VP8 Video mit einem Alphakanal, welches erlaubt, dass der Hintergrund durch das Video in einem vom Alpha-Wert jedes Pixels festgelegten Grad durchscheinen kann.

VP8 hat eine gute Browserunterstützung für HTML-Inhalte, insbesondere innerhalb von [WebM](/de/docs/Web/Media/Formats/Containers#webm)-Dateien.
Dies macht VP8 zu einer guten Wahl für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl ist, wenn es verfügbar ist.
Webbrowser sind _gefordert_, VP8 für WebRTC zu unterstützen, aber nicht alle Browser, die dies tun, unterstützen es auch in HTML-Audio- und -Videoelementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, Level-basierte Einschränkungen werden erzwungen</td>
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
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
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
      <td>Ja; VP8 ist einer der von der Spezifikation geforderten Codecs für WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Betreuende Organisation</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Offen und frei von Lizenzgebühren oder anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, der von Google entwickelt wurde. Wie VP8 ist VP9 vollständig offen und lizenzgebührenfrei. Die Kodierung und Dekodierung von VP9 ist vergleichbar oder etwas schneller als die von AVC, jedoch mit besserer Qualität. Die Qualität des kodierten VP9-Videos ist vergleichbar mit der von HEVC bei ähnlichen Bitraten.

Das Hauptprofil von VP9 unterstützt nur 8-Bit-Farbtiefe bei 4:2:0-Chroma-Sampling-Niveaus, aber seine Profile umfassen die Unterstützung für tiefere Farben und das gesamte Spektrum der Chroma-Subsampling-Modi. Es unterstützt mehrere HDR-Implementierungen und bietet beträchtliche Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von vielen Browsern weitgehend unterstützt, und Hardwareimplementierungen des Codecs sind ziemlich verbreitet. VP9 ist einer der beiden Video-Codec, die von [WebM](/de/docs/Web/Media/Formats/Containers#webm) gefordert werden (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass die Unterstützung von Safari für WebM und VP9 erst in Version 14.1 eingeführt wurde. Wenn Sie sich also entscheiden, VP9 zu verwenden, sollten Sie ein Fallback-Format wie AVC oder HEVC für iPhone-, iPad- und Mac-Nutzer anbieten.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und wenn nötig ein Fallback-Video anbieten). Dies gilt besonders, wenn Sie lieber einen offenen Codec als einen proprietären verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, es sei denn, Level-basierte Einschränkungen werden erzwungen</td>
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
      <th scope="row">Variable Frame Rate (VFR) Unterstützung</th>
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
      <th scope="row">Unterstützende/Betreuende Organisation</th>
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
      <td>Offen und frei von Lizenzgebühren oder anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Video-Codecs

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden, oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu erzeugen? Die Möglichkeit, eine Fallback-Option bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei denen Sie bereit sind, auf die Kompatibilität zu verzichten?
- Wie alt ist die älteste Version eines Webbrowsers, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem Browser arbeiten, der in den letzten fünf Jahren ausgeliefert wurde, oder nur im letzten Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der für den Anwendungsfall als bester angesehene Codec proprietär ist oder Lizenzgebühren erfordern könnte, werden zwei Optionen bereitgestellt: zuerst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, wählen Sie das für Ihre Bedürfnisse am besten geeignete Format. Die erste wird als gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am breitesten kompatible Wahl sein, allerdings auf Kosten von etwas Qualität, Leistung und/oder Größe.

### Empfehlungen für alltägliche Videos

Werfen wir zuerst einen Blick auf die besten Optionen für Videos, die auf einer typischen Website wie einem Blog, einer Informationsseite oder einer kleinen Unternehmenswebsite gezeigt werden, auf der Videos zur Produktdemonstration verwendet werden (jedoch nicht wo die Videos selbst ein Produkt sind) usw.

1. Ein **[WebM](/de/docs/Web/Media/Formats/Containers#webm)**-Container, der den **[VP9](#vp9)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Dies alles sind offene, lizenzfreie Formate, die generell gut unterstützt werden, allerdings nur in ziemlich aktuellen Browsern, weshalb ein Fallback eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Video-Codec, idealerweise mit **[AAC](/de/docs/Web/Media/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audio-Codec. Dies liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs eine breit unterstützte Kombination ist – von jedem großen Browser in der Tat – und die Qualität für die meisten Anwendungen typisch gut ist. Stellen Sie jedoch sicher, dass Sie die Lizenzanforderungen einhalten.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein schließendes `</video>`-Tag, unabhängig davon, ob Sie darin irgendwelche {{HTMLElement("source")}}-Elemente haben.

### Empfehlungen für hochwertige Videopräsentationen

Wenn Ihre Aufgabe darin besteht, Videos in höchstmöglicher Qualität zu präsentieren, profitieren Sie wahrscheinlich davon, so viele Formate wie möglich anzubieten, da die Codecs, die die beste Qualität ermöglichen, auch zu den neuesten gehören und daher am ehesten Lücken in der Browser-Kompatibilität aufweisen.

1. Ein WebM-Container mit AV1 für Video und Opus für Audio. Wenn Sie in der Lage sind, beim Kodieren von AV1 das High- oder Professional-Profil auf einem hohen Niveau wie 6.3 zu verwenden, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erzielen und dabei eine exzellente Videoqualität beibehalten. Das Kodieren Ihres Audios mit dem Fullband-Profil von Opus bei einer Abtastrate von 48 kHz maximiert die erfasste Audiobandbreite und erfasst nahezu den gesamten Frequenzbereich, der für das menschliche Gehör hörbar ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container, der den [HEVC](#hevc_h.265)-Codec mit einem der erweiterten Main-Profile verwendet, wie Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4-Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies eine exzellente Grafikqualität mit bemerkenswerter Farbwiedergabe. Zusätzlich können Sie optional HDR-Metadaten hinzufügen, um Videos mit hohem Dynamikumfang zu bieten. Für Audio verwenden Sie den AAC-Codec bei einer hohen Abtastrate (mindestens 48 kHz, idealerweise jedoch 96 kHz) und kodiert mit komplexer anstatt schneller Kodierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remixing

Es gibt derzeit keine verlustfreien – oder auch nur nahezu verlustfreien – Video-Codecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist definitionsgemäß weniger effektiv als verlustbehaftete. Zum Beispiel benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0-Chromasubsampling mindestens 1,5 Gbit/s. Die Verwendung verlustfreier Kompression wie FFV1 (die von Webbrowsern nicht unterstützt wird) könnte dies möglicherweise auf etwa 600 Mbit/s reduzieren, abhängig vom Inhalt. Das ist immer noch eine riesige Anzahl von Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keine realen Anwendungen praktisch.

Das ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus verfügbar haben; die verlustfreien Modi sind in keinen aktuellen Webbrowsern implementiert. Das Beste, was Sie tun können, ist, einen qualitativ hochwertigen Codec zu wählen, der verlustbehaftete Kompression verwendet und ihn so zu konfigurieren, dass er so wenig Kompression wie möglich durchführt. Eine Möglichkeit, dies zu tun, besteht darin, den Codec so zu konfigurieren, dass er eine "schnelle" Kompression verwendet, was von Natur aus bedeutet, dass weniger Kompression erreicht wird.

#### Vorbereitung von Videos extern

Um Videos aus externen Quellen für Archivierungszwecke vorzubereiten, verwenden Sie ein Dienstprogramm, das Kompression bei den ursprünglichen unkomprimierten Videodaten durchführt. Zum Beispiel kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Videos im [AVC](#avc_h.264)-Format mit sehr hoher Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output outfilename.mp4 infile
```

Obwohl andere Codecs bessere Best-Case-Qualitätsstufen beim Komprimieren von Video mit einem erheblichen Vorteil haben, neigen ihre Encoder dazu, so langsam zu sein, dass die nahezu verlustfreie Kodierung, die Sie mit dieser Kompression erhalten, erheblich schneller ist bei etwa gleichem Qualitätsniveau insgesamt.

#### Videoaufzeichnung

Angesichts der Einschränkungen, wie nah am verlustfreien Zustand Sie kommen können, könnten Sie in Betracht ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, wenn Sie Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der auf die Aufzeichnung von [AV1](#av1)-Video unter Verwendung von BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chromasubsampling und [FLAC](/de/docs/Web/Media/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio konfiguriert ist. Die resultierende Datei wird eine Bitrate von maximal 800 Mbps verwenden, die zwischen den Video- und Audiotracks geteilt wird. Sie werden wahrscheinlich diese Werte je nach Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten, anpassen müssen. Diese Bitrate ist offensichtlich nicht realistisch für die Übertragung über ein Netzwerk und würde wahrscheinlich nur lokal verwendet werden.

Wenn wir den Wert des `codecs`-Parameters in seine durch Punkte getrennten Eigenschaften aufschlüsseln, sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                               |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Der vierstellige Code (4CC), der den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                                                      |
| `2`    | Das Profil. Ein Wert von 2 zeigt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil angeben würde.                                                                                                                                                     |
| `19H`  | Das Niveau und die Stufe. Dieser Wert stammt aus der Tabelle im Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt die hohe Stufe von Level 6.3 an.                                                                                                           |
| `12`   | Die Farbtiefe. Dies zeigt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die genaueste Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                                              |
| `0`    | Die Monochrommodus-Flagge. Wenn 1, würden keine Chromakanäle aufgezeichnet, und alle Daten sollten streng Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 angegeben, weil wir Farbe wollen.                                                                                                |
| `000`  | Der Chromasubsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Monochrommoduswert 0, zeigt an, dass wir 4:4:4-Chromasubsampling wünschen, oder keinen Verlust von Farbdaten. |
| `09`   | Die Primärfarben, die verwendet werden sollen. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                                       |
| `16`   | Die Übertragungscharakteristik, die verwendet werden soll. Diese stammt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 zeigt an, dass wir die Eigenschaften für BT.2100 PQ-Farbwiedergabe verwenden möchten.                                         |
| `09`   | Die Matrizenkoeffizienten, die verwendet werden sollen, aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) erneut. Ein Wert von 9 spezifiziert, dass wir BT.2020 mit variabler Leuchtdichte verwenden möchten; dies ist auch bekannt als BT.2010 YbCbCr.               |
| `1`    | Die Video-"full range"-Flagge. Ein Wert von 1 zeigt an, dass der volle Farbbereich verwendet werden soll.                                                                                                                                                                                                  |

Die Dokumentation für Ihre Codec-Auswahl wird wahrscheinlich Informationen bieten, die Sie beim Zusammenstellen Ihres `codecs`-Parameters verwenden.

## Siehe auch

- [Web-Audio-Codec-Leitfaden](/de/docs/Web/Media/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Formats/Containers)
- [Umgang mit Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die Parameter "Codecs" und "Profiles" für "Bucket" Medientypen
- {{RFC(5334)}}: Ogg Medientypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

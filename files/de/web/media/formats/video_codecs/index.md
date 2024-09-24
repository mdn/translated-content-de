---
title: Anleitung zu Webvideocodecs
slug: Web/Media/Formats/Video_codecs
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Diese Anleitung führt in die Videocodecs ein, die Sie am wahrscheinlichsten im Web antreffen oder in Betracht ziehen werden, mit Zusammenfassungen ihrer Funktionen, eventuellen Kompatibilitäts- und Nutzungsbedenken sowie Ratschlägen, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Aufgrund der erheblichen Größe von unkomprimierten Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie überhaupt speichern oder über ein Netzwerk übertragen zu können. Stellen Sie sich die Datenmenge vor, die benötigt wird, um unkomprimiertes Video zu speichern:

- Ein einziges Bild eines hochauflösenden (1920x1080) Videos in voller Farbe (4 Bytes pro Pixel) umfasst 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde eines HD-Videos 248.832.000 Bytes (ca. 249 MB) beanspruchen.
- Eine Minute HD-Video benötigt 14,93 GB Speicherplatz.
- Eine durchschnittlich typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, und ein 2-stündiger Film würde fast 1,79 **TB** (d. h. 1790 GB) verbrauchen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die erforderlich ist, um ein solches unkomprimiertes Video zu übertragen, wäre gigantisch, bei 249 MB/s – ohne Audio und Overhead. Hier kommen Videocodecs ins Spiel. Genau wie Audiocodecs die Audiodaten komprimieren, komprimieren Videocodecs die Videodaten und kodieren sie in ein Format, das später dekodiert und wiedergegeben oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**, sodass das dekodierte Video nicht exakt mit der Quelle übereinstimmt. Einige Details können verloren gehen; die Menge des Verlusts hängt vom Codec und dessen Konfiguration ab, aber als allgemeine Regel gilt: Je mehr Kompression erreicht wird, desto mehr Detail- und Treueverlust tritt auf. Einige verlustfreie Codecs existieren, sie werden jedoch typischerweise für Archivzwecke und lokale Wiedergabe verwendet, nicht für die Verwendung in einem Netzwerk.

## Gängige Codecs

Die folgenden Videocodecs sind diejenigen, die im Web am häufigsten verwendet werden. Für jeden Codec sind auch die Container aufgelistet, die sie unterstützen können (Dateitypen). Jeder Codec bietet einen Link zu einem untenstehenden Abschnitt, der zusätzliche Details über den Codec bietet, einschließlich spezifischer Funktionen und Kompatibilitätsprobleme, die Ihnen bekannt sein sollten.

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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: die Besonderheiten des Formats und des Inhalts des Quellvideos sowie die Eigenschaften und Konfiguration des Codecs, der bei der Kodierung des Videos verwendet wird.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das ursprüngliche, unkomprimierte, Video aussehen lässt, wird im Allgemeinen auch die resultierenden Daten größer machen. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen lohnt sich eine größere Qualitätseinbuße, um die Datenmenge zu reduzieren; in anderen Fällen ist der Qualitätsverlust inakzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Einfluss des Quellvideoformats auf die kodierte Ausgabe

Der Umfang, in dem das Format des Quellvideos die Ausgabe beeinflusst, variiert je nach Codec und dessen Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf andere Weise als mit einfachen Pixeln darstellt, spielt das Format des ursprünglichen Bildes keine Rolle. Dinge wie Bildrate und, offensichtlich, Auflösung werden jedoch immer eine Auswirkung auf die Ausgabengröße der Medien haben.

Zusätzlich haben alle Codecs ihre Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern, sind nicht gut darin, scharfe Kanten zu replizieren, oder neigen dazu, in dunklen Bereichen Details zu verlieren oder andere mögliche Probleme. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Einfluss des Quellvideoformats und -inhalts auf die Qualität
    und Größe des kodierten Videos
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
        Je höher die Farbbittiefe, desto höher ist die Qualität der
        Farbtreue im Video. Darüber hinaus ermöglichen Farbtiefen unter
        10 Bit pro Komponente (10-Bit-Farbe) bei gesättigten Teilen des Bildes
        (d. h. dort, wo Farben rein und intensiv sind, wie z. B. ein leuchtendes,
        reines Rot: <code>rgb(255 0 0 / 100%)</code>), Banding, wo
        Farbverläufe nicht ohne sichtbare Abstufungen der Farben dargestellt
        werden können.
      </td>
      <td>
        Je nach Codec können höhere Farbtiefen zu größeren komprimierten
        Dateigrößen führen. Der bestimmende Faktor ist, welches interne
        Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst in erster Linie die wahrgenommene Fließfähigkeit der
        Bewegung im Bild. Bis zu einem gewissen Punkt wird die Bewegung
        umso fließender und realistischer, je höher die Bildrate ist.
        Schließlich wird der Punkt abnehmenden Nutzen erreicht. Siehe
        <a href="#reduced_frame_rate">Bildrate</a> unten für Details.
      </td>
      <td>
        Wenn die Bildrate während der Kodierung nicht reduziert wird,
        verursachen höhere Bildraten größere komprimierte Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Videokompression funktioniert normalerweise, indem Frames
        verglichen werden, um festzustellen, wo sie sich unterscheiden,
        und Aufzeichnungen erzeugt werden, die genügend Informationen
        enthalten, um das vorherige Bild zu aktualisieren und das
        Aussehen des folgenden Bildes anzunähern. Je mehr aufeinanderfolgende
        Frames sich voneinander unterscheiden, desto größer sind diese
        Unterschiede, und desto weniger effektiv ist die Kompression
        bei der Vermeidung der Einführung von Artefakten in das
        komprimierte Video.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren
        Zwischenframes aufgrund der höheren Anzahl von Unterschieden
        zwischen den Frames. Aus diesem und anderen Gründen wird
        das Ausgabefile typischerweise größer, je mehr Bewegung
        in einem Video vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (z. B. Filmeffekte, Staub oder andere Unebenheiten im Bild)
        erzeugt Variabilitäten. Variabilität erschwert generell die Kompression,
        was zu mehr Qualitätsverlusten führt, da Details aufgegeben werden
        müssen, um dasselbe Kompressionsniveau zu erreichen.
      </td>
      <td>
        Je mehr Variabilität - wie Rauschen - im Bild vorhanden ist,
        desto komplexer wird der Kompressionsprozess und desto geringer
        ist der Erfolg des Algorithmus beim Erreichen des gleichen
        Kompressionsgrads. Wenn Sie den Encoder nicht so konfigurieren,
        dass einige oder alle durch Rauschen verursachten Abweichungen
        ignoriert werden, wird das komprimierte Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höhere Auflösungen, die auf derselben Bildschirmgröße
        präsentiert werden, ermöglichen typischerweise eine genauere
        Darstellung der ursprünglichen Szene, abgesehen von Effekten,
        die während der Kompression eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es.
        Dies spielt eine entscheidende Rolle bei der endgültigen Größe
        des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, hängt von den genauen Details der Situation ab, einschließlich des verwendeten Encoders und dessen Konfiguration. Zusätzlich zu den allgemeinen Codec-Optionen kann der Encoder konfiguriert sein, um die Bildrate zu reduzieren, Rauschen zu entfernen und/oder die Gesamtauslösung des Videos während der Kodierung zu reduzieren.

### Einfluss der Codec-Konfiguration auf die kodierte Ausgabe

Die Algorithmen, die zur Videokodierung verwendet werden, verwenden in der Regel eine oder mehrere von einer Reihe von allgemein gültigen Techniken, um ihre Kodierung durchzuführen. Im Allgemeinen wird jede Konfigurationsoption, die dazu gedacht ist, die Ausgabegröße des Videos zu reduzieren, wahrscheinlich negative Auswirkungen auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten im Video einführen. Es ist auch möglich, eine verlustfreie Kodierung zu wählen, die jedoch zu einer viel größeren kodierten Datei führt, aber eine perfekte Reproduktion des Originalvideos nach der Dekodierung bietet.

Darüber hinaus kann jeder Encoder_Dienst geringfügige Unterschiede in der Verarbeitung des Quellvideos aufweisen, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

<table class="standard-table">
  <caption>
    Effekte der Konfiguration des Videoencoders auf Qualität und Größe
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
      <th scope="row">Verlustfreie Kompression</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Kompression kann die Gesamtvideogröße nicht annähernd so
        stark wie verlustbehaftete Kompression reduzieren; die resultierenden
        Dateien sind wahrscheinlich immer noch zu groß für die allgemeine
        Verwendung.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        Je nach Codec und dem Grad der angewendeten Kompression treten in einem
        gewissen Ausmaß Artefakte und andere Formen der Qualitätsverschlechterung
        auf.
      </td>
      <td>
        Je weiter sich das kodierte Video von der Quelle entfernen darf, desto
        einfacher ist es, höhere Kompressionsraten zu erreichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr wird das kodierte Video
        dem Original ähnlich sehen.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren kodierten
        Videodateien; das Ausmaß, in dem dies zutrifft, variiert je nach Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Qualität verbessert sich im Allgemeinen bei höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die Optionen, die bei der Kodierung von Video zur Verfügung stehen, und die Werte, die diesen Optionen zugewiesen werden, können nicht nur von einem Codec zum anderen variieren, sondern auch je nach dem von Ihnen verwendeten Kodierungsprogramm. Die Dokumentation, die mit Ihrer Kodierungssoftware enthalten ist, hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebeneffekte eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten zu optisch negativen Effekten führen. Sobald ein Artefakt aufgetaucht ist, kann es eine Weile bestehen bleiben, aufgrund der Art und Weise, wie Video angezeigt wird. Jedes Video-Frame wird angezeigt, indem eine Reihe von Änderungen auf das momentan sichtbare Bild angewendet werden. Dies bedeutet, dass alle Fehler oder Artefakte sich mit der Zeit summieren und zu Störungen oder anderen seltsamen oder unerwarteten Abweichungen im Bild führen können, die eine Zeit lang anhalten.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselframes** (auch als **Intra-Frames** oder **i-Frames** bekannt) in die Videodatei eingefügt. Die Schlüsselframes sind vollständige Frames, die verwendet werden, um sichtbare Schäden oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasbildung ist ein allgemeiner Begriff für alles, was nach der Rekonstruktion aus den codierten Daten nicht so aussieht wie vor der Kompression. Es gibt viele Formen der Aliasing, die häufigsten, die Sie möglicherweise sehen, umfassen:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht, wenn
          ein Muster im Quellbild und die Art und Weise, wie der Encoder
          funktioniert, räumlich leicht nicht ausgerichtet sind. Die vom Encoder
          generierten Artefakte führen dann dazu, dass im Muster des
          Quellbilds beim Dekodieren seltsame Wirbelwirkungen entstehen.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="eine Ziegelwand, die einen wirbelartigen Effekt ähnlich Wellen aufgrund des Moiré-Musters zeigt" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppenstufeneffekt</h4>
        <p>
          Der <strong>Treppenstufeneffekt</strong> ist ein räumliches Artefakt,
          das auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt
          sein sollten, eine gezackte Erscheinung annehmen, die ein wenig wie
          eine Treppe aussieht. Dies ist der Effekt, der durch Antialiasing-Filter
          reduziert wird.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die wegen Aliasing wie eine Treppe aussehen und einen Treppenstufeneffekt hervorrufen
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
            ><a href="https://de.wikipedia.org/wiki/Stroboskopischer_Effekt">stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, der häufig in Filmen zu sehen ist, bei
          dem ein sich drehendes Rad mit der falschen Geschwindigkeit oder
          sogar rückwärts erscheint, aufgrund einer Wechselwirkung zwischen
          der Bildrate und dem Kompressionsalgorithmus. Der gleiche Effekt
          kann bei jedem sich wiederholenden Muster auftreten, das sich bewegt,
          wie z. B. bei den Krawatten auf einer Eisenbahnlinie, Pfosten entlang
          eines Wegs usw. Dies ist ein zeitlich (zeitbasierter) Alias-Effekt;
          die Geschwindigkeit der Rotation stört die Frequenz der während
          der Kompression oder Kodierung durchgeführten Abtastung.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Drehender Rad durch Aliasing den Wagon-wheel-Effekt verursachend." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farbverzerrung

**Farbverzerrung** ist eine Art von visuellem Artefakt, das als störende Farben entlang der Ränder von farbigen Objekten innerhalb der Szene auftritt. Diese Farben haben keine beabsichtigte farbliche Beziehung zu den Inhalten des Bildes.

### Verlust von Schärfe

Der Prozess des Entfernens von Daten im Verlauf der Videokodierung erfordert, dass einige Details verloren gehen. Bei genügend starker Kompression könnten Teile oder potenziell das ganze Bild seine Schärfe verlieren, was zu einem leicht unscharfen oder verschwommenen Erscheinungsbild führt.

Verlorene Schärfe kann es erschweren, Text im Bild zu lesen, da Text – insbesondere kleiner Text – sehr detailorientierter Inhalt ist, bei dem geringfügige Änderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Kompressionsalgorithmen können **[Klingeleffekte](https://de.wikipedia.org/wiki/Ringing_artifacts)** einführen, bei denen Bereiche außerhalb eines Objekts mit von dem Kompressionsalgorithmus erzeugten Farbpixeln kontaminiert werden. Dies passiert, wenn ein Algorithmus, der Blöcke verwendet, die über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund verlaufen. Dies ist besonders häufig bei höheren Kompressionsstufen.

![Beispiel für den Klingeleffekt](ringing-effects.png)

Beachten Sie die blauen und rosa Kanten um die Ecken des Sterns oben (sowie die Abstufungen und anderen signifikanten Kompressionsartefakte). Diese Kanten sind der Klingeleffekt. Klingeln ist in gewisser Hinsicht dem [Moskito-Rauschen](#moskito-rauschen) ähnlich, außer dass das Klingeleffekt mehr oder weniger stabil und unverändert bleibt, während das Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterization

**Posterization** tritt auf, wenn die Kompression zu einem Verlust an Farbdetails in Verläufen führt. Anstelle eines sanften Übergangs durch die verschiedenen Farben in einem Bereich wird das Bild blockartig, mit Farbflecken, die das ursprüngliche Aussehen des Bildes annähern.

![Weißkopfseeadler-Foto mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers im obenstehenden Foto (und die schneeeule im Hintergrund). Die Details der Federn sind weitgehend verloren aufgrund der Posterisationsartefakte.

### Konturierung

**Konturierung** oder **Farbbänderbildung** ist eine spezifische Form der Posterisierung, bei der die Farbblöcke Bands oder Streifen im Bild bilden. Dies geschieht, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Daher zeigt der Inhalt des Videos ein "geschichtetes" Aussehen, bei dem anstelle glatter Farbverläufe und -übergänge, die Übergänge von Farbe zu Farbe abrupt sind, was zu Streifen von Farben führt.

![Beispiel eines Bildes, dessen Kompression Konturierung eingeführt hat](contouring-effect.jpg)

Im obigen Beispielbild bemerken Sie, wie der Himmel Bänder unterschiedlicher Blautöne aufweist, anstatt ein konsistenter Farbverlauf zu sein, da sich die Himmelsfarbe zum Horizont hin ändert. Dies ist der Konturierungseffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein temporales Artefakt, das als Rauschen oder **Kantenstörung** präsentiert wird und als flimmernde Unschärfe oder Schimmern erscheint, das grob außerhalb der Ränder von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann dem [Klingeln](#klingeln) ähnlich aussehen.

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das Foto oben zeigt Moskito-Rauschen an mehreren Stellen, einschließlich im Himmel um die Brücke herum. Im oberen rechten Eck ist ein Ausschnitt zu sehen, der einen vergrößerten Teil des Bildes zeigt, der Moskito-Rauschen aufweist.

Moskito-Rausch-Artefakte sind am häufigsten im MPEG-Video zu finden, können jedoch auftreten, wann immer ein diskretes Kosinustransformations-Algorithmus (DCT) verwendet wird; dies beinhaltet beispielsweise JPEG-Stillbilder.

### Bewegungsentschädigungs-Blockgrenzen-Artefakte

Videokompression funktioniert normalerweise, indem zwei Frames verglichen und die Unterschiede zwischen ihnen festgehalten werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest installiert ist oder die Objekte im Frame relativ unbewegt sind, aber wenn es eine große Menge an Bewegung im Frame gibt, können die Unterschiede zwischen den Frames so groß werden, dass Kompression keinen Nutzen hat.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die nach Bewegung sucht (entweder der Kamera oder der Objekte im Sichtfeld) und bestimmt, um wie viele Pixel sich das bewegte Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die sich bewegt haben, die nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die sich bewegenden Objekte und erstellt dann eine Art internes Frame, das wie das Original aussieht, jedoch mit allen Objekten an ihren neuen Positionen verschoben. Theoretisch nähert dies dem neuen Frameaussehen. Um den Job zu beenden, werden die verbleibenden Unterschiede gefunden, dann wird die Reihe der Objektschiebungen und die Reihe der Pixeldifferenzen in den Daten gespeichert, die den neuen Frame darstellen. Dieses Objekt, das die Verschiebung und die Pixeldifferenzen beschreibt, wird als **Restbild** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Original-Frame</th>
      <th scope="col" style="width: 216px">Zwischen-Bild-Unterschiede</th>
      <th scope="col" style="width: 216px">
        Unterschied nach Bewegungsentschädigung
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originaler Videoframe" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Frame und dem folgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Frames nach zweipixeligem Rechtsverschieben"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Der erste vollständige Frame, wie vom Zuschauer gesehen.
      </td>
      <td style="vertical-align: top">
        Hier werden nur die Unterschiede zwischen dem ersten Frame und
        dem folgenden Frame angezeigt. Alles andere ist schwarz. Bei
        näherer Betrachtung können wir sehen, dass der Großteil dieser
        Unterschiede aus einem horizontalen Kamerabewegung resultiert,
        was dieses zu einem guten Kandidaten für Bewegungsentschädigung
        macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen
        wir hier die Schwenkung der Kamera, indem zunächst der erste Frame nach
        rechts verschoben wird, dann den Unterschied zu nehmen. Dies
        kompensiert die Schwenkung der Kamera und ermöglicht mehr Überlappung
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Block-Bewegungskompensation**. Bei der globalen Bewegungskompensation wird die Bewegung der Kamera wie Tracking, Dolly-Bewegungen, Schwenken, Neigen, Rollen und Auf- und Abbewegungen berücksichtigt. Die Block-Bewegungskompensation behandelt lokale Änderungen, bei denen kleinere Abschnitte des Bildes gesucht werden, die mit Bewegungsentschädigung kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe, in einem Raster, aber es gibt Formen der Bewegungsausgleichung, die variable Blockgrößen erlauben und sogar Blöcke überlappen lassen.

Es gibt jedoch auch Artefakte, die aufgrund von Bewegungsausgleichung auftreten können. Diese treten entlang der Blockränder in Form von scharfen Kanten auf, die falsche Ringmuster und andere Kantenwirkungen produzieren. Diese entstehen durch die mathematischen Berechnungen in der Kodierung der Restbilder und können leicht vor Reparatur durch das nächste Schlüsselframe bemerkt werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Obwohl der unmittelbare Verlust an Größe oder Sanftheit bei der Wiedergabe ein negativer Faktor sein kann, kann eine sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video viel kleiner sein und gleichzeitig eine höhere visuelle Qualität haben; selbst nach Hochskalierung während der Wiedergabe kann das Ergebnis besser sein als das Originalvideo in voller Größe zu kodieren und den notwendigen Qualitätseinbußen zu akzeptieren, um die Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich können bestimmte Frames aus dem Video vollständig entfernt werden, um die Bildrate anzupassen. Dies hat zwei Vorteile: Es macht das Gesamtvideo kleiner, und diese kleinere Größe ermöglicht die Bewegungsausgleichung noch effektiver gestalten. Wenn man beispielsweise die Bewegung zwischen zwei Frames berechnet, die sich aufgrund der Framebewegung um zwei Pixel verschieben, könnte das Überspringen jedes zweiten Frames eine Differenz von vier Pixeln Bewegung berechnen lassen. Dies lässt die gesamte Bewegung der Kamera durch weniger Residualframes darstellen.

Die absolute Mindestbildfrequenz, bei der ein Video von der menschlichen Sicht nicht mehr als Bewegung wahrgenommen wird, beträgt etwa 12 Bilder pro Sekunde. Weniger als das, und das Video wird zu einer Reihe von Standbildern. Kinofilm ist typischerweise 24 Bilder pro Sekunde, während Standarddefinition Fernsehen etwa 30 Bilder pro Sekunde beträgt (leicht weniger, aber nah genug) und Hochauflösungsfernsehen zwischen 24 und 60 Bilder pro Sekunde liegt. Alles ab 24 FPS wird im Allgemeinen als ausreichend flüssig empfunden; 30 oder 60 FPS ist ein ideales Ziel, je nach Ihren Bedürfnissen.

Am Ende sind die Entscheidungen, welche Kompromisse Sie eingehen können, ganz Ihnen und/oder Ihrem Designteam überlassen.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideo entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzfrei und wurde sowohl für das {{HTMLElement("video")}} Element als auch für [WebRTC](/de/docs/Web/API/WebRTC_API) entwickelt.

AV1 bietet derzeit drei Profile an: **main**, **high** und **professional** mit zunehmender Unterstützung für Farbtiefen und Chroma-Unterabtastung. Außerdem wird eine Reihe von **Levels** spezifiziert, die jeweils Grenzen für eine Reihe von Attributen des Videos definieren. Zu diesen Attributen gehören Bildabmessungen, Bildbereich in Pixeln, Anzeige- und Dekodierungsraten, durchschnittliche und maximale Bitraten und Beschränkungen für die Anzahl der im Kodierungs-/Dekodierungsprozess verwendeten Tiles und Tile-Spalten.

Beispielsweise bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber seine maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es lohnt sich jedoch zu beachten, dass die Levels zumindest für Firefox und Chrome tatsächlich ignoriert werden, wenn die Softwaredekodierung durchgeführt wird, und der Decoder lediglich sein Bestes tut, um das Video anhand der bereitgestellten Einstellungen abzuspielen. Der Kompatibilität zuliebe sollten Sie sich jedoch auch in Zukunft an die Beschränkungen des gewählten Levels halten.

Der Hauptnachteil von AV1 ist derzeit, dass es sehr neu ist und die Unterstützung in den meisten Browsern noch integriert wird. Darüber hinaus werden Encoder und Decoder noch hinsichtlich ihrer Leistung optimiert, und Hardware-Encoder und -Decoder sind meist noch in der Entwicklung anstatt in der Produktion. Aus diesem Grund dauert das Kodieren eines Videos in AV1-Format sehr lange, da alles in Software erfolgt.

Derzeit ist AV1 aus diesen Gründen noch nicht bereit, Ihre erste Wahl an Videocodec zu sein, aber Sie sollten darauf achten, wann es einsatzbereit wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        <p>
          Variiert je nach Level des Videos; theoretisches Maximum erreicht
          800 Mbps bei Level 6.3
        </p>
        <p>
          Siehe die
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Level-Tabellen</a
          > der AV1-Spezifikation, die die maximalen Auflösungen und Raten in
          jedem Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Variiert je nach Level; zum Beispiel hat Level 2.0 ein Maximum von 30 FPS,
        während Level 6.3 120 FPS erreichen kann
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
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension zwischen
        diesen Werten liegen darf
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbräume</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Unterabtastung</th>
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
      <th scope="row">Unterstützung für HDR</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Kompatibilität mit Browsern</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Merkmal</th>
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
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/pflegende Organisation</th>
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

Der **Advanced Video Coding** (**AVC**) Standard der MPEG-4-Spezifikationssuite ist durch die identische ITU H.264-Spezifikation und die MPEG-4 Part 10-Spezifikation spezifiziert. Es ist ein Codec auf Basis von Bewegungskompensation, der heute weit verbreitet für alle Arten von Medien genutzt wird, einschließlich des Rundfunks, {{Glossary("RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist äußerst flexibel, mit einer Vielzahl von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für die Verwendung in Videokonferenzen und mobilen Szenarien konzipiert, das weniger Bandbreite als das Main Profile (das für Standard-TV in einigen Regionen verwendet wird) oder das High Profile (das für Blu-Ray-Disc-Video verwendet wird) nutzt. Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0-Chroma-Unterabtastung; das High 10 Profile fügt Unterstützung für 10-Bit-Farbe hinzu, und fortgeschrittenere Formen von High 10 fügen 4:2:2- und 4:4:4-Chroma-Unterabtastung hinzu.

AVC hat auch spezielle Funktionen, wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), das unter anderem die Produktion von stereoskopischem Video ermöglicht.

AVC ist ein proprietäres Format, und mehrere Parteien besitzen zahlreiche Patente bezüglich seiner Technologien. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA Patentpool keine Lizenzgebühren für Streaming-Internetvideos im AVC-Format verlangt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht dazu verpflichtet sind, tun es einige jedoch.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen Hardware-Encodierung und -Decodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzierungsanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

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
        >, obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des
        Bildes zu erstellen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8.192 x 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbräume</th>
      <td>
        <p>Einige der häufigeren oder interessanten Profile:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Unterabtastung</th>
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
      <th scope="row">Unterstützung für HDR</th>
      <td>
        Ja; <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder
        Advanced HDR/SL-HDR; beides ist Bestandteil von ATSC
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
          Die Unterstützung für AVC in Firefox hängt vom integrierten oder
          vorinstallierten Codec des Betriebssystems für AVC und seinen
          Container ab, um Patentprobleme zu vermeiden.
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
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/pflegende Organisation</th>
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
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263** Codec der ITU wurde primär für den Einsatz in Niedrigbandbreitensituationen entwickelt. Insbesondere fokussiert er sich auf Videokonferenzen in PSTN (Public Switched Telephone Networks), {{Glossary("RTSP")}}, und SIP (IP-basierten Videokonferenz-)Systemen. Trotz der Optimierung für Niedrigbandbreiten-Netzwerke ist er ziemlich rechenintensiv und kann möglicherweise nicht auf niedrigwertigen Computern angemessen funktionieren. Das Datenformat ist ähnlich dem von MPEG-4 Part 2.

H.263 wurde nie weit im Web verwendet. Variationen von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie Flash-Video oder der Sorenson-Codec. Kein größerer Browser hat jemals H.263-Unterstützung standardmäßig integriert. Bestimmte Mediendplugins haben H.263-Medienunterstützung ermöglicht.

Im Unterschied zu den meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Bezug auf die maximale Bitrate pro Frame (Bild) oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb ausgewählt und dann kann das Video diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt von diesem, der Bildrate, der Kompression und der gewählten Auflösung und dem Blockformat ab.

H.263 wurde durch H.264 abgelöst und ist daher als veraltetes Medienformat zu betrachten, das Sie nach Möglichkeit vermeiden sollten. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, besteht darin, dass Sie Unterstützung auf sehr alten Geräten benötigen, für die H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm usw. Um H.263 zu verwenden, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Uneingeschränkt, jedoch typischerweise unter 64 kbps</td>
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
          Version 1 von H.263 gibt eine Reihe von Bildgrößen an, die
          unterstützt werden. Spätere Versionen können zusätzliche
          Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbräume</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixeln sowie, wie viele Reihen von Leuchtdichte- und
        Chrominanzproben für jedes Bild verwendet werden
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
              <th scope="row">Merkmal</th>
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
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/pflegende Organisation</th>
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
        Proprietär; entsprechende Lizenz oder Lizenzen sind erforderlich.
        Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec ist durch ITUs **H.265** sowie durch MPEG-H Part 2 (die noch in Entwicklung befindliche Nachfolge von MPEG-4) definiert. HEVC wurde entwickelt, um eine effiziente Kodierung und Dekodierung von Videos in Größen, die sehr hohe Auflösungen (einschließlich 8K-Video) umfassen, zu unterstützen, mit einer Struktur, die speziell dafür ausgelegt ist, dass Software moderne Prozessoren nutzen kann. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie die von [AVC](#avc_h.264) bei vergleichbarer Bildqualität.

Zum Beispiel besteht jede Kodierungseinheit (CTU) - ähnlich dem Makroblock, der in vorherigen Codecs verwendet wird - aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede im selben Kodierungseinheit verwendete Chroma-Probe sowie allen erforderlichen Syntaxelementen. Diese Struktur unterstützt die einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-Bit pro Komponente Farbe mit 4:2:0-Chroma-Unterabtastung unterstützt. Interessant ist auch, dass 4:4:4-Video speziell behandelt wird. Anstatt die Luma-Proben (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Proben (die angeben, wie die Grautöne geändert werden, um farbige Pixel zu erstellen) zu haben, werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann bei der Darstellung kombiniert werden, um ein Vollfarbbild zu erzeugen.

HEVC ist ein proprietäres Format und wird von einer Reihe von Patenten abgedeckt. Die Lizenzierung wird von [Via LA](https://www.via-la.com/licensing-2/hevc-vvc/) verwaltet; Gebühren werden an Entwickler anstatt an Inhaltsproduzenten und -vertreiber erhoben. Stellen Sie sicher, dass Sie vor der Entscheidung zur Nutzung von HEVC in Ihrer App oder auf Ihrer Website die neuesten Lizenzbedingungen und Anforderungen überprüfen!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800.000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS möglich</td>
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
      <th scope="row">Unterstützte Farbräume</th>
      <td>
        <p>
          Die untenstehenden Informationen werden für die wichtigsten Profile
          bereitgestellt. Es gibt eine Reihe anderer Profile, die hier nicht
          enthalten sind.
        </p>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma-Unterabtastung</th>
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
      <th scope="row">Unterstützung für HDR</th>
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
              <th scope="row">Merkmal</th>
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
        <p>Chrome unterstützt HEVC für Geräte mit Hardware-Unterstützung auf Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardware-Unterstützung auf Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Video-Erweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat dieselbe Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur auf Geräten mit Hardware-Decoder.
        </p>
        <p>Mozilla wird HEVC nicht unterstützen, solange es durch Patente belastet ist.</p>
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
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/pflegende Organisation</th>
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
        Proprietär; überprüfen Sie Ihre Einhaltung der
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/"
          >Lizenzierungsanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des MPEG-4 Teil 2 Visual Standards. Obwohl MPEG-4 Teil 2 Video im Allgemeinen von niemandem verwendet wird, wegen seines Mangels an überzeugendem Mehrwert im Vergleich zu anderen Codecs, findet MP4V-ES einige Anwendung auf mobilen Geräten. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein primärer Zweck ist es, MPEG-4 Audio und Video über eine {{Glossary("RTP")}} Sitzung zu streamen. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung mit [3GP](/de/docs/Web/Media/Formats/Containers#3gp) zu übertragen.

Sie wollen dieses Format fast sicher nicht verwenden, da es nicht in bedeutender Weise von großen Browsern unterstützt wird und ziemlich veraltet ist. Dateien diesen Typs sollten die Erweiterung `.mp4v` haben, jedoch manchmal fälschlicherweise als `.mp4` gekennzeichnet.

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
      <th scope="row">Unterstützte Farbräume</th>
      <td>
        YCrCb mit Chroma-Unterabtastung (4:2:0, 4:2:2 und 4:4:4) unterstützt; bis
        zu 12 Bit pro Komponente
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
              <th scope="row">Merkmal</th>
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
        <p>Chrome unterstützt MP4V-ES nicht; ChromeOS jedoch schon.</p>
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
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/pflegende Organisation</th>
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
        bei Bedarf
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre vorgestellt. Anders als die späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG erstellt, ohne die Beteiligung der {{Glossary("ITU", "ITU's")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr im Zusammenhang mit MPEG-1-Video, sodass es frei von jeglichen Lizenzsorgen verwendet werden kann. Dennoch unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plug-ins, und da Plug-ins in Webbrowsern als veraltet gelten, sind sie allgemein nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für die Verwendung in Websites und Webanwendungen.

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
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4.095 x 4.095 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbräume</th>
      <td>
        Y'CbCr mit 4:2:0-Chroma-Unterabtastung mit bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>

---
title: Leitfaden zu Web-Videocodecs
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

Dieser Leitfaden stellt die Videocodecs vor, denen Sie wahrscheinlich im Web begegnen oder die Sie in Erwägung ziehen könnten, behandelt zusammenfassend deren Fähigkeiten sowie etwaige Kompatibilitäts- und Nutzungsaspekte und gibt Ratschläge, um Ihnen bei der Auswahl des richtigen Codecs für das Video Ihres Projekts zu helfen.

Aufgrund der enormen Größe von unkomprimierten Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie zu speichern, geschweige denn über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die benötigt wird, um unkomprimiertes Video zu speichern:

- Ein einziges Bild eines hochauflösenden (1920x1080) Videos in voller Farbe (4 Byte pro Pixel) beträgt 8.294.400 Byte.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde von HD-Video 248.832.000 Byte (\~249 MB) benötigen.
- Eine Minute HD-Video benötigt 14,93 GB Speicherplatz.
- Eine typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, und ein zweistündiger Film würde _fast 1,79 **TB** (also 1790 GB)_ beanspruchen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die zur Übertragung eines solchen unkomprimierten Videos erforderlich wäre, wäre gewaltig, bei 249 MB/s – ohne Audio und Overhead. Hier kommen Videocodecs ins Spiel. Wie Audiocodecs dies für die Tondaten tun, komprimieren Videocodecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details können verloren gehen; der Verlustgrad hängt vom Codec und dessen Konfiguration ab, aber im Allgemeinen gilt: Je mehr Kompression Sie erreichen, desto mehr Detail- und Qualitätsverlust wird auftreten. Einige verlustfreie Codecs existieren, werden jedoch typischerweise für Archivierung und Speicherung für die lokale Wiedergabe verwendet und nicht für den Einsatz im Netzwerk.

## Häufige Codecs

Die folgenden Videocodecs werden am häufigsten im Web verwendet. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt weiter unten, in dem zusätzliche Details zum Codec, einschließlich spezifischer Fähigkeiten und Kompatibilitätsproblemen, die Sie beachten sollten, gegeben werden.

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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: Spezifika über das Format und den Inhalt des Quellvideos sowie die Eigenschaften und Konfiguration des Codecs, der beim Kodieren des Videos verwendet wird.

Der einfachste Leitfaden lautet: Alles, was das kodierte Video mehr wie das originale, unkomprimierte Video aussehen lässt, wird allgemein auch die resultierende Datenmenge vergrößern. Daher ist es immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist ein größerer Qualitätsverlust, um die Datenmenge zu reduzieren, diesen Qualitätsverlust wert; in anderen Fällen ist der Qualitätsverlust inakzeptabel, und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Einfluss des Videoquellformats auf das kodierte Ausgangsmaterial

Der Einfluss, den das Format des Quellvideos auf das Ausgangsmaterial hat, variiert je nach Codec und dessen Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat konvertiert oder das Bild auf andere Weise als durch einfache Pixel darstellt, macht das Format des ursprünglichen Bildes keinen Unterschied. Dinge wie Bildrate und offensichtlich die Auflösung haben jedoch immer einen Einfluss auf die Ausgangsgröße der Medien.

Zusätzlich haben alle Codecs ihre Stärken und Schwächen. Einige haben Probleme mit bestimmten Arten von Formen und Mustern oder sind nicht gut darin, scharfe Kanten nachzubilden, oder neigen dazu, Details in dunklen Bereichen zu verlieren oder jede beliebige Anzahl anderer Möglichkeiten. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der mögliche Einfluss des Quellvideoformats und -inhalts auf die
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
        Je höher die Bits an Farbtiefe, desto höher ist die erreichbare
        Qualität der Farbtreue im Video. Zusätzlich ermöglichen in gesättigten
        Bereichen des Bildes (also dort, wo Farben rein und intensiv sind, wie
        ein helles, reines Rot: <code>rgb(255 0 0 / 100%)</code>) Farbtiefen
        unter 10 Bit pro Komponente (10-Bit-Farbe) Bänderbildung, wo
        Farbverläufe nicht ohne sichtbares Ansteigen der Farben dargestellt
        werden können.
      </td>
      <td>
        Abhängig vom Codec können höhere Farbtiefen zu größeren komprimierten
        Dateigrößen führen. Der bestimmende Faktor ist, welches interne
        Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst in erster Linie die wahrgenommene Geschmeidigkeit der
        Bewegung im Bild. Je höher die Bildrate, desto flüssiger und realistischer
        erscheint die Bewegung. Schließlich wird jedoch ein Punkt erreicht, an dem
        der Nutzen abnimmt. Siehe <a href="#reduced_frame_rate">Bildrate</a> unten
        für Details.
      </td>
      <td>
        Vorausgesetzt, die Bildrate wird während des Kodierens nicht
        reduziert, führen höhere Bildraten zu größeren komprimierten
        Videodateien.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Videokompression funktioniert typischerweise, indem sie
        Frames vergleicht, feststellt, wo sie sich unterscheiden, und Datensätze
        erstellt, die ausreichend Informationen enthalten, um den vorherigen
        Frame so zu aktualisieren, dass er dem nachfolgenden Frame ungefähr
        ähnelt. Je mehr sich aufeinanderfolgende Frames voneinander
        unterscheiden, desto größer sind diese Unterschiede, und desto
        weniger effektiv ist die Kompression darin, die Einführung von
        Artefakten in das komprimierte Video zu vermeiden.
      </td>
      <td>
        Die durch Bewegung eingeführte Komplexität führt zu größeren
        Zwischenframes aufgrund der höheren Anzahl von Unterschieden zwischen
        den Frames. Aus diesem und anderen Gründen wird die
        Ausgabedatei typischerweise größer, je mehr Bewegung in einem Video
        vorhanden ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Körnigkeit im Bild)
        führt zu Variabilität. Variabilität erschwert im Allgemeinen die
        Kompression und führt zu mehr Qualitätsverlusten aufgrund der
        Notwendigkeit, Details fallen zu lassen, um das gleiche Maß an
        Kompression zu erreichen.
      </td>
      <td>
        Je mehr Variabilität—wie Rauschen—im Bild vorhanden ist, desto
        komplexer ist der Kompressionsprozess und desto weniger Erfolg wird der
        Algorithmus wahrscheinlich beim Komprimieren des Bildes auf das
        gleiche Maß haben. Es sei denn, Sie konfigurieren den Encoder so, dass
        er einige oder alle durch Rauschen verursachte Variationen ignoriert,
        wird das komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höher aufgelöstes Video kann typischerweise bei gleicher
        Bildschirmgröße die ursprüngliche Szene genauer darstellen, abgesehen
        von Effekten, die durch die Kompression eingeführt werden.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es.
        Dies spielt eine entscheidende Rolle bei der endgültigen Größe des
        Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Maß, in dem diese Faktoren das kodierte Endvideo beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und dessen Konfiguration. Zusätzlich zu allgemeinen Codec-Optionen könnte der Encoder so konfiguriert werden, dass die Bildrate reduziert, das Rauschen bereinigt und/oder die Auflösung des Videos während des Kodierens reduziert wird.

### Einfluss der Codec-Konfiguration auf das kodierte Ausgangsmaterial

Die zum Kodieren von Video verwendeten Algorithmen nutzen typischerweise eine oder mehrere allgemeine Techniken, um ihre Kodierung durchzuführen. Allgemein gesprochen, wird jede Konfigurationsoption, die dazu gedacht ist, die Ausgabegröße des Videos zu reduzieren, wahrscheinlich eine negative Auswirkung auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten im Video einführen. Es ist auch möglich, eine verlustfreie Kodierungsform zu wählen, die zu einer wesentlich größeren kodierten Datei führt, jedoch mit perfekter Reproduktion des ursprünglichen Videos nach der Dekodierung.

Darüber hinaus können bei jeder Encoder-Utility Unterschiede in der Verarbeitung des Quellvideos auftreten, die zu unterschiedlichen Ausgaben in Qualität und/oder Größe führen können.

<table class="standard-table">
  <caption>
    Auswirkungen der Video-Encoder-Konfiguration auf Qualität und Größe
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
        Verlustfreie Kompression kann die Gesamtgröße des Videos nicht
        annähernd so stark reduzieren wie verlustbehaftete Kompression; die
        resultierenden Dateien sind wahrscheinlich immer noch zu groß für den
        allgemeinen Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        Bis zu einem gewissen Grad werden Artefakte und andere Formen der
        Qualitätsverschlechterung auftreten, abhängig vom spezifischen Codec
        und der Intensität der angewendeten Kompression.
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto einfacher
        ist es, höhere Kompressionsraten zu erreichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto ähnlicher wird das kodierte
        Video dem originalen Medium aussehen.
      </td>
      <td>
        Allgemein führen höhere Qualitätseinstellungen zu größeren kodierten
        Videodateien; das Ausmaß, in dem dies zutrifft, hängt vom Codec ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich im Allgemeinen mit höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgangsdateien</td>
    </tr>
  </tbody>
</table>

Die verfügbaren Optionen beim Kodieren von Video und die zugewiesenen Werte für diese Optionen variieren nicht nur von einem Codec zum anderen, sondern auch abhängig von der verwendeten Kodierungssoftware. Die Dokumentation Ihrer Kodierungssoftware hilft Ihnen dabei, die spezifische Auswirkung dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder umgeordneten Daten zu sichtbaren negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, was auf die Art und Weise zurückzuführen ist, wie Video angezeigt wird. Jedes Bild eines Videos wird dargestellt, indem eine Reihe von Änderungen auf das aktuell sichtbare Bild angewendet werden. Das bedeutet, dass Fehler oder Artefakte sich im Laufe der Zeit häufen können, was zu Störungen oder anderweitig seltsamen oder unerwarteten Abweichungen im Bild führt, die für eine Zeit anhalten.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselbilder** (auch als **Intra-Frames** oder **I-Frames** bekannt) in die Videodatei eingefügt. Die Schlüsselbilder sind vollständige Bilder, die zur Reparatur von sichtbaren Schäden oder Artefaktrückständen verwendet werden.

### Aliasing

Alias-Effekte sind allgemeine Begriffe für alles, was beim Wiederaufbau aus den kodierten Daten nicht mehr so aussieht wie vor der Kompression. Es gibt viele Formen von Alias-Effekten; die häufigsten, die Sie sehen könnten, umfassen:

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
          wenn ein Muster im Quellbild und die Art und Weise, wie der Encoder
          arbeitet, leicht räumlich nicht ausgerichtet sind. Die vom Encoder
          erzeugten Artefakte führen dann beim Dekodieren dazu, dass seltsame,
          wirbelnde Effekte im Muster des Quellbildes auftreten.
        </p>
      </td>
      <td>
        <img alt="Eine Ziegelwand mit einem wirbelnden Effekt ähnlich denen von Wellen aufgrund des Moiré-Musters" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt
          sein sollten, ein gezacktes Erscheinungsbild annehmen und wie eine
          Treppe aussehen. Dies ist der Effekt, der durch "Antialiasing"-Filter
          reduziert wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die wie eine Treppe aussehen aufgrund von Aliasing, das einen Treppeneffekt verursacht" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der <strong>Wagenradeffekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, der häufig in Filmen zu sehen ist, wobei
          sich ein drehendes Rad mit der falschen Geschwindigkeit oder sogar
          rückwärtszufallen scheint, was auf die Wechselwirkung zwischen der
          Bildrate und dem Kompressionsalgorithmus zurückzuführen ist. Derselbe
          Effekt kann bei jedem sich wiederholenden Muster auftreten, das sich
          bewegt, wie Kreuzungen auf einer Eisenbahnstrecke, Pfosten entlang der
          Straße und so weiter. Dies ist ein zeitliches (zeitbasiertes)
          Aliasing-Problem; die Geschwindigkeit der Drehung beeinträchtigt die
          Frequenz der während der Kompression oder Kodierung durchgeführten
          Abtastung.
        </p>
      </td>
      <td>
        <img alt="Drehendes Rad aufgrund von Aliasing, das einen Wagenradeffekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbränder

**Farbränder** sind eine Art von visuellem Artefakt, das als unerwünschte Farben auftritt, die entlang der Kanten von farbigen Objekten innerhalb der Szene eingeführt werden. Diese Farben haben keine beabsichtigte Farbbeziehung zu den Inhalten des Bildes.

### Verlust von Schärfe

Der Prozess des Entfernen von Daten beim Kodieren von Video erfordert, dass einige Details verloren gehen. Wenn ausreichend Kompression angewendet wird, können Teile oder potenziell das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder nebligen Erscheinungsbild führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text – insbesondere kleiner Text – sehr detailorientierter Inhalt ist, bei dem kleinere Änderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln (Ringing)

Verlustbehaftete Kompressionsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln kontaminiert sind, die vom Kompressionsalgorithmus erzeugt werden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund überlappen. Dies tritt besonders häufig bei höheren Kompressionsstufen auf.

![Beispiel des Klingeleffekts](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie die Stufenbildung und andere bedeutende Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ist in gewisser Hinsicht ähnlich wie [Moskito-Rauschen](#moskito-rauschen), außer dass das Klingeln mehr oder weniger konstant und unverändert ist, während Moskito-Rauschen schwindet und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, das es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisierung

**Posterisierung** tritt auf, wenn die Kompression zu einem Verlust an Farbdetails in Verläufen führt. Anstelle fließender Übergänge durch die verschiedenen Farben in einem Bereich wird das Bild blockig, mit Farbansammlungen, die das ursprüngliche Erscheinungsbild des Bildes nur annähernd darstellen.

![Weißkopfseeadlerfoto mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfseeadlers auf dem Foto oben (und der Schnee-Eule im Hintergrund). Die Details der Federn gehen aufgrund dieser Posterierungsartefakte weitgehend verloren.

### Konturierung

**Konturierung** oder **Farbabstufung** ist eine spezifische Form der Posterisierung, bei der die Farbkacheln Bänder oder Streifen im Bild bilden. Dies geschieht, wenn das Video mit einer zu groben Quantisierungs-Konfiguration kodiert wird. Als Ergebnis zeigen die Inhalte des Videos ein "schichtweises" Aussehen, bei dem statt glatter Verläufe und Übergänge die Übergänge von Farbe zu Farbe abrupt sind, was das Erscheinen von Farbbändern verursacht.

![Beispiel eines Bildes, dessen Kompression Konturierung eingeführt hat](contouring-effect.jpg)

Im obigen Beispielbild sehen Sie, wie der Himmel Bänder mit unterschiedlichen Blautönen aufweist, anstatt ein gleichmäßiger Verlauf zu sein, während sich die Farbe des Himmels in Richtung des Horizonts ändert. Dies ist der Konturiereffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Kantenunruhe** auftritt, die als flimmernde Unschärfe oder Schimmern erscheint, das grob außerhalb der Kanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und Hintergrund folgt. Der Effekt kann ähnlich dem [Klingeln](<#klingeln_(ringing)>) aussehen.

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das oben gezeigte Foto weist Moskito-Rauschen an verschiedenen Stellen auf, einschließlich des Himmels rund um die Brücke. In der oberen rechten Ecke zeigt ein Inset eine Nahaufnahme eines Teils des Bildes, das Moskito-Rauschen aufweist.

Moskito-Rausch-Artefakte kommen am häufigsten in MPEG-Video vor, können jedoch immer auftreten, wenn ein diskreter Kosinustransformationsalgorithmus (DCT) verwendet wird; dies schließt beispielsweise JPEG-Standbilder ein.

### Blockgrenzenartefakte der Bewegungsentschädigung

Videokompression funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera an Ort und Stelle bleibt oder die Objekte im Bild relativ stationär sind, aber wenn im Bild viel Bewegung herrscht, können die Unterschiede zwischen den Frames so groß sein, dass die Kompression keinen Nutzen bringt.

**[Bewegungskompensation](https://en.wikipedia.org/wiki/Motion_compensation)** ist eine Technik, die Bewegung (entweder der Kamera oder der Objekte im Bild) erkennt und bestimmt, um wie viele Pixel sich das bewegende Objekt in jede Richtung bewegt hat. Diese Verschiebung wird dann gespeichert, zusammen mit einer Beschreibung der Pixel, die sich bewegt haben und nicht nur durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die Bewegungsobjekte und erstellt dann eine Art internes Bild, das wie das Original aussieht, jedoch mit allen Objekten, die an ihre neuen Positionen verschoben wurden. Theoretisch approximiert dies das Erscheinungsbild des neuen Frames. Zur Vervollständigung der Arbeit werden die verbleibenden Unterschiede gefunden, dann werden der Satz von Objektverschiebungen und der Satz von Pixelunterschieden in den Daten gespeichert, die den neuen Frame darstellen. Dieses Objekt, das die Verschiebung und die Pixelunterschiede beschreibt, wird als **Residual-Frame** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalbild</th>
      <th scope="col" style="width: 216px">Inter-Frame-Unterschiede</th>
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
        Das erste Vollbild, wie es vom Betrachter gesehen wird.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Bild und dem
        folgenden Bild zu sehen. Alles andere ist schwarz. Bei genauerem
        Hinsehen können wir feststellen, dass die Mehrheit dieser Unterschiede
        von einer horizontalen Kamerabewegung herrührt, was dies zu einem
        guten Kandidaten für die Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen
        wir hier die Schwenkbewegung der Kamera, indem wir zuerst das erste Bild
        um zwei Pixel nach rechts verschieben und dann die Differenz nehmen. Dies
        kompensiert die Schwenkbewegung der Kamera und ermöglicht mehr
        Überlappung zwischen den beiden Bildern.
      </td>
    </tr>
    <tr>
      <th
        colspan="3"
        style="
          font: italic 0.9em Arial, sans-serif;
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

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globale Bewegungskompensation gleicht im Allgemeinen Kamerabewegungen wie Tracking, Dolly-Bewegungen, Schwenken, Neigen, Rollen sowie Auf- und Abbewegungen aus. Die Blockbewegungskompensation kümmert sich um lokalisierte Veränderungen und sucht nach kleineren Abschnitten des Bildes, die mithilfe der Bewegungskompensation kodiert werden können. Diese Blöcke haben normalerweise eine feste Größe in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen und sogar überlappende Blöcke ermöglichen.

Es gibt jedoch Artefakte, die aufgrund der Bewegungskompensation auftreten können. Diese treten an Blockgrenzen in Form von scharfen Kanten auf, die falsche Klingelen und andere Kanten-Effekte hervorrufen. Diese sind auf die Mathematik bei der Kodierung der Residual Frames zurückzuführen und können leicht bemerkt werden, bevor sie vom nächsten Schlüsselbild repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Größe der Videodatei zu verbessern. Während der unmittelbare Verlust an Größe oder Flüssigkeit der Wiedergabe ein negativer Faktor sein mag, kann eine sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor dem Kodieren auf 720p reduziert wird, kann das resultierende Video viel kleiner sein und dennoch eine weitaus höhere visuelle Qualität aufweisen; selbst nach dem erneuten Hochskalieren bei der Wiedergabe kann das Ergebnis besser sein, als das ursprüngliche Video in voller Größe zu kodieren und den Qualitätsverlust zu akzeptieren, der erforderlich ist, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ebenso können Sie Bilder aus dem Video vollständig entfernen und die Bildrate anpassen, um dies auszugleichen. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht es der Bewegungskompensation, noch mehr für Sie zu leisten. Zum Beispiel könnte das Überspringen jedes zweiten Bildes anstelle des Vergleichs von zwei Bildern, die aufgrund zwischen-frame Bewegungen zwei Pixel voneinander entfernt sind, zu einer Berechnung führen, die eine Verschiebung um vier Pixel der Bewegung ergibt. Dadurch kann die Gesamtbewegung der Kamera mit weniger Residual-Frames dargestellt werden.

Die absolute Mindestbildrate, die ein Video haben kann, bevor seine Inhalte vom menschlichen Auge nicht mehr als Bewegung wahrgenommen werden, beträgt etwa 12 Bilder pro Sekunde. Weniger als das, und das Video wird zu einer Reihe von Standbildern. Kinofilme laufen typischerweise mit 24 Bildern pro Sekunde, während das Standard-Definition-Fernsehen etwa 30 Bilder pro Sekunde beträgt (etwas weniger, aber nahe genug) und das High-Definition-Fernsehen zwischen 24 und 60 Bildern pro Sekunde liegt. Alles von 24 FPS aufwärts wird im Allgemeinen als ausreichend flüssig angesehen; 30 oder 60 FPS sind ein ideales Ziel, abhängig von Ihren Bedürfnissen.

Am Ende liegen die Entscheidungen darüber, welche Kompromisse Sie in Kauf nehmen können, allein bei Ihnen und/oder Ihrem Designteam.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265), sowie bis zu 50 % höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig gebührenfrei und sowohl für das {{HTMLElement("video")}}-Element als auch für [WebRTC](/de/docs/Web/API/WebRTC_API) vorgesehen.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, mit zunehmender Unterstützung für Farbtiefen und Chroma-Subsampling. Darüber hinaus ist eine Reihe von **Levels** spezifiziert, die jeweils Grenzen für eine Reihe von Attributen des Videos definieren. Diese Attribute umfassen Bildabmessungen, Bildfläche in Pixeln, Anzeige- und Dekodiergeschwindigkeiten, durchschnittliche und maximale Bitraten sowie Begrenzungen für die Anzahl der bei der Codierung/Dekodierung verwendeten Kacheln und Kachelspalten.

Zum Beispiel bietet AV1-Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es ist jedoch zu beachten, dass zumindest für Firefox und Chrome die Levels derzeit beim Softwaredecoding ignoriert werden und der Decoder einfach sein Bestes gibt, um das Video mit den angegebenen Einstellungen abzuspielen. Aus Gründen der Kompatibilität sollten Sie jedoch stets innerhalb der Grenzen des von Ihnen gewählten Levels bleiben.

Der Hauptnachteil von AV1 ist derzeit, dass es sehr neu ist und die Unterstützung noch in den meisten Browsern integriert wird. Darüber hinaus werden Encoder und Decoder noch in Bezug auf die Leistung optimiert, und Hardware-Encoder und Decoder befinden sich überwiegend noch in der Entwicklung und nicht in der Produktion. Aus diesem Grund dauert die Codierung eines Videos im AV1-Format sehr lange, da die gesamte Arbeit in Software erledigt wird.

Derzeit ist AV1 aufgrund dieser Faktoren noch nicht bereit, Ihre erste Wahl als Videocodec zu sein, aber Sie sollten darauf achten, dass es in Zukunft einsatzbereit ist.

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
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >Level-Tabellen</a
          > der AV1-Spezifikation, die die maximalen Auflösungen und Raten auf jedem Level beschreiben.
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
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
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
              <th scope="row">Profils</th>
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
      <td>Gebührenfrei, offener Standard</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

Der MPEG-4-Spezifikationssuite **Advanced Video Coding** (**AVC**) Standard ist in der identischen ITU H.264 Spezifikation und der MPEG-4 Teil 10 Spezifikation festgelegt. Es ist ein auf Bewegungskompensation basierender Codec, der heute weit verbreitet für alle Arten von Medien verwendet wird, einschließlich Rundfunkfernsehen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray-Discs.

AVC ist hochflexibel mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; Beispielsweise ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien konzipiert und verwendet weniger Bandbreite als das Main Profile (das in einigen Regionen für digitales Fernsehen in Standardauflösung verwendet wird) oder das High Profile (das für Blu-Ray-Disc-Video verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling; Das High 10 Profile unterstützt 10-Bit-Farben, und erweiterte Versionen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC hat auch besondere Merkmale wie die Unterstützung mehrerer Ansichten derselben Szene (Multiview Video Coding), was unter anderem die Produktion von stereoskopischem Video ermöglicht.

AVC ist jedoch ein proprietäres Format und zahlreiche Patente werden von mehreren Parteien bezüglich seiner Technologien gehalten. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl der Via LA-Patentpool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die die JavaScript-APIs nicht enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht verpflichtet sind dies zu tun, tun es einige.

In HTML-Inhalten für Webbrowser ist AVC weitgehend kompatibel und viele Plattformen unterstützen die Hardwarecodierung und -decodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Variiert je nach Level</td>
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
          >Algorithmus basierend auf DCT</a
        >, obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des Bildes zu erstellen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
      <td>Bis zu 8.192 x 4.320 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>Einige der häufigeren oder interessanteren Profile:</p>
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
        Advanced HDR/SL-HDR; beide sind Teil der ATSC
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
          Die Unterstützung von Firefox für AVC hängt von den im Betriebssystem
          integrierten oder vorinstallierten Codecs für AVC und dessen Container ab, um
          Patentprobleme zu vermeiden.
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
        <a href="https://www.via-la.com/licensing-2/avc-h-264/"
          >erfordert eine Lizenz</a
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263** Codec der ITU wurde primär für den Einsatz in Situationen mit niedriger Bandbreite entwickelt. Insbesondere liegt der Fokus auf Videokonferenzen über PSTN (öffentliche Telefonnetze), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme). Obwohl er für Netzwerke mit geringer Bandbreite optimiert ist, beansprucht er recht intensive CPU-Ressourcen und kann auf leistungsschwächeren Computern möglicherweise nicht zufriedenstellend funktionieren. Das Datenformat ähnelt dem von MPEG-4 Teil 2.

Auf dem Web wurde H.263 nie weit verbreitet verwendet. Varianten von H.263 dienten als Grundlage für andere proprietäre Formate, wie Flash-Video oder den Sorenson-Codec. Jedoch hat kein bedeutender Browser jemals standardmäßig H.263-Unterstützung integriert. Bestimmte Medien-Plugins haben die Unterstützung für H.263-Medien ermöglicht.

Anders als die meisten Codecs definiert H.263 die Grundzüge eines codierten Videos in Bezug auf die maximale Bitrate pro Frame (Bild) oder **BPPmaxKb**. Während der Codierung wird ein Wert für BPPmaxKb ausgewählt, und das Video kann diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt von diesem, der Bildrate, der Kompression und der gewählten Auflösung sowie dem Blockformat ab.

H.263 wurde mittlerweile von H.264 abgelöst und gilt daher als ein altes Medienformat, das Sie vermeiden sollten, wenn möglich. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, wäre die Unterstützung sehr alter Geräte, bei denen H.263 die beste Wahl darstellt.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm und andere. Um H.263 zu verwenden, sind Sie gesetzlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

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
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
      <td>
        <p>Bis zu 1408 x 1152 Pixel.</p>
        <p>
          Version 1 von H.263 spezifiziert eine Reihe von Bildgrößen, die
          unterstützt werden. Spätere Versionen unterstützen möglicherweise zusätzliche Auflösungen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Rahmenhöhe in Pixeln sowie wie viele Reihen von Luminanz- und
        Chrominanzproben für jeden Rahmen verwendet werden
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
        Proprietär; entsprechende Lizenz oder Lizenzen sind erforderlich. Beachten Sie
        dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **High Efficiency Video Coding** (**HEVC**) Codec wird von der ITU als **H.265** sowie von MPEG-H Teil 2 (der noch in Entwicklung befindliche Nachfolger von MPEG-4) definiert. HEVC wurde entwickelt, um effiziente Codierung und Decodierung von Videos in Größen einschließlich sehr hoher Auflösungen (einschließlich 8K-Video) zu unterstützen, mit einer Struktur, die speziell entwickelt wurde, um Software die Nutzung moderner Prozessoren zu ermöglichen. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß wie die von [AVC](#avc_h.264) sind, jedoch bei vergleichbarer Bildqualität.

Jede Coding Tree Unit (CTU)—ähnlich wie der Makroblock, der in vorherigen Codecs verwendet wurde—besteht aus einem Baum von Luma-Werten für jedes Sample sowie einem Baum von Chroma-Werten für jedes Chroma-Sample, das in derselben Coding Tree Unit verwendet wird, sowie allen notwendigen Syntaxelementen. Diese Struktur unterstützt die einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8 Bit pro Farbkomponente mit 4:2:0 Chroma-Subsampling unterstützt. Auch interessant ist, dass 4:4:4 Video speziell gehandhabt wird. Anstatt die Luma-Samples (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Samples (die angeben, wie die Grautöne in Farb-Pixel umgewandelt werden) zu behandeln, werden die drei Kanäle stattdessen als drei Monochrombilder behandelt, eines für jede Farbe, die dann bei der Wiedergabe kombiniert werden, um ein vollfarbiges Bild zu erzeugen.

HEVC ist ein proprietäres Format und wird durch eine Reihe von Patenten abgedeckt. Lizenzen werden [von Via LA verwaltet](https://www.via-la.com/licensing-2/hevc-vvc/); Gebühren werden an Entwickler statt an Inhaltsproduzenten und -vertreiber erhoben. Stellen Sie sicher, die neuesten Lizenzbedingungen und -anforderungen zu prüfen, bevor Sie eine Entscheidung treffen, ob Sie HEVC in Ihrer App oder Website verwenden!

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
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
      <td>128 x 96 bis 8.192 x 4.320 Pixel; variiert je nach Profil und Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Die Informationen unten werden für die wichtigen Profile bereitgestellt. Es gibt eine
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
        <p>Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung auf Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung auf Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat denselben Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit Hardwaredecoder.
        </p>
        <p>Firefox aktiviert HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 entweder mit Hardware-Unterstützung (auf unterstützten Geräten, wobei der Bereich derselbe wie bei Edge ist) oder Software-Unterstützung (auf Windows muss der Benutzer für und installiere eine Erweiterung bezahlen)</li>
            <li>macOS ab Firefox 136 entweder mit Hardware-Unterstützung oder Software-Unterstützung.</li>
            <li>Linux ab Firefox 137 entweder mit Hardware-Unterstützung oder Software-Unterstützung (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware-Unterstützung.</li>
          </ul>
        </p>
        <p>Opera und andere Chromium-basierte Browser haben denselben Unterstützungsstatus wie Chrome.</p>
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
        Proprietär; bestätigen Sie Ihre Einhaltung der
        <a href="https://www.via-la.com/licensing-2/hevc-vvc/"
          >Lizenzanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des visuellen MPEG-4 Teil 2 Standards. Während im Allgemeinen, MPEG-4 Teil 2 Video wird von niemandem verwendet wegen seiner mangelnden überzeugenden Wert im Zusammenhang mit anderen Codecs, hat MP4V-ES einige Verwendung auf mobilen Geräten. MP4V ist im Wesentlichen H.263-Codierung in einem MPEG-4-Container.

Sein Hauptzweck ist, zum Streaming von MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Sitzung verwendet zu werden. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung mittels [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie wollen dieses Format fast sicher nicht verwenden, da es von keinem großen Browser in einer sinnvollen Weise unterstützt wird und es ziemlich obsolet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, sind jedoch manchmal fälschlicherweise mit `.mp4` bezeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Keine spezifische Begrenzung; nur durch die Datenrate eingeschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
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
Soweit unterstützt Firefox MP4V-ES in <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>-Controllern nur.
        </p>
        <p>Chrome unterstützt MP4V-ES nicht; jedoch, ChromeOS tut es.</p>
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
          >Eine Lizenz erwerben</a
        >
        durch <a href="https://www.via-la.com/">Via LA</a> und/oder
        <a href="https://about.att.com/innovation/ip/patents"
          >AT&T</a
        >
        wie nötig
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG erstellt, ohne dass die {{Glossary("ITU", "ITU")}} beteiligt war.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist er mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente mehr im Zusammenhang mit MPEG-1-Video, daher kann es ohne Lizenzierungsbedenken verwendet werden. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Verwendung von Plugins in Webbrowsern nicht mehr empfohlen wird, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für die Verwendung auf Websites und in Webanwendungen.

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
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
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

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das Videoformat, das durch die MPEG-2-Spezifikation definiert ist und wird gelegentlich auch durch die {{Glossary("ITU", "ITU")}}-Bezeichnung, H.262, bezeichnet. Es ist dem MPEG-1-Video sehr ähnlich—tatsächlich kann jeder MPEG-2-Player automatisch MPEG-1 ohne spezielle Anpassungen abspielen—außer dass es erweitert wurde, um höhere Bitraten und verbesserte Codierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 in die Lage zu versetzen, Standardauflösungsfernsehen zu komprimieren, sodass auch interliniertes Video unterstützt wird. Die Kompressionsrate der Standardauflösung und die Qualität des resultierenden Videos erfüllten die Anforderungen so gut, dass MPEG-2 der primäre Videocodec ist, der für DVD-Videomedien verwendet wird.

MPEG-2 hat mehrere verfügbare Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist dann in vier Level verfügbar, von denen jedes die Attribute des Videos, wie Bildwiederholungsrate, Auflösung, Bitrate und so weiter, erhöht. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma-Subsampling, aber fortgeschrittene Profile unterstützen auch 4:2:2. Darüber hinaus gibt es vier Level, die jeweils Unterstützung für größere Bilddimensionen und Bitraten bieten. Beispielsweise unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards)-Spezifikation für Fernsehen in Nordamerika MPEG-2-Video in hoher Auflösung unter Verwendung des Main Profile at High Level, das 4:2:0-Video bei 1920 x 1080 (30 FPS) und 1280 x 720 (60 FPS) bei einer maximalen Bitrate von 80 Mbit/s erlaubt.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und aufgrund der Abkehr von Plugin-Nutzung in Webbrowsern sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-2 zu einer schlechten Wahl für die Verwendung auf Websites und in Webanwendungen.

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
              <th scope="row">Kürzel</th>
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
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Kürzel</th>
              <th scope="col">Level-Name</th>
              <th scope="col">Maximale Framegröße</th>
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
        "4:2:2"-Profile unterstützen auch 4:2:2 Chroma-Subsampling.
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
        Proprietär; alle Patente sind weltweit mit Ausnahme in Malaysia (ab dem 1. Oktober 2024) abgelaufen, somit kann MPEG-2 außerhalb Malaysias frei genutzt werden.
        Patente werden von <a href="https://www.via-la.com/licensing-2/mpeg-2/">Via LA</a> lizenziert.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat eine extrem geringe Nutzung, und die Unterstützung wird aus Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und freier Videocodec, der ohne Lizenzgebühren oder -anforderungen verwendet werden kann. Theora ist vergleichbar in Bezug auf Qualität und Kompressionsraten mit MPEG-4 Teil 2 Visual und AVC, was es zu einer sehr guten, wenn auch nicht erstklassigen Wahl zur Video-Kodierung macht. Aber sein Status als frei von jeglichen Lizenzierungsbedenken und seine relativ niedrigen CPU-Ressourcenanforderungen machen es zu einer beliebten Wahl für viele Software- und Webprojekte. Der geringe CPU-Bedarf ist besonders nützlich, da es keine Hardware-Decoder für Theora gibt.

Theora basiert ursprünglich auf dem VC3-Codec von On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbkomponente unterstützt, ohne Möglichkeit 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt, 8-Bit pro Komponente ist immer noch das am häufigsten verwendete Farbformat heutzutage, so dass dies nur in den meisten Fällen ein kleines Ärgernis darstellt. Auch kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil von allen ist jedoch, dass es von Safari nicht unterstützt wird, so dass Theora nicht nur auf macOS sondern auf all den Millionen von iPhones und iPads nicht verfügbar ist.

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
        Beliebig; jeder nicht-null-Wert wird unterstützt. Die Bildrate wird als ein 32-Bit-Zähler und ein 32-Bit-Nenner spezifiziert, um nicht-ganzzahlige Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
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
          Während Theora keine variable Bildrate (VFR) innerhalb eines einzigen
          Streams unterstützt, können mehrere Streams in einer Datei aneinandergekettet werden,
          und jeder davon kann seine eigene Bildrate haben, wodurch im Wesentlichen eine VFR ermöglicht wird. Dies ist jedoch unpraktisch, wenn sich die Bildrate oft ändern muss.
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
      <td>Offen und frei von Lizenzgebühren oder anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

### VP8

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies erstellt. Nach dem Kauf von On2 durch Google veröffentlichte Google VP8 als offenes und gebührenfreies Videoformat unter einer Zusicherung, die entsprechenden Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 mit [AVC](#avc_h.264) vergleichbar.

Wenn es vom Browser unterstützt wird, ermöglicht VP8 Video mit einem Alphakanal, was das Abspielen des Videos mit einem Hintergrund ermöglicht, der durch das Video in einem zu jedem Pixel durch seinen Alphakomponente spezifizierten Grad gesehen werden kann.

Es gibt eine gute Browser-Unterstützung für VP8 in HTML-Inhalten, insbesondere innerhalb von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Dateien. Dies macht VP8 zu einer guten Wahl für Ihre Inhalte, obwohl VP9 eine noch bessere Wahl ist, wenn es Ihnen zur Verfügung steht. Webbrowser sind _verpflichtet_, VP8 für WebRTC zu unterstützen, jedoch unterstützen nicht alle Browser, die dies tun, es auch in HTML-Audio- und -Videoelementen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, sofern keine auf Level basierenden Beschränkungen durchgesetzt werden</td>
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
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
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
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>Alle Versionen von Chrome, Edge, Firefox, Opera und Safari<p>
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> und spätere unterstützen VP8 in WebRTC-Verbindungen nur.</p>
        <p>Firefox unterstützt VP8 in MSE nur, wenn kein H.264-Hardwaredecoder verfügbar ist. Verwenden Sie [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) um die Verfügbarkeit zu prüfen.</p>
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
      <td>Ja; VP8 ist einer der spektral erforderlichen Codecs für WebRTC</td>
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
      <td>Offen und frei von Lizenzgebühren oder anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

### VP9

Der **Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, der von Google entwickelt wurde. Wie VP8 ist VP9 vollständig offen und gebührenfrei. Die Codierungs- und Decodierungsleistung ist mit der von AVC vergleichbar oder leicht schneller, jedoch bei besserer Qualität. Die codierte Videoqualität von VP9 ist mit der von HEVC bei ähnlichen Bitraten vergleichbar.

Das Hauptprofil von VP9 unterstützt nur eine Farbtiefe von 8 Bit bei 4:2:0-Chroma-Subsampling-Levels, aber seine Profile umfassen Unterstützung für tiefere Farben und das vollständige Spektrum von Chroma-Subsampling-Modi. Es unterstützt mehrere HDR-Implementierungen und bietet erhebliche Freiheit bei der Auswahl von Bildwiederholraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von Browsern weitgehend unterstützt, und Hardwareimplementierungen des Codecs sind ziemlich weit verbreitet. VP9 ist einer der beiden Videocodecs, die im [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) erforderlich sind (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass Safari-Unterstützung für WebM und VP9 erst in Version 14.1 eingeführt wurde. Falls Sie sich entscheiden, VP9 zu verwenden, sollten Sie in Erwägung ziehen, ein alternatives Format wie AVC oder HEVC für iPhone-, iPad- und Mac-Nutzer anzubieten.

VP9 ist eine gute Wahl, wenn Sie einen WebM-Container verwenden können (und gegebenenfalls ein alternatives Video bereitstellen können). Dies gilt besonders, wenn Sie einen offenen anstatt eines proprietären Codecs verwenden möchten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig; kein Maximum, sofern keine auf Level basierenden Beschränkungen durchgesetzt werden</td>
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
          >Algorithmus basierend auf DCT</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Framegrößen</th>
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
          (obsolet; ersetzt durch Rec. 709), und
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
          Firefox unterstützt VP8 in MSE nur, wenn kein H.264-Hardwaredecoder verfügbar ist. Verwenden Sie
          [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) um die Verfügbarkeit zu prüfen.
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
      <td>Offen und frei von Lizenzgebühren oder anderen Lizenzierungsanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Videocodecs

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen zur Vorbereitung:

- Möchten Sie ein offenes Format verwenden, oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, um mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Fähigkeit, eine Fallback-Option anzubieten, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei denen Sie bereit sind, auf die Kompatibilität zu verzichten?
- Wie alt ist die älteste Version des Webbrowsers, die Sie unterstützen müssen? Müssen Sie beispielsweise auf jedem in den letzten fünf Jahren ausgelieferten Browser arbeiten, oder nur auf den aus dem letzten Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codec-Auswahlen für spezifische Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als der beste für den Anwendungsfall angesehen wird, proprietär ist oder Lizenzzahlungen erfordern könnte, werden zwei Optionen angeboten: zuerst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format wählen, das für Ihre Bedürfnisse am besten geeignet ist. Die erste wird als eine gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option ist die am weitesten kompatible Wahl, auf Kosten einer gewissen Qualität, Leistung und/oder Größe.

### Empfehlungen für alltägliche Videos

Zunächst schauen wir uns die besten Optionen für Videos an, die auf einer typischen Website präsentiert werden, wie etwa einem Blog, einer Informationsseite, einer Website eines kleinen Unternehmens, auf der Videos zur Demonstration von Produkten verwendet werden (aber nicht, wenn die Videos selbst ein Produkt sind), und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)**-Container, der den **[VP9](#vp9)**-Codec für Video und den **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)**-Codec für Audio verwendet. Diese sind alle offene, lizenzfreie Formate, die allgemein gut unterstützt werden, obwohl nur in ziemlich aktuellen Browsern, weshalb ein Fallback eine gute Idee ist.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)**-Container und der **[AVC](#avc_h.264)** (**H.264**)-Videocodec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Audiocodec. Das liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs innerhalb eine weit verbreitete Kombination ist – tatsächlich von jedem großen Browser unterstützt – und die Qualität für die meisten Anwendungsfälle typischerweise gut ist. Stellen Sie jedoch sicher, dass Sie die Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert einen schließenden `</video>`-Tag, unabhängig davon, ob sich {{HTMLElement("source")}}-Elemente darin befinden oder nicht.

### Empfehlungen für hochqualitative Videopräsentationen

Wenn Ihr Ziel darin besteht, Videos in höchstmöglicher Qualität zu präsentieren, werden Sie wahrscheinlich von der Bereitstellung möglichst vieler Formate profitieren, da die Codecs, die die beste Qualität bieten können, tendenziell die neuesten sind und somit am ehesten Lücken in der Browser-Kompatibilität haben.

1. Ein WebM-Container, der AV1 für Video und Opus für Audio verwendet. Wenn Sie das High- oder Professional-Profil beim Codieren von AV1 verwenden können, auf einem hohen Level wie 6.3, können Sie sehr hohe Bitraten bei 4K- oder 8K-Auflösung erzielen und gleichzeitig eine ausgezeichnete Videoqualität beibehalten. Das Codieren Ihres Audios mit dem Fullband-Profil von Opus bei einer Abtastrate von 48 kHz maximiert die erfasste Audio-Bandbreite und erfasst nahezu den gesamten Frequenzbereich, der im menschlichen Hörvermögen liegt.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. Ein MP4-Container mit dem [HEVC](#hevc_h.265)-Codec unter Verwendung eines der erweiterten Main-Profile, wie z.B. Main 4:2:2 mit 10 oder 12 Bit Farbtiefe oder sogar das Main 4:4:4-Profil mit bis zu 16 Bit pro Komponente. Bei einer hohen Bitrate bietet dies eine hervorragende Grafikqualität mit bemerkenswerter Farbwiedergabe. Zusätzlich können Sie optional HDR-Metadaten einfügen, um Videos mit hohem Dynamikbereich bereitzustellen. Für Audio verwenden Sie den AAC-Codec bei einer hohen Abtastrate (mindestens 48 kHz, idealerweise 96 kHz) und codieren mit komplexer Codierung statt schneller Codierung.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Empfehlungen für Archivierung, Bearbeitung oder Remixes

Derzeit gibt es keine verlustfreien – oder auch nur nahezu verlustfreien – Video-Codecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Komprimierung ist definitionsgemäß weniger effektiv als verlustbehaftete Komprimierung. Zum Beispiel benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0-Chroma-Subsampling mindestens 1,5 Gbps. Mit verlustfreier Komprimierung wie FFV1 (das von Webbrowsern nicht unterstützt wird) könnte dies möglicherweise auf etwa 600 Mbps reduziert werden, abhängig vom Inhalt. Das ist immer noch eine enorme Anzahl von Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssten, und ist derzeit für keinen realen Anwendungsfall praktisch.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus verfügbar haben; die verlustfreien Modi sind in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec auszuwählen, der verlustbehaftete Komprimierung verwendet, und ihn so zu konfigurieren, dass so wenig Komprimierung wie möglich durchgeführt wird. Eine Möglichkeit, dies zu tun, ist, den Codec so zu konfigurieren, dass er "schnelle" Komprimierung verwendet, was inhärent bedeutet, dass weniger Komprimierung erreicht wird.

#### Video extern vorbereiten

Um Video zu Archivierungszwecken außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Komprimierung der ursprünglichen unkomprimierten Videodaten durchführt. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format bei einer sehr hohen Bitrate zu codieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Während andere Codecs möglicherweise bessere Qualitätsniveaus beim Komprimieren des Videos mit einem signifikanten Abstand bieten, neigen ihre Encoder dazu, so langsam zu sein, dass die nahezu verlustfreie Codierung, die Sie mit dieser Komprimierung erreichen, weitaus schneller ist und etwa das gleiche Qualitätsniveau hat.

#### Video aufnehmen

Angesichts der Einschränkungen, wie nah an verlustfrei Sie kommen können, sollten Sie vielleicht [AVC](#avc_h.264) oder [AV1](#av1) in Betracht ziehen. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie bei der Erstellung Ihres [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekts einen Code wie den folgenden verwenden:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der konfiguriert ist, [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit-Farbe mit 4:4:4-Chroma-Subsampling und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzuzeichnen. Die resultierende Datei wird eine Bitrate von höchstens 800 Mbps verwenden, die zwischen den Video- und Audiotracks aufgeteilt wird. Sie müssen diese Werte wahrscheinlich je nach Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Netzwerkübertragung und würde wahrscheinlich nur lokal verwendet.

Die Zerlegung des Werts des `codecs`-Parameters in seine punktabgetrennten Eigenschaften ergibt Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `av01` | Die vier Zeichen umfassende Codebezeichnung (4CC), die den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                            |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil angeben würde.                                                                                                                                                  |
| `19H`  | Das Level und die Stufe. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und zeigt die hohe Stufe von Level 6.3 an.                                                                                                       |
| `12`   | Die Farbtiefe. Dies zeigt 12 Bit pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchste Genauigkeits-Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                               |
| `0`    | Das Monochrom-Modus-Flag. Wenn 1, würden keine Chromaflächen aufgenommen, und alle Daten sollten ausschließlich Luma-Daten sein, was zu einem Graustufenbild führen würde. Wir haben 0 angegeben, weil wir Farbe möchten.                                                                              |
| `000`  | Der Chromasubsampling-Modus, entnommen aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation. Ein Wert von 000, kombiniert mit dem Wert 0 des Monochrom-Modus, zeigt an, dass wir 4:4:4-Chroma-Subsampling oder keinen Farbverlust wünschen. |
| `09`   | Die zu verwendenden Farbprimärfarben. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 zeigt an, dass wir BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                                            |
| `16`   | Die zu verwendenden Übertragungseigenschaften. Dies stammt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 zeigt an, dass wir die Charakteristika für BT.2100 PQ-Farbe verwenden möchten.                                                         |
| `09`   | Die zu verwendenden Matrizenkoeffizienten, wiederum aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Leuchtdichte verwenden möchten; dies ist auch bekannt als BT.2010 YbCbCr.                           |
| `1`    | Das Video "full range"-Flag. Ein Wert von 1 zeigt an, dass wir möchten, dass der volle Farbbereich verwendet wird.                                                                                                                                                                                     |

Die Dokumentation für Ihre Codec-Auswahl wird wahrscheinlich Informationen enthalten, die Sie verwenden, wenn Sie Ihren `codecs`-Parameter zusammenstellen.

## Siehe auch

- [Leitfaden für Web-Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Umgang mit Medienunterstützungsproblemen bei Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die Parameter "Codecs" und "Profiles" für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Typ-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typ-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typ-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

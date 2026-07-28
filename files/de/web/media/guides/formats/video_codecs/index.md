---
title: Webvideo-Codec-Leitfaden
slug: Web/Media/Guides/Formats/Video_codecs
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

Dieser Leitfaden stellt die Video-Codecs vor, mit denen Sie wahrscheinlich im Web in Kontakt kommen oder in Betracht ziehen, sie zu verwenden. Er bietet Zusammenfassungen ihrer Fähigkeiten, potenzieller Kompatibilitäts- und Nutzbarkeitsbedenken sowie Ratschläge, die Ihnen helfen sollen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Durch die enorme Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie zu speichern oder gar über ein Netzwerk zu übertragen. Stellen Sie sich die benötigte Datenmenge für die Speicherung eines unkomprimierten Videos vor:

- Ein einziger Frame eines hochauflösenden Videos (1920x1080) in voller Farbigkeit (4 Bytes pro Pixel) beansprucht 8.294.400 Bytes.
- Bei typischen 30 Frames pro Sekunde würde jede Sekunde eines HD-Videos 248.832.000 Bytes (ca. 249 MB) einnehmen.
- Eine Minute HD-Video würde 14,93 GB Speicher benötigen.
- Eine typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicher beanspruchen, und ein 2-stündiger Film würde _fast 1,79 **TB** (also 1790 GB)_ benötigen.

Nicht nur der erforderliche Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die benötigt wird, um ein solches unkomprimiertes Video zu übertragen, wäre mit 249 MB/Sek. enorm—ohne Audio und Overhead. An dieser Stelle kommen Videocodecs ins Spiel. Genau wie Audiocodecs für die Audiodaten komprimieren Videocodecs die Videodaten und kodieren sie in ein Format, das später dekodiert und abgespielt oder bearbeitet werden kann.

Die meisten Videocodecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details können verloren gehen; der Grad des Verlusts hängt vom Codec und seiner Konfiguration ab, aber generell gilt: Je stärker die Komprimierung, desto größer der Verlust an Detailtreue und Qualität. Einige verlustfreie Codecs existieren, werden jedoch typischerweise zur Archivierung und für die lokale Wiedergabe verwendet, nicht für den Netzwerkverkehr.

## Häufige Codecs

Die folgenden Videocodecs sind diejenigen, die im Web am häufigsten verwendet werden. Für jeden Codec sind auch die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec bietet einen Link zu einem unten folgenden Abschnitt, der zusätzliche Details über den Codec enthält, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Sie beachten sollten.

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
      <td>Video Prozessor 8</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp9">VP9</a></th>
      <td>Video Prozessor 9</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
  </tbody>
</table>

## Faktoren, die das kodierte Video beeinflussen

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: Details über das Format und den Inhalt des Quellvideos sowie die Eigenschaften und die Konfiguration des Codecs, der beim Kodieren des Videos verwendet wird.

Die einfachste Richtlinie lautet: Alles, was das kodierte Video mehr wie das ursprüngliche, unkomprimierte Video aussehen lässt, führt im Allgemeinen dazu, dass die resultierenden Daten ebenfalls größer werden. Es ist also immer ein Kompromiss zwischen Größe und Qualität. In einigen Situationen ist ein größerer Qualitätsverlust zugunsten einer kleineren Datengröße es wert, diese Qualität aufzugeben; in anderen Fällen ist der Qualitätsverlust inakzeptabel und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die zu einer entsprechend größeren Datei führt.

### Effekt des Quellvideoformats auf das kodierte Ausgangsmaterial

Das Ausmaß, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und seiner Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild anders darstellt als durch einfache Pixel, spielt das Format des Originalbildes keine Rolle. Faktoren wie Bildrate und Auflösung haben jedoch immer einen Einfluss auf die Ausgabegröße der Medien.

Zusätzlich haben alle Codecs ihre Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Arten von Formen und Mustern, können scharfe Kanten nicht gut replizieren oder neigen dazu, Details in dunklen Bereichen zu verlieren. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Der potenzielle Effekt des Quellvideoformats und -inhalts auf die kodierte
    Videoqualität und -größe
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
        Je höher die Farb-Bittiefe, desto höher die Qualität der Farbtreue im
        Video. Darüber hinaus ermöglichen Farbtiefen unter 10 Bit pro
        Komponente (10-Bit-Farbe) in gesättigten Abschnitten des Bildes (d.h.
        dort, wo Farben rein und intensiv sind, wie ein leuchtend, reines Rot:
        <code>rgb(255 0 0 / 100%)</code>) ein Banding, bei dem Gradienten
        nicht ohne sichtbare Abstufung der Farben dargestellt werden können.
      </td>
      <td>
        Je nach Codec können bei höheren Farbtiefen größere komprimierte
        Dateigrößen resultieren. Der entscheidende Faktor ist, welches
        interne Speicherformat für die komprimierten Daten verwendet wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Bildrate</th>
      <td>
        Beeinflusst hauptsächlich die wahrgenommene Flüssigkeit der Bewegung im
        Bild. Bis zu einem gewissen Grad gilt: Je höher die Bildrate, desto
        flüssiger und realistischer erscheint die Bewegung. Schließlich wird
        der Punkt abnehmender Erträge erreicht. Siehe
        <a href="#reduced_frame_rate">Bildrate</a> unten für Details.
      </td>
      <td>
        Vorausgesetzt, dass die Bildrate beim Kodieren nicht reduziert wird,
        führen höhere Bildraten zu größeren komprimierten Videodimensionen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Komprimierung von Videos funktioniert typischerweise, indem Frames
        verglichen werden, um festzustellen, wo sie sich unterscheiden, und
        dann Datensätze mit ausreichend Informationen erstellt werden, um den
        vorhergehenden Frame zu aktualisieren, um das Aussehen des folgenden
        Frames anzunähern. Je mehr aufeinanderfolgende Frames sich voneinander
        unterscheiden, desto größer sind diese Unterschiede, und desto
        weniger effektiv ist die Komprimierung bei der Vermeidung der
        Einführung von Artefakten in das komprimierte Video.
      </td>
      <td>
        Die durch die Bewegung eingeführte Komplexität führt zu größeren
        Zwischenframes aufgrund der höheren Anzahl von Unterschieden zwischen
        den Frames). Aus diesem und anderen Gründen gilt: Je mehr Bewegung in
        einem Video vorhanden ist, desto größer ist typischerweise die
        Ausgabedatei.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmeffekte, Staub oder andere Körnigkeit im Bild)
        führt zu Variabilität. Variabilität macht die Komprimierung im
        Allgemeinen schwieriger, was zu Qualitätsverlusten führt, wenn
        Details zugunsten desselben Kompressionsniveaus ignoriert werden
        müssen.
      </td>
      <td>
        Je mehr Variabilität—wie Rauschen—im Bild vorhanden ist, desto
        komplexer ist der Komprimierungsprozess und desto weniger Erfolg
        hat der Algorithmus wahrscheinlich, das Bild im selben Maße zu
        komprimieren. Wenn Sie den Encoder nicht so konfigurieren, dass er
        einige oder alle durch Rauschen verursachten Variationen ignoriert,
        wird das komprimierte Video größer sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Höhere Auflösungsvideos, die in derselben Bildschirmgröße
        präsentiert werden, sind typischerweise in der Lage, die
        ursprüngliche Szene genauer darzustellen, abgesehen von den
        Effekten, die während der Komprimierung eingeführt wurden.
      </td>
      <td>
        Je höher die Auflösung eines Videos, desto größer wird es. Dies
        spielt eine Schlüsselrolle in der endgültigen Größe des Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, variiert je nach den genauen Details der Situation, einschließlich des verwendeten Encoders und seiner Konfiguration. Neben allgemeinen Codec-Optionen könnte der Encoder so konfiguriert sein, dass die Bildrate reduziert wird, um Rauschen zu bereinigen und/oder die gesamte Auflösung des Videos während des Kodierens zu reduzieren.

### Effekt der Codec-Konfiguration auf das kodierte Ausgangsmaterial

Die Algorithmen zur Kodierung von Videos verwenden typischerweise eine oder mehrere von mehreren allgemeinen Techniken, um ihre Kodierung durchzuführen. Im Allgemeinen gilt: Jede Konfigurationsoption, die dazu bestimmt ist, die Ausgabegröße des Videos zu reduzieren, wird wahrscheinlich negative Auswirkungen auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten im Video einführen. Es ist auch möglich, eine verlustfreie Kodierungsform zu wählen, die zu einer viel größeren kodierten Datei führt, jedoch mit perfekter Reproduktion des Originalvideos nach dem Dekodieren.

Darüber hinaus kann es zwischen verschiedenen Encoder-Utilities Unterschiede in der Verarbeitung des Quellvideos geben, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

<table class="standard-table">
  <caption>
    Auswirkungen der Videocoder-Konfiguration auf Qualität und Größe
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
        Verlustfreie Komprimierung kann die Video-Gesamtgröße nicht annähernd
        so stark reduzieren wie verlustbehaftete Komprimierung; die
        resultierenden Dateien sind wahrscheinlich immer noch zu groß für
        den allgemeinen Gebrauch.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Komprimierung</th>
      <td>
        In gewissem Maße treten Artefakte und andere Formen der
        Qualitätsverschlechterung auf, abhängig von dem spezifischen
        Codec und dem Ausmaß der angewendeten Komprimierung
      </td>
      <td>
        Je stärker das kodierte Video von der Quelle abweichen darf,
        desto einfacher ist es, höhere Kompressionsraten zu erreichen
      </td>
    </tr>
    <tr>
      <th scope="row">Qualitätseinstellung</th>
      <td>
        Je höher die Qualitätskonfiguration, desto mehr wird das kodierte
        Video wie die Originalmedien aussehen
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren
        kodierten Videodateien; das Ausmaß, in dem dies der Fall ist,
        variiert je nach Codec
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>Die Qualität verbessert sich im Allgemeinen mit höheren Bitraten</td>
      <td>Höhere Bitraten führen zwangsläufig zu größeren Ausgabedateien</td>
    </tr>
  </tbody>
</table>

Die verfügbaren Optionen beim Kodieren von Videos und die Werte, die diesen Optionen zugewiesen werden sollen, variieren nicht nur von einem Codec zum anderen, sondern je nach der Kodierungssoftware, die Sie verwenden. Die Dokumentation, die mit Ihrer Kodierungssoftware geliefert wird, hilft Ihnen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebenwirkungen eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder umarrangierten Daten zu sichtbar negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile anhalten, aufgrund der Art und Weise, wie Video angezeigt wird. Jeder Videoframe wird präsentiert, indem auf den aktuell sichtbaren Frame eine Reihe von Änderungen angewendet wird. Dies bedeutet, dass alle Fehler oder Artefakte im Laufe der Zeit kumuliert werden, was zu Pannen oder anderweitig seltsamen oder unerwarteten Abweichungen im Bild führt, die eine Zeit lang anhalten können.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselframes** (auch bekannt als **Intra-Frames** oder **i-Frames**) in die Videodatei eingefügt. Die Schlüsselframes sind vollständige Frames, die verwendet werden, um sichtbare Schäden oder Artefaktrückstände zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, was bei der Rekonstruktion aus den kodierten Daten nicht mehr so aussieht wie vor der Kompression. Es gibt viele Formen des Aliasing; die häufigsten, die Sie sehen können, umfassen:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht,
          wenn ein Muster im Quellbild und die Arbeitsweise des Encoders
          räumlich leicht ausgerichtet sind. Die vom Encoder erzeugten
          Artefakte führen dann zu seltsamen, wirbelnden Effekten im
          Muster des Quellbildes bei der Dekodierung.
        </p>
      </td>
      <td>
        <img alt="eine Ziegelwand, die aufgrund des Moiré-Musters einen wirbelnden Effekt erhält, ähnlich wie Wellen" src="moire-pattern.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeneffekt</h4>
        <p>
          Der <strong>Treppeneffekt</strong> ist ein räumliches Artefakt, das
          auftritt, wenn diagonale gerade oder gekrümmte Kanten, die glatt
          sein sollten, eine gezackte Erscheinung annehmen und ein wenig wie
          eine Treppe aussehen. Dies ist der Effekt, der durch
          "Anti-Alias"-Filter reduziert wird.
        </p>
      </td>
      <td>
        <img alt="Foto von diagonalen Linien, die aufgrund von Aliasing wie eine Treppe aussehen und einen Treppeneffekt verursachen" src="staircase-effect.jpg" />
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagenradeffekt</h4>
        <p>
          Der <strong>Wagenradeffekt</strong> (oder
          <strong
            ><a href="https://de.wikipedia.org/wiki/Stroboskopeffekt">Stroboskopeffekt</a></strong
          >) ist der visuelle Effekt, der häufig im Film zu sehen ist, bei
          dem ein drehendes Rad scheinbar mit der falschen Geschwindigkeit
          oder sogar rückwärts dreht. Dies geschieht aufgrund einer
          Wechselwirkung zwischen der Bildrate und dem
          Kompressionsalgorithmus. Der gleiche Effekt kann bei jedem
          sich wiederholenden Muster auftreten, das sich bewegt, wie z. B.
          die Schwellen auf einer Eisenbahnlinie, Pfosten entlang einer
          Straße usw. Dies ist ein zeitliches (zeitbasiertes) Aliasing-Problem;
          die Geschwindigkeit der Rotation stört die Frequenz der
          Abtastung während der Komprimierung oder Kodierung.
        </p>
      </td>
      <td>
        <img alt="Drehendes Rad, das aufgrund von Aliasing einen Wagenradeffekt verursacht." src="stroboscopic-effect.gif" />
      </td>
    </tr>
  </tbody>
</table>

### Farbkanten

**Farbkanten** sind eine Art von visuellen Artefakten, die als irreführende Farben entlang der Kanten von farbigen Objekten innerhalb der Szene auftreten. Diese Farben haben keine beabsichtigte Farbbeziehung zum Inhalt des Frames.

### Verlust von Schärfe

Das Entfernen von Daten im Prozess der Videokodierung erfordert, dass einige Details verloren gehen. Wird genügend Komprimierung angewendet, können Teile oder möglicherweise das gesamte Bild an Schärfe verlieren, was zu einem leicht verschwommenen oder trüben Aussehen führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text—insbesondere kleiner Text—sehr detailliert ist und kleinere Änderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Komprimierungsalgorithmen können **[Klingeln](https://de.wikipedia.org/wiki/Klingelartifakte)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln kontaminiert werden, die vom Kompressionsalgorithmus generiert werden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund überlappen. Dies ist insbesondere bei höheren Kompressionsraten häufig.

![Beispiel des Klingeleffekts](ringing-effects.png)

Beachten Sie die blauen und rosa Ränder um die Kanten des Sterns oben (sowie das Stufen und andere signifikante Kompressionsartefakte). Diese Ränder sind der Klingeleffekt. Klingeln ist in gewisser Hinsicht ähnlich dem [Mückenrauschen](#mückenrauschen), außer dass der Klingeleffekt mehr oder weniger konstant und unverändert ist, während das Mückenrauschen schimmert und sich bewegt.

Klingeleffekte können es auch erschweren, Text in Ihren Bildern zu lesen.

### Plakatizeffekt

**Plakatizeffekt** tritt auf, wenn die Kompression zu einem Verlust von Farbdetails in Farbverläufen führt. Statt sanfter Übergänge durch die verschiedenen Farben in einem Bereich wird das Bild blockartig, mit Farbklecksen, die das ursprüngliche Aussehen des Bildes nur annähernd darstellen.

![Bild eines Weißkopfseeadlers mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockhaftigkeit der Farben im Gefieder des Weißkopfseeadlers im Bild oben (und der Schneeeule im Hintergrund). Die Details der Federn gehen weitgehend aufgrund dieser Plakatizeffekt-Artefakte verloren.

### Konturierung

**Konturierung** oder **Farbbanding** ist eine spezifische Form der Plakatizeffekte, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Infolgedessen weisen die Inhalte des Videos ein "geschichtetes" Aussehen auf, bei dem anstelle von sanften Farbverläufen und Übergängen die Übergänge von Farbe zu Farbe abrupt sind und Streifen von Farben entstehen.

![Beispiel eines Bildes, dessen Komprimierung Konturierung eingeführt hat](contouring-effect.jpg)

Im Beispielbild oben ist zu erkennen, wie der Himmel Bänder unterschiedlicher Blautöne aufweist, anstatt ein gleichmäßiger Verlauf zu sein, wenn sich die Himmelsfarbe zum Horizont hin ändert. Dies ist der Konturierungseffekt.

### Mückenrauschen

**Mückenrauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Kantengeschäftigkeit** auftritt, das als flackernder Schleier oder Schimmern auftritt, das sich ungefähr entlang der Ränder von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund bewegt. Der Effekt kann in der Erscheinung dem [Klingeln](#klingeln) ähneln.

![Beispiel eines Bildes, dessen Komprimierung Mückenrauschen eingeführt hat.](mosquito-effect-sm.png)

Das obige Foto zeigt Mückenrauschen an mehreren Stellen, einschließlich im Himmel um die Brücke herum. In der oberen rechten Ecke zeigt ein Ausschnitt eine Nahaufnahme eines Teils des Bildes, das Mückenrauschen aufweist.

Mückenrausch-Artefakte finden sich am häufigsten in MPEG-Videos, können aber immer auftreten, wenn ein diskreter Kosinustransformationsalgorithmus (DCT) verwendet wird; dies schließt zum Beispiel JPEG-Standbilder ein.

### Bewegungsentschädigungs-Blockgrenzenartefakte

Die Komprimierung von Videos funktioniert im Allgemeinen, indem zwei Frames verglichen und die Unterschiede zwischen ihnen aufgezeichnet werden, ein Frame nach dem anderen, bis zum Ende des Videos. Diese Technik funktioniert gut, wenn die Kamera fest an ihrem Platz ist oder die Objekte im Frame relativ stationär sind, aber wenn es im Frame viel Bewegung gibt, können die Unterschiede zwischen den Frames so groß sein, dass die Komprimierung keinen Nutzen bringt.

**[Bewegungskompensation](https://de.wikipedia.org/wiki/Bewegungskompensation)** ist eine Technik, die nach Bewegungen (entweder der Kamera oder von Objekten im Sichtfeld) sucht und bestimmt, um wie viele Pixel sich das sich bewegende Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die sich bewegt haben und nicht einfach durch diese Verschiebung beschrieben werden können. Im Wesentlichen findet der Encoder die sich bewegenden Objekte und erstellt dann eine interne Art von Frame, der wie das Original aussieht, jedoch mit allen Objekten, die an ihre neuen Positionen verschoben wurden. In der Theorie nähert dies das Aussehen des neuen Frames an. Um die Arbeit abzuschließen, werden dann die verbleibenden Unterschiede gefunden, und die Menge der Objektverschiebungen und der Pixelunterschiede wird in den Daten gespeichert, die den neuen Frame repräsentieren. Dieses Objekt, das die Verschiebung und die Pixelunterschiede beschreibt, wird als **Residualframe** bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Originalframe</th>
      <th scope="col" style="width: 216px">Inter-Frame-Unterschiede</th>
      <th scope="col" style="width: 216px">
        Unterschied nach Bewegungskompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Original frame des Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten Frame und dem folgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Frames nach der Verschiebung um zwei Pixel nach rechts"
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
        folgenden Frame zu sehen. Alles andere ist schwarz. Bei genauem
        Hinsehen erkennt man, dass der Großteil dieser Unterschiede von einer
        horizontalen Kamerabewegung herrührt, was dies zu einem guten
        Kandidaten für Bewegungskompensation macht.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, haben wir hier
        die Schwenken der Kamera berücksichtigt, indem wir den ersten Frame
        zuerst um zwei Pixel nach rechts verschieben und dann die
        Unterschiede berechnen. Dies kompensiert die Schwenken der Kamera und
        ermöglicht mehr Überlappung zwischen den beiden Frames.
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
          href="https://de.wikipedia.org/wiki/Bewegungskompensation#Bildschirmbeispiel"
          >Wikipedia</a
        >
      </th>
    </tr>
  </tbody>
</table>

Es gibt zwei allgemeine Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globalen Bewegungskompensationen passen allgemeine Kamerabewegungen wie Tracking, Dollybewegungen, Schwenkbewegungen, Neigungsbewegungen, Rollbewegungen und Bewegungen nach oben und unten an. Die Blockbewegungskompensation bearbeitet lokal begrenzte Änderungen, indem sie nach kleineren Teilen des Bildes sucht, die mithilfe der Bewegungskompensation kodiert werden können. Diese Blöcke sind normalerweise von fester Größe, in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen zulassen und sogar das Überlappen von Blöcken ermöglichen.

Es gibt jedoch Artefakte, die durch Bewegungskompensation auftreten können. Diese treten entlang der Blockränder in Form von scharfen Kanten auf, die falsches Klingeln und andere Kantenwirkungen erzeugen. Diese sind auf die Mathematik zurückzuführen, die bei der Kodierung der Residualframes beteiligt ist, und können sich leicht bemerkbar machen, bevor sie durch das nächste Schlüsselframe repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu reduzieren, um die endgültige Dateigröße des Videos zu verbessern. Während der sofortige Verlust an Größe oder Flüssigkeit der Wiedergabe ein negativer Faktor sein kann, kann sorgfältige Entscheidungsfindung zu einem guten Endergebnis führen. Wenn ein 1080p-Video vor dem Kodieren auf 720p reduziert wird, kann das resultierende Video deutlich kleiner sein, während es eine viel höhere visuelle Qualität hat; sogar nach dem Hochskalieren während der Wiedergabe könnte das Ergebnis besser sein als das Encodieren des Originalvideos in voller Größe und das Akzeptieren des Qualitätsverlusts, der erforderlich ist, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich können Sie Frames aus dem Video vollständig entfernen und die Bildrate entsprechend verringern. Dies hat zwei Vorteile: Es macht das Gesamtvideo kleiner, und diese kleinere Größe ermöglicht eine noch größere Bewegungskompensation zu erreichen. Zum Beispiel, anstatt Bewegungsunterschiede für zwei Frames zu berechnen, die aufgrund der Bewegungen zwischen den Frames zwei Pixel auseinander liegen, könnte das Überspringen eines jeden anderen Frames das Berechnen eines Unterschieds führen, der einer Bewegung von vier Pixeln entspricht. Dadurch kann die gesamte Bewegung der Kamera mit weniger Residualframes dargestellt werden.

Die absolute Mindest-Bildrate, die ein Video haben kann, bevor die Inhalte aus menschlicher Sicht nicht mehr als Bewegung wahrgenommen werden, beträgt ungefähr 12 Frames pro Sekunde. Unterhalb dieser Grenze wird das Video zu einer Reihe von Standbildern. Filme haben typischerweise 24 Frames pro Sekunde, während Standard-Definition-Fernsehen etwa 30 Frames pro Sekunde beträgt (etwas weniger, aber nah genug) und High-Definition-Fernsehen zwischen 24 und 60 Frames pro Sekunde liegt. Alles von 24 FPS aufwärts wird generell als zufriedenstellend flüssig angesehen; 30 oder 60 FPS ist ein ideales Ziel, abhängig von Ihren Anforderungen.

Letztendlich hängen die Entscheidungen darüber, welche Kompromisse Sie eingehen können, ganz von Ihnen und/oder Ihrem Designteam ab.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideos entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265) und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig gebührenfrei und für die Verwendung sowohl im {{HTMLElement("video")}}-Element als auch in [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional** mit zunehmender Unterstützung für Farbtiefen und Chroma Subsampling. Zusätzlich wird eine Reihe von **Levels** spezifiziert, die jeweils Grenzen für eine Reihe von Attributen des Videos festlegen. Diese Attribute umfassen Bildabmessungen, Bildfläche in Pixeln, Anzeige- und Decodiergeschwindigkeiten, durchschnittliche und maximale Bitraten sowie Begrenzungen für die Anzahl der Kacheln und Kachelspalten, die im Kodierungs-/Dekodierungsprozess verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152-Video auf Level 2.0 haben können. Es ist jedoch erwähnenswert, dass zumindest für Firefox und Chrome die Levels beim Software-Decodieren derzeit ignoriert werden und der Decoder einfach das Beste versucht, um das Video mit den bereitgestellten Einstellungen abzuspielen. Aus Kompatibilitätsgründen sollten Sie jedoch in den Grenzen des gewählten Levels bleiben.

AV1 wird in allen Browsern unterstützt, jedoch ist die Unterstützung in Safari auf Geräte beschränkt, die über einen Hardware-Decoder verfügen, das bedeutet auf M3 MacBooks und späteren Modellen, iPhone 15 Pro sowie iPhone 16 und späteren Modellen. Viele Mobil- und Desktopgeräte verfügen über Hardware-Decoder, wodurch AV1 eine hervorragende Wahl für das Bereitstellen von Webvideos darstellt, mit einem Fallback für ältere Apple-Geräte.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitrates</th>
      <td>
        <p>
          Variiert je nach Level des Videos; theoretisches Maximum erreicht 800 Mbps bei Level 6.3
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
        Variiert je nach Level; z. B. hat Level 2.0 ein Maximum von 30 FPS, während Level 6.3 120 FPS erreichen kann
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlusterhöhung
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        8 x 8 Pixel bis 65,535 x 65535 Pixel, wobei jede Dimension jeden Wert zwischen diesen einnehmen kann
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
              <th scope="col">Chroma Subsampling</th>
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
          <sup>*</sup> Safari unterstützt AV1 auf M3 MacBooks und späteren Geräten, iPhone 15 Pro und iPhone 16 und späteren Geräten.
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
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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

Der **Advanced Video Coding** (**AVC**) Standard der MPEG-4 Spezifikationssuite ist in der identischen ITU H.264 Spezifikation und der MPEG-4 Teil 10 Spezifikation spezifiziert. Es ist ein auf Bewegungskompensation basierender Codec, der heutzutage weit verbreitet für alle Arten von Medien verwendet wird, einschließlich Broadcast-Fernsehen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Videocodec für Blu-Ray Discs.

AVC ist sehr flexibel und bietet eine Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für den Einsatz in Videokonferenzen und mobilen Szenarien konzipiert und verbraucht weniger Bandbreite als das Main Profile (das in einigen Regionen für digitales Fernsehen in Standarddefinition verwendet wird) oder das High Profile (das für Blu-Ray Disc-Video verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling. Das High 10 Profile fügt Unterstützung für 10-Bit-Farben hinzu, und fortgeschrittene Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC hat auch spezielle Funktionen wie Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), was unter anderem die Produktion stereoskopischer Videos ermöglicht.

AVC ist jedoch ein proprietäres Format, und mehrere Parteien besitzen zahlreiche Patente bezüglich seiner Technologien. Der kommerzielle Einsatz von AVC-Medien erfordert eine Lizenz, obwohl der Via LA Patent Pool keine Lizenzgebühren für das Streaming von Internetvideos im AVC-Format verlangt, solange das Video für Endnutzer kostenlos ist.

Nicht-Web-Browser-Implementierungen von WebRTC (jede Implementierung, die die JavaScript-APIs nicht einschließt) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht verpflichtet sind, dies zu tun, tun es einige.

In HTML-Inhalten für Webbrowser ist AVC breit kompatibel und viele Plattformen unterstützen Hardware-Kodierung und -Deko-dierung von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://www.via-la.com/licensing-programs/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitres</th>
      <td>Variiert je nach Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS ist möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlusterhöhung
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >, obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des Bildes zu erstellen
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 8,192 x 4,320 Pixel</td>
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
              <th scope="col">Chroma Subsampling</th>
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
        <p>
          Die Unterstützung von Firefox für AVC hängt davon ab, ob das Betriebssystem eingebaute oder vorinstallierte Codecs für AVC und dessen Container hat, um Patentprobleme zu vermeiden.
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
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263** Codec der ITU wurde hauptsächlich für den Einsatz in niedrigen Bandbreitensituationen entwickelt. Insbesondere liegt der Fokus auf Videokonferenzen über PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme). Trotz der Anpassung für Netzwerke mit niedriger Bandbreite ist er relativ CPU-intensiv und möglicherweise nicht geeignet für leistungsschwächere Computer. Das Datenformat ähnelt dem von MPEG-4 Teil 2.

H.263 wurde auf dem Internet nie weit verbreitet eingesetzt. Abwandlungen von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie Flash Video oder den Sorenson-Codec. Kein bedeutender Browser hat H.263 standardmäßig unterstützt. Bestimmte Multimedia-Plugins haben den Support für H.263 möglich gemacht.

Im Gegensatz zu den meisten Codecs definiert H.263 die Grundlagen eines codierten Videos basierend auf der maximalen Bitrate pro Frame (Bild), oder **BPPmaxKb**. Während der Kodierung wird ein Wert für BPPmaxKb gewählt, der dann bei jedem Frame nicht überschritten werden kann. Die endgültige Bitrate hängt davon, der Bildrate, der Kompression sowie der gewählten Auflösung und dem Blockformat ab.

H.263 wurde durch H.264 ersetzt und gilt daher als ein veraltetes Medienformat, dessen Nutzung Sie allgemein vermeiden sollten, wenn möglich. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, ist die Unterstützung sehr alter Geräte, auf denen H.263 die beste Wahl ist.

H.263 ist ein proprietäres Format, wobei [Patente](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) von einer Reihe von Organisationen und Unternehmen gehalten werden, darunter Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm usw. Um H.263 zu verwenden, sind Sie rechtlich verpflichtet, die entsprechenden Lizenzen zu erwerben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitrates</th>
      <td>Unbegrenzt, aber typischerweise unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlusterhöhung
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
          Version 1 von H.263 spezifiziert eine Reihe von unterstützten Bildgrößen. Spätere Versionen können zusätzliche Auflösungen unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert die Bildgröße in Pixel sowie die Anzahl der Reihen für jede der Luminanz- und Chrominanzproben, die für jedes Bild verwendet werden
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
              <th scope="row">Unterstützung für H.263</th>
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
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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
        Proprietär; entsprechende Lizenzen sind erforderlich. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **High Efficiency Video Coding** (**HEVC**) Codec ist definiert durch ITUs **H.265** sowie durch MPEG-H Teil 2 (das noch in der Entwicklung befindliche Nachfolgeprojekt zu MPEG-4). HEVC wurde entwickelt, um die effiziente Codierung und Decodierung von Video in Größen zu unterstützen, die sehr hohe Auflösungen umfassen (einschließlich 8K Video), mit einer Struktur, die es Software ermöglicht, moderne Prozessoren auszunutzen. Theoretisch kann HEVC komprimierte Dateigrößen erreichen, die halb so groß sind wie bei [AVC](#avc_h.264), aber mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Codierungseinheit (CTU)—ähnlich dem in früheren Codecs verwendeten Makroblock—aus einem Baum von Luminanzwerten für jede Probe sowie einem Baum von Chromawerten für jede Chroma-Probe, die in derselben Codierungseinheit verwendet werden, sowie aller erforderlichen Syntaxelemente. Diese Struktur ermöglicht eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-Bit pro Komponente Farbe mit 4:2:0 Chroma-Subsampling unterstützt. Ebenfalls interessant ist, dass 4:4:4 Video speziell behandelt wird. Anstatt die Luminanzproben (die die Pixel des Bildes in Graustufen darstellen) und die Cb- und Cr-Proben (die anzeigen, wie die Grautöne verändert werden müssen, um Farb-Pixel zu erstellen) zu haben, werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann während des Renderings kombiniert werden, um ein Vollfarbbild zu erzeugen.

HEVC ist ein proprietäres Format und wird durch eine Reihe von Patenten abgedeckt. Die Lizenzierung wird [von Via LA verwaltet](https://www.via-la.com/licensing-programs/hevc-vvc/); Gebühren werden Entwicklern statt Inhaltsproduzenten und -verteilern berechnet. Stellen Sie sicher, die neuesten Lizenzbedingungen und Anforderungen zu überprüfen, bevor Sie eine Entscheidung darüber treffen, HEVC in Ihrer App oder Website zu verwenden!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitres</th>
      <td>Bis zu 800.000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS ist möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlusterhöhung
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>128 x 96 bis 8,192 x 4,320 Pixel; variiert je nach Profil und Level</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Informationen unten sind für die wichtigsten Profile gegeben. Es gibt eine Reihe von anderen Profilen, die hier nicht enthalten sind.
        </p>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma Subsampling</th>
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
              <th scope="row">Unterstützung für HEVC / H.265</th>
              <td>107</td>
              <td>18</td>
              <td>120</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows ab Version 8, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardwareunterstützung unter Windows 10 1709+ bei
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat den gleichen Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Decoder.
        </p>
        <p>Firefox ermöglicht HEVC auf:
          <ul>
            <li>Windows ab Firefox 134 mit entweder Hardware (auf Geräten, die es unterstützen, wobei der Bereich derselbe wie bei Edge ist) oder Software (auf Windows muss der Benutzer für eine Erweiterung zahlen und diese installieren)</li>
            <li>macOS ab Firefox 136 mit entweder Hardware oder Software.</li>
            <li>Linux ab Firefox 137 mit entweder Hardware oder Software (über das System ffmpeg).</li>
            <li>Android ab Firefox 137 nur mit Hardware.</li>
          </ul>
        </p>
        <p>Opera und andere auf Chromium basierende Browser haben den gleichen Unterstützungsstatus wie Chrome.</p>
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
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
      <td>
        <a href="https://www.itu.int/">ITU</a> /
        <a href="https://mpeg.chiariglione.org/">MPEG</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Spezifikationen</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.265"
          >https://www.itu.int/rec/T-REC-H.265</a
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
        >. Beachten Sie, dass mehrere Patentpools gelten können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das **MPEG-4 Video Elemental Stream** (**MP4V-ES**) Format ist Teil des MPEG-4 Teil 2 Visual Standards. Während im Allgemeinen MPEG-4 Teil 2 Video von niemandem verwendet wird, da es keinen überzeugenden Wert im Vergleich zu anderen Codecs bietet, hat MP4V-ES eine gewisse Verwendung auf mobilen Geräten. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist die Verwendung zum Streamen von MPEG-4-Audio und -Video über eine {{Glossary("RTP", "RTP")}}-Sitzung. MP4V-ES wird jedoch auch verwendet, um MPEG-4-Audio und -Video über eine mobile Verbindung unter Verwendung von [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp) zu übertragen.

Sie möchten dieses Format wahrscheinlich nicht verwenden, da es nicht in bedeutender Weise von wichtigen Browsern unterstützt wird und ziemlich veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, sind aber manchmal fälschlicherweise als `.mp4` gekennzeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitrates</th>
      <td>5 kbps bis 1 Gbps und mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Keine spezifische Grenze; nur durch die Datenrate eingeschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlusterhöhung
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4,096 x 4,096 Pixel</td>
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
              <th scope="row">Unterstützung für MP4V-ES</th>
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
          <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>-Containern nur.
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
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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

**MPEG-1 Part 2 Video** wurde zu Beginn der 1990er Jahre eingeführt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG entwickelt, ohne Beteiligung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Decoder auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software- und Hardwaregeräten kompatibel. Es gibt keine aktiven Patente in Bezug auf MPEG-1-Video mehr, sodass es ohne Lizenzprobleme verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Plugin-Nutzung in Webbrowsern eingestellt ist, sind diese im Allgemeinen nicht mehr verfügbar. Daher ist MPEG-1 eine schlechte Wahl für den Einsatz in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitrates</th>
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
        Verlusterhöhung
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4,095 x 4,095 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0 Chroma Subsampling mit bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
              <th scope="row">Unterstützung für MPEG-1</th>
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
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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
        Proprietär; jedoch sind alle Patente abgelaufen, sodass MPEG-1 frei verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** ist das vom MPEG-2-Standard definierte Videoformat und wird gelegentlich auch als H.262 bezeichnet, seine {{Glossary("ITU", "ITU")}}-Bezeichnung. Es ist sehr ähnlich zu MPEG-1 Video—tatsächlich kann jeder MPEG-2 Player automatisch MPEG-1 handhaben, ohne spezielle Arbeit—außer dass es erweitert wurde, um höhere Bitraten und verbesserte Codierungstechniken zu unterstützen.

Das Ziel war es, MPEG-2 zu ermöglichen, Standard-Definition-Fernsehen zu komprimieren, sodass auch interlaced Video unterstützt wird. Die Kompressionsrate und die Qualität des resultierenden Videos entsprechen den Bedürfnissen so gut, dass MPEG-2 der primäre Videocodec für DVD-Video-Medien ist.

MPEG-2 hat mehrere verfügbare Profile mit unterschiedlichen Fähigkeiten. Jedes Profil ist in vier Levels verfügbar, die jeweils die Attribute des Videos wie Bildrate, Auflösung, Bitrate usw. erhöhen. Die meisten Profile verwenden Y'CbCr mit 4:2:0 Chroma Subsampling, aber fortgeschrittenere Profile unterstützen auch 4:2:2. Außerdem gibt es vier Levels, die jeweils Unterstützung für größere Bildgrößen und Bitraten bieten. Zum Beispiel unterstützt die [ATSC](https://en.wikipedia.org/wiki/ATSC_standards) Spezifikation für Fernsehen in Nordamerika MPEG-2 Video in hoher Definition mit dem Main Profile auf High Level, was 4:2:0 Video sowohl bei 1920 x 1080 (30 FPS) als auch bei 1280 x 720 (60 FPS) erlaubt, bei einer maximalen Bitrate von 80 Mbps.

Allerdings unterstützen nur wenige Webbrowser MPEG-2 ohne die Unterstützung eines Plugins, und da die Plugin-Nutzung in Webbrowsern eingestellt ist, sind diese im Allgemeinen nicht mehr verfügbar. Daher ist MPEG-2 eine schlechte Wahl für den Einsatz in Websites und Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitrates</th>
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
        Verlusterhöhung
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
        Y'CbCr mit 4:2:0 Chroma-Subsampling in den meisten Profilen; die "High"- und "4:2:2"-Profile unterstützen auch 4:2:2 Chroma-Subsampling.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
              <th scope="row">Unterstützung für MPEG-2</th>
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
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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
        Proprietär; alle Patente sind weltweit abgelaufen mit Ausnahme von Malaysia (ab dem 1. Oktober 2024), damit kann MPEG-2 außerhalb von Malaysia frei verwendet werden.
        Patente werden lizenziert durch <a href="https://www.via-la.com/licensing-programs/mpeg-2/">Via LA</a>.
      </td>
    </tr>
  </tbody>
</table>

### Theora

> [!WARNING]
> Dieser Codec wird nicht mehr empfohlen.
> Er hat eine extrem geringe Nutzung und die Unterstützung wird aus Browsern entfernt.

**[Theora](https://en.wikipedia.org/wiki/Theora)**, entwickelt von [Xiph.org](https://xiph.org/), ist ein offener und kostenloser Video-Codec, der ohne Lizenzgebühren oder Lizenzen verwendet werden kann. Theora ist in Qualität und Kompressionsraten vergleichbar mit MPEG-4 Teil 2 Visual und AVC, was es zu einer sehr guten, wenn auch nicht erstklassigen Wahl für die Videoenkodierung macht. Aber sein Status, frei von jeglichen Lizenzierungsproblemen zu sein, und sein relativ geringer CPU-Ressourcenbedarf machen es zu einer beliebten Wahl für viele Software- und Webprojekte. Die geringe CPU-Belastung ist besonders nützlich, da es keine Hardware-Decoder für Theora gibt.

Theora basierte ursprünglich auf dem VC3-Code der On2 Technologies. Der Codec und seine Spezifikation wurden unter der LGPL-Lizenz veröffentlicht und Xiph.org anvertraut, das ihn dann zum Theora-Standard entwickelte.

Ein Nachteil von Theora ist, dass es nur 8 Bit pro Farbbestandteil unterstützt, ohne die Möglichkeit, 10 oder mehr zu verwenden, um Farbbanding zu vermeiden. Das gesagt, 8 Bit pro Komponente ist immer noch das am weitesten verbreitete Farbformat, das heutzutage verwendet wird, also ist dies in den meisten Fällen nur eine geringe Unannehmlichkeit. Außerdem kann Theora nur in einem Ogg-Container verwendet werden. Der größte Nachteil jedoch ist, dass es nicht von Safari unterstützt wird, was Theora nicht nur auf macOS, sondern auf allen Millionen und Abermillionen von iPhones und iPads unzugänglich macht.

Das [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) bietet weitere Details über Theora sowie das Ogg-Containerformat, in dem es verwendet wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitrates</th>
      <td>Bis zu 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Beliebig; alle Werte ungleich null werden unterstützt. Die Bildrate wird als 32-Bit-Zähler und ein 32-Bit-Nenner angegeben, um nicht-ganzzahlige Bildraten zu ermöglichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlusterhöhung
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        Jede Kombination von Breite und Höhe bis zu 1,048,560 x 1,048,560 Pixel
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Y'CbCr mit 4:2:0, 4:2:2, und 4:4:4 Chroma Subsampling bei 8 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
      <td>
        <p>Ja</p>
        <p>
          Während Theora keine Unterstützung für Variable Bildrate (VFR) innerhalb eines einzelnen Streams bietet, können mehrere Streams innerhalb einer Datei zusammengesetzt werden, und jeder dieser Streams kann seine eigene Bildrate haben, wodurch im Wesentlichen VFR ermöglicht wird. Allerdings ist dies unpraktisch, wenn die Bildrate häufig geändert werden muss.
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
              <th scope="row">Unterstützung für Theora</th>
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
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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

Der **Video Processor 8** (**VP8**) Codec wurde ursprünglich von On2 Technologies erstellt. Nach deren Übernahme durch Google wurde VP8 als offenes und gebührenfreies Videoformat unter einer Zusicherung veröffentlicht, die entsprechenden Patente nicht durchzusetzen. In Bezug auf Qualität und Kompressionsrate ist VP8 vergleichbar mit [AVC](#avc_h.264).

Wenn der Browser es unterstützt, ermöglicht VP8 Video mit einem Alphakanal, wodurch das Video abgespielt werden kann und der Hintergrund durch das Video in einem durch den Alphakanal des jeweiligen Pixels bestimmten Grad sichtbar ist. Safari unterstützt keine Alphatransparenz in VP8-Video.

Es gibt eine gute Browserunterstützung für VP8 in HTML-Inhalten, insbesondere in [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) Dateien.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitrates</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden levelbasierte Begrenzungen durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlusterhöhung
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 16,384 x 16,384 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>Y'CbCr mit 4:2:0 Chroma Subsampling bei 8 Bit pro Komponente</td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
      <td>Ja; VP8 ist einer der spezifikationsgeforderten Codecs für WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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

**Video Processor 9** (**VP9**) ist der Nachfolger des älteren VP8-Standards, der von Google entwickelt wurde. Wie VP8 ist VP9 vollständig offen und gebührenfrei. Seine Codier- und Decodierleistung ist vergleichbar mit oder leicht schneller als die von AVC, jedoch mit besserer Qualität. Die kodierte Videoqualität von VP9 ist vergleichbar mit der von HEVC bei ähnlichen Bitraten.

Das Hauptprofil von VP9 unterstützt nur eine Farbtiefe von 8 Bit bei 4:2:0 Chroma-Subsampling-Ebenen, aber seine Profile umfassen Unterstützung für tiefere Farben und das gesamte Spektrum der Chroma-Subsampling-Modi. Es unterstützt mehrere HDR-Implementierungen und bietet erhebliche Freiheit bei der Auswahl von Bildraten, Seitenverhältnissen und Bildgrößen.

VP9 wird von Browsern weitgehend unterstützt, und Hardwareimplementierungen des Codecs sind recht verbreitet. VP9 ist einer der beiden von [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm) geforderten Videocodecs (der andere ist [VP8](#vp8)). Beachten Sie jedoch, dass Safari in diesem Format keine Alphatransparenz unterstützt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitrates</th>
      <td>Beliebig; kein Maximum, es sei denn, es werden levelbasierte Begrenzungen durchgesetzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlusterhöhung
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 65,536 x 65,536 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Farbtiefen</th>
              <th scope="col">Chroma Subsampling</th>
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
              <td>4:2:0, 4:2:2, und 4:4:4</td>
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
      <th scope="row">Unterstützung für Variable Bildrate (VFR)</th>
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
      <th scope="row">Unterstützende/Erscheinende Organisation</th>
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

Die Entscheidung, welchen Codec oder welche Codecs Sie verwenden möchten, beginnt mit einer Reihe von Fragen, um sich vorzubereiten:

- Möchten Sie ein offenes Format verwenden, oder sollen auch proprietäre Formate in Betracht gezogen werden?
- Haben Sie die Ressourcen, mehr als ein Format für jedes Ihrer Videos zu produzieren? Die Möglichkeit, eine Rückfalloption bereitzustellen, vereinfacht den Entscheidungsprozess erheblich.
- Gibt es Browser, bei denen Sie bereit sind, die Kompatibilität zu opfern?
- Wie alt ist die älteste Version des Browsers, die Sie unterstützen müssen? Beispielsweise, müssen Sie auf jedem Browser arbeiten, der in den letzten fünf Jahren ausgeliefert wurde, oder nur im letzten Jahr?

In den folgenden Abschnitten bieten wir empfohlene Codec-Auswahlen für bestimmte Anwendungsfälle an. Für jeden Anwendungsfall finden Sie bis zu zwei Empfehlungen. Wenn der Codec, der als der beste für den Anwendungsfall gilt, proprietär ist oder Lizenzzahlungen erfordern könnte, dann werden zwei Optionen bereitgestellt: zuerst eine offene und lizenzfreie Option, gefolgt von der proprietären.

Wenn Sie nur eine einzige Version jedes Videos anbieten können, können Sie das Format wählen, das am besten zu Ihren Bedürfnissen passt. Das erste wird als eine gute Kombination aus Qualität, Leistung und Kompatibilität empfohlen. Die zweite Option wird die am weitesten kompatible Wahl sein, auf Kosten von etwas Qualität, Leistung und/oder Größe.

### Empfehlungen für das Web

Zuerst betrachten wir die besten Optionen für Videos, die auf einer typischen Website wie einem Blog, einer Informationsseite, einer kleinen Unternehmenswebsite präsentiert werden, auf der Videos zur Demonstration von Produkten verwendet werden (aber nicht, wo die Videos selbst ein Produkt sind), und so weiter.

1. Ein **[WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)** Container mit dem **[AV1](#av1)** Codec für Video und dem **[Opus](/de/docs/Web/Media/Guides/Formats/Audio_codecs#opus)** Codec für Audio. Diese sind alle offene, lizenzfreie Formate, die allgemein gut unterstützt werden, mit der Ausnahme von Safari auf älteren Apple-Geräten.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
   </video>
   ```

2. Ein **[MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)** Container und der **[AVC](#avc_h.264)** (**H.264**) Video-Codec, idealerweise mit **[AAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#aac_advanced_audio_coding)** als Ihrem Audio-Codec. Dies liegt daran, dass der MP4-Container mit AVC- und AAC-Codecs in jedem großen Browser eine weit verbreitete Kombination ist und die Qualität in der Regel für die meisten Anwendungsfälle gut ist. Stellen Sie jedoch sicher, dass Sie Ihre Einhaltung der Lizenzanforderungen überprüfen.

   ```html
   <video controls>
     <source type="video/webm; codecs=av01,opus" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> [!NOTE]
> Das {{HTMLElement("video")}}-Element erfordert ein schließendes `</video>`-Tag, unabhängig davon, ob Sie {{HTMLElement("source")}}-Elemente darin haben oder nicht.

### Empfehlungen für Archivierung, Bearbeitung oder Remixen

Derzeit gibt es keine verlustfreien oder gar fast verlustfreien Videocodecs, die allgemein in Webbrowsern verfügbar sind. Der Grund dafür ist einfach: Video ist riesig. Verlustfreie Kompression ist per Definition weniger effektiv als verlustbehaftete Kompression. Zum Beispiel benötigt unkomprimiertes 1080p-Video (1920 mal 1080 Pixel) mit 4:2:0-Chroma-Abtastung mindestens 1,5 Gbps. Durch Verwendung von verlustfreier Kompression wie FFV1 (welches nicht von Webbrowsern unterstützt wird) könnte dieser Wert vielleicht auf etwa 600 Mbps reduziert werden, je nach Inhalt. Das sind immer noch eine riesige Menge an Bits, die jede Sekunde durch eine Verbindung gepumpt werden müssen, und ist derzeit für keinen praktischen Einsatz realistisch.

Dies ist der Fall, obwohl einige der verlustbehafteten Codecs einen verlustfreien Modus anbieten; die verlustfreien Modi werden in keinem aktuellen Webbrowser implementiert. Das Beste, was Sie tun können, ist, einen hochwertigen Codec zu wählen, der verlustbehaftete Kompression verwendet und ihn so zu konfigurieren, dass so wenig Kompression wie möglich durchgeführt wird. Eine Möglichkeit, dies zu tun, besteht darin, den Codec so zu konfigurieren, dass er eine "schnelle" Kompression verwendet, was zwangsläufig bedeutet, dass weniger Kompression erreicht wird.

#### Video extern vorbereiten

Um Video für Archivierungszwecke außerhalb Ihrer Website oder App vorzubereiten, verwenden Sie ein Dienstprogramm, das die Kompression der ursprünglichen unkomprimierten Videodaten durchführt. Beispielsweise kann das kostenlose [x264](https://www.videolan.org/developers/x264.html)-Dienstprogramm verwendet werden, um Video im [AVC](#avc_h.264)-Format mit einer sehr hohen Bitrate zu kodieren:

```bash
x264 --crf 18 -preset ultrafast --output out-file.mp4 in-file
```

Während andere Codecs möglicherweise bessere Best-Case-Qualitätsstufen haben, wenn sie das Video signifikant komprimieren, sind ihre Encoder normalerweise so langsam, dass das nahezu verlustfreie Encoding, das Sie mit dieser Kompression erhalten, bei ungefähr gleichem Qualitätsniveau erheblich schneller ist.

#### Videoaufzeichnung

Angesichts der Einschränkungen, wie nahe man an verlustfrei herankommen kann, könnten Sie in Erwägung ziehen, [AVC](#avc_h.264) oder [AV1](#av1) zu verwenden. Wenn Sie beispielsweise die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) verwenden, um Video aufzuzeichnen, könnten Sie Code wie den folgenden verwenden, um Ihr [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt zu erstellen:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

Dieses Beispiel erstellt einen `MediaRecorder`, der so konfiguriert ist, dass er [AV1](#av1)-Video mit BT.2100 HDR in 12-Bit Farbe mit 4:4:4-Chroma-Abtastung und [FLAC](/de/docs/Web/Media/Guides/Formats/Audio_codecs#flac_free_lossless_audio_codec) für verlustfreies Audio aufzeichnet. Die resultierende Datei wird eine Bitrate von nicht mehr als 800 Mbps zwischen den Video- und Audiotracks teilen. Sie müssen diese Werte wahrscheinlich je nach Hardwareleistung, Ihren Anforderungen und den spezifischen Codecs, die Sie verwenden möchten, anpassen. Diese Bitrate ist offensichtlich nicht realistisch für die Netzwerkübertragung und wird wahrscheinlich nur lokal verwendet.

Wenn man den Wert des `codecs`-Parameters in seine punktweise aufgeteilten Eigenschaften zerlegt, sehen wir Folgendes:

| Wert   | Beschreibung                                                                                                                                                                                                                                                                                         |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | Die vier Zeichen lange Code-Bezeichnung (4CC), die den [AV1](#av1)-Codec identifiziert.                                                                                                                                                                                                              |
| `2`    | Das Profil. Ein Wert von 2 gibt das Professional-Profil an. Ein Wert von 1 ist das High-Profil, während ein Wert von 0 das Main-Profil spezifizieren würde.                                                                                                                                          |
| `19H`  | Die Ebene und Schicht. Dieser Wert stammt aus der Tabelle in Abschnitt [A.3](https://aomediacodec.github.io/av1-spec/#levels) der AV1-Spezifikation und gibt die hohe Schicht der Stufe 6.3 an.                                                                                                      |
| `12`   | Die Farbtiefe. Dies gibt 12 Bits pro Komponente an. Andere mögliche Werte sind 8 und 10, aber 12 ist die höchste Genauigkeit der Farbdarstellung, die in AV1 verfügbar ist.                                                                                                                          |
| `0`    | Der Monochrom-Modus-Flag. Wenn 1, dann würden keine Chroma-Ebenen aufgezeichnet werden und alle Daten sollten streng Luma-Daten sein, was zu einem Graustufenbild führt. Wir haben 0 angegeben, weil wir Farbe wollen.                                                                               |
| `000`  | Der Chroma-Subsampling-Modus, der aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation stammt. Ein Wert von 000, kombiniert mit dem Monochrom-Wert 0, zeigt an, dass wir 4:4:4 Chroma-Abtastung oder keinen Verlust von Farbdaten wollen. |
| `09`   | Die Primärfarben, die verwendet werden sollen. Dieser Wert stammt aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in der AV1-Spezifikation; 9 gibt an, dass wir die BT.2020-Farbe verwenden möchten, die für HDR verwendet wird.                              |
| `16`   | Die Abflusscharakteristika, die verwendet werden sollen. Dies kommt ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics); 16 gibt an, dass wir die Charakteristika für BT.2100 PQ-Farben verwenden möchten.                                              |
| `09`   | Die Matrixkoeffizienten, die verwendet werden sollen, ebenfalls aus [Abschnitt 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics). Ein Wert von 9 gibt an, dass wir BT.2020 mit variabler Luminanz verwenden möchten; dies ist auch bekannt als BT.2010 YbCbCr.                 |
| `1`    | Der Flag für den vollen Farbraumbereich. Ein Wert von 1 gibt an, dass wir den vollen Farbbereich verwenden möchten.                                                                                                                                                                                  |

Die Dokumentation zu Ihrer Codec-Auswahl bietet wahrscheinlich Informationen, die Sie beim Erstellen Ihres `codecs`-Parameters verwenden werden.

## Siehe auch

- [Leitfaden zu Web-Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Mediencontainerformate (Dateitypen)](/de/docs/Web/Media/Guides/Formats/Containers)
- [Behandlung von Medienunterstützungsproblemen in Webinhalten](/de/docs/Web/Media/Guides/Formats/Support_issues)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- {{RFC(6381)}}: Die Parameter "Codecs" und "Profiles" für "Bucket"-Medientypen
- {{RFC(5334)}}: Ogg-Medientypen
- {{RFC(3839)}}: MIME-Typen-Registrierungen für 3GPP-Multimedia-Dateien
- {{RFC(4381)}}: MIME-Typen-Registrierungen für 3GPP2-Multimedia-Dateien
- {{RFC(4337)}}: MIME-Typen-Registrierungen für MPEG-4
- [Video- und Audiocodecs in Chrome](https://www.chromium.org/audio-video/)

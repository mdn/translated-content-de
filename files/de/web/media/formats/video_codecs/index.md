---
title: Web-Video-Codec-Leitfaden
slug: Web/Media/Formats/Video_codecs
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Dieser Leitfaden führt die Video-Codecs ein, die Sie am häufigsten im Web antreffen oder in Betracht ziehen werden, deren Fähigkeiten zusammenfasst und mögliche Kompatibilitäts- und Nutzungsprobleme aufzeigt, sowie Ratschläge, die Ihnen helfen, den richtigen Codec für das Video Ihres Projekts auszuwählen.

Angesichts der enormen Größe unkomprimierter Videodaten ist es notwendig, diese erheblich zu komprimieren, um sie zu speichern und erst recht, um sie über ein Netzwerk zu übertragen. Stellen Sie sich die Datenmenge vor, die erforderlich ist, um unkomprimiertes Video zu speichern:

- Ein einzelnes Bild eines hochauflösenden Videos (1920x1080) in voller Farbe (4 Bytes pro Pixel) umfasst 8.294.400 Bytes.
- Bei typischen 30 Bildern pro Sekunde würde jede Sekunde HD-Video 248.832.000 Bytes (ca. 249 MB) benötigen.
- Eine Minute HD-Video würde 14,93 GB Speicherplatz benötigen.
- Eine ziemlich typische 30-minütige Videokonferenz würde etwa 447,9 GB Speicherplatz benötigen, und ein 2-stündiger Film würde _fast 1,79 **TB** (das heißt 1790 GB)_ benötigen.

Nicht nur der benötigte Speicherplatz ist enorm, sondern auch die Netzwerkbandbreite, die erforderlich ist, um ein solches unkomprimiertes Video zu übertragen, wäre enorm, bei 249 MB/Sekunde - Audio und Overhead nicht mit eingeschlossen. Hier kommen Video-Codecs ins Spiel. Genau wie Audio-Codecs für die Sounddaten, komprimieren Video-Codecs die Videodaten und kodieren sie in ein Format, das später dekodiert, abgespielt oder bearbeitet werden kann.

Die meisten Video-Codecs sind **verlustbehaftet**, was bedeutet, dass das dekodierte Video nicht genau mit der Quelle übereinstimmt. Einige Details können verloren gehen; der Datenverlust hängt vom Codec und dessen Konfiguration ab, aber als allgemeine Regel gilt: Je mehr Kompression Sie erzielen, desto mehr Detail- und Qualitätsverlust tritt auf. Einige verlustfreie Codecs existieren, aber sie werden in der Regel zur Archivierung und Speicherung für lokale Wiedergaben verwendet, anstatt für die Nutzung in einem Netzwerk.

## Gängige Codecs

Die folgenden Video-Codecs sind die, die am häufigsten im Web verwendet werden. Für jeden Codec sind die Container (Dateitypen) aufgeführt, die sie unterstützen können. Jeder Codec bietet einen Link zu einem Abschnitt darunter, der zusätzliche Details über den Codec bietet, einschließlich spezifischer Fähigkeiten und Kompatibilitätsprobleme, die Sie möglicherweise berücksichtigen müssen.

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
      <td>MPEG-4 Video Elementar-Stream</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-1_part_2_video">MPEG-1</a></th>
      <td>MPEG-1 Teil 2 Visuell</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Teil 2 Visuell</td>
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

Wie bei jedem Encoder gibt es zwei grundlegende Gruppen von Faktoren, die die Größe und Qualität des kodierten Videos beeinflussen: spezifische Details über das Format und den Inhalt des Quellvideos sowie die Eigenschaften und Konfiguration des Codecs, der beim Kodieren des Videos verwendet wird.

Die einfachste Leitlinie lautet: Alles, was das kodierte Video dem Original, unkomprimierten Video ähnlicher macht, vergrößert in der Regel auch die resultierenden Daten. Daher ist es immer ein Kompromiss zwischen Größe und Qualität. In manchen Situationen lohnt es sich, die Qualität zu opfern, um die Datengröße zu reduzieren; manchmal ist der Qualitätsverlust jedoch inakzeptabel, und es ist notwendig, eine Codec-Konfiguration zu akzeptieren, die in einer entsprechend größeren Datei resultiert.

### Einfluss des Quellvideoformats auf das kodierte Ergebnis

Das Ausmaß, in dem das Format des Quellvideos das Ergebnis beeinflusst, variiert je nach Codec und Funktionsweise. Wenn der Codec die Medien in ein internes Pixelformat umwandelt oder das Bild auf eine andere Weise als mit einfachen Pixeln darstellt, spielt das Format des Originalbildes keine Rolle. Dinge wie Bildrate und natürlich Auflösung haben jedoch immer Einfluss auf die Ausgangsgröße der Medien.

Darüber hinaus hat jeder Codec seine Stärken und Schwächen. Einige haben Schwierigkeiten mit bestimmten Formen und Mustern, sind schlecht darin, scharfe Kanten zu reproduzieren, verlieren Details in dunklen Bereichen oder zeigen andere Defizite. Es hängt alles von den zugrunde liegenden Algorithmen und der Mathematik ab.

<table class="standard-table">
  <caption>
    Die potenziellen Auswirkungen des Quellvideoformats und -inhalts auf die
    Qualität und Größe des kodierten Videos
  </caption>
  <thead>
    <tr>
      <th scope="row">Eigenschaft</th>
      <th scope="col">Effekt auf die Qualität</th>
      <th scope="col">Effekt auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Farbtiefe (Bit-Tiefe)</th>
      <td>
        Je höher die Farbtiefe, desto höher ist die Farbtreue im Video. In
        gesättigten Bereichen des Bildes (d. h. dort, wo die Farben rein und
        intensiv sind, wie ein leuchtendes, reines Rot: <code>rgb(255 0 0 / 100%)</code>) erlauben Farbtiefen unter 10 Bit pro Komponente (10-Bit-Farbe) Banding, bei dem Verläufe nicht dargestellt werden können, ohne dass die Farbschritte sichtbar werden.
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
        Beeinflusst hauptsächlich die wahrgenommene Geschmeidigkeit der Bewegung
        im Bild. Bis zu einem gewissen Punkt gilt: Je höher die Bildrate,
        desto flüssiger und realistischer erscheint die Bewegung. Schließlich
        wird der Punkt der abnehmenden Rendite erreicht.
        Siehe <a href="#reduced_frame_rate">Bildrate</a> unten für mehr
        Details.
      </td>
      <td>
        Wenn die Bildrate bei der Kodierung nicht reduziert wird, führen höhere
        Bildraten zu größeren komprimierten Videogrößen.
      </td>
    </tr>
    <tr>
      <th scope="row">Bewegung</th>
      <td>
        Die Kompression von Videos funktioniert in der Regel durch den Vergleich
        von Frames, um Unterschiede zu finden und Datensätze zu erstellen, die
        genügend Informationen enthalten, um den vorherigen Frame zu aktualisieren, so dass er dem folgenden Frame möglichst ähnlich sieht.
        Je mehr aufeinanderfolgende Frames sich voneinander unterscheiden, desto größer werden diese Unterschiede, und desto weniger effektiv ist die Kompression darin, die Einführung von Artefakten in das komprimierte Video zu vermeiden.
      </td>
      <td>
        Die durch Bewegung entstehende Komplexität führt zu größeren
        Zwischenframes wegen der höheren Anzahl an Unterschieden zwischen den
        Frames. Aus diesem und anderen Gründen wird ein Video umso größer,
        je mehr Bewegung es enthält.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen</th>
      <td>
        Bildrauschen (wie Filmkörnungseffekte, Staub oder eine andere Körnigkeit
        des Bildes) führt zu Variabilität. Variabilität erschwert in der Regel
        die Kompression, was zu mehr Qualitätsverlust führt, da Details
        abgeworfen werden müssen, um das gleiche Kompressionsniveau zu erreichen.
      </td>
      <td>
        Je mehr Variabilität—zum Beispiel Rauschen—in dem Bild ist, desto
        komplexer ist der Kompressionsprozess und desto weniger Erfolg wird der
        Algorithmus wahrscheinlich dabei haben, das Bild im selben Maße zu
        komprimieren. Wenn Sie den Encoder nicht so konfigurieren, dass einige
        oder alle Variationen durch Rauschen ignoriert werden, wird das
        komprimierte Video größer.
      </td>
    </tr>
    <tr>
      <th scope="row">Auflösung (Breite und Höhe)</th>
      <td>
        Video mit höherer Auflösung wird auf derselben Bildschirmgröße im
        Allgemeinen besser in der Lage sein, die ursprüngliche Szene genau
        darzustellen, abgesehen von Effekten, die während der Kompression
        entstehen.
      </td>
      <td>
        Je höher die Auflösung eines Videos ist, desto größer wird es.
        Dies spielt eine entscheidende Rolle bei der endgültigen Größe des
        Videos.
      </td>
    </tr>
  </tbody>
</table>

Das Ausmaß, in dem diese Faktoren das resultierende kodierte Video beeinflussen, hängt von den genauen Details der Situation ab, einschließlich des Encoders, den Sie verwenden, und wie er konfiguriert ist. Neben allgemeinen Codec-Optionen kann der Encoder so konfiguriert werden, dass er die Bildrate reduziert, Rauschen bereinigt und/oder die Gesamtauflösung des Videos während der Kodierung reduziert.

### Einfluss der Codec-Konfiguration auf das kodierte Ergebnis

Die zur Videokodierung verwendeten Algorithmen verwenden typischerweise eine oder mehrere allgemeine Techniken, um ihre Kodierung durchzuführen. Im Allgemeinen wird jede Konfigurationsoption, die darauf abzielt, die Ausgabegröße des Videos zu reduzieren, wahrscheinlich negative Auswirkungen auf die Gesamtqualität des Videos haben oder bestimmte Arten von Artefakten in das Video einführen. Es ist auch möglich, eine verlustfreie Form der Kodierung zu wählen, die zu einer viel größeren kodierten Datei führt, aber eine perfekte Reproduktion des Originalvideos beim Dekodieren ermöglicht.

Darüber hinaus kann jede Encoder-Software Unterschiede in der Verarbeitung des Quellvideos aufweisen, was zu Unterschieden in der Ausgabequalität und/oder -größe führen kann.

<table class="standard-table">
  <caption>
    Auswirkungen der Videokodierer-Konfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Eigenschaft</th>
      <th scope="col">Effekt auf die Qualität</th>
      <th scope="col">Effekt auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Verlustfreie Kompression</th>
      <td>Kein Qualitätsverlust</td>
      <td>
        Verlustfreie Kompression kann die Gesamtvideogröße bei weitem nicht so
        stark reduzieren wie verlustbehaftete Kompression; die resultierenden
        Dateien sind wahrscheinlich immer noch zu groß für die allgemeine
        Nutzung.
      </td>
    </tr>
    <tr>
      <th scope="row">Verlustbehaftete Kompression</th>
      <td>
        In gewissem Maße werden Artefakte und andere Formen der
        Qualitätsverschlechterung auftreten, abhängig vom spezifischen Codec
        und davon, wie viel Kompression angewendet wird.
      </td>
      <td>
        Je mehr das kodierte Video von der Quelle abweichen darf, desto
        einfacher ist es, höhere Kompressionsraten zu erreichen.
      </td>
    </tr>
    <tr>
      <th scope="row">Einstellung der Qualität</th>
      <td>
        Je höher die Einstellung der Qualität ist, desto mehr gleicht das
        kodierte Video dem Originalmedium.
      </td>
      <td>
        Im Allgemeinen führen höhere Qualitätseinstellungen zu größeren
        kodierten Videodateien; das Ausmaß, in dem dies zutrifft, variiert
        je nach Codec.
      </td>
    </tr>
    <tr>
      <th scope="row">Bitrate</th>
      <td>
        Die Qualität verbessert sich im Allgemeinen bei höheren Bitraten.
      </td>
      <td>Höhere Bitraten führen naturgemäß zu größeren Ausgabedateien.</td>
    </tr>
  </tbody>
</table>

Die Optionen, die beim Kodieren von Videos verfügbar sind, sowie die Werte, die diesen Optionen zugewiesen werden, variieren nicht nur von Codec zu Codec, sondern auch je nach der Codierungssoftware, die Sie verwenden. Die Dokumentation zu Ihrer Codierungssoftware wird Ihnen helfen, die spezifischen Auswirkungen dieser Optionen auf das kodierte Video zu verstehen.

## Kompressionsartefakte

**Artefakte** sind Nebeneffekte eines verlustbehafteten Kodierungsprozesses, bei dem die verlorenen oder neu angeordneten Daten zu sichtbaren negativen Effekten führen. Sobald ein Artefakt aufgetreten ist, kann es eine Weile bestehen bleiben, aufgrund der Art und Weise, wie Video angezeigt wird. Jedes Videoframe wird präsentiert, indem eine Reihe von Änderungen auf das derzeit sichtbare Frame angewandt wird. Das bedeutet, dass Fehler oder Artefakte sich mit der Zeit häufen, was zu Störungen oder anderweitig merkwürdigen oder unerwarteten Abweichungen im Bild führt, die sich einige Zeit halten.

Um dies zu beheben und die Suchzeit durch die Videodaten zu verbessern, werden periodisch **Schlüsselframes** (auch bekannt als **Intra-Frames** oder **I-Frames**) in die Videodatei eingefügt. Die Schlüsselframes sind vollständige Frames, die verwendet werden, um sichtbare Schäden oder Artefaktreste zu reparieren.

### Aliasing

Aliasing ist ein allgemeiner Begriff für alles, das beim Rekonstruieren aus den kodierten Daten nicht genauso aussieht wie vor der Kompression. Es gibt viele Formen von Aliasing; einige der häufigsten, die Sie vielleicht sehen, sind:

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
          ist ein großflächiges räumliches Interferenzmuster, das entsteht, wenn ein Muster im Quellbild und die Art und Weise, wie der Encoder arbeitet, räumlich leicht versetzt sind. Die durch den Encoder erzeugten Artefakte führen dann zu seltsamen, wirbelnden Effekten im Muster des Quellbildes beim Dekodieren.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="eine Ziegelwand zeigt einen wirbelnden Effekt ähnlich Wellen durch das Moiré-Muster" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Treppeffekt</h4>
        <p>
          Der <strong>Treppeffekt</strong> ist ein räumliches Artefakt, das auftritt, wenn diagonale gerade oder gebogene Kanten, die glatt sein sollten, ein gezacktes Aussehen annehmen, das ein wenig aussieht wie eine Treppe. Dieser Effekt wird durch "Anti-Aliasing"-Filter reduziert.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Foto von diagonalen Linien, die durch Aliasing wie eine Treppe aussehen
          " src="staircase-effect.jpg"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wageneffekt</h4>
        <p>
          Der <strong>Wageneffekt</strong> (oder
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboskopischer Effekt</a></strong
          >) ist der visuelle Effekt, der häufig in Filmen zu sehen ist, bei dem ein drehendes Rad bei einer falschen Geschwindigkeit oder sogar rückwärts zu rotieren scheint, aufgrund einer Interaktion zwischen der Bildrate und dem Kompressionsalgorithmus. Der gleiche Effekt kann bei jedem sich wiederholenden Muster auftreten, das sich bewegt, wie bei den Bindern einer Eisenbahnlinie, Pfosten entlang der Straße, usw. Dies ist ein zeitliches (zeitbasiertes) Aliasing-Problem; die Geschwindigkeit der Drehung stört die Frequenz der während der Kompression oder Kodierung vorgenommenen Abtastung.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Drehendes Rad durch Aliasing, das einen Wageneffekt verursacht." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Farbsaum

**Farbsaum** ist eine Art visuelles Artefakt, das sich als ungewollte Farben entlang der Ränder von farbigen Objekten in der Szene zeigt. Diese Farben haben keine beabsichtigte Farbbeziehung zum Inhalt des Frames.

### Verlust der Schärfe

Der Akt des Entfernens von Daten im Prozess der Videokodierung erfordert, dass einige Details verloren gehen. Durch ausreichende Kompression könnten Teile des Bildes oder das gesamte Bild an Schärfe verlieren, was zu einer leicht verschwommenen oder vernebelten Erscheinung führt.

Verlorene Schärfe kann es schwierig machen, Text im Bild zu lesen, da Text—insbesondere kleiner Text—sehr detailorientierter Inhalt ist, bei dem geringfügige Änderungen die Lesbarkeit erheblich beeinträchtigen können.

### Klingeln

Verlustbehaftete Kompressionsalgorithmen können **[Klingeln](https://en.wikipedia.org/wiki/Ringing_artifacts)** einführen, einen Effekt, bei dem Bereiche außerhalb eines Objekts mit farbigen Pixeln kontaminiert werden, die durch den Kompressionsalgorithmus erzeugt wurden. Dies geschieht, wenn ein Algorithmus verwendet wird, der Blöcke verwendet, die sich über eine scharfe Grenze zwischen einem Objekt und seinem Hintergrund erstrecken. Dies ist besonders häufig bei höheren Kompressionsstufen.

![Beispiel eines Klingeleffekts](ringing-effects.png)

Beachten Sie die blauen und rosa Fransen um die Kanten des Sterns oben (sowie die Abstufung und andere signifikante Kompressionsartefakte). Diese Fransen sind der Klingeleffekt. In gewisser Hinsicht ähnelt das Klingeln dem [Moskito-Rauschen](#moskito-rauschen), außer dass der Klingeleffekt mehr oder weniger stetig und unverändert ist, während Moskito-Rauschen flimmert und sich bewegt.

Klingeln ist eine weitere Art von Artefakt, die es besonders schwierig machen kann, Text in Ihren Bildern zu lesen.

### Posterisieren

**Posterisieren** tritt auf, wenn die Kompression zu einem Verlust an Farbdetaillierung in Verläufen führt. Statt sanfter Übergänge durch die verschiedenen Farben in einem Bereich wird das Bild blockartig, mit Farbklecksen, die das ursprüngliche Erscheinungsbild des Bildes annähernd wiedergeben.

![Foto eines Weißkopfadlers mit fleckiger Auflösung.](posterize-effect.jpg)

Beachten Sie die Blockigkeit der Farben im Gefieder des Weißkopfadlers im oberen Foto (und der Schneeeule im Hintergrund). Die Details der Federn sind weitgehend verloren aufgrund dieser Posterisationsartefakte.

### Konturierung

**Konturierung** oder **Farbstreifenbildung** ist eine bestimmte Form von Posterisierung, bei der die Farbblöcke Bänder oder Streifen im Bild bilden. Dies tritt auf, wenn das Video mit einer zu groben Quantisierungskonfiguration kodiert wird. Infolgedessen zeigt der Videoinhalt einen "geschichteten" Look, bei dem die Übergänge von Farbe zu Farbe abrupt sind und Streifen von Farbe erscheinen.

![Beispiel eines Bildes, dessen Kompression Konturen eingeführt hat](contouring-effect.jpg)

In dem obigen Beispielbild ist zu erkennen, dass der Himmel Bänder aus verschiedenen Blautönen hat, anstatt ein konsistenter Gradient zu sein, wie sich die Himmelsfarbe in Richtung Horizont ändert. Dies ist der Konturiereffekt.

### Moskito-Rauschen

**Moskito-Rauschen** ist ein zeitliches Artefakt, das als Rauschen oder **Kantenglück** präsentiert wird, das als flimmernde Unschärfe oder Schimmern erscheint, das grob den Kanten von Objekten mit harten Kanten oder scharfen Übergängen zwischen Vordergrundobjekten und dem Hintergrund folgt. Der Effekt kann dem [Klingeln](#klingeln) ähneln.

![Beispiel eines Bildes, dessen Kompression Moskito-Rauschen eingeführt hat.](mosquito-effect-sm.png)

Das oben gezeigte Foto zeigt Moskito-Rauschen an mehreren Stellen, einschließlich des Himmels um die Brücke herum. In der oberen rechten Ecke zeigt ein Inset eine Nahaufnahme eines Bildausschnitts, der Moskito-Rauschen aufweist.

Moskito-Rausch-Artefakte kommen am häufigsten in MPEG-Videos vor, können jedoch auftreten, wenn ein Algorithmus zur diskreten Kosinustransformation (DCT) verwendet wird; dies umfasst z.B. JPEG-Standbilder.

### Bewegungsentschädigungs-Blockrand-Artefakte

Die Kompression von Videomaterial erfolgt in der Regel durch den Vergleich zweier Bilder, wobei die Unterschiede zwischen ihnen nacheinander, Bild für Bild, bis zum Ende des Videos aufgezeichnet werden. Diese Technik funktioniert gut, wenn die Kamera fest steht oder die Objekte im Bild relativ stationär sind, aber wenn es viel Bewegung im Bild gibt, können die Unterschiede zwischen den Bildern so groß sein, dass die Kompression nicht mehr sinnvoll ist.

**[Bewegungskompensation](https://de.wikipedia.org/wiki/Bewegungskompensation)** ist eine Technik, die nach Bewegungen (entweder der Kamera oder der Objekte im Bild) sucht und bestimmt, um wie viele Pixel sich das bewegte Objekt in jede Richtung bewegt hat. Dann wird diese Verschiebung gespeichert, zusammen mit einer Beschreibung der Pixel, die bewegt wurden und die nicht einfach durch diese Verschiebung beschrieben werden können. Im Wesentlichen sucht der Encoder nach den sich bewegenden Objekten und erstellt eine interne Art von Bild, das so aussieht wie das Original, jedoch mit allen Objekten an ihren neuen Positionen verschoben. Diese annähert das Aussehen des neuen Bildes. Abschließend werden die verbleibenden Unterschiede gefunden, und das Set aus Objektverschiebungen und das Set aus Pixeldifferenzen werden in den Daten des neuen Frames gespeichert. Dieses Objekt, das die Verschiebung und die Pixeldifferenzen beschreibt, nennt man **Restbild**.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Ursprünglicher Frame</th>
      <th scope="col" style="width: 216px">Inter-Frame-Unterschiede</th>
      <th scope="col" style="width: 216px">
        Unterschiede nach Bewegungskompensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Originalrahmen des Videos" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Unterschiede zwischen dem ersten und dem folgenden Frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Unterschiede zwischen den Frames nach der Verschiebung um zwei Pixel nach rechts"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Das erste vollständige Bild wie vom Betrachter gesehen.
      </td>
      <td style="vertical-align: top">
        Hier sind nur die Unterschiede zwischen dem ersten Frame und dem
        folgenden Frame zu sehen. Alles andere ist schwarz. Bei genauem
        Hinsehen ist zu erkennen, dass die Mehrheit dieser Unterschiede durch
        eine horizontale Kamerabewegung entstehen, wodurch dies ein guter
        Kandidat für Bewegungsentschädigung ist.
      </td>
      <td style="vertical-align: top">
        Um die Anzahl der unterschiedlichen Pixel zu minimieren, berücksichtigen
        wir hier die Kameraschwenks, indem wir zuerst den ersten Frame um zwei
        Pixel nach rechts verschieben und dann die Differenz nehmen. Dies
        kompensiert die Kameraschwenks und ermöglicht mehr Überlappung zwischen
        den beiden Frames.
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

Es gibt zwei Arten der Bewegungskompensation: **globale Bewegungskompensation** und **Blockbewegungskompensation**. Die globale Bewegungskompensation passt in der Regel die Kamerabewegungen wie Verfolgungsfahrten, Dolly-Bewegungen, Schwenken, Neigen, Rollen sowie Bewegungen nach oben und unten an. Die Blockbewegungskompensation behandelt lokale Änderungen und sucht nach kleineren Abschnitten des Bildes, die mit Bewegungskompensation kodiert werden können. Diese Blöcke sind normalerweise von fester Größe, in einem Raster, aber es gibt Formen der Bewegungskompensation, die variable Blockgrößen ermöglichen und sogar Blöcke erlauben, sich zu überlappen.

Es gibt jedoch Artefakte, die durch Bewegungsentschädigung auftreten können. Diese treten entlang von Blockgrenzen in Form scharfer Kanten auf, die falsches Klingeln und andere Kanteneffekte erzeugen. Diese entstehen durch die Mathematik, die bei der Kodierung der Restbilder zum Einsatz kommt, und können leicht bemerkt werden, bevor sie durch den nächsten Schlüsselrahmen repariert werden.

### Reduzierte Bildgröße

In bestimmten Situationen kann es nützlich sein, die Abmessungen des Videos zu verkleinern, um die endgültige Dateigröße des Videos zu verbessern. Auch wenn der sofortige Verlust an Größe oder Flüssigkeit der Wiedergabe ein negativer Faktor sein kann, kann durch sorgfältige Entscheidung ein gutes Endergebnis erzielt werden. Wenn ein 1080p-Video vor der Kodierung auf 720p reduziert wird, kann das resultierende Video erheblich kleiner sein, während es eine viel höhere visuelle Qualität aufweist; selbst nach dem Hochskalieren während der Wiedergabe könnte das Ergebnis besser sein, als das Originalvideo in voller Größe zu kodieren und den erforderlichen Qualitätseinbußen zu akzeptieren, um Ihre Größenanforderungen zu erfüllen.

### Reduzierte Bildrate

Ähnlich können Sie Frames aus dem Video entfernen und die Bildrate entsprechend verringern. Dies hat zwei Vorteile: Es macht das gesamte Video kleiner, und diese kleinere Größe ermöglicht der Bewegungskompensation, noch mehr für Sie zu leisten. Statt Bewegungunterschiede für zwei Frames zu berechnen, die aufgrund von Bewegungen zwischen den Frames zwei Pixel auseinanderliegen, könnte das Überspringen jedes anderen Frames dazu führen, dass ein Unterschied berechnet wird, der einer Bewegung von vier Pixeln entspricht. Dies lässt die gesamte Kamerabewegung durch weniger Restframes darstellen.

Die absolute Mindestbildrate, die ein Video haben kann, bevor sein Inhalt vom menschlichen Auge nicht mehr als Bewegung wahrgenommen wird, beträgt etwa 12 Bilder pro Sekunde. Darunter wird das Video zu einem Stillbild. Kinofilme verwenden normalerweise 24 Bilder pro Sekunde, während Standard-Definition-Fernsehen etwa 30 Bilder pro Sekunde hat (etwas weniger, aber nah genug) und High-Definition-Fernsehen zwischen 24 und 60 Bildern pro Sekunde. Alles von 24 FPS aufwärts wird im Allgemeinen als zufriedenstellend flüssig empfunden; 30 oder 60 FPS sind ein ideales Ziel, je nach Ihren Bedürfnissen.

Letztendlich liegt es ganz bei Ihnen und/oder Ihrem Designteam, Entscheidungen darüber zu treffen, welche Opfer Sie bringen können.

## Codec-Details

### AV1

Der **AOMedia Video 1** (**AV1**) Codec ist ein offenes Format, das von der [Alliance for Open Media](https://aomedia.org/) speziell für Internetvideo entwickelt wurde. Es erreicht höhere Datenkompressionsraten als [VP9](#vp9) und [H.265/HEVC](#hevc_h.265), und bis zu 50% höhere Raten als [AVC](#avc_h.264). AV1 ist vollständig lizenzfrei und ist für die Verwendung sowohl im {{HTMLElement("video")}}-Element als auch von [WebRTC](/de/docs/Web/API/WebRTC_API) konzipiert.

AV1 bietet derzeit drei Profile: **main**, **high** und **professional**, die jeweils eine zunehmende Unterstützung für Farbtiefen und Chroma-Subsampling bieten. Darüber hinaus wird eine Reihe von **Levels** spezifiziert, die jeweils Beschränkungen für eine Reihe von Attributen des Videos definieren. Diese Attribute umfassen Bilddimensionen, Bildfläche in Pixeln, Anzeige- und Dekodierungsraten, durchschnittliche und maximale Bitraten sowie Begrenzungen der Anzahl der Kacheln und Kachelspalten, die bei der Kodierung/Dekodierung verwendet werden.

Zum Beispiel bietet AV1 Level 2.0 eine maximale Bildbreite von 2048 Pixeln und eine maximale Höhe von 1152 Pixeln, aber die maximale Bildgröße in Pixeln beträgt 147.456, sodass Sie tatsächlich kein 2048x1152 Video auf Level 2.0 haben können. Es ist jedoch erwähnenswert, dass zumindest für Firefox und Chrome die Levels derzeit tatsächlich ignoriert werden, wenn eine Software-Dekodierung durchgeführt wird, und der Dekodierer einfach versucht, das Video so gut wie möglich mit den bereitgestellten Einstellungen abzuspielen. Aus Kompatibilitätsgründen in der Zukunft sollten Sie jedoch innerhalb der Grenzwerte des Levels bleiben, das Sie wählen.

Der Hauptnachteil von AV1 besteht derzeit darin, dass es sehr neu ist und die Unterstützung noch in der Integration in die meisten Browser steckt. Darüber hinaus werden Encoder und Decoder noch immer auf Leistung optimiert, und Hardware-Encoder und -Decoder befinden sich größtenteils noch in der Entwicklung statt in der Produktion. Aus diesem Grund dauert das Kodieren eines Videos in das AV1-Format sehr lange, da die gesamte Arbeit softwareseitig erfolgt.

Auf kurze Sicht ist AV1 aus diesen Gründen noch nicht bereit, Ihre erste Wahl als Videocodec zu sein, aber Sie sollten darauf achten, es in Zukunft einsatzbereit zu machen.

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
            >Tabellen der Level</a> in der AV1-Spezifikation, die die maximalen
          Auflösungen und Raten auf jedem Level beschreiben.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>
        Abhängig vom Level; zum Beispiel hat Level 2.0 ein Maximum von 30 FPS,
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
        8 x 8 Pixel bis 65.535 x 65.535 Pixel, wobei jede Dimension jeden Wert
        zwischen diesen annehmen kann
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
        <a href="https://de.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
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
      <td>Lizenzfrei, offener Standard</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

Der **Advanced Video Coding** (**AVC**) Standard der MPEG-4-Spezifikation wird durch die identische ITU H.264-Spezifikation und die MPEG-4 Part 10-Spezifikation spezifiziert. Er ist ein auf Bewegungskompensation basierender Codec, der heutzutage weit verbreitet ist für alle Arten von Medien, einschließlich Rundfunkfernsehen, {{Glossary("RTP", "RTP")}}-Videokonferenzen und als Video-Codec für Blu-Ray-Discs.

AVC ist sehr flexibel, mit einer Reihe von Profilen mit unterschiedlichen Fähigkeiten; zum Beispiel ist das Constrained Baseline Profile für Videokonferenzen und mobile Szenarien konzipiert, die weniger Bandbreite verwenden als das Main Profile (das in einigen Regionen für das Standard-Definition-Digitalfernsehen verwendet wird) oder das High Profile (das für Blu-Ray Disc-Videos verwendet wird). Die meisten Profile verwenden 8-Bit-Farbkomponenten und 4:2:0 Chroma-Subsampling. Das High 10 Profile fügt Unterstützung für 10-Bit-Farben hinzu, und erweiterte Formen von High 10 fügen 4:2:2 und 4:4:4 Chroma-Subsampling hinzu.

AVC hat auch spezielle Funktionen wie die Unterstützung für mehrere Ansichten derselben Szene (Multiview Video Coding), die unter anderem die Produktion von stereoskopischem Video ermöglicht.

AVC ist jedoch ein proprietäres Format und zahlreiche Patente im Zusammenhang mit seinen Technologien sind im Besitz mehrerer Parteien. Die kommerzielle Nutzung von AVC-Medien erfordert eine Lizenz, obwohl das Via LA Patent-Pool keine Lizenzgebühren für das Streamen von Internetvideos im AVC-Format verlangt, solange das Video für Endbenutzer kostenlos ist.

Nicht-Webbrowser-Implementierungen von WebRTC (jede Implementierung, die nicht die JavaScript-APIs enthält) sind _verpflichtet_, AVC als Codec in WebRTC-Anrufen zu unterstützen. Während Webbrowser nicht verpflichtet sind, dies zu tun, tun dies einige.

In HTML-Inhalten für Webbrowser ist AVC breit kompatibel und viele Plattformen unterstützen die Hardware-Kodierung und -Dekodierung von AVC-Medien. Beachten Sie jedoch die [Lizenzanforderungen](https://www.via-la.com/licensing-2/avc-h-264/), bevor Sie sich entscheiden, AVC in Ihrem Projekt zu verwenden!

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
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
          >DCT-basierter Algorithmus</a
        >, obwohl es möglich ist, verlustfreie Makroblöcke innerhalb des Bildes
        zu erstellen
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
        Ja; <a href="https://de.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> oder
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
          Die Unterstützung von Firefox für AVC hängt von den integrierten oder
          vorinstallierten Codecs des Betriebssystems für AVC und dessen
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
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### H.263

Der **H.263** Codec der ITU wurde hauptsächlich für den Einsatz in Situationen mit geringer Bandbreite entwickelt. Insbesondere konzentriert sich sein Einsatz auf Videokonferenzen über PSTN (Public Switched Telephone Networks), {{Glossary("RTSP", "RTSP")}} und SIP (IP-basierte Videokonferenzsysteme). Trotz der Optimierung für Netzwerke mit geringer Bandbreite ist es relativ CPU-intensive und kann auf Computern mit geringerer Leistung möglicherweise nicht gut genug arbeiten. Das Datenformat ist ähnlich wie das von MPEG-4 Teil 2.

H.263 wurde nie weit auf dem Internet verwendet. Varianten von H.263 wurden als Grundlage für andere proprietäre Formate verwendet, wie z.B. Flash-Video oder den Sorenson-Codec. Allerdings hat kein großer Browser jemals von Haus aus Unterstützung für H.263 enthalten. Bestimmte Medien-Plugins haben Unterstützung für H.263-Medien ermöglicht.

Anders als bei den meisten Codecs definiert H.263 die Grundlagen eines kodierten Videos in Bezug auf die maximale Bitrate pro Bild (Bild), oder **BPPmaxKb**. Bei der Kodierung wird ein Wert für BPPmaxKb ausgewählt, und das Video kann diesen Wert für jedes Bild nicht überschreiten. Die endgültige Bitrate hängt von diesem, der Bildrate, der Kompression und der gewählten Auflösung und Blockformat ab.

H.263 wurde durch H.264 ersetzt und wird daher als ein altmodisches Medienformat angesehen, das Sie im Allgemeinen vermeiden sollten, wenn Sie können. Der einzige wirkliche Grund, H.263 in neuen Projekten zu verwenden, wäre, wenn Sie Unterstützung auf sehr alten Geräten benötigen, auf denen H.263 Ihre beste Wahl ist.

H.263 ist ein proprietäres Format, mit [Patenten](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242), die von einer Reihe von Organisationen und Unternehmen gehalten werden, einschließlich Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm, und so weiter. Um H.263 zu verwenden, sind Sie gesetzlich verpflichtet, die entsprechenden Lizenzen zu erhalten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Unbeschränkt, normalerweise jedoch unter 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>
        <p>Bis zu 1408 x 1152 Pixel.</p>
        <p>
          Version 1 von H.263 spezifiziert eine Reihe von unterstützten
          Bildgrößen. Spätere Versionen können zusätzliche Auflösungen
          unterstützen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        YCbCr; jedes Bildformat (sub-QCIF, QCIF, CIF, 4CIF oder 16CIF) definiert
        die Bildgröße in Pixeln sowie die Anzahl der Zeilen, die bei jedem Bild
        an Luminanz- und Chrominanzmustern verwendet werden.
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
        Proprietär; entsprechende Lizenz oder Lizenzen sind erforderlich.
        Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

Der **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) Codec wird durch die ITU **H.265** sowie durch MPEG-H Teil 2 (das noch in Entwicklung befindliche Nachfolgeprojekt zu MPEG-4) definiert. HEVC wurde entwickelt, um effizientes Kodieren und Dekodieren von Video in Größen, einschließlich sehr hoher Auflösungen (einschließlich 8K Video), mit einer Struktur, die speziell entwickelt wurde, damit Software moderne Prozessoren nutzen kann. Theoretisch kann HEVC komprimierte Dateigrößen auf die Hälfte von denen von [AVC](#avc_h.264) reduzieren, jedoch mit vergleichbarer Bildqualität.

Zum Beispiel besteht jede Kodierbaum-Einheit (CTU)—ähnlich dem Makroblock, der in vorherigen Codecs verwendet wurde—aus einem Baum von Luma-Werten für jede Probe sowie einem Baum von Chroma-Werten für jede Chromaprobe, die in derselben Kodierbaum-Einheit verwendet wird, sowie den erforderlichen Syntaxelementen. Diese Struktur unterstützt eine einfache Verarbeitung durch mehrere Kerne.

Ein interessantes Merkmal von HEVC ist, dass das Hauptprofil nur 8-bit pro Komponente Farbe mit 4:2:0 Chroma-Subsampling unterstützt. Ebenso interessant ist, dass 4:4:4 Video speziell behandelt wird. Anstelle der Luma-Proben (die die Pixel des Bildes in Graustufen darstellen) und der Cb und Cr Proben (die anzeigen, wie die Grautöne verändert werden müssen, um Farbpixel zu erzeugen), werden die drei Kanäle stattdessen als drei monochrome Bilder behandelt, eines für jede Farbe, die dann während des Renderings kombiniert werden, um ein vollfarbiges Bild zu erzeugen.

HEVC ist ein proprietäres Format und von einer Reihe von Patenten abgedeckt. Die Lizenzierung wird von Via LA verwaltet; Gebühren werden an Entwickler statt an Inhaltsersteller und -vertreiber erhoben. Stellen Sie sicher, dass Sie die neuesten Lizenzbedingungen und Anforderungen überprüfen, bevor Sie eine Entscheidung treffen, ob Sie HEVC in Ihrer App oder Website verwenden möchten!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 800,000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Variiert je nach Level; bis zu 300 FPS sind möglich</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>128 x 96 bis 8,192 x 4,320 Pixel; variiert je nach Profil und Trefferquote</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Informationen unten werden für die wichtigsten Profile bereitgestellt. Es gibt eine Reihe weiterer Profile, die hier nicht enthalten sind.
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
              <td>Nein</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome unterstützt HEVC für Geräte mit Hardware-Unterstützung auf Windows 8+, Linux und ChromeOS, für alle Geräte auf macOS Big Sur 11+ und Android 5.0+.</p>
        <p>Edge (Chromium) unterstützt HEVC für Geräte mit Hardware-Unterstützung auf Windows 10 1709+, wenn
          <a href="https://apps.microsoft.com/detail/9nmzlz57r3t7">HEVC-Videoerweiterungen aus dem Microsoft Store</a>
          installiert sind, und hat denselben Unterstützungsstatus wie Chrome auf anderen Plattformen. Edge (Legacy) unterstützt HEVC nur für Geräte mit einem Hardware-Decodierer.
        </p>
        <p>Mozilla unterstützt HEVC nicht, solange es durch Patente belastet ist.</p>
        <p>Opera und andere Chromium-basierte Browser haben denselben Unterstützungsstatus wie Chrome.</p>
        <p>Safari unterstützt HEVC für alle Geräte auf macOS High Sierra oder höher.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>
        <a href="https://de.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
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
          >Lizenzierungsanforderungen</a
        >. Beachten Sie, dass mehrere Patentpools zutreffen können.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

Das Format **MPEG-4 Video Elementar-Stream** (**MP4V-ES**) ist Teil des MPEG-4 Teil 2 Visual-Standards. Während im Allgemeinen MPEG-4 Teil 2 Video von niemandem verwendet wird, da es keinen überzeugenden Wert im Vergleich zu anderen Codecs hat, hat MP4V-ES einige Anwendungen auf mobilen Geräten. MP4V ist im Wesentlichen H.263-Kodierung in einem MPEG-4-Container.

Sein Hauptzweck ist es, verwendet zu werden, um MPEG-4 Audio und Video über eine {{Glossary("RTP", "RTP")}} Sitzung zu streamen. MP4V-ES wird jedoch auch verwendet, um MPEG-4 Audio und Video über eine mobile Verbindung mit [3GP](/de/docs/Web/Media/Formats/Containers#3gp) zu übertragen.

Sie werden dieses Format höchstwahrscheinlich nicht verwenden wollen, da es in bedeutendem Umfang von keinem großen Browser unterstützt wird und ziemlich veraltet ist. Dateien dieses Typs sollten die Erweiterung `.mp4v` haben, werden jedoch manchmal fälschlicherweise als `.mp4` bezeichnet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>5 kbps bis 1 Gbps oder mehr</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildraten</th>
      <td>Keine spezifische Grenze; nur durch die Datenrate eingeschränkt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
          >DCT-basierter Algorithmus</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Bildgrößen</th>
      <td>Bis zu 4096 x 4096 Pixel</td>
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
          >erhalten Sie eine Lizenz</a
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

### MPEG-1 Teil 2 Video

**MPEG-1 Teil 2 Video** wurde Anfang der 1990er Jahre vorgestellt. Im Gegensatz zu den späteren MPEG-Videostandards wurde MPEG-1 ausschließlich von MPEG erstellt, ohne die Mitwirkung der {{Glossary("ITU", "ITU")}}.

Da jeder MPEG-2-Dekodierer auch MPEG-1-Video abspielen kann, ist es mit einer Vielzahl von Software- und Hardware-Geräten kompatibel. Es gibt keine aktiven Patente im Zusammenhang mit MPEG-1-Video, sodass es ohne Lizenzierung verwendet werden kann. Allerdings unterstützen nur wenige Webbrowser MPEG-1-Video ohne die Unterstützung eines Plugins, und da die Nutzung von Plugins in Webbrowsern abgelehnt wird, sind diese im Allgemeinen nicht mehr verfügbar. Dies macht MPEG-1 zu einer schlechten Wahl für den Einsatz auf Websites und in Webanwendungen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Bis zu 1.5 Mbps</td>
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
        <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinustransformation"
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
        Y'CbCr mit 4:2:0 Chroma-Subsampling mit bis zu 12 Bit pro Komponente
      </td>
    </tr>
    <tr>
      <th scope="row">HDR-Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bildrate (VFR)</th>
      <td>Nein

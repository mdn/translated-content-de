---
title: Web Audio Codec Leitfaden
slug: Web/Media/Formats/Audio_codecs
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Selbst moderat hochwertige, hochaufgelöste Stereoklänge können eine erhebliche Menge Speicherplatz beanspruchen. Für Webentwickler ist noch wichtiger der benötigte Netzwerk-Bandbreitenverbrauch, um Audio zu übertragen, sei es für Streaming oder um es für die Nutzung während des Spielens herunterzuladen. Die Verarbeitung von Audiodaten zur Kodierung und Dekodierung wird von einem Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DEC**oder) gehandhabt. In diesem Artikel betrachten wir Audio-Codecs, die im Web verwendet werden, um Audio zu komprimieren und zu dekomprimieren, welche Fähigkeiten und Anwendungsfälle sie haben und geben Ihnen Hinweise, wie Sie Audio-Codecs für Ihre Inhalte auswählen können.

Darüber hinaus verwenden WebRTC-Implementierungen in der Regel eine Untergruppe dieser Codecs für ihre Kodierung und Dekodierung von Medien und können auch zusätzliche Codecs unterstützen, um optimalen plattformübergreifenden Support für Video- und Audiokonferenzen zu bieten und besser mit bestehenden Telekommunikationslösungen zu integrieren. Siehe [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details.

Für Informationen über die grundlegenden Konzepte hinter der Funktionsweise von digitalem Audio lesen Sie den Artikel [Digital Audio Konzepte](/de/docs/Web/Media/Formats/Audio_concepts).

## Allgemeine Codecs

Die folgende Liste zeigt die Codecs, die am häufigsten im Web verwendet werden, und welche Container (Dateitypen) sie unterstützen. Wenn Sie nur wissen müssen, welche Codecs nutzbar sind, ist dies für Sie. Natürlich können einzelne Browser entscheiden, nicht alle dieser Codecs zu unterstützen, und ihre Unterstützung für welche Container-Typen diese verwenden können, kann ebenfalls variieren. Darüber hinaus können Browser sich entscheiden, zusätzliche Codecs zu unterstützen, die nicht in dieser Liste enthalten sind.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
      <th scope="col">Voller Codec-Name</th>
      <th scope="col">Container-Unterstützung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#aac_advanced_audio_coding">AAC</a></th>
      <td>Advanced Audio Coding</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#adts">ADTS</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#alac_apple_lossless_audio_codec">ALAC</a></th>
      <td>Apple Lossless Audio Codec</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
        (MOV)
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#amr_adaptive_multi-rate">AMR</a></th>
      <td>Adaptive Multi-Rate</td>
      <td><a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#flac_free_lossless_audio_codec">FLAC</a></th>
      <td>Free Lossless Audio Codec</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#flac">FLAC</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="#g.711_pulse_code_modulation_of_voice_frequencies">G.711</a>
      </th>
      <td>Puls-Code-Modulation (PCM) von Sprachfrequenzen</td>
      <td>
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#g.722_64_kbps_7_khz_audio_coding">G.722</a></th>
      <td>
        7 kHz Audio-Codierung bei 64 kbps (für Telefonie/{{Glossary("VoIP", "VoIP")}})
      </td>
      <td>
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mp3_mpeg-1_audio_layer_iii">MP3</a></th>
      <td>MPEG-1 Audio Layer III</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#adts">ADTS</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>
        <p>
          Wenn MPEG-1 Audio Layer III Codec-Daten in einer MPEG-Datei gespeichert werden und es in der Datei keine Videospur gibt, wird die Datei normalerweise als MP3-Datei bezeichnet, obwohl es sich immer noch um eine MPEG-Formatdatei handelt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#opus">Opus</a></th>
      <td>Opus</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#vorbis">Vorbis</a></th>
      <td>Vorbis</td>
      <td>
        <a href="/de/docs/Web/Media/Formats/Containers#webm">WebM</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#ogg">Ogg</a>
      </td>
    </tr>
  </tbody>
</table>

## Faktoren, die das kodierte Audio beeinflussen

Es gibt zwei allgemeine Kategorien von Faktoren, die das kodierte Audio beeinflussen, das von einem Encoder eines Audio-Codecs ausgegeben wird: Details über das Quell-Audioformat und den Inhalt sowie den Codec und seine Konfiguration während des Kodierungsprozesses.

Für jeden Faktor, der das kodierte Audio beeinflusst, gibt es eine einfache Regel, die fast immer zutrifft: Da die Wiedergabetreue digitaler Audiodaten von der Granularität und Präzision der zur Konvertierung in einen Datenstrom genommenen Samples bestimmt wird, je mehr Daten verwendet werden, um die digitale Version des Audios darzustellen, desto näher wird der aufgenommene Ton dem Quellmaterial entsprechen.

### Der Einfluss des Quell-Audioformats auf die kodierte Audioausgabe

Da kodiertes Audio von Natur aus weniger Bits verwendet, um jedes Sample darzustellen, hat das Quell-Audioformat möglicherweise weniger Einfluss auf die Größe des kodierten Audios als man erwarten könnte. Allerdings beeinflussen immer noch eine Reihe von Faktoren die Qualität und Größe des kodierten Audios. Die folgende Tabelle listet eine Reihe von Schlüsselfaktoren des Quell-Audio-Dateiformats und deren Einfluss auf das kodierte Audio auf.

<table class="standard-table">
  <caption>
    Der Einfluss des Quell-Audioformats und des Inhalts auf die Qualität und Größe des kodierten Audios
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
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#audio_data_format_and_structure"
          >Kanälenzahl</a
        >
      </th>
      <td>
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der Richtung, nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die kodierte Audiogröße erheblich erhöhen, abhängig vom Inhalt und den Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
        Unerwünschtes Hintergrundrauschen oder Zischen neigt dazu, die Audioqualität sowohl direkt (durch Überdeckung von Details des Vordergrund-Audios) als auch indirekt (indem es die Audiowellenform komplizierter macht und es daher schwieriger ist, sie in der Größe zu reduzieren, während sie präzise bleibt) zu verringern.
      </td>
      <td>
        Zischen, Rauschen oder Hintergrundgeräusche erhöhen die Audiokomplexität, was im Allgemeinen die Menge an Kompression verringert, die möglich ist.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Formats/Audio_concepts#sampling_audio"
          >Samplerate</a
        >
      </th>
      <td>
        Je mehr Samples pro Sekunde verfügbar sind, desto höher ist die resultierende kodierte Audowiedergabetreue.
      </td>
      <td>
        Erhöhen der Samplerate erhöht die Größe der kodierten Audiodatei.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#audio_data_format_and_structure"
          >Samplegröße</a
        >
      </th>
      <td>
        Je größer die Samples, desto mehr Details kann jedes Sample enthalten, was zu einer genaueren Darstellung jedes Samples führt.
      </td>
      <td>
        Hängt vom Codec ab; Codec haben typischerweise ein internes Sample-Format, das möglicherweise mit der Original-Samplegröße übereinstimmt. Mehr Quelldetails können die kodierte Datei vergrößern; sie wird nie kleiner sein.
      </td>
    </tr>
  </tbody>
</table>

Natürlich können diese Effekte durch Entscheidungen, die während der Kodierung des Audios getroffen werden, geändert werden. Wenn beispielsweise der Encoder so konfiguriert ist, dass die Samplerate reduziert wird, wird die Wirkung der Samplerate auf die Ausgabedatei entsprechend verringert.

Für weitere Informationen über diese und andere Funktionen von Audiodaten lesen Sie [Audio-Datenformat und -struktur](/de/docs/Web/Media/Formats/Audio_concepts#audio_data_format_and_structure).

### Der Einfluss der Codeckonfiguration auf die kodierte Audioausgabe

Audio-Codecs verwenden typischerweise ausgeklügelte und hochkomplexe mathematische Algorithmen, um die Quell-Audiodaten zu komprimieren, damit sie wesentlich weniger Speicherplatz oder Netzwerkbandbreite beanspruchen. Neben der Auswahl der Art des Codecs, den Sie verwenden möchten, haben Sie möglicherweise die Möglichkeit, den Encoder mit Parametern zu justieren, die spezifische Algorithmen auswählen, diese Algorithmen anpassen und die Anzahl der Durchläufe festlegen, die während der Kodierung gemacht werden sollen.

<table class="standard-table">
  <caption>
    Einfluss der Konfiguration eines Audioencoders auf Qualität und Größe
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
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustfreie Kompression</a
        >
      </th>
      <td>Keine Verlust der Wiedergabetreue</td>
      <td>Es ist unwahrscheinlich, mehr als 40-50% Kompression zu erreichen</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Kompression</a
        >
      </th>
      <td>
        Immer ein gewisser Verlust der Wiedergabetreue; je höher die Kompression, desto höher der Verlust
      </td>
      <td>Komprimierung von bis zu 80-95% möglich</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Formats/Audio_concepts#bit_rate"
          >Bitrate</a
        >
      </th>
      <td>Je höher die Bitrate, desto höher kann die Qualität sein</td>
      <td>
        Je höher die Bitrate, desto größer ist die kodierte Datei wahrscheinlich
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#audio_frequency_bandwidth"
          >Audiofrequenz-Bandbreite</a
        >
      </th>
      <td>
        Wenn es in dem entfernten Frequenzband Audio gibt, kann ein spürbarer Verlust der Wiedergabetreue auftreten
      </td>
      <td>
        Das Entfernen von Frequenzbändern bedeutet weniger zu kodierende Daten, also kleinere kodierte Dateien
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#joint_stereo"
          >Stereo-Codierung</a
        >
      </th>
      <td>
        Einfache Stereo- und
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#mid-side_stereo_coding"
          >Mid-Side Stereo-Codierung</a
        >
        beeinflussen die Qualität nicht;
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#intensity_stereo_coding"
          >Intensitäts-Stereo-Codierung</a
        >
        führt jedoch zu einem Detailverlust.
      </td>
      <td>
        Joint Stereo kann die Größe des kodierten Audios etwas reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter – und der Bereich möglicher Werte – variieren von Codec zu Codec und sogar zwischen verschiedenen Encoding-Utilities für denselben Codec, daher sollten Sie die Dokumentation, die mit der von Ihnen verwendeten Kodierungssoftware bereitgestellt wird, lesen, um mehr zu erfahren.

### Merkmale, die die Größe des kodierten Audios beeinflussen

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige davon betreffen die Form der Quell-Audio; andere beziehen sich auf Entscheidungen, die während der Kodierung des Audios getroffen werden.

#### Verlustfreie vs. verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokompression. **Verlustfreie** Kompressionsalgorithmen verringern die Größe des Audios ohne Beeinträchtigung der Qualität oder Wiedergabetreue des Klangs. Bei der Dekodierung von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis in jeder Hinsicht identisch mit dem Originalton, bis ins Detail.

**Verlustbehaftete** Codecs hingegen nutzen aus, dass das menschliche Ohr kein perfekter Interpret von Audio ist, und dass das menschliche Gehirn wichtige Informationen aus unvollkommener oder rauschender Audio ziehen kann. Sie entfernen Audiofrequenzen, die kaum benutzt werden, tolerieren den Verlust von Präzision in der dekodierten Ausgabe und verwenden andere Methoden, um Audiomaterial, Qualität und Wiedergabetreue zu verlieren, um kleinere kodierte Medien zu erzielen. Bei der Dekodierung ist die Ausgabe in unterschiedlichem Maße noch verständlich. Der spezifische verwendete Codec – und die ausgewählte Kompressionskonfiguration – bestimmen, wie nahe die Ausgabe dem Original-Audiosignal ohne Verlust erscheint, wenn sie von menschlichem Ohr gehört wird.

Aufgrund der Unterschiede in der Funktionsweise verlustbehafteter Codecs im Vergleich zu verlustfreien, insbesondere weil verlustfreie viel konservativer bei ihrer Kompression sein müssen, führen verlustbehaftete Codecs nahezu immer zu erheblich kleiner komprimierten Audios als verlustfreie Codecs.

Im Allgemeinen sind die häufigsten Gründe für die Wahl verlustfreier Audios die Notwendigkeit einer archivierungsbezogenen Speicherung oder weil die Audiosamples remixt und recomprimiert werden müssen, und dass Sie vermeiden möchten, dass Artefakte im Audio durch Rekompessione verstärkt werden. Für das Echtzeit-Streaming von Audio ist in der Regel ein verlustbehafteter Codec erforderlich, um sicherzustellen, dass der Datenfluss mit der Audiowiedergaberate Schritt halten kann, unabhängig von der Netzwerkleistung.

### Maximale Anzahl von Kanälen

Der an jeden Lautsprecher eines Soundsystems gelieferte Ton wird durch einen Audiokanal in einem Stream bereitgestellt. Monoskularer Sound ist ein einziger Kanal. Stereosound hat zwei. 5.1-Surround-Sound hat fünf Audiokanäle plus einen **Low Frequency Enhancement** (**LFE**)-Kanal.

LFE-Kanäle sind speziell entwickelt, um niedrigfrequente Audiodaten zu speichern und werden häufig verwendet, um Audiodaten für Subwoofer bereitzustellen, beispielsweise. Wenn Sie die Anzahl der Audiokanäle in der Form X.Y (wie 2.1 oder 5.1) geschrieben sehen, ist die Zahl nach dem Dezimalpunkt, Y, die Anzahl der LFE-Kanäle. Beispielsweise unterstützt MP3 einen LFE-Kanal, während AAC bis zu 16 unterstützt.

Zusätzlich zur Bereitstellung von Audio für bestimmte Lautsprecher in einem Soundsystem könnten einige Codecs erlauben, dass Audiokanäle verwendet werden, um alternative Audios bereitzustellen, z.B. Gesang in verschiedenen Sprachen oder Beschreibungs-Audio für sehbehinderte Personen.

### Audiofrequenz-Bandbreite

Die **Audiofrequenz-Bandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, die mit dem Codec dargestellt werden können. Einige Codecs funktionieren speziell, indem sie Audio eliminieren, das außerhalb eines bestimmten Frequenzbereichs liegt. Es gibt eine Korrelation zwischen der Samplerate und der maximalen Klangfrequenz, die durch eine vom Codec dargestellte Wellenform dargestellt werden kann. Theoretisch ist die maximale Frequenz, die ein Codec darstellen kann, die Samplerate geteilt durch zwei; diese Frequenz wird [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) genannt. In Wirklichkeit liegt das Maximum etwas niedriger, aber es ist nah dran.

Die Audiofrequenz-Bandbreite wird besonders deutlich, wenn ein Codec entworfen oder konfiguriert ist, um menschliche Sprache statt einer breiten Palette von Geräuschen darzustellen. Menschliche Sprache fällt im Allgemeinen in den Audiofrequenzbereich von 300 Hz bis 18 kHz. Die überwiegende Mehrheit menschlicher Lautäußerungen liegt jedoch im Bereich von 300 Hz bis 8 kHz, und Sie können genug menschlicher Lautäußerungen im Frequenzbereich von 500 Hz bis 3 kHz erfassen, um immer noch verständlich zu sein.

Aus diesem Grund beginnen sprachspezifische Codecs oft damit, Töne, die außerhalb eines festgelegten Bereichs liegen, zu entfernen. Dieser Bereich ist die Audiofrequenz-Bandbreite. G.722 beispielsweise entfernt Sounds außerhalb der Audiofrequenz-Bandbreite von 50 Hz bis 7 kHz. Dies reduziert die zu kodierende Datenmenge von vornherein.

## Codec-Details

Im Folgenden werfen wir einen kurzen Blick auf jeden dieser Codecs und betrachten ihre grundlegenden Fähigkeiten sowie ihre primären Anwendungsfälle.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding** (**AAC**)-Codec ist Teil des MPEG-4 (H.264) Standards definiert; speziell als Teil von [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html). Entworfen, um mehr Kompression bei höherer Audio-Wiedergabetreue als MP3 zu bieten, ist AAC eine beliebte Wahl geworden und das Standardformat für Audio in vielen Medientypen, einschließlich Blu-Ray-Discs und HDTV, sowie das verwendete Format für Lieder, die von Online-Anbietern wie iTunes gekauft werden.

AAC hat eine Reihe von Profilen, die Methoden zur Komprimierung von Audio für spezifische Anwendungsfälle definieren, einschließlich allem von hochqualitativem Surround-Sound bis hin zu niedrigqualitativem Audio für sprachspezifische Anwendungen.

Als patentreiztes Format ist die Unterstützung von AAC weniger vorhersehbar. Beispielsweise unterstützt Firefox AAC nur, wenn die Unterstützung vom Betriebssystem oder einer externen Bibliothek bereitgestellt wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig, bis zu 512 kbps</td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>32-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>8 kHz - 96 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>96 kbps bei 48 kHz Samplerate</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>48 (plus 16 Low Frequency Enhancement Kanäle)</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>
        0 Hz - 96 kHz (Standard-Audiokanäle)<br />0 Hz - 120 Hz (LFE-Kanäle)
      </td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>20 ms bis 405 ms</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <p>
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt. Stattdessen verlässt sich Firefox auf die native Unterstützung für AAC der Plattform. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und unterstützt nur AACs Hauptprofil. Zusätzlich ist AAC in Chromium-Builds nicht verfügbar.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>MP4, ADTS, 3GP</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Für das Streaming oder den Vertrieb von AAC-codierten Inhalten: Keine Lizenz erforderlich; Entwickler von Codecs müssen eine Patentlizenz über
        <a href="https://www.via-la.com/licensing-2/aac/">VIA Licensing</a>
        erhalten
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein verlustfreier Codec, der von Apple entwickelt wurde. Nachdem er anfänglich ein geschlossenes Format war, hat Apple ihn unter einer Apache-Lizenz geöffnet.

Plattform- und Browserübergreifende Unterstützung für ALAC ist nicht sehr stark, was ihn zu einer weniger idealen Wahl für allgemeine Zwecke macht. Wenn Ihr Ziel jedoch primär macOS- und iOS-Nutzer sind, könnte es sich lohnen, ihn zu erwägen, da die Betriebssysteme integrierte Unterstützung für ALAC haben. Andernfalls ist FLAC wahrscheinlich die bessere Wahl, wenn Sie einen verlustfreien Codec verwenden müssen.

Bedenken Sie jedoch, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherkapazität erfordern und möglicherweise außerhalb sehr spezifischer Anwendungsfälle keine gute Wahl sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Basierend auf dem Sample-Format und der Samplerate sowie dem Kompressionsniveau
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit, 20-Bit, 24-Bit und 32-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>1 Hz bis 384.000 Hz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>n/a</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei; bis zu 45-60%</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>8 (bis zu 7.1 Surround)</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>?</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>?</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">ALAC-Unterstützung</th>
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
      <td>MP4</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Open License (Apache License 2.0);
        <a href="https://github.com/macosforge/alac"
          >Quellcode verfügbar auf GitHub</a
        >
      </td>
    </tr>
  </tbody>
</table>

### AMR (Adaptive Multi-Rate)

Der **[Adaptive Multi-Rate Audio-Codec](https://voiceage.com/AMR-NB.AMR.html)** ist für die effiziente Kodierung menschlicher Sprache optimiert. Er wurde im Jahr 1999 als Teil des 3GPP-Audio-Standards für sowohl [GSM](https://en.wikipedia.org/wiki/GSM) als auch [UMTS](https://en.wikipedia.org/wiki/UMTS) Mobilfunktelefonie standardisiert und verwendet einen Mehrfrequenz-Schmalband-Algorithmus, um Audiofrequenzen auf einem Telefonie-qualitätsniveau bei etwa 7,4 kbps zu kodieren. Neben seiner Verwendung für Echtzeit-Telefonie kann AMR-Audio auch für Voicemail und andere kurze Audioaufnahmen verwendet werden.

AMR-Audio, das in Dateien gespeichert ist, kann die Dateiendung `.amr` haben, kann aber auch in `.3gp`-Dateien gekapselt werden.

Als sprachspezifischer Codec ist AMR für jede andere Art von Inhalten praktisch unbrauchbar, einschließlich Audio, das nur Gesangsstimmen enthält. Zusätzlich, weil AMR darauf ausgelegt ist, die Kapazitätsanforderungen zu minimieren, erfasst es nur den Teil der vollen Audiofrequenz-Bandbreite menschlicher Sprache, der absolut notwendig ist, um zu verstehen, was gesagt wird, sodass die Qualität entsprechend reduziert wird. Wenn Sie die Fähigkeit benötigen, Audio mit minimalem Einfluss auf Netz- und/oder Speicherkapazität aufzuzeichnen, kann AMR eine großartige Wahl sein. Wenn Sie jedoch eine hochqualitative Reproduktion menschlicher Sprache – oder sogar eine niedrigqualitative Musikreproduktion – benötigen, müssen Sie ein anderes Format wählen.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>Halbrate (HR) und Vollrate (FR):</strong> 1,8 kbps, 4,75 kbps,
        5,15 kbps, 5,9 kbps, 6,7 kbps, 7,4 kbps, 7,95 kbps
      </td>
    </tr>
    <tr>
      <td><strong>Vollrate (FR) nur:</strong> 10,2 kbps und 12,2 kbps</td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>13-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>n/a</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>200 Hz bis 3.400 Hz</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>25 ms</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AMR-Unterstützung</th>
              <td>Nein</td>
              <td>?</td>
              <td>Nein</td>
              <td>Nein</td>
              <td>?</td>
            </tr>
          </tbody>
        </table>
        <p>
          Während der Chrome-Browser AMR nicht unterstützt, unterstützt ChromeOS
          AMR-NB (Schmalband) und AMR-WB (Breitband).
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>AMR, 3GPP</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Kostenpflichtig; Lizenzgebühren und jährliche Abgaben fallen an. Siehe
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge-Lizenzierung</a
        >
        für Details
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audio-Codec, der von der [Xiph.org Foundation](https://xiph.org/) veröffentlicht wurde. Er bietet gute Kompressionsraten ohne Verlust der Audio-Wiedergabetreue; das heißt, das dekomprimierte Audio ist identisch mit dem Original. Da der Kompressionsalgorithmus speziell für Audio entwickelt wurde, liefert er bessere Ergebnisse als dies mit einem universellen Kompressionsalgorithmus möglich wäre.

FLAC ist eine ausgezeichnete Wahl für kleinere Audioeffektdateien, bei denen makellose Qualität und Tonal-Genauigkeit gewünscht sind, sowie für die Archivierung von Musik.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>4-Bit bis 24-Bit Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>
        1 Hz bis 65.535 Hz (in 1 Hz Schritten) oder 10 Hz bis 655.350 Hz in 10 Hz
        Schritten
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei; bis zu 40-50% Größeneinsparung</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>Volles Spektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4,3 ms bis 92 ms, wobei 46,4 ms der typische Durchschnitt ist</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">FLAC-Unterstützung</th>
              <td>Ja</td>
              <td>Ja</td>
              <td>51 (Desktop)<br />58 (Mobil)</td>
              <td>Ja</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>MP4, Ogg, FLAC</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und frei von jeglichen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### G.711 (Puls-Code-Modulation von Sprachfrequenzen)

Die **G.711**-Spezifikation, veröffentlicht von der International Telecommunications Union (ITU), wurde 1972 herausgegeben, um die standardisierte Audio-Codierung für Telefonanwendungen zu definieren. Sie unterstützt sprachqualitatives Audio, das Frequenzen von 300 bis 3400 Hz umfasst. Sie wird umfangreich für den Telefonverkehr und die Voicemail genutzt und ist die höchstqualitative Audio-Codierung, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein hochauflösender Codec, sondern ist darauf optimiert, eine breite Palette von Sprachpegeln (vom Flüstern bis zum Rufen) zu unterstützen, während er eine hohe Verständlichkeit und geringe rechnerische Komplexität beibehält. G.711 verwendet ein logarithmisches Kompandierungsalgorithmus, der einen Bereich von 14 Bits Dynamik in einem 8-Bit-Sample bietet. Es wird eine Abtastrate von 8000 Samples/Sekunde verwendet, was einer Bitrate von 64000 bps entspricht.

Es gibt zwei Varianten von G.711, die die genaue mathematische Gleichung für den Algorithmus angeben: [µ-law](https://en.wikipedia.org/wiki/M-law) (häufig in Nordamerika und Japan verwendet) und [A-law](https://en.wikipedia.org/wiki/A-law) (häufig im Rest der Welt). Es gibt keinen wesentlichen Qualitätsunterschied zwischen den beiden Verfahren, und es ist einfach, Audio von einem zum anderen umzuwandeln. Trotzdem ist es wichtig, in jeder Wiedergabeanwendung oder Dateiformat anzugeben, welches Gesetz verwendet wird. A-law-Audio wird schlecht wiedergegeben, wenn es fälschlicherweise mit dem µ-law-Algorithmus dekomprimiert wird, und umgekehrt.

Dieser Codec muss von allen [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen unterstützt werden, da er einfach, leicht zu implementieren, weit verbreitet und umfassend kompatibel mit allen modernen Computerplattformen ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>kodiertes Audio hat 8 Bits pro Sample</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>128 kbps</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Logarithmische Kompandierung (µ-law oder A-law)</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>300 Hz – 3400 Hz</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>0,125 ms</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">G.711-Unterstützung</th>
              <td>23</td>
              <td>15</td>
              <td>22</td>
              <td>43</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>G.711 wird nur für WebRTC-Verbindungen unterstützt.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>3GP, WAV</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle anwendbaren Patente sind abgelaufen, daher ist G.711 frei ohne
        Einschränkungen nutzbar
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audio-Codierung)

Veröffentlicht von der International Telecommunications Union (ITU), ist der **G.722**-Codec speziell für die Komprimierung von Sprache ausgelegt. Seine Audio-Codierungsbandbreite ist auf den Bereich von 50 Hz bis 7.000 Hz begrenzt, was den größten Teil des Frequenzbereichs typischer menschlicher Lautäußerungen abdeckt. Dies macht ihn ungeeignet für die Bearbeitung von Audio, das außerhalb des menschlichen Sprachbereichs liegt, wie z.B. Musik.

G.722-Audio wird mit Adaptive Differential Pulse Code Modulation (ADPCM) kodiert, bei der jedes Sample nicht durch seinen absoluten Wert, sondern als Wert dargestellt wird, der angibt, wie viel das neue Sample vom vorherigen Sample abweicht.

G.722 wird hauptsächlich bei WebRTC-Verbindungen verwendet, da es einer der im WebRTC-Standard vorgeschriebenen Audio-Codecs ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps, und 64 kbps; in der Praxis wird jedoch immer 64 kbps verwendet<br />G.722 Anhang B Super Wide-Band: 64 kbps, 80 kbps, und 96 kbps<br />G.722 Anhang D Stereo Wide-Band: 64 kbps und 80 kbps<br />G.722 Anhang D Stereo Super Wide-Band: 80 kbps, 96 kbps, 112 kbps, und 128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>14-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>
        16 kHz (ADPCM ist spezifiziert, um 8 kHz, 11,025 kHz, 22,05 kHz, 44,1 kHz zu ermöglichen, aber G.722 verwendet 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>128 kbps bei 44,1 kHz Samplerate</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>50 Hz - 7 kHz</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4 ms</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">G.722-Unterstützung</th>
              <td>Ja</td>
              <td>Ja</td>
              <td>Ja</td>
              <td>Ja</td>
              <td>Ja</td>
            </tr>
          </tbody>
        </table>
        <p>Nur WebRTC.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>3GP, AMR-WB</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle anwendbaren Patente sind abgelaufen; G.722 ist frei
        ohne Einschränkungen nutzbar
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den Audioformaten, die durch die MPEG/MPEG-2-Standards spezifiziert sind, ist **MPEG-1 Audio Layer III**—auch bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)**—bei weitem das am häufigsten verwendete und bekannteste. Der MP3-Codec wird durch [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert und wurde 1991 eingeführt (und 1992 abgeschlossen).

Wenn MP3-formatiges Audio in einem MPEG-Container gespeichert wird, wird die resultierende Datei auch einfach als "MP3-Datei" oder "MP3" bezeichnet. Dateien mit der allseits bekannten `.mp3`-Erweiterung sind in dem vielleicht am weitesten verbreiteten Audio-Dateiformat der Welt gespeichert, was maßgeblich zur digitalen Audiorevolution der späten 1990er und frühen 2000er Jahre beigetragen hat.

MPEG-1 MP3-Audio unterstützt höhere Bitraten sowie höhere Abtastraten als MPEG-2-Dateien im MP3-Audio. Das MPEG-1-Format ist im Allgemeinen am besten für Musik oder andere komplexe Audio geeignet, während das MPEG-2-Modus MP3-Audio für Sprache und andere einfachere Sounds ausreicht.

Die Patente hinter MP3 sind abgelaufen, was viele oder die meisten Lizenzprobleme bei der Verwendung von MP3-Dateien in Ihren Projekten beseitigt. Das macht sie zu einer guten Wahl für viele Projekte.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>MPEG-1 Modus:</strong> 32 kbps, 40 kbps, 48 kbps, 56 kbps, 64
        kbps, 80 kbps, 96 kbps, 112 kbps, 128 kbps, 160 kbps, 192 kbps, 224
        kbps, 256 kbps, 320 kbps
      </td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 8 kbps, 16 kbps, 24 kbps, 32 kbps, 40
        kbps, 48 kbps, 56 kbps, 64 kbps, 80 kbps, 96 kbps, 112 kbps, 128 kbps,
        144 kbps, 160 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Sampleraten</th>
      <td><strong>MPEG-1 Modus:</strong> 32000 Hz, 44100 Hz, 48000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 16000 Hz, 22050 Hz, 24000 Hz (Halb so
        häufig wie die MPEG-1 unterstützten Modi)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>128 kbps bei 48 kHz Samplerate</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Maximale Audiokanäle</th>
      <td><strong>MPEG-1 Modus:</strong> 2 [2.0]</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 5 (plus 1 optionaler Low Frequency
        Enhancement Kanal) [5.1]
      </td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>Variiert, abhängig von Bitrate und psychoakustischer Analyse</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>Mindestens 100 ms</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MP3-Unterstützung</th>
              <td>Ja</td>
              <td>Ja</td>
              <td>Ja</td>
              <td>Ja</td>
              <td>3.1</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>MPEG-1, MPEG-2, MP4, ADTS, 3GP</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Patentfrei in der EU seit 2012; patentfrei in den Vereinigten Staaten seit dem
        April 16, 2017; jetzt frei nutzbar
      </td>
    </tr>
  </tbody>
</table>

Aus patentbedingten Gründen unterstützte Firefox MP3 bis Version 71 nicht direkt; stattdessen wurden plattform-native Bibliotheken zur Unterstützung von MP3 verwendet. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:

<table class="standard-table" style="margin-left: 4em; max-width: 30em">
  <caption>
    MP3-Unterstützung mit externer Bibliothek, nach Plattform, in Firefox
  </caption>
  <thead>
    <tr>
      <th scope="row">Plattform</th>
      <th scope="col">Erste Firefox-Version<br />mit MP3-Unterstützung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Windows (Vista und neuer)</th>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Android</th>
      <td>20</td>
    </tr>
    <tr>
      <th scope="row">
        Linux (abhängig von
        <a href="https://gstreamer.freedesktop.org/">GStreamer</a>)
      </th>
      <td>26</td>
    </tr>
    <tr>
      <th scope="row">macOS</th>
      <td>35</td>
    </tr>
  </tbody>
</table>

### Opus

Das [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) Audioformat wurde von der Xiph.org Foundation als vollständig offenes Audioformat erstellt; es wurde vom [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein guter Allzweck-Audio-Codec, der sowohl Audio mit geringer Komplexität wie Sprache als auch Musik und andere komplexe Klänge effizient handhaben kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei verwenden, da der Encoder die Bitrate, die Audiobandbreite, den Algorithmus und andere Details der Kompressionseinstellungen für jeden Audioframe auswählen kann.

Opus ist ein guter Allround-Audio-Codec für den Einsatz in Ihren Webanwendungen und kann für jede Audioaufgabe verwendet werden, die Sie im Sinn haben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>6 kbps - 510 kbps</td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit Integer und 32-Bit Float (-1.0 bis 1.0)</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Effektive Samplerate</th>
            </tr>
            <tr>
              <th scope="row">Schmalband (NB)</th>
              <td>8 kHz</td>
            </tr>
            <tr>
              <th scope="row">Mittleres Band (MB)</th>
              <td>12 kHz</td>
            </tr>
            <tr>
              <th scope="row">Breitband (WB)</th>
              <td>16 kHz</td>
            </tr>
            <tr>
              <th scope="row">Super Breitband (SWB)</th>
              <td>24 kHz</td>
            </tr>
            <tr>
              <th scope="row">Fullband (FB)</th>
              <td>48 kHz</td>
            </tr>
          </tbody>
        </table>
        <p>
          Die angegebenen Sampleraten sind <em>effektive Sampleraten</em>. Opus
          verwendet einen Algorithmus, der auf Audiobandbreiten anstatt auf Sampleraten basiert.
          Siehe {{RFC(6716, "", 2)}} für Details. Darüber hinaus gibt es einen
          <em>optionalen</em> Teil der Opus-Spezifikation (Opus Custom), die
          NICHT-standardisierte Sampleraten zulässt, aber die Nutzung dieser Funktion ist zu vermeiden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>96 kbps bei 48 kHz Samplerate</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>255 (bis zu 1 LFE-Kanal)</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Audiobandbreite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Schmalband (NB)</th>
              <td>4 kHz</td>
            </tr>
            <tr>
              <th scope="row">Mittleres Band (MB)</th>
              <td>6 kHz</td>
            </tr>
            <tr>
              <th scope="row">Breitband (WB)</th>
              <td>8 kHz</td>
            </tr>
            <tr>
              <th scope="row">Super Breitband (SWB)</th>
              <td>12 kHz</td>
            </tr>
            <tr>
              <th scope="row">Fullband (FB)</th>
              <td>20 kHz</td>
            </tr>
          </tbody>
        </table>
        <p>
          Obwohl das
          <a href="https://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem">Nyquist-Shannon-Abtasttheorem</a>
          zeigt, dass die Audiobandbreite bis zu der Hälfte der Samplerate betragen kann, erlaubt Opus keine Kodierung außerhalb eines maximalen 20 kHz Audiobandes, da das menschliche Ohr ohnehin nichts über den 20 kHz Punkt wahrnehmen kann. Dies spart etwas Speicherplatz im kodierten Audio.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>5 ms bis 66,5 ms</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Opus-Unterstützung</th>
              <td>33</td>
              <td>14</td>
              <td>15</td>
              <td>20</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>
          Diese Informationen beziehen sich auf die Unterstützung von Opus in HTML
          {{HTMLElement("audio")}} und {{HTMLElement("video")}}
          Elementen und nicht auf WebRTC.
        </p>
        <p>
          Safari unterstützt Opus im {{HTMLElement("audio")}}-Element
          nur, wenn es in einer CAF-Datei verpackt ist, und nur auf macOS High Sierra
          (10.13) oder iOS 11.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>Ogg, WebM, MPEG-TS, MP4</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und frei von jeglichen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### Vorbis

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format der [Xiph.org Foundation](https://xiph.org/), das eine breite Palette von Kanalkombinationen unterstützt, einschließlich monaural, Stereo, polyphonisch, quadrophonisch, 5.1-Surround, Ambisonic oder bis zu 255 diskrete Audiokanäle. Abhängig von der während der Kodierung verwendeten Qualitätsstufe kann die resultierende Bitrate von etwa 45 kbps bis 500 kbps variieren. Vorbis verwendet von Natur aus eine variable Bitrate-Codierung; die Bitrate kann von einem Sample zum nächsten variieren, je nach Bedarf beim Kompressionsprozess.

Im Allgemeinen ist Vorbis in Bezug auf Größe und Bitrate effizienter als MP3 bei vergleichbaren Qualitätsstufen. Dies und seine freie und offene Lizenz machen es zu einer guten Wahl für viele Arten von Audiodaten, solange seine hohe Latenz kein Problem darstellt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>45 kbps - 500 kbps</td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>8 kHz - 192 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Klang</th>
      <td>
        192 kbps bei 48 kHz; dies wird typischerweise durch Einstellen des
        Qualitätsniveaus auf 6 bis 8 erreicht.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>255</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>Mindestens 100 ms</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Vorbis-Unterstützung</th>
              <td>4</td>
              <td>17</td>
              <td>3.5</td>
              <td>11.5</td>
              <td>Nein</td>
            </tr>
          </tbody>
        </table>
        <p>
          Diese Informationen beziehen sich auf die Unterstützung von Vorbis in HTML
          {{HTMLElement("audio")}} und {{HTMLElement("video")}}
          Elementen und nicht auf WebRTC.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>Ogg, WebM</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und frei von jeglichen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Audio-Codecs

Typischerweise wird, unabhängig davon, welchen Codec Sie verwenden, die Aufgabe erledigt, auch wenn es nicht die ideale Wahl ist, solange Sie nicht einen Codec wählen, der spezifisch für eine völlig andere Art von Quell-Audio entwickelt wurde. Wenn Sie beispielsweise einen auf Sprache beschränkten Codec auswählen und ihn für Musik verwenden, werden Sie keine brauchbaren Ergebnisse erhalten.

Einige Codecs können die Kompatibilität einschränken, während andere möglicherweise besser für Ihre Bedürfnisse geeignet sind als andere. Hier geben wir Hinweise, die Ihnen bei der Auswahl eines geeigneten Codecs für Ihren Anwendungsfall helfen sollen.

Beim Auswählen eines Codecs für Ihr Audio sollten Sie zunächst die folgenden Fragen berücksichtigen:

- Wird das kodierte Audio gemixt oder recomprimiert? Wenn ja, vermeiden Sie verlustbehaftete Kompression, die durch die Rekompession verstärkt würde; oder verwenden Sie zumindest so wenig Kompression wie möglich.
- Wenn das Audio in eine bestimmte Datei geschrieben werden muss, bedenken Sie, dass Mediencontainer normalerweise nur eine bestimmte Untergruppe der verfügbaren Codecs unterstützen.
- Welche Art von Audiomaterial wird der Codec verarbeiten? Bestimmte Codecs sind spezifisch für sprachspezifische Inhalte (sie nutzen den eingeschränkten Frequenzbereich, der für menschliche Sprache benötigt wird). Andere können eine algorithmische Tendenz haben, schlechter zu performen, wenn sie bestimmte Musikgenres kodieren.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften hat jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen können?
- Wie wichtig ist Latenz für Ihre Bedürfnisse? Wenn Sie Klang benötigen, der sehr präzise zeitlich abgestimmt ist, desto niedriger die Latenz, desto besser.
- Wie viel Kompression müssen Sie erreichen?

Schauen wir uns einige häufige Szenarien an, um ein Gefühl für den Entscheidungsprozess zu bekommen.

### Beispiel: Musik für Streaming

Für das Streaming von Musik möchten Sie einen Codec auswählen, der die Bandbreitennutzung so weit wie möglich minimiert, während er so wenig Artefakte durch die Kompression in das Audio einführt. Dies ist notwendig, weil die Rate, mit der die Musik heruntergeladen wird, nicht größer sein darf als die verfügbare Bandbreite im Netzwerk, und idealerweise sollte Raum für Schwankungen der Netzwerkgeschwindigkeit und die Nutzung des Netzwerks durch andere Anwendungen bleiben.

Es sei denn, es besteht ein spezifischer Bedarf an verlustfreier Kompression, oder die Netzwerkbandbreite ist garantiert hoch genug, um sie zu unterstützen, ist ein verlustbehaftetes Kompressionsschema in der Regel eine gute Wahl. Welche Sie wählen, hängt von der Kompatibilität mit Browsern und der Verfügbarkeit spezieller Funktionen ab, die der Codec unterstützen muss.

_Normalerweise_ ist die Latenz beim Musikstreaming nicht besonders wichtig. Mögliche Ausnahmen sind Musik, die in eine Schleife gespielt werden muss, wo Sie die Musik ununterbrochen abspielen müssen, oder wenn Sie Songs hintereinander ohne Unterbrechung abspielen müssen. Dies kann besonders wichtig für klassische Musik, Theater-Soundtracks und für Hintergrundmusik während des Spielens sein.

Für die allgemeine Musikwiedergabe sind die drei wahrscheinlich besten Kandidaten MP3, AAC und Vorbis.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt, was es zu einer großartigen Wahl macht.
- Vorbis wird fast immer in Ogg-Dateien verwendet, aber Ogg-Container werden nicht universell unterstützt. Selbst Microsoft Edge, das sowohl Vorbis unterstützt, als auch keine Unterstützung für Ogg-Container bietet.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die einen Audio-Layer III-Track enthalten.

Wenn Sie die Latenz während der Musikwiedergabe minimieren müssen, sollten Sie stark Opus in Erwägung ziehen, das die niedrigste Bandbreite an Latenzen der allgemeinen Codecs bietet (5 ms bis 66,5 ms im Vergleich zu mindestens 100 ms für die anderen).

> [!NOTE]
> Die hier beschriebene Kompatibilitätsinformation ist im Allgemeinen korrekt zum Zeitpunkt, als dieser Artikel geschrieben wurde; es kann jedoch Ausnahmen und Einschränkungen geben. Überprüfen Sie die Kompatibilitätstabellen, bevor Sie sich auf ein bestimmtes Medienformat festlegen.

Basierend darauf ist AAC wahrscheinlich Ihre beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Natürlich, wenn Sie mehrere Formate bieten können (zum Beispiel, indem Sie das {{HTMLElement("source")}}-Element in Ihren {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elementen verwenden), können Sie viele oder alle dieser Ausnahmen umgehen.

### Beispiel: Musik zum Download

Musik, die vom Benutzer heruntergeladen wird, kann zu einer größeren Gesamtdatengröße im Vergleich zu gestreamter Musik komprimiert werden, da es (im Gegensatz zum Streaming) egal ist, ob die Downloadgeschwindigkeit langsamer ist als die Wiedergabegeschwindigkeit des Mediums. Das bedeutet, dass Sie in Betracht ziehen können, verlustbehaftete Kompression bei höheren Bitraten zu verwenden, was zu größeren Dateien mit weniger Verlust der Wiedergabetreue führt. Oder Sie können ein verlustfreies Format wählen. Die Wahl hängt weitgehend von den Anforderungen Ihrer Anwendung und den Vorlieben Ihrer Benutzer ab.

Für einen echten Musik-Download-Service sollten Sie Songs zum Download als 128 Kbps MP3-Dateien, 256 kbps AAC-Dateien (in MP4-Containern) oder FLAC-Dateien anbieten, abhängig von einer vom Benutzer gewählten Präferenz.

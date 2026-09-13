---
title: Leitfaden für Web-Audio-Codecs
slug: Web/Media/Guides/Formats/Audio_codecs
l10n:
  sourceCommit: abc914f085fb9913c41c4cd4453da432e9d4e761
---

Selbst Stereoton mit nur mäßiger Qualität und hoher Wiedergabetreue kann erheblichen Speicherplatz beanspruchen. Für Webentwickler ist die Netzwerkbandbreite, die für die Übertragung von Audio benötigt wird – sei es für Streaming oder zum Herunterladen für die Verwendung während des Spielens –, ein noch größeres Anliegen. Die Verarbeitung von Audiodaten zum Kodieren und Dekodieren erfolgt durch einen Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DEC**oder). In diesem Artikel betrachten wir Audio-Codecs, die im Web zum Komprimieren und Dekomprimieren von Audio verwendet werden, ihre Fähigkeiten und Anwendungsfälle und geben Hinweise zur Auswahl von Audio-Codecs für Ihre Inhalte.

Darüber hinaus verwenden WebRTC-Implementierungen im Allgemeinen eine Teilmenge dieser Codecs zum Kodieren und Dekodieren von Medien und unterstützen möglicherweise auch zusätzliche Codecs, um eine optimale plattformübergreifende Unterstützung für Video- und Audiokonferenzen zu gewährleisten und sich besser in ältere Telekommunikationslösungen zu integrieren. Einzelheiten finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Informationen zu den grundlegenden Konzepten der Funktionsweise digitaler Audiodaten finden Sie im Artikel [Konzepte digitaler Audiodaten](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

## Häufige Codecs

Die folgende Liste zeigt die im Web am häufigsten verwendeten Codecs und die Container (Dateitypen), die sie unterstützen. Wenn Sie nur wissen müssen, welche Codecs überhaupt verwendet werden können, ist dies für Sie gedacht. Natürlich können einzelne Browser alle diese Codecs unterstützen oder auch nicht, und auch ihre Unterstützung dafür, welche Containertypen sie verwenden können, kann variieren. Darüber hinaus können Browser zusätzliche Codecs unterstützen, die nicht in dieser Liste enthalten sind.

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
      <th scope="row"><a href="#aac_advanced_audio_coding">AAC</a></th>
      <td>Advanced Audio Coding</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#adts">ADTS</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#alac_apple_lossless_audio_codec">ALAC</a></th>
      <td>Apple Lossless Audio Codec</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime"
          >QuickTime</a
        >
        (MOV)
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#amr_adaptive_multi-rate">AMR</a></th>
      <td>Adaptive Multi-Rate</td>
      <td><a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#flac_free_lossless_audio_codec">FLAC</a></th>
      <td>Free Lossless Audio Codec</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#flac">FLAC</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="#g.711_pulse_code_modulation_of_voice_frequencies">G.711</a>
      </th>
      <td>Pulse Code Modulation (PCM) von Sprachfrequenzen</td>
      <td>
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#g.722_64_kbps_7_khz_audio_coding">G.722</a></th>
      <td>
        7-kHz-Audiokodierung innerhalb von 64 kbps (für
        Telefonie/{{Glossary("VoIP", "VoIP")}})
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
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#adts">ADTS</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#3gp">3GP</a>
        <p>
          Wenn MPEG-1-Audio-Layer-III-Codec-Daten in einer MPEG-Datei gespeichert
          werden und die Datei keine Videospur enthält, wird die Datei üblicherweise
          als MP3-Datei bezeichnet, obwohl sie weiterhin eine MPEG-Formatdatei ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#opus">Opus</a></th>
      <td>Opus</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#vorbis">Vorbis</a></th>
      <td>Vorbis</td>
      <td>
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#webm">WebM</a>,
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#ogg">Ogg</a>
      </td>
    </tr>
  </tbody>
</table>

## Faktoren, die das kodierte Audio beeinflussen

Es gibt zwei allgemeine Kategorien von Faktoren, die das von einem Audio-Codec-Encoder ausgegebene kodierte Audio beeinflussen: Details zum Format und Inhalt des Quellaudios sowie der Codec und dessen Konfiguration während des Kodierungsprozesses.

Für jeden Faktor, der das kodierte Audio beeinflusst, gibt es eine Regel, die fast immer zutrifft: Da die Wiedergabetreue digitaler Audiodaten durch die Granularität und Präzision der Samples bestimmt wird, die zur Umwandlung in einen Datenstrom entnommen werden, gilt: Je mehr Daten zur Darstellung der digitalen Version des Audios verwendet werden, desto genauer entspricht der gesampelte Klang dem Quellmaterial.

### Auswirkungen des Quellaudioformats auf die kodierte Audioausgabe

Da kodiertes Audio naturgemäß weniger Bits zur Darstellung jedes Samples verwendet, kann das Quellaudioformat tatsächlich geringere Auswirkungen auf die Größe des kodierten Audios haben, als man erwarten würde. Dennoch beeinflussen eine Reihe von Faktoren weiterhin die Qualität und Größe des kodierten Audios. Die nachstehende Tabelle führt einige wichtige Faktoren des Quellaudio-Dateiformats und deren Auswirkungen auf das kodierte Audio auf.

<table class="standard-table">
  <caption>
    Auswirkungen des Quellaudioformats und -inhalts auf die Qualität und Größe
    des kodierten Audios
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
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure"
          >Kanalanzahl</a
        >
      </th>
      <td>
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der räumlichen
        Richtung, nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die Größe des kodierten Audios erheblich erhöhen,
        abhängig vom Inhalt und den Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
        Unerwünschtes Hintergrundrauschen oder Zischen verringert die Audioqualität
        sowohl direkt (indem es Details des Vordergrundaudios überdeckt) als auch
        indirekt (indem es die Audiowellenform komplizierter und daher schwieriger
        präzise zu verkleinern macht).
      </td>
      <td>
        Zischen, Störrauschen oder Hintergrundgeräusche erhöhen die Komplexität
        des Audios, was im Allgemeinen die mögliche Komprimierung verringert.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#sampling_audio"
          >Abtastrate</a
        >
      </th>
      <td>
        Je mehr Samples pro Sekunde verfügbar sind, desto höher ist
        voraussichtlich die resultierende Wiedergabetreue des kodierten Audios.
      </td>
      <td>
        Eine Erhöhung der Abtastrate vergrößert die Datei des kodierten Audios.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure"
          >Samplegröße</a
        >
      </th>
      <td>
        Je größer die Samples, desto mehr Details kann jedes Sample enthalten,
        was zu einer genaueren Darstellung jedes Samples führt.
      </td>
      <td>
        Hängt vom Codec ab; Codecs haben typischerweise ein internes Sampleformat,
        das mit der ursprünglichen Samplegröße übereinstimmen kann oder nicht.
        Mehr Quelldetails können die kodierte Datei jedoch größer machen; sie
        machen sie niemals kleiner.
      </td>
    </tr>
  </tbody>
</table>

Natürlich können diese Auswirkungen durch Entscheidungen bei der Audiokodierung verändert werden. Wenn der Encoder beispielsweise so konfiguriert ist, dass er die Abtastrate verringert, wird auch die Auswirkung der Abtastrate auf die Ausgabedatei entsprechend verringert.

Weitere Informationen zu diesen und anderen Merkmalen von Audiodaten finden Sie unter [Audiodatenformat und -struktur](/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure).

### Auswirkungen der Codec-Konfiguration auf die kodierte Audioausgabe

Audio-Codecs verwenden typischerweise ausgeklügelte und hochkomplexe mathematische Algorithmen, um Quellaudiodaten zu komprimieren, sodass sie erheblich weniger Speicherplatz oder Netzwerkbandbreite benötigen. Zusätzlich zur Auswahl des zu verwendenden Encodertyps haben Sie möglicherweise die Möglichkeit, den Encoder mithilfe von Parametern anzupassen, die spezifische Algorithmen auswählen, diese Algorithmen abstimmen und festlegen, wie viele Durchläufe beim Kodieren angewendet werden.

<table class="standard-table">
  <caption>
    Auswirkungen der Audioencoder-Konfiguration auf Qualität und Größe
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
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustfreie Komprimierung</a
        >
      </th>
      <td>Kein Verlust der Wiedergabetreue</td>
      <td>Wahrscheinlich nicht mehr als 40–50 % Komprimierung</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Komprimierung</a
        >
      </th>
      <td>
        Immer ein gewisser Verlust der Wiedergabetreue; je höher die Komprimierung,
        desto größer der Verlust
      </td>
      <td>Komprimierung von bis zu 80–95 % möglich</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#bit_rate"
          >Bitrate</a
        >
      </th>
      <td>Je höher die Bitrate, desto höher kann die Qualität sein</td>
      <td>
        Je höher die Bitrate, desto größer ist voraussichtlich die kodierte Datei
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_frequency_bandwidth"
          >Audiofrequenzbandbreite</a
        >
      </th>
      <td>
        Wenn Audio in den entfernten Frequenzbändern vorhanden ist, kann ein
        spürbarer Verlust der Wiedergabetreue auftreten
      </td>
      <td>
        Das Entfernen von Frequenzbändern bedeutet weniger zu kodierende Daten
        und somit kleinere kodierte Dateien
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#joint_stereo"
          >Stereokodierung</a
        >
      </th>
      <td>
        Einfaches Stereo und
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#mid-side_stereo_coding"
          >Mid-Side-Stereokodierung</a
        >
        beeinflussen die Qualität nicht;
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#intensity_stereo_coding"
          >Intensitäts-Stereokodierung</a
        >
        führt jedoch zu Detailverlust.
      </td>
      <td>
        Joint Stereo kann die Größe des kodierten Audios bis zu einem gewissen
        Grad reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter – und der Bereich möglicher Werte – variieren von Codec zu Codec und sogar zwischen verschiedenen Kodierungswerkzeugen für denselben Codec. Lesen Sie daher die Dokumentation der von Ihnen verwendeten Kodierungssoftware, um mehr zu erfahren.

### Merkmale, die die Größe kodierter Audiodaten beeinflussen

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige davon betreffen die Form des Quellaudios, andere hängen mit Entscheidungen zusammen, die während der Audiokodierung getroffen werden.

#### Verlustfreie gegenüber verlustbehafteten Codecs

Es gibt zwei grundlegende Kategorien der Audiokomprimierung. **Verlustfreie** Komprimierungsalgorithmen reduzieren die Größe des Audios, ohne die Qualität oder Wiedergabetreue des Klangs zu beeinträchtigen. Beim Dekodieren von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis in jeder Hinsicht bis auf das Bit mit dem Originalklang identisch.

**Verlustbehaftete** Codecs hingegen nutzen aus, dass das menschliche Ohr Audio nicht perfekt interpretiert und das menschliche Gehirn wichtige Informationen aus unvollkommenem oder verrauschtem Audio herausfiltern kann. Sie entfernen selten verwendete Audiofrequenzen, tolerieren einen Präzisionsverlust in der dekodierten Ausgabe und verwenden weitere Methoden, um Audioinhalte, Qualität und Wiedergabetreue zu verlieren, um kleinere kodierte Medien zu erzeugen. Nach der Dekodierung ist die Ausgabe je nach Grad weiterhin verständlich. Der verwendete spezifische Codec – und die gewählte Komprimierungskonfiguration – bestimmen, wie ähnlich die Ausgabe beim Hören mit dem menschlichen Ohr dem ursprünglichen unkomprimierten Audiosignal erscheint.

Aufgrund der Unterschiede in der Funktionsweise verlustbehafteter Codecs gegenüber verlustfreien Codecs, insbesondere weil verlustfreie Codecs bei ihrer Komprimierung viel konservativer sein müssen, führen verlustbehaftete Codecs fast immer zu deutlich kleineren komprimierten Audiodaten als verlustfreie Codecs.

Im Allgemeinen sind die häufigsten Gründe für die Wahl verlustfreier Audiodaten, dass Sie Speicherqualität zur Archivierung benötigen oder die Audiosamples neu abgemischt und erneut komprimiert werden sollen und Sie die Verstärkung von Artefakten im Audio durch erneute Komprimierung vermeiden möchten. Für Echtzeit-Streaming von Audio ist normalerweise ein verlustbehafteter Codec erforderlich, um sicherzustellen, dass der Datenfluss unabhängig von der Netzwerkleistung mit der Audiowiedergaberate Schritt halten kann.

### Maximale Anzahl von Kanälen

Das an jeden Lautsprecher eines Soundsystems gelieferte Audio wird durch einen Audiokanal in einem Stream bereitgestellt. Monofoner Klang besteht aus einem einzelnen Kanal. Stereoton besteht aus zwei Kanälen. 5.1-Surround-Sound hat fünf Audiokanäle sowie einen **Low Frequency Enhancement**-Kanal (**LFE**).

LFE-Kanäle sind speziell für die Speicherung niederfrequenter Audiodaten konzipiert und werden beispielsweise häufig verwendet, um Audiodaten für Subwoofer bereitzustellen. Wenn Sie die Anzahl von Audiokanälen in der Form X.Y geschrieben sehen, beispielsweise 2.1 oder 5.1, ist die Zahl nach dem Dezimalpunkt, Y, die Anzahl der LFE-Kanäle. MP3 unterstützt beispielsweise einen LFE-Kanal, während AAC bis zu 16 unterstützt.

Zusätzlich zur Bereitstellung von Audio für bestimmte Lautsprecher in einem Soundsystem können einige Codecs ermöglichen, dass Audiokanäle alternative Audiodaten liefern, beispielsweise Gesang in verschiedenen Sprachen oder beschreibendes Audio für sehbehinderte Menschen.

### Audiofrequenzbandbreite

Die **Audiofrequenzbandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, die mit dem Codec dargestellt werden können. Einige Codecs arbeiten gezielt dadurch, dass sie Audio entfernen, das außerhalb eines bestimmten Frequenzbereichs liegt. Es besteht eine Korrelation zwischen der Abtastrate und der maximalen Tonfrequenz, die durch eine von einem Codec dargestellte Wellenform dargestellt werden kann. Theoretisch ist die maximale Frequenz, die ein Codec darstellen kann, die durch zwei geteilte Abtastrate; diese Frequenz wird als [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) bezeichnet. In der Praxis liegt das Maximum etwas niedriger, aber nahe daran.

Die Audiofrequenzbandbreite spielt besonders deutlich eine Rolle, wenn ein Codec dazu konzipiert oder konfiguriert ist, menschliche Sprache statt eines breiten Klangspektrums darzustellen. Menschliche Sprache liegt im Allgemeinen im Audiofrequenzbereich von 300 Hz bis 18 kHz. Die große Mehrheit menschlicher Lautäußerungen liegt jedoch im Bereich von 300 Hz bis 8 kHz, und im Frequenzbereich von 500 Hz bis 3 kHz können Sie genug menschliche Lautäußerungen erfassen, damit sie weiterhin verständlich sind.

Aus diesem Grund beginnen sprachspezifische Codecs häufig damit, Klänge zu verwerfen, die außerhalb eines festgelegten Bereichs liegen. Dieser Bereich ist die Audiofrequenzbandbreite. G.722 entfernt beispielsweise Klänge außerhalb der Audiofrequenzbandbreite von 50 Hz bis 7 kHz. Dadurch wird die Menge der von Anfang an zu kodierenden Daten reduziert.

## Codec-Details

Nachfolgend betrachten wir kurz jeden dieser Codecs und sehen uns ihre grundlegenden Fähigkeiten und primären Anwendungsfälle an.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding**-Codec (**AAC**) ist als Teil des MPEG-4-Standards (H.264) definiert, insbesondere als Teil von [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html). AAC wurde entwickelt, um eine stärkere Komprimierung bei höherer Audiowiedergabetreue als MP3 zu ermöglichen, und ist zu einer beliebten Wahl geworden. Es ist das Standardformat für Audio in vielen Medientypen, einschließlich Blu-Ray-Discs und HDTV, sowie das Format für Songs, die von Online-Anbietern einschließlich iTunes erworben werden.

AAC verfügt über eine Reihe von Profilen, die Methoden zur Audiokomprimierung für bestimmte Anwendungsfälle definieren, darunter alles von hochwertigem Surround-Sound bis hin zu Audio niedriger Wiedergabetreue für die reine Sprachnutzung.

Als patentbelastetes Format ist die AAC-Unterstützung etwas weniger vorhersehbar. Firefox unterstützt AAC beispielsweise nur, wenn die Unterstützung durch das Betriebssystem oder eine externe Bibliothek bereitgestellt wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig, bis zu 512 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>32-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz – 96 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>96 kbps bei 48-kHz-Abtastrate</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>48 (plus 16 Low Frequency Enhancement-Kanäle)</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>
        0 Hz – 96 kHz (Standard-Audiokanäle)<br />0 Hz – 120 Hz (LFE-Kanäle)
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
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt.
          Stattdessen stützt sich Firefox auf die native AAC-Unterstützung einer
          Plattform. Diese Fähigkeit wurde auf jeder Plattform in unterschiedlichen
          Firefox-Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und unterstützt nur das
          Main Profile von AAC. Darüber hinaus ist AAC in Chromium-Builds nicht
          verfügbar.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>MP4, ADTS, 3GP</td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Für das Streaming oder die Verbreitung AAC-kodierter Inhalte: keine Lizenz
        erforderlich; Entwickler von Codecs müssen über
        <a href="https://www.via-la.com/licensing-programs/aac/">VIA Licensing</a>
        eine Patentlizenz erwerben
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein von Apple entwickelter verlustfreier Codec. Nachdem er zunächst ein geschlossenes Format war, hat Apple ihn unter einer Apache-Lizenz geöffnet.

Die plattformübergreifende und Browser-Unterstützung für ALAC ist nicht besonders stark, weshalb es für die allgemeine Verwendung keine ideale Wahl ist. Wenn Ihre Zielgruppe jedoch hauptsächlich macOS- und iOS-Benutzer umfasst, kann er erwägenswert sein, da die Betriebssysteme integrierte Unterstützung für ALAC bieten. Andernfalls ist FLAC wahrscheinlich die bessere Wahl, wenn Sie einen verlustfreien Codec verwenden müssen.

Beachten Sie jedoch, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherkapazität erfordern und außerhalb sehr spezifischer Anwendungsfälle möglicherweise keine gute Wahl sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Basierend auf Sampleformat und Abtastrate sowie dem Komprimierungsgrad
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>16-Bit-, 20-Bit-, 24-Bit- und 32-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>1 Hz bis 384.000 Hz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>n. v.</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei; bis zu 45–60 %</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>8 (bis zu 7.1-Surround)</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
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
              <th scope="row">Merkmal</th>
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
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Offene Lizenz (Apache License 2.0);
        <a href="https://github.com/macosforge/alac"
          >Quellcode auf GitHub verfügbar</a
        >
      </td>
    </tr>
  </tbody>
</table>

### AMR (Adaptive Multi-Rate)

Der **[Adaptive Multi-Rate-Audio-Codec](https://voiceage.com/AMR-NB.AMR.html)** ist für die effiziente Kodierung menschlicher Sprache optimiert. Er wurde 1999 als Teil des 3GPP-Audiostandards standardisiert, der sowohl für GSM- als auch für [UMTS](https://en.wikipedia.org/wiki/UMTS)-Mobiltelefonie verwendet wird, und verwendet einen Mehrbitraten-Schmalbandalgorithmus, um Audiofrequenzen in Telefoniequalität mit etwa 7,4 kbps zu kodieren. Zusätzlich zur Verwendung für Echtzeit-Telefonie kann AMR-Audio für Voicemail und andere kurze Audioaufzeichnungen verwendet werden.

AMR-Audio, das in Dateien gespeichert wird, kann den Typ `.amr` haben, aber auch in `.3gp`-Dateien gekapselt werden.

Als sprachspezifischer Codec ist AMR für alle anderen Inhalte, einschließlich Audio mit ausschließlich Gesangsstimmen, im Wesentlichen nutzlos. Da AMR zudem dafür entwickelt wurde, Kapazitätsanforderungen zu minimieren, erfasst er nur den Teil der vollständigen Audiofrequenzbandbreite menschlicher Sprache, der unbedingt notwendig ist, um das Gesagte zu verstehen. Die Qualität wird entsprechend reduziert. Wenn Sie Audio mit minimalen Auswirkungen auf Netzwerk- und/oder Speicherkapazität aufzeichnen müssen, kann AMR eine ausgezeichnete Wahl sein. Wenn Sie jedoch eine hochwertige Wiedergabe menschlicher Sprache – oder auch nur eine minderwertige Musikwiedergabe – benötigen, müssen Sie ein anderes Format wählen.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>Half Rate (HR) und Full Rate (FR):</strong> 1,8 kbps, 4,75 kbps,
        5,15 kbps, 5,9 kbps, 6,7 kbps, 7,4 kbps, 7,95 kbps
      </td>
    </tr>
    <tr>
      <td><strong>Nur Full Rate (FR):</strong> 10,2 kbps und 12,2 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>13-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>n. v.</td>
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
      <th scope="row">Audiofrequenzbandbreite</th>
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
              <th scope="row">Merkmal</th>
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
          Obwohl der Chrome-Browser AMR nicht unterstützt, unterstützt ChromeOS
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
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Nicht frei; Lizenzgebühren und jährliche Tantiemen fallen an. Einzelheiten
        finden Sie bei der
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge-Lizenzierung</a
        >
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein von der [Xiph.org Foundation](https://xiph.org/) veröffentlichter verlustfreier Audio-Codec. Er bietet gute Komprimierungsraten ohne Verlust der Audiowiedergabetreue; das heißt, das dekomprimierte Audio ist mit dem Original identisch. Da der Komprimierungsalgorithmus speziell für Audio konzipiert ist, erzielt er bessere Ergebnisse als ein Allzweck-Komprimierungsalgorithmus.

FLAC ist eine ausgezeichnete Wahl für kleinere Audiodateien mit Effekten, bei denen makellose Qualität und Klanggenauigkeit gewünscht werden, sowie zur Archivierung von Musik.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>4-Bit- bis 24-Bit-Ganzzahlen</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        1 Hz bis 65.535 Hz (in 1-Hz-Schritten) oder 10 Hz bis 655.350 Hz in
        10-Hz-Schritten
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei; bis zu 40–50 % Größenreduzierung</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>Vollspektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4,3 ms bis 92 ms, wobei 46,4 ms der typische Durchschnitt sind</td>
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
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und ohne Lizenzanforderungen frei nutzbar</td>
    </tr>
  </tbody>
</table>

### G.711 (Pulse Code Modulation von Sprachfrequenzen)

Die von der International Telecommunications Union (ITU) veröffentlichte **G.711**-Spezifikation wurde 1972 herausgegeben, um eine Standard-Audiokodierung für Telefonanwendungen zu definieren. Sie unterstützt Audio in Sprachqualität, das Frequenzen von 300 bis 3400 Hz abdeckt. Sie wird häufig für Telefonverkehr und Voicemail verwendet und ist die hochwertigste Audiokodierung, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein Codec mit hoher Wiedergabetreue, sondern dafür optimiert, einen breiten Bereich von Sprachpegeln – vom Flüstern bis zum Schreien – bei hoher Verständlichkeit und geringer Rechenkomplexität zu unterstützen. G.711 verwendet einen logarithmischen Kompandierungsalgorithmus, der 14 Bit Dynamikbereich in einem 8-Bit-Sample bietet. Es verwendet eine Abtastrate von 8000 Samples/s, was einer Bitrate von 64000 bps entspricht.

Es gibt zwei Varianten von G.711, die die genaue mathematische Gleichung des Algorithmus angeben: [µ-law](https://en.wikipedia.org/wiki/M-law) (häufig in Nordamerika und Japan verwendet) und [A-law](https://en.wikipedia.org/wiki/A-law) (im Rest der Welt verbreitet). Es gibt keinen wesentlichen Qualitätsunterschied zwischen den beiden Verfahren, und es ist möglich, Audio von einem in das andere umzuwandeln. Dennoch ist es wichtig, in jeder Wiedergabeanwendung oder jedem Dateiformat anzugeben, welches Verfahren verwendet wird. A-law-Audio wird schlecht wiedergegeben, wenn es versehentlich mit dem µ-law-Algorithmus dekomprimiert wird, und umgekehrt.

Dieser Codec muss von allen [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen unterstützt werden, da er einfach, leicht zu implementieren, weit verbreitet und auf allen modernen Computerplattformen breit kompatibel ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>kodiertes Audio hat 8 Bit pro Sample</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
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
      <th scope="row">Audiofrequenzbandbreite</th>
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
              <th scope="row">Merkmal</th>
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
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle zutreffenden Patente sind abgelaufen, daher kann G.711 ohne
        Einschränkung frei verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64-kbps-(7-kHz)-Audiokodierung)

Der von der International Telecommunications Union (ITU) veröffentlichte **G.722**-Codec wurde speziell für Sprachkomprimierung entwickelt. Seine Audiokodierungsbandbreite ist auf den Bereich von 50 Hz bis 7.000 Hz begrenzt, der den größten Teil des Frequenzbereichs typischer menschlicher Lautäußerungen abdeckt. Dadurch ist er ungeeignet für Audio, das außerhalb des Bereichs menschlicher Sprache liegen kann, beispielsweise Musik.

G.722-Audio wird mit Adaptive Differential Pulse Code Modulation (ADPCM) kodiert, bei der jedes Sample nicht durch seinen absoluten Wert dargestellt wird, sondern als Wert, der angibt, wie stark sich das neue Sample vom vorherigen Sample unterscheidet.

G.722 wird hauptsächlich mit WebRTC-Verbindungen verwendet, da es einer der von der WebRTC-Spezifikation vorgeschriebenen Audio-Codecs ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; in der Praxis werden jedoch immer
        64 kbps verwendet<br />G.722 Annex B Super Wide-Band: 64 kbps, 80 kbps und
        96 kbps<br />G.722 Annex D Stereo Wide-Band: 64 kbps und 80 kbps<br />G.722
        Annex D Stereo Super Wide-Band: 80 kbps, 96 kbps, 112 kbps und 128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>14-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        16 kHz (ADPCM ist so spezifiziert, dass 8 kHz, 11,025 kHz, 22,05 kHz,
        44,1 kHz zulässig sind, aber G.722 verwendet 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>128 kbps bei 44,1-kHz-Abtastrate</td>
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
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>50 Hz – 7 kHz</td>
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
              <th scope="row">Merkmal</th>
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
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle zutreffenden Patente sind abgelaufen; G.722 kann ohne Einschränkung
        frei verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den durch die MPEG/MPEG-2-Standards spezifizierten Audioformaten ist **MPEG-1 Audio Layer III** – auch bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)** – bei weitem das am weitesten verbreitete und bekannteste. Der MP3-Codec wird durch [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert und wurde 1991 eingeführt (und 1992 finalisiert).

Wenn Audio im MP3-Format in einem MPEG-Container gespeichert wird, wird die resultierende Datei auch einfach als „MP3-Datei“ oder „MP3“ bezeichnet. Dateien mit der allgegenwärtigen Erweiterung `.mp3` werden in einem möglicherweise weltweit am weitesten verbreiteten Audiodateiformat gespeichert, das zu einem großen Teil für die digitale Audiorevolution der späten 1990er- und frühen 2000er-Jahre verantwortlich ist.

MPEG-1-MP3-Audio unterstützt höhere Bitraten und höhere Abtastraten als MP3-Audio in MPEG-2-Dateien. MP3 im MPEG-1-Format eignet sich im Allgemeinen am besten für Musik oder andere komplexe Audiodaten, während MP3-Audio im MPEG-2-Modus für Sprache und andere einfachere Klänge akzeptabel ist.

Die Patente hinter MP3 sind abgelaufen, wodurch viele oder die meisten Lizenzbedenken bei der Verwendung von MP3-Dateien in Ihren Projekten entfallen. Das macht sie für viele Projekte zu einer guten Wahl.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>MPEG-1-Modus:</strong> 32 kbps, 40 kbps, 48 kbps, 56 kbps, 64
        kbps, 80 kbps, 96 kbps, 112 kbps, 128 kbps, 160 kbps, 192 kbps, 224
        kbps, 256 kbps, 320 kbps
      </td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 8 kbps, 16 kbps, 24 kbps, 32 kbps, 40
        kbps, 48 kbps, 56 kbps, 64 kbps, 80 kbps, 96 kbps, 112 kbps, 128 kbps,
        144 kbps, 160 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>16-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Abtastraten</th>
      <td><strong>MPEG-1-Modus:</strong> 32000 Hz, 44100 Hz, 48000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 16000 Hz, 22050 Hz, 24000 Hz (die halbe
        Frequenz der von MPEG-1 unterstützten Modi)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>128 kbps bei 48-kHz-Abtastrate</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Maximale Audiokanäle</th>
      <td><strong>MPEG-1-Modus:</strong> 2 [2.0]</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 5 (plus 1 optionaler Low Frequency
        Enhancement-Kanal) [5.1]
      </td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>Variiert abhängig von Bitrate und psychoakustischer Analyse</td>
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
              <th scope="row">Merkmal</th>
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
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Seit 2012 patentfrei in der EU; seit dem 16. April 2017 patentfrei in den
        Vereinigten Staaten; jetzt frei nutzbar
      </td>
    </tr>
  </tbody>
</table>

Aus Patentgründen unterstützte Firefox MP3 vor Version 71 nicht direkt; stattdessen wurden plattformeigene Bibliotheken zur Unterstützung von MP3 verwendet. Diese Fähigkeit wurde auf jeder Plattform in unterschiedlichen Firefox-Versionen eingeführt:

<table class="standard-table" style="margin-left: 4em; max-width: 30em">
  <caption>
    MP3-Unterstützung mit externer Bibliothek nach Plattform in Firefox
  </caption>
  <thead>
    <tr>
      <th scope="row">Plattform</th>
      <th scope="col">Erste Firefox-Version<br />mit MP3-Unterstützung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Windows (Vista und höher)</th>
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

Das Audioformat [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) wurde von der Xiph.org Foundation als vollständig offenes Audioformat entwickelt; es wurde von der [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein guter Allzweck-Audio-Codec, der Audio niedriger Komplexität wie Sprache sowie Musik und andere Klänge hoher Komplexität effizient verarbeiten kann.

Opus unterstützt mehrere Komprimierungsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei verwenden, da der Encoder für jedes Audio-Frame die Bitrate, Audio-Bandbreite, den Algorithmus und andere Details der Komprimierungseinstellungen auswählen kann.

Opus ist ein guter Allround-Audio-Codec für die Verwendung in Ihren Webanwendungen und kann für alle von Ihnen vorgesehenen Audioaufgaben verwendet werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>6 kbps – 510 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>16-Bit-Ganzzahl und 32-Bit-Gleitkommazahl (-1.0 bis 1.0)</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Effektive Abtastrate</th>
            </tr>
            <tr>
              <th scope="row">Schmalband (NB)</th>
              <td>8 kHz</td>
            </tr>
            <tr>
              <th scope="row">Mittelband (MB)</th>
              <td>12 kHz</td>
            </tr>
            <tr>
              <th scope="row">Breitband (WB)</th>
              <td>16 kHz</td>
            </tr>
            <tr>
              <th scope="row">Superbreitband (SWB)</th>
              <td>24 kHz</td>
            </tr>
            <tr>
              <th scope="row">Vollband (FB)</th>
              <td>48 kHz</td>
            </tr>
          </tbody>
        </table>
        <p>
          Die angegebenen Abtastraten sind <em>effektive Abtastraten</em>. Opus
          verwendet einen Algorithmus, der auf Audiobandbreiten statt auf Abtastraten
          basiert. Einzelheiten finden Sie in {{RFC(6716, "", 2)}}. Darüber hinaus
          gibt es einen <em>optionalen</em> Teil der Opus-Spezifikation (Opus Custom),
          der nicht standardmäßige Abtastraten zulässt, von dessen Verwendung jedoch
          abgeraten wird.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>96 kbps bei 48-kHz-Abtastrate</td>
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
      <th scope="row">Audiofrequenzbandbreite</th>
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
              <th scope="row">Mittelband (MB)</th>
              <td>6 kHz</td>
            </tr>
            <tr>
              <th scope="row">Breitband (WB)</th>
              <td>8 kHz</td>
            </tr>
            <tr>
              <th scope="row">Superbreitband (SWB)</th>
              <td>12 kHz</td>
            </tr>
            <tr>
              <th scope="row">Vollband (FB)</th>
              <td>20 kHz</td>
            </tr>
          </tbody>
        </table>
        <p>
          Obwohl das
          <a href="https://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem">Nyquist-Shannon-Abtasttheorem</a>
          zeigt, dass die Audiobandbreite bis zur Hälfte der Abtastrate betragen
          kann, erlaubt Opus keine Kodierung außerhalb eines maximalen
          Audiofrequenzbands von 20 kHz, da das menschliche Ohr ohnehin nichts
          oberhalb der 20-kHz-Grenze wahrnehmen kann. Dies spart etwas Platz im
          kodierten Audio.
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
              <th scope="row">Merkmal</th>
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
          Diese Informationen beziehen sich auf die Unterstützung von Opus in den
          HTML-Elementen {{HTMLElement("audio")}} und {{HTMLElement("video")}},
          nicht auf WebRTC.
        </p>
        <p>
          Safari unterstützt Opus im {{HTMLElement("audio")}}-Element nur,
          wenn es in einer CAF-Datei verpackt ist, und nur unter macOS High Sierra
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
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und ohne Lizenzanforderungen frei nutzbar</td>
    </tr>
  </tbody>
</table>

### Vorbis

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format der [Xiph.org Foundation](https://xiph.org/), das eine breite Palette von Kanalkombinationen unterstützt, darunter mono, stereo, polyphon, quadrophon, 5.1-Surround, ambisonisch oder bis zu 255 diskrete Audiokanäle. Abhängig von der beim Kodieren verwendeten Qualitätseinstellung kann die resultierende Bitrate von etwa 45 kbps bis 500 kbps variieren. Vorbis verwendet grundsätzlich Kodierung mit variabler Bitrate; die Bitrate kann während des Komprimierungsprozesses nach Bedarf von einem Sample zum nächsten variieren.

Im Allgemeinen ist Vorbis hinsichtlich Größe und Bitrate bei ähnlichen Qualitätsstufen effizienter als MP3. Dies und seine freie und offene Lizenz machen es zu einer guten Wahl für viele Arten von Audiodaten, sofern seine hohe Latenz kein Problem darstellt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>45 kbps – 500 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleformate</th>
      <td>16-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz – 192 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>
        192 kbps bei 48 kHz; dies wird typischerweise durch Einstellen der
        Qualitätsstufe auf 6 bis 8 erreicht.
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
      <th scope="row">Audiofrequenzbandbreite</th>
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
              <th scope="row">Merkmal</th>
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
          Diese Informationen beziehen sich auf die Unterstützung von Vorbis in
          den HTML-Elementen {{HTMLElement("audio")}} und
          {{HTMLElement("video")}}, nicht auf WebRTC.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>Ogg, WebM</td>
    </tr>
    <tr>
      <th scope="row">
        Kompatibel mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und ohne Lizenzanforderungen frei nutzbar</td>
    </tr>
  </tbody>
</table>

## Auswählen eines Audio-Codecs

Unabhängig davon, welchen Codec Sie verwenden, erledigt er in der Regel die Aufgabe, auch wenn er nicht die ideale Wahl ist, sofern Sie keinen Codec wählen, der speziell für eine völlig andere Art von Quellaudio entwickelt wurde. Wenn Sie beispielsweise einen Codec nur für Sprache auswählen und versuchen, ihn für Musik zu verwenden, erzielen Sie keine brauchbaren Ergebnisse.

Einige Codecs können jedoch die Kompatibilität einschränken, während andere für Ihre Anforderungen optimaler sein können. Hier geben wir Hinweise, die Ihnen helfen, einen geeigneten Codec für Ihren Anwendungsfall auszuwählen.

Bei der Auswahl eines Codecs für Ihr Audio sollten Sie zunächst die folgenden Fragen berücksichtigen:

- Wird das kodierte Audio neu abgemischt oder erneut komprimiert? Falls ja, vermeiden Sie verlustbehaftete Komprimierung, die durch erneute Komprimierung des Audios verstärkt würde; oder verwenden Sie zumindest so wenig Komprimierung wie möglich.
- Muss das Audio in einen bestimmten Dateityp eingefügt werden? Beachten Sie dies, da Mediencontainer typischerweise eine bestimmte Teilmenge der verfügbaren Codecs unterstützen.
- Welche Art von Audioinhalten verarbeitet der Codec? Bestimmte Codecs sind speziell für reine Sprachinhalte konzipiert (sie nutzen den für menschliche Sprache benötigten kleineren Frequenzbereich). Andere können eine algorithmische Tendenz haben, bei der Kodierung bestimmter Musikgenres schlechter abzuschneiden.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften besitzt jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen können?
- In welchem Umfang ist Latenz für Ihre Anforderungen wichtig, wenn überhaupt? Wenn Sie Klang benötigen, der sehr präzise zeitlich abgestimmt ist, gilt: Je niedriger die Latenz, desto besser.
- Wie viel Komprimierung müssen Sie erreichen?

Betrachten wir einige häufige Szenarien, um ein Gefühl für den Entscheidungsprozess zu bekommen.

### Beispiel: Musik für Streaming

Für Musik-Streaming sollten Sie einen Codec auswählen, der die Bandbreitennutzung so weit wie möglich minimiert und gleichzeitig durch Komprimierung möglichst wenige Artefakte in das Audio einführt. Das ist notwendig, weil die Geschwindigkeit, mit der die Musik heruntergeladen wird, nicht größer sein darf als die im Netzwerk verfügbare Bandbreite; idealerweise sollte zudem Spielraum für Schwankungen der Netzwerkgeschwindigkeit und die Netzwerknutzung durch andere Anwendungen bleiben.

Sofern kein spezifischer Bedarf an verlustfreier Komprimierung besteht oder die Netzwerkbandbreite garantiert hoch genug ist, um diese zu unterstützen, ist ein verlustbehaftetes Komprimierungsschema eine gute Wahl. Welches Sie wählen, hängt von der Browser-Kompatibilität und der Verfügbarkeit besonderer Funktionen ab, die der Codec gegebenenfalls unterstützen muss.

_Normalerweise_ ist die Latenz beim Streaming von Musik nicht besonders wichtig. Mögliche Ausnahmen sind Musik in Schleifen, bei der Musik ohne Unterbrechung wiederholt abgespielt werden können muss, oder wenn Songs direkt hintereinander ohne Lücke wiedergegeben werden sollen. Dies kann besonders für klassische Musik, Soundtracks für Theater und Hintergrundmusik während des Spielens wichtig sein.

Für die allgemeine Musikwiedergabe sind MP3, AAC und Vorbis die drei wahrscheinlichsten Kandidaten.

- AAC in einem MP4-Container wird von allen wichtigen Browsern unterstützt, was es zu einer ausgezeichneten Wahl macht.
- Vorbis wird fast immer in Ogg-Dateien verwendet, aber Ogg-Container werden nicht universell unterstützt. Selbst Microsoft Edge, das Vorbis unterstützt, unterstützt Ogg-Container noch nicht.
- MP3 (MPEG-1 Audio Layer III) wird von allen wichtigen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die eine Audio-Layer-III-Spur enthalten.

Wenn Sie die Latenz bei der Musikwiedergabe minimieren müssen, sollten Sie Opus ernsthaft in Betracht ziehen, da es den niedrigsten Latenzbereich der Allzweck-Codecs hat (5 ms bis 66,5 ms, verglichen mit mindestens 100 ms bei den anderen).

> [!NOTE]
> Die hier beschriebenen Kompatibilitätsinformationen sind im Allgemeinen zum Zeitpunkt der Erstellung dieses Artikels korrekt; es kann jedoch Vorbehalte und Ausnahmen geben. Lesen Sie unbedingt die Kompatibilitätstabellen, bevor Sie sich auf ein bestimmtes Medienformat festlegen.

Auf dieser Grundlage ist AAC wahrscheinlich Ihre beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Wenn Sie mehrere Formate bereitstellen können, beispielsweise durch Verwendung des Elements {{HTMLElement("source")}} innerhalb Ihrer Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}, können Sie natürlich viele oder alle dieser Ausnahmen vermeiden.

### Beispiel: Musik zum Herunterladen

Vom Benutzer heruntergeladene Musik kann auf eine größere Gesamtdateigröße als gestreamte Musik komprimiert werden, da es – anders als beim Streaming – keine Rolle spielt, wenn die Downloadgeschwindigkeit niedriger als die Wiedergabegeschwindigkeit der Medien ist. Das bedeutet, dass Sie verlustbehaftete Komprimierung mit höheren Bitraten in Betracht ziehen können, was zu größeren Dateien, aber geringeren Verlusten der Wiedergabetreue führt. Oder Sie können ein verlustfreies Format wählen. Die Wahl hängt weitgehend von der Kombination aus Anforderungen Ihrer Anwendung und den Präferenzen Ihrer Benutzer ab.

Für einen tatsächlichen Musik-Download-Dienst könnten Sie Songs je nach einer vom Benutzer ausgewählten Präferenz als MP3-Dateien mit 128 Kbps, AAC-Dateien mit 256 kbps (in MP4-Containern) oder FLAC-Dateien zum Download anbieten. Wenn Sie nur ein Format auswählen müssen, wählen Sie eines, das angesichts Ihrer Anforderungen und der Art der heruntergeladenen Audioinhalte sinnvoll ist.

Im Allgemeinen ist MP3 natürlich das häufigste für Musik verwendete Format; wählen Sie nach Möglichkeit eine Bitrate von mindestens 192 kbps. Der iTunes Store hingegen vertreibt Musik im AAC-Format mit 256 kbps.

### Beispiel: Sprachaufzeichnung und -wiedergabe

Die spezifischen Eigenschaften menschlicher Sprache ermöglichen es sprachspezifischen Codecs, das Audio weitaus stärker zu komprimieren, als dies bei den meisten Allzweck-Codecs möglich ist. Denn obwohl Menschen Frequenzen von etwa 20 Hz bis 20.000 Hz hören und menschliche Sprachlaute von etwa 300 Hz bis 18.000 Hz reichen, liegt die Mehrheit der Sprachlaute, die wir zum Verstehen des Gesagten benötigen, im Frequenzbereich von etwa 500 Hz bis 3.000 Hz. Das bedeutet, dass reine Sprach-Codecs alles andere verwerfen können.

Die sprachspezifischen Codecs sind jedoch allesamt von Natur aus sehr verlustbehaftet, und jeder Klang mit wichtigen Informationen in Frequenzbändern außerhalb des erfassten Stimmbereichs geht vollständig verloren. Dadurch sind diese Codecs für alles außer gesprochenen Worten völlig ungeeignet. Selbst Audio, das nur Stimmen enthält, aber Gesang statt gesprochener Sprache, wird in einem dieser Formate wahrscheinlich keine akzeptable Qualität haben.

Sprachaufzeichnung und -wiedergabe benötigen üblicherweise geringe Latenz, um mit Videospuren synchronisiert zu werden oder Übersprechen und andere Probleme zu vermeiden. Glücklicherweise führen die Eigenschaften, durch die Sprach-Codecs hinsichtlich Speicherplatz so effizient sind, auch dazu, dass sie typischerweise eine sehr geringe Latenz aufweisen. Wenn Sie mit WebRTC arbeiten, hat beispielsweise [G.722](#g.722_64_kbps_7_khz_audio_coding) eine Latenz von 4 ms (verglichen mit über 100 ms für MP3), und die Latenz von [AMR](#amr_adaptive_multi-rate) beträgt etwa 25 ms.

> [!NOTE]
> Weitere Informationen über WebRTC und die von ihm verwendbaren Codecs finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Die im Web allgemein für reine Sprachkodierung verwendeten Codecs sind G.722 und AMR. AMR ist ein Schmalband-Codec, der nur Frequenzen zwischen 200 Hz und 3.400 Hz mit Bitraten kodiert, die typischerweise bei etwa 7,4 kbps liegen. G.722 hingegen ist ein Breitband-Codec, der die Audiobandbreite bei wesentlich höheren Bitraten – üblicherweise 64 kbps – auf 50 Hz bis 7.000 Hz erweitert.

Wenn Sie über reichlich Netzwerkbandbreite verfügen und mit hinreichender Sicherheit davon ausgehen können, dass Ihre Benutzer dies ebenfalls tun, ist G.722 die bessere Wahl. Wählen Sie AMR, um Speicher- und Netzwerkeffizienz in einer eingeschränkten Umgebung zu maximieren.

### Beispiel: Audioclips für professionelles Mischen

Bei der Komprimierung von Audio, das gemischt oder neu abgemischt wird, möchten Sie typischerweise keinen oder fast keinen Verlust der Wiedergabetreue, was auf einen verlustfreien Codec hindeutet. Da verlustfreie Kodierung jedoch naturgemäß einen deutlich geringeren Komprimierungsgrad als verlustbehaftete Kodierung aufweist, können Sie feststellen, dass Sie bei ausreichend großem Quellaudio dennoch einen verlustbehafteten Encoder wählen müssen, insbesondere in einer Webumgebung, in der Sie die Downloadrate der Medien nicht steuern können.

Unter der Annahme, dass verlustfreie Komprimierung hier unsere beste Option ist – was sie normalerweise ist, solange die Audiodateien klein sind –, sind die drei stärksten Kandidaten aus Codec-Perspektive [FLAC](https://en.wikipedia.org/wiki/FLAC), [Apple Lossless (ALA](https://en.wikipedia.org/wiki/Apple_Lossless) und [MPEG-4 ALS](https://en.wikipedia.org/wiki/Audio_Lossless_Coding). Welche wir wählen, hängt von der Browser-Unterstützung und den unterstützenden Mediencontainerformaten ab.

Für die Zwecke dieses Beispiels nehmen wir an, dass alle Browser dieselbe Codec- und Container-Unterstützung wie Firefox haben, obwohl dies weit von der Realität entfernt ist. Berücksichtigen Sie bei Ihren Entscheidungen den tatsächlichen Umfang der Codec-Unterstützung.

- Firefox unterstützt FLAC in den nativen Containern von FLAC sowie in Ogg- und MPEG-4-Dateien (MP4).
- Firefox unterstützt Apple Lossless nur über seine plattformspezifische QuickTime-Unterstützung.
- Firefox unterstützt MP4 ALS nicht.

In diesem Fall scheint FLAC der wahrscheinlich beste zu verwendende Codec zu sein; ALAC hat wenig bis keine direkte Browser-Unterstützung.

## Audiokodierungssoftware

Es gibt viele Werkzeuge zur Audiokodierung. Die einfachsten sind für das Rippen von CDs oder das Einlesen von Audiodateien und deren schnelle, automatische Konvertierung in das MP3- oder AAC-Format zur Speicherung in einer Bibliothek bestimmt, etwa [iTunes](https://www.apple.com/itunes/). Bei der Entwicklung von Webanwendungen, die Audio als Bestandteil der Anwendung verwenden, beispielsweise Spiele, benötigen Sie jedoch mehr Kontrolle über den Kodierungsprozess und mehr Optionen für das beim Kodieren verwendete Format.

Einige beliebte Optionen:

- [FFmpeg](https://ffmpeg.org/)
  - : Das wohl bekannteste und am meisten geschätzte verfügbare Open-Source-Codec-Paket. FFmpeg unterstützt die Mehrheit der beliebtesten Audioformate und bietet Befehlszeilenwerkzeuge und Bibliotheken zum Kodieren, Dekodieren und Durchführen von Formatkonvertierungen für Audio und Video. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Handbrake](https://handbrake.fr/)
  - : Ein sehr beliebtes Open-Source-Frontend für FFmpeg, das eine grafische Benutzeroberfläche hinzufügt, die es viel einfacher macht, die breite Palette an Optionen zu steuern, die FFmpeg beim Kodieren von Audio und/oder Video bietet. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Audacity](https://www.audacityteam.org/)
  - : Ein Open-Source-Audioeditor, der das Laden von Audio aus vielen verschiedenen Formaten sowie das Bearbeiten, Filtern und Anpassen des Audios unterstützt und das Speichern entweder im ursprünglichen oder in einem neuen Format ermöglicht. Verfügbar für macOS, Linux und Windows.
- [LAME](https://lame.sourceforge.io/)
  - : Ein hochwertiger Open-Source-MP3-Encoder mit Unterstützung für CBR-, ABR- und VBR-Kodierung sowie einer Vielzahl weiterer Optionen. Wird vom LAME-Projekt nur in Quellform verteilt, kann aber mit [Homebrew](https://brew.sh/) oder ähnlichen Werkzeugen installiert werden.

## Siehe auch

- [Mediencontainerformate](/de/docs/Web/Media/Guides/Formats/Containers)
- Die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Leitfaden für Web-Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

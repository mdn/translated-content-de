---
title: Web-Audio-Codec-Leitfaden
slug: Web/Media/Guides/Formats/Audio_codecs
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Selbst Sound in bescheidener Qualität und in hochauflösendem Stereo kann einen beträchtlichen Speicherplatz beanspruchen. Für Webentwickler ist ein noch größeres Anliegen die Netzwerkbandbreite, die erforderlich ist, um Audio zu übertragen, sei es zum Streaming oder um es zum späteren Gebrauch im Spiel herunterzuladen. Die Verarbeitung von Audiodaten zur Kodierung und Dekodierung erfolgt durch einen Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DEC**oder). In diesem Artikel betrachten wir Audio-Codecs, die im Web verwendet werden, um Audio zu komprimieren und zu dekomprimieren, was ihre Fähigkeiten und Anwendungsfälle sind und geben Anleitungen, welche Audio-Codecs Sie für Ihre Inhalte auswählen sollten.

Darüber hinaus verwenden WebRTC-Implementierungen im Allgemeinen eine Teilmenge dieser Codecs für die Medienkodierung und -dekodierung und können auch zusätzliche Codecs unterstützen, um eine optimale plattformübergreifende Unterstützung von Video- und Audiokonferenzen zu gewährleisten und besser mit älteren Telekommunikationslösungen zu integrieren. Details finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Informationen zu den grundlegenden Konzepten, wie digitale Audio funktioniert, finden Sie im Artikel [Digital audio concepts](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

## Übliche Codecs

Die folgende Liste zeigt die Codecs, die im Web am häufigsten verwendet werden, und welche Container (Dateitypen) sie unterstützen. Wenn Sie nur wissen müssen, welche Codecs überhaupt verwendet werden können, ist dies für Sie. Natürlich können einzelne Browser sich dafür entscheiden, nicht alle dieser Codecs zu unterstützen, und ihre Unterstützung für die Container-Typen, die sie verwenden können, kann ebenfalls variieren. Darüber hinaus können Browser sich dafür entscheiden, zusätzliche Codecs zu unterstützen, die in dieser Liste nicht enthalten sind.

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
      <td>Puls-Code-Modulation (PCM) von Sprachfrequenzen</td>
      <td>
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#g.722_64_kbps_7_khz_audio_coding">G.722</a></th>
      <td>
        7 kHz Audio-Coding bei 64 kbps (für
        Telekommunikation/{{Glossary("VoIP", "VoIP")}})
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
          Wenn Daten des MPEG-1 Audio Layer III Codecs in einer MPEG-Datei gespeichert werden und die Datei keinen Videotrack enthält, wird die Datei normalerweise als MP3-Datei bezeichnet, obwohl es sich immer noch um eine MPEG-Formatdatei handelt.
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

Es gibt zwei allgemeine Kategorien von Faktoren, die das von einem Audio-Codec-Encoder ausgegebene kodierte Audio beeinflussen: Details über das Format und den Inhalt des Quell-Audios sowie der Codec und seine Konfiguration während des Kodierprozesses.

Für jeden Faktor, der das kodierte Audio beeinflusst, gibt es eine Regel, die fast immer zutrifft: Da die Treue von digitalem Audio durch die Granularität und Präzision der verwendeten Samples bestimmt wird, um es in einen Datenstrom umzuwandeln, desto mehr Daten zur Darstellung der digitalen Version des Audios verwendet werden, desto genauer wird das gesampelte Audiosignal dem Quellmaterial entsprechen.

### Die Wirkung des Quell-Audioformats auf das kodierte Audio

Da kodiertes Audio inhärent weniger Bits verwendet, um jede Probe darzustellen, hat das Quell-Audioformat möglicherweise weniger Einfluss auf die Größe des kodierten Audios, als man erwarten könnte. Dennoch gibt es eine Reihe von Faktoren, die die Qualität und Größe des kodierten Audios beeinflussen. Die folgende Tabelle listet einige der wichtigsten Faktoren des Quell-Audio-Datei-Formats auf und ihren Einfluss auf das kodierte Audio.

<table class="standard-table">
  <caption>
    Die Wirkung des Quell-Audioformats und des Inhalts auf die Qualität
    und Größe des kodierten Audios
  </caption>
  <thead>
    <tr>
      <th scope="row">Funktion</th>
      <th scope="col">Auswirkung auf die Qualität</th>
      <th scope="col">Auswirkung auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure"
          >Anzahl der Kanäle</a
        >
      </th>
      <td>
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der Richtung, nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die Größe des kodierten Audios erheblich erhöhen, abhängig vom Inhalt und den Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
        Unerwünschtes Hintergrundrauschen oder Zischen neigt dazu, die Audioqualität sowohl direkt (indem es Details des Vordergrundaudios verdeckt) als auch indirekt (indem es die Audiowellenform komplizierter macht und daher schwerer bei gleichzeitiger Aufrechterhaltung der Präzision zu reduzieren ist) zu verringern.
      </td>
      <td>
        Zischen, statisches Rauschen oder Hintergrundgeräusche erhöhen die Audiokomplexität, was allgemein die Kompressionsmöglichkeit verringert.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#sampling_audio"
          >Abtastrate</a
        >
      </th>
      <td>
        Je mehr Abtastungen pro Sekunde verfügbar sind, desto höher ist wahrscheinlich die resultierende Treue des kodierten Audios.
      </td>
      <td>
        Eine Erhöhung der Abtastrate vergrößert die Größe der kodierten Audiodatei.
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
        Je größer die Samples, desto mehr Details kann jedes Sample enthalten, was zu einer genaueren Darstellung jedes Samples führt.
      </td>
      <td>
        Hängt vom Codec ab; Codecs haben typischerweise ein internes Sampleformat, das möglicherweise nicht dasselbe ist wie die ursprüngliche Samplegröße. Aber mehr Quelldetails können die kodierte Datei vergrößern; sie wird niemals kleiner gemacht.
      </td>
    </tr>
  </tbody>
</table>

Natürlich können diese Effekte durch Entscheidungen, die während der Kodierung des Audios getroffen werden, verändert werden. Zum Beispiel, wenn der Encoder so konfiguriert ist, dass die Abtastrate reduziert wird, wird der Effekt der Abtastrate auf die Ausgabedatei entsprechend verringert.

Weitere Informationen zu diesen und anderen Funktionen von Audiodaten finden Sie unter [Audio data format and structure](/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure).

### Die Wirkung der Codec-Konfiguration auf das kodierte Audio

Audio-Codecs verwenden in der Regel clever gestaltete und hochkomplexe mathematische Algorithmen, um Quelldaten zu komprimieren, sodass sie erheblich weniger Speicherplatz im Speicher oder in der Netzwerkbandbreite beanspruchen. Neben der Wahl des Encodertyps haben Sie möglicherweise die Möglichkeit, den Encoder mit Parametern anzupassen, die bestimmte Algorithmen auswählen, diese Algorithmen abstimmen und angeben, wie viele Durchgänge während der Kodierung angewendet werden sollen.

<table class="standard-table">
  <caption>
    Effekte der Audio-Encoder-Konfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Funktion</th>
      <th scope="col">Auswirkung auf die Qualität</th>
      <th scope="col">Auswirkung auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustfreie Kompression</a
        >
      </th>
      <td>Kein Verlust an Treue</td>
      <td>Es ist unwahrscheinlich, dass mehr als 40-50% Kompression erreicht werden</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Kompression</a
        >
      </th>
      <td>
        Immer ein gewisser Verlust an Treue; je höher die Kompression, desto größer der Verlust
      </td>
      <td>Kompression von bis zu 80-95% möglich</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#bit_rate"
          >Bitrate</a
        >
      </th>
      <td>Je höher die Bitrate, desto höher kann die Qualität sein</td>
      <td>
        Je höher die Bitrate, desto größer wird die kodierte Datei wahrscheinlich
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
        Wenn es Audio in den entfernten Frequenzbändern gibt, kann es zu einem merklichen Verlust an Treue kommen
      </td>
      <td>
        Das Entfernen von Frequenzbändern bedeutet weniger zu kodierende Daten, wodurch kleinere kodierte Dateien entstehen
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#joint_stereo"
          >Stereo-Codierung</a
        >
      </th>
      <td>
        Einfache Stereo- und
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#mid-side_stereo_coding"
          >Mitte-Seite-Stereo-Codierung</a
        >
        beeinflussen die Qualität nicht;
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#intensity_stereo_coding"
          >Intensitäts-Stereo-Codierung</a
        >
        führt jedoch zu Detailverlusten.
      </td>
      <td>
        Gemeinsame Stereo-Codierung kann die Größe des kodierten Audios bis zu einem gewissen Grad reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter – und der Bereich der möglichen Werte – variiert von Codec zu Codec und sogar zwischen verschiedenen Kodierungs-Utilities für denselben Codec, lesen Sie also die Dokumentation, die mit der Kodierungssoftware geliefert wird, die Sie verwenden, um mehr zu erfahren.

### Funktionen, die die Größe des kodierten Audios beeinflussen

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige davon hängen von der Form des Quell-Audios ab; andere hängen von Entscheidungen ab, die während der Kodierung des Audios getroffen werden.

#### Verlustfreie vs. verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokompression. **Verlustfreie** Kompressionsalgorithmen reduzieren die Größe des Audios, ohne die Qualität oder Treue des Sounds zu beeinträchtigen. Beim Dekodieren von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert ist, ist das Ergebnis in jeder Hinsicht identisch mit dem Originalsound bis hin zum Bit.

**Verlustbehaftete** Codecs hingegen nutzen die Tatsache aus, dass das menschliche Ohr kein perfekter Interpret von Audio ist, und die Tatsache, dass das menschliche Gehirn die wichtige Information aus unvollkommenem oder rauschigem Audio herausfiltern kann. Sie entfernen Audiofrequenzen, die nicht oft verwendet werden, tolerieren den Verlust an Präzision im dekodierten Ausgabeformat und verwenden andere Methoden, um Audiokontent, Qualität und Treue zu verlieren, um kleinere kodierte Medien zu produzieren. Beim Dekodieren ist die Ausgabe immer noch in unterschiedlichem Maße verständlich. Der spezifische Codec, der verwendet wird – und die ausgewählte Kompressionskonfiguration – bestimmen, wie nahe das Ergebnis dem ursprünglichen, unkomprimierten Audiosignal erscheint, wenn es vom menschlichen Ohr gehört wird.

Aufgrund der Unterschiede in der Funktionsweise verlustbehafteter Codecs im Vergleich zu verlustfreien, insbesondere dass verlustfreie Codecs bei ihrer Kompression viel konservativer sein müssen, führen verlustbehaftete Codecs fast immer zu erheblich kleineren komprimierten Audiodateien.

Im Allgemeinen sind die häufigsten Gründe für die Wahl von verlustfreiem Audio, dass Sie eine Archivqualitätsspeicherung benötigen oder dass die Audiodaten neu gemischt und erneut komprimiert werden und Sie vermeiden möchten, dass die Artefakte im Audio bei der erneuten Komprimierung verstärkt werden. Für das Echtzeit-Streaming von Audio ist in der Regel ein verlustbehafteter Codec erforderlich, um sicherzustellen, dass der Datenfluss mit der Audiowiedergabegeschwindigkeit mithalten kann, unabhängig von der Netzwerkleistung.

### Maximale Anzahl von Kanälen

Der an jeden Lautsprecher in einem Soundsystem gelieferte Ton wird durch einen Audiokanal in einem Stream bereitgestellt. Mono-Sound ist ein einzelner Kanal. Stereo-Sound sind zwei Kanäle. 5.1 Surround-Sound hat fünf Audiokanäle plus einen **Low Frequency Enhancement** (**LFE**)-Kanal.

LFE-Kanäle sind speziell dafür ausgelegt, Niedrigfrequenz-Audiodaten zu speichern und werden häufig verwendet, um Audiodaten für Subwoofer bereitzustellen. Wenn Sie die Anzahl der Audiokanäle in der Form X.Y (wie z. B. 2.1 oder 5.1) geschrieben sehen, ist die Zahl nach dem Dezimalpunkt, Y, die Anzahl der LFE-Kanäle. Zum Beispiel unterstützt MP3 einen LFE-Kanal, während AAC bis zu 16 unterstützt.

Zusätzlich zur Bereitstellung von Audio für bestimmte Lautsprecher in einem Soundsystem können einige Codecs es ermöglichen, dass Audiokanäle verwendet werden, um alternative Audios bereitzustellen, wie z. B. Gesang in verschiedenen Sprachen oder beschreibendes Audio für sehbehinderte Menschen.

### Audiofrequenzbandbreite

Die **Audiofrequenzbandbreite** eines Codecs gibt den Bereich der Audio-Frequenzen an, die mit dem Codec dargestellt werden können. Einige Codecs arbeiten spezifisch, indem sie Audio eliminieren, das außerhalb eines bestimmten Frequenzbereichs fällt. Es besteht ein Zusammenhang zwischen der Abtastrate und der maximalen Schallfrequenz, die durch eine Wellenform, die durch einen Codec dargestellt wird, repräsentiert werden kann. Auf theoretischer Ebene ist die maximale Frequenz, die ein Codec darstellen kann, die Abtastrate geteilt durch zwei; diese Frequenz wird als [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) bezeichnet. In der Realität ist das Maximum jedoch etwas niedriger, aber es ist nah daran.

Die Audiofrequenzbandbreite wird besonders sichtbar, wenn ein Codec so konzipiert oder konfiguriert ist, dass er menschliche Sprache anstelle eines breiten Soundspektrums darstellt. Menschliche Sprache liegt im Allgemeinen im Frequenzbereich von 300 Hz bis 18 kHz. Die überwiegende Mehrheit der menschlichen Vokalisationen existiert jedoch im Bereich von 300 Hz bis 8 kHz, und Sie können genug von menschlichen Vokalisationen im Frequenzbereich von 500 Hz bis 3 kHz erfassen, um immer noch verständlich zu sein.

Deshalb beginnen sprachspezifische Codecs oft damit, Sounds zu entfernen, die außerhalb eines festgelegten Bereichs liegen. Dieser Bereich ist die Audiofrequenzbandbreite. G.722 beispielsweise entfernt Sounds außerhalb des Frequenzbandbreitenbereichs von 50 Hz bis 7 kHz. Dies reduziert von vorneherein die zu kodierenden Daten.

## Codec-Details

Im Folgenden erhalten Sie einen kurzen Überblick über die einzelnen Codecs, ihre grundlegenden Fähigkeiten und ihre primären Anwendungsfälle.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding** (**AAC**)-Codec ist Teil des MPEG-4 (H.264)-Standards, genauer als Teil von [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html) definiert. AAC wurde entwickelt, um mehr Kompression bei höherer Audioqualität als MP3 zu bieten, und hat sich zu einer beliebten Wahl entwickelt. Es ist das Standardformat für Audio in vielen Medientypen, einschließlich Blu-Ray-Discs und HDTV, sowie für Songs, die von Online-Anbietern wie iTunes gekauft werden.

AAC verfügt über eine Reihe von Profilen, die Methoden zur Komprimierung von Audio für bestimmte Anwendungsfälle definieren, von hochwertigem Surround-Sound bis hin zu Audio mit niedriger Qualität für Audio ausschließlich mit Sprachinhalten.

Als patentbelastetes Format ist die Unterstützung für AAC etwas weniger vorhersehbar. Beispielsweise unterstützt Firefox AAC nur, wenn das Betriebssystem oder eine externe Bibliothek Unterstützung bietet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Willkürlich, bis zu 512 kbps</td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>32-Bit Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz - 96 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>96 kbps bei 48 kHz Abtastrate</td>
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
        0 Hz - 96 kHz (normale Audiokanäle)<br />0 Hz - 120 Hz (LFE
        Kanäle)
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
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt. Stattdessen
          verlässt sich Firefox auf die native Unterstützung von AAC durch die Plattform. Diese
          Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox
          Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und unterstützt nur das
          Hauptprofil von AAC. Darüber hinaus ist AAC in Chromium-Builds nicht verfügbar.
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
        Für das Streaming oder die Verbreitung von AAC-codierten Inhalten: Keine Lizenz erforderlich;
        Entwickler von Codecs müssen eine Patentlizenz über
        <a href="https://via-la.com/licensing-programs/aac/">VIA Licensing</a>
        erwerben
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein verlustfreier Codec, der von Apple entwickelt wurde. Nachdem es anfangs ein geschlossenes Format war, hat Apple es unter einer Apache-Lizenz geöffnet.

Plattform- und Browser-Unterstützung für ALAC ist nicht sehr stark, was es zu einer weniger idealen Wahl für den allgemeinen Gebrauch macht. Wenn Ihre Zielgruppe jedoch hauptsächlich macOS- und iOS-Nutzer sind, kann es in Betracht gezogen werden, da die Betriebssysteme integrierte Unterstützung für ALAC bieten. Andernfalls ist FLAC wahrscheinlich die bessere Wahl, wenn Sie einen verlustfreien Codec verwenden müssen.

Denken Sie jedoch daran, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherplatz erfordern und möglicherweise keine gute Wahl außerhalb sehr spezifischer Anwendungsfälle sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Basierend auf dem Sample-Format und der Abtastrate sowie dem Kompressionsniveau
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit, 20-Bit, 24-Bit und 32-Bit Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>1 Hz bis 384.000 Hz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
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
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">ALAC Unterstützung</th>
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

Der **[Adaptive Multi-Rate Audio-Codec](https://voiceage.com/AMR-NB.AMR.html)** ist darauf optimiert, menschliche Sprache effizient zu codieren. Er wurde 1999 als Teil des 3GPP Audio-Standards für sowohl [GSM](https://en.wikipedia.org/wiki/GSM) als auch [UMTS](https://en.wikipedia.org/wiki/UMTS) Mobiltelefonie standardisiert und verwendet einen multiraten Schmalband-Algorithmus, um Audiofrequenzen auf einer Qualitätsebene im Telefondienst-Niveau bei etwa 7,4 kbps zu codieren. Neben der Verwendung für Echtzeit-Telefonie kann AMR-Audio für Voicemail und andere kurze Audioaufzeichnungen verwendet werden.

AMR-Audio, das in Dateien gespeichert wird, kann als `.amr` typisiert werden, kann aber auch in `.3gp` Dateien gekapselt sein.

Als sprachspezifischer Codec ist AMR im Wesentlichen nutzlos für andere Inhalte, einschließlich Audio, das nur Gesangsstimmen enthält. Außerdem erfasst AMR, um die Kapazitätsanforderungen zu minimieren, nur den Teil der gesamten Audiofrequenzbandbreite der menschlichen Sprache, der absolut notwendig ist, um zu verstehen, was gesagt wird, sodass die Qualität entsprechend reduziert wird. Wenn Sie die Möglichkeit benötigen, Audio mit minimalem Einfluss auf Netzwerk- und/oder Speicherkapazität aufzunehmen, kann AMR eine großartige Wahl sein. Wenn Sie jedoch eine hochwertige Wiedergabe menschlicher Sprache oder sogar eine Musikreproduktion geringer Qualität benötigen, müssen Sie ein anderes Format wählen.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>Halbraten (HR) und Volle Rate (FR):</strong> 1,8 kbps, 4,75
        kbps, 5,15 kbps, 5,9 kbps, 6,7 kbps, 7,4 kbps, 7,95 kbps
      </td>
    </tr>
    <tr>
      <td><strong>Volle Rate (FR) nur:</strong> 10,2 kbps und 12,2 kbps</td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>13-Bit Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
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
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AMR Unterstützung</th>
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
        Nicht frei; Lizenzgebühren und jährliche Lizenzgebühren fallen an. Siehe
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge Lizenzierung</a
        >
        für Details
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audiocodec, veröffentlicht von der [Xiph.org Foundation](https://xiph.org/). Es bietet gute Kompressionsraten ohne Verlust der Audioqualität; das heißt, das dekomprimierte Audio ist identisch mit dem Original. Da der Kompressionsalgorithmus speziell für Audio entwickelt wurde, liefert er bessere Ergebnisse, als mit einem allgemeinen Kompressionsalgorithmus erreicht werden könnte.

FLAC ist eine großartige Wahl für kleinere Audiodateien, in denen eine einwandfreie Qualität und eine genaue Tonwiedergabe gewünscht sind sowie für die Archivierung von Musik.

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
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        1 Hz bis 65.535 Hz (in 1 Hz Schritten) oder 10 Hz bis 655.350 Hz in 10 Hz
        Schritten
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei; bis zu 40-50% Größenreduktion</td>
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
      <td>4,3 ms bis 92 ms mit 46,4 ms als typischen Durchschnitt</td>
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
              <th scope="row">FLAC Unterstützung</th>
              <td>Ja</td>
              <td>Ja</td>
              <td>51 (desktop)<br />58 (mobil)</td>
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

### G.711 (Pulscodemodulation von Sprachfrequenzen)

Die **G.711**-Spezifikation, veröffentlicht von der Internationalen Fernmeldeunion (ITU), wurde 1972 herausgegeben, um die standardmäßige Audio-Codierung für Telefonanwendungen zu definieren. Sie unterstützt eine sprachspezifische Audiofrequenz, die Bereiche von 300 bis 3400 Hz abdeckt. Sie wird extensiv für Telefonverkehr und Voicemails verwendet und ist die qualitativ hochwertigste Audiocodierung, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein hochauflösender Codec, sondern wurde stattdessen dafür optimiert, ein breites Spektrum an Sprachpegeln (vom Flüstern bis zum Schreien) bei gleichzeitiger hoher Verständlichkeit und geringer Rechenkomplexität zu unterstützen. G.711 verwendet einen logarithmischen Kompanding-Algorithmus, der in einem 8-Bit-Sample eine dynamische Reichweite von 14 Bits bietet. Es verwendet eine Abtastrate von 8.000 Proben/Sekunde, was einer Bitrate von 64.000 bps entspricht.

Es gibt zwei Varianten von G.711, die die genaue mathematische Gleichung für den Algorithmus anzeigen: [µ-law](https://en.wikipedia.org/wiki/M-law) (häufig in Nordamerika und Japan verwendet) und [A-law](https://en.wikipedia.org/wiki/A-law) (häufig im Rest der Welt). Zwischen den beiden Gesetzen besteht kein wesentlicher Qualitätsunterschied, und es ist möglich, Audio von einem zum anderen zu transkodieren. Dennoch ist es wichtig anzugeben, welches Gesetz in einer Wiedergabeanwendung oder Dateiformat verwendet wird. A-law-Audio wird schlecht wiedergegeben, wenn es versehentlich mit dem µ-law-Algorithmus dekomprimiert wird und umgekehrt.

Dieser Codec muss von allen [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen unterstützt werden, da er einfach, leicht zu implementieren, weit verbreitet und weitgehend kompatibel über alle modernen Computerplattformen hinweg ist.

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
      <td>Codiertes Audio hat 8 Bits pro Sample</td>
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
      <td>Logarithmische Komprimierung (µ-law oder A-law)</td>
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
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">G.711 Unterstützung</th>
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
        Alle anwendbaren Patente sind abgelaufen, sodass G.711 uneingeschränkt verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audiocodierung)

Der von der Internationalen Fernmeldeunion (ITU) veröffentlichte **G.722**-Codec wurde speziell zur Sprachkompression entwickelt. Seine Audiocodierungsbandbreite ist auf den Bereich von 50 Hz bis 7.000 Hz begrenzt, was den größten Teil des typischen menschlichen Stimmenspektrums abdeckt. Dies macht ihn ungeeignet für die Verarbeitung jeglichen Audio, das außerhalb des menschlichen Sprachbereichs verläuft, wie z. B. Musik.

G.722-Audio wird mit adaptiver Differenzial-Puls-Code-Modulation (ADPCM) codiert, bei der jede Probe nicht durch ihren absoluten Wert, sondern als Wert dargestellt wird, der angibt, wie stark sich die neue Probe von der vorherigen Probe unterscheidet.

G.722 wird hauptsächlich mit WebRTC-Verbindungen verwendet, da es einer der von der WebRTC-Spezifikation vorgeschriebenen Audiocodecs ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; in der Praxis wird jedoch immer 64 kbps verwendet<br />G.722 Anhang B Super Breitband: 64 kbps, 80 kbps und 96
        kbps<br />G.722 Anhang D Stereo Breitband: 64 kbps und 80 kbps<br />G.722
        Anhang D Stereo Super Breitband: 80 kbps, 96 kbps, 112 kbps und 128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>14-Bit Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        16 kHz (ADPCM ist spezifiziert, um 8 kHz, 11,025 kHz, 22,05 kHz, 44,1
        kHz zu erlauben, aber G.722 verwendet 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>128 kbps bei 44,1 kHz Abtastrate</td>
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
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">G.722 Unterstützung</th>
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
        Alle anwendbaren Patente sind abgelaufen; G.722 ist ohne
        Einschränkungen frei nutzbar
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den im MPEG/MPEG-2-Standard spezifizierten Audioformaten ist **MPEG-1 Audio Layer III**—auch bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)**—bei weitem das am weitesten verbreitete und bekannteste. Der MP3-Codec wird in [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert und wurde 1991 eingeführt (und 1992 finalisiert).

Wenn Audio im MP3-Format in einem MPEG-Container gespeichert wird, wird die resultierende Datei auch als "MP3-Datei" oder "MP3" bezeichnet. Dateien mit der weit verbreiteten `.mp3` Endung sind in dem wohl am weitesten verbreiteten Audio-Dateiformat der Welt gespeichert, das in hohem Maße für die digitale Audio-Revolution der späten 1990er und frühen 2000er Jahre verantwortlich ist.

MPEG-1 MP3 Audio unterstützt höhere Bitraten sowie höhere Abtastraten als MP3 Audio in MPEG-2-Dateien. Das MPEG-1 Format ist im Allgemeinen am besten für Musik oder andere komplexe Audioinhalte geeignet, während MP3-Audio im MPEG-2-Modus für Sprache und andere einfachere Klänge geeignet ist.

Die Patente hinter MP3 sind abgelaufen, wodurch viele oder die meisten Lizenzierungsbedenken in Bezug auf die Verwendung von MP3-Dateien in Ihren Projekten beseitigt sind. Das macht sie zu einer guten Wahl für viele Projekte.

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
      <td>16-Bit Integer</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Abtastraten</th>
      <td><strong>MPEG-1 Modus:</strong> 32.000 Hz, 44.100 Hz, 48.000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 16.000 Hz, 22.050 Hz, 24.000 Hz (Die halbe
        Frequenz der MPEG-1 unterstützten Modi)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>128 kbps bei 48 kHz Abtastrate</td>
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
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MP3 Unterstützung</th>
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
        Patentfrei in der EU seit 2012; patentfrei in den Vereinigten Staaten seit
        dem 16. April 2017; jetzt kostenlos verwendbar
      </td>
    </tr>
  </tbody>
</table>

Aus Patentgründen unterstützte Firefox MP3 vor Version 71 nicht direkt; stattdessen wurden plattformnative Bibliotheken verwendet, um MP3 zu unterstützen. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:

<table class="standard-table" style="margin-left: 4em; max-width: 30em">
  <caption>
    MP3 Unterstützung mit externer Bibliothek, nach Plattform, in Firefox
  </caption>
  <thead>
    <tr>
      <th scope="row">Plattform</th>
      <th scope="col">Erste Firefox-Version<br />mit MP3 Unterstützung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Windows (Vista und später)</th>
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

Das [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) Audioformat wurde von der Xiph.org Foundation als vollständig offenes Audioformat erstellt; es wurde vom [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein guter Allzweck-Audiocodec, der effizient sowohl niedrigkomplexes Audio wie Sprache als auch Musik und andere komplexe Töne verarbeiten kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei verwenden, da der Encoder die Bitrate, die Audio-Bandbreite, den Algorithmus und andere Details der Komprimierungseinstellungen für jeden Audio-Frame auswählen kann.

Opus ist ein guter Allround-Audiocodec für die Verwendung in Ihren Webanwendungen und kann für alle Audiotasks verwendet werden, die Sie vorhaben.

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
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Profil</th>
              <th scope="col">Effektive Abtastrate</th>
            </tr>
            <tr>
              <th scope="row">Narrowband (NB)</th>
              <td>8 kHz</td>
            </tr>
            <tr>
              <th scope="row">Medium Band (MB)</th>
              <td>12 kHz</td>
            </tr>
            <tr>
              <th scope="row">Wideband (WB)</th>
              <td>16 kHz</td>
            </tr>
            <tr>
              <th scope="row">Super Wideband (SWB)</th>
              <td>24 kHz</td>
            </tr>
            <tr>
              <th scope="row">Fullband (FB)</th>
              <td>48 kHz</td>
            </tr>
          </tbody>
        </table>
        <p>
          Die angegebenen Abtastraten sind <em>effektive Abtastraten</em>. Opus
          verwendet einen Algorithmus, der auf Audio-Bandbreiten anstatt Abtastraten basiert.
          Siehe {{RFC(6716, "", 2)}} für Details. Darüber hinaus gibt es einen
          <em>optionalen</em> Teil der Opus-Spezifikation (Opus Custom), der
          nicht-standardisierte Abtastraten erlaubt, aber die Verwendung dieser Funktion
          wird nicht empfohlen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>96 kbps bei 48 kHz Abtastrate</td>
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
              <th scope="col">Audio-Bandbreite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Narrowband (NB)</th>
              <td>4 kHz</td>
            </tr>
            <tr>
              <th scope="row">Medium Band (MB)</th>
              <td>6 kHz</td>
            </tr>
            <tr>
              <th scope="row">Wideband (WB)</th>
              <td>8 kHz</td>
            </tr>
            <tr>
              <th scope="row">Super Wideband (SWB)</th>
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
          <a href="https://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem">Nyquist–Shannon-Sampling-Theorem</a>
          zeigt, dass die Audio-Bandbreite bis zu der Hälfte der Abtastrate betragen
          kann, erlaubt Opus das Codieren außerhalb eines maximalen 20 kHz
          Audiofrequenzbandes nicht, da das menschliche Ohr ohnehin nichts über die
          20 kHz-Grenze wahrnehmen kann. Dies spart Platz in dem kodierten Audio.
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
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Opus Unterstützung</th>
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
          Safari unterstützt Opus im {{HTMLElement("audio")}} Element
          nur, wenn es in einer CAF-Datei verpackt ist und nur auf macOS High Sierra
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

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format der [Xiph.org Foundation](https://xiph.org/), das eine breite Palette von Kanal-Kombinationen unterstützt, einschließlich monaural, stereo, polyphonisch, quadrifonisch, 5.1 Surround, ambisonisch oder bis zu 255 diskreten Audiokanälen. Abhängig von der beim Codieren verwendeten Qualitätseinstellung kann die resultierende Bitrate zwischen etwa 45 kbps und 500 kbps variieren. Vorbis verwendet inhärent eine variable Bitraten-Codierung; die Bitrate kann sich von einer Probe zur nächsten je nach Bedarf während des Kompressionsvorgangs ändern.

Generell ist Vorbis in Bezug auf Größe und Bitrate effizienter als MP3 bei ähnlichen Qualitätsstufen. Dies und seine freie und offene Lizenz machen es zu einer guten Wahl für viele Arten von Audiodaten, solange seine hohe Latenz kein Problem darstellt.

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
      <td>16-Bit Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz - 192 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>
        192 kbps bei 48 kHz; dies wird typischerweise erreicht, indem das
        Qualitätsniveau auf 6 bis 8 gesetzt wird.
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
              <th scope="row">Funktion</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Vorbis Unterstützung</th>
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

## Auswahl eines Audiocodecs

In der Regel werden unabhängig vom verwendeten Codec die meisten Aufgaben erfüllt, auch wenn er nicht die ideale Wahl ist, solange Sie einen Codec wählen, der nicht speziell für eine völlig andere Art von Quell-Audio ausgelegt ist. Die Wahl eines reinen Sprachcodecs und dessen Verwendung für Musik wird Ihnen beispielsweise keine brauchbaren Ergebnisse liefern.

Einige Codecs können jedoch die Kompatibilität einschränken, und andere können für Ihre Bedürfnisse optimaler sein als andere. Hier geben wir Anleitung, um Ihnen bei der Auswahl eines geeigneten Codecs für Ihren Anwendungsfall zu helfen.

Bei der Auswahl eines Codecs für Ihr Audio sollten Sie zuerst die folgenden Fragen in Betracht ziehen:

- Wird das kodierte Audio remixt oder rekodiert? Wenn ja, vermeiden Sie verlustbehaftete Kompression, die durch die erneute Komprimierung des Audios verstärkt würde; oder verwenden Sie zumindest so wenig Kompression wie möglich.
- Wenn das Audio in eine spezifische Dateitypform eingegliedert werden muss, behalten Sie das im Hinterkopf, da Mediencontainer typischerweise einen spezifischen Subset der verfügbaren Codecs unterstützen.
- Welche Art von Audioinhalt wird der Codec handhaben? Bestimmte Codecs sind speziell für Sprachinhalte entwickelt (sie nutzen den reduzierten Frequenzbereich aus, der für menschliche Sprache benötigt wird). Andere können eine algorithmische Tendenz haben, schlechter zu performen, wenn bestimmte Musikgenres kodiert werden.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften hat jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen können?
- Inwiefern, wenn überhaupt, spielt Latenz für Ihre Bedürfnisse eine Rolle? Wenn Sie Sound benötigen, der sehr präzise getimed ist, desto niedriger ist die Latenz, desto besser.
- Wie viel Kompression muss erreicht werden?

Lassen Sie uns einige häufige Szenarien betrachten, um ein Gefühl für den Entscheidungsprozess zu bekommen.

### Beispiel: Musik für Streaming

Für das Streaming von Musik möchten Sie einen Codec wählen, der den Bandbreitenverbrauch so weit wie möglich minimiert und dabei so wenige Störungen wie möglich in das Audio durch Kompression einführt. Dies ist notwendig, weil die Rate, mit der die Musik heruntergeladen wird, nicht größer als die verfügbare Bandbreite im Netzwerk sein darf, und idealerweise sollte Spielraum für Netzwerkschwankungen und die Nutzung des Netzwerks durch andere Anwendungen bleiben.

Sofern kein spezifisches Bedürfnis nach verlustfreier Kompression besteht oder die Netzwerkbandbreite garantiert hoch genug ist, ist ein verlustbehaftetes Komprimierungsschema eine gute Wahl. Welche Sie wählen, hängt von der Browserkompatibilität und der Verfügbarkeit spezieller Funktionen ab, die der Codec unterstützen muss.

_Üblicherweise_ ist die Latenz beim Musikstreaming nicht besonders wichtig. Mögliche Ausnahmen sind Schleifenmusik, bei der die Musik ohne Unterbrechung immer wieder abgespielt werden muss, oder wenn Sie Songs hintereinander ohne Pause abspielen müssen. Dies kann besonders bei klassischer Musik, Theatersoundtracks und für Hintergrundmusik während des Spielens wichtig sein.

Für die allgemeine Musikwiedergabe sind die drei wahrscheinlichsten Kandidaten MP3, AAC und Vorbis.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt, was es zu einer großartigen Wahl macht.
- Vorbis wird fast immer in Ogg-Dateien verwendet, aber Ogg-Container werden nicht universell unterstützt. Selbst Microsoft Edge, das sowohl Vorbis als auch AAC unterstützt, unterstützt noch keine Ogg-Container.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die einen Audio Layer III-Track enthalten.

Wenn Sie die Latenz während der Musikwiedergabe minimieren müssen, sollten Sie dringend Opus in Betracht ziehen, das die niedrigste Latenz aller allgemeinen Codecs hat (5 ms bis 66,5 ms im Vergleich zu mindestens 100 ms der anderen).

> [!NOTE]
> Die hier beschriebenen Kompatibilitätsinformationen sind im Allgemeinen korrekt zum Zeitpunkt des Schreibens dieses Artikels; es kann jedoch Ausnahmen und Vorbehalte geben. Sehen Sie sich die Kompatibilitätstabellen an, bevor Sie sich für ein gegebenes Medienformat entscheiden.

Basierend darauf ist AAC wahrscheinlich Ihre beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Natürlich, wenn Sie mehrere Formate bereitstellen können (zum Beispiel durch Verwendung des {{HTMLElement("source")}}-Elements innerhalb Ihrer {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente), können Sie viele oder alle dieser Ausnahmen vermeiden.

### Beispiel: Musik zum Herunterladen

Musik, die von Nutzern heruntergeladen wird, kann zu einem größeren Dateivolumen als die gestreamte Musik komprimiert werden, da (im Gegensatz zum Streaming) es keine Rolle spielt, wenn die Download-Geschwindigkeit langsamer als die Wiedergabegeschwindigkeit der Medien ist. Das bedeutet, dass Sie in Betracht ziehen können, verlustbehaftete Kompression mit höheren Bitraten zu verwenden, was zu größeren Dateien, jedoch mit weniger Verlust an Audioqualität führt. Oder Sie können ein verlustfreies Format wählen. Die Entscheidung hängt im Wesentlichen von den Anforderungen Ihrer Anwendung und den Präferenzen Ihrer Nutzer ab.

Für einen tatsächlichen Musik-Download-Service könnten Sie beispielsweise Lieder in 128 Kbps MP3-Dateien, 256 kbps AAC-Dateien (in MP4-Containern) oder FLAC-Dateien zum Download anbieten, je nach Auswahl der Benutzer. Wenn Sie nur ein Format wählen können, wählen Sie eines, das gemäß Ihren Anforderungen und der Art der heruntergeladenen Audioinhalte sinnvoll ist.

Im Allgemeinen ist MP3 natürlich das am häufigsten verwendete Format für Musik; wählen Sie eine Bitrate von mindestens 192 kbps, wenn möglich. Der iTunes Store hingegen vertreibt Musik im 256 kbps AAC-Format.

### Beispiel: Sprachaufzeichnung und -wiedergabe

Die spezifischen Merkmale der menschlichen Sprache erlauben es Sprachspezifischen Codecs, das Audio weit mehr zu komprimieren als die meisten Allzweck-Codecs. Das liegt daran, dass, obwohl Menschen Frequenzen im Bereich von etwa 20 Hz bis 20.000 Hz hören, und menschliche Sprachklänge im Bereich von etwa 300 Hz bis 18.000 Hz liegen, die Mehrheit der Sprachklänge, die wir benötigen, um zu verstehen, was gesagt wird, im Frequenzbereich von etwa 500 Hz bis 3.000 Hz liegt. Das bedeutet, dass Sprach-Only-Codecs alles andere verwerfen können.

Die Sprachspezifischen Codecs sind jedoch alle inhärent sehr verlustbehaftet, und jeder Ton mit signifikanten Informationen in den Frequenzbändern außerhalb des erfassten Sprachbereichs wird vollständig verloren gehen. Dies macht diese Codecs völlig ungeeignet für alles andere als gesprochene Worte. Selbst Audio, das nur Stimmen enthält, jedoch singend statt sprechend, wird in einem dieser Formate wahrscheinlich nicht von akzeptabler Qualität sein.

Sprachaufnahme und -wiedergabe müssen in der Regel eine niedrige Latenz aufweisen, um mit Videospuren zu synchronisieren oder um Übersprechen oder andere Probleme zu vermeiden. Glücklicherweise sind die Eigenschaften, die dazu führen, dass Sprachcodecs so effizient im verwendeten Speicher sind, auch dafür verantwortlich, dass sie tendenziell sehr geringe Latenzen aufweisen. Wenn Sie mit WebRTC arbeiten, hat [G.722](#g.722_64_kbps_7_khz_audio_coding) beispielsweise eine Latenz von 4 ms (im Vergleich zu über 100 ms bei MP3), und [AMR](#amr_adaptive_multi-rate) hat eine Latenz von etwa 25 ms.

> [!NOTE]
> Weitere Informationen zu WebRTC und den von ihm verwendeten Codecs finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Die auf das Web allgemein angewendeten Codecs, die für Sprach-Codierung verwendet werden, sind G.722 und AMR. AMR ist ein Schmalband-Codec, der nur die Frequenzen zwischen 200 Hz und 3.400 Hz bei Bitraten typischerweise um 7,4 kbps codiert, während G.722 ein Breitband-Codec ist, das die Audio-Bandbreite auf 50 Hz bis 7.000 Hz bei viel höheren Bitraten erweitert - typischerweise 64 kbps.

Wenn Sie reichlich Netzwerkbandbreite zur Verfügung haben und dies auch bei Ihren Benutzern wahrscheinlich ist, ist G.722 die bessere Wahl. Um die Speicher- und Netzwerkeffizienz in einer eingeschränkten Umgebung zu maximieren, wählen Sie AMR.

### Beispiel: Audio-Clips für professionelles Mixing

Bei der Komprimierung von Audio, das gemixt oder remixt wird, möchten Sie typischerweise keinen oder nur minimalen Verlust der Audioqualität, was darauf hindeutet, dass ein verlustfreier Codec vielleicht in Betracht gezogen wird. Da verlustfreies Codieren jedoch naturgemäß eine viel geringere Kompressionsrate hat als verlustbehaftetes Codieren, stellen Sie möglicherweise fest, dass, wenn Ihre Quell-Audiodatei groß genug ist, Sie möglicherweise trotzdem einen verlustbehafteten Codec wählen müssen, besonders in einem Web-Umfeld, in dem Sie die Download-Rate der Medien nicht kontrollieren können.

Angenommen, verlustfreies Komprimieren ist hier unsere beste Option (was es normalerweise ist, solange die Audio-Dateien klein sind), sind die drei stärksten Kandidaten aus der Codec-Perspektive [FLAC](https://en.wikipedia.org/wiki/FLAC), [Apple Lossless (ALAC)](https://en.wikipedia.org/wiki/Apple_Lossless) und [MPEG-4 ALS](https://en.wikipedia.org/wiki/Audio_Lossless_Coding). Was wir wählen, hängt von der Browser-Unterstützung und den unterstützten Mediencontainer-Formaten ab.

Für die Zwecke dieses Beispiels gehen wir davon aus, dass alle Browser dieselbe Codec- und Containerunterstützung wie Firefox haben (obwohl dies bei weitem nicht stimmt). Berücksichtigen Sie bei Ihren Entscheidungen die Breite der tatsächlichen Unterstützung für die Codecs.

- Firefox unterstützt FLAC in den nativen Containern von FLAC sowie in Ogg- und MPEG-4 (MP4)-Dateien.
- Firefox unterstützt Apple Lossless nur durch seine plattform-spezifische QuickTime-Unterstützung.
- Firefox unterstützt MP4 ALS nicht.

In diesem Fall scheint FLAC am wahrscheinlichsten der beste Codec zu sein; ALAC hat wenig bis keine direkte Browser-Unterstützung.

## Audio-Codierungssoftware

Es gibt viele Tools zur Codierung von Audio. Die einfachsten sind die, die zum Rippen von CDs oder zum Einlesen von Audiodateien und zum schnellen und automatischen Konvertieren in MP3- oder AAC-Format, um in einer Bibliothek gespeichert zu werden, bestimmt sind, wie z. B. [iTunes](https://www.apple.com/itunes/). Aber wenn Sie Web-Apps entwickeln, die Audio als Komponente der App verwenden, wie Spiele, benötigen Sie mehr Kontrolle über den Codierungsprozess und mehr Optionen bezüglich des verwendeten Formats während der Audio-Codierung.

Einige beliebte Optionen:

- [FFmpeg](https://ffmpeg.org/)
  - : Wahrscheinlich das bekannteste und am weitesten als Open-Source-Codecs-Paket geschätzte, unterstützt FFmpeg die Mehrheit der beliebtesten Audioformate und bietet Kommandozeilen-Tools und Bibliotheken zur Kodierung, Dekodierung und Durchführung von Formatkonvertierungen von Audio und Video. Binärdateien sind für macOS, Linux und Windows erhältlich.
- [Handbrake](https://handbrake.fr/)
  - : Ein sehr beliebter Open-Source-Frontend zu FFmpeg, der eine grafische Benutzeroberfläche bietet, die es viel einfacher macht, die breite Palette von Optionen zu steuern, die FFmpeg beim Codieren von Audio und/oder Video bietet. Binärdateien sind für macOS, Linux und Windows erhältlich.
- [Audacity](https://www.audacityteam.org/)
  - : Ein Open-Source-Audio-Editor, der das Laden von Audio aus vielen verschiedenen Formaten, Bearbeiten, Filtern und Anpassen des Audios sowie das Speichern zurück im Originalformat oder in einem neuen Format unterstützt. Verfügbar für macOS, Linux und Windows.
- [LAME](https://lame.sourceforge.io/)
  - : Ein hochqualitativer Open-Source-MP3-Encoder mit Unterstützung für CBR-, ABR- und VBR-Codierung sowie einer Vielzahl anderer Optionen. Vom LAME-Projekt nur in Quellform verteilt, kann es jedoch mit [Homebrew](https://brew.sh/) oder ähnlichen Tools installiert werden.

## Siehe auch

- [Media-Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Leitfaden für Webvideocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

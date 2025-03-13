---
title: Leitfaden für Web-Audio-Codecs
slug: Web/Media/Guides/Formats/Audio_codecs
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Selbst moderat hochwertige, hochauflösende Stereotöne können erheblichen Speicherplatz beanspruchen. Für Webentwickler ist eine noch größere Sorge die Netzbandbreite, die zum Übertragen von Audio erforderlich ist, sei es zum Streamen oder zum Herunterladen für die Verwendung während des Spielens. Die Verarbeitung von Audiodaten zur Codierung und Decodierung wird von einem Audio-**{{Glossary("codec", "Codec")}}** (Encoder/Decoder) übernommen. In diesem Artikel betrachten wir die auf dem Web verwendeten Audio-Codecs zur Komprimierung und Dekomprimierung von Audio, deren Fähigkeiten und Anwendungsfälle und geben Hinweise zur Auswahl von Audiocodecs für Ihre Inhalte.

Darüber hinaus verwenden WebRTC-Implementierungen in der Regel eine Teilmenge dieser Codecs für die Codierung und Decodierung von Medien und können auch zusätzliche Codecs unterstützen, um eine optimale plattformübergreifende Unterstützung von Video- und Audiokonferenzen zu gewährleisten und sich besser in ältere Telekommunikationslösungen zu integrieren. Siehe [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details.

Für Informationen über die grundlegenden Konzepte, wie digitale Audio funktioniert, siehe den Artikel [Digitale Audiokonzepte](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

## Übliche Codecs

Die folgende Liste gibt die Codecs an, die am häufigsten im Web verwendet werden, und welche Container (Dateitypen) sie unterstützen. Wenn Sie nur wissen müssen, welche Codecs überhaupt verwendet werden können, ist dies für Sie. Natürlich können einzelne Browser entscheiden, ob sie all diese Codecs unterstützen oder nicht, und ihre Unterstützung, welche Containertypen sie verwenden können, kann ebenfalls variieren. Darüber hinaus können Browser zusätzliche, nicht in dieser Liste enthaltene Codecs unterstützen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (Kurzform)</th>
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
        <a href="/de/docs/Web/Media/Guides/Formats/Containers#quicktime">QuickTime</a>
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
        7 kHz Audiocodierung innerhalb von 64 kbps (für
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
          Wenn MPEG-1 Audio Layer III Codec-Daten in einer MPEG-Datei gespeichert sind und es keinen Videotrack in der Datei gibt, wird die Datei typischerweise als MP3-Datei bezeichnet, obwohl sie immer noch eine MPEG-Formatdatei ist.
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

## Faktoren, die das codierte Audio beeinflussen

Es gibt zwei allgemeine Kategorien von Faktoren, die das vom Encoder eines Audiocodecs ausgegebene codierte Audio beeinflussen: Details über das Format und den Inhalt des Quell-Audios sowie den Codec und seine Konfiguration während des Codierungsprozesses.

Für jeden Faktor, der das codierte Audio beeinflusst, gibt es eine Regel, die fast immer zutrifft: Da die Wiedergabetreue von digitalem Audio durch die Granularität und Präzision der Proben bestimmt wird, die zur Umwandlung in einen Datenstrom genutzt werden, gilt: Je mehr Daten zur Darstellung der digitalen Version des Audios verwendet werden, desto näher wird der abgetastete Klang dem Ausgangsmaterial entsprechen.

### Der Einfluss des Quell-Audioformats auf die codierte Audioausgabe

Da codiertes Audio möglicherweise mit weniger Bits zur Darstellung jeder Probe arbeitet, kann das Quell-Audioformat tatsächlich weniger Einfluss auf die Größe des codierten Audios haben, als man erwarten würde. Dennoch gibt es eine Reihe von Faktoren, die die Qualität und Größe des codierten Audios beeinflussen. Die folgende Tabelle listet eine Reihe von Schlüsselfaktoren des Quell-Audio-Dateiformats und deren Auswirkungen auf das codierte Audio.

<table class="standard-table">
  <caption>
    Die Auswirkungen des Quell-Audioformats und -inhalts auf die Qualität und Größe des codierten Audios
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
          >Anzahl der Kanäle</a
        >
      </th>
      <td>
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der Richtung, nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die Größe des codierten Audios erheblich erhöhen, abhängig von Inhalt und Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
        Unerwünschtes Hintergrundrauschen oder Zischen neigt dazu, die Audioqualität sowohl direkt (durch Maskierung von Details des Vordergrund-Audios) als auch indirekt (durch Komplizierung der Audiowellenform und damit Reduzierung der Komprimierbarkeit bei Beibehaltung der Präzision) zu verringern.
      </td>
      <td>
        Zischen, statisches oder Hintergrundrauschen erhöht die Audiokomplexität, was im Allgemeinen die mögliche Komprimierung reduziert.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#sampling_audio"
          >Abtastrate</a
        >
      </th>
      <td>
        Je mehr Proben pro Sekunde verfügbar sind, desto höher ist wahrscheinlich die resultierende Wiedergabegenauigkeit des codierten Audios.
      </td>
      <td>
        Eine Erhöhung der Abtastrate erhöht die Größe der codierten Audiodatei.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure"
          >Sample-Größe</a
        >
      </th>
      <td>
        Je größer die Samples, desto mehr Details kann jedes Sample enthalten, was zu einer genaueren Darstellung jedes Samples führt.
      </td>
      <td>
        Abhängig vom Codec; Codecs haben typischerweise ein internes Sample-Format, das möglicherweise nicht identisch mit der originalen Sample-Größe ist. Aber mehr Quell-Details können die codierte Datei größer machen; sie wird niemals kleiner.
      </td>
    </tr>
  </tbody>
</table>

Natürlich können diese Effekte durch Entscheidungen beim Codieren des Audios verändert werden. Wenn zum Beispiel der Encoder so konfiguriert ist, dass die Abtastrate reduziert wird, wird die Wirkung der Abtastrate auf die Ausgabedatei entsprechend reduziert.

Für weitere Informationen zu diesen und anderen Merkmalen von Audiodaten siehe [Audio-Datenformat und -struktur](/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure).

### Die Wirkung der Codec-Konfiguration auf die codierte Audioausgabe

Audio-Codecs verwenden typischerweise geschickt gestaltete und hochkomplexe mathematische Algorithmen, um Quell-Audiodaten zu komprimieren, um erheblich weniger Speicherplatz oder Netzbandbreite zu verbrauchen. Neben der Wahl des zu verwendenden Encodertyps haben Sie möglicherweise die Möglichkeit, den Encoder mit Parametern anzupassen, die spezifische Algorithmen auswählen, diese Algorithmen abstimmen und angeben, wie viele Durchläufe beim Codieren durchgeführt werden sollen.

<table class="standard-table">
  <caption>
    Auswirkungen der Audiokodierer-Konfiguration auf Qualität und Größe
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
      <td>Kein Verlust an Wiedergabetreue</td>
      <td>Unwahrscheinlich, dass mehr als 40-50% Komprimierung erreicht werden</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Komprimierung</a
        >
      </th>
      <td>
        Immer ein gewisser Verlust an Wiedergabetreue; je höher die Komprimierung, desto größer der Verlust
      </td>
      <td>Komprimierung von bis zu 80-95% möglich</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#bit_rate"
          >Bitrate</a
        >
      </th>
      <td>Je höher die Bitrate, desto höher kann die Qualität sein</td>
      <td>
        Je höher die Bitrate, desto größer wird die codierte Datei voraussichtlich
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
        Wenn Audio in den entfernten Frequenzbereichen vorhanden ist, kann es zu einem merklichen Verlust an Wiedergabetreue kommen
      </td>
      <td>
        Durch das Entfernen von Frequenzbändern gibt es weniger Daten zum Kodieren, was zu kleineren kodierten Dateien führt
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
        Einfache Stereo- und
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#mid-side_stereo_coding"
          >Mid-Side-Stereo-Kodierung</a
        >
        beeinflussen die Qualität nicht;
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#intensity_stereo_coding"
          >Intensitäts-Stereo-Kodierung</a
        >
        führt jedoch zu einem Verlust an Details.
      </td>
      <td>
        Gemeinschafts-Stereo kann die Größe des kodierten Audios bis zu einem gewissen Grad reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter—und die Bandbreite der möglichen Werte—variiert von Codec zu Codec und sogar unter verschiedenen Kodierungsprogrammen für denselben Codec, daher lesen Sie die mit der Kodierungssoftware gelieferten Dokumentationen, um mehr zu erfahren.

### Merkmale, die sich auf die Größe des kodierten Audios auswirken

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige davon betreffen die Form des Quell-Audios; andere sind mit Entscheidungen verbunden, die bei der Kodierung des Audios getroffen werden.

#### Verlustfreie versus verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokomprimierung. **Verlustfreie** Komprimierungsalgorithmen reduzieren die Größe des Audios, ohne die Qualität oder Wiedergabetreue des Klangs zu beeinträchtigen. Beim Dekodieren von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis in jeder Hinsicht identisch mit dem ursprünglichen Klang, bis auf das Bit.

**Verlustbehaftete** Codecs hingegen nutzen die Tatsache, dass das menschliche Ohr kein perfekter Interpretator von Audio ist und dass das menschliche Gehirn die wichtigen Informationen aus einem unvollkommenen oder rauschenden Audio herausfiltern kann. Sie entfernen Audiofrequenzen, die nicht viel genutzt werden, tolerieren den Verlust von Präzision im dekodierten Ausgang und verwenden andere Methoden, um Audiomaterial, Qualität und Wiedergabetreue zu verlieren, um kleinere kodierte Medien zu erzeugen. Beim Dekodieren ist der Ausgang in gewissem Maße immer noch verständlich. Der spezifische verwendete Codec—und die ausgewählte Komprimierungskonfiguration—bestimmen, wie nahe am ursprünglichen, unkomprimierten Audiosignal der Ausgang bei der Wiedergabe im menschlichen Ohr erscheint.

Aufgrund der Unterschiede, wie verlustbehaftete Codecs im Vergleich zu verlustfreien funktionieren, insbesondere der Tatsache, dass verlustfreie deutlich konservativer mit ihrer Komprimierung sein müssen, führen verlustbehaftete Codecs fast immer zu deutlich kleineren komprimierten Audiodateien als verlustfreie Codecs.

Im Allgemeinen sind die häufigsten Gründe für die Wahl von verlustfreiem Audio, dass Sie Archivqualitätsspeicherung benötigen oder dass die Audio-Proben nachbearbeitet und erneut komprimiert werden sollen und Sie die Verstärkung von Artefakten im Audio aufgrund von Rekompession vermeiden möchten. Für Echtzeit-Streaming von Audio ist normalerweise ein verlustbehafteter Codec erforderlich, um sicherzustellen, dass der Datenstrom die Wiedergabegeschwindigkeit von Audio unabhängig von der Netzwerkleistung einhalten kann.

### Maximale Anzahl der Kanäle

Der an jeden Lautsprecher in einem Soundsystem gelieferte Ton wird von einem Audiokanal in einem Stream bereitgestellt. Monoton ist ein einzelner Kanal. Stereo ist zwei. 5.1 Surround-Sound hat fünf Audiokanäle plus einen **Low Frequency Enhancement** (**LFE**)-Kanal.

LFE-Kanäle sind speziell darauf ausgelegt, Audiodaten mit niedriger Frequenz zu speichern und werden häufig zur Bereitstellung von Audiodaten für Subwoofer verwendet, zum Beispiel. Wenn Sie die Anzahl der Audiokanäle in der Form X.Y geschrieben sehen (zum Beispiel 2.1 oder 5.1), ist die Zahl nach dem Dezimalpunkt, Y, die Anzahl der LFE-Kanäle. Zum Beispiel unterstützt MP3 einen LFE-Kanal, während AAC bis zu 16 unterstützt.

Neben der Bereitstellung von Audio für spezifische Lautsprecher in einem Soundsystem können einige Codecs ermöglichen, dass Audiokanäle verwendet werden, um alternative Audioinhalte bereitzustellen, wie zum Beispiel Gesang in verschiedenen Sprachen oder beschreibendes Audio für sehbehinderte Menschen.

### Audiofrequenzbandbreite

Die **Audiofrequenzbandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, der mit dem Codec dargestellt werden kann. Einige Codecs arbeiten speziell, indem sie Audio eliminieren, das außerhalb eines bestimmten Frequenzbereichs fällt. Es besteht ein Zusammenhang zwischen der Abtastrate und der maximalen Schallfrequenz, die mit einer Wellenform repräsentiert werden kann, die von einem Codec dargestellt wird. Auf theoretischer Ebene ist die maximale Frequenz, die ein Codec darstellen kann, die Abtastrate geteilt durch zwei; diese Frequenz wird [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) genannt. In der Realität ist das Maximum etwas niedriger, aber es ist nah dran.

Die Audiofrequenzbandbreite kommt besonders lebhaft ins Spiel, wenn ein Codec entworfen oder konfiguriert wird, um menschliche Sprache statt eines breiten Spektrums von Klängen darzustellen. Die menschliche Sprache befindet sich im Allgemeinen im Bereich der Audiofrequenz von 300 Hz bis 18 kHz. Die Mehrheit der menschlichen Sprachlaute befindet sich jedoch im Bereich von 300 Hz bis 8 kHz, und Sie können genug menschliche Sprachlaute im Frequenzbereich 500 Hz bis 3 kHz erfassen, um immer noch verständlich zu sein.

Aus diesem Grund beginnen sprachspezifische Codecs oft damit, Klang zu eliminieren, der außerhalb eines festgelegten Bereichs fällt. Dieser Bereich ist die Audiofrequenzbandbreite. G.722 zum Beispiel entfernt Klänge außerhalb der Audiofrequenzbandbreite von 50 Hz bis 7 kHz. Dies reduziert die Menge der Daten, die von Anfang an kodiert werden müssen.

## Details zu Codecs

Im Folgenden werfen wir einen kurzen Blick auf jeden dieser Codecs, wobei wir ihre grundlegenden Fähigkeiten und ihre primären Anwendungsfälle betrachten.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding** (**AAC**)-Codec ist als Teil des MPEG-4 (H.264)-Standards definiert; speziell als Teil von [MPEG-4 Teil 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Teil 7](https://www.iso.org/standard/43345.html). AAC wurde entwickelt, um mehr Kompression bei höherer Audioqualität als MP3 zu bieten und hat sich zu einer beliebten Wahl entwickelt. Es ist das Standardformat für Audio in vielen Arten von Medien, darunter Blu-Ray-Discs und HDTV, sowie für Lieder, die bei Online-Anbietern wie iTunes gekauft werden.

AAC verfügt über eine Reihe von Profilen, die Methoden zur Audiokomprimierung für spezifische Anwendungsfälle definieren, darunter alles von hochwertigem Surround-Sound bis hin zur Komprimierung für Audio mit niedriger Qualität für sprachliche Inhalte.

Da AAC ein patentbelastetes Format ist, ist die Unterstützung dafür weniger vorhersehbar. Beispielsweise unterstützt Firefox AAC nur, wenn das Betriebssystem oder eine externe Bibliothek dies bereitstellt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig, bis zu 512 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
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
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
      <td>48 (plus 16 Kanäle zur Niederfrequenz-Erweiterung)</td>
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
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt.
          Stattdessen verlässt sich Firefox auf die native Plattformunterstützung
          für AAC. Diese Funktion wurde auf jeder Plattform in verschiedenen
          Firefox-Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und unterstützt nur das
          Hauptprofil von AAC. Darüber hinaus ist AAC in Chromium-Builds nicht
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Für das Streaming oder die Verbreitung von AAC-codierten Inhalten: Keine Lizenz erforderlich; Entwickler von Codecs müssen über
        <a href="https://www.via-la.com/licensing-2/aac/">VIA Licensing</a>
        eine Patentlizenz erhalten.
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein verlustfreier Codec, der von Apple entwickelt wurde. Nachdem es zunächst ein geschlossenes Format war, wurde es von Apple unter einer Apache-Lizenz geöffnet.

Plattformübergreifende und Browserunterstützung für ALAC ist nicht sehr stark ausgeprägt, was ihn zu einer weniger idealen Wahl für den allgemeinen Gebrauch macht. Wenn Ihr Ziel hauptsächlich macOS- und iOS-Nutzer sind, könnte sich die Betrachtung lohnen, da die Betriebssysteme integrierte Unterstützung für ALAC bieten. Andernfalls ist FLAC wahrscheinlich die bessere Wahl, wenn Sie einen verlustfreien Codec verwenden müssen.

Beachten Sie jedoch, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherkapazität erfordern und außerhalb sehr spezifischer Anwendungsfälle möglicherweise keine gute Wahl sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Abhängig vom Sample-Format und der Abtastrate sowie dem
        Kompressionsgrad
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
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
      <th scope="row">Kompression</th>
      <td>Verlustfrei; bis zu 45-60%</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
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
        Offene Lizenz (Apache License 2.0);
        <a href="https://github.com/macosforge/alac"
          >Quellcode auf GitHub verfügbar</a
        >
      </td>
    </tr>
  </tbody>
</table>

### AMR (Adaptive Multi-Rate)

Der **[Adaptive Multi-Rate audio codec](https://voiceage.com/AMR-NB.AMR.html)** ist darauf optimiert, menschliche Sprache effizient zu kodieren. Er wurde 1999 als Teil des 3GPP-Audiostandards standardisiert, der sowohl für [GSM](https://en.wikipedia.org/wiki/GSM) als auch für [UMTS](https://en.wikipedia.org/wiki/UMTS) Mobiltelefonie verwendet wird, und verwendet einen Multiraten-Narrowband-Algorithmus, um Audiofrequenzen auf einem Telephonie-Qualitätsniveau mit etwa 7,4 kbps zu kodieren. Neben der Nutzung für Echtzeit-Telephonie kann AMR-Audio auch für Voicemail und andere kurze Audioaufnahmen verwendet werden.

AMR-Audio, das in Dateien gespeichert ist, kann die Endung `.amr` haben, kann aber auch in `.3gp` Dateien eingebunden werden.

Als sprachspezifischer Codec ist AMR im Wesentlichen für jegliche andere Inhalte, einschließlich Audio, das nur Gesangsstimmen enthält, unbrauchbar. Darüber hinaus, da AMR darauf ausgelegt ist, die Kapazitätsanforderungen zu minimieren, erfasst es nur den Teil des vollen Audiofrequenzbereichs der menschlichen Sprache, der unbedingt notwendig ist, um zu verstehen, was gesagt wird, sodass die Qualität entsprechend reduziert ist. Wenn Sie die Möglichkeit benötigen, Audio mit minimalem Einfluss auf Netzwerk- und/oder Speicherkapazität aufzunehmen, kann AMR eine großartige Wahl sein. Wenn Sie jedoch eine hochfidele Wiedergabe menschlicher Sprache - oder gar die geringwertigste Musikreproduktion - benötigen, müssen Sie ein anderes Format wählen.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>Half Rate (HR) und Full Rate (FR):</strong> 1.8 kbps, 4.75 kbps,
        5.15 kbps, 5.9 kbps, 6.7 kbps, 7.4 kbps, 7.95 kbps
      </td>
    </tr>
    <tr>
      <td><strong>Nur Full Rate (FR):</strong> 10.2 kbps und 12.2 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
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
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
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
          AMR-NB (Narrowband) und AMR-WB (Wideband).
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
        Nicht-frei; Lizenzgebühren und jährliche Abgaben fallen an. Siehe
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge-Lizenzierung</a
        >
        für Details
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audio-Codec, der von der [Xiph.org Foundation](https://xiph.org/) veröffentlicht wurde. Er bietet gute Kompressionsraten ohne Verlust der Audioqualität; das bedeutet, das dekomprimierte Audio ist identisch mit dem Original. Da der Kompressionsalgorithmus speziell für Audio entwickelt wurde, liefert er bessere Ergebnisse, als mit einem allgemeinen Kompressionsalgorithmus erzielt werden könnte.

FLAC ist eine gute Wahl für kleinere Audioeffekte-Dateien, bei denen eine einwandfreie Qualität und klangliche Genauigkeit gewünscht sind, sowie für die Archivierung von Musik.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>4-Bit bis 24-Bit Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        1 Hz bis 65.535 Hz (in 1 Hz Schritten) oder 10 Hz bis 655.350 Hz in 10
        Hz Schritten
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei; bis zu 40-50% Größenreduktion</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>Vollspektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4.3 ms bis 92 ms mit 46.4 ms als durchschnittlichem Mittelwert</td>
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
      <td>Vollständig offen und ohne Lizenzanforderungen nutzbar</td>
    </tr>
  </tbody>
</table>

### G.711 (Pulscodemodulation von Sprachfrequenzen)

Die **G.711**-Spezifikation, veröffentlicht von der International Telecommunications Union (ITU), wurde 1972 herausgegeben, um die standardisierte Audiokodierung für Telefonanwendungen zu definieren. Sie unterstützt sprachgrade Audiofrequenzen von 300 bis 3400 Hz. Sie wird ausgiebig für Telefongespräche und Voicemail verwendet und ist die qualitativ hochwertigste Audiokodierung, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein hochauflösender Codec, sondern optimiert, um ein breites Spektrum an Sprachpegeln (vom Flüstern bis zum Schrei) zu unterstützen und gleichzeitig hohe Verständlichkeit und geringe Rechenkomplexität zu gewährleisten. G.711 verwendet einen logarithmischen Komprimierungsalgorithmus, der 14 Bit Dynamikbereich in einem 8-Bit-Sample bietet. Es verwendet eine Abtastrate von 8000 Samples/Sekunde, was einer Bitrate von 64000 bps entspricht.

Es gibt zwei Varianten von G.711, die die genaue mathematische Gleichung für den Algorithmus angeben: [µ-law](https://en.wikipedia.org/wiki/M-law) (häufig verwendet in Nordamerika und Japan) und [A-law](https://en.wikipedia.org/wiki/A-law) (geläufig im Rest der Welt). Es gibt keinen substanziellen Qualitätsunterschied zwischen den beiden Varianten, und es ist möglich, Audio von einer zur anderen zu transkodieren. Dennoch ist es wichtig, anzugeben, welche Variante in jeder Wiedergabeanwendung oder Dateiformat verwendet wird. A-law-Audio wird schlecht wiedergegeben, wenn es fälschlicherweise mit dem µ-law-Algorithmus dekomprimiert wird und umgekehrt.

Dieser Codec muss von allen [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen unterstützt werden, da er einfach ist, leicht zu implementieren, weit verbreitet und weitgehend kompatibel mit allen modernen Computerplattformen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>codiertes Audio ist 8 Bit pro Sample</td>
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
      <th scope="row">Kompression</th>
      <td>Logarithmische Komprimierung (µ-law oder A-law)</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenz-Bandbreite</th>
      <td>300 Hz – 3400 Hz</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>0.125 ms</td>
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
        Alle anwendbaren Patente sind abgelaufen, daher ist G.711 frei
        nutzbar, ohne Einschränkungen
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audiokodierung)

Der von der International Telecommunications Union (ITU) veröffentlichte **G.722**-Codec ist speziell für die Sprachkompression konzipiert. Seine Audiokodierungsbandbreite ist auf den Bereich von 50 Hz bis 7.000 Hz begrenzt, der den größten Teil des Frequenzbereichs typischer menschlicher Lautäußerungen abdeckt. Dies macht ihn ungeeignet für die Handhabung von Audio, das außerhalb des für menschliche Sprache typischen Bereichs liegt, wie etwa Musik.

G.722-Audio wird unter Verwendung von Adaptive Differential Pulse Code Modulation (ADPCM) kodiert, bei dem jedes Sample nicht durch seinen absoluten Wert dargestellt wird, sondern als ein Wert, der angibt, wie sehr sich das neue Sample vom vorherigen unterscheidet.

G.722 wird hauptsächlich in WebRTC-Verbindungen verwendet, da es einer der von der WebRTC-Spezifikation verlangten Audio-Codecs ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; in der Praxis wird jedoch immer 64
        kbps verwendet<br />G.722 Annex B Super Wide-Band: 64 kbps, 80 kbps und
        96 kbps<br />G.722 Annex D Stereo Wide-Band: 64 kbps und 80 kbps<br
        />G.722 Annex D Stereo Super Wide-Band: 80 kbps, 96 kbps, 112 kbps und
        128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>14-Bit Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        16 kHz (ADPCM ist spezifiziert, um 8 kHz, 11.025 kHz, 22.05 kHz, 44.1
        kHz zuzulassen, aber G.722 verwendet 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>128 kbps bei 44.1 kHz Abtastrate</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
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
        nutzbar, ohne Einschränkungen
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den durch die MPEG/MPEG-2 Standards spezifizierten Audioformaten ist **MPEG-1 Audio Layer III**—besser bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)**—bei weitem das am weitesten verbreitete und bekannteste. Der MP3-Codec ist durch [MPEG-1 Teil 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Teil 3](https://www.iso.org/standard/26797.html) definiert und wurde 1991 eingeführt (und 1992 finalisiert).

Wenn MP3-Audio im MP3-Format in einem MPEG-Container gespeichert wird, wird die resultierende Datei ebenfalls als "MP3-Datei" oder "MP3" bezeichnet. Dateien mit der allgegenwärtigen `.mp3`-Erweiterung werden in dem vielleicht weltweit am weitesten verbreiteten Audio-Dateiformat gespeichert, was maßgeblich zur digitalen Audiorevolution der späten 1990er und frühen 2000er Jahre beitrug.

MPEG-1 MP3 Audio unterstützt höhere Bitraten sowie höhere Abtastraten als MP3 Audio in MPEG-2 Dateien. Das MP3-Format des MPEG-1 ist im Allgemeinen die beste Wahl für Musik oder andere komplexe Audioinhalte, während das MP3-Audio im MPEG-2-Modus für Sprache und andere einfachere Klänge akzeptabel ist.

Die hinter MP3 stehenden Patente sind abgelaufen, sodass viele oder die meisten Lizenzanliegen in Bezug auf die Verwendung von MP3-Dateien in Ihren Projekten wegfallen. Das macht sie zu einer guten Wahl für viele Projekte.

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
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit Integer</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Abtastraten</th>
      <td><strong>MPEG-1-Modus:</strong> 32000 Hz, 44100 Hz, 48000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 16000 Hz, 22050 Hz, 24000 Hz (die halbe
        Frequenz der unterstützten Modi von MPEG-1)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>128 kbps bei 48 kHz Abtastrate</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Maximale Audio-Kanäle</th>
      <td><strong>MPEG-1-Modus:</strong> 2 [2.0]</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 5 (plus 1 optionaler Kanäle zur
        Niederfrequenz-Erweiterung) [5.1]
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
        In der EU seit 2012 patentfrei; in den Vereinigten Staaten seit dem
        16. April 2017 patentfrei; jetzt frei nutzbar
      </td>
    </tr>
  </tbody>
</table>

Aus patentrechtlichen Gründen unterstützte Firefox vor Version 71 MP3 nicht direkt; stattdessen wurden plattformnative Bibliotheken verwendet, um MP3 zu unterstützen. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:

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

Das [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) Audioformat wurde von der Xiph.org Foundation als vollständig offenes Audioformat geschaffen und wurde von der [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein gutes universelles Audio-Codec, das sowohl mit einfach strukturiertem Audio wie Sprache als auch mit Musik und anderen komplexen Klängen effizient umgehen kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei verwenden, da der Encoder die Bitrate, Audiobandbreite, den Algorithmus und andere Details der Kompressionseinstellungen für jeden Frame von Audio auswählen kann.

Opus ist ein guter Allround-Audio-Codec für die Verwendung in Ihren Webanwendungen und kann für jede Art von Audio-Aufgaben verwendet werden, die Sie im Sinn haben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>6 kbps - 510 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
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
          verwendet einen Algorithmus, der auf Audiobandbreiten anstelle von
          Abtastraten basiert. Siehe {{RFC(6716, "", 2)}} für Details. Darüber
          hinaus gibt es einen <em>optionalen</em> Teil der Opus-Spezifikation
          (Opus Custom), der nicht standardmäßige Abtastraten erlaubt, aber die
          Nutzung dieser Funktion wird nicht empfohlen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>96 kbps bei 48 kHz Abtastrate</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
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
          <a href="https://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem">Nyquist–Shannon-Abtasttheorem</a>
          zeigt, dass die Audiobandbreite bis zu halb so groß sein kann wie die
          Abtastrate, lässt Opus keine Codierung außerhalb eines maximal 20 kHz
          breiten Audiofrequenzbands zu, da das menschliche Ohr ohnehin nichts
          über den 20 kHz-Punkt hinaus wahrnehmen kann. Das spart Platz im
          codierten Audio.
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
          Diese Informationen beziehen sich auf die Unterstützung von Opus in
          HTML
          {{HTMLElement("audio")}} und {{HTMLElement("video")}}
          Elementen und nicht auf WebRTC.
        </p>
        <p>
          Safari unterstützt Opus im {{HTMLElement("audio")}}-Element nur
          bei Verpackung in einer CAF-Datei und nur auf macOS High Sierra
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
      <td>Vollständig offen und ohne Lizenzanforderungen nutzbar</td>
    </tr>
  </tbody>
</table>

### Vorbis

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format von der [Xiph.org Foundation](https://xiph.org/), das eine Vielzahl von Kanal-Kombinationen unterstützt, darunter monoaural, stereo, polyphon, quadrophonisch, 5.1 Surround, Ambisonic oder bis zu 255 diskrete Audiokanäle. Abhängig von der während der Kodierung verwendeten Qualitätseinstellung kann die resultierende Bitrate von etwa 45 kbps bis 500 kbps variieren. Vorbis verwendet von Natur aus eine variable Bitratenkodierung; die Bitrate kann von einem Sample zum nächsten je nach Bedarf während des Kompressionsvorgangs variieren.

Generell ist Vorbis hinsichtlich Größe und Bitrate effizienter als MP3 bei ähnlichen Qualitätsstufen. Dies und seine freie und offene Lizenz machen ihn zu einer guten Wahl für viele Arten von Audiodaten, solange die hohe Latenz kein Problem darstellt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>45 kbps - 500 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
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
        192 kbps bei 48 kHz; dies wird typischerweise durch Einstellen
        des Qualitätspegels auf 6 bis 8 erreicht.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
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
          HTML {{HTMLElement("audio")}} und {{HTMLElement("video")}}
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
      <td>Vollständig offen und ohne Lizenzanforderungen nutzbar</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Audio-Codecs

Typischerweise erledigt jeder Codec generell die Aufgabe, auch wenn er nicht die ideale Wahl ist, solange Sie einen Codec wählen, der nicht speziell für eine völlig andere Art von Quell-Audio entwickelt wurde. Zum Beispiel wird die Auswahl eines reinen Sprachcodecs für Musik keine brauchbaren Ergebnisse liefern.

Einige Codecs können jedoch die Kompatibilität einschränken, und andere können für Ihre Bedürfnisse optimaler sein als andere. Hier bieten wir Anleitung, um Ihnen bei der Auswahl eines geeigneten Codecs für Ihren Anwendungsfall zu helfen.

Bei der Auswahl eines Codecs für Ihr Audio sollten Sie zuerst die folgenden Fragen in Betracht ziehen:

- Wird das codierte Audio neu gemischt oder erneut komprimiert? Vermeiden Sie in diesem Fall verlustbehaftete Kompression, die durch erneute Kompression des Audios verstärkt würde; oder verwenden Sie zumindest so wenig Kompression wie möglich.
- Wenn das Audio in eine bestimmte Dateityp eingehen muss, beachten Sie das, da Mediencontainer typischerweise eine spezifische Teilmenge der verfügbaren Codecs unterstützen.
- Welche Art von Audioinhalt wird der Codec verarbeiten? Bestimmte Codecs sind speziell für sprachliche Inhalte ausgelegt (sie nutzen den reduzierten Frequenzbereich aus, der für die menschliche Sprache benötigt wird). Andere können eine algorithmische Tendenz haben, schlechter abzuschneiden, wenn spezielle Musikgenres kodiert werden.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften hat jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen könnten?
- Inwieweit spielt Latenz für Ihre Bedürfnisse eine Rolle? Wenn Sie exakt zeitgesteuerten Klang benötigen, ist es besser, je geringer die Latenz ist.
- Wie viel Kompression müssen Sie erreichen?

Lassen Sie uns ein paar häufige Szenarien betrachten, um ein Gefühl für den Entscheidungsprozess zu bekommen.

### Beispiel: Musik für das Streaming

Wenn Sie Musik streamen, möchten Sie einen Codec auswählen, der den Bandbreitenverbrauch so weit wie möglich minimiert, während so wenig Kompressionsartefakte wie möglich in das Audio eingeführt werden. Dies ist notwendig, da die Geschwindigkeit, mit der die Musik heruntergeladen wird, nicht größer sein sollte als die verfügbare Bandbreite des Netzwerks, und idealerweise sollte genug Platz für Schwankungen in der Netzwerkgeschwindigkeit und die Nutzung des Netzwerks durch andere Anwendungen bleiben.

Sofern nicht eine spezifische Notwendigkeit für verlustfreie Kompression besteht oder die Netzwerkbandbreite garantiert hoch genug ist, um dies zu unterstützen, ist ein verlustbehaftetes Kompressionsschema eine gute Wahl. Welche Sie wählen, hängt von der Browser-Kompatibilität und der Verfügbarkeit spezieller Funktionen ab, die Sie möglicherweise vom Codec benötigen.

_In der Regel_ ist die Latenz beim Musikstreaming nicht besonders wichtig. Mögliche Ausnahmen sind Schleifenmusik, bei der Sie die Musik übergangslos immer wieder abspielen müssen, oder wenn Sie Songs hintereinander ohne Unterbrechung abspielen möchten. Dies kann besonders wichtig sein für klassische Musik, theatralische Soundtracks und Hintergrundmusik während des Spiels.

Für den allgemeinen Musikabruf sind die drei wahrscheinlichsten Kandidaten MP3, AAC und Vorbis.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt, was es zu einer großartigen Wahl macht.
- Vorbis wird fast immer in Ogg-Dateien verwendet, aber Ogg-Container werden nicht universell unterstützt. Selbst Microsoft Edge, das sowohl Vorbis als auch Ogg unterstützt, unterstützt die Container noch nicht.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die eine Audio Layer III-Spur enthalten.

Wenn Sie die Latenz während der Musikwiedergabe minimieren müssen, sollten Sie sich stark für Opus entscheiden, das den niedrigsten Latenzbereich von den universellen Codecs hat (5 ms bis 66,5 ms, gegenüber mindestens 100 ms für die anderen).

> [!NOTE]
> Die beschriebenen Kompatibilitätsinformationen sind im Allgemeinen zur Zeit des Schreibens dieses Artikels korrekt; es kann jedoch Vorbehalte und Ausnahmen geben. Stellen Sie sicher, dass Sie die Kompatibilitätstabellen beziehen, bevor Sie sich auf ein bestimmtes Medienformat festlegen.

Basierend darauf ist AAC wahrscheinlich Ihre beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Natürlich, wenn Sie mehrere Formate bereitstellen können (zum Beispiel durch die Verwendung des {{HTMLElement("source")}}-Elements innerhalb Ihrer {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente), können Sie viele oder alle dieser Ausnahmen umgehen.

### Beispiel: Musik zum Herunterladen

Musik, die vom Nutzer heruntergeladen wird, kann auf eine größere Gesamtdateigröße komprimiert werden als gestreamte Musik, da es (im Gegensatz zum Streaming) nicht wichtig ist, ob die Downloadgeschwindigkeit langsamer ist als die Wiedergabegeschwindigkeit der Medien. Das bedeutet, dass Sie verlustbehaftete Kompression bei höheren Bitraten in Betracht ziehen können, was zu größeren Dateien führt, aber mit weniger Verlust an Klangtreue. Oder Sie können ein verlustfreies Format wählen. Die Wahl hängt weitgehend von den Anforderungen Ihrer Anwendung und den Präferenzen Ihrer Nutzer ab.

Für einen tatsächlichen Musik-Download-Dienst könnten Sie Songs zum Herunterladen als 128 kbps MP3-Dateien, 256 kbps AAC-Dateien (in MP4-Containern) oder FLAC-Dateien anbieten, abhängig von einer vom Benutzer gewählten Präferenz. Wenn Sie nur ein Format wählen müssen, wählen Sie eines, das aufgrund Ihrer Anforderungen und der Art der heruntergeladenen Audiodaten sinnvoll ist.

Im Allgemeinen ist natürlich MP3 das am häufigsten verwendete Format für Musik; wählen Sie eine Bitrate von mindestens 192 kbps, wenn möglich. Der iTunes Store vertreibt Musik hingegen im 256 kbps AAC-Format.

### Beispiel: Sprachaufnahme und -wiedergabe

Die speziellen Eigenschaften der menschlichen Sprache ermöglichen es sprachspezifischen Codecs, das Audio weit mehr zu komprimieren als die meisten universalen Codecs. Das liegt daran, dass Menschen Frequenzen von etwa 20 Hz bis 20.000 Hz hören, und Sprachklänge von etwa 300 Hz bis 18.000 Hz reichen, aber die meisten Sprachlaute, die wir benötigen, um zu verstehen, was gesagt wird, im Bereich von 500 Hz bis 3.000 Hz oder so liegen. Das bedeutet, dass sprachspezifische Codecs alles andere wegwerfen können.

Die sprachspezifischen Codecs sind jedoch alle von Natur aus sehr verlustbehaftet, und jeder Klang mit signifikanten Informationen in den Frequenzbändern außerhalb des aufgenommenen Stimmbereichs wird vollständig verloren gehen. Dies macht diese Codecs völlig ungeeignet für irgendetwas außer gesprochenen Worten. Selbst Audio, das nur Stimmen enthält, aber gesungen statt gesprochen, wird wahrscheinlich nicht in akzeptabler Qualität in einem dieser Formate sein.

Sprachaufnahme und -wiedergabe müssen in der Regel latenzarm sein, um mit Videospuren zu synchronisieren oder um Übersprechen oder andere Probleme zu vermeiden. Glücklicherweise führen die Eigenschaften, die Sprachcodecs so speichereffizient machen, auch dazu, dass sie dazu neigen, sehr geringe Latenzen aufzuweisen. Wenn Sie mit WebRTC arbeiten, [G.722](#g.722_64_kbps_7_khz_audio_coding), zum Beispiel hat 4 ms Latenz (im Vergleich zu über 100 ms bei MP3), und die Latenz von [AMR](#amr_adaptive_multi-rate) liegt bei etwa 25 ms.

> [!NOTE]
> Weitere Informationen zu WebRTC und den von ihm verwendbaren Codecs finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Die im Web üblicherweise verwendeten Codecs, die zur Sprachcodierung verwendet werden, sind G.722 und AMR. AMR ist ein Schmalband-Codec, der nur die Frequenzen zwischen 200 Hz und 3.400 Hz bei Bitraten um etwa 7,4 kbps kodiert, während G.722 ein Breitband-Codec ist, der die Audiobandbreite auf 50 Hz bis 7.000 Hz bei viel höheren Bitraten erweitert, normalerweise 64 kbps.

Wenn Sie über reichlich Netzwerkbandbreite verfügen und sich einigermaßen sicher sein können, dass Ihre Benutzer dies auch tun, ist G.722 die bessere Wahl. Um die Speicher- und Netzwerkeffizienz in einer eingeschränkten Umgebung zu maximieren, wählen Sie AMR.

### Beispiel: Audioclips für professionelles Mischen

Wenn Sie Audio komprimieren, das gemischt oder neu gemischt werden soll, möchten Sie in der Regel null oder nahezu null Verlust der Klanggenauigkeit, was darauf hindeutet, dass ein verlustfreier Codec in Betracht gezogen werden könnte. Da verlustfreie Kodierung jedoch naturgemäß ein viel niedrigeres Kompressionsniveau als verlustbehaftete Kodierung aufweist, könnten Sie feststellen, dass, wenn Ihr Quellaudio groß genug ist, Sie möglicherweise dennoch einen verlustbehafteten Encoder verwenden müssen, insbesondere in einer Web-Umgebung, in der Sie die Downloadrate der Medien nicht steuern können.

Angenommen, dass verlustfreie Kompression in diesem Fall unsere beste Option ist (was es in der Regel ist, solange die Audiodateien klein sind), sind die drei stärksten Kandidaten aus Codec-Perspektive [FLAC](https://en.wikipedia.org/wiki/FLAC), [Apple Lossless (ALAC)](https://en.wikipedia.org/wiki/Apple_Lossless) und [MPEG-4 ALS](https://en.wikipedia.org/wiki/Audio_Lossless_Coding). Welche wir wählen, hängt von der Browserunterstützung und den Mediencontainerformaten ab, die sie unterstützen.

Für die Zwecke dieses Beispiels werden wir annehmen, dass alle Browser denselben Codec und Containerschutz wie Firefox haben (auch wenn dies weit entfernt von der Realität ist). Berücksichtigen Sie die Breite der tatsächlichen Unterstützung der Codecs, wenn Sie Ihre Entscheidungen treffen.

- Firefox unterstützt FLAC in den nativen Containern von FLAC sowie in Ogg- und MPEG-4 (MP4)-Dateien.
- Firefox unterstützt Apple Lossless nur über seine plattformspezifische QuickTime-Unterstützung.
- Firefox unterstützt MP4 ALS nicht.

In diesem Fall scheint es, dass FLAC wahrscheinlich der beste Codec ist; ALAC hat wenig bis gar keine direkte Browserunterstützung.

## Audio-Codierungssoftware

Es gibt viele Tools zur Verfügung, um Audio zu codieren. Die einfachsten sind diejenigen, die zum Rippen von CDs oder zum Einziehen von Audiodateien gedacht sind und schnell und automatisch in MP3- oder AAC-Format konvertieren, um sie in einer Bibliothek zu speichern, wie [iTunes](https://www.apple.com/itunes/). Aber wenn Sie Web-Apps entwickeln, die Audio als Bestandteil der App verwenden, wie Spiele, benötigen Sie mehr Kontrolle über den Codierungsprozess und mehr Optionen in Bezug auf das verwendete Format beim Codieren des Audios.

Einige beliebte Optionen:

- [FFmpeg](https://ffmpeg.org/)
  - : Das wohl bekannteste und am weitesten anerkannte Open-Source-Codec-Paket, FFmpeg unterstützt die Mehrheit der beliebtesten Audioformate und bietet Kommandozeilen-Tools und Bibliotheken für das Codieren, Decodieren und Durchführen von Formatkonvertierungen sowohl von Audio als auch von Video. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Handbrake](https://handbrake.fr/)
  - : Eine äußerst beliebte Open-Source-Oberfläche für FFmpeg, die eine grafische Benutzeroberfläche hinzufügt, die es viel einfacher macht, die große Auswahl an Optionen, die FFmpeg bei der Codierung von Audio und/oder Video bietet, zu steuern. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Audacity](https://www.audacityteam.org/)
  - : Ein Open-Source-Audio-Editor, der das Laden von Audio aus vielen verschiedenen Formaten, das Bearbeiten, Filtern und Anpassen des Audios und das Speichern zurück im Originalformat oder in einem neuen Format unterstützt. Verfügbar für macOS, Linux und Windows.
- [LAME](https://lame.sourceforge.io/)
  - : Ein hochwertiger Open-Source-MP3-Coder mit Unterstützung für CBR, ABR und VBR-Codierung sowie eine Vielzahl anderer Optionen. Wird nur in der Quellform vom LAME-Projekt verteilt, kann aber mit [Homebrew](https://brew.sh/) oder ähnlichen Tools installiert werden.

## Siehe auch

- [Mediencontainerformate](/de/docs/Web/Media/Guides/Formats/Containers)
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Leitfaden für Web-Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

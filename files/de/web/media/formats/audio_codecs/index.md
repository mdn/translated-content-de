---
title: Leitfaden zu Web-Audiocodecs
slug: Web/Media/Formats/Audio_codecs
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Selbst Ton mit bescheidener Qualität und hochauflösender Stereoqualität kann eine beträchtliche Menge an Festplattenspeicher beanspruchen. Für Webentwickler ist ein noch größeres Anliegen die Netzwerkbandbreite, die zum Übertragen von Audio benötigt wird, sei es für Streaming oder zum Herunterladen für die Nutzung während eines Spiels. Die Verarbeitung von Audiodaten zum Codieren und Dekodieren wird von einem Audio-**{{Glossary("codec")}}** (**CO**der/**DEC**oder) übernommen. In diesem Artikel betrachten wir Audio-Codecs, die im Web zum Komprimieren und Dekomprimieren von Audio verwendet werden, welche Fähigkeiten und Anwendungsfälle sie haben und geben Ratschläge zur Auswahl von Audiocodecs für Ihre Inhalte.

Darüber hinaus verwenden WebRTC-Implementierungen in der Regel eine Teilmenge dieser Codecs für die Codierung und Decodierung von Medien und unterstützen möglicherweise zusätzliche Codecs, um eine optimale plattformübergreifende Unterstützung von Video- und Audiokonferenzen zu gewährleisten und eine bessere Integration in ältere Telekommunikationslösungen zu ermöglichen. Weitere Informationen finden Sie unter [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs).

Für Informationen über die grundlegenden Konzepte, wie digitale Audio funktioniert, lesen Sie den Artikel [Konzepte der digitalen Audioverarbeitung](/de/docs/Web/Media/Formats/Audio_concepts).

## Häufige Codecs

Die folgende Liste zeigt die am häufigsten im Web verwendeten Codecs und welche Container (Dateitypen) sie unterstützen. Wenn Sie nur wissen müssen, welche Codecs überhaupt verwendet werden können, ist dies für Sie. Natürlich können einzelne Browser entscheiden, ob sie alle diese Codecs unterstützen oder nicht, und die Unterstützung dafür, welche Containerarten sie verwenden können, kann ebenfalls variieren. Darüber hinaus können Browser entscheiden, zusätzliche Codecs zu unterstützen, die nicht in dieser Liste enthalten sind.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codename (Kurz)</th>
      <th scope="col">Vollständiger Codename</th>
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
      <td>Pulse Code Modulation (PCM) von Sprachfrequenzen</td>
      <td>
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#g.722_64_kbps_7_khz_audio_coding">G.722</a></th>
      <td>
        7 kHz Audiocodierung innerhalb von 64 kbps (für
        Telefonie/{{Glossary("VoIP")}})
      </td>
      <td>
        {{Glossary("RTP")}} /
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
          Wenn MPEG-1 Audio Layer III Codec-Daten in einer MPEG-Datei gespeichert sind und es keinen Video-Track gibt, wird die Datei typischerweise als MP3-Datei bezeichnet, obwohl es sich immer noch um eine MPEG-Formatdatei handelt.
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

Es gibt zwei allgemeine Kategorien von Faktoren, die das codierte Audio beeinflussen, das von einem Audio-Codec-Encoder ausgegeben wird: Details über das Format und die Inhalte des Quell-Audios sowie der Codec und seine Konfiguration während des Kodierungsprozesses.

Für jeden Faktor, der das kodierte Audio beeinflusst, gibt es eine einfache Regel, die fast immer wahr ist: Da die Klangtreue digitaler Audioaufnahmen durch die Granularität und Präzision der zur Umwandlung in einen Datenstrom genommenen Samples bestimmt wird, gilt: Je mehr Daten verwendet werden, um die digitale Version des Audios darzustellen, desto näher wird der aufgenommene Klang dem Quellmaterial entsprechen.

### Die Auswirkung des Quellaudioformats auf die kodierte Audioausgabe

Da codiertes Audio inhärent weniger Bits zur Darstellung jedes Samples verwendet, kann das Quell-Audioformat tatsächlich weniger Einfluss auf die Größe des codierten Audios haben, als man erwarten könnte. Eine Reihe von Faktoren beeinflussen jedoch dennoch die Qualität und Größe des kodierten Audios. Die folgende Tabelle listet eine Reihe von Schlüsselmerkmalen des Quell-Audio-Dateiformats und deren Einfluss auf das kodierte Audio auf.

<table class="standard-table">
  <caption>
    Die Auswirkung des Quell-Audioformats und -inhalts auf die Qualität und
    Größe des kodierten Audios
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
          >Anzahl der Kanäle</a
        >
      </th>
      <td>
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der Richtung, nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die Größe des kodierten Audios erheblich vergrößern, abhängig von den Inhalten und Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
        Unerwünschtes Hintergrundrauschen oder Zischen neigt dazu, die Audioqualität direkt (indem die Details des Vordergrund-Audios verdeckt werden) und indirekt (indem die Audio-Wellenform komplizierter und somit schwieriger in der Größe zu reduzieren ist, während die Präzision beibehalten wird) zu reduzieren.
      </td>
      <td>
        Zischen, Rauschen oder Hintergrundgeräusche erhöhen die Audiokomplexität, was im Allgemeinen die Kompressionsmöglichkeiten verringert.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Formats/Audio_concepts#sampling_audio"
          >Samplerate</a
        >
      </th>
      <td>
        Je mehr Samples pro Sekunde verfügbar sind, desto höher ist die Wahrscheinlichkeit, dass die resultierende kodierte Audiotreue höher ist.
      </td>
      <td>
        Eine Erhöhung der Samplerate erhöht die Größe der kodierten Audiodatei.
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
        Hängt vom Codec ab; Codecs haben normalerweise ein internes Sample-Format, das möglicherweise mit der ursprünglichen Samplegröße übereinstimmen kann oder nicht. Mehr Quelldetails können die kodierte Datei jedoch vergrößern; sie wird dadurch niemals kleiner.
      </td>
    </tr>
  </tbody>
</table>

Natürlich können diese Effekte durch Entscheidungen während der Codierung des Audios verändert werden. Wenn der Encoder beispielsweise so konfiguriert ist, dass die Samplerate reduziert wird, wird der Einfluss der Samplerate auf die Ausgabedatei entsprechend reduziert.

Für weitere Informationen zu diesen und anderen Merkmalen von Audiodaten lesen Sie [Audio-Datenformat und Struktur](/de/docs/Web/Media/Formats/Audio_concepts#audio_data_format_and_structure).

### Der Einfluss der Codec-Konfiguration auf die kodierte Audioausgabe

Audiocodecs verwenden in der Regel clever gestaltete und hochkomplexe mathematische Algorithmen, um die Quell-Audiodaten zu nehmen und sie zu komprimieren, damit sie erheblich weniger Speicher oder Netzwerkbandbreite beanspruchen. Neben der Auswahl der Art des zu verwendenden Encoders haben Sie möglicherweise die Möglichkeit, den Encoder mithilfe von Parametern anzupassen, die bestimmte Algorithmen wählen, diese Algorithmen abstimmen und angeben, wie viele Durchgänge während der Codierung durchgeführt werden sollen.

<table class="standard-table">
  <caption>
    Audio-Encoder-Konfigurationseffekte auf Qualität und Größe
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
      <td>Kein Verlust an Klangtreue</td>
      <td>Es ist unwahrscheinlich, mehr als 40-50% an Komprimierung zu erzielen</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Kompression</a
        >
      </th>
      <td>
        Immer ein gewisser Verlust an Klangtreue, je höher die Kompression, desto größer der Verlust
      </td>
      <td>Eine Komprimierung von bis zu 80-95% ist möglich</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Formats/Audio_concepts#bit_rate"
          >Bitrate</a
        >
      </th>
      <td>Je höher die Bitrate, desto höher kann die Qualität sein</td>
      <td>
        Je höher die Bitrate, desto größer ist die kodierte Datei
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#audio_frequency_bandwidth"
          >Audiofrequenzbandbreite</a
        >
      </th>
      <td>
        Wenn es irgendeinen Ton im entfernten Frequenzband gibt, kann ein merklicher Verlust an Klangtreue auftreten
      </td>
      <td>
        Das Entfernen von Frequenzbändern bedeutet weniger Daten zum Kodieren, daher kleinere kodierte Dateien
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#joint_stereo"
          >Stereokodierung</a
        >
      </th>
      <td>
        Einfache Stereo- und
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#mid-side_stereo_coding"
          >Mid-Side-Stereo-Kodierung</a
        >
        beeinträchtigen die Qualität nicht;
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#intensity_stereo_coding"
          >Intensitäts-Stereokodierung</a
        >
        führt jedoch zu einem Verlust an Details.
      </td>
      <td>
        Joint Stereo kann die Größe des kodierten Audios in gewissem Maße reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter sowie der Bereich möglicher Werte variiert von Codec zu Codec und sogar unter den verschiedenen Codierungsprogrammen für denselben Codec. Lesen Sie deshalb die Dokumentation, die mit der von Ihnen verwendeten Codierungssoftware geliefert wird, um mehr zu erfahren.

### Merkmale, die die Größe des kodierten Audios beeinflussen

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige davon hängen von den Eigenschaften des Quell-Audios ab; andere stehen im Zusammenhang mit Entscheidungen, die während der Codierung des Audios getroffen werden.

#### Verlustfreie versus verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokompression. **Verlustfreie** Kompressionsalgorithmen reduzieren die Größe des Audios, ohne die Qualität oder Klangtreue zu beeinträchtigen. Beim Dekomprimieren von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis in jeder Hinsicht identisch mit dem ursprünglichen Klang, bis hin zum Bit.

**Verlustbehaftete** Codecs hingegen nutzen die Tatsache aus, dass das menschliche Ohr kein perfekter Interpret von Audio ist und dass das menschliche Gehirn wichtige Informationen aus unvollkommenen oder rauschenden Audio aufnehmen kann. Sie entfernen Audiofrequenzen, die nicht viel genutzt werden, tolerieren den Verlust an Präzision in der dekodierten Ausgabe und verwenden andere Methoden, um Audioinhalte, Qualität und Klangtreue zu verlieren, um kleinere kodierte Medien zu erzeugen. Bei der Dekomprimierung ist die Ausgabe in unterschiedlichem Maße immer noch verständlich. Der spezifische verwendete Codec und die gewählte Kompressionseinstellung bestimmen, wie nahe die Ausgabe dem ursprünglichen, unkomprimierten Audiosignal zu sein scheint, wenn sie vom menschlichen Ohr gehört wird.

Aufgrund der Unterschiede, wie verlustbehaftete Codecs im Vergleich zu verlustfreien arbeiten, insbesondere der Tatsache, dass verlustfreie viel konservativer in ihrer Kompression sein müssen, führen verlustbehaftete Codecs fast immer zu signifikant kleineren komprimierten Audios, als es verlustfreie Codecs tun.

Im Allgemeinen sind die häufigsten Gründe, verlustfreie Audio zu wählen, dass Sie Archivierungsqualität benötigen oder dass die Audiodateien neu gemischt und erneut komprimiert werden und Sie die Verstärkung von Artefakten im Audio durch die erneute Komprimierung vermeiden möchten. Für Echtzeit-Streaming von Audio ist ein verlustbehafteter Codec normalerweise erforderlich, um sicherzustellen, dass der Datenfluss mit der Audiowiedergabegeschwindigkeit Schritt halten kann, unabhängig von der Netzwerkleistung.

### Maximale Anzahl von Kanälen

Der Ton, der an jeden Lautsprecher in einem Soundsystem ausgegeben wird, wird durch einen Audio-Kanal in einem Stream bereitgestellt. Mono-Sound ist ein einziger Kanal. Stereo-Sound umfasst zwei. 5.1 Surround-Sound hat fünf Audiokanäle sowie einen **Low Frequency Enhancement** (**LFE**)-Kanal.

LFE-Kanäle sind speziell dafür ausgelegt, Audio-Daten niedriger Frequenz zu speichern, und werden häufig verwendet, um Audio-Daten für Subwoofer bereitzustellen. Wenn Sie die Anzahl der Audiokanäle in der Form X.Y (wie 2.1 oder 5.1) geschrieben sehen, stellt die Zahl nach dem Dezimalpunkt, Y, die Anzahl der LFE-Kanäle dar. Zum Beispiel unterstützt MP3 einen LFE-Kanal, während AAC bis zu 16 unterstützen kann.

Zusätzlich zur Bereitstellung von Audio für bestimmte Lautsprecher in einem Soundsystem erlauben einige Codecs möglicherweise, dass Audiokanäle verwendet werden, um alternative Audio, wie Gesang in verschiedenen Sprachen oder beschreibendes Audio für sehbehinderte Personen, bereitzustellen.

### Audiofrequenzbandbreite

Die **Audiofrequenzbandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, die unter Verwendung des Codecs dargestellt werden können. Einige Codecs funktionieren spezifisch durch Eliminierung von Audio, das außerhalb eines bestimmten Frequenzbereichs liegt. Es gibt eine Korrelation zwischen der Samplerate und der maximalen Tonfrequenz, die von einer durch einen Codec dargestellten Wellenform dargestellt werden kann. Auf theoretischer Ebene ist die maximale Frequenz, die ein Codec darstellen kann, die Samplerate, geteilt durch zwei; diese Frequenz wird als [Nyquist-Frequenz](https://de.wikipedia.org/wiki/Nyquist-Frequenz) bezeichnet. In der Realität ist das Maximum etwas niedriger, liegt aber nahe.

Die Audiofrequenzbandbreite kommt besonders dann ins Spiel, wenn ein Codec speziell entwickelt oder konfiguriert wurde, um menschliche Sprache darzustellen, anstatt ein breites Spektrum an Klängen. Menschliche Sprache liegt im Allgemeinen im Frequenzbereich von 300 Hz bis 18 kHz. Der größte Teil der menschlichen Sprachlaute existiert jedoch im Bereich von 300 Hz bis 8 kHz, und Sie können genug menschlicher Sprachlaute im Frequenzbereich von 500 Hz bis 3 kHz erfassen, um immer noch verständlich zu sein.

Aus diesem Grund beginnen sprachspezifische Codecs häufig damit, Geräusche zu entfernen, die außerhalb eines festgelegten Bereichs liegen. Dieser Bereich ist die Audiofrequenzbandbreite. G.722 entfernt beispielsweise Töne außerhalb der Audiofrequenzbandbreite von 50 Hz bis 7 kHz. Dies reduziert die Menge an Daten, die von Anfang an kodiert werden müssen.

## Codec-Details

Im Folgenden werfen wir einen kurzen Blick auf jeden dieser Codecs und betrachten ihre grundlegenden Fähigkeiten und ihre primären Anwendungsfälle.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding** (**AAC**)-Codec wird als Teil des MPEG-4 (H.264)-Standards definiert; genauer gesagt als Teil von [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html). AAC wurde entwickelt, um mehr Kompression mit höherer Audiotreue als MP3 zu bieten, und ist eine beliebte Wahl geworden. Es ist das Standardformat für Audio in vielen Medienarten, einschließlich Blu-Ray-Discs und HDTV, sowie das Format, das für von Online-Anbietern wie iTunes gekaufte Lieder verwendet wird.

AAC verfügt über eine Reihe von Profilen, die Methoden zur Komprimierung von Audio für bestimmte Anwendungsfälle definieren und alles von hochqualitativem Surround-Sound bis zu niedrigauflösendem Audio für reine Sprachverwendung umfassen.

Als patentbelastetes Format ist die Unterstützung von AAC weniger vorhersehbar. Zum Beispiel unterstützt Firefox AAC nur, wenn die Unterstützung durch das Betriebssystem oder eine externe Bibliothek bereitgestellt wird.

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
      <td>32-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>8 kHz - 96 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>96 kbps bei 48 kHz Samplerate</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
      <td>48 (plus 16 Low Frequency Enhancement-Kanäle)</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
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
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt. Stattdessen verlässt sich Firefox auf die native Plattformunterstützung für AAC. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und unterstützt nur das Hauptprofil von AAC. Darüber hinaus ist AAC in Chromium-Builds nicht verfügbar.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>MP4, ADTS, 3GP</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Für das Streaming oder die Verteilung von AAC-kodierten Inhalten: Keine Lizenz erforderlich; Entwickler von Codecs sind verpflichtet, eine Patentlizenz über
        <a href="https://www.via-la.com/licensing-2/aac/">VIA Licensing</a> zu erhalten
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein verlustfreier Codec, der von Apple entwickelt wurde. Nachdem es sich zunächst um ein geschlossenes Format handelte, öffnete Apple es später unter einer Apache-Lizenz.

Die plattform- und browserübergreifende Unterstützung für ALAC ist nicht sehr stark, was es zu einer weniger idealen Wahl für die allgemeine Nutzung macht. Wenn sich Ihr Ziel jedoch hauptsächlich auf macOS- und iOS-Benutzer konzentriert, kann es sich lohnen, diesen in Betracht zu ziehen, da die Betriebssysteme über integrierte Unterstützung für ALAC verfügen. Andernfalls ist FLAC wahrscheinlich eine bessere Wahl, wenn Sie einen verlustfreien Codec verwenden müssen.

Denken Sie jedoch daran, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherkapazität erfordern und möglicherweise keine gute Wahl außerhalb sehr spezifischer Anwendungsfälle sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Basierend auf dem Sample-Format und der Samplerate sowie der Komprimierungsstufe
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit, 20-Bit, 24-Bit und 32-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>1 Hz bis 384,000 Hz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
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
        {{Glossary("RTP")}} /
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

Der **[Adaptive Multi-Rate Audio Codec](https://voiceage.com/AMR-NB.AMR.html)** ist für effizientes Kodieren menschlicher Sprache optimiert. Er wurde 1999 als Teil des 3GPP-Audiostandards standardisiert, der sowohl für [GSM](https://de.wikipedia.org/wiki/GSM) als auch für [UMTS](https://de.wikipedia.org/wiki/UMTS) Mobiltelefonie verwendet wird, und verwendet einen Multi-Rate-Schmalband-Algorithmus zur Kodierung von Audiofrequenzen mit einer Sprachqualität auf Telefonieniveau bei etwa 7,4 kbps. Neben der Verwendung für Echtzeittelefonie kann AMR-Audio auch für Voicemail und andere kurze Tonaufnahmen verwendet werden.

AMR-Audio, das in Dateien gespeichert wird, kann die Endung `.amr` haben, kann aber auch in `.3gp`-Dateien eingebettet werden.

Als sprachspezifischer Codec ist AMR praktisch unbrauchbar für jeden anderen Inhalt, einschließlich Audio, das nur Gesangsstimmen enthält. Außerdem, da AMR darauf ausgelegt ist, die Kapazitätsanforderungen zu minimieren, erfasst es nur den Teil der vollständigen Audiofrequenzbandbreite der menschlichen Sprache, der absolut notwendig ist, um zu verstehen, was gesagt wird, sodass die Qualität entsprechend reduziert ist. Wenn Sie die Möglichkeit benötigen, Audio mit minimalem Einfluss auf Netzwerk- und/oder Speicherkapazität aufzunehmen, kann AMR eine gute Wahl sein. Wenn Sie jedoch eine hochauflösende Wiedergabe menschlicher Sprache oder auch nur eine niedrige Musikqualität benötigen, müssen Sie ein anderes Format wählen.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>Halbrate (HR) und Volle Rate (FR):</strong> 1,8 kbps, 4,75 kbps,
        5,15 kbps, 5,9 kbps, 6,7 kbps, 7,4 kbps, 7,95 kbps
      </td>
    </tr>
    <tr>
      <td><strong>Volle Rate (FR) nur:</strong> 10,2 kbps und 12,2 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
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
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
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
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>200 Hz bis 3,400 Hz</td>
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
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Nicht kostenlos; Lizenzgebühren und jährliche Lizenzgebühren gelten. Weitere Informationen erhalten Sie unter
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge-Lizenzierung</a>
        .
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audio-Codec, der von der [Xiph.org Foundation](https://xiph.org/) veröffentlicht wurde. Er bietet gute Komprimierungsraten ohne Verlust der Audiotreue; das heißt, das dekomprimierte Audio ist identisch mit dem Original. Da der Komprimierungsalgorithmus speziell für Audio entwickelt wurde, liefert er bessere Ergebnisse als ein allgemeiner Komprimierungsalgorithmus.

FLAC ist eine ausgezeichnete Wahl für kleinere Audioeffekt-Dateien, bei denen eine einwandfreie Qualität und Tonalität gewünscht sind, sowie für die Archivierung von Musik.

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
      <td>4-Bit bis 24-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>
        1 Hz bis 65,535 Hz (in 1 Hz Schritten) oder 10 Hz bis 655,350 Hz in 10 Hz
        Schritten
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei; bis zu 40-50% Größenreduzierung</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>Volles Spektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4.3 ms bis 92 ms, mit 46.4 ms als typischem Durchschnitt</td>
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
        {{Glossary("RTP")}} /
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

Die **G.711**-Spezifikation, veröffentlicht von der International Telecommunications Union (ITU), wurde 1972 herausgegeben, um ein standardisiertes Audio-Codierverfahren für Telefonanwendungen zu definieren. Sie unterstützt sprachqualitatives Audio, das Frequenzen von 300 bis 3400 Hz abdeckt. Sie wird umfangreich für Telefongespräche und Voicemail verwendet und ist die höchste Audioqualität, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein Hochleistungs-Codec, sondern wurde stattdessen optimiert, um eine breite Palette von Sprachpegeln (vom Flüstern bis zum Schreien) zu unterstützen, während gleichzeitig eine hohe Verständlichkeit und niedrige rechnerische Komplexität gewahrt wird. G.711 verwendet einen logarithmischen Kompanding-Algorithmus, der 14 Bit Dynamikbereich in einer 8-Bit-Abtastung bietet. Es verwendet eine Abtastrate von 8000 Abtastungen/Sekunde, was einer Bitrate von 64000 bps entspricht.

Es gibt zwei Varianten von G.711, die die genaue mathematische Gleichung für den Algorithmus angeben: [µ-law](https://en.wikipedia.org/wiki/M-law) (üblicherweise in Nordamerika und Japan verwendet) und [A-law](https://en.wikipedia.org/wiki/A-law) (in anderen Teilen der Welt üblich). Es gibt keine wesentlichen Qualitätsunterschiede zwischen den beiden Gesetzen, und es ist einfach, Audio von einem zum anderen zu transcoden. Dennoch ist es wichtig, anzugeben, welches Gesetz in jeder Wiedergabeanwendung oder -dateiformat verwendet wird. A-law-Audio wird schlecht wiedergegeben, wenn es fälschlicherweise mit dem µ-law-Algorithmus dekomprimiert wird und umgekehrt.

Dieser Codec muss von allen [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen unterstützt werden, da er einfach, leicht zu implementieren, weit verbreitet und umfassend kompatibel über alle modernen Rechnerplattformen hinweg ist.

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
      <td>Kodiertes Audio ist 8 Bit pro Abtastung</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>128 kbps</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Logarithmisches Kompanding (µ-law oder A-law)</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audio-Kanäle</th>
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
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle anwendbaren Patente sind abgelaufen, sodass G.711 ohne Einschränkungen verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audiokodierung)

Veröffentlicht von der International Telecommunications Union (ITU), ist der **G.722**-Codec speziell für die Sprachkompression konzipiert. Seine Audio-Codierbandbreite ist auf den Bereich von 50 Hz bis 7,000 Hz begrenzt, der den größten Teil des Frequenzbereichs typischer menschlicher Stimmgebung abdeckt. Dies macht ihn ungeeignet für das Handling von Audio, das außerhalb des menschlichen Sprachbereichs liegen könnte, wie Musik.

G.722-Audio wird unter Verwendung von Adaptive Differential Pulse Code Modulation (ADPCM) kodiert, wobei jedes Sample nicht durch seinen absoluten Wert dargestellt wird, sondern als Wert, der angibt, wie sehr sich das neue Sample vom vorherigen Sample unterscheidet.

G.722 wird hauptsächlich mit WebRTC-Verbindungen verwendet, da es einer der Audiocodecs ist, die von der WebRTC-Spezifikation vorgeschrieben sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; in der Praxis werden jedoch immer 64 kbps verwendet<br />G.722 Anhang B Super-Breitband: 64 kbps, 80 kbps und 96 kbps<br />G.722 Anhang D Stereo-Breitband: 64 kbps und 80 kbps<br />G.722 Anhang D Stereo-Super-Breitband: 80 kbps, 96 kbps, 112 kbps und 128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>14-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>
        16 kHz (ADPCM ist spezifiziert, um 8 kHz, 11.025 kHz, 22.05 kHz, 44.1 kHz zu ermöglichen, aber G.722 verwendet 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>128 kbps bei 44,1 kHz Samplerate</td>
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
      <th scope="row">Audiofrequenzbandbreite</th>
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
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle anwendbaren Patente sind abgelaufen; G.722 kann ohne
        Einschränkungen verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den Audiiformaten, die durch die MPEG/MPEG-2-Standards spezifiziert werden, ist **MPEG-1 Audio Layer III**—auch bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)**—bei weitem das am weitesten verbreitete und bekannteste. Der MP3-Codec wird durch [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert und wurde 1991 eingeführt (und 1992 finalisiert).

Wenn MP3-formatierter Audio innerhalb eines MPEG Containers gespeichert wird, wird die resultierende Datei ebenfalls als einfach "MP3-Datei" oder "MP3" bezeichnet. Dateien mit der weit verbreiteten `.mp3`-Erweiterung sind in dem vielleicht am weitesten verbreiteten Audio-Dateiformat der Welt gespeichert, das in großem Maße für die digitale Audiosrevolution der späten 1990er und frühen 2000er Jahre verantwortlich ist.

MP3-Audio im MPEG-1-Format unterstützt höhere Bitraten sowie höhere Abtastraten als MPEG-2-Dateien im MP3-Audioformat. MPEG-1-Format-MP3 ist im Allgemeinen am besten für Musik oder andere komplexe Audiodaten geeignet, während MPEG-2-Modus-MP3-Audio für Sprache und andere einfachere Klänge akzeptabel ist.

Die hinter MP3 stehenden Patente sind abgelaufen, wodurch viele oder die meisten Lizenzierungsbedenken beim Einsatz von MP3-Dateien in Ihren Projekten entfallen. Dies macht sie zu einer guten Wahl für viele Projekte.

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
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Sampleraten</th>
      <td><strong>MPEG-1-Modus:</strong> 32000 Hz, 44100 Hz, 48000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 16000 Hz, 22050 Hz, 24000 Hz (Die Hälfte der Frequenz der MPEG-1-unterstützten Modi)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>128 kbps bei 48 kHz Samplerate</td>
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
        <strong>MPEG-2-Modus:</strong> 5 (plus 1 optionaler Low Frequency
        Enhancement-Kanal) [5.1]
      </td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
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
        {{Glossary("RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Patentfrei in der EU seit 2012; patentfrei in den Vereinigten Staaten seit
        dem 16. April 2017; jetzt frei verwendbar
      </td>
    </tr>
  </tbody>
</table>

Aus patentrechtlichen Gründen hat Firefox MP3 vor Version 71 nicht direkt unterstützt; stattdessen wurden plattformnative Bibliotheken verwendet, um MP3 zu unterstützen. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:

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

Das [Opus-Format](<https://de.wikipedia.org/wiki/Opus_(Codec)>) wurde von der Xiph.org Foundation als vollständig offenes Audioformat entwickelt; es wurde vom [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein guter Allzweck-Audio-Codec, der sowohl einfache Audio wie Sprache als auch Musik und andere komplexere Geräusche effizient behandeln kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei nutzen, da der Encoder die Bitrate, die Audio-Bandbreite, den Algorithmus und andere Details der Kompressionseinstellungen für jeden Audio-Frame auswählen kann.

Opus ist ein guter Allround-Audio-Codec für die Verwendung in Ihren Webanwendungen und kann für alle Audiotätigkeiten verwendet werden, die Sie im Sinn haben.

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
      <td>16-Bit-Integer und 32-Bit-Float (-1.0 bis 1.0)</td>
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
              <th scope="row">Mittelband (MB)</th>
              <td>12 kHz</td>
            </tr>
            <tr>
              <th scope="row">Breitband (WB)</th>
              <td>16 kHz</td>
            </tr>
            <tr>
              <th scope="row">Super-Breitband (SWB)</th>
              <td>24 kHz</td>
            </tr>
            <tr>
              <th scope="row">Vollband (FB)</th>
              <td>48 kHz</td>
            </tr>
          </tbody>
        </table>
        <p>
          Die angegebenen Sampleraten sind <em>effektive Sampleraten</em>. Opus
          verwendet einen Algorithmus, der auf Audiobandbreiten anstelle von Sampleraten basiert.
          Siehe {{RFC(6716, "", 2)}} für Details. Darüber hinaus gibt es einen
          <em>optional</em>en Teil der Opus-Spezifikation (Opus Custom), der
          nicht standardmäßige Sampleraten zulässt, aber die Verwendung dieser Funktion wird nicht empfohlen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>96 kbps bei 48 kHz Samplerate</td>
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
      <th scope="row">Audiofrequenzbandbreite</th>
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
              <th scope="row">Super-Breitband (SWB)</th>
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
          <a href="https://de.wikipedia.org/wiki/Abtasttheorem">Nyquist–Shannon-Abtasttheorem</a>
          zeigt, dass die Audiobandbreite bis zur Hälfte der Samplerate betragen kann, erlaubt Opus keine Kodierung außerhalb eines maximalen 20 kHz Audiobandbreits. Da das menschliche Ohr ohnehin nichts über den 20 kHz-Punkt wahrnehmen kann, spart dies etwas Platz im kodierten Audio.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>5 ms bis 66.5 ms</td>
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
          Diese Informationen beziehen sich auf die Unterstützung für Opus in HTML
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
        {{Glossary("RTP")}} /
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

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format von der [Xiph.org Foundation](https://xiph.org/), das eine breite Palette von Kanal-Kombinationen unterstützt, darunter monoaurale, stereophone, polyphone, quadriphonische, 5.1-Surround-, ambisonische oder bis zu 255 diskrete Audiokanäle. Je nach Qualitätseinstellung, die während des Encodings verwendet wird, kann die resultierende Bitrate zwischen etwa 45 kbps und 500 kbps variieren. Vorbis verwendet von Natur aus eine variable Bitrate-Codierung; die Bitrate kann von einem Sample zum nächsten variieren, wie während des Kompressionsprozesses erforderlich.

Im Allgemeinen ist Vorbis in Bezug auf Größe und Bitrate effizienter als MP3 bei ähnlichen Qualitätsniveaus. Dies und seine freie und offene Lizenz machen es zu einer guten Wahl für viele Arten von Audiodaten, solange seine hohe Latenz kein Problem darstellt.

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
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sampleraten</th>
      <td>8 kHz - 192 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>
        192 kbps bei 48 kHz; dies wird typischerweise erreicht, indem die
        Qualitätsstufe auf 6 bis 8 gesetzt wird.
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
          Diese Informationen beziehen sich auf die Unterstützung für Vorbis in HTML
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
        {{Glossary("RTP")}} /
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

In der Regel gilt: Unabhängig von dem verwendeten Codec wird die Arbeit erledigt, auch wenn er nicht die ideale Wahl ist, solange Sie keinen Codec wählen, der speziell für eine völlig andere Art von Quell-Audio entwickelt wurde. Wenn Sie beispielsweise einen reinen Sprachcodec auswählen und versuchen, ihn für Musik zu verwenden, werden Sie keine brauchbaren Ergebnisse erzielen.

Einige Codecs können die Kompatibilität einschränken, während andere für Ihre Bedürfnisse optimaler sein können als andere. Hier geben wir Anleitungen, die Ihnen helfen, einen geeigneten Codec für Ihren Anwendungsfall auszuwählen.

Bei der Auswahl eines Codecs für Ihr Audio sollten Sie zunächst die folgenden Fragen berücksichtigen:

- Wird das kodierte Audio neu gemischt oder neu komprimiert? Wenn ja, vermeiden Sie verlustbehaftete Kompression, die durch erneutes Komprimieren des Audios verstärkt würde; oder verwenden Sie zumindest so wenig Kompression wie möglich.
- Wenn das Audio in eine bestimmte Dateityp eingesetzt werden muss, denken Sie daran, da Mediencontainer in der Regel einen bestimmten Untersetzl der verfügbaren Codecs unterstützen.
- Welche Art von Audiocontent wird vom Codec gehandhabt? Bestimmte Codecs sind speziell für reinen Sprachinhalt konzipiert (sie nutzen den reduzierten Frequenzbereich der menschlichen Sprache). Andere können eine algorithmische Tendenz haben, bei der Kodierung bestimmter Musikgenres schlechter abzuschneiden.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften hat jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen könnten?
- Inwieweit ist die Latenz für Ihre Bedürfnisse von Bedeutung? Wenn Sie Klang benötigen, der sehr präzise getimed ist, desto niedriger die Latenz, desto besser.
- Wie viel Komprimierung müssen Sie erreichen?

Lassen Sie uns einige gängige Szenarien betrachten, um ein Gefühl für den Entscheidungsprozess zu bekommen.

### Beispiel: Musikstreaming

Zum Streaming von Musik möchten Sie einen Codec auswählen, der die Bandbreitennutzung so weit wie möglich minimiert, während er so wenige Artefakte wie möglich durch die Kompression in das Audio einführt. Dies ist notwendig, weil die Rate, mit der die Musik heruntergeladen wird, nicht höher sein sollte als die verfügbare Bandbreite im Netzwerk, und idealerweise sollte Platz für Schwankungen der Netzwerkgeschwindigkeit und die Nutzung des Netzwerks durch andere Anwendungen bleiben.

Es sei denn, es gibt einen spezifischen Bedarf für verlustfreie Kompression oder die Netzwerkbandbreite ist garantiert hoch genug, um dies zu unterstützen, ist eine verlustbehaftete Kompressionsmethode eine gute Wahl. Welchen Sie wählen, hängt von der Browserkompatibilität und der Verfügbarkeit bestimmter Funktionen ab, die der Codec unterstützen muss.

_Normalerweise_ ist die Latenz beim Streaming von Musik nicht von großer Bedeutung. Mögliche Ausnahmen sind Schleifenmusik, bei der Sie Musik ohne Unterbrechung wiederholt abspielen müssen, oder wenn Sie Songs ohne Pause zwischen ihnen abspielen müssen. Dies kann besonders wichtig für klassische Musik, Theatersoundtracks und für Hintergrundmusik während des Spiels sein.

Für die allgemeine Musikwiedergabe sind die drei wahrscheinlichsten Kandidaten MP3, AAC und Vorbis.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt, was diese zu einer ausgezeichneten Wahl macht.
- Vorbis wird fast immer in Ogg-Dateien verwendet, aber Ogg-Container werden nicht überall unterstützt. Sogar Microsoft Edge, das Vorbis unterstützt, unterstützt bisher noch keine Ogg-Container.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die eine Audio Layer III-Spur enthalten.

Wenn Sie die Latenz bei der Musikwiedergabe minimieren müssen, sollten Sie Opus stark in Betracht ziehen, das die niedrigste Latenz bei den allgemeinen Codecs hat (5 ms bis 66,5 ms, verglichen mit mindestens 100 ms bei den anderen).

> [!NOTE]
> Die hier beschriebene Kompatibilitätsinformation ist im Allgemeinen korrekt zum Zeitpunkt der Abfassung dieses Artikels; es kann jedoch Vorbehalte und Ausnahmen geben. Achten Sie darauf, die Kompatibilitätstabellen zu überprüfen, bevor Sie sich für ein bestimmtes Medienformat entscheiden.

Basierend darauf ist AAC wahrscheinlich Ihre beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Natürlich, wenn Sie mehrere Formate bereitstellen können (zum Beispiel durch Verwendung des {{HTMLElement("source")}}-Elements innerhalb Ihrer {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente), können Sie viele oder alle dieser Ausnahmen vermeiden.

### Beispiel: Musik zum Download

Musik, die vom Benutzer heruntergeladen wird, kann zu einer größeren Dateigröße komprimiert werden als gestreamte Musik, da (im Gegensatz zum Streaming) die Downloadgeschwindigkeit nicht durch die Wiedergabegeschwindigkeit der Medien unterbrochen wird. Das bedeutet, dass Sie in Erwägung ziehen könnten, verlustbehaftete Kompression mit höheren Bitraten zu verwenden, was zu größeren Dateien führt, aber mit weniger Verlust der Klangtreue. Oder Sie können ein verlustfreies Format wählen. Die Wahl hängt weitgehend von den Anforderungen Ihrer Anwendung und den Präferenzen Ihrer Benutzer ab.

Für einen tatsächlichen Musik-Download-Dienst könnten Sie Lieder als 128 kbps MP3-Dateien, 256 kbps AAC-Dateien (in MP4-Containern) oder FLAC-Dateien anbieten, abhängig von einer vom Benutzer gewählten Präferenz. Wenn Sie nur ein Format wählen müssen, wählen Sie eines, das angesichts Ihrer Anforderungen und der Art der heruntergeladenen Audiocontents sinnvoll ist.

Im Allgemeinen ist MP3 natürlich das am häufigsten verwendete Format

---
title: Web Audio Codec Leitfaden
slug: Web/Media/Formats/Audio_codecs
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Selbst moderat hochwertige, hochfidele Stereo-Sounds können eine beträchtliche Menge an Speicherplatz beanspruchen. Für Webentwickler ist die benötigte Netzwerkbandbreite zum Übertragen von Audio, sei es zum Streaming oder Herunterladen für den Einsatz in Spielen, ein noch größeres Anliegen. Die Verarbeitung von Audiodaten zur Kodierung und Dekodierung wird von einem Audio-**[Codec](/de/docs/Glossary/codec)** (**CO**der/**DEC**oder) gehandhabt. In diesem Artikel betrachten wir die auf dem Web verwendeten Audiocodecs zur Komprimierung und Dekomprimierung von Audio, was ihre Fähigkeiten und Anwendungsfälle sind, und bieten Orientierungshilfe bei der Auswahl von Audiocodecs für Ihre Inhalte.

Darüber hinaus verwenden WebRTC-Implementierungen in der Regel eine Teilmenge dieser Codecs für die Kodierung und Dekodierung von Medien und können ebenfalls zusätzliche Codecs zur Unterstützung der plattformübergreifenden Video- und Audiokonferenzen sowie zur besseren Integration mit älteren Telekommunikationslösungen unterstützen. Details finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

Für Informationen über die grundlegenden Konzepte hinter der Funktionsweise digitaler Audioinhalte siehe den Artikel [Digital audio concepts](/de/docs/Web/Media/Formats/Audio_concepts).

## Häufig verwendete Codecs

Die folgende Liste zeigt die Codecs, die auf dem Web am häufigsten verwendet werden, und welche Container (Dateitypen) sie unterstützen. Wenn Sie lediglich wissen möchten, welche Codecs überhaupt verwendet werden können, ist dies für Sie relevant. Selbstverständlich können einzelne Browser wählen, ob sie alle diese Codecs unterstützen, und ihre Unterstützung dafür, welche Containertypen sie verwenden können, kann ebenfalls variieren. Außerdem können Browser zusätzliche Codecs unterstützen, die nicht in dieser Liste enthalten sind.

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
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#g.722_64_kbps_7_khz_audio_coding">G.722</a></th>
      <td>
        7 kHz Audiokodierung innerhalb von 64 kbps (für
        Telefonie/[VoIP](/de/docs/Glossary/VoIP))
      </td>
      <td>
        [RTP](/de/docs/Glossary/RTP) /
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
          Wenn MPEG-1 Audio Layer III Codec-Daten in einer MPEG-Datei gespeichert sind und keine Videospur in der Datei vorhanden ist, wird die Datei in der Regel als MP3-Datei bezeichnet, obwohl es sich immer noch um eine MPEG-Formatdatei handelt.
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

Es gibt zwei allgemeine Kategorien von Faktoren, die das kodierte Audio, das von einem Audio-Codec-Encoder ausgegeben wird, beeinflussen: Details über das Format und den Inhalt des Quell-Audios sowie der Codec und seine Konfiguration während des Kodierungsprozesses.

Für jeden Faktor, der das kodierte Audio beeinflusst, gibt es eine einfache Regel, die fast immer zutrifft: Da die Klangtreue des digitalen Audios durch die Granularität und Präzision der genommenen Proben bestimmt wird, die in einen Datenstrom umgewandelt werden, trifft der gesampelte Klang die Vorlage umso genauer, je mehr Daten für die Darstellung der digitalen Version des Audios verwendet werden.

### Die Auswirkungen des Quell-Audioformats auf das kodierte Audio

Da kodierte Audioinhalte von Natur aus weniger Bits verwenden, um jedes Sample darzustellen, könnte das Quell-Audioformat tatsächlich weniger Einfluss auf die Größe des kodierten Audios haben, als man vielleicht erwartet. Dennoch beeinflussen mehrere Faktoren die Qualität und Größe des kodierten Audios. Die folgende Tabelle listet einige Schlüsselfaktoren des Quell-Audio-Dateiformats und ihre Auswirkungen auf das kodierte Audio auf.

<table class="standard-table">
  <caption>
    Die Auswirkungen von Quell-Audioformat und -inhalten auf die Qualität und Größe des kodierten Audios
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
          >Kanalanzahl</a
        >
      </th>
      <td>
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der Richtung, nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die Größe des kodierten Audios erheblich erhöhen, abhängig von den Inhalten und den Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
        Unerwünschtes Hintergrundrauschen oder Zischen neigt dazu, die Audioqualität sowohl direkt (indem Details des Vordergrundaudios maskiert werden) als auch indirekt (indem die Audiowellenform komplizierter wird und daher schwerer bei gleichzeitiger Beibehaltung der Präzision zu reduzieren ist) zu verringern.
      </td>
      <td>
        Zischen, statische Geräusche oder Hintergrundgeräusche erhöhen die Audiokomplexität, was im Allgemeinen die mögliche Komprimierung verringert.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Formats/Audio_concepts#sampling_audio"
          >Samplingrate</a
        >
      </th>
      <td>
        Je mehr Samples pro Sekunde zur Verfügung stehen, desto höher ist die resultierende Klangtreue des kodierten Audios.
      </td>
      <td>
        Das Erhöhen der Samplingrate erhöht die Größe der kodierten Audiodatei.
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
        Je größer die Samples sind, desto mehr Details kann jedes Sample enthalten, was zu einer genaueren Darstellung jedes Samples führt.
      </td>
      <td>
        Hängt vom Codec ab; Codecs haben typischerweise ein internes Sampleformat, das möglicherweise nicht mit der ursprünglichen Samplegröße übereinstimmt. Mehr Details in der Quelle können die kodierte Datei größer machen; sie wird niemals kleiner.
      </td>
    </tr>
  </tbody>
</table>

Selbstverständlich können diese Effekte durch Entscheidungen geändert werden, die während der Kodierung des Audios getroffen werden. Wenn der Encoder beispielsweise so konfiguriert ist, dass die Sample-Rate reduziert wird, wird die Auswirkung der Sample-Rate auf die Ausgabedatei entsprechend verringert.

Weitere Informationen zu diesen und anderen Merkmalen von Audiodaten finden Sie unter [Audio data format and structure](/de/docs/Web/Media/Formats/Audio_concepts#audio_data_format_and_structure).

### Die Auswirkung der Codec-Konfiguration auf das kodierte Audio

Audiocodecs verwenden typischerweise clever entwickelte und hochkomplexe mathematische Algorithmen, um Quelldaten zu komprimieren, um im Speicher oder bei der Netzwerkbandbreite weniger Platz zu beanspruchen. Neben der Wahl des Encodertyps können Sie den Encoder möglicherweise mit Parametern anpassen, die spezifische Algorithmen auswählen, diese Algorithmen abstimmen und angeben, wie viele Durchläufe während der Kodierung angewendet werden sollen.

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
      <td>Wahrscheinlich nicht mehr als 40-50% Kompression</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Kompression</a
        ></th>
      <td>
        Immer ein bisschen Verlust an Klangtreue; je höher die Kompression, desto mehr der Verlust
      </td>
      <td>Kompression von bis zu 80-95% möglich</td>
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
          >Audiofrequenzbandbreite</a
        >
      </th>
      <td>
        Wenn es in dem/den entfernten Frequenzband(bändern) Audio gibt, kann es einen spürbaren Verlust an Klangtreue geben
      </td>
      <td>
        Entfernen von Frequenzbändern bedeutet weniger Daten zum Kodieren, also kleinere kodierte Dateien
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
          >Mittel-Seiten-Stereo-Kodierung</a
        >
        beeinflussen die Qualität nicht;
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#intensity_stereo_coding"
          >Intensitäts-Stereokodierung</a
        >
        führt jedoch zu einem Verlust an Detailgenauigkeit.
      </td>
      <td>
        Gemeinsame Stereokodierung kann die Größe des kodierten Audios etwas reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter und der Bereich möglicher Werte variieren von Codec zu Codec und sogar unter verschiedenen Kodierungsdiensten für denselben Codec. Lesen Sie daher die mit der von Ihnen verwendeten Kodierungssoftware bereitgestellte Dokumentation, um mehr zu erfahren.

### Funktionen, die die Größe des kodierten Audios beeinflussen

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige davon sind eine Frage der Form des Quell-Audios; andere sind mit Entscheidungen verbunden, die während der Kodierung des Audios getroffen werden.

#### Verlustfrei versus verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokomprimierung. **Verlustfreie** Kompressionsalgorithmen reduzieren die Größe des Audios, ohne die Qualität oder Klangtreue des Klangs zu beeinträchtigen. Beim Dekodieren von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis in jeder Hinsicht identisch mit dem Originalton bis hin zum einzelnen Bit.

**Verlustbehaftete** Codecs hingegen nutzen den Umstand, dass das menschliche Ohr kein perfekter Interpret von Audio ist und dass das menschliche Gehirn in der Lage ist, die wichtigen Informationen aus unvollkommenem oder rauschenden Audio herauszupicken. Sie entfernen Audiofrequenzen, die nicht häufig genutzt werden, tolerieren Verlust an Präzision im dekodierten Ausgang und verwenden andere Methoden, um Audiomaterial, Qualität und Klangtreue zu verlieren, um kleinere codierte Medien zu erzeugen. Beim Dekodieren ist der Ausgang, in unterschiedlichem Maße, immer noch verständlich. Der verwendete spezifische Codec und die gewählte Kompressionskonfiguration bestimmen, wie nahe der Ausgang dem ursprünglichen, unkomprimierten Audiosignal kommt, wenn es vom menschlichen Ohr gehört wird.

Aufgrund der Unterschiede in der Funktionsweise von verlustbehafteten Codecs im Vergleich zu verlustfreien Codecs, insbesondere der Tatsache, dass verlustfreie Codecs viel konservativer in ihrer Komprimierung sein müssen, resultieren verlustbehaftete Codecs fast immer in bedeutend kleineren komprimierten Audiodaten als verlustfreie Codecs.

Im Allgemeinen sind die häufigsten Gründe für die Wahl von verlustfreiem Audio, dass eine archivierungsqualität Speicher erforderlich ist oder dass die Audiodaten zum Mischen und erneutem Komprimieren verwendet werden sollen und Sie vermeiden möchten, dass die Artefakte im Audio durch erneute Kompression verstärkt werden. Für das Echtzeit-Streaming von Audio wird in der Regel ein verlustbehafteter Codec benötigt, um sicherzustellen, dass der Datenfluss mit der Audiowiedergabegeschwindigkeit mithalten kann, unabhängig von der Netzwerkleistung.

### Maximale Anzahl von Kanälen

Der an jeden Lautsprecher in einem Soundsystem gelieferte Ton wird durch einen Audiokanal in einem Stream bereitgestellt. Monotone ist ein einzelner Kanal. Stereo-Ton hat zwei. 5.1 Surround-Sound hat fünf Audiokanäle sowie einen **Low Frequency Enhancement** (**LFE**)-Kanal.

LFE-Kanäle sind speziell gestaltet, um niedrige Frequenzen im Audio zu speichern, und werden häufig verwendet, um Audiodaten für Subwoofer bereitzustellen. Wenn die Anzahl der Audiokanäle in der Form X.Y geschrieben wird, entspricht die Zahl nach dem Dezimalpunkt, Y, der Anzahl der LFE-Kanäle. Zum Beispiel unterstützt MP3 einen LFE-Kanal, während AAC bis zu 16 unterstützt.

Zusätzlich zur Bereitstellung von Audio für spezifische Lautsprecher eines Soundsystems können einige Codecs es ermöglichen, Audio-Kanäle für alternative Audioinhalte zu verwenden, wie Beispiel Gesang in verschiedenen Sprachen oder beschreibendes Audio für Sehbehinderte.

### Audiofrequenzbandbreite

Die **Audiofrequenzbandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, die unter Verwendung des Codecs dargestellt werden können. Einige Codecs funktionieren speziell, indem sie Audio eliminieren, das außerhalb eines gegebenen Frequenzbereichs liegt. Es gibt eine Korrelation zwischen der Samplerate und der maximalen Frequenz, die durch eine von einem Codec dargestellte Wellenform dargestellt werden kann. Auf theoretischer Ebene ist die maximale Frequenz, die ein Codec darstellen kann, die Samplerate geteilt durch zwei; diese Frequenz wird als [Nyquist-Frequenz](https://de.wikipedia.org/wiki/Nyquist-Frequenz) bezeichnet. In Wirklichkeit ist das Maximum etwas niedriger, aber es ist nah dran.

Die Audiofrequenzbandbreite kommt besonders zu tragen, wenn ein Codec speziell oder konfiguriert ist, um menschliche Sprache anstelle eines breiten Klangbereichs darzustellen. Menschliche Sprache liegt allgemein im Audiofrequenzbereich von 300 Hz bis 18 kHz. Die überwiegende Mehrheit menschlicher Vokalisierungen existiert jedoch im Bereich von 300 Hz bis 8 kHz, und Sie können genug von den menschlichen Vokalisierungen im Frequenzbereich 500 Hz bis 3 kHz ermitteln, um dennoch verständlich zu bleiben.

Daher beginnen sprachspezifische Codecs oft damit, Klänge fallen zu lassen, die außerhalb eines festgelegten Bereichs liegen. Dieser Bereich ist die Audiofrequenzbandbreite. G.722 zum Beispiel entfernt Klänge, die außerhalb der Audiofrequenzbandbreite von 50 Hz bis 7 kHz liegen. Dies reduziert bereits von vornherein die zu kodierende Datenmenge.

## Details zu den Codecs

Unten werfen wir einen kurzen Blick auf jeden dieser Codecs, wobei wir ihre grundlegenden Fähigkeiten und ihre primären Anwendungsfälle betrachten.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding** (**AAC**) Codec ist Teil des MPEG-4 (H.264)-Standards; genauer gesagt, als Teil von [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html) definiert. Er wurde entwickelt, um mehr Kompression mit höherer Klangtreue als MP3 zu bieten, und hat sich zu einer beliebten Wahl entwickelt und ist das Standardformat für Audio in vielen Medientypen, einschließlich Blu-Ray-Discs und HDTV sowie das Format, das für Songs verwendet wird, die bei Online-Verkäufern wie iTunes gekauft werden.

AAC verfügt über eine Reihe von Profilen, die Methoden zur Komprimierung von Audio für spezielle Anwendungsfälle definieren, die von qualitativ hochwertigem Surround-Sound bis hin zu Einzelzweck-Audio für Audio lediglich für Sprachzwecke reichen.

Als patentbehaftetes Format ist die AAC-Unterstützung etwas weniger vorhersehbar. Beispielsweise unterstützt Firefox AAC nur, wenn die Unterstützung durch das Betriebssystem oder eine externe Bibliothek bereitgestellt wird.

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
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>96 kbps bei 48 kHz Samplerate</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>48 (plus 16 Low Frequency Enhancement Kanäle)</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>
        0 Hz - 96 kHz (Standard Audiokanäle)<br />0 Hz - 120 Hz (LFE
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
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt. Stattdessen verlässt sich Firefox auf die native AAC-Unterstützung einer Plattform. Diese Fähigkeit wurde in jeder Plattform in verschiedene Firefox-Veröffentlichungen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und nur das Hauptprofil von AAC. Darüber hinaus ist AAC in Chromium-Builds nicht verfügbar.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>MP4, ADTS, 3GP</td>
    </tr>
    <tr>
      <th scope="row">
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Für Streaming oder Verbreitung von AAC-kodierten Inhalten: keine Lizenz erforderlich; Entwickler von Codecs müssen eine Patentlizenz über
        <a href="https://www.via-la.com/licensing-2/aac/">VIA Licensing</a>
        erwerben
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein verlustfreier Codec, der von Apple entwickelt wurde. Nachdem er zunächst ein geschlossenes Format war, wurde er von Apple unter einer Apache-Lizenz geöffnet.

Die plattform- und browserübergreifende Unterstützung für ALAC ist nicht sehr stark, was es zu einer weniger idealen Wahl für den allgemeinen Gebrauch macht. Wenn Ihr Ziel jedoch hauptsächlich Benutzer von macOS und iOS sind, könnte es sich lohnen, es in Betracht zu ziehen, da das Betriebssystem integrierte Unterstützung für ALAC hat. Andernfalls ist FLAC wahrscheinlich eine bessere Wahl, wenn Sie einen verlustfreien Codec verwenden müssen.

Denken Sie jedoch daran, dass verlustfreie Codecs deutlich mehr Bandbreite und Speicherkapazität erfordern und möglicherweise außerhalb sehr spezifischer Anwendungsfälle keine gute Wahl sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Basierend auf dem Sample-Format und der Sample-Rate sowie dem Kompressionsgrad
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
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>n/a</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei; bis zu 45-60%</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
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
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Offene Lizenz (Apache License 2.0);
        <a href="https://github.com/macosforge/alac"
          >Quellcode verfügbar auf GitHub</a
        >
      </td>
    </tr>
  </tbody>
</table>

### AMR (Adaptive Multi-Rate)

Der **[Adaptive Multi-Rate Audio Codec](https://voiceage.com/AMR-NB.AMR.html)** ist optimiert, um menschliche Sprache effizient zu kodieren. Er wurde 1999 als Teil des 3GPP-Audiostandards standardisiert, der sowohl für [GSM](https://de.wikipedia.org/wiki/GSM) als auch für [UMTS](https://de.wikipedia.org/wiki/UMTS) Mobiltelefonie verwendet wird, und verwendet einen Multirate-Schmalkanal-Algorithmus, um Audiofrequenzen mit einer Telefongüte von etwa 7,4 kbps zu kodieren. Zusätzlich zur Verwendung für die Echtzeit-Telefonie kann AMR-Audio für Voicemail und andere kurze Audioaufnahmen verwendet werden.

AMR-Audio, das in Dateien gespeichert ist, kann entweder mit `.amr` typisiert werden, kann jedoch auch in `.3gp` Dateien gekapselt werden.

Als sprachspezifischer Codec ist AMR für jegliche anderen Inhalte im Wesentlichen nutzlos, einschließlich von Audio, das nur singende Stimmen enthält. Zudem erfasst AMR, da es darauf ausgelegt ist, die Kapazitätsanforderungen zu minimieren, nur den Teil der vollen Audiofrequenzbandbreite der menschlichen Sprache, die absolut notwendig ist, um zu verstehen, was gesagt wird; die Qualität wird entsprechend reduziert. Wenn Sie die Möglichkeit benötigen, Audio mit minimalem Einfluss auf Netzwerk- und/oder Speicherkapazität aufzunehmen, kann AMR eine großartige Wahl sein. Wenn Sie jedoch eine hochfidele Wiedergabe der menschlichen Sprache oder sogar eine niedrige Musikqualität benötigen, müssen Sie ein anderes Format wählen.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>Halbrate (HR) und Volle Rate (FR):</strong> 1.8 kbps, 4.75 kbps,
        5.15 kbps, 5.9 kbps, 6.7 kbps, 7.4 kbps, 7.95 kbps
      </td>
    </tr>
    <tr>
      <td><strong>Volle Rate (FR) nur:</strong> 10.2 kbps und 12.2 kbps</td>
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
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>n/a</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
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
          Während der Chrome-Browser AMR nicht unterstützt, unterstützt ChromeOS AMR-NB (Schmalkanal) und AMR-WB (Breitband).
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>AMR, 3GPP</td>
    </tr>
    <tr>
      <th scope="row">
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Nicht-frei; Lizenzgebühren und jährliche Royalty-Gebühren fallen an. Siehe
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge-Lizenzierung</a
        >
        für Details
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audio-Codec, der von der [Xiph.org Foundation](https://xiph.org/) veröffentlicht wurde. Er bietet gute Kompressionsraten ohne Verlust der Klangtreue; das heißt, das dekomprimierte Audio ist mit dem Original identisch. Da der Kompressionsalgorithmus speziell für Audio entwickelt wurde, liefert er bessere Ergebnisse, als dies mit einem generellen Kompressionsalgorithmus erzielt werden könnte.

FLAC ist eine großartige Wahl für kleinere Audioeffektdateien, bei denen makellose Qualität und tonale Genauigkeit gewünscht sind sowie für die Archivierung von Musik.

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
      <td>Verlustfrei; bis zu 40-50% Größenreduktion</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>Volles Frequenzspektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4.3 ms bis 92 ms, wobei 46.4 ms typischer Durchschnitt sind</td>
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
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollkommen offen und ohne Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### G.711 (Impuls-Code-Modulation von Sprachfrequenzen)

Die **G.711** Spezifikation, veröffentlicht von der International Telecommunications Union (ITU), wurde 1972 herausgegeben, um die Standardkodierung für Telefonanwendungen zu definieren. Sie unterstützt sprachfähige Audiofrequenzen von 300 bis 3400 Hz. Sie wird umfangreich für Telefonanrufe und Voicemail genutzt und ist die Audio-Kodierung mit der höchsten Qualität, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein Hochfidelität-Codec, sondern optimiert für die Unterstützung einer breiten Palette von Sprachniveaus (vom Flüstern bis zum Schreien), während sie hohe Verständlichkeit und geringe Rechenkomplexität aufrechterhält. G.711 verwendet einen logarithmischen Kompandierungsalgorithmus, der in einer 8-Bit-Probe eine dynamische Reichweite von 14 Bits bietet. Sie verwendet eine Abtastrate von 8000 Proben/Sekunde, entsprechend einer Bitrate von 64000 bps.

Es gibt zwei Varianten von G.711, die die genaue mathematische Gleichung für den Algorithmus angeben: [µ-law](https://de.wikipedia.org/wiki/M-law) (üblich verwendet in Nordamerika und Japan) und [A-law](https://de.wikipedia.org/wiki/A-law) (üblich im Rest der Welt). Es gibt keine wesentlichen Qualitätsunterschiede zwischen den beiden Gesetzen, und es ist einfach, Audio von einem in das andere zu transcodieren. Nichtsdestotrotz ist es wichtig anzugeben, welches Gesetz in jeder Wiedergabeanwendung oder Dateiformat verwendet wird. A-law Audio spielt schlecht ab, wenn es versehentlich mit dem µ-law-Algorithmus dekomprimiert wird und umgekehrt.

Dieser Codec muss von allen [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen unterstützt werden, weil er einfach, leicht zu implementieren, weit verbreitet und breit kompatibel auf allen modernen Computerplattformen ist.

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
      <td>kodiertes Audio ist 8 Bits pro Sample</td>
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
      <td>Logarithmische Kompandierung (µ-law oder A-law)</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>300 Hz – 3,400 Hz</td>
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
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle anwendbaren Patente sind abgelaufen, sodass G.711 frei verwendet werden kann, ohne Einschränkungen
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audiokodierung)

Veröffentlicht von der International Telecommunications Union (ITU), ist der **G.722** Codec speziell für Sprachkompression entwickelt worden. Seine Audiokodierungsbandbreite ist auf den Bereich von 50 Hz bis 7,000 Hz begrenzt, der den größten Teil des Frequenzbereichs der typischen menschlichen Vokalisierung abdeckt. Dies macht ihn unpassend für die Handhabung von jeglichem Audio, das möglicherweise außerhalb des menschlichen Sprachbereichs liegt, wie Musik.

G.722 Audio wird unter Verwendung von Adaptive Differential Pulse Code Modulation (ADPCM) kodiert, bei dem jedes Sample nicht durch seinen absoluten Wert repräsentiert wird, sondern als Wert, der anzeigt, wie stark sich das neue Sample vom vorherigen Sample unterscheidet.

G.722 wird hauptsächlich für WebRTC-Verbindungen verwendet, da es einer der Audiocodecs ist, die von der WebRTC-Spezifikation gefordert werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; allerdings wird in der Praxis immer 64 kbps verwendet<br />G.722 Anhang B Super Breitband: 64 kbps, 80 kbps und 96 kbps<br />G.722 Anhang D Stereo Breitband: 64 kbps und 80 kbps<br />G.722 Anhang D Stereo Super Breitband: 80 kbps, 96 kbps, 112 kbps und 128 kbps
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
        16 kHz (ADPCM erlaubt theoretisch 8 kHz, 11.025 kHz, 22.05 kHz, 44.1 kHz, aber G.722 verwendet 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>128 kbps bei einer Samplingrate von 44.1 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
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
        <p>Nur für WebRTC.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container-Unterstützung</th>
      <td>3GP, AMR-WB</td>
    </tr>
    <tr>
      <th scope="row">
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle relevanten Patente sind abgelaufen; G.722 ist ohne Einschränkungen frei nutzbar
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den Audioformaten, die in den MPEG/MPEG-2-Standards spezifiziert sind, ist **MPEG-1 Audio Layer III**—auch bekannt als **[MP3](https://de.wikipedia.org/wiki/MP3)**—bei weitem am meist verwendeten und bekanntesten. Der MP3-Codec ist in [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert und wurde 1991 eingeführt (und 1992 abgeschlossen).

Wenn Audiodaten im MP3-Format in einem MPEG-Container gespeichert werden, wird die resultierende Datei ebenfalls als einfach eine „MP3-Datei“ oder „MP3“ bezeichnet. Dateien mit der allgegenwärtigen `.mp3`-Erweiterung werden in einem vielleicht am weitesten verbreiteten Audio-Dateiformat in der Welt gespeichert, was zu einem großen Teil verantwortlich für die digitale Audiorevolution Ende der 1990er und Anfang der 2000er Jahre war.

Das MPEG-1 MP3-Audio unterstützt höhere Bitraten sowie höhere Samplerraten als MP3-Audio in MPEG-2-Dateien. Das MPEG-1-Format MP3 ist im Allgemeinen am besten für Musik oder andere komplexe Audioinhalte geeignet, während das MPEG-2-Modus MP3-Audio für Sprache und andere einfachere Klänge akzeptabel ist.

Die Patente hinter MP3 sind abgelaufen, was viele oder die meisten Lizenzprobleme beim Einsatz von MP3-Dateien in Ihren Projekten beseitigt. Das macht sie zu einer guten Wahl für viele Projekte.

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
        <strong>MPEG-2 Modus:</strong> 16000 Hz, 22050 Hz, 24000 Hz (Die Hälfte der Frequenz der im MPEG-1 unterstützten Modi)
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
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>Varriert, abhängig von Bitrate und psychoakustischer Analyse</td>
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
        [RTP](/de/docs/Glossary/RTP) /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Patentfrei in der EU seit 2012; patentfrei in den Vereinigten Staaten seit dem
        16. April 2017; jetzt frei nutzbar
      </td>
    </tr>
  </tbody>
</table>

Aus patentrechtlichen Gründen hat Firefox MP3 vor Version 71 nicht direkt unterstützt; stattdessen wurden plattformnativ Bibliotheken genutzt, um MP3 zu unterstützen. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:

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

Das [Opus](<https://de.wikipedia.org/wiki/Opus_(Audioformat)>) Audioformat wurde von der Xiph.org Foundation als vollständig offenes Audioformat entwickelt; es wurde von der [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein guter allgemeiner Audiocodec, der sowohl niederkomplexe Audiodaten wie Sprache als auch Musik und andere hochkomplexe Klänge effizient verarbeiten kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei verwenden, da der Encoder die Bitrate, die Audiofrequenzbandbreite, den Algorithmus und andere Details der Kompressionseinstellungen für jeden Frame von Audio auswählen kann.

Opus ist ein guter universeller Audiocodec für Ihre Webanwendungen und kann für alle audiobezogenen Aufgaben verwendet werden, die Sie intern bearbeiten.

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
          Die angegebenen Sampleraten sind <em>effektive Sampleraten</em>. Opus verwendet einen Algorithmus, der auf Audiofrequenzbreiten anstelle von Sampleraten basiert. Siehe {{RFC(6716, "", 2)}} für Details. Außerdem gibt es einen
          <em>optional</em> Teil der Opus-Spezifikation (Opus Custom), der die Verwendung nicht standardmäßiger Sampleraten erlaubt, die Verwendung dieses Merkmals jedoch nicht empfohlen wird.
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
              <th scope="col">Audiofrequenzbandbreite</th>
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
          Obwohl die
          <a href="https://de.wikipedia.org/wiki/Nyquist%E2%80%93Shannon-Abtasttheorem">Nyquist–Shannon-Abtasttheorem</a>
          zeigt, dass die Audiofrequenzbandbreite bei der Hälfte der Samplerate liegen kann, erlaubt Opus keine Kodierung außerhalb eines maximalen 20 kHz Audiofrequenzbands, da das menschliche Ohr ohnehin nichts über dem 20 kHz-Punkt wahrnehmen kann. Das spart etwas Platz im kodierten Audio.
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
          Diese Informationen beziehen sich auf die Unterstützung von Opus in HTML
          {{HTMLElement("audio")}} und {{HTMLElement("video")}}
          Elementen und nicht auf WebRTC.
        </p>
        <p>
          Safari unterstützt Opus im {{HTMLElement("audio")}}-Element
          nur wenn es in einer CAF-Datei verpackt ist und nur auf macOS High Sierra
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
        [RTP](/de/docs/Glossary/RTP) /
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

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format von der [Xiph.org Foundation](https://xiph.org/), das eine breite Palette von Kanal-Kombinationen unterstützt, einschließlich monaural, stereo, polyphonisch, quadraphonisch, 5.1 Surround, ambisonisch oder bis zu 255 diskreten Audiokanälen. Abhängig von der während der Kodierung gewählten Qualitätsstufe kann sich die resultierende Bitrate von etwa 45 kbps bis 500 kbps variieren. Vorbis verwendet von Natur aus variable Bitrate-Kodierung; die Bitrate kann von einer Probe zur nächsten gewählt werden, wenn sie während des Kompressionsprozesses benötigt wird.

Im Allgemeinen ist Vorbis hinsichtlich Größe und Bitrate effizienter als MP3 bei ähnlichen Qualitätsniveaus. Diese und seine freie und offene Lizenz, machen es zu einer guten Wahl für viele Arten von Audiodaten, solange seine hohe Latenz kein Problem darstellt.

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
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>
        192 kbps bei 48 kHz; dies wird in der Regel erreicht, indem die Qualitätsstufe auf 6 bis 8 eingestellt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
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
        [RTP](/de/docs/Glossary/RTP) /
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

Typischerweise wird, unabhängig davon, welchen Codec Sie verwenden, die Arbeit erledigt, auch wenn er nicht die ideale Wahl ist, solange Sie einen Codec wählen, der nicht speziell für eine völlig andere Art von Quell-Audio entwickelt wurde. Wenn Sie beispielsweise einen Sprach-Codec auswählen und versuchen, ihn für Musik zu verwenden, werden Sie keine brauchbaren Ergebnisse erzielen.

Einige Codecs können jedoch die Kompatibilität einschränken, während andere möglicherweise optimaler für Ihre Anforderungen sind. Hier bieten wir Ihnen Orientierungshilfe, um Ihnen bei der Auswahl eines geeigneten Codecs für Ihren Anwendungsfall zu helfen.

Bei der Auswahl eines Codecs für Ihr Audio sollten Sie zunächst die folgenden Fragen berücksichtigen:

- Wird das kodierte Audio remixt oder erneut komprimiert? Wenn ja, vermeiden Sie verlustbehaftete Kompressionen, die durch erneute Komprimierung verstärkt würden; oder verwenden Sie zumindest so wenig Kompression wie möglich.
- Wenn das Audio in eine spezielle Dateityp gehen muss, behalten Sie dies im Hinterkopf, da Mediencontainer in der Regel eine spezifische Teilmenge der verfügbaren Codecs unterstützen.
- Welche Art von Audioinhalten wird der Codec handhaben? Bestimmte Codecs sind speziell für Sprachinhalte konzipiert (sie nutzen den reduzierten Frequenzbereich, der für menschliche Sprache erforderlich ist). Andere können eine algorithmische Tendenz haben, schlechter zu funktionieren, wenn sie bestimmte Musikgenres kodieren.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften hat jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen könnten?
- In welchem Umfang, falls überhaupt, spielt die Latenz für Ihre Bedürfnisse eine Rolle? Wenn Sie einen sehr präzise getimten Klang benötigen, ist eine niedrigere Latenz besser.
- Wie viel Kompression müssen Sie erreichen?

Lassen Sie uns einige häufige Szenarien betrachten, um ein Gefühl für den Entscheidungsprozess zu bekommen.

### Beispiel: Musik zum Streaming

Beim Streaming von Musik möchten Sie einen Codec auswählen, der die Bandbreitennutzung so weit wie möglich minimiert, während so wenige Artefakte wie möglich durch die Kompression in das Audio eingebracht werden. Dies ist notwendig, da die Geschwindigkeit, mit der die Musik heruntergeladen wird, nicht höher sein sollte als die Menge an verfügbarer Bandbreite im Netzwerk, und idealerweise sollte noch Platz für Schwankungen der Netzwerkgeschwindigkeit und die Nutzung des Netzwerks durch andere Anwendungen vorhanden sein.

Sofern keine spezifische Notwendigkeit für verlustfreie Kompression besteht oder die Netzwerkbandbreite garantiert hoch genug ist, um sie zu unterstützen, ist ein verlustbehaftetes Kompressionsschema eine gute Wahl. Welches Sie wählen, hängt von der Browserkompatibilität und der Verfügbarkeit von etwaigen Spezialfunktionen ab, die der Codec unterstützen muss.

In der Regel ist die Latenz beim Streaming von Musik nicht besonders wichtig. Mögliche Ausnahmen sind wiederholte Musik, bei der Musik ununterbrochen immer wieder abgespielt werden muss, oder wenn Sie Songs direkt hintereinander ohne Lücke dazwischen abspielen müssen. Dies kann besonders wichtig für klassische Musik, theatralische Soundtracks und für Hintergrundmusik während des Spielens sein.

Für allgemeine Musikwiedergabe sind die drei wahrscheinlichsten Kandidaten MP3, AAC und Vorbis.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt, was diese zu einer großartigen Wahl macht.
- Vorbis wird normalerweise in Ogg-Dateien verwendet, aber Ogg-Container werden nicht universell unterstützt. Sogar Microsoft Edge, das Vorbis unterstützt, unterstützt Ogg-Container nicht.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die eine Audio Layer III Spur enthalten.

Wenn Sie die Latenz bei der Musikwiedergabe minimieren müssen, sollten Sie Opus in Betracht ziehen, der von den allgemeinen Codecs die geringste Bandbreite an Latenzen aufweist (5 ms bis 66.5 ms, verglichen mit mindestens 100 ms für die anderen).

> [!NOTE]
> Die hier beschriebenen Kompatibilitätsinformationen sind im Allgemeinen korrekt zum Zeitpunkt der Erstellung dieses Artikels; es können jedoch Einschränkungen und Ausnahmen bestehen. Vergewissern Sie sich, dass Sie sich an den Kompatibilitätstabellen orientieren, bevor Sie sich für ein bestimmtes Medienformat entscheiden.

Basierend darauf ist AAC wahrscheinlich Ihre beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Wenn Sie natürlich mehrere Formate bereitstellen können (z. B. unter Verwendung des {{HTMLElement("source")}}-Elements innerhalb Ihrer {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente), können Sie viele oder alle dieser Ausnahmen vermeiden.

### Beispiel: Musik zum Herunterladen

Musik, die vom Benutzer heruntergeladen wird, kann zu einer insgesamt größeren Dateigröße komprimiert werden als gestreamte Musik, da es (im Gegensatz zum Streaming) keine Rolle spielt, ob die Downloadgeschwindigkeit langsamer ist als die Wiedergabegeschwindigkeit der Medien. Das bedeutet, dass Sie verlusthafte Kompression bei höheren Bitraten in Betracht ziehen können, was zu größeren Dateien, aber mit weniger Verlust an Klangtreue führt. Oder Sie können sich für ein verlustfreies Format entscheiden. Die Wahl hängt weitgehend von den Anforderungen Ihrer Anwendung und den Vorlieben Ihrer Benutzer ab.

Für einen tatsächlichen Musik-Download-Service könnten Sie Songs zum Download als 128 kbps MP3-Dateien, 256 kbps AAC-Dateien (in MP4-Containern) oder FLAC-Dateien anbieten, abhängig von einer vom Benutzer gewählten Präferenz. Wenn Sie nur ein Format auswählen müssen, wählen Sie eines, das Sinn macht, basierend auf Ihren Anforderungen und der Art der heruntergeladenen

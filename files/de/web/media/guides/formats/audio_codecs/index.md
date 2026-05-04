---
title: Web-Audio-Codec-Leitfaden
slug: Web/Media/Guides/Formats/Audio_codecs
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Selbst bescheidene Qualität, hochauflösender Stereo-Sound kann eine erhebliche Menge an Speicherplatz benötigen. Für Webentwickler ist eine noch größere Sorge die Netzwerkbandbreite, die benötigt wird, um Audio zu übertragen, sei es für Streaming oder zum Herunterladen zur Nutzung während des Spielens. Die Verarbeitung von Audiodaten zum Kodieren und Dekodieren wird von einem Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DEC**oder) übernommen. In diesem Artikel betrachten wir Audio-Codecs, die im Web verwendet werden, um Audio zu komprimieren und zu dekomprimieren, welche Fähigkeiten und Anwendungsfälle sie haben, und geben Anleitungen zur Auswahl von Audio-Codecs für Ihre Inhalte.

Darüber hinaus verwenden WebRTC-Implementierungen im Allgemeinen eine Teilmenge dieser Codecs für das Kodieren und Dekodieren von Medien und können auch zusätzliche Codecs unterstützen, um optimale plattformübergreifende Unterstützung für Video- und Audiokonferenzen zu gewährleisten und eine bessere Integration mit älteren Telekommunikationslösungen zu ermöglichen. Siehe [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details.

Für Informationen zu den grundlegenden Konzepten, wie digitale Audio funktioniert, siehe den Artikel [Konzepte des digitalen Audios](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

## Gängige Codecs

Die folgende Liste beschreibt die im Web am häufigsten verwendeten Codecs und welche Container (Dateitypen) sie unterstützen. Wenn Sie lediglich wissen müssen, welche Codecs überhaupt verwendet werden können, dann ist dies für Sie. Natürlich können einzelne Browser entscheiden, nicht alle dieser Codecs zu unterstützen, und ihre Unterstützung dafür, welche Containertypen sie verwenden können, kann ebenfalls variieren. Außerdem können Browser wählen, zusätzliche Codecs zu unterstützen, die nicht in dieser Liste aufgeführt sind.

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
      <td>Puls-Code Modulation (PCM) von Sprachfrequenzen</td>
      <td>
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#g.722_64_kbps_7_khz_audio_coding">G.722</a></th>
      <td>
        7 kHz Audio-Codierung innerhalb von 64 kbps (für Telefonie/{{Glossary("VoIP", "VoIP")}})
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
          Wenn MPEG-1 Audio Layer III Codec-Daten in einer MPEG-Datei gespeichert sind und es keinen Videospur auf der Datei gibt, wird die Datei typischerweise als MP3-Datei bezeichnet, auch wenn es sich immer noch um eine MPEG-Formatdatei handelt.
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

Es gibt zwei allgemeine Kategorien von Faktoren, die das durch den Encoder eines Audio-Codecs ausgegebene kodierte Audio beeinflussen: Details über das Format und den Inhalt des Quell-Audios und der Codec sowie seine Konfiguration während des Kodierungsprozesses.

Für jeden Faktor, der das kodierte Audio beeinflusst, gibt es eine Regel, die fast immer zutrifft: da die Genauigkeit digitalen Audios durch die Granularität und Präzision der bei der Umwandlung in einen Datenstrom genommenen Samples bestimmt wird, gilt: je mehr Daten zur Darstellung der digitalen Version des Audios verwendet werden, desto genauer entspricht der abgetastete Klang dem Ausgangsmaterial.

### Der Effekt des Quell-Audioformats auf die Ausgabe des kodierten Audios

Da kodiertes Audio von Natur aus weniger Bits zur Darstellung jedes Samples verwendet, kann das Quell-Audioformat tatsächlich weniger Einfluss auf die Größe des kodierten Audios haben, als man erwarten könnte. Dennoch beeinflussen eine Reihe von Faktoren die Qualität und Größe des kodierten Audios. Die folgende Tabelle listet eine Reihe von Schlüsselfaktoren des Quell-Audio-Dateiformats und deren Auswirkungen auf das kodierte Audio auf.

<table class="standard-table">
  <caption>
    Der Effekt des Quell-Audioformats und seine Inhalte auf die Qualität und Größe des kodierten Audios
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
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der Richtungsabhängigkeit, nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die Größe des kodierten Audios erheblich erhöhen, abhängig vom Inhalt und den Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
        Unerwünschtes Hintergrundrauschen oder Zischen tendiert dazu, die Audioqualität sowohl direkt zu verringern (indem es Details des Vordergrund-Audios maskiert) als auch indirekt (indem es die Audio-Wellenform komplexer macht und es somit schwieriger wird, die Größe zu reduzieren, während die Präzision erhalten bleibt).
      </td>
      <td>
        Zischen, statisches Rauschen oder Hintergrundrauschen erhöhen die Audio-Komplexität, was generell die mögliche Komprimierungsmenge verringert.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#sampling_audio"
          >Abtastrate</a
        >
      </th>
      <td>
        Je mehr Samples pro Sekunde verfügbar sind, desto höher ist wahrscheinlich die resultierende kodierte Audio-Treue.
      </td>
      <td>
        Eine Erhöhung der Abtastrate erhöht die Größe der kodierten Audiodatei.
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
        Hängt vom Codec ab; Codecs haben typischerweise ein internes Sample-Format, das möglicherweise mit der ursprünglichen Sample-Größe übereinstimmt oder nicht. Mehr Detail des Ausgangsmaterials kann die kodierte Datei größer machen; es wird sie nie kleiner machen.
      </td>
    </tr>
  </tbody>
</table>

Natürlich können diese Effekte durch Entscheidungen beim Kodieren des Audios verändert werden. Beispielsweise, wenn der Encoder so konfiguriert ist, dass die Abtastrate verringert wird, wird der Effekt der Abtastrate auf die Ausgabedatei entsprechend reduziert.

Für mehr Informationen zu diesen und anderen Eigenschaften von Audiodaten, siehe [Audio-Datenformat und -struktur](/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure).

### Der Effekt der Codec-Konfiguration auf die Ausgabe des kodierten Audios

Audio-Codecs verwenden typischerweise ausgeklügelte und hochkomplexe mathematische Algorithmen, um Quell-Audiodaten zu komprimieren, sodass sie deutlich weniger Speicherplatz oder Netzwerkbandbreite beanspruchen. Zusätzlich zur Wahl des zu verwendenden Encoder-Typs haben Sie eventuell die Möglichkeit, den Encoder anzupassen, indem Parameter ausgewählt werden, die spezifische Algorithmen auswählen, diese Algorithmen abstimmen und angeben, wie viele Durchgänge beim Kodieren anzuwenden sind.

<table class="standard-table">
  <caption>
    Auswirkungen der Audio-Encoder-Konfiguration auf Qualität und Größe
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
          >Verlustfreie Kompression</a
        >
      </th>
      <td>Kein Verlust an Wiedergabetreue</td>
      <td>Unwahrscheinlich, mehr als 40-50% Kompression zu erreichen</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Kompression</a
        >
      </th>
      <td>
        Immer ein gewisser Verlust an Wiedergabetreue; je höher die Kompression, desto größer der Verlust
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
        Je höher die Bitrate, desto größer ist wahrscheinlich die kodierte Datei
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_frequency_bandwidth"
          >Audiofrequenz-Bandbreite</a
        >
      </td>
      <td>
        Wenn sich in dem entferntem Frequenzband noch Audio befindet, kann es zu einem wahrnehmbaren Verlust an Wiedergabetreue kommen
      </td>
      <td>
        Entfernen von Frequenzbändern bedeutet weniger Daten zum Kodieren, also kleinere kodierte Dateien
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#joint_stereo"
          >Stereo-Kodierung</a
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
        führt jedoch zu einem Detailverlust.
      </td>
      <td>
        Joint Stereo kann die Größe des kodierten Audios in gewissem Maße reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter—und der Bereich der möglichen Werte—unterscheiden sich von Codec zu Codec und sogar zwischen verschiedenen Kodierungswerkzeugen für denselben Codec, daher lesen Sie die Dokumentation, die mit der verwendeten Kodierungssoftware geliefert wird, um mehr zu erfahren.

### Eigenschaften, die die Größe des kodierten Audios beeinflussen

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige davon beziehen sich auf die Form des Quell-Audios; andere hängen mit Entscheidungen zusammen, die beim Kodieren des Audios getroffen werden.

#### Verlustfreie versus verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokompression. **Verlustfreie** Kompressionsalgorithmen reduzieren die Größe des Audios, ohne die Qualität oder Wiedergabetreue des Klangs zu beeinträchtigen. Beim Dekodieren von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis in jeder Hinsicht identisch mit dem Originalklang, bis ins Bitgenaue.

**Verlustbehaftete** Codecs hingegen nutzen die Tatsache aus, dass das menschliche Ohr kein perfekter Audio-Interpreter ist und das menschliche Gehirn in der Lage ist, die wichtigen Informationen aus unvollkommener oder verrauschter Audio zu extrahieren. Sie entfernen Audiofrequenzen, die nicht oft genutzt werden, tolerieren einen Verlust an Präzision im dekodierten Ausgangsmaterial und verwenden andere Methoden, um Audioinhalt, Qualität und Wiedergabetreue zu vermindern, um kleinere kodierte Medien zu erstellen. Beim Dekodieren ist der Ausgang, in unterschiedlichem Maße, immer noch verständlich. Der spezifische Codec, der verwendet wird—und die gewählte Kompressionskonfiguration—bestimmen, wie nah der Ausgang dem originalen, unkomprimierten Audiosignal bei der Wiedergabe von einem Menschen erscheint.

Aufgrund der Unterschiede in der Arbeitsweise von verlustbehafteten gegenüber verlustfreien Codecs, insbesondere der Tatsache, dass verlustfreie Codecs wesentlich konservativer bei der Kompression vorgehen müssen, resultieren verlustbehaftete Codecs nahezu immer in erheblich kleineren komprimierten Audiodateien als verlustfreie Codecs.

Allgemein gesprochen, sind die häufigsten Gründe, verlustfreie Audio zu wählen, die Anforderung an Archivqualitäts-Speicherung oder weil die Audiodateien neu gemixt und erneut komprimiert werden sollen und Sie eine Verstärkung von Artefakten im Audio durch erneute Kompression vermeiden möchten. Für Echtzeit-Audiostreaming ist normalerweise ein verlustbehafteter Codec erforderlich, um sicherzustellen, dass der Datenfluss mit der Audiowiedergabegeschwindigkeit mithalten kann, unabhängig von der Netzwerkleistung.

### Maximale Anzahl an Kanälen

Das zu jedem Lautsprecher in einem Soundsystem gelieferte Audio wird durch einen Audiokanal in einem Stream bereitgestellt. Monophoner Klang ist ein einzelner Kanal. Stereo-Klang besteht aus zwei Kanälen. 5.1 Surround-Sound hat fünf Audio-Kanäle, plus ein **Low Frequency Enhancement (LFE)**-Kanal.

LFE-Kanäle sind speziell dafür gemacht, Audiodaten mit niedrigen Frequenzen zu speichern und werden beispielsweise häufig verwendet, um Audiodaten für Subwoofer bereitzustellen. Wenn die Anzahl an Audiokanälen in der Form X.Y geschrieben wird (wie 2.1 oder 5.1), ist die Zahl nach dem Dezimalpunkt, Y, die Anzahl der LFE-Kanäle. Zum Beispiel unterstützt MP3 einen LFE-Kanal, während AAC bis zu 16 unterstützt.

Zusätzlich zur Bereitstellung von Audio für spezifische Lautsprecher in einem Soundsystem, können einige Codecs Audio-Kanäle zur Verfügung stellen, um alternative Audios anzubieten, wie z.B. Gesang in verschiedenen Sprachen oder beschreibende Audio für sehbehinderte Menschen.

### Audiofrequenz-Bandbreite

Die **Audiofrequenz-Bandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, die mit dem Codec dargestellt werden können. Einige Codecs arbeiten speziell, indem sie Audio eliminieren, das außerhalb eines bestimmten Frequenzbereichs liegt. Es besteht eine Korrelation zwischen der Abtastrate und der maximalen Schallfrequenz, die durch eine von einem Codec dargestellte Wellenform repräsentiert werden kann. Theoretisch ist die maximale Frequenz, die ein Codec darstellen kann, die Abtastrate, dividiert durch zwei; diese Frequenz nennt man die [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency). In der Realität ist das Maximum geringfügig niedriger, aber es ist nah dran.

Die Audiofrequenz-Bandbreite kommt besonders deutlich zum Tragen, wenn ein Codec so entwickelt oder konfiguriert ist, dass er Sprache anstatt eines breiten Soundspektrums darstellt. Die menschliche Sprache fällt im Allgemeinen in den Bereich 300 Hz bis 18 kHz. Die Mehrheit menschlicher Stimmengeräusche existiert jedoch im Bereich von 300 Hz bis 8 kHz, und Sie können genügend menschliche Stimmengeräusche im Frequenzbereich von 500 Hz bis 3 kHz erfassen, damit sie noch verständlich sind.

Aus diesem Grund beginnen sprachspezifische Codecs oft damit, Geräusche zu entfernen, die außerhalb eines festgelegten Bereichs liegen. Dieser Bereich ist die Audiofrequenz-Bandbreite. G.722 entfernt zum Beispiel Klänge außerhalb der Audiofrequenz-Bandbreite von 50 Hz bis 7 kHz. Dies reduziert die Menge an Daten, die von Anfang an kodiert werden müssen.

## Details zu Codecs

Im Folgenden werfen wir einen kurzen Blick auf jeden dieser Codecs, betrachten ihre grundlegenden Fähigkeiten und ihre primären Anwendungsfälle.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding** (**AAC**) Codec ist Teil des MPEG-4 (H.264) Standards; genauer gesagt als Teil von [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html) definiert. AAC wurde entwickelt, um mehr Kompression bei höherer Audioqualität als MP3 zu bieten und hat sich zu einer beliebten Wahl entwickelt. Es ist das Standardformat für Audio in vielen Arten von Medien, einschließlich Blu-Ray-Discs und HDTV, und wird auch für Lieder verwendet, die von Online-Händlern wie iTunes gekauft werden.

AAC verfügt über eine Reihe von Profilen, die Methoden zur Kompression von Audio für spezifische Anwendungsfälle definieren, von hochwertigem Surround-Sound bis hin zu niederwertigem Audio für Sprachgebrauch.

Als patentbelastetes Format ist die AAC-Unterstützung etwas weniger vorhersehbar. Beispielsweise unterstützt Firefox AAC nur, wenn die Unterstützung durch das Betriebssystem oder eine externe Bibliothek bereitgestellt wird.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig, bis zu 512 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>32-Bit-Integer</td>
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
      <th scope="row">Maximale Audiokanäle</th>
      <td>48 (plus 16 Low Frequency Enhancement Kanäle)</td>
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
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt. Stattdessen verlässt sich Firefox auf die native Unterstützung der Plattform für AAC. Diese Fähigkeit wurde auf jeder Plattform in unterschiedlichen Firefox-Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und unterstützt nur das Hauptprofil von AAC. Außerdem ist AAC in Chromium-Builds nicht verfügbar.
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
        Für Streaming oder Verteilung von AAC-kodierten Inhalten: Keine Lizenz erforderlich; Entwickler von Codecs müssen eine Patentlizenz über
        <a href="https://www.via-la.com/licensing-programs/aac/">VIA Licensing</a>
        erwerben.
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein verlustfreier Codec, der von Apple entwickelt wurde. Nachdem es zunächst ein geschlossenes Format war, öffnete Apple es unter einer Apache-Lizenz.

Die plattformübergreifende und Browser-Unterstützung für ALAC ist nicht sehr stark ausgeprägt, was ihn zu einer weniger idealen Wahl für den allgemeinen Gebrauch macht. Wenn Ihr Ziel jedoch hauptsächlich macOS- und iOS-Nutzer sind, könnte er in Betracht gezogen werden, da die Betriebssysteme integrierte Unterstützung für ALAC haben. Ansonsten ist FLAC wahrscheinlich die bessere Wahl, wenn Sie unbedingt einen verlustfreien Codec verwenden müssen.

Denken Sie jedoch daran, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherkapazität erfordern und möglicherweise keine gute Wahl außerhalb sehr spezifischer Anwendungsfälle sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Basierend auf dem Sample-Format und der Abtastrate sowie dem Kompressionsgrad
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit, 20-Bit, 24-Bit und 32-Bit-Integer</td>
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

Der **[Adaptive Multi-Rate Audio Codec](https://voiceage.com/AMR-NB.AMR.html)** ist darauf optimiert, menschliche Sprache effizient zu kodieren. Er wurde 1999 als Teil des 3GPP-Audiostandards für [GSM](https://en.wikipedia.org/wiki/GSM) und [UMTS](https://en.wikipedia.org/wiki/UMTS) Mobiltelefonie standardisiert und verwendet einen schmalbandigen Mehrtarmodus, um Audiofrequenzen in einer Telefontonqualität bei etwa 7,4 kbps zu kodieren. Neben der Echtzeittelefonie kann AMR-Audio auch für Voicemail und andere kurze Audioaufnahmen genutzt werden.

AMR-Audio, das in Dateien gespeichert ist, kann die Dateiendung `.amr` besitzen, kann aber auch in `.3gp`-Dateien verkapselt sein.

Als sprachspezifischer Codec ist AMR im Grunde für jeden anderen Inhalt nutzlos, einschließlich Audio, das nur Gesangsstimmen enthält. Darüber hinaus erfasst AMR, da es darauf ausgelegt ist, die Kapazitätsanforderungen zu minimieren, nur den Teil der vollständigen Audiofrequenzbandbreite der menschlichen Sprache, der absolut notwendig ist, um zu verstehen, was gesagt wird. So ist die Qualität entsprechend reduziert. Wenn Sie Audio aufzeichnen müssen, das minimalen Einfluss auf die Netzwerk- und/oder Speicherkapazität hat, kann AMR eine gute Wahl sein. Wenn Sie jedoch eine hochaufgelöste Wiedergabe menschlicher Sprache oder sogar eine qualitativ minderwertige Musikwiedergabe benötigen, müssen Sie ein anderes Format wählen.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>Halbe Rate (HR) und volle Rate (FR):</strong> 1.8 kbps, 4.75
        kbps, 5.15 kbps, 5.9 kbps, 6.7 kbps, 7.4 kbps, 7.95 kbps
      </td>
    </tr>
    <tr>
      <td><strong>Nur volle Rate (FR):</strong> 10.2 kbps und 12.2 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>13-Bit-Integer</td>
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
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Nicht frei; Lizenzgebühren und jährliche Abgaben anwendung. Siehe
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge Lizenzierung</a
        >
        für Details.
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audiocodec, der von der [Xiph.org Foundation](https://xiph.org/) veröffentlicht wurde. Es bietet gute Kompressionsraten ohne Verlust der Audioqualität; das heißt, das dekomprimierte Audio ist identisch mit dem Original. Da der Kompressionsalgorithmus speziell für Audio entwickelt wurde, liefert er bessere Ergebnisse als ein allgemeiner Kompressionsalgorithmus.

FLAC ist eine gute Wahl für kleinere Audiodateien, bei denen eine makellose Qualität und tonale Genauigkeit gewünscht sind, sowie zur Archivierung von Musik.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>4-Bit bis 24-Bit-Integer</td>
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
      <th scope="row">Kompression</th>
      <td>Verlustfrei; bis zu 40-50% Größenreduktion</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>Volles Spektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4.3 ms bis 92 ms, wobei 46.4 ms der typische Durchschnitt ist</td>
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
      <td>Vollständig offen und ohne Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### G.711 (Pulscodemodulation von Sprachfrequenzen)

Die **G.711** Spezifikation, veröffentlicht von der International Telecommunications Union (ITU), wurde 1972 ausgegeben, um standardmäßige Audio-Codierung für Telefonanwendungen zu definieren. Sie unterstützt sprachfähiges Audio, das Frequenzen von 300 bis 3400 Hz abdeckt. Sie wird ausgiebig für Telefonverkehr und Voicemail verwendet und ist die höchste Audioqualität, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein hochqualitativer Codec, sondern darauf optimiert, eine breite Palette von Sprachpegeln (vom Flüstern bis zum Schreien) zu unterstützen, während hohe Verständlichkeit und geringe Rechenkomplexität erhalten bleiben. G.711 verwendet einen logarithmischen Kompander-Algorithmus, der einen Dynamikbereich von 14 Bit in einer 8-Bit-Abtastung bietet. Es verwendet eine Abtastrate von 8000 Abtastungen/Sekunde, was einer Bitrate von 64000 bps entspricht.

Es gibt zwei Varianten von G.711, die die genaue mathematische Gleichung für den Algorithmus angeben: [µ-law](https://en.wikipedia.org/wiki/M-law) (häufig in Nordamerika und Japan verwendet) und [A-law](https://en.wikipedia.org/wiki/A-law) (üblich im Rest der Welt). Es gibt keinen wesentlichen Qualitätsunterschied zwischen den beiden Varianten, und es ist möglich, Audio von einer in die andere zu transkodieren. Es ist jedoch wichtig, anzugeben, welche Variante in jeder Wiedergabeanwendung oder Dateiformat verwendet wird. A-law-Audio wird schlecht wiedergegeben, wenn es versehentlich mit dem µ-law-Algorithmus dekomprimiert wird, und umgekehrt.

Dieser Codec muss von allen [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen unterstützt werden, da er einfach, leicht zu implementieren, weit verbreitet und breit kompatibel auf allen modernen Computerplattformen ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>codierte Audiodaten sind 8 Bit pro Abtastung</td>
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
      <td>Logarithmisches Komprimieren (µ-law oder A-law)</td>
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
        Alle relevanten Patente sind abgelaufen, sodass G.711 ohne Einschränkungen verwendet werden kann
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audiocodierung)

Veröffentlicht von der International Telecommunications Union (ITU), wurde der **G.722** Codec speziell für die Sprachkompression entwickelt. Seine Audiocodierungsbandbreite ist auf den Bereich von 50 Hz bis 7.000 Hz begrenzt, wodurch die meisten Frequenzbereiche der typischen menschlichen Vokalisierung abgedeckt werden. Dies macht ihn ungeeignet für die Handhabung von Audio, das außerhalb des menschlichen Sprachbereichs liegen könnte, wie beispielsweise Musik.

G.722-Audio wird mithilfe von Adaptive Differential Pulse Code Modulation (ADPCM) codiert, bei der jede Probe nicht durch ihren absoluten Wert dargestellt wird, sondern durch einen Wert, der angibt, wie stark sich die neue Probe von der vorherigen unterscheidet.

G.722 wird hauptsächlich bei WebRTC-Verbindungen verwendet, da er einer der Audiocodecs ist, die durch die WebRTC-Spezifikation vorgeschrieben sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; praxisbedingt wird jedoch immer 64
        kbps verwendet<br />G.722 Annex B Super Wide-Band: 64 kbps, 80 kbps und
        96 kbps<br />G.722 Annex D Stereo Wide-Band: 64 kbps und 80 kbps<br />G.722
        Annex D Stereo Super Wide-Band: 80 kbps, 96 kbps, 112 kbps und 128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>14-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        16 kHz (ADPCM ist spezifiziert, um 8 kHz, 11.025 kHz, 22.05 kHz, 44.1
        kHz zu erlauben, aber G.722 verwendet 16 kHz)
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
        Alle anwendbaren Patente sind abgelaufen; G.722 kann ohne Einschränkungen verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den in den MPEG/MPEG-2-Standards spezifizierten Audioformaten ist **MPEG-1 Audio Layer III** – auch bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)** – mit Abstand das am weitesten verbreitete und bekannteste. Der MP3-Codec ist durch [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert und wurde 1991 eingeführt (und 1992 abgeschlossen).

Wenn MP3-Audio im MPEG-Container gespeichert wird, wird die resultierende Datei auch einfach als "MP3-Datei" oder "MP3" bezeichnet. Dateien mit der allgegenwärtigen `.mp3`-Erweiterung sind in vielleicht dem am weitesten verbreiteten Audio-Dateiformat der Welt gespeichert, was in großem Maße für die digitale Audiorevolution der späten 1990er und frühen 2000er Jahre verantwortlich ist.

MPEG-1 MP3-Audio unterstützt höhere Bitraten sowie höhere Abtastraten als MP3-Audio in MPEG-2-Dateien. Das MPEG-1-Format MP3 eignet sich im Allgemeinen am besten für Musik oder andere komplexe Audioinhalte, während MPEG-2-Modus MP3-Audio für Sprache und andere einfachere Klänge akzeptabel ist.

Die Patente hinter MP3 sind abgelaufen, was viele oder alle Lizenzierungsbedenken bei der Verwendung von MP3-Dateien in Ihren Projekten beseitigt. Dies macht sie zu einer guten Wahl für viele Projekte.

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
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Abtastraten</th>
      <td><strong>MPEG-1 Modus:</strong> 32000 Hz, 44100 Hz, 48000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 16000 Hz, 22050 Hz, 24000 Hz (Die Hälfte
        der Frequenz der von MPEG-1 unterstützten Modi)
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
      <td>Varies, depending on bit rate and psychoacoustic analysis</td>
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
        Patentfrei in der EU seit 2012; patentfrei in den USA seit
        dem 16. April 2017; jetzt kostenlos zu verwenden
      </td>
    </tr>
  </tbody>
</table>

Aus patentrechtlichen Gründen unterstützte Firefox MP3 vor Version 71 nicht direkt; stattdessen wurden plattformnative Bibliotheken verwendet, um MP3 zu unterstützen. Diese Fähigkeit wurde auf jeder Plattform in unterschiedlichen Firefox-Versionen eingeführt:

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
        Linux (hängt ab von
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

Das [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) Audioformat wurde von der Xiph.org Foundation als vollständig offenes Audioformat entwickelt; es wurde von der [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein guter Allzweck-Audiocodec, der sowohl Audio geringer Komplexität wie Sprache als auch Musik und andere komplexe Klangarten effizient verarbeiten kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei verwenden, da der Encoder die Bitrate, die Audiofrequenzbandbreite, den Algorithmus und andere Details der Kompressionseinstellungen für jeden Audioblock wählen kann.

Opus ist ein guter Universalcodierungscodec zur Verwendung in Ihren Webanwendungen und kann für jede Audioaufgabe verwendet werden, die Ihnen vorschwebt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>6 kbps - 510 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-Integer und 32-Bit-Float (-1,0 bis 1,0)</td>
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
              <th scope="row">Medium band (MB)</th>
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
          Die angegebenen Abtastraten sind <em>effektive Abtastraten</em>. Opus nutzt einen Algorithmus basierend auf Audio-Bandbreiten statt Abtastraten. Siehe {{RFC(6716, "", 2)}} für Details. Darüber hinaus gibt es einen <em>optionalen</em> Teil der Opus-Spezifikation (Opus Custom), der die Verwendung nicht standardmäßiger Abtastraten ermöglicht, aber die Nutzung dieses Features wird nicht empfohlen.
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
              <th scope="row">Narrowband (NB)</th>
              <td>4 kHz</td>
            </tr>
            <tr>
              <th scope="row">Medium band (MB)</th>
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
          <a href="https://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem">Nyquist–Shannon Abtasttheorem</a>
          zeigt, dass die Audiobandbreite bis zu der Hälfte der Abtastrate betragen kann, erlaubt Opus kein Codieren außerhalb eines maximalen 20 kHz Audiofrequenzbandes, da das menschliche Ohr nichts über die 20 kHz-Schwelle hinaus wahrnehmen kann. Dadurch wird etwas Speicherplatz im codierten Audio gespart.
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
          Diese Informationen beziehen sich auf die Unterstützung von Opus in HTML
          {{HTMLElement("audio")}} und {{HTMLElement("video")}}
          Elementen, und nicht auf WebRTC.
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
      <td>Vollständig offen und ohne Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### Vorbis

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format der [Xiph.org Foundation](https://xiph.org/), das eine Vielzahl von Kanalkombinationen unterstützt, darunter monaural, stereo, polyphon, quadrophonisch, 5.1 Surround, Ambisonic oder bis zu 255 diskrete Audiokanäle. Je nach während der Codierung verwendetem Qualitätseinstellung kann die resultierende Bitrate von etwa 45 kbps bis 500 kbps variieren. Vorbis verwendet inhärent variablen Bitraten-Codierung; die Bitrate kann von einem Sample zum nächsten nach Bedarf während des Kompressionsprozesses variieren.

Im Allgemeinen ist Vorbis in Bezug auf Größe und Bitrate effizienter als MP3 bei ähnlichen Qualitätsniveaus. Diese und seine freie und offene Lizenz machen es zu einer guten Wahl für viele Arten von Audiodaten, solange seine hohe Latenz kein Problem darstellt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>45 kbps - 500 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für Variable Bit Rate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz - 192 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>
        192 kbps bei 48 kHz; dies wird typischerweise durch Einstellen der
        Qualitätseinstellung auf 6 bis 8 erreicht.
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
          Diese Informationen beziehen sich auf die Unterstützung von Vorbis in HTML
          {{HTMLElement("audio")}} und {{HTMLElement("video")}}
          Elementen, und nicht auf WebRTC.
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
      <td>Vollständig offen und ohne Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Audiocodecs

Typischerweise wird ein Codec, egal welcher, im Allgemeinen die Aufgabe erfüllen, auch wenn er nicht die ideale Wahl ist, solange Sie einen Codec auswählen, der nicht speziell für eine völlig andere Art von Audioquelle entwickelt wurde. Wenn Sie beispielsweise einen reinen Sprachcodec auswählen und versuchen, ihn für Musik zu verwenden, erhalten Sie keine verwendbaren Ergebnisse.

Einige Codecs können jedoch die Kompatibilität einschränken, und andere können für Ihre Anforderungen optimaler sein als andere. Hier bieten wir Ihnen Hinweise zur Auswahl eines geeigneten Codecs für Ihren Anwendungsfall.

Bei der Auswahl eines Codecs für Ihre Audio-Inhalte sollten Sie zunächst die folgenden Fragen berücksichtigen:

- Soll das codierte Audio remixt oder neu komprimiert werden? Wenn ja, vermeiden Sie verlustbehaftete Kompression, da diese durch erneutes Komprimieren des Audios verstärkt wird; oder verwenden Sie zumindest so wenig Kompression wie möglich.
- Wenn das Audio in ein bestimmtes Dateiformat eingefügt werden muss, behalten Sie das im Auge, da Mediencontainer typischerweise eine spezifische Untergruppe der verfügbaren Codecs unterstützen.
- Welche Art von Audioinhalt wird der Codec verarbeiten? Bestimmte Codecs sind speziell für reine Sprachinhalte konzipiert (sie nutzen den reduzierten Frequenzbereich, der für menschliche Sprache benötigt wird). Andere können dazu neigen, beim Codieren bestimmter Musikgenres schlechter zu performen.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften hat jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen könnten?
- Inwieweit spielt die Latenz für Ihre Bedürfnisse eine Rolle? Wenn Sie einen Klang benötigen, der sehr genau zeitlich abgestimmt ist, gilt: Je geringer die Latenz, desto besser.
- Wie viel Kompression müssen Sie erzielen?

Betrachten wir einige allgemeine Situationen, um ein Gefühl für den Entscheidungsprozess zu bekommen.

### Beispiel: Musikstreaming

Für das Streaming von Musik möchten Sie einen Codec auswählen, der die Bandbreitennutzung so weit wie möglich minimiert und dabei so wenig Artefakte wie möglich durch die Kompression in das Audio einführt. Dies ist notwendig, da die Downloadrate der Musik nicht größer sein sollte als die verfügbare Netzwerkbandbreite, und idealerweise sollte Raum für Netzgeschwindigkeitsschwankungen und die Nutzung des Netzwerks durch andere Anwendungen bleiben.

Sofern keine spezifische Notwendigkeit für verlustfreie Kompression besteht oder die Netzwerkbandbreite garantiert hoch genug ist, um sie zu unterstützen, ist eine verlustbehaftete Kompressionslösung eine gute Wahl. Welche Sie wählen, hängt von der Browser-Kompatibilität und der Verfügbarkeit spezieller Funktionen ab, die Sie möglicherweise vom Codec benötigen.

_In der Regel_ ist die Latenz beim Streaming von Musik nicht besonders wichtig. Mögliche Ausnahmen sind geloopte Musik, bei der Sie Musik nahtlos immer wieder abspielen müssen, oder wenn Sie Songs ohne Pause dazwischen abspielen müssen. Dies kann insbesondere für klassische Musik, theatralische Soundtracks und für Hintergrundmusik während des Spiels wichtig sein.

Für die allgemeine Musikwiedergabe sind die drei wahrscheinlichsten Kandidaten MP3, AAC und Vorbis.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt, was es zu einer hervorragenden Wahl macht.
- Vorbis wird fast immer in Ogg-Dateien verwendet, aber Ogg-Container werden nicht universell unterstützt. Selbst Microsoft Edge, das sowohl Vorbis unterstützt, unterstützt noch keine Ogg-Container.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die einen Audio Layer III-Track enthalten.

Wenn Sie die Latenz während der Musikwiedergabe minimieren müssen, sollten Sie dringend die Verwendung von Opus in Betracht ziehen, der von den Allzweck-Codecs die niedrigste Latenzspanne (5 ms bis 66,5 ms, verglichen mit mindestens 100 ms für die anderen) aufweist.

> [!NOTE]
> Die hier beschriebene Kompatibilitätsinformation ist in der Regel zum Zeitpunkt des Artikels korrekt; es kann jedoch Ausnahmen und Einschränkungen geben. Achten Sie darauf, die Kompatibilitätstabellen zu überprüfen, bevor Sie sich für ein bestimmtes Medienformat entscheiden.

Basierend auf diesen Informationen ist AAC wahrscheinlich die beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Natürlich können Sie, wenn Sie mehrere Formate anbieten können (z. B. durch die Verwendung des {{HTMLElement("source")}}-Elements innerhalb Ihrer {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente), viele oder alle dieser Ausnahmen vermeiden.

### Beispiel: Musik zum Herunterladen

Musik, die vom Benutzer heruntergeladen wird, kann zu einer größeren Gesamtdateigröße komprimiert werden als gestreamte Musik, da es (im Gegensatz zum Streaming) keine Rolle spielt, ob die Downloadgeschwindigkeit langsamer ist als die Wiedergabegeschwindigkeit der Medien. Das bedeutet, dass Sie verlustbehaftete Kompression bei höheren Bitraten in Betracht ziehen können, was zu größeren Dateien führt, jedoch mit weniger Verlust an Qualität. Oder Sie können ein verlustfreies Format wählen. Die Wahl hängt hauptsächlich von den Anforderungen Ihrer Anwendung und den Präferenzen Ihrer Benutzer ab.

Bei einem tatsächlichen Musik-Download-Service könnten Sie Lieder als 128 kbps MP3-Dateien, 256 kbps AAC-Dateien (in MP4-Containern) oder FLAC-Dateien zum Download anbieten, je nach einer vom Benutzer ausgewählten Präferenz. Wenn Sie nur ein Format auswählen müssen, wählen Sie eines, das basierend auf Ihren Anforderungen und der Art des heruntergeladenen Audioinhalts sinnvoll ist.

Im Allgemeinen ist natürlich das MP3-Format das am häufigsten verwendete Format für Musik; wählen Sie, wenn möglich, eine Bitrate von mindestens 192 kbps. Der iTunes-Store hingegen vertreibt Musik im AAC-Format mit einer Bitrate von 256 kbps.

### Beispiel: Sprachaufnahme und Wiedergabe

Die spezifischen Eigenschaften der menschlichen Sprache ermöglichen es sprachspezifischen Codecs, das Audio weit mehr zu komprimieren als die meisten Codecs mit allgemeinem Zweck. Das liegt daran, dass obwohl der Mensch Frequenzen im Bereich von etwa 20 Hz bis 20.000 Hz hören kann und menschliche Sprachklänge von etwa 300 Hz bis 18.000 Hz reichen, der Großteil der Sprachklänge, den wir benötigen, um zu verstehen, was gesagt wird, im Frequenzbereich von etwa 500 Hz bis 3.000 Hz liegt. Das bedeutet, dass sprachspezifische Codecs alles andere verwerfen können.

Die sprachspezifischen Codecs sind jedoch alle inhärent sehr verlustbehaftet und jeder Klang mit signifikanten Informationen in den Frequenzbändern außerhalb des erfassten Stimmbereichs wird vollständig verloren gehen. Dies macht diese Codecs für alles andere als gesprochene Wörter völlig ungeeignet. Selbst Audio, das nur Stimmen enthält, aber gesungen statt gesprochen, wird in einem dieser Formate wahrscheinlich nicht von akzeptabler Qualität sein.

Die Sprachaufnahme und Wiedergabe muss normalerweise latenzarm sein, um mit Videospuren synchronisiert zu bleiben oder um Übersprechen oder andere Probleme zu vermeiden. Glücklicherweise führen die Eigenschaften, die dazu führen, dass Sprachcodecs so speichereffizient sind, auch dazu, dass sie in der Tendenz eine sehr geringe Latenzzeit haben. Wenn Sie mit WebRTC arbeiten, hat [G.722](#g.722_64_kbps_7_khz_audio_coding) beispielsweise eine Latenz von 4 ms (verglichen mit über 100 ms für MP3), und [AMR](#amr_adaptive_multi-rate)'s Latenz beträgt etwa 25 ms.

> [!NOTE]
> Weitere Informationen zu WebRTC und den Codecs, die es verwenden kann, finden Sie unter [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Zu den allgemein im Web verwendeten Codecs, die für rein stimmliche Codierung verwendet werden, gehören G.722 und AMR. AMR ist ein schmalbandiger Codec, der nur die Frequenzen zwischen 200 Hz und 3.400 Hz bei Bitraten typischerweise ca. 7.4 kbps codiert, während G.722 ein Breitband-Codec ist, der die Audiobandbreite auf 50 Hz bis 7.000 Hz bei viel höheren Bitraten - in der Regel 64 kbps - erweitert.

Wenn Sie viel Netzwerkbandbreite zur Verfügung haben und relativ sicher sind, dass Ihre Benutzer es auch haben werden, ist G.722 die bessere Wahl. Um die Speicherplatz- und Netzwerkeffizienz in einer eingeschränkten Umgebung zu maximieren, wählen Sie AMR.

### Beispiel: Audioclips für professionelle Mixer

Wenn Sie Audio komprimieren, das gemischt oder remixed wird, möchten Sie in der Regel einen Verlust an Qualität vermeiden oder auf ein Minimum reduzieren, was darauf hindeutet, dass ein verlustfreier Codec in Betracht gezogen werden könnte. Da jedoch die verlustfreie Codierung naturgemäß eine viel geringere Kompressionsrate als verlustbehaftete Codierung aufweist, werden Sie möglicherweise feststellen, dass, wenn Ihre Audioquelle groß genug ist, Sie doch einen verlustbehafteten Encoder verwenden müssten, insbesondere in einer Webumgebung, in der die Downloadgeschwindigkeit der Medien nicht kontrolliert werden kann.

Angenommen, verlustfreie Kompression ist hier die beste Option (was sie normalerweise ist, solange die Audiodateien klein sind), sind die drei stärksten Kandidaten aus einer Codec-Perspektive [FLAC](https://en.wikipedia.org/wiki/FLAC), [Apple Lossless (ALAC)](https://en.wikipedia.org/wiki/Apple_Lossless) und [MPEG-4 ALS](https://en.wikipedia.org/wiki/Audio_Lossless_Coding). Welche wir wählen, hängt von der Browserunterstützung und den unterstützten Mediencontainerformaten ab.

Für die Zwecke dieses Beispiels gehen wir davon aus, dass alle Browser dieselbe Codec- und Containerunterstützung wie Firefox haben (obwohl das weit davon entfernt ist, wahr zu sein). Betrachten Sie die Breite der tatsächlichen Unterstützung für die Codecs bei Ihren Entscheidungen.

- Firefox unterstützt FLAC in FLAC-eigenen Containern sowie in Ogg- und MPEG-4 (MP4) Dateien.
- Firefox unterstützt Apple Lossless nur durch seine plattformspezifische QuickTime-Unterstützung.
- Firefox unterstützt MP4 ALS nicht.

In diesem Fall erscheint es, dass FLAC wahrscheinlich der beste Codec ist; ALAC hat wenig bis gar keine direkte Browserunterstützung.

## Software zur Audio-Kodierung

Es gibt viele Tools, die zur Audio-Kodierung verfügbar sind. Die einfachsten sind solche, die zum Rippen von CDs oder zum Einziehen von Audiodateien gedacht sind und diese schnell und automatisch in MP3- oder AAC-Format konvertieren, um sie in einer Bibliothek zu speichern, wie [iTunes](https://www.apple.com/itunes/). Aber wenn Sie Web-Apps entwickeln, die Audio als Komponente der App verwenden, wie Spiele, benötigen Sie mehr Kontrolle über den Kodierungsprozess und mehr Optionen bezüglich des Formats, das während der Kodierung des Audios verwendet wird.

Einige beliebte Optionen:

- [FFmpeg](https://ffmpeg.org/)
  - : Vielleicht das bekannteste und am meisten angesehene Open-Source-Codecs-Paket, FFmpeg unterstützt den Großteil der beliebtesten Audioformate und bietet Kommandozeilen-Tools und Bibliotheken zur Kodierung, Dekodierung und zum Durchführen von Formatkonvertierungen sowohl von Audio als auch von Video. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Handbrake](https://handbrake.fr/)
  - : Ein sehr beliebtes Open-Source-Frontend für FFmpeg, das eine grafische Benutzeroberfläche hinzufügt, die es viel einfacher macht, die Vielzahl von Optionen zu steuern, die FFmpeg beim Kodieren von Audio und/oder Video bietet. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Audacity](https://www.audacityteam.org/)
  - : Ein Open-Source-Audio-Editor, der das Laden von Audio aus vielen verschiedenen Formaten unterstützt, das Bearbeiten, Filtern und Anpassen des Audios und das Speichern im ursprünglichen Format oder einem neuen Format. Verfügbar für macOS, Linux und Windows.
- [LAME](https://lame.sourceforge.io/)
  - : Ein qualitativ hochwertiger Open-Source-MP3-Encoder mit Unterstützung für CBR-, ABR- und VBR-Codierung sowie eine Vielzahl anderer Optionen. Nur im Quellcode-Format vom LAME-Projekt vertrieben, kann jedoch mit [Homebrew](https://brew.sh/) oder ähnlichen Tools installiert werden.

## Siehe auch

- [Mediencontainerformate](/de/docs/Web/Media/Guides/Formats/Containers)
- Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

---
title: Leitfaden für Web-Audiocodecs
slug: Web/Media/Guides/Formats/Audio_codecs
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Selbst einfache, hochauflösende Stereo-Sounds können eine beträchtliche Menge an Speicherplatz beanspruchen. Für Webentwickler ist vor allem die benötigte Netzwerkbandbreite wichtig, um Audio zu übertragen, sei es für das Streaming oder für den Download zur Nutzung während eines Spiels. Die Verarbeitung von Audiodaten zum Kodieren und Dekodieren wird von einem Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DEC**oder) durchgeführt. In diesem Artikel betrachten wir die auf dem Web verwendeten Audiocodecs zur Komprimierung und Dekomprimierung von Audio, ihre Fähigkeiten und Anwendungsfälle und geben Hinweise bei der Auswahl von Audiocodecs für Ihre Inhalte.

Darüber hinaus verwenden WebRTC-Implementierungen im Allgemeinen eine Teilmenge dieser Codecs zum Kodieren und Dekodieren von Medien und können zusätzliche Codecs unterstützen, um eine optimale plattformübergreifende Unterstützung für Video- und Audiokonferenzen zu gewährleisten und besser mit älteren Telekommunikationslösungen zu integrieren. Siehe [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details.

Informationen zu den grundlegenden Konzepten, wie digitale Audio funktioniert, finden Sie im Artikel [Konzepte digitaler Audio](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

## Übliche Codecs

Die folgende Liste zeigt die auf dem Web am häufigsten verwendeten Codecs und welche Container (Dateitypen) sie unterstützen. Wenn Sie nur wissen müssen, welche Codecs überhaupt verwendet werden können, ist dies für Sie. Natürlich können einzelne Browser entscheiden, nicht alle dieser Codecs zu unterstützen, und ihre Unterstützung für die Containerarten, die sie verwenden können, kann ebenfalls variieren. Darüber hinaus können Browser entscheiden, zusätzliche Codecs zu unterstützen, die nicht in dieser Liste enthalten sind.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
      <th scope="col">Vollständiger Codec-Name</th>
      <th scope="col">Containerunterstützung</th>
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
      <td>Impuls-Code-Modulation (PCM) von Sprachfrequenzen</td>
      <td>
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#g.722_64_kbps_7_khz_audio_coding">G.722</a></th>
      <td>
        7 kHz Audiokodierung innerhalb von 64 kbps (für
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
          Wenn MPEG-1 Audio Layer III Codecdaten in einer MPEG-Datei gespeichert werden und es keinen Videotrack in der Datei gibt, wird die Datei typischerweise als MP3-Datei bezeichnet, obwohl sie immer noch eine MPEG-Formatdatei ist.
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

Es gibt zwei allgemeine Kategorien von Faktoren, die das durch den Encoder eines Audiocodecs ausgegebene kodierte Audio beeinflussen: Informationen über das Format und den Inhalt der Quell-Audio und der Codec sowie seine Konfiguration während des Kodierungsprozesses.

Für jeden Faktor, der das kodierte Audio beeinflusst, gibt es eine einfache Regel, die in fast allen Fällen wahr ist: Da die Genauigkeit des digitalen Audios durch die Granularität und Präzision der aufgenommenen Samples bestimmt wird, um es in einen Datenstrom zu konvertieren, gilt: Je mehr Daten verwendet werden, um die digitale Version des Audios darzustellen, desto näher werden die aufgenommenen Klänge dem Ausgangsmaterial entsprechen.

### Die Auswirkung des Quell-Audioformats auf die kodierte Audioausgabe

Da kodiertes Audio von Natur aus weniger Bits verwendet, um jedes Sample darzustellen, kann das Quell-Audioformat tatsächlich weniger Einfluss auf die Größe des kodierten Audios haben, als man erwarten könnte. Dennoch beeinflussen eine Reihe von Faktoren die Qualität und die Größe des kodierten Audios. Die folgende Tabelle listet einige wichtige Faktoren des Quell-Audiodateiformats und ihre Auswirkung auf das kodierte Audio auf.

<table class="standard-table">
  <caption>
    Die Auswirkung von Quell-Audioformat und Inhalt auf die Qualität und Größe des kodierten Audios
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
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung von Richtungswirkung, nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die Größe des kodierten Audios erheblich erhöhen, abhängig von Inhalt und Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
        Unerwünschtes Hintergrundrauschen oder Zischen neigt dazu, die Audioqualität sowohl direkt (durch Überdecken von Details der Vordergrund-Audio) als auch indirekt (durch Komplizieren der Audiowellenform, wodurch es schwieriger wird, die Größe zu reduzieren und trotzdem die Präzision zu bewahren) zu verringern.
      </td>
      <td>
        Rauschen, statische Aufladungen oder Hintergrundrauschen erhöhen die Audiokomplexität, was im Allgemeinen die Möglichkeit der Komprimierung reduziert.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#sampling_audio"
          >Abtastrate</a
        >
      </th>
      <td>
        Je mehr Samples pro Sekunde verfügbar sind, desto höher ist die zu erwartende Klangtreue des kodierten Audios.
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
        Je größer die Samples sind, desto mehr Details kann jedes Sample enthalten, was zu einer genaueren Darstellung jedes Samples führt.
      </td>
      <td>
        Hängt vom Codec ab; Codecs haben typischerweise ein internes Sample-Format, das möglicherweise nicht mit der Original-Sample-Größe übereinstimmt. Mehr Quelldetails können die kodierte Datei vergrößern; sie werden sie niemals verkleinern.
      </td>
    </tr>
  </tbody>
</table>

Natürlich können diese Effekte durch Entscheidungen beim Kodieren des Audios verändert werden. Wenn zum Beispiel der Encoder so konfiguriert ist, dass die Abtastrate reduziert wird, wird die Auswirkung der Abtastrate auf die Ausgabedatei entsprechend reduziert.

Für weitere Informationen über diese und andere Merkmale von Audiodaten, siehe [Audio-Datenformat und Struktur](/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure).

### Die Auswirkung der Codec-Konfiguration auf die kodierte Audioausgabe

Audiocodecs verwenden in der Regel ausgeklügelte und hochkomplexe mathematische Algorithmen, um Quelldaten zu komprimieren und erheblich weniger Speicherplatz in Anspruch zu nehmen oder weniger Netzwerkbandbreite zu benötigen. Neben der Auswahl des zu verwendenden Encoders haben Sie möglicherweise die Möglichkeit, den Encoder mithilfe von Parametern anzupassen, die spezifische Algorithmen auswählen, diese Algorithmen abstimmen und die Anzahl der Durchläufe festlegen, die während der Kodierung angewendet werden sollen.

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
      <td>Kein Verlust an Klangtreue</td>
      <td>Wahrscheinlich nicht mehr als 40-50% Kompression</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Kompression</a
        >
      </th>
      <td>
        Immer etwas Verlust an Klangtreue; je höher die Kompression, desto größer der Verlust
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
        Je höher die Bitrate, desto größer ist die kodierte Datei wahrscheinlich
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_frequency_bandwidth"
          >Audiofrequenz-Bandbreite</a
        >
      </th>
      <td>
        Wenn sich in dem entfernten Frequenzband Audio befindet, kann ein wahrnehmbarer Verlust an Klangtreue auftreten
      </td>
      <td>
        Das Entfernen von Frequenzbändern bedeutet weniger Daten zum Kodieren und somit kleinere kodierte Dateien
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
        führt jedoch zu einem Verlust an Detailgenauigkeit.
      </td>
      <td>
        Joint-Stereo kann die Größe des kodierten Audios bis zu einem gewissen Grad reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter und der Bereich möglicher Werte variieren von Codec zu Codec und sogar bei verschiedenen Kodierungsprogrammen für denselben Codec, daher lesen Sie die Dokumentation, die mit der von Ihnen verwendeten Kodierungssoftware geliefert wird, um mehr zu erfahren.

### Merkmale, die die Größe des kodierten Audios beeinflussen

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige davon betreffen die Form des Quell-Audios; andere sind mit Entscheidungen verbunden, die während der Kodierung des Audios getroffen werden.

#### Verlustfreie versus verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokomprimierung. **Verlustfreie** Kompressionsalgorithmen reduzieren die Größe des Audios, ohne die Qualität oder Klangtreue zu beeinträchtigen. Beim Dekodieren von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis in jeder Weise identisch mit dem Original-Sound, bis auf das Bit genau.

**Verlustbehaftete** Codecs hingegen nutzen die Tatsache, dass das menschliche Ohr kein perfekter Interpret von Audio ist, und die Tatsache, dass das menschliche Gehirn die wichtigen Informationen aus unvollständigem oder rauschendem Audio herausfiltern kann. Sie entfernen Audiofrequenzen, die nicht oft verwendet werden, tolerieren einen Verlust an Präzision in der dekodierten Ausgabe und verwenden andere Methoden, um Audioinhalte, Qualität und Klangtreue zu verlieren, um kleinere kodierte Medien zu erzeugen. Beim Dekodieren ist die Ausgabe in unterschiedlichem Maße immer noch verständlich. Der spezifische verwendete Codec und die ausgewählte Kompressionskonfiguration bestimmen, wie nah die Ausgabe dem ursprünglichen, unkomprimierten Audiosignal zu sein scheint, wenn sie vom menschlichen Ohr gehört wird.

Aufgrund der Unterschiede in der Funktionsweise verlustbehafteter Codecs im Vergleich zu verlustfreien, insbesondere der Tatsache, dass verlustfreie weitaus vorsichtiger in ihrer Komprimierung sein müssen, führen verlustbehaftete Codecs nahezu immer zu wesentlich kleineren komprimierten Audiodaten als verlustfreie Codecs.

Allgemein gesagt sind die häufigsten Gründe für die Wahl verlustfreier Audios die Anforderungen an eine Archivierungsqualitätsspeicherung oder das Verlangen, Audiosamples neu zu mischen und zu komprimieren, um eine Verstärkung von Artefakten im Audio aufgrund der erneuten Komprimierung zu vermeiden. Für das Echtzeit-Streaming von Audio ist in der Regel ein verlustbehafteter Codec erforderlich, um sicherzustellen, dass der Datenfluss mit der Audio-Wiedergaberate mithalten kann, unabhängig von der Netzwerkleistung.

### Maximale Anzahl von Kanälen

Der an jeden Lautsprecher in einem Soundsystem gelieferte Ton wird von einem Audiokanal in einem Stream bereitgestellt. Mono-Sound ist ein einzelner Kanal. Stereo-Sound sind zwei. 5.1-Surround-Sound hat fünf Audiokanäle plus einen **Low Frequency Enhancement** (**LFE**)-Kanal.

LFE-Kanäle sind speziell dafür ausgelegt, niederfrequente Audiodaten zu speichern, und werden häufig verwendet, um Audiodaten für Subwoofer bereitzustellen, beispielsweise. Wenn Sie die Anzahl der Audiokanäle in der Form X.Y (wie 2.1 oder 5.1) geschrieben sehen, ist die Zahl nach dem Dezimalpunkt, Y, die Anzahl der LFE-Kanäle. Zum Beispiel unterstützt MP3 einen LFE-Kanal, während AAC bis zu 16 unterstützt.

Zusätzlich zur Bereitstellung von Audio für bestimmte Lautsprecher in einem Soundsystem erlauben einige Codecs möglicherweise, dass Audiokanäle verwendet werden, um alternative Audioinhalte bereitzustellen, wie z. B. Gesang in verschiedenen Sprachen oder Beschreibungen für sehbehinderte Menschen.

### Audiofrequenz-Bandbreite

Die **Audiofrequenz-Bandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, die mit dem Codec dargestellt werden können. Einige Codecs arbeiten speziell, indem sie Audio, das außerhalb eines bestimmten Frequenzbereichs liegt, eliminieren. Es gibt einen Zusammenhang zwischen der Abtastrate und der maximalen Schallfrequenz, die von einer mit einem Codec dargestellten Wellenform dargestellt werden kann. Auf theoretischer Ebene ist die maximale Frequenz, die ein Codec darstellen kann, die Abtastrate geteilt durch zwei; diese Frequenz wird als [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) bezeichnet. In der Praxis liegt das Maximum etwas niedriger, aber es liegt nahe.

Die Audiofrequenz-Bandbreite kommt besonders lebhaft zum Tragen, wenn ein Codec speziell dafür ausgelegt oder konfiguriert ist, menschliche Sprache anstelle eines breiten Spektrums von Klängen darzustellen. Menschliche Sprache liegt in der Regel im Audiofrequenzbereich von 300 Hz bis 18 kHz. Der Großteil der menschlichen Vokalisationen existiert jedoch im Bereich von 300 Hz bis 8 kHz, und Sie können genug menschliche Vokalisationen im Frequenzbereich von 500 Hz bis 3 kHz erfassen, damit sie noch verständlich sind.

Aus diesem Grund beginnen sprachspezifische Codecs häufig mit dem Entfernen von Geräuschen, die außerhalb eines festgelegten Bereichs liegen. Dieser Bereich ist die Audiofrequenz-Bandbreite. G.722 entfernt beispielsweise Geräusche außerhalb der Audiofrequenz-Bandbreite von 50 Hz bis 7 kHz. Dies reduziert die Datenmenge, die von Anfang an codiert werden muss.

## Codec-Details

Im Folgenden werfen wir einen kurzen Blick auf jeden dieser Codecs, betrachten deren grundlegende Fähigkeiten und ihre Hauptanwendungsfälle.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding** (**AAC**)-Codec ist Teil des MPEG-4 (H.264) Standards; speziell ist er Teil von [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html). Entwickelt, um mehr Kompression bei höherer Audioqualität als MP3 zu bieten, hat sich AAC zu einer beliebten Wahl entwickelt und ist das Standardformat für Audio in vielen Arten von Medien, einschließlich Blu-Ray-Discs und HDTV, sowie das Format für online ge kaufte Lieder, unter anderem bei iTunes.

AAC verfügt über eine Reihe von Profilen, die Methoden zur Komprimierung von Audio für spezifische Anwendungsfälle definieren, einschließlich alles von hochwertigem Surround-Sound bis hin zu Audio mit niedriger Qualität für Sprachgebrauch.

Als patentbelastetes Format ist die Unterstützung von AAC etwas weniger vorhersehbar. Beispielsweise unterstützt Firefox AAC nur, wenn die Unterstützung vom Betriebssystem oder einer externen Bibliothek bereitgestellt wird.

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
      <th scope="row">Unterstützte Abtastformate</th>
      <td>32-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz - 96 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>96 kbps bei 48 kHz Abtastrate</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>48 (plus 16 Kanäle für niederfrequente Verstärkung)</td>
    </tr>
    <tr>
      <th scope="row">Audio-Frequenzbandbreite</th>
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
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt. Stattdessen verlässt sich Firefox auf die native Unterstützung der Plattform für AAC. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und unterstützt nur das Main Profile von AAC. Darüber hinaus ist AAC in Chromium-Builds nicht verfügbar.
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
        Zum Streamen oder Verteilen von AAC-kodierten Inhalten: keine Lizenz erforderlich; Entwickler von Codecs müssen eine Patentlizenz über
        <a href="https://www.via-la.com/licensing-2/aac/">VIA Licensing</a>
        erwerben.
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein verlustfreier Codec, der von Apple entwickelt wurde. Nachdem er zunächst ein geschlossenes Format war, öffnete Apple es unter einer Apache-Lizenz.

Plattformübergreifende und Browser-Unterstützung für ALAC ist nicht sehr stark, was ihn zu einer weniger idealen Wahl für den allgemeinen Gebrauch macht. Wenn Ihr Ziel jedoch hauptsächlich macOS- und iOS-Nutzer sind, könnte er es wert sein, in Betracht gezogen zu werden, da die Betriebssysteme integrierte Unterstützung für ALAC bieten. Andernfalls ist FLAC wahrscheinlich die bessere Wahl, wenn Sie einen verlustfreien Codec verwenden müssen.

Beachten Sie jedoch, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherkapazität erfordern und möglicherweise außerhalb sehr spezifischer Anwendungsfälle keine gute Wahl sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Basierend auf dem Abtastformat und der Abtastrate sowie dem Komprimierungsgrad
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastformate</th>
      <td>16-Bit, 20-Bit, 24-Bit und 32-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
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
      <th scope="row">Audio-Frequenzbandbreite</th>
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
        Offene Lizenz (Apache License 2.0);
        <a href="https://github.com/macosforge/alac">Quellcode auf GitHub verfügbar</a>
      </td>
    </tr>
  </tbody>
</table>

### AMR (Adaptive Multi-Rate)

Der **[Adaptive Multi-Rate Audio Codec](https://voiceage.com/AMR-NB.AMR.html)** ist darauf optimiert, menschliche Sprache effizient zu kodieren. Er wurde 1999 als Teil des 3GPP-Audiostandards standardisiert, der sowohl für [GSM](https://en.wikipedia.org/wiki/GSM) als auch für [UMTS](https://en.wikipedia.org/wiki/UMTS) Mobiltelefonie verwendet wird. Er nutzt einen Mehrfrequenz-Normalband-Algorithmus, um Audiofrequenzen auf einem telephonetauglichen Qualitätsniveau bei etwa 7.4 kbps zu kodieren. Zusätzlich zur Nutzung für Echtzeit-Telefonie kann AMR-Audio auch für Voicemail und andere kurze Audioaufnahmen verwendet werden.

AMR-Audio, das in Dateien gespeichert ist, kann als `.amr` getypt werden, kann jedoch auch in `.3gp`-Dateien gekapselt werden.

Als sprachspezifischer Codec ist AMR im Wesentlichen für jeglichen anderen Inhalt nutzlos, einschließlich Audio, das nur Gesangsstimmen enthält. Außerdem erfasst AMR, da er dafür entwickelt wurde, die Kapazitätsanforderungen zu minimieren, nur den Teil des gesamten Audiobandbreitenbereichs menschlicher Sprache, der absolut notwendig ist, um zu verstehen, was gesagt wird, sodass die Qualität entsprechend reduziert wird. Wenn Sie die Möglichkeit benötigen, Audio mit minimalen Auswirkungen auf Netzwerk- und/oder Speicherkapazität aufzunehmen, kann AMR eine großartige Wahl sein. Wenn Sie jedoch eine hochauflösende Wiedergabe menschlicher Sprache—oder sogar eine minderwertige Musikwiedergabe—benötigen, müssen Sie ein anderes Format wählen.

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
      <th scope="row">Unterstützte Abtastformate</th>
      <td>13-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
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
      <th scope="row">Audio-Frequenzbandbreite</th>
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
        Nicht kostenlos; Lizenzgebühren und jährliche Abgaben fallen an. Siehe
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge-Lizenzierung</a
        >
        für Details
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audiocodec, der von der [Xiph.org Foundation](https://xiph.org/) veröffentlicht wurde. Er bietet gute Kompressionsraten ohne Verlust der Audioqualität; das heißt, das dekomprimierte Audio ist identisch mit dem Original. Da der Kompressionsalgorithmus speziell für Audio entwickelt wurde, liefert er bessere Ergebnisse als ein allgemeiner Kompressionsalgorithmus.

FLAC ist eine gute Wahl für kleinere Audioeffektdateien, bei denen makellose Qualität und Klanggenauigkeit gewünscht sind, sowie für die Archivierung von Musik.

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
      <th scope="row">Unterstützte Abtastformate</th>
      <td>4-Bit bis 24-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        1 Hz bis 65.535 Hz (in 1 Hz-Schritten) oder 10 Hz bis 655.350 Hz in 10
        Hz-Schritten
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
      <th scope="row">Audio-Frequenzbandbreite</th>
      <td>Vollspektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4.3 ms bis 92 ms mit 46.4 ms als typischem Durchschnitt</td>
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

Die **G.711**-Spezifikation, veröffentlicht von der International Telecommunications Union (ITU), wurde 1972 herausgegeben, um die Standard-Audiokodierung für Telefonanwendungen zu definieren. Sie unterstützt sprachgerechtes Audio, das Frequenzen von 300 bis 3400 Hz abdeckt. Sie wird umfangreich für Telefongespräche und Voicemail verwendet und ist die höchste Audioqualität, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein hochauflösender Codec, sondern stattdessen darauf optimiert, eine breite Palette von Sprachpegeln (von Flüstern bis Schreien) zu unterstützen und dabei hohe Verständlichkeit und geringe Rechenkomplexität zu bewahren. G.711 verwendet einen logarithmischen Kompaktierungsalgorithmus, der 14 Bit dynamischen Bereich in einer 8-Bit-Abtastung bietet. Es verwendet eine Abtastrate von 8000 Abtastungen/Sekunde, was einer Bitrate von 64000 bps entspricht.

Es gibt zwei Varianten von G.711, die die exakte mathematische Gleichung für den Algorithmus angeben: [µ-law](https://en.wikipedia.org/wiki/M-law) (häufig in Nordamerika und Japan verwendet) und [A-law](https://en.wikipedia.org/wiki/A-law) (in den übrigen Teilen der Welt verbreitet). Es gibt keinen wesentlichen Qualitätsunterschied zwischen den beiden Gesetzen, und es ist einfach, Audio von einem ins andere zu transcodieren. Dennoch ist es wichtig, anzugeben, welches Gesetz bei jeder Wiedergabeanwendung oder Dateiformat verwendet wird. A-law-Audio wird schlecht wiedergegeben, wenn es fälschlicherweise mit dem µ-law-Algorithmus dekomprimiert wird, und umgekehrt.

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
      <th scope="row">Unterstützte Abtastformate</th>
      <td>Kodiertes Audio ist 8 Bit pro Abtastung</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
      <td>128 kbps</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Logarithmische Kompaktierung (µ-law oder A-law)</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Audio-Frequenzbandbreite</th>
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
        Alle zutreffenden Patente sind abgelaufen, daher kann G.711 ohne
        Einschränkungen verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audiokodierung)

Veröffentlicht von der International Telecommunications Union (ITU), ist der **G.722**-Codec speziell für Sprachkomprimierung entwickelt. Die Audiokodierungsbandbreite ist auf den Bereich von 50 Hz bis 7.000 Hz beschränkt, welcher die meisten Frequenzen typischer menschlicher Lautäußerungen abdeckt. Das macht ihn ungeeignet zum Handhaben von Audio, das außerhalb des menschlichen Sprachbereichs liegen könnte, wie zum Beispiel Musik.

G.722-Audio wird mit Adaptive Differential Pulse Code Modulation (ADPCM) kodiert, bei der jede Abtastung nicht durch ihren absoluten Wert dargestellt wird, sondern als ein Wert, der angibt, wie sehr sich die neue Abtastung von der vorherigen unterscheidet.

G.722 wird hauptsächlich mit WebRTC-Verbindungen verwendet, da es einer der Audiocodecs ist, die von der WebRTC-Spezifikation vorgeschrieben sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; in der Praxis wird jedoch immer 64 kbps verwendet<br />G.722 Annex B Super Wide-Band: 64 kbps, 80 kbps und 96 kbps<br />G.722 Annex D Stereo Wide-Band: 64 kbps und 80 kbps<br />G.722 Annex D Stereo Super Wide-Band: 80 kbps, 96 kbps, 112 kbps und 128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastformate</th>
      <td>14-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        16 kHz (ADPCM ist spezifiziert für 8 kHz, 11.025 kHz, 22.05 kHz, 44.1 kHz, aber G.722 verwendet 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
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
      <th scope="row">Audio-Frequenzbandbreite</th>
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
        Alle zutreffenden Patente sind abgelaufen; G.722 kann ohne
        Einschränkungen verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den durch die MPEG/MPEG-2 Standards spezifizierten Audioformaten ist **MPEG-1 Audio Layer III**—auch bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)**—bei weitem das meistgenutzte und bekannteste. Der MP3-Codec ist durch [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert und wurde 1991 eingeführt (und 1992 finalisiert).

Wenn MP3-Format-Audio in einem MPEG-Container gespeichert wird, wird die resultierende Datei ebenfalls einfach als "MP3-Datei" oder "MP3" bezeichnet. Dateien mit der allgegenwärtigen `.mp3` Erweiterung sind in dem vielleicht meistverbreiteten Audio-Dateiformat der Welt gespeichert, was zu einem Großteil für die digitale Audio-Revolution der späten 1990er und frühen 2000er Jahre verantwortlich ist.

MPEG-1 MP3-Audio unterstützt höhere Bitraten sowie höhere Abtastraten als MP3-Audio in MPEG-2-Dateien. Das MPEG-1 MP3-Format ist im Allgemeinen am besten für Musik oder andere komplexe Audios geeignet, während MPEG-2 Modus MP3-Audio für Sprache und andere einfachere Töne akzeptabel ist.

Die Patente hinter MP3 sind abgelaufen, wodurch viele oder die meisten Lizenzierungsbedenken beim Einsatz von MP3-Dateien in Ihren Projekten entfallen. Das macht sie für viele Projekte zu einer guten Wahl.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>MPEG-1 Modus:</strong> 32 kbps, 40 kbps, 48 kbps, 56 kbps, 64 kbps, 80 kbps, 96 kbps, 112 kbps, 128 kbps, 160 kbps, 192 kbps, 224 kbps, 256 kbps, 320 kbps
      </td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 8 kbps, 16 kbps, 24 kbps, 32 kbps, 40 kbps, 48 kbps, 56 kbps, 64 kbps, 80 kbps, 96 kbps, 112 kbps, 128 kbps, 144 kbps, 160 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastformate</th>
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Abtastraten</th>
      <td><strong>MPEG-1 Modus:</strong> 32000 Hz, 44100 Hz, 48000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 16000 Hz, 22050 Hz, 24000 Hz (Die Hälfte der Frequenz der von MPEG-1 unterstützten Modi)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
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
        <strong>MPEG-2 Modus:</strong> 5 (plus 1 optionaler Kanal für niederfrequente Verstärkung) [5.1]
      </td>
    </tr>
    <tr>
      <th scope="row">Audio-Frequenzbandbreite</th>
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
        In der EU seit 2012 patentfrei; in den USA seit dem 16. April 2017 patentfrei; jetzt frei verwendbar
      </td>
    </tr>
  </tbody>
</table>

Aus patentbedingten Gründen unterstützte Firefox vor Version 71 MP3 nicht direkt; stattdessen wurden plattform-eigene Bibliotheken zur Unterstützung von MP3 verwendet. Diese Fähigkeit wurde auf jeder Plattform in verschiedenen Firefox-Versionen eingeführt:

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

Das [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) Audioformat wurde von der Xiph.org Foundation als vollständig offenes Audioformat entwickelt; es wurde von der [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein guter Allzweck-Audiocodec, der effizient sowohl Audio mit geringer Komplexität wie Sprache als auch Musik und andere Töne mit hoher Komplexität verarbeiten kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei verwenden, da der Encoder die Bitrate, Audiobandbreite, den Algorithmus und andere Details der Komprimierungseinstellungen für jedes Audioframe festlegen kann.

Opus ist ein guter Allround-Audiocodec für die Verwendung in Ihren Webanwendungen und kann für alle Audiouppgaben verwendet werden, die Sie im Kopf haben.

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
      <th scope="row">Unterstützte Abtastformate</th>
      <td>16-Bit-Integer und 32-Bit-Gleitkomma (-1.0 bis 1.0)</td>
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
          verwendet einen Algorithmus, der auf Audiobandbreiten basiert, anstatt auf Abtastraten. Siehe {{RFC(6716, "", 2)}} für Details. Zusätzlich gibt es einen
          <em>optional</em> Teil der Opus-Spezifikation (Opus Custom), der nicht standardmäßige Abtastraten erlaubt, aber die Verwendung dieses Features wird nicht empfohlen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereo-Sound</th>
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
      <th scope="row">Audio-Frequenzbandbreite</th>
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
          <a href="https://de.wikipedia.org/wiki/Nyquist-Shannon-Abtasttheorem">Nyquist-Shannon-Abtasttheorem</a>
          zeigt, dass die Audiobandbreite bis zur Hälfte der Abtastrate betragen kann, erlaubt Opus keine Kodierung außerhalb eines maximalen 20 kHz Audiobandbereichs, da das menschliche Ohr ohnehin nichts über der 20 kHz-Grenze wahrnehmen kann. Dadurch wird etwas Platz im kodierten Audio eingespart.
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

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format von der [Xiph.org Foundation](https://xiph.org/), das eine breite Palette an Kanalkombinationen unterstützt, einschließlich monaural, stereo, polyphon, quadraphon, 5.1 Surround, ambisonisch oder bis zu 255 diskreten Audiokanälen. Je nach während der Kodierung verwendeter Qualitätsstufe kann die resultierende Bitrate von etwa 45 kbps bis 500 kbps variieren. Vorbis verwendet von Natur aus eine variable Bitratenkodierung; die Bitrate kann je nach Bedarf während des Komprimierungsprozesses von einer Abtastung zur nächsten variieren.

Im Allgemeinen ist Vorbis bei ähnlichen Qualitätsniveaus effizienter in Bezug auf Größe und Bitrate als MP3. Dies sowie seine freie und offene Lizenz machen ihn zu einer guten Wahl für viele Arten von Audiodaten, solange die hohe Latenz kein Problem darstellt.

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
      <th scope="row">Unterstützte Abtastformate</th>
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
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
      <th scope="row">Maximale Audiokanäle</th>
      <td>255</td>
    </tr>
    <tr>
      <th scope="row">Audio-Frequenzbandbreite</th>
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
      <td>Vollständig offen und frei von jeglichen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Audiocodecs

Typischerweise, unabhängig davon, welchen Codec Sie verwenden, wird er allgemein die Aufgabe erfüllen, selbst wenn er nicht die ideale Wahl ist, solange Sie einen Codec wählen, der nicht speziell für eine völlig andere Art von Quell-Audio entwickelt wurde. Einen sprachspezifischen Codec zu wählen und zu versuchen, ihn für Musik zu verwenden, wird Ihnen zum Beispiel keine brauchbaren Ergebnisse liefern.

Einige Codecs können jedoch die Kompatibilität einschränken, und andere können für Ihre Bedürfnisse optimaler sein als andere. Hier geben wir eine Anleitung, um Ihnen zu helfen, einen geeigneten Codec für Ihren Anwendungsfall auszuwählen.

Bei der Auswahl eines zu verwendenden Codecs für Ihr Audio sollten Sie zuerst die folgenden Fragen berücksichtigen:

- Wird das kodierte Audio remixt oder neu komprimiert? Wenn ja, vermeiden Sie verlustbehaftete Kompression, die durch erneutes Komprimieren des Audios verstärkt werden würde; oder verwenden Sie zumindest so wenig Kompression wie möglich.
- Wenn das Audio in einen bestimmten Dateityp eingefügt werden muss, denken Sie daran, dass Media-Container typischerweise eine spezifische Teilmenge der verfügbaren Codecs unterstützen.
- Welche Art von Audiocontent wird der Codec bearbeiten? Bestimmte Codecs sind speziell für Sprachinhalte ausgelegt (sie nutzen den verringerten Frequenzbereich, der für menschliche Sprache benötigt wird). Andere können eine algorithmische Neigung haben, schlechter zu funktionieren, wenn sie bestimmte Genres von Musik kodieren.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften hat jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen können?
- Inwieweit spielt die Latenz für Ihre Bedürfnisse eine Rolle? Wenn der Klang sehr genau getimt sein muss, desto geringer die Latenz, desto besser.
- Welche Menge an Kompression müssen Sie erreichen?

Lassen Sie uns ein paar häufige Szenarien betrachten, um ein Gefühl für den Entscheidungsprozess zu bekommen.

### Beispiel: Musik zum Streaming

Für Streaming-Musik möchten Sie einen Codec wählen, der die Bandbreitennutzung so weit wie möglich minimiert, während er so wenige Artefakte wie möglich in das Audio durch Kompression einführt. Dies ist notwendig, da die Geschwindigkeit, mit der die Musik heruntergeladen wird, nicht höher sein darf, als die verfügbare Bandbreite im Netzwerk, und idealerweise sollte noch Spielraum für Netzschwankungen und die Nutzung des Netzwerks durch andere Anwendungen bleiben.

Sofern es keinen speziellen Bedarf für verlustfreie Kompression gibt oder die Netzwerkbandbreite nicht garantiert ausreichend hoch ist, um sie zu unterstützen, ist ein verlustbehaftetes Kompressionselement eine gute Wahl. Welches Sie wählen, hängt von der Browserkompatibilität und der Verfügbarkeit spezieller Funktionen ab, die der Codec unterstützen muss.

_Normalerweise_ ist die Latenz beim Streaming von Musik nicht besonders wichtig. Mögliche Ausnahmen sind Musik in Schleifen, bei der die Musik in der Lage sein muss, nahtlos immer wieder abgespielt zu werden, oder wenn Sie in der Lage sein wollen, Songs nahtlos hintereinander abzuspielen. Dies kann besonders wichtig für klassische Musik, Theatersoundtracks und Hintergrundmusik während des Spielens sein.

Für die allgemeine Musikwiedergabe sind die drei wahrscheinlichsten Kandidaten MP3, AAC und Vorbis.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt, was diese Wahl zu einer großartigen Option macht.
- Vorbis wird fast immer in Ogg-Dateien verwendet, aber Ogg-Container werden nicht universell unterstützt. Auch Microsoft Edge, das sowohl Vorbis als auch die Container unterstützt, unterstützt noch keine Ogg-Container.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die eine Audio-III-Schichtspur enthalten.

Wenn Sie die Latenz während der Musikwiedergabe minimieren müssen, sollten Sie dringend Opus in Betracht ziehen, das den geringsten Latenzbereich der allgemeinen Codecs hat (5 ms bis 66.5 ms, im Vergleich zu mindestens 100 ms für die anderen).

> [!NOTE]
> Die hier beschriebene Kompatibilitätsinformation ist im Allgemeinen korrekt zum Zeitpunkt der Erstellung dieses Artikels; jedoch können Details und Ausnahmen vorliegen. Vergewissern Sie sich, die Kompatibilitätstabellen zu konsultieren, bevor Sie sich auf ein bestimmtes Medienformat festlegen.

Auf dieser Grundlage ist AAC wahrscheinlich Ihre beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Natürlich können Sie, wenn Sie mehrere Formate bereitstellen können (zum Beispiel durch die Verwendung des {{HTMLElement("source")}}-Elements innerhalb Ihrer {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente), viele oder alle dieser Ausnahmen umgehen.

### Beispiel: Musik zum Herunterladen

Musik, die vom Benutzer heruntergeladen wird, kann zu einer größeren Gesamtdateigröße als gestreamte Musik komprimiert werden, da (im Gegensatz zum Streaming) es egal ist, ob die Download-Geschwindigkeit langsamer ist als die Wiedergabegeschwindigkeit des Mediums. Das bedeutet, dass Sie verlustbehaftete Kompression bei höheren Bitraten in Erwägung ziehen können, was zu größeren Dateien, aber mit weniger Verlust an Treue führt. Oder Sie können ein verlustfreies Format wählen. Die Wahl hängt zu einem großen Teil von den Anforderungen Ihrer Anwendung und den Vorlieben Ihrer Nutzer ab.

Für einen echten Musikdownloaddienst könnten Sie Lieder zum Herunterladen als 128 Kbps MP3-Dateien, 256 kbps AAC-Dateien (in MP4-Containern) oder FLAC-Dateien anbieten, abhängig von einer vom Benutzer gewählten Präferenz. Wenn Sie nur ein Format wählen müssen, wählen Sie eines, das angesichts Ihrer Anforderungen und der Art des heruntergeladenen Audioconts sinnvoll ist.

Generell ist MP3 natürlich das am häufigsten verwendete Format für Musik; wählen Sie eine Bitrate von mindestens 192 kbps, wenn möglich. Der iTunes Store hingegen verteilt Musik im 256 kbps AAC-Format.

### Beispiel: Sprachaufnahme und -wiedergabe

Die spezifischen Eigenschaften menschlicher Sprache ermöglichen es sprachorientierten Codecs, das Audio weitaus mehr zu komprimieren, als es die meisten allgemeinen Codecs können. Dies liegt daran, dass, obwohl Menschen Frequenzen von etwa 20 Hz bis 20000 Hz hören, und menschliche Sprachklänge von etwa 300 Hz bis 18000 Hz reichen, der Großteil der Sprachklänge, die wir benötigen, um zu verstehen, was gesagt wird, im Frequenzbereich von 500 Hz bis etwa 3000 Hz liegt. Das bedeutet, dass stimmenspezifische Codecs alles andere wegwerfen können.

Die sprachspezifischen Codecs sind jedoch alle per se sehr verlustbehaftet, und alle Geräusche mit signifikanten Informationen in den Frequenzbändern außerhalb des erfassten Stimmumfangs gehen vollständig verloren. Dies macht diese Codecs völlig ungeeignet für alles außer gesprochene Worte. Selbst Audio, das nur Stimmen, aber Gesang statt Sprache enthält, wird in einem dieser Formate wahrscheinlich nicht von akzeptabler Qualität sein.

Sprachaufnahme und -wiedergabe muss in der Regel latenzarm sein, um mit Videospuren synchronisiert zu werden oder um Übersprechen oder andere Probleme zu vermeiden. Glücklicherweise führen die Eigenschaften, die Sprachcodecs so speichereffizient machen, auch dazu, dass sie in der Regel sehr niedrig in der Latenz sind. Wenn Sie mit WebRTC arbeiten, hat [G.722](#g.722_64_kbps_7_khz_audio_coding) zum Beispiel 4 ms Latenz (im Vergleich zu über 100 ms für MP3), und die Latenz von [AMR](#amr_adaptive_multi-rate) beträgt etwa 25 ms.

> [!NOTE]
> Für mehr über WebRTC und die von ihm verwendeten Codecs, siehe [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Die im Web allgemein verwendeten Codecs, die für die Sprachkodierung verwendet werden, sind G.722 und AMR. AMR ist ein Schmalband-Codec, der nur die Frequenzen zwischen 200 Hz und 3400 Hz bei Bitraten typischerweise um 7,4 kbps kodiert, während G.722 ein Breitband-Codec ist, der die Audiobandbreite auf 50 Hz bis 7000 Hz bei viel höheren Bitraten, typischerweise 64 kbps, erweitert.

Wenn Ihnen genügend Netzwerkbandbreite zur Verfügung steht und Sie vernünftigerweise sicher sind, dass dies auch für Ihre Nutzer gilt, ist G.722 die bessere Wahl. Um die Speicher- und Netzeffizienz in einer eingeschränkten Umgebung zu maximieren, wählen Sie AMR.

### Beispiel: Audioclips für professionelles Mixing

Wenn Sie Audio komprimieren, das gemischt oder remixt wird, möchten Sie in der Regel keinen oder nahezu keinen Verlust der Klangtreue haben, was darauf hindeutet, dass möglicherweise ein verlustfreier Codec erforderlich ist. Da verlustfreies Kodieren jedoch natürlich einen wesentlich niedrigeren Kompressionsgrad als verlustbehaftetes Kodieren bietet, können Sie feststellen, dass Sie, wenn Ihr Ausgangsaudio groß genug ist, möglicherweise ohnehin einen verlustbehafteten Encoder wählen müssen, insbesondere in einer Webumgebung, in der Sie die Download-Geschwindigkeit der Medien nicht kontrollieren können.

Angenommen, dass verlustfreie Kompression hier die beste Option ist (was sie in der Regel ist, solange die Audiodateien klein sind), sind die drei stärksten Kandidaten aus Sicht eines Codecs [FLAC](https://de.wikipedia.org/wiki/FLAC), [Apple Lossless (ALAC)](https://de.wikipedia.org/wiki/Apple_Lossless) und [MPEG-4 ALS](https://de.wikipedia.org/wiki/Audio_Lossless_Coding). Welche wir wählen, hängt von der Browserunterstützung und den unterstützten Mediencontainerformaten ab.

Für die Zwecke dieses Beispiels nehmen wir an, dass alle Browser die gleiche Codec- und Containerunterstützung wie Firefox haben (obwohl dies weit davon entfernt ist, in der Realität zu sein). Betrachten Sie die tatsächliche Unterstützung der Codecs, wenn Sie Ihre Entscheidungen treffen.

- Firefox unterstützt FLAC in den nativen Containern von FLAC sowie in Ogg- und MPEG-4 (MP4)-Dateien.
- Firefox unterstützt Apple Lossless nur durch seine plattformspezifische QuickTime-Unterstützung.
- Firefox unterstützt MP4 ALS nicht.

In diesem Fall scheint FLAC wahrscheinlich der beste Codec zu sein; ALAC hat wenig bis gar keine direkte Browserunterstützung.

## Audio-Encoding-Software

Es gibt viele Werkzeuge, die zum Kodieren von Audio zur Verfügung stehen. Die einfachsten sind diejenigen, die zum Rippen von CDs oder zum Importieren von Audiodateien und zum schnellen und automatischen Konvertieren in das MP3- oder AAC-Format gedacht sind, um in einer Bibliothek gespeichert zu werden, wie [iTunes](https://www.apple.com/itunes/). Aber beim Entwickeln von Web-Apps, die Audio als Komponente der App verwenden, wie Spiele, benötigen Sie mehr Kontrolle über den Kodierungsprozess und mehr Optionen in Bezug auf das Format, das beim Kodieren des Audios verwendet wird.

Einige beliebte Optionen:

- [FFmpeg](https://ffmpeg.org/)
  - : Wahrscheinlich das bekannteste und angesehenste Open-Source-Codec-Paket, das verfügbar ist. FFmpeg unterstützt die Mehrheit der beliebtesten Audioformate und bietet Kommandozeilen-Tools und Bibliotheken zum Kodieren, Dekodieren und Ausführen von Formatkonvertierungen von sowohl Audio als auch Video. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Handbrake](https://handbrake.fr/)
  - : Eine sehr beliebte Open-Source-Benutzeroberfläche für FFmpeg, die eine grafische Benutzeroberfläche hinzufügt, die es viel einfacher macht, die breite Palette von Optionen zu steuern, die FFmpeg beim Kodieren von Audio und/oder Video bietet. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Audacity](https://www.audacityteam.org/)
  - : Ein Open-Source-Audio-Editor, der das Laden von Audio in vielen verschiedenen Formaten, das Bearbeiten, Filtern und Anpassen des Audios sowie das Speichern in entweder dem Originalformat oder einem neuen Format unterstützt. Verfügbar für macOS, Linux und Windows.
- [LAME](https://lame.sourceforge.io/)
  - : Ein hochwertiger Open-Source-MP3-Encoder mit Unterstützung für CBR, ABR und VBR Kodierung sowie einer Vielzahl anderer Optionen. Nur als Quellcode vom LAME-Projekt verteilt, kann aber über [Homebrew](https://brew.sh/) oder ähnliche Werkzeuge installiert werden.

## Siehe auch

- [Media-Containerformate](/de/docs/Web/Media/Guides/Formats/Containers)
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Web-Video-Codec-Leitfaden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

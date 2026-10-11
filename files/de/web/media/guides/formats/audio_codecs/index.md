---
title: Leitfaden für Web-Audiocodecs
slug: Web/Media/Guides/Formats/Audio_codecs
l10n:
  sourceCommit: 4954cf900f039e0cd9a0703dae742aea2663823c
---

Selbst Stereoton von mäßiger Qualität mit hoher Klangtreue kann erheblichen Speicherplatz beanspruchen. Für Webentwickler ist die Netzwerkbandbreite, die für die Übertragung von Audio benötigt wird, ein noch größeres Problem – unabhängig davon, ob das Audio gestreamt oder für die Verwendung während des Spielens heruntergeladen wird. Die Verarbeitung von Audiodaten beim Kodieren und Dekodieren übernimmt ein Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DEC**oder). Dieser Artikel stellt Audiocodecs vor, die im Web zum Komprimieren und Dekomprimieren von Audio verwendet werden. Er beschreibt ihre Fähigkeiten und Anwendungsfälle und bietet Orientierung bei der Auswahl von Audiocodecs für Ihre Inhalte.

WebRTC-Implementierungen verwenden für die Kodierung und Dekodierung von Medien in der Regel eine Teilmenge dieser Codecs. Sie können außerdem zusätzliche Codecs unterstützen, um eine möglichst gute plattformübergreifende Unterstützung für Video- und Audiokonferenzen zu bieten und sich besser in ältere Telekommunikationslösungen zu integrieren. Einzelheiten finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Informationen zu den Grundlagen digitaler Audioverarbeitung finden Sie im Artikel [Grundlagen digitaler Audiodaten](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

## Gängige Codecs

Die folgende Liste zeigt die im Web am häufigsten verwendeten Codecs und die Container (Dateitypen), die sie unterstützen. Wenn Sie lediglich wissen möchten, welche Codecs grundsätzlich infrage kommen, ist diese Liste für Sie gedacht. Einzelne Browser unterstützen möglicherweise nicht alle aufgeführten Codecs. Auch die unterstützten Containertypen können sich unterscheiden. Darüber hinaus können Browser zusätzliche Codecs unterstützen, die nicht in dieser Liste stehen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (Kurzform)</th>
      <th scope="col">Vollständiger Codec-Name</th>
      <th scope="col">Unterstützte Container</th>
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
      <td>Pulse Code Modulation (PCM) of Voice Frequencies</td>
      <td>
        {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#g.722_64_kbps_7_khz_audio_coding">G.722</a></th>
      <td>
        Audiokodierung bis 7 kHz bei 64 kbps (für
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
          Wenn mit MPEG-1 Audio Layer III kodierte Daten in einer MPEG-Datei
          gespeichert sind und die Datei keine Videospur enthält, wird sie
          üblicherweise als MP3-Datei bezeichnet, obwohl sie weiterhin eine
          Datei im MPEG-Format ist.
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

Zwei allgemeine Kategorien von Faktoren beeinflussen das kodierte Audio, das ein Audiocodec-Encoder ausgibt: das Format und der Inhalt des Quellaudios sowie der Codec und seine Konfiguration während der Kodierung.

Für jeden Faktor, der das kodierte Audio beeinflusst, gilt nahezu immer dieselbe Regel: Die Klangtreue digitaler Audiodaten hängt von der Auflösung und Genauigkeit der Samples ab, mit denen das Audio in einen Datenstrom umgewandelt wird. Je mehr Daten für die digitale Darstellung verwendet werden, desto genauer entspricht der abgetastete Klang dem Ausgangsmaterial.

### Einfluss des Quellformats auf das kodierte Audio

Da kodiertes Audio grundsätzlich weniger Bits zur Darstellung jedes Samples verwendet, kann das Quellformat die Größe des kodierten Audios weniger stark beeinflussen, als man erwarten würde. Dennoch wirken sich mehrere Faktoren auf Qualität und Größe aus. Die folgende Tabelle zeigt wichtige Eigenschaften des Quellformats und ihre Auswirkungen.

<table class="standard-table">
  <caption>
    Einfluss von Format und Inhalt des Quellaudios auf Qualität und Größe des
    kodierten Audios
  </caption>
  <thead>
    <tr>
      <th scope="row">Eigenschaft</th>
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
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der Richtung,
        nicht die Qualität.
      </td>
      <td>
        Jeder Kanal kann die Größe des kodierten Audios erheblich erhöhen,
        abhängig vom Inhalt und den Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Störgeräusche / Rauschen</th>
      <td>
        Unerwünschte Hintergrundgeräusche oder Rauschen mindern die Audioqualität
        sowohl direkt (indem sie Details des Nutzsignals überdecken) als auch
        indirekt (indem sie die Audio-Wellenform komplexer machen und damit
        eine Größenreduktion ohne Genauigkeitsverlust erschweren).
      </td>
      <td>
        Rauschen, Knistern oder Hintergrundgeräusche erhöhen die Komplexität
        des Audios und verringern dadurch in der Regel die mögliche Kompression.
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
        wahrscheinlich die Klangtreue des resultierenden kodierten Audios.
      </td>
      <td>
        Eine höhere Abtastrate vergrößert die kodierte Audiodatei.
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
        Je größer die Samples sind, desto mehr Details können sie enthalten
        und desto genauer kann jedes Sample dargestellt werden.
      </td>
      <td>
        Dies hängt vom Codec ab. Codecs verwenden üblicherweise ein internes
        Sample-Format, das der ursprünglichen Sample-Größe entsprechen kann,
        aber nicht muss. Mehr Details im Quellmaterial können die kodierte Datei
        vergrößern; kleiner machen sie sie niemals.
      </td>
    </tr>
  </tbody>
</table>

Diese Auswirkungen können sich durch Entscheidungen bei der Kodierung ändern. Wird der Encoder beispielsweise so konfiguriert, dass er die Abtastrate verringert, fällt auch deren Einfluss auf die Ausgabedatei entsprechend geringer aus.

Weitere Informationen zu diesen und anderen Eigenschaften von Audiodaten finden Sie unter [Format und Struktur von Audiodaten](/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure).

### Einfluss der Codec-Konfiguration auf das kodierte Audio

Audiocodecs verwenden meist ausgeklügelte und hochkomplexe mathematische Algorithmen, um Quellaudiodaten so zu komprimieren, dass sie erheblich weniger Speicherplatz oder Netzwerkbandbreite benötigen. Neben der Auswahl des Encoders können Sie ihn möglicherweise durch Parameter anpassen: Damit wählen Sie bestimmte Algorithmen aus, stimmen sie ab und legen fest, wie viele Durchläufe bei der Kodierung erfolgen.

<table class="standard-table">
  <caption>
    Auswirkungen der Audio-Encoder-Konfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Eigenschaft</th>
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
      <td>Eine Kompression um mehr als 40–50 % ist unwahrscheinlich</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Verlustbehaftete Kompression</a
        >
      </th>
      <td>
        Immer ein gewisser Verlust an Klangtreue; je stärker die Kompression,
        desto größer der Verlust
      </td>
      <td>Eine Kompression um bis zu 80–95 % ist möglich</td>
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
          >Audiofrequenzbandbreite</a
        >
      </th>
      <td>
        Wenn in den entfernten Frequenzbändern Audiosignale vorhanden sind,
        kann ein hörbarer Verlust an Klangtreue entstehen
      </td>
      <td>
        Das Entfernen von Frequenzbändern bedeutet, dass weniger Daten kodiert
        werden müssen und die kodierten Dateien somit kleiner werden
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
          >Intensity-Stereokodierung</a
        >
        führt dagegen zu Detailverlusten.
      </td>
      <td>
        Joint Stereo kann die Größe des kodierten Audios bis zu einem gewissen
        Grad verringern
      </td>
    </tr>
  </tbody>
</table>

Welche Parameter verfügbar sind und welche Werte sie annehmen können, unterscheidet sich je nach Codec und sogar zwischen verschiedenen Kodierungsprogrammen für denselben Codec. Lesen Sie daher die Dokumentation der von Ihnen verwendeten Kodierungssoftware.

### Eigenschaften, die die Größe des kodierten Audios beeinflussen

Mehrere Faktoren beeinflussen die Größe des kodierten Audios. Einige hängen von der Beschaffenheit des Quellaudios ab, andere von Entscheidungen bei der Kodierung.

#### Verlustfreie und verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokompression. **Verlustfreie** Kompressionsalgorithmen verkleinern Audiodaten, ohne die Qualität oder Klangtreue zu beeinträchtigen. Wird mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiertes Audio dekodiert, ist das Ergebnis bis auf das letzte Bit mit dem Original identisch.

**Verlustbehaftete** Codecs nutzen dagegen aus, dass das menschliche Gehör Audiosignale nicht vollkommen wahrnimmt und das Gehirn wichtige Informationen auch aus unvollkommenem oder verrauschtem Audio herausfiltern kann. Sie entfernen wenig genutzte Audiofrequenzen, nehmen Ungenauigkeiten im dekodierten Ergebnis in Kauf und verwerfen mit weiteren Verfahren Audioinhalte, Qualität und Klangtreue, um kleinere kodierte Medien zu erzeugen. Nach der Dekodierung bleibt das Ergebnis in unterschiedlichem Maße verständlich. Der verwendete Codec und die gewählte Kompressionskonfiguration bestimmen, wie ähnlich das Ergebnis für das menschliche Gehör dem ursprünglichen, unkomprimierten Audiosignal erscheint.

Weil verlustbehaftete Codecs anders arbeiten als verlustfreie und letztere insbesondere wesentlich vorsichtiger komprimieren müssen, erzeugen verlustbehaftete Codecs fast immer deutlich kleinere Audiodateien.

Die häufigsten Gründe für die Wahl verlustfreien Audios sind eine Speicherung in Archivqualität oder die Absicht, Audio-Samples später neu abzumischen und erneut zu komprimieren, ohne dass sich durch die erneute Kompression Artefakte verstärken. Für Echtzeit-Audiostreaming ist normalerweise ein verlustbehafteter Codec erforderlich, damit der Datenfluss unabhängig von der Netzwerkleistung mit der Wiedergabegeschwindigkeit Schritt halten kann.

### Maximale Anzahl von Kanälen

Das Audiosignal für jeden Lautsprecher eines Soundsystems wird über einen Audiokanal im Stream bereitgestellt. Monoton besteht aus einem Kanal, Stereoton aus zwei. 5.1-Surround-Sound hat fünf Audiokanäle und zusätzlich einen **Low Frequency Enhancement**-Kanal (**LFE**).

LFE-Kanäle sind speziell für tieffrequente Audiodaten vorgesehen und liefern beispielsweise häufig das Signal für Subwoofer. Wird die Anzahl der Audiokanäle in der Form X.Y angegeben, etwa 2.1 oder 5.1, bezeichnet die Zahl nach dem Punkt, Y, die Anzahl der LFE-Kanäle. MP3 unterstützt beispielsweise einen LFE-Kanal, AAC bis zu 16.

Neben der Versorgung bestimmter Lautsprecher können manche Codecs Audiokanäle auch für alternative Tonspuren verwenden, etwa für gesprochene Inhalte in verschiedenen Sprachen oder Audiodeskriptionen für Menschen mit Sehbehinderung.

### Audiofrequenzbandbreite

Die **Audiofrequenzbandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, die er darstellen kann. Einige Codecs arbeiten gezielt, indem sie Audiosignale außerhalb eines bestimmten Frequenzbereichs entfernen. Zwischen der Abtastrate und der höchsten Tonfrequenz, die eine durch den Codec dargestellte Wellenform wiedergeben kann, besteht ein Zusammenhang. Theoretisch entspricht diese Höchstfrequenz der halben Abtastrate; sie wird [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency) genannt. Tatsächlich liegt die Grenze etwas darunter, aber nahe daran.

Die Audiofrequenzbandbreite spielt eine besonders wichtige Rolle, wenn ein Codec für menschliche Sprache statt für ein breites Spektrum von Klängen entwickelt oder konfiguriert wurde. Menschliche Sprache liegt im Allgemeinen im Frequenzbereich von 90 Hz bis 18 kHz. Der weitaus größte Teil menschlicher Lautäußerungen liegt jedoch zwischen 90 Hz und 8 kHz. Schon im Bereich von 300 Hz bis 3,4 kHz lassen sich genügend Informationen erfassen, damit das Gehirn Gesprochenes verstehen kann.

Deshalb entfernen speziell für Sprache entwickelte Codecs häufig zuerst Töne außerhalb eines festgelegten Bereichs. Dieser Bereich ist ihre Audiofrequenzbandbreite. G.722 entfernt beispielsweise Töne außerhalb des Bereichs von 50 Hz bis 7 kHz. Dadurch müssen von Anfang an weniger Daten kodiert werden.

## Einzelheiten zu den Codecs

Im Folgenden werden die grundlegenden Fähigkeiten und wichtigsten Anwendungsfälle der einzelnen Codecs kurz vorgestellt.

### AAC (Advanced Audio Coding)

Der Codec **Advanced Audio Coding** (**AAC**) ist als Teil des MPEG-4-Standards (H.264) definiert, genauer in [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html). AAC wurde entwickelt, um bei höherer Klangtreue stärker als MP3 komprimieren zu können. Es ist eine beliebte Wahl und das Standard-Audioformat vieler Medien, darunter Blu-ray-Discs und HDTV. Auch bei Onlineanbietern wie iTunes gekaufte Musik verwendet dieses Format.

AAC bietet mehrere Profile, die Verfahren zur Audiokompression für bestimmte Anwendungsfälle festlegen – von hochwertigem Surround-Sound bis zu Audio mit geringerer Klangtreue für reine Sprache.

Da das Format patentbelastet ist, lässt sich die Unterstützung für AAC etwas schwerer vorhersagen. Firefox unterstützt AAC beispielsweise nur, wenn das Betriebssystem oder eine externe Bibliothek die Unterstützung bereitstellt.

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
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>32-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz – 96 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>96 kbps bei einer Abtastrate von 48 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl von Audiokanälen</th>
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
          Aufgrund von Patentfragen unterstützt Firefox AAC nicht direkt.
          Stattdessen stützt sich Firefox auf die native AAC-Unterstützung der
          jeweiligen Plattform. Diese Möglichkeit wurde auf den einzelnen
          Plattformen mit unterschiedlichen Firefox-Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und nur das Main Profile
          von AAC. In Chromium-Builds ist AAC außerdem nicht verfügbar.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Container</th>
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
        Für das Streaming oder die Verbreitung AAC-kodierter Inhalte ist keine
        Lizenz erforderlich; Entwickler von Codecs müssen eine Patentlizenz über
        <a href="https://www.via-la.com/licensing-programs/aac/">VIA Licensing</a>
        erwerben
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein von Apple entwickelter verlustfreier Codec. Anfangs war das Format geschlossen; später veröffentlichte Apple es unter einer Apache-Lizenz.

Die plattformübergreifende Unterstützung und Browserunterstützung für ALAC ist nicht besonders gut. Für die allgemeine Verwendung ist es daher keine ideale Wahl. Wenn Sie hauptsächlich Nutzer von macOS und iOS ansprechen, kann ALAC dennoch sinnvoll sein, da diese Betriebssysteme es integriert unterstützen. Andernfalls ist FLAC wahrscheinlich die bessere Wahl, falls Sie einen verlustfreien Codec benötigen.

Bedenken Sie jedoch, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherplatz benötigen und außerhalb bestimmter Anwendungsfälle möglicherweise ungeeignet sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Abhängig vom Sample-Format, der Abtastrate und der Kompressionsstufe
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-, 20-Bit-, 24-Bit- und 32-Bit-Ganzzahlen</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>1 Hz bis 384.000 Hz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>Entfällt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei; bis zu 45–60 %</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl von Audiokanälen</th>
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
              <th scope="row">Eigenschaft</th>
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
      <th scope="row">Unterstützte Container</th>
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

Der **[Adaptive Multi-Rate-Audiocodec](https://voiceage.com/AMR-NB.AMR.html)** ist für die effiziente Kodierung menschlicher Sprache optimiert. Er wurde 1999 als Teil des 3GPP-Audiostandards für die Mobilfunktelefonie mit [GSM](https://en.wikipedia.org/wiki/GSM) und [UMTS](https://en.wikipedia.org/wiki/UMTS) standardisiert. Sein Schmalbandalgorithmus mit mehreren Bitraten kodiert Audiofrequenzen bei etwa 7,4 kbps in Telefonqualität. Neben der Echtzeittelefonie kann AMR-Audio für Sprachnachrichten und andere kurze Audioaufnahmen verwendet werden.

In Dateien gespeichertes AMR-Audio kann die Dateiendung `.amr` haben, aber auch in `.3gp`-Dateien gekapselt sein.

Als speziell für Sprache entwickelter Codec ist AMR für andere Inhalte praktisch unbrauchbar, auch für Audio, das ausschließlich Gesang enthält. AMR ist darauf ausgelegt, den Ressourcenbedarf zu minimieren. Deshalb erfasst es nur den Teil des gesamten Frequenzbereichs menschlicher Sprache, der unbedingt nötig ist, um Gesprochenes zu verstehen; die Qualität fällt entsprechend geringer aus. Wenn Sie Audio mit möglichst geringem Bedarf an Netzwerkbandbreite und/oder Speicherplatz aufnehmen müssen, kann AMR eine ausgezeichnete Wahl sein. Benötigen Sie dagegen eine klangtreue Wiedergabe menschlicher Sprache oder auch nur eine Musikwiedergabe in niedriger Qualität, müssen Sie ein anderes Format wählen.

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
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>13-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>Entfällt</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl von Audiokanälen</th>
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
              <th scope="row">Eigenschaft</th>
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
          Der Browser Chrome unterstützt AMR zwar nicht, ChromeOS unterstützt
          jedoch AMR-NB (Schmalband) und AMR-WB (Breitband).
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Container</th>
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
        Nicht frei; Lizenzgebühren und jährliche Nutzungsgebühren fallen an.
        Einzelheiten finden Sie unter
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge-Lizenzierung</a
        >
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audiocodec der [Xiph.org Foundation](https://xiph.org/). Er bietet eine gute Kompression ohne Einbußen bei der Klangtreue: Das dekomprimierte Audio ist mit dem Original identisch. Da der Kompressionsalgorithmus speziell für Audio entwickelt wurde, erzielt er bessere Ergebnisse als ein allgemeiner Kompressionsalgorithmus.

FLAC eignet sich hervorragend für kleinere Dateien mit Audioeffekten, bei denen makellose Qualität und klangliche Genauigkeit wichtig sind, sowie für die Archivierung von Musik.

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
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>4-Bit- bis 24-Bit-Ganzzahlen</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        1 Hz bis 65.535 Hz (in Schritten von 1 Hz) oder 10 Hz bis 655.350 Hz
        in Schritten von 10 Hz
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei; Größenreduktion um bis zu 40–50 %</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl von Audiokanälen</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>Gesamtes Spektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4,3 ms bis 92 ms; der typische Durchschnitt liegt bei 46,4 ms</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Eigenschaft</th>
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
              <td>51 (Desktop)<br />58 (Mobilgeräte)</td>
              <td>Ja</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Container</th>
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
      <td>Vollständig offen und ohne Lizenzanforderungen frei verwendbar</td>
    </tr>
  </tbody>
</table>

### G.711 (Pulse Code Modulation of Voice Frequencies)

Die von der Internationalen Fernmeldeunion (ITU) veröffentlichte Spezifikation **G.711** wurde 1972 herausgegeben, um eine Standard-Audiokodierung für Telefonanwendungen festzulegen. Sie unterstützt Audio in Sprachqualität mit Frequenzen von 300 bis 3.400 Hz. G.711 wird häufig für Telefongespräche und Sprachnachrichten verwendet und bietet die hochwertigste Audiokodierung, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein Codec mit hoher Klangtreue. Stattdessen ist er darauf optimiert, einen großen Bereich von Sprechlautstärken – vom Flüstern bis zum Schreien – bei guter Verständlichkeit und geringer Rechenkomplexität zu unterstützen. G.711 verwendet einen logarithmischen Companding-Algorithmus, der in einem 8-Bit-Sample einen Dynamikumfang von 14 Bit bietet. Die Abtastrate beträgt 8.000 Samples pro Sekunde, was einer Bitrate von 64.000 bps entspricht.

Es gibt zwei Varianten von G.711, die sich durch die genaue mathematische Formel des Algorithmus unterscheiden: [µ-law](https://en.wikipedia.org/wiki/M-law) (vor allem in Nordamerika und Japan verwendet) und [A-law](https://en.wikipedia.org/wiki/A-law) (im Rest der Welt verbreitet). Zwischen den beiden Verfahren besteht kein wesentlicher Qualitätsunterschied; Audio lässt sich von einem ins andere umkodieren. Dennoch muss in jeder Wiedergabeanwendung und jedem Dateiformat angegeben werden, welches Verfahren verwendet wird. A-law-Audio wird fehlerhaft wiedergegeben, wenn es versehentlich mit dem µ-law-Algorithmus dekomprimiert wird – und umgekehrt.

Alle [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen müssen diesen Codec unterstützen, da er einfach, leicht zu implementieren, weit verbreitet und mit allen modernen Computerplattformen umfassend kompatibel ist.

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
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>Kodiertes Audio hat 8 Bit pro Sample</td>
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
      <td>Logarithmisches Companding (µ-law oder A-law)</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl von Audiokanälen</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>300 Hz – 3.400 Hz</td>
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
              <th scope="row">Eigenschaft</th>
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
      <th scope="row">Unterstützte Container</th>
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
        Alle relevanten Patente sind abgelaufen; G.711 kann daher ohne
        Einschränkungen frei verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### G.722 (Audiokodierung mit 64 kbps und 7 kHz)

Der von der Internationalen Fernmeldeunion (ITU) veröffentlichte Codec **G.722** wurde speziell für die Sprachkompression entwickelt. Seine Audiofrequenzbandbreite ist auf 50 Hz bis 7.000 Hz begrenzt und deckt damit den größten Teil des Frequenzbereichs typischer menschlicher Lautäußerungen ab. Für Audio, dessen Frequenzen außerhalb des Sprachbereichs liegen können, etwa Musik, ist er daher schlecht geeignet.

G.722-Audio wird mittels Adaptive Differential Pulse Code Modulation (ADPCM) kodiert. Dabei wird jedes Sample nicht durch seinen absoluten Wert dargestellt, sondern durch einen Wert, der den Unterschied zum vorherigen Sample angibt.

G.722 wird hauptsächlich für WebRTC-Verbindungen verwendet, da er zu den von der WebRTC-Spezifikation vorgeschriebenen Audiocodecs gehört.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; in der Praxis werden jedoch immer
        64 kbps verwendet<br />G.722 Annex B Super Wide-Band: 64 kbps, 80 kbps
        und 96 kbps<br />G.722 Annex D Stereo Wide-Band: 64 kbps und 80 kbps<br />
        G.722 Annex D Stereo Super Wide-Band: 80 kbps, 96 kbps, 112 kbps und
        128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>14-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        16 kHz (ADPCM erlaubt laut Spezifikation 8 kHz, 11,025 kHz, 22,05 kHz
        und 44,1 kHz; G.722 verwendet jedoch 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>128 kbps bei einer Abtastrate von 44,1 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl von Audiokanälen</th>
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
              <th scope="row">Eigenschaft</th>
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
      <th scope="row">Unterstützte Container</th>
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
        Alle relevanten Patente sind abgelaufen; G.722 kann ohne
        Einschränkungen frei verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den in den MPEG/MPEG-2-Standards festgelegten Audioformaten ist **MPEG-1 Audio Layer III** – besser bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)** – mit Abstand das am häufigsten verwendete und bekannteste. Der MP3-Codec ist in [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert. Er wurde 1991 eingeführt und 1992 fertiggestellt.

Wenn Audio im MP3-Format in einem MPEG-Container gespeichert wird, heißt die resultierende Datei ebenfalls schlicht „MP3-Datei“ oder „MP3“. Dateien mit der allgegenwärtigen Endung `.mp3` verwenden eines der weltweit wohl am weitesten verbreiteten Audiodateiformate. Es hat maßgeblich zur Revolution digitaler Audiodaten Ende der 1990er- und Anfang der 2000er-Jahre beigetragen.

MPEG-1-MP3-Audio unterstützt höhere Bit- und Abtastraten als MP3-Audio in MPEG-2-Dateien. MP3 im MPEG-1-Format eignet sich im Allgemeinen am besten für Musik und anderes komplexes Audio; MP3-Audio im MPEG-2-Modus ist für Sprache und andere einfachere Klänge ausreichend.

Die Patente für MP3 sind abgelaufen. Dadurch entfallen viele oder die meisten Lizenzfragen bei der Verwendung von MP3-Dateien in Ihren Projekten, was MP3 für viele Projekte zu einer guten Wahl macht.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>MPEG-1-Modus:</strong> 32 kbps, 40 kbps, 48 kbps, 56 kbps,
        64 kbps, 80 kbps, 96 kbps, 112 kbps, 128 kbps, 160 kbps, 192 kbps,
        224 kbps, 256 kbps, 320 kbps
      </td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 8 kbps, 16 kbps, 24 kbps, 32 kbps,
        40 kbps, 48 kbps, 56 kbps, 64 kbps, 80 kbps, 96 kbps, 112 kbps,
        128 kbps, 144 kbps, 160 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung für variable Bitrate (VBR)</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Abtastraten</th>
      <td><strong>MPEG-1-Modus:</strong> 32000 Hz, 44100 Hz, 48000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 16000 Hz, 22050 Hz, 24000 Hz (die Hälfte
        der Frequenzen der unterstützten MPEG-1-Modi)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>128 kbps bei einer Abtastrate von 48 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Maximale Anzahl von Audiokanälen</th>
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
      <td>Variiert je nach Bitrate und psychoakustischer Analyse</td>
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
              <th scope="row">Eigenschaft</th>
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
      <th scope="row">Unterstützte Container</th>
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
        In der EU seit 2012 patentfrei; in den USA seit dem 16. April 2017
        patentfrei; inzwischen frei verwendbar
      </td>
    </tr>
  </tbody>
</table>

Aus Patentgründen unterstützte Firefox MP3 vor Version 71 nicht direkt. Stattdessen wurden plattformeigene Bibliotheken für die MP3-Unterstützung verwendet. Diese Möglichkeit wurde auf den einzelnen Plattformen mit folgenden Firefox-Versionen eingeführt:

<table class="standard-table" style="margin-left: 4em; max-width: 30em">
  <caption>
    MP3-Unterstützung mit externer Bibliothek in Firefox, nach Plattform
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

Das Audioformat [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) wurde von der Xiph.org Foundation als vollständig offenes Audioformat entwickelt und von der [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein vielseitiger Audiocodec, der sowohl Audio mit geringer Komplexität wie Sprache als auch Musik und andere komplexe Klänge effizient verarbeiten kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus innerhalb derselben Audiodatei verwenden. Der Encoder kann für jeden Audio-Frame Bitrate, Audiofrequenzbandbreite, Algorithmus und weitere Kompressionseinstellungen auswählen.

Opus eignet sich als vielseitiger Audiocodec für Ihre Webanwendungen und lässt sich für nahezu alle denkbaren Audioaufgaben einsetzen.

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
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-Ganzzahl und 32-Bit-Gleitkommazahl (-1,0 bis 1,0)</td>
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
          Die angegebenen Abtastraten sind <em>effektive Abtastraten</em>. Opus
          verwendet einen Algorithmus, der auf Audiofrequenzbandbreiten statt
          auf Abtastraten beruht. Einzelheiten finden Sie unter
          {{RFC(6716, "", 2)}}. Darüber hinaus gibt es einen
          <em>optionalen</em> Teil der Opus-Spezifikation (Opus Custom), der
          nicht standardisierte Abtastraten erlaubt. Von der Verwendung dieser
          Funktion wird jedoch abgeraten.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>96 kbps bei einer Abtastrate von 48 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl von Audiokanälen</th>
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
          <a href="https://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem">Nyquist-Shannon-Abtasttheorem</a>
          zeigt, dass die Audiofrequenzbandbreite bis zur Hälfte der Abtastrate
          reichen kann, erlaubt Opus keine Kodierung oberhalb einer maximalen
          Audiofrequenz von 20 kHz. Das menschliche Gehör kann Frequenzen
          oberhalb von 20 kHz ohnehin nicht wahrnehmen. Dadurch wird
          Speicherplatz beim kodierten Audio eingespart.
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
              <th scope="row">Eigenschaft</th>
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
          Diese Angaben beziehen sich auf die Unterstützung von Opus in den
          HTML-Elementen {{HTMLElement("audio")}} und
          {{HTMLElement("video")}}, nicht auf WebRTC.
        </p>
        <p>
          Safari unterstützt Opus im Element {{HTMLElement("audio")}} nur,
          wenn es in einer CAF-Datei enthalten ist, und nur unter macOS High
          Sierra (10.13) oder iOS 11.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Container</th>
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
      <td>Vollständig offen und ohne Lizenzanforderungen frei verwendbar</td>
    </tr>
  </tbody>
</table>

### Vorbis

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format der [Xiph.org Foundation](https://xiph.org/). Es unterstützt zahlreiche Kanalkombinationen, darunter Mono, Stereo, Polyphonie, Quadrofonie, 5.1-Surround, Ambisonics und bis zu 255 getrennte Audiokanäle. Je nach Qualitätseinstellung bei der Kodierung kann die resultierende Bitrate zwischen etwa 45 kbps und 500 kbps liegen. Vorbis verwendet grundsätzlich eine variable Bitrate; sie kann sich während der Kompression bei Bedarf von einem Sample zum nächsten ändern.

Bei vergleichbarer Qualität ist Vorbis hinsichtlich Dateigröße und Bitrate im Allgemeinen effizienter als MP3. Zusammen mit seiner freien und offenen Lizenz macht dies Vorbis für viele Arten von Audiodaten zu einer guten Wahl, sofern seine hohe Latenz kein Problem darstellt.

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
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>16-Bit-Ganzzahl</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz – 192 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindestbitrate für Stereoton</th>
      <td>
        192 kbps bei 48 kHz; dies wird üblicherweise durch eine Qualitätsstufe
        von 6 bis 8 erreicht.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl von Audiokanälen</th>
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
              <th scope="row">Eigenschaft</th>
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
          Diese Angaben beziehen sich auf die Unterstützung von Vorbis in den
          HTML-Elementen {{HTMLElement("audio")}} und
          {{HTMLElement("video")}}, nicht auf WebRTC.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Container</th>
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
      <td>Vollständig offen und ohne Lizenzanforderungen frei verwendbar</td>
    </tr>
  </tbody>
</table>

## Einen Audiocodec auswählen

Normalerweise erfüllt nahezu jeder Codec seinen Zweck, auch wenn er nicht die ideale Wahl ist – vorausgesetzt, Sie wählen keinen Codec, der ausdrücklich für eine völlig andere Art von Quellaudio entwickelt wurde. Ein reiner Sprachcodec liefert beispielsweise keine brauchbaren Ergebnisse für Musik.

Einige Codecs können jedoch die Kompatibilität einschränken, während andere besser zu Ihren Anforderungen passen. Die folgenden Hinweise helfen Ihnen, einen geeigneten Codec für Ihren Anwendungsfall auszuwählen.

Berücksichtigen Sie bei der Auswahl eines Audiocodecs zunächst diese Fragen:

- Wird das kodierte Audio später neu abgemischt oder erneut komprimiert? Vermeiden Sie in diesem Fall verlustbehaftete Kompression, deren Verluste sich bei einer erneuten Kompression verstärken würden – oder komprimieren Sie zumindest so wenig wie möglich.
- Muss das Audio in einem bestimmten Dateityp gespeichert werden? Berücksichtigen Sie dann, dass Mediencontainer in der Regel nur eine bestimmte Teilmenge der verfügbaren Codecs unterstützen.
- Welche Art von Audio soll der Codec verarbeiten? Manche Codecs wurden speziell für reine Sprachinhalte entwickelt und nutzen den kleineren Frequenzbereich menschlicher Sprache aus. Andere Algorithmen können bei bestimmten Musikgenres schlechtere Ergebnisse liefern.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften bietet jeder Codec, und inwiefern machen sie ihn zu einer guten oder schlechten Wahl?
- Welche Rolle spielt die Latenz für Ihre Anforderungen? Wenn Ton besonders präzise zeitlich abgestimmt sein muss, ist eine möglichst geringe Latenz besser.
- Wie stark müssen Sie komprimieren?

Einige häufige Szenarien veranschaulichen den Entscheidungsprozess.

### Beispiel: Musik für das Streaming

Für Musikstreaming sollten Sie einen Codec wählen, der den Bandbreitenbedarf so weit wie möglich senkt und zugleich möglichst wenige Kompressionsartefakte verursacht. Die Musik darf nicht schneller heruntergeladen werden müssen, als die verfügbare Netzwerkbandbreite zulässt. Idealerweise bleibt außerdem Spielraum für Schwankungen der Netzwerkgeschwindigkeit und für andere Anwendungen, die das Netzwerk nutzen.

Sofern Sie keine verlustfreie Kompression benötigen oder eine ausreichend hohe Netzwerkbandbreite nicht gewährleistet ist, eignet sich ein verlustbehaftetes Kompressionsverfahren. Welches Sie wählen, hängt von der Browser-Kompatibilität und von besonderen Funktionen ab, die der Codec gegebenenfalls unterstützen muss.

Beim Musikstreaming ist die Latenz _normalerweise_ nicht besonders wichtig. Ausnahmen sind beispielsweise Musikschleifen, die wiederholt ohne Unterbrechung abgespielt werden müssen, oder Lieder, die ohne Pause unmittelbar aufeinanderfolgen sollen. Das kann insbesondere für klassische Musik, Theater-Soundtracks und Hintergrundmusik in Spielen wichtig sein.

Für die allgemeine Musikwiedergabe kommen vor allem MP3, AAC und Vorbis infrage.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt und ist daher eine ausgezeichnete Wahl.
- Vorbis wird fast immer in Ogg-Dateien verwendet, Ogg-Container werden aber nicht überall unterstützt. Selbst Microsoft Edge, das Vorbis unterstützt, unterstützt Ogg-Container noch nicht.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Dabei handelt es sich um MPEG-1-Dateien mit einer Audio-Layer-III-Spur.

Wenn Sie die Latenz bei der Musikwiedergabe minimieren müssen, sollten Sie Opus in Betracht ziehen. Unter den vielseitig einsetzbaren Codecs bietet es die niedrigsten Latenzen: 5 ms bis 66,5 ms gegenüber mindestens 100 ms bei den anderen.

> [!NOTE]
> Die hier beschriebenen Kompatibilitätsangaben sind zum Zeitpunkt der Erstellung dieses Artikels im Allgemeinen zutreffend; Einschränkungen und Ausnahmen sind jedoch möglich. Prüfen Sie die Kompatibilitätstabellen, bevor Sie sich auf ein Medienformat festlegen.

Wenn Sie nur ein Audioformat unterstützen können, ist AAC demnach wahrscheinlich die beste Wahl. Können Sie mehrere Formate anbieten – beispielsweise mit dem Element {{HTMLElement("source")}} innerhalb Ihrer Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} –, lassen sich viele oder sogar alle genannten Ausnahmen umgehen.

### Beispiel: Musik zum Herunterladen

Musik, die Nutzer herunterladen, kann zu einer größeren Datei komprimiert werden als gestreamte Musik. Anders als beim Streaming spielt es keine Rolle, ob der Download langsamer ist als die Wiedergabe des Mediums. Daher können Sie eine verlustbehaftete Kompression mit höherer Bitrate erwägen: Sie erzeugt größere Dateien, erhält aber mehr Klangtreue. Alternativ können Sie ein verlustfreies Format wählen. Entscheidend sind vor allem die Anforderungen Ihrer Anwendung und die Vorlieben Ihrer Nutzer.

Ein Musik-Download-Dienst könnte Lieder je nach Nutzereinstellung als MP3-Dateien mit 128 kbps, als AAC-Dateien mit 256 kbps (in MP4-Containern) oder als FLAC-Dateien anbieten. Müssen Sie sich auf ein Format beschränken, wählen Sie eines, das Ihren Anforderungen und der Art der heruntergeladenen Audioinhalte entspricht.

MP3 ist natürlich das gängigste Format für Musik; wählen Sie nach Möglichkeit eine Bitrate von mindestens 192 kbps. Der iTunes Store vertreibt Musik dagegen im AAC-Format mit 256 kbps.

### Beispiel: Sprachaufnahme und -wiedergabe

Aufgrund der besonderen Eigenschaften menschlicher Sprache können spezielle Sprachcodecs Audio wesentlich stärker komprimieren als die meisten universell einsetzbaren Codecs. Menschen hören zwar Frequenzen von etwa 20 Hz bis 20.000 Hz, und menschliche Sprachlaute reichen von ungefähr 90 Hz bis 18.000 Hz. Die meisten Sprachanteile, die zum Verstehen des Gesagten nötig sind, liegen jedoch im Frequenzbereich von etwa 300 Hz bis 3.400 Hz. Reine Sprachcodecs können daher alles andere verwerfen.

Spezielle Sprachcodecs sind allerdings grundsätzlich stark verlustbehaftet. Alle wichtigen Klanginformationen außerhalb des erfassten Sprachbereichs gehen vollständig verloren. Deshalb eignen sich diese Codecs ausschließlich für gesprochene Sprache. Selbst Audio, das nur Stimmen enthält, aber Gesang statt Sprache, wird in einem dieser Formate wahrscheinlich keine akzeptable Qualität erreichen.

Sprachaufnahme und -wiedergabe erfordern meist eine geringe Latenz, um mit Videospuren synchron zu bleiben oder Übersprechen und andere Probleme zu vermeiden. Glücklicherweise sorgen dieselben Eigenschaften, die Sprachcodecs beim Speicherbedarf so effizient machen, tendenziell auch für eine sehr geringe Latenz. Bei WebRTC beträgt die Latenz von [G.722](#g.722_64_kbps_7_khz_audio_coding) beispielsweise 4 ms (gegenüber mehr als 100 ms bei MP3); die Latenz von [AMR](#amr_adaptive_multi-rate) liegt bei etwa 25 ms.

> [!NOTE]
> Weitere Informationen zu WebRTC und den verwendbaren Codecs finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Die im Web üblicherweise für reine Sprachkodierung eingesetzten Codecs sind G.722 und AMR. AMR ist ein Schmalbandcodec, der nur Frequenzen zwischen 200 Hz und 3.400 Hz bei Bitraten von typischerweise etwa 7,4 kbps kodiert. G.722 ist dagegen ein Breitbandcodec: Er erweitert die Audiofrequenzbandbreite auf 50 Hz bis 7.000 Hz, verwendet dafür aber wesentlich höhere Bitraten – gewöhnlich 64 kbps.

Wenn Ihnen reichlich Netzwerkbandbreite zur Verfügung steht und Sie mit einiger Sicherheit davon ausgehen können, dass dies auch für Ihre Nutzer gilt, ist G.722 die bessere Wahl. Wählen Sie AMR, wenn Speicherplatz und Netzwerkbandbreite in einer ressourcenbeschränkten Umgebung möglichst effizient genutzt werden sollen.

### Beispiel: Audioclips für professionelles Abmischen

Bei der Kompression von Audio, das später abgemischt oder neu abgemischt wird, möchten Sie normalerweise keinen oder nahezu keinen Verlust an Klangtreue. Das spricht für einen verlustfreien Codec. Verlustfreie Kodierung komprimiert jedoch naturgemäß erheblich weniger als verlustbehaftete. Ist Ihr Quellaudio groß genug, müssen Sie unter Umständen dennoch einen verlustbehafteten Encoder wählen – insbesondere im Web, wo Sie die Downloadgeschwindigkeit der Medien nicht kontrollieren können.

Angenommen, verlustfreie Kompression ist hier die beste Option – was bei kleinen Audiodateien meist zutrifft –, sind aus Codec-Sicht [FLAC](https://en.wikipedia.org/wiki/FLAC), [Apple Lossless (ALA](https://en.wikipedia.org/wiki/Apple_Lossless) und [MPEG-4 ALS](https://en.wikipedia.org/wiki/Audio_Lossless_Coding) die drei stärksten Kandidaten. Die Wahl hängt von der Browserunterstützung und den unterstützten Mediencontainerformaten ab.

Für dieses Beispiel nehmen wir an, dass alle Browser dieselben Codecs und Container wie Firefox unterstützen, obwohl das keineswegs der Realität entspricht. Berücksichtigen Sie bei Ihren Entscheidungen die tatsächliche Verbreitung der Unterstützung.

- Firefox unterstützt FLAC in nativen FLAC-Containern sowie in Ogg- und MPEG-4-Dateien (MP4).
- Firefox unterstützt Apple Lossless nur über die plattformspezifische QuickTime-Unterstützung.
- Firefox unterstützt MP4 ALS nicht.

In diesem Fall ist FLAC wahrscheinlich die beste Wahl; ALAC wird von Browsern kaum oder gar nicht direkt unterstützt.

## Software zur Audiokodierung

Für die Audiokodierung stehen viele Werkzeuge zur Verfügung. Die einfachsten sind dafür gedacht, CDs auszulesen oder Audiodateien zu importieren und sie schnell und automatisch in MP3 oder AAC umzuwandeln, um sie in einer Bibliothek zu speichern – zum Beispiel [iTunes](https://www.apple.com/itunes/). Wenn Sie jedoch Webanwendungen entwickeln, in denen Audio Bestandteil der Anwendung ist, etwa Spiele, benötigen Sie mehr Kontrolle über den Kodierungsprozess und mehr Auswahlmöglichkeiten für das verwendete Format.

Einige beliebte Optionen:

- [FFmpeg](https://ffmpeg.org/)
  - : FFmpeg ist eines der bekanntesten und angesehensten Open-Source-Codec-Pakete. Es unterstützt die meisten gängigen Audioformate und bietet Kommandozeilenwerkzeuge und Bibliotheken zum Kodieren, Dekodieren und Konvertieren von Audio und Video. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Handbrake](https://handbrake.fr/)
  - : Eine sehr beliebte Open-Source-Benutzeroberfläche für FFmpeg. Ihre grafische Oberfläche erleichtert es erheblich, die zahlreichen Optionen von FFmpeg bei der Audio- und/oder Videokodierung zu steuern. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Audacity](https://www.audacityteam.org/)
  - : Ein Open-Source-Audioeditor, mit dem Sie Audio aus vielen Formaten laden, bearbeiten, filtern und anpassen und anschließend im ursprünglichen oder in einem neuen Format speichern können. Verfügbar für macOS, Linux und Windows.
- [LAME](https://lame.sourceforge.io/)
  - : Ein hochwertiger Open-Source-MP3-Encoder, der CBR-, ABR- und VBR-Kodierung sowie zahlreiche weitere Optionen unterstützt. Das LAME-Projekt verteilt ihn nur als Quellcode; er kann jedoch über [Homebrew](https://brew.sh/) oder ähnliche Werkzeuge installiert werden.

## Siehe auch

- [Mediencontainerformate](/de/docs/Web/Media/Guides/Formats/Containers)
- Die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}
- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Leitfaden für Web-Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

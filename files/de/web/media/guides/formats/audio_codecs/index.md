---
title: Leitfaden zu Web-Audiocodecs
slug: Web/Media/Guides/Formats/Audio_codecs
l10n:
  sourceCommit: e404ef152d13623bc21e053c7cb9b81903fbce63
---

Selbst Stereoton mit nur mäßig hoher Qualität kann erheblichen Speicherplatz beanspruchen. Für Webentwickler ist die Netzwerkbandbreite, die zum Übertragen von Audio benötigt wird, oft ein noch größeres Problem – unabhängig davon, ob das Audio gestreamt oder zur Verwendung während eines Spiels heruntergeladen wird. Die Verarbeitung von Audiodaten beim Kodieren und Dekodieren übernimmt ein Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DEC**oder). Dieser Artikel behandelt Audiocodecs, mit denen Audio im Web komprimiert und dekomprimiert wird. Er beschreibt ihre Fähigkeiten und Einsatzgebiete und hilft Ihnen bei der Auswahl eines Codecs für Ihre Inhalte.

WebRTC-Implementierungen verwenden zum Kodieren und Dekodieren von Medien in der Regel eine Teilmenge dieser Codecs. Sie können außerdem zusätzliche Codecs unterstützen, um Video- und Audiokonferenzen plattformübergreifend optimal zu unterstützen und sich besser in ältere Telekommunikationslösungen zu integrieren. Einzelheiten finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Informationen zu den Grundlagen digitaler Audiodaten finden Sie im Artikel [Grundlagen digitaler Audiodaten](/de/docs/Web/Media/Guides/Formats/Audio_concepts).

## Gängige Codecs

Die folgende Liste zeigt die im Web am häufigsten verwendeten Codecs und die Container (Dateitypen), die sie unterstützen. Wenn Sie lediglich wissen möchten, welche Codecs grundsätzlich infrage kommen, bietet Ihnen diese Liste einen Überblick. Einzelne Browser unterstützen möglicherweise nicht alle aufgeführten Codecs; auch die unterstützten Containerformate können sich unterscheiden. Darüber hinaus können Browser weitere, hier nicht aufgeführte Codecs unterstützen.

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
        7-kHz-Audiokodierung mit 64 kbps (für
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
          Wenn mit dem Codec MPEG-1 Audio Layer III kodierte Daten in einer
          MPEG-Datei gespeichert sind und diese keine Videospur enthält, wird
          sie üblicherweise als MP3-Datei bezeichnet, obwohl sie weiterhin
          eine Datei im MPEG-Format ist.
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

Zwei allgemeine Gruppen von Faktoren beeinflussen das Audio, das ein Codec-Encoder ausgibt: das Format und der Inhalt des Quellaudios sowie der Codec und seine Konfiguration während der Kodierung.

Für nahezu jeden dieser Faktoren gilt: Die Wiedergabetreue digitaler Audiodaten hängt von der Granularität und Genauigkeit der Samples ab, mit denen der Ton in einen Datenstrom umgewandelt wird. Je mehr Daten die digitale Version des Audios darstellen, desto genauer entspricht der abgetastete Klang dem Ausgangsmaterial.

### Einfluss des Quellformats auf das kodierte Audio

Da kodiertes Audio für die Darstellung jedes Samples grundsätzlich weniger Bits verwendet, kann das Format des Quellaudios die Größe der kodierten Daten weniger stark beeinflussen, als man erwarten würde. Dennoch wirken sich mehrere Faktoren auf Qualität und Größe aus. Die folgende Tabelle zeigt wichtige Eigenschaften des Quellformats und ihre Auswirkungen.

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
        Die Anzahl der Kanäle beeinflusst nur die Wahrnehmung der räumlichen
        Richtung, nicht die Qualität.
      </td>
      <td>
        Jeder zusätzliche Kanal kann die Größe des kodierten Audios deutlich
        erhöhen, abhängig vom Inhalt und den Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Störgeräusche / Rauschen</th>
      <td>
        Unerwünschte Hintergrundgeräusche oder Rauschen verringern die
        Audioqualität sowohl unmittelbar, weil sie Details des Vordergrundtons
        verdecken, als auch mittelbar: Sie machen die Audiowellenform komplexer
        und erschweren damit eine präzise Komprimierung.
      </td>
      <td>
        Rauschen, Knistern und Hintergrundgeräusche erhöhen die Komplexität des
        Audios und verringern dadurch im Allgemeinen die mögliche Kompression.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#sampling_audio"
          >Abtastrate</a
        >
      </th>
      <td>
        Je mehr Samples pro Sekunde zur Verfügung stehen, desto höher ist
        wahrscheinlich die Wiedergabetreue des kodierten Audios.
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
        Je größer die Samples sind, desto mehr Details kann jedes Sample
        enthalten und desto genauer wird es dargestellt.
      </td>
      <td>
        Das hängt vom Codec ab. Codecs verwenden üblicherweise ein internes
        Sample-Format, das der ursprünglichen Sample-Größe entsprechen kann,
        aber nicht muss. Mehr Details im Quellmaterial können die kodierte Datei
        jedoch vergrößern; kleiner wird sie dadurch nie.
      </td>
    </tr>
  </tbody>
</table>

Entscheidungen während der Kodierung können diese Auswirkungen verändern. Wird der Encoder beispielsweise so konfiguriert, dass er die Abtastrate verringert, fällt deren Einfluss auf die Ausgabedatei entsprechend geringer aus.

Weitere Informationen zu diesen und anderen Eigenschaften von Audiodaten finden Sie unter [Format und Struktur von Audiodaten](/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_data_format_and_structure).

### Einfluss der Codec-Konfiguration auf das kodierte Audio

Audiocodecs verwenden in der Regel ausgeklügelte, hochkomplexe mathematische Algorithmen, um Quellaudiodaten so zu komprimieren, dass sie deutlich weniger Speicherplatz oder Netzwerkbandbreite beanspruchen. Neben der Wahl des Encoders können Sie diesen gegebenenfalls über Parameter anpassen: Sie können bestimmte Algorithmen auswählen und abstimmen sowie festlegen, wie viele Durchläufe bei der Kodierung erfolgen sollen.

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
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_compression_basics"
          >Verlustfreie Kompression</a
        >
      </th>
      <td>Kein Verlust an Wiedergabetreue</td>
      <td>Mehr als 40–50 % Kompression sind unwahrscheinlich</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Guides/Formats/Audio_concepts#audio_compression_basics"
          >Verlustbehaftete Kompression</a
        >
      </th>
      <td>
        Immer mit einem Verlust an Wiedergabetreue verbunden; je stärker die
        Kompression, desto größer der Verlust
      </td>
      <td>Kompression um bis zu 80–95 % möglich</td>
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
        Enthalten die entfernten Frequenzbänder Audiosignale, kann die
        Wiedergabetreue wahrnehmbar abnehmen
      </td>
      <td>
        Werden Frequenzbänder entfernt, müssen weniger Daten kodiert werden;
        dadurch werden die kodierten Dateien kleiner
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
          >Intensity-Stereo-Kodierung</a
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

Die verfügbaren Parameter und ihre möglichen Werte unterscheiden sich von Codec zu Codec und sogar zwischen verschiedenen Kodierungsprogrammen für denselben Codec. Weitere Informationen finden Sie in der Dokumentation Ihrer Kodierungssoftware.

### Eigenschaften, die die Größe kodierter Audiodaten beeinflussen

Mehrere Faktoren beeinflussen die Größe kodierter Audiodaten. Einige betreffen die Beschaffenheit des Quellaudios, andere ergeben sich aus Entscheidungen während der Kodierung.

#### Verlustfreie und verlustbehaftete Codecs

Es gibt zwei grundlegende Kategorien der Audiokompression. **Verlustfreie** Kompressionsalgorithmen verringern die Größe des Audios, ohne Klangqualität oder Wiedergabetreue zu beeinträchtigen. Wird Audio dekodiert, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis bis auf das letzte Bit mit dem Original identisch.

**Verlustbehaftete** Codecs nutzen dagegen aus, dass das menschliche Gehör Audio nicht perfekt wahrnimmt und das Gehirn wichtige Informationen auch aus unvollkommenem oder verrauschtem Audio herausfiltern kann. Sie entfernen wenig genutzte Audiofrequenzen, nehmen Ungenauigkeiten beim dekodierten Ergebnis in Kauf und setzen weitere Verfahren ein, bei denen Audioinhalte und Wiedergabetreue verloren gehen. So entstehen kleinere kodierte Mediendaten. Nach dem Dekodieren bleibt der Inhalt in unterschiedlichem Maße verständlich. Wie ähnlich das Ergebnis für das menschliche Ohr dem ursprünglichen, unkomprimierten Audiosignal ist, hängt vom verwendeten Codec und den gewählten Kompressionseinstellungen ab.

Da verlustfreie Codecs bei der Kompression wesentlich zurückhaltender sein müssen, erzeugen verlustbehaftete Codecs fast immer deutlich kleinere Audiodaten.

Die häufigsten Gründe für die Wahl verlustfreier Audiodaten sind eine Archivierung in Originalqualität oder die geplante Abmischung und erneute Kompression von Samples. Im zweiten Fall lässt sich vermeiden, dass Artefakte durch wiederholte Kompression verstärkt werden. Für das Echtzeit-Streaming von Audio ist dagegen meist ein verlustbehafteter Codec erforderlich, damit der Datenstrom unabhängig von der Netzwerkleistung mit der Wiedergabegeschwindigkeit Schritt halten kann.

### Maximale Anzahl an Kanälen

Der Ton für jeden Lautsprecher eines Soundsystems wird durch einen Audiokanal im Datenstrom bereitgestellt. Monoton hat einen Kanal, Stereoton zwei. 5.1-Surround-Sound hat fünf Audiokanäle und zusätzlich einen **Low-Frequency-Effects-Kanal** (**LFE**).

LFE-Kanäle sind speziell für niederfrequente Audiodaten vorgesehen und liefern beispielsweise häufig Daten für Subwoofer. Wenn die Anzahl der Audiokanäle in der Form X.Y angegeben wird, etwa 2.1 oder 5.1, bezeichnet die Zahl nach dem Punkt, Y, die Anzahl der LFE-Kanäle. MP3 unterstützt beispielsweise einen LFE-Kanal, AAC dagegen bis zu 16.

Neben dem Ton für bestimmte Lautsprecher eines Soundsystems können manche Codecs Audiokanäle auch für alternative Inhalte nutzen, etwa Sprachfassungen in verschiedenen Sprachen oder Audiodeskriptionen für Menschen mit Sehbehinderung.

### Audiofrequenzbandbreite

Die **Audiofrequenzbandbreite** eines Codecs gibt den Bereich der Audiofrequenzen an, die er darstellen kann. Einige Codecs arbeiten gezielt damit, Audio außerhalb eines bestimmten Frequenzbereichs zu entfernen. Zwischen der Abtastrate und der höchsten Tonfrequenz, die eine mit dem Codec dargestellte Wellenform enthalten kann, besteht ein Zusammenhang. Theoretisch beträgt diese Höchstfrequenz die Hälfte der Abtastrate; sie heißt [Nyquist-Frequenz](https://en.wikipedia.org/wiki/Nyquist_frequency). In der Praxis liegt der Höchstwert etwas darunter, aber nahe daran.

Besonders wichtig ist die Audiofrequenzbandbreite bei Codecs, die für menschliche Sprache statt für ein breites Spektrum von Klängen ausgelegt oder entsprechend konfiguriert sind. Menschliche Sprache enthält Informationen in einem breiten Frequenzbereich von unter 80 Hz bis über 10 kHz. Diese Angabe mag wenig hilfreich erscheinen, weil sie keine exakten Grenzen liefert. Menschen sind jedoch komplex, und menschliches Verhalten lässt sich nicht auf präzise Zahlen festlegen. Im herkömmlichen Schmalbandbereich der Telefonie von etwa 300 Hz bis 3,4 kHz lassen sich dennoch genügend Informationen erfassen, damit Sprache unter vielen Hörbedingungen verständlich bleibt. Eine größere Bandbreite kann die Verständlichkeit und die wahrgenommene Qualität verbessern.

Deshalb entfernen auf Sprache spezialisierte Codecs häufig zunächst Töne außerhalb eines festgelegten Bereichs. Dieser Bereich ist ihre Audiofrequenzbandbreite. G.722 entfernt beispielsweise Töne außerhalb des Bereichs von 50 Hz bis 7 kHz. So müssen von Anfang an weniger Daten kodiert werden.

Eine ausführliche Erläuterung dazu, wie Sie Bandbreite und gewünschte Qualität gegeneinander abwägen können, finden Sie unter [Psychoakustik 101](/de/docs/Web/Media/Guides/Formats/Audio_concepts#psychoacoustics_101).

## Einzelheiten zu den Codecs

Im Folgenden werden die grundlegenden Fähigkeiten und wichtigsten Einsatzgebiete der einzelnen Codecs kurz vorgestellt.

### AAC (Advanced Audio Coding)

Der Codec **Advanced Audio Coding** (**AAC**) ist Teil des MPEG-4-Standards (H.264), genauer von [MPEG-4 Part 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Part 7](https://www.iso.org/standard/43345.html). AAC wurde entwickelt, um bei höherer Audiowiedergabetreue stärker zu komprimieren als MP3. Es hat sich als beliebtes Format etabliert und ist das Standard-Audioformat für viele Medien, darunter Blu-Ray-Discs und HDTV. Auch bei Online-Anbietern wie iTunes gekaufte Musik verwendet dieses Format.

AAC bietet mehrere Profile, die Kompressionsverfahren für unterschiedliche Einsatzgebiete festlegen – von hochwertigem Surround-Sound bis zu Audio mit geringer Wiedergabetreue, das ausschließlich Sprache enthält.

Da AAC durch Patente belastet ist, lässt sich seine Unterstützung weniger zuverlässig vorhersagen. Firefox unterstützt AAC beispielsweise nur, wenn das Betriebssystem oder eine externe Bibliothek die Unterstützung bereitstellt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>Beliebig, bis zu 512 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
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
      <th scope="row">Maximale Anzahl an Audiokanälen</th>
      <td>48 (plus 16 Low-Frequency-Effects-Kanäle)</td>
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
          Aus patentrechtlichen Gründen unterstützt Firefox AAC nicht direkt.
          Stattdessen nutzt Firefox die native AAC-Unterstützung der jeweiligen
          Plattform. Diese Möglichkeit wurde auf den verschiedenen Plattformen
          mit unterschiedlichen Firefox-Versionen eingeführt:
        </p>
        <p>
          Chrome unterstützt AAC nur in MP4-Containern und ausschließlich das
          Main Profile von AAC. In Chromium-Builds ist AAC zudem nicht verfügbar.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Container</th>
      <td>MP4, ADTS, 3GP</td>
    </tr>
    <tr>
      <th scope="row">
        Mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Für das Streaming oder die Verbreitung von AAC-kodierten Inhalten ist
        keine Lizenz erforderlich; Codec-Entwickler müssen über
        <a href="https://www.via-la.com/licensing-programs/aac/">VIA Licensing</a>
        eine Patentlizenz erwerben
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein von Apple entwickelter verlustfreier Codec. Nachdem das Format zunächst geschlossen war, veröffentlichte Apple es unter einer Apache-Lizenz.

Die plattform- und browserübergreifende Unterstützung für ALAC ist begrenzt. Für den allgemeinen Einsatz ist es deshalb keine besonders gute Wahl. Wenn Sie vorwiegend Benutzer von macOS und iOS ansprechen, kann sich ALAC dennoch lohnen, da diese Betriebssysteme es integriert unterstützen. Andernfalls ist FLAC wahrscheinlich die bessere Wahl, sofern Sie einen verlustfreien Codec benötigen.

Beachten Sie allerdings, dass verlustfreie Codecs deutlich mehr Bandbreite und Speicherplatz benötigen und sich außerhalb bestimmter Einsatzgebiete möglicherweise nicht gut eignen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Abhängig vom Sample-Format, der Abtastrate und der Kompressionsstufe
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
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
      <td>n. z.</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei; bis zu 45–60 %</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl an Audiokanälen</th>
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
        Mit {{Glossary("RTP", "RTP")}} /
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

Der **[Adaptive-Multi-Rate-Audiocodec](https://voiceage.com/AMR-NB.AMR.html)** ist für die effiziente Kodierung menschlicher Sprache optimiert. Er wurde 1999 als Teil des 3GPP-Audiostandards für die Mobiltelefonie mit [GSM](https://en.wikipedia.org/wiki/GSM) und [UMTS](https://en.wikipedia.org/wiki/UMTS) standardisiert. Er verwendet einen Schmalbandalgorithmus mit mehreren Bitraten, um Audiofrequenzen bei etwa 7,4 kbps in Telefonqualität zu kodieren. Neben der Echtzeit-Telefonie kann AMR-Audio für Sprachnachrichten und andere kurze Audioaufnahmen verwendet werden.

Als Datei gespeichertes AMR-Audio kann die Dateiendung `.amr` tragen, aber auch in `.3gp`-Dateien gekapselt sein.

Da AMR auf Sprache spezialisiert ist, eignet es sich praktisch nicht für andere Inhalte – auch nicht für Audio, das ausschließlich Gesang enthält. Weil AMR den Kapazitätsbedarf minimieren soll, erfasst es außerdem nur den Teil des gesamten Frequenzbereichs menschlicher Sprache, der zum Verstehen unbedingt erforderlich ist. Die Qualität fällt entsprechend geringer aus. Wenn Sie Audio mit möglichst geringem Bedarf an Netzwerkbandbreite und/oder Speicherplatz aufnehmen möchten, kann AMR eine ausgezeichnete Wahl sein. Für eine hochwertige Wiedergabe menschlicher Sprache oder auch nur für Musikwiedergabe in geringer Qualität benötigen Sie dagegen ein anderes Format.

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
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
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
      <td>n. z.</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl an Audiokanälen</th>
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
          Der Browser Chrome unterstützt AMR nicht. ChromeOS unterstützt
          dagegen AMR-NB (Schmalband) und AMR-WB (Breitband).
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Container</th>
      <td>AMR, 3GPP</td>
    </tr>
    <tr>
      <th scope="row">
        Mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Nicht frei; Lizenzgebühren und jährliche Nutzungsgebühren fallen an.
        Einzelheiten finden Sie unter
        <a href="https://voiceage.com/Overview-lic.html"
          >Lizenzierung durch VoiceAge</a
        >
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audiocodec der [Xiph.org Foundation](https://xiph.org/). Er erzielt gute Kompressionsraten ohne Verlust an Wiedergabetreue: Das dekomprimierte Audio ist mit dem Original identisch. Da der Kompressionsalgorithmus speziell für Audio entwickelt wurde, liefert er bessere Ergebnisse als ein allgemeiner Kompressionsalgorithmus.

FLAC eignet sich gut für kleinere Audiodateien mit Soundeffekten, bei denen ein unverfälschter Klang und eine genaue Tonwiedergabe wichtig sind, sowie zur Archivierung von Musik.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>Ganzzahlen mit 4 bis 24 Bit</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        1 Hz bis 65.535 Hz (in Schritten von 1 Hz) oder 10 Hz bis 655.350 Hz
        (in Schritten von 10 Hz)
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
      <th scope="row">Maximale Anzahl an Audiokanälen</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>Gesamtes Spektrum</td>
    </tr>
    <tr>
      <th scope="row">Latenz</th>
      <td>4,3 ms bis 92 ms; typischer Durchschnitt: 46,4 ms</td>
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
        Mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und ohne Lizenzpflicht frei nutzbar</td>
    </tr>
  </tbody>
</table>

### G.711 (Pulse Code Modulation of Voice Frequencies)

Die von der Internationalen Fernmeldeunion (ITU) veröffentlichte Spezifikation **G.711** erschien 1972 und definiert eine Standard-Audiokodierung für Telefonanwendungen. Sie unterstützt Audio in Sprachqualität mit Frequenzen von 300 bis 3.400 Hz. G.711 wird häufig für Telefongespräche und Sprachnachrichten verwendet und bietet die höchste Audioqualität, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein Codec für hohe Wiedergabetreue. Stattdessen ist er darauf optimiert, einen großen Bereich von Sprachpegeln – vom Flüstern bis zum Schreien – bei guter Verständlichkeit und geringer Rechenkomplexität zu unterstützen. G.711 verwendet einen logarithmischen Companding-Algorithmus, der in einem 8-Bit-Sample einen Dynamikbereich von 14 Bit bereitstellt. Die Abtastrate beträgt 8.000 Samples pro Sekunde, entsprechend einer Bitrate von 64.000 bps.

Es gibt zwei Varianten von G.711, die sich durch die genaue mathematische Gleichung des Algorithmus unterscheiden: [µ-law](https://en.wikipedia.org/wiki/M-law), vor allem in Nordamerika und Japan verbreitet, und [A-law](https://en.wikipedia.org/wiki/A-law), im übrigen Teil der Welt üblich. Zwischen beiden Varianten besteht kein wesentlicher Qualitätsunterschied, und Audio lässt sich von einer in die andere umkodieren. Dennoch muss in jeder Wiedergabeanwendung und jedem Dateiformat angegeben werden, welche Variante verwendet wird. Wird A-law-Audio versehentlich mit dem µ-law-Algorithmus dekomprimiert, ist die Wiedergabe schlecht – und umgekehrt.

Alle [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen müssen diesen Codec unterstützen, da er einfach, leicht zu implementieren, weit verbreitet und mit allen modernen Computerplattformen weitgehend kompatibel ist.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Sample-Formate</th>
      <td>Kodiertes Audio verwendet 8 Bit pro Sample</td>
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
      <th scope="row">Maximale Anzahl an Audiokanälen</th>
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
        Mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle einschlägigen Patente sind abgelaufen; G.711 kann ohne
        Einschränkungen frei verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audio Coding)

Der von der Internationalen Fernmeldeunion (ITU) veröffentlichte Codec **G.722** wurde speziell für die Kompression von Sprache entwickelt. Seine Audiofrequenzbandbreite ist auf 50 Hz bis 7.000 Hz begrenzt und deckt damit den größten Teil des Frequenzbereichs typischer menschlicher Stimme ab. Für Audio, dessen Frequenzen außerhalb des Sprachbereichs liegen können, beispielsweise Musik, ist er deshalb wenig geeignet.

G.722-Audio wird mittels Adaptive Differential Pulse Code Modulation (ADPCM) kodiert. Dabei wird jedes Sample nicht durch seinen absoluten Wert dargestellt, sondern durch einen Wert, der die Abweichung vom vorherigen Sample angibt.

G.722 wird hauptsächlich für WebRTC-Verbindungen verwendet, da es zu den von der WebRTC-Spezifikation vorgeschriebenen Audiocodecs gehört.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        G.722: 48 kbps, 56 kbps und 64 kbps; in der Praxis werden jedoch
        immer 64 kbps verwendet<br />G.722 Annex B Super Wide-Band: 64 kbps,
        80 kbps und 96 kbps<br />G.722 Annex D Stereo Wide-Band: 64 kbps und
        80 kbps<br />G.722 Annex D Stereo Super Wide-Band: 80 kbps, 96 kbps,
        112 kbps und 128 kbps
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
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
      <th scope="row">Maximale Anzahl an Audiokanälen</th>
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
        Mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Alle einschlägigen Patente sind abgelaufen; G.722 kann ohne
        Einschränkungen frei verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den in den MPEG/MPEG-2-Standards festgelegten Audioformaten ist **MPEG-1 Audio Layer III**, besser bekannt als **[MP3](https://en.wikipedia.org/wiki/MP3)**, mit Abstand das am häufigsten verwendete und bekannteste. Der MP3-Codec ist in [MPEG-1 Part 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Part 3](https://www.iso.org/standard/26797.html) definiert. Er wurde 1991 eingeführt und 1992 fertiggestellt.

Wird Audio im MP3-Format in einem MPEG-Container gespeichert, heißt die resultierende Datei ebenfalls einfach „MP3-Datei“ oder „MP3“. Dateien mit der allgegenwärtigen Endung `.mp3` liegen in einem der weltweit am weitesten verbreiteten Audiodateiformate vor. Dieses Format trug wesentlich zur Revolution des digitalen Audios in den späten 1990er- und frühen 2000er-Jahren bei.

MP3-Audio in MPEG-1 unterstützt höhere Bit- und Abtastraten als MP3-Audio in MPEG-2-Dateien. MP3 im MPEG-1-Format eignet sich daher im Allgemeinen besser für Musik und anderes komplexes Audio, während MP3-Audio im MPEG-2-Modus für Sprache und einfachere Klänge ausreicht.

Die Patente für MP3 sind abgelaufen. Dadurch entfallen viele oder die meisten Lizenzbedenken bei der Verwendung von MP3-Dateien in Ihren Projekten. Für viele Projekte sind sie deshalb eine gute Wahl.

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
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
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
        der Frequenz der vom MPEG-1-Modus unterstützten Abtastraten)
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
      <th rowspan="2" scope="row">Maximale Anzahl an Audiokanälen</th>
      <td><strong>MPEG-1-Modus:</strong> 2 [2.0]</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2-Modus:</strong> 5 (plus 1 optionaler
        Low-Frequency-Enhancement-Kanal) [5.1]
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
        Mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        In der EU seit 2012 patentfrei, in den Vereinigten Staaten seit dem
        16. April 2017; inzwischen frei verwendbar
      </td>
    </tr>
  </tbody>
</table>

Aus patentrechtlichen Gründen unterstützte Firefox MP3 vor Version 71 nicht direkt; stattdessen nutzte er native Bibliotheken der jeweiligen Plattform. Diese Unterstützung wurde auf den verschiedenen Plattformen mit unterschiedlichen Firefox-Versionen eingeführt:

<table class="standard-table" style="margin-left: 4em; max-width: 30em">
  <caption>
    MP3-Unterstützung in Firefox über externe Bibliotheken, nach Plattform
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

Das Audioformat [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) wurde von der Xiph.org Foundation als vollständig offenes Audioformat entwickelt und von der [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Opus ist ein vielseitiger Audiocodec, der sowohl wenig komplexes Audio wie Sprache als auch Musik und andere komplexe Klänge effizient verarbeiten kann.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar in derselben Audiodatei mehr als einen Algorithmus verwenden. Der Encoder kann für jeden Audio-Frame Bitrate, Audiofrequenzbandbreite, Algorithmus und weitere Kompressionseinstellungen festlegen.

Opus ist ein vielseitig einsetzbarer Audiocodec für Webanwendungen und eignet sich für praktisch jede Audioaufgabe.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>6 kbps – 510 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
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
          Die angegebenen Abtastraten sind <em>effektive Abtastraten</em>.
          Opus verwendet einen Algorithmus, der auf Audiofrequenzbandbreiten
          statt auf Abtastraten basiert. Einzelheiten finden Sie unter
          {{RFC(6716, "", 2)}}. Außerdem enthält die Opus-Spezifikation mit
          Opus Custom einen <em>optionalen</em> Teil, der nicht standardmäßige
          Abtastraten ermöglicht. Von der Nutzung dieser Funktion wird jedoch
          abgeraten.
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
      <th scope="row">Maximale Anzahl an Audiokanälen</th>
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
          betragen kann, erlaubt Opus keine Kodierung oberhalb einer
          Audiofrequenz von 20 kHz. Das menschliche Ohr kann Frequenzen
          oberhalb von 20 kHz ohnehin nicht wahrnehmen. Dadurch werden
          kodierte Audiodaten eingespart.
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
        Mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und ohne Lizenzpflicht frei nutzbar</td>
    </tr>
  </tbody>
</table>

### Vorbis

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format der [Xiph.org Foundation](https://xiph.org/). Es unterstützt zahlreiche Kanalkonfigurationen, darunter Mono, Stereo, Polyphonie, Quadrophonie, 5.1-Surround, Ambisonics und bis zu 255 einzelne Audiokanäle. Je nach der beim Kodieren gewählten Qualitätseinstellung kann die resultierende Bitrate zwischen ungefähr 45 kbps und 500 kbps liegen. Vorbis verwendet grundsätzlich eine variable Bitrate: Sie kann sich während der Kompression nach Bedarf von einem Sample zum nächsten ändern.

Bei ähnlicher Qualität ist Vorbis hinsichtlich Dateigröße und Bitrate im Allgemeinen effizienter als MP3. Zusammen mit seiner freien und offenen Lizenz macht das Vorbis zu einer guten Wahl für viele Arten von Audiodaten, sofern die hohe Latenz kein Problem darstellt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>45 kbps – 500 kbps</td>
    </tr>
    <tr>
      <th scope="row">Unterstützung variabler Bitraten (VBR)</th>
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
        192 kbps bei 48 kHz; dies wird üblicherweise mit einer Qualitätsstufe
        von 6 bis 8 erreicht.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet</td>
    </tr>
    <tr>
      <th scope="row">Maximale Anzahl an Audiokanälen</th>
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
        Mit {{Glossary("RTP", "RTP")}} /
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> kompatibel
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Vollständig offen und ohne Lizenzpflicht frei nutzbar</td>
    </tr>
  </tbody>
</table>

## Einen Audiocodec auswählen

Solange Sie keinen Codec wählen, der speziell für eine völlig andere Art von Quellaudio entwickelt wurde, wird fast jeder Codec die Aufgabe grundsätzlich erfüllen – auch wenn er nicht die beste Wahl ist. Ein reiner Sprachcodec liefert beispielsweise keine brauchbaren Ergebnisse für Musik.

Manche Codecs schränken allerdings die Kompatibilität ein, und einige eignen sich besser für Ihre Anforderungen als andere. Die folgenden Hinweise helfen Ihnen bei der Auswahl.

Berücksichtigen Sie zunächst diese Fragen:

- Soll das kodierte Audio später abgemischt oder erneut komprimiert werden? Vermeiden Sie dann verlustbehaftete Kompression, da sich die Verluste bei erneuter Kompression verstärken. Verwenden Sie andernfalls zumindest so wenig Kompression wie möglich.
- Muss das Audio in einem bestimmten Dateityp gespeichert werden? Mediencontainer unterstützen üblicherweise nur eine bestimmte Auswahl der verfügbaren Codecs.
- Welche Audioinhalte soll der Codec verarbeiten? Manche Codecs wurden speziell für Sprache entwickelt und nutzen deren geringeren benötigten Frequenzbereich. Andere können aufgrund ihres Algorithmus bei bestimmten Musikrichtungen schlechtere Ergebnisse liefern.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften bietet der jeweilige Codec, und machen sie ihn zu einer guten oder schlechten Wahl?
- Wie wichtig ist eine geringe Latenz für Ihren Anwendungsfall? Wenn der Ton sehr genau zeitlich abgestimmt sein muss, ist eine möglichst geringe Latenz besser.
- Wie stark müssen Sie die Daten komprimieren?

Einige typische Szenarien verdeutlichen die Entscheidungsfindung.

### Beispiel: Musik zum Streamen

Für Musikstreaming sollten Sie einen Codec wählen, der möglichst wenig Bandbreite benötigt und dabei durch die Kompression möglichst wenige Artefakte erzeugt. Die Musik darf nicht schneller heruntergeladen werden müssen, als die verfügbare Netzwerkbandbreite zulässt. Idealerweise bleibt zudem Spielraum für Schwankungen der Netzwerkgeschwindigkeit und für andere Anwendungen, die das Netzwerk nutzen.

Sofern verlustfreie Kompression nicht ausdrücklich erforderlich ist oder eine ausreichend hohe Netzwerkbandbreite garantiert werden kann, ist verlustbehaftete Kompression eine gute Wahl. Welches Verfahren Sie verwenden, hängt von der Browser-Kompatibilität und den besonderen Funktionen ab, die Sie möglicherweise benötigen.

Beim Musikstreaming ist die Latenz _gewöhnlich_ nicht besonders wichtig. Ausnahmen sind beispielsweise Musikschleifen, die wiederholt ohne Unterbrechung abgespielt werden müssen, oder Titel, die lückenlos aufeinanderfolgen sollen. Das kann besonders bei klassischer Musik, Theater-Soundtracks und Hintergrundmusik während eines Spiels wichtig sein.

Für die allgemeine Musikwiedergabe kommen vor allem MP3, AAC und Vorbis infrage.

- AAC in einem MP4-Container wird von allen wichtigen Browsern unterstützt und ist daher eine gute Wahl.
- Vorbis wird fast immer in Ogg-Dateien verwendet, doch Ogg-Container werden nicht überall unterstützt. Selbst Microsoft Edge, das Vorbis unterstützt, unterstützt Ogg-Container bislang nicht.
- MP3 (MPEG-1 Audio Layer III) wird von allen wichtigen Browsern unterstützt. Es handelt sich dabei um MPEG-1-Dateien mit einer Audio-Layer-III-Spur.

Wenn Sie die Latenz bei der Musikwiedergabe minimieren müssen, sollten Sie Opus in Betracht ziehen. Unter den universell einsetzbaren Codecs bietet es die niedrigsten Latenzwerte: 5 ms bis 66,5 ms gegenüber mindestens 100 ms bei den anderen.

> [!NOTE]
> Die hier beschriebenen Kompatibilitätsangaben waren zum Zeitpunkt der Erstellung dieses Artikels im Allgemeinen korrekt; es kann jedoch Einschränkungen und Ausnahmen geben. Prüfen Sie die Kompatibilitätstabellen, bevor Sie sich für ein Medienformat entscheiden.

Wenn Sie nur ein Audioformat unterstützen können, ist AAC auf dieser Grundlage wahrscheinlich die beste Wahl. Können Sie mehrere Formate anbieten, etwa mithilfe des Elements {{HTMLElement("source")}} innerhalb Ihrer Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}, lassen sich viele oder alle dieser Ausnahmen umgehen.

### Beispiel: Musik zum Herunterladen

Musik, die Benutzer herunterladen, kann zu größeren Dateien komprimiert werden als gestreamte Musik. Anders als beim Streaming spielt es keine Rolle, ob der Download langsamer ist als die Wiedergabe. Sie können daher eine verlustbehaftete Kompression mit höherer Bitrate erwägen. Sie erzeugt größere Dateien, aber geringere Qualitätseinbußen. Alternativ können Sie ein verlustfreies Format wählen. Die Entscheidung hängt vor allem von den Anforderungen Ihrer Anwendung und den Vorlieben Ihrer Benutzer ab.

Ein Musikdownload-Dienst könnte Titel je nach Benutzervorliebe beispielsweise als MP3-Dateien mit 128 kbps, als AAC-Dateien mit 256 kbps in MP4-Containern oder als FLAC-Dateien anbieten. Müssen Sie sich auf ein Format beschränken, wählen Sie eines, das zu Ihren Anforderungen und den herunterzuladenden Audioinhalten passt.

MP3 ist das am häufigsten für Musik verwendete Format. Wählen Sie nach Möglichkeit eine Bitrate von mindestens 192 kbps. Der iTunes Store vertreibt Musik dagegen im AAC-Format mit 256 kbps.

### Beispiel: Sprachaufnahme und -wiedergabe

Die besonderen Eigenschaften menschlicher Sprache ermöglichen es spezialisierten Sprachcodecs, Audio effizient zu komprimieren. Sie können die Struktur der Sprache nutzen und die Audiofrequenzbandbreite begrenzen. Zwar hören Menschen Frequenzen von ungefähr 20 Hz bis 20.000 Hz, doch viele der zum Sprachverständnis benötigten Informationen liegen zwischen etwa 300 Hz und 3.400 Hz. Schmalband-Sprachcodecs verwerfen Frequenzen außerhalb ihres unterstützten Bereichs, was zulasten der Verständlichkeit und der wahrgenommenen Qualität gehen kann. Weitere Informationen finden Sie unter [Psychoakustik 101](/de/docs/Web/Media/Guides/Formats/Audio_concepts#psychoacoustics_101).

Die hier behandelten Sprachcodecs sind jedoch verlustbehaftet. Alle Informationen in Frequenzbereichen außerhalb der erfassten Audiofrequenzbandbreite gehen verloren. Für Anwendungen, die Musik mit hoher Wiedergabetreue benötigen, können diese Codecs daher ungeeignet sein. Selbst Audio, das ausschließlich Stimmen enthält, wird in diesen Formaten wahrscheinlich keine akzeptable Qualität erreichen, wenn es sich um Gesang statt um Sprache handelt.

Sprachaufnahme und -wiedergabe benötigen üblicherweise eine geringe Latenz, um mit Videospuren synchron zu bleiben oder Übersprechen und andere Probleme zu vermeiden. Glücklicherweise gehen die Eigenschaften, die Sprachcodecs besonders speichereffizient machen, meist auch mit einer sehr geringen Latenz einher. Wenn Sie mit WebRTC arbeiten, hat [G.722](#g.722_64_kbps_7_khz_audio_coding) beispielsweise eine Latenz von 4 ms, gegenüber mehr als 100 ms bei MP3. Die Latenz von [AMR](#amr_adaptive_multi-rate) beträgt ungefähr 25 ms.

> [!NOTE]
> Weitere Informationen zu WebRTC und den verwendbaren Codecs finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

Die im Web gebräuchlichen Codecs für die ausschließliche Kodierung von Sprache sind G.722 und AMR. AMR ist ein Schmalband-Codec, der nur Frequenzen zwischen 200 Hz und 3.400 Hz bei Bitraten von üblicherweise etwa 7,4 kbps kodiert. G.722 ist dagegen ein Breitband-Codec, der die Audiofrequenzbandbreite bei deutlich höheren Bitraten – gewöhnlich 64 kbps – auf 50 Hz bis 7.000 Hz erweitert.

Wenn Ihnen viel Netzwerkbandbreite zur Verfügung steht und Sie davon ausgehen können, dass dies auch für Ihre Benutzer gilt, ist G.722 die bessere Wahl. Wählen Sie AMR, wenn Sie bei begrenzten Ressourcen möglichst wenig Speicherplatz und Netzwerkbandbreite benötigen.

### Beispiel: Audioclips für professionelles Abmischen

Wenn Audio später gemischt oder erneut abgemischt werden soll, möchten Sie beim Komprimieren üblicherweise gar keine oder nahezu keine Einbußen bei der Wiedergabetreue. Dafür bietet sich ein verlustfreier Codec an. Da verlustfreie Kodierung jedoch wesentlich schwächer komprimiert als verlustbehaftete, müssen Sie sich bei großen Quelldateien möglicherweise trotzdem für einen verlustbehafteten Encoder entscheiden – insbesondere im Web, wo Sie die Downloadgeschwindigkeit der Medien nicht kontrollieren können.

Nehmen wir an, verlustfreie Kompression sei hier die beste Option, was bei kleinen Audiodateien üblicherweise der Fall ist. Aus Codec-Sicht kommen vor allem [FLAC](https://en.wikipedia.org/wiki/FLAC), [Apple Lossless (ALA](https://en.wikipedia.org/wiki/Apple_Lossless) und [MPEG-4 ALS](https://en.wikipedia.org/wiki/Audio_Lossless_Coding) infrage. Die Wahl hängt von der Browserunterstützung und den unterstützten Mediencontainerformaten ab.

Für dieses Beispiel nehmen wir an, alle Browser unterstützten dieselben Codecs und Container wie Firefox – obwohl das in Wirklichkeit keineswegs zutrifft. Berücksichtigen Sie bei Ihren eigenen Entscheidungen die tatsächliche Verbreitung der Unterstützung.

- Firefox unterstützt FLAC in nativen FLAC-Containern sowie in Ogg- und MPEG-4-Dateien (MP4).
- Firefox unterstützt Apple Lossless nur über die plattformspezifische QuickTime-Unterstützung.
- Firefox unterstützt MP4 ALS nicht.

In diesem Fall ist FLAC wahrscheinlich die beste Wahl; ALAC wird von Browsern kaum oder gar nicht direkt unterstützt.

## Software zur Audiokodierung

Für die Audiokodierung stehen viele Werkzeuge zur Verfügung. Die einfachsten dienen dazu, CDs auszulesen oder Audiodateien einzulesen und sie schnell und automatisch in MP3 oder AAC umzuwandeln, um sie in einer Mediathek zu speichern. Ein Beispiel ist [iTunes](https://www.apple.com/itunes/). Bei der Entwicklung von Webanwendungen, die Audio als Bestandteil nutzen – etwa Spielen –, benötigen Sie jedoch mehr Kontrolle über den Kodierungsvorgang und mehr Auswahlmöglichkeiten für das Format.

Einige beliebte Optionen:

- [FFmpeg](https://ffmpeg.org/)
  - : FFmpeg ist wohl eines der bekanntesten und angesehensten verfügbaren Open-Source-Codec-Pakete. Es unterstützt die meisten gängigen Audioformate und stellt Kommandozeilenwerkzeuge und Bibliotheken bereit, mit denen sich Audio und Video kodieren, dekodieren und zwischen Formaten umwandeln lassen. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Handbrake](https://handbrake.fr/)
  - : Ein sehr beliebtes Open-Source-Frontend für FFmpeg. Es ergänzt eine grafische Benutzeroberfläche, mit der sich die zahlreichen Optionen von FFmpeg beim Kodieren von Audio und/oder Video wesentlich leichter steuern lassen. Binärdateien sind für macOS, Linux und Windows verfügbar.
- [Audacity](https://www.audacityteam.org/)
  - : Ein Open-Source-Audioeditor, mit dem sich Audiodaten aus vielen Formaten laden, bearbeiten, filtern und anpassen und anschließend im ursprünglichen oder in einem neuen Format speichern lassen. Verfügbar für macOS, Linux und Windows.
- [LAME](https://lame.sourceforge.io/)
  - : Ein hochwertiger Open-Source-MP3-Encoder, der CBR-, ABR- und VBR-Kodierung sowie viele weitere Optionen unterstützt. Das LAME-Projekt stellt ihn nur als Quellcode bereit; er kann jedoch über [Homebrew](https://brew.sh/) oder ähnliche Werkzeuge installiert werden.

## Siehe auch

- [Mediencontainerformate](/de/docs/Web/Media/Guides/Formats/Containers)
- Die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Leitfaden zu Web-Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

---
title: Web Audio Codec Leitfaden
slug: Web/Media/Formats/Audio_codecs
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Selbst bescheidene Qualität und hochauflösender Stereoton können eine beträchtliche Menge an Speicherplatz beanspruchen. Für Webentwickler ist der noch größere Punkt die erforderliche Netzwerkbandbreite, um Audio zu übertragen, sei es für Streaming oder zum Herunterladen zur Nutzung während des Spiels. Die Verarbeitung von Audiodaten zum Kodieren und Dekodieren wird von einem Audio-**{{Glossary("codec", "Codec")}}** (**CO**der/**DEC**oder) durchgeführt. In diesem Artikel betrachten wir Audio-Codecs, die im Web zum Komprimieren und Dekomprimieren von Audio verwendet werden, welche Fähigkeiten und Anwendungsfälle sie haben, und bieten Leitlinien bei der Auswahl von Audio-Codecs für Ihre Inhalte.

Zusätzlich verwenden WebRTC-Implementierungen im Allgemeinen eine Teilmenge dieser Codecs zum Kodieren und Dekodieren von Medien und können auch zusätzliche Codecs unterstützen, um eine optimale plattformübergreifende Unterstützung für Video- und Audiokonferenzen zu gewährleisten und um besser mit Legacy-Telekommunikationslösungen zu integrieren. Details finden Sie unter [Codecs verwendet von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

Informationen zu den grundlegenden Konzepten, wie digitale Audiodateien funktionieren, finden Sie im Artikel [Konzepte der digitalen Audiodaten](/de/docs/Web/Media/Formats/Audio_concepts).

## Häufige Codecs

Die folgende Liste zeigt die am häufigsten im Web verwendeten Codecs und welche Container (Dateitypen) sie unterstützen. Wenn Sie nur wissen müssen, welche Codecs überhaupt verwendet werden können, ist dies das Richtige für Sie. Natürlich können einzelne Browser entscheiden, ob sie all diese Codecs unterstützen oder nicht, und ihre Unterstützung dafür, welche Typen von Containern verwendet werden können, kann ebenfalls variieren. Darüber hinaus können Browser wählen, zusätzliche Codecs zu unterstützen, die nicht in dieser Liste enthalten sind.

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
        <a href="/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#adts">ADTS</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/de/docs/Web/Media/Formats/Containers#3gp">3GP</a>
        <p>
          Wenn MPEG-1 Audio Layer III Codec-Daten in einer MPEG-Datei gespeichert sind und es keine Videospur in der Datei gibt, wird die Datei typischerweise als MP3-Datei bezeichnet, obwohl es sich immer noch um eine MPEG-Formatdatei handelt.
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

## Faktoren, die das codierte Audio beeinflussen

Es gibt zwei allgemeine Kategorien von Faktoren, die das codierte Audio beeinflussen, das von einem Audio-Codec-Kodierer ausgegeben wird: Details über das Format und den Inhalt der Quelldatei sowie den Codec und seine Konfiguration während des Kodierungsprozesses.

Für jeden Faktor, der das codierte Audio beeinflusst, gibt es eine einfache Regel, die nahezu immer zutrifft: Da die Wiedergabetreue der digitalen Audiodatei durch die Granularität und Genauigkeit der Abtastungen bestimmt wird, die für die Umwandlung in einen Datenstrom genommen werden, gilt, je mehr Daten verwendet werden, um die digitale Version des Audios darzustellen, desto näher wird sich der gesampelte Ton dem Quellmaterial annähern.

### Die Auswirkung des Quell-Audioformats auf die codierte Audioausgabe

Da codiertes Audio inhärent weniger Bits verwendet, um jede Abtastung darzustellen, kann das Quell-Audioformat tatsächlich einen geringeren Einfluss auf die Größe des codierten Audios haben, als man erwarten könnte. Es gibt jedoch eine Reihe von Faktoren, die trotzdem die Qualität und Größe des codierten Audios beeinflussen. Die folgende Tabelle listet einige wichtige Faktoren des Quell-Audio-Dateiformats auf und deren Einfluss auf das codierte Audio.

<table class="standard-table">
  <caption>
    Die Auswirkung des Quell-Audioformats und -inhalts auf die Qualität und Größe des codierten Audios
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Einfluss auf die Qualität</th>
      <th scope="col">Einfluss auf die Größe</th>
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
        Jeder Kanal kann die Größe des codierten Audios erheblich erhöhen, abhängig von den Inhalten und den Encoder-Einstellungen.
      </td>
    </tr>
    <tr>
      <th scope="row">Rauschen / Zischen</th>
      <td>
Ungewolltes Hintergrundrauschen oder Zischen tendiert dazu, die Audioqualität sowohl direkt (durch Maskierung der Details des Vordergrund-Audios) als auch indirekt (durch Komplizieren der Audiowellenform und dadurch schwierigeres Verkleinern bei gleichzeitiger Beibehaltung der Genauigkeit) zu verringern.
      </td>
      <td>
        Zischen, statisches Rauschen oder Hintergrundrauschen erhöhen die Audiokomplexität, was im Allgemeinen die Menge an möglicher Komprimierung verringert.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/Media/Formats/Audio_concepts#sampling_audio"
          >Abtastrate</a
        >
      </th>
      <td>
Je mehr Abtastungen pro Sekunde verfügbar sind, desto höher ist die resultierende Wiedergabetreue des codierten Audios wahrscheinlich.
      </td>
      <td>
        Eine Erhöhung der Abtastrate vergrößert die Größe der codierten Audiodatei.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#audio_data_format_and_structure"
          >Abtastgröße</a
        >
      </th>
      <td>
        Je größer die Abtastungen, desto mehr Details kann jede Abtastung enthalten, was zu einer genaueren Darstellung jeder Abtastung führt.
      </td>
      <td>
        Abhängig vom Codec; Codecs haben typischerweise ein internes Abtastformat, das möglicherweise oder möglicherweise nicht der ursprünglichen Abtastgröße entspricht. Aber mehr Quelldetails können die codierte Datei größer machen; sie wird niemals kleiner werden.
      </td>
    </tr>
  </tbody>
</table>

Natürlich können diese Effekte durch Entscheidungen, die während der Kodierung des Audios getroffen werden, geändert werden. Wenn der Codec zum Beispiel so konfiguriert ist, dass die Abtastrate reduziert wird, wird der Einfluss der Abtastrate auf die Ausgabedatei entsprechend verringert.

Weitere Informationen zu diesen und anderen Merkmalen von Audiodaten finden Sie unter [Audio Datenformat und Struktur](/de/docs/Web/Media/Formats/Audio_concepts#audio_data_format_and_structure).

### Die Auswirkung der Codec-Konfiguration auf die codierte Audioausgabe

Audio-Codec verwenden normalerweise intelligent gestaltete und hoch komplexe mathematische Algorithmen, um Quell-Audiodaten zu nehmen und sie zu komprimieren, um erheblich weniger Platz im Speicher oder Bandbreite zu beanspruchen. Zusätzlich zur Auswahl des zu verwendenden Kodierertyps können Sie möglicherweise den Kodierer mit Parametern anpassen, die bestimmte Algorithmen auswählen, diese Algorithmen anpassen und angeben, wie viele Durchläufe beim Kodieren durchgeführt werden sollen.

<table class="standard-table">
  <caption>
    Effekte der Audio-Encoder-Konfiguration auf Qualität und Größe
  </caption>
  <thead>
    <tr>
      <th scope="row">Merkmal</th>
      <th scope="col">Einfluss auf die Qualität</th>
      <th scope="col">Einfluss auf die Größe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Lossless-Kompression</a
        >
      </th>
      <td>Kein Verlust an Wiedergabetreue</td>
      <td>Wahrscheinlich erreicht man nicht mehr als 40-50% Kompression</td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#lossy_vs._lossless_compression"
          >Lossy-Kompression</a
        >
      </th>
      <td>
        Immer ein gewisser Verlust an Wiedergabetreue; je höher die Kompression, desto höher der Verlust
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
        Je höher die Bitrate, desto größer ist wahrscheinlich die codierte Datei
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#audio_frequency_bandwidth"
          >Audiofrequenzband</a
        >
      </th>
      <td>
        Wenn es im entfernten Frequenzband(n) irgendein Audio gibt, kann es zu einem merklichen Verlust an Wiedergabetreue kommen
      </td>
      <td>
        Frequenzbänder zu entfernen bedeutet weniger Daten zum Kodieren, daher kleinere kodierte Dateien
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
          >Mittel-Seiten-Stereo-Codierung</a
        >
        beeinflussen die Qualität nicht;
        <a
          href="/de/docs/Web/Media/Formats/Audio_concepts#intensity_stereo_coding"
          >Intensitäts-Stereo-Codierung</a
        >
        führt jedoch zu einem Verlust von Details.
      </td>
      <td>
Gemeinsames Stereo kann die Größe des codierten Audios in gewissem Maße reduzieren
      </td>
    </tr>
  </tbody>
</table>

Die verfügbaren Parameter – und der Bereich möglicher Werte – variieren von Codec zu Codec und sogar zwischen verschiedenen Kodier-Utilities für denselben Codec, daher lesen Sie die Dokumentation, die mit der von Ihnen verwendeten Kodiersoftware kommt, um mehr darüber zu erfahren.

### Merkmale, die die Größe des codierten Audios beeinflussen

Mehrere Faktoren beeinflussen die Größe des codierten Audios. Einige davon sind eine Frage der Form der Quell-Audiodatei; andere stehen im Zusammenhang mit Entscheidungen, die während der Kodierung des Audios getroffen wurden.

#### Lossless- versus Lossy-Codecs

Es gibt zwei grundlegende Kategorien der Audiokompression. **Lossless**-Kompressionsalgorithmen reduzieren die Größe der Audiodatei, ohne die Qualität oder Wiedergabetreue des Tons zu beeinträchtigen. Beim Dekodieren von Audio, das mit einem verlustfreien Codec wie [FLAC](#flac_free_lossless_audio_codec) oder [ALAC](#alac_apple_lossless_audio_codec) komprimiert wurde, ist das Ergebnis in jeder Weise identisch mit dem Originalton bis auf das Bit.

**Lossy**-Codecs hingegen nutzen aus, dass das menschliche Ohr kein perfekter Interpretator von Audio ist und dass das menschliche Gehirn in der Lage ist, die wichtigen Informationen aus den unvollständigen oder lauten Audiotechnik herauszufiltern. Sie entfernen Audiofrequenzen, die weniger genutzt werden, tolerieren die Ungenauigkeit in der dekodierten Ausgabe und verwenden andere Methoden, um Audioinhalte, Qualität und Wiedergabetreue zu verlieren, um kleinere codierte Medien zu erzeugen. Beim Dekodieren ist die Ausgabe in variierendem Maße immer noch verständlich. Der spezifische verwendete Codec und die gewählte Kompressionskonfiguration entscheiden, wie nah an der ursprünglichen, unkomprimierten Audioausgabe das Signal beim Hören durch das menschliche Ohr zu sein scheint.

Aufgrund der Unterschiede, wie verlustbehaftete Codecs im Vergleich zu verlustfreien arbeiten, insbesondere, dass verlustfreie Codecs viel vorsichtiger mit ihrer Kompression sein müssen, ergibt sich aus verlustbehafteten Codecs fast immer deutlich kleineres komprimiertes Audio als aus verlustfreien Codecs.

Im Allgemeinen sind die häufigsten Gründe für die Wahl verlustfreier Audiodateien, dass Sie Archivqualität benötigen oder dass die Audiodatei neu gemischt und erneut komprimiert wird und Sie die Verstärkung von Artefakten in der Audiodatei durch erneute Kompression vermeiden möchten. Für das Echtzeit-Streaming von Audio ist normalerweise ein verlustbehafteter Codec erforderlich, um sicherzustellen, dass der Datenfluss mit der Audio-Wiedergabegeschwindigkeit mithalten kann, unabhängig von der Netzwerkleistung.

### Maximale Anzahl an Kanälen

Das Audio, das an jeden Lautsprecher in einem Soundsystem geliefert wird, wird von einem Audiokanal in einem Stream bereitgestellt. Mono-Ton ist ein einzelner Kanal. Stereo-Ton sind zwei. 5.1 Surround-Sound hat fünf Audiokanäle, plus ein **Low Frequency Enhancement** (**LFE**)-Kanal.

LFE-Kanäle sind spezifisch gestaltet, um tieffrequente Audiodaten zu speichern und werden zum Beispiel häufig verwendet, um Audiodaten für Subwoofer bereitzustellen. Wenn Sie die Anzahl der Audiokanäle in der Form X.Y schreiben sehen (wie 2.1 oder 5.1), steht die Zahl nach dem Dezimalkomma, Y, für die Anzahl der LFE-Kanäle. Beispielsweise unterstützt MP3 einen LFE-Kanal, während AAC bis zu 16 unterstützt.

Neben der Bereitstellung von Audio für spezifische Lautsprecher in einem Soundsystem kann es einigen Codecs erlaubt sein, Audiokanäle für alternative Audiodateien zu verwenden, wie z.B. Gesang in verschiedenen Sprachen oder beschreibendes Audio für sehbehinderte Personen.

### Audiofrequenzbandbreite

Die **Audiofrequenzbandbreite** eines Codecs bezeichnet den Bereich von Audiofrequenzen, die durch den Codec dargestellt werden können. Einige Codecs arbeiten gezielt, indem sie Audio eliminieren, das außerhalb eines bestimmten Frequenzbereichs liegt. Es gibt eine Korrelation zwischen der Abtastrate und der maximalen Schallfrequenz, die durch eine Wellenform dargestellt werden kann, die von einem Codec dargestellt wird. Auf theoretischer Ebene ist die maximale Frequenz, die ein Codec darstellen kann, die Abtastrate geteilt durch zwei; diese Frequenz wird als [Nyquist-Frequenz](https://de.wikipedia.org/wiki/Nyquist-Frequenz) bezeichnet. In Wirklichkeit ist das Maximum etwas niedriger, aber es ist nahe.

Die Audiofrequenzbandbreite spielt besonders lebhaft mit, wenn ein Codec entworfen oder konfiguriert wird, um menschliche Sprache statt eines breiten Bereichs von Tönen darzustellen. Menschliche Sprache befindet sich allgemein im Audiofrequenzbereich von 300 Hz bis 18 kHz. Die überwiegende Mehrheit der menschlichen Stimmen existieren jedoch im Bereich von 300 Hz bis 8 kHz und Sie können genug menschlicher Stimmen im Frequenzbereich von 500 Hz bis 3 kHz erfassen, um immer noch verständlich zu sein.

Aus diesem Grund beginnen sprachspezifische Codecs oft damit, Geräusche zu entfernen, die außerhalb eines festgelegten Bereichs liegen. Dieser Bereich ist die Audiofrequenzbandbreite. G.722 beispielsweise entfernt Geräusche außerhalb der Audiofrequenzbandbreite von 50 Hz bis 7 kHz. Dadurch wird die Menge der zu kodierenden Daten von Anfang an reduziert.

## Codec-Details

Im Folgenden geben wir einen kurzen Überblick über jeden dieser Codecs, ihre grundlegenden Fähigkeiten und ihre Haupteinsatzszenarien.

### AAC (Advanced Audio Coding)

Der **Advanced Audio Coding** (**AAC**) Codec ist als Teil des MPEG-4 (H.264)-Standards definiert; speziell im [MPEG-4 Teil 3](https://www.iso.org/standard/53943.html) und [MPEG-2 Teil 7](https://www.iso.org/standard/43345.html). Er wurde entwickelt, um mehr Kompression bei höherer Audio-Wiedergabetreue als MP3 zu bieten, AAC ist eine beliebte Wahl geworden und ist das Standardformat für Audio in vielen Medientypen, einschließlich Blu-Ray Discs und HDTV, sowie das Format für Songs, die bei Online-Händlern wie iTunes gekauft werden.

AAC hat eine Reihe von Profilen, die Methoden zur Komprimierung von Audio für spezifische Anwendungen definieren, einschließlich allem, von hochwertigem Surround-Sound bis hin zu niedriger Auflösung für ausschließlich Sprachgebrauch.

Als patentgeschütztes Format ist der AAC-Support etwas weniger vorhersehbar. Zum Beispiel unterstützt Firefox AAC nur, wenn Unterstützung durch das Betriebssystem oder eine externe Bibliothek bereitgestellt wird.

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
      <th scope="row">Empfohlene Mindest-Bitrate für Stereo-Sound</th>
      <td>96 kbps bei einer Abtastrate von 48 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Lossy</td>
    </tr>
    <tr>
      <th scope="row">Maximale Audiokanäle</th>
      <td>48 (plus 16 Low Frequency Enhancement Kanäle)</td>
    </tr>
    <tr>
      <th scope="row">Audiofrequenzbandbreite</th>
      <td>
        0 Hz - 96 kHz (Standard-Audiokanäle)<br />0 Hz - 120 Hz (LFE
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
          Aufgrund von Patentproblemen unterstützt Firefox AAC nicht direkt. Stattdessen verlässt sich Firefox auf die native Unterstützung der Plattform für AAC. Diese Fähigkeit wurde auf jeder Plattform in unterschiedlichen Firefox-Versionen eingeführt:
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
        Für Streaming oder die Verteilung von AAC-codierten Inhalten: keine Lizenz erforderlich; Entwickler von Codecs sind verpflichtet, eine Patentlizenz durch
        <a href="https://www.via-la.com/licensing-2/aac/">VIA Licensing</a> zu erhalten.
      </td>
    </tr>
  </tbody>
</table>

### ALAC (Apple Lossless Audio Codec)

Der **Apple Lossless Audio Codec** (**ALAC** oder **Apple Lossless**) ist ein verlustfreier Codec, der von Apple entwickelt wurde. Nach anfänglicher Geschlossenheit wurde er unter einer Apache-Lizenz geöffnet.

Plattformübergreifende und Browser-Unterstützung für ALAC ist nicht sehr stark, was ihn zu einer weniger idealen Wahl für den allgemeinen Gebrauch macht. Wenn Ihr Ziel jedoch hauptsächlich macOS- und iOS-Benutzer sind, kann es sich lohnen, in Erwägung zu ziehen, da die Betriebssysteme eine integrierte Unterstützung für ALAC haben. Ansonsten ist FLAC wahrscheinlich eine bessere Wahl, wenn Sie einen verlustfreien Codec verwenden müssen.

Bedenken Sie jedoch, dass verlustfreie Codecs erheblich mehr Bandbreite und Speicherkapazität erfordern und möglicherweise außerhalb sehr spezifischer Anwendungsfälle keine gute Wahl sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>
        Abhängig von der Abtastform und -rate sowie dem Kompressionsgrad
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Bitrate (VBR) Unterstützung</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastformate</th>
      <td>16-Bit-, 20-Bit-, 24-Bit- und 32-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>1 Hz bis 384.000 Hz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindest-Bitrate für Stereo-Sound</th>
      <td>k. A.</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Lossless; bis zu 45-60%</td>
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
        Open License (Apache License 2.0);
        <a href="https://github.com/macosforge/alac"
          >Quellcode verfügbar auf GitHub</a
        >
      </td>
    </tr>
  </tbody>
</table>

### AMR (Adaptive Multi-Rate)

Der **[Adaptive Multi-Rate Audio Codec](https://voiceage.com/AMR-NB.AMR.html)** ist für die effiziente Kodierung menschlicher Sprache optimiert. Er wurde 1999 als Teil des 3GPP-Audiostandards standardisiert, der sowohl für die [GSM](https://de.wikipedia.org/wiki/GSM)- als auch die [UMTS](https://de.wikipedia.org/wiki/UMTS)-Mobiltelefonie verwendet wird, und verwendet einen schmalbandigen Mehrfrequenz-Algorithmus, um Audiofrequenzen auf telefontauglichem Qualitätsniveau bei rund 7,4 kbps zu kodieren. AMR-Audio kann neben der Echtzeittelefonie auch für Voicemail und andere kurze Audioaufnahmen verwendet werden.

AMR-Audio, das in Dateien gespeichert ist, kann mit `.amr` getypt sein, aber auch in `.3gp`-Dateien gekapselt werden.

Als sprachspezifischer Codec ist AMR grundsätzlich für alle anderen Inhalte unbrauchbar, einschließlich Audio, das nur singende Stimmen enthält. Da AMR jedoch darauf ausgelegt ist, Kapazitätsanforderungen zu minimieren, erfasst es nur den Teil des vollständigen Audiofrequenzbereichs der menschlichen Sprache, der absolut notwendig ist, um zu verstehen, was gesagt wird, sodass die Qualität entsprechend reduziert ist. Wenn Sie die Fähigkeit benötigen, Audio mit minimalem Einfluss auf Netzwerk- und/oder Speicherkapazitäten aufzunehmen, kann AMR eine großartige Wahl sein. Wenn Sie jedoch eine hochauflösende Wiedergabe der menschlichen Sprache oder sogar eine minderwertige Musikreproduktion benötigen, müssen Sie ein anderes Format wählen.

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Bitraten</th>
      <td>
        <strong>Halbe Rate (HR) und Volle Rate (FR):</strong> 1,8 kbps, 4,75 kbps, 5,15 kbps, 5,9 kbps, 6,7 kbps, 7,4 kbps, 7,95 kbps
      </td>
    </tr>
    <tr>
      <td><strong>Nur Volle Rate (FR):</strong> 10,2 kbps und 12,2 kbps</td>
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
      <th scope="row">Empfohlene Mindest-Bitrate für Stereo-Sound</th>
      <td>k. A.</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Lossy</td>
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
          Während der Chrome-Browser AMR nicht unterstützt, unterstützt ChromeOS AMR-NB (schmalbandig) und AMR-WB (breitbandig).
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
        Nicht frei; Lizenzgebühren und jährliche Tantiemen fallen an. Siehe
        <a href="https://voiceage.com/Overview-lic.html"
          >VoiceAge-Lizenzierung</a
        >
        für Details.
      </td>
    </tr>
  </tbody>
</table>

### FLAC (Free Lossless Audio Codec)

**FLAC** (**Free Lossless Audio Codec**) ist ein verlustfreier Audio-Codec, der von der [Xiph.org Foundation](https://xiph.org/) veröffentlicht wurde. Er bietet gute Komprimierungsraten ohne Verlust der Audio-Wiedergabetreue; das heißt, das dekomprimierte Audio ist mit dem Original identisch. Da der Komprimierungsalgorithmus speziell für Audio entwickelt wurde, erzielt er bessere Ergebnisse als die Verwendung eines allgemein verwendeten Komprimierungsalgorithmus.

FLAC ist eine großartige Wahl für kleinere Audiodateien, bei denen eine tadellose Qualität und tonale Genauigkeit gewünscht sind, sowie für die Archivierung von Musik.

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
      <td>4-Bit- bis 24-Bit-Integer</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>
        1 Hz bis 65.535 Hz (in 1 Hz Schritten) oder 10 Hz bis 655.350 Hz in 10 Hz
        Schritten
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindest-Bitrate für Stereo-Sound</th>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Lossless; bis zu 40-50% Größenreduzierung</td>
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
      <td>4,3 ms bis 92 ms mit 46,4 ms als typischer Durchschnitt</td>
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
      <td>Vollständig offen und frei von jeglichen Lizenzanforderungen</td>
    </tr>
  </tbody>
</table>

### G.711 (Puls-Code-Modulation von Sprachfrequenzen)

Die **G.711** Spezifikation, veröffentlicht von der International Telecommunications Union (ITU), wurde 1972 ausgegeben, um die Standard-Audiokodierung für Telefonanwendungen zu definieren. Sie unterstützt sprachfähigen Audio, der Frequenzen von 300 bis 3400 Hz abdeckt. Es wird ausgiebig für Telefonverkehr und Voicemail verwendet und ist die höchste Audioqualität, die über das öffentliche Telefonnetz übertragen werden kann.

G.711 ist kein hochauflösender Codec, sondern ist optimiert, um eine breite Palette von Sprachpegeln zu unterstützen (vom Flüstern bis zum Schreien), während es eine hohe Verständlichkeit und geringe rechnerische Komplexität beibehält. G.711 verwendet einen logarithmischen Kompandierungsalgorithmus, der 14 Bits Dynamikumfang in einem 8-Bit-Muster bietet. Er verwendet eine Abtastrate von 8000 Abtastungen/Sekunde, was einer Bitrate von 64000 bps entspricht.

Es gibt zwei Geschmacksrichtungen von G.711, die die exakte mathematische Gleichung für den Algorithmus angeben: [µ-law](https://de.wikipedia.org/wiki/µ-law) (häufig in Nordamerika und Japan verwendet) und [A-law](https://de.wikipedia.org/wiki/A-law) (häufig im Rest der Welt). Es gibt keinen wesentlichen Qualitätsunterschied zwischen den beiden Gesetzen, und es ist einfach, Audio von einem zum anderen zu transcodieren. Dennoch ist es wichtig, in jeder Wiedergabeanwendung oder Dateiformat anzugeben, welches Gesetz verwendet wird. A-law-Audio wird schlecht wiedergegeben, wenn es versehentlich mit dem µ-law-Algorithmus dekomprimiert wird und umgekehrt.

Dieser Codec muss von allen [WebRTC](/de/docs/Web/API/WebRTC_API)-Lösungen unterstützt werden, da er einfach, einfach zu implementieren, weit verbreitet und breit kompatibel auf allen modernen Computerplattformen ist.

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
      <td>codiertes Audio ist 8 Bits pro Abtastung</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Abtastraten</th>
      <td>8 kHz</td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindest-Bitrate für Stereo-Sound</th>
      <td>128 kbps</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Logarithmische Kompansion (µ-law oder A-law)</td>
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
        Alle anwendbaren Patente sind abgelaufen, sodass G.711 frei und ohne Einschränkungen nutzbar ist
      </td>
    </tr>
  </tbody>
</table>

### G.722 (64 kbps (7 kHz) Audiokodierung)

Veröffentlicht von der International Telecommunications Union (ITU), wurde der **G.722**-Codec speziell für die Kompression von Sprache entwickelt. Seine Audiokodierungsbandbreite ist auf den Bereich von 50 Hz bis 7.000 Hz beschränkt, der den größten Teil des Frequenzbereichs typischer menschlicher Stimmen umfasst. Das macht ihn ungeeignet für die Verarbeitung von Audio, das möglicherweise außerhalb des menschlichen Sprachbereichs liegt, wie z.B. Musik.

G.722 Audio wird mithilfe der adaptiven differentiellen Puls-Code-Modulation (ADPCM) codiert, bei der jedes Sample nicht durch seinen absoluten Wert dargestellt wird, sondern als Wert, der angibt, um wie viel sich das neue Sample vom vorherigen unterscheidet.

G.722 wird hauptsächlich für WebRTC-Verbindungen verwendet, da es einer der Audio-Codecs ist, die von der WebRTC-Spezifikation vorgeschrieben werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Unterstützte Bitraten</th>
      <td>G.722: 48 kbps, 56 kbps, und 64 kbps; in der Praxis wird jedoch immer 64 kbps verwendet<br />G.722 Anhang B Super Wide-Band: 64 kbps, 80 kbps, und 96 kbps<br />G.722 Anhang D Stereo Wide-Band: 64 kbps und 80 kbps<br />G.722 Anhang D Stereo Super Wide-Band: 80 kbps, 96 kbps, 112 kbps, und 128 kbps
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
        16 kHz (ADPCM ist spezifiziert, um 8 kHz, 11,025 kHz, 22,05 kHz, 44,1
        kHz zu ermöglichen, aber G.722 verwendet 16 kHz)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindest-Bitrate für Stereo-Sound</th>
      <td>128 kbps bei einer Abtastrate von 44,1 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Lossy</td>
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
Alle anwendbaren Patente sind abgelaufen; G.722 ist kostenfrei nutzbar
      </td>
    </tr>
  </tbody>
</table>

### MP3 (MPEG-1 Audio Layer III)

Von den Audioformaten, die durch die MPEG/MPEG-2-Standards spezifiziert sind, ist **MPEG-1 Audio Layer III**—auch bekannt als **[MP3](https://de.wikipedia.org/wiki/MP3)**—bei weitem das am weitesten verbreitete und bekannteste. Der MP3-Codec ist definiert durch [MPEG-1 Teil 3](https://www.iso.org/standard/22412.html) und [MPEG-2 Teil 3](https://www.iso.org/standard/26797.html) und wurde 1991 eingeführt und 1992 finalisiert.

Wenn MP3-Audio im MPEG-Container gespeichert ist, wird die resultierende Datei auch einfach als "MP3-Datei" oder "MP3" bezeichnet. Dateien mit der allgegenwärtigen `.mp3`-Erweiterung werden im vielleicht am weitesten verbreiteten Audio-Dateiformat der Welt gespeichert, was in großem Maße für die digitale Audiotechnik-Revolution der späten 1990er und frühen 2000er verantwortlich ist.

MPEG-1 MP3-Audio unterstützt höhere Bitraten sowie höhere Abtastraten als MP3-Audio in MPEG-2-Dateien. Das MPEG-1-Format MP3 ist im Allgemeinen am besten für Musik oder andere komplexe Audioinhalte, während MPEG-2-Modus MP3-Audio akzeptabel für Sprache und andere einfachere Sounds ist.

Die Patente hinter dem MP3 sind abgelaufen, wodurch viele oder die meisten Lizenzierungsbedenken rund um die Verwendung von MP3-Dateien in Ihren Projekten entfallen. Das macht sie zu einer guten Wahl für viele Projekte.

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
      <th scope="row">Unterstützte Abtastformate</th>
      <td>16-Bit-Integer</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Unterstützte Abtastraten</th>
      <td><strong>MPEG-1 Modus:</strong> 32.000 Hz, 44.100 Hz, 48.000 Hz</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 16.000 Hz, 22.050 Hz, 24.000 Hz (Die Hälfte
        der Frequenz der unterstützten Modi von MPEG-1)
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindest-Bitrate für Stereo-Sound</th>
      <td>128 kbps bei einer Abtastrate von 48 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Lossy</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Maximale Audiokanäle</th>
      <td><strong>MPEG-1 Modus:</strong> 2 [2.0]</td>
    </tr>
    <tr>
      <td>
        <strong>MPEG-2 Modus:</strong> 5 (plus 1 optionaler Low Frequency
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
Patentfrei in der EU seit 2012; patentfrei in den Vereinigten Staaten seit dem 16. April 2017; jetzt frei nutzbar
      </td>
    </tr>
  </tbody>
</table>

Aus Patentgründen unterstützte Firefox MP3 vor Version 71 nicht direkt; stattdessen wurden plattformnative Bibliotheken verwendet, um MP3 zu unterstützen. Diese Fähigkeit wurde auf jeder Plattform in unterschiedlichen Firefox-Veröffentlichungen eingeführt:

<table class="standard-table" style="margin-left: 4em; max-width: 30em">
  <caption>
    MP3-Unterstützung mit externer Bibliothek, nach Plattform, in Firefox
  </caption>
  <thead>
    <tr>
      <th scope="row">Plattform</th>
      <th scope="col">Erste Firefox-Version mit MP3-Unterstützung</th>
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

Das [Opus](<https://en.wikipedia.org/wiki/Opus_(audio_format)>) Audioformat wurde von der Xiph.org Foundation als voll offenes Audioformat entwickelt, es wurde von der [IETF](https://www.ietf.org/) als {{RFC(6716)}} standardisiert. Es ist ein guter Allzweck-Audio-Codec, der sowohl nieder- als auch hochkomplexe Audioinhalte umfassend und effizient verarbeiten kann, wie Sprache sowie Musik und andere komplexe Geräusche.

Opus unterstützt mehrere Kompressionsalgorithmen und kann sogar mehr als einen Algorithmus in derselben Audiodatei verwenden, da der Encoder die Bitrate, die Audiobandbreite, den Algorithmus und andere Details zu den Komprimierungseinstellungen für jeden Audioframe wählen kann.

Opus ist ein guter Allround-Audio-Codec zur Verwendung in Ihren Webanwendungen und kann für jede Audioaufgabe verwendet werden, die Sie im Sinn haben.

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
      <td>16-Bit-Integer und 32-Bit-Float (-1.0 bis 1.0)</td>
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
              <th scope="row">Super Breitband (SWB)</th>
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
          verwendet einen Algorithmus basierend auf Audiobandbreiten anstelle von Abtastraten.
          Siehe {{RFC(6716, "", 2)}} für Details. Darüber hinaus gibt es einen
          <em>optionalen</em> Teil der Opus-Spezifikation (Opus-Custom), der
          nicht-standardmäßige Abtastraten ermöglicht, aber die Verwendung dieser Funktion ist nicht empfohlen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Empfohlene Mindest-Bitrate für Stereo-Sound</th>
      <td>96 kbps bei einer Abtastrate von 48 kHz</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Lossy</td>
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
              <th scope="row">Super Breitband (SWB)</th>
              <td>12 kHz</td>
            </tr>
            <tr>
              <th scope="row">Vollband (FB)</th>
              <td>20 kHz</td>
            </tr>
          </tbody>
        </table>
        <p>
          Obwohl der
          <a href="https://en.wikipedia.org/wiki/Nyquist–Shannon_sampling_theorem">Nyquist–Shannon Abtasttheorem</a>
          zeigt, dass die Audiobandbreite bis zur Hälfte der Abtastrate reichen kann, erlaubt Opus keine Codierung außerhalb eines maximalen 20 kHz Audiobandbreite, da das menschliche Ohr ohnehin nichts über der 20 kHz-Marke wahrnehmen kann. Dies spart etwas Platz im codierten Audio.
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
          Diese Information bezieht sich auf die Unterstützung von Opus in HTML
          {{HTMLElement("audio")}} und {{HTMLElement("video")}}
          Elementen, und nicht auf WebRTC.
        </p>
        <p>
          Safari unterstützt Opus im {{HTMLElement("audio")}}-Element
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

[Vorbis](https://www.xiph.org/vorbis/) ist ein offenes Format von der [Xiph.org Foundation](https://xiph.org/), das eine Vielzahl von Kanal-Kombinationen unterstützt, einschließlich monaural, stereo, polyphonisch, quadrophonisch, 5.1 Surround, Ambisonic oder bis zu 255 diskrete Audiokanäle. Abhängig von der Qualitätsstufe, die während der Codierung verwendet wird, kann die resultierende Bitrate zwischen etwa 45 kbps und 500 kbps variieren. Vorbis verwendet standardmäßig eine variable Bitrate-Codierung; die Bitrate kann sich je nach Bedarf bei der Kompression von einem Sample zum nächsten ändern.

Im Allgemeinen ist Vorbis in Bezug auf Größe und Bitrate effizienter als MP3 bei ähnlichen Qualitätsstufen. Dies und seine freie und offene Lizenz machen es zu einer guten Wahl für viele Arten von Audiodaten, solange seine hohe Latenz kein Problem darstellt.

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
      <th scope="row">Empfohlene minimale Bitrate für Stereo-Sound</th>
      <td>
        192 kbps bei 48 kHz; dies wird typischerweise durch Einstellen des
        Qualitätsniveaus auf 6 bis 8 erreicht.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Lossy</td>
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

Typischerweise, unabhängig davon, welchen Codec Sie verwenden, wird er im Allgemeinen die Aufgabe erledigen, auch wenn er nicht die ideale Wahl ist, solange Sie einen Codec wählen, der nicht speziell für eine völlig andere Art von Quell-Audio entwickelt wurde. Wenn Sie beispielsweise einen reinen Sprachcodec auswählen und versuchen, ihn für Musik zu verwenden, werden Sie keine brauchbaren Ergebnisse erzielen.

Einige Codecs können jedoch die Kompatibilität einschränken, und andere können für Ihre Bedürfnisse optimaler sein als andere. Hier geben wir Ihnen Hinweise, um Ihnen bei der Auswahl eines geeigneten Codecs für Ihren Anwendungsfall zu helfen.

Bei der Auswahl eines Codecs für Ihr Audio sollten Sie zunächst die folgenden Fragen berücksichtigen:

- Wird das codierte Audio remixt oder recompressed? Wenn ja, vermeiden Sie verlustbehaftete Kompression, die durch das erneute Komprimieren des Audios verstärkt würde; oder verwenden Sie zumindest so wenig Kompression wie möglich.
- Wenn das Audio in eine bestimmte Dateityp eingehen muss, behalten Sie dies im Auge, da Mediencontainer typischerweise nur eine spezifische Untermenge der verfügbaren Codecs unterstützen.
- Welche Art von Audioinhalt wird der Codec bearbeiten? Einige Codecs sind speziell für reinen Sprachinhalt ausgelegt (sie nutzen den reduzierten Frequenzbereich, der für menschliche Sprache benötigt wird). Andere können eine algorithmische Tendenz haben, bei der Kodierung bestimmter Musikgenres schlechter zu performen.
- Welche Bitraten und anderen konfigurierbaren Eigenschaften hat jeder Codec, die ihn zu einer guten (oder schlechten) Wahl machen könnten?
- Inwieweit spielt Latenz für Ihre Bedürfnisse eine Rolle, falls überhaupt? Wenn Sie sehr präzise getimten Sound benötigen, ist eine niedrigere Latenz besser.
- Wie viel Kompression müssen Sie erreichen?

Lassen Sie uns ein paar häufige Szenarien betrachten, um ein Gespür für den Entscheidungsprozess zu bekommen.

### Beispiel: Musik für Streaming

Für das Streaming von Musik möchten Sie einen Codec auswählen, der den Bandbreitenverbrauch so weit wie möglich minimiert und dabei so wenig wie möglich Artefakte in die Audioaufnahme durch Kompression einführt. Dies ist notwendig, weil die Geschwindigkeit, mit der die Musik heruntergeladen wird, nicht größer sein sollte als die verfügbare Bandbreite im Netzwerk, und idealerweise sollte noch Raum für Schwankungen der Netzgeschwindigkeit und die Nutzung des Netzwerks durch andere Anwendungen bleiben.

Es sei denn, es gibt einen spezifischen Bedarf für verlustfreie Kompression, oder die Netzwerkbandbreite ist garantiert hoch genug, um dies zu unterstützen, ist ein verlustbehaftetes Kompressionsschema eine gute Wahl. Welche Sie wählen, hängt von der Browser-Kompatibilität und der Verfügbarkeit spezieller Funktionen ab, die der Codec möglicherweise unterstützen muss.

Normalerweise ist die Latenz nicht besonders wichtig, wenn Musik gestreamt wird. Mögliche Ausnahmen sind wiederholte Musik, bei der Sie die Musik kontinuierlich ohne Unterbrechung abspielen müssen, oder wenn Sie in der Lage sein müssen, Songs nahtlos hintereinander abzuspielen. Dies kann insbesondere für klassische Musik, theatralische Soundtracks und für Hintergrundmusik während des Spielens wichtig sein.

Für die allgemeine Musikwiedergabe sind die drei wahrscheinlichsten Kandidaten MP3, AAC und Vorbis.

- AAC in einem MP4-Container wird von allen großen Browsern unterstützt, was dies zu einer großartigen Wahl macht.
- Vorbis wird fast immer in Ogg-Dateien verwendet, aber Ogg-Container werden nicht universell unterstützt. Selbst Microsoft Edge, das beide unterstützt, unterstützt noch keine Ogg-Container.
- MP3 (MPEG-1 Audio Layer III) wird von allen großen Browsern unterstützt. Diese Dateien sind MPEG-1-Dateien, die eine Audio Layer III-Spur enthalten.

Wenn Sie die Latenz bei der Musikwiedergabe minimieren müssen, sollten Sie ernsthaft über Opus nachdenken, das den niedrigsten Latenzbereich der Allzweck-Codecs aufweist (5 ms bis 66,5 ms im Vergleich zu mindestens 100 ms für die anderen).

> [!NOTE]
> Die hier beschriebene Kompatibilitätsinformation ist im Allgemeinen korrekt zum Zeitpunkt der Erstellung dieses Artikels; es kann jedoch Ausnahmen und Einschränkungen geben. Achten Sie darauf, die Kompatibilitätstabellen zu konsultieren, bevor Sie sich auf ein bestimmtes Medienformat festlegen.

Basierend darauf ist AAC wahrscheinlich Ihre beste Wahl, wenn Sie nur ein Audioformat unterstützen können. Natürlich können Sie, wenn Sie mehrere Formate zur Verfügung stellen (zum Beispiel durch Verwendung des {{HTMLElement("source")}} Elements innerhalb Ihrer {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente), viele oder alle dieser Ausnahmen vermeiden.

### Beispiel: Musik für Downloads

Musik, die vom Benutzer heruntergeladen wird, kann zu einer größeren Gesamtdateigröße komprimiert werden als gestreamte Musik, da es (anders als beim Streaming) nicht wichtig ist, ob die Download-Geschwindigkeit langsamer ist als die Wiedergabegeschwindigkeit des Mediums. Das bedeutet, dass Sie über den Einsatz verlustbehafteter Kompression mit höheren Bitraten nachdenken können, was zu größeren Dateien, aber mit weniger Verlust der Klangtreue führt. Oder Sie können sich für ein verlustfreies Format entscheiden. Die Wahl hängt weitgehend von der Kombination Ihrer Anwendungsanforderungen und den Vorlieben Ihrer Benutzer ab.

Bei einem tatsächlichen Musik-Download-Service könnten Sie Songs zum Download als 128 Kbps MP3-Dateien, 256 kbps AAC-Dateien (in MP4-Containern) oder FLAC-Dateien anbieten, abhängig von einer vom Benutzer ausgewählten Präferenz. Wenn Sie nur ein Format auswählen müssen, wählen Sie eines, das Ihren Anforderungen und der Art der heruntergeladenen Audioinhalte entspricht.

Im Allgemeinen ist MP3 natürlich das am häufigsten verwendete Format für Musik; wählen Sie, wenn möglich, eine Bitrate von mindestens 192 kbps. Der iTunes Store verteilt Musik hingegen im 256 kbps AAC-Format.

### Beispiel: Sprachaufnahme und Wiedergabe

Die spezifischen Eigenschaften der menschlichen Sprache ermöglichen es sprachspezifischen Codecs, die Audioaufnahme weit mehr zu komprimieren als die meisten allgemeinen Codecs es können. Denn obwohl Menschen Frequenzen im Bereich von etwa 20 Hz bis 20.000 Hz hören und menschliche Sprachgeräusche von etwa 300 Hz bis 18.000 Hz reichen, liegen die meisten Sprachlaute, die wir benötigen, um zu verstehen, was gesagt wird, im Frequenzbereich von etwa 500 Hz bis 3.000 Hz. Das bedeutet, dass sprachspezifische Codecs alles andere ignorieren können.

Die sprachspezifischen Codecs sind jedoch alle inhärent sehr verlustbehaftet, und jedes Geräusch mit erheblichen Informationen in den außerhalb des Stimmumfangs erfassten Frequenzbändern geht vollständig verloren. Dies macht diese Codecs völlig ungeeignet für alles andere als gesprochene Wörter. Selbst Audio, das nur Stimmen enthält, aber gesungen statt gesprochen wird, wird wahrscheinlich nicht von akzeptabler Qualität in einem dieser Formate sein.

Die Sprachaufnahme und -wiedergabe muss in der Regel latenzarm sein, um mit Videospuren synchronisiert zu werden, oder um Übersprechen oder andere Probleme zu vermeiden. Glücklicherweise führen die Eigenschaften, die Sprachcodecs so speicherplatzmäßig so effizient machen, auch dazu, dass sie tendenziell sehr niedrige Latenzen haben. Wenn Sie mit WebRTC arbeiten, hat zum Beispiel [G.722](#g.722_64_kbps_7_khz_audio_coding) eine Latenz von 4 ms (im Vergleich zu über 100 ms für MP3), und die Latenz von [AMR](#amr_adaptive_multi-rate) liegt bei etwa 25 ms.

> [!NOTE]
> Weitere Informationen zu WebRTC und den von WebRTC verwendeten Codecs finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

Die im Web allgemein verwendeten Codecs, die für die kodierung von Sprache verwendet werden, sind G.722 und AMR. AMR ist ein Schmalband-Codec, der nur die Frequenzen zwischen 200 Hz und 3.400 Hz mit Bitraten typischerweise um 7,4 kbps kodiert, während G.722 ein Breitband-Codec ist, der die Audio-Bandbreite auf 50 Hz bis 7.000 Hz bei viel höheren Bitraten erweitert – in der Regel 64 kbps.

Wenn Sie reichlich Netzwerkbandbreite zur Verfügung haben und sich ziemlich sicher sind, dass Ihre Benutzer dies auch tun werden, ist G.722 die bessere Wahl. Um die Speicher- und Netzeffizienz in einer eingeschränkten Umgebung zu maximieren, wählen Sie AMR.

### Beispiel: Audioclips für professionelles Mixing

Wenn Sie Audiomaterial komprimieren, das gemischt oder remixt wird, möchten Sie in der Regel eine verlustfreie oder nahezu verlustfreie Wiedergabetreue, was auf einen verlustfreien Codec hinweisen könnte. Allerdings besitzt verlustfreie Kodierung naturgemäß ein wesentlich geringeres Kompressionsniveau als verlustbehaftete Kodierung, sodass Sie feststellen könnten, dass Sie, wenn Ihr Quell-Audio groß genug ist, möglicherweise dennoch einen verlustbehafteten Encoder verwenden müssen, insbesondere in einer Webumgebung, in der Sie die Download-Rate des Mediums nicht kontrollieren können.

Angenommen, verlustfreie Kompression ist hier unsere beste Option (was sie in der Regel ist, solange die Audiodateien klein sind), sind die drei stärksten Kandidaten aus Codec-Sicht [FLAC](https://en.wikipedia.org/wiki/FLAC), [Apple Lossless (ALA)](https://en.wikipedia.org/wiki/Apple_Lossless) und [MPEG-4 ALS](https://en.wikipedia.org/wiki/Audio_Lossless_Coding). Welche wir wählen, hängt von der Browserunterstützung und davon ab, welche Mediencontainerformate sie unterstützen.

Für die Zwecke dieses Beispiels nehmen wir an, dass alle Browser die gleiche Codec- und Containerunterstützung wie Firefox haben (obwohl dies bei Weitem nicht zutrifft). Berücksichtigen Sie die Breite der tatsächlichen Unterstützung für die Codecs bei Ihren Entscheidungen.

- Firefox unterstützt FLAC in den nativen Containern von FLAC sowie in Ogg- und MPEG-4 (MP4)-Dateien.
- Firefox unterstützt Apple Lossless nur über seine plattformspezifische QuickTime-Unterstützung.
- Firefox unterstützt MP4 ALS nicht.

In diesem Fall scheint FLAC der wahrscheinlich beste Codec zu sein; ALAC hat wenig bis keine direkte Browserunterstützung.

## Audio-Codierungssoftware

Es gibt viele Tools zur Kodierung von Audio. Die einfachsten sind diejenigen, die zum Rippen von CDs oder zum Einlesen von Audiodateien gedacht sind und diese schnell und automatisch in MP3- oder AAC-Format konvertieren, um sie in einer Bibliothek zu speichern, wie etwa [iTunes](https://www.apple.com/itunes/). Aber wenn Sie Web-Apps entwickeln, die Audio als Bestandteil der App verwenden, wie Spiele, benötigen Sie mehr Kontrolle über den Codierungsprozess und mehr Optionen hinsichtlich des während der Codierung verwendeten Formats.

Einige beliebte Optionen:

- [FFmpeg](https://ffmpeg.org/)
  - : Arguably the best-known and most widely regarded open source codec package available, FFmpeg supports the majority of the most popular audio formats and provides command-line tools and libraries for encoding, decoding, and performing format conversions of both audio and video. Binaries are available for macOS, Linux, and Windows.
- [Handbrake](https://handbrake.fr/)
  - : A highly popular open source front-end to FFmpeg which adds a graphical user interface that makes it much easier to control the wide variety of options FFmpeg offers while encoding audio and/or video. Binaries are available for macOS, Linux, and Windows.
- [Audacity](https://www.audacityteam.org/)
  - : An open source audio editor that supports loading audio from many different formats, editing, filtering, and adjusting the audio, and saving it back out in either the original format or a new format. Available for macOS, Linux, and Windows.
- [LAME](https://lame.sourceforge.io/)
  - : A high quality open source MP3 encoder with support for CBR, ABR, and VBR encoding as well as a variety of other options. Distributed only in source form by the LAME project, but can be installed using [Homebrew](https://brew.sh/) or similar tools.

## Siehe auch

- [Mediencontainer-Formate](/de/docs/Web/Media/Formats/Containers)
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Leitfaden zu Web-Videocodecs](/de/docs/Web/Media/Formats/Video_codecs)
- [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs)

---
title: Mediencontainerformate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

Das Format von Audio- und Videodateien wird in zwei Teilen definiert (drei, wenn eine Datei sowohl Audio als auch Video enthält): die verwendeten Audio- und/oder Videocodecs und das verwendete Mediencontainerformat (oder Dateityp). In diesem Leitfaden schauen wir uns die auf dem Web am häufigsten verwendeten Containerformate an, behandeln Grundlagen zu ihren Spezifikationen sowie ihre Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container. Stattdessen werden die codierten Audio- und Videospuren direkt von einem Teilnehmer zum anderen gestreamt, indem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte verwendet werden, um jede Spur darzustellen. Informationen zu den üblicherweise für WebRTC-Anrufe verwendeten Codecs sowie zur Browser-Kompatibilität bezüglich der Unterstützung von Codecs in WebRTC finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Häufige Containerformate

Obwohl es eine Vielzahl von Mediencontainerformaten gibt, sind die unten aufgelisteten diejenigen, denen Sie höchstwahrscheinlich begegnen werden. Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen. Die MIME-Typen und Erweiterungen für jedes sind aufgelistet. Die wahrscheinlich am häufigsten für Medien im Web verwendeten Container sind MPEG-4 (MP4), Web Media File (WEBM) und MPEG Audio Layer III (MP3). Sie können jedoch auch auf MP3, Ogg, WAV, AVI, MOV und andere Formate stoßen. Nicht alle davon werden jedoch von Browsern umfassend unterstützt; einige Kombinationen von Container und Codec erhalten manchmal ihre eigenen Dateierweiterungen und MIME-Typen aus Bequemlichkeit oder wegen ihrer Allgegenwärtigkeit. Beispielsweise wird eine Ogg-Datei mit nur einer Opus-Audiospur manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben. Aber es handelt sich tatsächlich immer noch nur um eine Ogg-Datei.

In anderen Fällen ist ein bestimmter Codec, der in einem bestimmten Containertyp gespeichert ist, so allgegenwärtig, dass das Pairing auf einzigartige Weise behandelt wird. Ein gutes Beispiel dafür ist die MP3-Audiodatei, die in der Tat ein MPEG-1-Container mit einer einzigen Audiospur ist, die mit MPEG-1 Audio Layer III-Encoding codiert wurde. Diese Dateien verwenden den MIME-Typ `audio/mp3` und die Erweiterung `.mp3`, obwohl ihre Container nur MPEG sind.

### Index der Mediencontainerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, suchen Sie es in dieser Liste und klicken Sie zu den Details durch, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, neben anderen Details.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codename (kurz)</th>
      <th scope="col">Vollständiger Codename</th>
      <th scope="col">Browser-Kompatibilität</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#3gp">3GP</a></th>
      <td>Third Generation Partnership</td>
      <td>Firefox für Android</td>
    </tr>
    <tr>
      <th scope="row"><a href="#adts">ADTS</a></th>
      <td>Audio Data Transport Stream</td>
      <td>
        <p>Firefox</p>
        <p>Nur verfügbar, wenn es im Media-Framework des zugrunde liegenden Betriebssystems verfügbar ist.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#flac">FLAC</a></th>
      <td>Free Lossless Audio Codec</td>
      <td>Alle Browser.</td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpegmpeg-2">MPEG / MPEG-2</a></th>
      <td>Moving Picture Experts Group (1 und 2)</td>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-4_mp4">MPEG-4 (MP4)</a></th>
      <td>Moving Picture Experts Group 4</td>
      <td>Alle Browser.</td>
    </tr>
    <tr>
      <th scope="row"><a href="#ogg">Ogg</a></th>
      <td>Ogg</td>
      <td>Alle Browser.</td>
    </tr>
    <tr>
      <th scope="row"><a href="#quicktime">QuickTime (MOV)</a></th>
      <td>Apple QuickTime movie</td>
      <td>Nur ältere Versionen von Safari, sowie andere Browser, die Apples QuickTime-Plugin unterstützt haben</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, wird sowohl die Unterstützung für mobile als auch für Desktop-Browser vorausgesetzt, wenn hier ein Browser aufgeführt ist. Es wird auch nur die Unterstützung für den Container selbst vorausgesetzt, nicht für spezifische Codecs.

### 3GP

Der **3GP** oder **3GPP** Mediencontainer wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten vorgesehen ist. Das Format wurde für die Verwendung auf 3G-Mobiltelefonen entwickelt, kann aber auch auf moderneren Telefonen und Netzwerken verwendet werden. Die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenbeschränkungen der meisten Netzwerke haben jedoch den Bedarf für das 3GP-Format reduziert. Dieses Format wird jedoch immer noch für langsamere Netzwerke und leistungsschwächere Telefone verwendet.

Dieses Mediencontainerformat leitet sich vom ISO-Basis-Media-Dateiformat und MPEG-4 ab, ist jedoch speziell für Szenarien mit niedrigerer Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediencontainer; andere Typen können je nach den spezifischen verwendeten Codec(s) verwendet werden. Zusätzlich können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, zur Ebene und/oder anderen Codec-Konfigurationsdetails bereitzustellen.

<table class="standard-table">
  <caption>
    Durch 3GP unterstützte Video-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 (MP4v-es)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Durch 3GP unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AMR-NB</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB+</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AAC-LC</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### ADTS

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das von MPEG-4 Part 3 für Audiodaten spezifiziert ist und für gestreamte Audiodaten gedacht ist, wie es z. B. bei Internetradio der Fall ist. Im Wesentlichen handelt es sich um einen nahezu reinen Stream von AAC-Audiodaten, der aus ADTS-Frames mit einem minimalen Header besteht.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der MIME-Typ für ADTS hängt davon ab, welche Art von Audioframes enthalten sind. Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden. Wenn die Audioframes im MPEG-1/MPEG-2 Audio Layer I, II oder III-Format vorliegen, sollte der MIME-Typ `audio/mpeg` verwendet werden.

<table class="standard-table">
  <caption>
    Durch ADTS unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

Die Unterstützung von Firefox für AAC hängt von der Medieninfrastruktur des Betriebssystems ab, sodass sie verfügbar ist, solange das Betriebssystem dies unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audio-Decoder; es gibt auch ein entsprechendes Containerformat, das ebenfalls FLAC genannt wird und dieses Audio enthalten kann. Das Format ist nicht durch irgendwelche Patente belastet, sodass seine Nutzung sicher ist. FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                                 |
| ------------------------------------- |
| `audio/flac`                          |
| `audio/x-flac` (nicht standardisiert) |

<table class="standard-table">
  <caption>
    Durch FLAC unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG/MPEG-2

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch. Sie wurden von der Moving Picture Experts Group (MPEG) erstellt und sind weit verbreitet in physischen Medien, einschließlich der Formatierung von Videos auf DVD-Medien.

Im Internet erfolgt die vielleicht häufigste Verwendung des MPEG-Dateiformats zum Übertragen von [Layer_III/MP3](https://en.wikipedia.org/wiki/MPEG-1) Sounddaten; die resultierenden Dateien sind die weit verbreiteten MP3-Dateien, die von digitalen Musikgeräten auf der ganzen Welt verwendet werden. Ansonsten werden MPEG-1 und MPEG-2 nicht häufig in Webinhalten verwendet.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 bestehen in den Mediendatenformaten und nicht im Containerformat. MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 eingeführt.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<table class="standard-table">
  <caption>
    Durch MPEG-1 und MPEG-2 unterstützte Video-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Part 2</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2 Part 2</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Durch MPEG-1 und MPEG-2 unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Audio Layer I</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer II</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG-4 (MP4)

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats. Es gibt zwei Versionen des Formats, die in Teilen 1 und 14 der Spezifikation definiert sind. MP4 ist heute ein beliebter Container, da es mehrere der am häufigsten verwendeten Codecs unterstützt und breit unterstützt wird.

Das ursprüngliche MPEG-4 Part 1-Dateiformat wurde 1999 eingeführt; das Version 2-Format, definiert in Teil 14, wurde 2003 hinzugefügt. Das MP4-Dateiformat leitet sich vom [ISO-Basis-Media-Dateiformat](https://en.wikipedia.org/wiki/ISO_base_media_file_format) ab, das direkt vom [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) entwickelt von [Apple](https://www.apple.com/) abgeleitet ist.

Beim Angeben des MPEG-4-Medientyps (`audio/mp4` oder `video/mp4`) können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, zur Ebene und/oder anderen Codec-Konfigurationsdetails bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediencontainer; andere MIME-Typen können je nach den spezifischen im Container verwendeten Codec(s) verwendet werden. Zusätzlich können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, zur Ebene und/oder anderen Codec-Konfigurationsdetails bereitzustellen.

<table class="standard-table">
  <caption>
    Durch MPEG-4 unterstützte Video-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>
        <p>Ja</p>
        <p>
          Die Unterstützung von Firefox für H.264 hängt von der
          Medieninfrastruktur des Betriebssystems ab, sodass sie verfügbar ist,
          solange das OS dies unterstützt.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AV1</th>
      <td></td>
      <td></td>
      <td>
        <p>Ja</p>
        <p>Die Unterstützung von Firefox für AV1 ist auf Windows auf ARM deaktiviert (aktivieren Sie es, indem Sie die Voreinstellung <code>media.av1.enabled</code> auf <code>true</code> setzen).</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Durch MPEG-4 unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>
        <p>Ja</p>
        <p>Die Unterstützung von Firefox für H.264 hängt von der Medieninfrastruktur des Betriebssystems ab, sodass sie verfügbar ist, solange das OS dies unterstützt.</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Ogg

Das [Ogg](https://en.wikipedia.org/wiki/Ogg)-Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird. Der Ogg-Framework definiert auch patentfreie Mediendatenformate, wie den Theora-Videocodec und die Vorbis- und Opus-Audiocodecs. [Xiph.org-Dokumente zum Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Website verfügbar.

Während Ogg schon lange existiert, hat es nie die breite Unterstützung erhalten, die notwendig wäre, um es zu einer guten ersten Wahl für einen Mediencontainer zu machen. Sie sind in der Regel besser bedient, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich ist, z. B. wenn Sie ältere Versionen von Firefox und Chrome unterstützen wollen, die WebM noch nicht unterstützen. Beispielsweise unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Mehr Informationen zu Ogg und seinen Codecs finden Sie im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der MIME-Typ `application/ogg` kann verwendet werden, wenn Sie nicht unbedingt wissen, ob die Medien Audio oder Video enthalten. Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückfallen, wenn Sie das Inhaltsformat oder die -formate nicht kennen.

Sie können auch [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional die Formate der Trackmedien genauer zu beschreiben.

<table class="standard-table">
  <caption>
    Durch Ogg unterstützte Video-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Theora</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Durch Ogg unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Ogg Opus-Audiodateien, die länger als 12h 35m 39s sind, werden abgeschnitten und weisen Suchprobleme auf, wenn sie unter Firefox Linux 64 Bit abgespielt werden ([Firefox-Fehler 1810378](https://bugzil.la/1810378)).

### QuickTime

Das **QuickTime**-Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple zur Verwendung mit seinem gleichnamigen Media-Framework erstellt. Die Erweiterung für diese Dateien, `.mov`, leitet sich von der Tatsache ab, dass das Format ursprünglich für Filme verwendet wurde und normalerweise als "QuickTime movie"-Format bezeichnet wurde. Während QTFF als Grundlage für das MPEG-4-Dateiformat diente, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Textspuren und so weiter. QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber eine Reihe von Jahren war QuickTime für Windows verfügbar, um sie auf Windows zugänglich zu machen. Aber QuickTime für Windows wird seit Anfang 2016 nicht mehr von Apple unterstützt und _sollte nicht verwendet werden_, da es bekannte Sicherheitsbedenken gibt. Aber Windows Media Player hat jetzt integrierte Unterstützung für QuickTime-Version 2.0 und frühere Dateien; die Unterstützung für spätere Versionen von QuickTime erfordert Drittanbietererweiterungen.

Auf Macintosh-OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdateien und -Codecs, sondern auch eine Vielzahl beliebter und spezieller Audio- und Videocodecs sowie stiller Bildformate. Mit QuickTime konnten Mac-Anwendungen (einschließlich Webbrowser über das QuickTime-Plugin oder direkte QuickTime-Integration) Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice lesen und schreiben; und Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr.

Darüber hinaus stehen eine Reihe von Drittanbieterkomponenten für QuickTime zur Verfügung, einige von ihnen fügen Unterstützung für zusätzliche Codecs hinzu.

Da QuickTime-Unterstützung im Grunde genommen hauptsächlich auf Apple-Geräten verfügbar ist, wird es nicht mehr häufig im Internet verwendet. Apple selbst verwendet jetzt im Allgemeinen MP4 für Videos. Darüber hinaus wurde das QuickTime-Framework auf dem Mac schon lange abgelehnt und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der MIME-Typ `video/quicktime` ist der grundlegende Typ für den QuickTime-Mediencontainer. Es ist bemerkenswert, dass QuickTime (das Medienframework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzuzeigen, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, zur Ebene und/oder zu anderen spezifischen Informationen zur Codecs-Konfiguration anzugeben.

<table class="standard-table">
  <caption>
    Durch QuickTime unterstützte Video-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Cinepak</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Komponenten-Video</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">DV</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.261</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Motion JPEG</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 2</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 3</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Durch QuickTime unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ALaw 2:1</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Apple Lossless (ALAC)</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Microsoft ADPCM</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law 2:1 (u-Law)</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WAVE (WAV)

Das **Waveform Audio File Format** (**WAVE**), das üblicherweise wegen seiner Dateierweiterung `.wav` als WAV bezeichnet wird, ist ein Format, das von Microsoft und IBM zur Speicherung von Audiobitstream-Daten entwickelt wurde.

Es leitet sich vom Resource Interchange File Format (RIFF) ab und entspricht daher anderen Formaten wie Apples AIFF. Das WAV-Codec-Registrierungsdokument kann unter {{RFC(2361)}} gefunden werden; jedoch verwenden fast alle WAV-Dateien lineares PCM, die Unterstützung für andere Codecs ist daher dürftig.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der MIME-Typ `audio/wave` ist der Standardtyp und wird bevorzugt; andere wurden jedoch von verschiedenen Produkten im Laufe der Jahre verwendet und können in einigen Umgebungen auch verwendet werden.

<table class="standard-table">
  <caption>
    Durch WAVE unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ADPCM (Adaptive Differential Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">GSM 06.10</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LPCM (Linear Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law (u-Law)</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein Format, das auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basiert und speziell für die Nutzung in modernen Webumgebungen entwickelt wurde. Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die wiederum frei und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 vorgestellt und ist heute weit verbreitet. Konforme Implementierungen von WebM sind verpflichtet, die Video-Codecs VP8 und VP9 sowie die Audio-Codecs Vorbis und Opus zu unterstützen. Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar. Andere Codecs können eine Lizenz zur Verwendung erfordern.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<table class="standard-table">
  <caption>
    Durch WebM unterstützte Video-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AV1</th>
      <td>Ja</td>
      <td>Ja</td>
      <td>
        <p>Ja</p>
        <p>Die Unterstützung von Firefox für AV1 wurde zu macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und Firefox 68 unter Linux.
          Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist so ausgelegt, dass sie einen sicheren Prozess verwendet, der unter Android noch nicht unterstützt wird.
        </p>
      </td>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Durch WebM unterstützte Audio-Encoder
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Unterstützung
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Opus</th>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Das richtige Containerformat wählen

Es gibt einige Faktoren, die bei der Auswahl des besten Containers oder der besten Container für Ihre Medien berücksichtigt werden müssen. Die relative Bedeutung jedes Faktors hängt von Ihren Bedürfnissen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Richtlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien vorhaben. Die Wiedergabe von Medien ist etwas anderes als das Aufnehmen und/oder Bearbeiten von Mediendaten. Wenn Sie beabsichtigen, die Mediendaten zu manipulieren, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfreien komprimierten Formats zumindest die Ansammlung von Rauschen verhindert, da Kompressionsartefakte mit jedem erneuten Komprimieren multipliziert werden, das auftritt.

- Wenn Ihr Zielpublikum wahrscheinlich Benutzer auf mobilen Geräten umfasst, insbesondere auf Geräten mit niedrigerem Ende oder in langsamen Netzwerken, sollten Sie in Betracht ziehen, eine Version Ihrer Medien in einem 3GP-Container mit entsprechender Komprimierung bereitzustellen.
- Wenn Sie spezifische Codierungsanforderungen haben, stellen Sie sicher, dass der gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie möchten, dass Ihre Medien in einem nicht proprietären, offenen Format vorliegen, ziehen Sie in Betracht, eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) zu verwenden.
- Wenn Sie aus irgendeinem Grund nur in der Lage sind, Medien in einem einzigen Format bereitzustellen, wählen Sie ein Format, das auf der breiteren Auswahl von Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur Audio beinhalten, macht es wahrscheinlich Sinn, ein ausschließliches Audio-Containerformat zu wählen. Da die Patente jetzt alle abgelaufen sind, ist MP3 eine weithin unterstützte und gute Wahl. WAVE ist gut, aber unkomprimiert, seien Sie sich dessen also bewusst, bevor Sie es für große Audiodatenproben verwenden. FLAC ist eine sehr gute Wahl aufgrund seiner verlustfreien Komprimierung, wenn die Zielbrowser es alle unterstützen.

Leider werden weder der relativ große verlustfreie Kompressionsformat FLAC noch ALAC universell unterstützt. FLAC ist das breiter unterstützte der beiden, wird jedoch ohne zusätzliche installierte Software nicht von macOS unterstützt und überhaupt nicht auf iOS. Wenn Sie verlustfreies Audio anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um der universellen Kompatibilität nahe zu kommen.

### Ratschläge zur Container-Auswahl

Die untenstehenden Tabellen bieten Vorschläge zu Containern in verschiedenen Szenarien. Dies sind nur Vorschläge. Stellen Sie sicher, dass Sie die Bedürfnisse Ihrer Anwendung und Ihres Unternehmens berücksichtigen, bevor Sie ein Containerformat auswählen.

#### Nur-Audio-Dateien

| Wenn Sie benötigen…                                          | Ziehen Sie in Betracht, dieses Containerformat zu verwenden |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| Komprimierte Dateien für die Wiedergabe im allgemeinen Zweck | MP3 (MPEG-1 Audio Layer III)                                |
| Verlustfrei komprimierte Dateien                             | FLAC mit ALAC-Überbrückung                                  |
| Unkomprimierte Dateien                                       | WAV                                                         |

Da die Patente des MP3 jetzt alle abgelaufen sind, ist die Wahl des Audio-Dateiformats viel einfacher geworden. Es ist nicht mehr notwendig, zwischen MP3's breiter Kompatibilität und der Notwendigkeit, Lizenzgebühren bei der Nutzung zu zahlen, zu wählen.

#### Video-Dateien

| Wenn Sie benötigen…                                    | Ziehen Sie in Betracht, dieses Containerformat zu verwenden    |
| ------------------------------------------------------ | -------------------------------------------------------------- |
| Allgemeines Video, möglichst in einem offenen Format   | WebM (idealerweise mit MP4-Überbrückung)                       |
| Allgemeines Video                                      | MP4 (idealerweise mit WebM oder Ogg-Überbrückung)              |
| Hohe Komprimierung optimiert für langsame Verbindungen | 3GP (idealerweise mit MP4-Überbrückung)                        |
| Kompatibilität mit älteren Geräten/Browsern            | QuickTime (idealerweise mit AVI- und/oder MPEG-2-Überbrückung) |

Diese Vorschläge umfassen eine Reihe von Annahmen. Sie sollten die Optionen sorgfältig erwägen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie eine Menge Medien haben, die codiert werden müssen.

## Kompatibilität mit mehreren Containern maximieren

Um die Kompatibilität zu optimieren, ist es wert, in Betracht zu ziehen, mehr als eine Version von Mediendateien bereitzustellen, indem das {{HTMLElement("source")}}-Element verwendet wird, um jede Quelle innerhalb des {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements anzugeben. Beispielsweise können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einer Überbrückung im MP4-Format. Sie könnten sogar eine rückwärtsähnliche QuickTime- oder AVI-Überbrückung anbieten, um sicher zu gehen.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src) Attribut. Fügen Sie dann untergeordnete {{HTMLElement("source")}} Elemente innerhalb des `<video>` Elements hinzu, eines für jede Version des Videos, die Sie anbieten. Dies kann verwendet werden, um verschiedene Versionen eines Videos abhängig von der Bandbreite anzubieten, aber in unserem Fall werden wir es verwenden, um Formatoptionen anzubieten.

Im unten gezeigten Beispiel wird ein Video dem Browser in zwei Formaten angeboten: WebM und MP4.

{{InteractiveExample("HTML Demo: &lt;source&gt;", "tabbed-standard")}}

```html interactive-example
<video controls width="250" height="200" muted>
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
  Download the
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  or
  <a href="/shared-assets/videos/flower.mp4">MP4</a>
  video.
</video>
```

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type) Attribut auf `video/webm` gesetzt). Wenn der {{Glossary("user_agent", "Benutzeragent")}} das nicht abspielen kann, wird die nächste Option verwendet, deren `type` als `video/mp4` angegeben ist. Falls keine dieser Optionen abgespielt werden können, wird der Text "Dieser Browser unterstützt das HTML-Videoelement nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                   |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                             |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Formatspezifikation                                                                                        |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                                |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                                |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4-Dateiformat)                                                                | Definiert das MPEG-4 (MP4) Version 2-Containerformat                                                                |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                            |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                   |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateierweiterungen                                                                |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Filmformat (MOV)                                                                            |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Am ehesten eine offizielle WAVE-Spezifikation                                                                       |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet von WAV)      | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                     |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden für die Anpassung von Matroska an WebM                                                                    |
| [Matroska Specifications](https://www.matroska.org/index.html)                                                                                               | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                            |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM-Byte-Stream-Format für den Einsatz mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

## Browser-Kompatibilität

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">
        Containerformatname
      </th>
      <th
        colspan="3"
        scope="col"
        style="text-align: center; border-right: 2px solid #d4dde4"
      >
        Audio
      </th>
      <th colspan="3" scope="col" style="text-align: center">Video</th>
    </tr>
    <tr>
      <th scope="col" style="vertical-align: bottom">MIME-Typ</th>
      <th scope="col" style="vertical-align: bottom">Erweiterung(en)</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browser-Unterstützung
      </th>
      <th scope="col" style="vertical-align: bottom">MIME-Typ</th>
      <th scope="col" style="vertical-align: bottom">Erweiterung(en)</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browser-Unterstützung
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="vertical-align: bottom">3GP</th>
      <td style="vertical-align: top"><code>audio/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        ADTS (Audio Data Transport Stream)
      </th>
      <td style="vertical-align: top"><code>audio/aac</code></td>
      <td style="vertical-align: top"><code>.aac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">FLAC</th>
      <td style="vertical-align: top"><code>audio/flac</code></td>
      <td style="vertical-align: top"><code>.flac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: top">
        MPEG-1 / MPEG-2 (MPG oder MPEG)
      </th>
      <td style="vertical-align: top"><code>audio/mpeg</code></td>
      <td style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td rowspan="2" style="vertical-align: top"><code>video/mpeg</code></td>
      <td rowspan="2" style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td rowspan="2" style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <td style="vertical-align: top"><code>audio/mp3</code></td>
      <td style="vertical-align: top"><code>.mp3</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">MPEG-4 (MP4)</th>
      <td style="vertical-align: top"><code>audio/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4a</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4v</code><br /><code>.m4p</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">Ogg</th>
      <td style="vertical-align: top"><code>audio/ogg</code></td>
      <td style="vertical-align: top">
        <code>.oga</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/ogg</code></td>
      <td style="vertical-align: top">
        <code>.ogv</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">QuickTime Movie (MOV)</th>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">—</td>
      <td style="vertical-align: top"><code>video/quicktime</code></td>
      <td style="vertical-align: top"><code>.mov</code></td>
      <td style="vertical-align: top">Safari</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WAV (Waveform Audio File)</th>
      <td style="vertical-align: top"><code>audio/wav</code></td>
      <td style="vertical-align: top"><code>.wav</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WebM</th>
      <td style="vertical-align: top"><code>audio/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
  </tbody>
</table>

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente

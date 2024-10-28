---
title: Medien-Container-Formate (Dateitypen)
slug: Web/Media/Formats/Containers
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das Format von Audio- und Videodateien wird in zwei Teilen definiert (drei, wenn eine Datei sowohl Audio als auch Video enthält): die verwendeten Audio- und/oder Video-Codecs und das verwendete Medien-Container-Format (oder Dateityp). In diesem Leitfaden schauen wir uns die Container-Formate an, die am häufigsten im Web verwendet werden, und decken dabei die Grundlagen ihrer Spezifikationen sowie ihre Vorteile, Einschränkungen und idealen Anwendungsfälle ab.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container. Stattdessen werden die codierten Audio- und Videospuren direkt von einem Peer zum anderen gestreamt, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte verwendet werden, um jede Spur zu repräsentieren. Siehe [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Informationen über die Codecs, die üblicherweise für WebRTC-Anrufe verwendet werden, sowie Informationen zur Browser-Kompatibilität in Bezug auf die Codec-Unterstützung in WebRTC.

## Allgemeine Container-Formate

Obwohl es eine Vielzahl von Medien-Container-Formaten gibt, sind die unten aufgeführten diejenigen, die Sie am ehesten antreffen werden. Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen. Die MIME-Typen und Erweiterungen für jedes sind aufgelistet. Die am häufigsten verwendeten Container für Medien im Web sind wahrscheinlich MPEG-4 (MP4), Web Media File (WEBM) und MPEG Audio Layer III (MP3). Aber Sie können auch auf MP3, Ogg, WAV, AVI, MOV und andere Formate stoßen. Nicht alle werden jedoch von Browsern breit unterstützt; einige Kombinationen von Container und Codec erhalten manchmal aus Gründen der Bequemlichkeit oder aufgrund ihrer Allgegenwärtigkeit ihre eigenen Dateierweiterungen und MIME-Typen. Zum Beispiel wird eine Ogg-Datei mit nur einer Opus-Audiospur manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben. Aber eigentlich ist es immer noch nur eine Ogg-Datei.

In anderen Fällen ist ein bestimmter Codec, der in einem bestimmten Containerformat gespeichert ist, so allgegenwärtig, dass die Kombination auf einzigartige Weise behandelt wird. Ein gutes Beispiel dafür ist die MP3-Audiodatei, die tatsächlich ein MPEG-1-Container mit einer einzigen Audiospur ist, die mit der MPEG-1 Audio Layer III-Codierung kodiert ist. Diese Dateien verwenden den `audio/mp3` MIME-Typ und die `.mp3` Erweiterung, obwohl ihre Container einfach MPEG sind.

### Index der Medien-Container-Formate (Dateitypen)

Um mehr über ein bestimmtes Container-Format zu erfahren, finden Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs es unterstützt und welche Browser es unterstützen, unter anderem Spezifika.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
      <th scope="col">Vollständiger Codec-Name</th>
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
        <p>Nur verfügbar, wenn auf dem Medien-Framework des zugrundeliegenden Betriebssystems Verfügbarkeit besteht.
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
      <td>Apple QuickTime-Film</td>
      <td>Nur ältere Versionen von Safari, plus andere Browser, die das QuickTime-Plugin von Apple unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, ist sowohl die mobile als auch die Desktop-Browser-Kompatibilität impliziert, wenn hier ein Browser aufgeführt ist. Die Unterstützung bezieht sich auch nur auf den Container selbst, nicht auf bestimmte Codecs.

### 3GP

Der **3GP** oder **3GPP** Mediencontainer wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten vorgesehen ist. Das Format wurde für die Verwendung auf 3G-Mobiltelefonen entwickelt, kann aber auch auf moderneren Telefonen und Netzwerken verwendet werden. Die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenlimits der meisten Netzwerke haben jedoch die Notwendigkeit des 3GP-Formats verringert. Dennoch wird dieses Format immer noch für langsamere Netzwerke und für leistungsschwächere Telefone verwendet.

Dieses Medien-Container-Format leitet sich vom ISO Base Media File Format und MPEG-4 ab, ist jedoch speziell für Szenarien mit niedriger Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediencontainer; andere Typen können je nach verwendetem Codec oder Codecs verwendet werden. Darüber hinaus können Sie [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um in der MIME-Typ-Zeichenkette anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifika bereitzustellen.

<table class="standard-table">
  <caption>
    Video-Codecs, die von 3GP unterstützt werden
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
    Audio-Codecs, die von 3GP unterstützt werden
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

**Audio Data Transport Stream** (**ADTS**) ist ein von MPEG-4 Part 3 spezifiziertes Container-Format für Audio-Daten, das für gestreamtes Audio, wie z.B. Internet-Radio, gedacht ist. Es ist im Wesentlichen ein fast nackter Stream von AAC-Audiodaten, bestehend aus ADTS-Frames mit einem minimalen Header.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der für ADTS verwendete MIME-Typ hängt von der Art der darin enthaltenen Audio-Frames ab. Wenn ADTS-Frames verwendet werden, sollte der `audio/aac` MIME-Typ verwendet werden. Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I, II oder III-Format vorliegen, sollte der MIME-Typ `audio/mpeg` lauten.

<table class="standard-table">
  <caption>
    Audio-Codecs, die von ADTS unterstützt werden
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

Die Unterstützung von AAC in Firefox hängt von der Medien-Infrastruktur des Betriebssystems ab, daher ist es verfügbar, solange das Betriebssystem es unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audio-Codec; es gibt auch ein zugehöriges einfaches Container-Format, ebenfalls FLAC genannt, das dieses Audio enthalten kann. Das Format ist durch keine Patente belastet, so dass seine Verwendung sicher vor Interferenzen ist. FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                           |
| ------------------------------- |
| `audio/flac`                    |
| `audio/x-flac` (nicht standard) |

<table class="standard-table">
  <caption>
    Audio-Codecs, die von FLAC unterstützt werden
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

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Datei-Formate sind im Wesentlichen identisch. Sie wurden von der Moving Picture Experts Group (MPEG) erstellt und sind weit verbreitet in physischen Medien, einschließlich des Formats des Videos auf DVD-Medien.

Im Internet ist vielleicht die häufigste Verwendung des MPEG-Formats das Enthalten von [Layer_III/MP3](https://en.wikipedia.org/wiki/MPEG-1) Audiodaten; die resultierenden Dateien sind die weltweit äußerst beliebten MP3-Dateien, die von digitalen Musikgeräten weltweit verwendet werden. Ansonsten sind MPEG-1 und MPEG-2 im Web-Inhalt nicht weit verbreitet.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 treten in den Mediendaten-Formaten und nicht im Container-Format auf. MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 eingeführt.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<table class="standard-table">
  <caption>
    Video-Codecs, die von MPEG-1 und MPEG-2 unterstützt werden
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
    Audio-Codecs, die von MPEG-1 und MPEG-2 unterstützt werden
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

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats. Es gibt zwei Versionen des Formats, die in den Teilen 1 und 14 der Spezifikation definiert sind. MP4 ist ein beliebter Container heute, da er mehrere der am häufigsten verwendeten Codecs unterstützt und übergreifend unterstützt wird.

Das originale MPEG-4 Teil 1 Datei-Format wurde 1999 eingeführt; das Version 2 Format, definiert in Teil 14, wurde 2003 hinzugefügt. Das MP4-Dateiformat leitet sich von dem [ISO base media file format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) ab, welches direkt vom [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) entwickelt von [Apple](https://www.apple.com/) abgeleitet ist.

Wenn Sie den MPEG-4 Medientyp (`audio/mp4` oder `video/mp4`) angeben, können Sie [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifika bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediencontainer; andere MIME-Typen können je nach den spezifisch im Container verwendeten Codec oder Codecs verwendet werden. Darüber hinaus können Sie [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifika bereitzustellen.

<table class="standard-table">
  <caption>
    Video-Codecs, die von MPEG-4 unterstützt werden
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
          Die Unterstützung von H.264 in Firefox hängt von der Medien-Infrastruktur des Betriebssystems ab, daher ist sie verfügbar, solange das Betriebssystem sie unterstützt.
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
        <p>Die Unterstützung von AV1 in Firefox ist auf Windows auf ARM deaktiviert (aktivierung durch Setzen der Präferenz <code>media.av1.enabled</code> auf <code>true</code>).</p>
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
    Audio-Codecs, die von MPEG-4 unterstützt werden
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
        <p>Die Unterstützung von H.264 in Firefox hängt von der Medien-Infrastruktur des Betriebssystems ab, daher ist sie verfügbar, solange das Betriebssystem sie unterstützt.</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg) Container-Format ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird. Das Ogg-Framework definiert auch patentfreie Mediendatenformate, wie den Theora-Video-Codec und die Vorbis- und Opus-Audio-Codecs. [Xiph.org-Dokumente über das Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Website verfügbar.

Obwohl Ogg schon lange existiert, hat es nie die breite Unterstützung erhalten, die nötig ist, um es zu einer guten ersten Wahl für einen Medien-Container zu machen. Sie sind typischerweise besser beraten, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich ist, um es anzubieten, z.B. wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die noch kein WebM unterstützen. Zum Beispiel unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Weitere Informationen über Ogg und seine Codecs finden Sie im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der `application/ogg` MIME-Typ kann verwendet werden, wenn Sie nicht unbedingt wissen, ob die Medien Audio oder Video enthalten. Wenn möglich, sollten Sie eine der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn Sie das Inhaltsformat oder die Formate nicht kennen.

Sie können auch [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional weitere Angaben zu den Track-Medienformaten zu machen.

<table class="standard-table">
  <caption>
    Video-Codecs, die von Ogg unterstützt werden
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
    Audio-Codecs, die von Ogg unterstützt werden
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
> Ogg Opus Audiodateien, die länger als 12 Stunden 35 Minuten 39 Sekunden sind, werden abgeschnitten und haben Probleme beim Suchen, wenn sie auf Firefox Linux 64 Bit abgespielt werden ([Firefox Bug 1810378](https://bugzil.la/1810378)).

### QuickTime

Das **QuickTime** Datei-Format (**QTFF**, **QT** oder **MOV**) wurde von Apple für die Verwendung durch sein gleichnamiges Medien-Framework erstellt. Die Erweiterung für diese Dateien, `.mov`, stammt von der Tatsache, dass das Format ursprünglich für Filme verwendet wurde und normalerweise als "QuickTime-Film"-Format bezeichnet wurde. Während QTFF als Grundlage für das MPEG-4-Dateiformat diente, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Textspuren und so weiter. QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber für einige Jahre war QuickTime für Windows verfügbar, um sie auf Windows zugänglich zu machen. QuickTime für Windows wird jedoch seit Anfang 2016 von Apple nicht mehr unterstützt und _sollte nicht verwendet werden_, da bekannte Sicherheitsprobleme bestehen. Der Windows Media Player hat jetzt jedoch integrierte Unterstützung für QuickTime-Version 2.0 und frühere Dateien; Unterstützung für spätere Versionen von QuickTime erfordert zusätzliche Drittanbieter-Erweiterungen.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdateien und Codecs, sondern auch eine Vielzahl von populären und Spezial- Audio- und Video-Codecs sowie Standbildformaten. Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowser, über das QuickTime-Plugin oder die direkte QuickTime-Integration) Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice lesen und schreiben; und Videoformate einschließlich AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr.

Darüber hinaus sind eine Reihe von Drittanbieter-Komponenten für QuickTime verfügbar, von denen einige Unterstützung für zusätzliche Codecs hinzufügen.

Da die Unterstützung von QuickTime im Wesentlichen hauptsächlich auf Apples Geräte verfügbar ist, wird es im Internet nicht mehr häufig verwendet. Apple selbst verwendet inzwischen im Allgemeinen MP4 für Video. Darüber hinaus wurde das QuickTime-Framework auf dem Mac seit einiger Zeit als veraltet eingestuft und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der `video/quicktime` MIME-Typ ist der grundlegende Typ für den QuickTime-Mediencontainer. Es ist erwähnenswert, dass QuickTime (das Medien-Framework bei Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, daher unterstützt es tatsächlich viele andere MIME-Typen.

Sie können [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

<table class="standard-table">
  <caption>
    Video-Codecs, die von QuickTime unterstützt werden
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
      <th scope="row">Component Video</th>
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
    Audio-Codecs, die von QuickTime unterstützt werden
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

Das **Waveform Audio File Format** (**WAVE**), gewöhnlich als WAV bezeichnet, aufgrund seiner Dateierweiterung `.wav`, ist ein Format, das von Microsoft und IBM entwickelt wurde, um Audio-Bitstromdaten zu speichern.

Es leitet sich vom Resource Interchange File Format (RIFF) ab und ist daher ähnlich wie andere Formate wie Apples AIFF. Das WAV-Codec-Register ist unter {{RFC(2361)}} zu finden; jedoch verwenden fast alle WAV-Dateien lineares PCM, daher ist die Unterstützung für die anderen Codecs spärlich.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der `audio/wave` MIME-Typ ist der Standardtyp und wird bevorzugt; jedoch haben die anderen von verschiedenen Produkten über die Jahre hinweg verwendet und können auch in einigen Umgebungen verwendet werden.

<table class="standard-table">
  <caption>
    Audio-Codecs, die von WAVE unterstützt werden
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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein Format, das auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basiert und speziell für den Einsatz in modernen Webumgebungen entwickelt wurde. Es basiert vollständig auf freien und offenen Technologien und verwendet in erster Linie Codecs, die ihrerseits kostenlos und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und ist inzwischen weit verbreitet. Konforme Implementierungen von WebM müssen die VP8- und VP9-Video-Codecs sowie die Vorbis- und Opus-Audio-Codecs unterstützen. Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen erhältlich. Alle anderen Codecs können eine Lizenz benötigen, um sie zu verwenden.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<table class="standard-table">
  <caption>
    Video-Codecs, die von WebM unterstützt werden
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
        <p>Die Unterstützung von AV1 in Firefox wurde macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und für Firefox 68 in Linux. Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist so konzipiert, dass sie einen sicheren Prozess verwendet, der auf Android noch nicht unterstützt wird.</p>
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
    Audio-Codecs, die von WebM unterstützt werden
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

## Auswahl des richtigen Containers

Es gibt einige Faktoren, die bei der Auswahl des besten Containers oder der besten Container für Ihre Medien zu berücksichtigen sind. Die relative Bedeutung jedes einzelnen wird von Ihren Anforderungen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihrer Zielgruppe abhängen.

### Leitlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien tun werden. Das Abspielen von Medien ist etwas anderes als das Aufnehmen und/oder Bearbeiten. Wenn Sie die Mediendaten manipulieren werden, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfreien komprimierten Formats zumindest die Anhäufung von Rauschen verhindert, da Komprimierungsartefakte mit jeder Re-Kompression, die stattfindet, multipliziert werden.

- Wenn Ihre Zielgruppe wahrscheinlich auch Benutzer auf mobilen Geräten umfasst, insbesondere auf Geräten mit geringerer Leistung oder in langsamen Netzwerken, sollten Sie prüfen, ob Sie eine Version Ihrer Medien im 3GP-Container mit entsprechender Komprimierung bereitstellen.
- Wenn Sie spezielle Encoding-Anforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie Ihre Medien in einem nicht-proprietären, offenen Format haben möchten, ziehen Sie die Verwendung eines der offenen Container-Formate wie FLAC (für Audio) oder WebM (für Video) in Betracht.
- Wenn Sie aus irgendeinem Grund Medien nur in einem Format bereitstellen können, wählen Sie ein Format, das auf der größten Auswahl an Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur Audio enthalten, macht die Wahl eines Audio-Only-Containerformats wahrscheinlich Sinn. Jetzt, da die Patente alle abgelaufen sind, ist MP3 eine weit verbreitete und gute Wahl. WAVE ist gut, aber unkomprimiert, also seien Sie sich dessen bewusst, bevor Sie es für große Audio-Proben verwenden. FLAC ist eine sehr gute Wahl aufgrund seiner verlustfreien Komprimierung, wenn die Zielbrowser es alle unterstützen.

Leider werden keines der relativ großen verlustfreien Komprimierungsformate (FLAC und ALAC) universell unterstützt. FLAC ist das breiter unterstützte der beiden, wird jedoch von macOS ohne zusätzliche Software nicht unterstützt und auf iOS überhaupt nicht. Wenn Sie verlustfreie Audio-Dateien anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um der universellen Kompatibilität nahe zu kommen.

### Ratschläge zur Auswahl des Containers

Die folgenden Tabellen bieten empfohlene Container, die in verschiedenen Szenarien verwendet werden sollen. Diese sind nur Vorschläge. Berücksichtigen Sie unbedingt die Bedürfnisse Ihrer Anwendung und Ihrer Organisation, bevor Sie ein Containerformat auswählen.

#### Nur Audio-Dateien

| Wenn Sie Folgendes brauchen…                       | Ziehen Sie die Verwendung dieses Containerformats in Betracht |
| -------------------------------------------------- | ------------------------------------------------------------- |
| Komprimierte Dateien für die allgemeine Wiedergabe | MP3 (MPEG-1 Audio Layer III)                                  |
| Verlustfreie komprimierte Dateien                  | FLAC mit ALAC-Alternative                                     |
| Unkomprimierte Dateien                             | WAV                                                           |

Jetzt, da alle Patente von MP3 abgelaufen sind, ist die Wahl des Audio-Dateiformats wesentlich einfacher geworden. Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, bei der Nutzung Lizenzen zu zahlen, zu wählen.

#### Video-Dateien

| Wenn Sie Folgendes brauchen…                                          | Ziehen Sie die Verwendung dieses Containerformats in Betracht |
| --------------------------------------------------------------------- | ------------------------------------------------------------- |
| Allgemeiner Gebrauch von Videos, vorzugsweise in einem offenen Format | WebM (idealerweise mit MP4-Alternative)                       |
| Allgemeiner Gebrauch von Videos                                       | MP4 (idealerweise mit WebM oder Ogg-Alternative)              |
| Hohe Kompression, optimiert für langsame Verbindungen                 | 3GP (idealerweise mit MP4-Alternative)                        |
| Kompatibilität mit älteren Geräten/Browsern                           | QuickTime (idealerweise mit AVI und/oder MPEG-2-Alternative)  |

Diese Vorschläge basieren auf verschiedenen Annahmen. Sie sollten die Optionen sorgfältig abwägen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die codiert werden müssen.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, sollten Sie in Betracht ziehen, mehr als eine Version von Mediendateien bereitzustellen, indem Sie das {{HTMLElement("source")}} Element verwenden, um jede Quelle innerhalb des {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements zu bestimmen. Zum Beispiel können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einer MP4-Alternative als Fallback. Sie könnten sogar eine retro-ähnliche QuickTime- oder AVI-Alternative anbieten, um auf Nummer sicher zu gehen.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src) Attribut. Dann fügen Sie innerhalb des `<video>` Elements Kind-{{HTMLElement("source")}} Elemente hinzu, eines für jede Version des Videos, die Sie anbieten. Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Verfügbarkeit der Bandbreite ausgewählt werden können; in unserem Fall werden wir es verwenden, um Formatoptionen anzubieten.

Im hier gezeigten Beispiel wird ein Video dem Browser in zwei Formaten angeboten: WebM und MP4.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type) Attribut auf `video/webm` gesetzt). Wenn der {{Glossary("user_agent", "User-Agent")}} es nicht abspielen kann, wird auf die nächste Option übergegangen, deren `type` als `video/mp4` angegeben ist. Wenn beide nicht abgespielt werden können, wird der Text "Dieser Browser unterstützt das HTML-Videoelement nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                    | Kommentar                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                                | Definiert das 3GP-Container-Format                                                                                     |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                                 | Definiert MP4-Audio einschließlich ADTS                                                                                |
| [FLAC-Format](https://xiph.org/flac/format.html)                                                                                                                 | Die FLAC-Formatspezifikation                                                                                           |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                               | Definiert das MPEG-1-Container-Format                                                                                  |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                               | Definiert das MPEG-2-Container-Format                                                                                  |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4-Dateiformat)                                                                    | Definiert das MPEG-4 (MP4) Version 2-Container-Format                                                                  |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                               | Definiert das originale MPEG-4 (MP4) Container-Format                                                                  |
| {{RFC(3533)}}                                                                                                                                                    | Definiert das Ogg-Container-Format                                                                                     |
| {{RFC(5334)}}                                                                                                                                                    | Definiert die Ogg-Medientypen und Dateierweiterungen                                                                   |
| [QuickTime-Dateiformat-Spezifikation](https://developer.apple.com/documentation/quicktime-file-format)                                                           | Definiert das QuickTime-Film (MOV) Format                                                                              |
| [Multimedia-Programmierschnittstelle und Datenspezifikationen 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das dem offiziellen WAVE am nächsten kommende Spezifikation                                                            |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet durch WAV)        | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                        |
| [WebM-Container-Richtlinien](https://www.webmproject.org/docs/container/)                                                                                        | Leitfaden zur Anpassung von Matroska für WebM                                                                          |
| [Matroska-Spezifikationen](https://www.matroska.org/index.html)                                                                                                  | Die Spezifikation für das Matroska-Container-Format, auf dem WebM basiert                                              |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                       | WebM Byte-Stream-Format für die Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

## Browser-Kompatibilität

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">
        Container-Format-Name
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

---
title: Media-Containerformate (Dateitypen)
slug: Web/Media/Formats/Containers
l10n:
  sourceCommit: ed9ebd794add41de1f2e759502b73e8650afe56b
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das Format von Audio- und Videodateien wird in zwei Teilen definiert (drei, wenn eine Datei sowohl Audio als auch Video enthält): die verwendeten Audio- und/oder Video-Codecs und das verwendete Mediendatei-Containerformat (oder Dateityp). In diesem Leitfaden betrachten wir die im Web am häufigsten verwendeten Containerformate und behandeln die Grundlagen ihrer Spezifikationen sowie ihre Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container. Stattdessen streamt es die kodierten Audio- und Videospuren direkt von einem Peer zum anderen, indem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte verwendet werden, um jede Spur darzustellen. Weitere Informationen zu den von WebRTC häufig verwendeten Codecs sowie Informationen zur Browser-Kompatibilität in Bezug auf Codec-Unterstützung in WebRTC finden Sie unter [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs).

## Häufige Containerformate

Während es eine Vielzahl von Media-Containerformaten gibt, sind die unten aufgeführten jene, denen Sie wahrscheinlich am häufigsten begegnen werden. Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen. Die MIME-Typen und Erweiterungen für jedes Format sind aufgelistet. Die am häufigsten für Medien im Web verwendeten Container sind wahrscheinlich MPEG-4 (MP4), Web Media File (WEBM) und MPEG Audio Layer III (MP3). Sie könnten jedoch auch auf MP3, Ogg, WAV, AVI, MOV und andere Formate stoßen. Nicht alle sind jedoch weitgehend von Browsern unterstützt; einige Kombinationen von Container und Codec erhalten manchmal aus praktischen Gründen oder aufgrund ihrer Allgegenwärtigkeit ihre eigenen Dateierweiterungen und MIME-Typen. Ein Beispiel hierfür ist eine Ogg-Datei mit nur einer Opus-Audio-Spur, die manchmal als Opus-Datei bezeichnet wird und möglicherweise sogar die Erweiterung `.opus` trägt, dennoch ist sie eigentlich nur eine Ogg-Datei.

In anderen Fällen ist ein bestimmter Codec, der in einem bestimmten Container-Typ gespeichert ist, so allgegenwärtig, dass die Paarung auf eine einzigartige Weise behandelt wird. Ein gutes Beispiel dafür ist die MP3-Audiodatei, die tatsächlich ein MPEG-1-Container mit einer einzigen Audiospur ist, die mit MPEG-1 Audio Layer III-Codierung kodiert ist. Diese Dateien verwenden den MIME-Typ `audio/mp3` und die Erweiterung `.mp3`, obwohl ihre Container einfach MPEG sind.

### Index der Media-Containerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, finden Sie es in dieser Liste und klicken Sie, um Details anzuzeigen, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, unter anderem.

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
        <p>Verfügbar nur, wenn es im zugrunde liegenden Medien-Framework des Betriebssystems verfügbar ist.
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
      <td>Nur ältere Versionen von Safari sowie andere Browser, die das QuickTime-Plugin von Apple unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, ist die Kompatibilität sowohl mit mobilen als auch mit Desktop-Browsern impliziert, wenn ein Browser hier aufgeführt ist. Die Unterstützung gilt auch nur für den Container selbst, nicht für spezifische Codecs.

### 3GP

Der **3GP** oder **3GPP** Media-Container wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten vorgesehen ist. Das Format wurde für die Verwendung auf 3G-Mobiltelefonen entwickelt, kann jedoch auch auf moderneren Telefonen und Netzwerken verwendet werden. Die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenlimits in den meisten Netzwerken haben jedoch die Notwendigkeit für das 3GP-Format verringert. Dieses Format wird jedoch weiterhin für langsamere Netzwerke und für schwächer leistungsfähige Telefone verwendet.

Dieses Media-Container-Format ist vom ISO Base Media File Format und MPEG-4 abgeleitet, jedoch speziell für Szenarien mit niedriger Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Media-Container; andere Typen können je nach verwendeten spezifischen Codec oder Codecs verwendet werden. Zusätzlich können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenfolge, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und um optional Informationen über das Profil, das Level und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

<table class="standard-table">
  <caption>
    Von 3GP unterstützte Video-Codecs
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
    Von 3GP unterstützte Audio-Codecs
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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das von MPEG-4 Part 3 für Audiodaten spezifiziert wird und für gestreamtes Audio, wie z.B. Internetradio, vorgesehen ist. Es ist im Wesentlichen ein fast reiner Datenstrom von AAC-Audiodaten, bestehend aus ADTS-Frames mit einem minimalen Header.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der für ADTS verwendete MIME-Typ hängt von der Art der enthaltenen Audioframes ab. Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden. Wenn die Audioframes im MPEG-1/MPEG-2 Audio Layer I-, II- oder III-Format vorliegen, sollte der MIME-Typ `audio/mpeg` sein.

<table class="standard-table">
  <caption>
    Von ADTS unterstützte Audio-Codecs
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

Der AAC-Support in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass er verfügbar ist, solange das Betriebssystem ihn unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein dazugehöriges einfaches Containerformat, das ebenfalls FLAC genannt wird und diese Audiodaten enthalten kann. Da das Format nicht durch Patente belastet ist, ist seine Verwendung frei von Beeinträchtigungen. FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                         |
| ----------------------------- |
| `audio/flac`                  |
| `audio/x-flac` (nicht standardisiert) |

<table class="standard-table">
  <caption>
    Von FLAC unterstützte Audio-Codecs
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

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch. Erstellt von der Moving Picture Experts Group (MPEG), werden diese Formate häufig in physischen Medien verwendet, einschließlich als Format des Videos auf DVD-Medien.

Im Internet ist vielleicht die häufigste Verwendung des MPEG-Dateiformats, um [Layer_III/MP3](https://en.wikipedia.org/wiki/MPEG-1) Sounddaten zu enthalten; die resultierenden Dateien sind die weltweit verbreiteten MP3-Dateien, die von digitalen Musikgeräten weltweit verwendet werden. Ansonsten werden MPEG-1 und MPEG-2 nicht häufig in Web-Inhalten verwendet.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 treten in den Mediendatenformaten und nicht im Containerformat auf. MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 eingeführt.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<table class="standard-table">
  <caption>
    Von MPEG-1 und MPEG-2 unterstützte Video-Codecs
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
    Von MPEG-1 und MPEG-2 unterstützte Audio-Codecs
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

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats. Es gibt zwei Versionen des Formats, die in den Teilen 1 und 14 der Spezifikation definiert sind. MP4 ist heute ein beliebter Container, da er mehrere der am häufigsten verwendeten Codecs unterstützt und breit unterstützt wird.

Das ursprüngliche MPEG-4 Part 1 Dateiformat wurde 1999 eingeführt; das Version 2-Format, definiert in Teil 14, wurde 2003 hinzugefügt. Das MP4-Dateiformat ist vom [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, das direkt vom [QuickTime-File-Format](https://en.wikipedia.org/wiki/QuickTime_File_Format) entwickelt von [Apple](https://www.apple.com/) abgeleitet ist.

Beim Spezifizieren des MPEG-4-Medientyps (`audio/mp4` oder `video/mp4`) können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenfolge, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und um optional Informationen über das Profil, das Level und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Media-Container; andere MIME-Typen können je nach im Container verwendeten spezifischen Codec oder Codecs verwendet werden. Zusätzlich können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenfolge, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und um optional Informationen über das Profil, das Level und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

<table class="standard-table">
  <caption>
    Von MPEG-4 unterstützte Video-Codecs
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
          Die Unterstützung von H.264 in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das Betriebssystem es unterstützt.
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
        <p>Die Unterstützung von AV1 in Firefox ist auf Windows auf ARM deaktiviert (aktivieren durch Setzen der Präferenz <code>media.av1.enabled</code> auf <code>true</code>).</p>
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
    Von MPEG-4 unterstützte Audio-Codecs
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
        <p>Die Unterstützung von H.264 in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das Betriebssystem es unterstützt.</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg)-Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird. Das Ogg-Framework definiert auch patentfreie Mediendatenformate, wie z.B. den Theora-Video-Codec und die Vorbis- und Opus-Audio-Codecs. [Xiph.org-Dokumente zum Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Website verfügbar.

Obwohl Ogg seit langer Zeit existiert, hat es nie die breite Unterstützung erlangt, die notwendig wäre, um es zu einer guten ersten Wahl für einen Media-Container zu machen. In der Regel ist es besser, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich ist, um es anzubieten, beispielsweise wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen. Zum Beispiel unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Weitere Informationen zu Ogg und seinen Codecs finden Sie im [Theora Kochbuch](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der MIME-Typ `application/ogg` kann verwendet werden, wenn Sie nicht unbedingt wissen, ob das Medium Audio oder Video enthält. Wenn es überhaupt möglich ist, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn Sie das Inhaltsformat oder die Formate nicht kennen.

Sie können auch [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter) zur MIME-Typ-Zeichenfolge, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und um optional die Track-Medienformate weiter zu beschreiben.

<table class="standard-table">
  <caption>
    Von Ogg unterstützte Video-Codecs
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
    Von Ogg unterstützte Audio-Codecs
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
> Ogg Opus-Audiodateien, die länger als 12 Stunden 35 Minuten 39 Sekunden sind, werden abgeschnitten und weisen Suchprobleme auf, wenn sie auf Firefox Linux 64 Bit abgespielt werden ([Firefox Bug 1810378](https://bugzil.la/1810378)).

### QuickTime

Das **QuickTime** Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für den Einsatz in ihrem gleichnamigen Medien-Framework geschaffen. Die Erweiterung für diese Dateien, `.mov`, kommt von der Tatsache, dass das Format ursprünglich für Filme verwendet wurde und üblicherweise als "QuickTime-Movie"-Format bezeichnet wurde. Während QTFF als Grundlage für das MPEG-4-Dateiformat gedient hat, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Text-Tracks usw. QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber einige Jahre lang war QuickTime für Windows verfügbar, um sie auf Windows zu nutzen. Allerdings wird QuickTime für Windows seit Anfang 2016 nicht mehr von Apple unterstützt und _sollte nicht verwendet werden_, da es bekannte Sicherheitsbedenken gibt. Windows Media Player hat jedoch jetzt eine integrierte Unterstützung für QuickTime-Version 2.0 und frühere Dateien; die Unterstützung für neuere Versionen von QuickTime erfordert zusätzliche Third-Party-Add-ons.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdateien und Codecs, sondern auch eine Vielzahl von populären und spezialisierten Audio- und Video-Codecs sowie Standbildformate. Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowsern, durch das QuickTime-Plugin oder direkte QuickTime-Integration) Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice lesen und schreiben; sowie Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr.

Darüber hinaus sind eine Reihe von Drittanbieter-Komponenten für QuickTime verfügbar, von denen einige die Unterstützung für zusätzliche Codecs hinzufügen.

Da die QuickTime-Unterstützung im Wesentlichen nur auf Apple-Geräte beschränkt ist, wird sie im Internet nicht mehr häufig verwendet. Apple selbst verwendet heutzutage normalerweise MP4 für Videos. Darüber hinaus wurde das QuickTime-Framework auf dem Mac schon seit einiger Zeit eingestellt und ist in macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der MIME-Typ `video/quicktime` ist der grundlegende Typ für den QuickTime-Media-Container. Es ist erwähnenswert, dass QuickTime (das Medien-Framework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenfolge, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und um optional Informationen über das Profil, das Level und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

<table class="standard-table">
  <caption>
    Von QuickTime unterstützte Video-Codecs
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
    Von QuickTime unterstützte Audio-Codecs
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

Das **Waveform Audio File Format** (**WAVE**), meist als WAV bezeichnet aufgrund der Dateierweiterung `.wav`, ist ein Format, das von Microsoft und IBM zur Speicherung von Audio-Bitstream-Daten entwickelt wurde.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und daher ähnlich zu anderen Formaten wie Apple's AIFF. Das WAV-Codec-Register ist unter {{RFC(2361)}} zu finden; jedoch verwenden fast alle WAV-Dateien lineares PCM, sodass die Unterstützung für die anderen Codecs spärlich ist.

Das WAVE-Format wurde 1991 erstmals veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der MIME-Typ `audio/wave` ist der Standardtyp und wird bevorzugt; jedoch wurden die anderen über die Jahre von verschiedenen Produkten verwendet und können auch in einigen Umgebungen verwendet werden.

<table class="standard-table">
  <caption>
    Von WAVE unterstützte Audio-Codecs
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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein Format, das auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basiert und speziell für den Einsatz in modernen Webumgebungen entwickelt wurde. Es basiert vollständig auf freien und offenen Technologien und verwendet in erster Linie Codecs, die ebenfalls frei und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und wird mittlerweile weitgehend unterstützt. Konforme Implementierungen von WebM sind verpflichtet, die VP8- und VP9-Video-Codecs sowie die Vorbis- und Opus-Audio-Codecs zu unterstützen. Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar. Jegliche andere Codecs benötigen möglicherweise eine Lizenz zur Nutzung.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<table class="standard-table">
  <caption>
    Von WebM unterstützte Video-Codecs
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
        <p>Die Unterstützung von AV1 in Firefox wurde zu macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67 hinzugefügt; und Firefox 68 auf Linux.
          Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist darauf ausgelegt, einen sicheren Prozess zu nutzen, der noch nicht auf Android unterstützt wird.
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
    Von WebM unterstützte Audio-Codecs
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

Es gibt einige Faktoren zu berücksichtigen, wenn Sie den besten Container oder die besten Container für Ihre Medien auswählen. Die relative Bedeutung jeder Option hängt von Ihren Bedürfnissen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Richtlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien tun werden. Die Wiedergabe von Medien ist etwas anderes als das Aufnehmen und/oder Bearbeiten dieser. Wenn Sie die Mediendaten manipulieren werden, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfreien komprimierten Formats zumindest die Ansammlung von Rauschen verhindert, da bei jeder Neu-Komprimierung Kompressionsartefakte multipliziert werden, die auftreten.

- Wenn Ihr Zielpublikum wahrscheinlich mobile Nutzer einschließt, insbesondere auf niedrigeren Geräten oder langsamen Netzwerken, sollten Sie in Erwägung ziehen, eine Version Ihrer Medien in einem 3GP-Container mit entsprechender Kompression bereitzustellen.
- Wenn Sie spezielle Codierungsanforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie möchten, dass Ihre Medien in einem nicht proprietären, offenen Format vorliegen, ziehen Sie die Verwendung eines der offenen Containerformate in Betracht, z.B. FLAC (für Audio) oder WebM (für Video).
- Wenn Sie aus irgendeinem Grund nur Medien in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf der breitesten Auswahl an Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur Audio enthalten, macht die Wahl eines nur-Audio-Containerformats wahrscheinlich Sinn. Jetzt, da die Patente alle abgelaufen sind, ist MP3 eine weit unterstützte und gute Wahl. WAVE ist gut, aber unkomprimiert, also seien Sie sich dessen bewusst, bevor Sie es für große Audiodaten verwenden. FLAC ist eine sehr gute Wahl aufgrund seiner verlustfreien Kompression, wenn die Zielbrowser es alle unterstützen.

Leider werden keiner der relativ wichtigen verlustfreien Komprimierungsformate (FLAC und ALAC) universell unterstützt. FLAC ist von beiden der breiter unterstützte, wird jedoch von macOS nicht ohne zusätzliche installierte Software unterstützt und auf iOS überhaupt nicht unterstützt. Wenn Sie verlustfreies Audio anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um nahe an universelle Kompatibilität heranzukommen.

### Ratschläge zur Containerwahl

Die nachstehenden Tabellen bieten vorgeschlagene Container für verschiedene Szenarien. Diese sind nur Vorschläge. Stellen Sie sicher, dass Sie die Bedürfnisse Ihrer Anwendung und Ihrer Organisation berücksichtigen, bevor Sie sich für ein Containerformat entscheiden.

#### Nur-Audio-Dateien

| Wenn Sie benötigen…                                  | Erwägen Sie die Verwendung dieses Containerformats |
| --------------------------------------------- | ------------------------------------ |
| Komprimierte Dateien für die allgemeine Wiedergabe | MP3 (MPEG-1 Audio Layer III)         |
| Verlustfrei komprimierte Dateien                   | FLAC mit ALAC-Fallback              |
| Unkomprimierte Dateien                            | WAV                                  |

Jetzt, da alle MP3-Patente abgelaufen sind, ist die Entscheidung, welches Audio-Dateiformat verwendet werden soll, viel einfacher. Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, Lizenzgebühren bei der Verwendung zu zahlen, zu entscheiden.

#### Videodateien

| Wenn Sie benötigen…                                        | Erwägen Sie die Verwendung dieses Containerformats                |
| --------------------------------------------------- | --------------------------------------------------- |
| Allgemeine Videozwecke, vorzugsweise in einem offenen Format | WebM (idealerweise mit MP4-Fallback)                    |
| Allgemeine Videozwecke                               | MP4 (idealerweise mit WebM oder Ogg-Fallback)             |
| Hochkomprimiertes Video optimiert für langsame Verbindungen     | 3GP (idealerweise mit MP4-Fallback)                     |
| Kompatibilität mit älteren Geräten/Browsern           | QuickTime (idealerweise mit AVI und/oder MPEG-2-Fallback) |

Diese Vorschläge gehen von einigen Annahmen aus. Sie sollten die Optionen sorgfältig prüfen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die codiert werden müssen.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, ist es sinnvoll, mehr als eine Version von Mediendateien bereitzustellen und das {{HTMLElement("source")}}-Element zu verwenden, um jede Quelle innerhalb des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements anzugeben. Zum Beispiel können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einem Fallback im MP4-Format. Sie könnten sogar einen retroartigen QuickTime- oder AVI-Fallback zum guten Maßstab anbieten.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut. Fügen Sie dann untergeordnete {{HTMLElement("source")}}-Elemente innerhalb des `<video>`-Elements hinzu, eines für jede Version des Videos, die Sie anbieten. Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Bandbreitenverfügbarkeit ausgewählt werden können, aber in unserem Fall werden wir es verwenden, um Formatoptionen anzubieten.

Im hier gezeigten Beispiel wird dem Browser ein Video in zwei Formaten angeboten: WebM und MP4.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type) Attribut auf `video/webm` gesetzt). Wenn der {{Glossary("user_agent", "User Agent")}} dies nicht abspielen kann, wechselt er zur nächsten Option, deren `type` als `video/mp4` angegeben ist. Wenn keine dieser Optionen abgespielt werden kann, wird der Text "Dieser Browser unterstützt das HTML-Video-Element nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                                |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Formatspezifikation                                                                                   |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                             |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                             |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 Dateiformat)                                                                | Definiert das MPEG-4 (MP4) Version 2-Containerformat                                                             |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                              |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateierweiterungen                                                                 |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Film (MOV) Format                                                                        |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das dem WAVE-Format am nächsten kommende offizielle Spezifikation                                                             |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (wird von WAV verwendet)            | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                          |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden für die Anpassung von Matroska für WebM                                                                            |
| [Matroska Specifications](https://www.matroska.org/index.html)                                                                                               | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                    |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM-Byte-Stream-Format für die Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

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
      <th scope="col" style="vertical-align: bottom">Erweiterungen</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browser-Unterstützung
      </th>
      <th scope="col" style="vertical-align: bottom">MIME-Typ</th>
      <th scope="col" style="vertical-align: bottom">Erweiterungen</th>
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
      <th scope="row" style="vertical-align: top">WAV (Waveform Audiofile)</th>
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

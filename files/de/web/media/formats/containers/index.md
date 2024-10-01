---
title: Media-Containerformate (Dateitypen)
slug: Web/Media/Formats/Containers
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das Format von Audio- und Video-Mediadateien wird in zwei Teilen definiert (drei, wenn eine Datei sowohl Audio als auch Video enthält): die verwendeten Audio- und/oder Videocodecs und das verwendete Media-Containerformat (oder Dateityp).
In diesem Leitfaden betrachten wir die am häufigsten im Web verwendeten Containerformate und behandeln Grundlagen ihrer Spezifikationen sowie ihre Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container.
Stattdessen streamt es die codierten Audio- und Videospuren direkt von einem Peer zum anderen, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte verwendet werden, um jede Spur darzustellen.
Weitere Informationen zu Codecs, die häufig für WebRTC-Anrufe verwendet werden, sowie Informationen zur Browser-Kompatibilität von Codecs in WebRTC finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

## Häufige Containerformate

Obwohl es eine Vielzahl von Media-Containerformaten gibt, sind die unten aufgeführten diejenigen, denen Sie am wahrscheinlichsten begegnen werden.
Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen.
Die Mime-Typen und Erweiterungen für jedes Format sind aufgeführt. Die am häufigsten im Web verwendeten Container für Medien sind wahrscheinlich MPEG-4 (MP4), Web Media File (WEBM) und MPEG Audio Layer III (MP3).
Sie können jedoch auch auf MP3, Ogg, WAV, AVI, MOV und andere Formate stoßen.
Nicht alle sind jedoch von Browsern breit unterstützt; einige Kombinationen aus Container und Codec erhalten manchmal ihre eigenen Dateierweiterungen und Mime-Typen aus Gründen der Bequemlichkeit oder wegen ihrer Allgegenwart.
Ein Beispiel ist eine Ogg-Datei mit nur einer Opus-Audiospur, die manchmal als Opus-Datei bezeichnet wird und möglicherweise die Erweiterung `.opus` hat.
Es handelt sich jedoch immer noch um eine Ogg-Datei.

In anderen Fällen ist ein bestimmter Codec, der in einem bestimmten Container-Typ gespeichert ist, so allgegenwärtig, dass die Kombination auf eine einzigartige Weise behandelt wird.
Ein gutes Beispiel dafür ist die MP3-Audiodatei, die tatsächlich ein MPEG-1-Container mit einer einzigen Audiospur ist, die mit MPEG-1 Audio Layer III-Codierung codiert ist.
Diese Dateien verwenden den Mime-Typ `audio/mp3` und die Erweiterung `.mp3`, obwohl ihre Container nur MPEG sind.

### Index der Media-Containerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, suchen Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, sowie andere Spezifika.

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
        <p>Verfügbar nur, wenn das zugrunde liegende Medien-Framework des Betriebssystems es unterstützt.
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
      <td>Nur ältere Versionen von Safari sowie andere Browser, die das QuickTime-Plugin von Apple unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, wird sowohl mobile als auch Desktop-Browser-Kompatibilität impliziert, wenn ein Browser hier aufgeführt ist.
Die Unterstützung bezieht sich auch nur auf den Container selbst, nicht auf spezifische Codecs.

### 3GP

Der **3GP** oder **3GPP** Mediencontainer wird verwendet, um Audio- und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf Mobilgeräten vorgesehen ist.
Das Format wurde für den Einsatz auf 3G-Mobiltelefonen entwickelt, kann aber auch auf moderneren Telefonen und Netzwerken verwendet werden.
Die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenlimits in den meisten Netzwerken haben jedoch den Bedarf für das 3GP-Format verringert.
Trotzdem wird dieses Format noch für langsamere Netzwerke und für leistungsschwächere Telefone verwendet.

Dieses Media-Containerformat ist vom ISO Base Media File Format und MPEG-4 abgeleitet, wurde jedoch speziell für Szenarien mit niedriger Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen des 3GP-Mediencontainers; andere Typen können je nach verwendetem Codec oder Codecs eingesetzt werden.
Darüber hinaus können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional Details über das Profil, das Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

<table class="standard-table">
  <caption>
    Von 3GP unterstützte Videocodecs
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
    Von 3GP unterstützte Audiocodecs
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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das in MPEG-4 Part 3 für Audiodaten spezifiziert ist und für gestreamte Audiodaten gedacht ist, wie z.B. für Internetradio.
Es handelt sich im Wesentlichen um einen nahezu nackten Stream von AAC-Audiodaten, der aus ADTS-Frames mit einem minimalen Header besteht.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der Mime-Typ, der für ADTS verwendet wird, hängt davon ab, welche Art von Audio-Frames enthalten sind.
Wenn ADTS-Frames verwendet werden, sollte der Mime-Typ `audio/aac` verwendet werden.
Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I, II oder III-Format vorliegen, sollte der Mime-Typ `audio/mpeg` sein.

<table class="standard-table">
  <caption>
    Von ADTS unterstützte Audiocodecs
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
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

Die Unterstützung von AAC durch Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, so dass es verfügbar ist, solange das Betriebssystem es unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein damit assoziiertes einfaches Containerformat, das ebenfalls FLAC genannt wird und dieses Audio enthalten kann.
Das Format ist durch keine Patente belastet, sodass seine Nutzung frei von Beeinträchtigungen ist.
FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                                 |
| ------------------------------------- |
| `audio/flac`                          |
| `audio/x-flac` (nicht standardisiert) |

<table class="standard-table">
  <caption>
    Von FLAC unterstützte Audiocodecs
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
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG/MPEG-2

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch.
Diese Formate wurden von der Moving Picture Experts Group (MPEG) erstellt und sind in physischen Medien weit verbreitet, unter anderem als Format für Videos auf DVD-Medien.

Im Internet ist die wohl häufigste Verwendung des MPEG-Dateiformats das Enthalten von [Layer_III/MP3](https://en.wikipedia.org/wiki/MPEG-1) Sounddaten; die resultierenden Dateien sind die weltweit weit verbreiteten MP3-Dateien, die von digitalen Musikgeräten verwendet werden.
Ansonsten sind MPEG-1 und MPEG-2 im Web nicht weit verbreitet.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 betreffen die Mediendatenformate und nicht das Containerformat.
MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 vorgestellt.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<table class="standard-table">
  <caption>
    Von MPEG-1 und MPEG-2 unterstützte Videocodecs
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
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2 Part 2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Von MPEG-1 und MPEG-2 unterstützte Audiocodecs
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
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer II</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG-4 (MP4)

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats.
Es gibt zwei Versionen des Formats, die in den Teilen 1 und 14 der Spezifikation definiert sind.
MP4 ist heute ein beliebter Container, da es mehrere der am häufigsten verwendeten Codecs unterstützt und weit unterstützt wird.

Das ursprüngliche MPEG-4 Part 1-Dateiformat wurde 1999 eingeführt; das Version 2-Format, das in Teil 14 definiert ist, wurde 2003 hinzugefügt.
Das MP4-Dateiformat ist vom [ISO basis Mediadateiformat](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, das direkt vom [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) entwickelt von [Apple](https://www.apple.com/) abgeleitet ist.

Bei der Angabe des MPEG-4-Medientyps (`audio/mp4` oder `video/mp4`) können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional Details über das Profil, das Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen des MPEG-4-Mediencontainers; andere MIME-Typen können je nach den spezifischen Codecs, die im Container verwendet werden, eingesetzt werden.
Darüber hinaus können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional Details über das Profil, das Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

<table class="standard-table">
  <caption>
    Von MPEG-4 unterstützte Videocodecs
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
        <p>Yes</p>
        <p>
          Die Unterstützung von H.264 durch Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das Betriebssystem es unterstützt.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AV1</th>
      <td></td>
      <td></td>
      <td>
        <p>Yes</p>
        <p>Die Unterstützung von AV1 durch Firefox ist unter Windows auf ARM deaktiviert (Aktivierung durch Setzen der Einstellung <code>media.av1.enabled</code> auf <code>true</code>).</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Von MPEG-4 unterstützte Audiocodecs
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
        <p>Yes</p>
        <p>Die Unterstützung von H.264 durch Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das Betriebssystem es unterstützt.</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Ogg

Das [Ogg](https://en.wikipedia.org/wiki/Ogg)-Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird.
Das Ogg-Framework definiert auch patentfreie Mediendatenformate, wie den Theora-Videocodec und die Vorbis- sowie Opus-Audiocodecs.
[Xiph.org-Dokumente zum Ogg-Format](https://xiph.org/ogg/) sind auf deren Webseite verfügbar.

Obwohl Ogg schon lange existiert, hat es nie die breite Unterstützung erlangt, die nötig wäre, um es zu einer guten ersten Wahl für einen Media-Container zu machen.
Sie sind in der Regel besser bedient, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg hilfreich ist, wie z.B. wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die noch kein WebM unterstützen.
Zum Beispiel unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Mehr Informationen über Ogg und seine Codecs finden Sie im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der Mime-Typ `application/ogg` kann verwendet werden, wenn Sie nicht wissen, ob das Medium Audio oder Video enthält.
Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn Sie das Inhaltsformat oder die -formate nicht kennen.

Sie können auch [den `codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) zur MIME-Typ-Zeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional die Spurmedienformate weiter zu beschreiben.

<table class="standard-table">
  <caption>
    Von Ogg unterstützte Videocodecs
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
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Von Ogg unterstützte Audiocodecs
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
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Ogg Opus-Audiodateien, die länger als 12h 35m 39s sind, werden abgeschnitten und weisen Suchprobleme auf, wenn sie unter Firefox Linux 64 Bit abgespielt werden ([Firefox Bug 1810378](https://bugzilla.mozilla.org/show_bug.cgi?id=1810378)).

### QuickTime

Das **QuickTime** Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für die Verwendung durch sein gleichnamiges Medien-Framework erstellt.
Die Erweiterung für diese Dateien, `.mov`, kommt daher, dass das Format ursprünglich für Filme verwendet wurde und normalerweise als "QuickTime-Film" format bezeichnet wurde.
Obwohl QTFF als Basis für das MPEG-4-Dateiformat diente, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Textspuren und so weiter.
QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber über mehrere Jahre hinweg war QuickTime für Windows verfügbar, um auf Windows darauf zuzugreifen.
Allerdings wird QuickTime für Windows seit Anfang 2016 nicht mehr von Apple unterstützt und _sollte nicht verwendet werden_, da es bekannte Sicherheitsprobleme gibt.
Allerdings hat der Windows Media Player jetzt integrierte Unterstützung für QuickTime-Dateien bis Version 2.0 und früher; die Unterstützung für spätere Versionen von QuickTime erfordert Drittanbietererweiterungen.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdaten und Codecs, sondern unterstützte eine große Anzahl von populären und spezialisierten Audio- und Videocodecs sowie Standbildformate.
Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowsern durch das QuickTime-Plugin oder direkte QuickTime-Integration) Audioformate lesen und schreiben, darunter AAC, AIFF, MP3, PCM und Qualcomm PureVoice; und Videoformate einschließlich AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr.

Darüber hinaus sind eine Reihe von Drittanbieterkomponenten für QuickTime verfügbar, von denen einige die Unterstützung für zusätzliche Codecs ergänzen.

Da die QuickTime-Unterstützung im Wesentlichen nur auf Apple-Geräten verfügbar ist, wird sie im Internet nicht mehr weit verbreitet verwendet.
Apple selbst verwendet jetzt im Allgemeinen MP4 für Video.
Darüber hinaus wurde das QuickTime-Framework auf dem Mac seit einiger Zeit als veraltet eingestuft und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der Mime-Typ `video/quicktime` ist der grundlegende Typ für den QuickTime-Mediencontainer.
Es ist bemerkenswert, dass QuickTime (das Medien-Framework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional Details über das Profil, das Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

<table class="standard-table">
  <caption>
    Von QuickTime unterstützte Videocodecs
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
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Cinepak</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Component Video</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">DV</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.261</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Motion JPEG</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 2</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 3</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Von QuickTime unterstützte Audiocodecs
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
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ALaw 2:1</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Apple Lossless (ALAC)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Microsoft ADPCM</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law 2:1 (u-Law)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WAVE (WAV)

Das **Waveform Audio File Format** (**WAVE**), das aufgrund seiner Dateierweiterung `.wav` üblicherweise als WAV bezeichnet wird, ist ein Format, das von Microsoft und IBM entwickelt wurde, um Audio-Bitstromdaten zu speichern.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und ähnelt daher anderen Formaten wie Apples AIFF.
Das WAV Codec-Register kann unter {{RFC(2361)}} gefunden werden; jedoch verwenden fast alle WAV-Dateien lineares PCM, weshalb die Unterstützung für die anderen Codecs spärlich ist.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der Mime-Typ `audio/wave` ist der standardmäßige Typ und wird bevorzugt; allerdings wurden die anderen über die Jahre von verschiedenen Produkten verwendet und können auch in einigen Umgebungen verwendet werden.

<table class="standard-table">
  <caption>
    Von WAVE unterstützte Audiocodecs
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
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">GSM 06.10</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LPCM (Linear Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>Yes</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law (u-Law)</th>
      <td></td>
      <td></td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein Format, das auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basiert und speziell für den Einsatz in modernen Webumgebungen entwickelt wurde.
Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die ihrerseits frei und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde 2010 erstmals vorgestellt und ist mittlerweile weit verbreitet unterstützt.
Kompatible Implementierungen von WebM müssen die VP8- und VP9-Videocodecs sowie die Vorbis- und Opus-Audiocodecs unterstützen.
Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar.
Andere Codecs können eine Lizenz erfordern, um sie zu verwenden.

| Audio        | Video        |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<table class="standard-table">
  <caption>
    Von WebM unterstützte Videocodecs
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
      <td>Yes</td>
      <td>Yes</td>
      <td>
        <p>Yes</p>
        <p>Die Unterstützung von AV1 durch Firefox wurde macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und Firefox 68 unter Linux.
          Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist so konzipiert, dass sie einen sicheren Prozess verwendet, der auf Android noch nicht unterstützt wird.
        </p>
      </td>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Von WebM unterstützte Audiocodecs
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
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Die richtige Wahl des Containers

Bei der Auswahl des besten Containers oder der besten Container für Ihre Medien sind einige Faktoren zu beachten.
Die relative Bedeutung jedes Faktors hängt von Ihren Bedürfnissen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Leitlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien vorhaben.
Die Wiedergabe von Medien ist etwas anderes als das Aufzeichnen und/oder Bearbeiten.
Wenn Sie die Mediendaten manipulieren möchten, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfrei komprimierten Formats zumindest die Ansammlung von Rauschen vermeidet, da Kompressionsartefakte mit jedem erneuten Komprimierungsvorgang vervielfacht werden.

- Wenn Ihr Zielpublikum wahrscheinlich Nutzer auf Mobilgeräten umfasst, insbesondere auf Geräten mit geringerer Ausstattung oder in langsamen Netzwerken, sollten Sie in Erwägung ziehen, eine Version Ihrer Medien in einem 3GP-Container mit entsprechender Kompression bereitzustellen.
- Wenn Sie spezifische Codierungsanforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie möchten, dass Ihre Medien in einem nicht proprietären, offenen Format sind, sollten Sie eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) in Betracht ziehen.
- Wenn Sie aus irgendeinem Grund nur Medien in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf den meisten Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihr Medium nur aus Audio besteht, macht es wahrscheinlich Sinn, ein reines Audio-Containerformat zu wählen.
  Jetzt, da die Patente abgelaufen sind, ist MP3 eine weit verbreitete und gute Wahl.
  WAVE ist gut, aber unkomprimiert, daher sollten Sie sich dessen bewusst sein, bevor Sie es für große Audio-Samples verwenden.
  FLAC ist eine sehr gute Wahl, aufgrund seiner verlustfreien Kompression, wenn die Zielbrowser es alle unterstützen.

Leider werden weder der relativ große verlustfreie Kompressionsformat (FLAC und ALAC) universell unterstützt.
FLAC ist von beiden das breiter unterstützte, wird jedoch von macOS ohne zusätzlich installierte Software nicht unterstützt und auf iOS überhaupt nicht unterstützt.
Wenn Sie verlustfreies Audio anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um nahe an eine universelle Kompatibilität heranzukommen.

### Beratung zur Auswahl des Containers

Die Tabellen unten bieten empfohlene Container für verschiedene Szenarien.
Dies sind nur Vorschläge.
Überlegen Sie sich die Anforderungen Ihrer Anwendung und Ihrer Organisation, bevor Sie sich für ein Containerformat entscheiden.

#### Nur-Audio-Dateien

| Wenn Sie brauchen…                              | Denken Sie über dieses Containerformat nach |
| ----------------------------------------------- | ------------------------------------------- |
| Komprimierte Dateien zur allgemeinen Wiedergabe | MP3 (MPEG-1 Audio Layer III)                |
| Verlustfrei komprimierte Dateien                | FLAC mit ALAC-Alternativlösung              |
| Unkomprimierte Dateien                          | WAV                                         |

Da alle MP3-Patente abgelaufen sind, ist die Wahl des Audio-Dateiformats viel einfacher geworden.
Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, Lizenzgebühren zu zahlen, zu wählen.

#### Videodateien

| Wenn Sie brauchen…                                                    | Denken Sie über dieses Containerformat nach                       |
| --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Allgemeine Anwendung von Videos, vorzugsweise in einem offenen Format | WebM (idealerweise mit MP4-Alternativlösung)                      |
| Allgemeine Anwendung von Videos                                       | MP4 (idealerweise mit WebM oder Ogg-Alternativlösung)             |
| Hohe Kompression optimiert für langsame Verbindungen                  | 3GP (idealerweise mit MP4-Alternativlösung)                       |
| Kompatibilität mit älteren Geräten/Browsers                           | QuickTime (idealerweise mit AVI und/oder MPEG-2-Alternativlösung) |

Diese Vorschläge machen eine Reihe von Annahmen.
Sie sollten die Optionen sorgfältig abwägen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die codiert werden müssen.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, sollten Sie erwägen, mehr als eine Version von Mediendateien bereitzustellen, indem Sie das {{HTMLElement("source")}}-Element verwenden, um jede Quelle innerhalb des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements anzugeben.
Zum Beispiel können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einer MP4-fallback Option.
Sie könnten sogar erwägen, ein Retro-ähnliches QuickTime oder AVI fallback aus Spaß bereitzustellen.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) ohne [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut.
Fügen Sie dann untergeordnete {{HTMLElement("source")}}-Elemente innerhalb des `<video>`-Elements hinzu, eines für jede Version des Videos, die Sie anbieten.
Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Bandbreitenverfügbarkeit ausgewählt werden können, aber in unserem Fall werden wir es verwenden, um Formatoptionen anzubieten.

Im hier gezeigten Beispiel wird ein Video dem Browser in zwei Formaten angeboten: WebM und MP4.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut auf `video/webm` gesetzt).
Wenn der {{Glossary("user_agent", "Benutzeragent")}} dies nicht abspielen kann, geht er zur nächsten Option über, deren `type` als `video/mp4` angegeben ist.
Wenn keine dieser Optionen abgespielt werden kann, wird der Text "This browser does not support the HTML video element." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                      |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                                |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die Spezifikation des FLAC-Formats                                                                                     |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                                   |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                                   |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 Dateiformat)                                                                | Definiert das MPEG-4 (MP4) Version 2 Containerformat                                                                   |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                               |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                      |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medienarten und Dateierweiterungen                                                                   |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime movie (MOV)-Format                                                                             |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das nächstgelegene Dokument zur offiziellen WAVE-Spezifikation                                                         |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet von WAV)      | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                        |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden für die Anpassung von Matroska für WebM                                                                      |
| [Matroska Specifications](https://matroska.org/index.html)                                                                                                   | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                               |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM-Byte-Stream-Format für die Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

## Browser-Kompatibilität

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">
        Containerformat-Name
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
      <th scope="col" style="vertical-align: bottom">Mime-Typ</th>
      <th scope="col" style="vertical-align: bottom">Erweiterung(en)</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browser-Unterstützung
      </th>
      <th scope="col" style="vertical-align: bottom">Mime-Typ</th>
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
      <th scope="row" style="vertical-align: top">WAV (Waveform Audiodatei)</th>
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

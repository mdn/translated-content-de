---
title: Medien-Containerformate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein **Mediencontainer** ist ein Dateiformat, das einen oder mehrere Mediastreams (wie Audio oder Video) samt Metadaten kapselt, wodurch sie zusammen gespeichert und wiedergegeben werden können. Das Format von Audio- und Videodateien wird durch mehrere Komponenten definiert, einschließlich der verwendeten Audio- und/oder Videocodecs, des Mediencontainerformats (oder Dateityps) und optional anderer Elemente wie Untertitelcodecs oder Metadaten. In diesem Leitfaden betrachten wir die auf dem Web am häufigsten verwendeten Containerformate, einschließlich der Grundlagen ihrer Spezifikationen sowie ihrer Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container. Stattdessen streamt es die codierten Audio- und Videospuren direkt von einem Peer zu einem anderen, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte verwendet werden, um jede Spur darzustellen. Siehe [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Informationen über Codecs, die häufig für WebRTC-Anrufe verwendet werden, sowie Informationen zur Browser-Kompatibilität bezüglich Codec-Unterstützung in WebRTC.

## Häufige Containerformate

Obwohl es eine Vielzahl von Mediencontainerformaten gibt, sind die unten aufgelisteten diejenigen, denen Sie am wahrscheinlichsten begegnen werden. Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen. Die MIME-Typen und Erweiterungen für jedes sind aufgelistet. Die am häufigsten für Medien im Web verwendeten Container sind wahrscheinlich MPEG-4 Teil-14 (MP4) und Web Media File (WEBM). Sie können jedoch auch auf Ogg, WAV, AVI, MOV und andere Formate stoßen. Nicht alle diese sind breit von Browsern unterstützt; einige Kombinationen aus Container und Codec erhalten manchmal ihre eigenen Dateierweiterungen und MIME-Typen aus Bequemlichkeit oder aufgrund ihrer Allgegenwärtigkeit. Zum Beispiel wird eine Ogg-Datei mit nur einer Opus-Audiospur manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben. Aber es ist immer noch eigentlich nur eine Ogg-Datei.

In einigen Fällen wird die Verwendung eines bestimmten Codecs so allgegenwärtig, dass seine Verwendung als einzigartiges Format behandelt wird. Ein hervorragendes Beispiel ist die MP3-Audiodatei, die nicht in einem konventionellen Container gespeichert ist. Stattdessen ist eine MP3-Datei im Wesentlichen ein Stream aus MPEG-1 Audio Layer III-codierten Frames, oft begleitet von Metadaten wie ID3-Tags. Diese Dateien verwenden den MIME-Typ `audio/mpeg` und die Erweiterung `.mp3`.

### Index der Mediencontainerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, finden Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, für was der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, unter anderem.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codecname (kurz)</th>
      <th scope="col">Vollständiger Codecname</th>
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
        <p>Verfügbar nur, wenn es im Medienframework des zugrunde liegenden Betriebssystems verfügbar ist.
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
      <td>Apple QuickTime Movie</td>
      <td>Nur ältere Versionen von Safari sowie andere Browser, die Apples QuickTime-Plugin unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, wird sowohl die mobile als auch die Desktop-Browser-Kompatibilität impliziert, wenn ein Browser hier aufgeführt ist. Die Unterstützung bezieht sich auch nur auf den Container selbst, nicht auf spezifische Codecs.

### 3GP

Der **3GP**- oder **3GPP**-Mediencontainer wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten vorgesehen ist. Das Format wurde für die Verwendung auf 3G-Mobiltelefonen entwickelt, kann aber auch auf moderneren Telefonen und Netzwerken verwendet werden. Aber die verbesserte Bandbreite und die erhöhten Datenlimits in den meisten Netzwerken haben die Notwendigkeit für das 3GP-Format vermindert. Dieses Format wird jedoch noch für langsamere Netzwerke und für weniger leistungsfähige Telefone verwendet.

Dieses Mediencontainerformat ist vom ISO Base Media File Format und MPEG-4 abgeleitet, aber spezifisch für Situationen mit niedriger Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediencontainer; andere Typen können je nach den im Einsatz befindlichen spezifischen Codecs verwendet werden. Zusätzlich können Sie den [Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifika bereitzustellen.

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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das durch MPEG-4 Teil 3 für Audio-Daten spezifiziert ist, die für das Streaming von Audio, wie es für Internetradio verwendet wird, vorgesehen sind. Es handelt sich im Wesentlichen um einen fast reinen Stream von AAC-Audiodaten, bestehend aus ADTS-Frames mit einem minimalen Header.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der MIME-Typ, der für ADTS verwendet wird, hängt davon ab, welche Art von Audio-Frames enthalten sind. Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden. Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I, II oder III-Format vorliegen, sollte der MIME-Typ `audio/mpeg` sein.

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

Die Unterstützung von AAC in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass sie verfügbar ist, solange das Betriebssystem sie unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein zugehöriges Containerformat, das ebenfalls FLAC genannt wird, und diesen Audioinhalt enthalten kann. Das Format ist nicht durch Patente belastet, sodass seine Nutzung vor Eingriffen geschützt ist. FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                                |
| ------------------------------------ |
| `audio/flac`                         |
| `audio/x-flac` (nicht standardgemäß) |

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
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG/MPEG-2

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch. Erstellt von der Moving Picture Experts Group (MPEG), sind diese Formate weit verbreitet in physischen Medien, einschließlich als das Format des Videos auf DVD-Medien.

Im Internet ist die vielleicht häufigste Anwendung des MPEG-Standards für [MPEG-1 Audio Layer III](https://en.wikipedia.org/wiki/MPEG-1), allgemein bekannt als MP3, Sounddaten. Diese MP3-Dateien sind mit digitalen Musikgeräten weltweit sehr beliebt, auch wenn MPEG-1 und MPEG-2 insgesamt nicht weit verbreitet in anderen Webinhalten verwendet werden.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 liegen in den Mediendatenformaten und nicht im Containerformat. MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 eingeführt.

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

Das ursprüngliche MPEG-4 Part 1-Dateiformat wurde 1999 eingeführt; das Version 2-Format, das in Teil 14 definiert ist, wurde 2003 hinzugefügt. Das MP4-Dateiformat ist vom [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, das direkt vom [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) stammt, das von [Apple](https://www.apple.com/) entwickelt wurde.

Beim Festlegen des MPEG-4-Mediatyps (`audio/mp4` oder `video/mp4`) können Sie den [Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifika bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediencontainer; andere MIME-Typen können je nach den im Container verwendeten spezifischen Codecs verwendet werden. Zusätzlich können Sie den [Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifika bereitzustellen.

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
        <p>Ja</p>
        <p>
          Die Unterstützung von H.264 in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass sie verfügbar ist, solange das Betriebssystem sie unterstützt.
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
        <p>Ja</p>
        <p>Die Unterstützung von H.264 in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass sie verfügbar ist, solange das Betriebssystem sie unterstützt.</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg)-Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird. Das Ogg-Framework definiert auch patentfreie Mediendatenformate, wie den Theora-Videocodec und die Vorbis- und Opus-Audiocodecs. [Xiph.org-Dokumentationen zum Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Website verfügbar.

Obwohl Ogg schon lange existiert, hat es nie die breite Unterstützung erlangt, die es zu einer guten ersten Wahl für einen Mediencontainer machen würde. In der Regel ist es besser, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich sein kann, zum Beispiel wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die noch kein WebM unterstützen. Firefox 3.5 und 3.6 unterstützen zum Beispiel Ogg, aber nicht WebM.

Sie können mehr Informationen über Ogg und seine Codecs im [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/) finden.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der MIME-Typ `application/ogg` kann verwendet werden, wenn Sie nicht zwingend wissen, ob die Medien Audio oder Video enthalten. Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn das Inhaltsformat oder die Formate nicht bekannt sind.

Sie können auch den [Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional die Track-Mediendatenformate weiter zu beschreiben.

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
> Ogg Opus Audio-Dateien, die länger als 12h 35m 39s sind, werden abgeschnitten und zeigen Suchprobleme, wenn sie auf Firefox Linux 64 Bit abgespielt werden ([Firefox Bug 1810378](https://bugzil.la/1810378)).

### QuickTime

Das **QuickTime**-Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für sein gleichnamiges Medien-Framework erstellt. Die Erweiterung für diese Dateien, `.mov`, stammt davon, dass das Format ursprünglich für Filme verwendet wurde und gewöhnlich als „QuickTime-Film“-Format bezeichnet wurde. Während QTFF die Grundlage für das MPEG-4-Dateiformat bildete, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art zeitbasierter Daten, einschließlich Audio- und Videomedien, Texttracks und dergleichen. QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber für einige Jahre war QuickTime für Windows verfügbar, um sie auf Windows zu verwenden. QuickTime für Windows wird jedoch seit Anfang 2016 nicht mehr von Apple unterstützt und sollte _nicht verwendet werden_, da bekannte Sicherheitsbedenken bestehen. Windows Media Player hat jedoch jetzt Unterstützung für QuickTime-Versionen 2.0 und früher integriert; Unterstützung für spätere Versionen von QuickTime erfordert Drittanbieter-Add-ons.

Auf macOS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdateien und Codecs, sondern auch eine Vielzahl bekannter und spezieller Audio- und Video-Codecs sowie Standbildformate. Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowser über das QuickTime-Plugin oder direkte QuickTime-Integration) Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice lesen und schreiben; und Videoformate einschließlich AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Teil 2, Sorenson und viele mehr.

Darüber hinaus sind eine Reihe von Drittanbieterkomponenten für QuickTime verfügbar, von denen einige Unterstützung für zusätzliche Codecs hinzufügen.

Da QuickTime-Unterstützung im Wesentlichen hauptsächlich auf Apple-Geräten verfügbar ist, wird es im Internet nicht mehr weit verbreitet verwendet. Apple selbst verwendet jetzt meist MP4 für Videos. Außerdem ist das QuickTime-Framework auf dem Mac seit einiger Zeit veraltet und ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der MIME-Typ `video/quicktime` ist der grundlegende Typ für den QuickTime-Mediencontainer. Es sei darauf hingewiesen, dass QuickTime (das Medien-Framework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können den [Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifika bereitzustellen.

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

Das **Waveform Audio File Format** (**WAVE**), gemeinhin aufgrund seiner Dateierweiterung `.wav` als WAV bezeichnet, ist ein Format, das von Microsoft und IBM entwickelt wurde, um Audio-Bitstream-Daten zu speichern.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und daher ähnlich wie andere Formate wie Apples AIFF. Das WAV-Codec-Register kann bei {{RFC(2361)}} gefunden werden; jedoch verwenden fast alle WAV-Dateien lineares PCM, und die Unterstützung für die anderen Codecs ist spärlich.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der MIME-Typ `audio/wave` ist der Standard-Typ und wird bevorzugt; die anderen wurden jedoch im Laufe der Jahre von verschiedenen Produkten verwendet und können in einigen Umgebungen ebenfalls verwendet werden.

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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basierendes Format, das speziell für den Einsatz in modernen Web-Umgebungen konzipiert ist. Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die ebenfalls kostenlos und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und wird mittlerweile weit unterstützt. Konforme Implementierungen von WebM müssen die VP8- und VP9-Videocodecs sowie die Vorbis- und Opus-Audiocodecs unterstützen. Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar. Andere Codecs können eine Lizenz für deren Nutzung erfordern.

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
      <td>Ja</td>
      <td>Ja</td>
      <td>
        <p>Ja</p>
        <p>Die Unterstützung von AV1 in Firefox wurde in der Version 66 für macOS hinzugefügt; für Windows in Firefox 67; und Firefox 68 für Linux. Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist so konzipiert, dass sie einen sicheren Prozess verwendet, der in Android noch nicht unterstützt wird.
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

## Die richtige Auswahl des Containers

Bei der Auswahl des besten Containers oder der besten Container für Ihre Medien gibt es einige Faktoren zu beachten. Die relative Bedeutung jedes Faktors hängt von Ihren Bedürfnissen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Richtlinien

Bei der Auswahl des passenden Medienformats sollte Ihre Entscheidung von der beabsichtigten Verwendung abhängen. Die Wiedergabe von Medien unterscheidet sich vom Aufnehmen oder Bearbeiten dieser. Für die Bearbeitung können unkomprimierte Formate die Leistung verbessern, während verlustfreie Komprimierung vermeidet, dass durch erneutes Komprimieren Rauschen akkumuliert wird.

- Wenn Ihr Zielpublikum wahrscheinlich Benutzer auf mobilen, insbesondere auf Geräten am unteren Ende oder in langsamen Netzwerken, einschließt, sollten Sie erwägen, eine Version Ihres Mediums in einem 3GP-Container mit geeigneter Komprimierung bereitzustellen.
- Wenn Sie spezielle Kodierungsanforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie möchten, dass Ihre Medien in einem nicht-proprietären, offenen Format vorliegen, sollten Sie eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) in Betracht ziehen.
- Wenn Sie aus irgendeinem Grund nur Medien in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf der größtmöglichen Auswahl an Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur Audio sind, macht die Wahl eines Audio-Only-Formats wahrscheinlich Sinn. Siehe unten für einen Vergleich der verschiedenen Audio-Only-Formate.

### Ratschläge zur Containerauswahl

Die unten stehenden Tabellen bieten empfohlene Container zur Verwendung in verschiedenen Szenarien an. Dies sind nur Vorschläge. Stellen Sie sicher, dass Sie die Anforderungen Ihrer Anwendung und Ihrer Organisation berücksichtigen, bevor Sie ein Containerformat auswählen.

#### Nur-Audio-Dateien

<table>
  <thead>
    <tr>
      <th>Bedarf</th>
      <th>Format</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Komprimierte Dateien für die allgemeine Wiedergabe</strong></td>
      <td><strong>MP3 (MPEG-1 Audio Layer III)</strong></td>
      <td>Weitgehend kompatibel und anerkannt; verwendet verlustreiche Komprimierung, um eine gute Balance zwischen Dateigröße und Audioqualität zu bieten.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Verlustfreie Komprimierung</strong></td>
      <td><strong>FLAC (Free Lossless Audio Codec)</strong></td>
      <td>Bietet verlustfreie Komprimierung, die sicherstellt, dass das Originalaudio intakt bleibt, während die Dateigröße reduziert wird.</td>
    </tr>
    <tr>
      <td><strong>ALAC (Apple Lossless Audio Codec)</strong></td>
      <td>Ähnlich wie FLAC, aber für Apple-Geräte konzipiert; eine großartige Rückfalloption beim Arbeiten innerhalb des Apple-Ökosystems.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Unkomprimierte Dateien</strong></td>
      <td><strong>WAV (Waveform Audio File Format)</strong></td>
      <td>Enthält unkomprimiertes PCM-Audio, das die höchste Wiedergabetreue zu Lasten größerer Dateigrößen liefert.</td>
    </tr>
    <tr>
      <td><strong>AIFF (Audio Interchange File Format)</strong></td>
      <td>Vergleichbar mit WAV in Bezug auf Qualität und Dateigröße, wird jedoch häufig auf Apple-Plattformen bevorzugt.</td>
    </tr>
  </tbody>
</table>

Da alle MP3-Patente abgelaufen sind, ist die Wahl des Audio-Dateiformats erheblich einfacher geworden. Es ist nicht mehr erforderlich, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, Lizenzgebühren für dessen Nutzung zu zahlen, zu entscheiden.

Leider werden weder das relativ häufig vorkommende verlustfreie Kompressionsformate (FLAC und ALAC) universell unterstützt. FLAC wird breiter unterstützt, jedoch ohne zusätzliche Software nicht von macOS und überhaupt nicht von iOS. Wenn Sie verlustfreies Audio anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC anbieten, um eine nahezu universelle Kompatibilität zu erreichen.

#### Videodateien

<table>
  <thead>
    <tr>
      <th>Bedarf</th>
      <th>Format</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Allzweckvideo (vorzugsweise offenes Format)</strong></td>
      <td><strong>WebM</strong></td>
      <td>
        WebM wurde für den modernen Webeinsatz entwickelt und ist ein offener, lizenzgebührenfreier Container, der effiziente Komprimierung und native Unterstützung in den meisten Browsern bietet.
      </td>
    </tr>
    <tr>
      <td><strong>Allzweckvideo</strong></td>
      <td><strong>MP4</strong></td>
      <td>
        MP4 ist der Industriestandard für Videoinhalte und weitgehend auf Geräten und Browsern unterstützt.
      </td>
    </tr>
    <tr>
      <td><strong>Hohe Komprimierung für langsame Verbindungen</strong></td>
      <td><strong>3GP</strong></td>
      <td>
        Optimiert für mobile Geräte und Umgebungen mit niedriger Bandbreite liefert 3GP unter eingeschränkten Bedingungen akzeptable Videoqualität.
      </td>
    </tr>
    <tr>
      <td><strong>Kompatibilität mit älteren Geräten/Browsern</strong></td>
      <td><strong>QuickTime</strong></td>
      <td>
        QuickTime ist ein Legacy-Container, der ursprünglich auf Apple-Plattformen beliebt war. Es wird noch häufig von der macOS-Videoaufzeichnungssoftware erzeugt.
      </td>
    </tr>
  </tbody>
</table>

Diese Vorschläge beruhen auf einer Reihe von Annahmen. Sie sollten die Optionen sorgfältig prüfen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die kodiert werden müssen. Häufig möchten Sie mehrere Rückfalloptionen für diese Formate bereitstellen—zum Beispiel MP4-Rückfall für WebM oder 3GP oder AVI für QuickTime.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, sollten Sie erwägen, mehr als eine Version von Mediendateien bereitzustellen, indem Sie das {{HTMLElement("source")}}-Element verwenden, um jede Quelle innerhalb des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements anzugeben. Beispielsweise können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einem Rückfall im MP4-Format. Sie könnten sogar wählen, ein nostalgisches QuickTime oder AVI als Rückfalloption anzubieten.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`)-Element ohne [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attribut. Fügen Sie dann innerhalb des `<video>`-Elements untergeordnete {{HTMLElement("source")}}-Elemente hinzu, eines für jede Version des Videos, das Sie anbieten. Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Bandbreitenverfügbarkeit ausgewählt werden können, aber in unserem Fall, um Formatoptionen anzubieten.

Im hier gezeigten Beispiel wird ein Video dem Browser in zwei Formaten angeboten: WebM und MP4.

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

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribut, das auf `video/webm` gesetzt ist). Wenn der {{Glossary("user_agent", "User Agent")}} dies nicht abspielen kann, wird die nächste Option verwendet, deren `type` als `video/mp4` angegeben ist. Wenn keine dieser Optionen abgespielt werden kann, wird der Text "This browser does not support the HTML video element." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                  |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                            |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Formatspezifikation                                                                                       |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                               |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                               |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4-Dateiformat)                                                                | Definiert das MPEG-4 (MP4) Version 2-Containerformat                                                               |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4)-Containerformat                                                           |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                  |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateierweiterungen                                                               |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Film (MOV)-Format                                                                          |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das Nächstgelegene zu einer offiziellen WAVE-Spezifikation                                                         |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet durch WAV)    | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                    |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska für WebM                                                                      |
| [Matroska Specifications](https://www.matroska.org/index.html)                                                                                               | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                           |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM-Byte-Stream-Format zur Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

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

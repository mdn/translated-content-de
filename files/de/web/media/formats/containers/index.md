---
title: Media Containerformate (Dateitypen)
slug: Web/Media/Formats/Containers
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das Format von Audio- und Videodateien wird in zwei Teilen definiert (drei, wenn eine Datei sowohl Audio als auch Video enthält): die verwendeten Audio- und/oder Videocodecs und das verwendete Mediencontainerformat (oder Dateityp). In diesem Leitfaden betrachten wir die am häufigsten im Web verwendeten Containerformate und behandeln die Grundlagen ihrer Spezifikationen sowie ihrer Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container. Stattdessen streamt es die codierten Audio- und Videotracks direkt von einem Peer zum anderen, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte zur Darstellung jedes Tracks verwendet werden. Siehe [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Informationen zu den häufig verwendeten Codecs für WebRTC-Anrufe sowie zur Browser-Kompatibilität bezüglich der Unterstützung von Codecs in WebRTC.

## Übliche Containerformate

Während es eine Vielzahl von Mediencontainerformaten gibt, sind die unten aufgeführten diejenigen, auf die Sie am wahrscheinlichsten stoßen werden. Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen. Die MIME-Typen und Erweiterungen für jedes Format sind aufgelistet. Die am häufigsten für Medien im Web verwendeten Container sind wahrscheinlich MPEG-4 (MP4), Web Media File (WEBM) und MPEG Audio Layer III (MP3). Sie können jedoch auch MP3, Ogg, WAV, AVI, MOV und andere Formate antreffen. Allerdings werden nicht alle von Browsern breit unterstützt; einige Kombinationen von Container und Codec bekommen manchmal aus Bequemlichkeit oder aufgrund ihrer Allgegenwart eigene Dateierweiterungen und MIME-Typen. Zum Beispiel wird eine Ogg-Datei mit nur einem Opus-Audiotrack manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben. Aber im Grunde ist es immer noch einfach eine Ogg-Datei.

In anderen Fällen ist ein bestimmter Codec, der in einem bestimmten Container-Typ gespeichert ist, so allgegenwärtig, dass die Kombination auf einzigartige Weise behandelt wird. Ein gutes Beispiel hierfür ist die MP3-Audiodatei, die in der Tat ein MPEG-1-Container mit einem einzigen Audiotrack ist, der mit MPEG-1 Audio Layer III codiert ist. Diese Dateien verwenden den MIME-Typ `audio/mp3` und die Erweiterung `.mp3`, obwohl ihre Container einfach MPEG sind.

### Index der Mediencontainerformate (Dateitypen)

Um mehr über ein bestimmtes Container-Format zu erfahren, suchen Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, neben anderen Spezifika.

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
        <p>Nur verfügbar, wenn im Medien-Framework des zugrunde liegenden Betriebssystems verfügbar.</p>
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
      <td>Apple QuickTime film</td>
      <td>Nur ältere Versionen von Safari, plus andere Browser, die Apples QuickTime-Plugin unterstützten.</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, wird sowohl die Unterstützung für mobile als auch für Desktop-Browser impliziert, wenn ein Browser hier aufgeführt ist. Die Unterstützung wird auch nur für den Container selbst impliziert, nicht für spezifische Codecs.

### 3GP

Der **3GP** oder **3GPP** Mediencontainer wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten gedacht ist. Das Format wurde für die Verwendung auf 3G-Mobiltelefonen entwickelt, kann aber auch auf moderneren Telefonen und Netzwerken genutzt werden. Die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenobergrenzen der meisten Netzwerke haben jedoch den Bedarf für das 3GP-Format verringert. Dieses Format wird jedoch immer noch für langsamere Netzwerke und für leistungsschwächere Telefone verwendet.

Dieses Mediencontainerformat ist vom ISO Base Media File Format und MPEG-4 abgeleitet, jedoch speziell für Szenarien mit niedrigerer Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediencontainer; andere Typen können je nach verwendeten Codec oder Codecs verwendet werden. Außerdem können Sie [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um im MIME-Typ-String anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden und optional Details über das Profil, Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das durch MPEG-4 Part 3 für Audiodaten spezifiziert ist und für gestreamte Audiodaten, wie sie beim Internetradio vorkommen, verwendet werden soll. Im Wesentlichen ist es ein fast nackter Stream von AAC-Audiodaten, bestehend aus ADTS-Frames mit einem minimalen Header.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der MIME-Typ, der für ADTS verwendet wird, hängt davon ab, welche Art von Audio-Frames enthalten sind. Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden. Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I, II oder III Format sind, sollte der MIME-Typ `audio/mpeg` verwendet werden.

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

Die Unterstützung für AAC in Firefox hängt von der Mediainfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das OS es unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein zugehöriges einfaches Containerformat, das ebenfalls FLAC genannt wird und dieses Audio enthalten kann. Das Format ist durch keine Patente belastet, sodass seine Verwendung vor Eingriffen geschützt ist. FLAC-Dateien können nur FLAC-Audiodaten enthalten.

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
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG/MPEG-2

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch. Erstellt von der Moving Picture Experts Group (MPEG), werden diese Formate häufig in physischen Medien verwendet, einschließlich der Videos auf DVD-Medien.

Im Internet ist vielleicht der am häufigsten verwendete Einsatz des MPEG-Dateiformats das enthalten von [Layer_III/MP3](https://en.wikipedia.org/wiki/MPEG-1) Sound-Daten; die resultierenden Dateien sind die weltweit sehr beliebten MP3-Dateien, die von tragbaren Musikgeräten verwendet werden. Ansonsten werden MPEG-1 und MPEG-2 in Webinhalten nicht weit verbreitet verwendet.

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

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats. Es gibt zwei Versionen des Formats, die in den Teilen 1 und 14 der Spezifikation definiert sind. MP4 ist heute ein beliebter Container, da es mehrere der am häufigsten verwendeten Codecs unterstützt und breit unterstützt wird.

Das ursprüngliche MPEG-4-Part-1-Dateiformat wurde 1999 eingeführt; das Version-2-Format, das in Part 14 definiert ist, wurde 2003 hinzugefügt. Das MP4-Dateiformat ist vom [ISO base media file format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, das direkt vom [QuickTime file format](https://en.wikipedia.org/wiki/QuickTime_File_Format) entwickelt von [Apple](https://www.apple.com/) abgeleitet ist.

Beim Spezifizieren des MPEG-4-Medientyps (`audio/mp4` oder `video/mp4`) können Sie [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um im MIME-Typ-String anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und optional Details über das Profil, Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediencontainer; andere MIME-Typen können je nach den spezifischen Codec oder Codecs, die innerhalb des Containers verwendet werden, verwendet werden. Zusätzlich können Sie [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um im MIME-Typ-String anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden und optional Details über das Profil, Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

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
          Die Unterstützung für H.264 in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das OS es unterstützt.
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
        <p>Die Unterstützung für AV1 in Firefox ist auf Windows auf ARM deaktiviert (Aktivierung durch Setzen der Einstellung <code>media.av1.enabled</code> auf <code>true</code>).</p>
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
        <p>Die Unterstützung für H.264 in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das OS es unterstützt.</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg) Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird. Der Ogg-Framework definiert auch patentfreie Mediendatenformate, wie den Theora-Video-Codec und die Vorbis- und Opus-Audio-Codecs. [Xiph.org Dokumente über das Ogg-Format](https://xiph.org/ogg/) sind auf deren Website verfügbar.

Obwohl Ogg schon seit langer Zeit existiert, hat es nie die breite Unterstützung erlangt, die erforderlich wäre, um es zu einer guten ersten Wahl für einen Mediencontainer zu machen. Normalerweise ist es besser, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich ist anzubieten, z.B. wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen. Beispielsweise unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Weitere Informationen zu Ogg und seinen Codecs finden Sie im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der `application/ogg` MIME-Typ kann verwendet werden, wenn Sie nicht unbedingt wissen, ob die Medien Audio oder Video enthalten. Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn Sie das Inhaltformat oder die Formate nicht kennen.

Sie können auch [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter), um im MIME-Typ-String anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und optional die Medienformate der Tracks weiter beschreiben.

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
> Ogg Opus Audio-Dateien länger als 12h 35m 39s werden gekürzt und zeigen bei der Wiedergabe auf Firefox Linux 64 Bit Suchprobleme ([Firefox Bug 1810378](https://bugzilla.mozilla.org/show_bug.cgi?id=1810378)).

### QuickTime

Das **QuickTime**-Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple zur Verwendung durch sein Medienframework gleichen Namens erstellt. Die Erweiterung für diese Dateien, `.mov`, stammt daher, dass das Format ursprünglich für Filme verwendet wurde und normalerweise als "QuickTime-Film"-Format bezeichnet wurde. Während QTFF als Grundlage für das MPEG-4-Dateiformat diente, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Texttracks und so weiter. QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber für viele Jahre war QuickTime für Windows verfügbar, um darauf unter Windows zuzugreifen. QuickTime für Windows wird jedoch seit Anfang 2016 von Apple nicht mehr unterstützt und _sollte nicht verwendet werden_, da bekannte Sicherheitsprobleme bestehen. Der Windows Media Player hat jedoch jetzt eine integrierte Unterstützung für QuickTime-Version 2.0 und frühere Dateien; Unterstützung für spätere Versionen von QuickTime erfordert Drittanbieter-Erweiterungen.

Auf Mac OS hat das QuickTime-Framework nicht nur QuickTime-Format-Filmdateien und Codecs unterstützt, sondern auch eine Vielzahl beliebter und spezieller Audio- und Video- sowie Standbildformate. Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowser, durch das QuickTime-Plugin oder direkte QuickTime-Integration) Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice lesen und schreiben; und Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Teil 2, Sorenson und viele mehr.

Darüber hinaus sind eine Reihe von Drittanbieterkomponenten für QuickTime verfügbar, von denen einige Unterstützung für zusätzliche Codecs hinzufügen.

Da QuickTime-Unterstützung in der Praxis hauptsächlich auf Apple-Geräten verfügbar ist, wird es im Internet nicht mehr häufig verwendet. Apple selbst verwendet mittlerweile generell MP4 für Videos. Darüber hinaus wurde das QuickTime-Framework auf dem Mac schon seit längerer Zeit als veraltet erklärt und ist ab macOS 10.15 Catalina nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der `video/quicktime` MIME-Typ ist der grundlegende Typ für den QuickTime-Mediencontainer. Es ist bemerkenswert, dass QuickTime (das Medienframework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um im MIME-Typ-String anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und optional Details über das Profil, Level und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

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

Das **Waveform Audio File Format** (**WAVE**), meistens WAV genannt, weil die Dateierweiterung `.wav` ist, ist ein Format, das von Microsoft und IBM zur Speicherung von Audio-Bitstream-Daten entwickelt wurde.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und ähnelt daher anderen Formaten wie Apples AIFF. Das WAV-Codec-Register kann bei {{RFC(2361)}} gefunden werden; jedoch verwenden fast alle WAV-Dateien lineares PCM und die Unterstützung für die anderen Codecs ist spärlich.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der `audio/wave` MIME-Typ ist der Standardtyp und wird bevorzugt; die anderen wurden jedoch im Laufe der Jahre von verschiedenen Produkten verwendet und können möglicherweise auch in manchen Umgebungen verwendet werden.

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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein Format, das auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basiert und speziell für den Einsatz in modernen Webumgebungen entwickelt wurde. Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die ihrerseits frei und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und wird mittlerweile breit unterstützt. Konforme Implementierungen von WebM müssen die VP8- und VP9-Videocodecs sowie die Vorbis- und Opus-Audiocodecs unterstützen. Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar. Alle anderen Codecs können eine Lizenz zur Verwendung erfordern.

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
        <p>Die Unterstützung für AV1 in Firefox wurde auf macOS in Firefox 66 hinzugefügt, für Windows in Firefox 67 und auf Linux in Firefox 68.
          Firefox für Android unterstützt AV1 noch nicht; die Umsetzung in Firefox ist so konzipiert, dass ein sicherer Prozess verwendet wird, der auf Android noch nicht unterstützt wird.
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

## Auswahl des richtigen Containers

Es gibt einige Faktoren, die bei der Auswahl des besten Containers oder der besten Container für Ihre Medien berücksichtigt werden müssen. Die relative Bedeutung jeder dieser Faktoren hängt von Ihren Bedürfnissen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Leitlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien tun werden. Die Wiedergabe von Medien ist etwas anderes als die Aufnahme und/oder Bearbeitung. Wenn Sie Medieninhalte manipulieren möchten, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfrei komprimierten Formats zumindest die Ansammlung von Rauschen verhindert, da Kompressionsartefakte mit jeder Rekodierung multipliziert werden, die auftritt.

- Wenn Ihr Zielpublikum wahrscheinlich Nutzer mobiler Endgeräte umfasst, insbesondere von Geräten mit niedrigerer Leistung oder in langsamen Netzwerken, sollten Sie eine Version Ihres Mediums in einem 3GP-Container mit geeigneter Kompression bereitstellen.
- Wenn Sie spezielle Anforderungen an die Kodierung haben, überprüfen Sie, ob der von Ihnen gewählte Container die geeigneten Codecs unterstützt.
- Wenn Sie möchten, dass Ihre Medien in einem nicht proprietären, offenen Format vorliegen, ziehen Sie die Verwendung eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) in Betracht.
- Wenn Sie aus irgendeinem Grund nur Medien in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf den größtmöglichen Auswahl an Geräten und Browsern verfügbar ist, z.B. MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur aus Audio bestehen, macht es wahrscheinlich Sinn, ein Audio-Only-Containerformat zu wählen. Nun, da alle Patente abgelaufen sind, ist MP3 eine weit unterstützte und gute Wahl. WAVE ist gut, aber unkomprimiert, also seien Sie sich dessen bewusst, bevor Sie es für große Audiosamples verwenden. FLAC ist eine sehr gute Wahl, aufgrund der verlustfreien Kompression, falls die Zielbrowser es alle unterstützen.

Leider werden keines der relativ gängigen verlustfreien Kompressionsformate (FLAC und ALAC) universal unterstützt. FLAC ist das breiter unterstützte der beiden, wird jedoch von macOS nicht ohne zusätzliche Software unterstützt und wird auf iOS überhaupt nicht unterstützt. Wenn Sie verlustfreies Audio anbieten müssen, sollten Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um in die Nähe einer universellen Kompatibilität zu gelangen.

### Empfehlungen zur Containerauswahl

Die folgenden Tabellen bieten Vorschläge für Container, die in verschiedenen Szenarien verwendet werden können. Dies sind nur Vorschläge. Berücksichtigen Sie die Bedürfnisse Ihrer Anwendung und Ihrer Organisation, bevor Sie ein Containerformat auswählen.

#### Nur Audiodateien

| Wenn Sie benötigen…                                | Ziehen Sie die Verwendung dieses Containerformats in Betracht |
| -------------------------------------------------- | ------------------------------------------------------------- |
| Komprimierte Dateien für die allgemeine Wiedergabe | MP3 (MPEG-1 Audio Layer III)                                  |
| Verlustfrei komprimierte Dateien                   | FLAC mit ALAC-Backup                                          |
| Nicht komprimierte Dateien                         | WAV                                                           |

Da die MP3-Patente alle abgelaufen sind, ist die Wahl des Audio-Dateiformats viel einfacher geworden. Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, bei der Verwendung Lizenzgebühren zu zahlen, zu wählen.

#### Videodateien

| Wenn Sie benötigen…                                              | Ziehen Sie die Verwendung dieses Containerformats in Betracht |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| Allgemeine Zwecken dienend, vorzugsweise in einem offenen Format | WebM (idealerweise mit MP4-Backup)                            |
| Allgemeine Zwecken dienende Videos                               | MP4 (idealerweise mit WebM oder Ogg-Backup)                   |
| Hohe Kompression, optimiert für langsame Verbindungen            | 3GP (idealerweise mit MP4-Backup)                             |
| Kompatibilität mit älteren Geräten/Browsers                      | QuickTime (idealerweise mit AVI und/oder MPEG-2-Backup)       |

Diese Vorschläge beinhalten einige Annahmen. Sie sollten die Optionen gründlich abwägen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die codiert werden müssen.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, lohnt es sich, mehr als eine Version von Media-Dateien bereitzustellen, indem Sie das {{HTMLElement("source")}}-Element verwenden, um jede Quelle innerhalb des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements anzugeben. Zum Beispiel können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einem Backup im MP4-Format. Sie könnten sogar vielleicht ein rückblickendes QuickTime- oder AVI-Backup anbieten, um sicherzugehen.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src) Attribut. Fügen Sie dann untergeordnete {{HTMLElement("source")}}-Elemente innerhalb des `<video>` Elements hinzu, eines für jede Version des Videos, die Sie anbieten. Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Verfügbarkeit der Bandbreite ausgewählt werden können, aber in unserem Fall verwenden wir es, um Formatoptionen anzubieten.

Im hier gezeigten Beispiel wird ein Video dem Browser in zwei Formaten angeboten: WebM und MP4.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type) Attribut auf `video/webm` gesetzt). Wenn der [User-Agent](/de/docs/Glossary/user_agent) das nicht abspielen kann, geht es weiter zur nächsten Option, deren `type` als `video/mp4` angegeben ist. Wenn keine dieser Optionen abgespielt werden kann, wird der Text "Dieser Browser unterstützt das HTML-Video-Element nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                     |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                               |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Format-Spezifikation                                                                                         |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                                  |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                                  |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4-Dateiformat)                                                                | Definiert das MPEG-4 (MP4) Version 2 Containerformat                                                                  |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                              |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                     |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateierweiterungen                                                                  |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Film (MOV) Format                                                                             |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das nächste zu einer offiziellen WAVE-Spezifikation                                                                   |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet von WAV)      | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                       |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska für WebM                                                                         |
| [Matroska Specifications](https://matroska.org/index.html)                                                                                                   | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                              |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM-Bytestream-Format für die Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

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
      <th scope="row" style="vertical-align: top">WAV (Wellenform Audio-Datei)</th>
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
- {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente

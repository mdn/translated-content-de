---
title: Mediencontainerformate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: d560306b5e077c2398a46863342fbaed96ed80bf
---

Ein **Mediencontainer** ist ein Dateiformat, das einen oder mehrere Medienstreams (etwa Audio oder Video) zusammen mit Metadaten umfasst, damit sie gemeinsam gespeichert und wiedergegeben werden können.
Das Format von Audio- und Videodateien wird durch mehrere Komponenten bestimmt. Dazu gehören die verwendeten Audio- und/oder Videocodecs, das Mediencontainerformat (oder der Dateityp) und gegebenenfalls weitere Elemente wie Untertitelcodecs oder Metadaten.
Dieser Leitfaden stellt die im Web am häufigsten verwendeten Containerformate vor und erläutert die Grundlagen ihrer Spezifikationen sowie ihre Vorteile, Einschränkungen und geeigneten Einsatzbereiche.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container.
Stattdessen werden die codierten Audio- und Videospuren direkt von einem Peer zu einem anderen übertragen. Jede Spur wird dabei durch ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt repräsentiert.
Unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) finden Sie Informationen über Codecs, die häufig für WebRTC-Anrufe verwendet werden, sowie zur Browser-Kompatibilität der Codec-Unterstützung in WebRTC.

## Gängige Containerformate

Es gibt zahlreiche Mediencontainerformate. Die nachfolgend aufgeführten werden Ihnen jedoch am wahrscheinlichsten begegnen.
Einige unterstützen nur Audio, andere sowohl Audio als auch Video.
Die MIME-Typen und Dateiendungen sind jeweils angegeben. Die im Web am häufigsten verwendeten Mediencontainer sind vermutlich MPEG-4 Part 14 (MP4) und Web Media File (WEBM). Daneben können Ihnen auch Ogg, WAV, AVI, MOV und andere Formate begegnen.
Nicht alle werden von Browsern umfassend unterstützt. Bestimmte Kombinationen aus Container und Codec erhalten mitunter eigene Dateiendungen und MIME-Typen, entweder aus praktischen Gründen oder weil sie so weit verbreitet sind.
Beispielsweise wird eine Ogg-Datei, die nur eine Opus-Audiospur enthält, manchmal als Opus-Datei bezeichnet und kann sogar die Dateiendung `.opus` tragen.
Tatsächlich handelt es sich aber weiterhin um eine Ogg-Datei.

Manche Codecs sind so weit verbreitet, dass ihre Verwendung als eigenständiges Format behandelt wird. Ein gutes Beispiel ist die MP3-Audiodatei, die nicht in einem herkömmlichen Container gespeichert wird. Eine MP3-Datei besteht vielmehr im Wesentlichen aus einem Stream von MPEG-1-Audio-Layer-III-codierten Frames, häufig ergänzt um Metadaten wie ID3-Tags. Diese Dateien verwenden den MIME-Typ `audio/mpeg` und die Dateiendung `.mp3`.

### Verzeichnis der Mediencontainerformate (Dateitypen)

Wenn Sie mehr über ein bestimmtes Containerformat erfahren möchten, wählen Sie es in dieser Liste aus. Die zugehörigen Details erläutern unter anderem typische Einsatzbereiche, unterstützte Codecs und die Browser-Unterstützung.

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
        <p>Nur verfügbar, wenn es vom Medienframework des zugrunde liegenden Betriebssystems unterstützt wird.
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
      <td>Nur ältere Versionen von Safari sowie andere Browser, die das QuickTime-Plugin von Apple unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, bezieht sich die aufgeführte Browser-Kompatibilität sowohl auf mobile Browser als auch auf Desktop-Browser.
Die angegebene Unterstützung gilt außerdem nur für den Container selbst, nicht für bestimmte Codecs.

### 3GP

Der Mediencontainer **3GP** oder **3GPP** dient dazu, Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze und die Wiedergabe auf Mobilgeräten vorgesehen ist.
Das Format wurde für 3G-Mobiltelefone entwickelt, kann aber auch auf neueren Telefonen und in neueren Netzen verwendet werden.
Dank höherer verfügbarer Bandbreiten und größerer Datenvolumen in den meisten Netzen wird das 3GP-Format allerdings seltener benötigt.
Für langsamere Netze und weniger leistungsfähige Telefone wird es weiterhin verwendet.

Dieses Mediencontainerformat leitet sich vom ISO Base Media File Format und von MPEG-4 ab, ist jedoch speziell auf Szenarien mit geringer Bandbreite zugeschnitten.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Dies sind die grundlegenden MIME-Typen für den 3GP-Mediencontainer. Abhängig von den verwendeten Codecs können andere Typen zum Einsatz kommen.
Darüber hinaus können Sie der MIME-Typ-Zeichenfolge [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und optional Einzelheiten zu Profil, Level und/oder anderen Aspekten der Codec-Konfiguration bereitzustellen.

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

**Audio Data Transport Stream** (**ADTS**) ist ein in MPEG-4 Part 3 spezifiziertes Containerformat für Audiodaten. Es ist für Audio-Streaming vorgesehen, beispielsweise für Internetradio.
Im Wesentlichen handelt es sich um einen nahezu unverpackten Stream aus AAC-Audiodaten, der aus ADTS-Frames mit einem minimalen Header besteht.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Welcher MIME-Typ für ADTS verwendet wird, hängt von der Art der enthaltenen Audio-Frames ab.
Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden.
Liegen die Audio-Frames im Format MPEG-1/MPEG-2 Audio Layer I, II oder III vor, sollte der MIME-Typ `audio/mpeg` lauten.

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

Die AAC-Unterstützung in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab. AAC ist daher verfügbar, sofern das Betriebssystem es unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec. Daneben gibt es ein ebenfalls FLAC genanntes Containerformat, das solche Audiodaten enthalten kann.
Das Format unterliegt keinen Patenten, sodass seine Verwendung nicht durch Patentansprüche beeinträchtigt wird.
FLAC-Dateien können ausschließlich FLAC-Audiodaten enthalten.

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

Die Dateiformate **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** sind im Wesentlichen identisch.
Sie wurden von der Moving Picture Experts Group (MPEG) entwickelt und werden häufig auf physischen Medien verwendet, unter anderem als Videoformat auf DVDs.

Im Internet ist die vielleicht häufigste Anwendung des MPEG-Standards [MPEG-1 Audio Layer III](https://en.wikipedia.org/wiki/MPEG-1), allgemein bekannt als MP3, für Audiodaten. MP3-Dateien sind auf digitalen Musikgeräten weltweit äußerst beliebt, obwohl MPEG-1 und MPEG-2 insgesamt in anderen Webinhalten kaum verwendet werden.

Die wesentlichen Unterschiede zwischen MPEG-1 und MPEG-2 betreffen eher die Formate der Mediendaten als das Containerformat.
MPEG-1 wurde 1992 eingeführt, MPEG-2 folgte 1996.

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

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats.
Es gibt zwei Versionen des Formats, die in den Teilen 1 und 14 der Spezifikation definiert sind.
MP4 ist heute ein beliebter Container, da er mehrere der meistverwendeten Codecs unterstützt und weithin unterstützt wird.

Das ursprüngliche Dateiformat MPEG-4 Part 1 wurde 1999 eingeführt. Die in Part 14 definierte zweite Version kam 2003 hinzu.
Das MP4-Dateiformat leitet sich vom [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) ab, das wiederum direkt auf dem von [Apple](https://www.apple.com/) entwickelten [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) basiert.

Bei der Angabe des MPEG-4-Medientyps (`audio/mp4` oder `video/mp4`) können Sie der MIME-Typ-Zeichenfolge [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und optional Einzelheiten zu Profil, Level und/oder anderen Aspekten der Codec-Konfiguration bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Dies sind die grundlegenden MIME-Typen für den MPEG-4-Mediencontainer. Abhängig von den im Container verwendeten Codecs können andere MIME-Typen zum Einsatz kommen.
Darüber hinaus können Sie der MIME-Typ-Zeichenfolge [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und optional Einzelheiten zu Profil, Level und/oder anderen Aspekten der Codec-Konfiguration bereitzustellen.

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
          Die H.264-Unterstützung in Firefox hängt von der Medieninfrastruktur
          des Betriebssystems ab. Sie ist daher verfügbar, sofern das Betriebssystem H.264 unterstützt.
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
        <p>Die AV1-Unterstützung in Firefox ist unter Windows on ARM deaktiviert (aktivieren Sie sie, indem Sie die Einstellung <code>media.av1.enabled</code> auf <code>true</code> setzen).</p>
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
        <p>Die H.264-Unterstützung in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab. Sie ist daher verfügbar, sofern das Betriebssystem H.264 unterstützt.</p>
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

Das Containerformat [Ogg](https://en.wikipedia.org/wiki/Ogg) ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird.
Das Ogg-Framework definiert außerdem nicht durch Patente eingeschränkte Mediendatenformate wie den Videocodec Theora und die Audiocodecs Vorbis und Opus.
[Dokumente von Xiph.org zum Ogg-Format](https://xiph.org/ogg/) sind auf der Website der Stiftung verfügbar.

Obwohl Ogg schon seit Langem existiert, hat es nie die breite Unterstützung erreicht, die es zu einer guten ersten Wahl als Mediencontainer machen würde.
In der Regel ist WebM die bessere Wahl. Ogg kann jedoch als zusätzliche Option nützlich sein, etwa wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen.
Firefox 3.5 und 3.6 unterstützen beispielsweise Ogg, aber nicht WebM.

Weitere Informationen zu Ogg und seinen Codecs finden Sie im [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der MIME-Typ `application/ogg` kann verwendet werden, wenn nicht bekannt ist, ob die Medien Audio oder Video enthalten.
Verwenden Sie nach Möglichkeit einen der spezifischen Typen. Greifen Sie nur dann auf `application/ogg` zurück, wenn Sie das Inhaltsformat beziehungsweise die Inhaltsformate nicht kennen.

Sie können der MIME-Typ-Zeichenfolge außerdem [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und die Medienformate der Spuren optional näher zu beschreiben.

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
      <td>Ja. In Version 128 entfernt.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td></td>
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
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Ogg-Opus-Audiodateien, die länger als 12 Stunden, 35 Minuten und 39 Sekunden sind, werden bei der Wiedergabe mit Firefox unter 64-Bit-Linux abgeschnitten. Außerdem treten Probleme beim Springen innerhalb der Datei auf ([Firefox-Bug 1810378](https://bugzil.la/1810378)).

> [!NOTE]
> Safari ab Version 18.4 (unter macOS ab 15.4, iOS ab 18.4, iPadOS ab 18.4 und visionOS ab 2.4) unterstützt die Codecs Opus und Vorbis in Ogg-Containern.

### QuickTime

Das **QuickTime**-Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für das gleichnamige Medienframework entwickelt.
Die Dateiendung `.mov` geht darauf zurück, dass das Format ursprünglich für Filme verwendet und üblicherweise als „QuickTime Movie“-Format bezeichnet wurde.
Obwohl QTFF als Grundlage für das MPEG-4-Dateiformat diente, bestehen Unterschiede, sodass die beiden Formate nicht ohne Weiteres austauschbar sind.

QuickTime-Dateien unterstützen zeitbasierte Daten aller Art, darunter Audio- und Videomedien sowie Textspuren.
QuickTime-Dateien werden hauptsächlich von macOS unterstützt. Über viele Jahre war jedoch auch QuickTime für Windows verfügbar, um unter Windows auf sie zuzugreifen.
Seit Anfang 2016 wird QuickTime für Windows allerdings nicht mehr von Apple unterstützt und _sollte wegen bekannter Sicherheitsrisiken nicht verwendet werden_.
Windows Media Player bietet inzwischen integrierte Unterstützung für Dateien bis einschließlich QuickTime-Version 2.0. Für spätere QuickTime-Versionen sind Erweiterungen von Drittanbietern erforderlich.

Unter Mac OS unterstützte das QuickTime-Framework neben Filmdateien und Codecs im QuickTime-Format auch zahlreiche gängige und spezialisierte Audio- und Videocodecs sowie Standbildformate.
Mithilfe von QuickTime konnten Mac-Anwendungen, einschließlich Webbrowsern über das QuickTime-Plugin oder eine direkte QuickTime-Integration, unter anderem die Audioformate AAC, AIFF, MP3, PCM und Qualcomm PureVoice sowie die Videoformate AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele weitere lesen und schreiben.

Darüber hinaus sind für QuickTime verschiedene Komponenten von Drittanbietern verfügbar, von denen einige die Unterstützung zusätzlicher Codecs ermöglichen.

Da QuickTime-Unterstützung praktisch hauptsächlich auf Apple-Geräten verfügbar ist, wird das Format im Internet nicht mehr häufig verwendet.
Apple selbst verwendet für Video inzwischen im Allgemeinen MP4.
Zudem ist das QuickTime-Framework auf dem Mac seit einiger Zeit veraltet und ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der MIME-Typ `video/quicktime` ist der grundlegende Typ für den QuickTime-Mediencontainer.
Beachten Sie, dass QuickTime als Medienframework für Mac-Betriebssysteme zahlreiche Container und Codecs unterstützt und damit auch viele andere MIME-Typen.

Sie können der MIME-Typ-Zeichenfolge [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und optional Einzelheiten zu Profil, Level und/oder anderen Aspekten der Codec-Konfiguration bereitzustellen.

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

Das **Waveform Audio File Format** (**WAVE**), wegen seiner Dateiendung `.wav` gewöhnlich WAV genannt, wurde von Microsoft und IBM zur Speicherung von Audio-Bitstreams entwickelt.

Es leitet sich vom Resource Interchange File Format (RIFF) ab und ähnelt daher anderen Formaten wie Apples AIFF.
Das WAV-Codec-Verzeichnis ist unter {{RFC(2361)}} zu finden. Da jedoch nahezu alle WAV-Dateien lineares PCM verwenden, ist die Unterstützung für andere Codecs gering.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der MIME-Typ `audio/wave` ist der standardisierte und bevorzugte Typ. Die anderen wurden jedoch im Laufe der Jahre von verschiedenen Produkten verwendet und können in manchen Umgebungen ebenfalls vorkommen.

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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basierendes Format, das speziell für den Einsatz in modernen Webumgebungen entwickelt wurde.
Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die ihrerseits frei und offen sind. Einige Produkte unterstützen in WebM-Containern allerdings auch andere Codecs.

WebM wurde 2010 eingeführt und wird inzwischen weithin unterstützt.
Standardkonforme WebM-Implementierungen müssen die Videocodecs VP8 und VP9 sowie die Audiocodecs Vorbis und Opus unterstützen.
Das WebM-Containerformat und seine vorgeschriebenen Codecs sind alle unter offenen Lizenzen verfügbar.
Für die Verwendung anderer Codecs kann eine Lizenz erforderlich sein.

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
        <p>Die AV1-Unterstützung in Firefox wurde unter macOS mit Firefox 66, unter Windows mit Firefox 67 und unter Linux mit Firefox 68 eingeführt.
          Firefox für Android unterstützt AV1 noch nicht. Die Implementierung in Firefox ist für die Verwendung eines abgesicherten Prozesses ausgelegt, der unter Android noch nicht unterstützt wird.
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

## Den richtigen Container auswählen

Bei der Auswahl des am besten geeigneten Containers oder mehrerer Container für Ihre Medien sind verschiedene Faktoren zu berücksichtigen.
Wie wichtig die einzelnen Faktoren sind, hängt von Ihren Anforderungen, Ihren Lizenzvorgaben und den Kompatibilitätsanforderungen Ihrer Zielgruppe ab.

### Leitlinien

Die Wahl des geeigneten Medienformats sollte vom vorgesehenen Einsatzzweck abhängen. Für die Wiedergabe gelten andere Anforderungen als für die Aufnahme oder Bearbeitung. Bei der Bearbeitung können unkomprimierte Formate die Leistung verbessern, während verlustfreie Komprimierung verhindert, dass sich durch wiederholte Neukomprimierung Störungen ansammeln.

- Wenn Ihre Zielgruppe wahrscheinlich Nutzer mobiler Geräte umfasst, insbesondere mit weniger leistungsfähigen Geräten oder langsamen Netzverbindungen, sollten Sie eine Version Ihrer Medien in einem 3GP-Container mit geeigneter Komprimierung bereitstellen.
- Wenn Sie bestimmte Anforderungen an die Codierung haben, stellen Sie sicher, dass der gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Ihre Medien in einem offenen, nicht proprietären Format vorliegen sollen, ziehen Sie eines der offenen Containerformate in Betracht, etwa FLAC für Audio oder WebM für Video.
- Wenn Sie Medien aus irgendeinem Grund nur in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf möglichst vielen Geräten und in möglichst vielen Browsern verfügbar ist, beispielsweise MP3 für Audio oder MP4 für Video und/oder Audio.
- Wenn Ihre Medien ausschließlich Audio enthalten, ist ein reines Audioformat wahrscheinlich sinnvoll. Nachfolgend finden Sie einen Vergleich verschiedener reiner Audioformate.

### Empfehlungen zur Containerauswahl

Die folgenden Tabellen enthalten Vorschläge für Container in verschiedenen Szenarien.
Es handelt sich lediglich um Empfehlungen.
Berücksichtigen Sie die Anforderungen Ihrer Anwendung und Ihrer Organisation, bevor Sie ein Containerformat auswählen.

#### Reine Audiodateien

<table>
  <thead>
    <tr>
      <th>Anforderung</th>
      <th>Format</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Komprimierte Dateien für die allgemeine Wiedergabe</strong></td>
      <td><strong>MP3 (MPEG-1 Audio Layer III)</strong></td>
      <td>Weithin kompatibel und bekannt; verwendet verlustbehaftete Komprimierung für ein gutes Verhältnis zwischen Dateigröße und Audioqualität.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Verlustfreie Komprimierung</strong></td>
      <td><strong>FLAC (Free Lossless Audio Codec)</strong></td>
      <td>Bietet verlustfreie Komprimierung: Die ursprünglichen Audiodaten bleiben erhalten, während die Dateigröße verringert wird.</td>
    </tr>
    <tr>
      <td><strong>ALAC (Apple Lossless Audio Codec)</strong></td>
      <td>Ähnlich wie FLAC, aber für Apple-Geräte entwickelt; eine gute Ausweichoption innerhalb des Apple-Ökosystems.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Unkomprimierte Dateien</strong></td>
      <td><strong>WAV (Waveform Audio File Format)</strong></td>
      <td>Enthält unkomprimiertes PCM-Audio und bietet höchste Wiedergabetreue, allerdings bei größeren Dateien.</td>
    </tr>
    <tr>
      <td><strong>AIFF (Audio Interchange File Format)</strong></td>
      <td>Hinsichtlich Qualität und Dateigröße mit WAV vergleichbar, wird jedoch häufig auf Apple-Plattformen bevorzugt.</td>
    </tr>
  </tbody>
</table>

Seit alle Patente für MP3 abgelaufen sind, ist die Wahl des Audiodateiformats erheblich einfacher geworden.
Es ist nicht mehr nötig, zwischen der breiten Kompatibilität von MP3 und Lizenzgebühren für dessen Verwendung abzuwägen.

Leider wird keines der beiden vergleichsweise bedeutenden verlustfreien Komprimierungsformate FLAC und ALAC überall unterstützt.
FLAC wird von den beiden Formaten breiter unterstützt, ist unter macOS jedoch nur mit zusätzlicher Software und unter iOS überhaupt nicht nutzbar.
Wenn Sie verlustfreies Audio anbieten möchten, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um eine annähernd universelle Kompatibilität zu erreichen.

#### Videodateien

<table>
  <thead>
    <tr>
      <th>Anforderung</th>
      <th>Format</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Video für allgemeine Zwecke (vorzugsweise in einem offenen Format)</strong></td>
      <td><strong>WebM</strong></td>
      <td>
        WebM wurde für das moderne Web entwickelt. Der offene, lizenzgebührenfreie Container bietet effiziente Komprimierung und wird von den meisten Browsern nativ unterstützt.
      </td>
    </tr>
    <tr>
      <td><strong>Video für allgemeine Zwecke</strong></td>
      <td><strong>MP4</strong></td>
      <td>
        MP4 ist der Industriestandard für Videoinhalte und wird von zahlreichen Geräten und Browsern unterstützt.
      </td>
    </tr>
    <tr>
      <td><strong>Hohe Komprimierung für langsame Verbindungen</strong></td>
      <td><strong>3GP</strong></td>
      <td>
        3GP ist für Mobilgeräte und Umgebungen mit geringer Bandbreite optimiert und bietet auch unter eingeschränkten Bedingungen eine akzeptable Videoqualität.
      </td>
    </tr>
    <tr>
      <td><strong>Kompatibilität mit älteren Geräten und Browsern</strong></td>
      <td><strong>QuickTime</strong></td>
      <td>
        QuickTime ist ein älterer Container, der ursprünglich auf Apple-Plattformen beliebt war. Er wird weiterhin häufig von Videoaufzeichnungssoftware unter macOS erzeugt.
      </td>
    </tr>
  </tbody>
</table>

Diese Empfehlungen beruhen auf mehreren Annahmen.
Prüfen Sie die Möglichkeiten sorgfältig, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien codieren müssen.
Häufig empfiehlt es sich, für diese Formate mehrere Ausweichoptionen anzubieten, beispielsweise MP4 als Alternative zu WebM oder 3GP oder AVI als Alternative zu QuickTime.

## Kompatibilität durch mehrere Container maximieren

Um die Kompatibilität zu verbessern, können Sie mehrere Versionen einer Mediendatei bereitstellen und mit dem Element {{HTMLElement("source")}} jede Quelle innerhalb eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements angeben.
So können Sie beispielsweise ein Ogg- oder WebM-Video als erste Wahl und eine Version im MP4-Format als Ausweichoption anbieten.
Bei Bedarf könnten Sie sogar zusätzlich eine QuickTime- oder AVI-Version für ältere Systeme bereitstellen.

Erstellen Sie dazu ein `<video>`-Element (oder `<audio>`-Element) ohne das Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/video#src).
Fügen Sie dann innerhalb des `<video>`-Elements für jede angebotene Videoversion ein untergeordnetes {{HTMLElement("source")}}-Element hinzu.
Auf diese Weise lassen sich verschiedene Versionen eines Videos anbieten, die je nach verfügbarer Bandbreite ausgewählt werden können. In diesem Fall verwenden wir die Technik jedoch, um unterschiedliche Formate anzubieten.

Im folgenden Beispiel wird dem Browser ein Video in zwei Formaten angeboten: WebM und MP4.

Zuerst wird das Video im WebM-Format angeboten, wobei das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) auf `video/webm` gesetzt ist.
Wenn der {{Glossary("user_agent", "User Agent")}} dieses Format nicht wiedergeben kann, versucht er die nächste Option, deren `type` als `video/mp4` angegeben ist.
Kann keines der beiden Formate wiedergegeben werden, erscheint der Text „Dieser Browser unterstützt das HTML-Videoelement nicht.“

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

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                  |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                            |
| [FLAC-Format](https://xiph.org/flac/format.html)                                                                                                             | Die Spezifikation des FLAC-Formats                                                                                 |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                               |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                               |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4-Dateiformat)                                                                | Definiert die zweite Version des MPEG-4-Containerformats (MP4)                                                     |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4-Containerformat (MP4)                                                           |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                  |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateiendungen                                                                    |
| [Spezifikation des QuickTime-Dateiformats](https://developer.apple.com/documentation/quicktime-file-format)                                                  | Definiert das QuickTime-Movie-Format (MOV)                                                                         |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Kommt einer offiziellen WAVE-Spezifikation am nächsten                                                             |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (von WAV verwendet)      | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                    |
| [WebM-Container-Leitlinien](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska für WebM                                                                      |
| [Matroska-Spezifikationen](https://www.matroska.org/index.html)                                                                                              | Die Spezifikation des Matroska-Containerformats, auf dem WebM basiert                                              |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM-Byte-Stream-Format zur Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

## Browser-Kompatibilität

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">
        Name des Containerformats
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
      <th scope="col" style="vertical-align: bottom">Dateiendung(en)</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browser-Unterstützung
      </th>
      <th scope="col" style="vertical-align: bottom">MIME-Typ</th>
      <th scope="col" style="vertical-align: bottom">Dateiendung(en)</th>
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
        Firefox, Safari
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
- Die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}

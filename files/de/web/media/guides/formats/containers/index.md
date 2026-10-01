---
title: Mediencontainerformate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Ein **Mediencontainer** ist ein Dateiformat, das einen oder mehrere Medienstreams (etwa Audio oder Video) zusammen mit Metadaten enthält, sodass sie gemeinsam gespeichert und wiedergegeben werden können.
Das Format von Audio- und Videodateien wird durch mehrere Komponenten bestimmt: die verwendeten Audio- und/oder Videocodecs, das Mediencontainerformat (oder den Dateityp) und gegebenenfalls weitere Elemente wie Untertitel-Codecs oder Metadaten.
In diesem Leitfaden betrachten wir die im Web am häufigsten verwendeten Containerformate. Dabei behandeln wir die Grundlagen ihrer Spezifikationen sowie ihre Vorteile, Einschränkungen und geeigneten Einsatzbereiche.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container.
Stattdessen werden die codierten Audio- und Videospuren direkt von einem Peer zum anderen gestreamt. Dabei repräsentiert jeweils ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt eine Spur.
Unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) finden Sie Informationen zu häufig für WebRTC-Anrufe verwendeten Codecs sowie zur Browser-Kompatibilität der Codec-Unterstützung in WebRTC.

## Gängige Containerformate

Es gibt sehr viele Mediencontainerformate. Die nachfolgend aufgeführten werden Ihnen jedoch am wahrscheinlichsten begegnen.
Einige unterstützen nur Audio, andere sowohl Audio als auch Video.
Für jedes Format sind die MIME-Typen und Dateiendungen aufgeführt. Die im Web am häufigsten verwendeten Mediencontainer sind vermutlich MPEG-4 Part 14 (MP4) und Web Media File (WEBM). Sie können aber auch auf Ogg, WAV, AVI, MOV und andere Formate stoßen.
Nicht alle davon werden von Browsern umfassend unterstützt. Manche Kombinationen aus Container und Codec erhalten aus praktischen Gründen oder wegen ihrer weiten Verbreitung eigene Dateiendungen und MIME-Typen.
Eine Ogg-Datei, die nur eine Opus-Audiospur enthält, wird beispielsweise manchmal als Opus-Datei bezeichnet und kann sogar die Dateiendung `.opus` haben.
Tatsächlich handelt es sich aber weiterhin um eine Ogg-Datei.

In manchen Fällen ist ein bestimmter Codec so weit verbreitet, dass seine Verwendung als eigenständiges Format behandelt wird. Ein gutes Beispiel ist die MP3-Audiodatei, die nicht in einem herkömmlichen Container gespeichert wird. Eine MP3-Datei besteht im Wesentlichen aus einem Stream von nach MPEG-1 Audio Layer III codierten Frames, häufig ergänzt um Metadaten wie ID3-Tags. Diese Dateien verwenden den MIME-Typ `audio/mpeg` und die Dateiendung `.mp3`.

### Verzeichnis der Mediencontainerformate (Dateitypen)

Wenn Sie mehr über ein bestimmtes Containerformat erfahren möchten, wählen Sie es in dieser Liste aus. Die Detailinformationen beschreiben unter anderem typische Einsatzbereiche, unterstützte Codecs und die Browser-Unterstützung.

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
        <p>Nur verfügbar, wenn das Medienframework des zugrunde liegenden Betriebssystems es unterstützt.
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
      <td>Nur ältere Safari-Versionen sowie andere Browser, die Apples QuickTime-Plugin unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, bezieht sich ein hier aufgeführter Browser sowohl auf seine Mobil- als auch auf seine Desktop-Version.
Die angegebene Unterstützung gilt außerdem nur für den Container selbst, nicht für bestimmte Codecs.

### 3GP

Der Mediencontainer **3GP** oder **3GPP** wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze und die Wiedergabe auf Mobilgeräten vorgesehen ist.
Das Format wurde für 3G-Mobiltelefone entwickelt, kann aber weiterhin auf neueren Telefonen und in neueren Netzen verwendet werden.
Die höhere verfügbare Bandbreite und größere Datenvolumen in den meisten Netzen haben den Bedarf an 3GP jedoch verringert.
Für langsamere Netze und weniger leistungsfähige Telefone wird das Format weiterhin verwendet.

Dieses Mediencontainerformat ist vom ISO Base Media File Format und von MPEG-4 abgeleitet, wurde aber speziell für Szenarien mit geringer Bandbreite vereinfacht.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Dies sind die grundlegenden MIME-Typen für den 3GP-Mediencontainer. Je nach verwendetem Codec oder verwendeten Codecs können auch andere Typen zum Einsatz kommen.
Zusätzlich können Sie der MIME-Typ-Zeichenfolge [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und optional Einzelheiten zu Profil, Level und/oder weiteren Aspekten der Codec-Konfiguration bereitzustellen.

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

**Audio Data Transport Stream** (**ADTS**) ist ein in MPEG-4 Part 3 spezifiziertes Containerformat für Audiodaten, das für Audio-Streams wie Internetradio vorgesehen ist.
Im Wesentlichen handelt es sich um einen nahezu unverpackten Stream aus AAC-Audiodaten, der aus ADTS-Frames mit einem minimalen Header besteht.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Welcher MIME-Typ für ADTS verwendet wird, hängt von der Art der enthaltenen Audio-Frames ab.
Bei ADTS-Frames sollte der MIME-Typ `audio/aac` verwendet werden.
Liegen die Audio-Frames im Format MPEG-1/MPEG-2 Audio Layer I, II oder III vor, sollte der MIME-Typ `audio/mpeg` sein.

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

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec. Daneben gibt es ein ebenfalls FLAC genanntes Containerformat, das entsprechende Audiodaten enthalten kann.
Das Format unterliegt keinen Patenten und kann daher ohne patentbedingte Einschränkungen verwendet werden.
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
Sie wurden von der Moving Picture Experts Group (MPEG) entwickelt und werden häufig auf physischen Datenträgern verwendet, unter anderem als Videoformat für DVDs.

Im Internet ist die wohl häufigste Anwendung des MPEG-Standards [MPEG-1 Audio Layer III](https://en.wikipedia.org/wiki/MPEG-1), allgemein als MP3 bekannt, für Audiodaten. MP3-Dateien sind auf digitalen Musikgeräten weltweit äußerst beliebt, obwohl MPEG-1 und MPEG-2 insgesamt in anderen Webinhalten nicht weit verbreitet sind.

Die wichtigsten Unterschiede zwischen MPEG-1 und MPEG-2 betreffen die Formate der Mediendaten und nicht das Containerformat.
MPEG-1 wurde 1992 eingeführt, MPEG-2 im Jahr 1996.

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
MP4 ist heute ein beliebter Container, da er mehrere der meistverwendeten Codecs unterstützt und selbst breit unterstützt wird.

Das ursprüngliche Dateiformat MPEG-4 Part 1 wurde 1999 eingeführt. Die in Part 14 definierte Version 2 kam 2003 hinzu.
Das MP4-Dateiformat ist vom [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, das wiederum unmittelbar auf dem von [Apple](https://www.apple.com/) entwickelten [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) basiert.

Wenn Sie den MPEG-4-Medientyp (`audio/mp4` oder `video/mp4`) angeben, können Sie der MIME-Typ-Zeichenfolge [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und optional Einzelheiten zu Profil, Level und/oder weiteren Aspekten der Codec-Konfiguration bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Dies sind die grundlegenden MIME-Typen für den MPEG-4-Mediencontainer. Je nach den im Container verwendeten Codecs können auch andere MIME-Typen zum Einsatz kommen.
Zusätzlich können Sie der MIME-Typ-Zeichenfolge [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und optional Einzelheiten zu Profil, Level und/oder weiteren Aspekten der Codec-Konfiguration bereitzustellen.

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
        <p>Die AV1-Unterstützung in Firefox ist unter Windows auf ARM deaktiviert (aktivieren Sie sie, indem Sie die Einstellung <code>media.av1.enabled</code> auf <code>true</code> setzen).</p>
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
Das Ogg-Framework definiert außerdem patentfreie Mediendatenformate wie den Videocodec Theora und die Audiocodecs Vorbis und Opus.
Auf der Website von Xiph.org finden Sie [Dokumente zum Ogg-Format](https://xiph.org/ogg/).

Obwohl Ogg schon lange existiert, hat es nie die breite Unterstützung erreicht, die es zu einer guten ersten Wahl für einen Mediencontainer machen würde.
In der Regel ist WebM die bessere Wahl. Es gibt jedoch Fälle, in denen es sinnvoll ist, Ogg anzubieten, etwa wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen.
Firefox 3.5 und 3.6 unterstützen beispielsweise Ogg, aber nicht WebM.

Weitere Informationen zu Ogg und seinen Codecs finden Sie im [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der MIME-Typ `application/ogg` kann verwendet werden, wenn Sie nicht sicher wissen, ob das Medium Audio oder Video enthält.
Verwenden Sie nach Möglichkeit einen der spezifischen Typen. Greifen Sie nur dann auf `application/ogg` zurück, wenn Sie das Inhaltsformat beziehungsweise die Inhaltsformate nicht kennen.

Sie können der MIME-Typ-Zeichenfolge auch [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und die Medienformate der Spuren optional genauer zu beschreiben.

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
> Ogg-Opus-Audiodateien mit einer Länge von mehr als 12 Stunden, 35 Minuten und 39 Sekunden werden bei der Wiedergabe mit Firefox unter 64-Bit-Linux abgeschnitten. Außerdem treten Probleme beim Springen innerhalb der Datei auf ([Firefox-Bug 1810378](https://bugzil.la/1810378)).

> [!NOTE]
> Safari 18.4+ (unter macOS 15.4+, iOS 18.4+, iPadOS 18.4+ und visionOS 2.4+) unterstützt seitdem die Codecs Opus und Vorbis in Ogg-Containern.

### QuickTime

Das **QuickTime**-Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für das gleichnamige Medienframework entwickelt.
Die Dateiendung `.mov` geht darauf zurück, dass das Format ursprünglich für Filme verwendet und üblicherweise als „QuickTime Movie“-Format bezeichnet wurde.
Obwohl QTFF als Grundlage für das MPEG-4-Dateiformat diente, gibt es Unterschiede, sodass die beiden Formate nicht ohne Weiteres austauschbar sind.

QuickTime-Dateien unterstützen zeitbasierte Daten aller Art, darunter Audio- und Videomedien, Textspuren und mehr.
QuickTime-Dateien werden vor allem von macOS unterstützt. Über mehrere Jahre war jedoch auch QuickTime für Windows verfügbar, um unter Windows auf sie zuzugreifen.
Seit Anfang 2016 unterstützt Apple QuickTime für Windows nicht mehr. Aufgrund bekannter Sicherheitsprobleme _sollte es nicht verwendet werden_.
Windows Media Player bietet inzwischen allerdings integrierte Unterstützung für Dateien bis einschließlich QuickTime-Version 2.0. Für spätere QuickTime-Versionen sind Erweiterungen von Drittanbietern erforderlich.

Unter Mac OS unterstützte das QuickTime-Framework nicht nur Filmdateien und Codecs im QuickTime-Format, sondern auch eine Vielzahl verbreiteter und spezialisierter Audio- und Videocodecs sowie Standbildformate.
Über QuickTime konnten Mac-Anwendungen, einschließlich Webbrowsern mit QuickTime-Plugin oder direkter QuickTime-Integration, unter anderem die Audioformate AAC, AIFF, MP3, PCM und Qualcomm PureVoice sowie die Videoformate AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2 sowie Sorenson lesen und schreiben.

Für QuickTime sind zudem zahlreiche Komponenten von Drittanbietern erhältlich, von denen einige die Unterstützung zusätzlicher Codecs ermöglichen.

Da QuickTime-Unterstützung praktisch hauptsächlich auf Apple-Geräten verfügbar ist, wird das Format im Internet nicht mehr häufig verwendet.
Apple selbst verwendet für Videos inzwischen im Allgemeinen MP4.
Außerdem gilt das QuickTime-Framework auf dem Mac seit einiger Zeit als veraltet und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der MIME-Typ `video/quicktime` ist der grundlegende Typ für den QuickTime-Mediencontainer.
Beachten Sie, dass QuickTime, das Medienframework der Mac-Betriebssysteme, eine große Vielfalt an Containern und Codecs unterstützt und damit auch viele weitere MIME-Typen.

Sie können der MIME-Typ-Zeichenfolge [den Parameter `codecs` hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um die für die Audio- und/oder Videospuren verwendeten Codecs anzugeben und optional Einzelheiten zu Profil, Level und/oder weiteren Aspekten der Codec-Konfiguration bereitzustellen.

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

Das **Waveform Audio File Format** (**WAVE**), aufgrund seiner Dateiendung `.wav` gewöhnlich WAV genannt, wurde von Microsoft und IBM zur Speicherung von Audio-Bitstreams entwickelt.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und ähnelt daher anderen Formaten wie Apples AIFF.
Das WAV-Codec-Register ist unter {{RFC(2361)}} zu finden. Da jedoch nahezu alle WAV-Dateien lineares PCM verwenden, werden andere Codecs nur selten unterstützt.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der MIME-Typ `audio/wave` ist der standardisierte und bevorzugte Typ. Die anderen Typen wurden im Laufe der Jahre jedoch von verschiedenen Produkten verwendet und können in manchen Umgebungen ebenfalls zum Einsatz kommen.

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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basierendes Format, das speziell für moderne Webumgebungen entwickelt wurde.
Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich ebenfalls freie und offene Codecs. Einige Produkte unterstützen allerdings auch andere Codecs in WebM-Containern.

WebM wurde 2010 eingeführt und wird inzwischen breit unterstützt.
Spezifikationskonforme WebM-Implementierungen müssen die Videocodecs VP8 und VP9 sowie die Audiocodecs Vorbis und Opus unterstützen.
Das WebM-Containerformat und die dafür vorgeschriebenen Codecs sind alle unter offenen Lizenzen verfügbar.
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
          Firefox für Android unterstützt AV1 noch nicht. Die Firefox-Implementierung ist auf die Verwendung eines sicheren Prozesses ausgelegt, der unter Android noch nicht unterstützt wird.
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

Bei der Auswahl des am besten geeigneten Containers oder der am besten geeigneten Container für Ihre Medien sind mehrere Faktoren zu berücksichtigen.
Wie wichtig die einzelnen Faktoren sind, hängt von Ihren Anforderungen, Ihren Lizenzvorgaben und den Kompatibilitätsanforderungen Ihrer Zielgruppe ab.

### Richtlinien

Die Wahl des geeigneten Medienformats sollte sich nach dem vorgesehenen Einsatz richten. Die Wiedergabe von Medien stellt andere Anforderungen als deren Aufnahme oder Bearbeitung. Bei der Bearbeitung können unkomprimierte Formate die Leistung verbessern, während verlustfreie Kompression verhindert, dass sich durch wiederholte Neukompression Qualitätsverluste ansammeln.

- Wenn zu Ihrer Zielgruppe voraussichtlich Nutzerinnen und Nutzer von Mobilgeräten gehören, insbesondere von weniger leistungsfähigen Geräten oder in langsamen Netzen, sollten Sie eine Version Ihrer Medien in einem 3GP-Container mit geeigneter Kompression bereitstellen.
- Wenn Sie bestimmte Anforderungen an die Codierung haben, stellen Sie sicher, dass der gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Ihre Medien in einem nicht proprietären, offenen Format vorliegen sollen, sollten Sie eines der offenen Containerformate verwenden, etwa FLAC für Audio oder WebM für Video.
- Wenn Sie aus irgendeinem Grund Medien nur in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf möglichst vielen Geräten und in möglichst vielen Browsern verfügbar ist, etwa MP3 für Audio oder MP4 für Video und/oder Audio.
- Wenn Ihre Medien ausschließlich Audio enthalten, ist die Wahl eines reinen Audioformats wahrscheinlich sinnvoll. Weiter unten finden Sie einen Vergleich verschiedener reiner Audioformate.

### Empfehlungen zur Containerauswahl

Die folgenden Tabellen enthalten Empfehlungen für Container in verschiedenen Szenarien.
Es handelt sich lediglich um Vorschläge.
Berücksichtigen Sie die Anforderungen Ihrer Anwendung und Ihrer Organisation, bevor Sie sich für ein Containerformat entscheiden.

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
      <td>Breit kompatibel und bekannt; verwendet verlustbehaftete Kompression und bietet damit ein gutes Verhältnis zwischen Dateigröße und Audioqualität.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Verlustfreie Kompression</strong></td>
      <td><strong>FLAC (Free Lossless Audio Codec)</strong></td>
      <td>Bietet verlustfreie Kompression: Die ursprünglichen Audiodaten bleiben unverändert, während die Dateigröße reduziert wird.</td>
    </tr>
    <tr>
      <td><strong>ALAC (Apple Lossless Audio Codec)</strong></td>
      <td>Ähnelt FLAC, wurde aber für Apple-Geräte entwickelt. Es ist eine gute Ausweichoption innerhalb des Apple-Ökosystems.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Unkomprimierte Dateien</strong></td>
      <td><strong>WAV (Waveform Audio File Format)</strong></td>
      <td>Enthält unkomprimiertes PCM-Audio und bietet höchste Klangtreue, allerdings auf Kosten größerer Dateien.</td>
    </tr>
    <tr>
      <td><strong>AIFF (Audio Interchange File Format)</strong></td>
      <td>Ist hinsichtlich Qualität und Dateigröße mit WAV vergleichbar, wird aber häufig auf Apple-Plattformen bevorzugt.</td>
    </tr>
  </tbody>
</table>

Da inzwischen alle Patente auf MP3 abgelaufen sind, ist die Wahl eines Audiodateiformats deutlich einfacher geworden.
Es ist nicht mehr nötig, zwischen der breiten Kompatibilität von MP3 und der Zahlung von Lizenzgebühren für dessen Verwendung abzuwägen.

Leider wird keines der beiden vergleichsweise bedeutenden Formate für verlustfreie Kompression, FLAC und ALAC, universell unterstützt.
FLAC wird von den beiden Formaten breiter unterstützt, unter macOS jedoch nicht ohne zusätzlich installierte Software und unter iOS überhaupt nicht.
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
        WebM wurde für das moderne Web entwickelt. Es ist ein offener, lizenzgebührenfreier Container, der effiziente Kompression bietet und von den meisten Browsern nativ unterstützt wird.
      </td>
    </tr>
    <tr>
      <td><strong>Video für allgemeine Zwecke</strong></td>
      <td><strong>MP4</strong></td>
      <td>
        MP4 ist der Industriestandard für Videoinhalte und wird auf Geräten und in Browsern breit unterstützt.
      </td>
    </tr>
    <tr>
      <td><strong>Starke Kompression für langsame Verbindungen</strong></td>
      <td><strong>3GP</strong></td>
      <td>
        3GP ist für Mobilgeräte und Umgebungen mit geringer Bandbreite optimiert und liefert auch unter eingeschränkten Bedingungen eine akzeptable Videoqualität.
      </td>
    </tr>
    <tr>
      <td><strong>Kompatibilität mit älteren Geräten und Browsern</strong></td>
      <td><strong>QuickTime</strong></td>
      <td>
        QuickTime ist ein älteres Containerformat, das ursprünglich auf Apple-Plattformen beliebt war. Es wird weiterhin häufig von Videoaufzeichnungssoftware unter macOS erzeugt.
      </td>
    </tr>
  </tbody>
</table>

Diese Empfehlungen beruhen auf mehreren Annahmen.
Prüfen Sie die Optionen sorgfältig, bevor Sie eine endgültige Entscheidung treffen – insbesondere, wenn Sie viele Medien codieren müssen.
Oft empfiehlt es sich, mehrere Ausweichoptionen für diese Formate bereitzustellen, beispielsweise MP4 als Alternative zu WebM oder 3GP oder AVI als Alternative zu QuickTime.

## Kompatibilität durch mehrere Container maximieren

Um die Kompatibilität zu verbessern, sollten Sie erwägen, Mediendateien in mehreren Versionen bereitzustellen. Mit dem Element {{HTMLElement("source")}} können Sie jede Quelle innerhalb des Elements {{HTMLElement("audio")}} oder {{HTMLElement("video")}} angeben.
Beispielsweise können Sie ein Ogg- oder WebM-Video als erste Wahl und eine MP4-Version als Alternative anbieten.
Sie könnten sogar zusätzlich eine QuickTime- oder AVI-Version als Alternative für ältere Umgebungen bereitstellen.

Erstellen Sie dazu ein Element `<video>` (oder `<audio>`) ohne [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attribut.
Fügen Sie anschließend innerhalb des Elements `<video>` für jede angebotene Version des Videos ein untergeordnetes Element {{HTMLElement("source")}} hinzu.
Auf diese Weise lassen sich verschiedene Versionen eines Videos bereitstellen, die abhängig von der verfügbaren Bandbreite ausgewählt werden können. In unserem Fall nutzen wir dies jedoch, um verschiedene Formate anzubieten.

Im folgenden Beispiel wird dem Browser ein Video in zwei Formaten angeboten: WebM und MP4.

Zunächst wird das Video im WebM-Format angeboten, wobei das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/source#type) auf `video/webm` gesetzt ist.
Kann der {{Glossary("user_agent", "User Agent")}} dieses Format nicht abspielen, versucht er die nächste Option, deren `type` als `video/mp4` angegeben ist.
Kann keines der Formate abgespielt werden, wird der Text „This browser does not support the HTML video element.“ angezeigt.

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

| Spezifikation                                                                                                                                                | Beschreibung                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                  |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                            |
| [FLAC-Format](https://xiph.org/flac/format.html)                                                                                                             | Die Spezifikation des FLAC-Formats                                                                                 |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                               |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                               |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4-Dateiformat)                                                                | Definiert Version 2 des MPEG-4-Containerformats (MP4)                                                              |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4-Containerformat (MP4)                                                           |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                  |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateiendungen                                                                    |
| [Spezifikation des QuickTime-Dateiformats](https://developer.apple.com/documentation/quicktime-file-format)                                                  | Definiert das QuickTime-Movie-Format (MOV)                                                                         |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das einer offiziellen WAVE-Spezifikation am nächsten kommende Dokument                                             |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (von WAV verwendet)      | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                    |
| [WebM-Container-Richtlinien](https://www.webmproject.org/docs/container/)                                                                                    | Leitfaden zur Anpassung von Matroska für WebM                                                                      |
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

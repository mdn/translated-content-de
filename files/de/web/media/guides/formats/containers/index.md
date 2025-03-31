---
title: Mediencontainerformate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

Ein **Mediencontainer** ist ein Dateiformat, das ein oder mehrere Medienstreams (wie Audio oder Video) zusammen mit Metadaten kapselt, was es ermöglicht, sie gemeinsam zu speichern und abzuspielen.
Das Format von Audio- und Videodateien wird von mehreren Komponenten definiert, einschließlich der verwendeten Audio- und/oder Videocodecs, des Mediencontainerformats (oder Dateityps) und optional anderer Elemente wie Untertitelcodecs oder Metadaten.
In diesem Leitfaden betrachten wir die am häufigsten im Web verwendeten Containerformate, wobei wir einen Überblick über ihre Spezifikationen sowie ihre Vorteile, Einschränkungen und idealen Anwendungsfälle geben.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container.
Stattdessen streamt es die kodierten Audio- und Videospuren direkt von einem Teilnehmer zum anderen, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte zur Darstellung jeder Spur genutzt werden.
Informationen zu häufig verwendeten Codecs für WebRTC-Anrufe sowie Informationen zur Browser-Kompatibilität von Codecs in WebRTC erhalten Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Häufige Containerformate

Während es eine Vielzahl von Mediencontainerformaten gibt, sind die unten aufgelisteten die häufigsten, denen Sie begegnen werden.
Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen.
Die MIME-Typen und Erweiterungen für jedes sind aufgelistet. Die am häufigsten im Web verwendeten Container für Medien sind wahrscheinlich MPEG-4 Part-14 (MP4) und Web Media File (WEBM). Sie können jedoch auch Ogg, WAV, AVI, MOV und andere Formate antreffen.
Nicht alle werden von Browsern breit unterstützt; einige Kombinationen aus Container und Codec erhalten manchmal aus Bequemlichkeitsgründen oder aufgrund ihrer Allgegenwärtigkeit eigene Dateierweiterungen und MIME-Typen.
Zum Beispiel wird eine Ogg-Datei mit nur einer Opus-Audiospur manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben.
Es handelt sich jedoch immer noch tatsächlich um eine Ogg-Datei.

In manchen Fällen wird die Nutzung eines bestimmten Codecs so allgegenwärtig, dass seine Verwendung als ein einzigartiges Format betrachtet wird. Ein herausragendes Beispiel ist die MP3-Audiodatei, die nicht in einem herkömmlichen Container gespeichert wird. Stattdessen ist eine MP3-Datei im Wesentlichen ein Strom von MPEG-1 Audio Layer III-kodierten Frames, oft begleitet von Metadaten wie ID3-Tags. Diese Dateien verwenden den MIME-Typ `audio/mpeg` und die Erweiterung `.mp3`.

### Index der Mediencontainerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, suchen Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, unter anderem spezifische Details.

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
        <p>Nur verfügbar, wenn es im Medienframework des zugrunde liegenden Betriebssystems verfügbar ist.
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
      <td>Nur ältere Versionen von Safari sowie andere Browser, die Apples QuickTime-Plugin unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, ist sowohl die Kompatibilität mit mobilen als auch mit Desktop-Browsern impliziert, wenn hier ein Browser aufgeführt wird.
Ebenso ist die Unterstützung nur für den Container selbst, nicht für spezifische Codecs angegeben.

### 3GP

Der **3GP** oder **3GPP** Mediencontainer wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über zellulare Netzwerke zur Nutzung auf mobilen Geräten bestimmt ist.
Das Format wurde für die Nutzung auf 3G-Mobiltelefonen entwickelt, kann aber immer noch auf moderneren Telefonen und Netzwerken verwendet werden.
Allerdings hat die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenobergrenzen auf den meisten Netzwerken die Notwendigkeit für das 3GP-Format verringert.
Dieses Format wird jedoch immer noch für langsamere Netzwerke und für leistungsschwächere Telefone verwendet.

Dieses Mediencontainerformat ist vom ISO-Basis-Medien-Dateiformat und MPEG-4 abgeleitet, wurde jedoch speziell für Szenarien mit niedriger Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediencontainer; andere Typen können verwendet werden, abhängig von dem speziellen Codec oder den Codecs, die verwendet werden.
Zusätzlich können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Stufe und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das von MPEG-4 Part 3 für Audiodaten spezifiziert wurde, das für gestreamtes Audio, wie es bei Internetradio verwendet wird, gedacht ist.
Es ist im Wesentlichen ein nahezu blanker Strom von AAC-Audiodaten, der aus ADTS-Frames mit einem minimalen Header besteht.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der für ADTS verwendete MIME-Typ hängt davon ab, welche Art von Audioframes enthalten sind.
Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden.
Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I, II oder III-Format vorliegen, sollte der MIME-Typ `audio/mpeg` sein.

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

Die Unterstützung von Firefox für AAC hängt von der Medieninfrastruktur des Betriebssystems ab, sie ist also verfügbar, solange das Betriebssystem sie unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein zugehöriges Containerformat, das ebenso FLAC genannt wird und diesen Ton enthalten kann.
Das Format ist durch keine Patente belastet, daher ist seine Nutzung frei von Beeinträchtigungen.
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
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG/MPEG-2

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch.
Erstellt von der Moving Picture Experts Group (MPEG), werden diese Formate häufig in physischen Medien verwendet, einschließlich des Formats des Videos auf DVD-Medien.

Im Internet ist die vielleicht häufigste Anwendung des MPEG-Standards für [MPEG-1 Audio Layer III](https://en.wikipedia.org/wiki/MPEG-1), allgemein bekannt als MP3, Daten. Diese MP3-Dateien sind auf digitalen Musikgeräten weltweit weit verbreitet, obwohl MPEG-1 und MPEG-2 insgesamt in anderen Webinhalten nicht weit verbreitet sind.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 treten in den Mediendatenformaten und nicht im Containerformat auf.
MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 eingeführt.

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
Es gibt zwei Versionen des Formats, definiert in den Teilen 1 und 14 der Spezifikation.
MP4 ist heute ein beliebter Container, da er mehrere der am häufigsten verwendeten Codecs unterstützt und breit unterstützt wird.

Das ursprüngliche MPEG-4 Part 1-Dateiformat wurde 1999 eingeführt; die Version 2, definiert in Teil 14, wurde 2003 hinzugefügt.
Das MP4-Dateiformat ist vom [ISO base media file format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, das direkt aus dem [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) stammt, das von [Apple](https://www.apple.com/) entwickelt wurde.

Beim Angeben des MPEG-4-Medientyps (`audio/mp4` oder `video/mp4`) können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Stufe und/oder andere Codec-Konfigurationen zu liefern.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediencontainer; andere MIME-Typen können verwendet werden, abhängig von den spezifischen Codecs, die im Container verwendet werden.
Zusätzlich können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Stufe und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

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
          Die Unterstützung von Firefox für H.264 hängt von der Medieninfrastruktur des Betriebssystems ab, sie ist also verfügbar, solange das Betriebssystem sie unterstützt.
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
        <p>Firefox-Unterstützung für AV1 ist auf Windows auf ARM deaktiviert (aktivieren Sie sie, indem Sie die Präferenz <code>media.av1.enabled</code> auf <code>true</code> setzen).</p>
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
        <p>Die Unterstützung von Firefox für H.264 hängt von der Medieninfrastruktur des Betriebssystems ab, sie ist also verfügbar, solange das Betriebssystem sie unterstützt.</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg) Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird.
Das Ogg-Framework definiert auch patentfreie Mediendatenformate, wie den Theora-Videocodec und die Vorbis- und Opus-Audiocodecs.
[Xiph.org-Dokumente über das Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Website verfügbar.

Obwohl Ogg schon lange existiert, hat es nie die breite Unterstützung erlangt, die notwendig ist, um es zur ersten Wahl als Mediencontainer zu machen.
Es ist in der Regel besser, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich ist, zum Beispiel, wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen.
Zum Beispiel unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Weitere Informationen über Ogg und seine Codecs finden Sie im [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der MIME-Typ `application/ogg` kann verwendet werden, wenn Sie nicht unbedingt wissen, ob die Medien Audio oder Video enthalten.
Wenn irgendwie möglich, sollten Sie einen der spezifischen Typen verwenden, aber nutzen Sie `application/ogg`, falls Sie das Inhaltsformat oder die Formate nicht kennen.

Sie können auch [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional die Track-Mediadatenformate weiter zu beschreiben.

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
> OGG Opus-Audiodateien, die länger als 12h 35m 39s sind, werden abgeschnitten und zeigen Suchprobleme, wenn sie auf Firefox Linux 64 Bit abgespielt werden ([Firefox-Bug 1810378](https://bugzil.la/1810378)).

### QuickTime

Das **QuickTime** Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für die Nutzung durch deren gleichnamiges Medienframework erstellt.
Die Erweiterung für diese Dateien, `.mov`, kommt daher, dass das Format ursprünglich für Filme verwendet wurde und als "QuickTime-Film"-Format bezeichnet wurde.
Während QTFF als Grundlage für das MPEG-4-Dateiformat diente, gibt es Unterschiede, und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Textspuren und so weiter.
QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber über mehrere Jahre hinweg stand QuickTime für Windows zur Verfügung, um auf Windows QuickTime-Dateien zuzugreifen.
QuickTime für Windows wird jedoch seit Anfang 2016 von Apple nicht mehr unterstützt und sollte _nicht verwendet werden_, da es bekannte Sicherheitsprobleme gibt.
Jedoch bietet der Windows Media Player jetzt integrierte Unterstützung für QuickTime-Version 2.0 und frühere Dateien; die Unterstützung für spätere Versionen von QuickTime erfordert Drittanbieterzubehör.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filme und Codecs, sondern auch eine Vielzahl beliebter und spezieller Audio- und Videocodecs sowie Standbildformate.
Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowsern durch das QuickTime-Plugin oder die direkte QuickTime-Integration) Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice; und Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr lesen und schreiben.

Darüber hinaus stehen eine Reihe von Drittanbieterkomponenten für QuickTime zur Verfügung, von denen einige Unterstützung für zusätzliche Codecs hinzufügen.

Da QuickTime-Unterstützung praktisch ausschließlich auf Apple-Geräten verfügbar ist, wird es im Internet nicht mehr weit verbreitet verwendet.
Apple selbst verwendet jetzt im Allgemeinen MP4 für Videos.
Zudem wurde das QuickTime-Framework auf dem Mac schon seit einiger Zeit abgekündigt und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der MIME-Typ `video/quicktime` ist der grundlegende Typ für den QuickTime-Mediencontainer.
Es ist erwähnenswert, dass QuickTime (das Medienframework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Stufe und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

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

Das **Waveform Audio File Format** (**WAVE**), üblicherweise als WAV bezeichnet aufgrund dessen Dateierweiterung `.wav`, ist ein Format, das von Microsoft und IBM für die Speicherung von Audiobitstreamdaten entwickelt wurde.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet, und als solches ähnlich anderen Formaten wie Apples AIFF.
Das WAV-Codec-Register finden Sie in {{RFC(2361)}}; jedoch verwenden fast alle WAV-Dateien lineares PCM, und die Unterstützung für andere Codecs ist spärlich.

Das WAVE-Format wurde 1991 erstmals veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der MIME-Typ `audio/wave` ist der Standardtyp und wird bevorzugt verwendet; jedoch wurden die anderen im Laufe der Jahre von verschiedenen Produkten verwendet und können in manchen Umgebungen ebenfalls verwendet werden.

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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basierendes Format, das speziell für den Einsatz in modernen Web-Umgebungen entwickelt wurde.
Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die wiederum frei und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 vorgestellt und ist mittlerweile weit verbreitet.
Konforme Implementierungen von WebM müssen die Videocodecs VP8 und VP9 sowie die Audiocodecs Vorbis und Opus unterstützen.
Das WebM-Containerformat und seine erforderlichen Codecs stehen alle unter offenen Lizenzen zur Verfügung.
Andere Codecs erfordern möglicherweise eine Lizenz zur Nutzung.

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
        <p>Die Firefox-Unterstützung für AV1 wurde auf macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und Firefox 68 auf Linux.
          Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist so konzipiert, dass sie einen sicheren Prozess verwendet, was in Android noch nicht unterstützt wird.
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

## Das richtige Container wählen

Beim Auswählen des besten Containers oder der Container für Ihre Medien gibt es ein paar Faktoren zu berücksichtigen.
Die relative Bedeutung jedes Faktors hängt von Ihren Bedürfnissen, Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Richtlinien

Bei der Auswahl des geeigneten Medienformats sollte Ihre Entscheidung von Ihrer beabsichtigten Nutzung abhängen. Die Wiedergabe von Medien unterscheidet sich von deren Aufzeichnung oder Bearbeitung. Unkomprimierte Formate können die Leistung bei der Bearbeitung verbessern, während verlustfreie Kompression verhindert, dass bei wiederholter Rekodierung Rauschen entsteht.

- Wenn Ihr Zielpublikum wahrscheinlich Benutzer auf Mobilgeräten umfasst, insbesondere auf Geräten mit niedrigerem Leistungsniveau oder in langsamen Netzwerken, sollten Sie in Erwägung ziehen, eine Version Ihrer Medien in einem 3GP-Container mit geeigneter Kompression bereitzustellen.
- Wenn Sie spezifische Anforderungen an die Codierung haben, stellen Sie sicher, dass der gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie möchten, dass Ihre Medien in einem nicht proprietären, offenen Format sind, ziehen Sie die Verwendung eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) in Betracht.
- Wenn Sie aus irgendeinem Grund Ihre Medien nur in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf den meisten Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur aus Audio bestehen, macht die Wahl eines nur für Audio geeigneten Formats wahrscheinlich Sinn. Siehe im Folgenden einen Vergleich der verschiedenen nur für Audio geeigneten Formate.

### Ratschläge zur Container-Auswahl

Die untenstehenden Tabellen bieten vorgeschlagene Container zur Nutzung in verschiedenen Szenarien.
Diese sind lediglich Vorschläge.
Stellen Sie sicher, dass Sie die Bedürfnisse Ihrer Anwendung und Ihrer Organisation berücksichtigen, bevor Sie ein Containerformat auswählen.

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
      <td><strong>Komprimierte Dateien für den allgemeinen Gebrauch</strong></td>
      <td><strong>MP3 (MPEG-1 Audio Layer III)</strong></td>
      <td>Weit verbreitet und bekannt; verwendet verlustbehaftete Kompression, um ein gutes Gleichgewicht zwischen Dateigröße und Audioqualität zu bieten.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Verlustfreie Kompression</strong></td>
      <td><strong>FLAC (Free Lossless Audio Codec)</strong></td>
      <td>Bietet verlustfreie Kompression, die sicherstellt, dass das Originalaudio intakt bleibt, während die Dateigröße reduziert wird.</td>
    </tr>
    <tr>
      <td><strong>ALAC (Apple Lossless Audio Codec)</strong></td>
      <td>Ähnlich wie FLAC, aber für Apple-Geräte ausgelegt; es ist eine großartige Ausweichmöglichkeit, wenn man im Apple-Ökosystem arbeitet.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Unkomprimierte Dateien</strong></td>
      <td><strong>WAV (Waveform Audio File Format)</strong></td>
      <td>Beinhaltet unkomprimiertes PCM-Audio und liefert die höchste Klangtreue bei größeren Dateigrößen.</td>
    </tr>
    <tr>
      <td><strong>AIFF (Audio Interchange File Format)</strong></td>
      <td>Vergleichbar mit WAV in Bezug auf Qualität und Dateigröße, obwohl es oft auf Apple-Plattformen bevorzugt wird.</td>
    </tr>
  </tbody>
</table>

Da alle MP3-Patente abgelaufen sind, ist die Wahl des Audio-Dateiformats wesentlich einfacher geworden.
Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, Lizenzgebühren dafür zu zahlen, abzuwägen.

Leider sind weder das relativ bedeutendere verlustfreie Kompressionsformat (FLAC) noch die Formate (ALAC) universell unterstützt.
FLAC ist das breiter unterstützte der beiden, aber auf macOS wird es ohne zusätzliche installierte Software nicht unterstützt und auf iOS überhaupt nicht.
Wenn Sie verlustfreie Audio bereitstellen möchten, müssen Sie möglicherweise sowohl FLAC als auch ALAC anbieten, um eine weitgehende universelle Kompatibilität zu erreichen.

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
      <td><strong>Allzweck-Video (vorzugsweise offenes Format)</strong></td>
      <td><strong>WebM</strong></td>
      <td>
        Für die moderne Webnutzung entwickelt, ist WebM ein freier, lizenzfreier Container, der effiziente Kompression bietet und nativ in den meisten Browsern unterstützt wird.
      </td>
    </tr>
    <tr>
      <td><strong>Allzweck-Video</strong></td>
      <td><strong>MP4</strong></td>
      <td>
        MP4 ist der Industriestandard für Videoinhalte, der auf Geräten und Browsern weit verbreitet unterstützt wird.
      </td>
    </tr>
    <tr>
      <td><strong>Hohe Kompression für langsame Verbindungen</strong></td>
      <td><strong>3GP</strong></td>
      <td>
        Optimiert für mobile Geräte und Umgebungen mit geringer Bandbreite, liefert 3GP eine akzeptable Videoqualität unter eingeschränkten Bedingungen.
      </td>
    </tr>
    <tr>
      <td><strong>Kompatibilität mit älteren Geräten/Browsers</strong></td>
      <td><strong>QuickTime</strong></td>
      <td>
        QuickTime ist ein veralteter Container, der ursprünglich auf Apple-Plattformen populär war. Er wird immer noch häufig von macOS-Videoaufzeichnungssoftware erzeugt.
      </td>
    </tr>
  </tbody>
</table>

Diese Vorschläge gehen von mehreren Annahmen aus.
Sie sollten die Optionen sorgfältig prüfen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die kodiert werden müssen.
Sehr oft möchten Sie mehrere Ausweichoptionen für diese Formate bereitstellen—zum Beispiel MP4 als Ausweichmöglichkeit für WebM oder 3GP oder AVI für QuickTime.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, lohnt es sich, mehr als eine Version von Mediendateien anzubieten, indem Sie das {{HTMLElement("source")}}-Element verwenden, um jede Quelle innerhalb des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements anzugeben.
Zum Beispiel können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einem MP4-Format als Ausweichmöglichkeit.
Sie könnten sogar darauf zurückgreifen, ein retro-ähnliches QuickTime- oder AVI-Format als zusätzliche Ausweichmöglichkeit bereitzustellen.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut.
Fügen Sie dann untergeordnete {{HTMLElement("source")}}-Elemente innerhalb des `<video>`-Elements hinzu, eines für jede Version des angebotenen Videos.
Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Bandbreitenverfügbarkeit ausgewählt werden können, aber in unserem Fall verwenden wir es, um Formatoptionen anzubieten.

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

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut auf `video/webm` gesetzt).
Wenn der {{Glossary("user_agent", "user agent")}} dies nicht abspielen kann, geht er zur nächsten Option über, deren `type` als `video/mp4` angegeben ist.
Wenn keins von beiden abgespielt werden kann, wird der Text "Dieser Browser unterstützt das HTML-Videoelement nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                  |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4 Audio einschließlich ADTS                                                                            |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Formatspezifikation                                                                                       |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                               |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                               |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4-Dateiformat)                                                                | Definiert das MPEG-4 (MP4) Version 2-Containerformat                                                               |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4)-Containerformat                                                           |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                  |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateierweiterungen                                                               |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Movie (MOV)-Format                                                                         |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Nächstes an einer offiziellen WAV-Spezifikation                                                                    |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet von WAV)      | Definiert das RIFF-Format; WAV-Dateien sind eine Form von RIFF                                                     |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska für WebM                                                                      |
| [Matroska Specifications](https://www.matroska.org/index.html)                                                                                               | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                           |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM-Byte-Stream-Format zur Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

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
        Browserunterstützung
      </th>
      <th scope="col" style="vertical-align: bottom">MIME-Typ</th>
      <th scope="col" style="vertical-align: bottom">Erweiterung(en)</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browserunterstützung
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

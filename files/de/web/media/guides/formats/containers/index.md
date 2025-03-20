---
title: Mediencontainerformate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: 2bacce4734138ecf6def75b00d948cf4be9a730f
---

Ein **Mediencontainer** ist ein Dateiformat, das einen oder mehrere Mediastreams (wie Audio oder Video) zusammen mit Metadaten encapsuliert, sodass sie gemeinsam gespeichert und wiedergegeben werden können.
Das Format von Audio- und Videodateien wird durch mehrere Komponenten definiert, einschließlich der verwendeten Audio- und/oder Videocodecs, des Mediencontainerformats (oder Dateityps) und optional anderer Elemente wie Untertitel-Codecs oder Metadaten.
In diesem Leitfaden werfen wir einen Blick auf die im Web am häufigsten verwendeten Containerformate und behandeln Grundlagen zu deren Spezifikationen sowie deren Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container.
Stattdessen streamt es die codierten Audio- und Videotracks direkt von einem Peer zum anderen, indem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte verwendet werden, um jeden Track darzustellen.
Weitere Informationen zu Codecs, die häufig für WebRTC-Anrufe verwendet werden, sowie zur Browser-Kompatibilität hinsichtlich der Codec-Unterstützung in WebRTC finden Sie unter [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Häufige Containerformate

Während es eine Vielzahl von Mediencontainerformaten gibt, sind die unten aufgelisteten diejenigen, denen Sie am wahrscheinlichsten begegnen werden.
Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen.
Die MIME-Typen und Erweiterungen für jedes werden aufgeführt. Die am häufigsten für Medien im Web verwendeten Container sind wahrscheinlich MPEG-4 (MP4), Web Media File (WEBM) und MP3-Format.
Sie können jedoch auch Ogg, WAV, AVI, MOV und andere Formate antreffen.
Nicht alle davon werden jedoch von Browsern breit unterstützt; einige Kombinationen aus Container und Codec erhalten manchmal aus Gründen der Bequemlichkeit oder aufgrund ihrer Allgegenwart eigene Dateierweiterungen und MIME-Typen.
Zum Beispiel wird eine Ogg-Datei mit nur einem Opus-Audiotrack manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben.
Es bleibt jedoch tatsächlich nur eine Ogg-Datei.

In anderen Fällen ist ein bestimmter Codec, der in einem bestimmten Containertyp gespeichert ist, so allgegenwärtig, dass die Paarung auf einzigartige Weise behandelt wird.
Ein gutes Beispiel dafür sind die MP3-Audiodateien, die tatsächlich ein MPEG-1-Container mit einem einzigen Audiotrack sind, der mit MPEG-1 Audio Layer III-Codierung codiert ist.
Diese Dateien verwenden den `audio/mp3` MIME-Typ und die `.mp3` Erweiterung, obwohl ihre Container nur MPEG sind.

### Index der Mediencontainerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, finden Sie es in dieser Liste und klicken Sie durch zu den Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, unter anderem Spezifika.

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
        <p>Verfügbar nur, wenn es auf dem Medien-Framework des zugrunde liegenden Betriebssystems verfügbar ist.
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

Sofern nicht anders angegeben, wird sowohl die mobile als auch die Desktop-Browser-Kompatibilität impliziert, wenn hier ein Browser aufgeführt ist.
Die Unterstützung ist auch nur für den Container selbst impliziert, nicht für spezifische Codecs.

### 3GP

Der **3GP** oder **3GPP** Mediencontainer wird verwendet, um Audio und/oder Video zu encapsulieren, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten vorgesehen ist.
Das Format wurde für die Verwendung auf 3G-Mobiltelefonen entwickelt, kann aber auch auf moderneren Telefonen und Netzwerken verwendet werden.
Durch die verbesserte Bandbreitenverfügbarkeit und die höheren Datenlimits in den meisten Netzwerken hat das 3GP-Format jedoch an Bedeutung verloren.
Dieses Format wird jedoch weiterhin für langsamere Netzwerke und für weniger leistungsfähige Telefone verwendet.

Dieses Mediencontainerformat ist abgeleitet vom ISO Base Media File Format sowie MPEG-4, jedoch speziell für Szenarien mit geringerer Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediencontainer; andere Typen können abhängig vom spezifischen Codec oder den Codecs, die verwendet werden, verwendet werden.
Zusätzlich können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und optional Details zum Profil, Level und/oder anderen spezifischen Codec-Konfigurationen zu liefern.

<table class="standard-table">
  <caption>
    Von 3GP unterstützte Videocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Support
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
        Browser-Support
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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das von MPEG-4 Part 3 für Audiodaten spezifiziert wird, das für das Streaming von Audio vorgesehen ist, wie zum Beispiel für Internetradio.
Es handelt sich im Wesentlichen um einen fast nackten Stream von AAC-Audiodaten, bestehend aus ADTS-Frames mit einem minimalen Header.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der MIME-Typ, der für ADTS verwendet wird, hängt von der Art der enthaltenen Audio-Frames ab.
Wenn ADTS-Frames verwendet werden, sollte der `audio/aac` MIME-Typ verwendet werden.
Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I-, II- oder III-Format sind, sollte der MIME-Typ `audio/mpeg` sein.

<table class="standard-table">
  <caption>
    Von ADTS unterstützte Audiocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Support
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

Die Unterstützung von AAC in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das Betriebssystem es unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein zugehöriges Containerformat, das ebenfalls FLAC genannt wird und dieses Audio enthalten kann.
Das Format ist nicht durch Patente belastet, sodass seine Verwendung von rechtlichen Einmischungen sicher ist.
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
        Browser-Support
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
Erstellt von der Moving Picture Experts Group (MPEG), werden diese Formate häufig in physischen Medien verwendet, einschließlich als Format des Videos auf DVD-Medien.

Im Internet ist die vielleicht häufigste Verwendung des MPEG-Dateiformats als Container für [Layer_III/MP3](https://en.wikipedia.org/wiki/MPEG-1)-Sounddaten; die resultierenden Dateien sind die weltweit beliebten MP3-Dateien, die von digitalen Musikgeräten auf der ganzen Welt verwendet werden.
Andernfalls werden MPEG-1 und MPEG-2 nicht häufig in Webinhalten verwendet.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 liegen mehr in den Mediendatenformaten als im Containerformat.
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
        Browser-Support
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
        Browser-Support
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
MP4 ist heute ein beliebter Container, da es mehrere der am häufigsten verwendeten Codecs unterstützt und breit unterstützt wird.

Das ursprüngliche MPEG-4 Part 1-Dateiformat wurde 1999 eingeführt; das Version 2-Format, definiert in Part 14, wurde 2003 hinzugefügt.
Das MP4-Dateiformat ist abgeleitet vom [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format), das direkt vom [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) abgeleitet ist, das von [Apple](https://www.apple.com/) entwickelt wurde.

Wenn Sie den MPEG-4-Medientyp (`audio/mp4` oder `video/mp4`) angeben, können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und optional Details zum Profil, Level und/oder anderen spezifischen Codec-Konfigurationen zu liefern.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediencontainer; andere MIME-Typen können abhängig vom spezifischen Codec oder den Codecs in Gebrauch innerhalb des Containers verwendet werden.
Zusätzlich können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und optional Details zum Profil, Level und/oder anderen spezifischen Codec-Konfigurationen zu liefern.

<table class="standard-table">
  <caption>
    Von MPEG-4 unterstützte Videocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Support
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
        <p>Die Unterstützung von AV1 in Firefox ist auf Windows auf ARM deaktiviert (aktivieren, indem Sie die Einstellung <code>media.av1.enabled</code> auf <code>true</code> setzen).</p>
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
        Browser-Support
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg) Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird.
Der Ogg-Rahmen definiert auch patentfreie Mediendatenformate, wie den Theora-Videocodec und die Vorbis- und Opus-Audiocodecs.
[Xiph.org-Dokumente über das Ogg-Format](https://xiph.org/ogg/) sind auf deren Webseite verfügbar.

Obwohl Ogg schon lange existiert, hat es nie die breite Unterstützung erlangt, die erforderlich ist, um es zu einer guten ersten Wahl für einen Mediencontainer zu machen.
Normalerweise sind Sie besser dran mit der Verwendung von WebM, obwohl es Zeiten gibt, in denen Ogg nützlich ist, um es anzubieten, zum Beispiel wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die noch nicht WebM unterstützen.
Zum Beispiel unterstützen Firefox 3.5 und 3.6 Ogg, nicht aber WebM.

Sie können mehr Informationen über Ogg und seine Codecs im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) erhalten.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der `application/ogg` MIME-Typ kann verwendet werden, wenn Sie nicht genau wissen, ob die Medien Audio oder Video enthalten.
Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, jedoch auf `application/ogg` zurückgreifen, wenn Sie das Format oder die Formate des Inhalts nicht kennen.

Sie können auch [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und optional die Track-Medienformate weiter beschreiben.

<table class="standard-table">
  <caption>
    Von Ogg unterstützte Videocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Support
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
        Browser-Support
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
> Ogg Opus-Audiodateien, die länger als 12 Stunden 35 Minuten 39 Sekunden sind, werden abgeschnitten und weisen Suchprobleme auf, wenn sie auf Firefox Linux 64 bit ([Firefox Fehler 1810378](https://bugzil.la/1810378)) abgespielt werden.

### QuickTime

Das **QuickTime** Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für die Verwendung durch das gleichnamige Medien-Framework erstellt.
Die Erweiterung dieser Dateien, `.mov`, stammt aus der Tatsache, dass das Format ursprünglich für Filme verwendet wurde und gewöhnlich als "QuickTime movie" Format bezeichnet wurde.
Während QTFF als Grundlage für das MPEG-4 Dateiformat diente, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videodaten, Texttracks und so weiter.
QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber einige Jahre lang war für Windows QuickTime verfügbar, um auf Windows auf sie zugreifen zu können.
QuickTime für Windows wird jedoch seit Anfang 2016 nicht mehr von Apple unterstützt und _sollte nicht verwendet werden_, da bekannte Sicherheitsbedenken bestehen.
Der Windows Media Player unterstützt jedoch jetzt QuickTime Version 2.0 und frühere Dateien; die Unterstützung späterer Versionen von QuickTime erfordert Drittanbieter-Ergänzungen.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdateien und Codecs, sondern auch eine Vielzahl von beliebten und speziellen Audio- und Videocodecs sowie Standbildformate.
Durch QuickTime waren Mac-Anwendungen (einschließlich Webbrowser, durch das QuickTime-Plugin oder direkte QuickTime-Integration) in der Lage, Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice sowie Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr zu lesen und zu schreiben.

Darüber hinaus sind eine Reihe von Drittanbieter-Komponenten für QuickTime verfügbar, von denen einige die Unterstützung für zusätzliche Codecs hinzufügen.

Da QuickTime-Support im Grunde genommen hauptsächlich auf Apple-Geräten verfügbar ist, wird es nicht mehr weit verbreitet im Internet verwendet.
Apple selbst verwendet jetzt im Allgemeinen MP4 für Video.
Zudem ist das QuickTime-Framework auf dem Mac schon seit einiger Zeit veraltet und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der `video/quicktime` MIME-Typ ist der grundlegende Typ für den QuickTime-Mediencontainer.
Es ist erwähnenswert, dass QuickTime (das Medien-Framework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videotracks verwendet werden, und optional Details zum Profil, Level und/oder anderen spezifischen Codec-Konfigurationen zu liefern.

<table class="standard-table">
  <caption>
    Von QuickTime unterstützte Videocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Support
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
        Browser-Support
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

Das **Waveform Audio File Format** (**WAVE**), gewöhnlich aufgrund der Dateierweiterung `.wav` als WAV bezeichnet, ist ein Format, das von Microsoft und IBM entwickelt wurde, um Audiobitstromdaten zu speichern.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und ähnelt daher anderen Formaten wie dem AIFF von Apple.
Das WAV-Codec-Register ist unter {{RFC(2361)}} zu finden. Da jedoch fast alle WAV-Dateien lineares PCM verwenden, ist die Unterstützung für die anderen Codecs spärlich.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der `audio/wave` MIME-Typ ist der Standardtyp und wird bevorzugt; jedoch wurden die anderen im Laufe der Jahre von verschiedenen Produkten verwendet und können in einigen Umgebungen ebenfalls verwendet werden.

<table class="standard-table">
  <caption>
    Von WAVE unterstützte Audiocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browser-Support
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
Es basiert ausschließlich auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die ihrerseits frei und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und wird jetzt breit unterstützt.
Konforme Implementierungen von WebM müssen die VP8- und VP9-Videocodecs sowie die Vorbis- und Opus-Audiocodecs unterstützen.
Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar.
Alle anderen Codecs können eine Lizenz zur Nutzung erfordern.

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
        Browser-Support
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
        <p>Firefox-Unterstützung für AV1 wurde auf macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und Firefox 68 auf Linux.
          Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist so konzipiert, dass ein sicherer Prozess verwendet wird, der auf Android noch nicht unterstützt wird.
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
        Browser-Support
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

Bei der Auswahl des besten Containers oder der besten Container für Ihre Medien sind einige Faktoren zu berücksichtigen.
Die relative Wichtigkeit jedes Faktors hängt von Ihren Bedürfnissen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihrer Zielgruppe ab.

### Richtlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien tun werden.
Die Wiedergabe von Medien ist eine andere Sache als das Aufzeichnen und/oder Bearbeiten davon.
Wenn Sie die Mediendaten manipulieren möchten, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfreien komprimierten Formats zumindest die Ansammlung von Rauschen verhindert, da Kompressionsartefakte mit jeder erneuten Komprimierung multipliziert werden, die auftritt.

- Wenn Ihre Zielgruppe wahrscheinlich Benutzer auf Mobilgeräten einschließt, insbesondere auf Geräten mit geringerem Leistungsniveaus oder in langsamen Netzwerken, sollten Sie in Betracht ziehen, eine Version Ihrer Medien in einem 3GP-Container mit angemessener Komprimierung bereitzustellen.
- Wenn Sie spezielle Kodierungsanforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie Ihre Medien in einem nicht-proprietären, offenen Format haben möchten, sollten Sie eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) in Betracht ziehen.
- Wenn Sie aus irgendeinem Grund nur in der Lage sind, Medien in einem einzigen Format bereitzustellen, wählen Sie ein Format, das auf der breitesten Auswahl an Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur aus Audio bestehen, macht es wahrscheinlich Sinn, ein nur auf Audio beschränktes Containerformat zu wählen.
  Nachdem alle Patente abgelaufen sind, ist MP3 eine weit verbreitete und gute Wahl.
  WAVE ist gut, aber unkomprimiert, daher sollten Sie sich dessen bewusst sein, bevor Sie es für große Audio-Proben verwenden.
  FLAC ist eine sehr gute Wahl aufgrund seiner verlustfreien Kompression, wenn die Zielbrowser es alle unterstützen.

Leider sind keines der relativ wichtigen verlustfreien Kompressionsformate (FLAC und ALAC) universell unterstützt.
FLAC wird breiter unterstützt, aber auf macOS ohne zusätzliche Software nicht unterstützt und auf iOS überhaupt nicht unterstützt.
Wenn Sie verlustfreie Audio anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um eine nahezu universelle Kompatibilität zu erreichen.

### Empfehlungen zur Containerauswahl

Die folgenden Tabellen bieten empfohlene Container für die Verwendung in verschiedenen Szenarien.
Dies sind nur Vorschläge.
Stellen Sie sicher, dass Sie die Anforderungen Ihrer Anwendung und Ihrer Organisation berücksichtigen, bevor Sie ein Containerformat auswählen.

#### Nur Audio-Dateien

| Wenn Sie… benötigen                            | Berücksichtigen Sie die Verwendung dieses Containerformats |
| ---------------------------------------------- | ---------------------------------------------------------- |
| Komprimierte Dateien für allgemeine Wiedergabe | MP3 (MPEG-1 Audio Layer III)                               |
| Verlustfreie komprimierte Dateien              | FLAC mit ALAC-Fallback                                     |
| Unkomprimierte Dateien                         | WAV                                                        |

Nachdem alle Patente von MP3 abgelaufen sind, ist die Wahl des Audio-Dateiformats viel einfacher geworden.
Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, Lizenzgebühren bei der Verwendung zu zahlen, zu wählen.

#### Videodateien

| Wenn Sie… benötigen                                           | Berücksichtigen Sie die Verwendung dieses Containerformats |
| ------------------------------------------------------------- | ---------------------------------------------------------- |
| Allgemeiner Videoverbrauch, bevorzugt in einem offenen Format | WebM (idealerweise mit MP4-Fallback)                       |
| Allgemeiner Videoverbrauch                                    | MP4 (idealerweise mit WebM oder Ogg-Fallback)              |
| Hohe Kompression optimiert für langsame Verbindungen          | 3GP (idealerweise mit MP4-Fallback)                        |
| Kompatibilität mit älteren Geräten/Browsers                   | QuickTime (idealerweise mit AVI und/oder MPEG-2-Fallback)  |

Diese Vorschläge basieren auf mehreren Annahmen.
Sie sollten die Optionen sorgfältig berücksichtigen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die codiert werden müssen.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, sollten Sie erwägen, mehr als eine Version von Mediendateien bereitzustellen, wobei das {{HTMLElement("source")}} Element verwendet wird, um jede Quelle innerhalb des {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements anzugeben.
Zum Beispiel können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einem Fallback im MP4-Format.
Sie könnten sich sogar dafür entscheiden, einen Retro-ähnlichen QuickTime- oder AVI-Fallback der guten Maßnahme halber anzubieten.

Dazu erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src) Attribut.
Fügen Sie dann untergeordnete {{HTMLElement("source")}} Elemente innerhalb des `<video>` Elements hinzu, eines für jede Version des von Ihnen angebotenen Videos.
Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Bandbreitenverfügbarkeit ausgewählt werden können, aber in unserem Fall werden wir es verwenden, um Formatoptionen anzubieten.

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

Das Video wird zunächst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type) Attribut auf `video/webm` gesetzt).
Wenn der {{Glossary("user_agent", "Benutzer-Agent")}} das nicht abspielen kann, wird zur nächsten Option weitergegangen, deren `type` als `video/mp4` angegeben ist.
Wenn keine dieser Optionen abgespielt werden kann, wird der Text "Dieser Browser unterstützt das HTML-Videotag nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                     |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio, einschließlich ADTS                                                                              |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Formatspezifikation                                                                                          |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                                  |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                                  |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 file format)                                                                | Definiert das MPEG-4 (MP4) Version 2 Containerformat                                                                  |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                              |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                     |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Mediatypen und -Dateierweiterungen                                                                  |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Film (MOV) Format                                                                             |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das Offiziellste, was einer WAVE-Spezifikation nahekommt                                                              |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet von WAV)      | Definiert das RIFF-Format; WAV-Dateien sind eine Form von RIFF                                                        |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska für WebM                                                                         |
| [Matroska Specifications](https://www.matroska.org/index.html)                                                                                               | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                              |
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
        Browser-Support
      </th>
      <th scope="col" style="vertical-align: bottom">MIME-Typ</th>
      <th scope="col" style="vertical-align: bottom">Erweiterung(en)</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        Browser-Support
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

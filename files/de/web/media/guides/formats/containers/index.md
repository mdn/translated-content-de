---
title: Containerformate für Medien (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Das Format von Audio- und Videodateien wird in zwei Teile unterteilt (drei, wenn eine Datei sowohl Audio als auch Video enthält): die verwendeten Audio- und/oder Videocodecs und das verwendete Mediencontainerformat (oder Dateityp).
In diesem Leitfaden betrachten wir die am häufigsten im Web verwendeten Containerformate und besprechen die Grundlagen ihrer Spezifikationen sowie ihre Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container.
Stattdessen streamt es die codierten Audio- und Videospuren direkt von einem Peer zum anderen, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte zur Darstellung jeder Spur verwendet werden.
Weitere Informationen zu den Codecs, die üblicherweise für WebRTC-Anrufe verwendet werden, sowie Informationen zur Browser-Kompatibilität hinsichtlich der Codec-Unterstützung in WebRTC finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Gängige Containerformate

Während es eine Vielzahl von Mediencontainerformaten gibt, sind die unten aufgeführten diejenigen, auf die Sie am ehesten stoßen werden.
Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen.
Die MIME-Typen und Erweiterungen für jedes sind aufgelistet. Die am häufigsten verwendeten Container für Medien im Web sind wahrscheinlich MPEG-4 (MP4), Web Media File (WEBM) und MPEG Audio Layer III (MP3).
Es kann jedoch auch vorkommen, dass Sie auf MP3, Ogg, WAV, AVI, MOV und andere Formate stoßen.
Aber nicht alle diese Formate werden von Browsern umfassend unterstützt; einige Kombinationen aus Container und Codec erhalten manchmal ihre eigenen Dateierweiterungen und MIME-Typen aus Gründen der Bequemlichkeit oder aufgrund ihrer Allgegenwärtigkeit.
Zum Beispiel wird eine Ogg-Datei mit nur einer Opus-Audiospur manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben.
Aber es ist immer noch tatsächlich nur eine Ogg-Datei.

In anderen Fällen wird ein bestimmter Codec, der in einem bestimmten Containertyp gespeichert ist, aufgrund seiner Allgegenwärtigkeit in einzigartiger Weise behandelt.
Ein gutes Beispiel dafür ist die MP3-Audiodatei, die tatsächlich ein MPEG-1-Container mit einer einzelnen Audiospur ist, die mit MPEG-1 Audio Layer III Encoding codiert ist.
Diese Dateien verwenden den `audio/mp3` MIME-Typ und die `.mp3`-Erweiterung, obwohl ihre Container einfach MPEG sind.

### Verzeichnis der Mediencontainerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, suchen Sie es in dieser Liste und klicken Sie sich durch zu den Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, neben anderen Spezifika.

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
        <p>Verfügbar nur, wenn es auf dem zugrunde liegenden Medien-Framework des Betriebssystems verfügbar ist.
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
      <td>Nur ältere Versionen von Safari, plus andere Browser, die Apples QuickTime-Plugin unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, wird sowohl die Kompatibilität mit mobilen als auch mit Desktop-Browsern impliziert, wenn ein Browser hier aufgeführt wird.
Die Unterstützung bezieht sich auch nur auf den Container selbst, nicht auf spezifische Codecs.

### 3GP

Der **3GP** oder **3GPP** Mediencontainer wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten bestimmt ist.
Das Format wurde für die Nutzung auf 3G-Handys entworfen, kann aber immer noch auf moderneren Telefonen und Netzwerken verwendet werden.
Die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenvolumenbegrenzungen auf den meisten Netzen haben jedoch die Notwendigkeit des 3GP-Formats verringert.
Dennoch wird dieses Format noch für langsamere Netze und für weniger leistungskräftige Telefone verwendet.

Dieses Mediencontainerformat ist vom ISO Base Media File Format und MPEG-4 abgeleitet, jedoch speziell für Szenarien mit niedriger Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediencontainer; andere Typen können je nach verwendeten spezifischen Codecs verwendet werden.
Zusätzlich können Sie [das `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden und um optional Details zum Profil, Level und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das von MPEG-4 Teil 3 für Audiodaten spezifiziert wurde, mit der Absicht, für gestreamtes Audio wie Internetradio genutzt zu werden.
Es ist im Wesentlichen ein fast reiner Stream von AAC-Audiodaten, bestehend aus ADTS-Frames mit einem minimalen Header.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der für ADTS verwendete MIME-Typ hängt davon ab, welche Art von Audio-Frames enthalten sind.
Wenn ADTS-Frames verwendet werden, sollte der `audio/aac` MIME-Typ verwendet werden.
Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I, II oder III-Format sind, sollte der MIME-Typ `audio/mpeg` sein.

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

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein einfaches zugehöriges Containerformat, ebenfalls FLAC genannt, das diesen Audioinhalt enthalten kann.
Das Format ist frei von Patentansprüchen, sodass seine Nutzung keine Behinderung erfährt.
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
Diese Formate wurden von der Moving Picture Experts Group (MPEG) erstellt und werden häufig in physischen Medien verwendet, einschließlich als Format des Videos auf DVD-Medien.

Im Internet ist die vielleicht häufigste Verwendung des MPEG-Dateiformats das Speichern von [Layer_III/MP3](https://en.wikipedia.org/wiki/MPEG-1) Schallinformationen; die resultierenden Dateien sind die äußerst populären MP3-Dateien, die von digitalen Musikgeräten weltweit verwendet werden.
Ansonsten werden MPEG-1 und MPEG-2 nicht häufig in Web-Inhalten verwendet.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 liegen in den Mediendatenformaten und nicht im Containerformat.
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
Es gibt zwei Versionen des Formats, die in Teil 1 und 14 der Spezifikation definiert sind.
MP4 ist heute ein beliebter Container, da es mehrere der am häufigsten verwendeten Codecs unterstützt und umfassend unterstützt wird.

Das ursprüngliche MPEG-4 Teil 1 Dateiformat wurde 1999 eingeführt; das Version 2-Format, das in Teil 14 definiert ist, wurde 2003 hinzugefügt.
Das MP4-Dateiformat ist vom [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, das direkt von dem von [Apple](https://www.apple.com/) entwickelten [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) abgeleitet ist.

Beim Spezifizieren des MPEG-4-Medientyps (`audio/mp4` oder `video/mp4`) können Sie [das `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden und um optional Details zum Profil, Level und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediencontainer; andere MIME-Typen können verwendet werden, abhängig von den spezifischen Codecs, die im Container verwendet werden.
Zusätzlich können Sie [das `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden und um optional Details zum Profil, Level und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

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
        <p>Die Unterstützung von AV1 in Firefox ist auf Windows auf ARM deaktiviert (aktivieren durch Setzen der Voreinstellung <code>media.av1.enabled</code> auf <code>true</code>).</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg) Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird.
Der Ogg-Framework definiert auch patentfreie Mediendatenformate, wie den Theora-Video-Codec und die Vorbis- und Opus-Audio-Codecs.
[Xiph.org-Dokumente über das Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Webseite verfügbar.

Obwohl Ogg schon seit langer Zeit existiert, hat es nie die breite Unterstützung erlangt, die notwendig wäre, um es zu einer guten ersten Wahl für ein Mediencontainerformat zu machen.
Typischerweise ist es besser, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich sein könnte, zum Beispiel wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen.
Zum Beispiel unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Weitere Informationen über Ogg und seine Codecs finden Sie im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der `application/ogg` MIME-Typ kann verwendet werden, wenn Sie nicht genau wissen, ob die Medien Audio oder Video enthalten.
Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber als Notlösung `application/ogg` verwenden, wenn Sie das Inhaltsformat oder die Formate nicht kennen.

Sie können auch [das `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden und um optional weitere Details zu den Track-Medienformaten bereitzustellen.

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
> Ogg Opus Audiodateien, die länger als 12h 35m 39s sind, werden abgeschnitten und zeigen Suchprobleme, wenn sie unter Firefox Linux 64 Bit abgespielt werden ([Firefox Bug 1810378](https://bugzil.la/1810378)).

### QuickTime

Das **QuickTime** Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple zur Nutzung durch seine gleichnamige Medienplattform erstellt.
Die Dateierweiterung `.mov` kommt daher, dass das Format ursprünglich für Filme genutzt wurde und oft als "QuickTime Movie Format" bezeichnet wurde.
Obwohl QTFF die Grundlage für das MPEG-4-Dateiformat diente, gibt es Unterschiede und die beiden sind nicht vollständig austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Textspuren und so weiter.
QuickTime-Dateien werden hauptsächlich durch macOS unterstützt, obwohl QuickTime für Windows auch für eine Reihe von Jahren verfügbar war, um den Zugang zu ihnen unter Windows zu ermöglichen.
Allerdings wird QuickTime für Windows seit Anfang 2016 von Apple nicht mehr unterstützt und _sollte nicht verwendet werden_, da bekannte Sicherheitsprobleme bestehen.
Windows Media Player bietet jetzt jedoch eine integrierte Unterstützung für QuickTime-Dateien der Version 2.0 und früher; die Unterstützung für neuere Versionen von QuickTime erfordert Drittanbietererweiterungen.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filme und Codecs, sondern auch eine Vielzahl populärer und spezialisierter Audio- und Videocodecs sowie Standbildformate.
Durch QuickTime waren Mac-Anwendungen (einschließlich Webbrowser, durch das QuickTime-Plugin oder die direkte QuickTime-Integration) in der Lage, Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice zu lesen und zu schreiben; sowie Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Teil 2, Sorenson und viele mehr.

Darüber hinaus sind eine Reihe von Drittanbieterkomponenten für QuickTime verfügbar, von denen einige Unterstützung für zusätzliche Codecs hinzufügen.

Da QuickTime-Unterstützung, für praktische Zwecke, hauptsächlich auf Apple-Geräten verfügbar ist, wird es im Internet nicht mehr weit verbreitet verwendet.
Apple selbst verwendet jetzt im Allgemeinen MP4 für Videos.
Darüber hinaus wurde das QuickTime-Framework auf dem Mac seit einiger Zeit abgekündigt und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der `video/quicktime` MIME-Typ ist der grundlegende Typ für den QuickTime-Mediencontainer.
Es ist erwähnenswert, dass QuickTime (die Medienplattform auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, so dass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [das `codecs`-Parameter hinzufügen](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typ-Zeichenkette, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden und um optional Details zum Profil, Level und/oder andere spezifische Codec-Konfigurationen bereitzustellen.

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

Das **Waveform Audio File Format** (**WAVE**), üblicherweise als WAV bezeichnet, aufgrund seiner Dateierweiterung `.wav`, ist ein Format, das von Microsoft und IBM zur Speicherung von Audio-Bitstream-Daten entwickelt wurde.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und daher anderen Formaten wie Apples AIFF ähnlich.
Das WAV Codec-Register ist bei {{RFC(2361)}} zu finden; Da jedoch fast alle WAV-Dateien lineares PCM verwenden, ist die Unterstützung für die anderen Codecs gering.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der `audio/wave` MIME-Typ ist der Standardtyp und wird bevorzugt; Die anderen wurden jedoch im Laufe der Jahre von verschiedenen Produkten verwendet und können auch in einigen Umgebungen verwendet werden.

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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basierendes Format, das speziell für den Einsatz in modernen Webumgebungen konzipiert ist.
Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die ihrerseits frei und offen sind, obwohl auch einige Produkte andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und wird inzwischen umfassend unterstützt.
Kompatible Implementierungen von WebM müssen die Video-Codecs VP8 und VP9 sowie die Audio-Codecs Vorbis und Opus unterstützen.
Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar.
Andere Codecs können eine Lizenz für deren Nutzung erfordern.

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
        <p>Die Unterstützung von AV1 in Firefox wurde in macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und in Firefox 68 auf Linux.
          Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist so konzipiert, dass sie einen sicheren Prozess verwendet, der auf Android noch nicht unterstützt wird.
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

Bei der Auswahl der besten Container oder Container für Ihre Medien sind einige Faktoren zu berücksichtigen.
Die relative Wichtigkeit jedes einzelnen hängt von Ihren Anforderungen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Richtlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien machen möchten.
Die Wiedergabe von Medien ist etwas anderes als das Aufnehmen und/oder Bearbeiten derselben.
Wenn Sie die Mediendaten manipulieren möchten, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfreien komprimierten Formats zumindest die Ansammlung von Rauschen verhindert, wenn Kompressionsartefakte bei jeder erneuten Komprimierung multipliziert werden.

- Wenn Ihr Zielpublikum wahrscheinlich Nutzer von mobilen Geräten mit niedrigerem Ende oder mit langsamen Netzwerken einschließt, sollten Sie in Betracht ziehen, eine Version Ihrer Medien in einem 3GP-Container mit geeigneter Kompression anzubieten.
- Wenn Sie spezielle Codierungsanforderungen haben, stellen Sie sicher, dass der ausgewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie Ihre Medien in einem nicht-proprietären, offenen Format haben möchten, sollten Sie die Verwendung eines der offenen Containerformate in Betracht ziehen, wie FLAC (für Audio) oder WebM (für Video).
- Wenn Ihnen aus irgendeinem Grund nur die Möglichkeit gegeben ist, Medien in einem einzigen Format bereitzustellen, wählen Sie ein Format, das auf der breitesten Auswahl an Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur aus Audio bestehen, ist es sinnvoll, ein Containerformat zu wählen, das nur Audio unterstützt.
  Da jetzt alle Patente abgelaufen sind, ist MP3 eine weit verbreitete und gute Wahl.
  WAVE ist gut, aber unkomprimiert, daher sollten Sie sich dessen bewusst sein, bevor Sie es für große Audiosamples verwenden.
  FLAC ist eine sehr gute Wahl, wegen seiner verlustfreien Kompression, wenn die Zielbrowser es alle unterstützen.

Leider sind weder der relativ große verlustfreie Kompressionsformate (FLAC und ALAC) universell unterstützt.
FLAC ist das breiter unterstützte der beiden Formate, wird jedoch von macOS ohne zusätzliche installierte Software nicht unterstützt und auf iOS überhaupt nicht.
Wenn Sie verlustfreies Audio anbieten möchten, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um eine universelle Kompatibilität zu erreichen.

### Ratschläge zur Containerauswahl

Die untenstehenden Tabellen bieten Vorschläge für Container, die in verschiedenen Szenarien verwendet werden sollten.
Dies sind lediglich Vorschläge.
Stellen Sie sicher, dass Sie die Bedürfnisse Ihrer Anwendung und Ihrer Organisation berücksichtigen, bevor Sie ein Containerformat auswählen.

#### Nur Audiodateien

| Wenn Sie benötigen…                             | Erwägen Sie die Verwendung dieses Containerformats |
| ----------------------------------------------- | -------------------------------------------------- |
| Komprimierte Dateien zur allgemeinen Wiedergabe | MP3 (MPEG-1 Audio Layer III)                       |
| Verlustfrei komprimierte Dateien                | FLAC mit ALAC Ausweichmöglichkeit                  |
| Unkomprimierte Dateien                          | WAV                                                |

Da nun alle MP3-Patente abgelaufen sind, ist die Wahl des Audio-Dateityps viel einfacher geworden.
Es ist nicht mehr erforderlich sich zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit Lizenzgebühren für die Nutzung aufzuwenden zu entscheiden.

#### Videodateien

| Wenn Sie benötigen…                                     | Erwägen Sie die Verwendung dieses Containerformats                   |
| ------------------------------------------------------- | -------------------------------------------------------------------- |
| Allgemeine Zwecke, vorzugsweise in einem offenen Format | WebM (idealerweise mit MP4-Ausweichmöglichkeit)                      |
| Allgemeine Zwecke                                       | MP4 (idealerweise mit WebM oder Ogg Ausweichmöglichkeit)             |
| Hohe Kompression optimiert für langsame Verbindungen    | 3GP (idealerweise mit MP4-Ausweichmöglichkeit)                       |
| Kompatibilität mit älteren Geräten/Browsers             | QuickTime (idealerweise mit AVI und/oder MPEG-2 Ausweichmöglichkeit) |

Diese Vorschläge beruhen auf einigen Annahmen.
Sie sollten die Optionen sorgfältig prüfen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie eine große Anzahl von Medien haben, die kodiert werden müssen.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, lohnt es sich, über die Bereitstellung mehrerer Versionen von Mediendateien nachzudenken, indem Sie das {{HTMLElement("source")}} Element verwenden, um jede Quelle im {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element anzugeben.
Sie könnten zum Beispiel ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einem Ausweichformat in MP4.
Für alle Fälle könnten Sie sogar eine Retro-Variante wie QuickTime oder AVI als Fallback anbieten.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src) Attribut.
Fügen Sie dann untergeordnet {{HTMLElement("source")}} Elemente innerhalb des `<video>` Elements hinzu, eines für jede von Ihnen angebotene Version des Videos.
Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Bandbreitenverfügbarkeit ausgewählt werden können, aber in unserem Fall werden wir es verwenden um Formatoptionen anzubieten.

Im hier gezeigten Beispiel wird ein Video dem Browser in zwei Formaten angeboten: WebM und MP4.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type) Attribut auf `video/webm`).
Wenn der {{Glossary("user_agent", "Benutzer-Agent")}} das nicht wiedergeben kann, wird zur nächsten Option übergegangen, deren `type` als `video/mp4` angegeben ist.
Wenn keine von beiden Formaten wiedergegeben werden kann, wird der Text "This browser does not support the HTML video element." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                          |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Formatspezifikation                                                                                     |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                             |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                             |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 file format)                                                                | Definiert das MPEG-4 (MP4) Version 2 Containerformat                                                             |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                         |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Mediatypen und Dateierweiterungen                                                              |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Film- (MOV) Format                                                                       |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das Näheste an einer offiziellen WAVE-Spezifikation                                                              |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (used by WAV)            | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                  |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska für WebM                                                                    |
| [Matroska Specifications](https://www.matroska.org/index.html)                                                                                               | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                         |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM Bytestrom-Format zur Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

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

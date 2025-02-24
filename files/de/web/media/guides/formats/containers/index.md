---
title: Media-Containerformate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

Das Format von Audio- und Videodateien wird in zwei Teilen definiert (drei, wenn eine Datei sowohl Audio- als auch Videodaten enthält, natürlich): die verwendeten Audio- und/oder Video-Codecs und das verwendete Media-Containerformat (oder der Dateityp).
In diesem Leitfaden betrachten wir die am häufigsten im Web verwendeten Containerformate und behandeln Grundlagen zu ihren Spezifikationen sowie ihre Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container.
Stattdessen streamt es die kodierten Audio- und Videospuren direkt von einem Peer zu einem anderen und verwendet dafür [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, welche jede Spur repräsentieren.
Siehe [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Informationen über Codecs, die häufig für WebRTC-Anrufe verwendet werden, sowie für Informationen zur Browser-Kompatibilität in Bezug auf Codec-Unterstützung bei WebRTC.

## Häufige Containerformate

Während es eine Vielzahl von Media-Containerformaten gibt, sind die unten aufgeführten diejenigen, denen Sie am ehesten begegnen werden.
Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen.
Die MIME-Typen und Erweiterungen für jeden sind aufgelistet. Die am häufigsten verwendeten Container für Medien im Web sind wahrscheinlich MPEG-4 (MP4), Web Media File (WEBM) und MPEG Audio Layer III (MP3).
Jedoch könnten Sie auch auf MP3, Ogg, WAV, AVI, MOV und andere Formate stoßen.
Nicht alle davon werden jedoch umfassend von Browsern unterstützt; einige Kombinationen von Container und Codec erhalten manchmal ihre eigenen Dateierweiterungen und MIME-Typen aus Gründen der Bequemlichkeit oder aufgrund ihrer Allgegenwärtigkeit.
Zum Beispiel wird eine Ogg-Datei mit nur einer Opus-Audiospur manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben.
Aber eigentlich ist es immer noch nur eine Ogg-Datei.

In anderen Fällen ist ein bestimmter Codec, der in einem bestimmten Containertyp gespeichert ist, so allgegenwärtig, dass die Kombination auf eine einzigartige Weise behandelt wird.
Ein gutes Beispiel hierfür ist die MP3-Audiodatei, die eigentlich ein MPEG-1-Container mit einer einzigen Audiospur ist, die mithilfe der MPEG-1 Audio Layer III-Kodierung codiert wurde.
Diese Dateien verwenden den MIME-Typ `audio/mp3` und die Erweiterung `.mp3`, obwohl ihre Container nur MPEG sind.

### Index der Media-Containerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, suchen Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, sowie andere Spezifikationen.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codecnamen (kurz)</th>
      <th scope="col">Vollständiger Codecnamen</th>
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
        <p>Verfügbar, nur wenn verfügbar im Medien-Framework des zugrundeliegenden Betriebssystems.
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
      <td>Nur ältere Versionen von Safari sowie andere Browser, die Apples QuickTime-Plugin unterstützen</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, wird sowohl die Unterstützung mobiler als auch Desktop-Browser impliziert, wenn ein Browser hier aufgeführt ist.
Die Unterstützung bezieht sich nur auf den Container selbst, nicht auf spezifische Codecs.

### 3GP

Der **3GP**- oder **3GPP**-Mediacontainer wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze auf mobilen Geräten vorgesehen ist.
Das Format wurde für die Verwendung auf 3G-Mobiltelefonen entwickelt, kann aber nach wie vor auf moderneren Telefonen und Netzwerken verwendet werden.
Jedoch hat die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenvolumenbegrenzungen in den meisten Netzwerken den Bedarf für das 3GP-Format verringert.
Dieses Format wird jedoch immer noch für langsamere Netzwerke und für Telefone mit geringer Leistung verwendet.

Dieses Media-Container-Format leitet sich vom ISO Base Media File Format und MPEG-4 ab, ist jedoch speziell für Szenarien mit niedrigerer Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediacontainer; andere Typen können je nach spezifischem Codec oder Codecs verwendet werden.
Außerdem können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typzeichenfolge hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional Details über das Profil, die Ebene und/oder andere Codec-Konfigurationsspezifikationen bereitstellen.

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
      <th scope="row">MPEG-4 Teil 2 (MP4v-es)</th>
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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das von MPEG-4 Teil 3 für Audiodaten spezifiziert ist und für gestreamte Audiodaten verwendet werden soll, wie z.B. für Internetradio.
Es handelt sich im Wesentlichen um einen beinahe rohen Strom von AAC-Audiodaten, bestehend aus ADTS-Frames mit einem minimalen Header.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der MIME-Typ, der für ADTS verwendet wird, hängt davon ab, welche Art von Audio-Frames enthalten sind.
Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden.
Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I, II oder III-Format vorliegen, sollte der MIME-Typ `audio/mpeg` verwendet werden.

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

Die Unterstützung von AAC in Firefox beruht auf der Medieninfrastruktur des Betriebssystems, sodass sie verfügbar ist, solange das OS dies unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein dazugehöriges einfaches Containerformat, das ebenfalls FLAC genannt wird und diesen Audioinhalt enthalten kann.
Das Format ist nicht durch Patente belastet, sodass seine Verwendung von Störungen frei ist.
FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                                 |
| ------------------------------------- |
| `audio/flac`                          |
| `audio/x-flac` (nicht-standardisiert) |

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

Die **[MPEG-1](https://de.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://de.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch.
Erstellt von der Moving Picture Experts Group (MPEG) werden diese Formate häufig in physischen Medien verwendet, einschließlich als Format des Videos auf DVD-Medien.

Im Internet ist der vielleicht häufigste Gebrauch des MPEG-Dateiformats die Einbettung von [Layer_III/MP3](https://de.wikipedia.org/wiki/MPEG-1)-Klangdaten; die resultierenden Dateien sind die weltweit weit verbreiteten MP3-Dateien, die von digitalen Musikgeräten verwendet werden.
Ansonsten werden MPEG-1 und MPEG-2 nicht häufig in Webinhalten verwendet.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 treten bei den Mediendatenformaten auf und nicht beim Containerformat.
MPEG-1 wurde 1992 eingeführt, MPEG-2 erschien im Jahr 1996.

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
      <th scope="row">MPEG-1 Teil 2</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2 Teil 2</th>
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

**[MPEG-4](https://de.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats.
Es gibt zwei Versionen des Formats, die in den Teilen 1 und 14 der Spezifikation definiert sind.
MP4 ist heute ein beliebter Container, da es mehrere der am häufigsten verwendeten Codecs unterstützt und weitgehend unterstützt wird.

Das ursprüngliche MPEG-4 Teil 1 Dateiformat wurde 1999 eingeführt; das Version 2-Format, definiert in Teil 14, wurde 2003 hinzugefügt.
Das MP4-Dateiformat leitet sich direkt vom [ISO Base Media File Format](https://de.wikipedia.org/wiki/ISO_Base_Media_File_Format) ab, das wiederum direkt vom [QuickTime-Dateiformat](https://de.wikipedia.org/wiki/QuickTime_File_Format) entwickelt von [Apple](https://www.apple.com/) abgeleitet ist.

Beim Angeben des MPEG-4-Mediatyps (`audio/mp4` oder `video/mp4`) können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typzeichenfolge hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional Details über das Profil, die Ebene und/oder andere Codec-Konfigurationsspezifikationen bereitstellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediacontainer; andere MIME-Typen können abhängig vom spezifischen Codec oder den verwendeten Codecs innerhalb des Containers verwendet werden.
Außerdem können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typzeichenfolge hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional Details über das Profil, die Ebene und/oder andere Codec-Konfigurationsspezifikationen bereitstellen.

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
          Die Unterstützung von H.264 in Firefox beruht auf der
          Medieninfrastruktur des Betriebssystems, sodass sie verfügbar ist,
          solange das OS dies unterstützt.
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
        <p>Die Unterstützung von AV1 in Firefox ist auf Windows auf ARM deaktiviert (aktivieren durch Setzen des Präferenzwertes <code>media.av1.enabled</code> auf <code>true</code>).</p>
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
      <th scope="row">MPEG-4 Teil 2 Visual</th>
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
        <p>Die Unterstützung von H.264 in Firefox beruht auf der Medieninfrastruktur des Betriebssystems, sodass sie verfügbar ist, solange das OS dies unterstützt.</p>
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

Das [Ogg](https://de.wikipedia.org/wiki/Ogg)-Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird.
Der Ogg-Rahmen definiert auch patentfreie Mediadatenformate, wie den Theora-Video-Codec sowie die Audio-Codecs Vorbis und Opus.
[Xiph.org-Dokumente über das Ogg-Format](https://xiph.org/ogg/) stehen auf deren Webseite zur Verfügung.

Obwohl Ogg schon lange existiert, hat es nie die breite Unterstützung erhalten, die es zu einer guten ersten Wahl für ein Media-Container machen würde.
In der Regel ist es besser, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich sein kann, beispielsweise wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen.
Zum Beispiel unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Mehr Informationen zu Ogg und seinen Codecs finden Sie im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der MIME-Typ `application/ogg` kann verwendet werden, wenn Sie nicht sicher sind, ob das Medium Audio oder Video enthält.
Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn Sie das Inhaltsformat oder die Formate nicht kennen.

Sie können auch [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) zur MIME-Typzeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional die Trackmediendateiformate weiter zu beschreiben.

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
> Ogg Opus Audiodateien, die länger als 12h 35m 39s sind, werden gekürzt und weisen Suchprobleme auf, wenn sie auf Firefox Linux 64-Bit abgespielt werden ([Firefox Bug 1810378](https://bugzil.la/1810378)).

### QuickTime

Das **QuickTime**-Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für die Verwendung durch dessen Medien-Framework mit demselben Namen erstellt.
Die Erweiterung dieser Dateien, `.mov`, stammt daher, dass das Format ursprünglich für Filme verwendet wurde und normalerweise als "QuickTime-Film"-Format bezeichnet wurde.
Während QTFF als Grundlage für das MPEG-4-Dateiformat diente, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Textspuren usw.
QuickTime-Dateien sind in erster Linie auf macOS, aber für eine Reihe von Jahren war QuickTime für Windows verfügbar, um auf Windows darauf zuzugreifen.
Jedoch wird QuickTime für Windows seit Anfang 2016 nicht mehr von Apple unterstützt und _sollte nicht verwendet werden_, da es bekannte Sicherheitsbedenken gibt.
Jedoch hat der Windows Media Player jetzt integrierte Unterstützung für QuickTime-Version 2.0 und frühere Dateien; Unterstützung für spätere Versionen von QuickTime erfordert Drittanbieter-Ergänzungen.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filme und Codecs, sondern auch eine Vielzahl von populären und spezialisierten Audio- und Video-Codecs sowie Stillbildformate.
Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowser, über das QuickTime-Plugin oder direkte QuickTime-Integration) Audioformate einschließlich AAC, AIFF, MP3, PCM und Qualcomm PureVoice lesen und schreiben; und Videoformate einschließlich AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Teil 2, Sorenson und viele mehr.

Darüber hinaus sind eine Reihe von Drittanbieter-Komponenten für QuickTime verfügbar, von denen einige Unterstützung für zusätzliche Codecs hinzufügen.

Weil QuickTime-Unterstützung de facto hauptsächlich auf Apple-Geräte beschränkt ist, wird es im Internet nicht mehr weit verbreitet verwendet.
Apple selbst verwendet nun im Allgemeinen MP4 für Video.
Zusätzlich ist das QuickTime-Framework schon seit einiger Zeit auf dem Mac veraltet und ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der MIME-Typ `video/quicktime` ist der grundlegende Typ für den QuickTime-Mediacontainer.
Es ist erwähnenswert, dass QuickTime (das Medien-Framework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zur MIME-Typzeichenkette hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional Details über das Profil, die Ebene und/oder andere Codec-Konfigurationsspezifikationen bereitzustellen.

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
      <th scope="row">Komponenten-Video</th>
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
      <th scope="row">MPEG-4 Teil 2 Visual</th>
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

Das **Waveform Audio File Format** (**WAVE**), in der Regel als WAV bezeichnet aufgrund seiner Dateierweiterung `.wav`, ist ein Format, das von Microsoft und IBM entwickelt wurde, um Audio-Bitstream-Daten zu speichern.

Es leitet sich vom Resource Interchange File Format (RIFF) ab, und ist daher ähnlich wie andere Formate wie Apples AIFF.
Das WAV-Codec-Register kann unter {{RFC(2361)}} gefunden werden; jedoch verwenden fast alle WAV-Dateien linearen PCM, sodass die Unterstützung für die anderen Codecs spärlich ist.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der MIME-Typ `audio/wave` ist der Standardtyp und wird bevorzugt; jedoch wurden die anderen im Laufe der Jahre von verschiedenen Produkten verwendet und können auch in einigen Umgebungen verwendet werden.

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
      <th scope="row">LPCM (Lineares Pulse Code-Modulation)</th>
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

**[WebM](https://de.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein auf [Matroska](https://de.wikipedia.org/wiki/Matroska) basierendes Format, das speziell für den Einsatz in modernen Webumgebungen entwickelt wurde.
Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die wiederum kostenlos und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und ist nun weitgehend unterstützt.
Konforme Implementierungen von WebM müssen die VP8- und VP9-Video-Codecs und die Vorbis- und Opus-Audio-Codecs unterstützen.
Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar.
Jede anderen Codecs erfordern möglicherweise eine Lizenz für die Nutzung.

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
        <p>Die Unterstützung von AV1 in Firefox wurde in macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und in Firefox 68 unter Linux.
          Firefox für Android unterstützt noch nicht AV1; die Implementierung in Firefox ist so konzipiert, dass sie einen sicheren Prozess verwendet, der auf Android noch nicht unterstützt wird.
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

## Das richtige Containerformat wählen

Bei der Auswahl des besten Containers für Ihre Medien sind einige Faktoren zu berücksichtigen.
Die relative Bedeutung jedes einzelnen hängt von Ihren Anforderungen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihrer Zielgruppe ab.

### Richtlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien tun möchten.
Das Abspielen von Medien ist eine andere Sache als das Aufzeichnen und/oder Bearbeiten.
Wenn Sie die Mediendaten manipulieren werden, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfrei komprimierten Formats zumindest das Ansammeln von Rauschen verhindert, da Kompressionsartefakte mit jeder erneuten Komprimierung multipliziert werden.

- Wenn Ihre Zielgruppe wahrscheinlich Benutzer auf mobilen Geräten einschließt, insbesondere auf Geräten mit niedrigerer Leistung oder langsamen Netzwerken, sollten Sie in Betracht ziehen, eine Version Ihrer Medien in einem 3GP-Container mit geeigneter Kompression bereitzustellen.
- Wenn Sie spezielle Kodierungsanforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie Ihre Medien in einem nicht proprietären, offenen Format haben möchten, sollten Sie eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) verwenden.
- Wenn Sie aus irgendeinem Grund nur Medien in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf der größtmöglichen Auswahl von Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien ausschließlich Audio sind, macht es wahrscheinlich Sinn, ein Audio-nur-Containerformat zu wählen.
  Da alle Patente abgelaufen sind, ist MP3 eine weit verbreitete und gute Wahl.
  WAVE ist gut, aber unkomprimiert, daher sollten Sie sich dessen bewusst sein, bevor Sie es für große Audio-Daten verwenden.
  FLAC ist eine sehr gute Wahl aufgrund seiner verlustfreien Kompression, wenn die Zielbrowser dies alle unterstützen.

Leider werden weder der relativ bedeutende verlustfreie Kompressionsformate (FLAC und ALAC) universell unterstützt.
FLAC ist der breiter unterstützte der beiden, wird jedoch ohne zusätzlich installierte Software nicht von macOS unterstützt und wird auf iOS überhaupt nicht unterstützt.
Wenn Sie verlustfreies Audio anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um nahezu universelle Kompatibilität zu erreichen.

### Ratschläge zur Containerauswahl

Die folgenden Tabellen bieten Vorschläge für Container, die in verschiedenen Szenarien verwendet werden sollen.
Dies sind nur Vorschläge.
Bitte beachten Sie die Anforderungen Ihrer Anwendung und Ihrer Organisation, bevor Sie ein Containerformat auswählen.

#### Nur Audiodateien

| Wenn Sie benötigen…                             | Überlegen Sie, dieses Containerformat zu verwenden |
| ----------------------------------------------- | -------------------------------------------------- |
| Komprimierte Dateien zur allgemeinen Wiedergabe | MP3 (MPEG-1 Audio Layer III)                       |
| Verlustfrei komprimierte Dateien                | FLAC mit ALAC-Backup                               |
| Unkomprimierte Dateien                          | WAV                                                |

Da alle Patente von MP3 abgelaufen sind, ist die Wahl des Audio-Dateiformats viel einfacher geworden.
Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, bei der Verwendung von Lizenzgebühren zu zahlen, zu wählen.

#### Videodateien

| Wenn Sie benötigen…                                     | Überlegen Sie, dieses Containerformat zu verwenden      |
| ------------------------------------------------------- | ------------------------------------------------------- |
| Allgemeine Videos, vorzugsweise in einem offenen Format | WebM (idealerweise mit MP4-Backup)                      |
| Allgemeine Videos                                       | MP4 (idealerweise mit WebM oder Ogg-Backup)             |
| Hohe Kompression, optimiert für langsame Verbindungen   | 3GP (idealerweise mit MP4-Backup)                       |
| Kompatibilität mit älteren Geräten/Browsers             | QuickTime (idealerweise mit AVI und/oder MPEG-2-Backup) |

Diese Vorschläge gehen von einigen Annahmen aus.
Sie sollten die Optionen sorgfältig in Betracht ziehen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die codiert werden müssen.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, ist es wert zu prüfen, mehr als eine Version von Mediendateien bereitzustellen, indem das {{HTMLElement("source")}}-Element verwendet wird, um jede Quelle innerhalb des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements anzugeben.
Beispielsweise können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einem Fallback im MP4-Format.
Sie könnten sogar in Erwägung ziehen, ein retroähnliches QuickTime- oder AVI-Fallback anzubieten.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src) Attribut.
Dann fügen Sie Kind-{{HTMLElement("source")}}-Elemente innerhalb des `<video>`-Elements hinzu, eins für jede Version des Videos, die Sie anbieten.
Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die in Abhängigkeit von der Bandbreitenverfügbarkeit ausgewählt werden können, aber in unserem Fall werden wir es verwenden, um Formatoptionen anzubieten.

Im hier gezeigten Beispiel wird ein Video im Browser in zwei Formaten angeboten: WebM und MP4.

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

Das Video wird zunächst im WebM-Format (`video/webm`) angeboten.
Wenn der {{Glossary("user_agent", "User Agent")}} das nicht wiedergeben kann, geht es zur nächsten Option weiter, deren `type` als `video/mp4` angegeben ist.
Wenn keiner dieser Typen abgespielt werden kann, wird der Text "This browser does not support the HTML video element." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                    | Kommentar                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                                | Definiert das 3GP-Containerformat                                                                                 |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Teil 3 Audio)                                                                                 | Definiert MP4-Audio einschließlich ADTS                                                                           |
| [FLAC-Format](https://xiph.org/flac/format.html)                                                                                                                 | Die FLAC-Formatspezifikation                                                                                      |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Teil 1 Systeme)                                                                               | Definiert das MPEG-1-Containerformat                                                                              |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Teil 1 Systeme)                                                                               | Definiert das MPEG-2-Containerformat                                                                              |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Teil 14: MP4-Dateiformat)                                                                    | Definiert das MPEG-4 (MP4) Version 2 Containerformat                                                              |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Teil 1 Systeme)                                                                               | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                          |
| {{RFC(3533)}}                                                                                                                                                    | Definiert das Ogg-Containerformat                                                                                 |
| {{RFC(5334)}}                                                                                                                                                    | Definiert die Ogg-Mediendateitypen und Dateiendungen                                                              |
| [QuickTime-Dateiformatspezifikation](https://developer.apple.com/documentation/quicktime-file-format)                                                            | Definiert das QuickTime-Film (MOV) Format                                                                         |
| [Multimedia-Programmierschnittstelle und Datenspezifikationen 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das nächstgelegene an eine offizielle WAVE-Spezifikation                                                          |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet durch WAV)        | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                   |
| [WebM Container Richtlinien](https://www.webmproject.org/docs/container/)                                                                                        | Guide für die Anpassung von Matroska für WebM                                                                     |
| [Matroska-Spezifikationen](https://www.matroska.org/index.html)                                                                                                  | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                          |
| [WebM Byte-Stromformat](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                         | WebM Byte-Strom-Format zur Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

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
- [MediaStream Aufnahme API](/de/docs/Web/API/MediaStream_Recording_API)
- {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente

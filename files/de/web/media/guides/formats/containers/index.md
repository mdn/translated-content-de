---
title: Media-Container-Formate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: a8ba4ed3061cddb88d40977dbb855cf27cedcfc2
---

Ein **Media-Container** ist ein Dateiformat, das einen oder mehrere Medienstreams (wie Audio oder Video) zusammen mit Metadaten kapselt, sodass sie gemeinsam gespeichert und wiedergegeben werden können. Das Format der Audio- und Videodateien wird von mehreren Komponenten definiert, darunter die verwendeten Audio- und/oder Videocodecs, das Media-Container-Format (oder Dateityp) und optional andere Elemente wie Untertitel-Codecs oder Metadaten. In diesem Leitfaden betrachten wir die am häufigsten im Web verwendeten Containerformate und geben einen Überblick über ihre Spezifikationen sowie ihre Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container. Stattdessen werden die kodierten Audio- und Videospuren direkt von einem Peer zum anderen gestreamt, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte jede Spur darstellen. Siehe [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Informationen zu häufig verwendeten Codecs für WebRTC-Anrufe sowie zu Informationen zur Browser-Kompatibilität rund um die Codec-Unterstützung in WebRTC.

## Häufige Containerformate

Während es eine große Anzahl von Media-Container-Formaten gibt, sind die unten aufgeführten die häufigsten, die Sie wahrscheinlich antreffen werden. Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen. Die MIME-Typen und Erweiterungen für jedes Format sind aufgeführt. Die am häufigsten verwendeten Container für Medien im Web sind wahrscheinlich MPEG-4 Part-14 (MP4) und Web Media File (WEBM). Sie könnten jedoch auch auf Ogg, WAV, AVI, MOV und andere Formate stoßen. Nicht alle davon werden von Browsern umfassend unterstützt; einige Kombinationen aus Container und Codec erhalten manchmal ihre eigenen Dateierweiterungen und MIME-Typen aus Bequemlichkeit oder aufgrund ihrer Verbreitung. Beispielsweise wird eine Ogg-Datei mit nur einer Opus-Audiospur manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben. Aber eigentlich handelt es sich immer noch um eine Ogg-Datei.

In einigen Fällen wird die Nutzung eines bestimmten Codecs so verbreitet, dass seine Verwendung als einzigartiges Format behandelt wird. Ein gutes Beispiel ist die MP3-Audiodatei, die nicht in einem herkömmlichen Container gespeichert wird. Stattdessen ist eine MP3-Datei im Wesentlichen ein Strom von MPEG-1 Audio Layer III-kodierten Frames, oft begleitet von Metadaten wie ID3-Tags. Diese Dateien verwenden den `audio/mpeg` MIME-Typ und die `.mp3`-Erweiterung.

### Index der Media-Container-Formate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, finden Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, neben weiteren spezifischen Informationen.

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
        <p>Nur verfügbar, wenn es im Medien-Framework des zugrunde liegenden Betriebssystems verfügbar ist.</p>
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
      <td>Apple QuickTime Film</td>
      <td>Nur ältere Versionen von Safari sowie andere Browser, die Apples QuickTime-Plugin unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, wird sowohl die Kompatibilität mit mobilen als auch Desktop-Browsern impliziert, wenn ein Browser hier aufgeführt ist. Die Unterstützung wird auch nur für den Container selbst impliziert, nicht für bestimmte Codecs.

### 3GP

Der **3GP** oder **3GPP** Media-Container wird verwendet, um Audio und/oder Video zu kapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten vorgesehen ist. Das Format wurde für den Einsatz auf 3G-Handys entwickelt, kann jedoch auch auf moderneren Telefonen und Netzwerken genutzt werden. Die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenlimits in den meisten Netzwerken haben jedoch die Notwendigkeit des 3GP-Formats verringert. Dieses Format wird jedoch immer noch für langsamere Netzwerke und für schwächer leistungsfähige Telefone verwendet.

Dieses Media-Container-Format ist vom ISO Base Media File Format und MPEG-4 abgeleitet, wurde jedoch speziell für Szenarien mit niedrigerer Bandbreite optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Media-Container; andere Typen können je nach dem spezifischen Codec oder den Codecs verwendet werden. Zusätzlich können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Ebene und/oder andere Codec-Konfigurationsspezifikationen bereitzustellen.

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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das in MPEG-4 Part 3 für Audiodaten spezifiziert ist und für gestreamte Audioanwendungen, wie zum Beispiel für Internetradio, vorgesehen ist. Im Wesentlichen handelt es sich um einen fast nackten Strom von AAC-Audiodaten, der aus ADTS-Frames mit minimalem Header besteht.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der verwendete MIME-Typ für ADTS hängt davon ab, welche Art von Audio-Frames die Datei enthält. Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden. Wenn die Audio-Frames im MPEG-1/MPEG-2 Audioschicht-I-, II- oder III-Format vorliegen, sollte der MIME-Typ `audio/mpeg` sein.

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

Die Unterstützung von AAC in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das Betriebssystem es unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein damit verbundenes Containerformat, ebenfalls FLAC genannt, das dieses Audio enthalten kann. Das Format ist nicht durch irgendwelche Patente belastet, sodass seine Verwendung vor Beeinträchtigungen sicher ist. FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                                |
| ------------------------------------ |
| `audio/flac`                         |
| `audio/x-flac` (nicht standardmäßig) |

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

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch. Erstellt von der Moving Picture Experts Group (MPEG), werden diese Formate weit verbreitet in physischen Medien verwendet, einschließlich als das Format des Videos auf DVD-Medien.

Im Internet ist die vielleicht häufigste Anwendung des MPEG-Standards die [MPEG-1 Audio Layer III](https://en.wikipedia.org/wiki/MPEG-1), allgemein bekannt als MP3, Audiodaten. Diese MP3-Dateien sind weltweit bei digitalen Musikgeräten sehr beliebt, obwohl MPEG-1 und MPEG-2 insgesamt nicht weit verbreitet in anderem Webinhalt verwendet werden.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 bestehen in den Mediendatenformaten und nicht im Containerformat. MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 eingeführt.

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

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats. Es gibt zwei Versionen des Formats, die in Teil 1 und 14 der Spezifikation definiert sind. MP4 ist heute ein beliebter Container, da es mehrere der am häufigsten verwendeten Codecs unterstützt und breit unterstützt wird.

Das ursprüngliche MPEG-4 Part 1 Dateiformat wurde 1999 eingeführt; das Version-2-Format, definiert in Part 14, wurde 2003 hinzugefügt. Das MP4-Dateiformat ist vom [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, welches direkt vom [QuickTime-Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) abgeleitet ist, das von [Apple](https://www.apple.com/) entwickelt wurde.

Bei der Angabe des MPEG-4-Medientyps (`audio/mp4` oder `video/mp4`) können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Ebene und/oder andere Codec-Konfigurationsspezifikationen bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Media-Container; andere MIME-Typen können je nach dem spezifischen Codec oder den Codecs, die im Container verwendet werden, verwendet werden. Zusätzlich können Sie [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Ebene und/oder andere Codec-Konfigurationsspezifikationen bereitzustellen.

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
        <p>Die H.264-Unterstützung in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das Betriebssystem es unterstützt.</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AV1</th>
      <td></td>
      <td></td>
      <td>
        <p>Ja</p>
        <p>Die AV1-Unterstützung in Firefox ist auf Windows unter ARM deaktiviert (aktivieren durch Setzen der Einstellung <code>media.av1.enabled</code> auf <code>true</code>).</p>
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
        <p>Die AAC-Unterstützung in Firefox hängt von der Medieninfrastruktur des Betriebssystems ab, sodass es verfügbar ist, solange das Betriebssystem es unterstützt.</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg)-Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird. Der Ogg-Framework definiert auch patentfreie Mediendatenformate, wie den Theora-Videocodec und die Vorbis- und Opus-Audiocodecs. [Xiph.org-Dokumente über das Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Website verfügbar.

Obwohl Ogg schon lange existiert, hat es nie die breite Unterstützung erlangt, die es zu einer guten ersten Wahl für ein Media-Container machen würde. Es ist typischerweise besser, WebM zu verwenden, obwohl es Zeiten gibt, in denen Ogg nützlich ist, um angeboten zu werden, zum Beispiel, wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen. Zum Beispiel unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Weitere Informationen über Ogg und seine Codecs finden Sie im [Theora Cookbook](https://archive.flossmanuals.net/ogg-theora/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der `application/ogg` MIME-Typ kann verwendet werden, wenn Sie nicht unbedingt wissen, ob die Medien Audio oder Video enthalten. Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn Sie das Inhaltsformat oder die Formate nicht kennen.

Sie können auch [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional, um die Track-Mediaformate weiter zu beschreiben.

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
> Ogg Opus-Audiodateien länger als 12h 35m 39s werden gekürzt und weisen Suchprobleme auf, wenn sie unter Firefox Linux 64 Bit abgespielt werden ([Firefox Fehler 1810378](https://bugzil.la/1810378)).

> [!NOTE]
> Safari 18.4+ (auf macOS 15.4+, iOS 18.4+, iPadOS 18.4+ und visionOS 2.4+) fügte Unterstützung für Opus und Vorbis-Codecs in Ogg-Containern hinzu.

### QuickTime

Das **QuickTime**-Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für die Nutzung mit seinem gleichnamigen Medienrahmenwerk erstellt. Die Erweiterung für diese Dateien, `.mov`, stammt daher, dass das Format ursprünglich für Filme verwendet wurde und meist als "QuickTime-Movie" Format bezeichnet wurde. Obwohl QTFF als Basis für das MPEG-4-Dateiformat diente, gibt es Unterschiede, und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Textspuren usw. QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber für eine Reihe von Jahren war QuickTime für Windows verfügbar, um auf ihnen unter Windows zuzugreifen. QuickTime für Windows wird jedoch seit Anfang 2016 nicht mehr von Apple unterstützt und _sollte nicht verwendet werden_, da bekannte Sicherheitsprobleme bestehen. Windows Media Player hat jedoch mittlerweile integrierte Unterstützung für QuickTime-Dateien bis Version 2.0; die Unterstützung für spätere Versionen von QuickTime erfordert zusätzliche Komponenten von Drittanbietern.

Unter Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdateien und Codecs, sondern auch eine große Anzahl beliebter und spezieller Audio- und Videocodecs sowie Stillbildformate. Über QuickTime konnten Mac-Anwendungen (einschließlich Webbrowsern, über das QuickTime-Plugin oder durch direkte QuickTime-Integration) Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice sowie Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr lesen und schreiben.

Darüber hinaus sind eine Reihe von Drittanbieterkomponenten für QuickTime verfügbar, von denen einige Unterstützung für zusätzliche Codecs hinzufügen.

Da QuickTime-Unterstützung im Wesentlichen primär auf Apple-Geräten verfügbar ist, wird es im Internet nicht mehr weit verbreitet verwendet. Apple selbst verwendet mittlerweile meist MP4 für Videos. Darüber hinaus wurde das QuickTime-Framework auf dem Mac seit einiger Zeit als veraltet markiert und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der `video/quicktime` MIME-Typ ist der grundlegende Typ für den QuickTime-Media-Container. Es ist erwähnenswert, dass QuickTime (das Medien-Framework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt und daher tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp) zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Ebene und/oder andere Codec-Konfigurationsspezifikationen bereitzustellen.

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

Das **Waveform Audio File Format** (**WAVE**), üblicherweise aufgrund seiner Dateinamenerweiterung `.wav` als WAV bezeichnet, ist ein Format, das von Microsoft und IBM zur Speicherung von Audio-Bitstream-Daten entwickelt wurde.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und daher ähnlich wie andere Formate wie Apples AIFF. Die WAV-Codec-Registrierung ist bei {{RFC(2361)}} zu finden. Da jedoch fast alle WAV-Dateien lineares PCM verwenden, ist die Unterstützung für die anderen Codecs spärlich.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der `audio/wave` MIME-Typ ist der Standardtyp und wird bevorzugt; die anderen wurden jedoch im Laufe der Jahre von verschiedenen Produkten verwendet und können ebenfalls in einigen Umgebungen verwendet werden.

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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein Format, das auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basiert und speziell für den Einsatz in modernen Webumgebungen entwickelt wurde. Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die ebenfalls frei und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 vorgestellt und wird heute umfassend unterstützt. Konforme Implementierungen von WebM müssen die Video-Codecs VP8 und VP9 sowie die Audio-Codecs Vorbis und Opus unterstützen. Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar. Alle anderen Codecs können eine Lizenz zur Nutzung erfordern.

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
        <p>Die AV1-Unterstützung in Firefox wurde auf macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und Firefox 68 auf Linux.
          Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist so konzipiert, dass sie einen sicheren Prozess verwendet, der unter Android noch nicht unterstützt wird.
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

## Die richtigen Container auswählen

Es gibt einige Faktoren zu berücksichtigen, wenn Sie den besten Container oder die besten Container für Ihre Medien auswählen. Die relative Bedeutung jedes Faktors hängt von Ihren Anforderungen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Richtlinien

Bei der Auswahl des richtigen Medienformats sollte Ihre Entscheidung von Ihrem beabsichtigten Gebrauch abhängen. Die Wiedergabe von Medien unterscheidet sich von deren Aufnahme oder Bearbeitung. Für die Bearbeitung können unkomprimierte Formate die Leistung verbessern, während verlustfreie Kompression verhindert, dass sich bei wiederholter Neukompression Rauschen ansammelt.

- Wenn Ihr Zielpublikum wahrscheinlich Nutzer mobiler Geräte umfasst, insbesondere auf leistungsschwächeren Geräten oder in langsamen Netzwerken, sollten Sie die Bereitstellung einer Version Ihrer Medien in einem 3GP-Container mit entsprechender Kompression in Betracht ziehen.
- Wenn Sie spezifische Kodierungsanforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie möchten, dass Ihre Medien in einem nicht proprietären, offenen Format sind, sollten Sie in Betracht ziehen, eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) zu verwenden.
- Wenn Sie aus irgendeinem Grund Medien nur in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf der breitesten Auswahl an Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur aus Audio bestehen, macht es wahrscheinlich Sinn, ein nur für Audio geeignetes Format zu wählen. Siehe unten für einen Vergleich der verschiedenen Audio-Formate.

### Rat zur Containerauswahl

Die folgenden Tabellen bieten empfohlene Container, die in verschiedenen Szenarien verwendet werden können. Diese sind nur Vorschläge. Berücksichtigen Sie die Bedürfnisse Ihrer Anwendung und Ihrer Organisation sorgfältig, bevor Sie ein Containerformat auswählen.

#### Nur Audio-Dateien

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
      <td>Weit verbreitet und erkannt; verwendet verlustbehaftete Kompression, um eine gute Balance zwischen Dateigröße und Audioqualität zu bieten.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Verlustfreie Kompression</strong></td>
      <td><strong>FLAC (Free Lossless Audio Codec)</strong></td>
      <td>Bietet verlustfreie Kompression, wodurch die Originaltonqualität erhalten bleibt, während die Dateigröße reduziert wird.</td>
    </tr>
    <tr>
      <td><strong>ALAC (Apple Lossless Audio Codec)</strong></td>
      <td>Ähnlich wie FLAC, jedoch für Apple-Geräte konzipiert; eine gute Ausweichlösung bei der Arbeit innerhalb des Apple-Ökosystems.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Unkomprimierte Dateien</strong></td>
      <td><strong>WAV (Waveform Audio File Format)</strong></td>
      <td>Enthält unkomprimiertes PCM-Audio und liefert die höchste Klangtreue, jedoch auf Kosten größerer Datei Größen.</td>
    </tr>
    <tr>
      <td><strong>AIFF (Audio Interchange File Format)</strong></td>
      <td>Vergleichbar mit WAV in Bezug auf Qualität und Dateigröße, obwohl es oft auf Apple-Plattformen bevorzugt wird.</td>
    </tr>
  </tbody>
</table>

Da alle MP3-Patente abgelaufen sind, ist die Wahl des Audio-Dateiformats viel einfacher geworden. Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, bei der Verwendung Gebühren zu zahlen, zu wählen.

Leider werden weder die relativ großen verlustfreien Kompressionsformate (FLAC und ALAC) universell unterstützt. FLAC ist das breiter unterstützte der beiden, wird aber nicht von macOS ohne zusätzliche Software unterstützt und wird auf iOS überhaupt nicht unterstützt. Wenn Sie verlustfreien Ton anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um nahezu universelle Kompatibilität zu erreichen.

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
        Für den modernen Webeinsatz entwickelt, ist WebM ein offener, lizenzfreier Container, der effiziente Kompression und native Unterstützung in den meisten Browsern bietet.
      </td>
    </tr>
    <tr>
      <td><strong>Allzweckvideo</strong></td>
      <td><strong>MP4</strong></td>
      <td>
        MP4 ist der Industriestandard für Videoinhalte und wird umfassend über Geräte und Browser unterstützt.
      </td>
    </tr>
    <tr>
      <td><strong>Hohe Kompression für langsame Verbindungen</strong></td>
      <td><strong>3GP</strong></td>
      <td>
        Für mobile Geräte und Umgebungen mit geringer Bandbreite optimiert, liefert 3GP unter eingeschränkten Bedingungen akzeptable Videoqualität.
      </td>
    </tr>
    <tr>
      <td><strong>Kompatibilität mit älteren Geräten/Browsern</strong></td>
      <td><strong>QuickTime</strong></td>
      <td>
        QuickTime ist ein älterer Container, der ursprünglich auf Apple-Plattformen beliebt war. Er wird immer noch häufig von macOS-Videoaufzeichnungssoftware produziert.
      </td>
    </tr>
  </tbody>
</table>

Diese Vorschläge machen eine Reihe von Annahmen. Sie sollten die Optionen sorgfältig prüfen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die kodiert werden müssen. Häufig wäre es sinnvoll, mehrere Ausweichoptionen für diese Formate anzubieten - zum Beispiel MP4 als Ausweichlösung für WebM oder 3GP oder AVI für QuickTime.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, lohnt es sich, mehr als eine Version von Mediendateien bereitzustellen, indem Sie das {{HTMLElement("source")}}-Element verwenden, um jede Quelle innerhalb des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements anzugeben. Beispielsweise können Sie ein Ogg- oder WebM-Video als erste Wahl und eine Ausweichmöglichkeit im MP4-Format anbieten. Sie könnten sogar in Betracht ziehen, eine retroartige QuickTime oder AVI-Ausweichlösung aus Goodwill bereitzustellen.

Dazu erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attribut. Fügen Sie dann untergeordnete {{HTMLElement("source")}}-Elemente innerhalb des `<video>`-Elements hinzu, eines für jede Version des Videos, die Sie anbieten. Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die abhängig von der verfügbaren Bandbreite ausgewählt werden können, aber in unserem Fall verwenden wir es, um Formatoptionen anzubieten.

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

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/source#type)-Attribut auf `video/webm` gesetzt). Wenn der {{Glossary("user_agent", "Benutzeragent")}} dieses nicht abspielen kann, geht es zur nächsten Option über, deren `type` als `video/mp4` angegeben ist. Wenn keines dieser Formate abgespielt werden kann, wird der Text "Dieser Browser unterstützt das HTML-Videoelement nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                      |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                                |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Format-Spezifikation                                                                                          |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systeme)                                                                           | Definiert das MPEG-1-Containerformat                                                                                   |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systeme)                                                                           | Definiert das MPEG-2-Containerformat                                                                                   |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 Dateiformat)                                                                | Definiert das MPEG-4 (MP4) Version 2 Containerformat                                                                   |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systeme)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                               |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                      |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateierweiterungen                                                                   |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Film (MOV) Format                                                                              |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Der offizielle Standard für das WAVE-Format                                                                            |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet von WAV)      | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                        |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska für WebM                                                                          |
| [Matroska Specifications](https://www.matroska.org/index.html)                                                                                               | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                               |
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
- {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente

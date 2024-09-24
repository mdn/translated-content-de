---
title: Mediencontainerformate (Dateitypen)
slug: Web/Media/Formats/Containers
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das Format von Audio- und Videodateien wird in zwei Teilen definiert (drei, wenn eine Datei sowohl Audio als auch Video enthält): Die verwendeten Audio- und/oder Videocodecs und das verwendete Mediencontainerformat (oder Dateityp). In diesem Leitfaden betrachten wir die auf dem Web am häufigsten verwendeten Containerformate und behandeln grundlegende Informationen zu ihren Spezifikationen sowie deren Vorteile, Einschränkungen und idealen Anwendungsfälle.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container. Stattdessen streamt es die kodierten Audio- und Videospuren direkt von einem Peer zum anderen, wobei {{domxref("MediaStreamTrack")}}-Objekte verwendet werden, um jede Spur darzustellen. Weitere Informationen über üblicherweise für WebRTC-Anrufe verwendete Codecs sowie Browserkompatibilitätsinformationen zu Codec-Unterstützung in WebRTC finden Sie unter [Codecs verwendet von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).

## Gemeinsame Containerformate

Obwohl es eine große Anzahl von Mediencontainerformaten gibt, sind die unten aufgeführten die, die Sie am ehesten antreffen werden. Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen. Die MIME-Typen und Erweiterungen für jedes werden aufgeführt. Die am häufigsten verwendeten Container für Medien im Web sind wahrscheinlich MPEG-4 (MP4), Web Media File (WEBM) und MPEG Audio Layer III (MP3). Sie können jedoch auch auf MP3, Ogg, WAV, AVI, MOV und andere Formate stoßen. Nicht alle diese werden jedoch von Browsern umfassend unterstützt; einige Kombinationen von Container und Codec erhalten manchmal aufgrund ihrer Bequemlichkeit oder aufgrund ihrer Allgegenwärtigkeit ihre eigenen Dateierweiterungen und MIME-Typen. Ein Ogg-Datei mit nur einer Opus-Audiospur wird zum Beispiel manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben. Aber eigentlich ist es immer noch nur eine Ogg-Datei.

In anderen Fällen ist ein bestimmter Codec, der in einem bestimmten Containertyp gespeichert ist, so allgegenwärtig, dass das Paar in einzigartiger Weise behandelt wird. Ein gutes Beispiel dafür ist die MP3-Audiodatei, die tatsächlich ein MPEG-1-Container mit einer einzelnen Audiospur ist, die mit MPEG-1 Audio Layer III-Codierung kodiert ist. Diese Dateien verwenden den MIME-Typ `audio/mp3` und die Erweiterung `.mp3`, obwohl ihre Container nur MPEG sind.

### Index der Mediencontainerformate (Dateitypen)

Um mehr über ein bestimmtes Containerformat zu erfahren, finden Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, neben anderen Einzelheiten.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
      <th scope="col">Vollständiger Codec-Name</th>
      <th scope="col">Browserkompatibilität</th>
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
        <p>Nur verfügbar, wenn auf dem zugrundeliegenden Medien-Framework des Betriebssystems verfügbar.
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
      <td>Apple QuickTime Film</td>
      <td>Nur ältere Versionen von Safari, plus andere Browser, die das QuickTime-Plugin von Apple unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, ist hier sowohl die Kompatibilität von mobilen als auch von Desktop-Browsern impliziert, wenn ein Browser aufgelistet ist. Unterstützung bezieht sich auch nur auf den Container selbst, nicht auf spezifische Codecs.

### 3GP

Der **3GP** oder **3GPP** Mediencontainer wird verwendet, um Audio und/oder Video einzukapseln, das speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten vorgesehen ist. Das Format wurde für die Verwendung auf 3G-Mobiltelefonen entwickelt, kann aber immer noch auf moderneren Telefonen und Netzwerken verwendet werden. Doch die verbesserte Bandbreitenverfügbarkeit und erhöhte Datentarife der meisten Netzwerke haben den Bedarf an dem 3GP-Format vermindert. Trotzdem wird dieses Format noch für langsamere Netzwerke und leistungsschwächere Telefone eingesetzt.

Dieses Mediencontainerformat leitet sich aus dem ISO Base Media File Format und MPEG-4 ab, ist jedoch speziell für Szenarien mit niedriger Bandbreite ausgelegt.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die grundlegenden Typen für den 3GP-Mediencontainer; andere Typen können verwendet werden, abhängig von dem spezifischen Codec oder den Codecs, die verwendet werden. Zusätzlich können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifikationen bereitzustellen.

<table class="standard-table">
  <caption>
    Von 3GP unterstützte Videocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browserunterstützung
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
        Browserunterstützung
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

Der **Audio Data Transport Stream** (**ADTS**) ist ein vom MPEG-4 Part 3 spezifiziertes Containerformat für Audiodaten, das für gestreamte Audioinhalte gedacht ist, wie es beispielsweise für Internetradio verwendet wird. Es ist im Wesentlichen ein fast nackter Stream von AAC-Audiodaten, bestehend aus ADTS-Frames mit minimalem Header.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der für ADTS verwendete MIME-Typ hängt davon ab, welche Art von Audio-Frames enthalten sind. Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden. Wenn die Audio-Frames im MPEG-1/MPEG-2 Audio Layer I, II oder III-Format vorliegen, sollte der MIME-Typ `audio/mpeg` sein.

<table class="standard-table">
  <caption>
    Von ADTS unterstützte Audiocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browserunterstützung
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

Die Unterstützung von Firefox für AAC hängt von der Medieninfrastruktur des Betriebssystems ab, daher ist sie verfügbar, solange das Betriebssystem sie unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein einfaches zugehöriges Containerformat, ebenfalls FLAC genannt, das dieses Audio enthalten kann. Das Format ist nicht durch Patente belastet, sodass seine Verwendung sicher vor Beeinträchtigungen ist. FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                         |
| ----------------------------- |
| `audio/flac`                  |
| `audio/x-flac` (nicht standardmäßig) |

<table class="standard-table">
  <caption>
    Von FLAC unterstützte Audiocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browserunterstützung
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

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch. Entwickelt von der Moving Picture Experts Group (MPEG), werden diese Formate häufig in physischen Medien verwendet, einschließlich als Format des Videos auf DVD-Medien.

Im Internet ist vielleicht die häufigste Verwendung des MPEG-Dateiformats das Enthalten von [Layer_III/MP3](https://en.wikipedia.org/wiki/MPEG-1) Klangdaten; Die daraus resultierenden Dateien sind die weltweit beliebten MP3-Dateien, die von digitalen Musikgeräten verwendet werden. Ansonsten werden MPEG-1 und MPEG-2 im Webinhalt nicht weit verbreitet verwendet.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 liegen in den Medieninhaltsformaten und nicht im Containerformat. MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 eingeführt.

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
        Browserunterstützung
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
    Von MPEG-1 und MPEG-2 unterstützte Audiocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browserunterstützung
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
      <th scope="row">MPEG-1 Audio Schicht I</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Schicht II</th>
      <td></td>
      <td></td>
      <td>Nein</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Schicht III (MP3)</th>
      <td></td>
      <td></td>
      <td>Ja</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG-4 (MP4)

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats. Es gibt zwei Versionen des Formats, die in den Teilen 1 und 14 der Spezifikation definiert sind. MP4 ist heute ein beliebter Container, da es mehrere der am häufigsten verwendeten Codecs unterstützt und umfassend unterstützt wird.

Das ursprüngliche MPEG-4 Part 1-Dateiformat wurde 1999 eingeführt; das Version 2-Format, definiert in Teil 14, wurde 2003 hinzugefügt. Das MP4-Dateiformat leitet sich vom [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) ab, das direkt vom [QuickTime Dateiformat](https://en.wikipedia.org/wiki/QuickTime_File_Format) entwickelt von [Apple](https://www.apple.com/) stammt.

Beim Festlegen des MPEG-4 Medientyps (`audio/mp4` oder `video/mp4`) können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifikationen bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die grundlegenden Typen für den MPEG-4-Mediencontainer; andere MIME-Typen können verwendet werden, abhängig von den spezifischen Codecs, die im Container verwendet werden. Zusätzlich können Sie [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifikationen bereitzustellen.

<table class="standard-table">
  <caption>
    Von MPEG-4 unterstützte Videocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browserunterstützung
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
          Die Unterstützung von Firefox für H.264 hängt von der Medieninfrastruktur des Betriebssystems ab, sodass sie verfügbar ist, solange das Betriebssystem sie unterstützt.
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
        <p>Die Unterstützung von Firefox für AV1 ist auf Windows auf ARM deaktiviert (sie kann durch Setzen der Einstellung <code>media.av1.enabled</code> auf <code>true</code> aktiviert werden).</p>
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
        Browserunterstützung
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
        <p>Die Unterstützung von Firefox für H.264 hängt von der Medieninfrastruktur des Betriebssystems ab, sodass sie verfügbar ist, solange das Betriebssystem sie unterstützt.</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg) Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird. Das Ogg-Framework definiert auch patentfreie Medieninhaltsformate, wie den Theora-Video-Codec und die Vorbis- und Opus-Audio-Codec. [Xiph.org-Dokumente über das Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Website verfügbar.

Obwohl Ogg bereits seit langer Zeit existiert, hat es nie die breite Unterstützung erlangt, die nötig gewesen wäre, um es zu einer guten ersten Wahl für einen Mediencontainer zu machen. In der Regel sind Sie mit WebM besser beraten, jedoch gibt es Zeiten, in denen Ogg nützlich ist, insbesondere wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die noch kein WebM unterstützen. Firefox 3.5 und 3.6 unterstützen zum Beispiel Ogg, aber nicht WebM.

Weitere Informationen über Ogg und seine Codecs finden Sie im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der `application/ogg` MIME-Typ kann verwendet werden, wenn Sie nicht unbedingt wissen, ob das Medium Audio oder Video enthält. Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn Sie die Inhaltstypen nicht kennen.

Sie können auch [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter), um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional die Medienformate der Spur näher zu beschreiben.

<table class="standard-table">
  <caption>
    Von Ogg unterstützte Videocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browserunterstützung
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
        Browserunterstützung
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
> Ogg-Opus-Audiodateien, die länger als 12h 35m 39s sind, werden abgeschnitten und weisen Suchprobleme auf, wenn sie auf Firefox Linux 64-Bit abgespielt werden ([Firefox Bug 1810378](https://bugzilla.mozilla.org/show_bug.cgi?id=1810378)).

### QuickTime

Das **QuickTime** Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für sein Medien-Framework mit demselben Namen entwickelt. Die Erweiterung für diese Dateien, `.mov`, stammt daher, dass das Format zunächst für Filme verwendet wurde und in der Regel als "QuickTime Film" Format bezeichnet wurde. Während QTFF als Grundlage für das MPEG-4-Dateiformat diente, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Videomedien, Textspuren und so weiter. QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber für eine Reihe von Jahren war QuickTime für Windows verfügbar, um auf Windows darauf zuzugreifen. QuickTime für Windows wird jedoch seit Anfang 2016 von Apple nicht mehr unterstützt und _sollte nicht verwendet werden_, da es bekannte Sicherheitsprobleme gibt. Windows Media Player hat jedoch jetzt integrierte Unterstützung für QuickTime-Version 2.0 und frühere Dateien; Unterstützung für spätere Versionen von QuickTime erfordert unabhängige Zusätze.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdateien und -Codecs, sondern unterstützte eine Vielzahl von beliebten und spezialisierten Audio- und Videocodecs sowie Standbildformate. Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowser durch das QuickTime-Plugin oder die direkte Integration von QuickTime) Audioformate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice sowie Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr lesen und schreiben.

Darüber hinaus sind eine Reihe von Drittanbieterkomponenten für QuickTime verfügbar, einige davon fügen Unterstützung für zusätzliche Codecs hinzu.

Da QuickTime-Unterstützung im Wesentlichen hauptsächlich auf Apple-Geräten verfügbar ist, wird es im Internet nicht mehr häufig verwendet. Apple selbst verwendet jetzt im Allgemeinen MP4 für Videos. Darüber hinaus wurde das QuickTime-Framework für den Mac eine Zeit lang als veraltet betrachtet und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der `video/quicktime` MIME-Typ ist der grundlegende Typ für den QuickTime-Mediencontainer. Es ist erwähnenswert, dass QuickTime (das Medien-Framework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, sodass es tatsächlich viele andere MIME-Typen unterstützt.

Sie können [den `codecs` Parameter hinzufügen](/de/docs/Web/Media/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp), um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details zum Profil, Level und/oder anderen Codec-Konfigurationsspezifikationen bereitzustellen.

<table class="standard-table">
  <caption>
    Von QuickTime unterstützte Videocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browserunterstützung
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
        Browserunterstützung
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

Das **Waveform Audio File Format** (**WAVE**), das aufgrund seiner Dateierweiterung `.wav` normalerweise als WAV bezeichnet wird, ist ein Format, das von Microsoft und IBM zur Speicherung von Audio-Bitstreamdaten entwickelt wurde.

Es leitet sich vom Resource Interchange File Format (RIFF) ab und ist daher ähnlich wie andere Formate wie das Apple-Format AIFF. Das WAV-Codec-Register kann bei {{RFC(2361)}} gefunden werden; Da jedoch fast alle WAV-Dateien lineares PCM verwenden, ist die Unterstützung für die anderen Codecs spärlich.

Das WAVE-Format wurde erstmals 1991 veröffentlicht.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der `audio/wave` MIME-Typ ist der Standardtyp und wird bevorzugt; jedoch wurden die anderen im Laufe der Jahre von verschiedenen Produkten verwendet und können auch in einigen Umgebungen verwendet werden.

<table class="standard-table">
  <caption>
    Von WAVE unterstützte Audiocodecs
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">Codec</th>
      <th colspan="4" scope="col" style="text-align: center">
        Browserunterstützung
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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basierendes Format, das speziell für den Einsatz in modernen Webumgebungen entwickelt wurde. Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die wiederum kostenlos und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und wird mittlerweile umfassend unterstützt. Konforme Implementierungen von WebM müssen die Video-Codecs VP8 und VP9 und die Audio-Codecs Vorbis und Opus unterstützen. Das WebM-Containerformat und seine erforderlichen Codecs sind alle unter offenen Lizenzen verfügbar. Andere Codecs erfordern möglicherweise eine Lizenz zur Nutzung.

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
        Browserunterstützung
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
        <p>Die Unterstützung von Firefox für AV1 wurde zu macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und Firefox 68 auf Linux. Firefox für Android unterstützt noch nicht AV1; die Implementierung in Firefox ist so konzipiert, dass sie einen sicheren Prozess verwendet, der auf Android noch nicht unterstützt wird.
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
        Browserunterstützung
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

## Das richtige Containerformat auswählen

Es gibt einige Faktoren, die bei der Auswahl des besten Containers oder der besten Container für Ihre Medien zu berücksichtigen sind. Die relative Wichtigkeit jedes einzelnen hängt von Ihren Anforderungen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihrer Zielgruppe ab.

### Richtlinien

Die beste Wahl hängt auch davon ab, was Sie mit den Medien tun werden. Die Wiedergabe von Medien ist etwas anderes als das Aufnehmen und/oder Bearbeiten. Wenn Sie die Mediendaten manipulieren werden, kann die Verwendung eines unkomprimierten Formats die Leistung verbessern, während die Verwendung eines verlustfreien komprimierten Formats zumindest das Anhäufen von Rauschen verhindert, da sich Komprimierungsartefakte mit jeder erneuten Komprimierung vervielfachen, die auftritt.

- Wenn Ihre Zielgruppe wahrscheinlich Benutzer auf mobilen Geräten, insbesondere auf Geräten mit niedriger Leistung oder in langsamen Netzwerken umfasst, sollten Sie das Bereitstellen einer Version Ihrer Medien in einem 3GP-Container mit angemessener Komprimierung in Erwägung ziehen.
- Wenn Sie spezifische Codierungsanforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie Ihre Medien in einem nicht proprietären, offenen Format haben möchten, erwägen Sie die Verwendung eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video).
- Wenn Sie aus irgendeinem Grund nur Medien in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf der breitesten Auswahl von Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur Audio enthalten, macht es wahrscheinlich Sinn, ein nur für Audio vorgesehenes Containerformat zu wählen. Jetzt, da alle Patente abgelaufen sind, ist MP3 eine weit verbreitete und gute Wahl. WAVE ist gut, aber unkomprimiert, seien Sie sich dessen vor der Verwendung für große Audio-Beispiele bewusst. FLAC ist eine sehr gute Wahl aufgrund seiner verlustfreien Komprimierung, wenn die Zielbrowser es alle unterstützen.

Leider werden keine der beiden relativ bedeutenden verlustfreien Komprimierungsformate (FLAC und ALAC) umfassend unterstützt. FLAC ist von beiden das breiter unterstützte, wird jedoch ohne zusätzlich installierte Software von macOS nicht unterstützt und auf iOS überhaupt nicht unterstützt. Wenn Sie verlustfreies Audio anbieten müssen, müssen Sie möglicherweise sowohl FLAC als auch ALAC bereitstellen, um eine nahezu universelle Kompatibilität zu erreichen.

### Rat zur Containerauswahl

Die folgenden Tabellen bieten empfohlene Container, die in verschiedenen Szenarien verwendet werden können. Dies sind nur Vorschläge. Berücksichtigen Sie die Bedürfnisse Ihrer Anwendung und Ihrer Organisation, bevor Sie ein Containerformat auswählen.

#### Nur Audiodateien

| Wenn Sie benötigen…                              | Ziehen Sie dieses Containerformat in Betracht |
| ------------------------------------------------ | --------------------------------------------- |
| Komprimierte Dateien für die universelle Wiedergabe | MP3 (MPEG-1 Audio Layer III)                   |
| Verlustfrei komprimierte Dateien                 | FLAC mit ALAC-Alternativer                     |
| Nicht komprimierte Dateien                       | WAV                                          |

Jetzt, da alle MP3-Patente abgelaufen sind, ist die Auswahl des Audio-Dateiformats viel einfacher zu treffen. Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, Gebühren zu zahlen, zu entscheiden, wenn Sie es verwenden.

#### Videodateien

| Wenn Sie benötigen…                                       | Ziehen Sie dieses Containerformat in Betracht                |
| ---------------------------------------------------------- | ------------------------------------------------------------- |
| Universelle Videos, vorzugsweise in einem offenen Format | WebM (idealerweise mit MP4-Alternative)                      |
| Universelle Videos                                     | MP4 (idealerweise mit WebM oder Ogg-Alternative)             |
| Hohe Komprimierung, optimiert für langsame Verbindungen | 3GP (idealerweise mit MP4-Alternative)                       |
| Kompatibilität mit älteren Geräten/Browsern             | QuickTime (idealerweise mit AVI- und/oder MPEG-2-Alternative) |

Diese Vorschläge beinhalten eine Reihe von Annahmen. Überlegen Sie die Optionen sorgfältig, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie viele Medien haben, die kodiert werden müssen.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, lohnt es sich, mehr als eine Version von Mediendateien bereitzustellen, indem Sie das {{HTMLElement("source")}}-Element verwenden, um jede Quelle innerhalb des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements anzugeben. Sie können beispielsweise ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einer Alternative im MP4-Format. Sie können sogar eine rückblickartige Alternative in QuickTime oder AVI zur Verfügung stellen.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`) Element ohne [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut. Fügen Sie dann untergeordnete {{HTMLElement("source")}}-Elemente innerhalb des `<video>` Elements hinzu, eines für jede Version des Videos, die Sie anbieten. Das kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, das je nach Bandbreitenverfügbarkeit ausgewählt werden kann, aber in unserem Fall verwenden wir es, um Formatoptionen anzubieten.

In dem hier gezeigten Beispiel wird ein Video dem Browser in zwei Formaten angeboten: WebM und MP4.

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type) Attribut auf `video/webm`). Wenn der {{Glossary("user agent")}} das nicht abspielen kann, geht es zur nächsten Option über, deren `type` als `video/mp4` angegeben ist. Wenn keines von beiden abgespielt werden kann, wird der Text "Dieser Browser unterstützt das HTML-Video-Element nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4 Audio einschließlich ADTS                                                                          |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Format-Spezifikation                                                                                    |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                             |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                             |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 Dateiformat)                                                                | Definiert das MPEG-4 (MP4) Version 2-Containerformat                                                             |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                         |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateierweiterungen                                                             |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Film (MOV) Format                                                                        |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das nächstliegende Ding zu einer offiziellen WAVE-Spezifikation                                                  |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet von WAV)      | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                                                        |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska für WebM                                                                    |
| [Matroska Specifications](https://matroska.org/index.html)                                                                                                   | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                        |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM-Bytestream-Format zur Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

## Browser-KompATIBILITÄT

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
      <th scope="row" style="vertical-align: top">QuickTime-Film (MOV)</th>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">—</td>
      <td style="vertical-align: top"><code>video/quicktime</code></td>
      <td style="vertical-align: top"><code>.mov</code></td>
      <td style="vertical-align: top">Safari</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WAV (Waveform Audiofile)</th>
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
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente

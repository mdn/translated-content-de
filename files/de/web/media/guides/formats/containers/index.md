---
title: Mediencontainerformate (Dateitypen)
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: e58df624ccdc08f29a04d11b277239e230abd725
---

Ein **Mediencontainer** ist ein Dateiformat, das einen oder mehrere Medienströme (wie Audio oder Video) zusammen mit Metadaten kapselt und es ermöglicht, diese gemeinsam zu speichern und wiederzugeben. Das Format von Audio- und Videodateien wird durch mehrere Komponenten definiert, einschließlich der verwendeten Audio- und/oder Videocodecs, des Mediencontainerformats (oder Dateityps) und optional anderer Elemente wie Untertitelcodecs oder Metadaten. In diesem Leitfaden betrachten wir die im Internet am häufigsten verwendeten Containerformate und decken Grundlagen zu deren Spezifikationen sowie deren Vorteile, Einschränkungen und idealen Anwendungsfällen ab.

[WebRTC](/de/docs/Web/API/WebRTC_API) verwendet überhaupt keinen Container. Stattdessen streamt es die codierten Audio- und Videospuren direkt von einem Peer zum anderen, wobei [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte verwendet werden, um jede Spur darzustellen. Weitere Informationen zu den in der Regel für WebRTC-Anrufe verwendeten Codecs und zur "Browser-Kompatibilität" für die WebRTC-Codec-Unterstützung finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

## Häufige Containerformate

Obwohl es eine große Anzahl von Mediencontainerformaten gibt, sind die unten aufgeführten diejenigen, die Sie höchstwahrscheinlich antreffen werden. Einige unterstützen nur Audio, während andere sowohl Audio als auch Video unterstützen. Die MIME-Typen und Erweiterungen für jedes sind aufgelistet. Die am häufigsten verwendeten Container für Medien im Web sind wahrscheinlich MPEG-4 Part-14 (MP4) und Web Media File (WEBM). Sie können jedoch auch Ogg, WAV, AVI, MOV und andere Formate antreffen. Nicht alle werden breit von Browsern unterstützt; einige Kombinationen von Container und Codec erhalten manchmal ihre eigenen Dateierweiterungen und MIME-Typen aus Gründen der Bequemlichkeit oder wegen ihrer Allgegenwärtigkeit. Beispielsweise wird eine Ogg-Datei mit nur einem Opus-Audiotrack manchmal als Opus-Datei bezeichnet und könnte sogar die Erweiterung `.opus` haben. Aber eigentlich ist es immer noch nur eine Ogg-Datei.

In einigen Fällen wird die Verwendung eines bestimmten Codecs so allgegenwärtig, dass seine Nutzung als einzigartiges Format behandelt wird. Ein gutes Beispiel ist die MP3-Audiodatei, die nicht in einem konventionellen Container gespeichert wird. Stattdessen ist eine MP3-Datei im Wesentlichen ein Stream von MPEG-1 Audio Layer III-codierten Frames, oft begleitet von Metadaten wie ID3-Tags. Diese Dateien verwenden den `audio/mpeg` MIME-Typ und die `.mp3`-Erweiterung.

### Index der Mediencontainerformate (Dateitypen)

Um mehr über ein spezifisches Containerformat zu erfahren, finden Sie es in dieser Liste und klicken Sie auf die Details, die Informationen darüber enthalten, wofür der Container typischerweise nützlich ist, welche Codecs er unterstützt und welche Browser ihn unterstützen, unter anderem.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec-Name (kurz)</th>
      <th scope="col">Vollständiger Codec-Name</th>
      <th scope="col">"Browser-Kompatibilität"</th>
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
        <p>Verfügbar nur, wenn sie im Medienframework des zugrunde liegenden Betriebssystems verfügbar ist.
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
      <td>Nur ältere Versionen von Safari, plus andere Browser, die das QuickTime-Plugin von Apple unterstützten</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>Alle Browser.</td>
    </tr>
  </tbody>
</table>

Sofern nicht anders angegeben, ist sowohl die mobile als auch die Desktop-"Browser-Kompatibilität" impliziert, wenn ein Browser hier aufgelistet ist. Unterstützung wird nur für den Container selbst impliziert, nicht für spezifische Codecs.

### 3GP

Der **3GP**- oder **3GPP**-Mediencontainer wird verwendet, um Audio und/oder Video zu verkapseln, die speziell für die Übertragung über Mobilfunknetze zur Nutzung auf mobilen Geräten vorgesehen sind. Das Format wurde für die Verwendung auf 3G-Handys entwickelt, kann aber immer noch auf moderneren Handys und Netzwerken verwendet werden. Allerdings hat die verbesserte Bandbreitenverfügbarkeit und die erhöhten Datenlimits in den meisten Netzen die Notwendigkeit des 3GP-Formats verringert. Dennoch wird dieses Format weiterhin für langsamere Netzwerke und leistungsschwächere Handys verwendet.

Dieses Mediencontainerformat ist vom ISO Base Media File Format und MPEG-4 abgeleitet, wurde jedoch speziell für geringere Bandbreitenszenarien optimiert.

| Audio         | Video         |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

Diese MIME-Typen sind die fundamentalen Typen für den 3GP-Mediencontainer; andere Typen können je nach spezifischem Codec oder den verwendeten Codecs verwendet werden. Darüber hinaus können Sie den `codecs`-Parameter zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und optional weitere Details über das Profil, die Stufe und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

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

**Audio Data Transport Stream** (**ADTS**) ist ein Containerformat, das von MPEG-4 Part 3 für Audiodaten spezifiziert wurde, um für gestreamtes Audio verwendet zu werden, wie zum Beispiel für Internetradio. Es handelt sich im Wesentlichen um einen nahezu nackten Stream von AAC-Audiodaten, der aus ADTS-Frames mit einem minimalen Header besteht.

| Audio        |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

Der für ADTS verwendete MIME-Typ hängt davon ab, welche Art von Audioframes enthalten sind. Wenn ADTS-Frames verwendet werden, sollte der MIME-Typ `audio/aac` verwendet werden. Wenn die Audioframes im MPEG-1/MPEG-2 Audio Layer I, II oder III Format vorliegen, sollte der MIME-Typ `audio/mpeg` sein.

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

Die Unterstützung von Firefox für AAC hängt von der Medieninfrastruktur des Betriebssystems ab und ist verfügbar, solange das Betriebssystem diese unterstützt.

### FLAC

Der **Free Lossless Audio Codec** (**FLAC**) ist ein verlustfreier Audiocodec; es gibt auch ein zugehöriges Containerformat, ebenfalls FLAC genannt, das dieses Audio enthalten kann. Das Format ist frei von Patenten, sodass seine Verwendung vor Beeinträchtigungen sicher ist. FLAC-Dateien können nur FLAC-Audiodaten enthalten.

| Audio                                  |
| -------------------------------------- |
| `audio/flac`                           |
| `audio/x-flac` (nicht standardmäßiger) |

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

Die **[MPEG-1](https://en.wikipedia.org/wiki/MPEG-1)** und **[MPEG-2](https://en.wikipedia.org/wiki/MPEG-2)** Dateiformate sind im Wesentlichen identisch. Erstellt von der Moving Picture Experts Group (MPEG), werden diese Formate häufig in physischen Medien verwendet, einschließlich des Videoformats auf DVD-Medien.

Im Internet ist die wahrscheinlich häufigste Anwendung des MPEG-Standards für [MPEG-1 Audio Layer III](https://en.wikipedia.org/wiki/MPEG-1), allgemein bekannt als MP3, Audiodaten. Diese MP3-Dateien sind weltweit extrem beliebt bei digitalen Musikgeräten, obwohl MPEG-1 und MPEG-2 insgesamt auf anderen Webinhalten nicht weit verbreitet sind.

Die Hauptunterschiede zwischen MPEG-1 und MPEG-2 finden eher in den Mediendatenformaten als im Containerformat statt. MPEG-1 wurde 1992 eingeführt; MPEG-2 wurde 1996 eingeführt.

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

**[MPEG-4](https://en.wikipedia.org/wiki/MPEG-4)** (**MP4**) ist die neueste Version des MPEG-Dateiformats. Es gibt zwei Versionen des Formats, die in den Teilen 1 und 14 der Spezifikation definiert sind. MP4 ist heute ein beliebtes Containerformat, da es mehrere der am häufigsten verwendeten Codecs unterstützt und breit unterstützt wird.

Das ursprüngliche MPEG-4 Teil 1 Dateiformat wurde 1999 eingeführt; das Version 2 Format, das in Teil 14 definiert ist, wurde 2003 hinzugefügt. Das MP4-Dateiformat ist vom [ISO base media file format](https://en.wikipedia.org/wiki/ISO_base_media_file_format) abgeleitet, das direkt vom [QuickTime file format](https://en.wikipedia.org/wiki/QuickTime_File_Format) abgeleitet ist, das von [Apple](https://www.apple.com/) entwickelt wurde.

Beim Spezifizieren des MPEG-4 Medientyps (`audio/mp4` oder `video/mp4`) können Sie den `codecs`-Parameter zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Stufe und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

| Audio       | Video       |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

Diese MIME-Typen sind die fundamentalen Typen für den MPEG-4 Mediencontainer; andere MIME-Typen können je nach den spezifischen Codec oder den Codecs, die im Container verwendet werden, verwendet werden. Darüber hinaus können Sie den `codecs`-Parameter zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Stufe und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

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
          Die Unterstützung von Firefox für H.264 hängt von der Medieninfrastruktur des Betriebssystems ab und ist verfügbar, solange das Betriebssystem diese unterstützt.
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
        <p>Die Unterstützung von Firefox für AV1 ist auf Windows auf ARM deaktiviert (aktivieren Sie sie, indem Sie die Einstellung <code>media.av1.enabled</code> auf <code>true</code> setzen).</p>
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
        <p>Die Unterstützung von Firefox für H.264 hängt von der Medieninfrastruktur des Betriebssystems ab und ist verfügbar, solange das Betriebssystem diese unterstützt.</p>
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

Das [Ogg](https://en.wikipedia.org/wiki/Ogg)-Containerformat ist ein freies und offenes Format, das von der [Xiph.org Foundation](https://www.xiph.org/) gepflegt wird. Das Ogg-Framework definiert auch patentfreie Mediendatenformate wie den Theora-Video-Codec und die Vorbis- und Opus-Audio-Codecs. [Xiph.org-Dokumente über das Ogg-Format](https://xiph.org/ogg/) sind auf ihrer Website verfügbar.

Während Ogg schon lange existiert, hat es nie die breite Unterstützung erhalten, die es zu einer guten ersten Wahl für einen Mediencontainer machen würde. Es ist in der Regel besser, WebM zu verwenden, obwohl Ogg in einigen Fällen nützlich sein kann, z. B. wenn Sie ältere Versionen von Firefox und Chrome unterstützen möchten, die WebM noch nicht unterstützen. Beispielsweise unterstützen Firefox 3.5 und 3.6 Ogg, aber nicht WebM.

Weitere Informationen zu Ogg und seinen Codecs finden Sie im [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/).

| Audio       | Video       |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

Der `application/ogg` MIME-Typ kann verwendet werden, wenn Sie nicht unbedingt wissen, ob die Medien Audio oder Video enthalten. Wenn möglich, sollten Sie einen der spezifischen Typen verwenden, aber auf `application/ogg` zurückgreifen, wenn Sie das Inhaltsformat oder die Formate nicht kennen.

Sie können auch den `codecs`-Parameter zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional die Medienformate der Spuren weiter zu beschreiben.

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
> Ogg-Opus-Audiodateien, die länger als 12h 35m 39s sind, werden abgeschnitten und weisen Suchprobleme auf, wenn sie auf Firefox Linux 64 Bit ([Firefox-Fehler 1810378](https://bugzil.la/1810378)) abgespielt werden.

### QuickTime

Das **QuickTime**-Dateiformat (**QTFF**, **QT** oder **MOV**) wurde von Apple für den Einsatz in seinem gleichnamigen Medienframework entwickelt. Die Erweiterung dieser Dateien, `.mov`, kommt von der Tatsache, dass das Format ursprünglich für Filme verwendet wurde und in der Regel als "QuickTime-Movie"-Format bezeichnet wird. Während QTFF als Basis für das MPEG-4-Dateiformat diente, gibt es Unterschiede und die beiden sind nicht ganz austauschbar.

QuickTime-Dateien unterstützen jede Art von zeitbasierten Daten, einschließlich Audio- und Video-Medien, Text-Tracks und so weiter. QuickTime-Dateien werden hauptsächlich von macOS unterstützt, aber für eine Anzahl von Jahren war QuickTime für Windows verfügbar, um darauf auf Windows zugreifen zu können. QuickTime für Windows wird jedoch seit Anfang 2016 von Apple nicht mehr unterstützt und _sollte nicht verwendet werden_, da es bekannte Sicherheitsprobleme gibt. Allerdings hat der Windows Media Player jetzt integrierte Unterstützung für QuickTime-Dateien bis Version 2.0; Unterstützung für spätere Versionen von QuickTime erfordert Drittanbietererweiterungen.

Auf Mac OS unterstützte das QuickTime-Framework nicht nur QuickTime-Format-Filmdaten und Codecs, sondern auch eine Vielzahl von beliebten und speziellen Audio- und Video-Codecs sowie Standbildformaten. Durch QuickTime konnten Mac-Anwendungen (einschließlich Webbrowser durch das QuickTime-Plugin oder direkte QuickTime-Integration) Audio-Formate wie AAC, AIFF, MP3, PCM und Qualcomm PureVoice sowie Videoformate wie AVI, DV, Pixlet, ProRes, FLAC, Cinepak, 3GP, H.261 bis H.265, MJPEG, MPEG-1 und MPEG-4 Part 2, Sorenson und viele mehr lesen und schreiben.

Darüber hinaus sind eine Anzahl von Komponenten von Drittanbietern für QuickTime verfügbar, von denen einige Unterstützung für zusätzliche Codecs hinzufügen.

Da QuickTime-Unterstützung im Wesentlichen primär auf Apple-Geräten verfügbar ist, wird es im Internet nicht mehr weit verbreitet verwendet. Apple selbst verwendet jetzt im Allgemeinen MP4 für Videos. Darüber hinaus wurde das QuickTime-Framework auf dem Mac schon seit einiger Zeit veraltet erklärt und ist ab macOS 10.15 Catalina überhaupt nicht mehr verfügbar.

| Video             |
| ----------------- |
| `video/quicktime` |

Der `video/quicktime` MIME-Typ ist der grundlegende Typ für den QuickTime-Mediencontainer. Es ist anzumerken, dass QuickTime (das Medienframework auf Mac-Betriebssystemen) eine Vielzahl von Containern und Codecs unterstützt, daher unterstützt es tatsächlich viele andere MIME-Typen.

Sie können den `codecs`-Parameter zum MIME-Typ-String hinzufügen, um anzugeben, welche Codecs für die Audio- und/oder Videospuren verwendet werden, und um optional Details über das Profil, die Stufe und/oder andere Codec-Konfigurationsspezifika bereitzustellen.

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

Das **Waveform Audio File Format** (**WAVE**), in der Regel aufgrund seiner Dateierweiterung `.wav` auch WAV genannt, ist ein Format, das von Microsoft und IBM zur Speicherung von Audio-Bitstream-Daten entwickelt wurde.

Es ist vom Resource Interchange File Format (RIFF) abgeleitet und ist daher anderen Formaten wie Apples AIFF ähnlich. Das WAV-Codec-Register finden Sie unter {{RFC(2361)}}; jedoch verwenden fast alle WAV-Dateien lineares PCM, so dass die Unterstützung für die anderen Codecs spärlich ist.

Das WAVE-Format wurde erstmals 1991 eingeführt.

| Audio            |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

Der `audio/wave` MIME-Typ ist der Standardtyp und wird bevorzugt; jedoch wurden die anderen im Laufe der Jahre von verschiedenen Produkten verwendet und können in einigen Umgebungen ebenfalls verwendet werden.

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

**[WebM](https://en.wikipedia.org/wiki/WebM)** (**Web Media**) ist ein auf [Matroska](https://en.wikipedia.org/wiki/Matroska) basierendes Format, das speziell für den Einsatz in modernen Web-Umgebungen entwickelt wurde. Es basiert vollständig auf freien und offenen Technologien und verwendet hauptsächlich Codecs, die ebenfalls frei und offen sind, obwohl einige Produkte auch andere Codecs in WebM-Containern unterstützen.

WebM wurde erstmals 2010 eingeführt und wird mittlerweile breit unterstützt. Konforme Implementierungen von WebM müssen die VP8- und VP9-Videocodecs sowie die Vorbis- und Opus-Audiocodecs unterstützen. Das WebM-Containerformat und seine erforderlichen Codecs stehen alle unter offenen Lizenzen zur Verfügung. Jegliche anderen Codecs können eine Lizenz zur Nutzung erfordern.

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
        <p>Die Unterstützung von Firefox für AV1 wurde auf macOS in Firefox 66 hinzugefügt; für Windows in Firefox 67; und Firefox 68 auf Linux.
          Firefox für Android unterstützt AV1 noch nicht; die Implementierung in Firefox ist darauf ausgelegt, einen gesicherten Prozess zu verwenden, der in Android noch nicht unterstützt wird.
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

## Die richtige Wahl des Containers

Es gibt einige Faktoren, die bei der Auswahl des besten Containers oder der besten Container für Ihre Medien zu berücksichtigen sind. Die relative Wichtigkeit jedes Faktors hängt von Ihren Bedürfnissen, Ihren Lizenzanforderungen und den Kompatibilitätsanforderungen Ihres Zielpublikums ab.

### Richtlinien

Bei der Auswahl des geeigneten Medienformats sollte sich Ihre Entscheidung an Ihrer beabsichtigten Nutzung orientieren. Die Wiedergabe von Medien unterscheidet sich vom Aufnehmen oder Bearbeiten derselben. Für Manipulationen können unkomprimierte Formate die Leistung verbessern, während verlustfreie Kompression das Rauschen bei wiederholter Neukompression verhindert.

- Wenn Ihr Zielpublikum wahrscheinlich Benutzer auf mobilen, insbesondere auf Geräten mit niedrigeren Endgeräten oder in langsamen Netzwerken umfasst, sollten Sie erwägen, eine Version Ihrer Medien in einem 3GP-Container mit geeigneter Komprimierung bereitzustellen.
- Wenn Sie spezielle Codierungsanforderungen haben, stellen Sie sicher, dass der von Ihnen gewählte Container die entsprechenden Codecs unterstützt.
- Wenn Sie möchten, dass Ihre Medien in einem nicht-proprietären, offenen Format vorliegen, sollten Sie eines der offenen Containerformate wie FLAC (für Audio) oder WebM (für Video) in Betracht ziehen.
- Wenn Sie aus irgendeinem Grund Ihre Medien nur in einem einzigen Format bereitstellen können, wählen Sie ein Format, das auf den meisten Geräten und Browsern verfügbar ist, wie MP3 (für Audio) oder MP4 (für Video und/oder Audio).
- Wenn Ihre Medien nur Audio enthalten, macht es wahrscheinlich Sinn, ein Format zu wählen, das nur Audio enthält. Siehe unten für einen Vergleich der verschiedenen Formate, die nur Audio enthalten.

### Ratschläge zur Container-Auswahl

Die nachfolgenden Tabellen bieten Vorschläge, welche Container in verschiedenen Szenarien verwendet werden sollten. Dies sind nur Vorschläge. Stellen Sie sicher, dass Sie die Bedürfnisse Ihrer Anwendung und Ihrer Organisation berücksichtigen, bevor Sie ein Containerformat auswählen.

#### Nur Audiodateien

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
      <td>Weitgehend kompatibel und anerkannt; verwendet verlustbehaftete Kompression, um ein gutes Gleichgewicht zwischen Dateigröße und Audioqualität zu bieten.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Verlustfreie Kompression</strong></td>
      <td><strong>FLAC (Free Lossless Audio Codec)</strong></td>
      <td>Bietet verlustfreie Kompression, die sicherstellt, dass das Originalaudio intakt bleibt und gleichzeitig die Dateigröße reduziert wird.</td>
    </tr>
    <tr>
      <td><strong>ALAC (Apple Lossless Audio Codec)</strong></td>
      <td>Ähnlich wie FLAC, aber für Apple-Geräte konzipiert; es ist ein großartiger Rückgriff, wenn Sie innerhalb des Apple-Ökosystems arbeiten.</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Unkomprimierte Dateien</strong></td>
      <td><strong>WAV (Waveform Audio File Format)</strong></td>
      <td>Enthält unkomprimiertes PCM-Audio, das höchste Qualität bei größeren Dateigrößen liefert.</td>
    </tr>
    <tr>
      <td><strong>AIFF (Audio Interchange File Format)</strong></td>
      <td>Vergleichbar mit WAV in Bezug auf Qualität und Dateigröße, wird jedoch häufig auf Apple-Plattformen bevorzugt.</td>
    </tr>
  </tbody>
</table>

Da alle MP3-Patente abgelaufen sind, ist die Wahl des Audio-Dateiformats viel einfacher geworden. Es ist nicht mehr notwendig, zwischen der breiten Kompatibilität von MP3 und der Notwendigkeit, Lizenzgebühren für die Nutzung von MP3 zu bezahlen, zu wählen.

Leider werden weder FLAC noch ALAC, die beiden relativ großen verlustfreien Komprimierungsformate, überall unterstützt. FLAC wird breiter unterstützt, aber auf macOS ohne zusätzliche Software nicht unterstützt und auf iOS gar nicht unterstützt. Wenn Sie verlustfreies Audio anbieten müssen, müssen Sie möglicherweise FLAC und ALAC bereitstellen, um annähernd universelle Kompatibilität zu erreichen.

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
        Für modernen Web-Einsatz konzipiert, ist WebM ein offener, gebührenfreier Container, der effiziente Komprimierung und native Unterstützung in den meisten Browsern bietet.
      </td>
    </tr>
    <tr>
      <td><strong>Allzweck-Video</strong></td>
      <td><strong>MP4</strong></td>
      <td>
        MP4 ist der Industriestandard für Videoinhalte und wird auf Geräten und Browsern weitgehend unterstützt.
      </td>
    </tr>
    <tr>
      <td><strong>Hohe Kompression für langsame Verbindungen</strong></td>
      <td><strong>3GP</strong></td>
      <td>
        Optimiert für mobile Geräte und Umgebungen mit niedriger Bandbreite, liefert 3GP akzeptable Videoqualität unter eingeschränkten Bedingungen.
      </td>
    </tr>
    <tr>
      <td><strong>Kompatibilität mit älteren Geräten/Browsern</strong></td>
      <td><strong>QuickTime</strong></td>
      <td>
        QuickTime ist ein Legacy-Container, der ursprünglich auf Apple-Plattformen beliebt war. Er wird noch häufig von macOS-Videoaufnahmesoftware produziert.
      </td>
    </tr>
  </tbody>
</table>

Diese Vorschläge setzen eine Reihe von Annahmen voraus. Sie sollten die Optionen sorgfältig überlegen, bevor Sie eine endgültige Entscheidung treffen, insbesondere wenn Sie eine große Menge an Medien kodieren müssen. Sehr oft möchten Sie mehrere Fallback-Optionen für diese Formate bereitstellen – zum Beispiel MP4-Fallback für WebM oder 3GP oder AVI für QuickTime.

## Maximierung der Kompatibilität mit mehreren Containern

Um die Kompatibilität zu optimieren, lohnt es sich, mehr als eine Version von Mediendateien bereitstellen, indem das {{HTMLElement("source")}}-Element verwendet wird, um jede Quelle innerhalb des {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements anzugeben. Zum Beispiel können Sie ein Ogg- oder WebM-Video als erste Wahl anbieten, mit einem Fallback im MP4-Format. Sie könnten sogar in Betracht ziehen, als zusätzliche Absicherung ein QuickTime- oder AVI-Fallback im Retro-Stil anzubieten.

Um dies zu tun, erstellen Sie ein `<video>` (oder `<audio>`)-Element ohne [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut. Fügen Sie dann untergeordnete {{HTMLElement("source")}}-Elemente innerhalb des `<video>`-Elements hinzu, eines für jede Version des Videos, das Sie anbieten. Dies kann verwendet werden, um verschiedene Versionen eines Videos anzubieten, die je nach Bandbreitenverfügbarkeit ausgewählt werden können, aber in unserem Fall werden wir es verwenden, um Formatoptionen anzubieten.

Im hier gezeigten Beispiel wird dem Browser ein Video in zwei Formaten angeboten: WebM und MP4.

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

Das Video wird zuerst im WebM-Format angeboten (mit dem [`type`](/de/docs/Web/HTML/Element/source#type)-Attribut auf `video/webm` gesetzt). Wenn der {{Glossary("user_agent", "User-Agent")}} das nicht abspielen kann, wird zur nächsten Option gewechselt, deren `type` als `video/mp4` angegeben ist. Wenn keine dieser Optionen abgespielt werden kann, wird der Text "Dieser Browser unterstützt das HTML-Videoelement nicht." angezeigt.

## Spezifikationen

| Spezifikation                                                                                                                                                | Kommentar                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                                            | Definiert das 3GP-Containerformat                                                                                 |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html) (MPEG-4 Part 3 Audio)                                                                             | Definiert MP4-Audio einschließlich ADTS                                                                           |
| [FLAC Format](https://xiph.org/flac/format.html)                                                                                                             | Die FLAC-Formatspezifikation                                                                                      |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html) (MPEG-1 Part 1 Systems)                                                                           | Definiert das MPEG-1-Containerformat                                                                              |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html) (MPEG-2 Part 1 Systems)                                                                           | Definiert das MPEG-2-Containerformat                                                                              |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html) (MPEG-4 Part 14: MP4 file format)                                                                | Definiert das MPEG-4 (MP4) Version 2-Containerformat                                                              |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html) (MPEG-4 Part 1 Systems)                                                                           | Definiert das ursprüngliche MPEG-4 (MP4) Containerformat                                                          |
| {{RFC(3533)}}                                                                                                                                                | Definiert das Ogg-Containerformat                                                                                 |
| {{RFC(5334)}}                                                                                                                                                | Definiert die Ogg-Medientypen und Dateierweiterungen                                                              |
| [QuickTime File Format Specification](https://developer.apple.com/documentation/quicktime-file-format)                                                       | Definiert das QuickTime-Movie (MOV)-Format                                                                        |
| [Multimedia Programming Interface and Data Specifications 1.0](https://web.archive.org/web/20090417165828/http://www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | Das Ähnlichste einer offiziellen WAVE-Spezifikation                                                               |
| [Resource Interchange File Format](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) (verwendet von WAV)      | Definiert das RIFF-Format; WAVE-Dateien sind eine Form von RIFF                                                   |
| [WebM Container Guidelines](https://www.webmproject.org/docs/container/)                                                                                     | Leitfaden zur Anpassung von Matroska an WebM                                                                      |
| [Matroska Specifications](https://www.matroska.org/index.html)                                                                                               | Die Spezifikation für das Matroska-Containerformat, auf dem WebM basiert                                          |
| [WebM Byte Stream Format](https://w3c.github.io/media-source/webm-byte-stream-format.html)                                                                   | WebM Bytestream-Format zur Verwendung mit [Media Source Extensions](/de/docs/Web/API/Media_Source_Extensions_API) |

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

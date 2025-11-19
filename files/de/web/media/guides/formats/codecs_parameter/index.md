---
title: Codecs in allgemeinen Medientypen
slug: Web/Media/Guides/Formats/codecs_parameter
l10n:
  sourceCommit: 69f81004e70533c9cb9b069ed701e9cd1aaffa95
---

Auf einer fundamentalen Ebene können Sie den Typ einer Mediendatei durch einen einfachen {{Glossary("MIME", "MIME")}}-Typ angeben, wie `video/mp4` oder `audio/mpeg`. Allerdings können viele Medientypen – insbesondere solche, die Videospuren unterstützen – von der Möglichkeit profitieren, das Format der darin enthaltenen Daten präziser zu beschreiben. Beispielsweise sagt das einfache Beschreiben eines Videos in einer [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts über das Format der eigentlichen Medieninhalte aus.

Aus diesem Grund kann der Parameter `codecs` dem MIME-Typ hinzugefügt werden, der den Medieninhalt beschreibt. Mit ihm können container-spezifische Informationen angegeben werden. Diese Informationen können Dinge wie das Profil des Video-Codecs, den verwendeten Typ für die Audiospuren und so weiter umfassen.

Dieser Leitfaden untersucht kurz die Syntax des Medien-Typs `codecs`-Parameter und wie er mit der MIME-Typ-Zeichenkette verwendet wird, um Details über den Inhalt von Audio- oder Videomedien bereitzustellen, die über den Containertyp hinausgehen.

## MIME-Typen von Containerformaten

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem der Medientyp (`audio`, `video`, usw.) angegeben wird, gefolgt von einem Schrägstrich (`/`) und dann dem Format, das verwendet wird, um das Medium zu enthalten:

- `audio/mpeg`
  - : Eine Audiodatei, die das [MPEG](/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2)-Dateiformat verwendet, wie zum Beispiel ein MP3.
- `video/ogg`
  - : Eine Videodatei, die das [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Dateiformat verwendet.
- `video/mp4`
  - : Eine Videodatei, die das [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Dateiformat verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format einst häufig im Web verwendet, ist es aber nicht mehr, da es ein Plug-in erforderte, um es zu verwenden.

Jedoch sind all diese MIME-Typen ungenau. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, die beliebig viele Profile, Ebenen und andere Konfigurationsfaktoren haben können. Aus diesem Grund sollten Sie möglicherweise den `codecs`-Parameter zusammen mit dem Medientyp verwenden.

## Grundlegende Syntax

Sie können den Parameter `codecs` zum Medientyp hinzufügen. Dazu fügen Sie ein Semikolon (`;`) gefolgt von `codecs=` und dann die Zeichenkette, die das Format des Dateiinhalts beschreibt, hinzu. Einige Medientypen erlauben Ihnen nur, die Namen der zu verwendenden Codecs anzugeben, während andere es auch erlauben, verschiedene Einschränkungen für diese Codecs anzugeben. Sie können mehrere Codecs angeben, indem Sie sie mit Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Datei mit einer [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audiospur.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Datei, die [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8)-Video und/oder [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audio enthält.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei, die [AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) (H.264) Video, Main Profile, Level 4.2 enthält.

Wie bei jedem MIME-Typ-Parameter muss `codecs` zu `codecs*` (beachten Sie das Sternchenzeichen, `*`) geändert werden, wenn einer der Codec-Eigenschaften Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} prozent-kodiert werden müssen. Sie können die JavaScript-{{jsxref("Global_Objects/encodeURI", "encodeURI()")}}-Funktion verwenden, um die Parameterliste zu kodieren; ebenso können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor kodierte Parameterliste zu dekodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Liste der Codecs jeden Codec enthalten, der für den Inhalt der Datei verwendet wird. Die Liste kann auch Codecs enthalten, die in der Datei nicht vorhanden sind.

## Codec-Optionen nach Container

Die folgenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [HEVC](#hevc_mp4_quicktime_matroska)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Einige der oben aufgeführten Links führen zum selben Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und somit dieselbe Syntax verwenden.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der Spezifikation [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) definiert, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam).

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Chromium-basierte Browser akzeptieren jeden Teil der optionalen Parameter (statt alle oder keine, wie von der Spezifikation gefordert).

Die Komponenten dieses Codec-Parameter-Strings werden im Folgenden detaillierter beschrieben. Jede Komponente hat eine feste Anzahl von Zeichen; wenn der Wert kürzer ist, muss er mit führenden Nullen aufgefüllt werden.

<table class="standard-table">
  <caption>
    AV1 Codec-Parameter-String-Komponenten
  </caption>
  <thead>
    <tr>
      <th scope="col">Komponente</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>P</code></td>
      <td>
        <p>Die einstellige Profilnummer:</p>
        <table class="standard-table">
          <caption>
            AV1 Profilnummern
          </caption>
          <thead>
            <tr>
              <th scope="col">Profilnummer</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>
                "Main"-Profil; unterstützt YUV 4:2:0 oder monochrome Bitstreams mit 8 oder 10 Bits pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High"-Profil fügt Unterstützung für 4:4:4-Farbunterabtastung hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional"-Profil fügt Unterstützung für 4:2:2-Farbunterabtastung und 12 Bit pro Komponente hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die in das X.Y-Level-Format umgewandelt wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code>.
        Siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation für Details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Tier-Indikator. Für den Main-Tier (<code>seq_tier</code> gleich 0) ist dieses Zeichen der Buchstabe <code>M</code>.
        Für den High-Tier (<code>seq_tier</code> ist 1) ist dieses Zeichen der Buchstabe <code>H</code>.
        Der High-Tier ist nur für Level 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponenten-Bittiefe. Dieser Wert muss einer der Werte 8, 10 oder 12 sein; welche Werte gültig sind, hängt vom Profil und anderen Eigenschaften ab.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Das einstellige Monochrome-Flag; ist dies 0, enthält das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten vollständig in der Y-Ebene und somit monochromatisch.
        Siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#yuv">YUV</a> für Details, wie das YUV-Farbsystem funktioniert.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> gibt die Farbunterabtastung als drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beides 1 ist, ist die dritte der Wert von <code>chroma_sample_position</code>; andernfalls ist die dritte Ziffer immer 0.
          Dies kann zusammen mit der <code>M</code>-Komponente verwendet werden, um das Format der Farbunterabtastung zu konstruieren:
        </p>
        <table class="standard-table">
          <caption>
            Bestimmung des Farbunterabtastungsformats
          </caption>
          <thead>
            <tr>
              <th scope="col">subsampling_x</th>
              <th scope="col">subsampling_y</th>
              <th scope="col">Monochrome-Flag</th>
              <th scope="col">Farbunterabtastungsformat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>YUV 4:4:4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>YUV 4:2:2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>YUV 4:2:0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>YUV 4:0:0 (Monochrom)</td>
            </tr>
          </tbody>
        </table>
        <p>
          Die dritte Ziffer in <code>CCC</code> gibt die Position der Farbprobe an, wobei ein Wert von 0 bedeutet, dass die Position unbekannt ist und separat während der Dekodierung bereitgestellt werden muss; ein Wert von 1 bedeutet, dass die Probe horizontal mit der (0, 0) Luminanzprobe kollokiert ist, und ein Wert von 2 bedeutet, dass die Probe mit (0, 0) Luminanz kollokiert ist.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Farbunterabtastung).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert gibt das von den Medien verwendete Farbsystem an.
        Beispielsweise ist BT.2020/BT.2100-Farbe, wie sie für HDR-Video verwendet wird, <code>09</code>.
        Die Informationen hierzu – und für jede der verbleibenden Komponenten – finden Sie im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Abschnitt Farbkonfigurationssemantik</a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die verwendet wird, um das Gamma (liebevoll "opto-elektronische Transferfunktion" im technischen Jargon genannt) von der Quelle zum Display abzubilden.
        Zum Beispiel ist das 10-Bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code>-Konstante wählt die Matrizenkoeffizienten aus, die verwendet werden, um die roten, blauen und grünen Kanäle in Luminanz- und Chrominanzsignale zu konvertieren.
        Zum Beispiel sind die Standardkoeffizienten, die für BT.709 verwendet werden, mit dem Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Ein einstelliger Indikator, ob die Farbe erlaubt ist, den gesamten Bereich möglicher Werte (<code>1</code>) zu verwenden oder ob sie nur auf die als legal betrachteten Werte für die angegebene Farbkonfiguration beschränkt sein soll (das heißt die <strong>Studio-Swing-Repräsentation</strong>).
        Der Standard ist 0 (nutzt die Studio-Swing-Repräsentation).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder von `M` (Monochrome-Flag) an sind optional; Sie können das Einfügen von Feldern jederzeit beenden (dürfen aber keine Felder willkürlich weglassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiel-AV1-Codec-Strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profile, Level 5.3, Main-Tier, 10 Bits pro Farbkomponente, 4:2:2 Farbunterabtastung mit ITU-R BT.2100 Farbprimaries, Transfercharakteristiken und YCbCr-Farbmatrix. Die Studio-Swing-Repräsentation ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profile, Level 5.3, Main-Tier, 10 Bits pro Farbkomponente. Die restlichen Eigenschaften werden aus den Standardeinstellungen entnommen: 4:2:0 Farbunterabtastung, BT.709 Farbprimaries, Transfercharakteristiken und Matrixkoeffizienten. Studio-Swing-Repräsentation.

### VP9

#### ISO Base Media File Format Syntax

Die Syntax des `codecs`-Parameters für VP9 ist in der Spezifikation [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) definiert, im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string).

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Reihe von durch Punkte (`.`) getrennten zweistelligen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles von `CC` (Farbunterabtastung) an ist optional, aber alles oder nichts. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Nach der Tabelle folgen einige Beispiele.

<table class="standard-table">
  <caption>
    Komponenten des WebM-Codecs-Parameters
  </caption>
  <thead>
    <tr>
      <th scope="col">Komponente</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>cccc</code></td>
      <td>
        <p>
          Ein vierstelliger Code, der angibt, welcher der möglichen Codecs beschrieben wird.
          Mögliche Werte sind:
        </p>
        <table class="standard-table">
          <caption>
            Vierstellige Codes für WebM-unterstützte Codecs
          </caption>
          <thead>
            <tr>
              <th scope="col">Vierstelliger Code</th>
              <th scope="col">Codec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>vp08</code></td>
              <td>VP8</td>
            </tr>
            <tr>
              <td><code>vp09</code></td>
              <td>VP9</td>
            </tr>
            <tr>
              <td><code>vp10</code></td>
              <td>VP10</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>PP</code></td>
      <td>
        <p>
          Die zweistellige Profilnummer, bei Bedarf mit führenden Nullen auf genau zwei Stellen aufgefüllt.
        </p>
        <table class="standard-table">
          <caption>
            WebM-Profilnummern
          </caption>
          <thead>
            <tr>
              <th scope="col">Profil</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td>
                Nur 4:2:0 (Farbunterabtastung sowohl horizontal als auch vertikal).
                Erlaubt nur 8 Bits pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                Alle Farbunterabtastungsformate sind erlaubt.
                Erlaubt nur 8 Bits pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Nur 4:2:0 (Farbunterabtastung sowohl horizontal als auch vertikal).
                Unterstützt 8, 10 oder 12 Bits pro Farbabtastungskomponente.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Farbunterabtastungsformate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bits pro Farbabtastungskomponente.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer.
        Die Levelnummer wird in festpunktnotierter Schreibweise dargestellt, wobei die erste Ziffer die Einerziffer ist und die zweite Ziffer die Zehntelziffer darstellt.
        Zum Beispiel ist Level 3 <code>30</code> und Level 6.1 ist <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die Bittiefe der Luminanz- und Farbkomponentenwerte; erlaubte Werte sind 8, 10 und 12.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          Ein zweistelliger Wert, der angibt, welches Farbunterabtastungsformat verwendet werden soll.
          Die folgende Tabelle listet erlaubte Werte auf; siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#chroma_subsampling">Farbunterabtastung</a> in unserem "Digital Video Concepts"-Leitfaden für zusätzliche Informationen zu diesem und anderen Themen.
        </p>
        <table class="standard-table">
          <caption>
            WebM-Farbunterabtastungsidentifikatoren
          </caption>
          <thead>
            <tr>
              <th scope="col">Wert</th>
              <th scope="col">Farbunterabtastungsformat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td>
                4:2:0 mit chromatischen Proben, die zwischen den Pixeln positioniert sind
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 Farbunterabtastung mit Samples, die mit Luminanz (0, 0) kollokiert sind
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                4:2:2 Farbunterabtastung (4 von je 4 horizontalen Pixeln Luminanz werden verwendet)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 Farbunterabtastung (jede Pixel-Luminanz und Chrominanz werden beibehalten)
              </td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td><em>Reserviert</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        <p>
          Ein zweistelliger Integer, der angibt, welches der Farbprimaries aus Abschnitt 8.1 des <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> Standards.
          Diese Komponente und jede Komponente danach ist optional.
        </p>
        <p>Die möglichen Werte der Farbprimaries-Komponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Farbprimaries-Identifikatoren
          </caption>
          <thead>
            <tr>
              <th scope="col">Wert</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td><em>Reserviert für zukünftige Verwendung durch ITU oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 ist der Standard für hochauflösendes (HD) Fernsehen; sRGB ist der am weitesten verbreitete Farbraum für Computerdarstellungen.
                Broadcast BT.709 verwendet 8-Bit-Farbtiefe mit dem legalen Bereich von 16 (schwarz) bis 235 (weiß).
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildmerkmale sind unbekannt oder werden von der Anwendung bestimmt
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Reserviert für zukünftige Verwendung durch ITU oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>
                BT.470 System M, NTSC (Standard-Definition-Fernsehen in den USA)
              </td>
            </tr>
            <tr>
              <td><code>05</code></td>
              <td>
                BT.470 System B, G; BT.601; BT.1358 625; BT.1700 625 PAL und 625 SECAM
              </td>
            </tr>
            <tr>
              <td><code>06</code></td>
              <td>
                BT.601 525; BT.1358 525 oder 625; BT.1700 NTSC; SMPTE 170M.
                <em>Funktionell identisch mit <code>7</code>.</em>
              </td>
            </tr>
            <tr>
              <td><code>70</code></td>
              <td>
                {{Glossary("SMPTE", "SMPTE")}} 240M (historisch).
                <em>Funktionell identisch mit <code>6</code>.</em>
              </td>
            </tr>
            <tr>
              <td><code>08</code></td>
              <td>Generischer Film</td>
            </tr>
            <tr>
              <td><code>09</code></td>
              <td>
                BT.2020; BT.2100.
                Wird für ultra-hochauflösendes (4K) High Dynamic Range (HDR) Video verwendet, diese haben einen sehr weiten Farb{{Glossary("gamut", "gamut")}} und unterstützen 10-Bit- und 12-Bit-Farbkomponententiefen.
              </td>
            </tr>
            <tr>
              <td><code>10</code></td>
              <td>
                SMPTE ST 428 (D-Cinema Distribution Master: Bildmerkmale).
                Definiert die unkomprimierten Bildmerkmale für DCDM.
              </td>
            </tr>
            <tr>
              <td><code>11</code></td>
              <td>
                SMPTE RP 431 (D-Cinema-Qualität: Referenzprojektor und Umgebung).
                Beschreibt die Referenzprojektor- und Umgebungsbedingungen, die ein konsistentes Filmerlebnis bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Farbverarbeitung für D-Cinema).
                Eine Ingenieursrichtlinie, die Farbdekodierungsempfehlungen für digitale Filme gibt.
              </td>
            </tr>
            <tr>
              <td><code>13</code> – <code>21</code></td>
              <td><em>Reserviert für zukünftige Verwendung durch ITU-T oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>22</code></td>
              <td>EBU Tech 3213-E</td>
            </tr>
            <tr>
              <td><code>23</code> – <code>255</code></td>
              <td><em>Reserviert für zukünftige Verwendung durch ITU-T oder ISO/IEC</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Eine zweistellige ganze Zahl, die die
        <code>transferCharacteristics</code> für das Video angibt.
        Dieser Wert stammt aus Abschnitt 8.2 des <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und gibt die Übertragungsmerkmale an, die verwendet werden sollen, um die dekodierte Farbe an das Renderziel anzupassen.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code>-Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>-Spezifikation.
        Dieser Wert gibt an, welches Set von Koeffizienten verwendet werden soll, wenn von den nativen roten, blauen und grünen Primaries auf die Luminanz- und Chrominanzsignale gemappt wird.
        Diese Koeffizienten werden wiederum mit den Gleichungen verwendet, die in demselben Abschnitt zu finden sind.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob das Schwarzniveau und der Farbbereich jeder Farbkomponente auf den legalen Bereich beschränkt werden sollen.
        Für 8-Bit-Farbsamples liegt der legale Bereich zwischen 16–235.
        Ein Wert von <code>00</code> gibt an, dass diese Begrenzungen durchgesetzt werden sollen, während ein Wert von <code>01</code> den vollen Bereich der möglichen Werte für jede Komponente erlaubt, auch wenn die resultierende Farbe außerhalb des Bereichs für das Farbsystem liegt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9-Video, Profil 2 Level 1.0, mit 10-Bit YUV-Inhalten mit 4:2:0-Farbunterabtastung, BT.2020-Primaries, ST 2084 EOTF (HDR SMPTE), BT.2020 nicht-konstante Luminanzfarbmatrix und voller Bereich für Chroma- und Luminanzkodierung. Das Audio ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, teilen die gleiche Syntax für den `codecs`-Parameter. Zu diesen Medientypen gehören [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (und tatsächlich das [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp). Sowohl Video- als auch Audiospuren können mit dem `codecs`-Parameter mit den folgenden MIME-Typen beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien in MPEG-4 eingeschlossen                                                                |

Jeder durch den `codecs`-Parameter beschriebene Codec kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime`, usw.) angegeben werden oder als Containername plus zusätzlicher Parameter, um den Codec und seine Konfiguration genauer zu spezifizieren. Jeder Eintrag in der Codec-Liste kann eine Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; sie beginnt jedoch immer mit der vierstelligen Kennung des Codecs, einem Punkt-Trennzeichen (`.`), gefolgt vom Object Type Indication (OTI)-Wert für das spezifische Datenformat. Für die meisten Codecs ist die OTI eine zweistellige hexadezimale Zahl; für [AVC (H.264)](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) jedoch sechs hexadezimale Stellen.

Daher sehen die Syntaxen für jeden der unterstützten Codecs so aus:

- `cccc[.pp]*` (Generisches ISO BMFF)
  - : Wo `cccc` die vierstellige ID für den Codec ist und `pp` der Ort ist, an dem null oder mehr zweistellige kodierte Eigenschaftswerte platziert werden.
- `mp4a.oo[.A]` (MPEG-4 Audio)
  - : Wo `oo` der Object Type Indication-Wert ist, der den Inhalt der Medien genauer beschreibt, und `A` die einstellige _Audio_ OTI ist. Die möglichen Werte für die OTI finden Sie auf der MP4 Registrationsbehörde-Website's [Object Types-Seite](https://mp4ra.org/registered-types/object-types). Beispielsweise ist Opus-Audio in einer MP4-Datei `mp4a.ad`. Für weitere Details siehe [MPEG-4 Audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4 Video)
  - : Hier ist `oo` erneut die OTI, die den Inhalt genauer beschreibt, während `V` die einstellige _Video_ OTI ist.
- `avc1[.PPCCLL]` (AVC-Video)
  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), die Constraint Set Flags (`CC`) und das Level (`LL`) angeben. Siehe [AVC-Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint Set Flags-Byte besteht aus ein-Bit-Boolean-Flags, wobei das bedeutendste Bit als Flag 0 (oder `constraint_set0_flag`, in einigen Ressourcen) bezeichnet wird und jedes nachfolgende Bit um eins höher nummeriert wird. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bits _müssen_ null sein. Die Bedeutungen der Flags variieren je nach verwendetem Profil.

    Das Level ist eine Festpunktzahl, sodass ein Wert von `14` (dezimal 20) Level 2.0 bedeutet, während ein Wert von `3D` (dezimal 61) Level 6.1 bedeutet. Generell gilt: Je höher die Levelnummer, desto mehr Bandbreite wird der Stream verwenden und desto höher sind die maximal unterstützten Videodimensionen.

- `avc3[.PPCCLL]` (Variable Auflösung AVC)
  - : Die `avc3`-Codec-Parameter haben die gleiche Syntax wie die `avc1`-Codec-Parameter.

#### AVC-Profile

Die folgenden sind die AVC-Profile und ihre Profilnummern für die Verwendung im `codecs`-Parameter sowie der Wert, der für die Einschränkungskomponente `CC` angegeben werden soll.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Nummer (Hex) | Einschränkungsbyte |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------ |
| **Constrained Baseline Profile (CBP)** CBP ist in erster Linie eine Lösung für Szenarien, in denen Ressourcen eingeschränkt sind oder der Ressourcengebrauch kontrolliert werden muss, um die Wahrscheinlichkeit zu minimieren, dass die Medien schlecht funktionieren.                                                                                                                                                                                                                                                                                                                                                  | `42`         | `40`               |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutz gegen Datenverlust und Wiederherstellungsfähigkeiten. Dies wird nicht so weit verbreitet verwendet, wie es vor der Einführung von CBP war. Alle CBP-Streams gelten auch als BP-Streams.                                                                                                                                                                                                                                                                                                                                                                | `42`         | `00`               |
| **Extended Profile (XP)** Entwickelt für das Streaming von Videos über das Netzwerk, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen der Datenrobustheit und des Wechsels zwischen Streams.                                                                                                                                                                                                                                                                                                                                                                                                                  | `58`         | `00`               |
| **Main Profile (MP)** Das Profil, das für digitale Standarddefinition Fernsehübertragungen im MPEG-4-Format verwendet wird. _Nicht_ für hochauflösende Fernsehübertragungen verwendet. Die Bedeutung dieses Profils hat seit der Einführung des High Profile – das 2004 für Fernsehnutzung in hoher Auflösung hinzugefügt wurde – abgenommen.                                                                                                                                                                                                                                                                            | `4D`         | `00`               |
| **High Profile (HiP)** Gegenwärtig ist HiP das Hauptprofil für HD-Videodaten sowohl bei Fernsehübertragungen als auch bei Blu-Ray.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `64`         | `00`               |
| **Progressive High Profile (PHiP)** Im Wesentlichen High Profile ohne Unterstützung für Field-Coding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `64`         | `08`               |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bi-prädiktive Slices ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `64`         | `0C`               |
| **High 10 Profile (Hi10P)** High Profile, jedoch mit Unterstützung für bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `6E`         | `00`               |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P durch die Unterstützung von 4:2:2-Farbunterabtastung sowie bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `7A`         | `00`               |
| **High 4:4:4 Predictive Profile (Hi444PP)** Zusätzlich zu den in Hi422P enthaltenen Funktionen bietet Hi444PP Unterstützung für 4:4:4-Farbunterabtastung (bei der keine Farbinformationen verworfen werden). Es umfasst auch Unterstützung für bis zu 14 Bits pro Farbmuster und effiziente verlustfreie Regionenkodierung. Die Option, jedes Bild als drei separate Farbkanäle zu kodieren (d.h. die Daten jeder Farbe werden gespeichert, als ob es sich um ein einzelnes monochromes Bild handelte).                                                                                                                  | `F4`         | `00`               |
| **High 10 Intra Profile** High 10, beschränkt auf die ausschließliche Verwendung von Intra-Frames. Wird hauptsächlich für professionelle Anwendungen verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `6E`         | `10`               |
| **High 4:2:2 Intra Profile** Das Hi422-Profil mit der Verwendung von ausschließlichen Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `7A`         | `10`               |
| **High 4:4:4 Intra Profile** Das High 4:4:4-Profil, beschränkt auf die Verwendung von Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `F4`         | `10`               |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4-Profil, beschränkt auf die ausschließlich Intra-Verwendung und die Nutzung von CAVLC-Entropie-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `44`         | `00`               |
| **Scalable Baseline Profile** Entwickelt für die Verwendung in Videokonferenzen sowie Überwachungs- und mobilen Anwendungen, basiert das [SVC](https://en.wikipedia.org/wiki/SVC) Baseline Profile auf dem Constrained Baseline Profile von AVC. Die Basisschicht innerhalb des Streams wird auf einem hohen Qualitätsniveau bereitgestellt, wobei eine Anzahl von sekundären Substreams alternative Formen desselben Videos für den Einsatz in verschiedenen eingeschränkten Umgebungen bieten. Diese können jede Kombination aus geringerer Auflösung, reduzierter Bildrate oder erhöhter Kompressionsstufen umfassen. | `53`         | `00`               |
| **Scalable Constrained Baseline Profile** Wird hauptsächlich für Echtzeitkommunikationsanwendungen verwendet. Noch nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API [um SVC zu ermöglichen](https://github.com/w3c/webrtc-svc) befindet sich in der Entwicklung.                                                                                                                                                                                                                                                                                                                                       | `53`         | `04`               |
| **Scalable High Profile** Hauptsächlich für den Einsatz in Rundfunk- und Streaming-Anwendungen gedacht. Die Basis- (oder höchste Qualitäts-) Ebene muss dem AVC High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                                | `56`         | `00`               |
| **Scalable Constrained High Profile** Ein Unterset des Scalable High Profile, das hauptsächlich für Echtzeitkommunikation entwickelt wurde.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `56`         | `04`               |
| **Scalable High Intra Profile** Nützlich hauptsächlich für Produktionsanwendungen, unterstützt dieses Profil nur die Verwendung von Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `56`         | `20`               |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video mit zwei Wiedergaben der Szene (linkes Auge und rechtes Auge). Ansonsten bietet es die gleichen Funktionen wie das High Profile.                                                                                                                                                                                                                                                                                                                                                                                                           | `80`         | `00`               |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten unter Verwendung sowohl von temporalen als auch von MVC-Inter-View-Vorhersagen. _Unterstützt nicht_ Field-Bilder oder makroblock-adaptive Frame-Field-Codierung.                                                                                                                                                                                                                                                                                                                                                                                         | `76`         | `00`               |
| **Multiview Depth High Profile** Basierend auf dem High Profile, dem der Hauptsubstream entsprechen muss. Die verbleibenden Substreams müssen dem Stereo High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                                       | `8A`         | `00`               |

#### MPEG-4 Audio

Wenn der Wert eines Eintrags in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Wertes so aussehen:

```plain
mp4a.oo[.A]
```

Hierbei ist `oo` die zweistellige hexadezimale Object Type Indication, die die verwendete Codec-Klasse für die Medien angibt. Die OTIs werden von der [MP4 Registration Authority](https://mp4ra.org/) vergeben, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/registered-types/object-types) pflegt. Ein spezieller Wert ist `40`; dies zeigt an, dass die Medien MPEG-4 Audio (ISO/IEC 14496 Part 3) sind. Um noch spezifischer zu sein, wird für OTI `40` eine dritte Komponente – der Audio Object Type – hinzugefügt, um den Typ auf einen bestimmten Untertyp von MPEG-4 einzugrenzen.

Der Audio Object Type wird als ein- oder zweistellige _dezimal_-Zahl angegeben (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die hexadezimal sind). Zum Beispiel hat AAC-LC von MPEG-4 eine Nummer des Audio-Objekttyps von `2`, sodass der vollständige `codecs`-Wert, der AAC-LC repräsentiert, `mp4a.40.2` ist.

Daher kann ER AAC LC, dessen Audio-Objekttyp 17 ist, mit dem vollständigen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einstellige Werte können entweder als eine einzelne Ziffer angegeben werden (was die beste Wahl ist, da es am weitesten kompatibel sein wird) oder mit einem führenden Nullpadding auf zwei Ziffern wie `mp4a.40.02`.

> [!NOTE]
> Die Spezifikation verlangte ursprünglich, dass die Nummer des Audio-Objekttyps in der dritten Komponente nur eine Dezimalziffer sein durfte. Änderungen an der Spezifikation im Laufe der Zeit haben jedoch den Bereich dieser Werte weit über eine Dezimalziffer hinaus erweitert, sodass jetzt die dritte Komponente entweder eine oder zwei Ziffern haben kann. Das Auffüllen von Werten unter 10 mit einer führenden `0` ist optional. Ältere Implementierungen von MPEG-4-Codecs unterstützen möglicherweise keine zweistelligen Werte, daher wird die Verwendung einer einzelnen Ziffer, wo möglich, die Kompatibilität maximieren.

Die Audio-Objekttypen sind in ISO/IEC 14496-3 Unterabschnitt 1, Abschnitt 1.5.1 definiert. Die folgende Tabelle bietet eine grundlegende Liste der Audio-Objekttypen und im Fall der häufigeren Objekttypen eine Liste der unterstützenden Profile, aber Sie sollten die Spezifikation konsultieren, wenn Sie mehr über die Funktionsweise eines bestimmten MPEG-4-Audio-Typs wissen müssen.

<table class="standard-table">
  <caption>
    MPEG-4 Audio-Objekttypen
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio-Objekttyp</th>
      <th scope="col">Profile-Unterstützung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code></td>
      <td>NULL</td>
      <td></td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td>AAC Main</td>
      <td>Main</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td>AAC LC (Low Complexity)</td>
      <td>Main, Scalable, HQ, LD v2, AAC, HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td>AAC SSR (Scalable Sampling Rate)</td>
      <td>Main</td>
    </tr>
    <tr>
      <td><code>4</code></td>
      <td>AAC LTP (Long Term Prediction)</td>
      <td>Main, Scalable, HQ</td>
    </tr>
    <tr>
      <td><code>5</code></td>
      <td>SBR (Spectral Band Replication)</td>
      <td>HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>6</code></td>
      <td>AAC Scalable</td>
      <td>Main, Scalable, HQ</td>
    </tr>
    <tr>
      <td><code>7</code></td>
      <td>TwinVQ (Kodierung für ultraniedrige Bitraten)</td>
      <td>Main, Scalable</td>
    </tr>
    <tr>
      <td><code>8</code></td>
      <td>CELP (Code-Excited Linear Prediction)</td>
      <td>Main, Scalable, Speech, HQ, LD</td>
    </tr>
    <tr>
      <td><code>9</code></td>
      <td>HVXC (Harmonic Vector Excitation Coding)</td>
      <td>Main, Scalable, Speech, LD</td>
    </tr>
    <tr>
      <td><code>10</code> – <code>11</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>12</code></td>
      <td>TTSI (Text zu Sprache-Schnittstelle)</td>
      <td>Main, Scalable, Speech, Synthetic, LD</td>
    </tr>
    <tr>
      <td><code>13</code></td>
      <td>Main Synthetic</td>
      <td>Main, Synthetic</td>
    </tr>
    <tr>
      <td><code>14</code></td>
      <td>Wavetable-Synthese</td>
      <td></td>
    </tr>
    <tr>
      <td><code>15</code></td>
      <td>General MIDI</td>
      <td></td>
    </tr>
    <tr>
      <td><code>16</code></td>
      <td>Algorithmische Synthese und Audioeffekte</td>
      <td></td>
    </tr>
    <tr>
      <td><code>17</code></td>
      <td>ER AAC LC (Fehlerrobsute AAC-Low-Complexity)</td>
      <td>HQ, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>18</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>19</code></td>
      <td>ER AAC LTP (Fehlerresistente AAC-Langzeitvorhersage)</td>
      <td>HQ</td>
    </tr>
    <tr>
      <td><code>20</code></td>
      <td>ER AAC Scalable (Fehlerresistentes AAC Skaliert)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>21</code></td>
      <td>ER TwinVQ (Fehlerresistentes TwinVQ)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>22</code></td>
      <td>ER BSAC (Fehlerresistente Bit-Slice Arithmetic Coding)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>23</code></td>
      <td>
        ER AAC LD (Fehler-resilient AAC Low-Delay; für die bidirektionale
        Kommunikation verwendet)
      </td>
      <td>LD, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>24</code></td>
      <td>ER CELP (Fehlerresistentes Code-Excited Linear Prediction)</td>
      <td>HQ, LD</td>
    </tr>
    <tr>
      <td><code>25</code></td>
      <td>ER HVXC (Fehlerresistentes Harmonic Vector Excitation Coding)</td>
      <td>LD</td>
    </tr>
    <tr>
      <td><code>26</code></td>
      <td>ER HILN (Fehlerresistentes Harmonic und Individual Line plus Noise)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>27</code></td>
      <td>ER Parametric (Fehlerresistentes Parametrisches)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>28</code></td>
      <td>SSC (Sinusoidal Coding)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>29</code></td>
      <td>PS (Parametrisches Stereo)</td>
      <td>HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>30</code></td>
      <td>MPEG Surround</td>
      <td></td>
    </tr>
    <tr>
      <td><code>31</code></td>
      <td><em>Escape</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>32</code></td>
      <td>MPEG-1 Layer-1</td>
      <td></td>
    </tr>
    <tr>
      <td><code>33</code></td>
      <td>MPEG-1 Layer-2 (MP2)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>34</code></td>
      <td>MPEG-1 Layer-3 (MP3)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>35</code></td>
      <td>DST (Direct Stream Transfer)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>36</code></td>
      <td>ALS (Audio Lossless)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>37</code></td>
      <td>SLS (Scalable Lossless)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>38</code></td>
      <td>SLS Non-core (Scalable Lossless Non-core)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>39</code></td>
      <td>ER AAC ELD (Fehlerresistentes AAC Enhanced Low Delay)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>40</code></td>
      <td>SMR Simple (Symbolic Music Representation Simple)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>41</code></td>
      <td>SMR Main (Symbolic Music Representation Main)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>42</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>43</code></td>
      <td>
        <p>SAOC (Spatial Audio Object Coding)</p>
        <p>
          Definiert in
          <a href="https://www.iso.org/standard/54838.html"
            >ISO/IEC 14496-3:2009/Amd.2:2010(E)</a
          >.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>44</code></td>
      <td>
        <p>LD MPEG Surround (Low Delay MPEG Surround)</p>
        <p>
          Definiert in <a href="https://www.iso.org/standard/54838.html">ISO/IEC 14496-3:2009/Amd.2:2010(E)</a>.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>45</code> und höher</td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
  </tbody>
</table>

### HEVC: MP4, Quicktime, Matroska

Der [High Efficiency Video Coding](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265) Codec, auch bekannt als H.265 und MPEG-H Teil 2, kann in den [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (`video/mp4`), [Quicktime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime) (`video/quicktime`) und [Matroska](https://en.wikipedia.org/wiki/Matroska) (`video/matroska`) Containern enthalten sein.

Die Verwendung von HEVC wird allgemein durch die Verwendung eines unterstützenden MIME-Typs mit angehängtem `codecs`-Parameter beschrieben; Syntaxbeispiele sind wie folgt:

```plain
video/mp4;codecs=hvc1.1.6.L186.B0,mp4a.40.2
video/mp4;codecs=hvc1.1.6.L186.B0,opus
video/mp4;codecs=hev1.1.6.L186.B0,mp4a.40.2
video/mp4;codecs=hev1.1.6.L186.B0,opus
```

Die Syntaxen für jeden der unterstützten Codecs sehen folgendermaßen aus:

- `hvc1[.A.B.C.D]` (HEVC-Video)
  - : Der Wert beginnt mit der vierstelligen Klarskriptkennung des Codecs (`hvc1`), gefolgt von vier oder mehr durch Punkte (`.`) getrennten Werten:
    - `A`
      - : Der **`general_profile_space`**. Dies ist als ein- oder zweistellige Zeichen kodiert:
        - Das erste Zeichen ist `A`, `B` oder `C`, das `general_profile_space` `1`, `2` oder `3` darstellt, oder kein Zeichen, das `general_profile_space` `0` darstellt.
        - Das zweite Zeichen ist eine Dezimalzahl, die das `general_profile_idc` darstellt.
          > [!NOTE]
          > In den obigen Beispielen bedeutet der Wert `1`, dass `general_profile_space === 0` (kein Zeichen) und `general_profile_idc === 1`.
    - `B`
      - : Ein 32-Bit-Wert, der eine oder mehrere **generelle Profilkompatibilitätsflags** (`general_profile_compatibility_flag`) darstellt, die im Hexadezimalformat (führende Nullen können weggelassen werden) und in umgekehrter Bit-Reihenfolge von am bedeutendsten bis am wenigsten signifikant kodiert sind. Die Werte können von `31` (am bedeutendsten) bis `0` (am wenigsten signifikant) reichen und sind in [ISO/IEC 23008-2](https://www.iso.org/standard/90502.html) spezifiziert.

        > [!NOTE]
        > In den obigen Beispielen bedeutet der Wert `6`, dass `general_profile_compatibility_flag === 6`.

    - `C`
      - : Das **`general_tier_flag`**, kodiert als `L` (`general_tier_flag === 0`) oder `H` (`general_tier_flag === 1`), gefolgt von dem **`general_level_idc`**, kodiert als Dezimalzahl.

        > [!NOTE]
        > In den obigen Beispielen bedeutet der Wert `L186`, dass `general_tier_flag === 0` gefolgt von `general_level_idc === 186`.

    - `D`
      - : Ein oder mehrere 6-Byte **Constraint-Flags**. Beachten Sie, dass jedes Flag als Hexadezimalzahl kodiert ist und durch einen zusätzlichen Punkt getrennt ist; nachgestellte Bytes, die Null sind, können weggelassen werden.

        > [!NOTE]
        > In den obigen Beispielen ist nur ein Constraint-Flag vorhanden — `B0`.

- `hev1[.A.B.C.D]` (Variable Auflösung HEVC)
  - : Die `hev1` Codec-Parameter haben die gleiche Syntax wie die `hvc1` Codec-Parameter.

### WebM

Die Grundform des `codecs`-Parameters eines WebM besteht darin, einen oder mehrere der vier WebM-Codecs beim Namen zu nennen, getrennt durch Kommas. Die folgende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                         |
| -------------------------------- | ---------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video ohne angegebenes Audio. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video.                        |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                  |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.   |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.     |

Die Zeichenketten `vp8.0` und `vp9.0` funktionieren ebenfalls, werden aber nicht empfohlen.

## Verwendung des `codecs`-Parameters

Sie können den `codecs`-Parameter in verschiedenen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}}-Element verwenden, wenn Sie ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erstellen, um eine Gruppe von Optionen für den Browser festzulegen, aus denen er bei der Auswahl des Formats der Medien für die Anzeige im Element wählen kann.

Sie können den `codecs`-Parameter auch verwenden, wenn Sie einen MIME-Mediendatentyp an die [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) Methode angeben; diese Methode gibt einen Boolean zurück, der anzeigt, ob die Medien wahrscheinlich auf dem aktuellen Gerät funktionieren.

## Siehe auch

- [Webmedien-Technologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, Kind der {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Leitfaden zu auf dem Web verwendeten Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Leitfaden zu auf dem Web verwendeten Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Die korrekten HTML-Codecs-Parameter für ein AV1-Video erhalten](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)
- [High Efficiency Video Coding](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding) auf Wikipedia

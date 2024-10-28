---
title: Codecs in gemeinsamen Medientypen
slug: Web/Media/Formats/codecs_parameter
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Auf fundamentaler Ebene können Sie den Medientyp einer Datei mit einem einfachen {{Glossary("MIME", "MIME")}} Typ spezifizieren, wie `video/mp4` oder `audio/mpeg`. Jedoch können viele Medientypen – besonders jene, die Videospuren unterstützen – davon profitieren, die Datenformate präziser zu beschreiben. Zum Beispiel sagt eine Beschreibung eines Videos in einer [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts über das Format der eigentlichen Mediendaten aus.

Aus diesem Grund kann der `codecs` Parameter zum MIME-Typ hinzugefügt werden, um Medieninhalte genauer zu beschreiben. Mit ihm können container-spezifische Informationen bereitgestellt werden, wie etwa das Profil des Video-Codecs, der Typ der für die Audiospuren verwendet wird, und so weiter.

Dieser Leitfaden untersucht kurz die Syntax des `codecs` Parameters für Medientypen und wie er zusammen mit dem MIME-Typ genutzt wird, um Details über die Inhalte von Audio- oder Videomedien über den Containertyp hinaus anzugeben.

## Containerformat MIME-Typen

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem der Medientyp (`audio`, `video`, etc.) angegeben wird, dann ein Schrägstrich (`/`), gefolgt vom Format, das zur Speicherung des Mediums verwendet wird:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Formats/Containers#mpegmpeg-2) Dateityp verwendet, wie etwa ein MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Formats/Containers#ogg) Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime) Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format früher häufig im Web verwendet, ist aber heute nicht mehr gebräuchlich, da zur Nutzung ein Plugin erforderlich war.

Jedoch sind diese MIME-Typen sehr ungenau. Alle unterstützten Dateitypen verwenden eine Vielzahl von Codecs, die wiederum mehrere Profile, Level und andere Konfigurationsfaktoren haben können. Aus diesem Grund sollten Sie den `codecs` Parameter zusammen mit dem Medientyp einbeziehen.

## Grundlegende Syntax

Sie können den `codecs` Parameter zum Medientyp hinzufügen. Dafür hängen Sie ein Semikolon (`;`), gefolgt von `codecs=` und dann der Zeichenkette, die das Inhaltsformat der Datei beschreibt, an. Einige Medientypen erlauben Ihnen nur, die Namen der zu verwendenden Codecs anzugeben, während andere es ermöglichen, zusätzliche Einschränkungen für diese Codecs zu spezifizieren. Sie können mehrere Codecs durch Kommata trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Formats/Containers#ogg) Datei mit einer [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) Audiospur.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Formats/Containers#webm) Datei mit [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) Video und/oder [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) Audio.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) Datei mit [AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) (H.264) Video, Main Profile, Level 4.2.

Wie bei jedem MIME-Typ-Parameter muss `codecs` zu `codecs*` (beachten Sie das Sternzeichen `*`) geändert werden, wenn einer der Eigenschaften des Codecs Sonderzeichen benutzt, die nach {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} Prozent-encodiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} nutzen, um die Parameterliste zu kodieren; ebenso kann {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwendet werden, um eine zuvor codierte Parameterliste zu decodieren.

> [!NOTE]
> Wenn der `codecs` Parameter benutzt wird, muss die angegebene Liste aller Codecs jeden Codec enthalten, der für die Inhalte der Datei verwendet wird. Die Liste kann auch Codecs enthalten, die in der Datei nicht vorhanden sind.

## Codec-Optionen nach Container

Die folgenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs` Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Mehrere der obigen Links führen zum selben Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und daher die gleiche Syntax verwenden.

### AV1

Die Syntax des `codecs` Parameters für AV1 wird in der Spezifikation [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) definiert, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam).

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Browser, die auf Chromium basieren, akzeptieren jedes beliebige Subset der optionalen Parameter (statt alle oder keine, wie es die Spezifikation erfordert).

Die Komponenten dieser Codec-Parameterzeichenkette sind in der folgenden Tabelle ausführlicher beschrieben. Jede Komponente hat eine feste Länge in Zeichen; ist der Wert kürzer, muss er mit führenden Nullen aufgefüllt werden.

<table class="standard-table">
  <caption>
    AV1 Codec Parameter-Zeichenfolgen-Komponenten
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
                "Main"-Profil; unterstützt YUV 4:2:0 oder monochrome Bitstreams mit einer Farbkomponententiefe von 8 oder 10 Bit pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High"-Profil fügt Unterstützung für 4:4:4 Chroma-Subsampling hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional"-Profil fügt Unterstützung für 4:2:2 Chroma-Subsampling und 12 Bit pro Farbkomponente hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die in das X.Y-Level-Format konvertiert wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code> ist.
        Siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation für weitere Details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einbuchstabige Tier-Indikator. Für das Main-Tier (<code>seq_tier</code> gleich 0) ist dieser Buchstabe <code>M</code>.
        Für das High-Tier (<code>seq_tier</code> ist 1) ist dieser Buchstabe <code>H</code>.
        Das High-Tier ist nur für Level 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Bit-Tiefe der Komponenten. Dieser Wert muss einer von 8, 10 oder 12 sein; welche Werte gültig sind, variiert je nach Profil und anderen Eigenschaften.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Das einstellige Monochrom-Flag; wenn dieses auf 0 gesetzt ist, enthält das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls befinden sich die Videodaten vollständig in der Y-Ebene und sind somit monochromatisch.
        Siehe <a href="/de/docs/Web/Media/Formats/Video_concepts#yuv">YUV</a> für Details darüber, wie das YUV-Farbsystem funktioniert.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> gibt das Chroma-Subsampling als drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beide 1 sind, ist die dritte der Wert von <code>chroma_sample_position</code>; andernfalls ist die dritte Ziffer immer 0.
          Dies, kombiniert mit der <code>M</code>-Komponente, kann verwendet werden, um das Chroma-Subsampling-Format zu konstruieren:
        </p>
        <table class="standard-table">
          <caption>
            Bestimmen des Chroma-Subsampling-Formats
          </caption>
          <thead>
            <tr>
              <th scope="col">subsampling_x</th>
              <th scope="col">subsampling_y</th>
              <th scope="col">Monochrome-Flag</th>
              <th scope="col">Chroma-Subsampling-Format</th>
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
          Die dritte Ziffer von <code>CCC</code> zeigt die chromatische Probenposition an, wobei ein Wert von 0 bedeutet, dass die Position unbekannt ist und separat während der Decodierung bereitgestellt werden muss; ein Wert von 1 bedeuten, dass die Probenposition horizontal mit der (0, 0) Luminanzprobe kollokiert ist; und ein Wert von 2 bedeutet, dass die Probenposition mit (0, 0) Luminanz kollokiert ist.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige Wert <code>color_primaries</code> gibt das Farbsystem an, das von dem Medium verwendet wird.
        Zum Beispiel, BT.2020/BT.2100-Farbe, wie sie für HDR-Video verwendet wird, ist <code>09</code>.
        Die Informationen hierzu - und zu den verbleibenden Komponenten - befinden sich im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Farbkonfigurations-Semantik Abschnitt</a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige Wert <code>transfer_characteristics</code>. Dieser Wert definiert die Funktion, die zum Abbilden der Gamma (in der technischen Fachsprache "Optoelektronische Übertragungsfunktion" genannt) von der Quelle zur Anzeige verwendet wird.
        Zum Beispiel ist 10-Bit BT.2020 <code>14</code>.
        Der Wert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige Konstante <code>matrix_coefficients</code> wählt die Matrixkoeffizienten aus, die verwendet werden, um die roten, blauen und grünen Kanäle in Luminanz- und Chrominanzsignale zu konvertieren.
        Zum Beispiel die Standardkoeffizienten, die für BT.709 verwendet werden, werden durch den Wert <code>01</code> angegeben.
        Der Wert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Eine einstellige Flagge, die angibt, ob die Farbe den kompletten Bereich möglicher Werte verwenden kann (<code>1</code>), oder auf jene Werte beschränkt werden soll, die für die angegebene Farbkonfiguration als legal erachtet werden (d.h. die <strong>Studio-Swing-Darstellung</strong>).
        Der Standardwert ist 0 (Verwendung der Studio-Swing-Darstellung).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder ab `M` (Monochrome-Flag) sind optional; Sie können die Angabe von Feldern jederzeit beenden (aber nicht zufällig Felder auslassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiele für AV1 Codec-Zeichenfolgen:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional-Profil, Level 5.3, Main-Tier, 10-Bit pro Farbkomponente, 4:2:2 Chroma-Subsampling unter Verwendung von ITU-R BT.2100 Farbprimärfarben, Übertragungscharakteristiken und YCbCr-Farbmatrix. Die Studio-Swing-Darstellung ist angegeben.
- `av01.0.15M.10`
  - : AV1 Hauptprofil, Level 5.3, Main-Tier, 10-Bit pro Farbkomponente. Die verbleibenden Eigenschaften werden von den Standardwerten übernommen: 4:2:0 Chroma-Subsampling, BT.709 Farbprimärfarben, Übertragungscharakteristiken und Matrixkoeffizienten. Studio-Swing-Darstellung.

### VP9

#### ISO Base Media File Format-Syntax

Die Syntax des `codecs` Parameters für VP9 ist in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) Spezifikation definiert, im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string).

In diesem Format beginnt der Wert des `codecs` Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Serie durch Punkte (`.`) getrennter zweistelliger Werte.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles ab `CC` (Chroma-Subsampling) ist optional, aber alles oder nichts. Jede dieser Komponenten ist in der folgenden Tabelle beschrieben. Unterhalb der Tabelle finden Sie einige Beispiele.

<table class="standard-table">
  <caption>
    WebM codecs Parameter-Komponenten
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
          Die zweistellige Profilnummer, bei Bedarf mit führenden Nullen auf genau zwei Ziffern aufgefüllt.
        </p>
        <table class="standard-table">
          <caption>
            WebM Profilnummern
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
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal subabgetastet).
                Erlaubt nur 8 Bit pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Erlaubt nur 8 Bit pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal subabgetastet).
                Unterstützt 8, 10 oder 12 Bit pro Farbprobenkomponente.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bit pro Farbprobenkomponente.
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
        Die Levelnummer ist eine Festkommazahlnotation, wobei die erste Ziffer die Einerstelle ist und die zweite Ziffer Zehntel darstellt.
        Zum Beispiel ist Level 3 <code>30</code> und Level 6.1 ist <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die Bittiefe der Luma- und Farbkomponentenwerte; erlaubte Werte sind 8, 10 und 12.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          Ein zweistelliger Wert, der angibt, welches Chroma-Subsampling-Format verwendet werden soll.
          Die folgende Tabelle listet erlaubte Werte auf; siehe <a href="/de/docs/Web/Media/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> in unserem Leitfaden "Digitale Videokonzepte" für zusätzliche Informationen zu diesem und anderen Themen.
        </p>
        <table class="standard-table">
          <caption>
            WebM Chroma-Subsampling-Identifikatoren
          </caption>
          <thead>
            <tr>
              <th scope="col">Wert</th>
              <th scope="col">Chroma-Subsampling-Format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td>
                4:2:0 mit den Chroma-Proben, die zwischen den Pixeln eingefügt sind
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 Chroma-Subsampling mit den Proben, die mit Luma (0, 0) kollokiert sind
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                4:2:2 Chroma-Subsampling (4 von je 4 horizontalen PixelLuminanzen werden verwendet)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 Chroma-Subsampling (jede PixelLuminanz und Chrominanz werden beide beibehalten)
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
          Eine zweistellige Ganzzahl, die angibt, welche der Farbprimärfaktoren aus Abschnitt 8.1 des <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a> Standards verwendet werden.
          Diese Komponente und jede nachfolgende Komponente ist optional.
        </p>
        <p>Die möglichen Werte der Farbprimärkomponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Farbprimäridentifikatoren
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
              <td><em>Für die zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 ist der Standard für High Definition (HD) Fernsehen; sRGB ist der am häufigsten verwendete Farbraum für Computermonitore.
                Broadcast BT.709 verwendet 8-Bit Farbtiefe mit einem legalen Bereich von 16 (schwarz) bis 235 (weiß).
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildeigenschaften sind unbekannt oder werden durch die Anwendung bestimmt
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Für die zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>
                BT.470 System M, NTSC (Standarddefinition Fernsehen in den USA)
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
                <em>Funktional identisch mit <code>7</code>.</em>
              </td>
            </tr>
            <tr>
              <td><code>70</code></td>
              <td>
                {{Glossary("SMPTE", "SMPTE")}} 240M (historisch).
                <em>Funktional identisch mit <code>6</code>.</em>
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
                Verwendet für hochauflösendes High Dynamic Range (HDR) Video, haben diese einen sehr weiten Farbumfang {{Glossary("gamut", "gamut")}} und unterstützen 10-Bit und 12-Bit Farbtiefe pro Komponente.
              </td>
            </tr>
            <tr>
              <td><code>10</code></td>
              <td>
                SMPTE ST 428 (D-Cinema Distribution Master: Bildeigenschaften).
                Definiert die unkomprimierten Bildeigenschaften für DCDM.
              </td>
            </tr>
            <tr>
              <td><code>11</code></td>
              <td>
                SMPTE RP 431 (D-Cinema Qualität: Referenzprojektor und Umgebung).
                Beschreibt die Referenzprojektor- und Umgebungsbedingungen, die eine konsistente Filmvorführerfahrung bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Farbverarbeitung für D-Cinema).
                Ingenieurleitlinie, die Empfehlungen zur Farbentschlüsselung für digitale Filme gibt.
              </td>
            </tr>
            <tr>
              <td><code>13</code> – <code>21</code></td>
              <td><em>Für die zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>22</code></td>
              <td>EBU Tech 3213-E</td>
            </tr>
            <tr>
              <td><code>23</code> – <code>255</code></td>
              <td><em>Für die zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Eine zweistellige Ganzzahl, die angibt, welche <code>transferCharacteristics</code> für das Video gelten.
        Dieser Wert stammt aus Abschnitt 8.2 von <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und gibt die Übertragungscharakteristik an, die verwendet wird, wenn die decodierte Farbe an das Ausgaberenderziel angepasst werden soll.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert der <code>matrixCoefficients</code> Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> Spezifikation.
        Dieser Wert gibt an, welcher Satz von Koeffizienten verwendet werden soll, wenn vom nativen Primärrot, -blau und -grün zur Luminanz- und Chrominanzsignalen gemappt werden soll.
        Diese Koeffizienten werden wiederum mit den Gleichungen verwendet, die sich im selben Abschnitt befinden.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob der Schwarzwert und Farbbereich jeder Farbkomponente auf den legalen Bereich beschränkt werden sollen.
        Für 8-Bit Farbproben ist der legale Bereich 16-235.
        Ein Wert von <code>00</code> gibt an, dass diese Einschränkungen angewendet werden sollen, während ein Wert von <code>01</code> den kompletten Bereich möglicher Werte für jede Komponente erlaubt, selbst wenn die resultierende Farbe außerhalb der Grenzen des Farbsystems liegt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9-Video, Profil 2 Stufe 1.0, mit 10-Bit YUV-Inhalt unter Verwendung von 4:2:0-Chroma-Subsampling, BT.2020-Primärfarben, ST 2084 EOTF (HDR SMPTE), BT.2020 nicht-konstante Luminanz-Farbmatrix und vollständiger Bereichs-Chroma- und Luma-Kodierung. Der Ton ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime, und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, haben die gleiche Syntax für den `codecs` Parameter. Zu diesen Medientypen gehören [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) (und tatsächlich das [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime) Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Formats/Containers#3gp). Sowohl Video- als auch Audiotracks können mit dem `codecs` Parameter unter den folgenden MIME-Typen beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2 Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2 Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4 Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4 Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien, die in MPEG-4 encapsuliert sind                                                        |

Jeder Codec, der durch den `codecs` Parameter beschrieben wird, kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime`, etc.) oder als Containername plus weiterer Parameter zur Spezifikation des Codecs und seiner Konfiguration angegeben werden. Jeder Eintrag in der Codecliste kann eine Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; sie beginnt jedoch immer mit dem vierstelligen Identifikator des Codecs, einem Punkttrennzeichen (`.`), gefolgt vom Object Type Indication (OTI) Wert für das spezifische Datenformat. Für die meisten Codecs ist das OTI eine zweistellige Hexadezimalzahl; für [AVC (H.264)](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) jedoch sechs hexadezimale Ziffern.

Somit sehen die Syntaxen für jeden der unterstützten Codecs folgendermaßen aus:

- `cccc[.pp]*` (Generisches ISO BMFF)
  - : Wo `cccc` der vierstellige ID für den Codec ist und `pp` die Stelle ist, an der null oder mehr zweistellige codierte Eigenschaftswerte stehen.
- `mp4a.oo[.A]` (MPEG-4 Audio)
  - : Wo `oo` der OTI-Wert ist, der den Inhalt des Mediums genauer beschreibt und `A` ist die einstellige _Audio_-OTI. Die möglichen Werte finden Sie auf der [Object-Types-Seite](https://mp4ra.org/#/object_types) der MP4-Registrierungsbehörde Website. Zum Beispiel ist Opus-Audio in einer MP4-Datei `mp4a.ad`. Weitere Details finden Sie unter [MPEG-4 Audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4 Video)
  - : Hier ist `oo` wieder der OTI, der die Inhalte genauer beschreibt, während `V` der einstellige _Video_-OTI ist.
- `avc1[.PPCCLL]` (AVC Video)

  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), Constraint-Set-Flags (`CC`) und Level (`LL`) spezifizieren. Siehe [AVC Profile](#avc_profile) für die möglichen Werte von `PP`.

    Das Constraint-Set-Flags-Byte besteht aus einstelligen Booleschen Flags, wobei das bedeutendste Bit die Flagge 0 ist (oder `constraint_set0_flag`, in einigen Ressourcen) und jedes folgende Bit um eins höher nummeriert wird. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bits _müssen_ null sein. Die Bedeutungen der Flags variieren je nach verwendetem Profil.

    Der Level ist eine Festkommazahl, so bedeutet ein Wert von `14` (dezimal 20) Level 2.0, während ein Wert von `3D` (dezimal 61) Level 6.1 bedeutet. Generell gilt: Je höher die Levelnummer, desto mehr Bandbreite verwendet der Stream und desto größer sind die maximal unterstützten Videodimensionen.

#### AVC Profile

Die folgenden Profile sind die AVC-Profile und deren Profilnummern für die Verwendung im `codecs` Parameter sowie der Wert, der für die Constraints-Komponente `CC` anzugeben ist.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Nummer (Hex) | Constraints-Byte |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------- |
| **Constrained Baseline Profile (CBP)** CBP ist vorwiegend eine Lösung für Szenarien, in denen Ressourcen beschränkt sind oder der Ressourceneinsatz kontrolliert werden muss, um das Risiko einer schlechten Medienleistung zu minimieren.                                                                                                                                                                                                                                                                                                                                                           | `42`         | `40`             |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutz gegen Datenverlust und Wiederherstellungsfähigkeiten. Wird nicht mehr so häufig verwendet, seit CBP eingeführt wurde. Alle CBP-Streams gelten ebenfalls als BP-Streams.                                                                                                                                                                                                                                                                                                                                                            | `42`         | `00`             |
| **Extended Profile (XP)** Entwickelt für das Streamen von Videos über das Netzwerk, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen der Datenrobustheit und des Streamwechsels.                                                                                                                                                                                                                                                                                                                                                                                                          | `58`         | `00`             |
| **Main Profile (MP)** Das Profil, das für standardauflösendes digitales Fernsehen verwendet wird, das im MPEG-4-Format ausgestrahlt wird. _Nicht_ für hochauflösendes Fernsehen verwendet. Die Bedeutung dieses Profils hat seit der Einführung des High Profiles – das 2004 für HDTV-Anwendungen hinzugefügt wurde – nachgelassen.                                                                                                                                                                                                                                                                  | `4D`         | `00`             |
| **High Profile (HiP)** Derzeit wird HiP vorwiegend für die Übertragung und Disc-basierte HD-Videos eingesetzt; es wird sowohl für HDTV-Ausstrahlungen als auch für Blu-Ray-Videos verwendet.                                                                                                                                                                                                                                                                                                                                                                                                         | `64`         | `00`             |
| **Progressive High Profile (PHiP)** Im Wesentlichen High Profile ohne Unterstützung für die Fallcodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `64`         | `08`             |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für vorhergesagte Bi-Slices ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `64`         | `0C`             |
| **High 10 Profile (Hi10P)** High Profile, jedoch mit Unterstützung für bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `6E`         | `00`             |
| **High 4:2:2 Profile (Hi422P)** Erweitert auf Hi10P, indem Unterstützung für 4:2:2 Chroma-Subsampling sowie bis zu 10 Bits pro Farbkomponente hinzugefügt wird.                                                                                                                                                                                                                                                                                                                                                                                                                                      | `7A`         | `00`             |
| **High 4:4:4 Predictive Profile (Hi444PP)** Neben den in Hi422P enthaltenen Fähigkeiten fügt Hi444PP Unterstützung für 4:4:4 Chroma-Subsampling hinzu (bei dem keine Farbinformationen verworfen werden). Beinhaltet auch Unterstützung für bis zu 14 Bits pro Farbprobe und effizientes verlustfreies Regionscodierung. Die Option, jeden Rahmen als drei separate Farbkanäle zu kodieren (d.h. die Daten jeder Farbe werden gespeichert, als wären sie ein einzelner monochromatischer Rahmen).                                                                                                    | `F4`         | `00`             |
| **High 10 Intra Profile** High 10 eingeschränkt auf All-Intra-Frame-Nutzung. Vorwiegend in professionellen Anwendungen eingesetzt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `6E`         | `10`             |
| **High 4:2:2 Intra Profile** Das Hi422-Profil ohne Unterstützung für Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `7A`         | `10`             |
| **High 4:4:4 Intra Profile** Das High 4:4:4 Profil eingeschränkt auf die Verwendung von Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `F4`         | `10`             |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4 Profil, eingeschränkt auf die All-Intra-Nutzung und nur die Verwendung von CAVLC-Entropiecodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `44`         | `00`             |
| **Scalable Baseline Profile** Das auf dem AVC Constrained Baseline Profile basierende [SVC](https://en.wikipedia.org/wiki/SVC) Baseline Profile ist primär für Videokonferenzen sowie für Überwachungs- und mobile Anwendungen vorgesehen. Der Basis-Layer innerhalb des Streams wird auf hohem Qualitätsniveau bereitgestellt, mit einer Anzahl von sekundären Substreams, die alternative Formen des gleichen Videos für verschiedene eingeschränkte Umgebungen bieten. Diese können jede Kombination aus reduzierter Auflösung, reduzierter Bildrate oder erhöhten Komprimierungsstufen umfassen. | `53`         | `00`             |
| **Scalable Constrained Baseline Profile** Primär für Echtzeit-Kommunikationsanwendungen verwendet. Wird noch nicht von WebRTC unterstützt, aber eine Erweiterung für die WebRTC-API [um SVC zu ermöglichen](https://github.com/w3c/webrtc-svc) ist in Entwicklung.                                                                                                                                                                                                                                                                                                                                   | `53`         | `04`             |
| **Scalable High Profile** Vorwiegend für Einsatz in Übertragungs- und Streaming-Anwendungen gedacht. Der Basis- (oder höchstwertige) Layer muss dem AVC High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                    | `56`         | `00`             |
| **Scalable Constrained High Profile** Ein Subset des Scalable High Profile, hauptsächlich für Echtzeitkommunikation gedacht.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `56`         | `04`             |
| **Scalable High Intra Profile** Primär nur für Produktionsanwendungen nützlich, unterstützt dieses Profil nur die All-Intra-Nutzung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `56`         | `20`             |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video durch zwei Darstellungen der Szene (linkes Auge und rechtes Auge). Bietet ansonsten die gleichen Funktionen wie das High Profile.                                                                                                                                                                                                                                                                                                                                                                                      | `80`         | `00`             |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten unter Verwendung von sowohl temporaler als auch MVC-Inter-View-Prädiktion. _Unterstützt Keine_ Field-Bilder oder Makroblock-adaptive Frame-Field-Codierung.                                                                                                                                                                                                                                                                                                                                                                          | `76`         | `00`             |

| **Multiview Depth High Profile** Basierend auf dem High Profile, zu dem der Haup

tstream gehören muss. Die verbleibenden Substreams müssen dem Stereo High Profile entsprechen. | `8A` | `00` |

#### MPEG-4 Audio

Wenn der Wert eines Eintrags in der `codecs` Liste mit `mp4a` beginnt, sollte die Syntax des Wertes sein:

```plain
mp4a.oo[.A]
```

Hier befindet sich `oo` das zweistellige hexadezimale Object Type Indication, das die Codeklasse beschreibt, die für die Medien verwendet wird. Die OTIs werden von der [MP4 Registration Authority](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/#/object_types) verwaltet. Ein spezieller Wert ist `40`; dies gibt an, dass das Medium MPEG-4 Audio (ISO/IEC 14496 Teil 3) ist. Um noch spezifischer zu werden, kann eine dritte Komponente – der Audio Object Type – für OTI `40` hinzugefügt werden, um den Typ auf einen spezifischen Subtyp von MPEG-4 einzugrenzen.

Der Audio Object Type wird als ein- oder zweistellige _Dezimalzahl_ (im Gegensatz zu den meisten anderen Werten im `codecs` Parameter, die hexadezimal sind) angegeben. Zum Beispiel hat MPEG-4s AAC-LC einen Audio Object Type Nummer von `2`, also ist der vollständige `codecs` Wert, der AAC-LC repräsentiert, `mp4a.40.2`.

Somit kann ER AAC LC, dessen Audio Object Type 17 ist, unter Verwendung des vollständigen `codecs` Werts `mp4a.40.17` repräsentiert werden. Einstellige Werte können entweder als einzelne Ziffer (was die beste Wahl ist, da es am breitesten kompatibel ist) oder mit einem führenden Null ergänzt, um sie auf zwei Stellen zu vervollständigen, wie `mp4a.40.02`.

> [!NOTE]
> Die Spezifikation forderte ursprünglich, dass die Audio Object Type Nummer in der dritten Komponente nur eine Dezimalziffer sein darf. Ergänzungen zur Spezifikation erweiterten jedoch den Bereich dieser Werte weit über eine Dezimalziffer hinaus, so dass die dritte Komponente jetzt entweder eine oder zwei Stellen haben kann. Das Auffüllen von Werten unter 10 mit einer führenden `0` ist optional. Ältere Implementierungen von MPEG-4-Codecs unterstützen möglicherweise keine zweistelligen Werte, daher maximiert die Verwendung einer einzelnen Stelle, wenn möglich, die Kompatibilität.

Die Audio Object Types sind in ISO/IEC 14496-3 Unternummer 1, Abschnitt 1.5.1 definiert. Die Tabelle unten enthält eine grundlegende Liste der Audio Object Types und bietet im Fall der gebräuchlicheren Objektarten eine Liste der unterstützenden Profile, aber Sie sollten die Spezifikation für Details nachschlagen, wenn Sie mehr über das Innenleben eines bestimmten MPEG-4-Audio-Typs wissen müssen.

<table class="standard-table">
  <caption>
    MPEG-4 Audio-Objecttypen
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio-Objecttyp</th>
      <th scope="col">Profilunterstützung</th>
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
      <td>TwinVQ (Coding for ultra-low bit rates)</td>
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
      <td>TTSI (Text to Speech Interface)</td>
      <td>Main, Scalable, Speech, Synthetic, LD</td>
    </tr>
    <tr>
      <td><code>13</code></td>
      <td>Main Synthetic</td>
      <td>Main, Synthetic</td>
    </tr>
    <tr>
      <td><code>14</code></td>
      <td>Wavetable Synthesis</td>
      <td></td>
    </tr>
    <tr>
      <td><code>15</code></td>
      <td>General MIDI</td>
      <td></td>
    </tr>
    <tr>
      <td><code>16</code></td>
      <td>Algorithmic Synthesis and Audio Effects</td>
      <td></td>
    </tr>
    <tr>
      <td><code>17</code></td>
      <td>ER AAC LC (Fehler-Resiliente AAC Low-Complexity)</td>
      <td>HQ, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>18</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>19</code></td>
      <td>ER AAC LTP (Fehler-Resiliente AAC Long Term Prediction)</td>
      <td>HQ</td>
    </tr>
    <tr>
      <td><code>20</code></td>
      <td>ER AAC Scalable (Fehler-Resiliente AAC Scalable)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>21</code></td>
      <td>ER TwinVQ (Fehler-Resiliente TwinVQ)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>22</code></td>
      <td>ER BSAC (Fehler-Resiliente Bit-Sliced Arithmetic Coding)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>23</code></td>
      <td>
        ER AAC LD (Fehler-Resiliente AAC Low-Delay; verwendet für Zwei-Wege
        Kommunikation)
      </td>
      <td>LD, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>24</code></td>
      <td>ER CELP (Fehler-Resiliente Code-Excited Linear Prediction)</td>
      <td>HQ, LD</td>
    </tr>
    <tr>
      <td><code>25</code></td>
      <td>ER HVXC (Fehler-Resiliente Harmonic Vector Excitation Coding)</td>
      <td>LD</td>
    </tr>
    <tr>
      <td><code>26</code></td>
      <td>ER HILN (Fehler-Resiliente Harmonic and Individual Line plus Noise)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>27</code></td>
      <td>ER Parametric (Fehler-Resiliente Parametric)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>28</code></td>
      <td>SSC (Sinuswellencodierung)</td>
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
      <td>DST (Direkter Datenstrom Transfer)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>36</code></td>
      <td>ALS (Audio Verlustfrei)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>37</code></td>
      <td>SLS (Skalierbarer Verlustfreier)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>38</code></td>
      <td>SLS Nicht-Kern (Skalierbarer Verlustfreier Nicht-Kern)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>39</code></td>
      <td>ER AAC ELD (Fehler-Resiliente AAC Erweitert Low Delay)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>40</code></td>
      <td>SMR Einfach (Symbolische Musik Darstellungs Einfach)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>41</code></td>
      <td>SMR Main (Symbolische Musik Darstellungs Main)</td>
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
        <p>SAOC (Räumliches Audio Objekt Kodierung)</p>
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
        <p>LD MPEG Surround (Niedrige Verzögerung MPEG Surround)</p>
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

### WebM

Die grundlegende Form für einen WebM `codecs` Parameter ist das Auflisten eines oder mehrerer der vier WebM-Codecs nach Name, getrennt durch Kommas. Die folgende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                        |
| -------------------------------- | --------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video; kein Audio angegeben. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video.                       |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.               |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                 |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.  |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.    |

Die Zeichenfolgen `vp8.0` und `vp9.0` funktionieren auch, werden jedoch nicht empfohlen.

## Verwendung des codecs Parameters

Sie können den `codecs` Parameter in einigen Situationen verwenden. Zunächst können Sie ihn mit dem {{HTMLElement("source")}} Element verwenden, wenn Sie ein {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element erstellen, um dem Browser eine Gruppe von Optionen zu bieten, aus denen er das Format des Mediums auswählen kann, das dem Benutzer im Element präsentiert wird.

Sie können den Codecs-Parameter auch verwenden, wenn Sie einen MIME-Medientyp an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) angeben; diese Methode gibt einen Booleschen Wert zurück, der angibt, ob das Medium wahrscheinlich auf dem aktuellen Gerät funktioniert.

## Siehe auch

- [Webmedien-Technologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}} Element, Kind der {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Den richtigen HTML codecs Parameter für ein AV1-Video erhalten](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)

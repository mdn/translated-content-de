---
title: Codecs in gängigen Medientypen
slug: Web/Media/Formats/codecs_parameter
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Auf einer grundlegenden Ebene können Sie den Typ einer Mediendatei mit einem einfachen {{Glossary("MIME")}}-Typ festlegen, wie etwa `video/mp4` oder `audio/mpeg`. Viele Medientypen – insbesondere solche, die Videospuren unterstützen – profitieren jedoch von der Möglichkeit, das Format der darin enthaltenen Daten genauer zu beschreiben. Zum Beispiel, nur ein Video in einer [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) Datei mit dem MIME-Typ `video/mp4` zu beschreiben, sagt nichts über das genaue Format des tatsächlichen Mediums aus.

Aus diesem Grund kann der Parameter `codecs` zum MIME-Typ hinzugefügt werden, der Mediendaten beschreibt. Mit ihm kann container-spezifische Information bereitgestellt werden. Diese Information kann beispielsweise das Profil des Videocodecs, den für die Audiospuren verwendeten Typ und so weiter umfassen.

Diese Anleitung untersucht kurz die Syntax des Medientyps-Parameters `codecs` und wie er zusammen mit dem MIME-Typ-String verwendet wird, um Details über den Inhalt von Audio- oder Videomedien anzugeben, die über den Container-Typ hinausgehen.

## Containerformat-MIME-Typen

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem der Medientyp (`audio`, `video`, etc.) angegeben wird, dann ein Schrägstrich (`/`), gefolgt von dem Format, das zum Enthalten der Medien verwendet wird:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Formats/Containers#mpegmpeg-2) Dateityp verwendet, wie z.B. eine MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Formats/Containers#ogg) Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime) Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format früher häufig im Web verwendet, ist aber nicht mehr gebräuchlich, da es ein Plugin benötigte.

Jeder dieser MIME-Typen ist jedoch vage. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können eine beliebige Anzahl von Profilen, Ebenen und anderen Konfigurationsfaktoren haben. Aus diesem Grund möchten Sie möglicherweise den `codecs`-Parameter zusammen mit dem Medientyp einbeziehen.

## Grundlegende Syntax

Sie können den `codecs`-Parameter zum Medientyp hinzufügen. Dazu fügen Sie ein Semikolon (`;`) hinzu, gefolgt von `codecs=` und dann dem String, der das Format des Dateiinhalts beschreibt. Einige Medientypen erlauben es Ihnen nur, die Namen der zu verwendenden Codecs anzugeben, während andere es ermöglichen, auch verschiedene Einschränkungen für diese Codecs festzulegen. Sie können mehrere Codecs angeben, indem Sie sie mit Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Formats/Containers#ogg) Datei, die eine [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) Audiospur enthält.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Formats/Containers#webm) Datei, die [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) Video und/oder [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) Audio enthält.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) Datei mit [AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) (H.264) Video, Main Profile, Level 4.2.

Wie bei jedem MIME-Typ-Parameter muss `codecs` in `codecs*` geändert werden (beachten Sie das Sternchen-Zeichen, `*`), wenn eine der Eigenschaften des Codecs spezielle Zeichen enthält, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} prozentcodiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu codieren; ebenso können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor codierte Parameterliste zu dekodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Liste der Codecs jeden Codec enthalten, der für den Inhalt der Datei verwendet wird. Die Liste kann auch Codecs enthalten, die in der Datei nicht vorhanden sind.

## Codec-Optionen nach Container

Die folgenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Mehrere der oben genannten Links führen zum gleichen Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und daher die gleiche Syntax teilen.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der Spezifikation des [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) definiert, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam).

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Auf Chromium basierte Browser akzeptieren jeden Teil der optionalen Parameter (anstatt alle oder keine, wie es die Spezifikation verlangt).

Die Komponenten dieses Codec-Parameter-Strings werden ausführlicher in der Tabelle unten beschrieben. Jede Komponente hat eine feste Zeichenlänge; wenn der Wert kürzer ist, muss er mit führenden Nullen aufgefüllt werden.

<table class="standard-table">
  <caption>
    AV1 codec parameter string Komponenten
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
                "Main" Profil; unterstützt YUV 4:2:0 oder monochrome Bitströme mit einer Farbtiefe von 8 oder 10 Bits pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High" Profil fügt Unterstützung für 4:4:4 Chroma-Subsampling hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional" Profil fügt Unterstützung für 4:2:2 Chroma-Subsampling und 12-Bit pro Komponentenfarbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Ebenennummer, die in das Format X.Y umgewandelt wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code>.
        Siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation für Details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Tier-Indikator. Für den Main Tier (<code>seq_tier</code> ist 0), ist dieser Buchstabe <code>M</code>.
        Für den High Tier (<code>seq_tier</code> ist 1), ist dieser Buchstabe <code>H</code>.
        Der High Tier ist nur für Ebenen 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Bit-Komponenten-Tiefe. Dieser Wert muss entweder 8, 10 oder 12 sein; welche Werte gültig sind, variiert je nach Profil und anderen Eigenschaften.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Das einstellige Monochrom-Flag; wenn dies 0 ist, enthält das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls liegen die Videodaten vollständig in der Y-Ebene vor und sind daher monochromatisch.
        Siehe <a href="/de/docs/Web/Media/Formats/Video_concepts#yuv">YUV</a> für Details darüber, wie das YUV-Farbsystem funktioniert.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> gibt das Chroma-Subsampling als drei Ziffern an.
          Der erste Ziffer ist <code>subsampling_x</code>, der zweite ist <code>subsampling_y</code>.
          Wenn beide 1 sind, ist der dritte Wert der <code>chroma_sample_position</code>; andernfalls ist der dritte Ziffer immer 0.
          Dies, zusammen mit der Komponente <code>M</code>, kann verwendet werden, um das Chroma-Subsampling-Format zu konstruieren:
        </p>
        <table class="standard-table">
          <caption>
            Bestimmen des Chroma-Subsampling-Formats
          </caption>
          <thead>
            <tr>
              <th scope="col">subsampling_x</th>
              <th scope="col">subsampling_y</th>
              <th scope="col">Monochrom-Flag</th>
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
          Der dritte Ziffer in <code>CCC</code> gibt die Chroma-Abtastposition an, wobei ein Wert von 0 anzeigt, dass die Position unbekannt ist und separat während der Decodierung bereitgestellt werden muss; ein Wert von 1 zeigt an, dass die Abtastposition horizontal mit der (0, 0) Luma-Probe zusammenfällt; und ein Wert von 2 zeigt an, dass die Abtastposition mit (0, 0) Luma zusammenfällt.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert gibt das Farbsystem an, das vom Medium verwendet wird.
        Zum Beispiel ist BT.2020/BT.2100 Farbe, wie sie für HDR-Video verwendet wird, <code>09</code>.
        Die Informationen hierzu – und für jede der verbleibenden Komponenten – finden sich im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Color config semantics section</a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die zur Abbildung des Gamma (im technischen Jargon als "opto-electrical transfer function" bezeichnet) von der Quelle zum Display verwendet wird.
        Zum Beispiel ist 10-Bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code>-Konstante wählt die Matrixkoeffizienten aus, die verwendet werden, um die roten, blauen und grünen Kanäle in Luma- und Chroma-Signale umzuwandeln.
        Zum Beispiel werden die Standardkoeffizienten für BT.709 mit dem Wert <code>01</code> angezeigt.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Eine einstellige Flagge, die angibt, ob die Farbe den vollen Bereich möglicher Werte verwenden darf (<code>1</code>), oder ob sie auf diejenigen Werte beschränkt werden soll, die für die angegebene Farbkonfiguration als legal gelten (das heißt, die <strong>Studio-Swing-Darstellung</strong>).
        Der Standardwert ist 0 (Verwendung der Studio-Swing-Darstellung).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder von `M` (Monochrom-Flag) an sind optional; Sie können jederzeit aufhören, Felder einzubeziehen (aber nicht willkürlich Felder auslassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiele für AV1-Codec-Strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profil, Ebene 5.3, Main Tier, 10 Bits pro Farbkomponente, 4:2:2 Chroma-Subsampling mit ITU-R BT.2100 Primärfarben, Transfercharakteristiken und YCbCr Farbmatrix. Die Studio-Swing-Darstellung ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profil, Ebene 5.3, Main Tier, 10 Bits pro Farbkomponente. Die restlichen Eigenschaften stammen aus den Standardwerten: 4:2:0 Chroma-Subsampling, BT.709 Primärfarben, Transfercharakteristiken und Matrixkoeffizienten. Studio-Swing-Darstellung.

### VP9

#### ISO Base Media File Format Syntax

Die Syntax des `codecs`-Parameters für VP9 ist in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) Spezifikation definiert, im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string).

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec kennzeichnet, gefolgt von einer Reihe von durch Punkte (`.`) getrennten zweistelligen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles von `CC` (Chroma-Subsampling) an ist optional, aber alles oder nichts. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Nach der Tabelle folgen einige Beispiele.

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
          Die zweistellige Profilnummer, mit führenden Nullen auf genau zwei Ziffern aufgefüllt.
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
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal unterabtastet).
                Erlaubt nur 8 Bits pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Erlaubt nur 8 Bits pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal unterabtastet).
                Unterstützt 8, 10 oder 12 Bits pro Farbprobenkomponente.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bits pro Farbprobenkomponente.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Ebenennummer.
        Die Ebenennummer befindet sich in fester Komma-Notation, wobei die erste Ziffer die Einerziffer ist und die zweite Ziffer die Zehntel darstellt.
        Zum Beispiel bedeutet Ebene 3 <code>30</code> und Ebene 6.1 bedeutet <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die Bit-Tiefe der Luma- und Farbkomponentenwerte; zulässige Werte sind 8, 10 und 12.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          Ein zweistelliger Wert, der angibt, welches Chroma-Subsampling-Format verwendet wird.
          Die folgende Tabelle zeigt die zulässigen Werte; siehe <a href="/de/docs/Web/Media/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> in unserem Leitfaden "Grundlagen zu digitalem Video" für zusätzliche Informationen zu diesem Thema und anderen.
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
                4:2:0 mit den Chroma-Proben interstitial zwischen den Pixeln
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 Chroma-Subsampling mit den Proben collocated mit Luma (0, 0)
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                4:2:2 Chroma-Subsampling (4 von je 4 horizontalen Pixeln Luminanz werden verwendet)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 Chroma-Subsampling (jede Pixel Luminanz und Chrominanz werden beide beibehalten)
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
          Eine zweistellige Ganzzahl, die angibt, welche der Primärfarben aus Abschnitt 8.1 der <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a>-Norm.
          Diese Komponente und jede Komponente danach ist optional.
        </p>
        <p>Die möglichen Werte der Primärfarbenkomponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Farbakten-Identifikatoren
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
                BT.709, sRGB, sYCC. BT.709 ist der Standard für High Definition (HD) Fernsehen; sRGB ist der am meisten verwendete Farbraum für Computerdisplays.
                Broadcast BT.709 verwendet 8-Bit Farbtiefe mit dem zugelassenen Bereich von 16 (schwarz) bis 235 (weiß).
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildmerkmale sind unbekannt oder müssen durch die Anwendung bestimmt werden
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Reserviert für zukünftige Verwendung durch ITU oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>
                BT.470 System M, NTSC (Standard Definition Fernsehen in den USA)
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
                {{Glossary("SMPTE")}} 240M (historisch).
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
                Eignet sich für Ultra High Definition (4K) High Dynamic Range (HDR) Video, diese haben einen sehr weiten Farbumfang und unterstützen 10-Bit und 12-Bit Farbtiefen der Komponenten.
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
                SMPTE RP 431 (D-Cinema Qualität: Referenzprojektor und Umgebung).
                Beschreibt die Referenzprojektor- und Umgebungskonditionen, die eine einheitliche Filmdarstellungserfahrung bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digitale Quellenverarbeitung: Farbverarbeitung für D-Cinema).
                Ingenieurseinrichtung, die Dekodierungsempfehlungen für Farbensignale für digitale Filme macht.
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
        Eine zweistellige Ganzzahl, die die
        <code>transferCharacteristics</code> des Videos angibt.
        Dieser Wert stammt aus Abschnitt 8.2 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und gibt die Übertragungseigenschaften an, die verwendet werden, wenn die dekodierten Farben auf das Ausgabegerät angepasst werden.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code>-Eigenschaft.
        Dieser Wert stammt aus der Tabelle im Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> Spezifikation.
        Dieser Wert gibt an, welches Set von Koeffizienten für die Umwandlung von den nativen roten, blauen und grünen Primärfarben in Luma- und Chroma-Signale verwendet werden soll.
        Diese Koeffizienten werden wiederum mit den in diesem gleichen Abschnitt gefundenen Gleichungen verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob der Schwarzpegel und der Farbbereich jeder Farbkomponente auf den legalen Bereich beschränkt werden sollen.
        Für 8-Bit Farbproben ist der legale Bereich 16-235.
        Ein Wert von <code>00</code> zeigt an, dass diese Einschränkungen durchgesetzt werden sollten, während ein Wert von <code>01</code> den vollen Bereich der möglichen Werte für jede Komponente zulässt, selbst wenn die resultierende Farbe außerhalb der Grenzen für das Farbsystem liegt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9 Video, Profil 2 Ebene 1.0, mit 10-Bit YUV Inhalt unter Verwendung von 4:2:0 Chroma-Subsampling, BT.2020 Primärfarben, ST 2084 EOTF (HDR SMPTE), BT.2020 nicht-konstante Luminanzfarbmatrix und vollwertige Chroma- und Luma-Codierung. Der Audio ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, verwenden die gleiche Syntax für den `codecs`-Parameter. Zu diesen Medientypen gehören [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) (und tatsächlich das [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime) Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Formats/Containers#3gp). Sowohl Video- als auch Audiospuren können mit den folgenden MIME-Typen mit dem `codecs`-Parameter beschrieben werden:

| MIME-Typ         | Beschreibung                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien, die in MPEG-4 eingebettet sind                                                        |

Jeder Codec, der durch den `codecs`-Parameter beschrieben wird, kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime`, etc.) oder als Containername zusammen mit zusätzlichen Parametern angegeben werden, um den Codec und seine Konfiguration zu spezifizieren. Jeder Eintrag in der Codec-Liste kann eine beliebige Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; jedoch beginnt sie immer mit der vierstelligen Identifizierung des Codecs, einem Punkttrennzeichen (`.`), gefolgt von dem Object Type Indication (OTI)-Wert für das spezifische Datenformat. Für die meisten Codecs ist das OTI eine zweistellige Hexadezimalzahl; jedoch sind es sechs Hexadezimalziffern für [AVC (H.264)](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264).

So sehen die Syntaxen für die unterstützten Codecs aus:

- `cccc[.pp]*` (Generische ISO BMFF)
  - : Wo `cccc` die vierstellige ID des Codecs ist und `pp` ist, wo null oder mehr zweistellige kodierte Eigenschaftswerte hinkommen.
- `mp4a.oo[.A]` (MPEG-4 Audio)
  - : Wo `oo` der Object Type Indication-Wert ist, der den Inhalt des Mediums genauer beschreibt und `A` die einstellige _audio_ OTI ist. Die möglichen Werte für das OTI finden Sie auf der Website der MP4 Registration Authority's [Object Types-Seite](https://mp4ra.org/#/object_types). Zum Beispiel, Opus-Audio in einer MP4-Datei ist `mp4a.ad`. Für weitere Details siehe [MPEG-4 Audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4 Video)
  - : Hier ist `oo` wieder das OTI, das den Inhalt genauer beschreibt, während `V` die einstellige _video_ OTI ist.
- `avc1[.PPCCLL]` (AVC Video)

  - : `PPCCLL` sind sechs Hexadezimalziffern, die die Profilnummer (`PP`), die Constraint-Set-Flags (`CC`) und die Ebene (`LL`) angeben. Siehe [AVC Profile](#avc_profile) für die möglichen Werte von `PP`.

    Das Constraint-Set-Flags byte besteht aus einstelligen Boolean-Flags, wobei das bedeutendste Bit als 0 (oder `constraint_set0_flag` in einigen Ressourcen) referiert wird, und jedes nachfolgende Bit als eins höher nummeriert ist. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bits _müssen_ null sein. Die Bedeutungen der Flags variieren je nach Profil.

    Die Ebene ist eine feste Punktzahl, sodass ein Wert von `14` (dezimal 20) Ebene 2.0 bedeutet, während ein Wert von `3D` (dezimal 61) Ebene 6.1 bedeutet. Im Allgemeinen gilt, je höher die Ebenennummer, desto mehr Bandbreite benötigt der Stream und desto größer ist die maximal unterstützte Videodimension.

#### AVC Profile

Nachfolgend sind die AVC-Profile und deren Profilnummern für die Verwendung im `codecs`-Parameter sowie der Angabewert für die Einschränkungskomponente `CC` aufgelistet.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Nummer (Hex) | Einschränkungsbyte |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------- |
| **Constrained Baseline Profile (CBP)** CBP ist in erster Linie eine Lösung für Szenarien mit knappen Ressourcen oder in denen Ressourcen kontrolliert werden müssen, um die Wahrscheinlichkeit zu minimieren, dass das Medium schlecht läuft.                                                                                                                                                                                                                                                                                                                                               | `42`         | `40`                |
| **Baseline Profile (BP)** Ähnlich zu CBP, jedoch mit mehr Datenschutzmaßnahmen und Wiederherstellungsfähigkeiten. Dies wird nicht so häufig verwendet wie vor der Einführung von CBP. Alle CBP-Streams gelten auch als BP-Streams.                                                                                                                                                                                                                                                                                                                    | `42`         | `00`                |
| **Extended Profile (XP)** Entwickelt für Streaming-Video über das Netzwerk, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen der Datenrobustheit und des Stream-Wechsels.                                                                                                                                                                                                                                                                                                                                                                  | `58`         | `00`                |
| **Main Profile (MP)** Das Profil, das für Standard-Digitalfernsehen verwendet wird, wird im MPEG-4-Format ausgestrahlt. _Nicht_ für High-Definition-Fernsehausstrahlungen verwendet. Die Bedeutung dieses Profils hat seit der Einführung des High Profile - das für HDTV eingeführt wurde - im Jahr 2004 abgenommen.                                                                                                                                                                                                                                     | `4D`         | `00`                |
| **High Profile (HiP)** Derzeit ist HiP das primäre Profil, das für Rundfunk und diskbasiertes HD-Video verwendet wird; es wird sowohl für HDTV-Ausstrahlungen als auch für Blu-Ray-Videos verwendet.                                                                                                                                                                                                                                                                                                                                                                                       | `64`         | `00`                |
| **Progressive High Profile (PHiP)** Im Wesentlichen High Profile ohne Unterstützung für Feldcodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                | `64`         | `08`                |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bi-predictive slices ("B-slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `64`         | `0C`                |
| **High 10 Profile (Hi10P)** High Profile, jedoch mit Unterstützung für bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                             | `6E`         | `00`                |
| **High 4:2:2 Profile (Hi422P)** Erweiterung von Hi10P durch Hinzufügen der Unterstützung für 4:2:2 Chroma-Subsampling sowie bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                        | `7A`         | `00`                |
| **High 4:4:4 Predictive Profile (Hi444PP)** Zusätzlich zu den in Hi422P enthaltenen Funktionen, fügt Hi444PP Unterstützung für 4:4:4 Chroma-Subsampling hinzu (bei dem keine Farbinformationen verworfen werden). Enthält außerdem Unterstützung für bis zu 14-Bits pro Farbprobe und effiziente verlustfreie Bereichscodierung. Die Option, jeden Frame als drei separate Farbebenen zu codieren (das heißt, die Daten jeder Farbe werden so gespeichert, als ob sie ein einzelnes monochromes Frame wäre).      | `F4`         | `00`                |
| **High 10 Intra Profile** High 10 beschränkt auf die alleinige Verwendung mit intra-Frames. Hauptsächlich für professionelle Anwendungen nützlich.                                                                                                                                                                                                                                                                                                                                                                                                    | `6E`         | `10`                |
| **High 4:2:2 Intra Profile** Die Hi422-Profil mit allen-Intra-Frame-Verwendung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `7A`         | `10`                |
| **High 4:4:4 Intra Profile** Das High 4:4:4-Profil, das nur zur Verwendung mit Intra-Frames beschränkt ist.                                                                                                                                                                                                                                                                                                                                                                                                                                           | `F4`         | `10`                |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4-Profil, das auf die alleinige Verwendung mit Intra-Frames und nur der Verwendung von CAVLC-Entropie-Codierung beschränkt ist.                                                                                                                                                                                                                                                                                                                                                                                                                     | `44`         | `00`                |
| **Scalable Baseline Profile** Soll für Videokonferenzen sowie Überwachungs- und mobile Anwendungen verwendet werden, das [SVC](https://en.wikipedia.org/wiki/SVC) Baseline-Profil basiert auf dem AVC-Constrained Baseline-Profil. Die Basisschicht innerhalb des Streams wird auf einem hohen Qualitätsniveau bereitgestellt, mit einer Anzahl von sekundären Substreams, die alternative Formen desselben Videos für den Einsatz in verschiedenen limitierten Umgebungen bieten. Diese können eine beliebige Kombination von reduzierter Auflösung, reduzierter Bildwiederholrate oder erhöhtem Kompressionsgrad umfassen. | `53`         | `00`                |
| **Scalable Constrained Baseline Profile** Primär zur Verwendung in Echtzeitkommunikations-Anwendungen. Noch nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API [zur Erlaubnis von SVC](https://github.com/w3c/webrtc-svc) ist in Entwicklung.                                                                                                                                                                                                                                                                                                                      | `53`         | `04`                |
| **Scalable High Profile** Hauptsächlich für Rundfunk- und Streaming-Anwendungen vorgesehen. Die Grunde (oder höchste Qualitäts) Schicht muss mit dem AVC-High-Profil konform sein.                                                                                                                                                                                                                                                                                                                                                                       | `56`         | `00`                |
| **Scalable Constrained High Profile** Eine Teilmenge des Scalable High Profile, das in erster Linie für die Echtzeitkommunikation ausgelegt ist.                                                                                                                                                                                                                                                                                                                                                                                                       | `56`         | `04`                |
| **Scalable High Intra Profile** Hauptsächlich nur für Produktionsanwendungen nützlich, unterstützt dieses Profil nur alle-Intra-Nutzung.                                                                                                                                                                                                                                                                                                                                                                                                                | `56`         | `20`                |
| **Stereo High Profile** Das Stereo-High-Profil bietet stereoskopisches Video unter Verwendung von zwei Rendering der Szene (linkes Auge und rechtes Auge). Ansonsten bietet es die gleichen Funktionen wie das High-Profil.                                                                                                                                                                                                                                                                                                                                                                   | `80`         | `00`                |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten mit Vorhersagtemporär- und MVC-Inter-View-Vorhersage. _Unterstützt nicht_ Feldbilder oder makroblockadaptive Frame-Feld-Codierung.                                                                                                                                                                                                                                                                                                                                                      | `76`         | `00`                |
| **Multiview Depth High Profile** Basierend auf dem High-Profil, der der Haupt-Substream entsprechen muss. Die verbleibenden Substreams müssen das Stereo-High-Profil entsprechen.                                                                                                                                                                                                                                                                                                                                                                      | `8A`         | `00`                |

#### MPEG-4 Audio

Wenn der Wert eines Eintrags in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Wertes folgendes sein:

```plain
mp4a.oo[.A]
```

Hier ist `oo` die zweistellige Hexadezimal Object Type Indication, die die verwendete Mediendatenklasse angibt. Die OTIs werden von der [MP4 Registration Authority](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/#/object_types) pflegt. Ein spezieller Wert ist `40`; dies gibt an, dass es sich bei den Medien um MPEG-4-Audio (ISO/IEC 14496 Teil 3) handelt. Um noch genauer zu sein, wird eine dritte Komponente - der Audio Object Type - für OTI `40` hinzugefügt, um den Typ auf einen bestimmten Subtyp von MPEG-4 zu beschränken.

Der Audio Object Type wird als ein- oder zweistelliger _dezimaler_ Wert angegeben (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die Hexadezimal verwenden). Zum Beispiel hat AAC-LC von MPEG-4 eine Audio Object Type-Nummer von `2`, daher ist der vollständige `codecs`-Wert, der AAC-LC darstellt, `mp4a.40.2`.

So kann ER AAC LC, dessen Audio Object Type 17 ist, mit dem vollständigen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einstellige Werte können entweder als eine Ziffer angegeben werden (was die beste Wahl ist, da es die breiteste Kompatibilität bietet) oder mit einer vorangestellten Null auf zwei Ziffern aufgefüllt werden, etwa `mp4a.40.02`.

> [!NOTE]
> Die Spezifikation forderte ursprünglich, dass die Audio Object Type Zahl in der dritten Komponente nur eine Dezimalstelle hat. Allerdings haben Änderungen der Spezifikation im Laufe der Zeit den Bereich dieser Werte weit über eine Dezimalstelle hinaus erweitert, sodass die dritte Komponente jetzt ein- oder zweistellig sein kann. Das Auffüllen von Werten unter 10 mit einer führenden `0` ist optional. Ältere Implementierungen von MPEG-4-Codec unterstützen möglicherweise keine zweistelligen Werte, daher maximiert die Verwendung einer einzigen Ziffer, wenn möglich, die Kompatibilität.

Die Audio Object Types sind in ISO/IEC 14496-3 Unterabschnitt 1, Abschnitt 1.5.1 definiert. Die folgende Tabelle bietet eine grundlegende Liste der Audio Object Types und bei den häufigeren Typen eine Liste der Profile, die sie unterstützen. Wenn Sie jedoch mehr über die inneren Funktionen eines bestimmten MPEG-4-Audio-Typs wissen müssen, sollten Sie auf die Spezifikation verweisen.

<table class="standard-table">
  <caption>
    MPEG-4 Audio Object Types
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio Object Type</th>
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
      <td>Haupt</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td>AAC LC (Low Complexity)</td>
      <td>Haupt, Skalierbar, HQ, LD v2, AAC, HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td>AAC SSR (Scalable Sampling Rate)</td>
      <td>Haupt</td>
    </tr>
    <tr>
      <td><code>4</code></td>
      <td>AAC LTP (Long Term Prediction)</td>
      <td>Haupt, Skalierbar, HQ</td>
    </tr>
    <tr>
      <td><code>5</code></td>
      <td>SBR (Spectral Band Replication)</td>
      <td>HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>6</code></td>
      <td>AAC Skalierbar</td>
      <td>Haupt, Skalierbar, HQ</td>
    </tr>
    <tr>
      <td><code>7</code></td>
      <td>TwinVQ (Kodierung für sehr niedrige Bitraten)</td>
      <td>Haupt, Skalierbar</td>
    </tr>
    <tr>
      <td><code>8</code></td>
      <td>CELP (Code-Excited Linear Prediction)</td>
      <td>Haupt, Skalierbar, Sprache, HQ, LD</td>
    </tr>
    <tr>
      <td><code>9</code></td>
      <td>HVXC (Harmonic Vector Excitation Coding)</td>
      <td>Haupt, Skalierbar, Sprache, LD</td>
    </tr>
    <tr>
      <td><code>10</code> - <code>11</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>12</code></td>
      <td>TTSI (Text to Speech Interface)</td>
      <td>Haupt, Skalierbar, Sprache, Synthetisch, LD</td>
    </tr>
    <tr>
      <td><code>13</code></td>
      <td>Haupt Synthetisch</td>
      <td>Haupt, Synthetisch</td>
    </tr>
    <tr>
      <td><code>14</code></td>
      <td>Wavetable Synthese</td>
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
      <td>ER AAC LC (Error Resilient AAC Low-Complexity)</td>
      <td>HQ, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>18</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>19</code></td>
      <td>ER AAC LTP (Error Resilient AAC Long Term Prediction)</td>
      <td>HQ</td>
    </tr>
    <tr>
      <td><code>20</code></td>
      <td>ER AAC Skalierbar (Error Resilient AAC Scalable)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>21</code></td>
      <td>ER TwinVQ (Error Resilient TwinVQ)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>22</code></td>
      <td>ER BSAC (Error Resilient Bit-Sliced Arithmetic Coding)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>23</code></td>
      <td>
        ER AAC LD (Error Resilient AAC Low-Delay; wird für die Kommunikation in beide Richtungen verwendet)
      </td>
      <td>LD, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>24</code></td>
      <td>ER CELP (Error Resilient Code-Excited Linear Prediction)</td>
      <td>HQ, LD</td>
    </tr>
    <tr>
      <td><code>25</code></td>
      <td>ER HVXC (Error Resilient Harmonic Vector Excitation Coding)</td>
      <td>LD</td>
    </tr>
    <tr>
      <td><code>26</code></td>
      <td>ER HILN (Error Resilient Harmonic and Individual Line plus Noise)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>27</code></td>
      <td>ER Parametric (Error Resilient Parametric)</td>
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
      <td>ER AAC ELD (Error Resilient AAC Enhanced Low Delay)</td>
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

### WebM

Die grundlegende Form für einen WebM `codecs`-Parameter ist, eine oder mehrere der vier WebM-Codecs durch Kommas getrennt aufzulisten. Die folgende Tabelle zeigt einige Beispiele:

| MIME-Typ                        | Beschreibung                                               |
| -------------------------------- | --------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video darin; kein Audio ist angegeben. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video darin.                        |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                         |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                           |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.         |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.           |

Die Strings `vp8.0` und `vp9.0` funktionieren ebenfalls, werden jedoch nicht empfohlen.

## Verwenden des codecs-Parameters

Sie können den `codecs`-Parameter in einigen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}} Element verwenden, wenn Sie ein {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element erstellen, um eine Gruppe von Optionen festzulegen, aus der der Browser beim Auswählen des Medienformats zur Präsentation an den Benutzer im Element auswählen kann.

Sie können den codecs-Parameter auch verwenden, wenn Sie einen MIME-Medientyp für die Methode {{domxref("MediaSource/isTypeSupported_static", "MediaSource.isTypeSupported()")}} angeben; diese Methode gibt einen Boolean zurück, der angibt, ob das Medium auf dem aktuellen Gerät wahrscheinlich funktioniert.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, ein Kind von {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)
- [Leitfaden zu auf dem Web verwendeten Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs)
- [Leitfaden zu auf dem Web verwendeten Videocodecs](/de/docs/Web/Media/Formats/Video_codecs)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Erhalten des richtigen HTML codecs-Parameters für ein AV1-Video](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)

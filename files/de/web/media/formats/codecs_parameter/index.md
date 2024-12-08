---
title: Codecs in common media types
slug: Web/Media/Formats/codecs_parameter
l10n:
  sourceCommit: a99abeab30729181dde26fe362aeebb2a567c19e
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Auf einer grundlegenden Ebene können Sie den Typ einer Mediendatei durch einen einfachen {{Glossary("MIME", "MIME")}} Typ angeben, wie `video/mp4` oder `audio/mpeg`. Viele Medientypen – besonders diejenigen, die Videospuren unterstützen – können jedoch von der Möglichkeit profitieren, das Format der darin enthaltenen Daten genauer zu beschreiben. Beispielsweise sagt die bloße Beschreibung eines Videos in einer [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) Datei mit dem MIME-Typ `video/mp4` nichts über das tatsächliche Format der darin enthaltenen Medien aus.

Aus diesem Grund kann der `codecs`-Parameter zum MIME-Typ hinzugefügt werden, der Mediendaten beschreibt. Damit können containerspezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Video-Codecs, den Typ, der für die Audio-Spuren verwendet wird, usw. beinhalten.

Dieser Leitfaden untersucht kurz die Syntax des `codecs`-Parameters im Medientyp und wie er mit der MIME-Typ-Zeichenfolge verwendet wird, um Details über den Inhalt von Audio- oder Videomedien bereitzustellen, die über die Angabe des Containertyps hinausgehen.

## Containerformat-MIME-Typen

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem der Medientyp (`audio`, `video`, etc.) angegeben wird, gefolgt von einem Schrägstrich (`/`), und dann das Format, mit dem die Medien enthalten sind:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Formats/Containers#mpegmpeg-2) Dateityp verwendet, wie eine MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Formats/Containers#ogg) Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime) Format von Apple. Wie an anderer Stelle vermerkt, wurde dieses Format einst häufig im Web verwendet, ist aber nicht mehr üblich, da ein Plugin erforderlich war, um es zu verwenden.

Jedoch ist jeder dieser MIME-Typen vage. All diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können eine beliebige Anzahl von Profilen, Ebenen und anderen Konfigurationsfaktoren haben. Aus diesem Grund möchten Sie möglicherweise den `codecs`-Parameter zusammen mit dem Medientyp einschließen.

## Grundlegende Syntax

Sie können den `codecs`-Parameter zum Medientyp hinzufügen. Dazu fügen Sie ein Semikolon (`;`) hinzu, gefolgt von `codecs=` und dann der Zeichenkette, die das Format der Inhalte der Datei beschreibt. Einige Medientypen lassen Sie nur die Namen der zu verwendenden Codecs angeben, während andere Ihnen erlauben, auch verschiedene Einschränkungen dieser Codecs anzugeben. Sie können mehrere Codecs angeben, indem Sie sie durch Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Formats/Containers#ogg) Datei mit einer [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) Audiospur.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Formats/Containers#webm) Datei mit [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8) Video und/oder [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis) Audio.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) Datei mit [AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) (H.264) Video, Main Profile, Level 4.2.

Wie bei jedem MIME-Typ-Parameter muss `codecs` zu `codecs*` geändert werden (beachten Sie das Sternchenzeichen, `*`), wenn eine der Eigenschaften des Codecs Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} prozentkodiert sein müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu kodieren; ähnlich können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor kodierte Parameterliste zu dekodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Liste alle für die Inhalte der Datei verwendeten Codecs enthalten. Die Liste kann auch Codecs enthalten, die nicht in der Datei enthalten sind.

## Codec-Optionen nach Container

Die untenstehenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Mehrere der obenstehenden Links führen zum selben Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und somit die gleiche Syntax haben.

### AV1

Die Syntax des `codecs`-Parameters für AV1 wird in der Spezifikation [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) im Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam) definiert.

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Auf Chromium-basierten Browsern wird jede Teilmenge der optionalen Parameter akzeptiert (anstatt alle oder keine, wie es die Spezifikation verlangt).

Die Komponenten dieser Codec-Parameterzeichenkette werden in der folgenden Tabelle detaillierter beschrieben. Jede Komponente hat eine feste Anzahl an Zeichen; ist der Wert kürzer, muss er mit führenden Nullen aufgefüllt werden.

<table class="standard-table">
  <caption>
    AV1 Codec-Parameter-Zeichenkettenkomponenten
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
                "Main" Profil; unterstützt YUV 4:2:0 oder monochrome Bitstreams mit einer Farbtiefe von 8 oder 10 Bit pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High" Profil fügt Unterstützung für 4:4:4 Chroma-Subsampling hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional" Profil fügt Unterstützung für 4:2:2 Chroma-Subsampling und 12-Bit pro Komponente Farbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die in das X.Y-Format umgewandelt wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code>.
        Für Details siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Geschwindigkeitsanzeiger. Für die Main-Tier (<code>seq_tier</code> entspricht 0) ist dieser Buchstabe <code>M</code>.
        Für die High-Tier (<code>seq_tier</code> ist 1) ist dieser Buchstabe <code>H</code>.
        Die High-Tier ist nur für Level 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige bit-Tiefe der Komponenten. Dieser Wert muss 8, 10 oder 12 sein; welche Werte gültig sind, variiert abhängig vom Profil und anderen Eigenschaften.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Die einstellige monochrome Flag; wenn diese 0 ist, umfasst das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten ausschließlich in der Y-Ebene enthalten und sind daher monochrom.
        Weitere Informationen zur Funktionsweise des YUV-Farbsystems finden Sie unter <a href="/de/docs/Web/Media/Formats/Video_concepts#yuv">YUV</a>.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> gibt das Chroma-Subsampling als drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beide Eins sind, ist die dritte der Wert von <code>chroma_sample_position</code>; andernfalls ist die dritte Ziffer immer 0.
          Dies, zusammen mit der <code>M</code> Komponente, kann verwendet werden, um das Chroma-Subsampling-Format zu konstruieren:
        </p>
        <table class="standard-table">
          <caption>
            Bestimmung des Chroma-Subsampling-Formats
          </caption>
          <thead>
            <tr>
              <th scope="col">subsampling_x</th>
              <th scope="col">subsampling_y</th>
              <th scope="col">Monochrome flag</th>
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
          Die dritte Ziffer in <code>CCC</code> gibt die Position der Chroma-Probe an, wobei ein Wert von 0 angibt, dass die Position unbekannt ist und separat bei der Dekodierung bereitgestellt werden muss; ein Wert von 1 zeigt an, dass die Probe horizontal mit der (0, 0) Luminanzprobe zusammenfällt; und ein Wert von 2 bedeutet, dass die Probe mit (0, 0) Luminanz zusammenfällt.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige Wert <code>color_primaries</code> gibt das vom Medium verwendete Farbsystem an.
        Zum Beispiel ist BT.2020/BT.2100 Farbe, wie sie für HDR-Video verwendet wird, <code>09</code>.
        Die Informationen hierzu – und für jede der verbleibenden Komponenten – finden Sie im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Abschnitt über Farbkonfigurationssemantik</a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige Wert <code>transfer_characteristics</code>. Dieser Wert definiert die Funktion, die verwendet wird, um das Gamma (bekannt als "optische elektronische Transferfunktion" im Fachjargon) von der Quelle zum Display zu mappen.
        Beispielsweise ist 10-Bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige Konstante <code>matrix_coefficients</code> wählt die Matrixkoeffizienten aus, die verwendet werden, um die Rot-, Blau- und Grüntöne in Luminanz- und Chrominanzsignale umzuwandeln.
        Beispielsweise werden die Standardkoeffizienten, die für BT.709 verwendet werden, mit dem Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Ein einstelliger Indikator, der anzeigt, ob die Farbe den vollen Bereich der möglichen Werte verwenden darf (<code>1</code>), oder auf die als legal angesehenen Werte für die angegebene Farbdarstellung beschränkt werden sollte (also die <strong>Studio-Swing-Darstellung</strong>).
        Der Standard ist 0 (Verwendung der Studio-Swing-Darstellung).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder ab `M` (monochrome Flag) sind optional; Sie können das Einbeziehen von Feldern an irgendeinem Punkt beenden (aber nicht willkürlich Felder weglassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiel-AV1-Codec-Strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profil, Level 5.3, Main-Tier, 10 Bit pro Farbkomponente, 4:2:2 Chroma-Subsampling mit ITU-R BT.2100 Farbprimonie, Transfer-Eigenschaften und YCbCr-Farbmatrix. Die Studio-Swing-Darstellung wird angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profile, Level 5.3, Main-Tier, 10 Bit pro Farbkomponente. Die verbleibenden Eigenschaften stammen aus den Standards: 4:2:0 Chroma-Subsampling, BT.709 Farbprimonie, Transfer-Eigenschaften und Matrixkoeffizienten. Studio-Swing-Darstellung.

### VP9

#### ISO Base Media File Format Syntax

Die Syntax des `codecs`-Parameters für VP9 wird in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) Spezifikation im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) definiert.

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den in dem Container verwendeten Codec angibt, worauf eine Serie von durch Punkt (`.`) getrennten zweistelligen Werten folgt.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind obligatorisch; alles ab `CC` (Chroma-Subsampling) ist optional, aber alles oder nichts. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Nach der Tabelle finden sich einige Beispiele.

<table class="standard-table">
  <caption>
    WebM Codecs-Parameter-Komponenten
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
            Vierstellige Codes für von WebM unterstützte Codecs
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
          Die zweistellige Profilnummer, mit führenden Nullen aufgefüllt, falls nötig, um genau zwei Ziffern zu haben.
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
                Nur 4:2:0 (Chroma horizontal und vertikal subsampliert).
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
                Nur 4:2:0 (Chroma horizontal und vertikal subsampliert).
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
        Die Levelnummer ist eine Festkommanotation, bei der die erste Ziffer die Einerstelle ist und die zweite Ziffer die Zehntelstelle darstellt.
        Zum Beispiel ist Level 3 gleich <code>30</code> und Level 6,1 gleich <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die Bittiefe der Luma- und Farbkomponentenwerte; zulässige Werte sind 8, 10 und 12.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          Ein zweistelliger Wert, der angibt, welches Chroma-Subsampling-Format zu verwenden ist.
          Die folgende Tabelle listet die zulässigen Werte auf; weitere Informationen zu diesem Thema und anderen finden Sie unter <a href="/de/docs/Web/Media/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> im "Digitale Video-Konzepte" Leitfaden.
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
                4:2:0 mit den Chroma-Proben zwischen den Pixeln angesiedelt
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 Chroma-Subsampling mit den Proben mit Luma (0, 0) kollokiert
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
                4:4:4 Chroma-Subsampling (sowohl Luminanz als auch Chrominanz jedes Pixels werden behalten)
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
          Ein zwei-Bit-Integer-Wert, der angibt, welche der Farbprimärfarben aus Abschnitt 8.1 der <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a> Norm.
          Diese Komponente und jede Komponente, die danach kommt, ist optional.
        </p>
        <p>Die möglichen Werte der Farbprimärfarben-Komponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Farbprimärfarben-Identifikatoren
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
                BT.709, sRGB, sYCC. BT.709 ist der Standard für hochauflösendes (HD) Fernsehen; sRGB ist der am häufigsten genutzte Farbraum für Computerdarstellungen.
                Broadcast BT.709 verwendet 8-Bit-Farbtiefe, wobei der legale Bereich von 16 (schwarz) bis 235 (weiß) reicht.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildmerkmale sind unbekannt oder werden durch die Anwendung bestimmt
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Reserviert für zukünftige Verwendung durch ITU oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>
                BT.470 System M, NTSC (Standard-Definition-Fernsehen in den Vereinigten Staaten)
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
              <td>Allgemeiner Film</td>
            </tr>
            <tr>
              <td><code>09</code></td>
              <td>
                BT.2020; BT.2100.
                Verwendet für Ultra-High-Definition (4K) High Dynamic Range (HDR) Video, haben diese einen sehr großen Farbumfang und unterstützen 10-Bit- und 12-Bit-Farbkomponenten-Tiefen.
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
                SMPTE RP 431 (D-Cinema Qualität: Referenzprojektor und -umgebung).
                Beschreibt den Referenzprojektor und die Umgebung, die eine konsistente Filmerlebnis bietet.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digitale Source Processing: Farbverarbeitung für D-Cinema).
                Technische Richtlinien für Farbsignal-Decodierungsempfehlungen für digitale Filme.
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
        Ein zwei-Bit-Integer-Wert, der die
        <code>transferCharacteristics</code> für das Video angibt.
        Dieser Wert stammt aus Abschnitt 8.2 des <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>, und gibt die Übertragungsmerkmale an, die verwendet werden sollen, wenn das dekodierte Farbsignal an das Ziel angepasst wird.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code> Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> Spezifikation.
        Dieser Wert gibt an, welche Koordinaten verwendet werden sollen, wenn von den nativen Rot-, Blau- und Grüntönen zu den Luma- und Chromasignalen gewechselt wird.
        Diese Koordinaten werden zusammen mit den in diesem Abschnitt dargestellten Gleichungen verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob der Schwarzpegel und der Farbbereich jeder Farbkomponente auf den legalen Bereich eingeschränkt werden sollen.
        Für 8-Bit-Farbproben gilt der legale Bereich von 16-235.
        Ein Wert von <code>00</code> gibt an, dass diese Einschränkungen durchgesetzt werden sollten, während ein Wert von <code>01</code> den vollen Bereich möglicher Werte für jede Komponente zulässt, auch wenn die resultierende Farbe außerhalb der Grenzen des Farbsystems liegt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9 Video, Profil 2 Level 1.0, mit 10-Bit YUV-Inhalten, die 4:2:0 Chroma-Subsampling verwenden, BT.2020 Primärfarben, ST 2084 EOTF (HDR SMPTE), BT.2020 nicht-constante Luminanz-Farbmatrix und Vollbereichs-Chroma- und Luma-Codierung. Das Audio ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, teilen die gleiche Syntax für den `codecs`-Parameter. Diese Medientypen umfassen [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) (und tatsächlich das [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime) Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Formats/Containers#3gp). Sowohl Video- als auch Audiotracks können mit dem `codecs`-Parameter mit den folgenden MIME-Typen beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2 Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2 Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4 Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4 Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelles Medium, das in MPEG-4 gekapselt ist                                                           |

Jeder Codec, der durch den `codecs`-Parameter beschrieben wird, kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime`, etc.) oder als Containername plus zusätzliche Parameter zur Angabe des Codec und seiner Konfiguration spezifiziert werden. Jeder Eintrag in der Codekliste kann eine Anzahl von Komponenten enthalten, getrennt durch Punkte (`.`).

Die Syntax für den Wert von `codecs` variiert je nach Codec; jedoch beginnt sie immer mit der vierstelligen Kennung des Codecs, einem Trennzeichen (Punkt `.`), gefolgt von dem Object Type Indication (OTI) Wert für das spezifische Datenformat. Für die meisten Codecs ist das OTI eine zweistellige hexadezimale Zahl; jedoch sind es sechs hexadezimale Stellen für [AVC (H.264)](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264).

Dementsprechend sehen die Syntaxen für jeden der unterstützten Codecs so aus:

- `cccc[.pp]*` (Generische ISO BMFF)
  - : Wo `cccc` die vierstellige ID für den Codec ist und `pp` der Ort ist, an dem null oder mehr zweistellige kodierte Eigenschaftswerte untergebracht werden.
- `mp4a.oo[.A]` (MPEG-4 Audio)
  - : Wo `oo` der Object Type Indication Wert ist, der die Inhalte des Mediums genauer beschreibt, und `A` der einstellig _Audio_ OTI ist. Die möglichen Werte für die OTI sind auf der [Objekttypen-Seite](https://mp4ra.org/registered-types/object-types) der MP4 Registrierungsstelle Webseite zu finden. Ein Beispiel: Opus-Audio in einer MP4-Datei ist `mp4a.ad`. Weitere Details finden Sie unter [MPEG-4 Audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4 Video)
  - : Hier ist `oo` erneut das OTI, das die Inhalte genauer beschreibt, während `V` der einstellig _Video_ OTI ist.
- `avc1[.PPCCLL]` (AVC Video)

  - : `PPCCLL` sind sechs hexadezimale Stellen, die die Profilnummer (`PP`), Constraint Set Flags (`CC`) und Level (`LL`) spezifizieren. Siehe [AVC Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint Set Flags Byte besteht aus einstelligen booleschen Flags, wobei das höchstwertige Bit als Flag 0 (oder `constraint_set0_flag`, in einigen Ressourcen) bezeichnet wird, und jedes nachfolgende Bit um eins höher nummeriert wird. Derzeit werden nur Flags 0 bis 2 verwendet; die anderen fünf Bits _müssen_ Null sein. Die Bedeutungen der Flags hängen vom verwendeten Profil ab.

    Der Level ist eine Festkommazahl, sodass ein Wert von `14` (dezimal 20) Level 2.0 bedeutet, während ein Wert von `3D` (dezimal 61) Level 6.1 bedeutet. Allgemein gilt: Je höher die Levelnummer, desto mehr Bandbreite benötigt der Stream und desto höher sind die maximal unterstützten Videodimensionen.

#### AVC-Profile

Die folgenden AVC-Profile und ihre Profilnummern für die Verwendung im `codecs`-Parameter sowie den Wert zur Angabe der Constraint-Komponente, `CC`.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Nummer (Hex) | Constraint-Byte |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------- |
| **Constrained Baseline Profile (CBP)** CBP ist vor allem eine Lösung für Szenarien, in denen Ressourcen beschränkt sind oder der Ressourcenverbrauch so gesteuert werden muss, dass die Wahrscheinlichkeit minimiert wird, dass die Medien schlecht abschneiden.                                                                                                                                                                                                                                                                                                   | `42`         | `40`            |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutz gegen Datenverlust und Wiederherstellungsfähigkeiten. Dies wird nicht mehr so oft verwendet wie früher, seit CBP eingeführt wurde. Alle CBP-Streams werden ebenfalls als BP-Streams betrachtet.                                                                                                                                                                                                                                                                                                  | `42`         | `00`            |
| **Extended Profile (XP)** Entwickelt für die Übertragung von Video über das Netzwerk mit hoher Komprimierungsfähigkeit und weiteren Verbesserungen bei Datenrobustheit und Streamwechseln.                                                                                                                                                                                                                                                                                                                                                                         | `58`         | `00`            |
| **Main Profile (MP)** Das Profil, das für digitale Standard-Definition-Fernsehsendungen im MPEG-4-Format verwendet wird. _Nicht_ verwendet für hochauflösende Fernsehübertragungen. Die Bedeutung dieses Profiles ist seit der Einführung des High-Profiles — das 2004 für HDTV-Zwecke hinzugefügt wurde — verblasst.                                                                                                                                                                                                                                              | `4D`         | `00`            |
| **High Profile (HiP)** Derzeit ist das High Profile das primäre Profil, das für HD-Videoübertragungen und für Blu-Ray-Video verwendet wird.                                                                                                                                                                                                                                                                                                                                                                                                                        | `64`         | `00`            |
| **Progressive High Profile (PHiP)** Eigentlich High Profile ohne Unterstützung für Feldcodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `64`         | `08`            |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bi-prädiktive Schnitte ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `64`         | `0C`            |
| **High 10 Profile (Hi10P)** High Profile, jedoch mit Unterstützung für bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `6E`         | `00`            |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P um Unterstützung für 4:2:2 Chroma-Subsampling sowie bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                              | `7A`         | `00`            |
| **High 4:4:4 Predictive Profile (Hi444PP)** Zusätzlich zu den in Hi422P enthaltenen Funktionen fügt Hi444PP Unterstützung für 4:4:4 Chroma-Subsampling hinzu (bei dem keine Farbinformationen verworfen werden). Auch Unterstützung für bis zu 14 Bit pro Farbprobe und effizientes verlustfreies Region-Encoding. Die Option, jedes Bild als drei separate Farbebenen zu kodieren (d. h., die Daten jeder Farbe werden gespeichert, als wäre sie ein einzelner monochromer Rahmen).                                                                               | `F4`         | `00`            |
| **High 10 Intra Profile** High 10 beschränkt auf ausschließlich intra-Frame-Nutzung. Vor allem für professionelle Anwendungen verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                           | `6E`         | `10`            |
| **High 4:2:2 Intra Profile** Das Hi422 Profil mit ausschließlich intra-Frame-Nutzung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `7A`         | `10`            |
| **High 4:4:4 Intra Profile** Das High 4:4:4 Profil beschränkt auf die Verwendung nur von Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `F4`         | `10`            |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4 Profil beschränkt auf die rein intra-Frame Nutzung und die ausschließliche Verwendung von CAVLC Entropie-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                   | `44`         | `00`            |
| **Scalable Baseline Profile** Das für Videokonferenzen sowie Überwachungs- und mobile Zwecke gedachte [SVC](https://en.wikipedia.org/wiki/SVC) Baseline Profile basiert auf dem AVC Constrained Baseline Profil. Der Basiscodierlayer im Stream wird mit hoher Qualität bereitgestellt, wobei eine Anzahl von sekundären Substreams alternative Formen desselben Videos für die Nutzung in verschiedenen eingeschränkten Umgebungen bieten. Diese können Kombinationen aus reduzierter Auflösung, reduzierter Bildrate oder erhöhten Kompressionsniveaus umfassen. | `53`         | `00`            |
| **Scalable Constrained Baseline Profile** Diese Profile wird hauptsächlich für Anwendungen der Echtzeitkommunikation verwendet. Es wird gegenwärtig nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API [um SVC zu erlauben](https://github.com/w3c/webrtc-svc) befindet sich in der Entwicklung.                                                                                                                                                                                                                                                   | `53`         | `04`            |
| **Scalable High Profile** Hauptsächlich zur Verwendung in Anwendungen für den Rundfunk und Streaming konzipiert. Die Basis (oder höchste Qualitäts-) Schicht muss dem AVC High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                | `56`         | `00`            |
| **Scalable Constrained High Profile** Ein Teil des Scalable High Profiles, das hauptsächlich für Echtzeitkommunikation konzipiert ist.                                                                                                                                                                                                                                                                                                                                                                                                                             | `56`         | `04`            |
| **Scalable High Intra Profile** Nur für Produktionsanwendungen wirklich nützlich, unterstützt dieses Profil nur All-Intra-Nutzung.                                                                                                                                                                                                                                                                                                                                                                                                                                 | `56`         | `20`            |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video mit zwei Darstellungen der Szene (linkes und rechtes Auge). Ansonsten bietet es die gleichen Funktionen wie das High Profile.                                                                                                                                                                                                                                                                                                                                                        | `80`         | `00`            |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten unter Verwendung sowohl zeitlicher als auch mvc Inter-View-Prädiktion. _Unterstützt keine_ Feldbilder oder makroblock-adaptive Frame-Field-Codierung.                                                                                                                                                                                                                                                                                                                                              | `76`         | `00`            |
| **Multiview Depth High Profile** Basierend auf dem High Profile, dem der Hauptunterm Strom entspricht. Die restlichen Unterm Ströme müssen dem Stereo High Profil entsprechen.                                                                                                                                                                                                                                                                                                                                                                                     | `8A`         | `00`            |

#### MPEG-4 Audio

Wenn der Wert eines Eintrags in der `codecs` Liste mit `mp4a` beginnt, sollte die Syntax des Wertes wie folgt aussehen:

```plain
mp4a.oo[.A]
```

Hier ist `oo` der zweistellige hexadezimale Object Type Indication, der angibt, welche Codec-Klasse für das Medium verwendet wird. Die OTIs werden von der [MP4 Registrierungsstelle](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/registered-types/object-types) führt. Ein spezieller Wert ist `40`; dieser zeigt an, dass die Medien MPEG-4 Audio (ISO/IEC 14496 Teil 3) sind. Um noch spezifischer zu werden, wird ein drittes Element – der Audio Object Type – hinzugefügt, wenn das OTI `40` ist, um den Typ auf einen bestimmten Subtyp von MPEG-4 einzugrenzen.

Der Audio Object Type wird als ein- oder zweistelliger _dezimaler_ Wert (im Gegensatz zu den meisten anderen Werten im `codecs` Parameter, die hexadezimal sind) angegeben. Zum Beispiel hat MPEG-4's AAC-LC die Audio-Objekttypnummer `2`, daher ist der vollständige `codecs` Wert, der AAC-LC repräsentiert, `mp4a.40.2`.

Daher kann ER AAC LC, dessen Audio-Objekttyp `17` ist, mit dem vollständigen `codecs` Wert `mp4a.40.17` angezeigt werden. Einstellige Werte können entweder als eine Ziffer (was die beste Wahl ist, da sie die weitestgehende Kompatibilität bietet) oder mit einer führenden Null, die sie auf zwei Ziffern aufpolstert, wie `mp4a.40.02`, angegeben werden.

> [!NOTE]
> Die Spezifikation verlangte ursprünglich, dass die Audio-Objekttypnummer im dritten Element nur eine Dezimalziffer sein sollte. Mit der Zeit haben jedoch Änderungen der Spezifikation den Bereich dieser Werte erheblich über die eine Dezimalziffer hinaus erweitert, sodass der dritte Parameter jetzt ein- oder zweistellig sein kann. Padding von Werten unter 10 mit einer führenden `0` ist optional. Ältere Implementierungen von MPEG-4 Codecs unterstützen möglicherweise keine zweistelligen Werte, daher wird die Kompatibilität maximiert, wenn eine Ziffer verwendet werden kann.

Die Audio-Objekttypen sind in ISO/IEC 14496-3 Unterabschnitt 1, Abschnitt 1.5.1 definiert. Die Tabelle unten bietet eine grundlegende Liste der Audio-Objekttypen und im Falle der häufigeren Objekttypen eine Liste der Profile, die sie unterstützen, aber Sie sollten auf die Spezifikation für Details verweisen, wenn Sie mehr über die inneren Funktionsweisen eines bestimmten MPEG-4 Audio Typs wissen müssen.

<table class="standard-table">
  <caption>
    MPEG-4 Audio-Objekttypen
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio-Objekttypen</th>
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
      <td>TwinVQ (Codierung für ultra-niedrige Bitraten)</td>
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
      <td>ER AAC Scalable (Error Resilient AAC Scalable)</td>
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
        ER AAC LD (Error Resilient AAC Low-Delay; verwendet für Zweirichtungs-
        Kommunikation)
      </td>
      <td>LD, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>24</code></td>
      <td>ER CELP (Error Resilient Code Excited Linear Prediction)</td>
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
      <td>PS (Parametric Stereo)</td>
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
      <td><code>45</code> und folgende</td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

Die grundlegende Form für einen WebM `codecs`-Parameter ist es, einen oder mehrere der vier WebM-Codecs namentlich aufzulisten und durch Kommas zu trennen. Die nachfolgende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                                  |
| -------------------------------- | ------------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video darin; kein Audio ist angegeben. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video darin.                           |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                         |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                           |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.            |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.              |

Die Strings `vp8.0` und `vp9.0` funktionieren auch, werden jedoch nicht empfohlen.

## Verwendung des `codecs`-Parameters

Den `codecs`-Parameter können Sie in wenigen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}} Element nutzen, wenn Sie ein {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element erstellen, um eine Gruppe von Optionen für den Browser festzulegen, aus denen beim Auswählen des im Element anzuzeigenden Medienformats gewählt wird.

Sie können den `codecs`-Parameter auch verwenden, wenn Sie einen MIME-Medientyp an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) übergeben; diese Methode gibt einen booleschen Wert zurück, der angibt, ob die Medien auf dem aktuellen Gerät voraussichtlich funktionieren.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}} Element, Kind der {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)
- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Erhalten des korrekten HTML-Codecs-Parameters für ein AV1-Video](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)

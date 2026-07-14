---
title: Codecs in gebräuchlichen Medientypen
slug: Web/Media/Guides/Formats/codecs_parameter
l10n:
  sourceCommit: 517b6108edc9a1eae8723f7f3ae434c1724d89ac
---

Auf fundamentaler Ebene können Sie den Typ einer Mediendatei durch die Angabe eines grundlegenden {{Glossary("MIME", "MIME")}}-Typs spezifizieren, wie `video/mp4` oder `audio/mpeg`. Viele Medientypen, insbesondere solche, die Videospuren unterstützen, profitieren jedoch von der Möglichkeit, das Format der darin enthaltenen Daten präziser zu beschreiben. Beispielsweise sagt die Beschreibung eines Videos in einer [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts über das genaue Format der darin enthaltenen Medien aus.

Aus diesem Grund kann der `codecs`-Parameter dem MIME-Typ hinzugefügt werden, der Medieninhalte beschreibt. Mit diesem Parameter können container-spezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Videocodecs, den Typ der verwendeten Audiospuren und so weiter umfassen.

Dieser Leitfaden untersucht kurz die Syntax des `codecs`-Parameters bei Medientypen und wie dieser mit dem MIME-Typ-String verwendet wird, um Details über die Inhalte von Audio- oder Videomedien über die Angabe des Containertyps hinaus zu liefern.

## Containerformat-MIME-Typen

Der MIME-Typ für ein Containerformat wird durch die Angabe des Medientyps (`audio`, `video`, etc.) ausgedrückt, gefolgt von einem Schrägstrich (`/`) und dem Format, das zur Aufnahme der Medien verwendet wird:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2)-Dateityp verwendet, wie ein MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format einst häufig im Web verwendet, ist es aber nicht mehr, da es ein Plugin erforderte.

Jedoch ist jeder dieser MIME-Typen vage. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können eine beliebige Anzahl von Profilen, Stufen und anderen Konfigurationsfaktoren haben. Aus diesem Grund möchten Sie möglicherweise den `codecs`-Parameter zusammen mit dem Medientyp angeben.

## Grundlegende Syntax

Sie können den `codecs`-Parameter zum Medientyp hinzufügen. Fügen Sie dazu ein Semikolon (`;`) hinzu, gefolgt von `codecs=` und dann dem String, der das Format der Dateiinhalte beschreibt. Einige Medientypen erlauben es nur, die Namen der zu verwendenden Codecs anzugeben, während andere es ermöglichen, auch verschiedene Einschränkungen dieser Codecs zu spezifizieren. Sie können mehrere Codecs angeben, indem Sie sie mit Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Datei mit einer [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Tonspur.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Datei mit [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8)-Video und/oder [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audio.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit [AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264)-Video (H.264), Main Profile, Level 4.2.

Wie bei jedem MIME-Typ-Parameter muss `codecs` in `codecs*` geändert werden (beachten Sie das Sternchen `*`), wenn eine der Eigenschaften des Codecs Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} prozentkodiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu kodieren; ebenso können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor kodierte Parameterliste zu dekodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Liste der Codecs jeden Codec einschließen, der für die Inhalte der Datei verwendet wird. Die Liste kann auch Codecs enthalten, die in der Datei nicht vorhanden sind.

## Codec-Optionen nach Container

Die folgenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [HEVC](#hevc_mp4_quicktime_matroska)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Mehrere der oben genannten Links führen zum gleichen Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und daher die gleiche Syntax teilen.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/)-Spezifikation, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam) definiert.

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Chromium-basierte Browser akzeptieren jeden Teil der optionalen Parameter (anstatt alle oder keine, wie von der Spezifikation gefordert).

Die Komponenten dieses Codec-Parameter-Strings sind in der nachstehenden Tabelle ausführlicher beschrieben. Jede Komponente hat eine feste Zeichenlänge; wenn der Wert kürzer als diese Länge ist, muss er mit führenden Nullen aufgefüllt werden.

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
                "Main" Profil; unterstützt YUV 4:2:0 oder monochrome Bitstreams mit einer Farbtiefe von 8 oder 10 Bit pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High" Profil fügt Unterstützung für 4:4:4 Chroma Subsampling hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional" Profil fügt Unterstützung für 4:2:2 Chroma Subsampling und 12-Bit pro Komponente Farbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die in das Format X.Y umgewandelt wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code>.
        Einzelheiten finden Sie in <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> der AV1-Spezifikation.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Tier-Indikator. Für das Haupt-Tier (<code>seq_tier</code> entspricht 0) ist dieser Buchstabe <code>M</code>.
        Für das Hohe-Tier (<code>seq_tier</code> ist 1) ist dieses Zeichen der Buchstabe <code>H</code>.
        Das Hohe-Tier ist nur für Level 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponententiefenbitzahl. Dieser Wert muss einer der Werte 8, 10 oder 12 sein; welche Werte gültig sind, variiert je nach Profil und anderen Eigenschaften.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Der einstellige Monochrome-Flag; wenn dieser Wert 0 ist, umfasst das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten vollständig in der Y-Ebene und sind daher monochromatisch.
        Einzelheiten zur Funktionsweise des YUV-Farbsystems finden Sie unter <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#yuv">YUV</a>.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> zeigt das Chroma-Subsampling als drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beide Einsen sind, ist die dritte der Wert von <code>chroma_sample_position</code>; sonst ist die dritte Ziffer immer 0.
          Dies kann zusammen mit der <code>M</code>-Komponente eingesetzt werden, um das Chroma-Subsampling-Format zu konstruieren:
        </p>
        <table class="standard-table">
          <caption>
            Ermittlung des Chroma-Subsampling-Formats
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
          Die dritte Ziffer in <code>CCC</code> zeigt die Chroma-Probenposition an, wobei ein Wert von 0 anzeigt, dass die Position unbekannt ist und separat während des Dekodierens bereitgestellt werden muss; ein Wert von 1 anzeigt, dass die Probenposition horizontal mit der Luma-Probe (0, 0) kollokiert ist; und ein Wert von 2 anzeigt, dass die Probenposition mit (0, 0) Luma kollokiert ist.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert gibt das verwendete Farbsystem des Mediums an.
        Beispielsweise wird für BT.2020/BT.2100-Farben, wie sie für HDR-Video verwendet werden, <code>09</code> angegeben.
        Die Information für diesen und jede der verbleibenden Komponenten ist im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Color Config Semantics-Abschnitt</a> der AV1-Spezifikation zu finden.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die verwendet wird, um das Gamma (für Anwender als "opto-electronische Transferfunktion" bezeichnet) aus der Quelle bis zur Anzeige zu übertragen.
        Zum Beispiel ist 10-Bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code>-Konstante wählt die Matrixkoeffizienten aus, die verwendet werden, um die Rot-, Blau- und Grünkanäle in Luma- und Chroma-Signale zu konvertieren.
        Beispielweise werden die Standardkoeffizienten, die für BT.709 verwendet werden, mit dem Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Eine einstellige Flagge, die anzeigt, ob es erlaubt sein soll, die volle Bandbreite der möglichen Werte für die Farbe zu nutzen (<code>1</code>) oder ob die Bandbreite auf die Werte beschränkt sein soll, die als legal für die spezifizierte Farbeinstellung betrachtet werden (d.h. die <strong>Studio-Swing-Darstellung</strong>).
        Der Standard ist 0 (Studio-Swing-Darstellung verwenden).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder ab `M` (Monochrom-Flag) sind optional; Sie können das Hinzufügen von Feldern jederzeit stoppen (aber keine Felder willkürlich auslassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiel-AV1-Code-Strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profil, Level 5.3, Main-Tier, 10 Bit pro Farbkomponente, 4:2:2 Chroma-Subsampling mit ITU-R BT.2100 Farbgrundfarben, Übertragungsmerkmalen und YCbCr-Farbmatrix. Die Studio-Swing-Darstellung ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main-Profil, Level 5.3, Main-Tier, 10 Bit pro Farbkomponente. Die verbleibenden Eigenschaften werden von den Standardwerten übernommen: 4:2:0 Chroma-Subsampling, BT.709 Farbgrundfarben, Übertragungsmerkmale und Matrixkoeffizienten. Studio-Swing-Darstellung.

### VP9

#### ISO Base Media File Format Syntax

Die Syntax des `codecs`-Parameters für VP9 ist in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/)-Spezifikation im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) definiert.

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Reihe von durch Punkte (`.`) getrennten zweistelligen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles ab `CC` (Chroma-Subsampling) ist optional, jedoch alles oder nichts. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Auf die Tabelle folgen einige Beispiele.

<table class="standard-table">
  <caption>
    WebM Codecs Parameter-Komponenten
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
          Ein vierstelliger Code, der angibt, welcher der möglichen Codecs beschrieben wird. Mögliche Werte sind:
        </p>
        <table class="standard-table">
          <caption>
            Vier-Codes für WebM-unterstützte Codecs
          </caption>
          <thead>
            <tr>
              <th scope="col">Vierer-Code</th>
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
          Die zweistellige Profilnummer, mit führenden Nullen aufgefüllt, wenn nötig, um genau zwei Ziffern zu sein.
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
                Nur 4:2:0 (Chroma subsampled sowohl horizontal als auch vertikal).
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
                Nur 4:2:0 (Chroma subsampled sowohl horizontal als auch vertikal).
                Unterstützt 8, 10 oder 12 Bit pro Farbkomponentenprobe.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bit pro Farbkomponentenprobe.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelliernummer.
        Die Levelliernummer ist eine Festkomma-Darstellung, wo die erste Ziffer die Einsenstelle ist und die zweite Ziffer die Zehntel darstellt.
        Beispielsweise ist Level 3 <code>30</code> und Level 6,1 ist <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die Tiefe der Helligkeits- und Farbwertkomponenten; erlaubte Werte sind 8, 10 und 12.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          Ein zweistelliger Wert, der angibt, welches Chroma-Subsampling-Format verwendet werden soll.
          Die folgende Tabelle listet zulässige Werte auf; siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> in unserem "Konzepte der digitalen Videotechnik"-Leitfaden für weitere Informationen zu diesem Thema und anderen.
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
                4:2:0 mit Chroma-Proben, die zwischen den Pixeln situiert sind
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 Chroma-Subsampling mit den Proben kolloziert mit Luma (0, 0)
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
                4:4:4 Chroma-Subsampling (jeder Pixel's Luminanz und Chrominanz werden beide beibehalten)
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
          Ein zweistelliger Ganzzahlwert, der angibt, welche der Farbgrundfarben aus Abschnitt 8.1 des Standards <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>.
          Diese Komponente und jede danach sind optional.
        </p>
        <p>Die möglichen Werte der Farbgrundfarbenkomponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Farbgrundfarben-Identifikatoren
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
                BT.709, sRGB, sYCC. BT.709 ist der Standard für High-Definition (HD) Fernsehen; sRGB ist der gebräuchlichste Farbraum für Computermonitore.
                Broadcast BT.709 verwendet eine 8-Bit-Farbtiefe mit dem legalen Bereich von 16 (schwarz) bis 235 (weiß).
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildmerkmale sind unbekannt oder sollen von der Anwendung bestimmt werden
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Reserviert für zukünftige Verwendung durch ITU oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>
                BT.470 System M, NTSC (Standard-Definition Fernsehen in den USA)
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
              <td><code>07</code></td>
              <td>
                {{Glossary("SMPTE", "SMPTE")}} 240M (historisch).
                <em>Funktionell identisch mit <code>6</code>.</em>
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
                Verwendet für Ultra-High-Definition (4K) High Dynamic Range (HDR) Video, diese haben einen sehr großen Farbgamut und unterstützen 10-Bit und 12-Bit Farbkomponententiefen.
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
                Beschreibt den Referenzprojektor und die Umgebungsbedingungen, die ein konsistentes Kinoerlebnis bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digitale Quellverarbeitung: Farbverarbeitung für D-Cinema).
                Richtlinie zur Codierungsdekodierung von Farbsignalen für digitale Filme.
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
        Ein zweistelliger Ganzzahlwert, der die
        <code>transferCharacteristics</code> für das Video angibt.
        Dieser Wert stammt aus Abschnitt 8.2 von <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und zeigt die zu verwendenden Übertragungsmerkmale bei der Anpassung der decodierten Farbe an das Ziel.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code>-Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> Spezifikation.
        Dieser Wert gibt an, welche Koefeeffitzienzgruppe verwendet werden sollen, um von den ursprünglichen Rot-, Blau- und Grünprimärwerten zu den Luma- und Chromasignalen umzuwandeln.
        Diese Koeffizienten werden wiederum mit den in demselben Abschnitt gefundenen Gleichungen verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob der Schwarzwert und der Farbbereich jeder Farbkomponente auf den legalen Bereich beschränkt werden soll.
        Für 8-Bit-Farbproben ist der legale Bereich 16-235.
        Ein Wert von <code>00</code> gibt an, dass diese Beschränkungen durchgesetzt werden sollten, während ein Wert von <code>01</code> die volle Bandbreite aller Werte für jede Komponente ermöglicht, auch wenn die resultierende Farbe für das Farbsystem über den Rand hinausgeht.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9-Video, Profil 2 Level 1.0, mit 10-Bit YUV-Inhalten unter Verwendung von 4:2:0 Chroma-Subsampling, BT.2020-Grundfarben, ST 2084 EOTF (HDR SMPTE), BT.2020-Nicht-Konstanz-Luminanz-Farbmatrix und Vollbereichs-Chroma- und Luma-Kodierung. Das Audio ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, teilen die gleiche Syntax für den `codecs`-Parameter. Diese Medientypen umfassen [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (und, in der Tat, das [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp). Sowohl Video- als auch Audiotracks können mit dem `codecs`-Parameter mit den folgenden MIME-Typen beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien, die in MPEG-4 eingekapselt sind                                                        |

Jeder durch den `codecs`-Parameter beschriebene Codec kann entweder als Containername (`3gp`, `mp4`, `quicktime`, usw.) oder als Containername plus zusätzliche Parameter spezifiziert werden, um den Codec und seine Konfiguration näher zu bestimmen. Jeder Eintrag in der Codec-Liste kann eine Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt werden.

Die Syntax des Wertes von `codecs` variiert je nach Codec; es beginnt jedoch immer mit dem vierstelligen, Case-sensitiven Sample-Entry-Code des Codecs. Einige Codecs fügen einen Punktseparator (`.`) hinzu, dem zusätzliche Parameter folgen, wie z.B. eine Object Type Indication (OTI) oder Details zum Codecprofil. Bei den meisten Codecs, die ein OTI verwenden, besteht der Wert aus einer zwei-stelligen hexadezimalen Zahl; jedoch verwendet AVC (H.264) sechs hexadezimale Ziffern, um das [Profil](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) zu identifizieren.

So sehen die Syntaxen der unterstützten Codecs aus:

- `cccc[.pp]*` (Generisches ISO BMFF)
  - : Wo `cccc` die vierstellige ID für den Codec und `pp` der Ort ist, an dem null oder mehr zweistellig codierte Eigenschaftswerte hingehen.
- `mp4a.oo[.A]` (MPEG-4-Audio)
  - : Wo `oo` der Object Type Indication-Wert ist, der die Inhalte des Mediums genauer beschreibt und `A` der einstellige _Audio_-OTI ist. Die möglichen Werte für das OTI finden Sie auf der MP4-Registrierungsstelle-Website [Object Types Seite](https://mp4ra.org/registered-types/object-types). Beispielsweise ist AAC-LC-Audio in einer MP4-Datei `mp4a.40.2`. Für weitere Details siehe [MPEG-4-Audio](#mpeg-4-audio).
- `mp4v.oo[.V]` (MPEG-4-Video)
  - : Hier ist `oo` wiederum das OTI, das den Inhalt genauer beschreibt, während `V` der einstellige _Video_-OTI ist.
- `avc1[.PPCCLL]` (AVC-Video)
  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), die Flags (`CC`) und die Stufe (`LL`) spezifizieren. Siehe [AVC-Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint-Set-Flags-Byte besteht aus einstelligen booleanischen Flags, wobei das bedeutendste Bit als Flag 0 (oder `constraint_set0_flag`, in einigen Ressourcen) bezeichnet wird, und jedes nachfolgende Bit um eins höher nummeriert ist. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bits _müssen_ null sein. Die Bedeutungen der Flags variieren je nach verwendetem Profil.

    Die Stufe ist eine Festkommazahl; ein Wert von `14` (dezimal 20) bedeutet Level 2.0, während ein Wert von `3D` (dezimal 61) Level 6.1 bedeutet. Im Allgemeinen gilt: je höher die Stufenummer, desto mehr Bandbreite wird der Stream verwenden und desto höhere maximale Videodimensionen werden unterstützt.

- `avc3[.PPCCLL]` (Variable Resolution AVC)
  - : Die `avc3`-Codec-Parameter haben die gleiche Syntax wie die `avc1`-Codec-Parameter.

#### AVC-Profile

Die folgenden sind die AVC-Profile und ihre Profilnummern zur Verwendung im `codecs`-Parameter sowie der Wert, den Sie für die Constraints-Komponente `CC` angeben müssen.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Nummer (Hex) | Constraints-Byte |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------- |
| **Constrained Baseline Profile (CBP)** CBP ist hauptsächlich eine Lösung für Szenarien, in denen Ressourcen begrenzt sind oder die Ressourcennutzung zur Minimierung der Wahrscheinlichkeit, dass die Medien schlecht funktionieren, kontrolliert werden müssen.                                                                                                                                                                                                                                                                                                                                                        | `42`         | `40`             |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit verbesserten Datenverlustschutz- und Wiederherstellungsfähigkeiten. Dies wird nicht mehr so häufig verwendet wie vor der Einführung von CBP. Alle CBP-Streams werden ebenfalls als BP-Streams betrachtet.                                                                                                                                                                                                                                                                                                                                                         | `42`         | `00`             |
| **Extended Profile (XP)** Entwickelt für das Streaming von Video über das Netzwerk, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen der Datenrobustheit und Stream-Wechselmöglichkeiten.                                                                                                                                                                                                                                                                                                                                                                                                                    | `58`         | `00`             |
| **Main Profile (MP)** Das Profil, das für Standard-Definition Digitalfernsehen im MPEG-4-Format verwendet wird. _Nicht_ verwendet für High-Definition-Fernsehübertragungen. Die Bedeutung dieses Profils hat seit der Einführung des High Profile, das 2004 für HDTV-Zwecke hinzugefügt wurde, abgenommen.                                                                                                                                                                                                                                                                                                              | `4D`         | `00`             |
| **High Profile (HiP)** Derzeit ist HiP das Hauptprofil für die Ausstrahlung und für Discs von HD-Videos; es wird sowohl für HDTV-Übertragungen als auch für Blu-Ray-Videos verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                   | `64`         | `00`             |
| **Progressive High Profile (PHiP)** Essenziell High Profile ohne Unterstützung für field coding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `64`         | `08`             |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bi-predictive slices ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `64`         | `0C`             |
| **High 10 Profile (Hi10P)** High Profile, jedoch mit Unterstützung für bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `6E`         | `00`             |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P durch die Unterstützung von 4:2:2 Chroma-Subsampling sowie bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `7A`         | `00`             |
| **High 4:4:4 Predictive Profile (Hi444PP)** Zusätzlich zu den in Hi422P enthaltenen Funktionen bietet Hi444PP Unterstützung für 4:4:4 Chroma-Subsampling (bei dem keine Farbinformationen verworfen werden). Ebenfalls enthalten ist Unterstützung für bis zu 14 Bit pro Farbbestandteil und eine effiziente verlustfreie Regionscodierung. Es besteht die Möglichkeit, jedes Bild als separate Farbkanäle zu codieren (d.h. die Daten jeder Farbe werden gespeichert, als ob es ein einzelnes, monochromes Bild wäre).                                                                                                 | `F4`         | `00`             |
| **High 10 Intra Profile** High 10 beschränkt auf alle Intra-Frame-Verwendung. Hauptsächlich für professionelle Anwendungen verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `6E`         | `10`             |
| **High 4:2:2 Intra Profile** Das Hi422-Profil bei ausschließlicher Verwendung von intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `7A`         | `10`             |
| **High 4:4:4 Intra Profile** Das High 4:4:4-Profil beschränkt auf die Verwendung von nur intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `F4`         | `10`             |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4-Profil beschränkt auf die Verwendung von nur Intra und CAVLC-Entropiecoding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `2C`         | `10`             |
| **Scalable Baseline Profile** Gedacht für die Verwendung bei Videokonferenzen sowie Überwachungs- und mobilen Anwendungsbereichen, basiert das [SVC](https://en.wikipedia.org/wiki/SVC) Baseline-Profil auf dem Constrained Baseline-Profil von AVC. Die Basisschicht innerhalb des Streams wird auf hohem Qualitätsniveau bereitgestellt, zusammen mit einer Anzahl von sekundären Substreams, die alternative Formen des selben Videos für verschiedene eingeschränkte Umgebungen bereitstellen, einschließlich einer Kombination aus reduzierter Auflösung, reduzierter Bildrate oder erhöhter Komprimierungsstufen. | `53`         | `00`             |
| **Scalable Constrained Baseline Profile** Hauptsächlich für Echtzeit-Kommunikationsanwendungen verwendet. Noch nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API [für die Unterstützung von SVC](https://github.com/w3c/webrtc-svc) ist in der Entwicklung.                                                                                                                                                                                                                                                                                                                                            | `53`         | `04`             |
| **Scalable High Profile** Gedacht hauptsächlich für Anwendungen im Broadcast und Streaming. Die Basisschicht (oder höchste Qualitätsebene) muss mit dem AVC High Profile übereinstimmen.                                                                                                                                                                                                                                                                                                                                                                                                                                | `56`         | `00`             |
| **Scalable Constrained High Profile** Eine Teilmenge des Scalable High Profile, die hauptsächlich für Echtzeit-Kommunikation ausgelegt ist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `56`         | `04`             |
| **Scalable High Intra Profile** Hauptsächlich nur für die Produktion nützlich, unterstützt dieses Profil nur ausschließlich die Verwendung von Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `56`         | `10`             |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video mit zwei Renderings der Szene (linkes Auge und rechtes Auge). Andernfalls bietet es die gleichen Funktionen wie das High Profile.                                                                                                                                                                                                                                                                                                                                                                                                         | `80`         | `00`             |
| **Multiview High Profile** Unterstützt zwei oder mehr Sichtweisen unter Verwendung von sowohl temporaler als auch MVC-Inter-Prediktion. _Unterstützt keine_ Feldbilder oder Macroblock-adaptive Frame-Field-Coding.                                                                                                                                                                                                                                                                                                                                                                                                     | `76`         | `00`             |
| **Multiview Depth High Profile** Basiert auf dem High Profile, an das der Hauptsubstream gebunden sein muss. Die verbleibenden Substreams müssen dem Stereo High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                                   | `8A`         | `00`             |

#### MPEG-4-Audio

Wenn der Wert eines Eintrages in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Wertes sein:

```plain
mp4a.oo[.A]
```

Hier ist `oo` die zwei-stellige hexadezimale Object Type Indication, die die Medienklasse spezifiziert, die für die Medien verwendet wird. Die OTIs werden von der [MP4-Registrationsstelle](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/registered-types/object-types) führt. Ein besonderer Wert ist `40`; dieser Wert gibt an, dass die Medien MPEG-4-Audio (ISO/IEC 14496 Teil 3) sind. Um noch genauer zu sein, wird eine dritte Komponente — der Audio Object Type — für OTI `40` hinzugefügt, um den Typ weiter auf einen bestimmten Subtyp von MPEG-4 einzugrenzen.

Der Audio Object Type wird als eine ein- oder zweistellige _Dezimal_-Zahl spezifiziert (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die das Hexadezimalformat verwenden). Beispielweise hat MPEG-4's AAC-LC eine Audio-Objekttypnummer von `2`, sodass der vollständige `codecs`-Wert, der AAC-LC repräsentiert, `mp4a.40.2` ist.

Demgemäß kann ER AAC LC, dessen Audio Object Type 17 ist, mit dem vollständigen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einstellige Werte können entweder als eine Ziffer gegeben werden (was die beste Wahl ist, da sie breiter kompatibel sein wird) oder mit einer führenden Null aufgefüllt werden, sodass sie zwei Ziffern sind, wie `mp4a.40.02`.

> [!NOTE]
> Die Spezifikation forderte ursprünglich, dass die Audio Object Type-Nummer in der dritten Komponente nur eine dezimale Ziffer haben darf. Erweiterungen der Spezifikation über die Zeit hinweg haben den Wertebereich jedoch weit über eine dezimale Ziffer hinaus ausgedehnt, sodass der dritte Parameter nun entweder ein oder zwei Ziffern haben darf. Das Auffüllen von Werten unter 10 mit einer führenden Null ist optional. Ältere Implementierungen von MPEG-4-Codecs unterstützen möglicherweise keine zweistelligen Werte, sodass die Verwendung eines einstelligen Werts, wenn möglich, die Kompatibilität maximiert.

Die Audio-Objekttypen sind in ISO/IEC 14496-3 Unterteilung 1, Abschnitt 1.5.1 festgelegt. Die folgende Tabelle bietet eine grundlegende Liste der Audio-Objekttypen und in einigen der häufigeren Objekttypen sind unterstützende Profile aufgeführt. Sie sollten jedoch auf die Spezifikation verweisen, wenn Sie mehr über die Funktionsweise eines bestimmten MPEG-4-Audiotyps erfahren möchten.

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
      <td>TwinVQ (Codieren für ultra-niedrige Bitraten)</td>
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
        ER AAC LD (Error Resilient AAC Low-Delay; verwenden bei Zwei-Wege
        Kommunikation)
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
      <td>SLS Nicht-Kern (Scalable Lossless Non-core)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>39</code></td>
      <td>ER AAC ELD (Error Resilient AAC Enhanced Low Delay)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>40</code></td>
      <td>SMR Einfach (Symbolic Music Representation Simple)</td>
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

#### Opus

Opus-Audio in einem ISO BMFF-Container verwendet `Opus` als Sample-Eintrag und `codecs`-Wert. Der Wert ist Case-sensitiv. Obwohl die MP4-Registrierungsbehörde die Object Type Indication `0xAD` an Opus vergibt, definiert die [Opus-Kapselungsspezifikation](https://opus-codec.org/docs/opus_in_isobmff.html) keinen `MP4AudioSampleEntry`, der diesen Wert verwendet, daher wird `mp4a.ad` nicht verwendet.

```plain
audio/mp4;codecs=Opus
video/mp4;codecs=avc1.4D401E,Opus
```

### HEVC: MP4, Quicktime, Matroska

Der [High Efficiency Video Coding](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265)-Codec, auch bekannt als H.265 und MPEG-H Teil 2, kann in die [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (`video/mp4`), [Quicktime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime) (`video/quicktime`) und [Matroska](https://en.wikipedia.org/wiki/Matroska) (`video/matroska`)-Container einbezogen werden.

Die Verwendung von HEVC wird im Allgemeinen mithilfe eines unterstützenden MIME-Typs mit dem angehängten `codecs`-Parameter beschrieben; Syntaxbeispiele sind wie folgt:

```plain
video/mp4;codecs=hvc1.1.6.L186.B0,mp4a.40.2
video/mp4;codecs=hvc1.1.6.L186.B0,Opus
video/mp4;codecs=hev1.1.6.L186.B0,mp4a.40.2
video/mp4;codecs=hev1.1.6.L186.B0,Opus
```

Die Syntaxen der unterstützten Codecs sehen wie folgt aus:

- `hvc1[.A.B.C.D]` (HEVC Video)
  - : Der Wert beginnt mit dem vierstelligen Bezeichner des Codecs (`hvc1`), gefolgt von vier oder mehr Werten, die durch Punkte (`.`) getrennt sind:
    - `A`
      - : Der **`general_profile_space`**. Dies wird als ein oder zwei Zeichen codiert:
        - Das erste ist ein Buchstabe `A`, `B` oder `C`, der `general_profile_space` `1`, `2` oder `3` repräsentiert, oder kein Buchstabe, der `general_profile_space` `0` repräsentiert.
        - Das zweite ist eine Dezimalnummer, die den `general_profile_idc` darstellt.
          > [!NOTE]
          > In den obigen Beispielen bedeutet der Wert `1`, dass `general_profile_space === 0` (kein Buchstabe) und `general_profile_idc === 1`.
    - `B`
      - : Ein 32-Bit-Wert, der ein oder mehrere **Allgemeine Profilkompatibilitäts-Flags** (`general_profile_compatibility_flag`) darstellt. Codiert in hexadezimalem Format (führende Nullen können weggelassen werden) und in umgekehrter Bit-Reihenfolge von den bedeutendsten bis zu den unbedeutendsten. Die Werte können von `31` (bedeutendsten) bis `0` (unbedeutendsten) reichen und werden in [ISO/IEC 23008-2](https://www.iso.org/standard/90502.html) spezifiziert.

        > [!NOTE]
        > In den obigen Beispielen bedeutet der Wert `6`, dass `general_profile_compatibility_flag === 6`.

    - `C`
      - : Das **`general_tier_flag`**, codiert als `L` (`general_tier_flag === 0`) oder `H` (`general_tier_flag === 1`), gefolgt vom **`general_level_idc`**, codiert als Dezimalzahl.

        > [!NOTE]
        > In den obigen Beispielen bedeutet der Wert `L186`, dass `general_tier_flag === 0`, gefolgt von `general_level_idc === 186`.

    - `D`
      - : Ein oder mehrere 6-Byte **Constraint Flags**. Beachten Sie, dass jedes Flag als hexadezimale Zahl codiert wird und durch einen zusätzlichen Punkt getrennt wird; Anhängende Bytes, die null sind, können weggelassen werden.

        > [!NOTE]
        > In den obigen Beispielen ist nur ein Constraint-Flag vorhanden — `B0`.

- `hev1[.A.B.C.D]` (Variable Resolution HEVC)
  - : Die `hev1`-Codec-Parameter haben die gleiche Syntax wie die `hvc1`-Codec-Parameter.

### WebM

Die Grundform für einen `codecs`-Parameter von WebM besteht darin, einen oder mehrere der vier WebM-Codecs durch Kommas getrennt nach Name aufzuführen. Die nachstehende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                               |
| -------------------------------- | ---------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video; kein Audio ist spezifiziert. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video.                              |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                      |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                        |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.         |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.           |

Die Zeichenfolgen `vp8.0` und `vp9.0` funktionieren ebenfalls, werden jedoch nicht empfohlen.

## Verwendung des codecs-Parameters

Sie können den `codecs`-Parameter in einigen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}}-Element verwenden, um ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element zu erstellen, um eine Gruppe von Optionen festzulegen, aus denen der Browser bei der Auswahl des Medienformats auswählen kann, das dem Benutzer im Element präsentiert werden soll.

Sie können den codecs-Parameter auch verwenden, wenn Sie einen MIME-Medientyp an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) übergeben; diese Methode gibt ein Boolean zurück, das angibt, ob das Medium auf dem aktuellen Gerät wahrscheinlich funktioniert oder nicht.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, Unterelement der {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Den korrekten HTML-Codecs-Parameter für ein AV1-Video erhalten](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)
- [High Efficiency Video Coding](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding) auf Wikipedia

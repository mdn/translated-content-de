---
title: Codecs in üblichen Medientypen
slug: Web/Media/Guides/Formats/codecs_parameter
l10n:
  sourceCommit: 8d04337d86d4aafa50b7798995a6b113ea7860e4
---

Auf fundamentaler Ebene können Sie den Typ einer Mediendatei mit einem grundlegenden {{Glossary("MIME", "MIME")}}-Typ angeben, wie z.B. `video/mp4` oder `audio/mpeg`. Viele Medientypen – insbesondere die, die Videospuren unterstützen – profitieren jedoch von der Möglichkeit, das Format der enthaltenen Daten genauer zu beschreiben. Beispielsweise sagt die Beschreibung eines Videos in einer [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts über das tatsächliche Format des enthaltenen Mediums aus.

Aus diesem Grund kann der Parameter `codecs` zum MIME-Typ hinzugefügt werden, der den Medieninhalt beschreibt. Damit können container-spezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Video-Codecs, den für die Audiospuren verwendeten Typ usw. umfassen.

Dieser Leitfaden untersucht kurz die Syntax des `codecs`-Parameters des Medientyps und wie er zusammen mit dem MIME-Typ-String verwendet wird, um Details über den Inhalt von Audio- oder Videomedien anzugeben, die über die Angabe des Containertyps hinausgehen.

## Containerformat MIME-Typen

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem der Medientyp (`audio`, `video`, etc.), dann ein Schrägstrich (`/`) und schließlich das zur Verwaltung der Medien verwendete Format angegeben wird:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2)-Dateityp, wie z.B. MP3, verwendet.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format einst häufig im Web verwendet, ist es aber nicht mehr, da es ein Plugin erforderte, um es zu verwenden.

Jedoch ist jeder dieser MIME-Typen ungenau. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können beliebige Profile, Ebenen und andere Konfigurationsparameter haben. Aus diesem Grund sollten Sie den `codecs`-Parameter zusammen mit dem Medientyp verwenden.

## Grundlegende Syntax

Sie können den `codecs`-Parameter zum Medientyp hinzufügen. Dafür hängen Sie ein Semikolon (`;`) an, gefolgt von `codecs=` und dann dem String, der das Format des Dateiinhalts beschreibt. Einige Medientypen erlauben nur die Angabe der zu verwendenden Codec-Namen, während andere die Angabe verschiedener Einschränkungen für diese Codecs ermöglichen. Sie können mehrere Codecs angeben, indem Sie sie mit Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Datei, die eine [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audiospur enthält.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Datei, die [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8)-Video und/oder [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audio enthält.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei, die [AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) (H.264) Video, Main Profile, Level 4.2 enthält.

Wie bei jedem MIME-Typ-Parameter muss `codecs` in `codecs*` geändert werden (bemerken Sie das Sternzeichen `*`), wenn eine der Eigenschaften des Codecs Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} prozentkodiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu kodieren; ähnlich können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor kodierte Parameterliste zu decodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Codec-Liste alle Codecs enthalten, die für den Inhalt der Datei verwendet werden. Die Liste kann auch Codecs enthalten, die in der Datei nicht vorhanden sind.

## Codec-Optionen nach Container

Die folgenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [HEVC](#hevc_mp4_quicktime_matroska)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Mehrere der obigen Links führen zum selben Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren, sodass sie dieselbe Syntax teilen.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der Spezifikation [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam) definiert.

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Chromium-basierte Browser akzeptieren jede Teilmenge der optionalen Parameter (weniger als alle oder keine, wie es die Spezifikation erfordert).

Die Komponenten des Codec-Parameter-Strings werden in der nachstehenden Tabelle näher beschrieben. Jede Komponente ist auf eine feste Anzahl von Zeichen festgelegt; wenn der Wert geringer als diese Länge ist, muss er mit führenden Nullen aufgefüllt werden.

<table class="standard-table">
  <caption>
    AV1-Codecs-Parameter-String-Komponenten
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
            AV1-Profilnummern
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
                "Professional" Profil fügt Unterstützung für 4:2:2 Chroma-Subsampling und 12 Bit pro Komponentenfarbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die in das Level-Format X.Y konvertiert wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code> ist.
        Details finden Sie unter <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Tier-Indikator. Für die Main-Tier (<code>seq_tier</code> ist 0) ist dieser Charakter der Buchstabe <code>M</code>.
        Für die High-Tier (<code>seq_tier</code> ist 1) ist dieser Charakter der Buchstabe <code>H</code>.
        Die High-Tier ist nur für Level 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponenten-Bittiefe. Dieser Wert muss eines von 8, 10 oder 12 sein; welche Werte gültig sind, hängt vom Profil und anderen Eigenschaften ab.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Das einstellige Monochrom-Flag; wenn dies 0 ist, enthält das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten vollständig in der Y-Ebene und daher monochromatisch.
        Details zur Funktionsweise des YUV-Farbsystems finden Sie unter <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#yuv">YUV</a>.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> gibt das Chroma-Subsampling in drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beide 1 sind, ist die dritte der Wert von <code>chroma_sample_position</code>; andernfalls ist die dritte Ziffer immer 0.
          Dies, zusammen mit der <code>M</code>-Komponente, kann verwendet werden, um das Chroma-Subsampling-Format zu konstruieren:
        </p>
        <table class="standard-table">
          <caption>
            Bestimmung des Chroma-Subsampling-Formats
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
          Die dritte Ziffer in <code>CCC</code> gibt die Chroma-Probenposition an. Ein Wert von 0 zeigt an, dass die Position unbekannt ist und separat beim Decodieren bereitgestellt werden muss; ein Wert von 1 zeigt an, dass die Probenposition horizontal mit der (0, 0) Luminanzprobe abgeglichen ist; und ein Wert von 2 gibt an, dass die Probenposition mit der (0, 0) Luma abgeglichen ist.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige Wert für <code>color_primaries</code> zeigt das Farbsystem an, das von den Medien verwendet wird.
        Zum Beispiel ist BT.2020/BT.2100 Farbe, wie sie für HDR videos verwendet wird, <code>09</code>.
        Die Informationen dazu – und zu jedem der übrigen Komponenten – finden sich im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Color Config Semantics Abschnitt</a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code> -Wert. Dieser Wert definiert die Funktion, die zur Abbildung des Gamma (bekannt als "opto-elektronische Transferfunktion" in technischem Jargon) von der Quelle auf die Anzeige verwendet wird.
        Zum Beispiel ist 10-bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code> -Konstante wählt die Matrixkoeffizienten aus, die verwendet werden, um die roten, blauen und grünen Kanäle in Luminanz- und Chromasignale umzuwandeln.
        Zum Beispiel werden die Standardkoeffizienten, die für BT.709 verwendet werden, durch den Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Ein einstelliger Indikator, ob die Farbe den vollen Bereich der möglichen Werte nutzen sollte (<code>1</code>), oder auf diejenigen Werte beschränkt werden sollte, die für die angegebene Farbkonfiguration als zulässig angesehen werden (das heißt die <strong>Studio-Swing-Darstellung</strong>).
        Der Standard ist 0 (Studio-Swing-Darstellung verwenden).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder von `M` (Monochrom-Flag) an sind optional; Sie können die Aufnahme von Feldern jederzeit beenden (aber nicht willkürlich Felder auslassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiel-AV1-Codecs-Strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profile, Level 5.3, Main Tier, 10 Bit pro Farbkomponente, 4:2:2-Chroma-Subsampling mit ITU-R BT.2100-Primärfarben, Transfercharakteristika und YCbCr-Matrix. Die Studio-Swing-Darstellung ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profile, Level 5.3, Main Tier, 10 Bit pro Farbkomponente. Die übrigen Eigenschaften werden aus den Standardwerten übernommen: 4:2:0-Chroma-Subsampling, BT.709-Primärfarben, Transfercharakteristika und Matrixkoeffizienten. Studio-Swing-Darstellung.

### VP9

#### ISO Base Media File Format-Syntax

Die Syntax des `codecs`-Parameters für VP9 ist in der Spezifikation [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) definiert.

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Folge von durch Punkt (`.`) getrennten zweistelligen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles ab `CC` (Chroma-Subsampling) ist optional, aber alles oder nichts. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Nach der Tabelle folgen einige Beispiele.

<table class="standard-table">
  <caption>
    WebM-Codecs-Parameter-Komponenten
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
          Potenzielle Werte sind:
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
          Die zweistellige Profilnummer, mit führenden Nullen aufgefüllt, falls erforderlich, um genau zwei Stellen zu haben.
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
                Nur 4:2:0 (Chroma horizontal und vertikal unterabtastet).
                Ermöglicht nur 8 Bit pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Ermöglicht nur 8 Bit pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Nur 4:2:0 (Chroma horizontal und vertikal unterabtastet).
                Unterstützt 8, 10 oder 12 Bit pro Farbbeispiel-Komponente.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bit pro Farbbeispiel-Komponente.
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
        Die Levelnummer ist eine Festkommanotation, bei der die erste Ziffer die Einerziffer ist und die zweite Ziffer die Zehntel darstellt.
        Zum Beispiel ist Level 3 <code>30</code> und Level 6.1 ist <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die Bittiefe der Luma und Farbkomponentenwerte; zulässige Werte sind 8, 10 und 12.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          Ein zweistelliger Wert, der angibt, welches Chroma-Subsampling-Format verwendet werden soll.
          Die folgende Tabelle listet erlaubte Werte auf; siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> in unserem „Digitale Video Konzepte“-Leitfaden für weitere Informationen zu diesem Thema und anderen.
        </p>
        <table class="standard-table">
          <caption>
            WebM-Chroma-Subsampling-Identifikatoren
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
              <td>4:2:0 mit den Chroma-Proben zwischen den Pixeln positioniert</td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>4:2:0-Chroma-Subsampling, bei dem die Proben mit Luma (0, 0) zusammenfallen</td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>4:2:2-Chroma-Subsampling (4 der 4 horizontalen Pixel-Luminanz werden verwendet)</td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>4:4:4-Chroma-Subsampling (sowohl Luminanz als auch Chrominanz jedes Pixels werden beibehalten)</td>
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
          Ein zweistelliger Ganzzahlwert, der angibt, welche der primären Farben in Abschnitt 8.1 des <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>-Standards verwendet werden.
          Diese Komponente und jede nachfolgende Komponente ist optional.
        </p>
        <p>Die möglichen Werte der Farbbereiche-Komponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Farbbereich-Identifikatoren
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
              <td><em>Reserviert für zukünftige Nutzung durch ITU oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 ist der Standard für High-Definition (HD) Fernsehen; sRGB ist der am häufigsten verwendete Farbraum für Computermonitore.
                Broadcast BT.709 verwendet eine 8-Bit-Farbtiefe, wobei der legale Bereich von 16 (schwarz) bis 235 (weiß) reicht.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildcharakteristiken sind unbekannt oder sollen durch die Anwendung bestimmt werden
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Reserviert für zukünftige Nutzung durch ITU oder ISO/IEC</em></td>
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
              <td>Allgemeiner Film</td>
            </tr>
            <tr>
              <td><code>09</code></td>
              <td>
                BT.2020; BT.2100.
                Wird für Ultra-High-Definition (4K) High Dynamic Range (HDR) Video verwendet, diese haben einen sehr weiten Farbraum {{Glossary("gamut", "Gamut")}} und unterstützen 10-Bit- und 12-Bit-Farbkomponententiefe.
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
                SMPTE RP 431 (D-Cinema-Qualität: Referenzprojektor und -umgebung).
                Beschreibt die Referenzprojektor- und -umgebungsbedingungen, die ein konsistentes Filmpräsentationserlebnis gewährleisten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digitale Quellenverarbeitung: Farbverarbeitung für D-Cinema).
                Technische Richtlinie zur Dekodierung von Farbsignalen für digitale Filme.
              </td>
            </tr>
            <tr>
              <td><code>13</code> – <code>21</code></td>
              <td><em>Reserviert für zukünftige Nutzung durch ITU-T oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>22</code></td>
              <td>EBU Tech 3213-E</td>
            </tr>
            <tr>
              <td><code>23</code> – <code>255</code></td>
              <td><em>Reserviert für zukünftige Nutzung durch ITU-T oder ISO/IEC</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Eine zweistellige Ganzzahl, die die
        <code>transferCharacteristics</code> für das Video angibt.
        Dieser Wert stammt aus Abschnitt 8.2 von <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und gibt die Transfercharakteristika an, die verwendet werden sollen, wenn die decodierte Farbe an das Renderziel angepasst wird.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code>-Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>-Spezifikation.
        Dieser Wert gibt an, welches Satz von Koeffizienten bei der Umwandlung von den nativen roten, blauen und grünen Primärfarben zu den Luma- und Chromasignalen verwendet werden soll.
        Diese Koeffizienten werden wiederum mit den in diesem Abschnitt definierten Gleichungen verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob die Schwarzwert- und Farbbereiche jeder Farbkomponente auf den legalen Bereich beschränkt werden sollen.
        Für 8-Bit-Farbproben liegt der legale Bereich zwischen 16 und 235.
        Ein Wert von <code>00</code> gibt an, dass diese Einschränkungen durchgesetzt werden sollten, während ein Wert von <code>01</code> die volle Bandbreite der möglichen Werte für jede Komponente erlaubt, selbst wenn die resultierende Farbe außerhalb der Grenzen des Farbsystems liegt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9-Video, Profil 2 Level 1.0, mit 10-Bit-YUV-Inhalt unter Verwendung von 4:2:0-Chroma-Subsampling, BT.2020-Farbräumen, ST 2084 EOTF (HDR SMPTE), BT.2020-nicht-konstanter Luminanzfarbenmatrix und voller Reichweite von Chroma und Luma-Kodierung. Das Audio ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, teilen die gleiche Syntax für den `codecs`-Parameter. Diese Medientypen umfassen [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (und tatsächlich auch das [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp). Sowohl Video- als auch Audiospuren können mit den folgenden MIME-Typen mithilfe des `codecs`-Parameters beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien, die in MPEG-4 gekapselt sind                                                           |

Jeder durch den `codecs`-Parameter beschriebene Codec kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime` usw.) oder als Containername plus zusätzliche Parameter zur Angabe des Codecs und seiner Konfiguration angegeben werden. Jeder Eintrag in der Codecs-Liste kann eine beliebige Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; bei allen beginnt er jedoch immer mit dem vierstelligen Bezeichner des Codecs, einem Punkt-Trenner (`.`), gefolgt vom Object Type Indication (OTI)-Wert für das spezifische Datenformat. Für die meisten Codecs ist das OTI eine zweistellige hexadezimale Zahl; für [AVC (H.264)](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) sind es jedoch sechs hexadezimale Ziffern.

Daher sehen die Syntaxen für jeden der unterstützten Codecs wie folgt aus:

- `cccc[.pp]*` (Generisches ISO BMFF)
  - : Wo `cccc` der vierstellige ID-Code des Codecs ist und `pp` der Platz für null oder mehr zweistellige kodierte Eigenschaftswerte ist.
- `mp4a.oo[.A]` (MPEG-4-Audio)
  - : Wo `oo` der Object Type Indication-Wert ist, der den Inhalt der Medien präziser beschreibt und `A` der einstellige _Audio_-OTI ist. Die möglichen Werte für das OTI finden Sie auf der [Objekttypen-Seite der MP4 Registration Authority](https://mp4ra.org/registered-types/object-types). Zum Beispiel ist Opus-Audio in einer MP4-Datei `mp4a.ad`. Weitere Informationen finden Sie unter [MPEG-4 Audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4-Video)
  - : Hier ist `oo` erneut das OTI, das den Inhalt präziser beschreibt, während `V` der einstellige _Video_-OTI ist.
- `avc1[.PPCCLL]` (AVC-Video)
  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), die Einschränkungen (`CC`) und das Level (`LL`) spezifizieren. Siehe [AVC-Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Byte mit den Einschränkungsflags besteht aus einstelligen Boole'schen Flags, wobei das höchstwertige Bit als Flag 0 bezeichnet wird (oder `constraint_set0_flag` in einigen Ressourcen), und jedes nachfolgende Bit wird um eins erhöht nummeriert. Derzeit werden nur die Flags 0 bis 2 verwendet; die restlichen fünf Bits _müssen_ Null sein. Die Bedeutungen der Flags variieren je nach verwendetem Profil.

    Das Level ist eine Festkommazahl, also bedeutet ein Wert von `14` (dezimal 20) Level 2.0, während ein Wert von `3D` (dezimal 61) Level 6.1 bedeutet. Im Allgemeinen bedeutet ein höherer Levelnummernwert, mehr Bandbreite wird genutzt und die maximalen Videox Dimensionen werden unterstützt.

- `avc3[.PPCCLL]` (AVC mit variabler Auflösung)
  - : Die `avc3` Codec-Parameter haben die gleiche Syntax wie die `avc1` Codec-Parameter.

#### AVC-Profile

Im Folgenden sind die AVC-Profile und ihre Profilnummern für die Verwendung im `codecs`-Parameter sowie der Wert, den man für die Einschränkungskomponente `CC` angeben sollte, aufgeführt.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Nummer (Hex) | Einschränkungs-Byte |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------- |
| **Konformer Baseline-Profile (CBP)** CBP ist in erster Linie eine Lösung für Szenarien, in denen Ressourcen eingeschränkt sind oder der Ressourcenverbrauch kontrolliert werden muss, um die Wahrscheinlichkeit zu minimieren, dass die Medien schlecht funktionieren.                                                                                                                                                                                                                                                     | `42`         | `40`                |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutz vor Datenverlust und verbesserten Wiederherstellungsfähigkeiten. Dies wird nicht so häufig verwendet wie vor der Einführung von CBP. Alle CBP-Streams gelten auch als BP-Streams.                                                                                                                                                                                                                                                                        | `42`         | `00`                |
| **Erweitertes Profil (XP)** Entworfen für das Streaming von Video über das Netzwerk mit hoher Kompressionsfähigkeit und weiteren Verbesserungen der Datenrobustheit und des Streamings bei wechselenden Bedingungen.                                                                                                                                                                                                                                                                                                       | `58`         | `00`                |
| **Main Profile (MP)** Das Profil, das für Standardfernsehen in MPEG-4-Format verwendet wird. _Nicht_ für hochauflösendes Fernsehen. Die Bedeutung dieses Profils hat seit der Einführung des High Profile im Jahr 2004 abgenommen, das speziell für HDTV entwickelt wurde.                                                                                                                                                                                                                                                 | `4D`         | `00`                |
| **High Profile (HiP)** Derzeit ist HiP das primäre Profil, das für HDTV-Broadcasts und Blu-Ray-Video verwendet wird.                                                                                                                                                                                                                                                                                                                                                                                                       | `64`         | `00`                |
| **Progressives High Profile (PHiP)** Im Wesentlichen High Profile ohne Unterstützung von Field-Coding.                                                                                                                                                                                                                                                                                                                                                                                                                     | `64`         | `08`                |
| **Eingeschränktes High Profile** PHiP ohne Unterstützung für bi-prädiktive Slices ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                            | `64`         | `0C`                |
| **High 10 Profile (Hi10P)** High Profile mit Unterstützung für bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                           | `6E`         | `00`                |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P durch die Unterstützung von 4:2:2-Chroma-Subsampling sowie bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                               | `7A`         | `00`                |
| **High 4:4:4 Predictive Profile (Hi444PP)** Neben den in Hi422P enthaltenen Funktionen fügt Hi444PP Unterstützung für 4:4:4-Chroma-Subsampling hinzu (wobei keine Farbinformation verworfen wird). Außerdem wird Unterstützung für bis zu 14 Bit pro Farbstichprobe und effizientes verlustfreies Regionencoding hinzugefügt. Die Möglichkeit, jeden Frame als drei separate Farbflächen zu kodieren (das heißt, die Daten jeder Farbe werden behandelt, als wäre sie ein einzelner monochromer Frame).                    | `F4`         | `00`                |
| **High 10 Intra Profile** High 10 beschränkt auf reine Intra-Frame-Verwendung. Hauptsächlich für professionelle Anwendungen nützlich.                                                                                                                                                                                                                                                                                                                                                                                      | `6E`         | `10`                |
| **High 4:2:2 Intra Profile** Das Hi422-Profil mit reiner Intra-Frame-Verwendung.                                                                                                                                                                                                                                                                                                                                                                                                                                           | `7A`         | `10`                |
| **High 4:4:4 Intra Profile** Das High 4:4:4-Profil, beschränkt auf die Verwendung reiner Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                     | `F4`         | `10`                |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4-Profil, beschränkt auf reine Intra-Verwendung und nur CAVLC-Entropie-Kodierung zulassend.                                                                                                                                                                                                                                                                                                                                                                                     | `2C`         | `10`                |
| **Skalierbares Baseline-Profil** Das skalierbare Baseline-Profil für Videoüberwachung, mobiles Streaming und Kommunikationsanwendungen basiert auf dem Constrained Baseline-Profil von AVC. Der Basisschicht-Stream wird in hoher Qualität bereitgestellt, mit einigen Anzahlen von sekundären Substreams, die als alternative Formen desselben Videos in verschiedenen Umgebungen verwendet werden können. Diese können Kombinationen aus reduzierter Auflösung, reduzierter Bildrate oder erhöhter Kompression umfassen. | `53`         | `00`                |
| **Eingeschränktes konformes Baseline-Profil** Hauptsächlich für Kommunikationsanwendungen in Echtzeit entwickelt. Noch nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API zur Unterstützung von SVC ist in Entwicklung.                                                                                                                                                                                                                                                                                    | `53`         | `04`                |
| **Skalierbares High-Profile** Hauptsächlich für Rundfunk- und Streaming-Anwendungen entwickelt. Die Basis- (oder höchste Qualität-) Schicht muss dem AVC High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                         | `56`         | `00`                |
| **Eingeschränktes skalierbares High-Profile** Ein Unterset des skalierbaren High-Profile, hauptsächlich für Echtzeit-Kommunikation entwickelt.                                                                                                                                                                                                                                                                                                                                                                             | `56`         | `04`                |
| **Skalierbares High Intra Profile** Hauptsächlich nützlich für Produktionsanwendungen, unterstützt dieses Profil nur die vollständige Intra-Verwendung.                                                                                                                                                                                                                                                                                                                                                                    | `56`         | `10`                |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video mit zwei Ansichten der Szene (linkes Auge und rechtes Auge), bietet ansonsten die gleichen Funktionen wie das High-Profile.                                                                                                                                                                                                                                                                                                                  | `80`         | `00`                |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten mit sowohl zeitlicher als auch MVC-Inter-Vorhersage. _Unterstützt_ weder Feldbilder noch Makroblock-adaptive Frame-Field-Codierung.                                                                                                                                                                                                                                                                                                                        | `76`         | `00`                |
| **Multiview Depth High Profile** Basiert auf dem High-Profile, dem der Hauptstreams entsprechen muss. Die übrigen Substreams müssen dem Stereo High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                   | `8A`         | `00`                |

#### MPEG-4 Audio

Wenn der Wert eines Eintrags in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Wertes wie folgt aussehen:

```plain
mp4a.oo[.A]
```

Hierbei ist `oo` die zweistellige hexadezimale Object Type Indication, die die verwendete Codec-Klasse für die Medien spezifiziert. Die OTIs werden von der [MP4 Registration Authority](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/registered-types/object-types) pflegt. Ein besonderer Wert ist `40`; dies weist darauf hin, dass es sich bei den Medien um MPEG-4-Audio (ISO/IEC 14496 Teil 3) handelt. Um noch spezifischer zu werden, wird für OTI `40` eine dritte Komponente hinzugefügt: der Audio-Objekttyp, um den Typ auf eine spezifische Unterart von MPEG-4 einzugrenzen.

Der Audio-Objekttyp wird als eine oder zwei Ziffern lange _dezimal_ Zahl angegeben (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die hexadezimal sind). Zum Beispiel hat MPEG-4 AAC-LC eine Audio-Objekttyp-Nummer von `2`, also ist der vollständige `codecs`-Wert, der AAAC-LC repräsentiert, `mp4a.40.2`.

Somit kann ER AAC LC, dessen Audio-Objekttyp 17 ist, mit dem vollständigen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einstellige Werte können entweder als eine Ziffer (was die beste Wahl ist, da es am weitesten kompatibel sein wird) oder mit einer führenden Null als Auffüllung auf zwei Ziffern angegeben werden, wie z.B. `mp4a.40.02`.

> [!NOTE]
> Die Spezifikation forderte ursprünglich, dass die Zahl des Audio-Objekttyps in der dritten Komponente nur eine Dezimalstelle sein darf. Allerdings haben Änderungen an der Spezifikation im Laufe der Zeit den Bereich dieser Werte weit über eine Stelle hinaus erweitert. Daher kann der dritte Wertparameter jetzt entweder eine oder zwei Stellen haben. Eine Auffüllung von Werten unter 10 mit einer führenden `0` ist optional. Ältere Implementierungen von MPEG-4 Codecs

may not support two-digit values, however, so using a single digit when possible will maximize compatibility.

The Audio Object Types are defined in ISO/IEC 14496-3 subpart 1, section 1.5.1. The table below provides a basic list of the Audio Object Types and in the case of the more common object types provides a list of the profiles supporting it, but you should refer to the specification for details if you need to know more about the inner workings of any given MPEG-4 audio type.

<table class="standard-table">
  <caption>
    MPEG-4 audio object types
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio Object Type</th>
      <th scope="col">Profile support</th>
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
      <td><em>Reserved</em></td>
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
        ER AAC LD (Error Resilient AAC Low-Delay; used für two-way
        communication)
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
      <td><code>45</code> und auf</td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
  </tbody>
</table>

### HEVC: MP4, Quicktime, Matroska

Der [High Efficiency Video Coding](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265)-Codec, auch bekannt als H.265 und MPEG-H Teil 2, kann in den [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (`video/mp4`), [Quicktime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime) (`video/quicktime`) und [Matroska](https://en.wikipedia.org/wiki/Matroska) (`video/matroska`) Containern enthalten sein.

Die Nutzung von HEVC wird allgemein durch die Unterstützung eines MIME-Typs mit angehängtem `codecs` Parameter beschrieben; Syntaxbeispiele sind wie folgt:

```plain
video/mp4;codecs=hvc1.1.6.L186.B0,mp4a.40.2
video/mp4;codecs=hvc1.1.6.L186.B0,opus
video/mp4;codecs=hev1.1.6.L186.B0,mp4a.40.2
video/mp4;codecs=hev1.1.6.L186.B0,opus
```

Die Syntaxen für die jeweils unterstützten Codecs sehen so aus:

- `hvc1[.A.B.C.D]` (HEVC-Video)
  - : Der Wert beginnt mit dem vierstelligen Bezeichner des Codecs (`hvc1`), gefolgt von vier oder mehr durch Punkte (`.`) getrennten Werten:
    - `A`
      - : Der **`general_profile_space`**. Dies ist als eines oder zwei Zeichen kodiert:
        - Das erste Zeichen ist `A`, `B` oder `C` und stellt `general_profile_space` `1`, `2` oder `3` dar, oder es handelt sich um kein Zeichen, das `general_profile_space` `0` darstellt.
        - Das zweite Zeichen ist eine Dezimalzahl, die den `general_profile_idc` darstellt.
          > [!NOTE]
          > In den obigen Beispielen bedeutet der Wert `1`, dass `general_profile_space === 0` (kein Zeichen) und `general_profile_idc === 1`.
    - `B`
      - : Ein 32-Bit-Wert, der ein oder mehrere **Allgemeine Profilkompatibilitäts-Flags** (`general_profile_compatibility_flag`) in Hexadezimalform darstellt (führende Nullen dürfen weggelassen werden) und in umgekehrter Bitreihenfolge von den bedeutendsten bis zu den am wenigsten bedeutenden aufgelistet ist. Die Werte können von `31` (bedeutendster) bis `0` (am wenigsten bedeutender) reichen und sind in [ISO/IEC 23008-2](https://www.iso.org/standard/90502.html) spezifiziert.

        > [!NOTE]
        > In den obigen Beispielen bedeutet der Wert `6`, dass `general_profile_compatibility_flag === 6`.

    - `C`
      - : Die **`general_tier_flag`**, kodiert als `L` (`general_tier_flag === 0`) oder `H` (`general_tier_flag === 1`), gefolgt von der **`general_level_idc`**, kodiert als Dezimalzahl.

        > [!NOTE]
        > In den obigen Beispielen bedeutet der Wert `L186`, dass `general_tier_flag === 0`, gefolgt von `general_level_idc === 186`.

    - `D`
      - : Ein oder mehr 6-Byte **Constraint Flags**. Beachten Sie, dass jedes Flag als hexadezimale Zahl kodiert ist und durch einen zusätzlichen Punkt getrennt wird; nachfolgende Bytes, die Null sind, können weggelassen werden.

        > [!NOTE]
        > In den obigen Beispielen ist nur ein Constraint Flag vorhanden — `B0`.

- `hev1[.A.B.C.D]` (HEVC mit variabler Auflösung)
  - : Die `hev1` Codec-Parameter haben die gleiche Syntax wie die `hvc1` Codec-Parameter.

### WebM

Die Grundform für einen WebM `codecs`-Parameter besteht darin, einen oder mehrere der vier WebM-Codecs namentlich aufzuführen, getrennt durch Kommas. Die Tabelle unten zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                                  |
| -------------------------------- | ------------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video darin; kein Audio ist angegeben. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video darin.                           |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                         |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                           |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.            |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.              |

Die Strings `vp8.0` und `vp9.0` funktionieren ebenfalls, werden jedoch nicht empfohlen.

## Verwendung des Codecs-Parameters

Sie können den `codecs`-Parameter in einigen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}}-Element verwenden, wenn Sie ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erstellen, um eine Gruppe von Optionen festzulegen, aus denen der Browser beim Auswahl des Format der Medien gewählt werden kann, die dem Benutzer im Element präsentiert werden sollen.

Sie können den Codecs-Parameter auch verwenden, wenn Sie eine MIME-Mediendatei beim Aufruf der Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) angeben; diese Methode gibt ein Boolean zurück, das anzeigt, ob die Medien vermutlich auf dem aktuellen Gerät funktionieren werden.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, ein Kind der {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Den korrekten HTML-Codecs-Parameter für ein AV1-Video erhalten](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)
- [High Efficiency Video Coding](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding) auf Wikipedia

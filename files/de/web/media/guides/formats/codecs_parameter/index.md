---
title: Codecs in gängigen Medientypen
slug: Web/Media/Guides/Formats/codecs_parameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Auf einer grundlegenden Ebene können Sie den Typ einer Mediendatei mithilfe eines einfachen {{Glossary("MIME", "MIME")}}-Typs angeben, wie `video/mp4` oder `audio/mpeg`. Viele Medientypen — insbesondere solche, die Video-Tracks unterstützen — können jedoch davon profitieren, das Datenformat in ihnen präziser zu beschreiben. Zum Beispiel sagt das Beschreiben eines Videos in einer [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts über das Format aus, das das eigentliche Medium darin hat.

Aus diesem Grund kann der `codecs`-Parameter zum MIME-Typ hinzugefügt werden, der Medieninhalte beschreibt. Mit ihm können container-spezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Videocodecs, der für Audio-Tracks verwendete Typ und so weiter umfassen.

Dieser Leitfaden untersucht kurz die Syntax des `codecs`-Parameters für Medientypen und wie er zusammen mit der MIME-Typ-Zeichenfolge verwendet wird, um Details über den Inhalt von Audio- oder Video-Medien anzugeben, die über die Angabe des Container-Typs hinausgehen.

## MIME-Typen des Containerformats

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem der Medientyp (`audio`, `video`, etc.) angegeben wird, gefolgt von einem Schrägstrich (`/`) und dann dem Format, das zur Speicherung des Mediums verwendet wird:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2)-Dateityp verwendet, beispielsweise ein MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format einst häufig im Web verwendet, wird jedoch nicht mehr verwendet, da es ein Plugin erforderte.

Jeder dieser MIME-Typen ist jedoch vage. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können eine beliebige Anzahl von Profilen, Leveln und anderen Konfigurationsfaktoren haben. Aus diesem Grund möchten Sie möglicherweise den `codecs`-Parameter zusammen mit dem Medientyp angeben.

## Grundlegende Syntax

Sie können den `codecs`-Parameter zum Medientyp hinzufügen. Dazu fügen Sie ein Semikolon (`;`) hinzu, gefolgt von `codecs=` und dann der Zeichenfolge, die das Format des Inhalts der Datei beschreibt. Einige Medientypen erlauben es Ihnen nur, die Namen der zu verwendenden Codecs anzugeben, während andere es Ihnen erlauben, verschiedene Einschränkungen für diese Codecs anzugeben. Sie können mehrere Codecs angeben, indem Sie sie mit Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Datei mit einem [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audio-Track.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Datei mit [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8)-Video und/oder [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audio.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit [AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) (H.264) Video, Main Profile, Level 4.2.

Wie bei jedem MIME-Typ-Parameter muss `codecs` in `codecs*` (beachten Sie das Sternchen `*`) geändert werden, wenn eines der Codec-Eigenschaften spezielle Zeichen enthält, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} prozentkodiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu kodieren; ähnlich können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor kodierte Parameterliste zu dekodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Liste der Codecs jeden Codec enthalten, der für den Inhalt der Datei verwendet wird. Die Liste kann auch Codecs enthalten, die nicht in der Datei vorhanden sind.

## Codec-Optionen nach Container

Die folgenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Mehrere der obigen Links führen zum selben Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und daher die gleiche Syntax verwenden.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der Spezifikation [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) definiert, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam).

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Auf Chromium-basierte Browser akzeptieren jede Teilmenge der optionalen Parameter (anstatt alle oder keine, wie von der Spezifikation gefordert).

Die Komponenten dieser Codec-Parameterzeichenfolge werden im Folgenden in der Tabelle näher beschrieben. Jede Komponente hat eine feste Anzahl von Zeichen; ist der Wert kürzer, muss er mit führenden Nullen aufgefüllt werden.

<table class="standard-table">
  <caption>
    AV1-Codec-Parameterzeichenfolgen-Komponenten
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
              <td>"High" Profil fügt Unterstützung für 4:4:4 Chrominanzsubsampling hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional" Profil fügt Unterstützung für 4:2:2 Chrominanzsubsampling und 12-Bit pro Komponente Farbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die im X.Y-Format konvertiert wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code>.
        Siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation für Details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Tier-Indikator. Für das Main-Tier (<code>seq_tier</code> entspricht 0) ist dieser Buchstabe der Buchstabe <code>M</code>.
        Für das High-Tier (<code>seq_tier</code> ist 1) ist dieser Buchstabe der Buchstabe <code>H</code>.
        Das High-Tier ist nur für Level 4.0 und darüber verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponenten-Bittiefe. Dieser Wert muss einer von 8, 10 oder 12 sein; welche Werte gültig sind, hängt vom Profil und anderen Eigenschaften ab.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Die einstellige Flagge für Monochrome; wenn dies 0 ist, enthält das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten vollständig in der Y-Ebene und somit monochromatisch.
        Siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#yuv">YUV</a>, um zu erfahren, wie das YUV-Farbsystem funktioniert.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> zeigt das Chrominanzsubsampling als drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beide 1 sind, ist die dritte der Wert von <code>chroma_sample_position</code>; andernfalls ist die dritte Ziffer immer 0.
          Dies kann zusammen mit der <code>M</code>-Komponente verwendet werden, um das Chrominanzsubsampling-Format zu erstellen:
        </p>
        <table class="standard-table">
          <caption>
            Bestimmen des Chrominanzsubsampling-Formats
          </caption>
          <thead>
            <tr>
              <th scope="col">subsampling_x</th>
              <th scope="col">subsampling_y</th>
              <th scope="col">Monochrome-Flag</th>
              <th scope="col">Chrominanzsubsampling-Format</th>
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
          Die dritte Ziffer in <code>CCC</code> zeigt die Position der Chrominanzprobe an, wobei ein Wert von 0 anzeigt, dass die Position unbekannt ist und separat beim Dekodieren bereitgestellt werden muss; ein Wert von 1 zeigt an, dass die Probeposition horizontal kolokiert mit der (0, 0) Luma-Probe ist; und ein Wert von 2 zeigt an, dass die Position mit (0, 0) Luma kolokiert ist.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chrominanzsubsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert gibt das Farbensystem an, das von den Medien verwendet wird.
        Zum Beispiel ist BT.2020/BT.2100 Farbe, wie sie für HDR-Video verwendet wird, <code>09</code>.
        Die Informationen hierzu und für jede der verbleibenden Komponenten finden sich im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Color config semantics section</a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die verwendet wird, um das Gamma (liebevoll genannt die "opto-elektronische Transferfunktion" im technischen Jargon) von der Quelle zur Anzeige zu überführen.
        Zum Beispiel ist 10-Bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code>-Konstante wählt die Koeffizienten aus, die verwendet werden, um die Rot-, Blau- und Grünkanäle in Luma- und Chromasignale umzuwandeln.
        Zum Beispiel sind die für BT.709 verwendeten Standardkoeffizienten durch den Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Eine einstellige Flagge, die angibt, ob die Farbe den gesamten Bereich der möglichen Werte verwenden soll (<code>1</code>), oder ob sie auf diejenigen Werte beschränkt sein soll, die im Rahmen der angegebenen Farbkonfiguration als legal betrachten werden (das <strong>Studio-Swing-Representationsensemble</strong>).
        Der Standardwert ist 0 (Studio-Swing-Representationsensemble verwenden).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder von `M` (Monochrome-Flag) an aufwärts sind optional; Sie können das Einschließen von Feldern jederzeit beenden (können jedoch keine Felder willkürlich auslassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiel-AV1-Codec-Zeichenfolgen:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profile, Level 5.3, Main-Tier, 10 Bits pro Farbkomponente, 4:2:2 Chrominanzsubsampling mit ITU-R BT.2100 Farbprimären, Transfer-Eigenschaften und YCbCr-Farbmatrix. Die Studio-Swing-Representationsensemble ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profile, Level 5.3, Main-Tier, 10 Bits pro Farbkomponente. Die übrigen Eigenschaften werden aus den Standards übernommen: 4:2:0 Chrominanzsubsampling, BT.709 Farbprimären, Transfer-Eigenschaften und Matrix-Koeffizienten. Studio-Swing-Representationsensemble.

### VP9

#### ISO Base Media File Format Syntax

Die Syntax des `codecs`-Parameters für VP9 ist in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) Spezifikation im [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) Abschnitt definiert.

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Serie von durch Punkte (`.`) getrennten zweistelligen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles ab `CC` (Chrominanzsubsampling) ist optional, aber alles oder nichts. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Nach der Tabelle folgen einige Beispiele.

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
          Mögliche Werte sind:
        </p>
        <table class="standard-table">
          <caption>
            Vierzeichen-Codes für von WebM unterstützte Codecs
          </caption>
          <thead>
            <tr>
              <th scope="col">Vierzeichen-Code</th>
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
          Die zweistellige Profilnummer, nötigenfalls mit führenden Nullen auf genau zwei Stellen aufgefüllt.
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
                Nur 4:2:0 (Chrominanz horizontal und vertikal unterprobt).
                Erlaubt nur 8 Bits pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                Alle Chrominanzsubsampling-Formate sind erlaubt.
                Erlaubt nur 8 Bits pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Nur 4:2:0 (Chrominanz horizontal und vertikal unterprobt).
                Unterstützt 8, 10 oder 12 Bits pro Farbmusterkomponente.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chrominanzsubsampling-Formate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bits pro Farbmusterkomponente.
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
        Die Levelnummer ist eine Festkommanotation, wobei die erste Stelle die Einerstelle ist, und die zweite Stelle
        die Zehntel darstellt.
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
          Ein zweistelliger Wert, der angibt, welches Chrominanzsubsampling-Format verwendet werden soll.
          Die folgende Tabelle listet die erlaubten Werte auf; siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#chroma_subsampling">Chrominanzsubsampling</a> im "Digitale Videokonzepte"-Leitfaden für zusätzliche Informationen zu diesem Thema und anderen.
        </p>
        <table class="standard-table">
          <caption>
            WebM Chrominanzsubsampling-Bezeichner
          </caption>
          <thead>
            <tr>
              <th scope="col">Wert</th>
              <th scope="col">Chrominanzsubsampling-Format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td>
                4:2:0 mit den zwischen den Pixeln platzierten Chrominanzproben
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 Chrominanzsubsampling mit den mit Luminanz (0, 0) kolokierte Proben
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                4:2:2 Chrominanzsubsampling (4 aus jedem 4 horizontalen Pixel werden zur Bestimmung der Helligkeit verwendet)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 Chrominanzsubsampling (Die Helligkeits- und Chrominanzwerte jedes Pixels werden beide beibehalten)
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
          Eine zweistellige Ganzzahl, die angibt, welche der Farbprimärtöne aus Abschnitt 8.1 des <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a> Standards.
          Diese Komponente und jede Komponente danach, ist optional.
        </p>
        <p>Die möglichen Werte der Farbprimärkomponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Farbprimär-Bezeichner
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
              <td><em>Für zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 ist der Standard für hochauflösendes (HD) Fernsehen; sRGB ist der am häufigsten verwendete Farbraum für Computermonitore.
                Broadcast BT.709 verwendet eine Farbtiefe von 8 Bit, wobei der legale Bereich von 16 (schwarz) bis 235 (weiß) reicht.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildcharakteristika sind unbekannt oder sollen von der Anwendung bestimmt werden
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Für zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>
                BT.470 System M, NTSC (Standarddefinition-Fernsehen in den USA)
              </td>
            </tr>
            <tr>
              <td><code>05</code></td>
              <td>
                BT.470 System B, G; BT.601; BT.1358 625, BT.1700 625 PAL und 625 SECAM
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
                Verwendet für Ultra-HD (4K) High Dynamic Range (HDR) Video, diese haben einen sehr weiten Farb-{{Glossary("gamut", "Gamut")}} und unterstützen 10-Bit- und 12-Bit-Farbkomponenten-Tiefen.
              </td>
            </tr>
            <tr>
              <td><code>10</code></td>
              <td>
                SMPTE ST 428 (D-Cinema Distribution Master: Bildcharakteristika).
                Definiert die unkomprimierten Bildcharakteristika für DCDM.
              </td>
            </tr>
            <tr>
              <td><code>11</code></td>
              <td>
                SMPTE RP 431 (D-Cinema Qualität: Referenzprojektor und Umgebung).
                Beschreibt die Referenzprojektor- und Umgebungsbedingungen, die eine konsistente Filmerlebnis-Präsentation bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Farbverarbeitung für D-Cinema).
                Technische Richtlinie für Empfehlungen zur Farbsignal-Dekodierung für digitale Filme.
              </td>
            </tr>
            <tr>
              <td><code>13</code> – <code>21</code></td>
              <td><em>Für zukünftige Verwendung durch ITU-T oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>22</code></td>
              <td>EBU Tech 3213-E</td>
            </tr>
            <tr>
              <td><code>23</code> – <code>255</code></td>
              <td><em>Für zukünftige Verwendung durch ITU-T oder ISO/IEC reserviert</em></td>
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
        Dieser Wert stammt aus Abschnitt 8.2 von <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und zeigt die Transfermerkmale an, die bei der Anpassung der dekodierten Farben zum Renderziel verwendet werden sollen.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code>-Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> Spezifikation.
        Dieser Wert gibt an, welche Satz von Koeffizienten verwendet werden soll, wenn von den nativen Rot-, Blau- und Grünprimärwerten zu den Luma- und Chromasignalen umgewandelt wird.
        Diese Koeffizienten werden wiederum mit den in diesem gleichen Abschnitt gefundenen Gleichungen verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob der Schwarzwert und der Farbwertbereich jeder Farbkomponente auf den legalen Bereich beschränkt werden sollen.
        Für 8-Bit-Farbmuster reicht der legale Bereich von 16-235.
        Ein Wert von <code>00</code> zeigt an, dass diese Einschränkungen durchgesetzt werden sollen, während ein Wert von <code>01</code> erlaubt, dass der gesamte Bereich möglicher Werte für jede Komponente verwendet werden kann, selbst wenn die resultierende Farbe außerhalb der Grenzen des Farbsystems liegt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9 Video, Profil 2 Level 1.0, mit 10-Bit YUV-Inhalten, die 4:2:0 Chrominanzsubsampling verwenden, BT.2020 Primaries, ST 2084 EOTF (HDR SMPTE), BT.2020 nicht-konstante Luma-Farbmatrix und voller Bereich der Chrominanz und Luma-Kodierung. Der Ton ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, teilen die gleiche Syntax für den `codecs`-Parameter. Diese Medientypen schließen [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) ein (und in der Tat das [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp). Sowohl Video- als auch Audiotracks können mithilfe der folgenden MIME-Typen mit dem `codecs`-Parameter beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelles Medium, das in MPEG-4 eingeschlossen ist                                                      |

Jeder durch den `codecs`-Parameter beschriebene Codec kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime`, usw.) oder als Containername mit zusätzlichen Parametern angegeben werden, um den Codec und seine Konfiguration zu spezifizieren. Jedes Eintrag in der Codec-Liste kann eine beliebige Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; es beginnt jedoch immer mit dem vierstelligen Bezeichner des Codecs, einem Punkt-Zeichen (`.`), gefolgt vom Object Type Indication (OTI)-Wert für das spezifische Datenformat. Für die meisten Codecs ist die OTI eine zweistellige Hexadezimalzahl; für [AVC (H.264)](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) sind es jedoch sechs Hexadezimalziffern.

Somit sehen die Syntaxen für jeden der unterstützten Codecs wie folgt aus:

- `cccc[.pp]*` (generisches ISO BMFF)
  - : Wo `cccc` die vierstellige ID für den Codec ist und `pp` der Ort ist, an dem null oder mehr zweistellige codierte Eigenschaftswerte stehen.
- `mp4a.oo[.A]` (MPEG-4-Audio)
  - : Wo `oo` der Object Type Indication-Wert ist, der genauer den Inhalt der Medien beschreibt und `A` das einstellige _Audio_-OTI ist. Die möglichen Werte für das OTI können auf der MP4 Registration Authority Website auf der [Object Types Seite](https://mp4ra.org/registered-types/object-types) gefunden werden. Zum Beispiel ist Opus Audio in einer MP4-Datei `mp4a.ad`. Für weitere Details siehe [MPEG-4-Audio](#mpeg-4-audio).
- `mp4v.oo[.V]` (MPEG-4-Video)
  - : Hier ist `oo` erneut die OTI, die den Inhalt genauer beschreibt, während `V` die einstellige _Video_-OTI ist.
- `avc1[.PPCCLL]` (AVC-Video)

  - : `PPCCLL` sind sechs Hexadezimalziffern, die die Profilnummer (`PP`), die Constraint-Set-Flags (`CC`) und das Level (`LL`) spezifizieren. Siehe [AVC-Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint-Set-Flags-Byte besteht aus einem Bit mit booleschen Flags, wobei das bedeutendste Bit als Flag 0 bezeichnet wird (oder `constraint_set0_flag`, in einigen Ressourcen), und jedes folgende Bit eine höhere Nummer hat. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bits _müssen_ null sein. Die Bedeutungen der Flags variieren je nach verwendeten Profil.

    Der Level ist eine Festkommazahl, sodass ein Wert von `14` (dezimal 20) bedeutet Level 2.0, während ein Wert von `3D` (dezimal 61) Level 6.1 bedeutet. Im Allgemeinen gilt: Je höher die Levelnummer, desto mehr Bandbreite verwendet der Stream und desto höhere maximale Videodimensionen werden unterstützt.

#### AVC-Profile

Die folgenden sind die AVC-Profile und deren Profilnummern für die Verwendung im `codecs`-Parameter sowie der Wert für die Constraints-Komponente, `CC`.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Nummer (Hex) | Constraints-Byte |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ---------------- |
| **Constrained Baseline Profile (CBP)** CBP ist hauptsächlich eine Lösung für Szenarien, in denen Ressourcen begrenzt sind oder die Ressourcennutzung kontrolliert werden muss, um die Wahrscheinlichkeit eines schlechten Medienverhaltens zu minimieren.                                                                                                                                                                                                                                                                                                                                                                                  | `42`         | `40`             |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutz gegen Datenverlust und Wiederherstellungsfähigkeiten. Dies wird nicht mehr so häufig verwendet wie vor der Einführung von CBP. Alle CBP-Streams werden auch als BP-Streams betrachtet.                                                                                                                                                                                                                                                                                                                                                                                   | `42`         | `00`             |
| **Extended Profile (XP)** Entwickelt für das Streaming von Videos über das Netzwerk, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen hinsichtlich Datenrobustheit und Streamwechselmöglichkeiten.                                                                                                                                                                                                                                                                                                                                                                                                                              | `58`         | `00`             |
| **Main Profile (MP)** Das Profil, das für Standard-Definition Digital-Fernsehen verwendet wird, das im MPEG-4-Format übertragen wird. _Nicht_ für hochauflösende Fernsehsendungen verwendet. Die Bedeutung dieses Profils ist seit der Einführung des High Profile — das im Jahr 2004 für HDTV entwickelt wurde — gesunken.                                                                                                                                                                                                                                                                                                                | `4D`         | `00`             |
| **High Profile (HiP)** Derzeit ist HiP das primäre Profil für HD-Video auf Sendungen und Discs; es wird sowohl für HD-TV-Sendungen als auch für Blu-Ray-Video verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `64`         | `00`             |
| **Progressive High Profile (PHiP)** Im Wesentlichen High Profile ohne Unterstützung für Feldcodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `64`         | `08`             |
| **Constrained High Profile** PHiP, aber ohne Unterstützung für bi-prädiktive Slices ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `64`         | `0C`             |
| **High 10 Profile (Hi10P)** High Profile, jedoch mit Unterstützung für bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `6E`         | `00`             |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P um Unterstützung für 4:2:2 Chrominanzsubsampling sowie bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `7A`         | `00`             |
| **High 4:4:4 Predictive Profile (Hi444PP)** Zusätzlich zu den in Hi422P enthaltenen Funktionen fügt Hi444PP Unterstützung für 4:4:4 Chrominanzsubsampling hinzu (bei dem keine Farbinformationen verworfen werden). Beinhaltet auch Unterstützung für bis zu 14 Bits pro Farbmuster und effiziente verlustfreie Regionenkodierung. Die Option, jedes Frame als drei separate Farbkanäle zu kodieren (d.h. die Daten jeder Farbe werden gespeichert, als wäre es ein einzelnes monochromes Frame).                                                                                                                                         | `F4`         | `00`             |
| **High 10 Intra Profile** High 10, beschränkt auf die ausschließliche Nutzung von Intra-Frame Verwendung. Wird hauptsächlich für professionelle Anwendungen verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `6E`         | `10`             |
| **High 4:2:2 Intra Profile** Das Hi422-Profil mit der ausschließlichen Nutzung von Intra-Frame Verwendung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `7A`         | `10`             |
| **High 4:4:4 Intra Profile** Das High 4:4:4 Profil beschränkt auf die ausschließliche Verwendung von Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `F4`         | `10`             |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4 Profil beschränkt auf die ausschließliche Verwendung von Intra-Frames und auf die ausschließliche Nutzung der CAVLC Entropie-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `44`         | `00`             |
| **Scalable Baseline Profile** Entwickelt für die Verwendung in Videokonferenzen sowie Überwachungs- und mobilen Anwendungen, basiert das [SVC](https://en.wikipedia.org/wiki/SVC) Baseline Profile auf dem AVC Constrained Baseline Profil. Der Basisstream innerhalb des Streams wird auf einem hohen Qualitätsniveau bereitgestellt, mit einer bestimmten Anzahl von sekundären Substreams, die alternative Formen des gleichen Videos für die Verwendung in verschiedenen eingeschränkten Umgebungen bieten. Diese können jede Kombination von reduzierter Auflösung, reduzierter Bildrate oder erhöhten Kompressionslevels beinhalten. | `53`         | `00`             |
| **Scalable Constrained Baseline Profile** Hauptsächlich zur Verwendung in Echtzeitkommunikationsanwendungen. Noch nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API [um SVC zuzulassen](https://github.com/w3c/webrtc-svc) ist in Entwicklung.                                                                                                                                                                                                                                                                                                                                                                            | `53`         | `04`             |
| **Scalable High Profile** Hauptsächlich zur Verwendung in Broadcast- und Streaming-Anwendungen gedacht. Der Basisschicht oder der höchste Qualitätslayer muss mit dem AVC High Profile konform sein.                                                                                                                                                                                                                                                                                                                                                                                                                                       | `56`         | `00`             |
| **Scalable Constrained High Profile** Ein Subset des Scalable High Profile, das hauptsächlich für Echtzeitkommunikation entwickelt wurde.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `56`         | `04`             |
| **Scalable High Intra Profile** Hauptsächlich nur für Produktionsanwendungen nützlich, unterstützt dieses Profil ausschließlich Intra-Nutzung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `56`         | `20`             |
| **Stereo High Profile** Das Stereo High Profil bietet stereoskopisches Video mit zwei Darstellungen der Szene (linkes Auge und rechtes Auge). Ansonsten bietet es die gleichen Funktionen wie das High Profil.                                                                                                                                                                                                                                                                                                                                                                                                                             | `80`         | `00`             |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten mittels temporaler und MVC inter-Vorhersage. _Unterstützt keine_ Feldbilder oder Makroblockadaptive Frame-Feld-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `76`         | `00`             |
| **Multiview Depth High Profile** Basierend auf dem High Profile, an das der Hauptstrom angelehnt sein muss. Die verbleibenden Substreams müssen dem Stereo High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `8A`         | `00`             |

#### MPEG-4-Audio

Wenn der Wert eines Eintrags in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Wertes wie folgt sein:

```plain
mp4a.oo[.A]
```

Hierbei ist `oo` die zweistellige Hexadezimalzahl Object Type Indication, die die verwendete Codec-Klasse für die Medien angibt. Die OTIs werden von der [MP4 Registration Authority](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/registered-types/object-types) führt. Ein spezieller Wert ist `40`; dieser gibt an, dass es sich um MPEG-4-Audio handelt (ISO/IEC 14496 Part 3). Um noch genauer zu sein, wird für die OTI `40` eine dritte Komponente hinzugefügt — der Audio Object Type, um den Typ zu einem spezifischen Subtyp von MPEG-4 einzugrenzen.

Der Audio Object Type wird als einstelliger oder zweistelliger _Dezimal_-Wert angegeben (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die hexadezimal sind). Zum Beispiel hat AAC-LC in MPEG-4 eine Audio-Objekttypnummer von `2`, daher ist der vollständige `codecs`-Wert für AAC-LC `mp4a.40.2`.

Daher kann ER AAC LC, dessen Audio Object Type 17 ist, mit dem vollständigen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einstellige Werte können entweder einstellig gegeben werden (was die beste Wahl ist, da sie am kompatibelsten sein wird) oder mit einer führenden null auf zweiseilig aufgefüllt werden, wie `mp4a.40.02`.

> [!NOTE]
> Die Spezifikation sah ursprünglich vor, dass die Audio Object Type Nummer in der dritten Komponente nur einstellig sein darf. Überarbeitungen der Spezifikation haben jedoch den Bereich dieser Werte weit über eine einzelne Dezimalstelle hinaus erweitert, sodass jetzt die dritte Komponente entweder ein- oder zweistellig sein kann. Das Auffüllen von Werten unter 10 mit einer führenden `0` ist optional. Ältere Implementierungen von MPEG-4-Codecs unterstützen möglicherweise keine zweistelligen Werte, daher maximiert die Verwendung einer einzigen Ziffer die Kompatibilität.

Die Audio Object Types sind in ISO/IEC 14496-3 Subpart 1, Abschnitt 1.5.1 definiert. Die folgende Tabelle bietet eine grundlegende Liste der Audio Object Types und im Falle der gebräuchlicheren Objekttypen eine Liste der Profile, die sie unterstützen. Sie sollten sich jedoch auf die Spezifikation beziehen, wenn Sie mehr über die inneren Abläufe eines bestimmten MPEG-4-Audiotyps wissen müssen.

<table class="standard-table">
  <caption>
    MPEG-4 Audio-Objekttypen
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio-Objekttyp</th>
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
      <td>TwinVQ (Codierung für sehr niedrige Bitraten)</td>
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
        ER AAC LD (Error Resilient AAC Low-Delay; verwendet für bidirektionale
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
      <td><code>45</code> und darüber</td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

Die grundlegende Form eines WebM-`codecs`-Parameters besteht darin, einen oder mehrere der vier WebM-Codecs beim Namen zu benennen, getrennt durch Kommas. Die nachstehende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                                  |
| -------------------------------- | ------------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video darin; kein Audio ist angegeben. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video darin.                           |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                         |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                           |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.            |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.              |

Die Zeichenfolgen `vp8.0` und `vp9.0` funktionieren ebenfalls, werden aber nicht empfohlen.

## Verwendung des `codecs`-Parameters

Sie können den `codecs`-Parameter in einigen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}}-Element verwenden, wenn Sie ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erstellen, um eine Gruppe von Optionen für den Browser festzulegen, aus denen er wählen kann, wenn er das Format des Mediums auswählt, das dem Benutzer im Element präsentiert werden soll.

Sie können den `codecs`-Parameter auch verwenden, wenn Sie einen MIME-Medientyp an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) übergeben; diese Methode gibt einen Boolean zurück, der angibt, ob die Medien auf dem aktuellen Gerät wahrscheinlich funktionieren.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, Kind des {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elements
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Den richtigen HTML-Codec-Parameter für ein AV1-Video erhalten](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)

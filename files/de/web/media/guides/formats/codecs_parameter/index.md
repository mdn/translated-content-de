---
title: Codecs in allgemeinen Medientypen
slug: Web/Media/Guides/Formats/codecs_parameter
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Auf einer grundlegenden Ebene können Sie den Typ einer Mediendatei mit einem einfachen {{Glossary("MIME", "MIME")}}-Typ angeben, wie `video/mp4` oder `audio/mpeg`. Viele Medientypen – insbesondere solche, die Videospuren unterstützen – profitieren jedoch von der Möglichkeit, das Format der darin enthaltenen Daten präziser zu beschreiben. Zum Beispiel sagt die Beschreibung eines Videos in einer [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts darüber aus, in welchem Format die tatsächlichen Medien vorliegen.

Aus diesem Grund kann der `codecs`-Parameter zum MIME-Typ hinzugefügt werden, um Medieninhalte zu beschreiben. Damit können container-spezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Videocodecs, den für die Audiospuren verwendeten Typ usw. beinhalten.

Dieser Leitfaden untersucht kurz die Syntax des `codecs`-Parameters für Medientypen und wie dieser mit der MIME-Typzeichenfolge verwendet wird, um Details über die Inhalte von Audio- oder Videomedien über den Hinweis auf den Containertyp hinaus bereitzustellen.

## Containerformat-MIME-Typen

Der MIME-Typ für ein Containerformat wird angegeben, indem der Medientyp (`audio`, `video`, etc.), dann ein Schrägstrich (`/`) und schließlich das zur Speicherung des Mediums verwendete Format angegeben werden:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2) Dateityp verwendet, wie zum Beispiel ein MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg) Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format einst häufig im Web verwendet, ist es heute jedoch nicht mehr, da zur Verwendung ein Plugin erforderlich war.

Jeder dieser MIME-Typen ist jedoch ungenau. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können beliebige Profile, Stufen und andere Konfigurationsparameter aufweisen. Aus diesem Grund möchten Sie möglicherweise den `codecs`-Parameter zusammen mit dem Medientyp einbeziehen.

## Grundlegende Syntax

Sie können den `codecs`-Parameter zum Medientyp hinzufügen. Dazu fügen Sie ein Semikolon (`;`) gefolgt von `codecs=` und dann die Zeichenfolge hinzu, die das Format des Inhalts der Datei beschreibt. Einige Medientypen lassen Sie nur die Namen der zu verwendenden Codecs angeben, während andere es auch ermöglichen, verschiedene Einschränkungen für diese Codecs festzulegen. Sie können mehrere Codecs durch Kommata trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Datei mit einer [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audiospur.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Datei, die [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8) Video und/oder [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis) Audio enthält.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit [AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) (H.264) Video, Hauptprofil, Stufe 4.2.

Wie bei jedem MIME-Typ-Parameter muss `codecs` in `codecs*` (beachten Sie das Sternchen, `*`) geändert werden, wenn eine der Eigenschaften des Codecs Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} Prozent-kodiert werden müssen. Sie können die JavaScript-{{jsxref("Global_Objects/encodeURI", "encodeURI()")}}-Funktion verwenden, um die Parameterliste zu kodieren; ähnlich können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor kodierte Parameterliste zu dekodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Codec-Liste jeden für den Dateiinhalt verwendeten Codec enthalten. Die Liste kann auch Codecs enthalten, die in der Datei nicht vorhanden sind.

## Codec-Optionen nach Container

Die folgenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Einige der obigen Links führen zur gleichen Sektion; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und daher die gleiche Syntax haben.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/)-Spezifikation, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam), definiert.

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Chromium-basierte Browser akzeptieren jeden Teil der optionalen Parameter (statt alle oder keine, wie in der Spezifikation vorgeschrieben).

Die Bestandteile dieser Codec-Parameter-Zeichenfolge werden in der untenstehenden Tabelle ausführlicher beschrieben. Jeder Bestandteil hat eine feste Anzahl von Zeichen; wenn der Wert kürzer ist, muss er mit führenden Nullen aufgefüllt werden.

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
                "Main" Profil; unterstützt YUV 4:2:0 oder monochrome Bitstreams mit einer Farbtiefe von 8 oder 10 Bits pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High" Profil fügt Unterstützung für 4:4:4-Chroma-Subsampling hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional" Profil fügt Unterstützung für 4:2:2-Chroma-Subsampling und 12-Bit pro Komponente Farbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Level-Nummer, die in das X.Y-Format-Level-Format umgewandelt wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code> ist.
        Siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation für Details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Schicht-Indikator. Für die Hauptschicht (<code>seq_tier</code> entspricht 0) ist dieses Zeichen der Buchstabe <code>M</code>.
        Für die hohe Schicht (<code>seq_tier</code> ist 1) ist dieses Zeichen der Buchstabe <code>H</code>.
        Die hohe Schicht ist nur für Level 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponententiefe. Dieser Wert muss 8, 10 oder 12 sein; welche Werte gültig sind, variiert je nach Profil und anderen Eigenschaften.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Der einstellige Monochrom-Flag; wenn dies 0 ist, enthält das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten vollständig in der Y-Ebene und sind daher monochrom.
        Siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#yuv">YUV</a>, um Details zum YUV-Farbsystem zu erfahren.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> gibt das Chroma-Subsampling als drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beide identisch mit 1 sind, ist die dritte der Wert von <code>chroma_sample_position</code>; andernfalls ist die dritte Ziffer immer 0.
          Damit, kombiniert mit der <code>M</code> Komponente, kann das Chroma-Subsampling-Format konstruiert werden:
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
          Die dritte Ziffer in <code>CCC</code> gibt die Chroma-Beispielposition an, wobei ein Wert von 0 angibt, dass die Position unbekannt ist und während der Dekodierung separat bereitgestellt werden muss; ein Wert von 1 gibt an, dass die Beispielposition horizontal mit dem (0, 0) Luma-Beispiel kollokiert ist; und ein Wert von 2 gibt an, dass die Beispielposition mit (0, 0) Luma kollokiert ist.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert gibt das vom Medium verwendete Farbsystem an.
        Zum Beispiel, BT.2020/BT.2100 Farbe, wie für HDR-Video verwendet, ist <code>09</code>.
        Die Informationen dazu – und für jede der verbleibenden Komponenten – sind im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Farbkonfigurations-Semantikabschnitt</a> der AV1-Spezifikation zu finden.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die verwendet wird, um die Gamma (in der Fachsprache als "opto-elektronische Transferfunktion" bezeichnet) von der Quelle auf das Anzeigegerät abzubilden.
        Zum Beispiel ist 10-Bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code>-Konstante wählt die Matrixkoeffizienten aus, die verwendet werden, um die Rot-, Blau- und Grünkanäle in Luma- und Chroma-Signale zu konvertieren.
        Zum Beispiel werden die Standardkoeffizienten, die für BT.709 verwendet werden, mit dem Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Eine einstellige Markierung, die angibt, ob die Farbe den vollen Bereich möglicher Werte verwenden soll (<code>1</code>), oder ob sie auf die Werte beschränkt werden soll, die für die angegebene Farbkonfiguration als legal angesehen werden (das heißt, die <strong>Studio-Swing-Darstellung</strong>).
        Der Standardwert ist 0 (verwenden Sie die Studio-Swing-Darstellung).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder ab `M` (Monochrom-Flag) sind optional; Sie können das Einfügen von Feldern an jedem Punkt beenden (aber Sie können nicht willkürlich Felder auslassen). Die Standardwerte sind in der Tabelle oben enthalten. Einige Beispiele für AV1-Codec-Zeichenfolgen:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profile, Level 5.3, Hauptschicht, 10 Bits pro Farbkomponente, 4:2:2-Chroma-Subsampling mit ITU-R BT.2100 Farbbahnen, Transfercharakteristika und YCbCr Farbmatrix. Die Studio-Swing-Darstellung wird angezeigt.
- `av01.0.15M.10`
  - : AV1 Hauptprofil, Level 5.3, Hauptschicht, 10 Bits pro Farbkomponente. Die restlichen Eigenschaften werden aus den Standardwerten übernommen: 4:2:0-Chroma-Subsampling, BT.709 Farbbahnen, Transfercharakteristika und Matrixkoeffizienten. Studio-Swing-Darstellung.

### VP9

#### ISO Base Media File Format-Syntax

Die Syntax des `codecs`-Parameters für VP9 ist in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) Spezifikation, im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) definiert.

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Serie von Punkt (`.`) getrennten, zweistelligen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles ab `CC` (Chroma-Subsampling) ist optional, jedoch alles oder nichts. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Im Anschluss an die Tabelle sind einige Beispiele angegeben.

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
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal sub-sampled).
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
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal sub-sampled).
                Unterstützt 8, 10 oder 12 Bit pro Farbprobe.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bit pro Farbprobe.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelsnummer.
        Die Levels-Nummer ist eine Gleitkommazahl, wobei die erste Ziffer die Einerstelle ist und die zweite Ziffer die Zehntelstelle darstellt.
        Zum Beispiel ist Level 3 <code>30</code> und Level 6.1 ist <code>61</code>.
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
          Ein zweistelliger Wert, der angibt, welches Chroma-Subsampling-Format verwendet werden soll.
          Die folgende Tabelle listet die zulässigen Werte auf; siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> in unserem "Digital Video Concepts"-Leitfaden für zusätzliche Informationen zu diesem Thema und anderen.
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
                4:2:0 mit den Chromaproben zwischen den Pixeln angesiedelt
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0-Chroma-Subsampling mit Proben, die mit Luma (0, 0) kollokiert sind
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                4:2:2-Chroma-Subsampling (4 von jeweils 4 horizontalen Pixeln Luminanz werden verwendet)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4-Chroma-Subsampling (Jedes Pixel's Luminanz und Chrominanz werden beide beibehalten)
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
          Ein zweistelliger Ganzzahlwert, der angibt, welche der Farbprimärfarbsystemwerte aus Abschnitt 8.1 des <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a>-Standards verwendet werden.
          Diese Komponente und jede Komponente danach sind optional.
        </p>
        <p>Die möglichen Werte der primären Farbenkomponente sind:</p>
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
              <td><em>Für zukünftige ITU- oder ISO/IEC-Verwendung reserviert</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 ist der Standard für hochauflösendes (HD) Fernsehen; sRGB ist der am häufigsten verwendete Farbraum für Computermonitore.
                Broadcast BT.709 verwendet eine Farbtiefe von 8 Bit mit dem legalen Bereich von 16 (schwarz) bis 235 (weiß).
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildmerkmale sind unbekannt oder müssen von der Anwendung bestimmt werden
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Für zukünftige ITU- oder ISO/IEC-Verwendung reserviert</em></td>
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
              <td>General Film</td>
            </tr>
            <tr>
              <td><code>09</code></td>
              <td>
                BT.2020; BT.2100.
                Verwendet für ultra-hochauflösendes (4K) High Dynamic Range (HDR)-Video, diese haben einen sehr weiten Farbraum {{Glossary("gamut", "Gamut")}} und unterstützen 10-Bit- und 12-Bit-Farbkomponenten-Tiefen.
              </td>
            </tr>
            <tr>
              <td><code>10</code></td>
              <td>
                SMPTE ST 428 (D-Cinema Verteilungs-Master: Bildmerkmale).
                Definiert die unkomprimierten Bildmerkmale für DCDM.
              </td>
            </tr>
            <tr>
              <td><code>11</code></td>
              <td>
                SMPTE RP 431 (D-Cinema Qualität: Referenzprojektor und Umgebung).
                Beschreibt den Referenzprojektor und Umgebungsbedingungen, die eine konsistente Filmdarstellungserfahrung bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Farbverarbeitung für D-Cinema).
                Technische Richtlinie, die Farbdekodierungsempfehlungen für digitale Filme gibt.
              </td>
            </tr>
            <tr>
              <td><code>13</code> – <code>21</code></td>
              <td><em>Für zukünftige ITU-T- oder ISO/IEC-Verwendung reserviert</em></td>
            </tr>
            <tr>
              <td><code>22</code></td>
              <td>EBU Tech 3213-E</td>
            </tr>
            <tr>
              <td><code>23</code> – <code>255</code></td>
              <td><em>Für zukünftige ITU-T- oder ISO/IEC-Verwendung reserviert</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Ein zweistelliger Ganzzahlwert, der die
        <code>transferCharacteristics</code> für das Video anzeigt.
        Dieser Wert stammt aus Abschnitt 8.2 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und gibt die Transfercharakteristika an, die bei der Anpassung der decodierten Farbe an das Zielobjekt verwendet werden sollen.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code>-Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>-Spezifikation.
        Dieser Wert gibt an, welche Koeffizientengarnitur verwendet werden soll, um die nativen Rot-, Blau- und Grünprimärfarben in die Luma- und Chroma-Signale zu konvertieren.
        Diese Koeffizienten werden wiederum mit den Gleichungen in demselben Abschnitt verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob die schwarz-weiße Stufe und der Farbbereich jeder Farbkomponente auf den legalen Bereich beschränkt werden sollen.
        Für 8-Bit-Farbproben liegt der legale Bereich bei 16-235.
        Ein Wert von <code>00</code> zeigt an, dass diese Einschränkungen durchgesetzt werden sollen, während ein Wert von <code>01</code> die volle Bandbreite der möglichen Werte für jede Komponente zulässt, auch wenn die resultierende Farbe außerhalb des Farbsystems ist.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9 Video, Profil 2 Level 1.0, mit 10-Bit YUV-Inhalt unter Verwendung von 4:2:0-Chroma-Subsampling, BT.2020 Primärfarben, ST 2084 EOTF (HDR SMPTE), BT.2020 Nicht-Konstant-Luminanz-Farbmatrix und volle Bereichs-Chroma- und Luma-Codierung. Das Audio ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, teilen die gleiche Syntax für den `codecs`-Parameter. Diese Medientypen umfassen [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (und tatsächlich das [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp). Sowohl Video- als auch Audiospuren können mit den folgenden MIME-Typen unter Verwendung des `codecs`-Parameters beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2 Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2 Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4 Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4 Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien, die in MPEG-4 gekapselt sind                                                           |

Jeder durch den `codecs`-Parameter beschriebene Codec kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime`, etc.) oder als Container-Name plus zusätzliche Parameter angegeben werden, um den Codec und dessen Konfiguration zu spezifizieren. Jeder Eintrag in der Codec-Liste kann eine Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; sie beginnt jedoch immer mit dem vierstelligen Identifikator des Codecs, einem Punkt-Separator (`.`), gefolgt von dem Object Type Indication (OTI)-Wert für das spezifische Datenformat. Bei den meisten Codecs ist das OTI eine zweistellige Hexadezimalzahl; für [AVC (H.264)](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) sind es jedoch sechs hexadezimale Stellen.

Somit sehen die Syntaxen für jeden der unterstützten Codecs so aus:

- `cccc[.pp]*` (Generisches ISO BMFF)
  - : Wobei `cccc` der vierstellige ID für den Codec ist und `pp` der Ort ist, an dem null oder mehr zweistellige kodierte Eigenschaftswerte stehen.
- `mp4a.oo[.A]` (MPEG-4 Audio)
  - : Wo `oo` der Object Type Indication-Wert ist, der den Inhalt der Medien präziser beschreibt, und `A` ist der einstellig _Audio_-OTI. Die möglichen Werte für das OTI finden Sie auf der Website der MP4-Registrierungsstelle auf der Seite [Object Types](https://mp4ra.org/registered-types/object-types). Zum Beispiel wird Opus-Audio in einer MP4-Datei `mp4a.ad` genannt. Weitere Details finden Sie unter [MPEG-4 Audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4 Video)
  - : Hier ist `oo` wieder das OTI, das den Inhalt genauer beschreibt, während `V` der einstellig _Video_-OTI ist.
- `avc1[.PPCCLL]` (AVC Video)

  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), die Constraint-Set-Flags (`CC`) und das Level (`LL`) spezifizieren. Siehe [AVC-Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint-Set-Flags-Byte besteht aus einzelbitigen Booleschen Flags, wobei das bedeutendste Bit als Flag 0 (oder `constraint_set0_flag`, in einigen Ressourcen) bezeichnet wird und jedes darauf folgende Bit um eins höher nummeriert ist. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bits _müssen_ null sein. Die Bedeutungen der Flags variieren je nach verwendetem Profil.

    Das Level ist eine Festkommazahl, sodass ein Wert von `14` (Dezimal 20) Level 2.0 bedeutet, während ein Wert von `3D` (Dezimal 61) Level 6.1 bedeutet. Allgemein gesagt, je höher die Levelsnummer, desto mehr Bandbreite verwendet der Stream und desto höher sind die maximal unterstützten Videodimensionen.

#### AVC-Profile

Die folgenden sind die AVC-Profile und ihre Profilnummern zur Verwendung im `codecs`-Parameter sowie der Wert, der für die Einschränkungskomponente `CC` angegeben werden soll.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Nummer (Hex) | Einschränkungs-Byte |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------- |
| **Constrained Baseline Profile (CBP)** CBP ist hauptsächlich eine Lösung für Szenarien, in denen Ressourcen eingeschränkt sind oder der Ressourcenverbrauch kontrolliert werden muss, um die Wahrscheinlichkeit zu minimieren, dass die Medien schlecht funktionieren.                                                                                                                                                                                                                                                                                                                                                                 | `42`         | `40`                |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Datenverlustschutz und Erholungsfähigkeiten. Dies wird nicht so weit verbreitet verwendet wie früher, als CBP eingeführt wurde. Alle CBP-Ströme gelten auch als BP-Ströme.                                                                                                                                                                                                                                                                                                                                                                                                  | `42`         | `00`                |
| **Extended Profile (XP)** Entworfen für das Streaming von Video über das Netz, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen der Datenrobustheit und Stream-Umschaltung.                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `58`         | `00`                |
| **Main Profile (MP)** Das Profil, das für standarddefinition digitales Fernsehen verwendet wird, das im MPEG-4-Format ausgestrahlt wird. Wird _nicht_ für hochauflösendes Fernsehen verwendet. Die Bedeutung dieses Profils ist seit der Einführung des High Profile – das 2004 für HDTV hinzugefügt wurde – verblasst.                                                                                                                                                                                                                                                                                                                | `4D`         | `00`                |
| **High Profile (HiP)** Derzeit das Hauptprofil, das für Rundfunk- und scheibenbasierte HD-Videos verwendet wird; es wird sowohl für HDTV-Übertragungen als auch für Blu-Ray-Video verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                           | `64`         | `00`                |
| **Progressive High Profile (PHiP)** Im Wesentlichen High Profile, jedoch ohne Unterstützung für Feldkodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `64`         | `08`                |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bi-prädiktive Scheiben ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `64`         | `0C`                |
| **High 10 Profile (Hi10P)** High Profile, jedoch mit Unterstützung für bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `6E`         | `00`                |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P durch Hinzufügen von Unterstützung für 4:2:2 Chroma-Subsampling zusammen mit bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `7A`         | `00`                |
| **High 4:4:4 Predictive Profile (Hi444PP)** Neben den in Hi422P enthaltenen Möglichkeiten fügt Hi444PP Unterstützung für 4:4:4 Chroma-Subsampling hinzu (bei dem keine Farbinformationen verworfen werden). Beinhaltet auch Unterstützung für bis zu 14 Bits pro Farbprobe und effiziente verlustfreie Regionenkodierung. Die Option, jeden Frame als drei separate Farbkanäle zu kodieren (das heißt, die Daten jeder Farbe werden als ob es ein einzelner monochromer Frame wäre gespeichert).                                                                                                                                       | `F4`         | `00`                |
| **High 10 Intra Profile** High 10 auf die Verwendung von Intra-Frames beschränkt. Wird hauptsächlich für professionelle Anwendungen verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `6E`         | `10`                |
| **High 4:2:2 Intra Profile** Das Hi422-Profil nur mit Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `7A`         | `10`                |
| **High 4:4:4 Intra Profile** Das High 4:4:4-Profil, das nur Intra-Frames verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `F4`         | `10`                |
| **CAVLC 4:4:4<br>Intra Profile** Das High 4:4:4-Profil, beschränkt auf nur Intra-Benutzung und auf die Verwendung nur von CAVLC-Entropie-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `44`         | `00`                |
| **Scalable Baseline Profile** Entwickelt für den Einsatz bei Videokonferenzen sowie bei Überwachungs- und mobilen Anwendungen. Das [SVC](https://en.wikipedia.org/wiki/SVC)-Baseline-Profil basiert auf dem Constrained Baseline Profil von AVC. Der Basisstrom innerhalb des Stroms wird auf einem hohen Qualitätsniveau bereitgestellt, mit mehreren sekundären Substreams, die alternative Formen desselben Videos bieten, die in verschiedenen eingeschränkten Umgebungen verwendet werden können. Diese können jede Kombination aus niedrigerer Auflösung, niedrigerer Bildfrequenz oder erhöhter Komprimierungsstufen enthalten. | `53`         | `00`                |
| **Scalable Constrained Baseline Profile** Hauptsächlich für Echtzeitkommunikationsanwendungen verwendet. Wird noch nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API [um SVC zu unterstützen](https://github.com/w3c/webrtc-svc) ist in Entwicklung.                                                                                                                                                                                                                                                                                                                                                                  | `53`         | `04`                |
| **Scalable High Profile** Hauptsächlich für Rundfunk- und Streaming-Anwendungen gedacht. Die Basisschicht (oder die höchste Qualitätsstufe) muss dem AVC High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `56`         | `00`                |
| **Scalable Constrained High Profile** Ein Unterset des Scalable High Profile, das hauptsächlich für Echtzeitkommunikation entwickelt wurde.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `56`         | `04`                |
| **Scalable High Intra Profile** Hauptsächlich nur für Produktionsanwendungen nützlich unterstützt dieses Profil nur die vollständige Intra-Benutzung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `56`         | `20`                |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video, das zwei Darstellungen der Szene verwendet (für das linke und rechte Auge). Ansonsten bietet es die gleichen Funktionen wie das High Profile.                                                                                                                                                                                                                                                                                                                                                                                                           | `80`         | `00`                |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten mit sowohl temporärer als auch MVC-Inter-Ansichts-Prädiktion. Unterstützt _nicht_ Feldbilder oder makroblockadaptive Frame-Feldkodierung.                                                                                                                                                                                                                                                                                                                                                                                                                              | `76`         | `00`                |
| **Multiview Depth High Profile** Basierend auf dem High Profile, dem der Hauptstream genügen muss. Die verbleibenden Substreams müssen mit dem Stereo High Profile übereinstimmen.                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `8A`         | `00`                |

#### MPEG-4 Audio

Wenn der Wert eines Eintrags in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Werts folgendermaßen lauten:

```plain
mp4a.oo[.A]
```

Hierbei ist `oo` die zweistellige Hexadezimal-Object Type Indication, die die verwendete Codec-Klasse für die Medien spezifiziert. Die OTIs werden von der [MP4 Registrierungsstelle](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/registered-types/object-types) verwaltet. Ein besonderer Wert ist `40`; dies gibt an, dass die Medien MPEG-4 Audio (ISO/IEC 14496 Teil 3) sind. Um noch genauer zu werden, wird eine dritte Komponente – der Audio Object Type – für OTI `40` hinzugefügt, um den Typ auf einen spezifischen Subtyp von MPEG-4 zu beschränken.

Der Audio Object Type wird als ein oder zwei-stellige _dezimale_ Zahl angegeben (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die Hexadezimal verwenden). Zum Beispiel hat MPEG-4's AAC-LC eine Audio-Objekttypnummer von `2`, sodass der vollständige `codecs`-Wert, der AAC-LC darstellt, `mp4a.40.2` ist.

Somit kann ER AAC LC, dessen Audio Object Type 17 ist, durch den vollständigen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einerstelle Werte können entweder als eine Ziffer angegeben werden (was die beste Wahl ist, da es am weitesten kompatibel sein wird) oder mit einer führenden Null, um sie auf zwei Ziffern aufzufüllen, wie `mp4a.40.02`.

> [!NOTE]
> Die Spezifikation verlangte ursprünglich, dass die Audio Object Type-Nummer in der dritten Komponente nur eine Dezimalstelle sein darf. Änderungen der Spezifikation im Laufe der Zeit erweiterten jedoch den Bereich dieser Werte weit über eine Dezimalstelle hinaus, indem sie nun entweder eine oder zwei Ziffern haben darf. Durch Auffüllen von Werten unter 10 mit einer führenden `0` bleibt optional. Ältere Implementierungen von MPEG-4 Codecs unterstützen möglicherweise keine zweistelligen Werte; daher maximiert die Verwendung einer einzigen Ziffer, wenn möglich, die Kompatibilität.

Die Audio-Objekttypen sind in ISO/IEC 14496-3 Unterteil 1, Abschnitt 1.5.1 definiert. Die folgende Tabelle bietet eine grundlegende Liste der Audio-Objekttypen und im Falle der gebräuchlicheren Objekttypen eine Liste der Profile, die es unterstützen; für Details zu den inneren Abläufen eines bestimmten MPEG-4 Audios treten Sie jedoch bitte in die Spezifikation ein.

<table class="standard-table">
  <caption>
    MPEG-4 Audio-Objekt-Typen
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio-Objekt-Typ</th>
      <th scope="col">Profil-Unterstützung</th>
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
      <td>Main Synthetisch</td>
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
      <td>Algorithmische Synthese und Audio-Effekte</td>
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
        ER AAC LD (Error Resilient AAC Low-Delay; verwendet für die Zwei-Wege-Kommunikation)
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
      <td>ER Parametrisch (Fehlerresistentes Parametrisch)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>28</code></td>
      <td>SSC (Sinusoidale Codierung)</td>
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
      <td>DST (Direkte Stream-Übertragung)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>36</code></td>
      <td>ALS (Audioverlustlosigkeit)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>37</code></td>
      <td>SLS (Skalierbare Verlustlosigkeit)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>38</code></td>
      <td>SLS Kein Kern (Skalierbare Verlustlosigkeit Kein Kern)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>39</code></td>
      <td>ER AAC ELD (Error Resilient AAC Enhanced Low Delay)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>40</code></td>
      <td>SMR Simple (Symbolische Musikdarstellung Einfach)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>41</code></td>
      <td>SMR Main (Symbolische Musikdarstellung Haupt)</td>
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
        <p>SAOC (Räumliche Audioobjekt-Codierung)</p>
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

Die grundlegende Form eines WebM-`codecs`-Parameters besteht darin, einen oder mehrere der vier WebM-Codecs nach deren Namen aufzulisten, getrennt durch Kommas. Die folgende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                                     |
| -------------------------------- | ---------------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video darin; kein Audio ist spezifiziert. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video darin.                              |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                            |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                              |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.               |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.                 |

Die Zeichenfolgen `vp8.0` und `vp9.0` funktionieren ebenfalls, werden jedoch nicht empfohlen.

## Verwendung des `codecs`-Parameters

Sie können den `codecs`-Parameter in einigen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}}-Element verwenden, wenn Sie ein {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Element erstellen, um eine Gruppe von Optionen für den Browser festzulegen, aus denen ausgewählt wird, wenn er das Format der Medien auswählt, die dem Benutzer im Element präsentiert werden.

Sie können den `codecs`-Parameter auch verwenden, wenn Sie einen MIME-Medientyp in der [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)-Methode angeben; diese Methode gibt einen Boolean zurück, der anzeigt, ob die Medien wahrscheinlich auf dem aktuellen Gerät funktionieren.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, Kind der {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Leitfaden zu Audio-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Leitfaden zu Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Das korrekte HTML-Codec-Parameter für ein AV1-Video erhalten](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)

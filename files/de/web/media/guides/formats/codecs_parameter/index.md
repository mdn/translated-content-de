---
title: Codecs in gängigen Medientypen
slug: Web/Media/Guides/Formats/codecs_parameter
l10n:
  sourceCommit: 809fe4de4359a03db072d9abae18b0bf26c4ab77
---

Auf einer fundamentalen Ebene können Sie den Typ einer Mediendatei mithilfe eines grundlegenden {{Glossary("MIME", "MIME")}}-Typs angeben, wie zum Beispiel `video/mp4` oder `audio/mpeg`. Viele Medientypen, insbesondere jene, die Video-Tracks unterstützen, können jedoch davon profitieren, das Format der darin enthaltenen Daten präziser zu beschreiben. Zum Beispiel sagt das einfache Beschreiben eines Videos in einer [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts darüber aus, in welchem Format die tatsächlichen Mediendateien vorliegen.

Aus diesem Grund kann der Parameter `codecs` zum MIME-Typ hinzugefügt werden, um den medienspezifischen Inhalt zu beschreiben. Damit können container-spezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Videocodecs, den verwendeten Typ für die Audio-Tracks und so weiter umfassen.

Dieser Leitfaden untersucht kurz die Syntax des Medientyp-Parameters `codecs` und wie er mit der MIME-Typzeichenfolge verwendet wird, um Details über den Inhalt von Audio- oder Videomedien über die Angabe des Container-Typs hinaus bereitzustellen.

## Container-Format-MIME-Typen

Der MIME-Typ für ein Container-Format wird ausgedrückt, indem der Typ der Medien (`audio`, `video`, etc.) angegeben wird, gefolgt von einem Schrägstrich (`/`) und dann dem zur Speicherung der Medien verwendeten Format:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Guides/Formats/Containers#mpegmpeg-2)-Dateityp verwendet, wie eine MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle vermerkt, wurde dieses Format früher häufig im Web verwendet, ist jedoch nicht mehr gebräuchlich, da es ein Plugin erforderte, um es zu verwenden.

Jeder dieser MIME-Typen ist jedoch vage. All diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können beliebige Profile, Ebenen und andere Konfigurationsfaktoren haben. Aus diesem Grund sollten Sie möglicherweise den Parameter `codecs` zusammen mit dem Medientyp einfügen.

## Grundsyntax

Sie können den Parameter `codecs` zum Medientyp hinzufügen, indem Sie ein Semikolon (`;`) gefolgt von `codecs=` anhängen, und dann die Zeichenfolge, die das Format des Inhalts der Datei beschreibt. Einige Medientypen lassen Sie nur die Namen der zu verwendenden Codecs angeben, während andere Ihnen erlauben, auch diverse Einschränkungen für diese Codecs anzugeben. Sie können mehrere Codecs angeben, indem Sie sie mit Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Guides/Formats/Containers#ogg)-Datei, die einen [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audiotrack enthält.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Guides/Formats/Containers#webm)-Datei mit [VP8](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp8)-Video und/oder [Vorbis](/de/docs/Web/Media/Guides/Formats/Audio_codecs#vorbis)-Audio.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4)-Datei, die [AVC](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) (H.264)-Video im Main-Profil, Level 4.2 enthält.

Wie bei jedem MIME-Typ-Parameter muss `codecs` zu `codecs*` (beachten Sie das Sternzeichen, `*`) geändert werden, wenn eine der Eigenschaften des Codecs Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} prozentcodiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu kodieren; ebenso können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor codierte Parameterliste zu dekodieren.

> [!NOTE]
> Wenn der Parameter `codecs` verwendet wird, muss die angegebene Liste der Codecs jeden Codec einschließen, der für den Inhalt der Datei verwendet wird. Die Liste kann auch Codecs enthalten, die nicht in der Datei enthalten sind.

## Codec-Optionen nach Container

Die unten aufgeführten Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [HEVC](#hevc_mp4_quicktime_matroska)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Mehrere der oben stehenden Links führen zum gleichen Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und daher die gleiche Syntax teilen.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der Spezifikation [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) definiert, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam).

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Chromium-basierte Browser akzeptieren jede Untermenge der optionalen Parameter (anstatt alle oder keine, wie es die Spezifikation erfordert).

Die Komponenten dieses Codec-Parameter-Strings werden weiter unten in der Tabelle detaillierter beschrieben. Jede Komponente hat eine feste Anzahl von Zeichen; wenn der Wert kürzer ist, muss er mit führenden Nullen aufgefüllt werden.

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
                "Main" Profil; unterstützt YUV 4:2:0 oder monochrome Bitstreams mit einer Bittiefe von 8 oder 10 Bit pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High" Profil fügt Unterstützung für 4:4:4 Farbunterabtastung hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional" Profil fügt Unterstützung für 4:2:2 Farbunterabtastung und 12-Bit pro Komponentefarbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Level-Nummer, die in das X.Y Level-Format umgewandelt wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code> gilt.
        Siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation für Details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Tier-Indikator. Für die Main-Ebene (<code>seq_tier</code> gleich 0) ist dieses Zeichen der Buchstabe <code>M</code>.
        Für die High-Stufe (<code>seq_tier</code> ist 1) ist dieses Zeichen der Buchstabe <code>H</code>.
        Die High-Stufe ist nur für das Level 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponententiefeninformation. Dieser Wert muss einer von 8, 10 oder 12 sein; welche Werte gültig sind, variiert je nach Profil und anderen Eigenschaften.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Das einstellige Monochrome-Flag; wenn dies 0 ist, umfasst das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten vollständig in der Y-Ebene und daher monochromatisch.
        Siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#yuv">YUV</a> für Details zur Funktionsweise des YUV-Farbsystems.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> zeigt die Chroma-Subsampling als drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beide Werte 1 sind, ist die dritte der Wert von <code>chroma_sample_position</code>; andernfalls ist die dritte Ziffer immer 0.
          Dies kann zusammen mit der <code>M</code>-Komponente verwendet werden, um das Chroma-Subsampling-Format zu konstruieren:
        </p>
        <table class="standard-table">
          <caption>
            Bestimmung des Chroma-Subsampling-Formats
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
              <td>YUV 4:0:0 (Monochrome)</td>
            </tr>
          </tbody>
        </table>
        <p>
          Die dritte Ziffer in <code>CCC</code> zeigt die Chromaprobenposition an, wobei ein Wert von 0 anzeigt, dass die Position unbekannt ist und separat während der Dekodierung bereitgestellt werden muss; ein Wert von 1 bedeutet, dass die Probenposition horizontal mit der (0, 0) Luma-Probe übereinstimmt; und ein Wert von 2 gibt an, dass die Probenposition mit (0, 0) Luma kollokiert.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert zeigt das vom Medium verwendete Farbsystem an.
        Zum Beispiel ist BT.2020/BT.2100-Farbe, wie sie für HDR-Video verwendet wird, <code>09</code>.
        Die Information hierfür – und für jede der übrigen Komponenten – finden Sie im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Color config semantics Abschnitt</a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die verwendet wird, um das Gamma (herrlich als "opto-elektronische Transferfunktion" in Fachkreisen bezeichnet) von der Quelle zum Display abzubilden.
        Zum Beispiel ist 10-Bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code>-Konstante wählt die Matrixkoeffizienten aus, die verwendet werden, um die Rot-, Blau- und Grün-Kanäle in Luma- und Chroma-Signale umzuwandeln.
        Zum Beispiel sind die Standardkoeffizienten, die für BT.709 verwendet werden, mit dem Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Eine einstellige Kennzeichnung, die angibt, ob die Farbe den vollen Bereich der möglichen Werte nutzen darf (<code>1</code>), oder ob sie auf die Werte beschränkt werden soll, die als legal für die angegebene Farbkonfiguration gelten (d.h. die <strong>Studio-Swing-Darstellung</strong>).
        Der Standard ist 0 (verwendet die Studio-Swing-Darstellung).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder von `M` (Monochrom-Flag) an sind optional; Sie können die Felder an einem beliebigen Punkt aufhören einzuschließen (aber sie nicht willkürlich auslassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiel-AV1-Codecs-Strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profil, Level 5.3, Main-Ebene, 10 Bits pro Farbkomponente, 4:2:2 Chroma-Subsampling, bei Verwendung von ITU-R BT.2100-Farbprimärfarben, Übertragungscharakteristika und YCbCr-Farbmatrix. Die Studio-Swing-Darstellung ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profil, Level 5.3, Main-Ebene, 10 Bits pro Farbkomponente. Die restlichen Eigenschaften werden aus den Standardwerten übernommen: 4:2:0 Chroma-Subsampling, BT.709-Farbprimärfarben, Übertragungscharakteristika und Matrixkoeffizienten. Studio-Swing-Darstellung.

### VP9

#### ISO Base Media File Format Syntax

Die Syntax des `codecs`-Parameters für VP9 ist in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/)-Spezifikation, im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) definiert.

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem Vier-Zeichen-Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Serie von durch Punkte (`.`) getrennten zweistelligen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles ab `CC` (Chroma-Subsampling) ist optional, aber in einer Alles-oder-nichts-Form. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Nach der Tabelle folgen einige Beispiele.

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
          Ein Vier-Zeichen-Code, der angibt, welcher der möglichen Codecs beschrieben wird.
          Mögliche Werte sind:
        </p>
        <table class="standard-table">
          <caption>
            Vier-Zeichen-Codes für von WebM unterstützte Codecs
          </caption>
          <thead>
            <tr>
              <th scope="col">Vier-Zeichen-Code</th>
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
          Die zweistellige Profilnummer, gepolstert mit führenden Nullen, falls nötig, um genau zwei Ziffern zu sein.
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
                Nur 4:2:0 (Chroma horizontal und vertikal unterabtastet).
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
                Nur 4:2:0 (Chroma horizontal und vertikal unterabtastet).
                Unterstützt 8, 10 oder 12 Bit pro Farbstichprobenkomponente.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bit pro Farbstichprobenkomponente.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Level-Nummer.
        Die Niveau-Nummer ist eine Festkommazahl, wobei die erste Ziffer die Einerstelle und die zweite Ziffer die Zehntelstelle darstellt.
        Zum Beispiel ist Level 3 <code>30</code> und Level 6.1 ist <code>61</code>.
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
          Ein zweistelliger Wert, der angibt, welches Chroma-Subsampling-Format verwendet werden soll.
          Die folgende Tabelle listet zulässige Werte auf; siehe <a href="/de/docs/Web/Media/Guides/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> in unserem "Digitale Videokonzepte"-Leitfaden für zusätzliche Informationen zu diesem Thema und anderen.
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
                4:2:0 mit den Chroma-Proben, die zwischen den Pixeln angeordnet sind
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
                4:2:2 Chroma-Subsampling (4 von 4 horizontalen Pixeln werden für die Luminanz verwendet)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 Chroma-Subsampling (die Luminanz und die Chrominanz jedes Pixels werden beibehalten)
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
          Eine zweistellige Zahl, die angibt, welche der Farbprimärfarben gemäß Abschnitt 8.1 der <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a> Norm verwendet werden.
          Diese Komponente, und jede Komponente danach, ist optional.
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
              <td><em>Für zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 ist der Standard für hochauflösendes (HD) Fernsehen; sRGB ist der am häufigsten verwendete Farbraum für Computermonitore.
                Broadcast BT.709 verwendet eine 8-Bit-Farbtiefe mit dem legalen Bereich von 16 (schwarz) bis 235 (weiß).
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildmerkmale sind unbekannt oder sollen durch die Anwendung bestimmt werden
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Für zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
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
              <td>Generischer Film</td>
            </tr>
            <tr>
              <td><code>09</code></td>
              <td>
                BT.2020; BT.2100.
                Wird für Ultra-High-Definition (4K) High Dynamic Range (HDR) Video verwendet, sie haben ein sehr weites Farbg {{Glossary("gamut", "gamut")}} und unterstützen 10-Bit- und 12-Bit-Farbkomponententiefen.
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
                SMPTE RP 431 (D-Cinema Quality: Referenzprojektor und Umgebung).
                Beschreibt die Bedingungen für den Referenzprojektor und die Umwelt, die ein konsistentes Filmerlebnis bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Farbbildverarbeitung für D-Kino).
                Eine technische Richtlinie, die Empfehlungen für die Decodierung von Farbsignalen für digitale Filme macht.
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
        Eine zweistellige Zahl, die die
        <code>transferCharacteristics</code> für das Video angibt.
        Dieser Wert stammt aus Abschnitt 8.2 von <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und gibt an, welche Übertragungscharakteristika verwendet werden sollen, wenn das decodierte Farbbild an das Renderziel angepasst wird.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die Eigenschaft <code>matrixCoefficients</code>.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> Spezifikation.
        Dieser Wert gibt an, welches Set von Koeffizienten verwendet werden soll, wenn von den nativen roten, blauen und grünen Primärfarben zu den Luma- und Chroma-Signalen umgerechnet wird.
        Diese Koeffizienten werden daraufhin mit den Gleichungen verwendet, die in demselben Abschnitt gefunden werden können.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob die Schwarzwert- und Farbbereichseinschränkungen für jede Farbkomponente auf den legalen Bereich beschränkt werden sollen.
        Für 8-Bit-Farbproben liegt der legale Bereich zwischen 16 und 235.
        Ein Wert von <code>00</code> zeigt an, dass diese Einschränkungen durchgesetzt werden sollen, während ein Wert von <code>01</code> die Verwendung des gesamten Bereichs möglicher Werte für jede Komponente erlaubt, selbst wenn die resultierende Farbe außerhalb der Grenzen des Farbsystems liegt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9-Video, Profil 2 Stufe 1.0, mit 10-Bit-YUV-Inhalt unter Verwendung von 4:2:0 Chroma-Subsampling, BT.2020 Primärfarben, ST 2084 EOTF (HDR SMPTE), BT.2020 nicht-konstante Luminanzfarbmatrix, und vollständigem Bereich von Chroma- und Luma-Codierung. Das Audio ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://de.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, haben die gleiche Syntax für den `codecs`-Parameter. Diese Medientypen umfassen [MPEG-4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (und in der Tat das [QuickTime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime)-Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Guides/Formats/Containers#3gp). Sowohl Video- als auch Audiotracks können mit den folgenden MIME-Typen unter Verwendung des `codecs`-Parameters beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien, die in MPEG-4 gekapselt sind                                                           |

Jeder durch den `codecs`-Parameter beschriebene Codec kann entweder als der Name des Containers (`3gp`, `mp4`, `quicktime` usw.) oder als Containername plus zusätzliche Parameter angegeben werden, um den Codec und dessen Konfiguration zu spezifizieren. Jeder Eintrag in der Codecliste kann eine Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec. Sie beginnt jedoch immer mit dem vierstelligen Bezeichner des Codecs, einem Punkt-Separator (`.`), gefolgt von dem Object Type Indication (OTI)-Wert für das spezifische Datenformat. Bei den meisten Codecs ist das OTI eine zweistellige hexadezimale Zahl, bei [AVC (H.264)](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) jedoch sechs hexadezimale Ziffern.

Somit sehen die Syntaxen für jeden der unterstützten Codecs folgendermaßen aus:

- `cccc[.pp]*` (Generisches ISO BMFF)
  - : Wobei `cccc` die vierstellige ID für den Codec ist und `pp` die Stelle ist, an der null oder mehr zweistellige kodierte Eigenschaftswerte stehen.
- `mp4a.oo[.A]` (MPEG-4-Audio)
  - : Wobei `oo` der Object Type Indication-Wert ist, der den Inhalt der Medien näher beschreibt und `A` der einstellige _Audio_-OTI ist. Die möglichen Werte für das OTI finden Sie auf der [Object Types page](https://mp4ra.org/registered-types/object-types) der MP4 Registration Authority Website. Zum Beispiel ist Opus-Audio in einer MP4-Datei `mp4a.ad`. Weitere Details finden Sie unter [MPEG-4-Audio](#mpeg-4-audio).
- `mp4v.oo[.V]` (MPEG-4-Video)
  - : Hierbei ist `oo` erneut der OTI, der den Inhalt genauer beschreibt, während `V` der einstellige _Video_-OTI ist.
- `avc1[.PPCCLL]` (AVC-Video)
  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), die Constraint-Set-Flags (`CC`) und das Level (`LL`) angeben. Siehe [AVC-Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint-Set-Flags-Byte besteht aus einstelligen booleschen Flags, wobei das bedeutendste Bit als Flag 0 (oder `constraint_set0_flag`, in einigen Ressourcen) bezeichnet wird, und jedes darauf folgende Bit um eins höher nummeriert ist. Derzeit werden nur die Flaggen 0 bis 2 verwendet; die anderen fünf Bits _müssen_ null sein. Die Bedeutungen der Flags variieren je nach verwendetem Profil.

    Das Level ist eine Festkommazahl, so dass ein Wert von `14` (Dezimal 20) das Level 2.0 bedeutet, während ein Wert von `3D` (Dezimal 61) das Level 6.1 bedeutet. Im Allgemeinen gilt: Je höher die Levelnummer, desto mehr Bandbreite wird der Stream verwenden und desto größer werden die unterstützten maximalen Videodimensionen.

- `avc3[.PPCCLL]` (Variable Auflösung AVC)
  - : Die `avc3`-Codec-Parameter haben die gleiche Syntax wie die `avc1`-Codec-Parameter.

#### AVC-Profile

Die folgenden sind die AVC-Profile und ihre Profilnummern zur Verwendung im `codecs`-Parameter sowie der Wert, der für die Constraints-Komponente `CC` anzugeben ist.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Nummer (Hex) | Constraints-Byte |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------- |
| **Constrained Baseline Profile (CBP)** CBP ist in erster Linie eine Lösung für Szenarien, in denen Ressourcen eingeschränkt sind oder der Ressourcenverbrauch kontrolliert werden muss, um die Wahrscheinlichkeit zu minimieren, dass die Medien schlecht funktionieren.                                                                                                                                                                                                                                                                                                                                                                | `42`         | `40`             |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutz gegen Datenverlust und Wiederherstellungsfähigkeit. Dies wird nicht mehr so häufig verwendet wie früher, bevor CBP eingeführt wurde. Alle CBP-Ströme gelten auch als BP-Ströme.                                                                                                                                                                                                                                                                                                                                                                                       | `42`         | `00`             |
| **Extended Profile (XP)** Entwickelt zum Streamen von Video über das Netzwerk, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen der Datenrobustheit und Stream-Änderungen.                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `58`         | `00`             |
| **Main Profile (MP)** Das Profil, das für Standard-Definition-Digitalfernsehen verwendet wird, das im MPEG-4-Format ausgestrahlt wird. _Nicht_ verwendet für HD-Fernsehsendungen. Die Bedeutung dieses Profils hat seit der Einführung des High-Profils, das 2004 für HDTV-Nutzung hinzugefügt wurde, nachgelassen.                                                                                                                                                                                                                                                                                                                     | `4D`         | `00`             |
| **High Profile (HiP)** Derzeit ist HiP das primäre Profil, das für Rundfunk- und disc-basierte HD-Videos verwendet wird. Es wird sowohl für HDTV-Sendungen als auch für Blu-Ray-Videos verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                       | `64`         | `00`             |
| **Progressive High Profile (PHiP)** Im Wesentlichen ein High-Profil ohne Unterstützung für Feldcodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `64`         | `08`             |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bi-prädiktive Slices ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `64`         | `0C`             |
| **High 10 Profile (Hi10P)** High Profil, jedoch mit Unterstützung für bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `6E`         | `00`             |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P um Unterstützung für 4:2:2 Chroma-Subsampling sowie bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `7A`         | `00`             |
| **High 4:4:4 Predictive Profile (Hi444PP)** Zusätzlich zu den in Hi422P enthaltenen Fähigkeiten fügt Hi444PP Unterstützung für 4:4:4 Chroma-Subsampling hinzu (wobei keine Farbwerte verworfen werden). Es umfasst auch Unterstützung für bis zu 14 Bits pro Farbprobe und effizientes verlustfreies Regionen-Codierung. Die Option, jedes Bild als drei separate Farbbilder zu kodieren (d.h. jedes Farbdatum wird gespeichert, als ob es ein einzelnes monochromes Bild wäre).                                                                                                                                                        | `F4`         | `00`             |
| **High 10 Intra Profile** High 10 beschränkt auf die ausschließliche Verwendung von intra-Rahmen. Primär für professionelle Anwendungen genutzt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `6E`         | `10`             |
| **High 4:2:2 Intra Profile** Das Hi422-Profil mit ausschließlicher Nutzung von intra-Rahmen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `7A`         | `10`             |
| **High 4:4:4 Intra Profile** Das High 4:4:4-Profil, auf die Nutzung von nur intra-Rahmen beschränkt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `F4`         | `10`             |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4-Profil, auf die ausschließliche Nutzung von intra-Rahmen beschränkt, und die Nutzung von CAVLC-Entropiecoding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `2C`         | `00`             |
| **Scalable Baseline Profile** Gedacht für den Einsatz mit Videokonferenzen sowie Überwachungs- und Mobilnutzung, das [SVC](https://de.wikipedia.org/wiki/Scalable_Video_Coding)-Baseline-Profil basiert auf dem Constrained Baseline Profil von AVC. Die Basisschicht innerhalb des Stroms wird auf einem hohen Qualitätsniveau bereitgestellt, mit einer Anzahl von sekundären Nebenströmen, die alternative Formen des gleichen Videos für die Nutzung in verschiedenen eingeschränkten Umgebungen bieten. Diese können jede Kombination aus reduzierter Auflösung, reduzierter Bildrate oder erhöhten Kompressionsstufen beinhalten. | `53`         | `00`             |
| **Scalable Constrained Baseline Profile** Primär für Echtzeitkommunikationsanwendungen verwendet. Noch nicht durch WebRTC unterstützt, aber eine Erweiterung der WebRTC API [um SVC zu ermöglichen](https://github.com/w3c/webrtc-svc) ist in der Entwicklung.                                                                                                                                                                                                                                                                                                                                                                          | `53`         | `04`             |
| **Scalable High Profile** Gedacht größtenteils für den Einsatz in Rundfunk- und Streaminganwendungen. Die Basis- (oder höchstqualitätige) Schicht muss dem AVC High Profil entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `56`         | `00`             |
| **Scalable Constrained High Profile** Eine Teilmenge des Scalable High Profils, hauptsächlich für Echtzeitkommunikation gedacht.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `56`         | `04`             |
| **Scalable High Intra Profile** In der Hauptsache nur für Produktionsanwendungen nützlich, unterstützt dieses Profil nur die ausschließliche Nutzung von intra-Rahmen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `56`         | `20`             |
| **Stereo High Profile** Das Stereo High Profil bietet stereoskopisches Video unter Verwendung von zwei Wiedergaben der Szene (linkes Auge und rechtes Auge). Ansonsten bietet es die gleichen Funktionen wie das High Profil.                                                                                                                                                                                                                                                                                                                                                                                                           | `80`         | `00`             |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten unter Verwendung sowohl zeitlicher als auch MVC-Zwischenansichtsvorhersage. _Unterstützt nicht_ Feldbilder oder makroblock-adaptive Frame-Feld-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                               | `76`         | `00`             |
| **Multiview Depth High Profile** Basierend auf dem High Profil, dem der Hauptnebenstrom entsprechen muss. Die übrigen Nebenströme müssen dem Stereo High Profil entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `8A`         | `00`             |

#### MPEG-4-Audio

Wenn der Wert eines Eintrags in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Werts folgendermaßen sein:

```plain
mp4a.oo[.A]
```

Hierbei steht `oo` für den zweistelligen hexadezimalen Object Type Indication, der die verwendete Codec-Klasse für die Medien spezifiziert. Die OTIs werden von der [MP4 Registration Authority](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/registered-types/object-types) pflegt. Ein spezieller Wert ist `40`; dies zeigt an, dass die Medien MPEG-4-Audio (ISO/IEC 14496 Teil 3) sind. Um noch spezifischer zu sein, wird für OTI `40` eine dritte Komponente – der Audio Object Type – hinzugefügt, um den Typ auf einen bestimmten Subtyp von MPEG-4 einzugrenzen.

Der Audio Object Type wird als ein- oder zweistelliges _Dezimal_-Wert angegeben (anders als die meisten anderen Werte im `codecs`-Parameter, die hexadezimal sind). Beispiel: MPEG-4s AAC-LC hat eine Audioobjekttyp-Nummer von `2`, daher ist der vollständige `codecs`-Wert, der AAC-LC repräsentiert, `mp4a.40.2`.

Ergo kann ER AAC LC, dessen Audioobjekttyp 17 ist, mit dem vollständigen `codecs`-Wert `mp4a.40.17` angegeben werden. Einstellige Werte können entweder als eine einzige Ziffer (was die beste Wahl ist, da sie am weitesten kompatibel ist) oder mit einer führenden Null zu zwei Ziffern gepolstert angegeben werden, wie `mp4a.40.02`.

> [!NOTE]
> Die Spezifikation hat ursprünglich vorgeschrieben, dass die Audioobjekttypnummer in der dritten Komponente nur eine Dezimalziffer sein sollte. Jedoch haben Ergänzungen zur Spezifikation im Laufe der Zeit den Bereich dieser Werte weit über eine Dezimalziffer hinaus erweitert, sodass jetzt die dritte Komponente entweder eine oder zwei Ziffern sein kann. Das Hinzufügen einer führenden Null für Werte unter 10 ist optional. Ältere Implementierungen von MPEG-4-Codecs unterstützen möglicherweise keine zweistelligen Werte, daher wird die Verwendung einer einzigen Ziffer, wenn möglich, die Kompatibilität maximieren.

Die Audioobjekttypen sind in ISO/IEC 14496-3 Teil 1, Abschnitt 1.5.1 definiert. Die untenstehende Tabelle bietet eine Grundliste der Audioobjekttypen und im Fall der häufigeren Objekttypen eine Liste der unterstützenden Profile, aber Sie sollten auf die Spezifikation verweisen, wenn Sie mehr über die inneren Abläufe eines bestimmten MPEG-4-Audiotyps erfahren müssen.

<table class="standard-table">
  <caption>
    MPEG-4 Audioobjekttypen
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audioobjekttyp</th>
      <th scope="col">Profile Unterstützung</th>
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
      <td>TwinVQ (Codierung für Ultraklein-Bitraten)</td>
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
      <td>TTSI (Text-to-Speech-Interface)</td>
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
        ER AAC LD (Error Resilient AAC Low-Delay; für bidirektionale
        Kommunikation verwendet)
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

### HEVC: MP4, Quicktime, Matroska

Der [High Efficiency Video Coding](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265)-Codec, auch bekannt als H.265 und MPEG-H Part 2, kann in den [MP4](/de/docs/Web/Media/Guides/Formats/Containers#mpeg-4_mp4) (`video/mp4`), [Quicktime](/de/docs/Web/Media/Guides/Formats/Containers#quicktime) (`video/quicktime`) und [Matroska](https://de.wikipedia.org/wiki/Matroska) (`video/matroska`) Containern eingeschlossen werden.

Die Verwendung von HEVC wird im Allgemeinen durch einen unterstützenden MIME-Typ mit dem angehängten `codecs`-Parameter beschrieben; Syntaxbeispiele sind wie folgt:

```plain
video/mp4;codecs=hvc1.1.6.L186.B0,mp4a.40.2
video/mp4;codecs=hvc1.1.6.L186.B0,opus
video/mp4;codecs=hev1.1.6.L186.B0,mp4a.40.2
video/mp4;codecs=hev1.1.6.L186.B0,opus
```

Die Syntaxen für jeden der unterstützten Codecs sehen folgendermaßen aus:

- `hvc1[.A.B.C.D]` (HEVC-Video)
  - : Der Wert beginnt mit der vier Zeichen langen Kennung des Codecs (`hvc1`), gefolgt von vier oder mehr durch Punkte (`.`) getrennten Werten:
    - `A`
      - : Der **`general_profile_space`**. Dies wird als ein oder zwei Zeichen kodiert:
        - Das erste Zeichen ist `A`, `B` oder `C`, das `general_profile_space` `1`, `2` oder `3` darstellt, oder kein Zeichen, das `general_profile_space` `0` darstellt.
        - Das zweite Zeichen ist eine Dezimalzahl, die das `general_profile_idc` darstellt.
          > [!NOTE]
          > In den obigen Beispielen bedeutet der Wert `1` `general_profile_space === 0` (kein Zeichen) und `general_profile_idc === 1`.
    - `B`
      - : Ein 32-Bit-Wert, der eine oder mehrere **General-Profile-Kompatibilitäts-Flags** (`general_profile_compatibility_flag`) darstellt, die im Hexadezimalformat kodiert sind (führende Nullen können weggelassen werden), und die in umgekehrter Bit-Reihenfolge von am wenigsten zu am meisten signifikant spezifiziert sind. Die Werte können im Bereich von `31` (am bedeutendsten) bis `0` (am wenigsten bedeutend) liegen und sind in [ISO/IEC 23008-2](https://www.iso.org/standard/90502.html) spezifiziert.

        > [!NOTE]
        > In den obigen Beispielen bedeutet der Wert `6` `general_profile_compatibility_flag === 6`.

    - `C`
      - : Das **`general_tier_flag`**, kodiert als `L` (`general_tier_flag === 0`) oder `H` (`general_tier_flag === 1`), gefolgt von dem **`general_level_idc`**, kodiert als Dezimalzahl.

        > [!NOTE]
        > In den obigen Beispielen bedeutet der Wert `L186` `general_tier_flag === 0`, gefolgt von `general_level_idc === 186`.

    - `D`
      - : Ein oder mehrere 6-Byte **Einschränkungsflaggen**. Beachten Sie, dass jedes Flag als Hexadezimalzahl kodiert ist und durch eine weitere Periode getrennt ist; nachfolgende Bytes, die null sind, können weggelassen werden.

        > [!NOTE]
        > In den obigen Beispielen ist nur ein Einschränkungsflag vorhanden — `B0`.

- `hev1[.A.B.C.D]` (Variable Auflösung HEVC)
  - : Die `hev1`-Codec-Parameter haben die gleiche Syntax wie die `hvc1`-Codec-Parameter.

### WebM

Die grundlegende Form für einen WebM `codecs`-Parameter besteht darin, einen oder mehrere der vier WebM-Codecs durch Kommas getrennt nach Namen aufzulisten. Die untenstehende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                                           |
| -------------------------------- | ---------------------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit enthaltenem VP8-Video; kein Audio ist spezifiziert. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit enthaltenem VP9-Video.                              |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                                  |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                                    |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.                     |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.                       |

Die Zeichenfolgen `vp8.0` und `vp9.0` funktionieren auch, werden jedoch nicht empfohlen.

## Verwendung des Codecs-Parameters

Sie können den `codecs`-Parameter in mehreren Situationen verwenden. Zum einen können Sie ihn zusammen mit dem {{HTMLElement("source")}}-Element verwenden, um eine Gruppe von Optionen für einen Browser zu erstellen, aus dem der Browser beim Auswählen des Formats der Medien, die dem Benutzer im Element präsentiert werden sollen, auswählen kann.

Sie können den Codecs-Parameter auch beim Angeben eines MIME-Medientyps für die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) verwenden; diese Methode gibt ein Boolean zurück, das angibt, ob die Medien auf dem aktuellen Gerät wahrscheinlich funktionieren oder nicht.

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, ein Kind des {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elements
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Leitfaden zu auf dem Web verwendeten Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs)
- [Leitfaden zu auf dem Web verwendeten Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Das richtige HTML-Codecs-Parameter für ein AV1-Video erhalten](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)
- [High Efficiency Video Coding](https://de.wikipedia.org/wiki/High_Efficiency_Video_Coding) auf Wikipedia

---
title: Codecs in gängigen Medientypen
slug: Web/Media/Formats/codecs_parameter
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Auf einer grundlegenden Ebene können Sie den Typ einer Mediendatei mit einem einfachen [MIME](/de/docs/Glossary/MIME)-Typ angeben, wie `video/mp4` oder `audio/mpeg`. Viele Medientypen – insbesondere jene, die Videospuren unterstützen – profitieren jedoch von der Möglichkeit, das Format der darin enthaltenen Daten präziser zu beschreiben. Zum Beispiel sagt die Beschreibung eines Videos in einer [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts darüber aus, welches Format das eigentliche Medium hat.

Aus diesem Grund kann der `codecs`-Parameter dem MIME-Typ hinzugefügt werden, der Medieninhalte beschreibt. Mit ihm können container-spezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Videocodecs, den Typ der verwendeten Audiotracks und so weiter enthalten.

Dieser Leitfaden untersucht kurz die Syntax des Medientyp-Parameters `codecs` und wie er mit der MIME-Typ-Zeichenfolge verwendet wird, um Details über den Inhalt von Audio- oder Videomedien bereitzustellen, die über die Angabe des Container-Typs hinausgehen.

## Containerformat-MIME-Typen

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem der Typ des Mediums (`audio`, `video`, etc.), dann ein Schrägstrich (`/`), und schließlich das Format, das zur Speicherung des Mediums verwendet wird, angegeben wird:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Formats/Containers#mpegmpeg-2)-Dateityp verwendet, wie eine MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Formats/Containers#ogg)-Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle erwähnt, war dieses Format einst im Internet weit verbreitet, wird aber nicht mehr häufig verwendet, da dafür ein Plugin erforderlich war.

Jedoch ist jeder dieser MIME-Typen vage. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, die eine beliebige Anzahl von Profilen, Leveln und anderen Konfigurationsfaktoren haben können. Aus diesem Grund möchten Sie möglicherweise den `codecs`-Parameter zusammen mit dem Medientyp einbeziehen.

## Grundlegende Syntax

Sie können den `codecs`-Parameter zum Medientyp hinzufügen. Um dies zu tun, fügen Sie ein Semikolon (`;`) gefolgt von `codecs=` und dann der Zeichenfolge hinzu, die das Format des Inhalts der Datei beschreibt. Einige Medientypen erlauben nur die Angabe der Namen der zu verwendenden Codecs, während andere auch die Angabe verschiedener Einschränkungen für diese Codecs erlauben. Sie können mehrere Codecs angeben, indem Sie sie mit Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Formats/Containers#ogg)-Datei, die eine [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis)-Audiospur enthält.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Formats/Containers#webm)-Datei, die [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8)-Video und/oder [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis)-Audio enthält.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Datei mit [AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) (H.264)-Video, Hauptprofil, Level 4.2.

Wie bei jedem MIME-Typ-Parameter muss `codecs` auf `codecs*` geändert werden (beachten Sie das Sternchenzeichen `*`), wenn eine der Eigenschaften des Codecs Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} prozentcodiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu codieren; ähnlich können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine vorher codierte Parameterliste zu decodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Liste der Codecs jeden für den Inhalt der Datei verwendeten Codec enthalten. Die Liste kann auch Codecs enthalten, die in der Datei nicht vorhanden sind.

## Codec-Optionen nach Container

Die untenstehenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Einige der obenstehenden Links führen zum selben Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO-Base-Media-File-Format (ISO BMFF) basieren und daher die gleiche Syntax verwenden.

### AV1

Die Syntax des `codecs`-Parameters für AV1 wird in der [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/)-Spezifikation, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam), definiert.

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Auf Chromium basierende Browser akzeptieren alle oder keinen der optionalen Parameter (im Gegensatz zur Spezifikation, die alle oder keine verlangt).

Die Komponenten des Codec-Parameter-Strings sind im Folgenden detailliert beschrieben. Jede Komponente hat eine feste Zeichenlänge; ist der Wert kürzer, muss er mit führenden Nullen aufgefüllt werden.

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
                "Main"-Profil; unterstützt YUV 4:2:0 oder monochrome Bitstreams mit einer Farbtiefe von 8 oder 10 Bit pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High"-Profil bietet Unterstützung für 4:4:4-Chroma-Subsampling.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional"-Profil fügt Unterstützung für 4:2:2-Chroma-Subsampling und 12-Bit-Farbe pro Komponente hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die in das X.Y-Format konvertiert wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code>.
        Siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation für Details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Das einstellige Tier-Indikator. Für das Main-Tier (<code>seq_tier</code> gleich 0) ist dieses Zeichen der Buchstabe <code>M</code>.
        Für das High-Tier (<code>seq_tier</code> ist 1) ist dieses Zeichen der Buchstabe <code>H</code>.
        Das High-Tier ist erst ab Level 4.0 verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponenten-Bit-Tiefe. Dieser Wert muss 8, 10 oder 12 sein; welche Werte gültig sind, hängt vom Profil und anderen Eigenschaften ab.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Das einstellige Monochrom-Flag; wenn dies 0 ist, enthält das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten vollständig in der Y-Ebene und sind daher monochromatisch.
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
          Dies, zusammen mit der <code>M</code>-Komponente, kann verwendet werden, um das Chroma-Subsampling-Format zu erstellen:
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
          Die dritte Ziffer in <code>CCC</code> zeigt die Position der Chroma-Probe an, wobei ein Wert von 0 angibt, dass die Position unbekannt ist und während der Dekodierung separat angegeben werden muss; ein Wert von 1 gibt an, dass die Probe horizontal mit der (0, 0)-Luma-Probe zusammenfällt; und ein Wert von 2 gibt an, dass die Probe mit der (0, 0)-Luma-Probe zusammenfällt.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert gibt das Farbsystem an, das von den Medien verwendet wird.
        Zum Beispiel ist BT.2020/BT.2100 Farbe, die für HDR-Video verwendet wird, <code>09</code>.
        Die Informationen dazu und für jede der übrigen Komponenten finden sich im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Abschnitt "Color config semantics"</a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die verwendet wird, um das Gamma (im technischen Jargon liebevoll als "opto-electrical transfer function" bezeichnet) von der Quelle zum Display abzubilden.
        Zum Beispiel ist 10-bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code>-Konstante wählt die Matrixkoeffizienten aus, die verwendet werden, um die roten, blauen und grünen Kanäle in Luma- und Chroma-Signale umzuwandeln.
        Zum Beispiel werden die Standardkoeffizienten für BT.709 durch den Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Ein einstelliger Indikator, der angibt, ob die Farbe die volle Bandbreite der möglichen Werte verwenden darf (<code>1</code>), oder ob sie auf die Werte beschränkt sein soll, die für die angegebene Farbkonfiguration als legal gelten (das heißt, die <strong>Studio Swing Representation</strong>).
        Der Standardwert ist 0 (Verwendung der Studio Swing Representation).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder ab `M` (Monochrom-Flag) sind optional; Sie können die Angabe von Feldern an einem beliebigen Punkt beenden (aber keine Felder willkürlich auslassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiel-AV1-Codec-Zeichenfolgen:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profil, Level 5.3, Main Tier, 10 Bits pro Farbkomponente, 4:2:2 Chroma-Subsampling mit ITU-R BT.2100 Farbprimärfarben, Transfermerkmal und YCbCr-Farbmatrix. Die Studio Swing Representation ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profil, Level 5.3, Main Tier, 10 Bits pro Farbkomponente. Die restlichen Eigenschaften werden aus den Standards übernommen: 4:2:0 Chroma-Subsampling, BT.709 Farbprimärfarben, Transfermerkmal und Matrixkoeffizienten. Studio Swing Representation.

### VP9

#### ISO Base Media File Format Syntax

Die Syntax des `codecs`-Parameters für VP9 wird in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/)-Spezifikation im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) definiert.

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Reihe von durch Punkte (`.`) getrennten zweistelligen Werten.

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
          Die zweistellige Profilnummer, die bei Bedarf mit führenden Nullen auf genau zwei Ziffern aufgefüllt ist.
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
                Ermöglicht nur 8 Bits pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal unterabtastet).
                Unterstützt 8, 10 oder 12 Bits pro Farbmusterkomponente.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
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
        Die Levelnummer ist in Festkommadarstellung, wobei die erste Ziffer die Einerstelle ist und die zweite Ziffer die
        Zehntel darstellt.
        Zum Beispiel bedeutet Level 3 <code>30</code> und Level 6.1 ist <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die Farbtiefe der Luma- und Farbkomponentenwerte; erlaubte Werte sind 8, 10 und 12.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          Ein zweistelliger Wert, der angibt, welches Chroma-Subsampling-Format verwendet werden soll.
          Die folgende Tabelle listet erlaubte Werte auf; siehe <a href="/de/docs/Web/Media/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> in unserem "Digitale Videokonzepte"-Leitfaden für weitere Informationen zu diesem Thema und anderen.
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
                4:2:0 mit den Chroma-Proben zwischen den Pixeln positioniert
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
                4:2:2 Chroma-Subsampling (bei 4 von 4 horizontalen Pixeln wird die Luminanz verwendet)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 Chroma-Subsampling (bei jedem Pixel werden sowohl Luminanz als auch Chrominanz beibehalten)
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
          Eine zweistellige Ganzzahl, die angibt, welche der Farbprimärfarben gemäß Abschnitt 8.1 des <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>-Standards verwendet wird.
          Diese Komponente und jede danach ist optional.
        </p>
        <p>Die möglichen Werte der Farbprimärkomponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Farbprimär-Identifikatoren
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
              <td><em>Für zukünftige Nutzung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 ist der Standard für hochauflösendes (HD) Fernsehen; sRGB ist der am häufigsten verwendete Farbraum bei Computermonitoren.
                Das Sendesignal BT.709 verwendet 8-Bit-Farbtiefe mit dem legalen Bereich von 16 (schwarz) bis 235 (weiß).
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
              <td><em>Für zukünftige Nutzung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>
                BT.470 System M, NTSC (Standard Definition Television in den USA)
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
                [SMPTE](/de/docs/Glossary/SMPTE) 240M (historisch).
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
                Wird für ultrahochauflösendes (4K) High Dynamic Range (HDR)-Video verwendet und bietet eine sehr große Farbbreite ([Gamut](/de/docs/Glossary/gamut)) und unterstützt 10-Bit- und 12-Bit-Farbtiefen.
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
                Beschreibt die Referenzprojektor- und Umgebungsbedingungen für eine konsistente Filmvorführung.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Farbverarbeitung für D-Cinema).
                Ingenieurleitfaden, der Empfehlungen zur Farbsignal-Dekodierung für digitale Filme gibt.
              </td>
            </tr>
            <tr>
              <td><code>13</code> – <code>21</code></td>
              <td><em>Für zukünftige Nutzung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
            <tr>
              <td><code>22</code></td>
              <td>EBU Tech 3213-E</td>
            </tr>
            <tr>
              <td><code>23</code> – <code>255</code></td>
              <td><em>Für zukünftige Nutzung durch ITU oder ISO/IEC reserviert</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Eine zweistellige Ganzzahl, die die
        <code>transferCharacteristics</code> für das Video anzeigt.
        Dieser Wert stammt aus Abschnitt 8.2 von <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und gibt die Transfermerkmale an, die beim Anpassen der dekodierten Farbe an das Ausgabemedium verwendet werden sollen.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code>-Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>-Spezifikation.
        Dieser Wert gibt an, welche Koeffizienten beim Übersetzen von den nativen Rot-, Blau- und Grünprimärfarben zu den Luma- und Chromasignalen verwendet werden sollen.
        Diese Koeffizienten werden wiederum mit den in demselben Abschnitt beschriebenen Gleichungen verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob man den Schwarzwert und die Farbbandbreite jeder Farbkomponente auf den erlaubten Bereich beschränken soll.
        Für 8-Bit-Farbsamples liegt der erlaubte Bereich zwischen 16 und 235.
        Ein Wert von <code>00</code> gibt an, dass diese Einschränkungen durchgesetzt werden sollten, während ein Wert von <code>01</code> die volle Bandbreite möglicher Werte für jede Komponente erlaubt, auch wenn die resultierende Farbe für das Farbsystem unzulässig ist.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9-Video, Profil 2 Level 1.0, mit 10-Bit YUV-Inhalten, die 4:2:0 Chroma-Subsampling verwenden, BT.2020 Primärfarben, ST 2084 EOTF (HDR SMPTE), BT.2020 nicht-konstante Luminanzfarbmatrix und Vollbereichs-Chroma- und Luma-Codierung. Die Audiospur ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, verwenden die gleiche Syntax für den `codecs`-Parameter. Diese Medientypen schließen [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) ein (und tatsächlich das [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime)-Dateiformat, auf dem MPEG-4 basiert) sowie [3GP](/de/docs/Web/Media/Formats/Containers#3gp). Sowohl Video- als auch Audiospuren können mit dem `codecs`-Parameter mit den folgenden MIME-Typen beschrieben werden:

| MIME-Typ         | Beschreibung                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien, die in MPEG-4 gekapselt sind                                                                       |

Jeder durch den `codecs`-Parameter beschriebene Codec kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime`, usw.) oder als Containername mit zusätzlichen Parametern, die den Codec und seine Konfiguration spezifizieren, angegeben werden. Jeder Eintrag in der Liste der Codecs kann eine Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; sie beginnt jedoch immer mit dem vierstelligen Identifikator des Codecs, einer Punkttrennung (`.`), gefolgt vom Object Type Indication (OTI)-Wert für das spezifische Datenformat. Für die meisten Codecs ist der OTI eine zweistellige Hexadezimalzahl; jedoch ist es für [AVC (H.264)](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) sechs hexadezimale Ziffern.

So sehen die Syntaxen für jeden der unterstützten Codecs aus:

- `cccc[.pp]*` (Generisches ISO BMFF)
  - : Wo `cccc` die vierstellige ID für den Codec ist und `pp` steht, wo null oder mehr zweistellige codierte Eigenschaftswerte angegeben werden können.
- `mp4a.oo[.A]` (MPEG-4 Audio)
  - : Wo `oo` der Object Type Indication-Wert ist, der den Inhalt der Medien genauer beschreibt, und `A` der einstellige _Audio_-OTI ist. Die möglichen Werte für den OTI finden Sie auf der MP4 Registration Authority-Website auf der Seite [Object Types](https://mp4ra.org/#/object_types). Zum Beispiel ist Opus-Audio in einer MP4-Datei `mp4a.ad`. Weitere Details finden Sie unter [MPEG-4 Audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4 Video)
  - : Hier ist `oo` wieder der OTI, der den Inhalt genauer beschreibt, während `V` der einstellige _Video_-OTI ist.
- `avc1[.PPCCLL]` (AVC Video)

  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), Constraint-Set-Flags (`CC`) und das Level (`LL`) angeben. Siehe [AVC Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint-Set-Flags-Byte besteht aus einstelligen booleschen Flags, wobei das höchstwertige Bit als Flag 0 (oder `constraint_set0_flag`, in einigen Ressourcen) bezeichnet wird, und jedes nachfolgende Bit eins höher durchnummeriert wird. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bits _müssen_ Null sein. Die Bedeutung der Flags variiert je nach verwendetem Profil.

    Das Level ist eine Festkommazahl, daher bedeutet ein Wert von `14` (Dezimal 20) Level 2.0, während ein Wert von `3D` (Dezimal 61) Level 6.1 bedeutet. Im Allgemeinen gilt: Je höher die Levelnummer, desto mehr Bandbreite wird der Stream nutzen und desto höhere maximale Videodimensionen werden unterstützt.

#### AVC-Profile

Die folgenden sind die AVC-Profile und ihre Profilnummern für die Verwendung im `codecs`-Parameter sowie der Wert, der für die Constrain-Komponente `CC` angegeben werden muss.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Nummer (Hex) | Constraints-Byte |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ---------------- |
| **Constrained Baseline Profile (CBP)** CBP ist hauptsächlich eine Lösung für Szenarien, in denen Ressourcen begrenzt sind oder der Ressourceneinsatz kontrolliert werden muss, um das Risiko zu minimieren, dass die Medien schlecht ausgeführt werden.                                                                                                                                                                                                                                                                                                                                       | `42`         | `40`             |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutz gegen Datenverluste und Verbesserungen bei der Wiederherstellung. Dies wird nicht so häufig verwendet, wie es vor der Einführung von CBP der Fall war. Alle CBP-Streams gelten auch als BP-Streams.                                                                                                                                                                                                                                                                                                                          | `42`         | `00`             |
| **Extended Profile (XP)** Entwickelt für das Streaming von Videos über das Netzwerk, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen bei der Datenrobustheit und Stream-Umschaltung.                                                                                                                                                                                                                                                                                                                                                                            | `58`         | `00`             |
| **Main Profile (MP)** Das Profil, das für die Standard-Definition-Digitalfernsehausstrahlung im MPEG-4-Format verwendet wird. _Nicht_ verwendet für hochauflösendes Fernsehen. Die Bedeutung dieses Profils hat seit der Einführung des High-Profils – das 2004 für HDTV eingeführt wurde – nachgelassen.                                                                                                                                                                                                                                                         | `4D`         | `00`             |
| **High Profile (HiP)** Gegenwärtig ist HiP das primäre Profil, das für Rundfunk und discbasiertes HD-Video verwendet wird; es wird sowohl für HD-Fernsehausstrahlungen als auch für Blu-Ray-Video verwendet.                                                                                                                                                                                                                                                                                                                                                                                    | `64`         | `00`             |
| **Progressive High Profile (PHiP)** Dem High-Profile vergleichbar, jedoch ohne Unterstützung für Feldkodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `64`         | `08`             |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bi-prädiktive Scheiben ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `64`         | `0C`             |
| **High 10 Profile (Hi10P)** High-Profile, jedoch mit Unterstützung für bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `6E`         | `00`             |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P durch Hinzufügen von Unterstützung für 4:2:2-Chroma-Subsampling mit bis zu 10 Bits pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                         | `7A`         | `00`             |
| **High 4:4:4 Predictive Profile (Hi444PP)** Neben den Fähigkeiten von Hi422P fügt Hi444PP Unterstützung für 4:4:4-Chroma-Subsampling hinzu (bei dem keine Farbinformationen verworfen werden). Außerdem beinhaltet es Unterstützung für bis zu 14 Bits pro Farbstichprobe und effizientes verlustfreies Regionenkodierung. Die Möglichkeit, jeden Frame als drei separate Farbflächen zu kodieren (das heißt, die Daten jeder Farbe werden so gespeichert, als wäre es ein einzelnes monochromes Frame).                                                                                                          | `F4`         | `00`             |
| **High 10 Intra Profile** High 10 eingeschränkt auf alle Intra-Frame-Nutzung. Hauptsächlich für professionelle Apps verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                            | `6E`         | `10`             |
| **High 4:2:2 Intra Profile** Das Hi422-Profil für alle Intra-Frame-Nutzung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `7A`         | `10`             |
| **High 4:4:4 Intra Profile** Das High 4:4:4-Profil auf die Verwendung nur von Intra-Frames beschränkt.                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `F4`         | `10`             |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4-Profil beschränkt auf alle Intra-Nutzung und nur unter Verwendung der CAVLC-Entropie-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                                             | `44`         | `00`             |
| **Scalable Baseline Profile** Ausgelegt für den Einsatz bei Videokonferenzen sowie Überwachungs- und mobilen Anwendungen basiert das [SVC](https://en.wikipedia.org/wiki/SVC)-Basisprofil auf dem Constrained Baseline-Profil von AVC. Die Basisschicht innerhalb des Streams wird auf einem hohen Qualitätslevel bereitgestellt, mit einer Anzahl von sekundären Substreams, die alternative Formen desselben Videos zur Verwendung in verschiedenen eingeschränkten Umgebungen anbieten. Diese können jede Kombination aus reduzierter Auflösung, reduzierter Bildrate oder erhöhter Kompression umfassen. | `53`         | `00`             |
| **Scalable Constrained Baseline Profile** Hauptsächlich für Echtzeitkommunikationsanwendungen verwendet. Noch nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API [zur Erlaubnis von SVC](https://github.com/w3c/webrtc-svc) ist in Entwicklung.                                                                                                                                                                                                                                                                                                                | `53`         | `04`             |
| **Scalable High Profile** Meint hauptsächlich für Broadcast- und Streaming-Anwendungen. Die Basisschicht (oder die höchstqualitative Schicht) muss dem AVC High-Profil entsprechen.                                                                                                                                                                                                                                                                                                                                                                                      | `56`         | `00`             |
| **Scalable Constrained High Profile** Ein Teil des Scalable High Profiles, das hauptsächlich für die Echtzeitkommunikation entwickelt wurde.                                                                                                                                                                                                                                                                                                                                                                                                                               | `56`         | `04`             |
| **Scalable High Intra Profile** Hauptsächlich nur für Produktionsanwendungen nützlich, unterstützt dieses Profil nur die Nutzung aller Intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                         | `56`         | `20`             |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video unter Verwendung von zwei Darstellungen der Szene (linkes Auge und rechtes Auge). Ansonsten bietet es die gleichen Features wie das High Profile.                                                                                                                                                                                                                                                                                                                                                     | `80`         | `00`             |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten unter Verwendung sowohl von temporärer als auch von MVC-Intra-Ansichtsprädiktion. _Unterstützt keine_ Feldbilder oder makroblock-adaptive frame-feld Codierung.                                                                                                                                                                                                                                                                                                                                                                  | `76`         | `00`             |
| **Multiview Depth High Profile** Basierend auf dem High Profile, dem der Haupt-Substream genügen muss. Die restlichen Substreams müssen dem Stereo High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                      | `8A`         | `00`             |

#### MPEG-4 Audio

Wenn der Wert eines Eintrags in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Wertes sein:

```plain
mp4a.oo[.A]
```

Hierbei ist `oo` die zweistellige hexadezimale Object Type Indication, die die Klasse des für die Medien verwendeten Codecs angibt. Die OTIs werden von der [MP4 Registration Authority](https://mp4ra.org/) festgelegt, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/#/object_types) pflegt. Ein besonderer Wert ist `40`; dieser gibt an, dass es sich bei den Medien um MPEG-4-Audio (ISO/IEC 14496 Teil 3) handelt. Um noch spezifischer zu sein, wird ein drittes Element – der Audio Object Type – hinzugefügt, um den Typ genauer auf einen bestimmten Subtyp von MPEG-4 einzugrenzen.

Der Audio Object Type wird als ein- oder zweistellige _dezimale_ Zahl angegeben (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die hexadezimal sind). Zum Beispiel hat MPEG-4s AAC-LC einen Audio Object Type Nummer von `2`, also ist der vollständige `codecs`-Wert, der AAC-LC darstellt, `mp4a.40.2`.

Daher kann ER AAC LC, dessen Audio Object Type 17 ist, mit dem vollständigen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einstellige Werte können entweder als eine Ziffer (was die beste Wahl ist, da sie am breitesten kompatibel ist) oder mit einer führenden Null, die sie auf zwei Ziffern auffüllt, wie `mp4a.40.02`, angegeben werden.

> [!NOTE]
> Die Spezifikation bestimmte ursprünglich, dass die Audio Object Type Nummer im dritten Element nur ein Dezimalzeichen lang sein soll. Aber Änderungen an der Spezifikation über die Zeit hinweg haben den Bereich dieser Werte weit über ein Dezimalzeichen hinaus erweitert, sodass nun der dritte Parameter entweder ein- oder zweistellig sein kann. Die Auffüllung von Werten unter 10 mit einer führenden `0` ist optional. Ältere Implementierungen von MPEG-4-Codecs unterstützen möglicherweise keine zweistelligen Werte, daher wird durch die Verwendung einer einzelnen Ziffer die Kompatibilität maximiert.

Die Audio Object Types sind in ISO/IEC 14496-3 Unterabschnitt 1, Abschnitt 1.5.1 definiert. Die Tabelle unten bietet eine grundlegende Liste der Audio Object Types sowie – im Fall der häufiger vorkommenden Objekttypen – eine Liste der Profile, die diese unterstützen, aber Sie sollten sich auf die Spezifikation beziehen, wenn Sie mehr über die Funktionsweise eines bestimmten MPEG-4-Audiotyps erfahren müssen.

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
      <td>Main</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td>AAC LC (Low Complexity)</td>
      <td>Main, Skalierbar, HQ, LD v2, AAC, HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td>AAC SSR (Scalable Sampling Rate)</td>
      <td>Main</td>
    </tr>
    <tr>
      <td><code>4</code></td>
      <td>AAC LTP (Long Term Prediction)</td>
      <td>Main, Skalierbar, HQ</td>
    </tr>
    <tr>
      <td><code>5</code></td>
      <td>SBR (Spectral Band Replication)</td>
      <td>HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>6</code></td>
      <td>AAC Skaliert</td>
      <td>Main, Skalierbar, HQ</td>
    </tr>
    <tr>
      <td><code>7</code></td>
      <td>TwinVQ (Kodierung für ultra-niedrige Bitraten)</td>
      <td>Main, Skalierbar</td>
    </tr>
    <tr>
      <td><code>8</code></td>
      <td>CELP (Code-Excited Linear Prediction)</td>
      <td>Main, Skalierbar, Sprache, HQ, LD</td>
    </tr>
    <tr>
      <td><code>9</code></td>
      <td>HVXC (Harmonic Vector Excitation Coding)</td>
      <td>Main, Skalierbar, Sprache, LD</td>
    </tr>
    <tr>
      <td><code>10</code> – <code>11</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>12</code></td>
      <td>TTSI (Text to Speech Interface)</td>
      <td>Main, Skalierbar, Sprache, Synthese, LD</td>
    </tr>
    <tr>
      <td><code>13</code></td>
      <td>Main Synthetic</td>
      <td>Main, Synthese</td>
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
      <td>ER AAC Skaliert (Error Resilient AAC Scalable)</td>
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
        ER AAC LD (Error Resilient AAC Low-Delay; verwendet für zwei-Wege
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
      <td><code>45</code> und höher</td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

Die grundlegende Form für einen WebM `codecs`-Parameter besteht darin, einen oder mehrere der vier WebM-Codec-Namen, durch Kommas getrennt, aufzulisten. Die Tabelle unten zeigt einige Beispiele:

| MIME-Typ                        | Beschreibung                                               |
| -------------------------------- | --------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video, das VP8-Video enthält; kein Audio angegeben. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video, das VP9-Video enthält.                        |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                         |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                           |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.         |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.           |

Die Strings `vp8.0` und `vp9.0` funktionieren ebenfalls, werden jedoch nicht empfohlen.

## Verwendung des Codecs-Parameters

Sie können den `codecs`-Parameter in einigen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}}-Element verwenden, wenn Sie ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erstellen, um eine Gruppe von Optionen für den Browser festzulegen, aus denen er wählen kann, wenn er das Format des Mediums auswählen muss, das dem Benutzer im Element präsentiert werden soll.

Sie können den Codecs-Parameter auch verwenden, wenn Sie einen MIME-Medientyp an die Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) übergeben; diese Methode gibt einen booleschen Wert zurück, der angibt, ob die Medien wahrscheinlich auf dem aktuellen Gerät funktionieren.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, Kind der {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Leitfaden zu Audiocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Audio_codecs)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Ermittlung des korrekten HTML-Codecs-Parameters für ein AV1-Video](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)

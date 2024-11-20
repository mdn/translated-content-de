---
title: Codecs in gängigen Medientypen
slug: Web/Media/Formats/codecs_parameter
l10n:
  sourceCommit: 0604c441cfd74e87b63ff9a02f476f968592151c
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Auf einer grundlegenden Ebene können Sie den Typ einer Mediendatei mithilfe eines einfachen {{Glossary("MIME", "MIME")}}-Typs angeben, wie `video/mp4` oder `audio/mpeg`. Viele Medientypen – insbesondere diejenigen, die Videospuren unterstützen – können jedoch von der Möglichkeit profitieren, das Format der Daten innerhalb dieser präziser zu beschreiben. Beispielsweise sagt die Beschreibung eines Videos in einer [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` nichts darüber aus, in welchem Format die tatsächlichen Medien vorliegen.

Aus diesem Grund kann der `codecs`-Parameter zum MIME-Typ hinzugefügt werden, der Medieninhalte beschreibt. Mit ihm können container-spezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Video-Codecs, den für die Audiotracks verwendeten Typ und so weiter enthalten.

Dieser Leitfaden untersucht kurz die Syntax des `codecs`-Parameters des Medientyps und wie er mit dem MIME-Typ-String verwendet wird, um Details über den Inhalt von Audio- oder Videomedien bereitzustellen, über die bloße Angabe des Containertyps hinaus.

## MIME-Typen von Containerformaten

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem der Medientyp (`audio`, `video`, etc.) angegeben, dann ein Schrägstrich (`/`) und schließlich das Format, das zur Speicherung der Medien verwendet wird, geschrieben wird:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Formats/Containers#mpegmpeg-2)-Dateityp verwendet, wie z. B. eine MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Formats/Containers#ogg)-Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format einst häufig im Web genutzt, ist es jetzt jedoch nicht mehr, da ein Plugin erforderlich war, um es zu verwenden.

Jeder dieser MIME-Typen ist jedoch vage. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können eine beliebige Anzahl von Profilen, Stufen und anderen Konfigurationsfaktoren haben. Aus diesem Grund sollten Sie den `codecs`-Parameter zusammen mit dem Medientyp angeben.

## Grundlegende Syntax

Sie können den `codecs`-Parameter zum Medientyp hinzufügen. Fügen Sie dazu ein Semikolon (`;`) hinzu, gefolgt von `codecs=` und dann dem String, der das Format des Inhalts der Datei beschreibt. Einige Medientypen erlauben Ihnen nur, die Namen der zu verwendenden Codecs anzugeben, während andere es gestatten, auch verschiedene Einschränkungen für diese Codecs anzugeben. Sie können mehrere Codecs durch Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Formats/Containers#ogg)-Datei mit einer [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis)-Audio-Spur.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Formats/Containers#webm)-Datei mit [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8)-Video und/oder [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis)-Audio.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Datei mit [AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) (H.264)-Video, Hauptprofil, Ebene 4.2.

Wie bei jedem MIME-Typ-Parameter muss auch `codecs` in `codecs*` geändert werden (achten Sie auf das Sternchen, `*`), wenn einer der Codec-Eigenschaften Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} Prozent-codiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu codieren; ähnlich können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor codierte Parameterliste zu decodieren.

> [!NOTE]
> Wenn der `codecs`-Parameter verwendet wird, muss die angegebene Codecs-Liste jeden Codec enthalten, der für den Inhalt der Datei verwendet wird. Die Liste kann auch Codecs enthalten, die nicht in der Datei vorhanden sind.

## Codec-Optionen nach Container

Die folgenden Container unterstützen erweiterte Codec-Optionen in ihren `codecs`-Parametern:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Mehrere der oben genannten Links führen zum selben Abschnitt; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und daher dieselbe Syntax teilen.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) Spezifikation, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam), definiert.

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Chromium-basierte Browser akzeptieren jede Teilmenge der optionalen Parameter (statt alle oder keine, wie es die Spezifikation erfordert).

Die Komponenten dieses Codec-Parameter-Strings werden im Folgenden in der Tabelle detaillierter beschrieben. Jede Komponente hat eine feste Länge an Zeichen; ist der Wert kleiner als diese Länge, muss er mit führenden Nullen aufgefüllt werden.

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
              <td>"High"-Profil fügt Unterstützung für 4:4:4 Chroma-Subsampling hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional"-Profil fügt Unterstützung für 4:2:2 Chroma-Subsampling und 12-Bit pro Komponente-Farbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die in das X.Y-Formatlevel umgewandelt wird, wobei <code>X = 2 + (LL >> 2)</code> und <code>Y = LL &#x26; 3</code>.
        Siehe <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> in der AV1-Spezifikation für Details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Tier-Indikator. Für das Main-Tier (<code>seq_tier</code> entspricht 0) ist dieser Buchstabe das Zeichen <code>M</code>.
        Für das High-Tier (<code>seq_tier</code> ist 1) ist dieses Zeichen das Zeichen <code>H</code>.
        Das High-Tier ist nur für Level 4.0 und darüber verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponentenfarbtiefe. Dieser Wert muss einer der Werte 8, 10 oder 12 sein; welche Werte gültig sind, variiert je nach Profil und anderen Eigenschaften.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Die einstellige monochrome Flagge; wenn dies 0 ist, umfasst das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls sind die Videodaten vollständig in der Y-Ebene und sind daher monochromatisch.
        Siehe <a href="/de/docs/Web/Media/Formats/Video_concepts#yuv">YUV</a> für Details zum Funktionieren des YUV-Farbsystems.
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
              <th scope="col">Monochrome Flagge</th>
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
          Die dritte Ziffer in <code>CCC</code> zeigt die Chroma-Abtastposition an, wobei ein Wert von 0 bedeutet, dass die Position unbekannt ist und während der Dekodierung separat bereitgestellt werden muss; ein Wert von 1 bedeutet, dass die Abtastposition horizontal mit der (0, 0) Luma-Abtastung kollokiert ist; und ein Wert von 2 bedeutet, dass die Abtastposition neben (0, 0) Luma liegt.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0 Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert gibt das von den Medien verwendete Farbsystem an.
        Beispielsweise ist BT.2020/BT.2100 Farbe, wie sie für HDR-Video verwendet wird, <code>09</code>.
        Die Informationen hierzu – und zu jeder der verbleibenden Komponenten – finden Sie im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics"> Abschnitt „Farbkonfigurations-Semantik“ </a> der AV1-Spezifikation.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die verwendet wird, um das Gamma (in der Technik herrlich als "opto-elektronische Übertragungsfunktion" bezeichnet) von der Quelle auf das Display abzubilden.
        Beispielsweise ist 10-Bit BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige <code>matrix_coefficients</code>-Konstante wählt die Matrix-Koeffizienten aus, die verwendet werden, um die roten, blauen und grünen Kanäle in Luma- und Chroma-Signale umzuwandeln.
        Beispielsweise werden die standardmäßig für BT.709 verwendeten Koeffizienten durch den Wert <code>01</code> angegeben.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Ein einstelliger Indikator, der angibt, ob die Farbe den vollen Bereich möglicher Werte verwenden darf (<code>1</code>), oder auf die Werte beschränkt werden soll, die für die angegebene Farbkonfiguration als zulässig gelten (d. h. die <strong>Studio-Swing-Darstellung</strong>).
        Der Standardwert ist 0 (Verwendung der Studio-Swing-Darstellung).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder ab `M` (monochrome Flagge) sind optional; Sie können die Aufnahme von Feldern jederzeit beenden (aber können Felder nicht beliebig weglassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiel-AV1-Codec-Strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profile, Stufe 5.3, Main Tier, 10 Bits pro Farbkomponente, 4:2:2 Chroma-Subsampling mit ITU-R BT.2100-Farbprimaries, Transfercharakteristiken und YCbCr-Farbmatrix. Die Studio-Swing-Darstellung ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profile, Stufe 5.3, Main Tier, 10 Bits pro Farbkomponente. Die verbleibenden Eigenschaften werden aus den Standardeinstellungen übernommen: 4:2:0 Chroma-Subsampling, BT.709 Farbprimaries, Übertragungscharakteristiken und Matrixkoeffizienten. Studio Swing-Darstellung.

### VP9

#### ISO Based Media File Format Syntax

Die Syntax des `codecs`-Parameters für VP9 ist im [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) spezifiziert, im Abschnitt [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string).

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vierstelligen Code, der den im Container verwendeten Codec identifiziert, gefolgt von einer Serie von durch Punkte (`.`) getrennten zweiziffrigen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles ab `CC` (Chroma-Subsampling) ist optional, aber entweder alles oder nichts. Jede dieser Komponenten wird in der folgenden Tabelle beschrieben. Nach der Tabelle folgen einige Beispiele.

<table class="standard-table">
  <caption>
    WebM-Codecs-Parameterkomponenten
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
          Ein vierstelliger Code, der angibt, welcher der potenziell möglichen Codecs beschrieben wird.
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
          Die zweiziffrige Profilnummer, mit führenden Nullen aufgefüllt, falls erforderlich, um genau zwei Ziffern zu erreichen.
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
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal subsampled).
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
                Nur 4:2:0 (Chroma sowohl horizontal als auch vertikal subsampled).
                Unterstützt 8, 10 oder 12 Bits pro Farbkomponente.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                Alle Chroma-Subsampling-Formate sind erlaubt.
                Unterstützt 8, 10 oder 12 Bits pro Farbkomponente.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweiziffrige Levelnummer.
        Die Levelnummer wird als Festkommanotation angegeben, wobei die erste Ziffer die Ganze Zahl und die zweite Ziffer die Zehntel darstellt.
        Beispielsweise ist Level 3 <code>30</code> und Level 6.1 ist <code>61</code>.
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
          Die folgende Tabelle listet die zulässigen Werte auf; siehe <a href="/de/docs/Web/Media/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a> in unserem "Digitale Videokonzepte"-Leitfaden für weitere Informationen zu diesem und anderen Themen.
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
              <td>
                4:2:0 mit den Chroma-Abtastungen zwischen den Pixeln platziert
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 Chroma-Subsampling mit den Abtastungen, die mit Luma (0, 0) kollokiert werden
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                4:2:2 Chroma-Subsampling (4 von jeweils 4 horizontalen Pixeln werden zum Luminanzsignal verwendet)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 Chroma-Subsampling (jede Pixel-Luminanz und Chrominanz werden beide beibehalten)
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
          Ein zweistelliger ganzzahliger Wert, der angibt, welches der Farbprimaries aus Abschnitt 8.1 des <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a> Standards verwendet wird.
          Diese Komponente ist optional, ebenso wie jede nachfolgende Komponente.
        </p>
        <p>Die möglichen Werte der Farbprimaries-Komponente sind:</p>
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
              <td><em>Reserviert für zukünftige Verwendung durch ITU oder ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 ist der Standard für hochauflösendes (HD) Fernsehen; sRGB ist der am häufigsten verwendete Farbraum für Computerbildschirme.
                Broadcast BT.709 verwendet eine 8-Bit-Farbtiefe mit einem legalen Bereich von 16 (schwarz) bis 235 (weiß).
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
                <em>Funktional identisch zu <code>7</code>.</em>
              </td>
            </tr>
            <tr>
              <td><code>70</code></td>
              <td>
                {{Glossary("SMPTE", "SMPTE")}} 240M (historisch).
                <em>Funktional identisch zu <code>6</code>.</em>
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
                Verwendet für ultra-hochauflösendes (4K) High Dynamic Range (HDR) Video, diese haben einen sehr großen Farbraum ({{Glossary("gamut", "Gamut")}}) und unterstützen 10-Bit und 12-Bit Farbtiefe pro Komponente.
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
                Beschreibt die Bedingungen des Referenzprojektors und der Umgebung, die ein konsistentes Filmerlebnis bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Farbverarbeitung für D-Cinema).
                Technische Richtlinien geben Empfehlungen zur Dekodierung von Farbsignalen in digitalen Filmen.
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
        Ein zweistelliger ganzzahliger Wert, der die
        <code>transferCharacteristics</code> des Videos angibt.
        Dieser Wert stammt aus Abschnitt 8.2 von <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und kennzeichnet die Übertragungscharakteristiken, die bei der Adaption der dekodierten Farbe auf das Wiedergabe-Ziel verwendet werden.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Der zweistellige Wert für die <code>matrixCoefficients</code>-Eigenschaft.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>-Spezifikation.
        Dieser Wert gibt an, welche Koeffizienten zur Abbildung der nativen Rot-, Blau- und Grün-Primärfarben auf die Luma- und Chrominanzsignale verwendet werden sollen.
        Diese Koeffizienten werden wiederum mit den in diesem Abschnitt gefundenen Gleichungen verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob die Schwarzlevels und deren Reichweite auf den legalen Farbumfang beschränkt werden sollen.
        Bei 8-Bit-Farbmustern liegt der legale Bereich zwischen 16 und 235.
        Ein Wert von <code>00</code> gibt an, dass diese Begrenzungen durchgesetzt werden sollen, während ein Wert von <code>01</code> den vollen Bereich für jede Komponente erlaubt, auch wenn die resultierende Farbe aus dem erlaubten Farbumfang herausfällt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9-Video, Profil 2, Level 1.0, mit 10-Bit-YUV-Inhalten unter Verwendung von 4:2:0-Chroma-Subsampling, BT.2020-Primärfarben, ST 2084 EOTF (HDR-SMPTE), BT.2020-Farbmatrix ohne konstante Luminanz und voller Bereich für Chroma und Luma. Das Audio ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime, and 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, verwenden die gleiche Syntax für den `codecs`-Parameter. Diese Medientypen schließen [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) (und in der Tat das [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime)-Dateiformat, auf dem MPEG-4 basiert) ebenso ein wie [3GP](/de/docs/Web/Media/Formats/Containers#3gp). Sowohl Video- als auch Audiotracks können mithilfe des `codecs`-Parameters mit den folgenden MIME-Typen beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien, die in MPEG-4 gekapselt sind                                                           |

Jeder durch den `codecs`-Parameter beschriebene Codec kann entweder als Name des Containers (`3gp`, `mp4`, `quicktime` etc.) oder als Containername mit zusätzlichen Parametern zur Spezifikation des Codecs und seiner Konfiguration angegeben werden. Jeder Eintrag in der Codec-Liste kann eine beliebige Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; sie beginnt jedoch immer mit dem vierstelligen Codec-Identifikationscode, einem Punktseparator (`.`), gefolgt von dem Object Type Indication (OTI)-Wert für das spezifische Datenformat. Für die meisten Codecs ist der OTI eine zweistellige hexadezimale Zahl; für [AVC (H.264)](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) sind es jedoch sechs hexadezimale Ziffern.

Somit sehen die Syntaxen für jeden der unterstützten Codecs wie folgt aus:

- `cccc[.pp]*` (Generisches ISO BMFF)
  - : Wo `cccc` die vierstellige ID für den Codec ist und `pp` der Ort ist, an dem null oder mehr zweistellige codierte Eigenschaftswerte hingehen.
- `mp4a.oo[.A]` (MPEG-4 Audio)
  - : Wo `oo` der Object Type Indication-Wert ist, der den Inhalt der Medien genauer beschreibt und `A` der einstellig _audio_ OTI ist. Die möglichen Werte für den OTI finden Sie auf der Website der MP4-Registrierungsbehörde auf der [Object Types Seite](https://mp4ra.org/registered-types/object-types). Beispielsweise ist Opus-Audio in einer MP4-Datei `mp4a.ad`. Weitere Einzelheiten finden Sie unter [MPEG-4 Audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4 Video)
  - : Hier ist `oo` wieder der OTI, der den Inhalt genauer beschreibt, während `V` der einstellig _video_ OTI ist.
- `avc1[.PPCCLL]` (AVC Video)

  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), die Einschränkungssatzflaggen (`CC`) und das Level (`LL`) angeben. Siehe [AVC-Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint Set Flags Byte besteht aus einstelligen Booleschen Flags, wobei das bedeutendste Bit als Flag 0 (oder `constraint_set0_flag` in einigen Ressourcen) bezeichnet wird und jedes darauf folgende Bit um eins höher nummeriert ist. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bits müssen null sein. Die Bedeutungen der Flaggen variieren je nach verwendetem Profil.

    Das Level ist eine Festkommazahl, sodass ein Wert von `14` (Dezimalzahl 20) Level 2.0 bedeutet, während ein Wert von `3D` (Dezimalzahl 61) Level 6.1 bedeutet. Im Allgemeinen gilt: Je höher die Levelnummer, desto mehr Bandbreite wird der Stream nutzen, und desto größer sind die maximal unterstützten Videodimensionen.

#### AVC-Profile

Im Folgenden finden Sie die AVC-Profile und ihre Profilnummern zur Verwendung im `codecs`-Parameter sowie den Wert zur Spezifikation der Einschränkungen, `CC`.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Nummer (Hex) | Constraints Byte |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------- |
| **Constrained Baseline Profile (CBP)** CBP ist in erster Linie eine Lösung für Szenarien, in denen Ressourcen beschränkt sind oder Ressourcen mit Kontrollbedarf eingesetzt werden müssen, um die Wahrscheinlichkeit zu minimieren, dass die Medienleistung abnimmt.                                                                                                                                                                                                                                                                                                                                                | `42`         | `40`             |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutz vor Datenverlust und Wiederherstellungsfähigkeit. Dieses Profil wird nicht mehr so häufig verwendet wie vor der Einführung von CBP. Alle CBP-Streams gelten auch als BP-Streams.                                                                                                                                                                                                                                                                                                                                                                  | `42`         | `00`             |
| **Extended Profile (XP)** Entwickelt für das Streaming von Videos über das Netzwerk mit hoher Komprimierungsfähigkeit und weiteren Verbesserungen in der Datenfestigkeit und dem Stream-Switching.                                                                                                                                                                                                                                                                                                                                                                                                                  | `58`         | `00`             |
| **Main Profile (MP)** Das Profil, das für digitales Standarddefinition (SD) Fernsehen verwendet wird, das im MPEG-4-Format ausgestrahlt wird. _Nicht_ für hochauflösendes Fernsehen (HDTV) geeignet. Die Bedeutung dieses Profils ist seit der Einführung des High-Profiles – welches 2004 für HDTV eingeführt wurde – zurückgegangen.                                                                                                                                                                                                                                                                              | `4D`         | `00`             |
| **High Profile (HiP)** Derzeit ist HiP das Hauptprofil für Broadcast- und Discbasierte HD-Videos; es wird sowohl für HD-TV-Sendungen als auch für Blu-Ray-Videos verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                         | `64`         | `00`             |
| **Progressive High Profile (PHiP)** Im Wesentlichen das High-Profile ohne Unterstützung für Feldkodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `64`         | `08`             |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bi-prädiktive Slices ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `64`         | `0C`             |
| **High 10 Profile (Hi10P)** High-Profile mit Unterstützung für bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `6E`         | `00`             |
| **High 4:2:2 Profile (Hi422P)** Erweitert Hi10P durch Hinzufügen von Unterstützung für 4:2:2 Chroma-Subsampling sowie bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `7A`         | `00`             |
| **High 4:4:4 Predictive Profile (Hi444PP)** Zusätzlich zu den Fähigkeiten von Hi422P fügt Hi444PP Unterstützung für 4:4:4 Chroma-Subsampling hinzu (bei dem keine Farbinformationen verworfen werden). Beinhaltet auch Unterstützung für bis zu 14 Bit pro Farbprobe und effizientes verlustfreies Bereichscodieren. Es ist möglich, jedes Bild als drei separate Farbkanäle zu codieren (das heißt, die Daten jeder Farbe werden gespeichert, als wären sie ein einzelnes monochromes Bild).                                                                                                                       | `F4`         | `00`             |
| **High 10 Intra Profile** High 10 beschränkt auf reine Intra-Frame Nutzung. In erster Linie für professionelle Anwendungen verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `6E`         | `10`             |
| **High 4:2:2 Intra Profile** Das Hi422 Profil mit reiner Intra-Frame Nutzung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `7A`         | `10`             |
| **High 4:4:4 Intra Profile** Das High 4:4:4 Profil, auf reine Intra-Frames beschränkt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `F4`         | `10`             |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4 Profil beschränkt auf reine Intra-Nutzung und auf Verwendung nur des CAVLC Entropie-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `44`         | `00`             |
| **Scalable Baseline Profile** Entwickelt für den Einsatz bei Videokonferenzen sowie Überwachungs- und mobilen Anwendungen, basiert das [SVC](https://en.wikipedia.org/wiki/SVC) Baseline-Profil auf dem AVC's Constrained Baseline Profil. Die Basisschicht im Stream wird auf einem hohen Qualitätsniveau bereitgestellt, mit einer Anzahl von sekundären Substreams, die alternative Formen desselben Videos bieten, um in verschiedenen eingeschränkten Umgebungen verwendet zu werden. Diese können jede Kombination aus reduzierter Auflösung, reduzierter Bildrate oder erhöhte Komprimierungsgrad enthalten. | `53`         | `00`             |
| **Scalable Constrained Baseline Profile** Hauptsächlich für Echtzeitkommunikationsanwendungen verwendet. Noch nicht von WebRTC unterstützt, aber eine Erweiterung der WebRTC-API [um SVC zu ermöglichen](https://github.com/w3c/webrtc-svc) ist in Entwicklung.                                                                                                                                                                                                                                                                                                                                                     | `53`         | `04`             |
| **Scalable High Profile** Hauptsächlich für Broadcast- und Streaming-Anwendungen gedacht. Die Basis-(oder höchste Qualitäts-) Schicht muss mit dem AVC-High-Profile übereinstimmen.                                                                                                                                                                                                                                                                                                                                                                                                                                 | `56`         | `00`             |
| **Scalable Constrained High Profile** Ein Unterprofil des Scalable High Profiles, das hauptsächlich für Echtzeitkommunikation entwickelt wurde.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `56`         | `04`             |
| **Scalable High Intra Profile** Hauptsächlich nur für Produktionsanwendungen nützlich, unterstützt dieses Profil nur reine Intra-Nutzung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `56`         | `20`             |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video unter Verwendung zweier Wiedergaben der Szene (linkes Auge und rechtes Auge). Ansonsten bietet es dieselben Funktionen wie das High Profile.                                                                                                                                                                                                                                                                                                                                                                                          | `80`         | `00`             |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten sowohl mit zeitlicher als auch mit MVC-interlaced Vorhersage. _Unterstützt nicht_ Feldbilder oder Macroblock-adaptive Frame-Field-Codierung.                                                                                                                                                                                                                                                                                                                                                                                                        | `76`         | `00`             |
| **Multiview Depth High Profile** Basierend auf dem High-Profile, auf das der Haupt-Substream verweisen muss. Die restlichen Substreams müssen dem Stereo-High-Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                                  | `8A`         | `00`             |

#### MPEG-4 Audio

Wenn der Wert eines Eintrags in der Codecs-Liste mit `mp4a` beginnt, sollte die Syntax des Werts wie folgt sein:

```plain
mp4a.oo[.A]
```

Hierbei ist `oo` die zweistellige hexadezimale Object Type Indication, die die verwendete Codec-Klasse für die Medien angibt. Die OTIs werden von der [MP4 Registration Authority](https://mp4ra.org/) vergeben, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/registered-types/object-types) verwaltet. Ein spezieller Wert ist `40`; dieser gibt an, dass es sich bei den Medien um MPEG-4-Audio handelt (ISO/IEC 14496 Teil 3). Um noch spezifischer zu werden, wird für OTI `40` eine dritte Komponente – der Audiowiedergabetyp – hinzugefügt, um den Typ auf eine bestimmte Subklasse von MPEG-4 zu spezifizieren.

Der Audio-Wiedergabetyp wird als eine oder zwei Dezimalstellen _angegeben_ (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die hexadezimal sind). Beispiel: MPEG-4's AAC-LC hat eine Audio-Wiedergabetyp-Nr. von `2`, sodass der volle `codecs`-Wert, der AAC-LC darstellt, `mp4a.40.2` ist.

So kann der "ER AAC LC"-Codec, dessen Audiowiedergabetyp 17 ist, durch den vollen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einzellige Werte können entweder als eine Stelle (was die beste Wahl ist, da dies die mit den meisten Geräten kompatible ist) oder mit einer führenden Null, die sie auf zwei Stellen füllt, wie `mp4a.40.02`, angegeben werden.

> [!NOTE]
> Die Spezifikation verlangte ursprünglich, dass die Audiowiedergabetyp-Nummer in der dritten Komponente nur eine Dezimalstelle sein durfte. Änderungen der Spezifikation im Laufe der Zeit haben jedoch den Bereich dieser Werte weit über eine Dezimalstelle hinaus erweitert, sodass die dritte Komponente jetzt entweder eine oder zwei Stellen haben kann. Eine Null vor den Zahlen unter 10 hinzuzufügen, ist optional. Ältere Implementierungen von MPEG-4-Codecs unterstützen möglicherweise keine zweistelligen Werte, sodass die Verwendung einer Stelle, wann immer möglich, die Kompatibilität maximiert.

Die Audiowiedergabetypen sind in ISO/IEC 14496-3 Teil 1, Abschnitt 1.5.1, definiert. Die folgende Tabelle bietet eine grundlegende Liste der Audiowiedergabetypen und im Falle der häufigsten Typen eine Liste der unterstützenden Profile, Sie sollten jedoch die Spezifikation für Details heranziehen, wenn Sie mehr über die inneren Mechanismen eines bestimmten MPEG-4-Audiotyps erfahren müssen.

<table class="standard-table">
  <caption>
    MPEG-4 Audio-Objekttypen
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audiowiedergabetyp</th>
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
      <td>Hauptsynthetisch</td>
      <td>Main, Synthetic</td>
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
        ER AAC LD (Error Resilient AAC Low-Delay; verwendet für Zwei-Wege-
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
      <td>SSC (Sinusoïdale Codierung)</td>
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

Die grundlegende Form eines WebM `codecs`-Parameters besteht darin, einen oder mehrere der vier WebM-Codecs namentlich anzugeben, getrennt durch Kommas. Die folgende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                                  |
| -------------------------------- | ------------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video darin; kein Audio ist angegeben. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video darin.                           |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                         |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                           |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.            |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.              |

Die Strings `vp8.0` und `vp9.0` funktionieren ebenfalls, jedoch wird dies nicht empfohlen.

## Verwendung des `codecs`-Parameters

Sie können den `codecs`-Parameter in einigen Situationen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}}-Element verwenden, wenn Sie ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erstellen, um eine Gruppe von Optionen für den Browser festzulegen, aus der er beim Auswählen des Medienformats, das er dem Benutzer im Element präsentieren soll, wählen kann.

Sie können den `codecs`-Parameter auch beim Festlegen eines MIME-Medientyps für die [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)-Methode verwenden; diese Methode gibt eine boolesche Aussage zurück, die anzeigt, ob die Medien wahrscheinlich auf dem aktuellen Gerät funktionieren werden oder nicht.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, ein Kindelement der {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Formats/Audio_codecs)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Erhalten des korrekten HTML-Codecs-Parameters für ein AV1-Video](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)

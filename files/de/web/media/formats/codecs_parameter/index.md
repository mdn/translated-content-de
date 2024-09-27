---
title: Codecs in common media types
slug: Web/Media/Formats/codecs_parameter
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Auf einer grundlegenden Ebene können Sie den Typ einer Mediendatei mit einem einfachen [MIME](/de/docs/Glossary/MIME)-Typ wie `video/mp4` oder `audio/mpeg` angeben. Viele Medientypen – insbesondere solche, die Videospuren unterstützen – können jedoch von der Möglichkeit profitieren, das Format der Daten in ihnen genauer zu beschreiben. Wenn Sie beispielsweise ein Video in einer [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Datei mit dem MIME-Typ `video/mp4` beschreiben, sagt das nichts darüber aus, in welchem Format die eigentlichen Medien vorliegen.

Aus diesem Grund kann der `codecs`-Parameter dem MIME-Typ hinzugefügt werden, der den Medieninhalt beschreibt. Damit können container-spezifische Informationen bereitgestellt werden. Diese Informationen können Dinge wie das Profil des Video-Codecs, den Typ der für die Audiotracks verwendeten Codecs usw. umfassen.

Dieser Leitfaden untersucht kurz die Syntax des `codecs`-Parameters des Medientyps und wie er zusammen mit dem MIME-Typ verwendet wird, um Details über den Inhalt von Audio- oder Videomedien bereitzustellen, die über die Angabe des Containerformats hinausgehen.

## Containerformat-MIME-Typen

Der MIME-Typ für ein Containerformat wird ausgedrückt, indem zunächst der Medientyp (`audio`, `video` usw.) angegeben wird, gefolgt von einem Schrägstrich (`/`) und dann dem Format, das zur Speicherung der Medien verwendet wird:

- `audio/mpeg`
  - : Eine Audiodatei, die den [MPEG](/de/docs/Web/Media/Formats/Containers#mpegmpeg-2)-Dateityp verwendet, wie etwa eine MP3.
- `video/ogg`
  - : Eine Videodatei, die den [Ogg](/de/docs/Web/Media/Formats/Containers#ogg)-Dateityp verwendet.
- `video/mp4`
  - : Eine Videodatei, die den [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Dateityp verwendet.
- `video/quicktime`
  - : Eine Videodatei im [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime)-Format von Apple. Wie an anderer Stelle erwähnt, wurde dieses Format früher häufig im Web verwendet, wird jedoch nicht mehr verwendet, da es ein Plugin erforderte.

Jedoch sind all diese MIME-Typen vage. Alle diese Dateitypen unterstützen eine Vielzahl von Codecs, und diese Codecs können zahlreiche Profile, Level und andere Konfigurationsfaktoren haben. Aus diesem Grund sollten Sie den `codecs`-Parameter zusammen mit dem Medientyp verwenden.

## Grundlegende Syntax

Sie können den `codecs`-Parameter dem Medientyp hinzufügen. Dazu hängen Sie ein Semikolon (`;`) an, gefolgt von `codecs=` und dann dem String, der das Format des Inhalts der Datei beschreibt. Einige Medientypen erlauben es Ihnen nur, die Namen der zu verwendenden Codecs anzugeben, während andere es Ihnen erlauben, auch verschiedene Einschränkungen für diese Codecs anzugeben. Sie können mehrere Codecs angeben, indem Sie sie mit Kommas trennen.

- `audio/ogg; codecs=vorbis`
  - : Eine [Ogg](/de/docs/Web/Media/Formats/Containers#ogg)-Datei mit einer [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis)-Audiospur.
- `video/webm; codecs="vp8, vorbis"`
  - : Eine [WebM](/de/docs/Web/Media/Formats/Containers#webm)-Datei mit [VP8](/de/docs/Web/Media/Formats/Video_codecs#vp8)-Video und/oder [Vorbis](/de/docs/Web/Media/Formats/Audio_codecs#vorbis)-Audio.
- `video/mp4; codecs="avc1.4d002a"`
  - : Eine [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4)-Datei mit [AVC](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) (H.264) Video, Hauptprofil, Level 4.2.

Wie bei jedem MIME-Typ-Parameter muss `codecs` in `codecs*` geändert werden (beachten Sie das Sternchenzeichen `*`), wenn eine der Eigenschaften des Codecs Sonderzeichen verwendet, die gemäß {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}} Prozent-encodiert werden müssen. Sie können die JavaScript-Funktion {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} verwenden, um die Parameterliste zu kodieren; ebenso können Sie {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} verwenden, um eine zuvor kodierte Parameterliste zu dekodieren.

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

Mehrere der oben genannten Links führen zur gleichen Sektion; das liegt daran, dass diese Medientypen alle auf dem ISO Base Media File Format (ISO BMFF) basieren und daher die gleiche Syntax teilen.

### AV1

Die Syntax des `codecs`-Parameters für AV1 ist in der [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) Spezifikation, Abschnitt 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam) definiert.

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> [!NOTE]
> Auf Chromium-basierte Browser akzeptieren jeden Teil der optionalen Parameter (statt aller oder keiner, wie es die Spezifikation erfordert).

Die Komponenten dieses Codec-Parameter-Strings werden im Folgenden genauer in der Tabelle beschrieben. Jede Komponente hat eine feste Anzahl von Zeichen; wenn der Wert kürzer ist als diese Länge, muss er mit führenden Nullen aufgefüllt werden.

<table class="standard-table">
  <caption>
    AV1 codec parameter string components
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
                "Main"-Profil; unterstützt YUV 4:2:0 oder monochrome Bitstreams mit einer Tiefenauflösung von 8 oder 10 Bit pro Komponente.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High"-Profil fügt Unterstützung für 4:4:4 Chroma-Subsampling hinzu.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional"-Profil fügt Unterstützung für 4:2:2 Chroma-Subsampling und 12-Bit pro Komponente Farbe hinzu.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        Die zweistellige Levelnummer, die in das X.Y-Level-Format umgewandelt wird, wobei <code>X = 2 + (LL &gt;&gt; 2)</code> und <code>Y = LL &#x26; 3</code> ist.
        Weitere Details finden Sie im <a href="https://aomediacodec.github.io/av1-spec/#levels">Anhang A, Abschnitt 3</a> der AV1-Spezifikation.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        Der einstellige Tier-Indikator. Für das Main-Tier (<code>seq_tier</code> gleich 0) ist dieses Zeichen der Buchstabe <code>M</code>.
        Für das High-Tier (<code>seq_tier</code> ist 1), ist dieses Zeichen der Buchstabe <code>H</code>.
        Das High-Tier ist nur für Level 4.0 und höher verfügbar.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        Die zweistellige Komponententiefenauflösung. Dieser Wert muss einer der Werte 8, 10 oder 12 sein; welche Werte gültig sind, hängt vom Profil und anderen Eigenschaften ab.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        Die einstellige Monochrom-Flagge; ist dieser Wert 0, enthält das Video die U- und V-Ebenen zusätzlich zur Y-Ebene.
        Andernfalls befinden sich die Videodaten vollständig in der Y-Ebene und sind somit monochromatisch.
        Weitere Informationen dazu, wie das YUV-Farbsystem funktioniert, finden Sie unter <a href="/de/docs/Web/Media/Formats/Video_concepts#yuv">YUV</a>.
        Der Standardwert ist 0 (nicht monochrom).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> gibt das Chroma-Subsampling als drei Ziffern an.
          Die erste Ziffer ist <code>subsampling_x</code>, die zweite ist <code>subsampling_y</code>.
          Wenn beide eins sind, ist die dritte die Position von <code>chroma_sample_position</code>; andernfalls ist die dritte Ziffer immer 0.
          Dies zusammen mit der <code>M</code>-Komponente kann verwendet werden, um das Chroma-Subsampling-Format zu bestimmen:
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
          Die dritte Ziffer in <code>CCC</code> gibt die Chroma-Sample-Position an, wobei der Wert 0 darauf hinweist, dass die Position unbekannt ist und getrennt während der Dekodierung bereitgestellt werden muss; ein Wert von 1 zeigt an, dass die Sample-Position horizontal mit dem (0, 0) Luma-Sample kollokiert ist; und ein Wert von 2 zeigt an, dass die Sample-Position mit (0, 0) Luma kollokiert ist.
        </p>
        <p>Der Standardwert ist <code>110</code> (4:2:0-Chroma-Subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        Der zweistellige <code>color_primaries</code>-Wert gibt das für die Medien verwendete Farbsystem an.
        Zum Beispiel ist BT.2020/BT.2100-Farbe, wie sie für HDR-Video verwendet wird, <code>09</code>.
        Die Information für diesen und für jeden der verbleibenden Komponenten ist im <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Color config semantics section</a> der AV1-Spezifikation zu finden.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        Der zweistellige <code>transfer_characteristics</code>-Wert. Dieser Wert definiert die Funktion, die verwendet wird, um das Gamma (entzückenderweise als "opto-electrical transfer function" in der technischen Sprache) von der Quelle auf die Anzeige abzubilden.
        Zum Beispiel ist 10-Bit-BT.2020 <code>14</code>.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Das zweistellige <code>matrix_coefficients</code>-Konstant bestimmt die Matrix-Koeffizienten, die für die Umwandlung der roten, blauen und grünen Kanäle in Luma- und Chroma-Signale verwendet werden.
        Zum Beispiel werden die Standard-Koeffizienten, die für BT.709 verwendet werden, mit dem Wert <code>01</code> angezeigt.
        Der Standardwert ist <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        Eine einstellige Flagge, die angibt, ob die Farbe den vollen Bereich möglicher Werte verwenden darf (<code>1</code>) oder ob sie auf die Werte beschränkt werden soll, die im angegebenen Farbkonfigurationssystem als legal angesehen werden (das heißt, der <strong>Studio swing representation</strong>).
        Der Standardwert ist 0 (Verwendung der Studio-Swing-Darstellung).
      </td>
    </tr>
  </tbody>
</table>

Alle Felder von `M` (Monochrom-Flag) an sind optional; Sie können irgendwann aufhören, Felder einzuschließen (aber können keine Felder willkürlich auslassen). Die Standardwerte sind in der obigen Tabelle enthalten. Einige Beispiele für AV1-Codec-Strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profile, Level 5.3, Main Tier, 10 Bit pro Farbkomponente, 4:2:2 Chroma-Subsampling mittels ITU-R BT.2100 Farbprimaries, Transfercharakteristika und YCbCr-Farbmatrix. Die Studio-Swing-Darstellung ist angegeben.
- `av01.0.15M.10`
  - : AV1 Main Profile, Level 5.3, Main Tier, 10 Bit pro Farbkomponente. Die übrigen Eigenschaften werden von den Standardwerten übernommen: 4:2:0 Chroma-Subsampling, BT.709-Farbprimaries, Transfercharakteristika und Matrixkoeffizienten. Studio-Swing-Darstellung.

### VP9

#### ISO Base Media File Format-Syntax

Die Syntax des `codecs`-Parameters für VP9 ist in der [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) Spezifikation, in der [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) Sektion definiert.

In diesem Format beginnt der Wert des `codecs`-Parameters mit einem vier Zeichen umfassenden Code, der den im Container verwendeten Codec angibt, gefolgt von einer Reihe durch Punkte (`.`) getrennten zweistelligen Werten.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

Die ersten vier Komponenten sind erforderlich; alles ab `CC` (Chroma-Subsampling) ist optional, entweder alle oder keine. Jede dieser Komponenten ist in der folgenden Tabelle beschrieben. Nach der Tabelle folgen einige Beispiele.

<table class="standard-table">
  <caption>
    WebM codes Parameterkomponenten
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
          Ein vier Zeichen umfassender Code, der angibt, welcher der möglichen Codecs beschrieben wird.
          Mögliche Werte sind:
        </p>
        <table class="standard-table">
          <caption>
            Vier Zeichen umfassende Codes für WebM-unterstützte Codecs
          </caption>
          <thead>
            <tr>
              <th scope="col">Vier Zeichen umfassender Code</th>
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
          Die zweistellige Profilnummer, mit führenden Nullen aufgefüllt, falls notwendig, um genau zwei Ziffern zu haben.
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
        Die zweistellige Levelnummer.
        Die Levelnummer ist in Festkommanotation, wobei die erste Ziffer die Einerstelle ist und die zweite Ziffer zehntel darstellt.
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
          Die folgende Tabelle listet zulässige Werte auf; weitere Informationen über diese und andere Themen finden Sie im Leitfaden „Digital Video Konzepten“ unter <a href="/de/docs/Web/Media/Formats/Video_concepts#chroma_subsampling">Chroma-Subsampling</a>.
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
                4:2:0 mit den Chroma-Proben, die sich interstitielle Positionen zwischen den Pixeln teilen
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0-Chroma-Subsampling mit den Proben an Luma (0, 0) kollokiert
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
                4:4:4-Chroma-Subsampling (jeder Pixel's Luminanz und Chrominanz werden beide beibehalten)
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
          Ein zweistelliger ganzzahliger Wert, der angibt, welches der Farbprimärwerte aus Abschnitt 8.1 des <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a> Standards populär ist.
          Diese Komponente und jede Komponente danach sind optional.
        </p>
        <p>Die möglichen Werte der Farbprimär-Komponente sind:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC-Farbprimär-Identifikatoren
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
                BT.709, sRGB, sYCC. BT.709 ist der Standard für das hochauflösende (HD) Fernsehen; sRGB ist der gängigste Farbraum für Computeranzeigen.
                Broadcast BT.709 nutzt eine Farbtiefe von 8 Bit, wobei der legale Bereich von 16 (schwarz) bis 235 (weiß) reicht.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Bildmerkmale sind unbekannt oder vom Anwendung bestimmte
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Für zukünftige Verwendung durch ITU oder ISO/IEC reserviert</em></td>
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
                <em>Funktional identisch zu <code>7</code>.</em>
              </td>
            </tr>
            <tr>
              <td><code>70</code></td>
              <td>
                [SMPTE](/de/docs/Glossary/SMPTE) 240M (historisch).
                <em>Funktional identisch zu <code>6</code>.</em>
              </td>
            </tr>
            <tr>
              <td><code>08</code></td>
              <td>Generische Film</td>
            </tr>
            <tr>
              <td><code>09</code></td>
              <td>
                BT.2020; BT.2100.
                Diese werden für ultra-hochaufgelöste (4K) High Dynamic Range (HDR) Videos verwendet, haben einen sehr großen Farb[raum](/de/docs/Glossary/gamut) und unterstützen 10-Bit- und 12-Bit-Farbkomponententiefen.
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
                SMPTE RP 431 (D-Cinema-Qualität: Referenzprojektor und Umgebung).
                Beschreibt die Referenzprojektions- und Umgebungsbedingungen, die ein konsistentes Filmerlebnis bieten.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digitale Source-Verarbeitung: Farbverarbeitung für D-Cinema).
                Ingenieurrichtlinie zur Empfehlung des Dekodierens von Farbsignalen für digitale Filme.
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
        Ein zweistelliger ganzzahliger Wert, der die
        <code>transferCharacteristics</code> für das Video angibt.
        Dieser Wert stammt aus Abschnitt 8.2 von <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> und gibt die Transfercharakteristika an, die verwendet werden sollen, wenn das dekodierte Farbsignal an das Renderziel angepasst wird.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        Die zweistellige Zahl für die Eigenschaft <code>matrixCoefficients</code>.
        Dieser Wert stammt aus der Tabelle in Abschnitt 8.3 der <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>-Spezifikation.
        Dieser Wert gibt an, welcher Satz von Koeffizienten verwendet werden soll, wenn von den nativen roten, blauen und grünen Primärfarben zu den Luma- und Chroma-Signalen gemappt wird.
        Diese Koeffizienten werden wiederum mit den in demselben Abschnitt angegebenen Gleichungen verwendet.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Gibt an, ob das Schwarzniveau und der Farbbereich jeder Farbkomponente auf den legalen Bereich beschränkt werden sollen.
        Für 8-Bit-Farbproben ist der legale Bereich 16-235.
        Ein Wert von <code>00</code> zeigt an, dass diese Einschränkungen durchgesetzt werden sollen, während ein Wert von <code>01</code> die volle Bandbreite zulässt (teilweise), auch wenn die resultierende Farbe außerhalb des Bereichs des Farbsystems liegt.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9 Video, Profil 2 Level 1.0, mit 10-Bit-YUV-Inhalten unter Verwendung von 4:2:0-Chroma-Subsampling, BT.2020-Primärfarben, ST 2084 EOTF (HDR SMPTE), BT.2020-nichtkonstanter Luminanzfarbmatrix und Vollbereichs-Chroma- und Luma-Codierung. Der Audioinhalt ist im Opus-Format.

### ISO Base Media File Format: MP4, QuickTime und 3GP

Alle Medientypen, die auf dem [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) basieren, teilen die gleiche Syntax für den `codecs`-Parameter. Zu diesen Medientypen gehören [MPEG-4](/de/docs/Web/Media/Formats/Containers#mpeg-4_mp4) (und tatsächlich das auf [QuickTime](/de/docs/Web/Media/Formats/Containers#quicktime) basierende Dateiformat MPEG-4) sowie [3GP](/de/docs/Web/Media/Formats/Containers#3gp). Sowohl Video- als auch Audiospuren können mit dem `codecs`-Parameter mit den folgenden MIME-Typen beschrieben werden:

| MIME-Typ          | Beschreibung                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP-Audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP-Video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2-Audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2-Video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4-Audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4-Video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Nicht-audiovisuelle Medien codiert in MPEG-4                                                                       |

Jeder Codec, der durch den `codecs`-Parameter beschrieben wird, kann entweder als Containername (`3gp`, `mp4`, `quicktime` usw.) oder als Containername plus zusätzliche Parameter angegeben werden, um den Codec und seine Konfiguration genau anzugeben. Jeder Eintrag in der Codecliste kann eine beliebige Anzahl von Komponenten enthalten, die durch Punkte (`.`) getrennt sind.

Die Syntax für den Wert von `codecs` variiert je nach Codec; sie beginnt jedoch immer mit der vier-Zeichen-Identifier des Codecs, einem Punkt als Trennzeichen (`.`) und dem Objekt-Typ-Indikationswert (OTI) für das spezifische Datenformat. Für die meisten Codecs ist die OTI eine zweistellige hexadezimale Zahl; bei [AVC (H.264)](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264) sind es jedoch sechs Hexadezimalziffern.

Daher sehen die Syntaxen für jeden der unterstützten Codecs so aus:

- `cccc[.pp]*` (Generische ISO BMFF)
  - : Wobei `cccc` die vier-Zeichen-ID für den Codec ist und `pp` der Platz ist, an dem sich null oder mehr zweistellige codierte Eigenschaftswerte befinden.
- `mp4a.oo[.A]` (MPEG-4-Audio)
  - : Wobei `oo` der Objekt-Typ-Indentations-Wert ist, der den Inhalt des Mediums genauer beschreibt, und `A` ist der einstellige _Audio_ OTI. Die möglichen Werte für die OTI finden Sie auf der Objekt-Typen-Seite der MP4 Registrierungsstelle. Zum Beispiel ist Opus-Audio in einer MP4-Datei `mp4a.ad`. Weitere Details finden Sie im Abschnitt [MPEG-4-Audio](#mpeg-4-audio).
- `mp4v.oo[.V]` (MPEG-4-Video)
  - : Auch hier beschreibt `oo` wieder die genaueren Inhalte, während `V` die einstellige _Video_ OTI ist.
- `avc1[.PPCCLL]` (AVC-Video)

  - : `PPCCLL` sind sechs hexadezimale Ziffern, die die Profilnummer (`PP`), die Constraint-Set-Flags (`CC`) und das Level (`LL`) angeben. Siehe [AVC-Profile](#avc-profile) für die möglichen Werte von `PP`.

    Das Constraint Set Flags-Byte besteht aus binären Einer-Fähnchen, wobei das bedeutendste Bit als Flagge 0 (oder `constraint_set0_flag`, in einigen Ressourcen) bezeichnet wird, und jedes nachfolgende Bit eine Nummer höher ist. Derzeit werden nur die Flags 0 bis 2 verwendet; die anderen fünf Bit müssen Null sein. Die Bedeutungen der Flags variieren je nach verwendetem Profil.

    Das Level ist eine Festkommazahl, sodass ein Wert von `14` (dezimal 20) Level 2.0 bedeutet, während ein Wert von `3D` (dezimal 61) Level 6.1 bedeutet. Allgemein gilt: Je höher die Levelnummer, desto mehr Bandbreite wird der Stream verwenden und desto höher sind die maximal unterstützten Videodimensionen.

#### AVC-Profile

Die folgenden sind die AVC-Profile und ihre Profilnummern für die Verwendung im `codecs`-Parameter sowie der anzupassende Wert für die Constraints-Komponente, `CC`.

| Profil                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Nummer (Hex) | Constraints-Byte |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------- |
| **Constrained Baseline Profile (CBP)** CBP ist vor allem eine Lösung für Szenarien mit eingeschränkten Ressourcen oder Ressourcen, bei denen die Nutzung kontrolliert werden muss, um die Wahrscheinlichkeit zu minimieren, dass die Medien schlechte Leistungen erbringen.                                                                                                                                                                                                                                                                                                                                   | `42`         | `40`             |
| **Baseline Profile (BP)** Ähnlich wie CBP, jedoch mit mehr Schutzvorkehrungen und Wiederherstellungsmöglichkeiten bei Datenverlust. Wird nicht so häufig verwendet wie zuvor, seitdem CBP eingeführt wurde. Alle CBP Streams werden auch als BP Streams betrachtet.                                                                                                                                                                                                                                                                                                                                           | `42`         | `00`             |
| **Extended Profile (XP)** Entwickelt für das Streamen von Video über das Netzwerk, mit hoher Kompressionsfähigkeit und weiteren Verbesserungen bei der Datensicherheit und Stream-Umschaltung.                                                                                                                                                                                                                                                                                                                                                                                                                | `58`         | `00`             |
| **Main Profile (MP)** Das Profil, das für die Übertragung von Standardauflösungs-Digitalfernsehen im MPEG-4-Format verwendet wird. Wird _nicht_ für hochwertige Fernsehübertragungen verwendet. Die Bedeutung dieses Profils ist seit der Einführung des High-Profils zurückgegangen - es wurde 2004 für HDTV-Einsätze hinzugefügt.                                                                                                                                                                                                                                                                           | `4D`         | `00`             |
| **High Profile (HiP)** Derzeit ist HiP das Hauptprofil für HD-Video in Rundfunk und auf Disc; es wird sowohl für HDTV-Übertragungen als auch für Blu-Ray-Video verwendet.                                                                                                                                                                                                                                                                                                                                                                                                                                     | `64`         | `00`             |
| **Progressive High Profile (PHiP)** Im Wesentlichen High Profile ohne Unterstützung für Feldkodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `64`         | `08`             |
| **Constrained High Profile** PHiP, jedoch ohne Unterstützung für bidirektionale Scheiben ("B-Slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `64`         | `0C`             |
| **High 10 Profile (Hi10P)** Hochauflösendes Profil, jedoch mit Unterstützung für bis zu 10 Bit pro Farbkomponente.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `6E`         | `00`             |
| **High 4:2:2 Profile (Hi422P)** Erweitert das Hi10P, indem es Unterstützung für 4:2:2 Chroma-Subsampling sowie bis zu 10 Bits pro Farbkomponenten hinzufügt.                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `7A`         | `00`             |
| **High 4:4:4 Predictive Profile (Hi444PP)** Neben den in Hi422P enthaltenen Fähigkeiten bietet Hi444PP Unterstützung für 4:4:4 Chroma-Subsampling (bei dem keine Farbinformation verworfen wird). Enthält ebenfalls Unterstützung für bis zu 14 Bits pro Farbmuster und effiziente verlustfreie Codierung innerhalb der Region. Die Möglichkeit, jeden Frame als drei separate Farbkanäle zu kodieren (d. h. die Daten jeder Farbe werden so gespeichert, als ob es sich um ein einzelkoloriertes Bild handeln würde).                                                                                        | `F4`         | `00`             |
| **High 10 Intra Profile** High 10 beschränkt auf die Verwendung aller in den Rahmen aufgenommenen Frames. Wird hauptsächlich für professionelle Anwendungen genutzt.                                                                                                                                                                                                                                                                                                                                                                                                                                          | `6E`         | `10`             |
| **High 4:2:2 Intra Profile** Das Hi422 Profil mit allen in den Rahmen aufgenommenen Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `7A`         | `10`             |
| **High 4:4:4 Intra Profile** Das High 4:4:4 Profil, beschränkt auf die Nutzung nur in intra-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `F4`         | `10`             |
| **CAVLC 4:4:4 Intra Profile** Das High 4:4:4 Profil, beschränkt auf unter Verwendung nur von CAVLC-Entropiekodierung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `44`         | `00`             |
| **Scalable Baseline Profile** Intendiert für die Verwendung in Videokonferenzen sowie für Überwachungs- und mobile Anwendungen, basiert das [SVC](https://en.wikipedia.org/wiki/SVC) Baseline-Profile auf dem AVC Constrained Baseline-Profile. Die Basisschicht innerhalb des Streams wird in hoher Qualität bereitgestellt, mit einer Reihe von sekundären Substreams, die alternative Formen desselben Videos für den Einsatz in verschiedenen eingeschränkten Umgebungen bieten. Dazu gehören möglicherweise eine Kombination von verringerten Auflösungen, Bildraten oder steigenden Kompressionslevels. | `53`         | `00`             |
| **Scalable Constrained Baseline Profile** Vor allem für Echtzeitkommunikationsanwendungen gedacht. Wird noch nicht von WebRTC unterstützt, jedoch ist eine Erweiterung der WebRTC-API [zur Ermöglichung von SVC](https://github.com/w3c/webrtc-svc) in Entwicklung.                                                                                                                                                                                                                                                                                                                                           | `53`         | `04`             |
| **Scalable High Profile** Hauptsächlich für den Einsatz in Rundfunk- und Streaming-Anwendungen gedacht. Die Basis- (oder höchste Qualitäts-) Schicht muss dem AVC High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                   | `56`         | `00`             |
| **Scalable Constrained High Profile** Ein Unterprofil des Scalable High Profile, das hauptsächlich für Echtzeitkommunikation entwickelt wurde.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `56`         | `04`             |
| **Scalable High Intra Profile** Wesentlich nur für Produktionsanwendungen nützlich, unterstützt dieses Profil nur den Einsatz innerhalb-Frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `56`         | `20`             |
| **Stereo High Profile** Das Stereo High Profile bietet stereoskopisches Video mit zwei Darstellungen der Szene (linkes Auge und rechtes Auge). Bietet ansonsten die gleichen Funktionen wie das High Profil.                                                                                                                                                                                                                                                                                                                                                                                                  | `80`         | `00`             |
| **Multiview High Profile** Unterstützt zwei oder mehr Ansichten unter Nutzung von sowohl zeitlicher als auch MVC-Vorhersage zwischen Ansichten. _Unterstützt keine_ Feldbilder oder Makroblock-adaptive frame-field Kodierung.                                                                                                                                                                                                                                                                                                                                                                                | `76`         | `00`             |
| **Multiview Depth High Profile** Basiert auf dem High Profile, auf das sich der Hauptsubstream beziehen muss. Die verbleibenden Substreams müssen dem Stereo High Profile entsprechen.                                                                                                                                                                                                                                                                                                                                                                                                                        | `8A`         | `00`             |

#### MPEG-4-Audio

Wenn der Wert eines Eintrags in der `codecs`-Liste mit `mp4a` beginnt, sollte die Syntax des Wertes wie folgt lauten:

```plain
mp4a.oo[.A]
```

Hierbei ist `oo` der zweistellige hexadezimale Objekt-Typ-Indentationswert, der die verwendete Codec-Klasse für das Medium spezifiziert. Die OTIs werden von der [MP4 Registrierungsstelle](https://mp4ra.org/) zugewiesen, die eine [Liste der möglichen OTI-Werte](https://mp4ra.org/#/object_types) führt. Ein spezieller Wert ist `40`; dieser gibt an, dass die Medien MPEG-4-Audio (ISO/IEC 14496 Teil 3) sind. Um noch genauer zu werden, wird eine dritte Komponente – der Audio-Objekttyp – für OTI `40` hinzugefügt, um den Typ zu einem spezifischen Subtyp von MPEG-4 einzuengen.

Der Audio-Objekttyp wird als ein- oder zweistellige _Dezimal_-Zahl (im Gegensatz zu den meisten anderen Werten im `codecs`-Parameter, die hexadezimal sind) angegeben. Beispielsweise hat AAC-LC von MPEG-4 eine Audio-Objekttypnummer von `2`, daher ist der vollständige `codecs`-Wert, der AAC-LC angibt, `mp4a.40.2`.

So kann ER AAC LC, dessen Audio-Objekttyp 17 ist, mit dem vollständigen `codecs`-Wert `mp4a.40.17` dargestellt werden. Einstellige Werte können entweder als eine Ziffer (was die beste Wahl ist, da es die breiteste Kompatibilität gewährleistet) oder mit einem vorangestellten Null, um es auf zwei Ziffern aufzufüllen, angegeben werden, wie etwa `mp4a.40.02`.

> [!NOTE]
> Ursprünglich forderte die Spezifikation, dass die Audio-Objekttypnummer in der dritten Komponente nur eine Dezimalziffer ist. Jedoch haben Erweiterungen der Spezifikation im Laufe der Zeit den Bereich dieser Werte weit über eine Dezimalziffer hinaus erweitert, sodass der dritte Parameter nun entweder eine oder zwei Ziffern sein darf. Das Auffüllen von Werten unter 10 mit einer führenden `0` ist optional. Ältere Implementierungen von MPEG-4-Codecs unterstützen möglicherweise keine zweistelligen Werte, daher wird konventionell eine einstellige Zahl bevorzugt, wenn diese unterstützt wird, um die Kompatibilität zu maximieren.

Die Audio-Objekttypen sind in ISO/IEC 14496-3 Unterabschnitt 1, Abschnitt 1.5.1 definiert. Die Tabelle unten bietet eine grundlegende Liste der Audio-Objekttypen und im Fall der gebräuchlicheren Objekttypen eine Liste der Profile, die sie unterstützen. Dennoch sollten Sie sich für andere Einzelheiten auf die Spezifikation beziehen, falls Sie mehr über die Funktionsweise eines bestimmten MPEG-4-Audiotyps wissen müssen.

<table class="standard-table">
  <caption>
    MPEG-4 Audio-Objekttypen
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio-Objekttyp</th>
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
      <td>AAC LC (Niedrige Komplexität)</td>
      <td>Main, Scalable, HQ, LD v2, AAC, HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td>AAC SSR (Skalierbare Abtastrate)</td>
      <td>Main</td>
    </tr>
    <tr>
      <td><code>4</code></td>
      <td>AAC LTP (Langfristige Vorhersage)</td>
      <td>Main, Scalable, HQ</td>
    </tr>
    <tr>
      <td><code>5</code></td>
      <td>SBR (Spektrale Bandreplikation)</td>
      <td>HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>6</code></td>
      <td>AAC Skalierbar</td>
      <td>Main, Scalable, HQ</td>
    </tr>
    <tr>
      <td><code>7</code></td>
      <td>TwinVQ (Codierung für Ultra-Niedrige Bitraten)</td>
      <td>Main, Scalable</td>
    </tr>
    <tr>
      <td><code>8</code></td>
      <td>CELP (Code-Excited Linear Prediction)</td>
      <td>Main, Scalable, Speech, HQ, LD</td>
    </tr>
    <tr>
      <td><code>9</code></td>
      <td>HVXC (Harmonische Vektorerregungscodierung)</td>
      <td>Main, Scalable, Speech, LD</td>
    </tr>
    <tr>
      <td><code>10</code> – <code>11</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>12</code></td>
      <td>TTSI (Text zu Sprache Schnittstelle)</td>
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
      <td>ER AAC LC (Fehlerrobuster AAC-Niedrige-Komplexität)</td>
      <td>HQ, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>18</code></td>
      <td><em>Reserviert</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>19</code></td>
      <td>ER AAC LTP (Fehlerrobuster AAC Langfristige Vorhersage)</td>
      <td>HQ</td>
    </tr>
    <tr>
      <td><code>20</code></td>
      <td>ER AAC Skalierbar (Fehlerrobuster AAC Skalierbar)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>21</code></td>
      <td>ER TwinVQ (Fehlerrobuster TwinVQ)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>22</code></td>
      <td>ER BSAC (Fehlerrobuster Bit-Slice Arithmetic Coding)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>23</code></td>
      <td>
        ER AAC LD (Fehlerrobuster AAC Niedrige-Verzögerung; verwendet für zweiseitige
        Kommunikation)
      </td>
      <td>LD, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>24</code></td>
      <td>ER CELP (Fehlerrobuster Code-Excited Linear Prediction)</td>
      <td>HQ, LD</td>
    </tr>
    <tr>
      <td><code>25</code></td>
      <td>ER HVXC (Fehlerrobuste Harmonische Vektor-Erregungscodierung)</td>
      <td>LD</td>
    </tr>
    <tr>
      <td><code>26</code></td>
      <td>ER HILN (Fehlerrobuster Harmonic and Individual Line plus Noise)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>27</code></td>
      <td>ER Parametric (Fehlerrobust Parametrisch)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>28</code></td>
      <td>SSC (Sinuswellenmodulation)</td>
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
      <td><em>Entkommen</em></td>
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
      <td>SLS (Skalierbarer verlustfreier Codec)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>38</code></td>
      <td>SLS Non-core (Skalierbarer verlustfreier Codec Nicht-kerntyp)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>39</code></td>
      <td>ER AAC ELD (Fehlerrobuster AAC Erweiterte niedrige Verzögerung)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>40</code></td>
      <td>SMR Simple (Symbolische Musikrepräsentation einfach)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>41</code></td>
      <td>SMR Main (Symbolische Musikrepräsentation Hauptsächlich)</td>
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
          Definiert in
          <a href="https://www.iso.org/standard/54838.html"
            >ISO/IEC 14496-3:2009/Amd.2:2010(E)</a>.
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

Das grundlegende Format für einen WebM-`codecs`-Parameter besteht darin, einen oder mehrere der vier WebM-Codecs nach Namen aufzulisten, getrennt durch Kommas. Die folgende Tabelle zeigt einige Beispiele:

| MIME-Typ                         | Beschreibung                                                     |
| -------------------------------- | ---------------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | Ein WebM-Video mit VP8-Video darin; kein Audio ist spezifiziert. |
| `video/webm;codecs="vp9"`        | Ein WebM-Video mit VP9-Video darin.                              |
| `audio/webm;codecs="vorbis"`     | Vorbis-Audio in einem WebM-Container.                            |
| `audio/webm;codecs="opus"`       | Opus-Audio in einem WebM-Container.                              |
| `video/webm;codecs="vp8,vorbis"` | Ein WebM-Container mit VP8-Video und Vorbis-Audio.               |
| `video/webm;codecs="vp9,opus"`   | Ein WebM-Container mit VP9-Video und Opus-Audio.                 |

Die Strings `vp8.0` und `vp9.0` funktionieren ebenfalls, werden jedoch nicht empfohlen.

## Verwendung des `codecs`-Parameters

Sie können den `codecs`-Parameter in einigen Fällen verwenden. Erstens können Sie ihn mit dem {{HTMLElement("source")}}-Element verwendet werden, während Sie ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element erstellen, um eine Gruppe von Optionen festzulegen, aus denen der Browser auswählen kann, um das Format der Medien zu bestimmen, die dem Benutzer im Element präsentiert werden sollen.

Sie können den `codecs`-Parameter auch verwenden, um einen MIME-Medientyp der Methode [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) anzugeben; diese Methode gibt einen Booleschen Wert zurück, der angibt, ob das Medium auf dem aktuellen Gerät wahrscheinlich funktioniert oder nicht.

## Siehe auch

- [Web Medien Technologien](/de/docs/Web/Media)
- Das {{HTMLElement("source")}}-Element, Kind des {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Leitfaden zu Audio-Codecs im Web](/de/docs/Web/Media/Formats/Audio_codecs)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Formats/Video_codecs)
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
- [Den korrekten HTML-Codecs-Parameter für ein AV1-Video erhalten](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)

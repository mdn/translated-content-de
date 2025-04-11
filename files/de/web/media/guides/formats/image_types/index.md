---
title: Anleitung zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die allgemein von Webbrowsern unterstützt werden, und geben Einblicke, die Ihnen helfen, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

## Häufige Bilddateitypen

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind unten aufgeführt.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Abkürzung</th>
      <th scope="row">Dateiformat</th>
      <th scope="col">MIME-Typ</th>
      <th scope="col">Dateierweiterung(en)</th>
      <th scope="col">Zusammenfassung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <a href="#apng_animated_portable_network_graphics">APNG</a>
      </th>
      <th scope="row">Animated Portable Network Graphics</th>
      <td><code>image/apng</code></td>
      <td><code>.apng</code>, <code>.png</code></td>
      <td>
        Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig).
        AVIF und WebP bieten bessere Leistung, aber weniger breite Browserunterstützung.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#avif_image">AVIF</a></th>
      <th scope="row">AV1 Image File Format</th>
      <td><code>image/avif</code></td>
      <td><code>.avif</code></td>
      <td>
        <p>
          Gute Wahl für Bilder und animierte Bilder aufgrund der hohen Leistung und des gebührenfreien Bildformats.
          Es bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass beim Einsatz von AVIF Fallbacks auf Formate mit besserer Browserunterstützung eingesetzt werden sollten (z. B. unter Verwendung des <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>-Elements).<br />
          <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#gif_graphics_interchange_format">GIF</a></th>
      <th scope="row">Graphics Interchange Format</th>
      <td><code>image/gif</code></td>
      <td><code>.gif</code></td>
      <td>
        Gute Wahl für grundlegende Bilder und Animationen.
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indexierte Standbilder, und erwägen Sie WebP, AVIF oder APNG für Animationssequenzen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="#jpeg_joint_photographic_experts_group_image">JPEG</a>
      </th>
      <th scope="row">Joint Photographic Expert Group Image</th>
      <td><code>image/jpeg</code></td>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jfif</code>,
        <code>.pjpeg</code>, <code>.pjp</code>
      </td>
      <td>
        <p>
          Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit die beliebteste).
          Bevorzugen Sie PNG, wenn eine genauere Reproduktion des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl eine bessere Reproduktion als auch eine höhere Kompression erforderlich sind.<br />
          <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#png_portable_network_graphics">PNG</a></th>
      <th scope="row">Portable Network Graphics</th>
      <td><code>image/png</code></td>
      <td><code>.png</code></td>
      <td>
        <p>
          PNG wird gegenüber JPEG bevorzugt für genauere Reproduktion von Quellbildern oder wenn Transparenz benötigt wird. WebP/AVIF bieten noch bessere Kompression und Reproduktion, aber die Browserunterstützung ist eingeschränkter.<br />
          <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#svg_scalable_vector_graphics">SVG</a></th>
      <th scope="row">Scalable Vector Graphics</th>
      <td><code>image/svg+xml</code></td>
      <td><code>.svg</code></td>
      <td>
        Vektorbildformat; ideal für Benutzeroberflächenelemente, Symbole, Diagramme usw., die in unterschiedlichen Größen genau dargestellt werden müssen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_image">WebP</a></th>
      <th scope="row">Web Picture Format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Ausgezeichnete Wahl für Bilder und animierte Bilder.
        WebP bietet viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine etwas bessere Kompression, ist jedoch nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF bieten im Vergleich zu neueren Formaten wie WebP und AVIF eine geringere Leistung, genießen jedoch eine breitere „historische“ Browserunterstützung. Die neueren Bildformate werden immer beliebter, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil haben).

Die folgende Liste umfasst Bildformate, die im Web erscheinen, die jedoch für Webinhalte vermieden werden sollten (in der Regel liegt das daran, dass entweder keine breite Browserunterstützung vorhanden ist oder weil es bessere Alternativen gibt).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Abkürzung</th>
      <th scope="row">Dateiformat</th>
      <th scope="col">MIME-Typ</th>
      <th scope="col">Dateierweiterung(en)</th>
      <th scope="col">Unterstützte Browser</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#bmp_bitmap_file">BMP</a></th>
      <th scope="row">Bitmap-Datei</th>
      <td><code>image/bmp</code></td>
      <td><code>.bmp</code></td>
      <td>Chrome, Edge, Firefox, IE, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#ico_microsoft_windows_icon">ICO</a></th>
      <th scope="row">Microsoft Icon</th>
      <td><code>image/x-icon</code></td>
      <td><code>.ico</code>, <code>.cur</code></td>
      <td>Chrome, Edge, Firefox, IE, Opera, Safari</td>
    </tr>
    <tr>
      <th scope="row"><a href="#tiff_tagged_image_file_format">TIFF</a></th>
      <th scope="row">Tagged Image File Format</th>
      <td><code>image/tiff</code></td>
      <td><code>.tif</code>, <code>.tiff</code></td>
      <td>Safari</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die Abkürzung für jedes Bildformat verlinkt auf eine längere Beschreibung des Formats, seiner Fähigkeiten und detaillierte Informationen zur Browser-Kompatibilität (einschließlich der Versionen, die Unterstützung eingeführt haben, und spezifische Sonderfunktionen, die möglicherweise später eingeführt wurden).

> [!NOTE]
> Safari 11.1 fügte die Möglichkeit hinzu, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt das.
> Siehe den [Chromium Bug](https://crbug.com/791658) und [Firefox Bug](https://bugzil.la/895131) für weitere Informationen.

## Details zu Bilddateitypen

Die folgenden Abschnitte bieten einen kurzen Überblick über die von Webbrowsern unterstützten Bilddateitypen.

In den folgenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden. Zum Beispiel bedeutet eine RGB-Farbtiefe von 8, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. **Bittiefe** hingegen ist die Gesamtanzahl der Bits, die verwendet werden, um jedes Pixel im Speicher darzustellen.

### APNG (Animated Portable Network Graphics)

APNG ist ein von Mozilla eingeführtes Dateiformat, das den [PNG](#png_portable_network_graphics)-Standard erweitert, um die Unterstützung von animierten Bildern hinzuzufügen. APNG ähnelt konzeptionell dem animierten GIF-Format, das seit Jahrzehnten verwendet wird, bietet jedoch eine größere Vielfalt an [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth), während das animierte GIF nur 8-Bit [indexierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützt.

APNG ist ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einer Tonspur synchronisiert werden müssen, wie Fortschrittsanzeigen, Aktivitäts-[Throbber](https://en.wikipedia.org/wiki/Throbber) und andere animierte Sequenzen. Beispielsweise ist APNG [eines der Formate, die bei der Erstellung animierter Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichtenanwendung auf iOS) unterstützt werden. Sie werden auch häufig für die animierten Teile von Webbrowser-Benutzeroberflächen verwendet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/apng</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.apng</code>, <code>.png</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://wiki.mozilla.org/APNG_Specification"
          >wiki.mozilla.org/APNG_Specification</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>Chrome 59, Edge 12, Firefox 3, Opera 46, Safari 8</td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>2.147.483.647×2.147.483.647 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Graustufen</th>
              <td>1, 2, 4, 8 und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Grad der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Block in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und der Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Frei und offen unter der
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike-Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder später.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

Das AV1 Image File Format (AVIF) ist ein leistungsfähiges, quelloffenes, lizenzfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF)-Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern in Web-Inhalten zu werden.
> Es bietet modernste Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzierung und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde. Das Format profitiert von den bedeutenden Fortschritten in der Videokodierung in den letzten Jahren und kann potenziell von der damit verbundenen Unterstützung für Hardware-Rendering profitieren. Es weist jedoch auch Nachteile für einige Anwendungsfälle auf, da Video- und Bildkodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG für visuell ähnliche Kompressionsstufen (z. B. sind verlustbehaftete AVIF-Bilder etwa 50 % kleiner als JPEG-Bilder).
- Generell hat AVIF eine bessere Kompression als WebP - Median 50 % vs. 30 % Kompression für das gleiche JPG-Set (Quelle: [AVIF WebP Comparison](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL-Blog)).
- Verlustfreie Kompression.
- Animation/Mehrbildspeicherung (ähnlich wie animierte GIFs, jedoch mit viel besserer Kompression).
- Unterstützung von Alphakanälen (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für die Speicherung von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Großer Farbraum: Unterstützung für Bilder, die einen größeren Bereich von Farben enthalten können.

AVIF unterstützt kein progressives Rendering, daher müssen Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf das reale Benutzererlebnis, da AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und daher viel schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann der Einfluss signifikant werden, und Sie sollten ein Format in Betracht ziehen, das progressives Rendering unterstützt.

AVIF wird von Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe hat), sollten Sie einen Fallback im [WebP](#webp-bild)-, [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format bereitstellen, indem Sie [das `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder einen anderen Ansatz) verwenden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/avif</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.avif</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <p>
          <a href="https://aomediacodec.github.io/av1-avif/"
            >AV1 Image File Format (AVIF)</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Chrome 85, Edge 121, Opera 71, Firefox 93 und Safari 16.1.
        <ul>
          <li>
            Firefox 93 unterstützt Standbilder, unterstützt den Farbraum sowohl für volle als auch für eingeschränkte Bereichsfarben, Bildtransformationen zum Spiegeln und Rotieren. Die Einstellung <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            kann verwendet werden, um die Strenge der Einhaltung der Spezifikation anzupassen.
          </li>
          <li>
            Firefox 113 und später unterstützen animierte Bilder.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>2.147.483.647×2.147.483.647 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Informationen zur Unterstützung von Farbmodi finden Sie in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1-Bitstream- und Decodierungsprozess-Spezifikation</a>, Abschnitt 6.4.2: Farbkonfigurationssemantik.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung lautet:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12-Bit</li>
          <li>Alphasupport</li>
          <li>ICC-Profilunterstützung</li>
          <li>
            NCLX-Unterstützung: sRGB, lineares sRGB, lineares Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3 usw.
          </li>
          <li>Kachelunterstützung</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet und verlustfrei.</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Lizenzfrei. Lizenzinformationen sind auf der <a href="https://aomedia.org/license/">Lizenzseite</a> verfügbar.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Datei)

Der **BMP** (**Bitmap-Bild**)-Dateityp ist am häufigsten auf Windows-Computern verbreitet und wird in der Regel nur für spezielle Fälle in Webanwendungen und -inhalten verwendet.

> [!WARNING]
> Sie sollten in der Regel die Verwendung von BMP-Dateien für Website-Inhalte vermeiden.
> Die häufigste Form von BMP-Dateien stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu png- oder jpg-Bildtypen führt.
> Effizientere BMP-Formate existieren, werden jedoch nicht weit verbreitet verwendet und selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl von internen Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form von BMP-Dateien ist ein unkomprimiertes Rasterbild, wobei jedes Pixel 3 Bytes belegt, die seine roten, grünen und blauen Komponenten darstellen, und jede Zeile mit `0x00`-Bytes auf eine Breite von mehr als 4 Bytes aufgefüllt wird.

Obwohl andere Datenrepräsentationen in der Spezifikation definiert sind, sind sie nicht weit verbreitet und oft völlig unimplementiert. Diese Funktionen umfassen: Unterstützung für verschiedene Bittiefen, indizierte Farben, Alphakanäle und unterschiedliche Pixelreihen (standardmäßig wird BMP von unten links nach rechts und oben geschrieben, anstatt von oben links nach rechts und unten).

Theoretisch werden mehrere Kompressionsalgorithmen unterstützt, und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format innerhalb der BMP-Datei gespeichert werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/bmp</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.bmp</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        Keine Spezifikation; Microsoft bietet jedoch allgemeine Dokumentation des Formats unter
        <a href="https://learn.microsoft.com/en-us/windows/win32/gdi/bitmap-storage">docs.microsoft.com/en-us/windows/desktop/gdi/bitmap-storage</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>
        Entweder 32.767×32.767 oder 2.147.483.647×2.147.483.647 Pixel, abhängig von der Formatversion
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Graustufen</th>
              <td>1</td>
              <td>
                Jedes Bit repräsentiert ein einzelnes Pixel, das entweder schwarz oder weiß ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em>-Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert repräsentiert, der entweder 2, 4 oder 8 Bits ist und als Index in die Farbtafel dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein separates Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jeder ist <em>D</em>-Bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Mehrere Kompressionsmethoden werden unterstützt, darunter verlustbehaftete oder verlustfreie Algorithmen
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>;
        während Microsoft Patente gegen BMP hält, haben sie angekündigt, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist unter dem Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der Online-Dienstanbieter CompuServe das **[GIF](https://de.wikipedia.org/wiki/Graphics_Interchange_Format)** (**Graphics Interchange Format**)-Bilddateiformat ein, um ein komprimiertes Grafikformat bereitzustellen, das allen Mitgliedern ihres Dienstes zur Verfügung stehen würde.
GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus, um 8-Bit indizierte Farbgraphiken verlustfrei zu komprimieren.
GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzigen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben (8 Bit jeweils für Rot, Grün und Blau) dient. Die Länge einer Farbtafel ist immer eine Potenz von 2 (das heißt, jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge).
Um mehr als 255 oder 256 Farben zu simulieren, wird in der Regel [Dithering](https://de.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, jeweils mit eigener Farbpalette, um Echtfarbenbilder zu erstellen, aber in der Praxis wird dies selten gemacht.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent bezeichnet, in welchem Fall Pixel mit dieser Farbe vollständig transparent sind.

GIF unterstützt einfache Animationen, bei denen nach einem anfänglichen Vollbildrahmen eine Serie von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Frame ändern.

GIF ist seit Jahrzehnten äußerst beliebt, aufgrund seiner Einfachheit und Kompatibilität. Seine Unterstützung für Animationen führte zu einer Wiederbelebung seiner Beliebtheit in der Ära der sozialen Medien, als animierte GIFs weit verbreitet wurden für kurze "Videos", Memes und andere einfache Animationssequenzen.

Ein weiteres beliebtes Merkmal von GIF ist die Unterstützung für [Interlacing](<https://de.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Pixelreihen in ungeordneter Weise gespeichert werden, sodass teilweise empfangene Dateien in geringerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzwerkverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Konvertierung von Vollfarbbildern in GIF zu unbefriedigendem Dithering führen kann. Typischerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden, und sollte [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen in Betracht ziehen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/gif</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.gif</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">GIF87a-Spezifikation</a><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt">GIF89a-Spezifikation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>65.536×65.536 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Graustufen</th>
              <td><em>n/a</em></td>
              <td>GIF enthält kein spezielles Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine Echte-Farben-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette ist definiert mit jeweils 8 Bit für Rot, Grün und Blau (insgesamt 24 Bits pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein spezielles Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine Echte-Farben-Pixel.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei (LZW)</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Während das GIF-Format selbst offen ist, war der LZW-Kompressionsalgorithmus bis Anfang der 2000er-Jahre durch Patente geschützt.
        Am 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO (Microsoft Windows Icon)-Dateiformat wurde von Microsoft für Desktop-Symbole auf Windows-Systemen entwickelt. Frühere Versionen des Internet Explorers führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei namens `favicon.ico` im Stammverzeichnis einer Website bereitstellen kann, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** zu spezifizieren — ein Symbol, das im Favoritenmenü und an anderen Stellen angezeigt wird, an denen eine ikonische Darstellung der Website nützlich wäre.

Eine ICO-Datei kann mehrere Icons enthalten und beginnt mit einem Verzeichnis, das Details zu jedem Icon aufführt. Nach dem Verzeichnis folgt die Daten der Icons. Die Daten jedes Icons können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Datei-Header oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich des Datei-Headers) sein. Falls Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung von PNG innerhalb von ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Web-Inhalten verwendet werden.
> Darüber hinaus hat ihre Verwendung für Favicons zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements nachgelassen, wie in [Bereitstellung von Symbolen für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td>
        <code>image/vnd.microsoft.icon</code> (offiziell),
        <code>image/x-icon</code> (von Microsoft verwendet)
      </td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.ico</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>256×256 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <caption>
            Icons im BMP-Format
          </caption>
          <tbody>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
            <tr>
              <th scope="row">Graustufen</th>
              <td>1</td>
              <td>
                Jedes Bit repräsentiert ein einzelnes Pixel, das entweder schwarz oder weiß ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em>-Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert repräsentiert, der entweder 2, 4 oder 8 Bits ist und als Index in die Farbtafel dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein separates Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jeder ist <em>D</em>-Bits.
              </td>
            </tr>
          </tbody>
        </table>
        <table class="standard-table">
          <caption>
            Icons im PNG-Format
          </caption>
          <tbody>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
            <tr>
              <th scope="row">Graustufen</th>
              <td>1, 2, 4, 8 und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Grad der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Block in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und der Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        BMP-Format-Icons verwenden fast immer verlustfreie Kompression, aber verlustbehaftete Methoden sind verfügbar.
        PNG-Icons werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group Image)

Das {{Glossary("JPEG", "JPEG")}} (normalerweise "**jay-peg**" ausgesprochen) Bildformat ist derzeit das am häufigsten verwendete verlustbehaftete Kompressionsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Kompression auf Inhalte, die Schärfe erfordern, wie Diagramme oder Diagramme, kann unbefriedigende Ergebnisse liefern.

JPEG ist eigentlich ein Datenformat für komprimierte Fotos, anstatt ein Dateityp. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat)-Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder betrachten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jpe</code>,
        <code>.jif</code>, <code>.jfif</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td><a href="https://jpeg.org/jpeg/">jpeg.org/jpeg/</a></td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>65.535×65.535 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Graustufen</th>
              <td><em>n/a</em></td>
              <td>Echte Graustufen können mit dem einzelnen Leuchtkraftkanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, von denen jede 8 Bits ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td><em>n/a</em></td>
              <td>JPEG bietet keinen indexierten Farbmodus.</td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alphakanal.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alphakanal.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Verlustbehaftet; basierend auf der <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">diskreten Kosinustransformation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Seit dem 27. Oktober 2006 sind alle US-Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Kompression und bietet dabei höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) sowie eine effizientere Komprimierung sowie vollständige Alpha-Transparenz-Unterstützung.

PNG wird weithin unterstützt, und alle großen Browser bieten vollständige Unterstützung für seine Funktionen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/png</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.png</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td><a href="https://www.w3.org/TR/PNG">w3.org/TR/PNG</a></td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>2.147.483.647×2.147.483.647 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Graustufen</th>
              <td>1, 2, 4, 8 und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Grad der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Block in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und der Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei, optional indizierte Farbe wie GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. Die W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungsregeln</a>, <a href="https://www.w3.org/policies/#trademarks">Markenregeln</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierungsregeln</a> gelten. Keine bekannten gebührenpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

SVG ist ein {{Glossary("XML", "XML")}}-basiertes [Vektorgrafik](https://de.wikipedia.org/wiki/Vektorgrafik)-Format, das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen spezifiziert, um Formen, Linien zu erstellen, Farben anzuwenden, Filter anzuwenden usw. SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können. Daher ist SVG für Benutzeroberflächenelemente im modernen Web-Design beliebt.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der beim Interpretieren das gewünschte Bild zeichnet. Zum Beispiel definiert dieses Beispiel einen Zeichenbereich mit einer Anfangsgröße von 100x100 Einheiten, der eine Linie diagonal durch das Feld zieht:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann auf zwei Arten in Webinhalten verwendet werden:

1. Sie können das {{SVGElement("svg")}}-Element direkt innerhalb des HTML schreiben, das [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthält, um das Bild zu zeichnen.
2. Sie können ein SVG-Bild überall anzeigen, wo Sie eine der anderen Bildtypen verwenden können, einschließlich mit den {{HTMLElement("img")}} und {{HTMLElement("picture")}}-Elementen, der {{cssxref("background-image")}}-CSS-Eigenschaft usw.

SVG ist eine ideale Wahl für Bilder, die durch eine Reihe von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, in der das Bild gerendert wird, unbekannt ist oder variieren kann, da SVG sanft auf die gewünschte Größe skaliert. Es ist im Allgemeinen nicht nützlich für rein Bitmap- oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb eines SVGs zu inkludieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/svg+xml</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.svg</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td><a href="https://www.w3.org/TR/SVG2">w3.org/TR/SVG2</a></td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>Unbegrenzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Farben in SVG werden mit
        <a href="/de/docs/Web/CSS/color_value">CSS-Farbsyntax</a> spezifiziert.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        SVG-Quellen können während der Übertragung mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Kompression</a>stechniken komprimiert werden oder auf der Festplatte als <code>.svgz</code>-Datei.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten.
        Die W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungsregeln</a>, <a href="https://www.w3.org/policies/#trademarks">Markenregeln</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierungsregeln</a> gelten. Keine bekannten gebührenpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://de.wikipedia.org/wiki/TIFF) ist ein Rastergrafik-Dateiformat, das ursprünglich zur Speicherung von gescannten Fotos erstellt wurde, obwohl es jedes beliebige Bild sein kann. Es ist ein etwas "schweres" Format, da TIFF-Dateien tendenziell größer sind als Bilder in anderen Formaten. Dies liegt an den oft enthaltenen Metadaten sowie der Tatsache, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Kompressionsalgorithmen verwenden, die nach der Kompression noch relativ große Dateien hinterlassen.

TIFF unterstützt eine Vielzahl von Kompressionsmethoden, aber die am häufigsten verwendeten sind die CCITT Group 4- (und für ältere Faxsysteme Group 3)-Kompressionssysteme, die von Faxsoftware verwendet werden, sowie LZW- und verlustbehaftete JPEG-Kompression.

Jeder Wert in einer TIFF-Datei wird mit seinem **Tag** (was für eine Art von Information es ist, z. B. die Breite des Bildes) und seinem **Typ** (das Format, in dem die Daten gespeichert sind) angegeben, gefolgt von der Länge des Arrays von Werten, die diesem Tag zugewiesen werden sollen (alle Eigenschaften werden in Arrays gespeichert, auch bei Einzelwerten). Dadurch können unterschiedliche Datentypen für dieselben Eigenschaften verwendet werden. Zum Beispiel wird die Breite eines Bildes, `ImageWidth`, unter Verwendung des Tags `0x0100` gespeichert und ist ein Ein-Wert-Array. Durch das Spezifizieren von Typ 3 (`SHORT`) wird der Wert von `ImageWidth` als ein 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Das Spezifizieren von Typ 4 (`LONG`) speichert die Breite als einen 32-Bit-Wert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzige TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um mehrseitige Dokumente darzustellen, zum Beispiel (wie ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax). Allerdings ist Software, die TIFF-Dateien liest, nur verpflichtet, das erste Bild zu unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB. Dazu gehören CMYK, YCbCr und andere, was TIFF zu einer guten Wahl für die Speicherung von Bildern macht, die für Druck-, Film- oder Fernsehmedien gedacht sind.

Abgesehen von Safari unterstützen Browser TIFF-Bilder im Webinhalt nicht nativ, es sei denn, es werden spezielle Bibliotheken oder Browser-Add-ons verwendet. Daher werden TIFF-Dateien nicht häufig zur Anzeige von Webinhalten verwendet, _aber_ es ist üblich, herunterladbare TIFF-Dateien bereitzustellen, wenn Fotos und andere Kunstwerke für präzises Bearbeiten oder Drucken vorgesehen sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.tif</code>, <code>.tiff</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/">https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/#50577413_pgfId-1035272</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>4.294.967.295×4.294.967.295 Pixel (theoretisch)</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
            <tr>
              <th scope="row">Bilevel</th>
              <td>1</td>
              <td>
                Ein zweiwertiges TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel.
                Das <code>PhotometricInterpretation</code>-Feld gibt an, welches von 0 und 1 schwarz und welches weiß ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels anzeigt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8</td>
              <td>
                Alle Echte-Farben-RGB-Bilder werden mit jeweils 8 Bit für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einem <code>ColorMap</code>-Datensatz, der die im Bild verwendeten Farben definiert.
                Die Farbkarte listet alle roten Werte auf, dann alle grünen Werte und dann alle blauen Werte (anstelle von <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Abtastwerte pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und der Alpha-Typ (1 für eine assoziierte, vorvermischte Alphakomponente und 2 für unassoziierte Alpha - eine separate Maske) angegeben wird; Alphakanäle werden jedoch selten in TIFF-Dateien verwendet und möglicherweise von der Benutzersoftware nicht unterstützt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Abtastwerte pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und der Alpha-Typ (1 für eine assoziierte, vorvermischte Alphakomponente und 2 für unassoziierte Alpha - eine separate Maske) angegeben wird; Alphakanäle werden jedoch selten in TIFF-Dateien verwendet und möglicherweise von der Benutzersoftware nicht unterstützt.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustfreie PackBits- und LZW-Kompression werden unterstützt, ebenso wie verlustbehaftete JPEG-Kompression.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von denen, die mit Bibliotheken verbunden sein könnten, die Sie verwenden); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Kompression durch prädiktive Kodierung basierend auf dem VP8-Videocodec und verlustfreie Kompression, die Ersatz für sich wiederholende Daten verwendet. Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35% kleiner als JPEG-Bilder mit visuell ähnlichen Kompressionsstufen. Verlustfreie WebP-Bilder sind typischerweise 26 % kleiner als die gleichen Bilder im PNG-Format.

WebP unterstützt auch Animationen: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreie WebP hält den `ANIM`-Block, der die Animation beschreibt, und den `ANMF`-Block, der einen Frame einer Animationssequenz darstellt. Looping wird unterstützt.

WebP hat nun breite Unterstützung in den neuesten Versionen großer Webbrowser, obwohl es keine tiefgehende historische Unterstützung hat. Geben Sie einen Fallback entweder im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format, wie mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/webp</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.webp</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <p>
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF Container Specification</a><br />{{RFC(6386, "VP8-Datenformat- und Dekodierungsleitfaden")}} (verlustbehaftete Codierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP-Verlustfreie-Bitstream-Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch zum <em>Exportieren</em> von Bildern aus einer Leinwand verwendet werden. Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Unterstützungsversion-Informationen.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftete WebP speichert das Bild im 8-Bit Y'CbCr 4:2:0 (YUV420) Format.
        Verlustfreie WebP verwendet 8-Bit ARGB-Farbe, wobei jede Komponente 8 Bits für insgesamt 32 Bits pro Pixel einnimmt.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei (Huffman, LZ77 oder Farb-Cache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; der Quellcode ist offen verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Safari für macOS hängt die WebP-Unterstützung sowohl von der Safari- als auch von der macOS-Version ab. Sie benötigen Safari 14 oder später sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, werden aber nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsprobleme aufweist. Moderne Browser unterstützen XBM-Dateien seit vielen Jahren nicht mehr, aber beim Umgang mit älteren Inhalten können Sie dennoch auf einige stoßen.

XBM verwendet einen Ausschnitt von C-Code, um den Inhalt des Bildes als ein Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe des Bitmaps angeben (und optional den Hotspot, wenn das Bild als Cursor entworfen ist), gefolgt von einem Array von `unsigned char`, wobei jeder Wert 8 1-Bit-monochrome Pixel enthält.

Das Bild muss ein Mehrfaches von 8 Pixeln breit sein. Zum Beispiel stellt der folgende Code ein XBM-Bild dar, das 8 Pixel mal 8 Pixel ist, mit diesen Pixeln in einem schwarz-weißen Schachbrettmuster:

```cpp
#define square8_width 8
#define square8_height 8
static unsigned char square8_bits[] = {
  0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55
};
```

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/xbm</code>, <code>image-xbitmap</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.xbm</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>Firefox 1–3.5, Internet Explorer 1–5</td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>Unbegrenzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente</th>
              <th scope="col">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Graustufen</th>
              <td>1</td>
              <td>Jedes Byte enthält acht 1-Bit-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Indexierte Farben</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Open Source</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Bildformats

Die Auswahl des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als bei Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jedes dazu neigt, einen spezifischen Anwendungsfall zu haben.

### Fotografien

Fotografien sind in der Regel gut mit verlustbehafteter Kompression (abhängig von der Konfiguration des Encoders). Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG kompatibler ist, während WebP möglicherweise eine bessere Kompression bietet. Um die Qualität zu maximieren und die Download-Zeit zu minimieren, sollten Sie in Betracht ziehen, beides [mit einem Fallback](#bereitstellung_von_bild-fallbacks) bereitzustellen, wobei WebP die erste Wahl und JPEG die zweite ist. Andernfalls ist JPEG die sichere Wahl für die Kompatibilität.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WebP oder JPEG</td>
      <td>JPEG</td>
    </tr>
  </tbody>
</table>

### Symbole

Für kleinere Bilder wie Symbole sollten Sie ein verlustfreies Format verwenden, um den Detailverlust in einem größenbeschränkten Bild zu vermeiden. Während verlustfreies WebP für diesen Zweck ideal ist, ist die Unterstützung noch nicht weit verbreitet, daher ist PNG eine bessere Wahl, es sei denn, Sie bieten ein [Fallback](#bereitstellung_von_bild-fallbacks) an. Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG mit seiner indizierten Kompressionsoption (PNG-8) oft noch kleiner komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, sollten Sie [SVG](#svg_scalable_vector_graphics) in Betracht ziehen, da es über verschiedene Auflösungen und Größen skaliert und somit perfekt für ein responsives Design geeignet ist. Obwohl die SVG-Unterstützung gut ist, kann es sinnvoll sein, ein PNG-Fallback für ältere Browser anzubieten.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>SVG, verlustfreies WebP oder PNG</td>
      <td>PNG</td>
    </tr>
  </thead>
</table>

### Bildschirmfotos

Sofern Sie keine Abstriche bei der Qualität machen möchten, sollten Sie ein verlustfreies Format für Bildschirmfotos verwenden. Dies ist besonders wichtig, wenn in Ihrem Bildschirmfoto Text enthalten ist, da Text bei verlustbehafteter Kompression leicht verschwommen und unklar wird.

PNG ist wahrscheinlich Ihre beste Wahl, aber verlustfreies WebP wird voraussichtlich besser komprimiert sein.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>
        Verlustfreies WebP oder PNG;<br />JPEG, wenn Kompressionsartefakte kein
        Anliegen sind
      </td>
      <td>PNG oder JPEG;<br />GIF für Bildschirmfotos mit geringer Farbanzahl</td>
    </tr>
  </thead>
</table>

### Diagramme, Zeichnungen und Grafiken

Für jedes Bild, das mit Vektorgrafiken dargestellt werden kann, ist SVG die beste Wahl. Andernfalls sollten Sie ein verlustfreies Format wie PNG verwenden. Wenn Sie sich für ein verlustbehaftetes Format wie JPEG oder verlustbehaftetes WebP entscheiden, wägen Sie den Komprimierungsgrad sorgfältig ab, um zu vermeiden, dass Text oder andere Formen verschwommen oder unklar werden.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td><a href="#svg_scalable_vector_graphics">SVG</a></td>
      <td><a href="#png_portable_network_graphics">PNG</a></td>
    </tr>
  </thead>
</table>

## Bereitstellung von Bild-Fallbacks

Während das Standard-HTML-{{HTMLElement("img")}}-Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut dies das {{HTMLElement("picture")}}-Element. `<picture>` wird als Wrapper für eine Reihe von {{HTMLElement("source")}}-Elementen verwendet, von denen jedes eine Version des Bildes in einem anderen Format oder unter anderen [Medienbedingungen](/de/docs/Web/CSS/@media) sowie ein `<img>`-Element spezifiziert, das angibt, wo das Bild angezeigt werden soll, und das Fallback auf die Standard- oder "am meisten kompatible" Version.

Ein Beispiel: Wenn Sie ein Diagramm anzeigen, das am besten mit SVG dargestellt wird, jedoch ein Fallback auf ein PNG oder GIF des Diagramms anbieten möchten, würden Sie etwas wie folgt tun:

```html
<picture>
  <source srcset="diagram.svg" type="image/svg+xml" />
  <source srcset="diagram.png" type="image/png" />
  <img
    src="diagram.gif"
    width="620"
    height="540"
    alt="Diagram showing the data channels" />
</picture>
```

Sie können so viele `<source>`s angeben, wie Sie möchten, obwohl in der Regel 2 oder 3 ausreichend sind.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Webmedien-Technologien](/de/docs/Web/Media)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}}-{{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elemente
- Die CSS-{{cssxref("background-image")}}-Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor und die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle

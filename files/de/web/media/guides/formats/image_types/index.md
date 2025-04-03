---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

In diesem Leitfaden werden wir die Bilddateitypen behandeln, die allgemein von Webbrowsern unterstützt werden, und Einblicke geben, die Ihnen helfen werden, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

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
        AVIF und WebP haben eine bessere Leistung, aber eine begrenztere Browser-Unterstützung.<br />
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
          Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und lizenzfreien Bildformat.
          Es bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass beim Einsatz von AVIF Rückfallebenen auf Formate mit besserer Browser-Unterstützung enthalten sein sollten (z.B. durch Verwendung des <code><a href="/de/docs/Web/HTML/Element/picture">&#x3C;picture></a></code>-Elements).<br />
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
        Gute Wahl für einfache Bilder und Animationen.
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indizierte Standbilder und ziehen Sie WebP, AVIF oder APNG für Animationssequenzen in Betracht.<br />
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
          Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
          Bevorzugen Sie PNG, wenn eine genauere Reproduktion des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl eine bessere Reproduktion als auch eine höhere Komprimierung erforderlich sind.<br />
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
          PNG wird gegenüber JPEG bevorzugt, wenn eine genauere Reproduktion der Quellbilder oder Transparenz benötigt wird. WebP/AVIF bieten eine noch bessere Komprimierung und Reproduktion, aber die Browser-Unterstützung ist begrenzter.<br />
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
        Vektorbildformat; ideal für Benutzerschnittstellenelemente, Symbole, Diagramme usw., die in verschiedenen Größen genau gezeichnet werden müssen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_image">WebP</a></th>
      <th scope="row">Web Picture Format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.
        WebP bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine etwas bessere Komprimierung, ist aber nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF haben eine schlechtere Leistung im Vergleich zu neueren Formaten wie WebP und AVIF, genießen jedoch eine breitere "historische" Browser-Unterstützung. Die neueren Bildformate gewinnen an Popularität, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. nahezu keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web vorkommen, aber für Webinhalte vermieden werden sollten (im Allgemeinen, weil sie entweder keine breite Browser-Unterstützung haben oder weil es bessere Alternativen gibt).

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
      <th scope="row">Microsoft-Icon</th>
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
> Die Abkürzung für jedes Bildformat verlinkt zu einer ausführlicheren Beschreibung des Formats, seiner Fähigkeiten und detaillierten Browser-Kompatibilitätsinformationen (einschließlich der Versionen, die Unterstützung eingeführt haben, und spezielle Funktionen, die später eingeführt wurden).

> [!NOTE]
> Safari 11.1 hat die Möglichkeit hinzugefügt, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Siehe den [Chromium-Bug](https://crbug.com/791658) und den [Firefox-Bug](https://bugzil.la/895131) für weitere Informationen.

## Details zum Bilddateityp

Die folgenden Abschnitte bieten einen kurzen Überblick über die von Webbrowsern unterstützten Bilddateitypen.

In den untenstehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden. Beispielsweise zeigt eine RGB-Farbtiefe von 8 an, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. **Farbtiefe** hingegen ist die gesamte Anzahl von Bits, die verwendet wird, um jedes Pixel im Speicher darzustellen.

### APNG (Animated Portable Network Graphics)

APNG ist ein von Mozilla eingeführtes Dateiformat, das den [PNG](#png_portable_network_graphics)-Standard erweitert, um Unterstützung für animierte Bilder hinzuzufügen. Konzeptionell ähnlich dem animierten GIF-Format, das seit Jahrzehnten verwendet wird, ist APNG fähiger, da es eine Vielzahl von [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit [indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG ist ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einem Soundtrack synchronisiert werden müssen, wie Fortschrittsanzeigen, Aktivitätsindikatoren ([Throbber](https://en.wikipedia.org/wiki/Throbber)) und andere animierte Sequenzen. Zum Beispiel ist APNG [eines der Formate, das beim Erstellen animierter Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichten-App auf iOS) unterstützt wird. Sie werden auch häufig für die animierten Teile von Benutzeroberflächen von Webbrowsern verwendet.

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
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Pegel der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Frei und offen unter der
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder höher.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

Das AV1-Image-Dateiformat (AVIF) ist ein leistungsfähiges, quelloffenes und lizenzfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF)-Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern in Webinhalten zu werden.
> Es bietet erstklassige Funktionen und Leistung, ohne die Belastungen durch komplizierte Lizenzierungen und Patentrechte, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde. Das Format profitiert von den erheblichen Fortschritten im Videoencoding in den letzten Jahren und kann potenziell von der damit verbundenen Unterstützung für Hardware-Rendering profitieren. Es hat jedoch auch Nachteile in einigen Fällen, da Video- und Bildencoding unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Komprimierung im Vergleich zu JPG und PNG bei visuell ähnlichen Komprimierungsstufen (z.B. sind verlustbehaftete AVIF-Bilder etwa 50 % kleiner als JPEG-Bilder).
- Im Allgemeinen hat AVIF eine bessere Komprimierung als WebP – median 50 % vs. 30 % Komprimierung für dasselbe JPG-Set (Quelle: [AVIF-WebP-Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Komprimierung.
- Animationen/mehrbildreiche Speicherung (ähnlich den animierten GIFs, jedoch mit wesentlich besserer Komprimierung)
- Alpha-Kanal-Unterstützung (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für die Speicherung von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Breiter Farbraum: Unterstützung für Bilder, die einen größeren Bereich an Farben enthalten können.

AVIF unterstützt kein progressives Rendering, sodass Dateien vollständig heruntergeladen werden müssen, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf die reale Benutzererfahrung, da AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und daher schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann der Einfluss jedoch erheblich werden, und Sie sollten erwägen, ein Format zu verwenden, das progressives Rendering unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend (und nur wenig historisch fundiert) ist, sollten Sie ein Fallback im [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format mit [dem `<picture>`-Element](/de/docs/Web/HTML/Element/picture) (oder einem anderen Ansatz) bereitstellen.

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
            >AV1-Bilddateiformat (AVIF)</a
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
            Firefox 93 unterstützt Standbilder mit Farbbereich-Unterstützung für sowohl volle als auch begrenzte Farben, Bildtransformationen für Spiegelung und Rotation. Die Präferenz <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            kann verwendet werden, um die Konformitätsstrenge mit der Spezifikation anzupassen.
          </li>
          <li>
            Firefox 113 und höher unterstützen animierte Bilder.
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
          Informationen zur Unterstützung des Farbmodus sind in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2: Farbpconfig-Semantik.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung ist:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12-Bit</li>
          <li>Alpha-Unterstützung</li>
          <li>ICC-Profil-Unterstützung</li>
          <li>
            NCLX-Unterstützung: sRGB, linear sRGB, linear Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3, etc.
          </li>
          <li>Tiling-Unterstützung</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
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

Der **BMP** (**Bitmap-Bild**)-Dateityp ist am weitesten auf Windows-Computern verbreitet und wird in Web-Apps und Inhalten in der Regel nur für spezielle Fälle verwendet.

> [!WARNING]
> In der Regel sollten Sie die Verwendung von BMP-Dateien für Website-Inhalte vermeiden.
> Die häufigste Form der BMP-Datei stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu png- oder jpg-Bildtypen führt.
> Effizientere BMP-Formate existieren, werden aber nicht häufig verwendet und selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl interner Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form der BMP-Datei ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Byte belegt, die seine rote, grüne und blaue Komponente darstellen, und jede Reihe mit `0x00`-Bytes auf ein Vielfaches von 4 Byte Breite aufgefüllt wird.

Während andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht häufig verwendet und sind oft vollständig unimplementiert. Diese Merkmale umfassen: Unterstützung für verschiedene Farbtiefen, indizierte Farben, Alpha-Kanäle und unterschiedliche Pixelreihenfolgen (standardmäßig wird BMP von unten links in die rechte und obere Richtung geschrieben, anstatt von oben links in die rechte und untere Richtung).

Theoretisch werden mehrere Komprimierungsalgorithmen unterstützt, und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format innerhalb der BMP-Datei gespeichert werden.

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
        Keine Spezifikation; Microsoft bietet jedoch allgemeine Dokumentation des Formats auf
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
        Entweder 32.767×32.767 oder 2.147.483.647×2.147.483.647 Pixel, je nach Formatversion
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
                Jedes Bit stellt ein einzelnes Pixel dar, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten darstellen; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der 2, 4 oder 8 Bits beträgt und als Index in die Farbpalette dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein spezielles Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten darstellen; jeder ist <em>D</em> Bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Mehrere Komprimierungsmethoden werden unterstützt, einschließlich verlustbehafteter oder verlustfreier Algorithmen
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>;
        obwohl Microsoft Patente für BMP hält, haben sie eine Zusicherung veröffentlicht, dass sie ihre Patentrechte nicht durchsetzen werden, solange bestimmte Bedingungen erfüllt sind.
        Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist unter dem Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

Im Jahr 1987 führte der Online-Dienstleister CompuServe das **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**)-Bilddateiformat ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes verwenden konnten. GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus, um 8-Bit indizierte Farbgrafiken verlustfrei zu komprimieren. GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben (8 Bit jeweils für Rot, Grün und Blau) dient. Die Länge einer Farbtabelle ist immer eine Potenz von 2 (das heißt, jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird in der Regel [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, von denen jeder seine eigene Farbpalette hat, um Echtfarbbilder zu erzeugen, aber in der Praxis wird dies selten getan.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent festgelegt, in diesem Fall sind Pixel mit diesem Wert vollständig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem anfänglichen Vollbildrahmen eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Rahmen ändern.

GIF war aufgrund seiner Einfachheit und Kompatibilität jahrzehntelang extrem beliebt. Seine Animationsunterstützung führte zu einem Wiederaufleben seiner Beliebtheit im Social-Media-Zeitalter, als animierte GIFs weit verbreitet für kurze "Videos", Memes und andere einfache Animationssequenzen verwendet wurden.

Ein weiteres beliebtes Merkmal von GIF ist die Unterstützung für [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Pixelzeilen außer Reihenfolge gespeichert werden, sodass teilweise empfangene Dateien in niedrigerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung von Echtfarbbildern in GIF zu unbefriedigendem Dithering führen kann. Typischerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und sollte erwägen, für verlustfreie Animationssequenzen [APNG](#apng_animated_portable_network_graphics) zu verwenden.

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
              <th scope="row">Echte Farbe</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine echten Farb-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird als 8 Bit jeweils für Rot, Grün und Blau definiert (insgesamt 24 Bit pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein spezielles Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine echten Farb-Pixel.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei (LZW)</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Während das GIF-Format selbst offen ist, war der LZW-Komprimierungsalgorithmus bis Anfang der 2000er Jahre durch Patente geschützt.
        Ab dem 7. Juli 2004 sind alle relevanten Patente abgelaufen, und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows-Icon)

Das ICO-Dateiformat (Microsoft Windows-Icon) wurde von Microsoft für Desktop-Icons von Windows-Systemen entwickelt. Early versions of Internet Explorer introduced the ability for a website to provide an ICO file named `favicon.ico` in a website's root directory to specify a **[favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** — an icon to be displayed in the Favorites menu, and other places where an iconic representation of the site would be useful.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem auflistet. Nach dem Verzeichnis folgen die Daten für die Icons. Die Daten jedes Icons können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich Dateikopf) sein. Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG in ICO-Dateien erst ab Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden. Zusätzlich hat ihre Verwendung für Favicons zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements abgenommen, wie in [Bereitstellung von Symbolen für verschiedene Verwendungskontexte](/de/docs/Web/HTML/Element/link#providing_icons_for_different_usage_contexts) beschrieben.

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
                Jedes Bit stellt ein einzelnes Pixel dar, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die rote, grüne und blaue Farbkomponente darstellen; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der 2, 4 oder 8 Bits beträgt und als Index in die Farbpalette dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein spezielles Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten darstellen; jeder ist <em>D</em> Bits.
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
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Pegel der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        BMP-Format-Icons verwenden fast immer verlustfreie Komprimierung, aber verlustbehaftete Methoden sind verfügbar. PNG-Icons werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group Image)

Das {{Glossary("JPEG", "JPEG")}}-Bildformat (typischerweise als "**jay-peg**" ausgesprochen) ist derzeit das am weitesten verbreitete verlustbehaftete Komprimierungsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Komprimierung auf Inhalte, die Schärfe erfordern, wie z. B. Diagramme oder Grafiken, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist eigentlich ein Datenformat für komprimierte Fotos und nicht ein Dateityp. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat)-Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder betrachten.

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
              <td>Echte Graustufen können mit der einzelnen Luma-Komponente (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, von denen jede 8 Bit beträgt.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td><em>n/a</em></td>
              <td>JPEG bietet keinen indizierten Farbmodus.</td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alpha-Kanal.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alpha-Kanal.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehaftet; basierend auf der <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">diskreten Kosinustransformation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Ab dem 27. Oktober 2006 sind alle US-Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Komprimierung, während es höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) unterstützt und effizienter ist, sowie volle Alpha-Transparenzunterstützung bietet.

PNG ist weit verbreitet, und alle großen Browser bieten volle Unterstützung für seine Funktionen.

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
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte
                dargestellt, die den Pegel der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem
                <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>
                Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die
                Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei, optional indizierte Farben wie GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentenverwendung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierungs</a>regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

SVG ist ein {{Glossary("XML", "XML")}}-basiertes [Vektorgrafikformat](https://en.wikipedia.org/wiki/Vector_graphics), das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen angibt, die Formen, Linien, Farben, Filter usw. erzeugen. SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können. Dementsprechend ist SVG für Benutzeroberflächenelemente im modernen Webdesign beliebt.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der beim Interpretieren das gewünschte Bild zeichnet. Zum Beispiel definiert dieses Beispiel einen Zeichnungsbereich mit einer anfänglichen Größe von 100 x 100 Einheiten, der eine Linie enthält, die diagonal durch das Rechteck verläuft:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann in Web-Inhalten auf zwei Arten verwendet werden:

1. Sie können das {{SVGElement("svg")}}-Element direkt im HTML schreiben, das [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthält, um das Bild zu zeichnen.
2. Sie können ein SVG-Bild überall dort anzeigen, wo Sie einen der anderen Bildtypen verwenden können, einschließlich mit den {{HTMLElement("img")}} und {{HTMLElement("picture")}}-Elementen, der {{cssxref("background-image")}} CSS-Eigenschaft usw.

SVG ist eine ideale Wahl für Bilder, die durch eine Reihe von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, in der das Bild gerendert wird, unbekannt oder variabel ist, da SVG sich nahtlos auf die gewünschte Größe skalieren lässt. Es ist im Allgemeinen nicht sinnvoll für rein bitmap- oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb eines SVG zu integrieren.

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
        <a href="/de/docs/Web/CSS/color_value">CSS-Farbsyntax</a> angegeben.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        SVG-Quelltext kann während des Transits mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Komprimierung</a>-Techniken komprimiert werden, oder auf der Festplatte als <code>.svgz</code>-Datei.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentenverwendung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierungs</a>regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafikdateiformat, das ursprünglich zum Speichern gescannter Fotos erstellt wurde, obwohl es jede Art von Bild sein kann. Es ist ein etwas "schweres" Format, da TIFF-Dateien dazu neigen, größer zu sein als Bilder in anderen Formaten. Dies liegt an den oft enthaltenen Metadaten sowie an der Tatsache, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Komprimierungsalgorithmen verwenden, die nach der Komprimierung noch ziemlich große Dateien hinterlassen.

TIFF unterstützt eine Vielzahl von Komprimierungsmethoden, aber die am häufigsten verwendeten sind die CCITT-Gruppe 4 (und für ältere Faxsysteme Gruppe 3)-Kompressionssysteme, die von Faxsoftware verwendet werden, sowie LZW- und verlusthafte JPEG-Komprimierung.

Jeder Wert in einer TIFF-Datei wird mit seinem **Tag** (der angibt, welche Art von Information es ist, wie z.B. die Breite des Bildes) und seinem **Typ** (der angibt, in welchem Format die Daten gespeichert sind) angegeben, gefolgt von der Länge des Arrays von Werten, die diesem Tag zugeordnet werden sollen (alle Eigenschaften werden in Arrays gespeichert, auch für Einzelwerte). Dies erlaubt die Verwendung unterschiedlicher Datentypen für dieselben Eigenschaften. Beispielsweise wird die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` gespeichert und ist ein eintragungstiefes Array. Durch die Angabe von Typ 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Durch die Angabe von Typ 4 (`LONG`) wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um z.B. mehrseitige Dokumente darzustellen (wie ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax). Software, die TIFF-Dateien liest, ist jedoch nur verpflichtet, das erste Bild zu unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB. Dazu gehören CMYK, YCbCr und andere, was TIFF zu einer guten Wahl für die Speicherung von Bildern macht, die für den Druck, Film- oder Fernsehmedien bestimmt sind.

Außer Safari unterstützen Browser keine TIFF-Bilder in Web Inhalten nativ, es sei denn durch die Verwendung spezieller Bibliotheken oder Browser-Add-ons. Daher werden TIFF-Dateien nicht allgemein verwendet, um Webinhalte anzuzeigen, _aber_ es ist üblich, herunterladbare TIFF-Dateien bereitzustellen, wenn Fotos und andere Kunstwerke verteilt werden, die für präzise Bearbeitung oder Druck bestimmt sind.

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
                Ein Bilevel-TIFF speichert 8 Bit in jedem Byte, ein Bit pro Pixel. Das Feld <code>PhotometricInterpretation</code> gibt an, welches von 0 und 1 schwarz ist und welches weiß ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8</td>
              <td>
                Alle echten Farb-RGB-Bilder werden mit 8 Bit jeweils für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in ein <code>ColorMap</code>-Datensatz, der die im Bild verwendeten Farben definiert. Die Farbkarte listet alle Rot-Werte auf, dann alle Grün-Werte, dann alle Blau-Werte (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden durch Angabe von mehr als 3 Proben pro Pixel im Feld <code>SamplesPerPixel</code> hinzugefügt, und die Art des Alpha wird angegeben (1 für eine assoziierte, vorvervielfachte Alphakomponente und 2 für unassozierte Alphakomponente - eine separate Matte); jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und können von der Software des Benutzers nicht unterstützt werden.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden durch Angabe von mehr als 3 Proben pro Pixel im Feld <code>SamplesPerPixel</code> hinzugefügt, und die Art des Alpha wird angegeben (1 für eine assoziierte, vorvervielfachte Alphakomponente und 2 für unassozierte Alphakomponente - eine separate Matte); jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und können von der Software des Benutzers nicht unterstützt werden.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber die verlustfreien PackBits- und LZW-Komprimierungen werden unterstützt, ebenso wie die verlustbehaftete JPEG-Komprimierung.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von denen, die mit Bibliotheken, die Sie möglicherweise verwenden, verbunden sind); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Komprimierung durch prädiktive Kodierung basierend auf dem VP8-Videocodec und verlustfreie Komprimierung, die Ersetzungen für wiederholte Daten verwendet. Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35% kleiner als JPEG-Bilder mit visuell ähnlichen Komprimierungsniveaus. Verlustfreie WebP-Bilder sind typischerweise 26% kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animation: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreie WebP enthält den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz darstellt. Schleifen werden unterstützt.

WebP hat inzwischen breite Unterstützung in den neuesten Versionen der wichtigsten Webbrowser, obwohl es keine tiefe historische Unterstützung hat. Bieten Sie ein Fallback im [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format an, zum Beispiel mit [dem `<picture>`-Element](/de/docs/Web/HTML/Element/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF Container Specification</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Verlustfreie Bitstream-Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch für <em>den Export</em> von Bildern aus einem Canvas verwendet werden.
        Weitere detaillierte Versionsinformationen zur Unterstützung siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a>.</p>
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
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei (Huffman, LZ77 oder Farbcache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; der Quellcode ist offen verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Auf Safari für macOS hängt die WebP-Unterstützung sowohl von der Safari- als auch von der macOS-Version ab. Sie benötigen Safari 14 oder höher sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, werden jedoch nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsbedenken birgt. Moderne Browser haben XBM-Dateien seit vielen Jahren nicht mehr unterstützt, aber beim Umgang mit älteren Inhalten kann es vorkommen, dass Sie auf einige stoßen.

XBM verwendet einen Ausschnitt von C-Code, um den Inhalt des Bildes als ein Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe der Bitmap angeben (und optional den Hotspot, wenn das Bild als Cursor gedacht ist), gefolgt von einem Array von `unsigned char`, wobei jeder Wert 8 1-Bit-Monochrom-Pixel enthält.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein. Zum Beispiel repräsentiert der folgende Code ein XBM-Bild, das 8 Pixel mal 8 Pixel groß ist, mit diesen Pixeln in einem schwarz-weißen Schachbrettmuster:

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
              <th scope="row">Echte Farbe</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Open Source</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Bildformats

Die Wahl des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als bei Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jedes in der Regel ein spezifisches Set von Anwendungsfällen hat.

### Fotografien

Fotografien funktionieren in der Regel gut mit verlustbehafteter Kompression (abhängig von der Konfiguration des Encoders). Das macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG kompatibler ist, WebP jedoch möglicherweise eine bessere Kompression bietet. Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie erwägen, [einen Fallback anzubieten](#bereitstellung_von_bild-fallbacks) mit WebP als erster Wahl und JPEG als zweiter. Andernfalls ist JPEG die sichere Wahl für die Kompatibilität.

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

Für kleinere Bilder wie Symbole sollten Sie ein verlustfreies Format verwenden, um Detailverluste bei einem größenbeschränkten Bild zu vermeiden. Während verlustfreies WebP dafür ideal ist, ist die Unterstützung noch nicht weit verbreitet, daher ist PNG eine bessere Wahl, es sei denn, Sie bieten einen [Fallback](#bereitstellung_von_bild-fallbacks) an. Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG oft sogar kleiner komprimiert, wenn die indizierte Kompressionsoption (PNG-8) verwendet wird.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, sollten Sie [SVG](#svg_scalable_vector_graphics) in Betracht ziehen, da es sich über verschiedene Auflösungen und Größen skaliert und somit perfekt für responsives Design ist. Obwohl SVG-Unterstützung gut ist, kann es sinnvoll sein, einen PNG-Fallback für ältere Browser anzubieten.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>SVG, Verlustfreies WebP oder PNG</td>
      <td>PNG</td>
    </tr>
  </thead>
</table>

### Screenshots

Sofern Sie keine Kompromisse bei der Qualität eingehen möchten, sollten Sie für Screenshots ein verlustfreies Format verwenden. Dies ist besonders wichtig, wenn Text in Ihrem Screenshot vorhanden ist, da Text bei verlustbehafteter Kompression leicht unscharf und unklar wird.

PNG ist wahrscheinlich die beste Wahl, aber verlustfreies WebP wird vermutlich besser komprimiert sein.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>
        Verlustfreies WebP oder PNG;<br />JPEG, wenn Kompressionsartefakte
        kein Problem darstellen
      </td>
      <td>PNG oder JPEG;<br />GIF für Screenshots mit geringer Farbanzahl</td>
    </tr>
  </thead>
</table>

### Diagramme, Zeichnungen und Grafiken

Für jedes Bild, das mit Vektorgrafiken dargestellt werden kann, ist SVG die beste Wahl. Andernfalls sollten Sie ein verlustfreies Format wie PNG verwenden. Wenn Sie sich für ein verlustbehaftetes Format entscheiden, wie z.B. JPEG oder verlustbehaftetes WebP, wägen Sie das Kompressionsniveau sorgfältig ab, um zu vermeiden, dass Text oder andere Formen unscharf oder unklar werden.

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

Während das Standard-HTML {{HTMLElement("img")}}-Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut dies das {{HTMLElement("picture")}}-Element. `<picture>` wird als Wrapper für eine Reihe von {{HTMLElement("source")}}-Elementen verwendet, wobei jedes eine Version des Bildes in einem anderen Format oder unter anderen [Medienbedingungen](/de/docs/Web/CSS/@media) angibt, sowie ein `<img>`-Element, das definiert, wo das Bild angezeigt werden soll und welches der Fallback zur Standard- oder "kompatibelsten" Version ist.

Wenn Sie beispielsweise ein Diagramm anzeigen, das am besten mit SVG dargestellt wird, aber einen Fallback zu einem PNG oder GIF des Diagramms anbieten möchten, würden Sie etwas wie folgt tun:

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

Sie können so viele `<source>`s angeben, wie Sie möchten, obwohl typischerweise 2 oder 3 ausreichen.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elemente
- Die CSS {{cssxref("background-image")}} Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor und das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interface

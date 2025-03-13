---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die von Webbrowsern allgemein unterstützt werden, und geben Einblicke, die Ihnen helfen, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

## Häufige Bilddateitypen

Die auf der Website am häufigsten verwendeten Bilddateiformate sind unten aufgeführt.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Abkürzung</th>
      <th scope="row">Dateiformat</th>
      <th scope="col">MIME-Typ</th>
      <th scope="col">Dateiendung(en)</th>
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
        AVIF und WebP bieten bessere Leistung, aber weniger breite Browser-Unterstützung.<br />
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
          Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und des gebührenfreien Bildformats.
          Es bietet viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass bei der Verwendung von AVIF Fallbacks zu Formaten mit besserer Browser-Unterstützung enthalten sein sollten (d.h. mithilfe des <code><a href="/de/docs/Web/HTML/Element/picture">&#x3C;picture></a></code>-Elements).<br />
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
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indizierte Standbilder und erwägen Sie WebP, AVIF oder APNG für Animationssequenzen.<br />
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
          Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit die beliebteste).
          Bevorzugen Sie PNG, wenn eine genauere Reproduktion des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl eine bessere Reproduktion als auch eine höhere Komprimierung gewünscht wird.<br />
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
          PNG wird gegenüber JPEG bevorzugt, wenn eine genauere Reproduktion von Quellbildern oder Transparenz benötigt wird. WebP/AVIF bieten noch bessere Komprimierung und Reproduktion, jedoch ist die Browser-Unterstützung beschränkter.<br />
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
        WebP bietet viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine geringfügig bessere Komprimierung, ist jedoch in Browsern nicht so gut unterstützt und unterstützt kein fortschreitendes Rendern.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF haben eine schlechtere Leistung im Vergleich zu neueren Formaten wie WebP und AVIF, genießen jedoch eine umfassendere "historische" Browser-Unterstützung. Die neueren Bildformate erfreuen sich zunehmender Beliebtheit, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil haben).

Die folgende Liste enthält Bildformate, die im Web erscheinen, aber für Webinhalte vermieden werden sollten (in der Regel, weil sie entweder keine breite Browser-Unterstützung haben oder weil es bessere Alternativen gibt).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Abkürzung</th>
      <th scope="row">Dateiformat</th>
      <th scope="col">MIME-Typ</th>
      <th scope="col">Dateiendung(en)</th>
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
> Die Abkürzung für jedes Bildformat verlinkt auf eine längere Beschreibung des Formats, seiner Fähigkeiten und detaillierte Informationen zur Browser-Kompatibilität (einschließlich der Versionen, die die Unterstützung eingeführt haben und bestimmte Spezialfunktionen, die möglicherweise später hinzugefügt wurden).

> [!NOTE]
> Safari 11.1 hat die Möglichkeit hinzugefügt, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Fehler](https://crbug.com/791658) und im [Firefox-Fehler](https://bugzil.la/895131).

## Details zu Bilddateitypen

Die folgenden Abschnitte bieten einen kurzen Überblick über die verschiedenen Bilddateitypen, die von Webbrowsern unterstützt werden.

In den unten stehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden. Beispielsweise weist eine RGB-Farbtiefe von 8 darauf hin, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. Die **Bit-Tiefe** hingegen ist die Gesamtanzahl der Bits, die zur Darstellung jedes Pixels im Speicher verwendet werden.

### APNG (Animated Portable Network Graphics)

APNG ist ein Dateiformat, das erstmals von Mozilla eingeführt wurde und den [PNG](#png_portable_network_graphics)-Standard erweitert, um Unterstützung für animierte Bilder hinzuzufügen. Konzeptionell dem animierten GIF-Format ähnlich, das seit Jahrzehnten verwendet wird, ist APNG leistungsfähiger, da es eine Vielzahl von [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit-[indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG ist ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder mit einem Soundtrack synchronisiert werden müssen, wie beispielsweise Fortschrittsanzeigen, Aktivitätsanzeiger ([Throbber](https://en.wikipedia.org/wiki/Throbber)) und andere animierte Sequenzen. Zum Beispiel ist APNG [eines der Formate, das bei der Erstellung animierter Sticker](https://developer.apple.com/imessage/) für Apple's iMessage-Anwendung und die Nachrichtenanwendung auf iOS unterstützt wird. Sie werden auch häufig für die animierten Teile der Benutzeroberflächen von Webbrowsern verwendet.

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
          >wiki.mozilla.org/APNG_Specification</a>
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
              <th scope="row">Graustufe</th>
              <td>1, 2, 4, 8 und 16</td>
              <td>
                Jedes Pixel besteht aus einem <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Anteil der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette darstellt, die innerhalb eines <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Chunks in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und eine Alpha-Abtastung, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und die Alpha-Abtastung, die angibt, wie undurchsichtig das Pixel ist.
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
        Kostenlos und offen unter der
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Namensnennung-Weitergabe unter gleichen Bedingungen Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder später.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

Das AV1 Image File Format (AVIF) ist ein leistungsstarkes, quelloffenes, gebührenfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF) Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern in Webinhalten zu werden. Es bietet hochmoderne Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzierungen und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videotransmission über das Internet entwickelt wurde. Das Format profitiert von den signifikanten Fortschritten der letzten Jahre im Bereich der Videokodierung und könnte potenziell von der assoziierten Unterstützung für Hardware-Rendering profitieren. Es hat jedoch auch Nachteile in einigen Fällen, da Video- und Bildkodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG bei optisch ähnlichen Kompressionsstufen (z.B. sind verlustbehaftete AVIF-Bilder etwa 50% kleiner als JPEG-Bilder).
- Im Allgemeinen hat AVIF eine bessere Kompression als WebP - mediane 50% vs. 30% Kompression für das gleiche JPG-Set (Quelle: [AVIF WebP Comparison](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Kompression.
- Animation/Multi-Image-Speicherung (ähnlich wie animierte GIFs, aber mit viel besserer Kompression)
- Alpha-Kanal-Unterstützung (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für das Speichern von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Weites Farbspektrum: Unterstützung für Bilder, die eine größere Farbpalette enthalten können.

AVIF unterstützt kein progressives Rendering, sodass Dateien vollständig heruntergeladen werden müssen, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf die Benutzererfahrung, da AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und daher viel schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann der Einfluss jedoch signifikant werden, und Sie sollten in Betracht ziehen, ein Format zu verwenden, das progressives Rendering unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe hat), sollten Sie in [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format einen Fallback bereitstellen, indem Sie das [Element `<picture>`](/de/docs/Web/HTML/Element/picture) (oder einen anderen Ansatz) verwenden.

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
            >AV1 Image File Format (AVIF)</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Chrome 85, Edge 121, Opera 71, Firefox 93 und Safari 16.1.
        <ul>
          <li>
            Firefox 93 unterstützt Standbilder mit Farbunterstützung sowohl für den vollen als auch den eingeschränkten Farbbereich sowie Bildtransformationen für Spiegelung und Drehung.
            Die Einstellung <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            kann verwendet werden, um die Konformitätsstrenge mit der Spezifikation anzupassen.
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
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2: Color config semantics.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung lautet:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12-Bit</li>
          <li>Alphakanal-Unterstützung</li>
          <li>ICC-Profil-Unterstützung</li>
          <li>
            NCLX-Unterstützung: sRGB, linear sRGB, linear Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3 usw.
          </li>
          <li>Kachel-Unterstützung</li>
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
        Gebührenfrei. Lizenzinformationen sind auf der <a href="https://aomedia.org/license/">Lizenzseite</a> verfügbar.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Datei)

Der **BMP** (**Bitmap-Bild**)-Dateityp ist vor allem auf Windows-Computern verbreitet und wird in Webanwendungen und -inhalten im Allgemeinen nur für besondere Fälle verwendet.

> [!WARNING]
> Sie sollten typischerweise vermeiden, BMP-Dateien für Website-Inhalte zu verwenden. Die häufigste Form der BMP-Datei stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu PNG- oder JPG-Bildtypen führt. Effizientere BMP-Formate existieren, werden jedoch nicht häufig verwendet und selten von Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl interner Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form der BMP-Datei ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Byte belegt, die seine roten, grünen und blauen Komponenten darstellen, und jede Reihe mit `0x00`-Bytes aufgefüllt wird, um ein Vielfaches von 4 Bytes Breite zu erreichen.

Obwohl andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht häufig verwendet und sind oft vollständig nicht implementiert. Diese Funktionen umfassen: Unterstützung für unterschiedliche Bit-Tiefen, indizierte Farben, Alpha-Kanäle und unterschiedliche Pixelanordnungen (standardmäßig wird BMP von der unteren linken Ecke nach rechts oben geschrieben, anstatt von der oberen linken Ecke nach rechts unten).

Theoretisch werden verschiedene Kompressionsalgorithmen unterstützt, und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format innerhalb der BMP-Datei gespeichert werden.

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
        Keine Spezifikation; Microsoft bietet jedoch allgemeine Dokumentation zum Format unter
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
              <th scope="row">Graustufe</th>
              <td>1</td>
              <td>
                Jedes Bit stellt ein einzelnes Pixel dar, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jede Komponente hat <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der 2, 4 oder 8 Bits umfasst und als Index in die Farbpalette dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jede Komponente hat <em>D</em> Bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Mehrere Kompressionsmethoden werden unterstützt, einschließlich verlustbehafteter und verlustfreier Algorithmen
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Gedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>;
        während Microsoft Patente gegen BMP hält, haben sie ein Versprechen veröffentlicht, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist jedoch nicht gleichbedeutend mit einer Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der Online-Dienstanbieter CompuServe das **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**)-Bilddateiformat ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes nutzen könnten. GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus, um 8-Bit-indizierte Farbgrafiken verlustfrei zu komprimieren. GIF war eines der ersten beiden Grafikformate, das von {{Glossary("HTML", "HTML")}} unterstützt wurde, neben [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben dient (je 8 Bits für Rot, Grün und Blau). Die Länge einer Farbpalette ist immer eine Zweierpotenz (d.h. jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird in der Regel [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, die jeweils ihre eigene Farbpalette haben, um echte Farbbilder zu erstellen, dies wird jedoch in der Praxis selten durchgeführt.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent bezeichnet, in diesem Fall sind die Pixel in dieser Farbe vollständig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem anfänglichen Vollbildrahmen eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Frame ändern.

GIF war jahrzehntelang äußerst populär, aufgrund seiner Einfachheit und Kompatibilität. Seine Unterstützung für Animationen führte zu einer Wiederbelebung seiner Popularität in der Ära der sozialen Medien, als animierte GIFs weithin für kurze "Videos", Memes und andere einfache Animationssequenzen verwendet wurden.

Ein weiteres beliebtes Merkmal von GIF ist die Unterstützung für [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Pixelzeilen in unordentlicher Reihenfolge gespeichert werden, sodass teilweise empfangene Dateien in niedrigerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzwerkverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung vollfarbiger Bilder in GIF zu unbefriedigendem Dithering führen kann. Typischerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und in Betracht ziehen, [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen zu verwenden.

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
              <th scope="row">Graustufe</th>
              <td><em>n/a</em></td>
              <td>GIF hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine echten Farb-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird als 8 Bits je für Rot, Grün und Blau definiert (insgesamt 24 Bits pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine echten Farb-Pixel.</td>
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
        Während das GIF-Format selbst offen ist, war der LZW-Kompressionsalgorithmus bis in die frühen 2000er Jahre durch Patente geschützt. Ab dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO (Microsoft Windows Icon)-Dateiformat wurde von Microsoft für Desktopsymbole in Windows-Systemen entwickelt. Frühe Versionen des Internet Explorers führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei namens `favicon.ico` im Stammverzeichnis einer Website bereitstellen konnte, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** zu spezifizieren - ein Symbol, das im Favoriten-Menü und an anderen Orten angezeigt wird, an denen eine symbolhafte Darstellung der Website nützlich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem auflistet. Nach dem Verzeichnis folgen die Daten für die Symbole. Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich Dateikopf) sein. Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG innerhalb von ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden. Ihre Verwendung für Favicons hat zudem zugunsten der Verwendung einer PNG-Datei und dem {{HTMLElement("link")}}-Element nachgelassen, wie in [Bereitstellung von Icons für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Element/link#providing_icons_for_different_usage_contexts) beschrieben.

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
            Symbole im BMP-Format
          </caption>
          <tbody>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
            <tr>
              <th scope="row">Graustufe</th>
              <td>1</td>
              <td>
                Jedes Bit stellt ein einzelnes Pixel dar, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jede Komponente hat <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der 2, 4 oder 8 Bits umfasst und als Index in die Farbpalette dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jede Komponente hat <em>D</em> Bits.
              </td>
            </tr>
          </tbody>
        </table>
        <table class="standard-table">
          <caption>
            Symbole im PNG-Format
          </caption>
          <tbody>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits pro Komponente (<em>D</em>)</th>
              <th scope="col">Beschreibung</th>
            </tr>
            <tr>
              <th scope="row">Graustufe</th>
              <td>1, 2, 4, 8 und 16</td>
              <td>
                Jedes Pixel besteht aus einem <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Anteil der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette darstellt, die innerhalb eines <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Chunks in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und eine Alpha-Abtastung, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und die Alpha-Abtastung, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        BMP-Format-Symbole verwenden fast immer verlustfreie Kompression, aber verlustbehaftete Methoden sind verfügbar. PNG-Symbole werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group Image)

Das {{Glossary("JPEG", "JPEG")}} (in der Regel "**Jay-Peg**" ausgesprochen) Bildformat ist derzeit das am weitesten verbreitete verlustbehaftete Kompressionsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Kompression auf Inhalte, die Schärfe erfordern, wie Diagramme oder Diagramme, kann jedoch unbefriedigende Ergebnisse liefern.

JPEG ist eigentlich ein Datenformat für komprimierte Fotos und nicht ein Dateityp. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat) Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder kennen.

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
              <th scope="row">Graustufe</th>
              <td><em>n/a</em></td>
              <td>Echte Graustufen können durch den einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, von denen jede 8 Bits hat.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td><em>n/a</em></td>
              <td>JPEG bietet keinen indizierten Farbmodus an.</td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alpha-Kanal.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alpha-Kanal.</td>
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

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Kompression, während es höhere Farbtiefen unterstützt als [GIF](#gif_graphics_interchange_format) und effizienter ist, sowie volle Alpha-Transparenz-Unterstützung bietet.

PNG ist weit verbreitet, da alle großen Browser die vollständige Unterstützung für die Funktionen bieten.

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
              <th scope="row">Graustufe</th>
              <td>1, 2, 4, 8 und 16</td>
              <td>
                Jedes Pixel besteht aus einem <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte
                dargestellt, die den Anteil der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette darstellt, die innerhalb eines
                <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>
                -Chunks in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die
                Intensität des Graustufenpixels und eine Alpha-Abtastung, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und die Alpha-Abtastung, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei, optional indizierte Farben wie GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungs</a>-, <a href="https://www.w3.org/policies/#trademarks">Marken</a>-, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a>- und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierungs</a>regeln gelten. Keine bekannten patentpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

SVG ist ein auf {{Glossary("XML", "XML")}} basierendes [Vektorgrafik](https://en.wikipedia.org/wiki/Vector_graphics)-Format, das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen spezifiziert, die Formen und Linien erstellen, Farben anwenden, Filter und so weiter. SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können. Aus diesem Grund ist SVG für Benutzeroberflächenelemente im modernen Webdesign beliebt.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der beim Interpretieren das gewünschte Bild zeichnet. Zum Beispiel definiert dieses Beispiel einen Zeichenbereich mit einer anfänglichen Größe von 100×100 Einheiten, der eine Linie enthält, die diagonal durch das Kästchen verläuft:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann in Webinhalten auf zwei Arten verwendet werden:

1. Sie können das {{SVGElement("svg")}}-Element direkt innerhalb des HTML schreiben, das [SVG-Elemente](/de/docs/Web/SVG/Element) enthält, um das Bild zu zeichnen.
2. Sie können ein SVG-Bild überall verwenden, wo Sie einen der anderen Bildtypen verwenden können, einschließlich mit den {{HTMLElement("img")}} und {{HTMLElement("picture")}} Elementen, der {{cssxref("background-image")}} CSS-Eigenschaft usw.

SVG ist eine ideale Wahl für Bilder, die mit einer Reihe von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, in der das Bild gerendert wird, unbekannt ist oder variieren kann, da SVG nahtlos auf die gewünschte Größe skaliert. Es ist im Allgemeinen nicht nützlich für strikt pixelbasierte oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder in ein SVG einzufügen.

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
        Farben in SVG werden mithilfe der
        <a href="/de/docs/Web/CSS/color_value">CSS-Farbsyntax</a> spezifiziert.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        SVG-Quelle kann während der Übertragung mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Kompression</a> Techniken komprimiert werden oder auf der Festplatte als <code>.svgz</code> Datei.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungs</a>-, <a href="https://www.w3.org/policies/#trademarks">Marken</a>-, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzungs</a>- und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierungs</a>regeln gelten. Keine bekannten patentpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafikdateiformat, das erstellt wurde, um gescannte Fotos zu speichern, obwohl es jede Art von Bild sein kann. Es ist ein etwas "schweres" Format, da TIFF-Dateien im Allgemeinen größer sind als Bilder in anderen Formaten. Das liegt an den Metadaten, die oft enthalten sind, sowie daran, dass die meisten TIFF-Bilder entweder unkomprimiert oder komprimierte Algorithmen verwenden, die nach der Kompression immer noch relativ große Dateien hinterlassen.

TIFF unterstützt eine Vielzahl von Kompressionsmethoden, aber die am häufigsten verwendeten sind die CCITT Group 4 (und für ältere Faxsysteme, Group 3) Kompressionssysteme, die für Faxsoftware verwendet werden, sowie LZW und verlustbehaftete JPEG-Kompression.

Jeder Wert in einer TIFF-Datei wird durch seinen **Tag** angegeben (was für eine Art von Information es ist, etwa die Breite des Bildes) und seinen **Typ** (was das Format ist, in dem die Daten gespeichert sind), gefolgt von der Länge des arrays von Werten, die diesem Tag zugewiesen werden sollen (alle Eigenschaften werden in Arrays gespeichert, auch für Einzelwerte). Dies erlaubt die Verwendung unterschiedlicher Datentypen für dieselben Eigenschaften. Beispielsweise wird die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` gespeichert und ist ein Array mit einem Eintrag. Durch die Spezifizierung des Typs 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Wird Typ 4 (`LONG`) angegeben, wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzige TIFF-Datei kann mehrere Bilder enthalten; dies kann genutzt werden, um Mehrseitige Dokumente darzustellen (wie etwa ein mehrseitiges gescanntes Dokument oder ein empfangener Fax). Software, die TIFF-Dateien liest, muss jedoch nur das erste Bild unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB. Dazu gehören CMYK, YCbCr und andere, was TIFF zu einer guten Wahl für die Speicherung von Bildern macht, die für Druck-, Film- oder Fernsehmedien vorgesehen sind.

Mit Ausnahme von Safari unterstützen Browser TIFF-Bilder in Webinhalten nicht nativ, es sei denn, spezielle Bibliotheken oder Browser-Add-Ons werden verwendet. Daher werden TIFF-Dateien nicht allgemein zum Anzeigen von Webinhalten verwendet, _aber_ es ist üblich, herunterladbare TIFF-Dateien anzubieten, wenn Fotos und andere Kunstwerke verteilt werden, die für präzises Bearbeiten oder Drucken vorgesehen sind.

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
                Ein Bilevel-TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel. Das <code>PhotometricInterpretation</code>-Feld gibt an, welche von 0 und 1 schwarz und welche weiß ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufe</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8</td>
              <td>
                Alle echten RGB-Farbbilder werden mit 8-Bit-Werten für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einen <code>ColorMap</code>-Datensatz, der die im Bild verwendeten Farben definiert. Die Farbkarte listet alle Rot-Werte auf, dann alle Grün-Werte, dann alle Blau-Werte (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Abtastungen pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und der Alphatyp angegeben wird (1 für eine assoziierte, vorausberechnete Alphakomponente und 2 für unassoziiertes Alpha - eine separate Matte); jedoch werden Alphakanäle in TIFF-Dateien selten verwendet und können von der Software des Benutzers nicht unterstützt werden.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Abtastungen pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und der Alphatyp angegeben wird (1 für eine assoziierte, vorausberechnete Alphakomponente und 2 für unassoziiertes Alpha - eine separate Matte); jedoch werden Alphakanäle in TIFF-Dateien selten verwendet und können von der Software des Benutzers nicht unterstützt werden.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustfreie PackBits- und LZW-Kompression wird unterstützt, ebenso wie verlustbehaftete JPEG-Kompression.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von jenen, die mit Bibliotheken verbunden sind, die Sie vielleicht verwenden); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Kompression durch Vorwärtskodierung auf Basis des VP8-Videocodecs und verlustfreie Kompression, die Substitutionen für sich wiederholende Daten verwendet. Verlustbehaftete WebP-Bilder sind durchschnittlich 25-35 % kleiner als JPEG-Bilder bei visuell ähnlichen Kompressionsstufen. Verlustfreie WebP-Bilder sind in der Regel 26 % kleiner als die gleichen Bilder im PNG-Format.

WebP unterstützt auch Animationen: Bei einem verlustbehafteten WebP-Bild wird das Bildmaterial durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreies WebP enthält den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz darstellt. Schleifen wird unterstützt.

WebP hat nun breite Unterstützung in den neuesten Versionen der wichtigsten Webbrowser, obwohl es keine tiefgehende historische Unterstützung gibt. Bieten Sie einen Fallback entweder im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format an, beispielsweise durch das [Element `<picture>`](/de/docs/Web/HTML/Element/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF Container Specification</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Lossless Bitstream Specification</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera, und Safari <p>WebP kann auch verwendet werden, um Bilder aus einem Canvas <em>zu exportieren</em>. Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Unterstützungsversionsinformationen.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit-Y'CbCr 4:2:0 (YUV420)-Format. Verlustfreies WebP verwendet 8-Bit-ARGB-Farben, wobei jede Komponente 8 Bits umfasst, für insgesamt 32 Bits pro Pixel.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei (Huffman, LZ77, oder Farbcache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; Quellcode ist offen verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Auf Safari für macOS hängt die WebP-Unterstützung sowohl von der Safari- als auch von der macOS-Version ab. Sie benötigen Safari 14 oder später sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, werden jedoch nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsprobleme birgt. Moderne Browser haben XBM-Dateien seit Jahren nicht mehr unterstützt, aber wenn Sie ältere Inhalte verarbeiten, können Sie noch einige davon finden.

XBM verwendet einen kleinen C-Code, um den Inhalt des Bildes als Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe des Bitmaps (und optional den Hotspot, wenn das Bild als Cursor entwickelt wurde) angeben, gefolgt von einem Array von `unsigned char`, wobei jeder Wert 8 1-Bit-Monochrompixel enthält.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein. Zum Beispiel repräsentiert der folgende Code ein XBM-Bild, das 8×8 Pixel groß ist, mit diesen Pixeln in einem schwarz-weißen Schachbrettmuster:

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
              <th scope="row">Graustufe</th>
              <td>1</td>
              <td>Jedes Byte enthält acht 1-Bit-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Graustufe mit Alpha</th>
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

Das Auswählen des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als bei Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jedes Format in der Regel eine spezifische Reihe von Anwendungsfällen hat.

### Fotografien

Fotografien eignen sich in der Regel gut für verlustbehaftete Kompression (abhängig von der Konfiguration des Encoders). Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Wahlmöglichkeiten für Fotografien, wobei JPEG kompatibler ist, WebP jedoch möglicherweise eine bessere Kompression bietet. Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie in Betracht ziehen, beide [unter Verwendung eines Fallbacks](#bereitstellen_von_bild-fallbacks) bereitzustellen, wobei WebP die erste Wahl und JPEG die zweite ist. Andernfalls ist JPEG die sichere Wahl für die Kompatibilität.

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

Für kleinere Bilder wie Symbole sollten Sie ein verlustfreies Format verwenden, um Detailverluste in einem größenbeschränkten Bild zu vermeiden. Während verlustfreies WebP dafür ideal ist, ist die Unterstützung dafür noch nicht weit verbreitet, daher ist PNG eine bessere Wahl, es sei denn, Sie bieten ein [Fallback](#bereitstellen_von_bild-fallbacks) an. Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG oft sogar noch kleiner mit seiner indizierten Kompressionsoption (PNG-8) komprimiert.

Wenn das Symbol mithilfe von Vektorgrafiken dargestellt werden kann, ziehen Sie [SVG](#svg_scalable_vector_graphics) in Betracht, da es über verschiedene Auflösungen und Größen hinweg skaliert und somit perfekt für ansprechendes Design ist. Obwohl die SVG-Unterstützung gut ist, lohnt es sich möglicherweise, einen PNG-Fallback für ältere Browser anzubieten.

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

Sofern Sie nicht auf Qualität verzichten wollen, sollten Sie für Screenshots ein verlustfreies Format verwenden. Dies ist besonders wichtig, wenn Text in Ihrem Screenshot enthalten ist, da Text bei verlustbehafteter Kompression leicht verschwommen und unklar wird.

PNG ist wahrscheinlich die beste Wahl, aber verlustfreies WebP wird wahrscheinlich besser komprimiert.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>
        Verlustfreies WebP oder PNG;<br />JPEG, falls Kompressionsartefakte kein
        Problem darstellen
      </td>
      <td>PNG oder JPEG;<br />GIF für Screenshots mit geringer Farbanzahl</td>
    </tr>
  </thead>
</table>

### Diagramme, Zeichnungen und Grafiken

Für jedes Bild, das mit Vektorgrafiken dargestellt werden kann, ist SVG die beste Wahl. Andernfalls sollten Sie ein verlustfreies Format wie PNG verwenden. Wenn Sie sich für ein verlustbehaftetes Format wie JPEG oder verlustbehaftetes WebP entscheiden, wägen Sie das Kompressionsniveau sorgfältig ab, um zu vermeiden, dass Text oder andere Formen verschwommen oder unklar werden.

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

## Bereitstellen von Bild-Fallbacks

Während das Standard-HTML-{{HTMLElement("img")}}-Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut dies das {{HTMLElement("picture")}}-Element. `<picture>` wird als Wrapper für eine Anzahl von {{HTMLElement("source")}}-Elementen verwendet, die jeweils eine Version des Bildes in einem anderen Format oder unter verschiedenen [Medienbedingungen](/de/docs/Web/CSS/@media) angeben, sowie ein `<img>`-Element, das definiert, wo das Bild angezeigt werden soll und den Fallback zur Standard- oder "am meisten kompatiblen" Version.

Wenn Sie beispielsweise ein Diagramm anzeigen, das am besten mit SVG dargestellt wird, aber einen Fallback zu einem PNG oder GIF des Diagramms anbieten möchten, würden Sie dies wie folgt tun:

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
- [Webmedien-Technologien](/de/docs/Web/Media)
- [Leitfaden zu Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elemente
- Die CSS {{cssxref("background-image")}}-Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor und die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle

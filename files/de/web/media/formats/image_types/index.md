---
title: Bild-Dateityp- und Format-Leitfaden
slug: Web/Media/Formats/Image_types
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

In diesem Leitfaden behandeln wir die Bilddateitypen, die allgemein von Webbrowsern unterstützt werden, und geben Einblicke, die Ihnen helfen, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

## Gängige Bilddateitypen

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
        Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant).
        AVIF und WebP haben bessere Leistung, aber weniger breite Browser-Unterstützung.<br />
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
          Es bietet viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass beim Verwenden von AVIF Fallbacks auf Formate mit besserer Browser-Unterstützung enthalten sein sollten (d.h. Verwendung des <code><a href="/de/docs/Web/HTML/Element/picture">&#x3C;picture></a></code>-Elements).<br />
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
      <th scope="row">Joint Photographic Expert Group image</th>
      <td><code>image/jpeg</code></td>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jfif</code>,
        <code>.pjpeg</code>, <code>.pjp</code>
      </td>
      <td>
        <p>
          Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit am beliebtesten).
          Bevorzugen Sie PNG, wenn eine genauere Reproduktion des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl bessere Reproduktion als auch höhere Kompression erforderlich sind.<br />
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
          PNG wird gegenüber JPEG bevorzugt, da es eine genauere Reproduktion von Quellbildern oder Transparenz bietet. WebP/AVIF bieten noch bessere Kompression und Reproduktion, aber der Browser-Support ist eingeschränkter.<br />
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
        Vektorbildformat; ideal für Benutzeroberflächenelemente, Symbole, Diagramme usw., die in verschiedenen Größen genau gezeichnet werden müssen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_image">WebP</a></th>
      <th scope="row">Web Picture format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Hervorragende Wahl für Bilder und animierte Bilder.
        WebP bietet viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine etwas bessere Kompression, ist jedoch nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF haben eine schlechtere Leistung im Vergleich zu neueren Formaten wie WebP und AVIF, genießen jedoch eine breitere "historische" Browser-Unterstützung. Die neueren Bildformate gewinnen an Popularität, da Browser ohne Support zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web erscheinen, jedoch für Webinhalte vermieden werden sollten (in der Regel liegt das daran, dass sie entweder keine breite Browserunterstützung haben oder es bessere Alternativen gibt).

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
      <th scope="row">Bitmap file</th>
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
> Die Abkürzung für jedes Bildformat verlinkt auf eine ausführlichere Beschreibung des Formats, seiner Fähigkeiten und detaillierte Informationen zur Browser-Kompatibilität (einschließlich der Versionen, die den Support eingeführt haben und spezifischer Sonderfunktionen, die möglicherweise später eingeführt wurden).

> [!NOTE]
> Safari 11.1 fügte die Fähigkeit hinzu, ein Video-Format als Ersatz für ein animiertes GIF zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Bug](https://crbug.com/791658) und im [Firefox-Bug](https://bugzil.la/895131).

## Bilddateityp-Details

Die folgenden Abschnitte bieten einen kurzen Überblick über jeden der Bilddateitypen, die von Webbrowsern unterstützt werden.

In den folgenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden.
Zum Beispiel gibt eine 8-Bit-Farbtiefe von RGB an, dass jeder der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird.
**Bittiefe** hingegen ist die Gesamtzahl der Bits, die zur Darstellung jedes Pixels im Speicher verwendet werden.

### APNG (Animated Portable Network Graphics)

APNG ist ein Dateiformat, das erstmals von Mozilla eingeführt wurde und den [PNG](#png_portable_network_graphics)-Standard erweitert, um Unterstützung für animierte Bilder hinzuzufügen.
Konzeptionell ähnlich dem animierten GIF-Format, das seit Jahrzehnten verwendet wird, ist APNG leistungsfähiger, da es eine Vielzahl von [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit [indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG ist ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einer Tonspur synchronisiert werden müssen, wie Fortschrittsanzeigen, Aktivitäts-["Throbber"](https://en.wikipedia.org/wiki/Throbber) und andere animierte Sequenzen.
Zum Beispiel ist APNG [eines der unterstützten Formate beim Erstellen von animierten Stickern](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichtenanwendung auf iOS).
Sie sind auch häufig für die animierten Teile der Benutzeroberflächen von Webbrowsern verwendet.

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
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte repräsentiert, die das Niveau der roten, grünen und blauen Farbkomponenten anzeigen.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Block in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte repräsentiert: die Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und die Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
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
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike-Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder höher.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

AV1 Image File Format (AVIF) ist ein leistungsstarkes, quelloffenes, gebührenfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF) Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" zum Teilen von Bildern in Webinhalten zu werden.
> Es bietet moderne Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzen und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde.
Das Format profitiert von den erheblichen Fortschritten in der Videokodierung in den letzten Jahren und kann möglicherweise von der damit verbundenen Hardware-Rendering-Unterstützung profitieren.
Es hat jedoch auch Nachteile in einigen Fällen, da Video- und Bildkodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG bei optisch ähnlichen Kompressionsniveaus (z.B. sind verlustbehaftete AVIF-Bilder etwa 50 % kleiner als JPEG-Bilder).
- Generell hat AVIF eine bessere Kompression als WebP — im Median 50 % vs. 30 % Kompression für dasselbe JPG-Set (Quelle: [AVIF WebP Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Kompression.
- Animation/mehrfaches Bildspeicher (ähnlich wie animierte GIFs, aber mit viel besserer Kompression)
- Alpha-Kanalsupport (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für das Speichern von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Großer Farbumfang: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt kein progressives Rendering, daher müssen Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können.
Dies hat oft nur geringen Einfluss auf die tatsächliche Benutzererfahrung, da AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und somit schneller heruntergeladen und angezeigt werden können.
Bei größeren Dateigrößen kann der Einfluss signifikant werden, und Sie sollten die Verwendung eines Formats in Betracht ziehen, das progressives Rendering unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt.
Da die Unterstützung noch nicht umfassend ist (und keine große historische Tiefe hat), sollten Sie eine Rückfallebene in [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format anbieten, indem Sie [das `<picture>`-Element](/de/docs/Web/HTML/Element/picture) (oder einen anderen Ansatz) verwenden.

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
        Chrome 85, Edge 121, Opera 71, Firefox 93, und Safari 16.1.
        <ul>
          <li>
            Firefox 93 unterstützt Standbilder, mit Farbraum-Unterstützung für sowohl vollständige als auch begrenzte Farbbereiche, Bildtransformationen für Spiegelungen und Drehungen.
            Die Präferenz <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
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
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1-Bitstream und Entschlüsselungsprozess-Spezifikation</a>, Abschnitt 6.4.2 : Farbkonfigurations-Semantik.
        </p>
        <p>Eine nicht vollständige Zusammenfassung ist:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12-Bit</li>
          <li>Alpha-Unterstützung</li>
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
        Lizenzgebührenfrei. Lizenzinformationen sind auf der <a href="https://aomedia.org/license/">Lizenzseite</a> verfügbar.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap file)

Der **BMP** (**Bitmap image**)-Dateityp ist am weitesten verbreitet auf Windows-Computern und wird in der Regel nur für Spezialfälle in Web-Apps und Inhalten verwendet.

> [!WARNING]
> In der Regel sollten Sie vermeiden, BMP-Dateien für Website-Inhalte zu verwenden.
> Die am häufigsten verwendete Form von BMP-Dateien stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu PNG- oder JPG-Bildtypen führt.
> Effizientere BMP-Formate existieren, werden jedoch nicht häufig verwendet und selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl interner Datenrepräsentationen.
Die einfachste und am häufigsten verwendete Form von BMP-Dateien ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Bytes belegt, die seine roten, grünen und blauen Komponenten darstellen, und jede Zeile mit `0x00` Bytes auf ein Vielfaches von 4 Bytes Breite aufgefüllt wird.

Obwohl andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie selten verwendet und sind oft völlig unimplementiert.
Diese Funktionen umfassen: Unterstützung für verschiedene Bittiefen, indizierte Farben, Alphakanäle und unterschiedliche Pixelreihenfolgen (standardmäßig wird BMP von der unteren linken Ecke nach rechts und oben geschrieben, anstatt von der oberen linken Ecke nach rechts und unten).

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
        Keine Spezifikation; jedoch bietet Microsoft allgemeine Dokumentation des Formats unter
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
                Jedes Bit repräsentiert ein einzelnes Pixel, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der eine 2-, 4- oder 8-Bit Zahl ist und als Index in die Farbpalette dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein separates Graustufen-Format.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und alpha Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Mehrere Kompressionsmethoden werden unterstützt, einschließlich verlustbehafteter oder verlustfreier Algorithmen
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Unterliegt dem <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>;
        Während Microsoft Patente gegen BMP hält, haben sie ein Versprechen veröffentlicht, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist jedoch nicht das gleiche wie eine Lizenz. BMP ist im Windows Metafile-Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der CompuServe Online-Dienstanbieter das Bilddateiformat **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes verwenden konnten.
GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus, um 8-Bit-indizierte Farbgrafiken verlustfrei zu komprimieren.
GIF war eines der ersten beiden Grafikformate, die in [HTML](/de/docs/Glossary/HTML) unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben dient (8 Bits für jeweils Rot, Grün und Blau). Die Länge einer Farbtafel ist immer eine Potenz von 2 (das heißt, jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge).
Um mehr als 255 oder 256 Farben zu simulieren, wird normalerweise [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet.
Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, die jeweils ihre eigene Farbpalette haben, um Truecolor-Bilder zu erstellen, aber in der Praxis wird dies selten getan.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent bezeichnet, in diesem Fall sind Pixel, die diese Farbe haben, völlig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem ersten Vollbilderrahmen eine Reihe von Bildern bereitgestellt wird, die die sich ändernden Teile des Bildes mit jedem Rahmen widerspiegeln.

GIF war über Jahrzehnte hinweg äußerst beliebt aufgrund seiner Einfachheit und Kompatibilität.
Seine Animationsunterstützung führte in der Ära der sozialen Medien zu einem Wiederaufleben seiner Beliebtheit, als animierte GIFs weithin für kurze "Videos", Memes und andere einfache Animationssequenzen verwendet wurden.

Ein weiteres beliebtes Merkmal von GIF ist die Unterstützung für [Zeilensprung](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Pixelzeilen in falscher Reihenfolge gespeichert werden, damit teilweise empfangene Dateien in geringerer Qualität angezeigt werden können.
Dies ist besonders nützlich bei langsamen Netzverbindungen.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung von Vollfarbbildern in GIF zu unzufriedenstellendem Dithering führen kann.
Typischerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden, und sollte in Betracht ziehen, [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen zu verwenden.

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
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">GIF87a specification</a><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt">GIF89a specification</a>
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
              <td>GIF enthält kein dediziertes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine Truecolor-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird als 8 Bits für Rot, Grün und Blau definiert (24 Gesamtsbits pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF enthält kein dediziertes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine Truecolor-Pixel.</td>
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
        Während das GIF-Format selbst offen ist, war der LZW-Kompressionsalgorithmus bis in die frühen 2000er Jahre durch Patente geschützt.
        Ab dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO-Dateiformat (Microsoft Windows-Symbol) wurde von Microsoft für Desktop-Symbole von Windows-Systemen entwickelt.
Frühere Versionen des Internet Explorers führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei mit dem Namen `favicon.ico` im Stammverzeichnis der Website bereitstellt, um ein **[Favicon](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site)** zu bestimmen — ein Symbol, das im Favoritenmenü und an anderen Stellen angezeigt wird, an denen ein ikonisches Abbild der Website nützlich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem auflistet.
Nach dem Verzeichnis folgen die Daten der Symbole.
Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich des Dateikopfs) sein.
Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG in ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden.
> Zusätzlich hat ihre Verwendung für Favicons zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements nachgelassen, wie in [Bereitstellen von Icons für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Element/link#providing_icons_for_different_usage_contexts) beschrieben.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td>
        <code>image/vnd.microsoft.icon</code> (offiziell),
        <code>image/x-icon</code> (verwendet von Microsoft)
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
                Jedes Bit repräsentiert ein einzelnes Pixel, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der eine 2-, 4-, oder 8-Bit Zahl ist und als Index in die Farbtafel dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein separates Graustufen-Format.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und alpha Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
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
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte repräsentiert, die das Niveau der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Block in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte repräsentiert: die Intensität des Graustufen-Pixels und eine Alpha-Probe, die die Undurchsichtigkeit des Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und die Alpha-Probe, die die Undurchsichtigkeit des Pixels angibt.
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

### JPEG (Joint Photographic Experts Group image)

Das [JPEG](/de/docs/Glossary/JPEG) (typischerweise ausgesprochen "**jay-peg**") Bildformat ist derzeit das am weitesten verbreitete verlustbehaftete Komprimierungsformat für Standbilder.
Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Kompression auf Inhalte, die Schärfe erfordern, wie Diagramme oder Charts, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist tatsächlich ein Datenformat für komprimierte Fotos, anstatt eines Dateityps.
Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat)-Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder betrachten.

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
              <td>Echtes Graustufen kann mit dem einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, die jeweils 8 Bits lang sind.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td><em>n/a</em></td>
              <td>JPEG bietet keinen indizierten Farbmodus.</td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alphakanal.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
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
      <td>Ab Oktober 27, 2006, sind alle US-amerikanischen Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das [PNG](/de/docs/Glossary/PNG) (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Kompression, während es höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) unterstützt und effizienter ist, sowie volle Alphatransparenz-Unterstützung bietet.

PNG wird weit unterstützt, wobei alle großen Browser vollständige Unterstützung für seine Funktionen bieten.

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
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte
                repräsentiert, die das Niveau der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem
                <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>
                Block in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte repräsentiert: die
                Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und die Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
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
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungsausschluss</a>, <a href="https://www.w3.org/policies/#trademarks">Markenzeichen</a>, <a href="https://www.w3.org/copyright/document-license/">Dokument-Verwendungsrichtlinien</a> und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierungsregeln</a> gelten. Es sind keine lizenzpflichtigen Patente bekannt.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

SVG ist ein [XML](/de/docs/Glossary/XML)-basiertes [Vektorgrafikformat](https://en.wikipedia.org/wiki/Vector_graphics), das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen angibt, die Formen, Linien, Farben, Filter usw. erstellen.
SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können.
Daher ist SVG beliebt für Benutzeroberflächenelemente in modernem Webdesign.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der, wenn er interpretiert wird, das gewünschte Bild zeichnet.
Zum Beispiel definiert dieses Beispiel einen Zeichnungsbereich mit einer anfänglichen Größe von 100 x 100 Einheiten, der eine Linie enthält, die diagonal durch das Feld verläuft:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann in Webinhalten auf zwei Arten verwendet werden:

1. Sie können das {{SVGElement("svg")}}-Element direkt innerhalb des HTMLs schreiben, das [SVG-Elemente](/de/docs/Web/SVG/Element) enthält, um das Bild zu zeichnen.
2. Sie können ein SVG-Bild überall anzeigen, wo Sie eines der anderen Bildtypen verwenden können, einschließlich mit den {{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elementen, der {{cssxref("background-image")}} CSS-Eigenschaft und so weiter.

SVG ist eine ideale Wahl für Bilder, die mit einer Reihe von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, bei der das Bild gerendert werden soll, unbekannt ist oder variieren kann, da SVG glatt auf die gewünschte Größe skaliert.
Es ist im Allgemeinen nicht nützlich für strikt bitmap- oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb einer SVG zu enthalten.

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
        Farben in SVG werden unter Verwendung der
        <a href="/de/docs/Web/CSS/color_value">CSS-Farbsyntax</a> spezifiziert.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        SVG-Quellen können während der Übertragung unter Verwendung von <a href="/de/docs/Web/HTTP/Compression">HTTP-Kompressions</a>-Techniken oder auf der Festplatte als .<code>svgz</code>-Datei komprimiert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungsausschluss</a>, <a href="https://www.w3.org/policies/#trademarks">Markenzeichen</a>, <a href="https://www.w3.org/copyright/document-license/">Dokument-Verwendungspolitik</a> und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierungsregeln</a> gelten. Es sind keine lizenzpflichtigen Patente bekannt.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[Tiff](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafik-Dateiformat, das entwickelt wurde, um gescannte Fotos zu speichern, obwohl es jede Art von Bild sein kann.
Es ist ein etwas "schweres" Format, da TIFF-Dateien tendenziell größer sind als Bilder in anderen Formaten.
Dies liegt an den oft enthaltenen Metadaten und der Tatsache, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Kompressionsalgorithmen verwenden, die immer noch relativ große Dateien nach der Kompression übrig lassen.

TIFF unterstützt eine Vielzahl von Kompressionsmethoden, aber die am häufigsten verwendeten sind die CCITT Group 4 (und für ältere Faxsysteme Group 3) Kompressionssysteme, die von Fax-Software verwendet werden, sowie LZW und verlustbehaftete JPEG-Kompression.

Jeder Wert in einer TIFF-Datei wird mit seinem **Tag** (das angibt, welche Art von Information es ist, wie die Breite des Bildes) und seinem **Typ** (das angibt, in welchem Format die Daten gespeichert sind), gefolgt von der Länge des Arrays von Werten, die diesem Tag zugewiesen werden (alle Eigenschaften werden in Arrays gespeichert, auch für Einzelwerte), angegeben.
Dies ermöglicht es, verschiedene Datentypen für dieselben Eigenschaften zu verwenden.
Zum Beispiel wird die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` gespeichert und ist ein eintragiges Array.
Durch die Angabe von Typ 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                  | Wert                   |
| ----------------------- | ------------------ | ---------------------- | ---------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel)       |

Durch die Angabe von Typ 4 (`LONG`) wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ              | Größe                  | Wert                         |
| ----------------------- | ---------------- | ---------------------- | ----------------------------- |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel)         |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um mehrseitige Dokumente zu repräsentieren, z. B. (wie ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax).
Software, die TIFF-Dateien liest, ist jedoch nur dazu verpflichtet, das erste Bild zu unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB.
Dazu gehören CMYK, YCbCr und andere, die TIFF zu einer guten Wahl für die Speicherung von Bildern machen, die für Druck-, Film- oder Fernsehmedien vorgesehen sind.

Abgesehen von Safari unterstützen Browser nativ keine TIFF-Bilder in Webinhalten, außer durch spezielle Bibliotheken oder Browser-Add-Ons.
Daher werden TIFF-Dateien nicht häufig für die Anzeige von Webinhalten verwendet, _aber_ es ist üblich, herunterladbare TIFF-Dateien bereitzustellen, wenn Fotos und andere Kunstwerke verteilt werden, die für präzise Bearbeitung oder Druck vorgesehen sind.

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
                Eine zweistufige TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel.
                Das <code>PhotometricInterpretation</code>-Feld spezifiziert, welches von 0 und 1 schwarz bzw. weiß ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8</td>
              <td>
                Alle Truecolor-RGB-Bilder werden mit 8-Bits für jeweils Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einem <code>ColorMap</code>-Datensatz, der die im Bild verwendeten Farben definiert.
                Die Farbkarte listet alle Rot-Werte, dann alle Grün-Werte, dann alle Blau-Werte auf (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alphainformationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und der Alphatyp (1 für eine assoziierte, vor-multiplizierte Alphakomponente, und 2 für nicht assoziiertes Alpha - eine separate Matte) angegeben wird; jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und können von der Benutzer-Software nicht unterstützt werden.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8</td>
              <td>
                Alphainformationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und der Alphatyp (1 für eine assoziierte, vor-multiplizierte Alphakomponente, und 2 für nicht assoziiertes Alpha - eine separate Matte) angegeben wird; jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und können von der Benutzer-Software nicht unterstützt werden.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustfreie PackBits und LZW-Kompression werden unterstützt, ebenso wie verlustbehaftete JPEG-Kompression.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von denen, die mit den Bibliotheken, die Sie möglicherweise verwenden, verbunden sind); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Kompression durch prädiktive Kodierung basierend auf dem VP8-Videocodec und verlustfreie Kompression, die Ersetzungen für sich wiederholende Daten verwendet.
Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35 % kleiner als JPEG-Bilder mit visuell ähnlichen Kompressionsstufen.
Verlustfreie WebP-Bilder sind typischerweise 26 % kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animation: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream repräsentiert, der mehrere Bilderrahmen enthalten kann.
Verlustfreies WebP enthält den `ANIM`-Block, der die Animation beschreibt, und den `ANMF`-Block, der einen Rahmen einer Animationssequenz darstellt.
Schleifen werden unterstützt.

WebP hat jetzt breite Unterstützung in den neuesten Versionen der wichtigsten Webbrowser, obwohl es keine tiefe historische Unterstützung gibt.
Stellen Sie einen Rückfall in entweder [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format sicher, z. B. mit [dem `<picture>`-Element](/de/docs/Web/HTML/Element/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF-Container-Spezifikation</a><br />{{RFC(6386, "VP8-Datenformat und Dekodierungsleitfaden")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP verlustfreie Bitstream-Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch zum <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden.
        Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Unterstützungsinformationen.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit-Y'CbCr-4:2:0-(YUV420)-Format.
        Verlustfreies WebP verwendet 8-Bit-ARGB-Farbe, wobei jede Komponente 8 Bits einnimmt, insgesamt also 32 Bits pro Pixel.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei (Huffman, LZ77 oder Farbcache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; Quellcode ist offen verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Auf Safari für macOS hängt die Unterstützung von WebP von sowohl der Safari- als auch der macOS-Version ab. Sie benötigen Safari 14 oder später sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap file)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, werden jedoch nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsbedenken birgt.
Moderne Browser haben XBM-Dateien seit vielen Jahren nicht mehr unterstützt, aber wenn Sie mit älteren Inhalten umgehen, können Sie möglicherweise noch einige finden.

XBM verwendet ein C-Code-Snippet, um den Inhalt des Bildes als ein Array von Bytes darzustellen.
Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe des Bitmaps angeben (und optional die Hotspot, falls das Bild als Cursor konzipiert ist), gefolgt von einem Array von `unsigned char`, bei dem jeder Wert 8 1-Bit-Monochrom-Pixel enthält.

Das Bild muss ein Vielfaches von 8 Pixel breit sein.
Zum Beispiel repräsentiert der folgende Code ein XBM-Bild, das 8 Pixel breit und 8 Pixel hoch ist, mit diesen Pixeln in einem schwarz-weißen Schachbrettmuster:

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
              <th scope="row">True Color</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td><em>n/a</em></td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
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

Die Auswahl des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als Videoformate, da es weniger Optionen mit breiter Unterstützung gibt und jede dazu neigt, ein bestimmtes Set von Anwendungsfällen zu haben.

### Fotografien

Fotografien kommen typischerweise mit verlustbehafteter Kompression gut zurecht (abhängig von der Konfiguration des Encoders).
Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Wahlen für Fotografien, wobei JPEG kompatibler ist, aber WebP möglicherweise eine bessere Kompression bietet.
Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie in Betracht ziehen, beides [mit einem Fallback](#bereitstellung_von_bildfallbacks) anzubieten, wobei WebP die erste Wahl und JPEG die zweite ist.
Andernfalls ist JPEG die sichere Wahl für Kompatibilität.

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

Für kleinere Bilder wie Symbole verwenden Sie ein verlustfreies Format, um den Verlust von Details in einem größenbeschränkten Bild zu vermeiden.
Während verlustfreies WebP ideal für diesen Zweck ist, ist die Unterstützung noch nicht weit verbreitet, daher ist PNG eine bessere Wahl, es sei denn, Sie bieten einen [Fallback](#bereitstellung_von_bildfallbacks) an.
Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG oft noch kleiner mit seiner indizierten Kompressionsoption (PNG-8) komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, ziehen Sie [SVG](#svg_scalable_vector_graphics) in Betracht, da es sich über verschiedene Auflösungen und Größen skaliert, was es perfekt für responsives Design macht.
Obwohl die SVG-Unterstützung gut ist, kann es sich lohnen, einen PNG-Fallback für ältere Browser anzubieten.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr

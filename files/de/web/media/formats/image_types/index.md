---
title: Leitfaden für Bilddateitypen und -formate
slug: Web/Media/Formats/Image_types
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

In diesem Leitfaden behandeln wir die Bilddateitypen, die in der Regel von Webbrowsern unterstützt werden, und bieten Einblicke, die Ihnen bei der Auswahl der am besten geeigneten Formate für die Darstellung der Bilder auf Ihrer Website helfen.

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
        AVIF und WebP haben eine bessere Leistung, aber weniger breite Browserunterstützung.<br />
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
          Gute Wahl für Bilder und animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats.
          Es bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass Sie bei der Verwendung von AVIF Fallbacks zu Formaten mit besserer Browserunterstützung einschließen sollten (d.h. mit dem <code><a href="/de/docs/Web/HTML/Element/picture">&#x3C;picture></a></code>-Element).<br />
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
        Bevorzugen Sie PNG für verlustfreie und indizierte Standbilder und in Erwägung ziehen WebP, AVIF oder APNG für Animationssequenzen.<br />
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
          PNG wird gegenüber JPEG bevorzugt für eine präzisere Reproduktion von Quellbildern oder bei Bedarf für Transparenz. WebP/AVIF bieten noch bessere Kompression und Reproduktion, aber die Browserunterstützung ist eingeschränkter.<br />
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
        Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder.
        WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine etwas bessere Kompression, ist aber nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF haben eine schlechtere Leistung im Vergleich zu neueren Formaten wie WebP und AVIF, genießen jedoch eine breitere "historische" Browserunterstützung. Die neueren Bildformate gewinnen zunehmend an Popularität, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web erscheinen, aber für Webinhalte vermieden werden sollten (in der Regel, weil sie entweder keine breite Browserunterstützung haben oder weil es bessere Alternativen gibt).

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
> Die Abkürzung für jedes Bildformat verlinkt auf eine längere Beschreibung des Formats, seiner Fähigkeiten und detaillierten Informationen zur Browser-Kompatibilität (einschließlich der Informationen darüber, welche Versionen die Unterstützung eingeführt haben und welche speziellen Funktionen später eingeführt wurden).

> [!NOTE]
> Safari 11.1 fügte die Fähigkeit hinzu, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Siehe den [Chromium-Bug](https://crbug.com/791658) und [Firefox-Bug](https://bugzil.la/895131) für weitere Informationen.

## Bilddateitypendetails

Die folgenden Abschnitte bieten einen kurzen Überblick über jeden der von Webbrowsern unterstützten Bilddateitypen.

In den unten stehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden.
Ein RGB-Farbtiefe von 8 bedeutet beispielsweise, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird.
**Bit-Tiefe** hingegen ist die Gesamtanzahl der Bits, die zur Darstellung jedes Pixels im Speicher verwendet werden.

### APNG (Animated Portable Network Graphics)

APNG ist ein von Mozilla zuerst eingeführtes Dateiformat, das den [PNG](#png_portable_network_graphics)-Standard erweitert, um die Unterstützung für animierte Bilder hinzuzufügen.
Konzeptionell ähnlich wie das animierte GIF-Format, das seit Jahrzehnten verwendet wird, ist APNG leistungsfähiger, da es eine Vielzahl von [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animiertes GIF nur 8-Bit [indizierte Farbe](https://en.wikipedia.org/wiki/Indexed_color) unterstützt.

APNG ist ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einem Soundtrack synchronisiert werden müssen, wie z. B. Fortschrittsanzeigen, Aktivitäts-Throbber und andere animierte Sequenzen.
Zum Beispiel ist APNG [eines der unterstützten Formate beim Erstellen animierter Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichtenanwendung auf iOS).
Sie werden auch häufig für die animierten Teile der Benutzeroberflächen von Webbrowsern verwendet.

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
      <td>2,147,483,647×2,147,483,647 Pixel</td>
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
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Grad der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist;
                die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
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

### AVIF Bild

Das AV1 Image File Format (AVIF) ist ein leistungsfähiges, quelloffenes, lizenzfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF)-Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, "der nächste große Wurf" für das Teilen von Bildern im Web-Inhalt zu werden.
> Es bietet hochmoderne Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzierung und Patentrechte, die vergleichbare Alternativen behindert haben.

AV1 ist ein Codierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde.
Das Format profitiert von den erheblichen Fortschritten in der Videocodierung in den letzten Jahren und kann potenziell von der damit verbundenen Unterstützung für Hardware-Rendering profitieren.
Jedoch hat es auch Nachteile bei einigen Fällen, da Video- und Bildcodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG für visuell vergleichbare Kompressionsstufen (z.B. sind verlustbehaftete AVIF-Bilder etwa 50% kleiner als JPEG-Bilder).
- Generell hat AVIF eine bessere Kompression als WebP - median 50% vs. 30% Kompression für das gleiche JPG-Set (Quelle: [AVIF WebP Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Kompression.
- Animation/Multi-Image-Speicherung (ähnlich animierten GIFs, jedoch mit viel besserer Kompression).
- Alphakanal-Unterstützung (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung zur Speicherung von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Wide Color Gamut: Unterstützung für Bilder, die einen größeren Farbumfang enthalten können.

AVIF unterstützt kein progressives Rendering, daher müssen Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können.
Dies hat in der Praxis oft wenig Einfluss auf die Benutzererfahrung, da AVIF-Dateien viel kleiner als die entsprechenden JPEG- oder PNG-Dateien sind und daher schneller heruntergeladen und angezeigt werden können.
Bei größeren Dateigrößen kann der Einfluss erheblich sein, und Sie sollten die Verwendung eines Formats in Betracht ziehen, das progressives Rendering unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt.
Da die Unterstützung noch nicht umfassend ist (und nur wenig historische Tiefe hat), sollten Sie ein Fallback in [WebP](#webp_bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics)-Format mit [dem `<picture>`-Element](/de/docs/Web/HTML/Element/picture) (oder einem anderen Ansatz) anbieten.

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
            Firefox 93 unterstützt Standbilder, mit Farbraumunterstützung für sowohl volle als auch eingeschränkte Farbbereiche, Bildtransformationen für Spiegelung und Rotation.
            Die Präferenz <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            kann verwendet werden, um die Grad der Einhaltung der Spezifikation zu regulieren.
          </li>
          <li>
            Firefox 113 und später unterstützen animierte Bilder.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>2,147,483,647×2,147,483,647 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Information zur Unterstützung von Farbmodi wird bereitgestellt in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2: Farbkonfigurationssemantik.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung ist:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12-Bit</li>
          <li>Alphakanal-Unterstützung</li>
          <li>ICC-Profil-Unterstützung</li>
          <li>
            NCLX-Unterstützung: sRGB, lineares sRGB, lineares Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3, usw.
          </li>
          <li>Tiling-Unterstützung</li>
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
        Lizenzfrei. Lizenzinformationen sind verfügbar unter <a href="https://aomedia.org/license/">License Page</a>.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Datei)

Der **BMP** (**Bitmap-Bild**)-Dateityp ist vornehmlich auf Windows-Computern verbreitet und wird im Allgemeinen nur für Spezialfälle in Webanwendungen und Inhalten verwendet.

> [!WARNING]
> Sie sollten die Verwendung von BMP-Dateien für Website-Inhalte generell vermeiden.
> Die häufigste Form der BMP-Datei stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu png- oder jpg-Bildtypen führt.
> Effizientere BMP-Formate existieren, sind jedoch nicht weit verbreitet und werden selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl interner Datenrepräsentationen.
Die einfachste und am häufigsten verwendete Form der BMP-Datei ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Bytes belegt, die seine roten, grünen und blauen Komponenten darstellen, und jede Zeile mit `0x00` Bytes auf ein Vielfaches von 4 Byte Breite aufgefüllt ist.

Während andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht weit verbreitet eingesetzt und oft überhaupt nicht implementiert.
Diese Merkmale umfassen: Unterstützung für verschiedene Bit-Tiefen, indizierte Farben, Alphakanäle und verschiedene Pixelfolgen (BMP wird standardmäßig vom unteren linken Winkel nach rechts und oben geschrieben, anstatt vom oberen linken Winkel nach rechts und unten).

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
        Keine Spezifikation; jedoch bietet Microsoft allgemeine Dokumentationen des Formats bei
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
        Entweder 32,767×32,767 oder 2,147,483,647×2,147,483,647 Pixel, abhängig von der Formatversion
      </td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Farbmodus</th>
              <th scope="col">Bits per Komponente (<em>D</em>)</th>
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
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der entweder 2, 4 oder 8 Bits umfasst und als Index in die Farbtafel dient.
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
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
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
        obwohl Microsoft Patente gegen BMP hält, haben sie ein Versprechen veröffentlicht, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der Online-Dienstanbieter CompuServe das **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) Bilddateiformat ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes verwenden könnten.
GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus zur verlustfreien Komprimierung von 8-Bit indizierten Farbgrafiken.
GIF war eines der ersten beiden Grafikformate, die von [HTML](/de/docs/Glossary/HTML) unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben (jeweils 8 Bits für Rot, Grün und Blau) dient. Die Länge einer Farbtafel ist immer eine Potenz von 2 (das heißt, jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge).
Um mehr als 255 oder 256 Farben zu simulieren, wird in der Regel [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet.
Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu verwenden, die jeweils ihre eigenen Farbpaletten haben, um Truecolor-Bilder zu erstellen, aber praktisch geschieht dies selten.

Pixels sind undurchsichtig, es sei denn, ein bestimmter Farbcode ist als transparent gekennzeichnet, in welchem Fall Pixels dieser Farbe vollständig transparent sind.

GIF unterstützt einfache Animationen, bei denen nach einem ersten Vollbildrahmen eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Frame ändern.

GIF war Jahrzehnte lang extrem beliebt, aufgrund seiner Einfachheit und Kompatibilität.
Seine Animationsunterstützung verursachte eine Wiederauflebenswelle in seiner Beliebtheit im Zeitalter der sozialen Medien, als animierte GIFs weit verbreitet für kurze "Videos", Memes und andere einfache Animationssequenzen verwendet wurden.

Ein weiteres beliebtes Merkmal von GIF ist die Unterstützung von [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei der Zeilen von Pixeln in Unordnung gespeichert werden, so dass teilweise empfangene Dateien in geringerer Qualität angezeigt werden können.
Dies ist besonders nützlich, wenn Netzverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl das Konvertieren von Vollfarbbildern in GIF zu unzufriedenstellendem Dithering führen kann.
Normalerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie und indizierte Standbilder verwenden und sollte in Erwägung ziehen, [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen zu verwenden.

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
      <td>65,536×65,536 Pixel</td>
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
              <th scope="row">Echte Farbe</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine Truecolor-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird als jeweils 8 Bits von Rot, Grün und Blau definiert (24 Gesamtbits pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein dediziertes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
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
        Während das GIF-Format selbst offen ist, war der LZW-Kompressionsalgorithmus bis Anfang 2000 durch Patente abgedeckt.
        Alle relevanten Patente sind am 7. Juli 2004 abgelaufen und das GIF-Format kann nun frei verwendet werden
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO (Microsoft Windows Icon)-Dateiformat wurde von Microsoft für Desktop-Symbole von Windows-Systemen entwickelt.
Frühe Versionen von Internet Explorer führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei namens `favicon.ico` im Stammverzeichnis einer Website bereitstellen kann, um ein **[Favicon](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site)** anzugeben — ein Symbol, das im Favoritenmenü und an anderen Stellen angezeigt wird, wo eine ikonische Darstellung der Site nützlich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichniseintrag, der Details über jedes Symbol auflistet.
Nach dem Verzeichnis folgen die Daten für die Symbole.
Die Daten eines jeden Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich des Dateikopfs) sein.
Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG innerhalb von ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden.
> Außerdem hat ihre Verwendung als Favicons zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements nachgelassen, wie in [Bereitstellung von Symbolen für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Element/link#providing_icons_for_different_usage_contexts) beschrieben.

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
              <th scope="row">Graustufen</th>
              <td>1</td>
              <td>
                Jedes Bit repräsentiert ein einzelnes Pixel, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der entweder 2, 4 oder 8 Bits umfasst und als Index in die Farbtafel dient.
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
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
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
              <th scope="row">Graustufen</th>
              <td>1, 2, 4, 8 und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Grad der roten, grünen und blauen Farbkomponenten angeben.
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
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
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
      <th scope="row">Kompression</th>
      <td>
        BMP-formatierte Symbole verwenden nahezu immer verlustfreie Kompression, aber verlustbehaftete Methoden sind verfügbar.
        PNG-Symbole werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group image)

Das [JPEG](/de/docs/Glossary/JPEG) (meistens als "**Jay-Peg**" ausgesprochen) Bildformat ist derzeit das am weitesten verbreitete Format für verlustbehaftete Kompression von Standbildern.
Es ist besonders nützlich für Fotografien; das Anwenden von verlustbehafteter Kompression auf Inhalte, die Schärfe erfordern, wie Diagramme oder Grafiken, kann unzufriedenstellende Ergebnisse erzeugen.

JPEG ist eigentlich ein Datenformat für komprimierte Fotos und kein Dateityp.
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
      <td>65,535×65,535 Pixel</td>
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
              <td>Echte Graustufen können mit dem einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, die jeweils 8 Bits umfassen.
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
              <td>JPEG unterstützt keinen Alphakanal.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
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
        Verlustbehaftet; basiert auf der <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">diskreten Kosinustransformation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Seit dem 27. Oktober 2006 sind alle US-Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das [PNG](/de/docs/Glossary/PNG) (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Kompression, unterstützt höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) und ist effizienter, zusätzlich bietet es vollständige Alpha-Transparenzunterstützung.

PNG wird breit unterstützt, mit allen großen Browsern, die vollständige Unterstützung für dessen Funktionen bieten.

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
      <td>2,147,483,647×2,147,483,647 Pixel</td>
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
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt
                die den Grad der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem
                <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die
                Intensität des Graustufenpixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
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
      <th scope="row">Kompression</th>
      <td>Verlustfrei, optional indizierte Farben wie GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungsausschluss</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a> -Regeln gelten. Keine bekannten patentbelastenden Vergütungen.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

SVG ist ein [XML](/de/docs/Glossary/XML)-basiertes [Vektorgraphik](https://en.wikipedia.org/wiki/Vector_graphics)-Format, das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen angibt, die Formen, Linien zeichnen, Farben, Filter usw. anwenden.
SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können.
Als solches ist SVG beliebt für Benutzeroberflächenelemente in modernem Webdesign.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der bei der Interpretation das gewünschte Bild zeichnet.
Zum Beispiel definiert dieses Beispiel eine Zeichenfläche mit anfänglicher Größe von 100 x 100 Einheiten, die eine Linie enthält, die diagonal durch das Kästchen gezogen wird:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann in Webinhalten auf zwei Arten verwendet werden:

1. Sie können das {{SVGElement("svg")}}-Element direkt innerhalb des HTML schreiben, das [SVG-Elemente](/de/docs/Web/SVG/Element) enthält, um das Bild zu zeichnen.
2. Sie können ein SVG-Bild überall dort anzeigen, wo Sie einen der anderen Bildtypen verwenden können, einschließlich mit den {{HTMLElement("img")}} und {{HTMLElement("picture")}}-Elementen, der {{cssxref("background-image")}} CSS-Eigenschaft und so weiter.

SVG ist eine ideale Wahl für Bilder, die mit einer Reihe von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, bei der das Bild wiedergegeben wird, unbekannt oder variabel ist, da SVG problemlos auf die gewünschte Größe skaliert wird.
Es ist im Allgemeinen nicht nützlich für strikte Bitmap- oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb eines SVG einzuschließen.

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
      <th scope="row">Kompression</th>
      <td>
        SVG-Quelle kann während des Transits unter Verwendung von <a href="/de/docs/Web/HTTP/Compression">HTTP-Kompression</a> -Techniken komprimiert werden, oder auf der Festplatte als <code>.svgz</code>-Datei.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungsausschluss</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a> -Regeln gelten. Keine bekannten patentbelastenden Vergütungen.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafikdateiformat, das entwickelt wurde, um gescannte Fotos zu speichern, obwohl es jede Art von Bild sein kann.
Es ist ein etwas "schweres" Format, da TIFF-Dateien dazu neigen, größer zu sein als Bilder in anderen Formaten.
Dies liegt an den häufig enthaltenen Metadaten sowie daran, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Kompressionsalgorithmen verwenden, die nach der Kompression immer noch ziemlich große Dateien zurücklassen.

TIFF unterstützt verschiedene Kompressionsmethoden, aber die am häufigsten verwendeten sind die CCITT Group 4 (und für ältere Faxsysteme Group 3) Kompressionssysteme, die von Faxsoftware verwendet werden, sowie LZW- und verlustbehaftete JPEG-Kompression.

Jeder Wert in einer TIFF-Datei wird mithilfe seiner **Tag** (die Art der Information, z.B. die Breite des Bildes) und **Typ** (das Format, in dem die Daten gespeichert sind) angegeben, gefolgt von der Länge des Arrays von Werten, das unter diesen Tag zuweisen soll (alle Eigenschaften sind in Arrays gespeichert, auch für Einzelwerte).
Dies ermöglicht verschiedene Datentypen für dieselben Eigenschaften.
Zum Beispiel wird die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` und als ein Eintrag-Array gespeichert.
Durch Angabe von Typ 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Bei der Angabe von Typ 4 (`LONG`) wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um mehrseitige Dokumente darzustellen, z.B. (wie ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax).
Jedoch ist Software, die TIFF-Dateien liest, verpflichtet, nur das erste Bild zu unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB.
Diese beinhalten CMYK, YCbCr und andere, weshalb TIFF eine gute Wahl ist, um Bilder zu speichern, die für Druck-, Film- oder Fernsehmedien bestimmt sind.

Abgesehen von Safari unterstützen Browser TIFF-Bilder nicht nativ in Webinhalten, außer durch spezielle Bibliotheken oder Browser-Add-ons.
Als solches werden TIFF-Dateien nicht breit genutzt, um Webinhalte anzuzeigen, _aber_ es ist üblich, herunterladbare TIFF-Dateien anzubieten, wenn Fotos und andere Kunstwerke verteilt werden sollen, die für präzise Bearbeitung oder Druck bestimmt sind.

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
      <td>4,294,967,295×4,294,967,295 Pixel (theoretisch)</td>
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
              <th scope="row">Zweifarb</th>
              <td>1</td>
              <td>
                Eine zweifarbige TIFF-Datei speichert 8 Bits in jedem Byte, ein Bit pro Pixel.
                Das <code>PhotometricInterpretation</code>-Feld spezifiziert, welches von 0 und 1 schwarz ist und welches weiß.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8</td>
              <td>
                Alle echten RGB-Farbbilder werden unter Verwendung von 8 Bits für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in ein <code>ColorMap</code>-Datensatz, das die im Bild verwendeten Farben definiert.
                Die Farbtabelle listet alle Rot-Werte auf, dann alle Grün-Werte, dann alle Blau-Werte (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld vorhanden sind, und der Typ des Alpha wird angegeben (1 für eine assoziierte, vor-multiplizierte Alphakomponente und 2 für nicht assoziierte Alphablende - eine separate Matte); jedoch werden Alphakanäle nur selten in TIFF-Dateien verwendet und können von der Benutzer-Software nicht unterstützt werden.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld vorhanden sind, und der Typ des Alpha wird angegeben (1 für eine assoziierte, vor-multiplizierte Alphakomponente und 2 für nicht assoziierte Alphablende - eine separate Matte); jedoch werden Alphakanäle nur selten in TIFF-Dateien verwendet und können von der Benutzer-Software nicht unterstützt werden.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustfreie PackBits- und LZW-Kompression sind unterstützt, wie auch verlustbehaftete JPEG-Kompression.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von der mit den Bibliotheken, die Sie verwenden könnten); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP Bild

WebP unterstützt verlustbehaftete Kompression über prädiktive Codierung basierend auf dem VP8-Videocodec und verlustfreie Kompression, die Ersatz für sich wiederholende Daten verwendet.
Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35% kleiner als JPEG-Bilder mit vergleichbaren visuellen Kompressionsstufen.
Verlustfreie WebP-Bilder sind typischerweise 26% kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animation: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann.
Verlustfreie WebP enthalten den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz darstellt.
Schleifen wird unterstützt.

WebP hat nun breite Unterstützung in den neuesten Versionen großer Webbrowser, obwohl es keine tiefgreifende historische Unterstützung hat.
Bieten Sie eine Fallback-Option entweder in [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics)-Format an, wie mit [dem `<picture>`-Element](/de/docs/Web/HTML/Element/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF-Container-Spezifikation</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Verlustfreier Bitstream-Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch für das <em>Exportieren</em> von Bildern von einer Canvas verwendet werden.
        Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Versionsinformationen zur Unterstützung.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16,383×16,383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit Y'CbCr 4:2:0 (YUV420) Format.
        Verlustfreies WebP verwendet 8-Bit ARGB-Farbe, wobei jede Komponente 8 Bits einnimmt, für insgesamt 32 Bits pro Pixel.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei (Huffman, LZ77 oder Farbcache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; Quellcode ist frei verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Auf Safari in macOS, hängt die WebP-Unterstützung von beiden Safari und macOS-Versionen ab. Sie benötigen Safari 14 oder höher sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap file)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, werden jedoch nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsbedenken aufwirft.
Moderne Browser haben XBM-Dateien seit vielen Jahren nicht mehr unterstützt, aber bei älteren Inhalten können Sie noch einige finden.

XBM verwendet einen C-Code-Schnipsel, um den Inhalt des Bildes als Byte-Array darzustellen.
Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe des Bitmaps (und optional den Hotspot, wenn das Bild als Cursor konzipiert ist) sowie ein Array von `unsigned char`, wobei jeder Wert 8 1-Bit-Monochrom-Pixel enthält.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein.
Zum Beispiel der folgende Code stellt ein XBM-Bild dar, das 8 Pixel mal 8 Pixel groß ist, mit diesen Pixeln in einem schwarz-weißen Schachbrettmuster:

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

Die Auswahl des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als bei Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jede dazu neigt, einen spezifischen Satz von Anwendungsfällen zu haben.

### Fotografien

Fotografien erleiden typischerweise keinen großen Verlust bei verlustbehafteter Kompression (abhängig von der Konfiguration des Encoders).
Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp_bild) zu guten Entscheidungen für Fotografien, wobei JPEG kompatibler ist, WebP jedoch möglicherweise eine bessere Kompression bietet.
Um die Qualität zu maximieren und die Downloadzeit zu minimieren, ziehen Sie in Betracht, beide [unter Verwendung fallback](#providing_image_fallbacks) mit WebP als erste Wahl und JPEG als zweite anzubieten.
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

Für kleinere Bilder wie Symbole verwenden Sie ein verlustfreies Format, um Detailverluste in einem Größenbeschränkten Bild zu vermeiden.
Zwar ist verlustfreies WebP ideal hierfür, aber die Unterstützung ist noch nicht weit verbreitet, daher ist PNG eine bessere Wahl, es sei denn, Sie bieten einen [Fallback](#providing_image_fallbacks).
Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG oft noch kleiner mit seiner indizierten Kompressionsoption (PNG-8) komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, ziehen Sie [SVG](#svg_scalable_vector_graphics) in Betracht, da es über verschiedene Auflösungen und Größen skaliert und somit perfekt für reaktionsschnelles Design ist.
Obwohl die SVG-Unterstützung gut ist, kann es sich lohnen, für ältere Browser ein PNG-Fallback anzubieten.

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

Es sei denn, Sie sind bereit, auf Qualität zu verzichten, sollten Sie ein verlustfreies Format für Bildschirmfotos verwenden.
Dies ist

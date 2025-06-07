---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die in der Regel von Webbrowsern unterstützt werden, und bieten Einblicke, die Ihnen helfen werden, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

## Häufige Bilddateitypen

Die im Web am häufigsten verwendeten Bilddateiformate sind unten aufgelistet.

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
        AVIF und WebP bieten bessere Leistung, aber weniger umfassende Browserunterstützung.<br />
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
          Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund hoher Leistung und lizenzfreiem Bildformat.
          Es bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass Sie beim Verwenden von AVIF Fallbacks zu Formaten mit besserer Browserunterstützung bereitstellen sollten (d.h. mit dem <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>-Element).<br />
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
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indizierte Standbilder und überlegen Sie WebP, AVIF oder APNG für Animationssequenzen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row">
        <a href="#jpeg_joint_photographic_experts_group_image">JPEG</a>
      </th>
      <th scope="row">Joint Photographic Expert Group Bild</th>
      <td><code>image/jpeg</code></td>
      <td>
        <code>.jpg</code>, <code>.jpeg</code>, <code>.jfif</code>,
        <code>.pjpeg</code>, <code>.pjp</code>
      </td>
      <td>
        <p>
          Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit am beliebtesten).
          Bevorzugen Sie PNG, wenn eine genauere Wiedergabe des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl eine bessere Wiedergabe als auch eine höhere Kompression erforderlich sind.<br />
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
          PNG wird gegenüber JPEG bevorzugt, wenn eine genauere Wiedergabe der Quellbilder erforderlich ist oder wenn Transparenz benötigt wird. WebP/AVIF bieten noch bessere Kompression und Wiedergabe, aber die Browserunterstützung ist eingeschränkter.<br />
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
        WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine etwas bessere Kompression, ist aber nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die älteren Formate wie PNG, JPEG, GIF haben eine schlechtere Leistung im Vergleich zu neueren Formaten wie WebP und AVIF, genießen aber eine breitere "historische" Browserunterstützung. Die neueren Bildformate gewinnen an Popularität, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil haben).

Die folgende Liste enthält Bildformate, die im Web erscheinen, die jedoch für Webinhalte vermieden werden sollten (in der Regel, weil entweder sie keine breite Browserunterstützung haben oder es bessere Alternativen gibt).

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
> Die Abkürzung für jedes Bildformat verlinkt auf eine längere Beschreibung des Formats, seiner Fähigkeiten und detaillierten Informationen zur Browser-Kompatibilität (einschließlich der Versionen, die Unterstützung eingeführt haben, und bestimmte spezielle Funktionen, die möglicherweise später eingeführt wurden).

> [!NOTE]
> Safari 11.1 hat die Fähigkeit hinzugefügt, ein Videoformat als Ersatz für animierte GIFs zu verwenden. Kein anderer Browser unterstützt dies. Weitere Informationen finden Sie im [Chromium-Bug](https://crbug.com/791658) und im [Firefox-Bug](https://bugzil.la/895131).

## Details zu Bilddateitypen

Die folgenden Abschnitte bieten einen kurzen Überblick über jeden der von Webbrowsern unterstützten Bilddateitypen.

In den unten stehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden. Beispielsweise gibt eine RGB-Farbtiefe von 8 an, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. **Bittiefe** hingegen ist die Gesamtanzahl der Bits, die zur Darstellung jedes Pixels im Speicher verwendet werden.

### APNG (Animated Portable Network Graphics)

APNG ist ein Dateiformat, das erstmals von Mozilla eingeführt wurde und den [PNG](#png_portable_network_graphics)-Standard erweitert, um animierte Bilder zu unterstützen. Konzeptuell ähnlich wie das animierte GIF-Format, das seit Jahrzehnten in Gebrauch ist, ist APNG leistungsfähiger, da es eine Vielzahl von [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit-[indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG eignet sich ideal für grundlegende Animationen, die nicht mit anderen Aktivitäten oder einem Soundtrack synchronisiert werden müssen, wie Fortschrittsanzeigen, Aktivitäts-[Throbber](https://en.wikipedia.org/wiki/Throbber) und andere animierte Sequenzen. Beispielsweise ist APNG [eines der Formate, die beim Erstellen von animierten Stickern](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichtenanwendung auf iOS) unterstützt werden. Sie werden auch häufig für die animierten Teile von Webbrowser-Benutzeroberflächen verwendet.

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
        <a href="https://wiki.mozilla.org/APNG_Specification">wiki.mozilla.org/APNG_Specification</a>
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
              <td>1, 2, 4, 8, und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
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
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4, und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farben mit Alpha</th>
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
      <td>Lossless</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Frei und offen unter der <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike License</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder neuer.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

AV1 Image File Format (AVIF) ist ein leistungsstarkes, quelloffenes, lizenzfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF) Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern im Webinhalt zu werden. Es bietet modernste Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzen und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Codierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde. Das Format profitiert von den erheblichen Fortschritten in der Video-Codierung in den letzten Jahren und könnte potenziell von der zugehörigen Unterstützung für Hardware-Rendering profitieren. Es hat jedoch auch Nachteile in einigen Fällen, da Video- und Bildcodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG für visuell ähnliche Kompressionsniveaus (zum Beispiel sind verlustbehaftete AVIF-Bilder etwa 50% kleiner als JPEG-Bilder).
- Allgemein hat AVIF eine bessere Kompression als WebP — median 50% vs. 30% Kompression für das gleiche JPG-Set (Quelle: [AVIF WebP Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Kompression.
- Animationen/Mehrbildspeicherung (ähnlich wie animierte GIFs, aber mit viel besserer Kompression)
- Unterstützung von Alphakanälen (z. B. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für die Speicherung von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Breiter Farbraum: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt kein progressives Rendering, deshalb müssen die Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf die reale Benutzererfahrung, weil AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und daher schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann der Einfluss jedoch signifikant werden, und Sie sollten ein Format in Betracht ziehen, das progressives Rendering unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe hat), sollten Sie einen Rückfall auf das [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics)-Format mit dem [`<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder einem anderen Ansatz) bieten.

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
          <a href="https://aomediacodec.github.io/av1-avif/">AV1 Image File Format (AVIF)</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Chrome 85, Edge 121, Opera 71, Firefox 93 und Safari 16.1.
        <ul>
          <li>
            Firefox 93 unterstützt Standbilder mit Unterstützung für Farbräume sowohl für volle als auch für begrenzte Farbenbereiche, Bildtransformationen für Spiegelung und Rotation. Die Präferenz <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a> kann angepasst werden, um die Einhaltung der Spezifikation anzupassen.
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
          Informationen zur Farbraumunterstützung sind in der <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream & Decoding Process Specification</a>, Abschnitt 6.4.2: Farbkonstruktionssemantik zu finden.
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
          <li>Kachelung Unterstützung</li>
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
        Kostenlos. Lizenzinformationen sind auf der <a href="https://aomedia.org/license/">Lizenzseite</a> verfügbar.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Datei)

Der **BMP** (**Bitmap Image**)-Dateityp ist am weitesten verbreitet auf Windows-Computern und wird in Webanwendungen und -inhalten nur für Spezialfälle verwendet.

> [!WARNING]
> Sie sollten BMP-Dateien für Website-Inhalte normalerweise vermeiden. Die gängigste Form der BMP-Datei stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu PNG- oder JPG-Dateitypen führt. Effizientere BMP-Formate existieren, werden jedoch nicht weit verbreitet genutzt und selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl interner Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form von BMP-Dateien ist ein unkomprimiertes Rasterbild, wobei jedes Pixel 3 Bytes belegt, die seine roten, grünen und blauen Komponenten darstellen, und jede Zeile mit `0x00` Bytes auf ein Vielfaches von 4 breiten Bytes aufgefüllt wird.

Während andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht weit verbreitet genutzt und oft überhaupt nicht implementiert. Diese Funktionen umfassen: Unterstützung für verschiedene Bit-Tiefen, indizierte Farben, Alphakanäle und verschiedene Pixelanordnungen (standardmäßig wird BMP von der unteren linken Ecke nach rechts und oben geschrieben, statt von der oberen linken Ecke nach rechts und unten).

Theoretisch werden mehrere Komprimierungsalgorithmen unterstützt, und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics)-Format innerhalb der BMP-Datei gespeichert werden.

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
        Entweder 32,767×32,767 oder 2,147,483,647×2,147,483,647 Pixel, je nach Formatversion
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
                Jedes Bit repräsentiert ein einzelnes Pixel, welches entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4, und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der entweder aus 2, 4 oder 8 Bits besteht und als Index für die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenständiges Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
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
        Verschiedene Komprimierungsmethoden werden unterstützt, einschließlich verlustbehafteter oder verlustfreier Algorithmen
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>;
        während Microsoft Patente gegen BMP hält, haben sie ein Versprechen veröffentlicht, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

Im Jahr 1987 führte der Online-Dienstanbieter CompuServe das **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**)-Bilddateiformat ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes verwenden können. GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus, um 8-Bit indizierte Farbgrafiken verlustfrei zu komprimieren. GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzigen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben (8 Bits jeweils für Rot, Grün und Blau) dient. Die Länge einer Farbtafel ist immer eine Potenz von 2 (das heißt, jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird allgemein [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, von denen jeder seine eigene Farbpalette hat, um echte Farbbilder zu erstellen, aber in der Praxis wird dies selten gemacht.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent agCzA verwendet, in diesem Fall sind die mit diesem Wert gefärbten Pixel völlig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem anfänglichen Vollbild eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Frame ändern.

GIF ist seit Jahrzehnten äußerst beliebt, aufgrund seiner Einfachheit und Kompatibilität. Seine Animationsunterstützung führte im Zeitalter der sozialen Medien zu einer Wiederbelebung seiner Beliebtheit, als animierte GIFs für kurze "Videos", Memes und andere einfache Animationssequenzen weit verbreitet wurden.

Ein weiteres beliebtes Feature von GIF ist die Unterstützung für [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Pixelzeilen in einer anderen Reihenfolge gespeichert werden, sodass teilweise empfangene Dateien in niedriger Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzwerkverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung von Vollfarbbildern in GIF zu unbefriedigendem Dithering führen kann. Typischerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und sollte [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen in Betracht ziehen.

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
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">GIF87a Specification</a><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt">GIF89a Specification</a>
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
                Jede Farbe in einer GIF-Palette wird mit jeweils 8 Bits für Rot, Grün und Blau (insgesamt 24 Bits pro Pixel) definiert.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF hat kein eigenes Graustufenformat.</td>
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
        Während das GIF-Format selbst offen ist, wurde der LZW-Komprimierungsalgorithmus bis in die frühen 2000er Jahre durch Patente abgedeckt. Seit dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO (Microsoft Windows Icon) Dateiformat wurde von Microsoft für Desktop-Symbole von Windows-Systemen entwickelt. Jedoch führten frühere Versionen des Internet Explorer die Möglichkeit ein, dass eine Website eine ICO-Datei mit dem Namen `favicon.ico` im Stammverzeichnis einer Website bereitstellen kann, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** zu spezifizieren — ein Symbol, das im Favoriten-Menü und an anderen Stellen angezeigt wird, wo eine symbolische Darstellung der Website nützlich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem auflistet. Nach dem Verzeichnis folgen die Daten für die Symbole. Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file) Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics) Bild (einschließlich Dateikopf) sein. Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG in ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden. Zudem ist ihre Verwendung für Favicons inzwischen zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements gesunken, wie in [Providing icons for different usage contexts](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

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
                Jedes Bit repräsentiert ein einzelnes Pixel, welches entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4, und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der 2, 4 oder 8 Bits umfasst und als Index für die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
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
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
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
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4, und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farben mit Alpha</th>
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
        BMP-Format-Symbole verwenden fast immer verlustfreie Kompression, aber verlustbehaftete Methoden sind verfügbar. PNG-Symbole werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group image)

Das {{Glossary("JPEG", "JPEG")}} (typisch als "**jay-peg**" ausgesprochen) Bildformat ist derzeit das am weitesten verbreitete verlustbehaftete Kompressionsformat für Standbilder. Es ist besonders nützlich für Fotografien; das Anwenden verlustbehafteter Kompression auf Inhalte, die Schärfe erfordern, wie Diagramme oder Charts, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist tatsächlich ein Datenformat für komprimierte Fotos, anstatt ein Dateityp. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat)-Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder betrachten.

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
              <td>Echte Graustufen können mit dem Einzel-Luma-Kanal (Y) unterstützt werden.</td>
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
              <td>JPEG bietet keinen indizierten Farbmodus.</td>
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
        Verlustbehaftet; basierend auf der <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">Diskreten Cosinustransformation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Seit dem 27. Oktober 2006 sind alle US-Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Kompression, während es höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) unterstützt und effizienter ist, sowie eine vollständige Unterstützung für Alphatransparenz bietet.

PNG wird weithin unterstützt, und alle großen Browser bieten volle Unterstützung für seine Funktionen.

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
      <td><a href="https://w3c.github.io/png/">Portable Network Graphics (PNG) Specification</a></td>
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
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
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
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4, und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farben mit Alpha</th>
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
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentenverwendung</a> und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierung</a> Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein auf {{Glossary("XML", "XML")}} basierendes [Vektorgrafikformat](https://en.wikipedia.org/wiki/Vector_graphics), das den Inhalt eines Bildes als eine Reihe von Zeichenanweisungen spezifiziert, die Formen und Linien erstellen, Farben, Filter anwenden und so weiter. SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können. Daher ist SVG für Benutzerschnittstellenelemente im modernen Webdesign beliebt.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der beim Interpretieren das gewünschte Bild zeichnet. Beispielsweise definiert dieses Beispiel einen Zeichenbereich mit einer Anfangsgröße von 100 mal 100 Einheiten, der eine Linie diagonal durch das Feld enthält:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann in Webinhalten auf drei Arten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt innerhalb des HTMLs erscheinen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, um das Bild zu zeichnen.
2. Ein SVG-Bild kann in HTML mit Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} eingebettet werden.
3. Es ist möglich, SVG-Bilder überall dort zu verwenden, wo andere Bildtypen verwendet werden können, einschließlich mit dem {{HTMLElement("img")}} Element, der {{cssxref("background-image")}} CSS-Eigenschaft und so weiter. Es gibt jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image), wenn SVG auf diese Weise verwendet wird.

SVG ist eine ideale Wahl für Bilder, die mit einer Serie von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, bei der das Bild gerendert wird, unbekannt ist oder variieren kann, da SVG sich problemlos auf die gewünschte Größe skalieren lässt. Es ist im Allgemeinen nicht nützlich für strikt Bitmap- oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb eines SVGs einzuschließen.

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
      <td><a href="https://svgwg.org/svg2-draft/">Scalable Vector Graphics (SVG) 2</a></td>
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
      <td>Farben in SVG werden unter Verwendung der <a href="/de/docs/Web/CSS/color_value">CSS-Farbsyntax</a> angegeben.</td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        SVG-Quellmaterial kann während des Transports mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Kompression</a>-Techniken oder auf der Festplatte als <code>.svgz</code>-Datei komprimiert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentenverwendung</a> und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierung</a> Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafikdateiformat, das erstellt wurde, um gescannte Fotos zu speichern, obwohl es jedes mögliche Bild sein kann. Es ist ein etwas "schweres" Format, in dem TIFF-Dateien dazu neigen, größer zu sein als Bilder in anderen Formaten. Dies liegt an den oft enthaltenen Metadaten sowie daran, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Komprimierungsalgorithmen verwenden, die immer noch relativ große Dateien nach der Komprimierung hinterlassen.

TIFF unterstützt eine Vielzahl von Komprimierungsmethoden, aber die am häufigsten verwendeten sind die CCITT-Gruppe-4-Kompressionssysteme (und für ältere Faxsysteme die Gruppe 3), die von Fax-Software verwendet werden, sowie LZW und verlustbehaftete JPEG-Kompression.

Jeder Wert in einer TIFF-Datei wird unter Verwendung eines **Tags** (das angibt, um welche Art von Information es sich handelt, wie z. B. die Breite des Bildes) und eines **Typs** (das angibt, in welchem Format die Daten gespeichert werden) sowie die Länge des Arrays von Werten, die diesem Tag zugewiesen werden sollen, angegeben (alle Eigenschaften werden in Arrays gespeichert, selbst für Einzelwerte). Dies ermöglicht es, verschiedene Datentypen für dieselben Eigenschaften zu verwenden. Zum Beispiel wird die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` gespeichert und ist ein Einträge-Array. Indem Typ 3 (`SHORT`) spezifiziert wird, wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Die Spezifikation von Typ 4 (`LONG`) speichert die Breite als 32-Bit-Wert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies könnte zum Beispiel verwendet werden, um mehrseitige Dokumente darzustellen (wie ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax). Allerdings ist Software, die TIFF-Dateien liest, nur erforderlich, das erste Bild zu unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB. Dazu gehören CMYK, YCbCr und andere, wodurch TIFF eine gute Wahl für die Speicherung von Bildern ist, die für Druck-, Film- oder Fernsehmedien bestimmt sind.

Abgesehen von Safari unterstützen Browser native TIFF-Bilder in Webinhalten nicht, außer mit speziellen Bibliotheken oder Browser-Addons. Daher werden TIFF-Dateien nicht häufig genutzt, um Webinhalte darzustellen, aber es ist üblich, herunterladbare TIFF-Dateien bereitzustellen, wenn Fotos und andere Kunstwerke verteilt werden sollen, die für präzises Bearbeiten oder Drucken bestimmt sind.

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
              <th scope="row">Bilevel</th>
              <td>1</td>
              <td>
                Ein Bilevel-TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel. Das <code>PhotometricInterpretation</code>-Feld gibt an, welches von 0 und 1 schwarz und welches weiß ist.
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
              <th scope="row">Echte Farben</th>
              <td>8</td>
              <td>
                Alle echten Farbbilder im RGB-Format werden mit 8-Bits pro Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einen <code>ColorMap</code>-Datensatz, der die im Bild verwendeten Farben definiert. Die Farbkarte listet zuerst alle roten Werte auf, dann alle grünen Werte und schließlich alle blauen Werte (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Muster pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und die Art des Alpha-Kanals angegeben wird (1 für eine zugeordnete, vor-multiplizierte Alpha-Komponente und 2 für unassoziiertes Alpha - eine separate Matte); Alpha-Kanäle werden jedoch selten in TIFF-Dateien verwendet und können von der Software des Benutzers möglicherweise nicht unterstützt werden.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Muster pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und die Art des Alpha-Kanals angegeben wird (1 für eine zugeordnete, vor-multiplizierte Alpha-Komponente und 2 für unassoziiertes Alpha - eine separate Matte); Alpha-Kanäle werden jedoch selten in TIFF-Dateien verwendet und können von der Software des Benutzers möglicherweise nicht unterstützt werden.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustfreie PackBits- und LZ77-Kompression werden unterstützt, genauso wie verlustbehaftete JPEG-Kompression.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von eventuell assoziierten mit Bibliotheken, die Sie verwenden könnten); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Komprimierung über prädiktive Kodierung basierend auf dem VP8-Video-Codec und verlustfreie Komprimierung, die Ersetzungen für sich wiederholende Daten verwendet. Verlustbehaftet kodierte WebP-Bilder sind im Durchschnitt 25–35% kleiner als JPEG-Bilder bei visuell ähnlichen Kompressionsniveau. Verlustfreie WebP-Bilder sind typischerweise 26% kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animation: in einer verlustbehafteten WebP-Datei wird die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreie WebP-Dateien enthalten den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz repräsentiert. Looping wird unterstützt.

WebP hat nun breite Unterstützung in den neuesten Versionen der großen Webbrowser, obwohl es keine tief gehende historische Unterstützung gibt. Bieten Sie einen Rückfall auf entweder [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics)-Format, wie mit dem [`<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

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
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch für das <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden. Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Unterstützungseingabedaten.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16,383×16,383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftet speichert WebP das Bild im 8-Bit Y'CbCr 4:2:0 (YUV420) Format.
        Verlustfreie WebP verwendet 8-Bit ARGB-Farbe, wobei jede Komponente 8 Bits für insgesamt 32 Bits pro Pixel verwendet.
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
> Auf Safari für macOS hängt die WebP-Unterstützung sowohl von den Safari- als auch den macOS-Versionen ab. Sie benötigen Safari 14 oder später sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap file)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, sind jedoch nicht mehr in Gebrauch und sollten vermieden werden, da ihr Format potenzielle Sicherheitsbedenken aufweist. Moderne Browser unterstützen XBM-Dateien seit vielen Jahren nicht mehr, aber bei älteren Inhalten könnten Sie noch einige finden.

XBM verwendet einen Ausschnitt von C-Code, um die Inhalte des Bildes als ein Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe des Bitmaps (und optional den Hotspot, wenn das Bild als Cursor entworfen ist) sowie ein Array von `unsigned char`-Werten bereitzustellen. Jeder Wert enthält acht 1-Bit-Schwarzweiß-Pixel.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein. Zum Beispiel repräsentiert der folgende Code ein XBM-Bild, das 8 Pixel mal 8 Pixel groß ist, mit diesen Pixeln in einem Schwarz-Weiß-Schachbrettmuster:

```c
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

Das Auswählen des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als bei Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jede davon in der Regel eine spezifische Reihe von Anwendungsfällen hat.

### Fotografien

Fotografien kommen in der Regel gut mit verlustbehafteter Kompression zurecht (abhängig von der Konfiguration des Encoders). Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG kompatibler ist, WebP jedoch möglicherweise eine bessere Kompression bietet. Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie erwägen, beide [mit einem Fallback](#bereitstellung_von_bild-fallbacks) bereitzustellen, wobei WebP die erste Wahl ist und JPEG die zweite. Andernfalls ist JPEG die sichere Wahl für die Kompatibilität.

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

Für kleinere Bilder wie Symbole verwenden Sie ein verlustfreies Format, um den Verlust von Details in einem größenbegrenzten Bild zu vermeiden. Während verlustfreies WebP ideal für diesen Zweck ist, ist die Unterstützung noch nicht weit verbreitet, daher ist PNG eine bessere Wahl, es sei denn, Sie bieten einen [Fallback](#bereitstellung_von_bild-fallbacks) an. Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG mit seiner indizierten Kompressionsoption (PNG-8) oft noch kleiner komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, sollten Sie [SVG](#svg_scalable_vector_graphics) in Betracht ziehen, da es auf verschiedenen Auflösungen und Größen skaliert und somit perfekt für responsives Design geeignet ist. Obwohl die SVG-Unterstützung gut ist, kann es sinnvoll sein, für ältere Browser einen PNG-Fallback anzubieten.

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

Es sei denn, Sie sind bereit, bei der Qualität Kompromisse einzugehen, sollten Sie ein verlustfreies Format für Bildschirmfotos verwenden. Dies ist besonders wichtig, wenn in Ihrem Bildschirmfoto Text enthalten ist, da Text bei verlustbehafteter Kompression leicht unscharf und unklar wird.

PNG ist wahrscheinlich Ihre beste Wahl, aber verlustfreies WebP wird wahrscheinlich besser komprimiert sein.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>
        Verlustfreies WebP oder PNG;<br />JPEG, wenn Kompressionsartefakte kein
        Problem darstellen
      </td>
      <td>PNG oder JPEG;<br />GIF für Bildschirmfotos mit geringer Farbanzahl</td>
    </tr>
  </thead>
</table>

### Diagramme, Zeichnungen und Grafiken

Für jedes Bild, das mit Vektorgrafiken dargestellt werden kann, ist SVG die beste Wahl. Andernfalls sollten Sie ein verlustfreies Format wie PNG verwenden. Wenn Sie ein verlustbehaftetes Format wie JPEG oder verlustbehaftetes WebP wählen, achten Sie sorgfältig auf das Kompressionsniveau, um zu vermeiden, dass Text oder andere Formen unscharf oder unklar werden.

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

Während das Standard-HTML-{{HTMLElement("img")}}-Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut das {{HTMLElement("picture")}}-Element dies. `<picture>` wird als Umschlag für eine Anzahl von {{HTMLElement("source")}}-Elementen verwendet, von denen jedes eine Version des Bildes in einem anderen Format oder unter unterschiedlichen [Medienbedingungen](/de/docs/Web/CSS/@media) sowie ein `<img>`-Element angibt, das den Anzeigebereich des Bildes definiert und das Fallback auf die Standard- oder „am meisten kompatible“ Version.

Wenn Sie beispielsweise ein Diagramm anzeigen, das am besten mit SVG dargestellt wird, aber ein Fallback auf eine PNG oder GIF des Diagramms bieten möchten, würden Sie es so machen:

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

Sie können so viele `<source>`s angeben, wie Sie wünschen, allerdings benötigen Sie in der Regel nur 2 oder 3.

## Siehe auch

- [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}} und {{HTMLElement("picture")}} Elemente
- Die CSS {{cssxref("background-image")}} Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) Konstruktor und die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle

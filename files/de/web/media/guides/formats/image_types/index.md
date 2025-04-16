---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: e1c65e0d0a754820a823884e7d941004309c0c5c
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die üblicherweise von Webbrowsern unterstützt werden, und bieten Einblicke, die Ihnen helfen, die geeignetsten Formate für die Bilder auf Ihrer Website auszuwählen.

## Allgemeine Bilddateitypen

Die am häufigsten im Web verwendeten Bilddateiformate sind nachfolgend aufgelistet.

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
        Gute Wahl für verlustfreie Animationsserien (GIF ist weniger performant).
        AVIF und WebP bieten bessere Leistung, jedoch geringere Unterstützung durch Browser.<br />
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
          Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats.
          Bietet weitaus bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass beim Einsatz von AVIF Fallbacks zu Formaten mit besserer Browserunterstützung (z.B. Verwendung des <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>-Elements) eingebaut werden sollten.<br />
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
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indizierte Standbilder und erwägen Sie WebP, AVIF oder APNG für Animationsserien.<br />
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
          Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit die populärste).
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
          PNG wird JPEG vorgezogen für eine präzisere Reproduktion von Quellbildern oder wenn Transparenz benötigt wird. WebP/AVIF bieten noch bessere Kompression und Reproduktion, aber die Browserunterstützung ist begrenzter.<br />
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
        Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.
        WebP bietet eine weitaus bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine etwas bessere Kompression, wird jedoch nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF haben im Vergleich zu neueren Formaten wie WebP und AVIF eine schlechtere Leistung, aber genießen eine breitere "historische" Browser-Unterstützung. Die neueren Bildformate gewinnen an Beliebtheit, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web auftauchen, aber für Web-Inhalte vermieden werden sollten (in der Regel, weil sie entweder keine breite Browserunterstützung haben oder weil es bessere Alternativen gibt).

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
> Die Abkürzung für jedes Bildformat verlinkt zu einer ausführlicheren Beschreibung des Formats, seiner Fähigkeiten und detaillierten Informationen zur Browser-Kompatibilität (einschließlich der Versionen, die Unterstützung eingeführt haben und spezifische Spezialfunktionen, die später eingeführt wurden).

> [!NOTE]
> Safari 11.1 fügte die Möglichkeit hinzu, ein Videoformat als animierten GIF-Ersatz zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Fehlerbericht](https://crbug.com/791658) und im [Firefox-Fehlerbericht](https://bugzil.la/895131).

## Details zu Bilddateitypen

Die folgenden Abschnitte geben einen kurzen Überblick über jeden der von Webbrowsern unterstützten Bilddateitypen.

In den untenstehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die verwendet werden, um jede Farbkomponente darzustellen. Zum Beispiel zeigt eine RGB-Farbtiefe von 8 an, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. **Bittiefe** hingegen ist die Gesamtanzahl von Bits, die verwendet werden, um jedes Pixel im Speicher darzustellen.

### APNG (Animated Portable Network Graphics)

APNG ist ein von Mozilla eingeführtes Dateiformat, das den [PNG](#png_portable_network_graphics)-Standard erweitert, um Unterstützung für animierte Bilder hinzuzufügen. Es ist konzeptionell ähnlich zum animierten GIF-Format, das seit Jahrzehnten verwendet wird, jedoch leistungsfähiger, da es eine Vielzahl von [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit [indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG eignet sich ideal für grundlegende Animationen, die nicht mit anderen Aktivitäten oder mit einem Soundtrack synchronisiert werden müssen, wie Fortschrittsanzeigen, Aktivitäts-[Throbber](https://en.wikipedia.org/wiki/Throbber) und andere animierte Sequenzen. Beispielsweise ist APNG [eines der Formate, das bei der Erstellung von animierten Aufklebern](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichtenanwendung auf iOS) unterstützt wird. Sie werden auch häufig für die animierten Teile der Benutzeroberflächen von Webbrowsern verwendet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/apng</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
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
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
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
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Segment in der APNG-Datei enthalten ist; die Farben in der Palette haben alle eine 8-Bit-Tiefe.
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
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und die Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
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
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder später.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

Das AV1 Image File Format (AVIF) ist ein leistungsstarkes, quelloffenes, lizenzgebührenfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF) Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern in Webinhalten zu werden.
> Es bietet modernste Funktionen und Leistung, ohne die Kompliziertheit der Lizenz- und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videokommunikation über das Internet entwickelt wurde. Das Format profitiert von den bedeutenden Fortschritten in der Videokodierung in den letzten Jahren und könnte potenziell von der damit verbundenen Unterstützung für die Hardware-Rendering profitieren. Es hat jedoch auch Nachteile in manchen Fällen, da Video- und Bildkodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG für visuell ähnliche Komprimierungsstufen (z.B. sind verlustbehaftete AVIF-Bilder etwa 50% kleiner als JPEG-Bilder).
- Im Allgemeinen verfügt AVIF über eine bessere Kompression als WebP – medianen 50% gegenüber 30% Kompression für das gleiche JPG-Set (Quelle: [AVIF WebP Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Kompression.
- Animation/Mehrfachbildspeicherung (ähnlich wie animierte GIFs, aber mit viel besserer Kompression)
- Alpha-Kanal-Unterstützung (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für das Speichern von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Breiter Farbumfang: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt kein progressives Rendering, sodass Dateien vollständig heruntergeladen werden müssen, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf die Benutzererfahrung in der realen Welt, da AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und daher viel schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann dies jedoch signifikant werden und Sie sollten die Verwendung eines Formats in Betracht ziehen, das progressives Rendering unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe hat), sollten Sie einen Fallback im [WebP](#webp-bild)-, [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format bereitstellen, indem Sie [das `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder einen anderen Ansatz) verwenden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/avif</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
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
            Firefox 93 unterstützt Standbilder, mit Farbraum-Unterstützung sowohl für Voll- als auch für begrenzte Farbpalette, Bildtransformationen für Spiegelung und Drehung. Die Präferenz <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a> kann verwendet werden, um die Konformitätsstriktheit mit der Spezifikation anzupassen.
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
          Informationen zur Unterstützung von Farbmodi sind in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2 : Color config semantics, enthalten.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung ist:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Unterstützung von Graustufen: YUV400</li>
          <li>Bits: 8/10/12-bit</li>
          <li>Unterstützung von Alpha</li>
          <li>Unterstützung von ICC-Profilen</li>
          <li>
            NCLX-Unterstützung: sRGB, lineares sRGB, lineares Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3, etc.
          </li>
          <li>Unterstützung von Tiling</li>
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

### BMP (Bitmapdatei)

Der **BMP**-Dateityp (**Bitmap-Bild**) ist am häufigsten auf Windows-Computern anzutreffen und wird in Webanwendungen und -inhalten im Allgemeinen nur für spezielle Fälle verwendet.

> [!WARNING]
> Sie sollten im Allgemeinen vermeiden, BMP-Dateien für Website-Inhalte zu verwenden.
> Die häufigste Form von BMP-Datei stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu PNG- oder JPG-Bildtypen führt.
> Es existieren effizientere BMP-Formate, aber sie werden nicht weit verbreitet genutzt und selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl interner Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form von BMP-Datei ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Bytes belegt, die seine roten, grünen und blauen Komponenten repräsentieren, und jede Zeile mit `0x00`-Bytes auf ein Vielfaches von 4 Bytes Breite aufgefüllt ist.

Auch wenn andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht weit verbreitet verwendet und oft vollständig nicht implementiert. Diese Funktionen umfassen: Unterstützung für verschiedene Bit-Tiefen, indizierte Farben, Alphakanäle und verschiedene Pixelreihenfolgen (standardmäßig wird BMP von der unteren linken Ecke nach rechts und oben geschrieben, statt von der oberen linken Ecke nach rechts und unten).

Theoretisch werden mehrere Kompressionsalgorithmen unterstützt, und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format innerhalb der BMP-Datei gespeichert werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/bmp</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
      <td><code>.bmp</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        Keine Spezifikation; jedoch stellt Microsoft allgemeine Dokumentation des Formats bereit unter
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
                Jedes Pixel wird durch einen Wert dargestellt, der 2, 4 oder 8 Bits ist und als Index in die Farbtafel dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein spezifisches Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
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
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>;
        während Microsoft Patente gegen BMP hält, haben sie ein Versprechen veröffentlicht, sofern spezifische Bedingungen erfüllt sind, ihre Patentrechte nicht geltend zu machen.
        Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

Im Jahr 1987 führte der Online-Dienstleister CompuServe das Bilddateiformat **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes verwenden konnten. GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus, um 8-Bit-indexierte Farbgrafiken verlustfrei zu komprimieren. GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben (jeweils 8 Bits für Rot, Grün und Blau) dient. Die Länge einer Farbtafel ist immer eine Potenz von 2 (d.h. jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird allgemein [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, die jeweils ihre eigene Farbpalette haben, um echte Farbbilder zu erstellen, aber in der Praxis wird dies selten getan.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex ist als transparent festgelegt, in welchem Fall Pixel dieser Farbe vollständig transparent sind.

GIF unterstützt einfache Animationen, bei denen nach einem ersten Bild in voller Größe eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich bei jedem Frame ändern.

GIF ist seit Jahrzehnten aufgrund seiner Einfachheit und Kompatibilität äußerst populär. Seine Animationsunterstützung führte zu einer Wiederbelebung seiner Popularität im Zeitalter der sozialen Medien, als animierte GIFs weit verbreitet als kurze "Videos", Memes und andere einfache Animationssequenzen verwendet wurden.

Ein weiteres beliebtes Feature von GIF ist die Unterstützung von [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Pixelreihen außer der Reihe gespeichert werden, sodass teilweise empfangene Dateien in niedrigerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Konvertierung von Farbbildern zu GIF zu unbefriedigendem Dithering führen kann. Typischerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und sollte in Betracht ziehen, [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen zu verwenden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/gif</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
      <td><code>.gif</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">GIF87a Spezifikation</a><br /><a href="https://www.w3.org/Graphics/GIF/spec-gif89a.txt">GIF89a Spezifikation</a>
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
              <td>GIF unterstützt keine echten Farbpixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird als 8 Bits jeweils von Rot, Grün und Blau (24 Gesamtbits pro Pixel) definiert.
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
              <td>GIF unterstützt keine echten Farbpixel.</td>
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
        Während das GIF-Format selbst offen ist, war der LZW-Kompressionsalgorithmus bis Anfang der 2000er Jahre durch Patente abgedeckt. Ab dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO-Dateiformat (Microsoft Windows Icon) wurde von Microsoft für Desktop-Icons von Windows-Systemen entwickelt. Frühe Versionen des Internet Explorers führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei namens `favicon.ico` im Stammverzeichnis der Website bereitstellen konnte, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** zu spezifizieren — ein Symbol, das im Favoriten-Menü angezeigt werden sollte, ebenso wie an anderen Orten, wo eine ikonische Darstellung der Website nützlich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem Symbol auflistet. Nach dem Verzeichnis folgen die Daten für die Symbole. Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (inklusive Dateikopf) sein. Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG innerhalb von ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden. Zudem hat ihr Einsatz für Favicons zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements nachgelassen, wie im Bereich [Bereitstellung von Icons für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

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
      <th scope="row">Dateiendung(en)</th>
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
                Jedes Pixel wird durch drei Werte repräsentiert, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der 2, 4 oder 8 Bits ist, und als Index in die Farbtafel dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein spezifisches Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte repräsentiert, die die roten, grünen, blauen und alpha Farbkomponenten darstellen; jeder ist <em>D</em> Bits.
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
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
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
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>-Segment in der APNG-Datei enthalten ist; die Farben in der Palette haben alle eine 8-Bit-Tiefe.
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
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und die Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        BMP-Format-Symbole verwenden fast immer verlustfreie Kompression, jedoch sind verlustbehaftete Methoden verfügbar. PNG-Symbole werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group Bild)

Das {{Glossary("JPEG", "JPEG")}} (normalerweise ausgesprochen "**jay-peg**") Bildformat ist derzeit das am weitesten verbreitete verlustbehaftete Kompressionsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Kompression auf Inhalte, die Schärfe erfordern, wie Diagramme oder Charts, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist eigentlich ein Datenformat für komprimierte Fotos, anstatt eines Dateityps. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat) Spezifikation beschreibt das Format der Dateien, die wir als "JPEG" Bilder betrachten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
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
              <td>Wahre Graustufen können mit dem einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, von denen jede 8 Bits ist.
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
        Verlustbehaftet; basiert auf der <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">Diskreten Kosinustransformation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Ab dem 27. Oktober 2006 sind alle US-Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Kompression und unterstützt höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) und ist effizienter, ebenso wie eine vollständige Unterstützung für Alphakanal-Transparenz.

PNG ist weit verbreitet unterstützt, mit allen großen Browsern, die vollständige Unterstützung für seine Funktionen bieten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/png</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
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
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt,
                die den Pegel der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem
                <code><a href="https://www.w3.org/TR/PNG/#11PLTE">PLTE</a></code>
                Segment in der APNG-Datei enthalten ist; die Farben in der Palette haben alle eine 8-Bit-Tiefe.
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
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und die Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
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
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marke</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentnutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierung</a> Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein {{Glossary("XML", "XML")}}-basiertes [Vektorgrafik](https://en.wikipedia.org/wiki/Vector_graphics)-Format, das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen spezifiziert, die Formen, Linien zeichnen und Farben, Filter usw. anwenden. SVG-Dateien sind ideal für Diagramme, Icons und andere Bilder, die in jeder Größe genau gezeichnet werden können. Als solches ist SVG in modernen Webdesigns für Benutzeroberflächenelemente populär.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der beim Interpretieren das gewünschte Bild zeichnet. Zum Beispiel definiert dieses Beispiel einen Zeichenbereich mit einer anfänglichen Größe von 100 x 100 Einheiten, der eine diagonale Linie durch das Rechteck enthält:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann auf drei Arten in Webinhalten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt innerhalb des HTML erscheinen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, um das Bild zu zeichnen.
2. Ein SVG-Bild kann in HTML mithilfe von Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} eingebettet werden.
3. Es ist möglich, SVG-Bilder überall dort zu verwenden, wo auch andere Bildtypen verwendet werden können, einschließlich mit dem {{HTMLElement("img")}}-Element, der {{cssxref("background-image")}}-CSS-Eigenschaft und so weiter. Es gibt jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image), wenn SVG auf diese Weise verwendet wird.

SVG ist eine ideale Wahl für Bilder, die mit einer Reihe von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, in der das Bild dargestellt wird, unbekannt oder variabel sein kann, da SVG reibungslos auf die gewünschte Größe skaliert. Es ist im Allgemeinen nicht nützlich für strikt bitmapartige oder fotografische Bilder, auch wenn es möglich ist, Bitmap-Bilder innerhalb eines SVG einzuschließen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/svg+xml</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
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
        SVG-Quellen können während des Transports mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Kompressionstechniken</a> komprimiert werden oder auf der Festplatte als <code>.svgz</code>-Datei gespeichert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marke</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentnutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a> Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafiken-Dateiformat, das erstellt wurde, um gescannte Fotos zu speichern, obwohl es jede Art von Bild sein kann. Es ist ein etwas "schweres" Format, da TIFF-Dateien dazu neigen, größer zu sein als Bilder in anderen Formaten. Dies liegt an den oft enthaltenen Metadaten sowie der Tatsache, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Kompressionsalgorithmen verwenden, die nach der Kompression immer noch relativ große Dateien zurücklassen.

TIFF unterstützt eine Vielzahl von Kompressionsmethoden, aber die am häufigsten verwendeten sind die CCITT Gruppe 4 (und für ältere Faxsysteme Gruppe 3) Kompressionssysteme, die von Faxsoftware verwendet werden, sowie LZW und verlustbehaftete JPEG-Kompression.

Jeder Wert in einer TIFF-Datei wird anhand seines **Tags** (anzeigend, welche Art von Information es ist, wie die Breite des Bildes) und seines **Typs** (anzeigend, in welchem Format die Daten gespeichert sind), gefolgt von der Länge des Arrays von Werten, die diesem Tag zugewiesen werden sollen, angegeben (alle Eigenschaften werden in Arrays gespeichert, auch für einzelne Werte). Dies erlaubt die Verwendung unterschiedlicher Datentypen für dieselben Eigenschaften. Zum Beispiel wird die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` gespeichert und ist ein Array mit einem Eintrag. Durch die Spezifikation von Typ 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Die Spezifikation des Typs 4 (`LONG`) speichert die Breite als 32-Bit-Wert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um mehrseitige Dokumente darzustellen, zum Beispiel (wie ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax). Software zum Lesen von TIFF-Dateien muss jedoch nur das erste Bild unterstützen.

TIFF unterstützt eine Vielfalt von Farbräumen, nicht nur RGB. Diese schließen CMYK, YCbCr und andere ein, was TIFF zu einer guten Wahl für das Speichern von Bildern macht, die für Druck-, Film- oder Fernsehmedien bestimmt sind.

Abgesehen von Safari unterstützen Browser TIFF-Bilder in Webinhalten nicht nativ, außer durch spezielle Bibliotheken oder Browser-Add-ons. Als solches werden TIFF-Dateien nicht weit verbreitet verwendet, um Webinhalte anzuzeigen, _aber_ es ist üblich, herunterladbare TIFF-Dateien zur Verfügung zu stellen, wenn Fotos und andere Kunstwerke, die für präzise Bearbeitung oder Druck bestimmt sind, verteilt werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
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
                Ein bilevel TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel.
                Das <code>PhotometricInterpretation</code>-Feld gibt an, welche von 0 und 1 schwarz und welche weiß ist.
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
                Alle echten RGB-Farbbilder werden mit jeweils 8 Bits Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in ein <code>ColorMap</code>-Verzeichnis, das die im Bild verwendeten Farben definiert. Die Farbkarte listet alle roten Werte, dann alle grünen Werte, dann alle blauen Werte auf (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alphainformationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld gibt, und die Art des Alpha angegeben wird (1 für eine verbundene, vorab multiplizierte Alpha-Komponente und 2 für unverbundenes Alpha - eine separate Matte); Alphakanäle werden jedoch selten in TIFF-Dateien verwendet und können von der Software des Benutzers nicht unterstützt werden.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8</td>
              <td>
                Alphainformationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld gibt, und die Art des Alpha angegeben wird (1 für eine verbundene, vorab multiplizierte Alpha-Komponente und 2 für unverbundenes Alpha - eine separate Matte); Alphakanäle werden jedoch selten in TIFF-Dateien verwendet und können von der Software des Benutzers nicht unterstützt werden.
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
        Keine Lizenz erforderlich (abgesehen von den mit Bibliotheken verbundenen); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Kompression durch prädiktives Codieren, das auf dem VP8-Videocodec basiert, und verlustfreie Kompression, die Substitutionen für wiederkehrende Daten verwendet. Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35% kleiner als JPEG-Bilder mit visuell ähnlichen Komprimierungsstufen. Verlustfreie WebP-Bilder sind typischerweise 26% kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animationen: In einer verlustbehafteten WebP-Datei wird das Bild durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreies WebP hält das `ANIM`-Segment, das die Animation beschreibt, und das `ANMF`-Segment, das einen Frame einer Animationssequenz darstellt. Looping wird unterstützt.

WebP hat nun breite Unterstützung in den neuesten Versionen der wichtigsten Webbrowser, obwohl es keine tiefgreifende historische Unterstützung gibt. Bieten Sie einen Fallback in entweder [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format an, wie beispielsweise mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/webp</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
      <td><code>.webp</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <p>
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF Container Spezifikation</a><br />{{RFC(6386, "VP8 Data Format und Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Verlustfreie Bitstream Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch zum <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden. Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Supportversionsinformationen.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16,383×16,383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit Y'CbCr 4:2:0 (YUV420)-Format.
        Verlustfreies WebP verwendet 8-Bit ARGB-Farbe, mit jeder Komponente, die 8 Bits für insgesamt 32 Bits pro Pixel belegt.
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
> Auf Safari für macOS hängt die WebP-Unterstützung von sowohl der Safari- als auch der macOS-Version ab. Sie benötigen Safari 14 oder später sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, jedoch werden sie nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsbedenken birgt. Moderne Browser haben XBM-Dateien viele Jahre lang nicht unterstützt, aber wenn man mit älteren Inhalten umgeht, könnten einige immer noch vorhanden sein.

XBM verwendet einen Ausschnitt von C-Code, um den Inhalt des Bildes als ein Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe des Bitmaps (und optional den Hotspot, wenn das Bild als Cursor ausgelegt ist) angeben, gefolgt von einem Array von `unsigned char`, wobei jeder Wert 8 1-Bit-monochrome Pixel enthält.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein. Zum Beispiel stellt der folgende Code ein XBM-Bild dar, das 8 Pixel mal 8 Pixel groß ist, mit diesen Pixeln in einem schwarz-weißen Schachbrettmuster:

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
      <th scope="row">Dateiendung(en)</th>
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

Die Wahl des besten Bildformats ist wahrscheinlich einfacher als die Wahl von Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jedes eine spezifische Reihe von Anwendungsfällen hat.

### Fotografien

Fotografien kommen typischerweise gut mit verlustbehafteter Kompression (abhängig von der Konfiguration des Encoders) zurecht. Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG kompatibler ist, WebP jedoch möglicherweise eine bessere Kompression bietet. Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie in Erwägung ziehen, beide [mit einem Fallback anzubieten](#bereitstellung_von_bild-fallbacks) und WebP als erste Wahl und JPEG als zweite zu verwenden. Andernfalls ist JPEG die sichere Wahl für Kompatibilität.

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

Für kleinere Bilder wie Symbole sollten Sie ein verlustfreies Format verwenden, um Detailverluste in einem größenbeschränkten Bild zu vermeiden. Während verlustfreies WebP ideal für diesen Zweck ist, ist die Unterstützung noch nicht weit verbreitet, daher ist PNG die bessere Wahl, es sei denn, Sie bieten ein [Fallback](#bereitstellung_von_bild-fallbacks) an. Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG mit seiner indizierten Kompressionsoption (PNG-8) oft noch kleiner komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, ziehen Sie [SVG](#svg_scalable_vector_graphics) in Betracht, da es sich über verschiedene Auflösungen und Größen skaliert und somit perfekt für responsives Design geeignet ist. Obwohl die SVG-Unterstützung gut ist, kann es sinnvoll sein, ein PNG-Fallback für ältere Browser anzubieten.

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

Wenn Sie keine Kompromisse bei der Qualität eingehen möchten, sollten Sie für Screenshots ein verlustfreies Format verwenden. Dies ist besonders wichtig, wenn in Ihrem Screenshot Text enthalten ist, da dieser bei verlustbehafteter Kompression leicht unscharf und unklar wird.

PNG ist wahrscheinlich Ihre beste Wahl, aber verlustfreies WebP wird wahrscheinlich besser komprimiert.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>
        Verlustfreies WebP oder PNG;<br />JPEG, wenn Kompressionsartefakte kein
        Problem sind
      </td>
      <td>PNG oder JPEG;<br />GIF für Screenshots mit niedrigen Farbanzahlen</td>
    </tr>
  </thead>
</table>

### Diagramme, Zeichnungen und Grafiken

Für jedes Bild, das mit Vektorgrafiken dargestellt werden kann, ist SVG die beste Wahl. Andernfalls sollten Sie ein verlustfreies Format wie PNG verwenden. Wenn Sie sich für ein verlustbehaftetes Format wie JPEG oder verlustbehaftetes WebP entscheiden, wägen Sie sorgfältig den Kompressionsgrad ab, um zu vermeiden, dass Text oder andere Formen unscharf oder unklar werden.

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

Während das standardmäßige HTML-Element {{HTMLElement("img")}} keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut das {{HTMLElement("picture")}} Element dies. `<picture>` wird als Wrapper für eine Reihe von {{HTMLElement("source")}} Elementen verwendet, von denen jedes eine Version des Bildes in einem anderen Format oder unter anderen [Medienbedingungen](/de/docs/Web/CSS/@media) angibt, sowie ein `<img>` Element, das definiert, wo das Bild angezeigt und auf die Standard- oder "am meisten kompatible" Version zurückgefallen werden soll.

Wenn Sie beispielsweise ein Diagramm anzeigen möchten, das am besten mit SVG dargestellt wird, aber ein Fallback zu einem PNG oder GIF des Diagramms anbieten möchten, würden Sie dies wie folgt tun:

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

Sie können so viele `<source>`s angeben, wie Sie wünschen, obwohl typischerweise 2 oder 3 ausreichen.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}} und {{HTMLElement("picture")}} Elemente
- Die CSS-Eigenschaft {{cssxref("background-image")}}
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) Konstruktor und die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle

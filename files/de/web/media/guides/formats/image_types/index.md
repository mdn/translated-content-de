---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: 8e220b25b3289597c721eecdee788bd4d936c535
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die allgemein von Webbrowsern unterstützt werden, und geben Einblicke, die Ihnen bei der Auswahl der am besten geeigneten Formate für die Bilder Ihrer Website helfen.

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
        Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant).
        AVIF und WebP bieten eine bessere Performance, aber eine weniger breite Browserunterstützung.<br />
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
          Beachten Sie, dass bei der Verwendung von AVIF Rückfälle auf Formate mit besserer Browserunterstützung eingebaut werden sollten (d.h. mit dem <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>-Element).<br />
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
          PNG wird gegenüber JPEG bevorzugt für eine genauere Wiedergabe von Quellbildern oder wenn Transparenz benötigt wird. WebP/AVIF bieten eine noch bessere Kompression und Wiedergabe, aber die Browserunterstützung ist begrenzter.<br />
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
        Vektorbildformat; ideal für Benutzeroberflächeselemente, Symbole, Diagramme usw., die in unterschiedlichen Größen genau gezeichnet werden müssen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_image">WebP</a></th>
      <th scope="row">Web Picture Format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Hervorragende Wahl für Bilder und animierte Bilder.
        WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine etwas bessere Kompression, ist jedoch nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF haben im Vergleich zu neueren Formaten wie WebP und AVIF eine schlechte Leistung, genießen jedoch eine breitere "historische" Browserunterstützung. Die neueren Bildformate gewinnen an Popularität, da Browser ohne Unterstützung immer irrelevanter werden (d.h. praktisch keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web erscheinen, jedoch für Webinhalte vermieden werden sollten (in der Regel weil sie entweder keine breite Browserunterstützung haben oder weil es bessere Alternativen gibt).

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
> Die Abkürzung für jedes Bildformat verlinkt zu einer längeren Beschreibung des Formats, seiner Fähigkeiten und detaillierten Browser-Kompatibilitätsinformationen (einschließlich der Versionen, die Unterstützung eingeführt haben und spezielle Funktionen, die möglicherweise später hinzugefügt wurden).

> [!NOTE]
> Safari 11.1 hat die Möglichkeit hinzugefügt, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Siehe den [Chromium-Bug](https://crbug.com/791658) und den [Firefox-Bug](https://bugzil.la/895131) für weitere Informationen.

## Details zu Bilddateitypen

Die folgenden Abschnitte bieten einen kurzen Überblick über jeden der von Webbrowsern unterstützten Bilddateitypen.

In den untenstehenden Tabellen bezieht sich der Begriff **bits per component** auf die Anzahl der Bits, die zum Darstellen jeder Farbkomponente verwendet werden. Beispielsweise weist eine RGB-Farbtiefe von 8 darauf hin, dass jede der Rot-, Grün- und Blaukomponenten durch einen 8-Bit-Wert dargestellt wird. Die **Farbtiefe** bezieht sich hingegen auf die Gesamtanzahl der Bits, die für die Darstellung jedes Pixels im Speicher verwendet werden.

### APNG (Animated Portable Network Graphics)

APNG ist ein Dateiformat, das zuerst von Mozilla eingeführt wurde und den [PNG](#png_portable_network_graphics)-Standard erweitert, indem es Unterstützt für animierte Bilder hinzufügt. Konzeptuell ähnlich dem animierten GIF-Format, das seit Jahrzehnten in Gebrauch ist, ist APNG leistungsfähiger, da es eine Vielzahl von [Farb-Tiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit [indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG eignet sich ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einem Soundtrack synchronisiert werden müssen, wie z. B. Fortschrittsanzeigen, Aktivitäts-Throbber und andere animierte Sequenzen. Zum Beispiel ist APNG [eines der Formate, die beim Erstellen von animierten Stickern](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichten-Anwendung auf iOS) unterstützt werden. Sie werden auch häufig für die animierten Teile von Webbrowser-Benutzeroberflächen verwendet.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/apng</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
      <td><code>.apng</code>, <code>.png</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://w3c.github.io/png/#apng-frame-based-animation">W3C PNG Specification</a>
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
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Pegel der Rot-, Grün- und Blau-Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der auf eine Farbpalette verweist, die innerhalb eines <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Blocks in der APNG-Datei enthalten ist; die Farben der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufen-Pixels und eine Alpha-Komponente, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Komponente, die angibt, wie undurchsichtig das Pixel ist.
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

AV1 Image File Format (AVIF) ist ein leistungsfähiges, quelloffenes, gebührenfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF)-Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern im Web zu werden.
> Es bietet erstklassige Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzierung und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde. Das Format profitiert von den signifikanten Fortschritten in der Video-Kodierung in den letzten Jahren und könnte potenziell von der damit verbundenen Unterstützung für Hardware-Rendering profitieren. Es hat jedoch auch Nachteile in einigen Fällen, da Video- und Bildkodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG bei visuell ähnlichen Kompressionsstufen (z. B. sind verlustbehaftete AVIF-Bilder etwa 50% kleiner als JPEG-Bilder).
- Im Allgemeinen hat AVIF eine bessere Kompression als WebP — median 50% vs. 30% Kompression für das gleiche JPG-Set (Quelle: [AVIF WebP Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Kompression.
- Animation/Speicherung mehrerer Bilder (ähnlich wie animierte GIFs, jedoch mit weit besserer Kompression).
- Unterstützung des Alpha-Kanals (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für das Speichern von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Breites Farbgamut: Unterstützung für Bilder, die eine größere Farbpalette enthalten können.

AVIF unterstützt kein progressives Rendering, sodass Dateien vollständig heruntergeladen werden müssen, bevor sie angezeigt werden können. Dies hat in der Regel wenig Auswirkungen auf die reale Benutzererfahrung, da AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und daher schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann der Einfluss jedoch signifikant werden und Sie sollten in Erwägung ziehen, ein Format zu verwenden, das progressives Rendering unterstützt.

AVIF wird von Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe aufweist), sollten Sie einen Rückfall auf [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format bereitstellen, indem Sie [das `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder eine andere Herangehensweise) verwenden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/avif</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
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
            Firefox 93 unterstützt Standbilder mit Unterstützung des Farbraums sowohl für Farben mit vollem als auch mit eingeschränktem Bereich, Bildtransformationen zur Spiegelung und Drehung. Die Einstellung <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            kann verwendet werden, um die Einhaltung der Spezifikationen anzupassen.
          </li>
          <li>
            Firefox 113 und spätere unterstützen animierte Bilder.
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
          Informationen zur Unterstützung von Farbmodi sind in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2 : Semantik der Farbkonfiguration enthalten.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung ist:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12-Bit</li>
          <li>Alpha-Unterstützung</li>
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
        Lizenzfrei. Lizenzinformationen sind verfügbar unter <a href="https://aomedia.org/license/">Lizenzseite</a>.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Datei)

Der **BMP** (**Bitmap Image**) Dateityp ist am weitesten verbreitet auf Windows-Rechnern und wird im Allgemeinen nur für Sonderfälle in Webanwendungen und -inhalten verwendet.

> [!WARNING]
> Der Einsatz von BMP-Dateien für Website-Inhalte sollte in der Regel vermieden werden. Die gängigste Form von BMP-Dateien stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu png- oder jpg-Bildtypen führt. Effizientere BMP-Formate existieren, werden aber nicht weit verbreitet verwendet und selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl von internen Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form von BMP-Dateien ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Byte belegt, die die Rot-, Grün- und Blaukomponenten darstellen, und jede Zeile mit `0x00`-Bytes aufgefüllt wird, um ein Vielfaches von 4 Byte breit zu sein.

Obwohl andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht weit verbreitet verwendet und sind oft völlig unimplementiert. Diese Funktionen umfassen: Unterstützung für unterschiedliche Farbtiefen, indizierte Farbdarstellung, Alpha-Kanäle und unterschiedliche Pixel-Ordnungen (Standardmäßig wird BMP von der unteren linken Ecke nach rechts und oben geschrieben, anstatt von der oberen linken Ecke nach rechts und unten).

Theoretisch werden mehrere Komprimierungsalgorithmen unterstützt, und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format innerhalb der BMP-Datei gespeichert werden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/bmp</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
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
                Jedes Pixel wird durch drei Werte dargestellt, die die Rot-, Grün- und Blau-Farbkomponenten repräsentieren; jeder <em>D</em>-Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der aus 2, 4 oder 8 Bits besteht und als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte repräsentiert, die die Rot-, Grün-, Blau- und Alpha-Farbkomponenten darstellen; jede <em>D</em>-Bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Mehrere Komprimierungsmethoden werden unterstützt, einschließlich verlustbehafteter oder verlustfreier Algorithmen
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>;
        während Microsoft Patente gegen BMP hält, haben sie versprochen, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Das ist jedoch nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

Im Jahr 1987 stellte der Online-Dienstanbieter CompuServe das **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) Bilddateiformat vor, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes nutzen können. GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW) Algorithmus zur verlustfreien Kompression von 8-Bit indizierten Farbgrafiken. GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert repräsentiert, der als Index in eine Palette von 24-Bit-Farben (je 8 Bit für Rot, Grün und Blau) dient. Die Länge einer Farbtabelle ist immer eine Zweierpotenz (d.h. jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird allgemein [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, von denen jeder seine eigene Farbpalette enthält, um echte Farbbilder zu erstellen, aber in der Praxis wird dies selten getan.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent bezeichnet, in diesem Fall sind Pixel in dieser Farbe vollständig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem anfänglichen Vollbildrahmen eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Frame ändern.

GIF ist aufgrund seiner Einfachheit und Kompatibilität seit Jahrzehnten enorm beliebt. Seine Animationsunterstützung führte zu einem Comeback in der Ära der sozialen Medien, als animierte GIFs weit verbreitet für kurze "Videos", Memes und andere einfache Animationssequenzen verwendet wurden.

Ein weiteres populäres Merkmal von GIF ist die Unterstützung von [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Zeilen von Pixeln aus der Reihe gespeichert werden, sodass teilweise empfangene Dateien in niedrigerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzwerkverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung von Vollfarbenbildern in GIF zu unbefriedigendem Dithering führen kann. Normalerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und sollte in Erwägung ziehen, [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen zu verwenden.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/gif</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
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
              <td>GIF unterstützt keine True-Color-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette ist als 8 Bit für Rot, Grün und Blau definiert (insgesamt 24 Bits pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein dediziertes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine True-Color-Pixel.</td>
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
        Während das GIF-Format selbst offen ist, war der LZW-Kompressionsalgorithmus bis in die frühen 2000er Jahren durch Patente geschützt.
        Ab dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO (Microsoft Windows Icon)-Dateiformat wurde von Microsoft für Desktop-Symbole von Windows-Systemen entwickelt. Frühere Versionen des Internet Explorers ermöglichten jedoch einer Website, eine ICO-Datei namens `favicon.ico` im Stammverzeichnis einer Website bereitzustellen, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** anzugeben — ein Symbol, das im Favoritenmenü und an anderen Stellen angezeigt wird, wo eine ikonische Darstellung der Website nützlich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem Symbol auflistet. Nach dem Verzeichnis kommen die Daten für die Symbole. Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne die Dateikopfzeile oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild sein (einschließlich der Dateikopfzeile). Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG in ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden. Darüber hinaus hat ihre Nutzung für Favicons nachgelassen zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements, wie beschrieben in [Bereitstellung von Symbolen für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts).

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
      <th scope="row">Dateierweiterungen</th>
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
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die Rot-, Grün- und Blau-Farbkomponenten repräsentieren; jeder <em>D</em>-Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der aus 2, 4 oder 8 Bits besteht und als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte repräsentiert, die die Rot-, Grün-, Blau- und Alpha-Farbkomponenten darstellen; jede <em>D</em>-Bits.
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
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Pegel der Rot-, Grün- und Blau-Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der auf eine Farbpalette verweist, die innerhalb eines <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Blocks in der APNG-Datei enthalten ist; die Farben der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufen-Pixels und eine Alpha-Komponente, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Komponente, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        BMP-Formatikonen verwenden nahezu immer verlustfreie Kompression, aber verlustbehaftete Methoden sind verfügbar. PNG-Ikonen werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group Bild)

Das {{Glossary("JPEG", "JPEG")}} (typischerweise ausgesprochen als "**jay-peg**") Bildformat ist derzeit das am weitesten verbreitete verlustbehaftete Komprimierungsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Komprimierung auf Inhalte, die Schärfe erfordern, wie Diagramme oder Grafiken, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist tatsächlich ein Datenformat für komprimierte Fotos und nicht ein Dateityp. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat)-Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder betrachten.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/jpeg</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
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
              <td>Echte Graustufen können mit dem einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die Rot-, Blau- und Grünkomponenten beschrieben, von denen jede 8 Bits hat.
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
      <td>Ab dem 27. Oktober 2006 sind alle Patente in den Vereinigten Staaten abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Komprimierung, unterstützt höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) und ist effizienter, während es vollständige Alpha-Transparenz unterstützt.

PNG ist weit verbreitet und wird von allen gängigen Browsern vollständig unterstützt.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/png</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
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
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte
                dargestellt, die den Pegel der Rot-, Grün-, und Blau-Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der auf eine Farbpalette verweist, die innerhalb eines
                <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>
                Blocks in der APNG-Datei enthalten ist; die Farben der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die
                Intensität des Graustufen-Pixels und eine Alpha-Komponente, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Komponente, die angibt, wie undurchsichtig das Pixel ist.
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
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierungsregeln</a> gelten. Keine bekannten patentierten Lizenzgebühren.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein {{Glossary("XML", "XML")}}-basiertes [Vektorgrafik](https://en.wikipedia.org/wiki/Vector_graphics)-Format, das den Inhalt eines Bildes als eine Reihe von Zeichenkommandos angibt, die Formen und Linien erzeugen, Farben, Filter usw. anwenden. SVG-Dateien eignen sich ideal für Diagramme, Symbole und andere Bilder, die in beliebiger Größe präzise gezeichnet werden können. Als solches ist SVG beliebt für Benutzeroberflächenelemente in modernem Webdesign.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der bei der Interpretation das gewünschte Bild zeichnet. Beispielsweise definiert dieses Beispiel einen Zeichenbereich mit einer Anfangsgröße von 100 mal 100 Einheiten, der eine Linie enthält, die diagonal durch das Kästchen verläuft:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann auf drei Arten in Webinhalten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt im HTML erscheinen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, um das Bild zu zeichnen.
2. Ein SVG-Bild kann in HTML mit Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} eingebettet werden.
3. Es ist möglich, SVG-Bilder überall dort zu verwenden, wo andere Bildtypen verwendet werden können, einschließlich mit dem {{HTMLElement("img")}}-Element, der {{cssxref("background-image")}} CSS-Eigenschaft und so weiter. Jedoch gibt es [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image), wenn SVG auf diese Weise verwendet wird.

SVG ist eine ideale Wahl für Bilder, die mit einer Reihe von Zeichenkommandos dargestellt werden können, insbesondere wenn die Größe, in der das Bild gerendert wird, unbekannt ist oder variieren kann, da SVG sich glatt in die gewünschte Größe skaliert. Es ist im Allgemeinen nicht nützlich für rein bitmap- oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb eines SVGs einzufügen.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/svg+xml</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
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
      <td>
        Farben in SVG werden mit
        <a href="/de/docs/Web/CSS/color_value">CSS-Farbsyntax</a> angegeben.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        SVG-Quellcode kann während des Transports mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Komprimierung</a>-Techniken komprimiert werden oder als <code>.svgz</code>-Datei auf der Festplatte.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Markenrecht</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierungsregeln</a> gelten. Keine bekannten Lizensgebühren-pflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafik-Dateiformat, das entwickelt wurde, um gescannte Fotos zu speichern, obwohl es für jede Art von Bild verwendet werden kann. Es ist ein etwas „schweres“ Format, da TIFF-Dateien dazu neigen, größer zu sein als Bilder in anderen Formaten. Dies liegt an den oft enthaltenen Metadaten sowie der Tatsache, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Komprimierungsalgorithmen verwenden, die trotz Komprimierung recht große Dateien hinterlassen.

TIFF unterstützt verschiedene Komprimierungsmethoden, wobei die am häufigsten verwendeten die CCITT Group 4 (und für ältere Faxgeräte Group 3) Kompressionssysteme sind, die von Faxsoftware verwendet werden, sowie LZW und verlustbehaftete JPEG-Komprimierung.

Jeder Wert in einer TIFF-Datei ist durch seinen **Tag** (der angibt, um welche Art von Information es sich handelt, wie die Breite des Bildes) und seinen **Typ** (der angibt, in welchem Format die Daten gespeichert sind) spezifiziert, gefolgt von der Länge des Arrays von Werten, die diesem Tag zugeordnet werden (alle Eigenschaften werden in Arrays gespeichert, auch bei einzelnen Werten). Dies ermöglicht die Verwendung verschiedener Datentypen für dieselben Eigenschaften. Beispielweise wird die Breite eines Bildes, `ImageWidth`, unter Verwendung des Tags `0x0100` gespeichert und ist ein Array mit einem Eintrag. Durch die Angabe des Typs 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Wenn Typ 4 (`LONG`) angegeben wird, wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um mehrseitige Dokumente darzustellen, wie z. B. ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax. Software, die TIFF-Dateien liest, muss nur das erste Bild unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB. Diese umfassen CMYK, YCbCr und andere, was TIFF zu einer guten Wahl für die Speicherung von Bildern macht, die für den Druck, Film oder Fernsehmedien bestimmt sind.

Mit Ausnahme von Safari unterstützen Browser TIFF-Bilder nicht nativ in Webinhalten, außer durch spezielle Bibliotheken oder Browser-Add-ons. Daher werden TIFF-Dateien nicht breit genutzt, um Webinhalte anzuzeigen, _aber_ es ist üblich, herunterladbare TIFF-Dateien bereitzustellen, wenn Fotos und andere Kunstwerke verteilt werden, die zur präzisen Bearbeitung oder zum Drucken bestimmt sind.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/tiff</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
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
                Ein bilevel TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel.
                Das <code>PhotometricInterpretation</code>-Feld gibt an, welcher von 0 und 1 schwarz und welcher weiß ist.
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
              <th scope="row">True Color</th>
              <td>8</td>
              <td>
                Alle echten RGB-Farb-Bilder werden mit 8 Bits für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in ein <code>ColorMap</code>-Rekord, das die im Bild verwendeten Farben definiert.
                Die Farbkarte listet zunächst alle Rotwerte auf, dann alle Grünwerte und dann alle Blauwerte (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Samples pro Pixel im <code>SamplesPerPixel</code>-Feld gibt, und die Art der Alpha (1 für eine verbundene, vorab multiplizierte Alphakomponente und 2 für unverbundene Alpha - eine separate Matte) angegeben wird; jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und möglicherweise nicht von der Software des Benutzers unterstützt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Samples pro Pixel im <code>SamplesPerPixel</code>-Feld gibt, und die Art der Alpha (1 für eine verbundene, vorab multiplizierte Alphakomponente und 2 für unverbundene Alpha - eine separate Matte) angegeben wird; jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und möglicherweise nicht von der Software des Benutzers unterstützt.
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
        Keine Lizenz erforderlich (außer bei Bibliotheken, die Sie möglicherweise verwenden); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Kompression über prädiktive Kodierung basierend auf dem VP8-Video-Codec und verlustfreie Kompression, die Ersetzungen für sich wiederholende Daten verwendet. Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35% kleiner als JPEG-Bilder mit visuell ähnlichen Kompressionsstufen. Verlustfreie WebP-Bilder sind in der Regel 26% kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animationen: In einer verlustbehafteten WebP-Datei wird das Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreie WebP-Datei enthält den `ANIM`-Block, der die Animation beschreibt, und den `ANMF`-Block, der einen Frame einer Animationssequenz darstellt. Schleifen werden unterstützt.

WebP hat mittlerweile breite Unterstützung in den neuesten Versionen der wichtigsten Webbrowser, obwohl es nicht über eine tiefe historische Unterstützung verfügt. Sorgen Sie für einen Rückfall entweder im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format, zum Beispiel mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/webp</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterungen</th>
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
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch zum <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden.
        Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Unterstützungsversion Information.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit-Y'CbCr 4:2:0 (YUV420) Format.
        Verlustfreies WebP verwendet 8-Bit ARGB-Farbe, wobei jede Komponente 8 Bits für insgesamt 32 Bits pro Pixel verwendet.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustfrei (Huffman, LZ77 oder Farb-Cache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; Quellcode ist offen verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Safari für macOS hängt die WebP-Unterstützung von den Versionen von Safari und macOS ab. Sie benötigen Safari 14 oder neuer sowie macOS Big Sur (11) oder eine aktuellere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap)-Dateien wurden zuerst für das Web unterstützt, werden aber nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsprobleme hat. Moderne Browser haben XBM-Dateien seit vielen Jahren nicht mehr unterstützt, aber wenn Sie mit älterem Inhalt zu tun haben, könnten Sie auf einige stoßen.

XBM verwendet ein Snippet von C-Code, um den Inhalt des Bildes als ein Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe der Bitmap (und optional den Hotspot, wenn das Bild als Cursor gedacht ist) bereitstellen, gefolgt von einem Array von `unsigned char`, von denen jeder Wert acht 1-Bit monochrome Pixel enthält.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein. Zum Beispiel stellt der folgende Code ein XBM-Bild dar, das 8 Pixel mal 8 Pixel ist, mit diesen Pixeln in einem schwarz-weißen Schachbrettmuster:

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
      <th scope="row">Dateierweiterungen</th>
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

Die Wahl des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als die Wahl von Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jedes tendenziell einen spezifischen Anwendungsbereich hat.

### Fotografien

Fotografien eignen sich typischerweise gut für verlustbehaftete Komprimierung (abhängig von der Konfiguration des Encoders). Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG kompatibler ist, WebP jedoch möglicherweise eine bessere Komprimierung bietet. Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie in Erwägung ziehen, beide [mit einem Fallback](#bereitstellung-von-bild-fallbacks) anzubieten, wobei WebP die erste Wahl und JPEG die zweite ist. Andernfalls ist JPEG die sichere Wahl für die Kompatibilität.

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

Für kleinere Bilder wie Symbole verwenden Sie ein verlustfreies Format, um den Detailverlust in einem größenbegrenzten Bild zu vermeiden. Obwohl verlustfreies WebP für diesen Zweck ideal ist, ist die Unterstützung noch nicht weit verbreitet, sodass PNG eine bessere Wahl ist, es sei denn, Sie bieten ein [Fallback](#bereitstellung-von-bild-fallbacks) an. Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG mit seiner indizierten Komprimierungsoption (PNG-8) oft noch kleiner komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, ziehen Sie [SVG](#svg_scalable_vector_graphics) in Betracht, da es über verschiedene Auflösungen und Größen skaliert und somit ideal für responsives Design ist. Obwohl die SVG-Unterstützung gut ist, kann es sich lohnen, ein PNG-Fallback für ältere Browser anzubieten.

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

### Screenshots

Sofern Sie nicht bereit sind, Kompromisse bei der Qualität einzugehen, sollten Sie ein verlustfreies Format für Screenshots verwenden. Dies ist besonders wichtig, wenn sich Text in Ihrem Screenshot befindet, da Text bei verlustbehafteter Komprimierung leicht unscharf und unklar wird.

PNG ist wahrscheinlich die beste Wahl, aber verlustfreies WebP wird wahrscheinlich besser komprimiert sein.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>
        Verlustfreies WebP oder PNG;<br />JPEG, wenn Komprimierungsartefakte kein
        Problem darstellen
      </td>
      <td>PNG oder JPEG;<br />GIF für Screenshots mit geringer Farbanzahl</td>
    </tr>
  </thead>
</table>

### Diagramme, Zeichnungen und Charts

Für jedes Bild, das mit Vektorgrafiken dargestellt werden kann, ist SVG die beste Wahl. Ansonsten sollten Sie ein verlustfreies Format wie PNG verwenden. Wenn Sie ein verlustbehaftetes Format wie JPEG oder verlustbehaftetes WebP wählen, sollten Sie den Komprimierungsgrad sorgfältig abwägen, um zu vermeiden, dass Text oder andere Formen unscharf oder unklar werden.

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

Während das standardmäßige HTML {{HTMLElement("img")}} Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut dies das {{HTMLElement("picture")}} Element. `<picture>` wird als Wrapper für eine Reihe von {{HTMLElement("source")}} Elementen verwendet, die jeweils eine Version des Bildes in einem anderen Format oder unter anderen [Medienbedingungen](/de/docs/Web/CSS/@media) angeben, sowie ein `<img>` Element, das angibt, wo das Bild angezeigt werden soll, und das Fallback zur Standard- oder "kompatibelsten" Version.

Zum Beispiel, wenn Sie ein Diagramm anzeigen, das am besten mit SVG angezeigt wird, aber ein Fallback auf eine PNG oder GIF des Diagramms anbieten möchten, würden Sie so etwas tun:

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

Sie können so viele `<source>`s angeben, wie Sie möchten, obwohl in der Regel 2 oder 3 ausreichen.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Video-Codecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}} und {{HTMLElement("picture")}} Elemente
- Die CSS {{cssxref("background-image")}} Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) Konstruktor und das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interface

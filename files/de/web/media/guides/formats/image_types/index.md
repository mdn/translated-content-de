---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die allgemein von Webbrowsern unterstützt werden, und bieten Einblicke, die Ihnen helfen, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

## Häufig verwendete Bilddateitypen

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
        AVIF und WebP haben eine bessere Leistung, aber eine geringere Browserunterstützung.<br />
        <strong>Support:</strong> Chrome, Edge, Firefox, Opera, Safari.
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
          Es bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz, etc.
          Beachten Sie, dass bei der Verwendung von AVIF Fallbacks zu Formaten mit besserer Browserunterstützung enthalten sein sollten (d.h. Verwendung des <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>-Elements).<br />
          <strong>Support:</strong> Chrome, Edge, Firefox, Opera, Safari.
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
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indizierte Standbilder und ziehen Sie WebP, AVIF oder APNG für Animationssequenzen in Betracht.<br />
        <strong>Support:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
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
          Bevorzugen Sie PNG, wenn eine präzisere Wiedergabe des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl eine bessere Wiedergabe als auch eine höhere Komprimierung erforderlich sind.<br />
          <strong>Support:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
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
          PNG wird gegenüber JPEG bevorzugt für eine präzisere Wiedergabe von Quellbildern oder wenn Transparenz benötigt wird. WebP/AVIF bieten eine noch bessere Komprimierung und Wiedergabe, aber die Browserunterstützung ist eingeschränkter.<br />
          <strong>Support:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
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
        <strong>Support:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_image">WebP</a></th>
      <th scope="row">Web Picture format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.
        WebP bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz etc.
        AVIF bietet eine leicht bessere Komprimierung, ist jedoch nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Support:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die älteren Formate wie PNG, JPEG, GIF haben eine schlechtere Leistung im Vergleich zu neueren Formaten wie WebP und AVIF, genießen aber eine breitere "historische" Browserunterstützung. Die neueren Bildformate gewinnen an Beliebtheit, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. nahezu keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web erscheinen, aber für Webinhalte vermieden werden sollten (in der Regel, weil sie entweder keine breite Browserunterstützung haben oder es bessere Alternativen gibt).

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
> Die Abkürzung für jedes Bildformat verlinkt zu einer längeren Beschreibung des Formats, seiner Fähigkeiten und detaillierten Informationen zur Browser-Kompatibilität (einschließlich der Versionen, die Unterstützung eingeführt haben, und spezieller Funktionen, die möglicherweise später hinzugefügt wurden).

> [!NOTE]
> Safari 11.1 fügte die Möglichkeit hinzu, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Bug](https://crbug.com/791658) und im [Firefox-Bug](https://bugzil.la/895131).

## Details zu Bilddateiformaten

Die folgenden Abschnitte geben einen kurzen Überblick über jeden der Bilddateitypen, die von Webbrowsern unterstützt werden.

In den unten stehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden. Zum Beispiel bedeutet eine RGB-Farbtiefe von 8, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. Andererseits ist die **Bit-Tiefe** die Gesamtanzahl der Bits, die benötigt werden, um jedes Pixel im Speicher darzustellen.

### APNG (Animated Portable Network Graphics)

APNG ist ein Dateiformat, das von Mozilla eingeführt wurde und den [PNG](#png_portable_network_graphics)-Standard erweitert, um Unterstützung für animierte Bilder hinzuzufügen. Konzeptuell ähnlich dem animierten GIF-Format, das seit Jahrzehnten in Gebrauch ist, ist APNG leistungsfähiger, indem es eine Vielzahl von [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit [indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG ist ideal für grundlegende Animationen, die nicht mit anderen Aktivitäten oder mit einer Tonspur synchronisiert werden müssen, wie etwa Fortschrittsanzeigen, Aktivitätsdrehungen und andere animierte Sequenzen. Zum Beispiel ist APNG [eines der Formate, die beim Erstellen von animierten Stickern](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichten-App auf iOS) unterstützt werden. Sie werden auch häufig für die animierten Teile von Benutzeroberflächen von Webbrowsern verwendet.

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
        <a href="https://w3c.github.io/png/#apng-frame-based-animation">W3C PNG Spezifikation</a>
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
              <td>1, 2, 4, 8, und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
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
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie opak das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und die Alpha-Probe, die angibt, wie opak das Pixel ist.
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
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder später.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

AV1 Image File Format (AVIF) ist ein leistungsstarkes, quelloffenes, lizenzfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF)-Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern in Webinhalten zu werden. Es bietet modernste Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzierung und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Codierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde. Das Format profitiert von den signifikanten Fortschritten bei der Video-Encoding in den letzten Jahren und kann möglicherweise von der damit verbundenen Unterstützung für Hardware-Rendering profitieren. Es hat jedoch auch Nachteile in einigen Fällen, da Video- und Bild-Encoding unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG bei visuell ähnlichen Kompressionsstufen (z.B. sind verlustbehaftete AVIF-Bilder etwa 50 % kleiner als JPEG-Bilder).
- Generell hat AVIF eine bessere Kompression als WebP – mediane 50% vs. 30% Kompression für denselben JPG-Satz (Quelle: [AVIF WebP Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verluste Kompression.
- Animationen/Multi-Bild-Speicherung (ähnlich wie animierte GIFs, aber mit viel besserer Kompression)
- Alpha-Kanal-Unterstützung (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für das Speichern von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Breites Farbspektrum: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt kein progressives Rendering, daher müssen Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf die realen Benutzererfahrungen, da AVIF-Dateien viel kleiner als die entsprechenden JPEG- oder PNG-Dateien sind und daher viel schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann der Einfluss signifikant werden, und Sie sollten erwägen, ein Format zu verwenden, das progressives Rendering unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe aufweist), sollten Sie ein Fallback in [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format bieten, indem Sie [das `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder eine andere Methode) verwenden.

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
            Firefox 93 unterstützt Standbilder mit Farbraumunterstützung für Voll- und Begrenzungsbereichsfarben, Bildtransformationen für Spiegelung und Drehung. Die Präferenz <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a> kann verwendet werden, um die Nachgiebigkeit mit der Spezifikation anzupassen.
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
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream & Decoding Process Specification</a>, Abschnitt 6.4.2: Color config semantics.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung ist:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufen-Unterstützung: YUV400</li>
          <li>Bits: 8/10/12-bit</li>
          <li>Alpha-Unterstützung</li>
          <li>ICC-Profil-Unterstützung</li>
          <li>
            NCLX-Unterstützung: sRGB, lineares sRGB, lineares Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3, etc.
          </li>
          <li>Unterstützung von Kacheln</li>
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

Der **BMP** (**Bitmap Image**) Dateityp ist vor allem auf Windows-Computern verbreitet und wird allgemein nur für Sonderfälle in Web-Apps und Inhalten genutzt.

> [!WARNING]
> Typischerweise sollten Sie die Verwendung von BMP-Dateien für Website-Inhalte vermeiden. Die häufigste Form einer BMP-Datei stellt die Daten als unkomprimiertes Rasterbild dar, was im Vergleich zu png- oder jpg-Bildtypen zu großen Dateigrößen führt. Effizientere BMP-Formate existieren, werden jedoch nicht weit verbreitet genutzt und sind selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl von internen Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form einer BMP-Datei ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel aus 3 Bytes besteht, die seine roten, grünen und blauen Komponenten darstellen, und jede Zeile mit `0x00` Bytes auf ein Vielfaches von 4 Bytes Breite aufgefüllt wird.

Während andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht weit verbreitet genutzt und oft gar nicht implementiert. Diese Eigenschaften beinhalten: Unterstützung für unterschiedliche Bit-Tiefen, indizierte Farben, Alphakanäle und unterschiedliche Pixelanordnungen (standardmäßig wird BMP von der unteren linken Ecke zur rechten und nach oben navigiert, anstatt von der oberen linken Ecke zur rechten und nach unten).

Theoretisch werden mehrere Kompressionsalgorithmen unterstützt, und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format in der BMP-Datei gespeichert werden.

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
        Keine Spezifikation; jedoch bietet Microsoft allgemeine Dokumentation des Formats auf
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
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder dieser Werte hat <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4, und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert repräsentiert, der entweder 2, 4 oder 8 Bits hat und als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein spezielles Graustufen-Format.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jeder dieser Werte hat <em>D</em> Bits.
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
        während Microsoft Patente gegen BMP hält, haben sie ein Versprechen veröffentlicht, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist unter dem Windows Metafile Format (<code>.wmf</code>) eingeschlossen.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

Im Jahr 1987 führte der Online-Dienstanbieter CompuServe das **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) Bilddateiformat ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes nutzen können. GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW) Algorithmus, um 8-Bit indizierte Farb-Grafiken verlustfrei zu komprimieren. GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzigen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben dient (8 Bit je für Rot, Grün und Blau). Die Länge einer Farbpalette ist stets eine Zweierpotenz (also hat jede Palette 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird im Allgemeinen [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke mit jeweils eigener Farbpalette zu kacheln, um echte Farbbilder zu erstellen, aber in der Praxis wird dies selten gemacht.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent definiert. In diesem Fall sind Pixel mit diesem Wert vollständig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem anfänglichen Vollbildrahmen eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Rahmen ändern.

GIF war über Jahrzehnte hinweg extrem populär, was seiner Einfachheit und Kompatibilität zu verdanken ist. Seine Animation unterstützte eine Wiederbelebung in der Ära der sozialen Medien, als animierte GIFs weit verbreitet für kurze "Videos", Memes und andere einfache Animationssequenzen verwendet wurden.

Ein weiteres beliebtes Feature von GIF ist die Unterstützung von [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Pixelreihen in einer anderen Reihenfolge gespeichert werden, sodass teilweise empfangene Dateien in geringerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzwerkverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl das Konvertieren von Vollfarbbildern nach GIF zu unbefriedigendem Dithering führen kann. Typischerweise sollten moderne Inhalte [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und sollten erwägen, [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen zu verwenden.

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
              <th scope="row">Echte Farben</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine echten Farbpixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird als 8 Bit je für Rot, Grün und Blau (insgesamt 24 Bit pro Pixel) definiert.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein dediziertes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
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
        Während das GIF-Format selbst offen ist, war der LZW-Kompressionsalgorithmus bis Anfang der 2000er Jahre durch Patente abgedeckt. Am 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO (Microsoft Windows Icon) Dateiformat wurde von Microsoft für Desktop-Symbole von Windows-Systemen entworfen. Noch früher führte Internet Explorer die Möglichkeit ein, dass eine Website eine ICO-Datei mit dem Namen `favicon.ico` im Stammverzeichnis einer Webseite bereitstellen konnte um ein**[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** anzugeben — ein Symbol, das im Favoritenmenü angezeigt wird, und an anderen Stellen, an denen eine symbolische Darstellung der Seite hilfreich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem Listet. Nach dem Verzeichnis kommen die Daten für die Symbole. Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file) Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics) Bild sein (einschließlich des Dateikopfs). Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG in ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien sollten _nicht_ in Webinhalten verwendet werden. Zudem hat ihre Verwendung für Favicons zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}} Elements nachgelassen, wie beschrieben in [Bereitstellung von Symbolen für verschiedene Verwendungszwecke](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts).

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
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jeder dieser Werte hat <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4, und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert repräsentiert, der entweder 2, 4 oder 8 Bits hat und als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein spezielles Graustufen-Format.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jeder dieser Werte hat <em>D</em> Bits.
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
              <td>1, 2, 4, 8, und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
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
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie opak das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: rot, grün, blau und die Alpha-Probe, die angibt, wie opak das Pixel ist.
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

Das {{Glossary("JPEG", "JPEG")}} (typischerweise "**Jay-Peg**" ausgesprochen) Bildformat ist derzeit das am häufigsten verwendete verlustbehaftete Komprimierungsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Kompression auf Inhalte, die Schärfe erfordern, wie Diagramme oder Grafiken, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist tatsächlich ein Datenformat für komprimierte Fotos und nicht ein Dateityp. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat) Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder betrachten.

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
              <th scope="row">Echte Farben</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, von denen jede 8 Bit hat.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td><em>n/a</em></td>
              <td>JPEG bietet keinen indizierten Farbmodus an.</td>
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
      <td>Seit dem 27. Oktober 2006 sind alle US-amerikanischen Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Kompression und unterstützt höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) und ist dabei effizienter, sowie mit voller Alphatransparenz-Unterstützung.

PNG wird weit unterstützt, wobei alle großen Browser vollständige Unterstützung für seine Funktionen bieten.

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
      <td><a href="https://w3c.github.io/png/">Portable Network Graphics (PNG) Spezifikation</a></td>
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
              <td>1, 2, 4, 8, und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt,
                die den Grad der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4, und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die innerhalb eines
                <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>
                Chunks in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die
                Intensität des Graustufen-Pixels und eine Alpha-Probe, die angibt, wie opak das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Bit-Farbkomponenten: rot, grün, blau und die Alpha-Probe, die angibt, wie opak das Pixel ist.
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
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungsausschlüsse</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentenutzungs</a> und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierung</a> Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein {{Glossary("XML", "XML")}}-basiertes [Vektorgrafik](https://en.wikipedia.org/wiki/Vector_graphics)-Format, das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen spezifiziert, die Formen, Linien zeichnen und Farben, Filter usw. anwenden. SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können. Daher ist SVG beliebt für Benutzerschnittstellenelemente in modernem Webdesign.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der beim Interpretieren das gewünschte Bild zeichnet. Zum Beispiel definiert dieses Beispiel einen Zeichenbereich mit einer Anfangsgröße von 100 x 100 Einheiten, der eine diagonal durch die Box gezeichnete Linie enthält:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann auf drei Arten in Webinhalten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt innerhalb des HTML erscheinen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, um das Bild zu zeichnen.
2. Ein SVG-Bild kann in HTML mittels Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} eingebettet sein.
3. Es ist möglich, SVG-Bilder überall dort zu verwenden, wo andere Bildtypen verwendet werden können, einschließlich mit dem {{HTMLElement("img")}}-Element, der {{cssxref("background-image")}} CSS-Eigenschaft, usw. Es gibt jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image), wenn SVG auf diese Weise verwendet wird.

SVG ist eine ideale Wahl für Bilder, die mit einer Reihe von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, in der das Bild gerendert wird, unbekannt ist oder variieren kann, da SVG sanft auf die gewünschte Größe skaliert. Es ist im Allgemeinen nicht nützlich für strikt Bitmap- oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb eines SVG zu inkludieren.

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
      <td><a href="https://w3c.github.io/svgwg/svg2-draft/">Scalable Vector Graphics (SVG) 2</a></td>
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
        <a href="/de/docs/Web/CSS/Reference/Values/color_value">CSS-Farbsyntax</a> spezifiziert.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        SVG-Quellen können während der Übertragung mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Kompressions</a>techniken oder auf der Festplatte als <code>.svgz</code>-Datei komprimiert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftungs</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Software-Lizenzierung</a> Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafik-Dateiformat, das erstellt wurde, um gescannte Fotos zu speichern, obwohl es jede Art von Bild sein kann. Es ist ein etwas "schweres" Format, da TIFF-Dateien tendenziell größer als Bilder in anderen Formaten sind. Dies liegt an den oft enthaltenen Metadaten sowie der Tatsache, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Kompressionsalgorithmen verwenden, die immer noch ziemlich große Dateien nach der Kompression belassen.

TIFF unterstützt eine Vielzahl von Kompressionsmethoden, aber die am häufigsten verwendeten sind die CCITT Group 4 (und für ältere Fax-Systeme Group 3) Kompressionssysteme, die für Faxsoftware verwendet werden, sowie LZW und verlustbehaftete JPEG-Kompression.

Jeder Wert in einer TIFF-Datei wird mit seinem **Tag** (das angibt, welche Art von Information es ist, wie etwa die Breite des Bildes) und seinem **Typ** (das angibt, in welchem Format die Daten gespeichert sind) spezifiziert, gefolgt von der Länge des Arrays von Werten, die diesem Tag zugeordnet werden (alle Eigenschaften werden in Arrays gespeichert, auch bei Einzelwerten). Dadurch können für dieselben Eigenschaften unterschiedliche Datentypen verwendet werden. Zum Beispiel ist die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` gespeichert und ist ein Array mit einem Eintrag. Wenn der Typ 3 (`SHORT`) spezifiziert wird, wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Beim Spezifizieren des Typs 4 (`LONG`) wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um mehrseitige Dokumente darzustellen, zum Beispiel (wie ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax). Allerdings muss Software, die TIFF-Dateien liest, nur das erste Bild unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB. Dazu gehören CMYK, YCbCr und andere, was TIFF zu einer guten Wahl für die Speicherung von Bildern macht, die für den Druck, Film oder Fernseher vorgesehen sind.

Mit Ausnahme von Safari unterstützen Browser TIFF-Bilder in Webinhalten nicht nativ, außer durch spezielle Bibliotheken oder Browser-Add-ons. Daher werden TIFF-Dateien nicht zum Anzeigen von Webinhalten weit verbreitet verwendet, _jedoch_ ist es üblich, herunterladbare TIFF-Dateien bereitzustellen, wenn Fotos und andere Kunstwerke verteilt werden sollen, die für präzises Bearbeiten oder Drucken bestimmt sind.

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
                Ein bilevel TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel. Das <code>PhotometricInterpretation</code>-Feld gibt an, welches von 0 und 1 schwarz und welches weiß ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8</td>
              <td>
                Alle echten Farb-RGB-Bilder werden mit 8 Bits je für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einen <code>ColorMap</code>-Eintrag, der die im Bild verwendeten Farben definiert. Die Farbkartenliste alle roten Werte, dann alle grünen Werte, dann alle blauen Werte (anstatt von <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld vorhanden sind, und die Art des Alpha anzugeben (1 für eine zugeordnete, vorvervielfachte Alpha-Komponente und 2 für ungeordnete Alpha - eine separate Matte); allerdings werden Alpha-Kanäle in TIFF-Dateien selten verwendet und möglicherweise nicht von der Benutzersoftware unterstützt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem angegeben wird, dass mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld vorhanden sind, und die Art des Alpha anzugeben (1 für eine zugeordnete, vorvervielfachte Alpha-Komponente und 2 für ungeordnete Alpha - eine separate Matte); allerdings werden Alpha-Kanäle in TIFF-Dateien selten verwendet und möglicherweise nicht von der Benutzersoftware unterstützt.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustlose PackBits- und LZW-Kompressionen werden unterstützt, genauso wie verlustbehaftete JPEG-Kompressionen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von jeder, die mit von Ihnen verwendeten Bibliotheken verbunden sein könnte); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Kompression durch prädiktives Kodieren basierend auf dem VP8-Videocodec und verlustfreie Kompression, die Ersetzungen für sich wiederholende Daten verwendet. Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35 % kleiner als JPEG-Bilder mit visuell ähnlichen Kompressionsstufen. Verlustfreie WebP-Bilder sind typischerweise 26 % kleiner als die gleichen Bilder im PNG-Format.

WebP unterstützt auch Animation: in einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreie WebP enthalten den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz repräsentiert. Schleifen werden unterstützt.

WebP hat jetzt breite Unterstützung in den neuesten Versionen der großen Webbrowser, obwohl es keine tiefe historische Unterstützung hat. Bieten Sie ein Fallback in entweder [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format, wie zum Beispiel mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF Container Spezifikation</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftetes Encoding)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Verlustfreie Bitstream-Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p> WebP kann auch zum <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden. Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Informationen zur Unterstützung von Versionen.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit Y'CbCr 4:2:0 (YUV420) Format. Verlustfreies WebP verwendet 8-Bit ARGB-Farben, wobei jede Komponente 8 Bit für insgesamt 32 Bits pro Pixel benötigt.
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
> Auf Safari für macOS hängt die WebP-Unterstützung sowohl von der Safari- als auch der macOS-Version ab. Sie benötigen Safari 14 oder später sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap) Dateien waren die ersten, die im Web unterstützt wurden, werden aber nicht mehr verwendet und sollten vermieden werden, da ihr Format potenziell Sicherheitsbedenken aufwerfen kann. Moderne Browser haben seit vielen Jahren keine Unterstützung für XBM-Dateien mehr, aber wenn man mit älteren Inhalten umgeht, kann man noch auf einige stoßen.

XBM verwendet ein C-Code-Snippet, um den Inhalt des Bildes als ein Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define` Anweisungen, die die Breite und Höhe des Bitmaps angeben (und optional den Hotspot, wenn das Bild als Cursor konzipiert ist), gefolgt von einem Array aus `unsigned char`, bei dem jeder Wert acht 1-Bit Monochrom-Pixel enthält.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein. Zum Beispiel repräsentiert der folgende Code ein XBM-Bild, das 8 Pixel mal 8 Pixel groß ist, mit diesen Pixeln in einem schwarz-weiß karierten Muster:

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

Die Wahl des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als Videoformate, da es weniger Optionen mit breiter Unterstützung gibt und jedes Format in der Regel eine bestimmte Menge an Anwendungsfällen hat.

### Fotografien

Fotografien eignen sich typischerweise gut für verlustbehaftete Kompression (abhängig von der Konfiguration des Encoders).
Das macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG kompatibler ist, WebP jedoch möglicherweise eine bessere Kompression bietet.
Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie in Erwägung ziehen, beide Formate [mit einem Fallback](#bereitstellung_von_bild-fallbacks) bereitzustellen, wobei WebP die erste Wahl und JPEG die zweite ist.
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

Für kleinere Bilder wie Symbole verwenden Sie ein verlustfreies Format, um einen Detailverlust bei einem größenbeschränkten Bild zu vermeiden.
Während verlustfreies WebP ideal für diesen Zweck ist, ist die Unterstützung noch nicht weit verbreitet, daher ist PNG eine bessere Wahl, es sei denn, Sie bieten ein [Fallback](#bereitstellung_von_bild-fallbacks) an.
Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG in der Regel mit seiner indizierten Kompressionsoption (PNG-8) noch kleiner komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, sollten Sie [SVG](#svg_scalable_vector_graphics) in Betracht ziehen, da es sich über verschiedene Auflösungen und Größen skalieren lässt, was es perfekt für responsives Design macht.
Obwohl die Unterstützung für SVG gut ist, kann es sich lohnen, für ältere Browser einen PNG-Fallback anzubieten.

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

Sofern Sie nicht bereit sind, Abstriche bei der Qualität zu machen, sollten Sie für Bildschirmfotos ein verlustfreies Format verwenden.
Dies ist besonders wichtig, wenn Text in Ihrem Bildschirmfoto enthalten ist, da Text bei verlustbehafteter Kompression leicht unscharf und unklar wird.

PNG ist wahrscheinlich Ihre beste Option, aber verlustfreies WebP wird vermutlich besser komprimiert.

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
      <td>PNG oder JPEG;<br />GIF für Bildschirmfotos mit wenigen Farben</td>
    </tr>
  </thead>
</table>

### Diagramme, Zeichnungen und Grafiken

Für jedes Bild, das mit Vektorgrafiken dargestellt werden kann, ist SVG die beste Wahl.
Andernfalls sollten Sie ein verlustfreies Format wie PNG verwenden.
Wenn Sie sich für ein verlustbehaftetes Format entscheiden, wie JPEG oder verlustbehaftetes WebP, sollten Sie den Komprimierungsgrad sorgfältig abwägen, um zu vermeiden, dass Text oder andere Formen unscharf oder unklar werden.

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

Während das standardmäßige HTML-{{HTMLElement("img")}}-Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut das {{HTMLElement("picture")}}-Element dies.
`<picture>` wird als Wrapper für eine Reihe von {{HTMLElement("source")}}-Elementen verwendet, die jeweils eine Version des Bildes in einem anderen Format oder unter verschiedenen [Medienbedingungen](/de/docs/Web/CSS/Reference/At-rules/@media) angeben, sowie ein `<img>`-Element, das angibt, wo das Bild angezeigt wird, und das Fallback zur Standard- oder "kompatibelsten" Version.

Wenn Sie beispielsweise ein Diagramm anzeigen, das am besten mit SVG dargestellt wird, aber einen Fallback zu einem PNG oder GIF des Diagramms anbieten möchten, würden Sie so etwas tun:

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

Sie können so viele `<source>`-Elemente angeben, wie Sie wünschen, obwohl in der Regel 2 oder 3 ausreichend sind.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elemente
- Die CSS-{{cssxref("background-image")}}-Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor und die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle

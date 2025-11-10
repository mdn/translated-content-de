---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die von Webbrowsern allgemein unterstützt werden, und geben Einblicke, die Ihnen helfen, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

## Allgemeine Bilddateitypen

Die Bilddateiformate, die im Web am häufigsten verwendet werden, sind unten aufgeführt.

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
          Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats.
          Bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass bei der Verwendung von AVIF Backups in Formaten mit besserer Browserunterstützung enthalten sein sollten (z. B. unter Verwendung des <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>-Elements).<br />
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
          PNG wird gegenüber JPEG bevorzugt für eine genauere Reproduktion von Quelldateien oder wenn Transparenz erforderlich ist. WebP/AVIF bieten eine noch bessere Kompression und Reproduktion, aber die Browserunterstützung ist begrenzter.<br />
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
        Vektorgrafikformat; ideal für Benutzeroberflächenelemente, Symbole, Diagramme usw., die in unterschiedlichen Größen genau gezeichnet werden müssen.<br />
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
        AVIF bietet eine leicht bessere Kompression, ist jedoch nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF haben eine schlechtere Leistung im Vergleich zu neueren Formaten wie WebP und AVIF, genießen aber eine breitere "historische" Browserunterstützung. Die neueren Bildformate erfreuen sich wachsender Beliebtheit, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web erscheinen, die jedoch für Webinhalte vermieden werden sollten (im Allgemeinen, weil sie entweder keine breite Browserunterstützung haben oder weil es bessere Alternativen gibt).

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
> Die Abkürzung für jedes Bildformat verweist auf eine längere Beschreibung des Formats, seiner Fähigkeiten und detaillierte Browser-Kompatibilitätsinformationen (einschließlich, welche Versionen Unterstützung eingeführt haben und welche speziellen Funktionen möglicherweise später eingeführt wurden).

> [!NOTE]
> Safari 11.1 hat die Möglichkeit hinzugefügt, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Fehlerbericht](https://crbug.com/791658) und [Firefox-Fehlerbericht](https://bugzil.la/895131).

## Details zu Bilddateitypen

In den folgenden Abschnitten erhalten Sie einen kurzen Überblick über jeden der von Webbrowsern unterstützten Bilddateitypen.

In den untenstehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden. Zum Beispiel bedeutet eine RGB-Farbtiefe von 8, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. Die **Bit-Tiefe** wiederum ist die Gesamtanzahl der Bits, die zur Darstellung jedes Pixels im Speicher verwendet werden.

### APNG (Animated Portable Network Graphics)

APNG ist ein Dateiformat, das erstmals von Mozilla eingeführt wurde, um den [PNG](#png_portable_network_graphics)-Standard zu erweitern und die Unterstützung für animierte Bilder hinzuzufügen. Konzeptionell ähnlich dem animierten GIF-Format, das seit Jahrzehnten verwendet wird, ist APNG in der Lage, verschiedene [Farbtiefen](https://de.wikipedia.org/wiki/Farbtiefe) zu unterstützen, während animierte GIFs nur 8-Bit-[indizierte Farben](https://de.wikipedia.org/wiki/Indizierte_Farbe) unterstützen.

APNG ist ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einer Tonspur synchronisiert werden müssen, wie beispielsweise Fortschrittsanzeigen, Aktivitätsindikatoren ("throbbers") und andere animierte Sequenzen. Beispielsweise ist APNG [eines der unterstützten Formate beim Erstellen animierter Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichten-Anwendung auf iOS). Sie werden auch häufig für die animierten Teile der Benutzeroberflächen von Webbrowsern verwendet.

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
        <a href="https://w3c.github.io/png/#apng-frame-based-animation">W3C PNG Specification</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>Chrome 59, Edge 12, Firefox 3, Opera 46, Safari 8</td>
    </tr>
    <tr>
      <th scope="row">Maximale Dimensionen</th>
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
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Anteil der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette darstellt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Segment in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Probe, die angibt, wie opak das Pixel ist.
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
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Namensnennung-Weitergabe unter gleichen Bedingungen</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder später.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

Das AV1-Bilddateiformat (AVIF) ist ein leistungsstarkes, quelloffenes, gebührenfreies Dateiformat, das _AV1-Bitströme im High Efficiency Image File Format (HEIF)-Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, der "nächste große Wurf" für das Teilen von Bildern im Web-Inhalt zu werden.
> Es bietet hochmoderne Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzierungen und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde. Das Format profitiert von den bedeutenden Fortschritten in der Videokodierung der letzten Jahre und kann möglicherweise von der damit verbundenen Unterstützung für Hardware-Rendering profitieren. Es hat jedoch auch Nachteile in bestimmten Fällen, da Video- und Bildkodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Komprimierung im Vergleich zu JPG und PNG bei visuell ähnlichen Komprimierungsgraden (z.B. sind verlustbehaftete AVIF-Bilder etwa 50% kleiner als JPEG-Bilder).
- Allgemein hat AVIF eine bessere Komprimierung als WebP - median 50% vs. 30% Komprimierung für denselben JPG-Satz (Quelle: [AVIF WebP Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Komprimierung.
- Unterstützung für Animationen/Mehrbildspeicher (ähnlich wie animierte GIFs, jedoch mit viel besserer Komprimierung)
- Unterstützung für Alphakanäle (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für das Speichern von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Großer Farbraum: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt kein progressives Rendering, daher müssen Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf die tatsächliche Benutzererfahrung, da AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und daher schneller heruntergeladen und angezeigt werden können. Für größere Dateigrößen kann der Effekt signifikant werden und Sie sollten die Verwendung eines Formats in Betracht ziehen, das progressives Rendering unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe hat), sollten Sie ein Fallback in [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) Format mit Hilfe des [`<picture>`-Elements](/de/docs/Web/HTML/Reference/Elements/picture) (oder einem anderen Ansatz) bereitstellen.

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
            Firefox 93 unterstützt Standbilder, mit Farbraumunterstützung für sowohl volle als auch begrenzte Farbbereiche, Bildtransformationen für Spiegelungen und Drehung.
            Die Präferenz <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            kann verwendet werden, um die Einhaltung gegenüber der Spezifikation anzupassen.
          </li>
          <li>
            Firefox 113 und später unterstützen animierte Bilder.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Dimensionen</th>
      <td>2.147.483.647×2.147.483.647 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Informationen zur Unterstützung von Farbmodi finden Sie in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2: Semantik der Farbkonfiguration.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung ist:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12-bit</li>
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
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet und verlustfrei.</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Gebührenfrei. Lizenzinformationen sind verfügbar auf der <a href="https://aomedia.org/license/">Lizenzseite</a>.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Daten)

Der **BMP** (**Bitmap Image**) Dateityp ist hauptsächlich auf Windows-Computern verbreitet und wird in Webanwendungen und -inhalten in der Regel nur für spezielle Fälle verwendet.

> [!WARNING]
> Sie sollten normalerweise vermeiden, BMP-Dateien für Website-Inhalte zu verwenden.
> Die gebräuchlichste Form von BMP-Dateien stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu PNG- oder JPG-Bildtypen führt.
> Effizientere BMP-Formate existieren, sind jedoch nicht weit verbreitet und selten in Webbrowsern unterstützt.

BMP unterstützt theoretisch eine Vielzahl von internen Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form einer BMP-Datei ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Bytes belegt, die seine roten, grünen und blauen Komponenten darstellen, und jede Zeile mit `0x00` Bytes zu einem Vielfachen von 4 Bytes Breite aufgefüllt wird.

Während andere Datenrepräsentationen in der Spezifikation definiert sind, sind sie nicht weit verbreitet und oft völlig unimplementiert. Diese Funktionen umfassen: Unterstützung für verschiedene Bit-Tiefen, indizierte Farben, Alphakanäle und verschiedene Pixelreihenfolgen (standardmäßig wird BMP von der unteren linken Ecke nach rechts und oben geschrieben, anstatt von der oberen linken Ecke nach rechts und unten).

Theoretisch werden mehrere Komprimierungsalgorithmen unterstützt und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format in der BMP-Datei gespeichert werden.

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
        Keine Spezifikation; Microsoft bietet jedoch eine allgemeine Dokumentation des Formats an
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
      <th scope="row">Maximale Dimensionen</th>
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
                Jedes Bit stellt ein einzelnes Pixel dar, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten darstellen; jedes ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der ein 2-, 4- oder 8-Bit-Wert ist und als Index in die Farbpalette dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten darstellen; jedes ist <em>D</em> Bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Mehrere Komprimierungsmethoden werden unterstützt, einschließlich verlustfreier oder verlustbehafteter Algorithmen
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>; während Microsoft Patente gegen BMP hält, haben sie ein Versprechen veröffentlicht, keine Patentansprüche geltend zu machen, solange spezifische Bedingungen erfüllt sind. Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

Im Jahr 1987 führte der Online-Dienstanbieter CompuServe das **GIF**-Dateiformat (**Graphics Interchange Format**) ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes verwenden können. GIF verwendet den [Lempel-Ziv-Welch](https://de.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW) Algorithmus, um 8-Bit indizierte Farbgraphiken verlustfrei zu komprimieren. GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzigen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben (jeweils 8 Bit Rot, Grün und Blau) dient. Die Länge einer Farbtafel ist immer eine Potenz von 2 (d.h. jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird in der Regel [Dithering](https://de.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, die jeweils ihre eigene Palette haben, um echte Farbbilder zu erstellen, aber in der Praxis wird dies selten gemacht.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex ist als transparent festgelegt, in diesem Fall sind Pixel in dieser Farbe vollständig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem ersten Vollbildrahmen eine Serie von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Rahmen ändern.

GIF ist seit Jahrzehnten äußerst populär, dank seiner Einfachheit und Kompatibilität. Die Unterstützung für Animationen führte zu einem Wiederaufleben der Popularität im Zeitalter der sozialen Medien, als animierte GIFs begann, weithin für kurze "Videos", Memes und andere einfache Animationssequenzen verwendet zu werden.

Ein weiteres beliebtes Feature von GIF ist die Unterstützung für [Interlacing](https://de.wikipedia.org/wiki/Interlace-Verfahren), bei dem Pixelreihen aus der Reihenfolge gespeichert werden, so dass teilweise empfangene Dateien in geringerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzwerkverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung von Farbbildern in GIF zu unbefriedigendem Dithering führen kann. Normalerweise sollte moderne Inhalte [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen in Erwägung ziehen.

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
      <th scope="row">Maximale Dimensionen</th>
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
              <td>GIF beinhaltet kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine echten Farb-Pixels.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird als 8 Bits für Rot, Grün und Blau (insgesamt 24 Bits pro Pixel) definiert.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine echten Farb-Pixels.</td>
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
        Während das GIF-Format selbst offen ist, war der LZW-Komprimierungsalgorithmus bis in die frühen 2000er Jahre von Patenten abgedeckt.
        Seit dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows-Symbol)

Das ICO (Microsoft Windows-Symbol) Dateiformat wurde von Microsoft für Desktopsymbole von Windows-Systemen entwickelt. Frühere Versionen des Internet Explorer führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei mit dem Namen `favicon.ico` im Stammverzeichnis einer Website bereitstellen kann, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** zu spezifizieren - ein Symbol, das im Favoritenmenü angezeigt wird und an anderen Orten, wo eine symbolische Darstellung der Website nützlich ist.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem auflistet. Nach dem Verzeichnis kommen die Daten für die Symbole. Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich Dateikopf) sein. Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG innerhalb von ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden.
> Außerdem hat sich ihre Verwendung für Favicons zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements verringert, wie in [Bereitstellung von Symbolen für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

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
      <th scope="row">Maximale Dimensionen</th>
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
                Jedes Bit stellt ein einzelnes Pixel dar, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten darstellen; jedes ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der ein 2-, 4- oder 8-Bit-Wert ist und als Index in die Farbpalette dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten darstellen; jedes ist <em>D</em> Bits.
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
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Anteil der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette darstellt, die in einem `PLTE`-Segment in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Probe, die angibt, wie opak das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        BMP-Format-Symbole verwenden fast immer verlustfreie Komprimierung, aber verlustbehaftete Methoden sind verfügbar.
        PNG-Symbole werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group Image)

Das {{Glossary("JPEG", "JPEG")}} (typischerweise ausgesprochen "**jay-peg**") Bildformat ist derzeit das am weitesten verbreitete verlustbehaftete Komprimierungsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Komprimierung auf Inhalte, die Schärfe erfordern, wie Diagramme oder Diagramme, kann zu unzufriedenstellenden Ergebnissen führen.

JPEG ist tatsächlich ein Datenformat für komprimierte Fotos, anstatt ein Dateityp. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat)-Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder bezeichnen.

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
      <th scope="row">Maximale Dimensionen</th>
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
              <td>Wahre Graustufen können mit dem einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, von denen jede 8 Bits hat.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td><em>n/a</em></td>
              <td>JPEG bietet keinen indizierten Farbmodus an.</td>
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
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehaftet; basierend auf der <a href="https://de.wikipedia.org/wiki/Diskrete_Kosinus-Transformation">diskreten Kosinustransformation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Seit dem 27. Oktober 2006 sind alle US-Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Komprimierung, während es höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) unterstützt und effizienter ist, sowie vollständige Alphatransparenz-Unterstützung bietet.

PNG ist weit verbreitet, da alle großen Browser eine volle Unterstützung für seine Funktionen bieten.

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
      <th scope="row">Maximale Dimensionen</th>
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
              <th scope="row">Echte Farbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte
                dargestellt, die den Anteil der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette darstellt, die in einem
                <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>
                -Segment in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Pixel-Farbkomponenten: Rot, Grün, Blau und der Alpha-Probe, die angibt, wie opak das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei, wahlweise indizierte Farbe wie GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Markenzeichen</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzen</a> Regelen gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein {{Glossary("XML", "XML")}}-basiertes [Vektorgraphik-](https://de.wikipedia.org/wiki/Vektorgrafik) Format, das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen spezifiziert, die Formen, Linien, Farben, Filter usw. erstellen. SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können. Daher ist SVG beliebt für Benutzerschnittstellenelemente im modernen Webdesign.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der, wenn interpretiert, das gewünschte Bild zeichnet. Zum Beispiel beschreibt dieses Beispiel einen Zeichenbereich mit anfangs 100 x 100 Einheiten Größe, der eine diagonal durch die Box gezogene Linie enthält:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann in Webinhalten auf drei Arten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt innerhalb des HTML erscheinen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, um das Bild zu zeichnen.
2. Ein SVG-Bild kann mit Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} eingebettet werden.
3. Es ist möglich, SVG-Bilder überall zu verwenden, wo auch andere Bildtypen verwendet werden können, einschließlich des {{HTMLElement("img")}}-Elements, der {{cssxref("background-image")}} CSS-Eigenschaft und so weiter. Es gibt jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image), wenn SVG auf diese Weise verwendet wird.

SVG ist eine ideale Wahl für Bilder, die mit einer Reihe von Zeichenbefehlen dargestellt werden können, besonders wenn die Größe, in der das Bild gerendert wird, unbekannt ist oder variieren kann, da SVG nahtlos auf die gewünschte Größe skaliert wird. Es ist im Allgemeinen nicht nützlich für streng bitmapbasierte oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb eines SVGs zu integrieren.

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
      <th scope="row">Maximale Dimensionen</th>
      <td>Unbegrenzt</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Farben in SVG werden unter Verwendung der
        <a href="/de/docs/Web/CSS/Reference/Values/color_value">CSS-Farbsyntax</a> angegeben.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        SVG-Quellcode kann während der Übertragung mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Komprimierung</a>-Techniken komprimiert werden oder auf der Festplatte als <code>.svgz</code>-Datei gespeichert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
       ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Markenzeichen</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzen</a> Regeln sind anwendbar. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://de.wikipedia.org/wiki/Tagged_Image_File_Format) ist ein Rastergrafik-Dateiformat, das ursprünglich erstellt wurde, um gescannte Fotos zu speichern, obwohl es jede Art von Bild sein kann. Es ist ein etwas "schweres" Format, da TIFF-Dateien dazu neigen, größer zu sein als Bilder in anderen Formaten. Das liegt daran, dass oft Metadaten enthalten sind, sowie der Tatsache, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Komprimierungsalgorithmen verwenden, die nach der Komprimierung immer noch recht große Dateien hinterlassen.

TIFF unterstützt eine Vielzahl von Komprimierungsmethoden, aber am häufigsten sind die CCITT Group 4 (und, für ältere Faxsysteme, Group 3) Kompressionssysteme, die von Faxsoftware verwendet werden, sowie LZW- und verlustbehaftete JPEG-Komprimierung.

Jeder Wert in einer TIFF-Datei wird unter Verwendung seines **Tags** angegeben (der anzeigt, welche Art von Information er ist, wie die Breite des Bildes) und seines **Typs** (der angibt, in welchem Format die Daten gespeichert werden), gefolgt von der Länge des Wertearrays, das diesem Tag zugewiesen wird (alle Eigenschaften werden in Arrays gespeichert, auch für Einzelwerte). Dies ermöglicht es, verschiedene Datentypen für dieselben Eigenschaften zu verwenden. Zum Beispiel wird die Breite eines Bildes, `ImageWidth`, durch das Tag `0x0100` gespeichert und ist ein Array mit einem Eintrag. Durch die Angabe des Typs 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Durch die Angabe des Typs 4 (`LONG`) wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um mehrseitige Dokumente darzustellen (wie ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax). Software zum Lesen von TIFF-Dateien muss jedoch nur das erste Bild unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB. Dazu gehören CMYK, YCbCr und andere, was TIFF zu einer guten Wahl für die Speicherung von Bildern macht, die für den Druck, Film oder Fernsehmedien bestimmt sind.

Abgesehen von Safari unterstützen Browser keine TIFF-Bilder in Webinhalten nativ, es sei denn durch die Verwendung spezieller Bibliotheken oder Browsererweiterungen. Infolgedessen werden TIFF-Dateien nicht für die Anzeige von Webinhalten verwendet, _aber_ es ist üblich, herunterladbare TIFF-Dateien bereitzustellen, wenn Fotos und andere Kunstwerke verteilt werden sollen, die für präzise Bearbeitung oder zum Drucken geeignet sind.

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
      <th scope="row">Maximale Dimensionen</th>
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
                Ein Bilevel-TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel.
                Das <code>PhotometricInterpretation</code>-Feld gibt an, welche der Werte 0 und 1 schwarz und welche weiß sind.
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
                Alle echten Farbe-RGB-Bilder werden mit 8-Bits für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einen <code>ColorMap</code>-Eintrag, der die im Bild verwendeten Farben definiert.
                Die Farbkarte listet zuerst alle Rotwerte auf, dann alle Grünwerte, dann alle Blauwerte (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alphainformationen werden durch die Angabe hinzugefügt, dass es mehr als 3 Abtastungen pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und die Art des Alpha (1 für ein zugeordnetes, vor multipliziertes Alphakomponente, und 2 für nicht zugeordnetes Alpha - ein separates Matte); jedoch werden Alphakanäle in TIFF-Dateien selten verwendet und können von der Benutzer-Software nicht unterstützt werden.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farbe mit Alpha</th>
              <td>8</td>
              <td>
                Alphainformationen werden durch die Angabe hinzugefügt, dass es mehr als 3 Abtastungen pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und die Art des Alpha (1 für ein zugeordnetes, vor multipliziertes Alphakomponente, und 2 für nicht zugeordnetes Alpha - ein separates Matte); jedoch werden Alphakanäle in TIFF-Dateien selten verwendet und können von der Benutzer-Software nicht unterstützt werden.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustfreie PackBits- und LZW-Komprimierung werden unterstützt, ebenso wie verlustbehaftete JPEG-Komprimierung.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von allen, die mit Bibliotheken verbunden sind, die Sie verwenden könnten); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Komprimierung durch prädiktive Kodierung basierend auf dem VP8-Videocodec und verlustfreie Komprimierung, die Substitutionen für sich wiederholende Daten verwendet. Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35 % kleiner als JPEG-Bilder mit visuell ähnlichen Komprimierungsgraden. Verlustfreie WebP-Bilder sind typischerweise 26 % kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animation: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreie WebP hält das `ANIM`-Segment, das die Animation beschreibt, und das `ANMF`-Segment, das einen Frame einer Animationssequenz darstellt. Wiederholung wird unterstützt.

WebP hat jetzt breite Unterstützung in den neuesten Versionen der großen Webbrowser, obwohl es keine tiefgehende historische Unterstützung hat. Stellen Sie ein Fallback entweder im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format bereit, wie zum Beispiel mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF Container Specification</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP verlustfreie Bitstream-Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch zum <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden. Weitere Unterstützungsversionen finden Sie unter <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a>.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Dimensionen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit Y'CbCr 4:2:0 (YUV420)-Format.
        Verlustfreies WebP verwendet 8-Bit ARGB-Farben, wobei jede Komponente 8 Bits für insgesamt 32 Bits pro Pixel einnimmt.
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
> Auf Safari für macOS hängt die Unterstützung für WebP sowohl von der Safari- als auch von der macOS-Version ab. Sie benötigen Safari 14 oder später sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap) Dateien waren die ersten, die im Web unterstützt wurden, werden aber nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsbedenken hat. Moderne Browser haben seit vielen Jahren keine XBM-Dateien mehr unterstützt, aber wenn Sie mit älteren Inhalten arbeiten, finden Sie möglicherweise noch einige.

XBM verwendet ein Stück C-Code, um den Inhalt des Bildes als ein Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe der Bitmap (und optional den Hotspot, wenn das Bild als Cursor entworfen ist) bereitstellen, gefolgt von einem Array von `unsigned char`, wobei jeder Wert acht 1-Bit-Pixel in Schwarzweiß enthält.

Das Bild muss ein Vielfaches von 8 Pixel breit sein. Zum Beispiel stellt der folgende Code ein XBM-Bild dar, das 8 Pixel mal 8 Pixel groß ist, mit diesen Pixeln in einem Schwarz-Weiß-Schachbrett-Muster:

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
      <th scope="row">Maximale Dimensionen</th>
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

Das Auswählen des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als bei Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jedes Format in der Regel eine spezifische Menge an Anwendungsfällen hat.

### Fotografien

Fotografien eignen sich normalerweise gut für verlustbehaftete Kompression (abhängig von der Konfiguration des Encoders). Das macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG universeller kompatibel ist, WebP jedoch möglicherweise eine bessere Kompression bietet. Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie in Betracht ziehen, beide [mit einem Fallback](#bereitstellung_von_bild-fallbacks) bereitzustellen, wobei WebP die erste Wahl und JPEG die zweite ist. Ansonsten ist JPEG die sichere Wahl für die Kompatibilität.

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

Für kleinere Bilder wie Symbole verwenden Sie ein verlustfreies Format, um den Verlust von Details bei einem größenbeschränkten Bild zu vermeiden. Während verlustfreies WebP ideal für diesen Zweck ist, ist die Unterstützung noch nicht weit verbreitet, sodass PNG die bessere Wahl ist, es sei denn, Sie bieten ein [Fallback](#bereitstellung_von_bild-fallbacks) an. Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG mit seiner indizierten Kompressionsoption (PNG-8) häufig noch kleiner komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, ziehen Sie [SVG](#svg_scalable_vector_graphics) in Betracht, da es sich über verschiedene Auflösungen und Größen hinweg skaliert und somit perfekt für responsives Design ist. Obwohl SVG-Unterstützung gut ist, kann es sich lohnen, ein PNG-Fallback für ältere Browser anzubieten.

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

Es sei denn, Sie sind bereit, Qualitätseinbußen hinzunehmen, sollten Sie für Screenshots ein verlustfreies Format verwenden. Dies ist besonders wichtig, wenn sich Text in Ihrem Screenshot befindet, da Text unter verlustbehafteter Kompression leicht verschwommen und unklar wird.

PNG ist wahrscheinlich die beste Wahl, aber verlustfreies WebP bietet möglicherweise eine bessere Kompression.

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

### Diagramme, Zeichnungen und Charts

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

## Bereitstellung von Bild-Fallbacks

Während das Standard-HTML-{{HTMLElement("img")}}-Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut das {{HTMLElement("picture")}}-Element dies. `<picture>` wird als Wrapper für eine Anzahl von {{HTMLElement("source")}}-Elementen verwendet, von denen jedes eine Version des Bildes in einem anderen Format oder unter anderen [Medienbedingungen](/de/docs/Web/CSS/Reference/At-rules/@media) spezifiziert, sowie ein `<img>`-Element, das definiert, wo das Bild angezeigt werden soll und das Fallback auf die Standardeinstellung oder die "kompatibelste" Version.

Wenn Sie beispielsweise ein Diagramm anzeigen, das am besten mit SVG dargestellt wird, aber ein Fallback auf ein PNG oder GIF des Diagramms anbieten möchten, würden Sie dies in etwa so machen:

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

Sie können so viele `<source>`-Elemente angeben, wie Sie möchten, obwohl 2 oder 3 typischerweise ausreichen.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Video-Codecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elemente
- Die CSS-{{cssxref("background-image")}}-Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor und das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interface

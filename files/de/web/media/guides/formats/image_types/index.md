---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: 74a39db9d03ec63426b0740dc0bd3cb85e5461a4
---

In diesem Leitfaden behandeln wir die von Webbrowsern allgemein unterstützten Bilddateitypen und geben Einblicke, die Ihnen bei der Auswahl der passendsten Formate für die Bilder Ihrer Website helfen.

## Gängige Bilddateitypen

Die am häufigsten im Web verwendeten Bilddateiformate sind unten aufgeführt.

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
        AVIF und WebP bieten eine bessere Leistung, werden aber von weniger Browsern unterstützt.<br />
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
          Aufgrund der hohen Leistung und des lizenzgebührenfreien Bildformats eine gute Wahl sowohl für Bilder als auch für animierte Bilder.
          Es bietet eine wesentlich bessere Komprimierung als PNG oder JPEG und unterstützt höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass Sie bei der Verwendung von AVIF Fallbacks für Formate mit besserer Browserunterstützung einschließen sollten (d.h. mit dem Element <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>).<br />
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
          Gute Wahl für die verlustbehaftete Komprimierung von Standbildern (derzeit die beliebteste).
          Bevorzugen Sie PNG, wenn eine präzisere Wiedergabe des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl eine bessere Wiedergabe als auch eine höhere Komprimierung erforderlich sind.<br />
          <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#jpeg_xl_image">JPEG XL</a></th>
      <th scope="row">JPEG XL image</th>
      <td><code>image/jxl</code></td>
      <td><code>.jxl</code></td>
      <td>
        Unterstützt verlustbehaftete und verlustfreie Komprimierung, progressive Dekodierung, HDR, breite Farbräume, Transparenz und Animationen.
        Da die Browserunterstützung noch nicht universell ist, stellen Sie mit dem Element <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&lt;picture&gt;</a></code> einen Fallback bereit.<br />
        <strong>Unterstützung:</strong> Safari; Chrome hinter einem Flag; Firefox Nightly.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#png_portable_network_graphics">PNG</a></th>
      <th scope="row">Portable Network Graphics</th>
      <td><code>image/png</code></td>
      <td><code>.png</code></td>
      <td>
        <p>
          PNG wird JPEG vorgezogen, wenn eine präzisere Wiedergabe von Quellbildern erforderlich ist oder Transparenz benötigt wird. WebP/AVIF bieten eine noch bessere Komprimierung und Wiedergabe, aber die Browserunterstützung ist eingeschränkter.<br />
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
        Vektorbildformat; ideal für Benutzeroberflächenelemente, Symbole, Diagramme usw., die in unterschiedlichen Größen präzise gezeichnet werden müssen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_image">WebP</a></th>
      <th scope="row">Web Picture format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Ausgezeichnete Wahl sowohl für Bilder als auch für animierte Bilder.
        WebP bietet eine wesentlich bessere Komprimierung als PNG oder JPEG und unterstützt höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine etwas bessere Komprimierung, wird jedoch von Browsern nicht ganz so gut unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG und GIF bieten im Vergleich zu neueren Formaten wie WebP und AVIF eine schlechtere Leistung, verfügen jedoch über eine breitere „historische“ Browserunterstützung. Die neueren Bildformate werden immer beliebter, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil haben).

Die folgende Liste umfasst Bildformate, die im Web vorkommen, aber für Webinhalte vermieden werden sollten (im Allgemeinen, weil sie entweder keine breite Browserunterstützung haben oder bessere Alternativen verfügbar sind).

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
> Die Abkürzung für jedes Bildformat verlinkt auf eine ausführlichere Beschreibung des Formats, seiner Funktionen und detaillierte Informationen zur Browser-Kompatibilität (einschließlich der Versionen, die Unterstützung eingeführt haben, sowie spezifischer Sonderfunktionen, die möglicherweise später hinzugekommen sind).

> [!NOTE]
> Safari 11.1 fügte die Möglichkeit hinzu, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Bug](https://crbug.com/791658) und im [Firefox-Bug](https://bugzil.la/895131).

## Details zu Bilddateitypen

Die folgenden Abschnitte bieten einen kurzen Überblick über jeden der von Webbrowsern unterstützten Bilddateitypen.

In den folgenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden.
Eine RGB-Farbtiefe von 8 bedeutet beispielsweise, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird.
**Bittiefe** hingegen ist die Gesamtzahl der Bits, die verwendet werden, um jedes Pixel im Speicher darzustellen.

### APNG (Animated Portable Network Graphics)

APNG ist ein ursprünglich von Mozilla eingeführtes Dateiformat, das den [PNG](#png_portable_network_graphics)-Standard erweitert, um Unterstützung für animierte Bilder hinzuzufügen.
Konzeptionell ähnelt es dem seit Jahrzehnten verwendeten animierten GIF-Format, APNG ist jedoch leistungsfähiger, da es verschiedene [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animiertes GIF nur 8-Bit-[indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützt.

APNG ist ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einer Tonspur synchronisiert werden müssen, beispielsweise Fortschrittsanzeigen, Aktivitäts-[Throbber](https://en.wikipedia.org/wiki/Throbber) und andere animierte Sequenzen.
APNG ist beispielsweise [eines der unterstützten Formate beim Erstellen animierter Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichten-App unter iOS).
Sie werden außerdem häufig für die animierten Teile der Benutzeroberflächen von Webbrowsern verwendet.

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
        <a href="https://w3c.github.io/png/#apng-frame-based-animation">W3C-PNG-Spezifikation</a>
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
              <th scope="row">Echtfarbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Wert der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist;
                die Farben in der Palette verwenden alle eine Tiefe von 8 Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und einen Alpha-Wert, der angibt, wie deckend das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Bit-Farbkomponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie deckend das Pixel ist.
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
        Kostenlos und offen unter der
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative-Commons-Namensnennung-Weitergabe-unter-gleichen-Bedingungen-Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder höher.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

AV1 Image File Format (AVIF) ist ein leistungsfähiges, quelloffenes und lizenzgebührenfreies Dateiformat, das _AV1-Bitstreams im Containerformat High Efficiency Image File Format (HEIF) kodiert._

> [!NOTE]
> AVIF hat das Potenzial, zum „nächsten großen Ding“ für das Teilen von Bildern in Webinhalten zu werden.
> Es bietet hochmoderne Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzierung und Patentgebühren, die vergleichbare Alternativen beeinträchtigt haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde.
Das Format profitiert von den bedeutenden Fortschritten bei der Videokodierung in den letzten Jahren und kann möglicherweise von der damit verbundenen Unterstützung für Hardware-Rendering profitieren.
Es hat jedoch auch Nachteile für bestimmte Anwendungsfälle, da die Video- und Bildkodierung unterschiedliche Anforderungen hat.

Das Format bietet:

- Ausgezeichnete verlustbehaftete Komprimierung im Vergleich zu JPG und PNG bei visuell ähnlichen Komprimierungsstufen (beispielsweise sind verlustbehaftete AVIF-Bilder etwa 50 % kleiner als JPEG-Bilder).
- Im Allgemeinen bietet AVIF eine bessere Komprimierung als WebP — eine mediane Komprimierung von 50 % gegenüber 30 % für denselben JPG-Satz (Quelle: [AVIF-WebP-Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Komprimierung.
- Speicherung von Animationen/mehreren Bildern (ähnlich wie animierte GIFs, aber mit wesentlich besserer Komprimierung)
- Unterstützung für Alpha-Kanäle (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für das Speichern von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Breiter Farbraum: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt kein progressives Rendering, daher müssen Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können.
Dies hat oft nur geringe Auswirkungen auf die tatsächliche Benutzererfahrung, da AVIF-Dateien viel kleiner als die entsprechenden JPEG- oder PNG-Dateien sind und daher viel schneller heruntergeladen und angezeigt werden können.
Bei größeren Dateigrößen kann die Auswirkung erheblich sein; Sie sollten dann ein Format in Betracht ziehen, das progressives Rendering unterstützt.

AVIF wird von Chrome, Edge, Opera, Safari und Firefox unterstützt.
Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe hat), sollten Sie mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder einem anderen Ansatz) einen Fallback im Format [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) bereitstellen.

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
            Firefox 93 unterstützt Standbilder sowie Farbraumunterstützung für Farben mit vollständigem und begrenztem Bereich und Bildtransformationen für Spiegelung und Drehung.
            Die Einstellung <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            kann verwendet werden, um die Strenge der Spezifikationskonformität anzupassen.
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
          Informationen zur Unterstützung von Farbmodi finden Sie in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2: Color config semantics.
        </p>
        <p>Eine nicht vollständige Zusammenfassung:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12 Bit</li>
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
        Lizenzgebührenfrei. Lizenzinformationen finden Sie auf der <a href="https://aomedia.org/license/">Lizenzseite</a>.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Datei)

Der Dateityp **BMP** (**Bitmap image**) ist auf Windows-Computern am weitesten verbreitet und wird im Allgemeinen nur für Sonderfälle in Web-Apps und -Inhalten verwendet.

> [!WARNING]
> Sie sollten die Verwendung von BMP-Dateien für Website-Inhalte normalerweise vermeiden.
> Die häufigste Form von BMP-Dateien stellt die Daten als unkomprimiertes Rasterbild dar, was im Vergleich zu Bildtypen wie PNG oder JPG zu großen Dateien führt.
> Effizientere BMP-Formate existieren, werden jedoch nicht häufig verwendet und von Webbrowsern nur selten unterstützt.

BMP unterstützt theoretisch verschiedene interne Datendarstellungen.
Die einfachste und am häufigsten verwendete Form der BMP-Datei ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Bytes für seine roten, grünen und blauen Komponenten belegt und jede Zeile mit `0x00`-Bytes auf ein Vielfaches von 4 Bytes Breite aufgefüllt wird.

Obwohl andere Datendarstellungen in der Spezifikation definiert sind, werden sie nicht häufig verwendet und oft überhaupt nicht implementiert.
Diese Funktionen umfassen: Unterstützung für unterschiedliche Bittiefen, indizierte Farben, Alpha-Kanäle und unterschiedliche Pixelreihenfolgen (standardmäßig wird BMP von der unteren linken Ecke nach rechts und oben geschrieben, statt von der oberen linken Ecke nach rechts und unten).

Theoretisch werden mehrere Komprimierungsalgorithmen unterstützt, und die Bilddaten können auch im Format [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) innerhalb der BMP-Datei gespeichert werden.

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
        Keine Spezifikation; Microsoft stellt jedoch unter
        <a href="https://learn.microsoft.com/en-us/windows/win32/gdi/bitmap-storage">docs.microsoft.com/en-us/windows/desktop/gdi/bitmap-storage</a>
        eine allgemeine Dokumentation des Formats bereit.
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
        Je nach Formatversion entweder 32.767×32.767 oder 2.147.483.647×2.147.483.647 Pixel
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
              <th scope="row">Echtfarbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte für die roten, grünen und blauen Farbkomponenten dargestellt; jeder davon umfasst <em>D</em> Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert von 2, 4 oder 8 Bit dargestellt, der als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenständiges Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte für die roten, grünen, blauen und Alpha-Farbkomponenten dargestellt; jeder davon umfasst <em>D</em> Bit.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Mehrere Komprimierungsmethoden werden unterstützt, darunter verlustbehaftete oder verlustfreie Algorithmen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a> abgedeckt;
        obwohl Microsoft Patente auf BMP hält, hat das Unternehmen zugesichert, seine Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der Online-Dienstanbieter CompuServe das Bilddateiformat **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder seines Dienstes verwenden konnten.
GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch)-Algorithmus (LZW), um Grafiken mit 8-Bit-indizierten Farben verlustfrei zu komprimieren.
GIF war neben [XBM](#xbm_x_window_system_bitmap_file) eines der ersten beiden von {{Glossary("HTML", "HTML")}} unterstützten Grafikformate.

Jedes Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben dient (jeweils 8 Bit für Rot, Grün und Blau). Die Länge einer Farbtabelle ist immer eine Zweierpotenz (das heißt, jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge).
Um mehr als 255 oder 256 Farben zu simulieren, wird üblicherweise [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet.
Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke mit jeweils eigener Farbpalette zu kacheln, um Echtfarbbilder zu erstellen, in der Praxis wird dies jedoch selten getan.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent festgelegt; in diesem Fall sind Pixel mit diesem Farbwert vollständig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem anfänglichen Frame in voller Größe eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Frame ändern.

GIF war aufgrund seiner Einfachheit und Kompatibilität jahrzehntelang äußerst beliebt.
Die Animationsunterstützung führte im Zeitalter sozialer Medien zu einem Wiederaufleben seiner Popularität, als animierte GIFs häufig für kurze „Videos“, Memes und andere einfache Animationssequenzen verwendet wurden.

Eine weitere beliebte Funktion von GIF ist die Unterstützung für [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei dem Pixelzeilen außerhalb der Reihenfolge gespeichert werden, damit teilweise empfangene Dateien in niedrigerer Qualität angezeigt werden können.
Dies ist besonders nützlich bei langsamen Netzwerkverbindungen.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Konvertierung von Vollfarbbildern in GIF zu unbefriedigendem Dithering führen kann.
Moderne Inhalte sollten normalerweise [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und für verlustfreie Animationssequenzen [APNG](#apng_animated_portable_network_graphics) in Betracht ziehen.

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
              <td>GIF enthält kein dediziertes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine Echtfarbenpixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird durch jeweils 8 Bit für Rot, Grün und Blau definiert (insgesamt 24 Bit pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein dediziertes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine Echtfarbenpixel.</td>
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
        Seit dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft-Windows-Symbol)

Das Dateiformat ICO (Microsoft-Windows-Symbol) wurde von Microsoft für Desktop-Symbole von Windows-Systemen entwickelt.
Frühe Versionen von Internet Explorer führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei namens `favicon.ico` im Stammverzeichnis der Website bereitstellt, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** festzulegen — ein Symbol, das im Favoritenmenü und an anderen Stellen angezeigt wird, an denen eine symbolische Darstellung der Website nützlich ist.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem Symbol auflistet.
Auf das Verzeichnis folgen die Daten für die Symbole.
Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich Dateikopf) sein.
Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG innerhalb von ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden.
> Außerdem ist ihre Verwendung für Favicons zugunsten einer PNG-Datei und des Elements {{HTMLElement("link")}} zurückgegangen, wie unter [Bereitstellen von Symbolen für unterschiedliche Nutzungskontexte](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

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
                Jedes Bit stellt ein einzelnes Pixel dar, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte für die roten, grünen und blauen Farbkomponenten dargestellt; jeder davon umfasst <em>D</em> Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert von 2, 4 oder 8 Bit dargestellt, der als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenständiges Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte für die roten, grünen, blauen und Alpha-Farbkomponenten dargestellt; jeder davon umfasst <em>D</em> Bit.
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
              <th scope="row">Echtfarbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Wert der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine Tiefe von 8 Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und einen Alpha-Wert, der angibt, wie deckend das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Bit-Farbkomponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie deckend das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Symbole im BMP-Format verwenden fast immer verlustfreie Komprimierung, es sind jedoch verlustbehaftete Verfahren verfügbar.
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

Das Bildformat {{Glossary("JPEG", "JPEG")}} (typischerweise ausgesprochen „**jay-peg**“) ist derzeit das am weitesten verbreitete verlustbehaftete Komprimierungsformat für Standbilder.
Es ist besonders für Fotografien nützlich; das Anwenden verlustbehafteter Komprimierung auf Inhalte, die Schärfe erfordern, wie Diagramme oder Charts, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist eigentlich ein Datenformat für komprimierte Fotos und kein Dateityp.
Die JFIF-Spezifikation (**J**PEG **F**ile **I**nterchange **F**ormat) beschreibt das Format der Dateien, die wir als „JPEG“-Bilder betrachten.

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
              <td>Echte Graustufen können über den einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, von denen jede 8 Bit umfasst.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td><em>n/a</em></td>
              <td>JPEG bietet keinen Modus für indizierte Farben.</td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alpha-Kanal.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe mit Alpha</th>
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
        Verlustbehaftet; basiert auf der <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">diskreten Kosinustransformation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Seit dem 27. Oktober 2006 sind alle Patente in den Vereinigten Staaten abgelaufen.</td>
    </tr>
  </tbody>
</table>

### JPEG-XL-Bild

JPEG XL (JXL) ist ein lizenzgebührenfreies Rasterbildformat, das als ISO/IEC 18181 standardisiert ist.
Es unterstützt verlustbehaftete und verlustfreie Komprimierung, progressive Dekodierung, hohe Bittiefen, breite Farbräume, High Dynamic Range (HDR), Transparenz und Animationen.
JPEG XL kann außerdem vorhandene JPEG-Bilder verlustfrei transkodieren, sodass die ursprüngliche JPEG-Datei rekonstruiert werden kann.

Die Browserunterstützung ist noch nicht universell.
Wenn Sie JPEG XL verwenden, stellen Sie mit [dem `<picture>`-Element](#bereitstellen_von_bild-fallbacks) ein alternatives Format wie AVIF, WebP oder JPEG bereit.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/jxl</code></td>
    </tr>
    <tr>
      <th scope="row">Dateierweiterung(en)</th>
      <td><code>.jxl</code></td>
    </tr>
    <tr>
      <th scope="row">Spezifikation</th>
      <td>
        <a href="https://jpeg.org/jpegxl/workplan.html">ISO/IEC 18181 (JPEG XL)</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Safari 17 und höher. Chrome 145 und höher unterstützt JPEG XL hinter dem Flag <code>#enable-jxl-image-format</code>. Firefox unterstützt es in Vorschauversionen. Safari unterstützt keinen progressiven Download von JPEG-XL-Dateien (sie können nach vollständigem Download gerendert werden).
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>1.073.741.823×1.073.741.823 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Graustufen- und Farbbilder mit optionalen Alpha-Kanälen, hohen Bittiefen, breiten Farbräumen und HDR.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet und verlustfrei.</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Lizenzgebührenfrei.
        Die Mitwirkenden am Format <a href="https://jpeg.org/items/20190803_press.html">verpflichteten sich während der Standardisierung zu einer lizenzgebührenfreien Veröffentlichung</a>, und es sind keine Patentansprüche mit Lizenzgebühren bekannt.
        Die von Browsern ausgelieferten Decoder-Implementierungen sind quelloffen und umfassen zusätzliche Patentgewährungen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das Bildformat {{Glossary("PNG", "PNG")}} (ausgesprochen „**ping**“) verwendet verlustfreie Komprimierung, unterstützt dabei höhere Farbtiefen als [GIF](#gif_graphics_interchange_format), ist effizienter und bietet vollständige Unterstützung für Alpha-Transparenz.

PNG wird breit unterstützt; alle wichtigen Browser unterstützen seine Funktionen vollständig.

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
              <th scope="row">Echtfarbe</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt,
                die den Wert der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem
                <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>
                Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine Tiefe von 8 Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die
                Intensität des Graustufenpixels und einen Alpha-Wert, der angibt, wie deckend das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Bit-Farbkomponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie deckend das Pixel ist.
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
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. Es gelten die W3C-Regeln zu <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentnutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a>. Keine bekannten Patente mit Lizenzgebühren.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein auf {{Glossary("XML", "XML")}} basierendes [Vektorgrafikformat](https://en.wikipedia.org/wiki/Vector_graphics), das den Inhalt eines Bildes als Satz von Zeichenbefehlen angibt, die Formen und Linien erstellen, Farben und Filter anwenden usw.
SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe präzise gezeichnet werden können.
Daher ist SVG für Benutzeroberflächenelemente im modernen Webdesign beliebt.

SVG-Dateien sind Textdateien mit Quellcode, der beim Interpretieren das gewünschte Bild zeichnet.
Dieses Beispiel definiert etwa einen Zeichenbereich mit einer anfänglichen Größe von 100 mal 100 Einheiten, der eine diagonal durch das Feld gezeichnete Linie enthält:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann auf drei Arten in Webinhalten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt innerhalb des HTML erscheinen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, um das Bild zu zeichnen.
2. Ein SVG-Bild kann mit Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} in HTML eingebettet werden.
3. SVG-Bilder können überall dort verwendet werden, wo andere Bildtypen verwendet werden können, einschließlich mit dem {{HTMLElement("img")}}-Element, der CSS-Eigenschaft {{cssxref("background-image")}} usw. Wenn SVG auf diese Weise verwendet wird, gelten jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image).

SVG ist eine ideale Wahl für Bilder, die sich mithilfe einer Reihe von Zeichenbefehlen darstellen lassen, insbesondere wenn die Größe, in der das Bild gerendert wird, unbekannt ist oder variieren kann, da SVG sanft auf die gewünschte Größe skaliert.
Für reine Bitmap- oder fotografische Bilder ist es im Allgemeinen nicht nützlich, obwohl es möglich ist, Bitmap-Bilder in ein SVG einzubetten.

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
        <a href="/de/docs/Web/CSS/Reference/Values/color_value">CSS-Farbsyntax</a> angegeben.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        SVG-Quellcode kann während der Übertragung mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Komprimierung</a> komprimiert oder auf Datenträger als <code>.svgz</code>-Datei gespeichert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte vorbehalten.
        Es gelten die W3C-Regeln zu <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentnutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a>. Keine bekannten Patente mit Lizenzgebühren.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafikdateiformat, das zum Speichern gescannter Fotos entwickelt wurde, obwohl es jede Art von Bild enthalten kann.
Es ist ein eher „schweres“ Format, da TIFF-Dateien tendenziell größer als Bilder in anderen Formaten sind.
Dies liegt an den häufig enthaltenen Metadaten sowie daran, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Komprimierungsalgorithmen verwenden, die auch nach der Komprimierung noch recht große Dateien hinterlassen.

TIFF unterstützt verschiedene Komprimierungsmethoden, am häufigsten verwendet werden jedoch die Komprimierungssysteme CCITT Group 4 (und für ältere Faxsysteme Group 3), die von Faxsoftware verwendet werden, sowie LZW und verlustbehaftete JPEG-Komprimierung.

Jeder Wert in einer TIFF-Datei wird mit seinem **Tag** (der angibt, um welche Art von Information es sich handelt, beispielsweise die Breite des Bildes) und seinem **Typ** (der das Speicherformat der Daten angibt) spezifiziert, gefolgt von der Länge des Wertarrays, das diesem Tag zugewiesen werden soll (alle Eigenschaften werden als Arrays gespeichert, auch einzelne Werte).
Dadurch können unterschiedliche Datentypen für dieselben Eigenschaften verwendet werden.
Beispielsweise wird die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` gespeichert und ist ein Array mit einem Eintrag.
Durch Angabe von Typ 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Die Angabe von Typ 4 (`LONG`) speichert die Breite als 32-Bit-Wert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann beispielsweise verwendet werden, um mehrseitige Dokumente darzustellen (etwa ein mehrseitig gescanntes Dokument oder ein empfangenes Fax).
Software, die TIFF-Dateien liest, muss jedoch nur das erste Bild unterstützen.

TIFF unterstützt nicht nur RGB, sondern verschiedene Farbräume.
Dazu gehören CMYK, YCbCr und andere, wodurch TIFF eine gute Wahl für das Speichern von Bildern ist, die für Druck-, Film- oder Fernsehmedien bestimmt sind.

Abgesehen von Safari unterstützen Browser TIFF-Bilder in Webinhalten nicht nativ, außer durch spezielle Bibliotheken oder Browser-Add-ons.
Daher werden TIFF-Dateien nicht breit zur Anzeige von Webinhalten verwendet, _aber_ beim Verteilen von Fotos und anderen Kunstwerken für präzise Bearbeitung oder Druck ist es üblich, herunterladbare TIFF-Dateien bereitzustellen.

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
              <th scope="row">Zweistufig</th>
              <td>1</td>
              <td>
                Ein zweistufiges TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel.
                Das Feld <code>PhotometricInterpretation</code> gibt an, welche von 0 und 1 schwarz und welche weiß ist.
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
              <th scope="row">Echtfarbe</th>
              <td>8</td>
              <td>
                Alle Echtfarben-RGB-Bilder werden mit jeweils 8 Bit für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einen <code>ColorMap</code>-Datensatz, der die im Bild verwendeten Farben definiert.
                Die Farbkarte listet zuerst alle roten Werte auf, dann alle grünen Werte und anschließend alle blauen Werte (statt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem im Feld <code>SamplesPerPixel</code> angegeben wird, dass es mehr als 3 Samples pro Pixel gibt, und indem der Alpha-Typ angegeben wird (1 für eine zugeordnete, vormultiplizierte Alpha-Komponente und 2 für nicht zugeordnetes Alpha – eine separate Matte); Alpha-Kanäle werden in TIFF-Dateien jedoch selten verwendet und möglicherweise nicht von der Software der Benutzerin oder des Benutzers unterstützt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarbe mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem im Feld <code>SamplesPerPixel</code> angegeben wird, dass es mehr als 3 Samples pro Pixel gibt, und indem der Alpha-Typ angegeben wird (1 für eine zugeordnete, vormultiplizierte Alpha-Komponente und 2 für nicht zugeordnetes Alpha – eine separate Matte); Alpha-Kanäle werden in TIFF-Dateien jedoch selten verwendet und möglicherweise nicht von der Software der Benutzerin oder des Benutzers unterstützt.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, jedoch werden verlustfreie PackBits- und LZW-Komprimierung sowie verlustbehaftete JPEG-Komprimierung unterstützt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von Lizenzen, die mit möglicherweise verwendeten Bibliotheken verbunden sind); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Komprimierung über prädiktive Kodierung auf Grundlage des VP8-Video-Codecs sowie verlustfreie Komprimierung, die Ersetzungen für sich wiederholende Daten verwendet.
Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35 % kleiner als JPEG-Bilder mit visuell ähnlichen Komprimierungsstufen.
Verlustfreie WebP-Bilder sind typischerweise 26 % kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt außerdem Animationen: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann.
Verlustfreies WebP enthält den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz darstellt.
Schleifen werden unterstützt.

WebP wird inzwischen von den neuesten Versionen der wichtigsten Webbrowser breit unterstützt, verfügt jedoch nicht über eine tiefgehende historische Unterstützung.
Stellen Sie einen Fallback im Format [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) bereit, beispielsweise mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF-Container-Spezifikation</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Lossless Bitstream Specification</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann außerdem zum <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden.
        Detailliertere Informationen zu unterstützten Versionen finden Sie unter <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a>.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit-Y'CbCr-4:2:0-Format (YUV420).
        Verlustfreies WebP verwendet 8-Bit-ARGB-Farbe, wobei jede Komponente 8 Bit belegt, insgesamt also 32 Bit pro Pixel.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei (Huffman-, LZ77- oder Farbcache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; der Quellcode ist frei verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Unter Safari für macOS hängt die WebP-Unterstützung sowohl von der Safari- als auch von der macOS-Version ab. Sie benötigen Safari 14 oder höher sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM-Dateien (X Bitmap) waren die ersten im Web unterstützten Bilddateien, werden jedoch nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsbedenken aufweist.
Moderne Browser unterstützen XBM-Dateien seit vielen Jahren nicht mehr, aber bei älteren Inhalten können Sie noch auf einige stoßen.

XBM verwendet einen C-Codeausschnitt, um den Inhalt des Bildes als Byte-Array darzustellen.
Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe der Bitmap bereitstellen (und optional den Hotspot, falls das Bild als Cursor konzipiert ist), gefolgt von einem Array aus `unsigned char`, wobei jeder Wert 8 monochrome 1-Bit-Pixel enthält.

Das Bild muss eine Breite haben, die ein Vielfaches von 8 Pixeln ist.
Der folgende Code stellt beispielsweise ein 8 Pixel mal 8 Pixel großes XBM-Bild dar, dessen Pixel ein schwarz-weißes Schachbrettmuster bilden:

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
              <th scope="row">Echtfarbe</th>
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
              <th scope="row">Echtfarbe mit Alpha</th>
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
      <td>Quelloffen</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Bildformats

Bildformate werden üblicherweise anhand von Faktoren wie Komprimierung, Qualität, Breite und Tiefe der Browserunterstützung sowie der Frage ausgewählt, ob Funktionen wie Transparenz oder Animation benötigt werden.

Bevorzugen Sie für Rasterbilder [WebP](#webp-bild) oder [AVIF](#avif-bild), die im Allgemeinen eine bessere Komprimierung als PNG, JPEG und GIF bieten.
Sie sollten außerdem [JPEG XL](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) für große Rasterbilder mit hoher Auflösung in Betracht ziehen.
Die meisten Browser können diese progressiv rendern, indem sie eine erste Version anzeigen, bevor das vollständige Bild heruntergeladen wurde.

Wenn Sie Browser unterstützen müssen, die WebP, AVIF oder JPEG XL nicht zulassen, verwenden Sie das Element {{HTMLElement("picture")}}, um einen PNG- oder JPEG-Fallback bereitzustellen.
Dies wird weiter unten unter [Bereitstellen von Bild-Fallbacks](#bereitstellen_von_bild-fallbacks) gezeigt.

Komprimierung kann verlustbehaftet sein und Bilddaten verwerfen, um wesentlich kleinere Dateien zu erzielen, oder verlustfrei, um das Original exakt wiederzugeben.
Bevorzugen Sie für Screenshots, Diagramme, Logos und Strichzeichnungen eine verlustfreie Kodierung, da Unschärfe und farbige Ränder um Text und scharfe Kanten sehr sichtbar sind.
Fotografien und andere Bilder mit kontinuierlichen Tonwerten vertragen in der Regel verlustbehaftete Komprimierung, weil die verworfenen Details schwerer zu erkennen sind.
WebP und AVIF unterstützen sowohl verlustbehaftete als auch verlustfreie Komprimierung als eine Einstellung, die Sie beim Kodieren auswählen.
JPEG ist verlustbehaftet und daher häufig ein gutes Fallback-Format für Fotografien, während PNG verlustfrei ist und sich dadurch besser für Screenshots, Diagramme und Strichzeichnungen eignet.
PNG ist außerdem der Fallback für alle Bilder, die Transparenz benötigen, da JPEG keinen Alpha-Kanal besitzt.

Verwenden Sie für Diagramme, Charts und andere Bilder, die in unterschiedlichen Größen präzise gezeichnet werden müssen, [SVG](#svg_scalable_vector_graphics).
Die meisten Symbole haben Vektorgrafikversionen, und Sie sollten nach Möglichkeit die SVG-Version priorisieren. Falls nur Rasterversionen verfügbar sind, wählen Sie [WebP](#webp-bild), stellen Sie jedoch wie bei anderen Rasterbildern einen Fallback bereit.

## Bereitstellen von Bild-Fallbacks

Während das Standard-HTML-Element {{HTMLElement("img")}} keine Kompatibilitäts-Fallbacks für Bilder unterstützt, unterstützt das Element {{HTMLElement("picture")}} diese.
`<picture>` wird als Wrapper für eine Reihe von {{HTMLElement("source")}}-Elementen verwendet, von denen jedes eine Version des Bildes in einem anderen Format oder unter unterschiedlichen [Medienbedingungen](/de/docs/Web/CSS/Reference/At-rules/@media) angibt, sowie für ein `<img>`-Element, das festlegt, wo das Bild angezeigt wird, und den Fallback auf die Standardversion oder die „kompatibelste“ Version definiert.

Wenn Sie beispielsweise ein Diagramm anzeigen, das am besten als SVG dargestellt wird, aber einen Fallback auf eine PNG- oder GIF-Version des Diagramms anbieten möchten, würden Sie etwa Folgendes tun:

```html
<picture>
  <source srcset="diagram.svg" type="image/svg+xml" />
  <source srcset="diagram.webp" type="image/webp" />
  <source srcset="diagram.png" type="image/png" />
  <img
    src="diagram.gif"
    width="620"
    height="540"
    alt="Diagram showing the data channels" />
</picture>
```

Sie können beliebig viele `<source>`-Elemente angeben, obwohl normalerweise 2 oder 3 ausreichen.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu im Web verwendeten Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}}-Elemente {{HTMLElement("img")}} und {{HTMLElement("picture")}}
- Die CSS-Eigenschaft {{cssxref("background-image")}}
- Der Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) und die Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)

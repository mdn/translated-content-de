---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: 0ac0038dcfebe080906448b90eedfe6db0a29f0a
---

In diesem Leitfaden erfahren Sie, welche Bilddateitypen Webbrowser üblicherweise unterstützen. Außerdem erhalten Sie Hinweise, die Ihnen helfen, die passenden Formate für die Bilder Ihrer Website auszuwählen.

## Gängige Bilddateitypen

Die im Web am häufigsten verwendeten Bilddateiformate sind nachstehend aufgeführt.

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
          Aufgrund seiner hohen Leistung und des lizenzgebührenfreien Bildformats eine gute Wahl sowohl für Standbilder als auch für animierte Bilder.
          Es bietet eine deutlich bessere Komprimierung als PNG oder JPEG und unterstützt größere Farbtiefen, animierte Frames, Transparenz und mehr.
          Beachten Sie, dass Sie bei der Verwendung von AVIF Ersatzformate mit breiterer Browser-Unterstützung bereitstellen sollten, beispielsweise mit dem Element <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>.<br />
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
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indizierte Standbilder und ziehen Sie für Animationssequenzen WebP, AVIF oder APNG in Betracht.<br />
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
          Gute Wahl für die verlustbehaftete Komprimierung von Standbildern (derzeit am weitesten verbreitet).
          Bevorzugen Sie PNG, wenn das Bild genauer wiedergegeben werden muss, oder WebP/AVIF, wenn sowohl eine bessere Wiedergabe als auch eine stärkere Komprimierung erforderlich sind.<br />
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
        Unterstützt verlustbehaftete und verlustfreie Komprimierung, progressive Dekodierung, HDR, große Farbräume, Transparenz und Animation.
        Da die Browser-Unterstützung noch nicht universell ist, stellen Sie mithilfe des Elements <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&lt;picture&gt;</a></code> ein Ersatzformat bereit.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#png_portable_network_graphics">PNG</a></th>
      <th scope="row">Portable Network Graphics</th>
      <td><code>image/png</code></td>
      <td><code>.png</code></td>
      <td>
        <p>
          PNG wird gegenüber JPEG bevorzugt, wenn Quellbilder genauer wiedergegeben werden müssen oder Transparenz erforderlich ist. WebP/AVIF bieten eine noch bessere Komprimierung und Wiedergabe, werden aber von weniger Browsern unterstützt.<br />
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
        Vektorbasiertes Bildformat; ideal für Benutzeroberflächenelemente, Icons, Diagramme und Ähnliches, die in unterschiedlichen Größen präzise dargestellt werden müssen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_image">WebP</a></th>
      <th scope="row">Web Picture format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Hervorragende Wahl sowohl für Standbilder als auch für animierte Bilder.
        WebP bietet eine deutlich bessere Komprimierung als PNG oder JPEG und unterstützt größere Farbtiefen, animierte Frames, Transparenz und mehr.
        AVIF bietet eine etwas bessere Komprimierung, wird aber von Browsern nicht ganz so gut unterstützt und ermöglicht keine progressive Darstellung.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG und GIF sind im Vergleich zu neueren Formaten wie WebP und AVIF weniger leistungsfähig, genießen aber eine breitere „historische“ Browser-Unterstützung. Die neueren Bildformate werden immer beliebter, da Browser ohne entsprechende Unterstützung zunehmend an Bedeutung verlieren (das heißt, praktisch keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web vorkommen, für Webinhalte aber vermieden werden sollten. Im Allgemeinen liegt das daran, dass sie entweder nicht breit von Browsern unterstützt werden oder bessere Alternativen verfügbar sind.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Abkürzung</th>
      <th scope="row">Dateiformat</th>
      <th scope="col">MIME-Typ</th>
      <th scope="col">Dateiendung(en)</th>
      <th scope="col">Unterstützende Browser</th>
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
> Die Abkürzung jedes Bildformats führt zu einer ausführlicheren Beschreibung des Formats und seiner Möglichkeiten sowie zu detaillierten Informationen zur Browser-Kompatibilität. Dazu gehören die Versionen, mit denen die Unterstützung eingeführt wurde, und besondere Funktionen, die möglicherweise erst später hinzugekommen sind.

> [!NOTE]
> Safari 11.1 führte die Möglichkeit ein, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Bug](https://crbug.com/791658) und im [Firefox-Bug](https://bugzil.la/895131).

## Details zu Bilddateitypen

Die folgenden Abschnitte geben einen kurzen Überblick über die einzelnen Bilddateitypen, die von Webbrowsern unterstützt werden.

In den folgenden Tabellen bezeichnet **Bits pro Komponente** die Anzahl der Bits, mit denen jede Farbkomponente dargestellt wird.
Eine RGB-Farbtiefe von 8 bedeutet beispielsweise, dass die roten, grünen und blauen Komponenten jeweils durch einen 8-Bit-Wert dargestellt werden.
Die **Bittiefe** hingegen ist die Gesamtzahl der Bits, mit denen jeder Pixel im Speicher dargestellt wird.

### APNG (Animated Portable Network Graphics)

APNG ist ein ursprünglich von Mozilla eingeführtes Dateiformat, das den [PNG](#png_portable_network_graphics)-Standard um die Unterstützung animierter Bilder erweitert.
APNG ähnelt konzeptionell dem seit Jahrzehnten verwendeten animierten GIF-Format, bietet aber mehr Möglichkeiten: Es unterstützt verschiedene [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth), während animierte GIFs nur 8-Bit-[indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG eignet sich ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einer Tonspur synchronisiert werden müssen, etwa Fortschrittsanzeigen, animierte [Ladeindikatoren](https://en.wikipedia.org/wiki/Throbber) und andere Animationssequenzen.
APNG ist beispielsweise [eines der unterstützten Formate zum Erstellen animierter Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichten-App unter iOS).
Es wird auch häufig für animierte Bereiche der Benutzeroberflächen von Webbrowsern verwendet.

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
        <a href="https://w3c.github.io/png/#apng-frame-based-animation">W3C-PNG-Spezifikation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>Chrome 59, Edge 12, Firefox 3, Opera 46, Safari 8</td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>2.147.483.647 × 2.147.483.647 Pixel</td>
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
                Jeder Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die die Stärke der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jeder Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in einer Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk der APNG-Datei enthalten ist;
                alle Farben der Palette verwenden eine Bittiefe von 8.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und einen Alpha-Wert, der angibt, wie undurchsichtig der Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel besteht aus vier <em>D</em>-Bit-Komponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie undurchsichtig der Pixel ist.
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
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative-Commons-Attribution-ShareAlike-Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) in Version 3.0 oder höher.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

AV1 Image File Format (AVIF) ist ein leistungsfähiges, quelloffenes und lizenzgebührenfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF)-Container kodiert._

> [!NOTE]
> AVIF hat das Potenzial, beim Austausch von Bildern in Webinhalten der „nächste große Durchbruch“ zu werden.
> Es bietet modernste Funktionen und hohe Leistung, ohne die komplizierten Lizenzbedingungen und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde.
Das Format profitiert von den erheblichen Fortschritten bei der Videokodierung in den letzten Jahren und könnte auch von der damit verbundenen Unterstützung für hardwarebeschleunigte Darstellung profitieren.
In manchen Fällen hat es jedoch auch Nachteile, da die Kodierung von Videos und Bildern unterschiedliche Anforderungen stellt.

Das Format bietet:

- Hervorragende verlustbehaftete Komprimierung im Vergleich zu JPG und PNG bei visuell ähnlicher Qualität (beispielsweise sind verlustbehaftet komprimierte AVIF-Bilder etwa 50 % kleiner als JPEG-Bilder).
- Im Allgemeinen eine bessere Komprimierung als WebP – im Median 50 % gegenüber 30 % Komprimierung für dieselbe JPG-Bildersammlung (Quelle: [AVIF-WebP-Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison/) (CTRL Blog)).
- Verlustfreie Komprimierung.
- Speicherung von Animationen und mehreren Bildern (ähnlich wie animierte GIFs, aber mit deutlich besserer Komprimierung).
- Unterstützung für Alphakanäle (also für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für die Speicherung von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Bildbereichen darstellen können.
- Große Farbräume: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt keine progressive Darstellung. Dateien müssen daher vollständig heruntergeladen werden, bevor sie angezeigt werden können.
In der Praxis hat dies oft nur geringe Auswirkungen auf die Benutzererfahrung, da AVIF-Dateien wesentlich kleiner als entsprechende JPEG- oder PNG-Dateien sind und deshalb viel schneller heruntergeladen und angezeigt werden können.
Bei größeren Dateien können die Auswirkungen jedoch erheblich sein. Ziehen Sie dann ein Format in Betracht, das progressive Darstellung unterstützt.

AVIF wird von Chrome, Edge, Opera, Safari und Firefox unterstützt.
Da die Unterstützung noch nicht umfassend ist (und erst seit relativ kurzer Zeit besteht), sollten Sie mithilfe des [Elements `<picture>`](/de/docs/Web/HTML/Reference/Elements/picture) oder auf andere Weise ein Ersatzbild im Format [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) bereitstellen.

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
        Chrome 85, Edge 121, Opera 71, Firefox 93 und Safari 16.1.
        <ul>
          <li>
            Firefox 93 unterstützt Standbilder, Farbräume mit vollem und begrenztem Wertebereich sowie Bildtransformationen zum Spiegeln und Drehen.
            Mit der Einstellung <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            lässt sich festlegen, wie streng die Einhaltung der Spezifikation geprüft wird.
          </li>
          <li>
            Firefox 113 und höher unterstützen animierte Bilder.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>2.147.483.647 × 2.147.483.647 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        <p>
          Informationen zur Unterstützung von Farbmodi finden Sie in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2: Color config semantics.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bittiefen: 8, 10 und 12 Bit</li>
          <li>Alpha-Unterstützung</li>
          <li>Unterstützung für ICC-Profile</li>
          <li>
            NCLX-Unterstützung: sRGB, lineares sRGB, lineares Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3 usw.
          </li>
          <li>Unterstützung für Kacheln</li>
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
        Lizenzgebührenfrei. Informationen zur Lizenzierung finden Sie auf der <a href="https://aomedia.org/license/">Lizenzseite</a>.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Datei)

Der Dateityp **BMP** (**Bitmap-Bild**) ist vor allem auf Windows-Computern verbreitet und wird in Webanwendungen und -inhalten normalerweise nur in Sonderfällen verwendet.

> [!WARNING]
> Für Website-Inhalte sollten Sie BMP-Dateien in der Regel vermeiden.
> Die gängigste Form einer BMP-Datei speichert die Daten als unkomprimiertes Rasterbild, was im Vergleich zu PNG- oder JPG-Bildern zu großen Dateien führt.
> Effizientere BMP-Formate existieren zwar, werden aber kaum verwendet und von Webbrowsern selten unterstützt.

BMP unterstützt theoretisch verschiedene interne Datendarstellungen.
Die einfachste und am häufigsten verwendete Form einer BMP-Datei ist ein unkomprimiertes Rasterbild. Dabei belegt jeder Pixel 3 Byte für seine roten, grünen und blauen Komponenten; jede Zeile wird mit `0x00`-Bytes aufgefüllt, bis ihre Breite ein Vielfaches von 4 Byte beträgt.

Die Spezifikation definiert zwar weitere Datendarstellungen, diese werden jedoch kaum verwendet und sind häufig überhaupt nicht implementiert.
Dazu gehören die Unterstützung verschiedener Bittiefen, indizierter Farben und Alphakanäle sowie unterschiedlicher Pixelanordnungen. Standardmäßig wird BMP von der linken unteren Ecke nach rechts und oben geschrieben, statt von der linken oberen Ecke nach rechts und unten.

Theoretisch werden mehrere Komprimierungsalgorithmen unterstützt. Die Bilddaten können innerhalb der BMP-Datei auch im Format [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) gespeichert werden.

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
        Keine Spezifikation; Microsoft stellt jedoch unter
        <a href="https://learn.microsoft.com/en-us/windows/win32/gdi/bitmap-storage">docs.microsoft.com/en-us/windows/desktop/gdi/bitmap-storage</a> eine allgemeine Dokumentation des Formats bereit.
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
        Je nach Formatversion entweder 32.767 × 32.767 oder 2.147.483.647 × 2.147.483.647 Pixel
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
                Jedes Bit stellt einen einzelnen Pixel dar, der entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch drei Werte für die roten, grünen und blauen Farbkomponenten dargestellt; jeder Wert umfasst <em>D</em> Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jeder Pixel wird durch einen 2, 4 oder 8 Bit großen Wert dargestellt, der als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>nicht zutreffend</em></td>
              <td>BMP hat kein eigenständiges Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch vier Werte für die roten, grünen, blauen und Alpha-Komponenten dargestellt; jeder Wert umfasst <em>D</em> Bit.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Mehrere Komprimierungsverfahren werden unterstützt, darunter verlustbehaftete und verlustfreie Algorithmen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>.
        Microsoft hält zwar Patente für BMP, hat aber zugesagt, seine Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist allerdings nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der Onlinedienstanbieter CompuServe das Bilddateiformat **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder seines Dienstes verwenden konnten.
GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch)-Algorithmus (LZW), um Grafiken mit 8-Bit-indizierten Farben verlustfrei zu komprimieren.
Neben [XBM](#xbm_x_window_system_bitmap_file) war GIF eines der ersten beiden von {{Glossary("HTML", "HTML")}} unterstützten Grafikformate.

Jeder Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert dargestellt, der als Index in eine Palette von 24-Bit-Farben dient (jeweils 8 Bit für Rot, Grün und Blau). Die Länge einer Farbtabelle ist immer eine Zweierpotenz (das heißt, jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge).
Um mehr als 255 oder 256 Farben zu simulieren, wird üblicherweise [Dithering](https://en.wikipedia.org/wiki/Dithering) eingesetzt.
Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke mit jeweils eigener Farbpalette aneinanderzufügen, um Echtfarbenbilder zu erzeugen. In der Praxis geschieht dies jedoch selten.

Pixel sind undurchsichtig, sofern nicht ein bestimmter Farbindex als transparent festgelegt wird. Pixel mit diesem Farbwert sind dann vollständig transparent.

GIF unterstützt einfache Animationen. Nach einem ersten Frame in voller Größe folgt dabei eine Reihe von Bildern, die nur die Bereiche enthalten, die sich von Frame zu Frame ändern.

GIF ist aufgrund seiner Einfachheit und Kompatibilität seit Jahrzehnten äußerst beliebt.
Die Unterstützung für Animationen führte im Zeitalter sozialer Medien zu einem erneuten Popularitätsschub, als animierte GIFs häufig für kurze „Videos“, Memes und andere einfache Animationssequenzen verwendet wurden.

Eine weitere beliebte Funktion von GIF ist die Unterstützung für [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>). Dabei werden Pixelzeilen in anderer Reihenfolge gespeichert, sodass nur teilweise empfangene Dateien bereits in geringerer Qualität angezeigt werden können.
Das ist besonders bei langsamen Netzwerkverbindungen nützlich.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung vollfarbiger Bilder in GIF zu unbefriedigendem Dithering führen kann.
Für moderne Inhalte sollten Sie bei verlustfreien _und_ indizierten Standbildern in der Regel [PNG](#png_portable_network_graphics) verwenden und für verlustfreie Animationssequenzen [APNG](#apng_animated_portable_network_graphics) in Betracht ziehen.

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
      <td>65.536 × 65.536 Pixel</td>
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
              <td><em>nicht zutreffend</em></td>
              <td>GIF enthält kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td><em>nicht zutreffend</em></td>
              <td>GIF unterstützt keine Echtfarbenpixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>8</td>
              <td>
                Jede Farbe einer GIF-Palette wird durch jeweils 8 Bit für Rot, Grün und Blau definiert (insgesamt 24 Bit pro Palettenfarbe).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>nicht zutreffend</em></td>
              <td>GIF bietet kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td><em>nicht zutreffend</em></td>
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
        Während das GIF-Format selbst offen ist, war der LZW-Komprimierungsalgorithmus bis Anfang der 2000er-Jahre durch Patente geschützt.
        Seit dem 7. Juli 2004 sind alle relevanten Patente abgelaufen; das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft-Windows-Icon)

Das Dateiformat ICO (Microsoft-Windows-Icon) wurde von Microsoft für Desktop-Icons von Windows-Systemen entwickelt.
Frühe Versionen des Internet Explorers führten jedoch die Möglichkeit ein, im Stammverzeichnis einer Website eine ICO-Datei namens `favicon.ico` bereitzustellen. Damit ließ sich ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** festlegen – ein Icon, das im Favoritenmenü und an anderen Stellen angezeigt wird, an denen eine bildliche Darstellung der Website nützlich ist.

Eine ICO-Datei kann mehrere Icons enthalten und beginnt mit einem Verzeichnis, das Einzelheiten zu jedem Icon auflistet.
Auf dieses Verzeichnis folgen die Daten der Icons.
Die Daten jedes Icons können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateiheader oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild einschließlich Dateiheader sein.
Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format wählen, da die Unterstützung für PNG innerhalb von ICO-Dateien erst mit Windows Vista eingeführt wurde und möglicherweise nicht überall zuverlässig funktioniert.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden.
> Auch für Favicons werden sie inzwischen seltener eingesetzt. Stattdessen werden eine PNG-Datei und das Element {{HTMLElement("link")}} bevorzugt, wie unter [Icons für unterschiedliche Verwendungskontexte bereitstellen](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

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
      <td>256 × 256 Pixel</td>
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
                Jedes Bit stellt einen einzelnen Pixel dar, der entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch drei Werte für die roten, grünen und blauen Farbkomponenten dargestellt; jeder Wert umfasst <em>D</em> Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jeder Pixel wird durch einen 2, 4 oder 8 Bit großen Wert dargestellt, der als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>nicht zutreffend</em></td>
              <td>BMP hat kein eigenständiges Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch vier Werte für die roten, grünen, blauen und Alpha-Komponenten dargestellt; jeder Wert umfasst <em>D</em> Bit.
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
                Jeder Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die die Stärke der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jeder Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in einer Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk der APNG-Datei enthalten ist; alle Farben der Palette verwenden eine Bittiefe von 8.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und einen Alpha-Wert, der angibt, wie undurchsichtig der Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel besteht aus vier <em>D</em>-Bit-Komponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie undurchsichtig der Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Icons im BMP-Format verwenden fast immer verlustfreie Komprimierung, aber auch verlustbehaftete Verfahren sind verfügbar.
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

Das Bildformat {{Glossary("JPEG", "JPEG")}} (üblicherweise „**Dschei-peg**“ ausgesprochen) ist derzeit das am weitesten verbreitete Format für die verlustbehaftete Komprimierung von Standbildern.
Es eignet sich besonders für Fotografien. Bei Inhalten, die scharfe Konturen erfordern, etwa Diagrammen oder Schaubildern, kann verlustbehaftete Komprimierung zu unbefriedigenden Ergebnissen führen.

JPEG ist eigentlich ein Datenformat für komprimierte Fotos und kein Dateityp.
Die JFIF-Spezifikation (**J**PEG **F**ile **I**nterchange **F**ormat) beschreibt das Format der Dateien, die wir als „JPEG“-Bilder kennen.

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
      <td>65.535 × 65.535 Pixel</td>
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
              <td><em>nicht zutreffend</em></td>
              <td>Echte Graustufen können über den einzelnen Luminanzkanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8</td>
              <td>
                Jeder Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, die jeweils 8 Bit umfassen.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td><em>nicht zutreffend</em></td>
              <td>JPEG bietet keinen Modus für indizierte Farben.</td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>nicht zutreffend</em></td>
              <td>JPEG unterstützt keinen Alphakanal.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td><em>nicht zutreffend</em></td>
              <td>JPEG unterstützt keinen Alphakanal.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Verlustbehaftet; basiert auf der <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform">diskreten Kosinustransformation</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Seit dem 27. Oktober 2006 sind alle US-Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### JPEG-XL-Bild

JPEG XL (JXL) ist ein lizenzgebührenfreies Rasterbildformat, das als ISO/IEC 18181 standardisiert ist.
Es unterstützt verlustbehaftete und verlustfreie Komprimierung, progressive Dekodierung, hohe Bittiefen, große Farbräume, High Dynamic Range (HDR), Transparenz und Animation.
JPEG XL kann außerdem bestehende JPEG-Bilder verlustfrei transkodieren, sodass sich die ursprüngliche JPEG-Datei wiederherstellen lässt.

Die Browser-Unterstützung ist noch nicht universell.
Wenn Sie JPEG XL verwenden, stellen Sie [mit dem Element `<picture>`](#ersatzbilder_bereitstellen) ein alternatives Format wie AVIF, WebP oder JPEG bereit.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">MIME-Typ</th>
      <td><code>image/jxl</code></td>
    </tr>
    <tr>
      <th scope="row">Dateiendung(en)</th>
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
        Chrome 155, Firefox 158 und Safari 17. Safari unterstützt das progressive Herunterladen von JPEG-XL-Dateien nicht (kann sie aber nach dem vollständigen Download darstellen).
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>1.073.741.823 × 1.073.741.823 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Graustufen- und Farbbilder mit optionalen Alphakanälen, hohen Bittiefen, großen Farbräumen und HDR.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustbehaftet und verlustfrei.</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Lizenzgebührenfrei.
        Die Mitwirkenden am Format <a href="https://jpeg.org/items/20190803_press.html">verpflichteten sich während der Standardisierung zu einer lizenzgebührenfreien Veröffentlichung</a>; es sind keine Patente bekannt, für die Lizenzgebühren anfallen.
        Die von Browsern ausgelieferten Decoder-Implementierungen sind quelloffen und umfassen zusätzliche Patentlizenzen.</td>
    </tr>
  </tbody>
</table>

### PNG (Portable Network Graphics)

Das Bildformat {{Glossary("PNG", "PNG")}} (ausgesprochen „**Ping**“) verwendet verlustfreie Komprimierung, unterstützt dabei größere Farbtiefen als [GIF](#gif_graphics_interchange_format), arbeitet effizienter und bietet vollständige Unterstützung für Alpha-Transparenz.

PNG wird breit unterstützt; alle großen Browser unterstützen seine Funktionen vollständig.

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
      <td><a href="https://w3c.github.io/png/">Portable-Network-Graphics-(PNG)-Spezifikation</a></td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>2.147.483.647 × 2.147.483.647 Pixel</td>
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
                Jeder Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt,
                die die Stärke der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jeder Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in einer Farbpalette angibt. Diese ist in einem
                <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk
                der APNG-Datei enthalten; alle Farben der Palette verwenden eine Bittiefe von 8.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die
                Intensität des Graustufenpixels und einen Alpha-Wert, der angibt, wie undurchsichtig der Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jeder Pixel besteht aus vier <em>D</em>-Bit-Komponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie undurchsichtig der Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei, optional mit indizierten Farben wie GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), alle Rechte vorbehalten. Es gelten die W3C-Regeln zu <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a>. Es sind keine Patente bekannt, für die Lizenzgebühren anfallen.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein auf {{Glossary("XML", "XML")}} basierendes [Vektorgrafikformat](https://en.wikipedia.org/wiki/Vector_graphics). Es beschreibt den Inhalt eines Bildes durch Zeichenbefehle, die Formen und Linien erzeugen sowie Farben, Filter und Ähnliches anwenden.
SVG-Dateien eignen sich ideal für Diagramme, Icons und andere Bilder, die in jeder Größe präzise dargestellt werden können.
Daher wird SVG im modernen Webdesign häufig für Benutzeroberflächenelemente verwendet.

SVG-Dateien sind Textdateien mit Quellcode, der bei der Interpretation das gewünschte Bild zeichnet.
Dieses Beispiel definiert etwa eine Zeichenfläche mit einer anfänglichen Größe von 100 × 100 Einheiten, durch die eine diagonale Linie verläuft:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann auf drei Arten in Webinhalten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt im HTML stehen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, die das Bild zeichnen.
2. Ein SVG-Bild kann mithilfe von Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} in HTML eingebettet werden.
3. SVG-Bilder lassen sich überall dort verwenden, wo auch andere Bildtypen eingesetzt werden können, unter anderem mit dem Element {{HTMLElement("img")}} oder der CSS-Eigenschaft {{cssxref("background-image")}}. Bei dieser Art der Verwendung gelten für SVG jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image).

SVG ist ideal für Bilder, die sich durch eine Reihe von Zeichenbefehlen darstellen lassen. Das gilt besonders dann, wenn die spätere Darstellungsgröße unbekannt ist oder variieren kann, da SVG sich stufenlos auf die gewünschte Größe skalieren lässt.
Für reine Bitmap- oder Fotografiebilder ist es im Allgemeinen nicht sinnvoll, obwohl Bitmap-Bilder in ein SVG eingebunden werden können.

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
        Farben in SVG werden mit der
        <a href="/de/docs/Web/CSS/Reference/Values/color_value">CSS-Farbsyntax</a> angegeben.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        SVG-Quellcode kann bei der Übertragung mithilfe von <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Komprimierung</a> oder auf dem Datenträger als <code>.svgz</code>-Datei komprimiert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), alle Rechte vorbehalten.
        Es gelten die W3C-Regeln zu <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a>. Es sind keine Patente bekannt, für die Lizenzgebühren anfallen.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafik-Dateiformat, das für die Speicherung gescannter Fotos entwickelt wurde, aber beliebige Bildarten enthalten kann.
Es ist ein vergleichsweise „schwergewichtiges“ Format, da TIFF-Dateien tendenziell größer sind als Bilder in anderen Formaten.
Das liegt an den häufig enthaltenen Metadaten und daran, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Komprimierungsalgorithmen verwenden, bei denen die Dateien auch nach der Komprimierung relativ groß bleiben.

TIFF unterstützt verschiedene Komprimierungsverfahren. Am häufigsten verwendet werden die von Faxsoftware genutzten CCITT-Group-4-Verfahren (und bei älteren Faxsystemen Group 3) sowie LZW und die verlustbehaftete JPEG-Komprimierung.

Jeder Wert in einer TIFF-Datei wird durch seinen **Tag** (der die Art der Information angibt, etwa die Bildbreite) und seinen **Typ** (der das Speicherformat der Daten angibt) beschrieben. Darauf folgt die Länge des Arrays von Werten, das diesem Tag zugewiesen wird (alle Eigenschaften werden als Arrays gespeichert, auch einzelne Werte).
Dadurch können für dieselben Eigenschaften unterschiedliche Datentypen verwendet werden.
Die Breite eines Bildes, `ImageWidth`, wird beispielsweise mit dem Tag `0x0100` gespeichert und ist ein Array mit einem Eintrag.
Wird Typ 3 (`SHORT`) angegeben, wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Bei Angabe von Typ 4 (`LONG`) wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten. Dies lässt sich beispielsweise zur Darstellung mehrseitiger Dokumente nutzen, etwa eines mehrseitigen Scans oder eines empfangenen Faxes.
Software, die TIFF-Dateien liest, muss allerdings nur das erste Bild unterstützen.

TIFF unterstützt verschiedene Farbräume, nicht nur RGB.
Dazu gehören CMYK, YCbCr und weitere. Daher eignet sich TIFF gut zur Speicherung von Bildern, die für Druck-, Film- oder Fernsehmedien bestimmt sind.

Mit Ausnahme von Safari unterstützen Browser TIFF-Bilder in Webinhalten nicht nativ, sondern nur mithilfe spezieller Bibliotheken oder Browser-Add-ons.
TIFF-Dateien werden daher kaum zur Anzeige von Webinhalten verwendet. _Allerdings_ werden beim Verteilen von Fotos und anderen Kunstwerken, die präzise bearbeitet oder gedruckt werden sollen, häufig herunterladbare TIFF-Dateien angeboten.

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
      <td>4.294.967.295 × 4.294.967.295 Pixel (theoretisch)</td>
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
              <th scope="row">Binärbild</th>
              <td>1</td>
              <td>
                Ein binäres TIFF speichert 8 Bit pro Byte, also ein Bit pro Pixel.
                Das Feld <code>PhotometricInterpretation</code> legt fest, welcher der Werte 0 und 1 Schwarz beziehungsweise Weiß darstellt.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen</th>
              <td>4 und 8</td>
              <td>
                Jeder Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8</td>
              <td>
                Alle Echtfarben-RGB-Bilder werden mit jeweils 8 Bit für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>4 und 8</td>
              <td>
                Jeder Pixel ist ein Index in einem <code>ColorMap</code>-Eintrag, der die im Bild verwendeten Farben definiert.
                Die Farbtabelle enthält zuerst alle Rotwerte, dann alle Grünwerte und schließlich alle Blauwerte (statt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem im Feld <code>SamplesPerPixel</code> mehr als 3 Samples pro Pixel angegeben und der Alpha-Typ festgelegt wird (1 für eine zugeordnete, vormultiplizierte Alpha-Komponente und 2 für nicht zugeordnetes Alpha – eine separate Maske). Alphakanäle werden in TIFF-Dateien jedoch selten verwendet und möglicherweise von der Software der Benutzer nicht unterstützt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem im Feld <code>SamplesPerPixel</code> mehr als 3 Samples pro Pixel angegeben und der Alpha-Typ festgelegt wird (1 für eine zugeordnete, vormultiplizierte Alpha-Komponente und 2 für nicht zugeordnetes Alpha – eine separate Maske). Alphakanäle werden in TIFF-Dateien jedoch selten verwendet und möglicherweise von der Software der Benutzer nicht unterstützt.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert. Unterstützt werden jedoch die verlustfreien Verfahren PackBits und LZW sowie die verlustbehaftete JPEG-Komprimierung.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von etwaigen Lizenzen verwendeter Bibliotheken); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Komprimierung durch prädiktive Kodierung auf Grundlage des Videocodecs VP8 sowie verlustfreie Komprimierung, bei der wiederkehrende Daten ersetzt werden.
Verlustbehaftet komprimierte WebP-Bilder sind bei visuell ähnlicher Qualität im Durchschnitt 25–35 % kleiner als JPEG-Bilder.
Verlustfrei komprimierte WebP-Bilder sind normalerweise 26 % kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animationen: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann.
Verlustfreies WebP enthält den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz darstellt.
Auch Endlosschleifen werden unterstützt.

WebP wird inzwischen von den aktuellen Versionen der großen Webbrowser breit unterstützt, auch wenn ältere Browserversionen es nicht unterstützen.
Stellen Sie ein Ersatzbild im Format [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) bereit, beispielsweise mit dem [Element `<picture>`](/de/docs/Web/HTML/Reference/Elements/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF-Container-Spezifikation</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP Lossless Bitstream Specification</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch zum <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden.
        Ausführlichere Angaben zu den unterstützten Versionen finden Sie unter <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a>.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383 × 16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftetes WebP speichert das Bild im 8-Bit-Format Y'CbCr 4:2:0 (YUV420).
        Verlustfreies WebP verwendet 8-Bit-ARGB-Farben mit jeweils 8 Bit pro Komponente, insgesamt also 32 Bit pro Pixel.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei (Huffman-, LZ77- oder Farb-Cache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; der Quellcode ist offen verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Safari unter macOS hängt die WebP-Unterstützung sowohl von der Safari- als auch von der macOS-Version ab. Sie benötigen Safari 14 oder höher sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap file)

XBM-Dateien (X Bitmap) waren die ersten im Web unterstützten Bilddateien. Sie werden jedoch nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsprobleme birgt.
Moderne Browser unterstützen XBM-Dateien seit vielen Jahren nicht mehr. Bei älteren Inhalten können Sie ihnen allerdings noch begegnen.

XBM verwendet einen Ausschnitt aus C-Code, um den Bildinhalt als Byte-Array darzustellen.
Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die Breite und Höhe der Bitmap angeben (und optional den Hotspot, falls das Bild als Cursor vorgesehen ist). Darauf folgt ein Array vom Typ `unsigned char`, in dem jeder Wert acht monochrome 1-Bit-Pixel enthält.

Die Bildbreite muss ein Vielfaches von 8 Pixeln sein.
Der folgende Code stellt beispielsweise ein XBM-Bild mit 8 × 8 Pixeln in einem schwarz-weißen Schachbrettmuster dar:

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
              <th scope="row">Echtfarben</th>
              <td><em>nicht zutreffend</em></td>
              <td><em>nicht zutreffend</em></td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td><em>nicht zutreffend</em></td>
              <td><em>nicht zutreffend</em></td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>nicht zutreffend</em></td>
              <td><em>nicht zutreffend</em></td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td><em>nicht zutreffend</em></td>
              <td><em>nicht zutreffend</em></td>
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

## Ein Bildformat auswählen

Bildformate werden in der Regel anhand von Faktoren wie Komprimierung, Qualität, Breite und Dauer der Browser-Unterstützung sowie benötigten Funktionen wie Transparenz oder Animation ausgewählt.

Bevorzugen Sie für Rasterbilder [WebP](#webp-bild) oder [AVIF](#avif-bild), da diese im Allgemeinen besser komprimieren als PNG, JPEG und GIF.
Für große, hochauflösende Rasterbilder sollten Sie auch [JPEG XL](#jpeg-xl-bild) in Betracht ziehen.
Die meisten Browser können solche Bilder progressiv darstellen, indem sie bereits vor dem vollständigen Download eine erste Version anzeigen.

Wenn Sie Browser unterstützen müssen, die WebP, AVIF oder JPEG XL nicht darstellen können, verwenden Sie das Element {{HTMLElement("picture")}}, um ein PNG- oder JPEG-Ersatzbild bereitzustellen.
Dies wird weiter unten unter [Ersatzbilder bereitstellen](#ersatzbilder_bereitstellen) gezeigt.

Komprimierung kann verlustbehaftet sein, wobei Bilddaten verworfen werden, um deutlich kleinere Dateien zu erhalten, oder verlustfrei, wobei das Original exakt reproduziert wird.
Bevorzugen Sie für Screenshots, Diagramme, Logos und Strichzeichnungen eine verlustfreie Kodierung, da Unschärfe und farbige Ränder um Text und scharfe Kanten deutlich sichtbar sind.
Fotografien und andere Bilder mit kontinuierlichen Farbverläufen vertragen normalerweise eine verlustbehaftete Komprimierung, weil die verworfenen Details schwerer zu erkennen sind.
WebP und AVIF unterstützen sowohl verlustbehaftete als auch verlustfreie Komprimierung; den gewünschten Modus wählen Sie bei der Kodierung.
JPEG ist verlustbehaftet und daher oft ein gutes Ersatzformat für Fotografien. PNG ist verlustfrei und eignet sich deshalb besser für Screenshots, Diagramme und Strichzeichnungen.
PNG ist auch das Ersatzformat für Bilder, die Transparenz benötigen, da JPEG keinen Alphakanal hat.

Verwenden Sie für Diagramme, Schaubilder und andere Bilder, die in unterschiedlichen Größen präzise dargestellt werden müssen, [SVG](#svg_scalable_vector_graphics).
Von den meisten Icons gibt es Vektorgrafikversionen, die Sie nach Möglichkeit bevorzugen sollten. Wenn nur Rasterversionen verfügbar sind, wählen Sie [WebP](#webp-bild), stellen Sie aber wie bei anderen Rasterbildern ein Ersatzformat bereit.

## Ersatzbilder bereitstellen

Das HTML-Standardelement {{HTMLElement("img")}} unterstützt keine kompatibilitätsbedingten Ersatzformate für Bilder, das Element {{HTMLElement("picture")}} dagegen schon.
`<picture>` dient als Container für mehrere {{HTMLElement("source")}}-Elemente, die jeweils eine Bildversion in einem anderen Format oder für andere [Medienbedingungen](/de/docs/Web/CSS/Reference/At-rules/@media) angeben. Hinzu kommt ein `<img>`-Element, das festlegt, wo das Bild angezeigt wird, und die standardmäßige beziehungsweise „am besten kompatible“ Ersatzversion bereitstellt.

Wenn Sie beispielsweise ein Diagramm anzeigen, das sich am besten als SVG darstellen lässt, aber auch eine PNG- oder GIF-Version als Ersatz anbieten möchten, könnten Sie Folgendes verwenden:

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

Sie können beliebig viele `<source>`-Elemente angeben, auch wenn normalerweise zwei oder drei ausreichen.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu im Web verwendeten Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}}-Elemente {{HTMLElement("img")}} und {{HTMLElement("picture")}}
- Die CSS-Eigenschaft {{cssxref("background-image")}}
- Der Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) und das Interface [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)

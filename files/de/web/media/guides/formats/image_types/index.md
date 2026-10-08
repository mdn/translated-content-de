---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: 7b642841e72ef94e8723f26892000383513b550d
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die Webbrowser im Allgemeinen unterstützen. Außerdem erhalten Sie Informationen, die Ihnen helfen, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

## Gängige Bilddateitypen

Die im Web am häufigsten verwendeten Bilddateiformate sind nachfolgend aufgeführt.

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
        Eine gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig).
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
          Dank seiner hohen Leistung und des lizenzgebührenfreien Bildformats ist AVIF sowohl für Standbilder als auch für animierte Bilder eine gute Wahl.
          Es bietet eine wesentlich bessere Komprimierung als PNG oder JPEG und unterstützt höhere Farbtiefen, animierte Frames, Transparenz und mehr.
          Wenn Sie AVIF verwenden, sollten Sie Ersatzformate bereitstellen, die von mehr Browsern unterstützt werden (beispielsweise mit dem Element <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>).<br />
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
        Eine gute Wahl für einfache Bilder und Animationen.
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
          Eine gute Wahl für die verlustbehaftete Komprimierung von Standbildern (derzeit das am häufigsten verwendete Format).
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
        Unterstützt verlustbehaftete und verlustfreie Komprimierung, progressive Dekodierung, HDR, große Farbräume, Transparenz und Animationen.
        Da noch nicht alle Browser das Format unterstützen, sollten Sie mit dem Element <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&lt;picture&gt;</a></code> ein Ersatzformat bereitstellen.<br />
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
          PNG ist JPEG vorzuziehen, wenn Quellbilder genauer wiedergegeben werden müssen oder Transparenz benötigt wird. WebP/AVIF bieten eine noch bessere Komprimierung und Wiedergabe, werden jedoch von weniger Browsern unterstützt.<br />
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
        Vektorbildformat; ideal für Benutzeroberflächenelemente, Symbole, Diagramme und Ähnliches, die in unterschiedlichen Größen präzise dargestellt werden müssen.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, IE, Opera, Safari.
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#webp_image">WebP</a></th>
      <th scope="row">Web Picture format</th>
      <td><code>image/webp</code></td>
      <td><code>.webp</code></td>
      <td>
        Eine ausgezeichnete Wahl sowohl für Standbilder als auch für animierte Bilder.
        WebP bietet eine wesentlich bessere Komprimierung als PNG oder JPEG und unterstützt höhere Farbtiefen, animierte Frames, Transparenz und mehr.
        AVIF bietet eine etwas bessere Komprimierung, wird aber von Browsern nicht ganz so gut unterstützt und unterstützt keine progressive Darstellung.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG und GIF sind im Vergleich zu neueren Formaten wie WebP und AVIF weniger leistungsfähig, genießen aber eine breitere „historische“ Browser-Unterstützung. Die neueren Bildformate werden immer beliebter, da Browser ohne entsprechende Unterstützung zunehmend an Bedeutung verlieren (das heißt, sie haben praktisch keinen Marktanteil mehr).

Die folgende Liste enthält Bildformate, die im Web vorkommen, für Webinhalte jedoch vermieden werden sollten (im Allgemeinen, weil sie entweder nicht von vielen Browsern unterstützt werden oder weil es bessere Alternativen gibt).

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
> Die Abkürzung jedes Bildformats führt zu einer ausführlicheren Beschreibung des Formats, seiner Möglichkeiten und detaillierten Informationen zur Browser-Kompatibilität (einschließlich der Versionen, die die Unterstützung eingeführt haben, und besonderer Funktionen, die möglicherweise erst später hinzugekommen sind).

> [!NOTE]
> Safari 11.1 führte die Möglichkeit ein, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Bug](https://crbug.com/791658) und im [Firefox-Bug](https://bugzil.la/895131).

## Details zu Bilddateitypen

Die folgenden Abschnitte bieten einen kurzen Überblick über die einzelnen Bilddateitypen, die von Webbrowsern unterstützt werden.

In den folgenden Tabellen bezeichnet **Bits pro Komponente** die Anzahl der Bits, mit denen jede Farbkomponente dargestellt wird.
Eine RGB-Farbtiefe von 8 bedeutet beispielsweise, dass die roten, grünen und blauen Komponenten jeweils durch einen 8-Bit-Wert dargestellt werden.
Die **Bittiefe** hingegen ist die Gesamtzahl der Bits, mit denen jedes Pixel im Speicher dargestellt wird.

### APNG (Animated Portable Network Graphics)

APNG ist ein ursprünglich von Mozilla eingeführtes Dateiformat, das den [PNG](#png_portable_network_graphics)-Standard um Unterstützung für animierte Bilder erweitert.
APNG ähnelt konzeptionell dem seit Jahrzehnten verwendeten Format für animierte GIFs, bietet jedoch mehr Möglichkeiten: Es unterstützt verschiedene [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth), während animierte GIFs nur 8-Bit-[Indexfarben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG eignet sich ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einer Tonspur synchronisiert werden müssen, etwa Fortschrittsanzeigen, animierte [Aktivitätsindikatoren](https://en.wikipedia.org/wiki/Throbber) und andere Animationssequenzen.
APNG ist beispielsweise [eines der unterstützten Formate zum Erstellen animierter Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichten-App unter iOS).
Es wird auch häufig für animierte Teile der Benutzeroberflächen von Webbrowsern verwendet.

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
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die die Intensität der roten, grünen und blauen Farbkomponente angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in einer Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk der APNG-Datei enthalten ist;
                alle Farben der Palette verwenden eine Bittiefe von 8.
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
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Bit-Komponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie deckend das Pixel ist.
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
> AVIF hat das Potenzial, beim Austausch von Bildern in Webinhalten „das nächste große Ding“ zu werden.
> Es bietet hochmoderne Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzbedingungen und Patentgebühren, die vergleichbare Alternativen ausgebremst haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde.
Das Format profitiert von den erheblichen Fortschritten bei der Videokodierung in den letzten Jahren und könnte möglicherweise auch von der damit verbundenen Unterstützung für hardwarebeschleunigte Darstellung profitieren.
In manchen Fällen hat es jedoch auch Nachteile, da Video- und Bildkodierung unterschiedliche Anforderungen stellen.

Das Format bietet:

- Hervorragende verlustbehaftete Komprimierung im Vergleich zu JPG und PNG bei visuell ähnlicher Qualität (beispielsweise sind verlustbehaftete AVIF-Bilder etwa 50 % kleiner als JPEG-Bilder).
- AVIF bietet im Allgemeinen eine bessere Komprimierung als WebP – im Median 50 % gegenüber 30 % Komprimierung für dieselbe JPG-Bildsammlung (Quelle: [Vergleich von AVIF und WebP](https://www.ctrl.blog/entry/webp-avif-comparison/) (CTRL Blog)).
- Verlustfreie Komprimierung.
- Speicherung von Animationen und mehreren Bildern (ähnlich wie animierte GIFs, jedoch mit wesentlich besserer Komprimierung).
- Unterstützung für einen Alpha-Kanal (also für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für die Speicherung von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Bildbereichen darstellen können.
- Großer Farbraum: Unterstützung für Bilder, die ein breiteres Farbspektrum enthalten können.

AVIF unterstützt keine progressive Darstellung. Dateien müssen daher vollständig heruntergeladen werden, bevor sie angezeigt werden können.
Dies hat häufig kaum Auswirkungen auf die tatsächliche Benutzererfahrung, da AVIF-Dateien wesentlich kleiner sind als entsprechende JPEG- oder PNG-Dateien und deshalb deutlich schneller heruntergeladen und angezeigt werden können.
Bei größeren Dateien kann sich dies jedoch erheblich auswirken; in diesem Fall sollten Sie ein Format in Betracht ziehen, das progressive Darstellung unterstützt.

AVIF wird von Chrome, Edge, Opera, Safari und Firefox unterstützt.
Da die Unterstützung noch nicht umfassend ist (und historisch noch nicht weit zurückreicht), sollten Sie mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder einem anderen Ansatz) ein Ersatzbild im Format [WebP](#webp-bild), [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) bereitstellen.

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
            Firefox 93 unterstützt Standbilder, sowohl mit vollem als auch mit begrenztem Farbbereich sowie Bildtransformationen zum Spiegeln und Drehen.
            Mit der Einstellung <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a>
            lässt sich anpassen, wie strikt die Einhaltung der Spezifikation geprüft wird.
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
        <p>Eine nicht vollständige Zusammenfassung:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bittiefe: 8/10/12 Bit</li>
          <li>Alpha-Unterstützung</li>
          <li>Unterstützung für ICC-Profile</li>
          <li>
            NCLX-Unterstützung: sRGB, lineares sRGB, lineares Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3 usw.
          </li>
          <li>Unterstützung für Kachelung</li>
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

### BMP (Bitmap file)

Der Dateityp **BMP** (**Bitmap image**) ist vor allem auf Windows-Computern verbreitet und wird in Webanwendungen und -inhalten im Allgemeinen nur für Sonderfälle verwendet.

> [!WARNING]
> Für Website-Inhalte sollten Sie BMP-Dateien normalerweise vermeiden.
> Die häufigste Form einer BMP-Datei speichert die Daten als unkomprimiertes Rasterbild. Dadurch entstehen im Vergleich zu PNG- oder JPG-Bildern große Dateien.
> Es gibt effizientere BMP-Formate, die jedoch nicht weit verbreitet sind und von Webbrowsern nur selten unterstützt werden.

Theoretisch unterstützt BMP verschiedene interne Datendarstellungen.
Die einfachste und am häufigsten verwendete Form einer BMP-Datei ist ein unkomprimiertes Rasterbild: Jedes Pixel belegt drei Bytes für seine roten, grünen und blauen Komponenten, und jede Zeile wird mit `0x00`-Bytes auf eine Breite aufgefüllt, die ein Vielfaches von vier Bytes ist.

In der Spezifikation sind weitere Datendarstellungen definiert, die jedoch nicht weit verbreitet und häufig überhaupt nicht implementiert sind.
Dazu gehören die Unterstützung verschiedener Bittiefen, Indexfarben und Alpha-Kanäle sowie unterschiedliche Pixelreihenfolgen (standardmäßig wird BMP von der linken unteren Ecke nach rechts und oben geschrieben, statt von der linken oberen Ecke nach rechts und unten).

Theoretisch werden mehrere Komprimierungsalgorithmen unterstützt; die Bilddaten können innerhalb der BMP-Datei auch im Format [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) gespeichert werden.

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
                Jedes Bit stellt ein einzelnes Pixel dar, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte für die roten, grünen und blauen Farbkomponenten dargestellt; jeder Wert hat <em>D</em> Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen 2, 4 oder 8 Bit langen Wert dargestellt, der als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>k. A.</em></td>
              <td>BMP hat kein eigenständiges Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte für die roten, grünen und blauen Farbkomponenten sowie die Alpha-Komponente dargestellt; jeder Wert hat <em>D</em> Bit.
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
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>;
        Microsoft hält zwar Patente auf BMP, hat aber zugesagt, seine Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind.
        Dies ist allerdings nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der Online-Dienstanbieter CompuServe das Bilddateiformat **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder seines Dienstes nutzen konnten.
GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch)-Algorithmus (LZW), um Grafiken mit 8-Bit-Indexfarben verlustfrei zu komprimieren.
Zusammen mit [XBM](#xbm_x_window_system_bitmap_file) war GIF eines der ersten beiden von {{Glossary("HTML", "HTML")}} unterstützten Grafikformate.

Jedes Pixel in einem GIF wird durch einen einzelnen 8-Bit-Wert dargestellt, der als Index in eine Palette mit 24-Bit-Farben dient (jeweils 8 Bit für Rot, Grün und Blau). Die Länge einer Farbtabelle ist immer eine Zweierpotenz (das heißt, jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge).
Um mehr als 255 oder 256 Farben zu simulieren, wird im Allgemeinen [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet.
Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke mit jeweils eigener Farbpalette aneinanderzureihen, um Echtfarbenbilder zu erzeugen; in der Praxis geschieht dies jedoch selten.

Pixel sind deckend, sofern nicht ein bestimmter Farbindex als transparent festgelegt ist. Pixel mit diesem Farbwert sind dann vollständig transparent.

GIF unterstützt einfache Animationen: Auf einen ersten Frame in voller Größe folgt eine Reihe von Bildern, die jeweils die Bildbereiche enthalten, die sich von Frame zu Frame ändern.

GIF ist aufgrund seiner Einfachheit und Kompatibilität seit Jahrzehnten äußerst beliebt.
Die Unterstützung für Animationen sorgte im Zeitalter sozialer Medien für einen erneuten Popularitätsschub, als animierte GIFs zunehmend für kurze „Videos“, Memes und andere einfache Animationssequenzen verwendet wurden.

Eine weitere beliebte Funktion von GIF ist die Unterstützung für [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>). Dabei werden Pixelzeilen in einer anderen Reihenfolge gespeichert, sodass teilweise empfangene Dateien bereits in geringerer Qualität angezeigt werden können.
Dies ist besonders bei langsamen Netzwerkverbindungen nützlich.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung von Echtfarbenbildern in GIF zu unbefriedigendem Dithering führen kann.
Für moderne Inhalte sollten Sie normalerweise [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen in Betracht ziehen.

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
              <td><em>k. A.</em></td>
              <td>GIF enthält kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td><em>k. A.</em></td>
              <td>GIF unterstützt keine Echtfarbenpixel.</td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td>8</td>
              <td>
                Jede Farbe einer GIF-Palette wird durch jeweils 8 Bit für Rot, Grün und Blau definiert (insgesamt 24 Bit pro Farbe).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>k. A.</em></td>
              <td>GIF bietet kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td><em>k. A.</em></td>
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
        Seit dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows icon)

Das Dateiformat ICO (Microsoft Windows icon) wurde von Microsoft für Desktop-Symbole von Windows-Systemen entwickelt.
Frühe Versionen des Internet Explorer führten jedoch die Möglichkeit ein, im Stammverzeichnis einer Website eine ICO-Datei namens `favicon.ico` bereitzustellen, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** festzulegen – ein Symbol, das im Favoritenmenü und an anderen Stellen angezeigt wird, an denen eine symbolische Darstellung der Website nützlich ist.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem Symbol auflistet.
Auf das Verzeichnis folgen die Daten der Symbole.
Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateiheader oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich Dateiheader) sein.
Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format wählen, da die Unterstützung für PNG innerhalb von ICO-Dateien erst mit Windows Vista eingeführt wurde und möglicherweise nicht überall zuverlässig funktioniert.

> [!WARNING]
> ICO-Dateien sollten _nicht_ in Webinhalten verwendet werden.
> Auch für Favicons werden sie inzwischen seltener verwendet; stattdessen kommen PNG-Dateien und das Element {{HTMLElement("link")}} zum Einsatz, wie unter [Symbole für unterschiedliche Verwendungskontexte bereitstellen](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

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
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte für die roten, grünen und blauen Farbkomponenten dargestellt; jeder Wert hat <em>D</em> Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen 2, 4 oder 8 Bit langen Wert dargestellt, der als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>k. A.</em></td>
              <td>BMP hat kein eigenständiges Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte für die roten, grünen und blauen Farbkomponenten sowie die Alpha-Komponente dargestellt; jeder Wert hat <em>D</em> Bit.
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
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die die Intensität der roten, grünen und blauen Farbkomponente angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in einer Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk der APNG-Datei enthalten ist; alle Farben der Palette verwenden eine Bittiefe von 8.
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
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Bit-Komponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie deckend das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Symbole im BMP-Format verwenden fast immer verlustfreie Komprimierung, es sind jedoch auch verlustbehaftete Verfahren verfügbar.
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

Das Bildformat {{Glossary("JPEG", "JPEG")}} (üblicherweise „**Dschei-peg**“ ausgesprochen) ist derzeit das am weitesten verbreitete Format zur verlustbehafteten Komprimierung von Standbildern.
Es eignet sich besonders für Fotografien; bei Inhalten, die scharfe Konturen erfordern, etwa Diagrammen oder Schaubildern, kann eine verlustbehaftete Komprimierung zu unbefriedigenden Ergebnissen führen.

JPEG ist streng genommen ein Datenformat für komprimierte Fotos und kein Dateityp.
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
              <td><em>k. A.</em></td>
              <td>Echte Graustufen können über den einzelnen Luminanzkanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, die jeweils 8 Bit umfassen.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td><em>k. A.</em></td>
              <td>JPEG bietet keinen Farbmodus mit Indexfarben.</td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>k. A.</em></td>
              <td>JPEG unterstützt keinen Alpha-Kanal.</td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td><em>k. A.</em></td>
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
      <td>Seit dem 27. Oktober 2006 sind alle US-amerikanischen Patente abgelaufen.</td>
    </tr>
  </tbody>
</table>

### JPEG-XL-Bild

JPEG XL (JXL) ist ein lizenzgebührenfreies Rasterbildformat, das als ISO/IEC 18181 standardisiert ist.
Es unterstützt verlustbehaftete und verlustfreie Komprimierung, progressive Dekodierung, hohe Bittiefen, große Farbräume, High Dynamic Range (HDR), Transparenz und Animationen.
JPEG XL kann außerdem vorhandene JPEG-Bilder verlustfrei transkodieren, sodass sich die ursprüngliche JPEG-Datei wiederherstellen lässt.

Noch nicht alle Browser unterstützen das Format.
Wenn Sie JPEG XL verwenden, stellen Sie [mit dem `<picture>`-Element](#ersatzbilder_bereitstellen) ein alternatives Format wie AVIF, WebP oder JPEG bereit.

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
        Chrome 155, Edge 155, Firefox 158 und Safari 17. Safari unterstützt den progressiven Download von JPEG-XL-Dateien nicht (kann sie aber nach dem vollständigen Download darstellen).
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>1.073.741.823 × 1.073.741.823 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Graustufen- und Farbbilder, optional mit Alpha-Kanälen, hohen Bittiefen, großen Farbräumen und HDR.
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

Das Bildformat {{Glossary("PNG", "PNG")}} (ausgesprochen „**Ping**“) verwendet verlustfreie Komprimierung, unterstützt höhere Farbtiefen als [GIF](#gif_graphics_interchange_format), ist effizienter und bietet vollständige Unterstützung für Alpha-Transparenz.

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
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenpixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt,
                die die Intensität der roten, grünen und blauen Farbkomponente angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in einer Farbpalette angibt, die in einem
                <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk
                der APNG-Datei enthalten ist; alle Farben der Palette verwenden eine Bittiefe von 8.
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
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel besteht aus vier <em>D</em>-Bit-Komponenten: Rot, Grün, Blau und dem Alpha-Wert, der angibt, wie deckend das Pixel ist.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei, optional mit Indexfarben wie bei GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), alle Rechte vorbehalten. Es gelten die W3C-Regelungen zu <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a>. Es sind keine Patente bekannt, für die Lizenzgebühren anfallen.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein auf {{Glossary("XML", "XML")}} basierendes [Vektorgrafikformat](https://en.wikipedia.org/wiki/Vector_graphics), das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen festlegt. Diese erzeugen Formen und Linien und wenden Farben, Filter und Ähnliches an.
SVG-Dateien eignen sich ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe präzise dargestellt werden können.
Daher ist SVG im modernen Webdesign für Benutzeroberflächenelemente beliebt.

SVG-Dateien sind Textdateien mit Quellcode, der bei der Interpretation das gewünschte Bild zeichnet.
Dieses Beispiel definiert etwa eine Zeichenfläche mit einer anfänglichen Größe von 100 × 100 Einheiten und einer diagonal durch die Fläche verlaufenden Linie:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann auf drei Arten in Webinhalten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt im HTML stehen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, die das Bild zeichnen.
2. Ein SVG-Bild kann mit Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} in HTML eingebettet werden.
3. SVG-Bilder können überall dort verwendet werden, wo auch andere Bildtypen verwendet werden können, beispielsweise mit dem {{HTMLElement("img")}}-Element oder der CSS-Eigenschaft {{cssxref("background-image")}}. Bei dieser Verwendung von SVG gelten jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image).

SVG ist eine ideale Wahl für Bilder, die sich durch eine Reihe von Zeichenbefehlen darstellen lassen. Das gilt insbesondere, wenn die Darstellungsgröße unbekannt ist oder variieren kann, da SVG stufenlos auf die gewünschte Größe skaliert.
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
        Farben werden in SVG mit der
        <a href="/de/docs/Web/CSS/Reference/Values/color_value">CSS-Farbsyntax</a> angegeben.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        SVG-Quelltext kann während der Übertragung mit Verfahren der <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Komprimierung</a> oder auf dem Datenträger als <code>.svgz</code>-Datei komprimiert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), alle Rechte vorbehalten.
        Es gelten die W3C-Regelungen zu <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a>. Es sind keine Patente bekannt, für die Lizenzgebühren anfallen.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafik-Dateiformat, das zur Speicherung gescannter Fotos entwickelt wurde, aber auch andere Arten von Bildern enthalten kann.
Es ist ein vergleichsweise „schwergewichtiges“ Format: TIFF-Dateien sind tendenziell größer als Bilder in anderen Formaten.
Das liegt sowohl an den häufig enthaltenen Metadaten als auch daran, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Komprimierungsalgorithmen verwenden, die auch nach der Komprimierung recht große Dateien ergeben.

TIFF unterstützt verschiedene Komprimierungsverfahren. Am häufigsten werden jedoch die von Faxsoftware verwendeten Verfahren CCITT Group 4 (und bei älteren Faxsystemen Group 3) sowie LZW und die verlustbehaftete JPEG-Komprimierung eingesetzt.

Jeder Wert in einer TIFF-Datei wird durch seinen **Tag** (der angibt, um welche Art von Information es sich handelt, beispielsweise die Bildbreite) und seinen **Typ** (der das Speicherformat der Daten angibt) beschrieben. Darauf folgt die Länge des Werte-Arrays, das diesem Tag zugeordnet wird (alle Eigenschaften werden in Arrays gespeichert, auch einzelne Werte).
Dadurch können für dieselben Eigenschaften unterschiedliche Datentypen verwendet werden.
Die Breite eines Bildes, `ImageWidth`, wird beispielsweise unter dem Tag `0x0100` als Array mit einem Eintrag gespeichert.
Mit Typ 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Mit Typ 4 (`LONG`) wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten. Dies kann beispielsweise zur Darstellung mehrseitiger Dokumente verwendet werden (etwa eines mehrseitigen gescannten Dokuments oder eines empfangenen Faxes).
Software, die TIFF-Dateien liest, muss allerdings nur das erste Bild unterstützen.

TIFF unterstützt verschiedene Farbräume, nicht nur RGB.
Dazu gehören CMYK, YCbCr und weitere. Daher eignet sich TIFF gut zur Speicherung von Bildern, die für Druck-, Film- oder Fernsehmedien bestimmt sind.

Abgesehen von Safari unterstützen Browser TIFF-Bilder in Webinhalten nicht nativ, sondern nur mithilfe spezieller Bibliotheken oder Browser-Erweiterungen.
TIFF-Dateien werden deshalb nicht häufig zur Anzeige von Webinhalten verwendet. _Allerdings_ werden oft herunterladbare TIFF-Dateien angeboten, wenn Fotos oder andere grafische Werke für die präzise Bearbeitung oder den Druck bereitgestellt werden.

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
              <th scope="row">Zweistufig</th>
              <td>1</td>
              <td>
                Ein zweistufiges TIFF speichert in jedem Byte acht 1-Bit-Pixel.
                Das Feld <code>PhotometricInterpretation</code> legt fest, welcher der Werte 0 und 1 Schwarz und welcher Weiß darstellt.
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
              <th scope="row">Echtfarben</th>
              <td>8</td>
              <td>
                Alle RGB-Echtfarbenbilder werden mit jeweils 8 Bit für Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einen <code>ColorMap</code>-Eintrag, der die im Bild verwendeten Farben definiert.
                Die Farbtabelle enthält zuerst alle Rotwerte, dann alle Grünwerte und schließlich alle Blauwerte (anstelle von <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem im Feld <code>SamplesPerPixel</code> mehr als drei Werte pro Pixel angegeben werden und der Alpha-Typ festgelegt wird (1 für eine zugeordnete, vormultiplizierte Alpha-Komponente und 2 für nicht zugeordnetes Alpha – eine separate Maske). Alpha-Kanäle werden in TIFF-Dateien jedoch selten verwendet und möglicherweise von der Software der Benutzer nicht unterstützt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td>8</td>
              <td>
                Alpha-Informationen werden hinzugefügt, indem im Feld <code>SamplesPerPixel</code> mehr als drei Werte pro Pixel angegeben werden und der Alpha-Typ festgelegt wird (1 für eine zugeordnete, vormultiplizierte Alpha-Komponente und 2 für nicht zugeordnetes Alpha – eine separate Maske). Alpha-Kanäle werden in TIFF-Dateien jedoch selten verwendet und möglicherweise von der Software der Benutzer nicht unterstützt.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustfreie PackBits- und LZW-Komprimierung sowie verlustbehaftete JPEG-Komprimierung werden unterstützt.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von möglichen Lizenzen für verwendete Bibliotheken); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Komprimierung mittels prädiktiver Kodierung auf Basis des Videocodecs VP8 sowie verlustfreie Komprimierung, bei der wiederkehrende Daten durch Verweise ersetzt werden.
Verlustbehaftete WebP-Bilder sind bei visuell ähnlicher Qualität durchschnittlich 25–35 % kleiner als JPEG-Bilder.
Verlustfreie WebP-Bilder sind normalerweise 26 % kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animationen: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann.
Verlustfreies WebP enthält den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz darstellt.
Wiederholungen werden unterstützt.

WebP wird inzwischen von aktuellen Versionen der großen Webbrowser breit unterstützt, auch wenn die Unterstützung historisch nicht weit zurückreicht.
Stellen Sie ein Ersatzbild im Format [JPEG](#jpeg_joint_photographic_experts_group_image) oder [PNG](#png_portable_network_graphics) bereit, beispielsweise mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF-Container-Spezifikation</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP-Spezifikation für verlustfreie Bitstreams</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch zum <em>Exportieren</em> von Bildern aus einem Canvas verwendet werden.
        Unter <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> finden Sie genauere Angaben dazu, ab welchen Versionen dies unterstützt wird.</p>
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
> Unter Safari für macOS hängt die WebP-Unterstützung sowohl von der Safari- als auch von der macOS-Version ab. Sie benötigen Safari 14 oder höher sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap file)

XBM-Dateien (X Bitmap) waren die ersten im Web unterstützten Bilddateien. Sie werden jedoch nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsrisiken birgt.
Moderne Browser unterstützen XBM-Dateien seit vielen Jahren nicht mehr. Bei älteren Inhalten können Sie dennoch auf solche Dateien stoßen.

XBM verwendet einen C-Codeausschnitt, um den Bildinhalt als Byte-Array darzustellen.
Jedes Bild besteht aus zwei bis vier `#define`-Direktiven, die die Breite und Höhe der Bitmap angeben (und optional den Hotspot, falls das Bild als Cursor gedacht ist). Darauf folgt ein Array vom Typ `unsigned char`, in dem jeder Wert acht monochrome 1-Bit-Pixel enthält.

Die Bildbreite muss ein Vielfaches von acht Pixeln sein.
Der folgende Code stellt beispielsweise ein 8 × 8 Pixel großes XBM-Bild mit einem schwarz-weißen Schachbrettmuster dar:

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
              <td><em>k. A.</em></td>
              <td><em>k. A.</em></td>
            </tr>
            <tr>
              <th scope="row">Indexfarben</th>
              <td><em>k. A.</em></td>
              <td><em>k. A.</em></td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>k. A.</em></td>
              <td><em>k. A.</em></td>
            </tr>
            <tr>
              <th scope="row">Echtfarben mit Alpha</th>
              <td><em>k. A.</em></td>
              <td><em>k. A.</em></td>
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

Bildformate werden üblicherweise anhand von Faktoren wie Komprimierung, Qualität, Umfang der Browser-Unterstützung und der Frage ausgewählt, ob Funktionen wie Transparenz oder Animation benötigt werden.

Bevorzugen Sie für Rasterbilder [WebP](#webp-bild) oder [AVIF](#avif-bild), die im Allgemeinen eine bessere Komprimierung als PNG, JPEG und GIF bieten.
Für große, hochauflösende Rasterbilder sollten Sie auch [JPEG XL](#jpeg-xl-bild) in Betracht ziehen.
Die meisten Browser können solche Bilder progressiv darstellen, indem sie eine erste Version anzeigen, bevor das vollständige Bild heruntergeladen ist.

Wenn Sie Browser unterstützen müssen, die WebP, AVIF oder JPEG XL nicht darstellen können, verwenden Sie das Element {{HTMLElement("picture")}}, um ein PNG- oder JPEG-Ersatzbild bereitzustellen.
Dies wird weiter unten unter [Ersatzbilder bereitstellen](#ersatzbilder_bereitstellen) gezeigt.

Die Komprimierung kann verlustbehaftet sein, wobei Bilddaten verworfen werden, um wesentlich kleinere Dateien zu erhalten, oder verlustfrei, wobei das Original exakt wiedergegeben wird.
Bevorzugen Sie für Screenshots, Diagramme, Logos und Strichzeichnungen eine verlustfreie Kodierung, da Unschärfe und Farbsäume um Text und scharfe Kanten deutlich sichtbar sind.
Fotografien und andere Bilder mit kontinuierlichen Tonwerten vertragen normalerweise eine verlustbehaftete Komprimierung, da die verlorenen Details schwerer zu erkennen sind.
WebP und AVIF unterstützen sowohl verlustbehaftete als auch verlustfreie Komprimierung; die gewünschte Variante wählen Sie bei der Kodierung.
JPEG ist verlustbehaftet und daher häufig ein gutes Ersatzformat für Fotografien. PNG ist dagegen verlustfrei und eignet sich besser für Screenshots, Diagramme und Strichzeichnungen.
PNG ist auch das Ersatzformat für Bilder, die Transparenz benötigen, da JPEG keinen Alpha-Kanal hat.

Verwenden Sie für Diagramme, Schaubilder und andere Bilder, die in unterschiedlichen Größen präzise dargestellt werden müssen, [SVG](#svg_scalable_vector_graphics).
Für die meisten Symbole gibt es Vektorgrafikversionen, denen Sie nach Möglichkeit den Vorzug geben sollten. Wenn nur Rasterversionen verfügbar sind, wählen Sie [WebP](#webp-bild), stellen Sie aber wie bei anderen Rasterbildern ein Ersatzformat bereit.

## Ersatzbilder bereitstellen

Das übliche HTML-Element {{HTMLElement("img")}} unterstützt keine Ersatzbilder für Kompatibilitätszwecke, das Element {{HTMLElement("picture")}} hingegen schon.
`<picture>` dient als Container für mehrere {{HTMLElement("source")}}-Elemente, die jeweils eine Bildversion in einem anderen Format oder für andere [Medienbedingungen](/de/docs/Web/CSS/Reference/At-rules/@media) angeben. Hinzu kommt ein `<img>`-Element, das festlegt, wo das Bild angezeigt wird, und als Ersatz auf die Standardversion oder die „am besten kompatible“ Version verweist.

Wenn Sie beispielsweise ein Diagramm anzeigen, das sich am besten als SVG darstellen lässt, aber ein PNG- oder GIF-Ersatzbild anbieten möchten, könnten Sie Folgendes tun:

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

Sie können beliebig viele `<source>`-Elemente angeben, wobei normalerweise zwei oder drei ausreichen.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu im Web verwendeten Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die HTML-Elemente {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}} und {{HTMLElement("picture")}}
- Die CSS-Eigenschaft {{cssxref("background-image")}}
- Der Konstruktor [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) und die Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)

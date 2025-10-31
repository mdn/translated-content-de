---
title: Leitfaden zu Bilddateitypen und -formaten
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

In diesem Leitfaden werden die Bilddateitypen behandelt, die allgemein von Webbrowsern unterstützt werden. Zudem werden Einblicke gegeben, die Ihnen helfen, die geeignetsten Formate für die Bildwiedergabe auf Ihrer Website auszuwählen.

## Häufige Bilddateitypen

Die im Web am häufigsten verwendeten Bilddateiformate sind im Folgenden aufgeführt.

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
        AVIF und WebP bieten bessere Leistung, aber weniger breite Browserunterstützung.<br />
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
          Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund hoher Leistung und eines lizenzfreien Bildformats.
          Es bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz etc.
          Beachten Sie, dass bei der Verwendung von AVIF Rückfallebenen in Formate mit besserer Browserunterstützung enthalten sein sollten (z.B. mit dem <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>-Element).<br />
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
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indizierte Standbilder, und ziehen Sie WebP, AVIF oder APNG für Animationssequenzen in Betracht.<br />
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
          Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
          Bevorzugen Sie PNG, wenn eine präzisere Wiedergabe des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl bessere Wiedergabe als auch höhere Komprimierung erforderlich sind.<br />
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
          PNG wird gegenüber JPEG bevorzugt für präzisere Wiedergabe von Quellbildern oder wenn Transparenz erforderlich ist. WebP/AVIF bieten noch bessere Komprimierung und Wiedergabe, aber die Browserunterstützung ist eingeschränkter.<br />
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
        Vektorbildformat; ideal für Benutzerschnittstellenelemente, Symbole, Diagramme etc., die in verschiedenen Größen genau gezeichnet werden müssen.<br />
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
        WebP bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz etc.
        AVIF bietet eine etwas bessere Komprimierung, wird aber nicht so gut in Browsern unterstützt und unterstützt kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ältere Formate wie PNG, JPEG, GIF haben im Vergleich zu neueren Formaten wie WebP und AVIF eine schlechtere Leistung, genießen jedoch eine breitere „historische“ Browserunterstützung. Die neueren Bildformate gewinnen immer mehr an Beliebtheit, da Browser, die sie nicht unterstützen, zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil mehr haben).

Die folgende Liste enthält Bildformate, die im Web auftauchen, die jedoch für Webinhalte vermieden werden sollten (in der Regel, weil sie entweder keine breite Browserunterstützung haben, oder weil es bessere Alternativen gibt).

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
      <th scope="row">Microsoft-Icon</th>
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
> Die Abkürzung für jedes Bildformat verlinkt zu einer ausführlicheren Beschreibung des Formats, seiner Fähigkeiten und detaillierten Informationen zur Browser-Kompatibilität (einschließlich Angaben dazu, welche Versionen die Unterstützung einführten und spezielle Funktionen, die möglicherweise später hinzugefügt wurden).

> [!NOTE]
> Safari 11.1 fügte die Fähigkeit hinzu, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Fehler](https://crbug.com/791658) und im [Firefox-Fehler](https://bugzil.la/895131).

## Details zu Bilddateitypen

Die folgenden Abschnitte bieten einen kurzen Überblick über jeden der von Web-Browsern unterstützten Bilddateitypen.

In den untenstehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die zur Darstellung jeder Farbkomponente verwendet werden. Ein RGB-Farbtiefe von 8 bedeutet beispielsweise, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. **Bit-Tiefe** hingegen ist die Gesamtanzahl der Bits, die zur Darstellung jedes Pixels im Speicher verwendet werden.

### APNG (Animated Portable Network Graphics)

APNG ist ein Dateiformat, das erstmals von Mozilla eingeführt wurde und den [PNG](#png_portable_network_graphics)-Standard erweitert, um Unterstützung für animierte Bilder hinzuzufügen. Konzeptionell ähnlich dem animierten GIF-Format, das seit Jahrzehnten verwendet wird, ist APNG leistungsfähiger, da es eine Vielzahl von [Farbtiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit [indizierte Farben](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG ist ideal für einfache Animationen, die nicht mit anderen Aktivitäten oder einem Soundtrack synchronisiert werden müssen, wie z.B. Fortschrittsanzeigen, Aktivitäts- [Throbber](https://en.wikipedia.org/wiki/Throbber) und andere animierte Sequenzen. Zum Beispiel ist APNG [eine der Formate, die unterstützt werden, wenn animierte Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichtenanwendung auf iOS) erstellt werden. Sie werden auch häufig für die animierten Teile der Benutzeroberflächen von Webbrowsern verwendet.

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
        <a href="https://w3c.github.io/png/#apng-frame-based-animation">W3C PNG-Spezifikation</a>
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
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die das Niveau der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farben mit Alpha</th>
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
      <td>Verlustlos</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Frei und offen unter der
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike-Lizenz</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) Version 3.0 oder später.
      </td>
    </tr>
  </tbody>
</table>

### AVIF-Bild

AV1 Image File Format (AVIF) ist ein leistungsstarkes, quelloffenes lizenzfreies Dateiformat, das _AV1-Bitströme im High Efficiency Image File Format (HEIF)-Container_ codiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern in Webinhalten zu werden.
> Es bietet hochmoderne Funktionen und Leistung, ohne die Belastung durch komplizierte Lizenzierung und Patentgebühren, die vergleichbare Alternativen behindert haben.

AV1 ist ein Codierungsformat, das ursprünglich für die Videotransmission über das Internet entworfen wurde. Das Format profitiert von den signifikanten Fortschritten in der Videocodierung in den letzten Jahren und kann möglicherweise von der damit verbundenen Unterstützung für Hardware-Rendering profitieren. Es hat jedoch auch Nachteile in einigen Fällen, da Video- und Bildcodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Kompression im Vergleich zu JPG und PNG bei optisch ähnlichen Kompressionsstufen (z.B. sind verlustbehaftete AVIF-Bilder etwa 50% kleiner als JPEG-Bilder).
- Im Allgemeinen hat AVIF eine bessere Kompression als WebP — medial 50% gegenüber 30% Kompression für dasselbe JPG-Set (Quelle: [AVIF WebP-Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustlose Kompression.
- Animation/mehrfaches Bildspeicherung (ähnlich wie bei animierten GIFs, aber mit viel besserer Kompression)
- Unterstützung für Alphakanal (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung zur Speicherung von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Großer Farbumfang: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt kein progressives Rendern, daher müssen Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf die reale Benutzererfahrung, da AVIF-Dateien viel kleiner als die entsprechenden JPEG- oder PNG-Dateien sind und daher viel schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann der Einfluss jedoch signifikant werden und es sollte ein Format in Betracht gezogen werden, das progressives Rendern unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe hat), sollten Sie einen Fallback im [WebP](#webp-bild)-, [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format bereitstellen, indem Sie beispielsweise [das `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder einen anderen Ansatz) verwenden.

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
            Firefox 93 unterstützt Standbilder, mit Unterstützung für den Farbraum sowohl für vollständige als auch für eingeschränkte Bereiche, Bildtransformationen für Spiegelung und Drehung.
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
          Informationen zur Unterstützung von Farbmodi sind in der
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream & Decoding Process Specification</a>, Abschnitt 6.4.2 : Color Config Semantics.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung ist:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Unterstützung für Graustufen: YUV400</li>
          <li>Bits: 8/10/12-Bit</li>
          <li>Unterstützung für Alpha</li>
          <li>Unterstützung für ICC-Profile</li>
          <li>
            NCLX-Unterstützung: sRGB, lineares sRGB, lineares Rec2020, PQ Rec2020, HLG Rec2020, PQ P3, HLG P3, etc.
          </li>
          <li>Kachelunterstützung</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>Verlustbehaftet und verlustlos.</td>
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

Der **BMP**-(**Bitmap-Bild**)-Dateityp ist auf Windows-Computern am häufigsten anzutreffen und wird in der Regel nur für Sonderfälle in Web-Apps und -Inhalten verwendet.

> [!WARNING]
> Sie sollten in der Regel vermeiden, BMP-Dateien für Website-Inhalte zu verwenden.
> Die häufigste Form einer BMP-Datei stellt die Daten als unkomprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu PNG- oder JPG-Bildtypen führt.
> Effizientere BMP-Formate existieren, werden aber nicht häufig verwendet und in Webbrowsern selten unterstützt.

BMP unterstützt theoretisch eine Vielzahl interner Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form von BMP-Dateien ist ein unkomprimiertes Rasterbild, bei dem jedes Pixel 3 Byte einnimmt, die jeweils seine roten, grünen und blauen Komponenten repräsentieren, und jede Zeile mit `0x00`-Bytes zu einem Vielfachen von 4 Byte Breite aufgefüllt ist.

Obwohl andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht häufig verwendet und oft gar nicht umgesetzt. Diese Funktionen umfassen: Unterstützung für verschiedene Bittiefen, indizierte Farben, Alphakanäle und unterschiedliche Pixel-Reihenfolgen (standardmäßig wird BMP vom unteren linken Rand bis zum rechten und oberen Rand geschrieben und nicht vom oberen linken Rand zum rechten und unteren Rand).

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
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jedes ist <em>D</em> Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert repräsentiert, der entweder ein 2-, 4- oder 8-Bit-Wert ist, der als Index in die Farbpalette dient.
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
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jedes ist <em>D</em> Bit.
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
        Abgedeckt durch das <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a>; während Microsoft Patente gegen BMP hält, haben sie ein Versprechen veröffentlicht, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind. Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der CompuServe-Online-Dienstanbieter das **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**)-Bilddateiformat ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes verwenden können. GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus, um 8-Bit-indizierte Farbgrafiken verlustlos zu komprimieren. GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, neben [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzigen 8-Bit-Wert repräsentiert, der als Index in eine Palette von 24-Bit-Farben (8 Bit je rot, grün und blau) dient. Die Länge einer Farbpalette ist immer eine Potenz von 2 (d.h. jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird im Allgemeinen [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, von denen jeder seine eigene Farbpalette hat, um echte Farbbilder zu erstellen, aber in der Praxis wird dies selten getan.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent festgelegt, in diesem Fall sind Pixel mit diesem Wert vollständig transparent.

GIF unterstützt einfache Animationen, bei denen nach einem anfänglichen Vollbild-Frame eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Frame ändern.

GIF war aufgrund seiner Einfachheit und Kompatibilität jahrzehntelang extrem populär. Seine Animationsunterstützung führte zu einer Wiederbelebung seiner Popularität im Zeitalter der sozialen Medien, als animierte GIFs weit verbreitet für kurze "Videos", Memes und andere einfache Animationsfolgen verwendet wurden.

Ein weiteres beliebtes Merkmal von GIF ist die Unterstützung von [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), wobei Pixelreihen in ungeordneter Reihenfolge gespeichert werden, sodass teilweise empfangene Dateien in geringerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzwerkverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl die Umwandlung von Vollfarbbildern in GIF zu unzufriedenstellendem Dithering führen kann. Typischerweise sollten moderne Inhalte [PNG](#png_portable_network_graphics) für verlustfreie und indizierte Standbilder verwenden und erwägen, [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationsfolgen zu verwenden.

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
              <td>GIF enthält kein spezielles Graustufenformat.</td>
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
                Jede Farbe in einer GIF-Palette wird als 8 Bit je rot, grün und blau definiert (insgesamt 24 Bit pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein eigenes Graustufenformat.</td>
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
      <td>Verlustlos (LZW)</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Während das GIF-Format selbst offen ist, war der LZW-Kompressionsalgorithmus bis Anfang der 2000er Jahre durch Patente abgedeckt. Ab dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows-Icon)

Das ICO (Microsoft Windows-Icon)-Dateiformat wurde von Microsoft für Desktop-Symbole von Windows-Systemen entworfen. Frühere Versionen des Internet Explorers führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei mit dem Namen `favicon.ico` im Stammverzeichnis der Website bereitstellen kann, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** zu spezifizieren — ein Symbol, das im Favoritenmenü und an anderen Orten angezeigt werden soll, an denen eine ikonische Darstellung der Website nützlich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem Symbol auflistet. Nach dem Verzeichnis folgen die Daten der Symbole. Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf sein oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich Dateikopf). Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG innerhalb von ICO-Dateien nicht vor Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden.
> Zudem hat ihr Einsatz für Favicons zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements abgenommen, wie im [Bereitstellen von Icons für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

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
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten repräsentieren; jedes ist <em>D</em> Bit.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert repräsentiert, der entweder ein 2-, 4- oder 8-Bit-Wert ist, der als Index in die Farbpalette dient.
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
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und Alpha-Farbkomponenten repräsentieren; jedes ist <em>D</em> Bit.
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
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die das Niveau der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farben mit Alpha</th>
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
      <td>
        Symbole im BMP-Format verwenden fast immer eine verlustfreie Kompression, aber verlustbehaftete Methoden sind verfügbar.
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

Das {{Glossary("JPEG", "JPEG")}} (typischerweise als "**Jay-peg**" ausgesprochen) Bildformat ist derzeit das am weitesten verbreitete verlustbehaftete Kompressionsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Kompression auf Inhalte, die Schärfe erfordern, wie Diagramme oder Grafiken, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist eigentlich ein Datenformat für komprimierte Fotos, anstatt eines Dateityps. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat) Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder betrachten.

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
              <td>Echte Graustufen können mit dem einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8</td>
              <td>
                Jedes Pixel wird durch die roten, blauen und grünen Farbkomponenten beschrieben, von denen jede 8 Bit ist.
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

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Kompression, unterstützt höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) und ist effizienter, während es vollständige Alphatransparenz-Unterstützung bietet.

PNG wird weitgehend unterstützt, wobei alle großen Browser volle Unterstützung für seine Funktionen bieten.

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
              <td>1, 2, 4, 8 und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzelnen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufen-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die das Niveau der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>1, 2, 4 und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die in einem
                <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei enthalten ist; die Farben in der Palette verwenden alle eine 8-Bit-Tiefe.
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
              <th scope="row">Echte Farben mit Alpha</th>
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
      <td>Verlustlos, optional indizierte Farben wie GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marken</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierungs</a>-Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein {{Glossary("XML", "XML")}}-basiertes [Vektorgrafik](https://en.wikipedia.org/wiki/Vector_graphics)-Format, das die Inhalte eines Bildes als eine Reihe von Zeichnungskommandos definiert, die Formen und Linien erzeugen, Farben und Filter anwenden usw. SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können. Daher ist SVG populär für UI-Elemente im modernen Webdesign.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der beim Interpretieren das gewünschte Bild zeichnet. Zum Beispiel definiert dieses Beispiel einen Zeichenbereich mit einer anfänglichen Größe von 100 x 100 Einheiten, der eine Linie diagonal durch das Feld enthält:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann in Webinhalten auf drei Arten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt innerhalb des HTML erscheinen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, um das Bild zu zeichnen.
2. Ein SVG-Bild kann in HTML mit Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} eingebettet werden.
3. Es ist möglich, SVG-Bilder überall dort zu verwenden, wo auch andere Bildtypen verwendet werden können, einschließlich mit dem {{HTMLElement("img")}}-Element, der CSS-Eigenschaft {{cssxref("background-image")}}, und so weiter. Es gibt jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image), wenn SVG auf diese Weise verwendet wird.

SVG ist eine ideale Wahl für Bilder, die durch eine Reihe von Zeichnungskommandos dargestellt werden können, besonders wenn die Größe, in der das Bild gerendert wird, unbekannt ist oder variieren kann, da SVG reibungslos auf die gewünschte Größe skaliert. Es ist im Allgemeinen nicht nützlich für streng bitmapbasierte oder fotografische Bilder, obwohl es möglich ist, Bitmap-Bilder innerhalb eines SVG zu integrieren.

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
      <td>
        Farben in SVG werden durch die
        <a href="/de/docs/Web/CSS/color_value">CSS-Farbsyntax</a> spezifiziert.
      </td>
    </tr>
    <tr>
      <th scope="row">Kompression</th>
      <td>
        SVG-Quellcode kann während der Übertragung mittels <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Komprimierung</a>stechniken oder auf Disk als <code>.svgz</code>-Datei komprimiert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), alle Rechte vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Markenschutz</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierungs</a>-Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafikdateiformat, das erstellt wurde, um gescannte Fotos zu speichern, obwohl es jede Art von Bild sein kann. Es ist ein eher "schweres" Format, da TIFF-Dateien tendenziell größer sind als Bilder in anderen Formaten. Dies liegt an den oft enthaltenen Metadaten sowie daran, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Kompressionsalgorithmen verwenden, die immer noch relativ große Dateien nach der Kompression hinterlassen.

TIFF unterstützt eine Vielzahl von Kompressionsmethoden, aber die am häufigsten verwendeten sind die CCITT Group 4 (und für ältere Faxsysteme Group 3)-Kompressionssysteme, die von Faxsoftware verwendet werden, sowie LZW und verlustbehaftete JPEG-Kompression.

Jeder Wert in einer TIFF-Datei wird unter Verwendung seines **Tags** angegeben (was angibt, um welche Art von Information es sich handelt, z.B. die Breite des Bildes) und seines **Typs** (was angibt, in welchem Format die Daten gespeichert sind), gefolgt von der Länge des Arrays von Werten, die diesem Tag zugewiesen werden sollen (alle Eigenschaften werden in Arrays gespeichert, selbst für Einzelwerte). Dies ermöglicht die Verwendung verschiedener Datentypen für dieselben Eigenschaften. Zum Beispiel wird die Breite eines Bildes, `ImageWidth`, unter Verwendung des Tags `0x0100` gespeichert und ist ein Einstiegs-Array. Wenn Typ 3 (`SHORT`) angegeben wird, wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Das Spezifizieren von Typ 4 (`LONG`) speichert die Breite als einen 32-Bit-Wert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzelne TIFF-Datei kann mehrere Bilder enthalten; dies kann verwendet werden, um mehrseitige Dokumente zu repräsentieren (z.B. ein mehrseitiges gescanntes Dokument oder ein empfangenes Fax). Software, die TIFF-Dateien liest, muss jedoch nur das erste Bild unterstützen.

TIFF unterstützt eine Vielzahl von Farbmodellen, nicht nur RGB. Dazu gehören CMYK, YCbCr und andere, was TIFF zu einer guten Wahl für die Speicherung von Bildern macht, die für Druck-, Film-, oder Fernsehmedien bestimmt sind.

Mit Ausnahme von Safari unterstützen Browser TIFF-Bilder in Webinhalten nicht nativ, es sei denn, sie verwenden spezielle Bibliotheken oder Browser-Add-ons. Daher werden TIFF-Dateien nicht häufig zur Anzeige von Webinhalten verwendet, _aber_ es ist üblich, herunterladbare TIFF-Dateien anzubieten, wenn Fotos und andere Kunstwerke zur präzisen Bearbeitung oder zum Drucken verteilt werden sollen.

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
                Ein Bilevel-TIFF speichert 8 Bit in jedem Byte, jeweils ein Bit pro Pixel.
                Das <code>PhotometricInterpretation</code>-Feld spezifiziert, welches von 0 und 1 schwarz und welches weiß ist.
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
                Alle echten Farbbilder im RGB-Modus werden mit 8 Bit für jede der Farben rot, grün und blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farben</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einen <code>ColorMap</code>-Datensatz, der die im Bild verwendeten Farben definiert.
                Die Farbkarte listet zuerst alle Rotwerte auf, dann alle Grünwerte, dann alle Blauwerte (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Graustufen mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alphainformationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und die Art des Alpha (1 für eine assoziierte, vor-multiplizierte Alphakomponente und 2 für unassoziiertes Alpha - eine separate Matte) angezeigt wird; jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und unter Umständen nicht von der Software des Nutzers unterstützt.
              </td>
            </tr>
            <tr>
              <th scope="row">Echte Farben mit Alpha</th>
              <td>8</td>
              <td>
                Alphainformationen werden hinzugefügt, indem angegeben wird, dass es mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld gibt und die Art des Alpha (1 für eine assoziierte, vor-multiplizierte Alphakomponente und 2 für unassoziiertes Alpha - eine separate Matte) angezeigt wird; jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und unter Umständen nicht von der Software des Nutzers unterstützt.
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
        Keine Lizenz erforderlich (abgesehen von einer, die mit den Bibliotheken verbunden sein könnte, die Sie verwenden); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Kompression über prädiktive Codierung auf Basis des VP8-Videocodecs und verlustfreie Kompression, die Substitutionen für sich wiederholende Daten verwendet. Verlustbehaftete WebP-Bilder sind durchschnittlich 25–35% kleiner als JPEG-Bilder bei visuell ähnlichen Komprimierungsstufen. Verlustfreie WebP-Bilder sind typischerweise 26% kleiner als die gleichen Bilder im PNG-Format.

WebP unterstützt auch Animationen: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreie WebP-Dateien enthalten den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz darstellt. Schleifen wird unterstützt.

WebP hat jetzt breite Unterstützung in den neuesten Versionen der wichtigsten Webbrowser, obwohl es keine tiefe historische Unterstützung hat. Bieten Sie einen Fallback entweder im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder im [PNG](#png_portable_network_graphics)-Format an, beispielsweise mit [dem `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF-Container-Spezifikation</a><br />{{RFC(6386, "VP8 Data Format and Decoding Guide")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP-Verlustfreie-Bitstream-Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch für das <em>Exportieren</em> von Bildern aus einer Leinwand verwendet werden.
        Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Informationen zur Unterstützungsversion.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftete WebP-Dateien speichern das Bild im 8-Bit Y'CbCr 4:2:0 (YUV420) Format.
        Verlustfreie WebP-Dateien verwenden 8-Bit ARGB-Farben, wobei jede Komponente 8 Bit für insgesamt 32 Bit pro Pixel beansprucht.
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
> Auf Safari für macOS hängt die WebP-Unterstützung sowohl von Safari- als auch von macOS-Versionen ab. Sie benötigen Safari 14 oder höher sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, werden aber nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsprobleme birgt. Moderne Browser unterstützen XBM-Dateien seit vielen Jahren nicht mehr, aber wenn Sie mit älteren Inhalten zu tun haben, können Sie noch einige davon finden.

XBM verwendet ein C-Code-Snippet, um die Inhalte des Bildes als Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define`-Direktiven, die die Breite und Höhe des Bitmaps angeben (und optional den Hotspot, wenn das Bild als Cursor entworfen ist), gefolgt von einem Array von `unsigned char`, wobei jeder Wert 8 1-Bit-Monochrom-Pixel enthält.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein. Zum Beispiel stellt der folgende Code ein XBM-Bild dar, das 8 Pixel mal 8 Pixel groß ist, wobei diese Pixel in einem schwarz-weißen Schachbrettmuster angeordnet sind:

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
      <td>Verlustlos</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Open Source</td>
    </tr>
  </tbody>
</table>

## Auswahl eines Bildformats

Die Wahl des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als bei Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jedes Format in der Regel einen spezifischen Satz von Anwendungsfällen hat.

### Fotografien

Fotografien eignen sich in der Regel gut für verlustbehaftete Kompression (abhängig von der Konfiguration des Encoders).
Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG kompatibler ist, WebP jedoch möglicherweise eine bessere Kompression bietet.
Um die Qualität zu maximieren und die Downloadzeit zu minimieren, sollten Sie erwägen, beide [mit einem Fallback](#bereitstellung_von_bild-fallbacks) bereitzustellen, wobei WebP die erste Wahl ist und JPEG die zweite.
Andernfalls ist JPEG die sichere Wahl für die Kompatibilität.

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

Für kleinere Bilder wie Symbole verwenden Sie ein verlustfreies Format, um Detailverluste in einem größenbeschränkten Bild zu vermeiden.
Obwohl verlustfreies WebP ideal für diesen Zweck ist, ist die Unterstützung noch nicht weit verbreitet, daher ist PNG die bessere Wahl, es sei denn, Sie bieten ein [Fallback](#bereitstellung_von_bild-fallbacks) an.
Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG oft noch kleiner mit seiner indizierten Kompressionsoption (PNG-8) komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, ziehen Sie [SVG](#svg_scalable_vector_graphics) in Betracht, da es über verschiedene Auflösungen und Größen skaliert und daher perfekt für responsives Design geeignet ist.
Obwohl die SVG-Unterstützung gut ist, kann es sich lohnen, ein PNG-Fallback für ältere Browser anzubieten.

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

Wenn Sie nicht bereit sind, Kompromisse bei der Qualität einzugehen, sollten Sie ein verlustfreies Format für Screenshots verwenden.
Dies ist besonders wichtig, wenn im Screenshot Text enthalten ist, da Text bei verlustbehafteter Kompression leicht verschwommen und unklar wird.

PNG ist wahrscheinlich Ihre beste Wahl, aber verlustfreies WebP wird vermutlich besser komprimiert.

<table class="standard-table" style="max-width: 42rem">
  <thead>
    <tr>
      <th scope="col" style="width: 50%">Beste Wahl</th>
      <th scope="col">Fallback</th>
    </tr>
    <tr>
      <td>
        Verlustfreies WebP oder PNG;<br />JPEG, wenn Kompressionsartefakte
        kein Problem sind
      </td>
      <td>PNG oder JPEG;<br />GIF für Screenshots mit geringer Farbanzahl</td>
    </tr>
  </thead>
</table>

### Diagramme, Zeichnungen und Grafiken

Für jedes Bild, das mit Vektorgrafiken dargestellt werden kann, ist SVG die beste Wahl.
Andernfalls sollten Sie ein verlustfreies Format wie PNG verwenden.
Wenn Sie sich für ein verlustbehaftetes Format entscheiden, wie beispielsweise JPEG oder verlustbehaftetes WebP, wägen Sie den Kompressionsgrad sorgfältig ab, um zu vermeiden, dass Text oder andere Formen verschwommen oder unklar werden.

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

Während das Standard-HTML-{{HTMLElement("img")}}-Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut dies das {{HTMLElement("picture")}}-Element.
`<picture>` wird als Wrapper für eine Anzahl von {{HTMLElement("source")}}-Elementen verwendet, von denen jedes eine Version des Bildes in einem anderen Format oder unter anderen [Medienbedingungen](/de/docs/Web/CSS/@media) spezifiziert, sowie ein `<img>`-Element, das angibt, wo das Bild angezeigt wird und das Fallback zur Standard- oder „am kompatibelsten“ Version darstellt.

Beispielsweise, wenn Sie ein Diagramm darstellen, das am besten mit SVG angezeigt wird, aber ein Fallback auf eine PNG- oder GIF-Datei des Diagramms anbieten möchten, würden Sie etwas in dieser Art tun:

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

Sie können beliebig viele `<source>`s angeben, in der Regel sind jedoch 2 oder 3 ausreichend.

## Siehe auch

- [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats)
- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Videocodecs im Web](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elemente
- Die CSS-{{cssxref("background-image")}}-Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor und das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interface

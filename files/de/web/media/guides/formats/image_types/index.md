---
title: Leitfaden für Bilddateitypen und -formate
slug: Web/Media/Guides/Formats/Image_types
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

In diesem Leitfaden behandeln wir die Bilddateitypen, die allgemein von Webbrowsern unterstützt werden, und bieten Einblicke, die Ihnen helfen, die am besten geeigneten Formate für die Bilder Ihrer Website auszuwählen.

## Allgemeine Bilddateitypen

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
          Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats.
          Es bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
          Beachten Sie, dass bei der Verwendung von AVIF Fallbacks auf Formate mit besserer Browserunterstützung enthalten sein sollten (z. B. mit dem <code><a href="/de/docs/Web/HTML/Reference/Elements/picture">&#x3C;picture></a></code>-Element).<br />
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
        Bevorzugen Sie PNG für verlustfreie <em>und</em> indizierte Standbilder und überlegen Sie, WebP, AVIF oder APNG für Animationssequenzen zu verwenden.<br />
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
          Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit das beliebteste).
          Bevorzugen Sie PNG, wenn eine genauere Reproduktion des Bildes erforderlich ist, oder WebP/AVIF, wenn sowohl eine bessere Reproduktion als auch eine höhere Komprimierung erforderlich sind.<br />
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
          PNG wird gegenüber JPEG bevorzugt, wenn eine genauere Reproduktion von Quellbildern oder Transparenz erforderlich ist. WebP/AVIF bieten noch bessere Kompression und Reproduktion, aber die Browserunterstützung ist eingeschränkter.<br />
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
        Vektorbildformat; ideal für Benutzeroberflächenelemente, Symbole, Diagramme usw., die bei unterschiedlichen Größen präzise gezeichnet werden müssen.<br />
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
        WebP bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw.
        AVIF bietet eine leicht bessere Kompression, ist jedoch nicht so gut in Browsern unterstützt und bietet kein progressives Rendering.<br />
        <strong>Unterstützung:</strong> Chrome, Edge, Firefox, Opera, Safari.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die älteren Formate wie PNG, JPEG, GIF weisen eine schlechtere Leistung im Vergleich zu neueren Formaten wie WebP und AVIF auf, genießen jedoch eine breitere "historische" Browserunterstützung. Die neueren Bildformate werden immer beliebter, da Browser ohne Unterstützung zunehmend irrelevant werden (d.h. praktisch keinen Marktanteil haben).

Die folgende Liste enthält Bildformate, die im Web erscheinen, die aber für Webinhalte vermieden werden sollten (in der Regel, weil sie entweder keine breite Browserunterstützung haben oder weil es bessere Alternativen gibt).

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
      <th scope="row">Bitmap File</th>
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
> Die Abkürzung für jedes Bildformat verlinkt zu einer ausführlicheren Beschreibung des Formats, seiner Fähigkeiten und detaillierten Informationen zur Browser-Kompatibilität (einschließlich der Versionen, in denen die Unterstützung eingeführt wurde, und bestimmter spezieller Funktionen, die später eingeführt worden sein könnten).

> [!NOTE]
> Safari 11.1 fügte die Möglichkeit hinzu, ein Videoformat als Ersatz für animierte GIFs zu verwenden.
> Kein anderer Browser unterstützt dies.
> Weitere Informationen finden Sie im [Chromium-Bug](https://crbug.com/791658) und [Firefox-Bug](https://bugzil.la/895131).

## Details zu Bild-Dateitypen

Die folgenden Abschnitte bieten einen kurzen Überblick über jeden der von Webbrowsern unterstützten Bild-Dateitypen.

In den untenstehenden Tabellen bezieht sich der Begriff **Bits pro Komponente** auf die Anzahl der Bits, die verwendet werden, um jede Farbkomponente darzustellen. Zum Beispiel bedeutet eine RGB-Farbtiefe von 8, dass jede der roten, grünen und blauen Komponenten durch einen 8-Bit-Wert dargestellt wird. **Bit-Tiefe** wiederum ist die Gesamtanzahl der Bits, die verwendet werden, um jedes Pixel im Speicher darzustellen.

### APNG (Animated Portable Network Graphics)

APNG ist ein Dateiformat, das erstmals von Mozilla eingeführt wurde, um den [PNG](#png_portable_network_graphics)-Standard zu erweitern und Unterstützung für animierte Bilder hinzuzufügen. Konzeptionell ähnlich dem animierten GIF-Format, das seit Jahrzehnten in Gebrauch ist, jedoch ist APNG fähiger, da es eine Vielzahl von [Farb-Tiefen](https://en.wikipedia.org/wiki/Color_depth) unterstützt, während animierte GIFs nur 8-Bit [indizierte Farbe](https://en.wikipedia.org/wiki/Indexed_color) unterstützen.

APNG ist ideal für grundlegende Animationen, die nicht synchron zu anderen Aktivitäten oder zu einem Soundtrack laufen müssen, wie zum Beispiel Fortschrittsanzeigen, Aktivitäts-[Throbber](https://en.wikipedia.org/wiki/Throbber) und andere animierte Sequenzen. Ein Beispiel dafür ist, dass APNG [eines der unterstützten Formate beim Erstellen animierter Sticker](https://developer.apple.com/imessage/) für Apples iMessage-Anwendung (und die Nachrichten-App auf iOS) ist. Sie werden auch häufig für die animierten Teile der Benutzeroberflächen von Webbrowsern verwendet.

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
              <th scope="row">Grau</th>
              <td>1, 2, 4, 8, und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenbild-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Pegel der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4, und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die sich in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei befindet; die Farben in der Palette haben alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Grau mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
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
      <th scope="row">Komprimierung</th>
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

AV1 Image File Format (AVIF) ist ein leistungsstarkes, quelloffenes, lizenzkostenfreies Dateiformat, das _AV1-Bitstreams im High Efficiency Image File Format (HEIF) Container_ kodiert.

> [!NOTE]
> AVIF hat das Potenzial, das "nächste große Ding" für das Teilen von Bildern in Webinhalten zu werden.
> Es bietet hochmoderne Funktionen und Leistung, ohne den Aufwand komplizierter Lizenzen und Patentrechte, die vergleichbare Alternativen behindert haben.

AV1 ist ein Kodierungsformat, das ursprünglich für die Videoübertragung über das Internet entwickelt wurde. Das Format profitiert von den erheblichen Fortschritten in der Videokodierung in den letzten Jahren und könnte potenziell von der damit verbundenen Unterstützung für Hardware-Rendering profitieren. Dennoch hat es auch Nachteile in einigen Fällen, da Video- und Bildkodierung unterschiedliche Anforderungen haben.

Das Format bietet:

- Hervorragende verlustbehaftete Komprimierung im Vergleich zu JPG und PNG für visuell ähnliche Komprimierungsniveaus (z.B. sind verlustbehaftete AVIF-Bilder etwa 50% kleiner als JPEG-Bilder).
- Im Allgemeinen hat AVIF eine bessere Komprimierung als WebP — mittlere 50% vs. 30% Komprimierung für den gleichen JPG-Satz (Quelle: [AVIF WebP Vergleich](https://www.ctrl.blog/entry/webp-avif-comparison.html) (CTRL Blog)).
- Verlustfreie Komprimierung.
- Animation/Multi-Bild-Speicher (ähnlich wie animierte GIFs, aber mit viel besserer Komprimierung)
- Unterstützung des Alpha-Kanals (d.h. für Transparenz).
- _High Dynamic Range_ (HDR): Unterstützung für die Speicherung von Bildern, die größere Kontraste zwischen den hellsten und dunkelsten Teilen des Bildes darstellen können.
- Breites Farbspektrum: Unterstützung für Bilder, die einen größeren Farbbereich enthalten können.

AVIF unterstützt keine progressive Wiedergabe, daher müssen Dateien vollständig heruntergeladen werden, bevor sie angezeigt werden können. Dies hat oft wenig Einfluss auf die reale Benutzererfahrung, da AVIF-Dateien viel kleiner sind als die entsprechenden JPEG- oder PNG-Dateien und somit viel schneller heruntergeladen und angezeigt werden können. Bei größeren Dateigrößen kann der Einfluss erheblich werden, und Sie sollten erwägen, ein Format zu verwenden, das progressive Wiedergabe unterstützt.

AVIF wird in Chrome, Edge, Opera, Safari und Firefox unterstützt. Da die Unterstützung noch nicht umfassend ist (und wenig historische Tiefe hat), sollten Sie eine Rückfallmöglichkeit im [WebP](#webp-bild)-, [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format mit dem [das `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture) (oder einem anderen Ansatz) bereitstellen.

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
            Firefox 93 unterstützt Standbilder mit Farbraumunterstützung für sowohl Voll- als auch Begrenzungs-RGB, Bildtransformationen für Spiegeln und Rotation. Die Einstellung <a href="/de/docs/Mozilla/Firefox/Experimental_features#avif_compliance_strictness">image.avif.compliance_strictness</a> kann verwendet werden, um die Konformitätsstrengheit mit der Spezifikation anzupassen.
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
          <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf">AV1 Bitstream &#x26; Decoding Process Specification</a>, Abschnitt 6.4.2: Farbkonfigurationssemantik.
        </p>
        <p>Eine nicht erschöpfende Zusammenfassung lautet:</p>
        <ul>
          <li>Farbmodi: YUV444, YUV422, YUV420</li>
          <li>Graustufenunterstützung: YUV400</li>
          <li>Bits: 8/10/12-Bit</li>
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
        Lizenzfrei. Lizenzinformationen sind auf der <a href="https://aomedia.org/license/">Lizenzseite</a> verfügbar.
      </td>
    </tr>
  </tbody>
</table>

### BMP (Bitmap-Datei)

Der **BMP** (**Bitmap-Bild**)-Dateityp ist am weitesten auf Windows-Computern verbreitet und wird in der Regel nur für spezielle Fälle in Webanwendungen und Inhalten verwendet.

> [!WARNING]
> Sie sollten in der Regel die Verwendung von BMP-Dateien für Website-Inhalte vermeiden. Die häufigste Form der BMP-Datei stellt die Daten als nicht komprimiertes Rasterbild dar, was zu großen Dateigrößen im Vergleich zu png- oder jpg-Bildtypen führt. Es existieren effizientere BMP-Formate, die jedoch nicht weit verbreitet und selten von Webbrowsern unterstützt werden.

BMP unterstützt theoretisch eine Vielzahl von internen Datenrepräsentationen. Die einfachste und am häufigsten verwendete Form von BMP-Dateien ist ein nicht komprimiertes Rasterbild, wobei jedes Pixel 3 Byte beansprucht, die seine roten, grünen und blauen Komponenten darstellen, und jede Zeile mit `0x00` Bytes auf ein Vielfaches von 4 Byte verbreitert wird.

Während andere Datenrepräsentationen in der Spezifikation definiert sind, werden sie nicht häufig verwendet und oft vollständig nicht implementiert. Diese Funktionen umfassen: Unterstützung für unterschiedliche Bit-Tiefen, indizierte Farbe, Alpha-Kanäle und unterschiedliche Pixelordnungen (standardmäßig wird BMP von der unteren linken Ecke nach rechts und oben geschrieben und nicht von der oberen linken Ecke nach rechts und unten).

Theoretisch werden mehrere Komprimierungsalgorithmen unterstützt, und die Bilddaten können auch im [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format in der BMP-Datei gespeichert werden.

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
              <th scope="row">Grau</th>
              <td>1</td>
              <td>
                Jedes Bit repräsentiert ein einzelnes Pixel, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten darstellen; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der entweder 2, 4 oder 8 Bits umfasst und als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Grau mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und alpha Farbkomponenten darstellen; jeder ist <em>D</em> Bits.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Mehrere Komprimierungsmethoden werden unterstützt, inklusive verlustbehafteter oder verlustfreier Algorithmen
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Durch die <a href="https://learn.microsoft.com/en-us/openspecs/dev_center/ms-devcentlp/1c24c7c8-28b0-4ce1-a47d-95fe1ff504bc">Microsoft Open Specification Promise</a> abgedeckt; obwohl Microsoft Patente an BMP hält, haben sie ein Versprechen veröffentlicht, ihre Patentrechte nicht geltend zu machen, solange bestimmte Bedingungen erfüllt sind. Dies ist jedoch nicht dasselbe wie eine Lizenz. BMP ist im Windows Metafile Format (<code>.wmf</code>) enthalten.
      </td>
    </tr>
  </tbody>
</table>

### GIF (Graphics Interchange Format)

1987 führte der Online-Dienstanbieter CompuServe das **[GIF](https://en.wikipedia.org/wiki/GIF)** (**Graphics Interchange Format**) ein, um ein komprimiertes Grafikformat bereitzustellen, das alle Mitglieder ihres Dienstes verwenden könnten. GIF verwendet den [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/Lempel-Ziv-Welch) (LZW)-Algorithmus, um 8-Bit indizierte Farbgrafiken verlustfrei zu komprimieren. GIF war eines der ersten beiden Grafikformate, die von {{Glossary("HTML", "HTML")}} unterstützt wurden, zusammen mit [XBM](#xbm_x_window_system_bitmap_file).

Jedes Pixel in einem GIF wird durch einen einzigen 8-Bit-Wert repräsentiert, der als Index in eine Palette von 24-Bit-Farben dient (8 Bits jeweils für Rot, Grün und Blau). Die Länge einer Farbtafel ist immer eine Potenz von 2 (d.h. jede Palette hat 2, 4, 8, 16, 32, 64 oder 256 Einträge). Um mehr als 255 oder 256 Farben zu simulieren, wird generell [Dithering](https://en.wikipedia.org/wiki/Dithering) verwendet. Es ist [technisch möglich](https://gif.ski/), mehrere Bildblöcke zu kacheln, die jeweils ihre eigene Farbpalette haben, um echte Farb-Bilder zu erstellen, aber in der Praxis wird dies selten gemacht.

Pixel sind undurchsichtig, es sei denn, ein bestimmter Farbindex wird als transparent bezeichnet, in welchem Fall Pixel mit diesem Wert vollständig transparent sind.

GIF unterstützt einfache Animationen, bei denen nach einem ersten vollständigen Rahmen eine Reihe von Bildern bereitgestellt wird, die die Teile des Bildes widerspiegeln, die sich mit jedem Rahmen ändern.

GIF ist seit Jahrzehnten äußerst populär, aufgrund seiner Einfachheit und Kompatibilität. Die unterstützte Animation führte zu einer Wiederbelebung seiner Popularität im sozialen Medienzeitalter, als animierte GIFs weit verbreitet wurden, um kurze "Videos", Memes und andere einfache Animationssequenzen bereitzustellen.

Ein weiteres beliebtes Feature von GIF ist die Unterstützung von [Interlacing](<https://en.wikipedia.org/wiki/Interlacing_(bitmaps)>), bei der Pixelreihen außer der Reihe gespeichert werden, sodass teilweise empfangene Dateien in niedrigerer Qualität angezeigt werden können. Dies ist besonders nützlich, wenn Netzwerkverbindungen langsam sind.

GIF ist eine gute Wahl für einfache Bilder und Animationen, obwohl das Konvertieren von Vollfarbbildern in GIF zu unbefriedigendem Dithering führen kann. Typischerweise sollte moderner Inhalt [PNG](#png_portable_network_graphics) für verlustfreie _und_ indizierte Standbilder verwenden und sollte erwägen, [APNG](#apng_animated_portable_network_graphics) für verlustfreie Animationssequenzen zu verwenden.

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
              <th scope="row">Grau</th>
              <td><em>n/a</em></td>
              <td>GIF enthält kein dediziertes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine True Color-Pixel.</td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>8</td>
              <td>
                Jede Farbe in einer GIF-Palette wird als 8 Bits jeweils Rot, Grün und Blau definiert (insgesamt 24 Bits pro Pixel).
              </td>
            </tr>
            <tr>
              <th scope="row">Grau mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF bietet kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td><em>n/a</em></td>
              <td>GIF unterstützt keine True Color-Pixel.</td>
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
        Obwohl das GIF-Format selbst offen ist, war der LZW-Komprimierungsalgorithmus bis Anfang der 2000er Jahre durch Patente abgedeckt. Seit dem 7. Juli 2004 sind alle relevanten Patente abgelaufen und das GIF-Format kann frei genutzt werden
      </td>
    </tr>
  </tbody>
</table>

### ICO (Microsoft Windows Icon)

Das ICO (Microsoft Windows Icon)-Dateiformat wurde von Microsoft für Desktop-Symbole der Windows-Systeme entwickelt. Frühere Versionen des Internet Explorer führten jedoch die Möglichkeit ein, dass eine Website eine ICO-Datei namens `favicon.ico` im Stammverzeichnis einer Website bereitstellen kann, um ein **[Favicon](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)** festzulegen — ein Symbol, das im Menü "Favoriten" und an anderen Stellen angezeigt wird, an denen eine symbolische Darstellung der Website nützlich wäre.

Eine ICO-Datei kann mehrere Symbole enthalten und beginnt mit einem Verzeichnis, das Details zu jedem auflistet. Nach dem Verzeichnis folgen die Daten für die Symbole. Die Daten jedes Symbols können entweder ein [BMP](#bmp_bitmap_file)-Bild ohne Dateikopf sein oder ein vollständiges [PNG](#png_portable_network_graphics)-Bild (einschließlich des Dateikopfs). Wenn Sie ICO-Dateien verwenden, sollten Sie das BMP-Format verwenden, da die Unterstützung für PNG innerhalb von ICO-Dateien erst mit Windows Vista hinzugefügt wurde und möglicherweise nicht gut unterstützt wird.

> [!WARNING]
> ICO-Dateien _sollten nicht_ in Webinhalten verwendet werden. Darüber hinaus hat ihre Verwendung für Favicons nachgelassen zugunsten der Verwendung einer PNG-Datei und des {{HTMLElement("link")}}-Elements, wie in [Bereitstellen von Symbolen für verschiedene Nutzungskontexte](/de/docs/Web/HTML/Reference/Elements/link#providing_icons_for_different_usage_contexts) beschrieben.

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
              <th scope="row">Grau</th>
              <td>1</td>
              <td>
                Jedes Bit repräsentiert ein einzelnes Pixel, das entweder schwarz oder weiß sein kann.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei Werte dargestellt, die die roten, grünen und blauen Farbkomponenten darstellen; jeder ist <em>D</em> Bits.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>2, 4 und 8</td>
              <td>
                Jedes Pixel wird durch einen Wert dargestellt, der entweder 2, 4 oder 8 Bits umfasst und als Index in die Farbtabelle dient.
              </td>
            </tr>
            <tr>
              <th scope="row">Grau mit Alpha</th>
              <td><em>n/a</em></td>
              <td>BMP hat kein eigenes Graustufenformat.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch vier Werte dargestellt, die die roten, grünen, blauen und alpha Farbkomponenten darstellen; jeder ist <em>D</em> Bits.
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
              <th scope="row">Grau</th>
              <td>1, 2, 4, 8, und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenbild-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte dargestellt, die den Pegel der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4, und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die sich in einem <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>-Chunk in der APNG-Datei befindet; die Farben in der Palette haben alle eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Grau mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die Intensität des Graustufenpixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
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
      <th scope="row">Komprimierung</th>
      <td>
        BMP-Format-Symbole verwenden fast immer verlustfreie Komprimierung, aber verlustbehaftete Methoden sind verfügbar. PNG-Symbole werden immer verlustfrei komprimiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>—</td>
    </tr>
  </tbody>
</table>

### JPEG (Joint Photographic Experts Group Image)

Das {{Glossary("JPEG", "JPEG")}} (in der Regel als "**Jay-peg**" ausgesprochen) Bildformat ist derzeit das am weitesten verbreitete verlustbehaftete Komprimierungsformat für Standbilder. Es ist besonders nützlich für Fotografien; die Anwendung verlustbehafteter Komprimierung auf Inhalte, die Schärfe erfordern, wie Diagramme oder Diagramme, kann zu unbefriedigenden Ergebnissen führen.

JPEG ist tatsächlich ein Datenformat für komprimierte Fotos, anstatt eines Dateityps. Die JFIF (**J**PEG **F**ile **I**nterchange **F**ormat)-Spezifikation beschreibt das Format der Dateien, die wir als "JPEG"-Bilder betrachten.

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
              <th scope="row">Grau</th>
              <td><em>n/a</em></td>
              <td>True Grey kann mit dem einzelnen Luma-Kanal (Y) unterstützt werden.</td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
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
              <th scope="row">Grau mit Alpha</th>
              <td><em>n/a</em></td>
              <td>JPEG unterstützt keinen Alpha-Kanal.</td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
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

Das {{Glossary("PNG", "PNG")}} (ausgesprochen "**ping**") Bildformat verwendet verlustfreie Komprimierung, unterstützt dabei höhere Farbtiefen als [GIF](#gif_graphics_interchange_format) und ist effizienter, sowie bietet volle Alpha-Transparenzunterstützung.

PNG wird weitgehend unterstützt, und alle großen Browser bieten vollständige Unterstützung für seine Funktionen.

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
              <th scope="row">Grau</th>
              <td>1, 2, 4, 8, und 16</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenbild-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch drei <em>D</em>-Bit-Werte
                dargestellt, die den Pegel der roten, grünen und blauen Farbkomponenten angeben.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>1, 2, 4, und 8</td>
              <td>
                Jedes Pixel ist ein <em>D</em>-Bit-Wert, der einen Index in eine Farbpalette angibt, die sich in einem
                <code><a href="https://w3c.github.io/png/#11PLTE">PLTE</a></code>
                -Chunk in der APNG-Datei befindet. Die Farben in der Palette alle verwenden eine 8-Bit-Tiefe.
              </td>
            </tr>
            <tr>
              <th scope="row">Grau mit Alpha</th>
              <td>8 und 16</td>
              <td>
                Jedes Pixel wird durch zwei <em>D</em>-Bit-Werte dargestellt: die
                Intensität des Graustufenbild-Pixels und eine Alpha-Probe, die angibt, wie undurchsichtig das Pixel ist.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
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
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei, optional indizierte Farbe wie GIF</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2003 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>), Alle Rechte vorbehalten. W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marke</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a> Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### SVG (Scalable Vector Graphics)

[SVG](/de/docs/Web/SVG) ist ein auf {{Glossary("XML", "XML")}} basierendes [Vektorgraphikformat](https://en.wikipedia.org/wiki/Vector_graphics), das den Inhalt eines Bildes als eine Reihe von Zeichenbefehlen spezifiziert, die Formen, Linien einfügen, Farben, Filter und so weiter anwenden. SVG-Dateien sind ideal für Diagramme, Symbole und andere Bilder, die in jeder Größe genau gezeichnet werden können. Als solches ist SVG beliebt für Benutzeroberflächenelemente im modernen Webdesign.

SVG-Dateien sind Textdateien, die Quellcode enthalten, der, wenn er interpretiert wird, das gewünschte Bild zeichnet. Zum Beispiel definiert dieses Beispiel einen Zeichenbereich mit einer anfänglichen Größe von 100 mal 100 Einheiten, der eine Linie enthält, die diagonal durch das Quadrat gezeichnet wird:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
</svg>
```

SVG kann in Webinhalten auf drei Arten verwendet werden:

1. Ein {{SVGElement("svg")}}-Element kann direkt innerhalb des HTML erscheinen. Es kann [SVG-Elemente](/de/docs/Web/SVG/Reference/Element) enthalten, um das Bild zu zeichnen.
2. Ein SVG-Bild kann in HTML mit Elementen wie {{HTMLElement("iframe")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} eingebettet werden.
3. Es ist möglich, SVG-Bilder überall dort zu verwenden, wo auch andere Bildtypen verwendet werden können, einschließlich mit dem {{HTMLElement("img")}}-Element, der CSS-Eigenschaft {{cssxref("background-image")}}, und so weiter. Es gibt jedoch [zusätzliche Einschränkungen](/de/docs/Web/SVG/Guides/SVG_as_an_image), wenn SVG auf diese Weise verwendet wird.

SVG ist eine ideale Wahl für Bilder, die mit einer Reihe von Zeichenbefehlen dargestellt werden können, insbesondere wenn die Größe, in der das Bild dargestellt wird, unbekannt ist oder variieren kann, da SVG nahtlos auf die gewünschte Größe skaliert. Es ist generell nicht nützlich für rein bitmapbasierte oder fotografische Bilder, obwohl es möglich ist, Bitmuster innerhalb einer SVG zu inkludieren.

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
        <a href="/de/docs/Web/CSS/color_value">CSS-Farbsyntax</a> spezifiziert.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        SVG-Quellcode kann während des Transports mit <a href="/de/docs/Web/HTTP/Guides/Compression">HTTP-Komprimierung</a> Techniken komprimiert werden, oder auf der Festplatte als eine <code>.svgz</code>-Datei.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        ©2018 <a href="https://www.w3.org/">W3C</a> (<a href="https://www.csail.mit.edu/">MIT</a>, <a href="https://www.ercim.eu/">ERCIM</a>, <a href="https://www.keio.ac.jp/">Keio</a>, <a href="https://ev.buaa.edu.cn/">Beihang</a>), Alle Rechte Vorbehalten.
        W3C <a href="https://www.w3.org/policies/#disclaimers">Haftung</a>, <a href="https://www.w3.org/policies/#trademarks">Marke</a>, <a href="https://www.w3.org/copyright/document-license/">Dokumentennutzung</a> und <a href="https://www.w3.org/copyright/software-license/">Softwarelizenzierung</a> Regeln gelten. Keine bekannten lizenzpflichtigen Patente.
      </td>
    </tr>
  </tbody>
</table>

### TIFF (Tagged Image File Format)

[TIFF](https://en.wikipedia.org/wiki/TIFF) ist ein Rastergrafikdateiformat, das erstellt wurde, um gescannte Fotos zu speichern, obwohl es jede Art von Bild sein kann. Es ist ein eher "schweres" Format, da TIFF-Dateien dazu neigen, größer zu sein als Bilder in anderen Formaten. Dies liegt an den oft enthaltenen Metadaten sowie der Tatsache, dass die meisten TIFF-Bilder entweder unkomprimiert sind oder Komprimierungsalgorithmen verwenden, die nach der Komprimierung immer noch relativ große Dateien zurücklassen.

TIFF unterstützt eine Vielzahl von Komprimierungsmethoden, aber die am häufigsten verwendeten sind die CCITT Group 4 (und, für ältere Faxsysteme, Group 3) Komprimierungssysteme, die von Faxsoftware verwendet werden, sowie die LZW- und verlustbehaftete JPEG-Komprimierung.

Jeder Wert in einer TIFF-Datei wird unter Verwendung seiner **Tag** (angibt, um welche Art von Information es sich handelt, wie z.B. die Breite des Bildes) und seines **Type** (gibt das Format an, in dem die Daten gespeichert sind) spezifiziert, gefolgt von der Länge des Arrays von Werten, die diesem Tag zugeordnet werden sollen (alle Eigenschaften werden in Arrays gespeichert, auch für Einzelwerte). Dadurch ist es möglich, verschiedene Datentypen für dieselben Eigenschaften zu verwenden. Zum Beispiel wird die Breite eines Bildes, `ImageWidth`, mit dem Tag `0x0100` gespeichert und ist ein Array mit einem Eintrag. Durch die Angabe des Typs 3 (`SHORT`) wird der Wert von `ImageWidth` als 16-Bit-Wert gespeichert:

| Tag                     | Typ                | Größe                    | Wert                 |
| ----------------------- | ------------------ | ------------------------ | -------------------- |
| `0x0100` (`ImageWidth`) | `0x0003` (`SHORT`) | `0x00000001` (1 Eintrag) | `0x0280` (640 Pixel) |

Durch die Angabe des Typs 4 (`LONG`) wird die Breite als 32-Bit-Wert gespeichert:

| Tag                     | Typ               | Größe                    | Wert                     |
| ----------------------- | ----------------- | ------------------------ | ------------------------ |
| `0x0100` (`ImageWidth`) | `0x0004` (`LONG`) | `0x00000001` (1 Eintrag) | `0x00000280` (640 Pixel) |

Eine einzige TIFF-Datei kann mehrere Bilder enthalten. Dies kann verwendet werden, um mehrseitige Dokumente darzustellen, zum Beispiel (wie bei einem mehrseitig gescannten Dokument oder einem empfangenen Fax). Software, die TIFF-Dateien liest, ist jedoch nur verpflichtet, das erste Bild zu unterstützen.

TIFF unterstützt eine Vielzahl von Farbräumen, nicht nur RGB. Dazu gehören CMYK, YCbCr und andere, was TIFF zu einer guten Wahl für die Speicherung von Bildern macht, die für Druck-, Film- oder Fernsehmedien vorgesehen sind.

Mit Ausnahme von Safari unterstützen Browser TIFF-Bilder in Webinhalten nicht nativ, es sei denn unter Verwendung spezieller Bibliotheken oder Browser-Add-Ons. Daher werden TIFF-Dateien nicht allgemein für die Anzeige von Webinhalten verwendet, _aber_ es ist üblich, herunterladbare TIFF-Dateien bereitzustellen, wenn Fotos und andere Kunstwerke verteilt werden, die für präzises Bearbeiten oder Drucken bestimmt sind.

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
                Ein Bilevel-TIFF speichert 8 Bits in jedem Byte, ein Bit pro Pixel.
                Das <code>PhotometricInterpretation</code>-Feld gibt an, welche von 0 und 1 schwarz und welches weiß ist.
              </td>
            </tr>
            <tr>
              <th scope="row">Grau</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel besteht aus einem einzigen <em>D</em>-Bit-Wert, der die Helligkeit des Graustufenbild-Pixels angibt.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color</th>
              <td>8</td>
              <td>
                Alle True Color-RGB-Bilder werden mit 8 Bits jeweils Rot, Grün und Blau gespeichert.
              </td>
            </tr>
            <tr>
              <th scope="row">Indizierte Farbe</th>
              <td>4 und 8</td>
              <td>
                Jedes Pixel ist ein Index in einem <code>ColorMap</code>-Datensatz, der die im Bild verwendeten Farben definiert.
                Die Farbkarte listet zunächst alle roten Werte auf, dann alle grünen Werte, dann alle blauen Werte (anstatt <code>rgb, rgb, rgb…</code>).
              </td>
            </tr>
            <tr>
              <th scope="row">Grau mit Alpha</th>
              <td>4 und 8</td>
              <td>
                Alphainformationen werden hinzugefügt, indem angegeben wird, dass mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld vorhanden sind und die Art von Alpha (1 für eine verbundene, vor-multiplizierte Alphakomponente und 2 für unverbundenes Alpha - eine separate Matte) angegeben wird; jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und könnten vom Benutzersoftware nicht unterstützt werden.
              </td>
            </tr>
            <tr>
              <th scope="row">True Color mit Alpha</th>
              <td>8</td>
              <td>
                Alphainformationen werden hinzugefügt, indem angegeben wird, dass mehr als 3 Proben pro Pixel im <code>SamplesPerPixel</code>-Feld vorhanden sind und die Art von Alpha (1 für eine verbundene, vor-multiplizierte Alphakomponente und 2 für unverbundenes Alpha - eine separate Matte) angegeben wird; jedoch werden Alphakanäle selten in TIFF-Dateien verwendet und könnten vom Benutzersoftware nicht unterstützt werden.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>
        Die meisten TIFF-Dateien sind unkomprimiert, aber verlustfreie PackBits und LZW-Komprimierung werden unterstützt, ebenso wie verlustbehaftete JPEG-Komprimierung.
      </td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>
        Keine Lizenz erforderlich (abgesehen von allen mit Bibliotheken, die Sie möglicherweise verwenden); alle bekannten Patente sind abgelaufen.
      </td>
    </tr>
  </tbody>
</table>

### WebP-Bild

WebP unterstützt verlustbehaftete Komprimierung über prädiktive Kodierung, basierend auf dem VP8-Video-Codec, und verlustfreie Komprimierung, die Ersetzungen für sich wiederholende Daten verwendet. Verlustbehaftete WebP-Bilder sind im Durchschnitt 25–35% kleiner als visuell ähnliche JPEG-Bilder. Verlustfreie WebP-Bilder sind typischerweise 26% kleiner als dieselben Bilder im PNG-Format.

WebP unterstützt auch Animation: In einer verlustbehafteten WebP-Datei werden die Bilddaten durch einen VP8-Bitstream dargestellt, der mehrere Frames enthalten kann. Verlustfreies WebP enthält den `ANIM`-Chunk, der die Animation beschreibt, und den `ANMF`-Chunk, der einen Frame einer Animationssequenz darstellt. Schleifen wird unterstützt.

WebP hat nun breite Unterstützung in den neuesten Versionen gängiger Webbrowser, obwohl es keine tiefgreifende historische Unterstützung hat. Bieten Sie einen Rückfall in entweder [JPEG](#jpeg_joint_photographic_experts_group_image)- oder [PNG](#png_portable_network_graphics)-Format an, z. B. mit dem [das `<picture>`-Element](/de/docs/Web/HTML/Reference/Elements/picture).

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
          <a href="https://developers.google.com/speed/webp/docs/riff_container">RIFF-Container-Spezifikation</a><br />{{RFC(6386, "VP8-Datenformat und Dekodierungsanleitung")}} (verlustbehaftete Kodierung)<br /><a href="https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification">WebP-Verlustfreie Bitstream-Spezifikation</a>
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser-Kompatibilität</th>
      <td>
        Alle Versionen von Chrome, Edge, Firefox, Opera und Safari <p>WebP kann auch für <em>Export</em> Bilder aus einem Canvas verwendet werden. Siehe <a href="/de/docs/Web/API/HTMLCanvasElement/toBlob#browser_compatibility"><code>HTMLCanvasElement.toBlob()</code></a> für detailliertere Unterstützungsversionsinformationen.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Maximale Abmessungen</th>
      <td>16.383×16.383 Pixel</td>
    </tr>
    <tr>
      <th scope="row">Unterstützte Farbmodi</th>
      <td>
        Verlustbehaftete WebP speichert das Bild im 8-Bit Y'CbCr 4:2:0 (YUV420) Format. Verlustfreie WebP verwendet 8-Bit ARGB Farbe, wobei jede Komponente 8 Bits für insgesamt 32 Bits pro Pixel einnimmt.
      </td>
    </tr>
    <tr>
      <th scope="row">Komprimierung</th>
      <td>Verlustfrei (Huffman, LZ77 oder Farb-Cache-Codes) oder verlustbehaftet (VP8).</td>
    </tr>
    <tr>
      <th scope="row">Lizenzierung</th>
      <td>Keine Lizenz erforderlich; Quellcode ist offen verfügbar.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Safari für macOS hängt die Unterstützung für WebP sowohl von den Safari- als auch macOS-Versionen ab. Sie benötigen Safari 14 oder neuer sowie macOS Big Sur (11) oder eine neuere Version.

### XBM (X Window System Bitmap-Datei)

XBM (X Bitmap)-Dateien waren die ersten, die im Web unterstützt wurden, werden jedoch nicht mehr verwendet und sollten vermieden werden, da ihr Format potenzielle Sicherheitsbedenken birgt. Moderne Browser haben XBM-Dateien seit vielen Jahren nicht mehr unterstützt, aber wenn Sie mit älteren Inhalten zu tun haben, könnten Sie dennoch einige davon finden.

XBM verwendet ein Stück C-Code, um den Inhalt des Bildes als ein Array von Bytes darzustellen. Jedes Bild besteht aus 2 bis 4 `#define` Direktiven, die die Breite und Höhe des Bitmaps (und optional den Hotspot, wenn das Bild als Cursor ausgelegt ist) angeben, gefolgt von einem Array von `unsigned char`, wobei jeder Wert 8 1-Bit-Schwarz-Weiß-Pixel enthält.

Das Bild muss ein Vielfaches von 8 Pixeln breit sein. Zum Beispiel stellt der folgende Code ein XBM-Bild dar, das 8 Pixel mal 8 Pixel groß ist, mit diesen Pixeln in einem schwarz-weißen Schachbrettmuster:

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
              <th scope="row">Grau</th>
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
              <th scope="row">Grau mit Alpha</th>
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

Die Auswahl des besten Bildformats für Ihre Bedürfnisse ist wahrscheinlich einfacher als bei Videoformaten, da es weniger Optionen mit breiter Unterstützung gibt und jedes eine spezifische Reihe von Anwendungsfällen hat.

### Fotografien

Fotografien eignen sich in der Regel gut für verlustbehaftete Kompression (abhängig von der Konfiguration des Encoders).
Dies macht [JPEG](#jpeg_joint_photographic_experts_group_image) und [WebP](#webp-bild) zu guten Optionen für Fotografien, wobei JPEG kompatibler ist, während WebP möglicherweise eine bessere Kompression bietet.
Um die Qualität zu maximieren und die Downloadzeit zu minimieren, ziehen Sie in Betracht, beide [mit einem Fallback](#bereitstellung_von_bild-fallbacks) anzubieten, wobei WebP die erste Wahl ist und JPEG die zweite.
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

Für kleinere Bilder wie Symbole verwenden Sie ein verlustfreies Format, um Detailverluste in einem größenbeschränkten Bild zu vermeiden.
Obwohl verlustfreies WebP für diesen Zweck ideal ist, ist die Unterstützung noch nicht weit verbreitet, daher ist PNG die bessere Wahl, es sei denn, Sie bieten ein [Fallback](#bereitstellung_von_bild-fallbacks) an.
Wenn Ihr Bild weniger als 256 Farben enthält, ist GIF eine Option, obwohl PNG oft noch kleiner mit seiner indizierten Kompressionsoption (PNG-8) komprimiert.

Wenn das Symbol mit Vektorgrafiken dargestellt werden kann, ziehen Sie [SVG](#svg_scalable_vector_graphics) in Betracht, da es über verschiedene Auflösungen und Größen skaliert und somit perfekt für responsives Design geeignet ist.
Obwohl die SVG-Unterstützung gut ist, kann es sich lohnen, ein PNG-Fallback für ältere Browser anzubieten.

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

Sofern Sie nicht bereit sind, bei der Qualität Kompromisse einzugehen, sollten Sie ein verlustfreies Format für Screenshots verwenden.
Dies ist besonders wichtig, wenn Text in Ihrem Screenshot enthalten ist, da Text unter verlustbehafteter Kompression schnell verschwommen und unklar wird.

PNG ist wahrscheinlich die beste Wahl, aber verlustfreies WebP wird wahrscheinlich besser komprimiert sein.

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
Wenn Sie sich für ein verlustbehaftetes Format wie JPEG oder verlustbehaftetes WebP entscheiden, sollten Sie das Kompressionsniveau sorgfältig abwägen, um zu vermeiden, dass Text oder andere Formen verschwommen oder unklar werden.

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

Während das standardmäßige HTML-{{HTMLElement("img")}}-Element keine Kompatibilitäts-Fallbacks für Bilder unterstützt, tut es das {{HTMLElement("picture")}}-Element.
`<picture>` wird als Wrapper für eine Anzahl von {{HTMLElement("source")}}-Elementen verwendet, von denen jedes eine Version des Bildes in einem anderen Format oder unter verschiedenen [Medienbedingungen](/de/docs/Web/CSS/@media) angibt, sowie ein `<img>`-Element, das definiert, wo das Bild angezeigt werden soll und das Fallback auf die Standard- oder "kompatibelste" Version.

Zum Beispiel, wenn Sie ein Diagramm anzeigen, das am besten mit SVG angezeigt wird, aber ein Fallback auf ein PNG oder GIF des Diagramms anbieten möchten, würden Sie so etwas machen:

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

Sie können so viele `<source>`-Elemente angeben, wie Sie möchten, obwohl typischerweise 2 oder 3 ausreichen.

## Siehe auch

- [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Guides/Formats)
- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Videocodecs, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats/Video_codecs)
- Die {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elemente
- Die CSS-{{cssxref("background-image")}}-Eigenschaft
- Der [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)-Konstruktor und die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle
